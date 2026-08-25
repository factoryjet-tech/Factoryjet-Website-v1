import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import './ai-seo.css';

const CANONICAL = 'https://factoryjet.com/uk/ai-seo';
const UPDATED = '2026-08-24';
const UPDATED_LABEL = '24 August 2026';

/* ─── Breadcrumb source of truth (drives the visible trail + JSON-LD) ── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'AI SEO Agency UK', url: CANONICAL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
};

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',    label: 'AI SEO basics' },
  { key: 'ai-search', label: 'SEO vs AI search' },
  { key: 'how',       label: 'How it works' },
  { key: 'results',   label: 'Results & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── AI SEO basics ──
  { category: 'basics', question: 'What is AI SEO?',
    answer: 'AI SEO is the work of getting a business found in both traditional Google results and AI answers from tools like ChatGPT, Gemini, Perplexity, and Google AI Overviews. It combines classic SEO with two newer disciplines: generative engine optimisation, which shapes how AI models describe you, and answer engine optimisation, which structures your pages so an engine can lift a clear answer straight from them.' },
  { category: 'basics', question: 'What is the difference between AEO and SEO?',
    answer: 'SEO aims to rank your page in a list of blue links. Answer engine optimisation, or AEO, aims to get your answer quoted directly inside an AI summary or a featured snippet, often without a click. The two overlap, because both reward clear structure, real expertise, and trustworthy sources. AI SEO does both at once rather than treating them as separate jobs.' },
  { category: 'basics', question: 'What is generative engine optimisation?',
    answer: 'Generative engine optimisation, or GEO, is the practice of influencing how generative AI engines represent and cite your business. It covers the entity data, schema, wording, and third-party mentions that a model reads when it decides which brands to name in an answer. Where SEO targets a ranking, GEO targets a mention inside the generated response itself.' },
  { category: 'basics', question: 'What are the four types of SEO?',
    answer: 'Most teams split SEO into four parts: on-page SEO, which is your content and page structure; technical SEO, which is speed, crawling, and indexing; off-page SEO, which is links and reputation; and local SEO, which is maps and location searches. AI SEO adds a fifth layer on top: making all four legible to AI engines and answer boxes.' },

  { category: 'basics', question: 'Is AEO the same as GEO?',
    answer: 'No, though they overlap. Answer engine optimisation is about the shape of your page: stating the answer plainly, using question-style headings, and adding schema so an engine can lift a clean answer straight from it. Generative engine optimisation is about your standing off the page: entity clarity, credible mentions, and the wording that decides whether a model names your brand. AEO makes you quotable. GEO gets you chosen.' },
  { category: 'basics', question: 'How does pricing work for AI SEO in the UK?',
    answer: 'We scope the work rather than sell packages, because a local firm chasing a handful of prompts and a national brand fighting for a whole category are different jobs. Engagements take one of three shapes: a one-off audit, fixed-price milestones for foundation work, or a monthly retainer where content and authority need to compound. You get the shape and the figure in writing after the free visibility check, before anything starts.' },

  // ── SEO vs AI search ──
  { category: 'ai-search', question: 'Is GEO replacing SEO?',
    answer: 'No. Generative engine optimisation sits on top of SEO, it does not replace it. AI engines like ChatGPT and Perplexity still learn from the open web, and Google AI Overviews are built on the same index that ranks normal results. A page that is well optimised for search is the raw material an AI answer draws from, so the two reinforce each other.' },
  { category: 'ai-search', question: 'Is SEO dead in 2026?',
    answer: 'No, but the payoff has shifted. Ofcom reports that around 30 percent of UK searches now show an AI Overview. Pew Research Center, tracking US browsing, found people clicked a result roughly 8 percent of the time when an AI summary appeared against 15 percent when it did not. Being named inside the answer now matters as much as ranking below it, which is exactly what AI SEO targets.' },
  { category: 'ai-search', question: 'Is SEO going away with AI?',
    answer: 'The click is getting rarer, the visibility is not. Ofcom found that 53 percent of UK adults say they often see AI summaries in their search results, and that ChatGPT drew 1.8 billion UK visits in the first eight months of 2025. A growing share of buyers form an opinion inside an AI answer before they ever reach your site. The winners are businesses structured to be quoted there. That is a change in method, not the end of search.' },
  { category: 'ai-search', question: 'Can ChatGPT do SEO?',
    answer: 'ChatGPT can help write and audit content, but it cannot make an engine trust or cite your business. That comes from real expertise, structured pages, schema, and credible mentions across the web. We use AI tools to move faster, then do the parts a chatbot cannot: the entity work, the technical setup, and the third-party authority that decides whether you get named.' },
  { category: 'ai-search', question: 'Is ChatGPT an answer engine?',
    answer: 'Yes. ChatGPT, Perplexity, and Google AI Overviews are answer engines: they return a written answer rather than only a list of links. That is why answer engine optimisation exists. If your page states the answer plainly, backs it with sources, and is easy for a crawler to read, it is far more likely to be the source the engine quotes.' },

  { category: 'ai-search', question: 'What does Google say about ranking in AI Overviews?',
    answer: 'Google states in its own Search Central documentation that there are no additional requirements to appear in AI Overviews or AI Mode, and no special optimisations necessary. Ordinary SEO best practice is the qualification. That is worth knowing, because it makes any agency selling a proprietary AI ranking trick easy to dismiss. The real work is doing the fundamentals properly and making them readable by a machine.' },

  // ── How it works ──
  { category: 'how', question: 'How do you get a business cited by ChatGPT and Perplexity?',
    answer: 'We make your business the easiest correct answer to find and quote. That means clear entity data and schema so engines know who you are, answer-first content that states the point in the first two lines, question-style headings that match how people ask, and credible mentions on sites the models already trust. We also make sure AI crawlers such as GPTBot and PerplexityBot can actually read your pages.' },
  { category: 'how', question: 'How do you rank in Google AI Overviews?',
    answer: 'AI Overviews pull from pages that already rank well and answer the query cleanly. We target the questions that trigger an overview, write a direct answer near the top of the page, add FAQ and how-to structured data, and cite real sources. Strong topical depth and fast, crawlable pages then give Google the confidence to feature you inside the summary.' },
  { category: 'how', question: 'Does schema markup help with AI search?',
    answer: 'Yes. Schema is structured data that tells an engine what a page is: an FAQ, a service, a product, an organisation, a review. It removes guesswork for both Google and AI models, which makes your facts easier to lift into an answer. Every page we optimise ships with the right schema in the server-rendered HTML, so AI crawlers see it without running JavaScript.' },
  { category: 'how', question: 'How do you measure AI visibility?',
    answer: 'We track three things: whether your brand is named in AI answers for the prompts your buyers use, how often you appear in Google AI Overviews and featured snippets, and the organic traffic and enquiries that follow. We run the prompts your customers would run across ChatGPT, Gemini, and Perplexity, log where you show up, and report the gap we are closing month on month.' },
  { category: 'how', question: 'Is AI-generated content bad for SEO?',
    answer: 'It is not banned, but thin AI content that says nothing new gets ignored by both Google and AI engines. What wins is genuine expertise, specifics, and a clear point of view that a model wants to quote. We use AI to draft and speed things up, then add the real experience, data, and editing that make a page worth citing rather than one of a thousand identical ones.' },

  { category: 'how', question: 'Do I need a separate GEO agency as well as an SEO agency?',
    answer: 'No, and splitting them usually wastes money. Generative engine optimisation draws on the same content, schema and authority that traditional SEO builds, so two suppliers end up briefing each other and duplicating the same audit. One team running both means the entity work, the page structure and the link building all point the same way. If your current agency is not measuring AI visibility, ask them to before you hire a second one.' },

  // ── Results & working with us ──
  { category: 'results', question: 'How long does AI SEO take to work?',
    answer: 'Technical and schema fixes can change how engines read you within weeks. Getting consistently named in AI answers and climbing into AI Overviews usually takes a few months, because it depends on content depth and third-party trust that build over time. We front-load the fast wins so you see movement early, then compound it.' },
  { category: 'results', question: 'Will AI SEO work for a small business?',
    answer: 'Often better than for a large one. AI engines reward clear, specific, trustworthy answers, and a focused small business can be far more precise about what it does than a sprawling competitor. We pick the questions where you can realistically be the best answer, then make you the source engines reach for on those.' },
  { category: 'results', question: 'Do I still need traditional SEO if I do GEO?',
    answer: 'Yes. Generative engine optimisation draws on the same content and authority that traditional SEO builds, so dropping one weakens the other. We run them as one programme: the on-page, technical, and link work that earns rankings is the same foundation that gets you quoted in AI answers. You are not choosing between them.' },
  { category: 'results', question: 'Which AI engines should my business show up in?',
    answer: 'Start with the ones your buyers actually use. In the UK that means ChatGPT first, then Google AI Overviews and Gemini, with Perplexity growing fast among researchers and professionals. We map which engines your customers lean on for your kind of decision, then prioritise the work so you show up where it converts, not everywhere at once.' },
  { category: 'results', question: 'Are you a UK AI SEO agency, and do you work outside London?',
    answer: 'Yes. We are a UK AI SEO agency working with businesses across London, Manchester, Birmingham, Leeds, Bristol, and beyond. Search and AI visibility are handled remotely with regular video reviews, so a company anywhere in the UK gets the same senior team and the same standard of work.' },
  { category: 'results', question: 'How is AI SEO different from a traditional SEO agency?',
    answer: 'A traditional SEO agency optimises to rank in the ten blue links. We optimise for that and for the AI answers now sitting above them. That means entity and schema work, content structured to be quoted, and tracking of whether ChatGPT and AI Overviews actually name you. If an agency is not measuring AI visibility, it is working to a 2019 version of search.' },
  { category: 'results', question: 'What should I look for in a UK AI SEO agency?',
    answer: 'Ask four things. Can they show you where you are named in AI answers today, and the exact prompts they ran to find out. Do they ship schema in server-rendered HTML rather than adding it with JavaScript. Do they report AI mentions next to rankings and enquiries, not separately. And will they tell you when something is not worth doing. An agency that guarantees AI mentions is guessing.' },
  { category: 'results', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call, where we run a free AI visibility check on your business, show you where you appear in AI answers today, and map the gap. That first look is genuinely useful whether or not we end up working together.' },
];

/* ─── Named UK AI SEO / GEO agencies (open self-disclosure, ItemList) ─ */
const AI_SEO_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. An AI-native team that builds pages to rank in Google and to be quoted by ChatGPT, Gemini, Perplexity, and Google AI Overviews, with AI visibility tracked as a first-class metric.' },
  { name: 'Found', note: 'A large London performance agency with an established SEO practice and a strong link and PR footprint across the UK.' },
  { name: 'StudioHawk', note: 'An SEO-specialist agency that has expanded into the UK, known for technical and content SEO depth.' },
  { name: 'MRS Digital', note: 'A Hampshire-based digital agency offering SEO and content alongside wider performance marketing.' },
  { name: 'Sierra Six Media', note: 'A UK SEO agency that publishes actively on GEO and answer engine topics for small and mid-sized businesses.' },
  { name: 'Charle', note: 'A Shopify-focused agency in Bristol whose ecommerce SEO work overlaps with AI search for online stores.' },
];

/* ─── External stats (fetch-verified, cited on page) ──────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://factoryjet.com/#bhavesh-barot',
      name: 'Bhavesh Barot',
      jobTitle: 'Founder and Chief Technical Architect',
      url: 'https://factoryjet.com/about',
      worksFor: { '@id': 'https://factoryjet.com/#organization' },
      sameAs: [
        'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        'https://github.com/factoryjet-tech',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'AI SEO Agency UK',
      description:
        'How UK businesses get named in AI answers from ChatGPT, Gemini, Perplexity and Google AI Overviews, using answer engine optimisation and generative engine optimisation.',
      inLanguage: 'en-GB',
      dateModified: UPDATED,
      isPartOf: { '@id': 'https://factoryjet.com/#organization' },
      author: { '@id': 'https://factoryjet.com/#bhavesh-barot' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      primaryImageOfPage: { '@type': 'ImageObject', url: 'https://factoryjet.com/images/uk/ai-seo-og.webp' },
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI SEO Agency UK',
      serviceType: 'AI SEO, answer engine optimisation and generative engine optimisation',
      description:
        'Search and AI visibility work for UK businesses: entity and schema foundations, answer-first content, AI crawler access, traditional Google rankings and AI visibility measurement across ChatGPT, Gemini, Perplexity and Google AI Overviews.',
      url: CANONICAL,
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      audience: { '@type': 'BusinessAudience', name: 'UK small and mid-sized businesses' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI SEO engagement shapes',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'One-off AI visibility audit' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fixed-price foundation milestones' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monthly AI SEO retainer' } },
        ],
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UK AI SEO and GEO agencies',
      itemListElement: AI_SEO_AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      dateModified: UPDATED,
      isPartOf: { '@id': `${CANONICAL}#webpage` },
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'AI SEO Agency UK: AEO and GEO for AI Answers | FactoryJet',
  description:
    'FactoryJet is an AI SEO agency in the UK. We use answer engine optimisation (AEO) and generative engine optimisation (GEO) to get your business named in ChatGPT, Gemini, Perplexity and Google AI Overviews, while keeping your Google rankings. Free AI visibility check.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'AI SEO Agency UK: AEO and GEO for AI Answers | FactoryJet',
    description:
      'An AI SEO agency in the UK using answer engine optimisation and generative engine optimisation to get businesses named in ChatGPT, Gemini, Perplexity and Google AI Overviews. Free AI visibility check.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ai-seo-og.webp', width: 1200, height: 630, alt: 'AI SEO Agency UK by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function AiSeoUKPage() {
  return (
    <>
      <script id="ld-uk-ai-seo" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script id="ld-uk-ai-seo-breadcrumb" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="uk-aiseo">
      <main>
        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK AI SEO Agency</span>
                  <span className="chip">GEO + AEO</span>
                  <span className="chip">ChatGPT · Gemini · Perplexity</span>
                </div>
                <h1>AI SEO Agency UK: Get Your Business Named in AI Answers</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an AI SEO agency working with businesses across the UK. We keep you ranking in
                  Google and get you named inside the AI answers your buyers now read first, using answer engine
                  optimisation and generative engine optimisation built into every page.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects, AI-native since day one</span></div>
                  <div className="upd">Last updated<br /><time dateTime={UPDATED}>{UPDATED_LABEL}</time></div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ai_seo_hero" submitLabel="Get my free AI visibility check" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">What we optimise for</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Google AI Overviews</div><div className="scorecard-note">the summary above the links</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Cited</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">ChatGPT &amp; Gemini</div><div className="scorecard-note">named in the written answer</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Named</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Perplexity</div><div className="scorecard-note">listed as a source</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Sourced</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Google organic</div><div className="scorecard-note">the ten blue links, still ranked</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>Ranked</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Schema in server HTML</div><div className="scorecard-note">readable by GPTBot &amp; PerplexityBot</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)' }}>100%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does a UK AI SEO agency do?</span>
              <p>
                A UK AI SEO agency gets a business found in both ordinary Google results and the AI answers people
                now read first, from ChatGPT, Gemini, Perplexity and Google AI Overviews. The work has two halves.
                Answer engine optimisation, or AEO, structures your pages so an engine can lift a clear answer
                straight from them. Generative engine optimisation, or GEO, shapes the entity data, wording and
                third-party mentions that decide whether a model names your brand at all. Both sit on top of
                ordinary SEO rather than replacing it.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The shift that matters in 2026 is where the answer gets read. For years the goal was a high spot in a
              list of links. Now a growing share of buyers read a written answer at the top of the page, or ask a
              chatbot, and never scroll. The question is no longer only whether you rank. It is whether the engine
              names you when it writes the answer. That is the job AI SEO is built for.
            </p>
            <p className="lead mt-4" style={{ maxWidth: 920 }}>
              One thing worth saying plainly, because a lot of agencies will not: Google states in its own
              documentation that there are no additional requirements to appear in AI Overviews or AI Mode, and no
              special optimisations necessary. Anyone selling you a secret AI ranking trick is selling you nothing.
              What actually works is the ordinary discipline done properly and made legible to machines, which is
              what the rest of this page describes.
            </p>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className="col-4" style={{ gap: 20 }}>
              <div className="trust-pill"><span className="dot dot-orange" />Ranked in Google, quoted in AI answers</div>
              <div className="trust-pill"><span className="dot dot-orange" />Schema and entity work on every page</div>
              <div className="trust-pill"><span className="dot dot-orange" />AI visibility tracked, not guessed</div>
              <div className="trust-pill"><span className="dot dot-orange" />Senior team, founder on every account</div>
            </div>
          </div>
        </section>

        {/* ═══ 4. WHY IT MATTERS NOW (cited external stats) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Why AI SEO, why now</span>
                <h2>Buyers are reading the answer, not the links</h2>
                <div className="stack mt-6">
                  <p>
                    The way people search changed faster than most agencies did. Ofcom, the UK communications
                    regulator, reports that Google Search is used by 82 percent of UK adults and handles about 3
                    billion searches a month here. Roughly 30 percent of those searches now show an AI Overview, and
                    53 percent of adults say they see these summaries often. When the answer sits at the top of the
                    page, the ten blue links below it get read less.
                  </p>
                  <p>
                    The click gap is measurable. Pew Research Center tracked the real browsing of 900 US adults and
                    found they clicked a search result about 8 percent of the time when an AI summary appeared,
                    against 15 percent when it did not, roughly half as often. A source link inside the summary was
                    clicked in just 1 percent of visits. That study is American, so treat it as the direction of
                    travel rather than a UK measurement, but the feature and the behaviour it changes are the same
                    ones Ofcom is now recording here.
                  </p>
                  <p>
                    Meanwhile ChatGPT drew 1.8 billion UK visits in the first eight months of 2025, up from 368
                    million in the same period of 2024. Your next customer may form a shortlist inside a chatbot
                    before they ever open Google. AI SEO is how you make sure your business is on that shortlist.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · AI search in numbers</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>Sourced</span>
                </div>
                <div style={{ padding: '6px 18px 16px' }}>
                  {[
                    { v: '~30%', t: 'of UK searches now show an AI Overview', s: 'Ofcom, Online Nation 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: '53%', t: 'of UK adults say they see AI summaries often', s: 'Ofcom, Online Nation 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: '8% vs 15%', t: 'result click rate with an AI summary vs without (US study)', s: 'Pew Research Center, Jul 2025', u: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
                    { v: '1.8bn', t: 'UK ChatGPT visits, first 8 months of 2025', s: 'Ofcom, Online Nation 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: 'None', t: 'extra requirements to appear in AI Overviews, per Google', s: 'Google Search Central, AI features and your website', u: 'https://developers.google.com/search/docs/appearance/ai-features' },
                  ].map((r) => (
                    <div key={r.t} style={{ padding: '13px 0', borderBottom: '1px solid var(--n200)' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                        <span style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 22, color: 'var(--orange)' }}>{r.v}</span>
                        <span style={{ fontSize: 13, color: 'var(--ink)' }}>{r.t}</span>
                      </div>
                      <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', textDecoration: 'underline' }}>{r.s}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. WHAT AI SEO INCLUDES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">The standard</span>
              <h2>What AI SEO includes in 2026</h2>
              <p className="lead mt-4">
                Getting quoted by an AI engine is not one trick. It is a stack of work that makes your business the
                easiest correct answer to find, read, and trust. Every FactoryJet AI SEO programme covers all eight.
              </p>
            </div>
            <ul className="col-2 mt-12" style={{ gap: 24 }}>
              <li className="card">
                <h3>Entity and schema foundation</h3>
                <p className="mt-4">Structured data and a clean entity profile so Google and AI models know exactly who you are, what you do, and why to trust you. Shipped in server-rendered HTML that AI crawlers read without running JavaScript.</p>
              </li>
              <li className="card">
                <h3>Answer-first content</h3>
                <p className="mt-4">The answer stated in the first two lines, then the detail. Engines lift the top of a well-structured page, so pages built this way are the ones that get quoted in AI Overviews and chatbot replies.</p>
              </li>
              <li className="card">
                <h3>Answer engine optimisation</h3>
                <p className="mt-4">Question-style headings, FAQ structure, and concise extractable answers that match how people actually ask, so your page becomes the source an answer engine pulls from.</p>
              </li>
              <li className="card">
                <h3>Generative engine optimisation</h3>
                <p className="mt-4">The wording, sources, and third-party mentions that decide whether a model names your brand. We make your business the specific, credible option an engine reaches for in your category.</p>
              </li>
              <li className="card">
                <h3>Technical AI crawlability</h3>
                <p className="mt-4">
                  We make sure AI crawlers such as GPTBot and PerplexityBot can reach and read your pages, and that
                  speed and indexing never block you from an answer. We also check your Google-Extended rule, which
                  Google documents as a robots.txt control token rather than a separate crawler with its own user
                  agent, so you are not quietly opting out of Google&apos;s AI systems by accident.{' '}
                  <a
                    href="https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{ fontFamily: 'var(--fm)', fontSize: 11, color: '#B23E13', textDecoration: 'underline' }}
                  >
                    Google Search Central
                  </a>
                </p>
              </li>
              <li className="card">
                <h3>Traditional rankings, still</h3>
                <p className="mt-4">On-page, technical, and content SEO that earns real Google rankings. AI answers are built on the same index, so strong rankings are the raw material an AI answer draws from.</p>
              </li>
              <li className="card">
                <h3>Authority and digital PR</h3>
                <p className="mt-4">Credible mentions on sites the models already trust. Being cited elsewhere is a large part of why an engine decides your business is worth naming.</p>
              </li>
              <li className="card">
                <h3>AI visibility measurement</h3>
                <p className="mt-4">We run the prompts your buyers run across ChatGPT, Gemini, and Perplexity, log where you appear, and report the gap we are closing, alongside normal rankings and enquiries.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 6. LISTICLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">How it works</span>
              <h2>Seven things we do to get you cited in AI answers</h2>
              <p className="lead mt-4">
                A repeatable method, not a black box. Here is the work, in the order we do it.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Map the prompts', d: 'We find the exact questions your buyers ask ChatGPT, Gemini, Perplexity, and Google, and check where you show up today. That gap is the plan.' },
                { n: '02', t: 'Fix the entity and schema', d: 'We set clean structured data and entity signals so engines are certain who you are, then confirm it renders in the raw HTML an AI crawler sees.' },
                { n: '03', t: 'Rewrite for answers', d: 'Each target page states its answer up top, uses question-style headings, and reads like the source an engine would quote, without the padding that AI engines skip.' },
                { n: '04', t: 'Build topical depth', d: 'We cover the surrounding questions so a model treats you as the authority on the topic, not a thin page hoping to get lucky.' },
                { n: '05', t: 'Earn credible mentions', d: 'Digital PR and citations on sites the models already trust, because being named elsewhere is a large part of being named in an answer.' },
                { n: '06', t: 'Clear the technical path', d: 'Speed, indexing, and crawler access for GPTBot and PerplexityBot, plus a check that your Google-Extended robots.txt rule is not quietly opting you out of Google AI features.' },
                { n: '07', t: 'Measure and compound', d: 'We track where you get named across engines month on month, double down on what moves, and keep the content fresh so you stay cited.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Want to know if AI answers mention you?'}
          sub={'We will run your brand and your main terms through ChatGPT, Perplexity and Google AI Overviews and send you what they actually say.'}
          label={'Check your AI visibility'}
        />

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 680 }}>AI-native AI SEO vs a traditional SEO agency vs doing it yourself</h2>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Traditional SEO agency</th>
                    <th>DIY / in-house</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Optimised for Google AI Overviews</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Structured to be quoted by ChatGPT &amp; Perplexity</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Not usually</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Entity &amp; schema in server HTML</td><td className="fj"><span className="yes">Every page</span></td><td><span className="partial">Sometimes</span></td><td><span className="no">Rare</span></td></tr>
                  <tr><td className="feat">Traditional Google rankings</td><td className="fj"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">AI visibility tracked as a metric</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">No</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior team + founder</span></td><td><span className="partial">Often juniors</span></td><td>You</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 8. PROCESS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How we work</span>
              <h2>From audit to cited in four stages</h2>
            </div>
            <ol className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <li className="card"><span className="stage-num">01</span><h3>AI visibility audit</h3><p className="mt-4">We run your buyer prompts across the major engines and show you where you appear, and where a competitor is named instead.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Foundation</h3><p className="mt-4">Entity, schema, technical fixes, and crawler access. The fast wins that change how engines read you within weeks.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Content and authority</h3><p className="mt-4">Answer-first pages, topical depth, and credible mentions that get you named in AI answers and climbing in AI Overviews.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Measure and compound</h3><p className="mt-4">Monthly reporting on AI visibility, rankings, and enquiries, with the plan tuned to what is actually moving.</p></li>
            </ol>
          </div>
        </section>

        {/* ═══ 9. WHO WE SERVE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>UK businesses that need to be found where buyers now look</h2>
              <p className="lead mt-4">
                AI SEO pays off fastest for businesses whose customers research online before they buy. Three groups
                make up most of our work.
              </p>
            </div>
            <div className="col-3 mt-12">
              <div className="svc-card">
                <h3>Ecommerce and DTC brands</h3>
                <p className="mt-4">Stores whose shoppers now ask a chatbot for the best option before they buy. We get your products and brand named in those answers and ranked in ecommerce search.</p>
              </div>
              <div className="svc-card">
                <h3>Professional services and B2B</h3>
                <p className="mt-4">Firms where a buyer builds a shortlist from an AI answer. We make sure you are on it, with the expertise and trust signals a model wants to cite.</p>
              </div>
              <div className="svc-card">
                <h3>Small businesses and startups</h3>
                <p className="mt-4">Focused businesses that can be the clearest answer to a specific question. We pick the prompts you can win and make you the source engines reach for.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. UK MARKET + DEMAND ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">The UK AI SEO market</span>
            <h2 style={{ maxWidth: 780 }}>The honest state of AI SEO demand in the UK</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    Here is something most agencies selling this will not tell you. Hardly anyone in the UK searches
                    for AI SEO as a service yet. The whole cluster of terms, including AI SEO agency, AEO and GEO
                    agency, adds up to a few dozen searches a month between them. Some of the phrases the industry
                    talks about constantly, like generative engine optimisation agency and LLM SEO, have no
                    measurable UK demand at all.
                  </p>
                  <p>
                    Now hold that next to the Ofcom numbers above. Around 3 billion Google searches a month happen in
                    the UK, roughly 30 percent of them now return an AI Overview, and ChatGPT took 1.8 billion UK
                    visits in eight months. The behaviour changed at enormous scale. The shopping term for fixing it
                    has not caught up. That gap is the whole story.
                  </p>
                  <p>
                    So do not buy AI SEO because it is trending. The reason to do this work is that a large share of
                    the searches your customers already run hand them a written answer before they see a single link,
                    and someone is named in that answer. We wrote this page as a plain UK reference on how that
                    naming actually happens, not to chase a keyword that barely exists.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/london">AI SEO London</a>
                  <a className="city-pill" href="/uk/manchester">AI SEO Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">AI SEO Birmingham</a>
                  <a className="city-pill" href="/uk/ecommerce-seo">Ecommerce SEO</a>
                  <a className="city-pill" href="/uk/shopify-seo">Shopify SEO</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>What the free audit checks</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>12 checks</span>
                </div>
                <ul style={{ padding: '10px 18px 16px', listStyle: 'none', margin: 0 }}>
                  {[
                    'Whether ChatGPT names you for your ten core buyer prompts',
                    'Whether Perplexity lists your site as a cited source',
                    'Whether Google AI Overviews fire on your terms at all',
                    'Which competitor gets named when you do not',
                    'Whether your Organization entity is unambiguous to a machine',
                    'Whether schema is in the server HTML or added by JavaScript',
                    'Whether your FAQ schema matches the FAQs a visitor can see',
                    'Whether GPTBot and PerplexityBot are allowed in robots.txt',
                    'Whether Google-Extended is silently opting you out',
                    'Whether your key pages answer in the first two lines',
                    'Whether headings match the way people phrase the question',
                    'Which third-party pages already mention you, and which do not',
                  ].map((c) => (
                    <li key={c} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '9px 0', borderBottom: '1px solid var(--n200)', fontSize: 13, lineHeight: 1.55, color: 'var(--n600)' }}>
                      <span aria-hidden="true" style={{ color: '#047857', fontWeight: 700, lineHeight: 1.5 }}>✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. COMPETITOR LISTICLE (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK AI SEO and GEO agencies worth knowing</h2>
              <p className="lead mt-4">
                We would rather tell you the truth than pretend we are the only option. Here are UK agencies doing
                real search and AI-visibility work, including us. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {AI_SEO_AGENCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: 'var(--fm)', fontSize: 10, background: '#B23E13', color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--n400)', marginTop: 14 }}>
              Agencies named from live UK search results for AI SEO and GEO terms, July 2026. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 12. WHAT SHAPES AN ENGAGEMENT (qualitative, no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What shapes an AI SEO engagement</h2>
                <div className="stack mt-6">
                  <p>
                    We do not sell one-size AI SEO packages, because a local firm chasing three prompts and a national
                    brand fighting for a whole category are different jobs. What shapes the work is where you are
                    starting, how competitive your category is inside AI answers, and how much content and authority
                    you already have to build on.
                  </p>
                  <p>
                    A business with strong existing SEO often needs mostly entity, schema, and answer-first structure
                    to start showing up in AI answers. A newer site needs foundations first. We scope it after a short
                    call and a free AI visibility check, so the plan matches your situation rather than a template, and
                    you know what the work is before you commit.
                  </p>
                </div>
                <div className="mt-8">
                  <ModalCTAButton label="Get my free AI visibility check" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Where you rank and appear today</div><div className="scorecard-val" style={{ fontSize: 14 }}>Start</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How competitive your category is in AI</div><div className="scorecard-val" style={{ fontSize: 14 }}>Field</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Content and authority you already have</div><div className="scorecard-val" style={{ fontSize: 14 }}>Base</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How many engines and prompts you target</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free AI visibility check before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12b. INCLUDED / NOT INCLUDED / ENGAGEMENT SHAPES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Scope in plain words</span>
              <h2>What is included, and what is not</h2>
              <p className="lead mt-4">
                Most disappointment in this industry comes from a vague scope. So here is the line, written down
                before you ask.
              </p>
            </div>

            <div className="col-2 mt-10" style={{ gap: 24, alignItems: 'start' }}>
              <div className="card">
                <h3>Included in every AI SEO engagement</h3>
                <ul className="mt-4" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {[
                    'A prompt map of the questions your buyers actually ask an AI engine',
                    'A baseline of where you are named today across ChatGPT, Gemini and Perplexity',
                    'Organization, Service, FAQ and Breadcrumb schema in server-rendered HTML',
                    'A single FAQ source of truth so the schema can never drift from the visible page',
                    'Answer-first rewrites of your priority pages, with question-style headings',
                    'robots.txt and crawler access review for GPTBot, PerplexityBot and Google-Extended',
                    'Core Web Vitals and indexing fixes that block you from being read',
                    'Traditional on-page and technical SEO for the same pages',
                    'Digital PR and citation targets on sites the models already read',
                    'Monthly reporting on AI mentions, rankings and enquiries in one place',
                    'A named senior contact, with the founder on the account',
                  ].map((c) => (
                    <li key={c} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', fontSize: 14, lineHeight: 1.6, color: 'var(--n600)' }}>
                      <span aria-hidden="true" style={{ color: '#047857', fontWeight: 700 }}>✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h3>Not included, and why</h3>
                <ul className="mt-4" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {[
                    'Guaranteed rankings or guaranteed AI mentions. Nobody controls those, and a guarantee is a warning sign.',
                    'Bought links or private blog networks. They put your domain at risk for a short-lived gain.',
                    'Bulk AI-written pages. Thin content is ignored by Google and by AI engines alike.',
                    'A secret AI ranking trick. Google states there are no extra requirements to appear in AI Overviews.',
                    'Paid search management. That is a separate discipline and we will say so rather than pad the scope.',
                    'Rewriting your whole site by default. We start with the pages that can be quoted soonest.',
                    'Lock-in contracts designed to be hard to leave. The work should keep you, not the paperwork.',
                  ].map((c) => (
                    <li key={c} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', fontSize: 14, lineHeight: 1.6, color: 'var(--n600)' }}>
                      <span aria-hidden="true" style={{ color: '#B23E13', fontWeight: 700 }}>✗</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ maxWidth: 760, marginTop: 56 }}>
              <h3>Three shapes an engagement can take</h3>
              <ol className="mt-4" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {[
                  { t: 'A one-off audit', d: 'We run the twelve checks, show you where you are named and where a competitor is, and hand you the plan. You can act on it yourself. Plenty of people do.' },
                  { t: 'Fixed-price milestones', d: 'Best when the gap is structural. Entity and schema foundation, crawler access, then answer-first rewrites of a defined set of pages, each priced and signed off before it starts.' },
                  { t: 'A monthly retainer', d: 'Best when you are competing for a category rather than a handful of prompts. Content depth, digital PR and measurement compound month on month, which is how AI visibility is actually won.' },
                ].map((s, i) => (
                  <li key={s.t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '14px 0', borderTop: '1px solid var(--n200)' }}>
                    <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 14, color: '#B23E13', minWidth: 28 }}>{`0${i + 1}`}</span>
                    <div>
                      <b style={{ fontSize: 15, color: 'var(--ink)' }}>{s.t}</b>
                      <p className="mt-2" style={{ marginTop: 4 }}>{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6" style={{ fontSize: 14 }}>
                Which one fits depends on where you are starting. We work that out on the call, after the free
                visibility check, so you are choosing with the findings in front of you.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 13. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI SEO questions UK founders actually ask</h2>
            </div>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
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

        {/* ═══ 14. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>See where your business shows up in AI answers</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours with a free AI visibility check:
              where ChatGPT, Gemini, and Google AI Overviews name you today, and where they name someone else. No
              spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free AI visibility check" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/web-design" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See web design</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

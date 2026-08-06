import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import './ai-seo.css';

const CANONICAL = 'https://factoryjet.com/uk/ai-seo';
const UPDATED = '2026-07-25';

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
    answer: 'AI SEO is the work of getting a business found in both traditional Google results and AI answers from tools like ChatGPT, Gemini, Perplexity, and Google AI Overviews. It combines classic SEO with two newer disciplines: generative engine optimization, which shapes how AI models describe you, and answer engine optimization, which structures your pages so an engine can lift a clear answer straight from them.' },
  { category: 'basics', question: 'What is the difference between AEO and SEO?',
    answer: 'SEO aims to rank your page in a list of blue links. Answer engine optimization, or AEO, aims to get your answer quoted directly inside an AI summary or a featured snippet, often without a click. The two overlap, because both reward clear structure, real expertise, and trustworthy sources. AI SEO does both at once rather than treating them as separate jobs.' },
  { category: 'basics', question: 'What is generative engine optimization?',
    answer: 'Generative engine optimization, or GEO, is the practice of influencing how generative AI engines represent and cite your business. It covers the entity data, schema, wording, and third-party mentions that a model reads when it decides which brands to name in an answer. Where SEO targets a ranking, GEO targets a mention inside the generated response itself.' },
  { category: 'basics', question: 'What are the four types of SEO?',
    answer: 'Most teams split SEO into four parts: on-page SEO, which is your content and page structure; technical SEO, which is speed, crawling, and indexing; off-page SEO, which is links and reputation; and local SEO, which is maps and location searches. AI SEO adds a fifth layer on top: making all four legible to AI engines and answer boxes.' },

  // ── SEO vs AI search ──
  { category: 'ai-search', question: 'Is GEO replacing SEO?',
    answer: 'No. Generative engine optimization sits on top of SEO, it does not replace it. AI engines like ChatGPT and Perplexity still learn from the open web, and Google AI Overviews are built on the same index that ranks normal results. A page that is well optimised for search is the raw material an AI answer draws from, so the two reinforce each other.' },
  { category: 'ai-search', question: 'Is SEO dead in 2026?',
    answer: 'No, but the payoff has shifted. In the UK, Ofcom reports that around 30 percent of searches now show an AI Overview, and Pew Research found people click a link roughly 8 percent of the time when an AI summary appears, against 15 percent when it does not. Being named inside the answer now matters as much as ranking below it, which is exactly what AI SEO targets.' },
  { category: 'ai-search', question: 'Is SEO going away with AI?',
    answer: 'The click is getting rarer, the visibility is not. More than half of UK adults now use tools like ChatGPT, Copilot, or Gemini, so a growing share of buyers form an opinion inside an AI answer before they ever reach your site. The winners are businesses structured to be quoted there. That is a change in method, not the end of search.' },
  { category: 'ai-search', question: 'Can ChatGPT do SEO?',
    answer: 'ChatGPT can help write and audit content, but it cannot make an engine trust or cite your business. That comes from real expertise, structured pages, schema, and credible mentions across the web. We use AI tools to move faster, then do the parts a chatbot cannot: the entity work, the technical setup, and the third-party authority that decides whether you get named.' },
  { category: 'ai-search', question: 'Is ChatGPT an answer engine?',
    answer: 'Yes. ChatGPT, Perplexity, and Google AI Overviews are answer engines: they return a written answer rather than only a list of links. That is why answer engine optimization exists. If your page states the answer plainly, backs it with sources, and is easy for a crawler to read, it is far more likely to be the source the engine quotes.' },

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

  // ── Results & working with us ──
  { category: 'results', question: 'How long does AI SEO take to work?',
    answer: 'Technical and schema fixes can change how engines read you within weeks. Getting consistently named in AI answers and climbing into AI Overviews usually takes a few months, because it depends on content depth and third-party trust that build over time. We front-load the fast wins so you see movement early, then compound it.' },
  { category: 'results', question: 'Will AI SEO work for a small business?',
    answer: 'Often better than for a large one. AI engines reward clear, specific, trustworthy answers, and a focused small business can be far more precise about what it does than a sprawling competitor. We pick the questions where you can realistically be the best answer, then make you the source engines reach for on those.' },
  { category: 'results', question: 'Do I still need traditional SEO if I do GEO?',
    answer: 'Yes. Generative engine optimization draws on the same content and authority that traditional SEO builds, so dropping one weakens the other. We run them as one programme: the on-page, technical, and link work that earns rankings is the same foundation that gets you quoted in AI answers. You are not choosing between them.' },
  { category: 'results', question: 'Which AI engines should my business show up in?',
    answer: 'Start with the ones your buyers actually use. In the UK that means ChatGPT first, then Google AI Overviews and Gemini, with Perplexity growing fast among researchers and professionals. We map which engines your customers lean on for your kind of decision, then prioritise the work so you show up where it converts, not everywhere at once.' },
  { category: 'results', question: 'Are you a UK AI SEO agency, and do you work outside London?',
    answer: 'Yes. We are a UK AI SEO agency working with businesses across London, Manchester, Birmingham, Leeds, Bristol, and beyond. Search and AI visibility are handled remotely with regular video reviews, so a company anywhere in the UK gets the same senior team and the same standard of work.' },
  { category: 'results', question: 'How is AI SEO different from a traditional SEO agency?',
    answer: 'A traditional SEO agency optimises to rank in the ten blue links. We optimise for that and for the AI answers now sitting above them. That means entity and schema work, content structured to be quoted, and tracking of whether ChatGPT and AI Overviews actually name you. If an agency is not measuring AI visibility, it is working to a 2019 version of search.' },
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
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI SEO Services UK',
      serviceType: 'AI SEO, generative engine optimization, and answer engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'AI SEO agency in the UK. We get businesses found in Google and quoted by ChatGPT, Gemini, Perplexity, and Google AI Overviews through generative engine optimization and answer engine optimization.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'AI SEO', item: CANONICAL },
      ],
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'AI SEO Agency UK | Get Cited by ChatGPT & Google AI Overviews | FactoryJet',
      headline: 'AI SEO in the UK That Gets Your Business Quoted by ChatGPT and Google AI Overviews',
      inLanguage: 'en-GB',
      datePublished: '2026-07-25',
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        jobTitle: 'Founder, FactoryJet',
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
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
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'AI SEO Agency UK | Get Cited by ChatGPT & AI Overviews | FactoryJet',
  description:
    'FactoryJet is a UK AI SEO agency. We get your business ranked in Google and quoted by ChatGPT, Gemini, Perplexity, and Google AI Overviews with GEO and answer engine optimization. Book a free AI visibility check.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'AI SEO Agency UK | Get Cited by ChatGPT & AI Overviews | FactoryJet',
    description:
      'A UK AI SEO agency getting businesses found in Google and named in AI answers from ChatGPT, Gemini, Perplexity, and Google AI Overviews. Generative engine optimization and AEO. Free AI visibility check.',
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

      <div className="uk-aiseo">
      <main>

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
                <h1>AI SEO That Gets Your Business Quoted by ChatGPT and Google AI Overviews</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an AI SEO agency for UK businesses. We get you ranked in Google and named inside
                  the AI answers your buyers now read first, using generative engine optimization and answer engine
                  optimization built into every page.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects, AI-native since day one</span></div>
                  <div className="upd">Last updated<br />25 July 2026</div>
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
              <span className="lab">What is AI SEO?</span>
              <p>
                AI SEO is the work of getting a business found in both traditional Google results and AI answers
                from tools like ChatGPT, Gemini, Perplexity, and Google AI Overviews. It combines classic search
                engine optimization with two newer disciplines: generative engine optimization, which shapes how AI
                models describe and cite you, and answer engine optimization, which structures your pages so an
                engine can lift a clear answer straight from them.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The shift that matters in 2026 is where the answer gets read. For years, the goal was a high spot in a
              list of links. Now a growing share of buyers read a written answer at the top of the page, or ask a
              chatbot, and never scroll. The question is no longer only whether you rank. It is whether the engine
              names you when it writes the answer. That is the job AI SEO is built for.
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
                    The way people search changed faster than most agencies did. In the UK, the communications
                    regulator Ofcom reports that about 30 percent of searches now show an AI Overview, and more than
                    half of adults say they see these summaries often. When the answer sits at the top of the page,
                    the ten blue links below it get read less.
                  </p>
                  <p>
                    The click gap is measurable. Pew Research tracked real browsing and found people clicked through
                    to a website about 8 percent of the time when an AI summary appeared, against 15 percent when it
                    did not, roughly half as often. A source link inside the summary was clicked just 1 percent of the
                    time. Ranking below the answer is worth far less than being named inside it.
                  </p>
                  <p>
                    Meanwhile ChatGPT drew 1.8 billion UK visits in the first eight months of 2025, up from 368
                    million a year earlier. Your next customer may form a shortlist inside a chatbot before they ever
                    open Google. AI SEO makes sure your business is on that shortlist.
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
                    { v: '~30%', t: 'of UK searches now show an AI Overview', s: 'Ofcom, Online Nation, Dec 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: '8% vs 15%', t: 'link click rate with an AI summary vs without', s: 'Pew Research Center, Jul 2025', u: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
                    { v: '1.8bn', t: 'UK ChatGPT visits, first 8 months of 2025', s: 'Ofcom, Online Nation, Dec 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
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
                <h3>Answer engine optimization</h3>
                <p className="mt-4">Question-style headings, FAQ structure, and concise extractable answers that match how people actually ask, so your page becomes the source an answer engine pulls from.</p>
              </li>
              <li className="card">
                <h3>Generative engine optimization</h3>
                <p className="mt-4">The wording, sources, and third-party mentions that decide whether a model names your brand. We make your business the specific, credible option an engine reaches for in your category.</p>
              </li>
              <li className="card">
                <h3>Technical AI crawlability</h3>
                <p className="mt-4">We make sure AI crawlers such as GPTBot, PerplexityBot, and Google-Extended can reach and read your pages, and that speed and indexing never block you from an answer.</p>
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
                { n: '06', t: 'Clear the technical path', d: 'Speed, indexing, and crawler access for GPTBot, PerplexityBot, and Google-Extended, so nothing blocks you from the answer.' },
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
            <h2 style={{ maxWidth: 780 }}>Businesses are already searching for AI SEO. Most agencies are not answering</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    Search demand for AI SEO in the UK is real and growing. Terms like &quot;ai seo agency&quot; and
                    &quot;ai seo services&quot; draw hundreds of searches a month each, and &quot;generative engine
                    optimization services&quot; is climbing as more owners realise the AI answer is where visibility is
                    now won. These are buyers looking for help right now, not people browsing definitions.
                  </p>
                  <p>
                    We already earn hundreds of monthly impressions for &quot;ai seo agency uk&quot; on the strength of
                    our writing alone. This page exists to answer that demand properly, for businesses in London,
                    Manchester, Birmingham, Leeds, and across the UK, with the same senior team on every account.
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
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  {[
                    { kw: 'ai seo agency', v: '480', w: '100%', kd: 'KD 9 · Winnable now' },
                    { kw: 'ai seo services', v: '390', w: '81%', kd: 'KD 13 · Winnable now' },
                    { kw: 'ai seo company', v: '140', w: '29%', kd: 'KD 0 · Quick win' },
                    { kw: 'generative engine optimization services', v: '110', w: '23%', kd: 'KD 14 · Emerging term' },
                    { kw: 'ai seo agency london', v: '70', w: '15%', kd: 'KD 0 · Local, winnable' },
                  ].map((r) => (
                    <div key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> /mo</span></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </div>
                  ))}
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, July 2026</p>
                </div>
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

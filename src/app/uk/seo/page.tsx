import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import './seo.css';

const CANONICAL = 'https://factoryjet.com/uk/seo';
const UPDATED = '2026-07-25';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',    label: 'SEO basics' },
  { key: 'ai-search', label: 'SEO vs AI search' },
  { key: 'local',     label: 'Local & ecommerce SEO' },
  { key: 'results',   label: 'Results & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── SEO basics ──
  { category: 'basics', question: 'What does an SEO agency actually do?',
    answer: 'An SEO agency helps your website show up when people search for what you sell. That covers four things: fixing the technical health of your site so Google can crawl and index it, improving the content and structure of your pages, earning links and mentions from other sites, and tracking what ranks. A good agency ties all of it to real enquiries, not vanity keyword positions.' },
  { category: 'basics', question: 'How do you do SEO for a small business in the UK?',
    answer: 'Start with the basics done well. Claim and fill out your Google Business Profile, make sure each page targets one clear thing people search for, write genuinely useful content that answers real questions, and earn a few links from local or industry sites that already have trust. Fix anything slow or broken. Then track which pages bring enquiries and do more of what works.' },
  { category: 'basics', question: 'What is a backlink, and do they still matter?',
    answer: 'A backlink is a link from another website to yours. Search engines still read them as votes of confidence: a link from a respected UK publication or industry body tells Google your business is credible. They matter, but quality beats quantity now. Ten links from real, relevant sites do far more than a hundred low-value ones, and spammy link buying can actively hurt you.' },
  { category: 'basics', question: 'How do you do keyword research?',
    answer: 'We look at the exact phrases your buyers type, not the ones you assume they use. Using live UK search data we map demand, how hard each term is to rank for, and buyer intent, then separate the quick wins from the long plays. The goal is a short list of terms you can realistically win that lead to enquiries, not traffic for its own sake.' },
  { category: 'basics', question: 'Do you do technical SEO?',
    answer: 'Yes, and it is usually where the fastest gains hide. Technical SEO covers site speed, mobile performance, crawlability, indexing, structured data, and fixing errors that quietly stop pages from ranking. We audit all of it, prioritise what actually moves visibility, and make sure the fixes ship in the server-rendered HTML so both Google and AI crawlers can read your pages without running JavaScript.' },
  { category: 'basics', question: 'What are the main types of SEO?',
    answer: 'Most teams split SEO into four parts. On-page SEO is your content and page structure. Technical SEO is speed, crawling, and indexing. Off-page SEO is links and reputation. Local SEO is maps and location searches. In 2026 we add a fifth layer: making all four legible to AI engines and answer boxes, so you are named in AI answers as well as ranked below them.' },

  // ── SEO vs AI search ──
  { category: 'ai-search', question: 'Is SEO dead or just evolving in 2026?',
    answer: 'Evolving, firmly. What changed is where the answer gets read. In the UK, Ofcom reports that about 30 percent of searches now show an AI Overview, so the answer often sits above the links. SEO is not dead, but ranking alone is not the finish line any more. Being named inside the AI answer now matters as much as ranking below it.' },
  { category: 'ai-search', question: 'Is SEO being phased out?',
    answer: 'No. Search engines and AI answers both still learn from the open web, and Google AI Overviews are built on the same index that ranks normal results. What is being phased out is the old assumption that a top-ten ranking guarantees clicks. The work is shifting, not disappearing. Businesses structured to be found and quoted are getting more visibility, not less.' },
  { category: 'ai-search', question: 'Will AI kill SEO?',
    answer: 'AI is changing SEO, not ending it. More than half of UK adults now use tools like ChatGPT and Gemini, so a growing share of buyers form an opinion inside an AI answer before they reach your site. The click is getting rarer, the visibility is not. The winners are businesses built to be the source the engine quotes. That is a change in method, not the end of search.' },
  { category: 'ai-search', question: 'Do you also do AI SEO and GEO?',
    answer: 'Yes, and it is our edge over a traditional agency. Alongside classic SEO we do generative engine optimization, which shapes how AI models describe and cite you, and answer engine optimization, which structures pages so an engine can lift a clear answer. We track whether ChatGPT, Gemini, Perplexity, and Google AI Overviews actually name you. If you want that focus on its own, see our AI SEO page.' },
  { category: 'ai-search', question: 'Is SEO better than paid ads?',
    answer: 'They do different jobs. Paid ads buy visibility the moment you switch them on and stop the moment you switch them off. SEO builds an asset that keeps working, compounding over months at a lower cost per enquiry once it lands. Most businesses we work with use ads for speed and SEO for durable growth. If you can only pick one for the long run, SEO usually wins on return.' },

  // ── Local & ecommerce SEO ──
  { category: 'local', question: 'What is local SEO?',
    answer: 'Local SEO is the work of showing up when someone searches for a service near them, like "SEO agency Manchester" or "plumber near me". It centres on your Google Business Profile, consistent name, address, and phone details across the web, local reviews, and pages built for the areas you serve. For any business with a location or a service area, it is often the fastest route to enquiries.' },
  { category: 'local', question: 'Can I do local SEO myself?',
    answer: 'Yes, the basics are very doable. Claim your Google Business Profile, keep your name, address, and phone consistent everywhere, gather genuine reviews, and write a clear page for each area you serve. Many small businesses get real results this way. Where an agency helps is competitive areas, technical fixes, and the ongoing content and links that keep you ahead once the easy wins are done.' },
  { category: 'local', question: 'What is ecommerce SEO?',
    answer: 'Ecommerce SEO is search optimization for online stores. It covers category and product pages, site structure, fast loading, clean handling of filters and variants, and product schema so your items can appear in search and shopping results. Increasingly it also means being named when a shopper asks a chatbot for the best option. Done well, it brings buyers with intent, not just browsers.' },
  { category: 'local', question: 'Are you an ecommerce SEO agency?',
    answer: 'Yes. We work with Shopify, WooCommerce, and custom stores, optimising category and product pages, fixing the technical issues that hold ranking back, and structuring pages so both Google and AI engines surface your products. We also build the content around buying decisions that pulls in shoppers earlier. If you run a store, our ecommerce SEO and Shopify SEO work is built for exactly that.' },
  { category: 'local', question: 'Do you work outside London?',
    answer: 'Yes. We are a UK SEO agency working with businesses across London, Manchester, Birmingham, Leeds, Bristol, and beyond. The work is handled remotely with regular video reviews, so a company anywhere in the UK gets the same senior team and the same standard. Where you are based does not change the quality of the work, only which local searches we target for you.' },
  { category: 'local', question: 'Do you cover SEO in Manchester and other cities?',
    answer: 'We do. We run SEO for businesses in Manchester, Birmingham, Leeds, London, and across the UK, and we build local pages and Google Business Profiles for the areas each client serves. City-level SEO is mostly about local intent and proximity signals, so we target the exact searches your customers in that city use, wherever our team happens to sit.' },

  // ── Results & working with us ──
  { category: 'results', question: 'How much does SEO cost for a small business in the UK?',
    answer: 'It depends on scope, not a fixed price tag. A local business chasing a handful of searches is a smaller job than a national brand competing in a crowded category. What shapes it is where you are starting, how competitive your market is, and how much content and authority you already have. We scope it after a short call and a free audit, so the plan matches your situation rather than a template.' },
  { category: 'results', question: 'How much should a small business pay for SEO?',
    answer: 'Enough to fund real work, not so little that nothing meaningful gets done. Underfunded SEO usually means thin content and low-value links that can do more harm than good. The right level depends on how competitive your market is and how fast you want to move. We would rather scope honestly to your goals than quote a figure that sounds nice and delivers nothing. The free audit shows you what the work involves first.' },
  { category: 'results', question: 'Is SEO worth it for small businesses?',
    answer: 'Often more than for large ones. A focused small business can be genuinely the clearest answer to a specific search, where a sprawling competitor is vague. SEO brings people who are already looking for what you sell, at a lower cost per enquiry than ads over time. It is not instant, but for most small businesses the compounding return makes it one of the best-value channels available.' },
  { category: 'results', question: 'How long does SEO take to work?',
    answer: 'Technical and structural fixes can change how you rank within weeks. Meaningful movement on competitive terms usually takes a few months, because content depth and trust build over time. We front-load the fast wins so you see early progress, then compound it. Anyone promising page one in days is either targeting terms nobody searches or selling something that will not last.' },
  { category: 'results', question: 'Do you guarantee rankings?',
    answer: 'No honest agency can, and you should be wary of any that does. Search engines decide rankings, not us, and the algorithms change constantly. What we guarantee is the work: the audit, the fixes, the content, and transparent reporting on where you actually move. A track record across 500-plus projects is how we build confidence, not a promise no one can keep.' },
  { category: 'results', question: 'How do you report results?',
    answer: 'Clearly, and tied to your business, not vanity metrics. You get regular reporting on rankings, organic traffic, and enquiries, plus where you appear in AI answers and Google AI Overviews. We show what moved, what we did, and what is next, in plain language. If a report needs a glossary to understand, it is hiding a lack of results. Ours are built to be read in five minutes.' },
  { category: 'results', question: 'Who actually does the work?',
    answer: 'A senior team, with the founder on every account. You will not be handed to a junior after the sales call, and the work is not quietly offshored to a content mill. That is deliberate: SEO that gets you ranked and quoted in AI answers takes judgement, not a template. When you email, the founder replies, and the person planning your strategy is the person doing it.' },
  { category: 'results', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call, and runs a free SEO audit on your site: what is holding your rankings back, where you show up today, and where a competitor is ahead. That first look is genuinely useful whether or not we end up working together.' },
];

/* ─── Named UK SEO agencies (open self-disclosure, ItemList) ────────── */
const SEO_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. A UK SEO agency that builds pages to rank in Google and to be quoted by ChatGPT, Gemini, Perplexity, and Google AI Overviews, with AI visibility tracked as a first-class metric.' },
  { name: 'The SEO Works', note: 'A long-running Sheffield-based SEO and digital agency working with brands and SMBs across the UK.' },
  { name: 'ClickSlice', note: 'A London SEO agency known for technical SEO and link building for small and mid-sized businesses.' },
  { name: 'JDR Group', note: 'A Midlands agency that pairs SEO with inbound marketing for B2B, manufacturing, and industrial firms.' },
  { name: 'Go Up', note: 'A London SEO and digital PR agency with a strong content and press-coverage footprint.' },
  { name: 'First Place SEO', note: 'A UK SEO specialist focused on measurable organic growth for small businesses.' },
];

/* ─── JSON-LD @graph ───────────────────────────────────────────────── */
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
      name: 'SEO Services UK',
      serviceType: 'SEO, local SEO, ecommerce SEO, and AI search optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'SEO agency in the UK. We rank businesses in Google and get them named in AI answers from ChatGPT, Gemini, Perplexity, and Google AI Overviews, with technical, local, and ecommerce SEO on every account.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'SEO Agency UK | Rank in Google & the AI Answers Above It | FactoryJet',
      headline: 'SEO in the UK, Built for Google and the AI Answers Now Above It',
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
      name: 'UK SEO agencies',
      itemListElement: SEO_AGENCIES.map((a, i) => ({
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
  title: 'SEO Agency UK | Rank in Google & AI Answers | FactoryJet',
  description:
    'FactoryJet is a UK SEO agency that ranks you in Google and gets you named in AI answers. Technical, local, and ecommerce SEO. Book a free SEO audit.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'SEO Agency UK | Rank in Google & AI Answers | FactoryJet',
    description:
      'A UK SEO agency getting businesses ranked in Google and named in AI answers from ChatGPT, Gemini, Perplexity, and Google AI Overviews. Technical, local, and ecommerce SEO. Free SEO audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/seo-og.webp', width: 1200, height: 630, alt: 'SEO Agency UK by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function SeoUKPage() {
  return (
    <>
      <script id="ld-uk-seo" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-seo">
      <main>

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK SEO Agency</span>
                  <span className="chip">Google + AI Answers</span>
                  <span className="chip">SEO · Local · Ecommerce</span>
                </div>
                <h1>SEO in the UK, Built for Google and the AI Answers Now Above It</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an SEO agency for UK businesses. We rank you in Google and get you named inside the
                  AI answers your buyers now read first, with technical, on-page, local, and ecommerce SEO on every
                  account, plus the AI visibility work most agencies still ignore.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects, AI-native since day one</span></div>
                  <div className="upd">Last updated<br />25 July 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_seo_hero" submitLabel="Get my free SEO audit" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">What we optimise for</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Google organic</div><div className="scorecard-note">the ten blue links, still ranked</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>Ranked</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Google AI Overviews</div><div className="scorecard-note">the summary above the links</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Cited</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">ChatGPT &amp; Gemini</div><div className="scorecard-note">named in the written answer</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Named</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Local &amp; maps</div><div className="scorecard-note">Google Business Profile, ranked</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Found</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Technical &amp; schema</div><div className="scorecard-note">in server HTML, crawler-readable</div></div>
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
              <span className="lab">What does an SEO agency do?</span>
              <p>
                An SEO agency gets your business found when people search for what you sell. It combines on-page,
                technical, local, and off-page work so search engines rank your pages, and increasingly so AI engines
                quote them. The 2026 shift is that ranking now shares the page with an AI answer, so being named in
                that answer matters as much as ranking below it.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The change that matters in 2026 is where the answer gets read. For years the goal was a high spot in a
              list of links. Now a growing share of buyers read a written answer at the top of the page, or ask a
              chatbot, and never scroll. Ranking still counts. Being the source the engine names when it writes the
              answer counts just as much, and most SEO agencies are not built for it yet.
            </p>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className="col-4" style={{ gap: 20 }}>
              <div className="trust-pill"><span className="dot dot-orange" />Ranked in Google, quoted in AI answers</div>
              <div className="trust-pill"><span className="dot dot-orange" />Technical, on-page, local, and ecommerce SEO</div>
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
                <span className="eyebrow">Why SEO still matters, and what changed</span>
                <h2>Buyers are reading the answer, not just the links</h2>
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
                    million a year earlier. Your next customer may build a shortlist inside a chatbot before they ever
                    open Google. Modern SEO makes sure your business is on it, and still ranking in the results below.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Search in numbers</span>
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

        {/* ═══ 5. WHAT SEO INCLUDES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">The standard</span>
              <h2>What professional SEO includes in 2026</h2>
              <p className="lead mt-4">
                Ranking is not one trick, and neither is getting quoted by an AI engine. It is a stack of work that
                makes your business the easiest correct answer to find, read, and trust. Every FactoryJet SEO
                programme covers all eight.
              </p>
            </div>
            <ul className="col-2 mt-12" style={{ gap: 24 }}>
              <li className="card">
                <h3>Technical SEO foundation</h3>
                <p className="mt-4">Site speed, mobile performance, crawlability, indexing, and structured data. We clear the errors that quietly stop pages from ranking, and ship fixes in server-rendered HTML so Google and AI crawlers read them without running JavaScript.</p>
              </li>
              <li className="card">
                <h3>On-page and content SEO</h3>
                <p className="mt-4">Each page targets one clear thing people search for, states the answer near the top, and reads like the source an engine would quote. We build genuine depth around real buyer questions, not padding that adds nothing.</p>
              </li>
              <li className="card">
                <h3>Local SEO</h3>
                <p className="mt-4">Google Business Profile, consistent name, address, and phone signals, local reviews, and pages built for the areas you serve. For any business with a location or service area, this is often the fastest route to enquiries.</p>
              </li>
              <li className="card">
                <h3>Ecommerce SEO</h3>
                <p className="mt-4">Category and product pages, clean handling of filters and variants, fast loading, and product schema so your items appear in search and shopping results, and get named when shoppers ask a chatbot for the best option.</p>
              </li>
              <li className="card">
                <h3>Links and digital PR</h3>
                <p className="mt-4">Credible mentions on sites the search engines and AI models already trust. Quality beats quantity now, so we earn relevant, real links rather than chasing volume that can quietly hurt you.</p>
              </li>
              <li className="card">
                <h3>AI answers and GEO</h3>
                <p className="mt-4">Entity data, schema, answer-first structure, and the wording that decides whether ChatGPT, Gemini, Perplexity, and Google AI Overviews name your business. This is the part a traditional SEO agency usually skips.</p>
              </li>
              <li className="card">
                <h3>Keyword and competitor research</h3>
                <p className="mt-4">We map the exact phrases your buyers use with live UK search data, weigh difficulty against intent, and study who is ranking now. The output is a short list of terms you can realistically win.</p>
              </li>
              <li className="card">
                <h3>Reporting and measurement</h3>
                <p className="mt-4">Regular reporting on rankings, organic traffic, and enquiries, plus where you appear in AI answers and AI Overviews. Plain language, tied to your business, readable in five minutes.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 6. LISTICLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">How it works</span>
              <h2>Seven things we do to get you ranked and cited</h2>
              <p className="lead mt-4">
                A repeatable method, not a black box. Here is the work, in the order we do it.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Audit and benchmark', d: 'We check the technical health of your site, where you rank today, and where you show up in AI answers, so we know the starting line before we touch anything.' },
                { n: '02', t: 'Research the demand', d: 'We map the exact searches your buyers use with live UK data, weigh difficulty against intent, and separate the quick wins from the terms worth a longer fight.' },
                { n: '03', t: 'Fix the technical foundation', d: 'Speed, indexing, crawlability, and structured data, confirmed in the raw HTML both Google and AI crawlers read. This is usually where the fastest gains hide.' },
                { n: '04', t: 'Optimise pages for search and answers', d: 'Each target page targets one clear query, states its answer up top, and is structured so an engine can rank it and lift a clean answer from it.' },
                { n: '05', t: 'Build topical depth', d: 'We cover the surrounding questions so search engines and AI models treat you as the authority on the topic, not a thin page hoping to get lucky.' },
                { n: '06', t: 'Earn links and mentions', d: 'Digital PR and citations on sites that already have trust, because being named elsewhere is a large part of being ranked, and of being named in an AI answer.' },
                { n: '07', t: 'Measure and compound', d: 'We track rankings, enquiries, and where you get named across engines month on month, double down on what moves, and keep the content fresh so you stay found.' },
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
          headline={'Want to see where you really stand?'}
          sub={'Send your domain and the terms that matter. We will show you the gap to page one and what closes it, with no retainer talk.'}
          label={'Get a free UK SEO review'}
        />

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 680 }}>FactoryJet vs a traditional SEO agency vs doing it yourself</h2>
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
                  <tr><td className="feat">Ranks you in Google</td><td className="fj"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Optimised for AI Overviews &amp; cited by ChatGPT</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Technical &amp; on-page SEO</td><td className="fj"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Basic</span></td></tr>
                  <tr><td className="feat">Local &amp; ecommerce SEO</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td><td><span className="partial">Basic</span></td></tr>
                  <tr><td className="feat">Transparent reporting</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td><td><span className="no">N/A</span></td></tr>
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
              <h2>From audit to ranked and cited in four stages</h2>
            </div>
            <ol className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <li className="card"><span className="stage-num">01</span><h3>SEO audit</h3><p className="mt-4">We check technical health, rankings, and AI visibility, and show you where you appear today and where a competitor is ahead.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Foundation</h3><p className="mt-4">Technical fixes, on-page structure, schema, and crawler access. The fast wins that change how engines read you within weeks.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Content and authority</h3><p className="mt-4">Answer-first pages, topical depth, local and ecommerce work, and credible links that get you ranked and named in AI answers.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Measure and compound</h3><p className="mt-4">Monthly reporting on rankings, enquiries, and AI visibility, with the plan tuned to what is actually moving.</p></li>
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
                SEO pays off fastest for businesses whose customers research online before they buy. Three groups make
                up most of our work.
              </p>
            </div>
            <div className="col-3 mt-12">
              <div className="svc-card">
                <h3>Ecommerce and DTC brands</h3>
                <p className="mt-4">Stores whose shoppers search Google and now ask a chatbot for the best option before they buy. We rank your category and product pages and get your brand named in those answers.</p>
              </div>
              <div className="svc-card">
                <h3>Professional services and B2B</h3>
                <p className="mt-4">Firms where a buyer builds a shortlist from a search or an AI answer. We make sure you are on it, with the expertise and trust signals Google and the models want to cite.</p>
              </div>
              <div className="svc-card">
                <h3>Local and small businesses</h3>
                <p className="mt-4">Focused businesses that can be the clearest answer to a specific, local search. We pick the terms you can win, build the local pages, and make you the option engines reach for.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. UK MARKET + DEMAND ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">The UK SEO market</span>
            <h2 style={{ maxWidth: 780 }}>Businesses are searching for SEO help, and the demand is specific</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    Search demand for SEO in the UK is large and specific. &quot;seo agency uk&quot; alone draws
                    thousands of searches a month, while local and ecommerce terms like &quot;local seo services&quot;
                    and &quot;ecommerce seo agency&quot; sit lower in difficulty and are winnable quickly. These are
                    buyers looking for help right now, not people browsing definitions.
                  </p>
                  <p>
                    That mix is the plan. We chase the low-difficulty local and ecommerce terms for fast movement,
                    then build toward the harder national terms over time, for businesses in London, Manchester,
                    Birmingham, Leeds, and across the UK, with the same senior team on every account. London is the
                    deepest and most contested of those markets, so it gets its own breakdown of the search demand and
                    how the work changes borough by borough: read <a href="/uk/london/seo">SEO services in London</a>.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/london">SEO London</a>
                  <a className="city-pill" href="/uk/manchester">SEO Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">SEO Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">SEO Leeds</a>
                  <a className="city-pill" href="/uk/ecommerce-seo">Ecommerce SEO</a>
                  <a className="city-pill" href="/uk/shopify-seo">Shopify SEO</a>
                  <a className="city-pill" href="/uk/ai-seo">AI SEO</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  {[
                    { kw: 'seo agency uk', v: '3,600', w: '100%', kd: 'KD 42 · Stretch target' },
                    { kw: 'local seo services', v: '1,600', w: '44%', kd: 'KD 2 · Quick win' },
                    { kw: 'ecommerce seo agency', v: '1,000', w: '28%', kd: 'KD 0 · Quick win' },
                    { kw: 'seo agency manchester', v: '1,000', w: '28%', kd: 'KD 9 · Winnable now' },
                    { kw: 'seo audit services', v: '880', w: '24%', kd: 'KD 14 · Winnable now' },
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
              <h2>UK SEO agencies worth knowing</h2>
              <p className="lead mt-4">
                We would rather tell you the truth than pretend we are the only option. Here are UK agencies doing
                real search work, including us. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {SEO_AGENCIES.map((a, i) => (
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
              Agencies named from live UK search results for SEO agency terms, July 2026. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 12. WHAT SHAPES AN ENGAGEMENT (qualitative, no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What shapes an SEO engagement</h2>
                <div className="stack mt-6">
                  <p>
                    We do not sell one-size SEO packages, because a local firm chasing a handful of searches and a
                    national brand fighting for a whole category are different jobs. What shapes the work is where you
                    are starting, how competitive your market is, and how much content and authority you already have
                    to build on.
                  </p>
                  <p>
                    A business with a healthy site often needs mostly on-page, technical, and answer-first structure to
                    start climbing. A newer site needs foundations first. We scope it after a short call and a free SEO
                    audit, so the plan matches your situation rather than a template, and you know what the work is
                    before you commit.
                  </p>
                </div>
                <div className="mt-8">
                  <ModalCTAButton label="Get my free SEO audit" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Where you rank and appear today</div><div className="scorecard-val" style={{ fontSize: 14 }}>Start</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How competitive your market is</div><div className="scorecard-val" style={{ fontSize: 14 }}>Field</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Content and authority you already have</div><div className="scorecard-val" style={{ fontSize: 14 }}>Base</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Local, national, or ecommerce focus</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free SEO audit before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>SEO questions UK founders actually ask</h2>
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
            <h2>See where your business really ranks</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours with a free SEO audit: where you
              rank in Google today, where you show up in AI answers, and where a competitor is ahead. No spam, no
              obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free SEO audit" region="uk" modalVariant="default" btnVariant="primary-light" />
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

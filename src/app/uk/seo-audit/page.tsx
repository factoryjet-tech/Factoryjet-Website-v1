import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import './seo-audit.css';

const CANONICAL = 'https://factoryjet.com/uk/seo-audit';
const UPDATED = '2026-07-25';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'SEO audit basics' },
  { key: 'checks',  label: 'What we check' },
  { key: 'ai',      label: 'AI visibility' },
  { key: 'results', label: 'Results & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── SEO audit basics ──
  { category: 'basics', question: 'What is an SEO audit?',
    answer: 'An SEO audit is a structured review of a website across three areas: technical health, on-page content, and backlink authority. It explains why a site is not ranking, or ranking below its potential, and lists what to fix first. In 2026 a proper audit adds AI visibility: whether ChatGPT, Gemini, Perplexity, and Google AI Overviews mention the business at all.' },
  { category: 'basics', question: 'What is included in an SEO audit?',
    answer: 'A full audit covers technical health such as crawling, indexing, speed, and Core Web Vitals, on-page and content quality, your backlink and authority profile, schema and structured data, local and map-pack presence if relevant, and now AI visibility across ChatGPT, Gemini, Perplexity, and Google AI Overviews. It ends with a short list ranked by what will move the needle first.' },
  { category: 'basics', question: 'Do you offer a free SEO audit?',
    answer: 'Yes. The free audit covers technical health, on-page content, backlinks, and AI visibility, reviewed by a senior person rather than generated entirely by a tool. It is a genuine, useful look at your site, not a teaser version designed to push you into a contract. What you do with the findings afterward, including nothing, is entirely up to you.' },
  { category: 'basics', question: 'How long does an SEO audit take?',
    answer: 'Most audits take between one and two weeks from the call to the findings being ready, depending on the size of the site and how much history there is to review. A small brochure site moves faster than a large ecommerce store with years of content and a complicated backlink profile. We confirm the expected timeline on the first call.' },
  { category: 'basics', question: 'How often should a business get an SEO audit?',
    answer: 'Once a year is a reasonable baseline for most businesses, and sooner if something changed: a site redesign, a drop in traffic, a new agency taking over, or a shift toward AI search that nobody has checked yet. Businesses in fast-moving categories, or ones that rely heavily on organic traffic, often benefit from a lighter check every six months instead.' },
  { category: 'basics', question: 'Do you guarantee you will find something wrong?',
    answer: 'No, and we would rather say that plainly than promise a scary report to justify the audit. Some sites are in genuinely good shape, and we say so. Most sites we look at do have real, fixable issues though, often ones a previous automated scan flagged incorrectly or missed completely because it could not read the page the way a person can.' },
  { category: 'basics', question: 'Is a free audit really thorough, or a sales pitch?',
    answer: 'It is genuinely thorough. We built the free audit to be useful on its own, whether or not you ever work with us, because a rushed or padded version would not tell you anything true. The only difference between the free audit and a deeper, ongoing engagement is scope, not honesty.' },
  { category: 'basics', question: 'Can a small business benefit from an SEO audit, or is it only for bigger sites?',
    answer: 'Small businesses often benefit more, not less. A large site can absorb some waste and still rank on size and history alone. A small business usually cannot, so a handful of fixable issues, a missing schema tag, a slow page, a thin service page, can matter far more to a five-page site than to a five-thousand-page one.' },

  // ── What we check ──
  { category: 'checks', question: 'What is a technical SEO audit?',
    answer: 'A technical SEO audit checks whether search engines, and now AI crawlers, can actually reach, load, and understand your pages: crawlability, indexing, site speed, Core Web Vitals, broken links, and structured data. It is the plumbing behind a site. Strong content on a technically broken site rarely ranks well, because the engine never gets a clean read of it.' },
  { category: 'checks', question: 'What do you actually check in an SEO audit?',
    answer: 'Technical health first: crawling, indexing, speed, and Core Web Vitals. Then on-page and content quality, your backlink and authority profile, schema and structured data, local and map-pack presence where relevant, and AI visibility across ChatGPT, Gemini, Perplexity, and Google AI Overviews. Everything gets written up in one prioritised list, not several separate reports to piece together yourself.' },
  { category: 'checks', question: 'How is a technical audit different from a content audit?',
    answer: 'A technical audit looks at whether engines can crawl, load, and index your site properly: speed, structure, broken links, redirects. A content audit looks at what is actually on the page: whether it answers a real question, says something specific, and is organised in a way a reader or an AI engine can follow. A full audit covers both, because one without the other misses half the problem.' },
  { category: 'checks', question: 'What is a backlink audit and why does it matter?',
    answer: 'A backlink audit reviews the other websites linking to yours: which ones are helping your authority, which look risky or spammy, and how your overall link profile compares with competitors who currently outrank you. Search engines still treat credible links as a trust signal, so a backlink audit often explains a ranking gap that on-page fixes alone cannot close.' },
  { category: 'checks', question: 'Can you audit a Shopify or WooCommerce store specifically?',
    answer: 'Yes. Ecommerce platforms have their own quirks: duplicate collection pages, thin product descriptions, app bloat slowing down load times, and templated content that reads identically across hundreds of stores. We audit Shopify and WooCommerce sites with those platform-specific issues in mind, alongside the same technical, content, and backlink checks any audit covers.' },
  { category: 'checks', question: 'Do you audit for local SEO and map-pack visibility too?',
    answer: 'Yes, for any business with a physical location or a defined service area. That means checking your Google Business Profile, the consistency of your name, address, and phone details across the web, local reviews, and whether your site has genuine, useful pages for each area you serve rather than one generic page trying to cover them all.' },
  { category: 'checks', question: 'What is a Core Web Vitals check and why is it part of an audit?',
    answer: 'Core Web Vitals measure how a page actually feels to use: how fast it loads, how quickly it becomes interactive, and whether content jumps around while loading. Google uses these as a ranking signal, and a slow or jumpy page loses visitors before they ever read your content. We check and explain each score in plain terms, not just a raw number.' },
  { category: 'checks', question: 'Do you check my competitors as part of the audit?',
    answer: 'Yes, briefly. We look at who is currently outranking you for the terms that matter and note what they are doing that you are not, whether that is content depth, backlink strength, technical speed, or AI visibility. It is not a full competitor teardown, but it gives useful context for why a competitor sits above you today.' },

  // ── AI visibility ──
  { category: 'ai', question: 'Will an audit tell me why I do not show up in ChatGPT or AI Overviews?',
    answer: 'Yes, that is now a core part of the audit rather than an afterthought. We run the questions your buyers would realistically ask across ChatGPT, Gemini, Perplexity, and Google AI Overviews, note whether you get named, a competitor gets named instead, or nobody gets named at all, and explain what is likely blocking you: missing schema, thin content, or simply no credible mentions elsewhere.' },
  { category: 'ai', question: 'What is AI visibility, and why is it part of an SEO audit now?',
    answer: 'AI visibility is whether a business gets named when someone asks ChatGPT, Gemini, Perplexity, or Google for a recommendation, rather than only ranking in a list of links. Around 30 percent of UK searches already show an AI Overview instead of plain results, so an audit that only checks Google rankings is now checking less than it used to.' },
  { category: 'ai', question: 'Which AI engines do you check for, specifically?',
    answer: 'We check ChatGPT, Google Gemini, Perplexity, and Google AI Overviews, because those four currently cover the large majority of AI-driven search and research behaviour among UK buyers. If your customers lean heavily on a different tool, we adjust the check accordingly, but these four are the standard baseline for every audit we run.' },
  { category: 'ai', question: 'Does being ranked in Google mean I will also show up in AI answers?',
    answer: 'Not automatically, though it helps. AI engines draw on the same open web that ranks in Google, so strong rankings are useful raw material. But being named in an answer also depends on schema, how clearly your content states the answer, and whether other credible sites mention you. A site can rank well and still be invisible inside an AI summary.' },
  { category: 'ai', question: 'Can you fix AI visibility issues, or just report them?',
    answer: 'The audit itself only reports what we find, so you know exactly where you stand before spending anything further. If you want us to fix what the audit uncovers, that becomes a separate, scoped piece of work: entity and schema fixes, content restructuring, and building the credible mentions that get a business named in an AI answer.' },

  // ── Results & working with us ──
  { category: 'results', question: 'Do I get a written report, or just a call?',
    answer: 'Both. You get a written, prioritised list of findings you can keep, forward to a colleague, or hand to another agency, plus a call where we walk through it in plain English and answer questions live. Some people want to read first and talk second, others want the opposite. We support either order.' },
  { category: 'results', question: 'What happens after the audit, are you obligated to hire the agency?',
    answer: 'No. The audit stands on its own. Some businesses take the list and fix things internally, some bring it to a different agency, and some ask us to help with the work. All three are common outcomes, and we would rather you make that call once you have seen exactly what needs doing than agree to anything before that.' },
  { category: 'results', question: 'Will you tell me if my previous agency did a bad job?',
    answer: 'Yes, plainly, and just as plainly if they did good work. We have seen audits used as a scare tactic against a perfectly competent previous agency, and that is not honest. If something was missed, mishandled, or left half-finished, we say so and explain why. If the foundations are solid, we tell you that too and build from there.' },
  { category: 'results', question: 'Are you a UK-based team?',
    answer: 'Yes. We work with businesses across London, Manchester, Birmingham, Leeds, and the rest of the UK, with audits and calls run remotely so a company anywhere in the country gets the same senior person and the same standard of review, not a junior team handling the work while someone more experienced signs it off.' },
  { category: 'results', question: 'Who actually reviews my audit, a person or a tool?',
    answer: 'A person, every time. Automated tools do the initial scanning because they are fast at surfacing raw data, but a senior member of the team reads the output, checks it against the actual site, removes false alarms, and ranks what is left by real impact before anything reaches you. The founder reviews the findings before they go out.' },
  { category: 'results', question: 'Do you offer ongoing SEO after the audit?',
    answer: 'We can, if it makes sense for what the audit found. Some businesses only need the fixes done once and are set for a year. Others have gaps that take sustained content and authority work to close properly. We scope that separately and only after you have seen the findings, never as a condition of getting the audit itself.' },
  { category: 'results', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book the audit call, where we agree what to look at and, for most sites, run the technical, content, backlink, and AI-visibility checks straight away. You get the findings and a plain walkthrough call after that, with no obligation attached.' },
];

/* ─── Named UK SEO audit / agencies (open self-disclosure, ItemList) ── */
const SEO_AUDIT_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. A senior person reviews every audit personally, and it now includes a check of whether AI engines such as ChatGPT and Gemini mention the business at all.' },
  { name: 'Targeted SEO', note: 'A UK agency offering SEO audits and ongoing search marketing for small and mid-sized businesses.' },
  { name: 'Direwolf SEO', note: 'An SEO-focused agency known for technical audits and close, hands-on account management.' },
  { name: 'Sherbet Donkey', note: 'A UK digital marketing agency whose services include SEO audits alongside paid media and content work.' },
  { name: 'Outer Box Design', note: 'An agency offering website design alongside SEO audit and optimisation services for UK businesses.' },
  { name: 'Found', note: 'A large London performance agency with an established SEO practice and an audit offering inside a wider service range.' },
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
      name: 'SEO Audit Services UK',
      serviceType: 'SEO audit, technical SEO audit, content audit, backlink audit, and AI-visibility check',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Human-reviewed SEO audit services for UK businesses. We check technical health, on-page content, and backlink authority, and now AI visibility across ChatGPT, Gemini, Perplexity, and Google AI Overviews.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'SEO Audit', item: CANONICAL },
      ],
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'SEO Audit Services UK | Free & Human-Reviewed | FactoryJet',
      headline: 'An SEO Audit for UK Businesses That Actually Tells You What to Fix First',
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
      name: 'UK SEO audit agencies',
      itemListElement: SEO_AUDIT_AGENCIES.map((a, i) => ({
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
  title: 'SEO Audit Services UK | Free & Human-Reviewed | FactoryJet',
  description:
    'FactoryJet runs human-reviewed UK SEO audits: technical, content, backlinks, and AI visibility across ChatGPT and Google AI Overviews. Free, no obligation.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'SEO Audit Services UK | Free & Human-Reviewed | FactoryJet',
    description:
      'A UK SEO audit that goes beyond an automated PDF: technical health, on-page content, backlinks, and AI visibility across ChatGPT, Gemini, Perplexity, and Google AI Overviews. Free, human-reviewed.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/seo-audit-og.webp', width: 1200, height: 630, alt: 'SEO Audit Services UK by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function SeoAuditUKPage() {
  return (
    <>
      <script id="ld-uk-seo-audit" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-seoaudit">
      <main>

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK SEO Audit Service</span>
                  <span className="chip">Technical + Content + Backlinks</span>
                  <span className="chip">Now Checks AI Visibility</span>
                </div>
                <h1>An SEO Audit for UK Businesses That Actually Tells You What to Fix First</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet runs SEO audits for UK businesses that want a straight answer, not a stack of jargon.
                  We check your technical health, on-page content, and backlink profile, then check whether
                  ChatGPT, Gemini, Perplexity, and Google AI Overviews mention your business at all. A senior
                  person reviews every finding before it reaches you.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />25 July 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_seo_audit_hero" submitLabel="Get my free SEO audit" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">What your audit covers</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Technical health</div><div className="scorecard-note">crawling, speed, Core Web Vitals</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Crawled</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">On-page &amp; content</div><div className="scorecard-note">quality, structure, relevance</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Reviewed</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Backlinks &amp; authority</div><div className="scorecard-note">what helps, what does not</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Checked</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">AI visibility</div><div className="scorecard-note">ChatGPT, Gemini, Perplexity, AI Overviews</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Tested</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Prioritised action list</div><div className="scorecard-note">ranked by likely impact</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is an SEO audit?</span>
              <p>
                An SEO audit is a structured review of technical health, on-page content, and backlink authority
                across a website, designed to explain why it is not ranking, or ranking below its potential in
                Google. A proper audit in 2026 checks one more thing: AI visibility, whether ChatGPT, Gemini,
                Perplexity, and Google AI Overviews name the business at all.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most free SEO audits are an automated PDF from a tool nobody reads, built to scare a business into a
              contract rather than to help it. Ours is different. A senior person on the team reviews every finding,
              keeps the list short and ranked by impact, and answers two questions a good audit in 2026 has to
              cover, not one: why the business is not ranking where it should, and why no AI engine mentions it
              when a buyer asks.
            </p>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className="col-4" style={{ gap: 20 }}>
              <div className="trust-pill"><span className="dot dot-orange" />Human-reviewed by a senior person, every time</div>
              <div className="trust-pill"><span className="dot dot-orange" />Technical, content, and backlink audit in one</div>
              <div className="trust-pill"><span className="dot dot-orange" />AI visibility checked across four major engines</div>
              <div className="trust-pill"><span className="dot dot-orange" />Founder reviews the findings before you see them</div>
            </div>
          </div>
        </section>

        {/* ═══ 4. WHY IT MATTERS NOW (cited external stats) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Why an audit, why now</span>
                <h2>An audit that only checks Google is already out of date</h2>
                <div className="stack mt-6">
                  <p>
                    The way people search changed, and most SEO audits have not caught up. Ofcom, the UK
                    communications regulator, reports that around 30 percent of searches now show an AI Overview,
                    and more than half of adults say they see these summaries often. An audit that only checks
                    blue-link rankings is already missing a third of the picture.
                  </p>
                  <p>
                    The click math backs this up. Pew Research Center tracked real browsing and found people
                    clicked a link about 8 percent of the time when an AI summary appeared, against 15 percent
                    when it did not, roughly half as often. A source link inside the AI summary itself was clicked
                    just 1 percent of the time. Ranking well is worth less than it used to be.
                  </p>
                  <p>
                    That leaves two questions a serious audit has to answer, not one: why the business is not
                    ranking as well as it should in Google, and why ChatGPT, Gemini, Perplexity, and AI Overviews
                    do not mention it at all when a buyer asks a relevant question. Checking only the first
                    question is now half an audit.
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
                    { v: '1%', t: 'of clicks land on a source link inside the AI summary itself', s: 'Pew Research Center, Jul 2025', u: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
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

        {/* ═══ 5. HUMAN-REVIEWED, NOT AN AUTOMATED REPORT (E-E-A-T + photo) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who actually does the work</span>
                <h2>A senior person runs your audit personally, not a report generator</h2>
                <div className="stack mt-6">
                  <p>
                    A lot of what gets called a free SEO audit online is a PDF built entirely by software: a
                    crawler runs, a template fills in red and green icons, and the file lands in your inbox with
                    no one at the agency ever having looked at your site. It reads scary on purpose, because the
                    whole point is to push a sale.
                  </p>
                  <p>
                    That is not how we do it. Every audit that leaves FactoryJet has been read, checked, and
                    prioritised by a senior person on the team, and the founder reviews the findings before they
                    reach you. If something in the automated scan is a false alarm, we say so. If something
                    matters more than the tool thinks, we move it up the list.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img
                  src="/images/uk/shared/uk-team-collaborating.webp"
                  width={900}
                  height={672}
                  loading="lazy"
                  decoding="async"
                  alt="A UK SEO team reviewing a site audit and analytics dashboard together"
                  style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. WHAT YOU GET ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">The output</span>
              <h2>What you actually get when the audit is done</h2>
              <p className="lead mt-4">
                Not a forty-page scare document. A short, ranked list of what to fix and why, plus the underlying
                detail if you want it.
              </p>
            </div>
            <ul className="col-2 mt-12" style={{ gap: 24 }}>
              <li className="card">
                <h3>A prioritised findings list</h3>
                <p className="mt-4">Every issue ranked by likely impact on rankings and enquiries, not by how alarming it looks in a template.</p>
              </li>
              <li className="card">
                <h3>A technical health scorecard</h3>
                <p className="mt-4">Crawlability, indexing, Core Web Vitals, and speed, marked clearly so you know what is actually broken versus cosmetic.</p>
              </li>
              <li className="card">
                <h3>A content and on-page review</h3>
                <p className="mt-4">Where your pages are thin, off-topic, or missing the structure that helps both Google and AI engines understand them.</p>
              </li>
              <li className="card">
                <h3>A backlink and authority summary</h3>
                <p className="mt-4">What is helping you, what looks risky, and where a previous agency may have taken a shortcut that is now working against you.</p>
              </li>
              <li className="card">
                <h3>An AI-visibility snapshot</h3>
                <p className="mt-4">Whether ChatGPT, Gemini, Perplexity, and Google AI Overviews name your business today, tested against the questions your buyers actually ask.</p>
              </li>
              <li className="card">
                <h3>A walkthrough call, not just a document</h3>
                <p className="mt-4">We explain the findings in plain English and answer questions live, rather than leaving you to interpret a report alone.</p>
              </li>
              <li className="card">
                <h3>A 90-day action plan</h3>
                <p className="mt-4">The fixes worth doing first, in order, so you know where to start whether you hire us or someone else.</p>
              </li>
              <li className="card">
                <h3>An honest read on your previous SEO work</h3>
                <p className="mt-4">If a past agency did good work, we say so. If something was missed or mishandled, we tell you plainly.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 7. LISTICLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">How we check it</span>
              <h2>Seven things our SEO audit actually checks</h2>
              <p className="lead mt-4">
                Not a black box. Here is exactly what we look at, and why each one matters.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Technical health', d: <>Crawlability, indexing, site speed, and Core Web Vitals. If Google or an AI crawler cannot read or load your pages properly, nothing else on this list matters yet.</> },
                { n: '02', t: 'On-page and content quality', d: <>Whether each page targets a real question people ask, says something specific, and is structured so a reader, and an engine, can find the answer fast.</> },
                { n: '03', t: 'Backlink and authority profile', d: <>What is linking to you, whether it is helping or quietly working against you, and how your authority compares with the businesses actually outranking you.</> },
                { n: '04', t: 'Schema and structured data', d: <>Whether your pages carry the structured data that helps Google, and AI engines, understand exactly what you are and what you offer.</> },
                { n: '05', t: 'Local and map-pack presence', d: <>For any business with a location or service area, we check your Google Business Profile and map-pack visibility alongside the rest of the site. Read more about our <a href="/uk/local-seo" style={{ color: '#B23E13', textDecoration: 'underline' }}>local SEO service</a>.</> },
                { n: '06', t: 'AI visibility across ChatGPT, Gemini, Perplexity, and AI Overviews', d: <>We run the questions your buyers would actually ask, the same check that anchors our dedicated <a href="/uk/ai-seo" style={{ color: '#B23E13', textDecoration: 'underline' }}>AI SEO</a> service, and note where you get named, where a competitor gets named instead, and where nobody gets named at all.</> },
                { n: '07', t: 'A prioritised 90-day action list', d: <>Everything above gets ranked by what will move the needle first, so the audit ends in a plan, not just a diagnosis.</> },
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

        {/* ═══ 8. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 680 }}>FactoryJet vs an automated tool report vs a typical agency &quot;free audit&quot;</h2>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Automated tool report</th>
                    <th>Typical agency &quot;free audit&quot;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Reviewed by a senior person</td><td className="fj"><span className="yes">Yes, every time</span></td><td><span className="no">No, fully automated</span></td><td><span className="partial">Sometimes, briefly</span></td></tr>
                  <tr><td className="feat">Checks AI visibility (ChatGPT, Gemini, Perplexity, AI Overviews)</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">No</span></td><td><span className="no">Rarely</span></td></tr>
                  <tr><td className="feat">Ends in a prioritised action list</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Generic template</span></td><td><span className="partial">Sometimes</span></td></tr>
                  <tr><td className="feat">Honest about what a previous agency got right</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Not applicable</span></td><td><span className="no">Rarely</span></td></tr>
                  <tr><td className="feat">Obligation to sign a contract after</td><td className="fj"><span className="yes">None</span></td><td><span className="yes">None</span></td><td><span className="partial">Often expected</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 9. PROCESS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How it works</span>
              <h2>From booking a call to a ranked action list, in four stages</h2>
            </div>
            <ol className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <li className="card"><span className="stage-num">01</span><h3>Book a short call</h3><p className="mt-4">Tell us about your site and what is bothering you: slow rankings, a redesign gone wrong, traffic that dropped. Fifteen minutes is usually enough.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>We run the audit</h3><p className="mt-4">Technical, content, backlinks, schema, and AI visibility, checked by the team and reviewed personally before anything is written up.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>We walk you through it</h3><p className="mt-4">A plain-English call through the findings, in order of what matters most, with time for your questions.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>You decide what happens next</h3><p className="mt-4">Keep the plan and run it yourself, bring it to another agency, or work with us. No obligation either way.</p></li>
            </ol>
          </div>
        </section>

        {/* ═══ 10. WHO WE SERVE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Who this audit is for</span>
              <h2>UK businesses that want a straight answer before they spend on SEO</h2>
              <p className="lead mt-4">
                An audit pays off fastest for three kinds of business.
              </p>
            </div>
            <div className="col-3 mt-12">
              <div className="svc-card">
                <h3>Ecommerce and Shopify stores</h3>
                <p className="mt-4">Stores where a slow product page or a missed schema tag costs sales every day. We audit Shopify and WooCommerce sites with the platform quirks in mind.</p>
              </div>
              <div className="svc-card">
                <h3>Service businesses and B2B</h3>
                <p className="mt-4">Firms whose buyers research for weeks before they call. We check whether your site, and now AI engines, actually make the case for you.</p>
              </div>
              <div className="svc-card">
                <h3>Local and multi-location businesses</h3>
                <p className="mt-4">Businesses that live or die by the map pack. We check Google Business Profile signals and local content alongside the rest of the site. Read more about our <a href="/uk/local-seo" style={{ color: '#B23E13', textDecoration: 'underline' }}>local SEO service</a>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. UK MARKET + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">The UK SEO audit market</span>
            <h2 style={{ maxWidth: 780 }}>Businesses are searching for an SEO audit right now. Most get an automated PDF back</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    Search demand for an SEO audit in the UK is steady and specific. Terms like &quot;seo audit
                    services&quot; and &quot;seo auditing services&quot; draw hundreds of searches a month, and
                    &quot;seo audit service&quot; sits right alongside them. These are business owners who already
                    suspect something is wrong and want someone to tell them what, not people browsing definitions.
                  </p>
                  <p>
                    Most of the pages ranking for these terms are lead-generation funnels dressed up as audits:
                    fill in an email, get an automated PDF, then a sales call. This page exists to do the actual
                    work properly, for businesses across London, Manchester, Birmingham, Leeds, and the rest of
                    the UK, with the same senior team on every account.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/london">SEO Audit London</a>
                  <a className="city-pill" href="/uk/manchester">SEO Audit Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">SEO Audit Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">SEO Audit Leeds</a>
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
                    { kw: 'seo audit services', v: '880', w: '100%', kd: 'KD 14 · Winnable' },
                    { kw: 'seo auditing services', v: '880', w: '100%', kd: 'KD 0 · Quick win' },
                    { kw: 'seo audit service', v: '880', w: '100%', kd: 'KD 0 · Quick win' },
                    { kw: 'professional seo services', v: '880', w: '100%', kd: 'KD 18 · Winnable, adjacent' },
                    { kw: 'shopify seo agency', v: '720', w: '82%', kd: 'KD 0 · Adjacent quick win' },
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

        {/* ═══ 12. COMPETITOR LISTICLE (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK SEO audit and agency options worth knowing</h2>
              <p className="lead mt-4">
                We would rather point you to the real field than pretend we are the only option. Here are UK
                agencies doing real audit and SEO work, including us. Talk to more than one and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {SEO_AUDIT_AGENCIES.map((a, i) => (
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
              Agencies named from live UK search results for SEO audit terms, July 2026. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 13. WHAT SHAPES AN ENGAGEMENT (qualitative, no pricing) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What happens if you want ongoing help after the audit</h2>
                <div className="stack mt-6">
                  <p>
                    The audit itself is not the sales pitch. Some businesses take the findings and fix them
                    internally, and that is a fine outcome. Others ask us to handle the work, and what that looks
                    like depends entirely on what the audit found.
                  </p>
                  <p>
                    A site with strong bones might only need the technical and AI-visibility fixes plus a few
                    months of content. A site starting from further back needs a longer runway. If ongoing work
                    makes sense, it usually plugs into our <a href="/uk/seo" style={{ color: '#B23E13', textDecoration: 'underline' }}>SEO service</a>, scoped to match what the audit actually
                    found, so the plan fits your situation rather than a template, and you know what the work is
                    before you commit.
                  </p>
                </div>
                <div className="mt-8">
                  <ModalCTAButton label="Get my free SEO audit" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What shapes the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">What the audit actually finds</div><div className="scorecard-val" style={{ fontSize: 14 }}>Start</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How competitive your market is</div><div className="scorecard-val" style={{ fontSize: 14 }}>Field</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Content and authority you already have</div><div className="scorecard-val" style={{ fontSize: 14 }}>Base</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Whether AI visibility needs work too</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free audit before you commit to anything</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>SEO audit questions UK founders actually ask</h2>
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

        {/* ═══ 15. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Find out what is actually holding your rankings back</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book your free SEO audit:
              technical health, content, backlinks, and whether ChatGPT, Gemini, and Google AI Overviews mention
              your business today. No obligation, and no automated report dump.
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

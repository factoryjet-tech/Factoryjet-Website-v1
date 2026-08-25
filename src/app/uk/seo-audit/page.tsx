import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import './seo-audit.css';

const CANONICAL = 'https://factoryjet.com/uk/seo-audit';
const UPDATED = '2026-08-25';
const UPDATED_LABEL = '25 August 2026';

/* ─── Breadcrumb: ONE array feeds the visible trail and the JSON-LD ── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Free SEO Audit', url: CANONICAL },
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
  { key: 'basics',  label: 'SEO audit basics' },
  { key: 'checks',  label: 'What we check' },
  { key: 'ai',      label: 'AI visibility' },
  { key: 'access',  label: 'Access, privacy & the catch' },
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

  // ── Access, privacy & the catch ──
  { category: 'access', question: 'What do you need from me to run the audit?',
    answer: 'Your website address, read-only access to Google Search Console and Google Analytics if those accounts exist, the three or four terms you most want to be found for, and the names of one or two competitors who currently beat you. That is the whole list. If you do not have Search Console set up, we can still audit the site, we just see less history.' },
  { category: 'access', question: 'Do I have to give you my website login or password?',
    answer: 'No, and you should be wary of anyone who asks for one to run an audit. An audit only reads: it looks at your public pages the way a search engine does, plus read-only reporting data if you choose to share it. We never need to change anything on your site to tell you what is wrong with it.' },
  { category: 'access', question: 'What happens to my data and the audit findings?',
    answer: 'The findings are yours. We use your site data only to produce your audit, we do not sell it, publish it, or use your site as a named example anywhere without asking you first. You can withdraw the read-only access you granted at any point, in two clicks, and that removes our view of your accounts immediately.' },
  { category: 'access', question: 'Will I get chased by a sales team afterwards?',
    answer: 'No. There is no drip sequence and no call rota. After the walkthrough call the next move is yours, and if we do not hear from you we leave it there. We would rather have a small number of people who chose to work with us than a long list of people avoiding our emails.' },
  { category: 'access', question: 'What is the catch with a free SEO audit?',
    answer: 'The honest answer is that we hope some people who see good work will ask us to do more of it. That is the entire business case. What we do not do is pad the findings, invent urgency, or hold back the useful half until you pay. If the audit is only valuable when you buy something, it was never really free.' },
  { category: 'access', question: 'Can I get the audit without a call?',
    answer: 'You can have the written findings without the walkthrough, yes, though we would gently push for fifteen minutes on the phone at the start. Without a short conversation we are guessing at which pages and enquiries actually matter to you, and an audit aimed at the wrong part of the site is a waste of everyone\u2019s time.' },
  { category: 'access', question: 'Is a website audit the same thing as an SEO audit?',
    answer: 'They overlap heavily, and most people mean the same thing by both. A website audit sometimes stretches wider, into design, accessibility, and conversion. Ours covers the search and technical side in full, and we flag design or usability problems we spot along the way, because a page that loses visitors also loses rankings eventually.' },
  { category: 'access', question: 'Do you audit sites outside the UK?',
    answer: 'Yes, though this page is written for UK businesses and most of our audit work is UK-based. If you are trading into the UK from elsewhere, or out of the UK into other markets, say so on the first call, because the checks change: hreflang, currency and address signals, and which version of Google we test against all shift.' },
  { category: 'access', question: 'How quickly can you start?',
    answer: 'Usually within a few days of the first call. The founder replies to enquiries within 24 hours to book that call, and for most sites we begin the technical, content, backlink, and AI-visibility checks straight after it. Larger sites and busier weeks stretch that a little, and we tell you the honest date rather than an optimistic one.' },

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

/* ─── Where the audit request comes from: every UK page that links here ── */
const UK_CITIES: { slug: string; name: string }[] = [
  { slug: 'london', name: 'London' },
  { slug: 'manchester', name: 'Manchester' },
  { slug: 'birmingham', name: 'Birmingham' },
  { slug: 'leeds', name: 'Leeds' },
  { slug: 'liverpool', name: 'Liverpool' },
  { slug: 'sheffield', name: 'Sheffield' },
  { slug: 'bristol', name: 'Bristol' },
  { slug: 'edinburgh', name: 'Edinburgh' },
  { slug: 'glasgow', name: 'Glasgow' },
  { slug: 'newcastle', name: 'Newcastle' },
  { slug: 'nottingham', name: 'Nottingham' },
  { slug: 'cardiff', name: 'Cardiff' },
  { slug: 'southampton', name: 'Southampton' },
  { slug: 'brighton', name: 'Brighton' },
  { slug: 'oxford', name: 'Oxford' },
  { slug: 'cambridge', name: 'Cambridge' },
  { slug: 'derby', name: 'Derby' },
  { slug: 'coventry', name: 'Coventry' },
  { slug: 'hull', name: 'Hull' },
  { slug: 'plymouth', name: 'Plymouth' },
  { slug: 'leicester', name: 'Leicester' },
];

const UK_HUBS: { slug: string; name: string; note: string }[] = [
  { slug: 'seo', name: 'SEO', note: 'ongoing organic search work once the audit fixes are agreed' },
  { slug: 'local-seo', name: 'Local SEO', note: 'map pack, Google Business Profile, and service-area pages' },
  { slug: 'ai-seo', name: 'AI Search and GEO', note: 'getting named inside ChatGPT, Gemini, and AI Overviews' },
  { slug: 'ecommerce-seo', name: 'Ecommerce SEO', note: 'category and product pages that compete on their own merit' },
  { slug: 'shopify-seo', name: 'Shopify SEO', note: 'the platform quirks that cost Shopify stores rankings' },
  { slug: 'web-design', name: 'Web Design', note: 'when the audit finds the site itself is the bottleneck' },
  { slug: 'ecommerce-development', name: 'Ecommerce Development', note: 'rebuilding a store that cannot be fixed in place' },
  { slug: 'shopify-development', name: 'Shopify Development', note: 'theme and app work on Shopify and Shopify Plus' },
  { slug: 'ai-agents', name: 'AI Agents', note: 'automating the follow-up work behind the website' },
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
      name: 'Free SEO Audit UK',
      serviceType: 'SEO audit',
      description:
        'A free SEO audit for UK websites covering technical health, on-page content, backlinks, schema, and AI visibility across ChatGPT, Gemini, Perplexity, and Google AI Overviews. Reviewed by a senior person before it reaches you.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      provider: { '@id': 'https://factoryjet.com/#organization' },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Chief Technical Architect',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Free SEO Audit UK',
      inLanguage: 'en-GB',
      dateModified: UPDATED,
      isPartOf: { '@id': 'https://factoryjet.com/#organization' },
      primaryTopicOf: { '@id': `${CANONICAL}#service` },
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
  title: 'Free SEO Audit UK | Human-Reviewed Audit | FactoryJet',
  description:
    'A free SEO audit UK businesses can act on. A full website audit: technical health, content, backlinks, plus whether ChatGPT and AI Overviews name you.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'Free SEO Audit UK | Human-Reviewed Audit | FactoryJet',
    description:
      'A free SEO audit UK businesses can act on: technical health, on-page content, backlinks, and AI visibility across ChatGPT, Gemini, Perplexity, and Google AI Overviews. Reviewed by a person, not generated by a tool.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/seo-audit-og.webp', width: 1200, height: 630, alt: 'Free SEO audit UK by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function SeoAuditUKPage() {
  return (
    <>
      <script id="ld-uk-seo-audit" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script id="ld-uk-seo-audit-breadcrumb" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="uk-seoaudit">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />Free SEO Audit UK</span>
                  <span className="chip">Technical + Content + Backlinks</span>
                  <span className="chip">Includes an AI visibility check</span>
                </div>
                <h1>A Free SEO Audit for UK Websites That Tells You What to Fix First</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  This is the free SEO audit UK business owners land on after clicking &quot;get a site
                  review&quot; somewhere else on this site. It is a real website audit, not a teaser. We check
                  your technical health, on-page content, and backlink profile, then check whether ChatGPT,
                  Gemini, Perplexity, and Google AI Overviews mention your business at all. A senior person
                  reads every finding before it reaches you. It costs you about 40 minutes of your time and
                  nothing else.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />{UPDATED_LABEL}</div>
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

        {/* ═══ 1b. COUNTER-NARRATIVE & TECHNICAL NUANCE ═══ */}
        <section className="sec" style={{ backgroundColor: '#F9F9FC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="wrap">
            <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
              <span className="chip" style={{ marginBottom: 12 }}>The Direct Comparison</span>
              <h2>The Typical UK Agency Frustration vs The FactoryJet Engineering Approach</h2>
              <p className="lead mt-4">
                Automated PDF audit reports from traditional agencies generate hundreds of pages of noise without actionable solutions. FactoryJet delivers senior engineer audits with code-level fixes, schema graphs, and verified Core Web Vitals remediation.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is a free SEO audit in the UK?</span>
              <p>
                A free SEO audit is a structured review of a UK website across technical health, on-page content,
                and backlink authority, done at no cost and with no obligation to buy anything afterwards. It
                explains why the site is not ranking, or ranking below its potential, and ends in a short list of
                what to fix first. A proper website audit in 2026 checks one more thing: AI visibility, whether
                ChatGPT, Gemini, Perplexity, and Google AI Overviews name the business at all.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most free SEO audits are an automated PDF from a tool nobody reads, built to scare a business into a
              contract rather than to help it. Ours is different. A senior person on the team reviews every finding,
              keeps the list short and ranked by impact, and answers two questions a good audit in 2026 has to
              cover, not one: why the business is not ranking where it should, and why no AI engine mentions it
              when a buyer asks.
            </p>
            <div className="card mt-8" style={{ maxWidth: 920 }}>
              <span className="eyebrow">The offer in four lines</span>
              <ul className="check-list mt-4">
                <li><b>What we look at:</b> technical health, on-page content, backlinks, schema, local presence, and AI visibility across four engines.</li>
                <li><b>What you get back:</b> a ranked list of fixes, a technical scorecard, a 90-day plan, and a call to walk through it.</li>
                <li><b>How long it takes:</b> one to two weeks from the first call to the findings, depending on the size of your site.</li>
                <li><b>What it costs you:</b> about 40 minutes of your time in total, and read-only access to two accounts. No money, and no contract at the end.</li>
              </ul>
            </div>
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
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: '#B23E13', minWidth: 34 }}>{s.n}</span>
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
          headline={'Want the audit before you commit to anything?'}
          sub={'We run the full technical and content audit first, then you decide whether to work with us. No obligation attached.'}
          label={'Request your SEO audit'}
        />

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

        {/* ═══ 11. WHAT THE AUDIT COSTS YOU (time, not money) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">What it costs you</span>
              <h2>The audit is free. Here is what it actually costs you in time</h2>
              <p className="lead mt-4">
                &quot;Free&quot; usually hides a cost somewhere. Here is ours, stated up front: roughly 40 minutes
                of your attention spread over two weeks, and read-only access to two accounts. That is the whole
                bill. No money changes hands and there is no contract at the end of it.
              </p>
            </div>

            <div className="col-6040 mt-10">
              <div className="card">
                <span className="eyebrow">Your time, stage by stage</span>
                <ol className="mt-4" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li className="cost-row">
                    <span className="cost-time">15 min</span>
                    <div className="cost-body">
                      <h3>The kick-off call</h3>
                      <p>You tell us what is bothering you and which pages or enquiries matter most. We agree what the audit should focus on.</p>
                    </div>
                  </li>
                  <li className="cost-row">
                    <span className="cost-time">5 min</span>
                    <div className="cost-body">
                      <h3>Granting read-only access</h3>
                      <p>You add us as a viewer to Google Search Console and Google Analytics. Read-only, and you can remove us in two clicks at any point.</p>
                    </div>
                  </li>
                  <li className="cost-row">
                    <span className="cost-time">0 min</span>
                    <div className="cost-body">
                      <h3>We run the audit</h3>
                      <p>One to two weeks of our time, none of yours. We may send one short clarifying question by email if something on the site is ambiguous.</p>
                    </div>
                  </li>
                  <li className="cost-row">
                    <span className="cost-time">20 min</span>
                    <div className="cost-body">
                      <h3>The walkthrough call</h3>
                      <p>We go through the findings in order of impact, in plain English, and you ask whatever you want. The written list is yours to keep either way.</p>
                    </div>
                  </li>
                  <li className="cost-row">
                    <span className="cost-time">0 min</span>
                    <div className="cost-body">
                      <h3>Deciding what happens next</h3>
                      <p>No follow-up sequence and no chasing. If you want help with the fixes you tell us, and if you do not, you keep the plan and we leave it there.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <div className="card">
                  <span className="eyebrow">What we need from you</span>
                  <ul className="check-list mt-4">
                    <li>Your website address, and any second site or subdomain you want covered.</li>
                    <li>Read-only access to Google Search Console, if the property exists.</li>
                    <li>Read-only access to Google Analytics, if you use it.</li>
                    <li>The three or four terms you most want to be found for.</li>
                    <li>The names of one or two competitors who currently beat you.</li>
                  </ul>
                </div>
                <div className="card mt-6">
                  <span className="eyebrow">What we do not need</span>
                  <ul className="check-list x-list mt-4">
                    <li>Your website login or hosting password. We never ask for one to run an audit.</li>
                    <li>A budget figure before we have looked at anything.</li>
                    <li>A signed agreement, a deposit, or a notice period.</li>
                    <li>Permission to change anything on your site. An audit only reads.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11b. INCLUDED VS NOT INCLUDED ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Scope, stated plainly</span>
              <h2>What the free website audit includes, and what it does not</h2>
              <p className="lead mt-4">
                A free audit that quietly leaves out half the work is not free, it is a sample. Here is the line
                we draw, so nothing on the call is a surprise.
              </p>
            </div>
            <div className="col-2 mt-10" style={{ gap: 24 }}>
              <div className="card card-top-orange">
                <h3>Included in the free audit</h3>
                <ul className="check-list mt-6">
                  <li><b>Crawl and index check.</b> Whether every page you care about can be reached, read, and indexed at all.</li>
                  <li><b>Core Web Vitals and speed.</b> Measured on real page loads, mobile and desktop, and explained in plain terms.</li>
                  <li><b>On-page and content review.</b> Titles, headings, thin pages, duplicate pages, and pages that answer nothing.</li>
                  <li><b>Backlink and authority summary.</b> What is helping you, what looks risky, and how you compare with whoever outranks you.</li>
                  <li><b>Schema and structured data.</b> What you have, what is broken, and what a search or AI engine cannot currently understand about you.</li>
                  <li><b>Local and map-pack check.</b> Google Business Profile, name and address consistency, and local page quality, where relevant.</li>
                  <li><b>AI visibility test.</b> Real buyer questions run through ChatGPT, Gemini, Perplexity, and Google AI Overviews.</li>
                  <li><b>A ranked 90-day action list.</b> The fixes in the order we would do them, with the reasoning attached.</li>
                  <li><b>A walkthrough call.</b> A person explaining the findings, not a document left on your doorstep.</li>
                  <li><b>The written findings to keep.</b> Yours to forward to a colleague or another agency, with no strings.</li>
                </ul>
              </div>
              <div className="card">
                <h3>Not included in the free audit</h3>
                <ul className="check-list x-list mt-6">
                  <li><b>Doing the fixes.</b> The audit tells you what to change. Changing it is separate, scoped work.</li>
                  <li><b>A full competitor teardown.</b> We note what one or two competitors do better. A proper teardown is its own project.</li>
                  <li><b>Keyword research at scale.</b> We check the terms you name. Building a full keyword map is a separate piece.</li>
                  <li><b>Paid search or social review.</b> This audit covers organic search and AI visibility only.</li>
                  <li><b>Ongoing monitoring.</b> It is a point-in-time read, not a subscription to a dashboard.</li>
                  <li><b>Content writing.</b> We flag the thin and missing pages. Writing them is a separate engagement.</li>
                  <li><b>Link building.</b> We assess your link profile. We do not sell links, and we would steer you away from anyone who does.</li>
                  <li><b>A guarantee of ranking positions.</b> Nobody can honestly promise that, and we will not pretend otherwise.</li>
                </ul>
              </div>
            </div>
            <p className="mt-8" style={{ maxWidth: 900 }}>
              If any of the excluded items turn out to be the thing you actually need, we say so on the walkthrough
              call and scope it separately, as a one-off piece of work, fixed-price milestones, or a monthly
              retainer, whichever fits. That conversation happens after you have seen the findings, never before.
            </p>
          </div>
        </section>

        {/* ═══ 11c. GOOGLE'S OWN PAGE EXPERIENCE CHECKLIST (cited) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Checked against Google&apos;s own guidance</span>
              <h2>The six questions Google tells site owners to ask themselves</h2>
              <p className="lead mt-4">
                We do not invent a checklist and call it a standard. Google Search Central publishes a
                self-assessment for page experience, and every audit answers each of its questions about your
                site, with evidence attached.
              </p>
            </div>
            <ul className="check-list mt-8" style={{ maxWidth: 900 }}>
              <li><b>Do your pages have good Core Web Vitals?</b> We measure loading, responsiveness, and layout stability on your real pages rather than quoting a lab score.</li>
              <li><b>Are your pages served in a secure fashion?</b> We check that every page is served over HTTPS and that nothing inside the page loads insecurely.</li>
              <li><b>Does your content display well on mobile devices?</b> We open your key pages at phone size and note anything that breaks, overflows, or becomes unreadable.</li>
              <li><b>Does your content avoid an excessive amount of ads that distract from the main content?</b> Rarely a problem on business sites, but we check, because third-party scripts often behave like ads where speed is concerned.</li>
              <li><b>Do your pages avoid intrusive interstitials?</b> Pop-ups and cookie walls that cover the content on arrival get flagged, with a note on what to change.</li>
              <li><b>Can visitors easily tell the main content from everything else?</b> We look at whether the substance of each page is obvious within a few seconds, to a reader and to a crawler.</li>
            </ul>
            <p className="mt-6" style={{ maxWidth: 900, fontSize: 13 }}>
              Source:{' '}
              <a
                href="https://developers.google.com/search/docs/appearance/page-experience"
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{ color: '#B23E13', textDecoration: 'underline' }}
              >
                Google Search Central, Understanding page experience in Google Search results
              </a>
              . Google notes these questions do not cover every aspect of page experience, and that no single
              factor decides how a page ranks.
            </p>
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
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: '#B23E13', minWidth: 30 }}>{i + 1}</span>
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

        {/* ═══ 14b. WHERE THIS AUDIT FITS (internal links, both directions) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Where this audit fits</span>
              <h2>Arrived here from another page? This is the same free audit</h2>
              <p className="lead mt-4">
                Every &quot;get a free site review&quot; link across our UK city and service pages lands here. It
                is one audit and one team, whichever page sent you. If you want to read about the service behind
                the fixes first, the links below go straight to it.
              </p>
            </div>

            <div className="mt-10">
              <h3>UK cities we audit and work in</h3>
              <ul className="flex-wrap mt-4" style={{ listStyle: 'none', padding: 0, margin: 0, gap: 8 }}>
                {UK_CITIES.map((c) => (
                  <li key={c.slug}>
                    <a className="city-pill" href={`/uk/${c.slug}`}>SEO and web design in {c.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3>What the audit hands off to</h3>
              <ul className="check-list mt-4" style={{ maxWidth: 900 }}>
                {UK_HUBS.map((h) => (
                  <li key={h.slug}>
                    <a href={`/uk/${h.slug}`} style={{ color: '#B23E13', textDecoration: 'underline', fontWeight: 600 }}>{h.name}</a>
                    {' '}for {h.note}.
                  </li>
                ))}
              </ul>
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

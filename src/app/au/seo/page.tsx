import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import { CANONICAL, CRUMBS, CITATIONS, CITY_ROWS, AIO_ROWS, AGENCIES, DEMAND } from './pageData';
import { FAQ_CATEGORIES, FAQ_ITEMS } from './faqData';
import '../au-service.css';

const UPDATED = '2026-09-25';
const TITLE = 'SEO Services Australia | SEO Agency & Company | FactoryJet';
const H1 = 'SEO Services Australia: An SEO Agency That Measures Before It Sells';
const DESCRIPTION =
  'SEO services in Australia from an SEO agency that measures demand first: local SEO, technical SEO, SEO audits and ecommerce SEO. Free site review, no lock-in.';

/* Design tokens, copied by value from ../au-service.css (same as the reference page). */
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

const src = (id: number) => CITATIONS.find((c) => c.id === id)!.url;
const SRC_STARTER = src(1);
const SRC_CWV = src(2);
const SRC_SPAM = src(3);
const SRC_LOCAL_RANK = src(4);
const SRC_GBP_GUIDE = src(5);
const SRC_ABS = src(6);

/* The five stages of search work, in the order that pays back. */
const ORDER: { n: string; t: string; d: string; payback: string }[] = [
  { n: '01', t: 'Technical repair', payback: 'Weeks',
    d: 'Fix what stops search engines reading the site: blocked pages, leftover noindex tags, content that only appears after JavaScript runs, broken internal links, and duplicate versions of the same page competing with each other.' },
  { n: '02', t: 'Google Business Profile', payback: 'Weeks',
    d: 'Claim, verify, categorise specifically, set service areas honestly, add real photographs, answer reviews. For a local business this is usually the single highest-return hour of work available anywhere in a search plan.' },
  { n: '03', t: 'Consistent business details', payback: 'Weeks to months',
    d: 'Make your name, address and contact details identical everywhere they appear, including old directory listings you have forgotten about. Inconsistency quietly holds back local ranking and never announces itself.' },
  { n: '04', t: 'Pages built on verified demand', payback: 'One to two quarters',
    d: 'Write pages for terms that have real Australian volume, checked against advertising data rather than impression counts. One strong page per service beats five thin ones on the same topic.' },
  { n: '05', t: 'Earned links and mentions', payback: 'Quarters to years',
    d: 'Publish things worth referencing, sponsor genuinely, build supplier and sector relationships. This is the slowest lever and the one that decides whether you can compete on a head term at all.' },
];

/* What an SEO audit checks (rendered as <details> expanders). */
const AUDIT_CHECKS: { t: string; d: string }[] = [
  { t: 'Crawling and indexing',
    d: 'Can Google reach every page that matters, and is anything important blocked by robots.txt, a stray noindex tag or a login? We read the page indexing report in your own Search Console, which names the cause for each excluded page.' },
  { t: 'Speed and Core Web Vitals',
    d: 'Google publishes three pass marks: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds and Cumulative Layout Shift under 0.1. We check real-user data where it exists and find the heavy images, scripts and apps behind a fail.' },
  { t: 'Site structure and internal links',
    d: 'Every service should have one clear page, linked from the menu or from related pages. Orphan pages with no links pointing at them are hard for Google to find and rarely rank.' },
  { t: 'Duplicate pages and canonical tags',
    d: 'The same content at several addresses splits your ranking signals. Common Australian causes: old and new sites both live, www and non-www versions, ecommerce filters and product variants, and near-identical suburb pages.' },
  { t: 'Titles, headings and on-page content',
    d: 'Does each page target one real search term, in the title, the main heading and the opening lines? Does it answer the question the buyer actually asks, in plain language, before the sales pitch?' },
  { t: 'Structured data',
    d: 'Schema markup tells search engines what a page is: a service, a product, a list of questions. It must describe what is visible on the page. Markup that claims things the page does not show is a liability, not a shortcut.' },
  { t: 'Google Business Profile and local signals',
    d: 'Verification status, primary category, service area, duplicates, photos, reviews and replies, plus whether your business details match across the directories Australians use.' },
  { t: 'Links pointing at the site',
    d: 'Who links to you, whether any of it looks bought or spammy, and how your profile compares with the businesses on page one for your terms. This is the number that decides how hard a head term will be.' },
];

/* How an engagement runs (rendered as <details> expanders). */
const STAGES: { n: string; t: string; length: string; d: string; yours: string }[] = [
  { n: '01', t: 'Free review', length: 'A few days',
    d: 'We crawl the site, check the Google Business Profile, read your Search Console data if you grant access, and look at who currently holds the positions you want. You get a written note on the three biggest problems.',
    yours: 'Site address, and read access to Search Console if you have it.' },
  { n: '02', t: 'Demand check', length: 'A few days',
    d: 'Before anything is scoped, we verify that Australians actually search for what you sell, using Google Ads volume rather than impression counts. This step decides whether there is a project at all, and sometimes the answer is that there is not.',
    yours: 'A list of what you sell and where you sell it.' },
  { n: '03', t: 'Written scope', length: 'About a week',
    d: 'A document naming each piece of work, what it should achieve, roughly when, and what it depends on from you. Repair work is priced as fixed milestones. Ongoing content and link work is separate, so you can take one without the other.',
    yours: 'Time to read it properly and push back on anything vague.' },
  { n: '04', t: 'Technical repair', length: 'Weeks',
    d: 'The finite work: indexing faults, speed, structure, internal linking, duplicate pages. This is where the fastest movement usually comes from, and it ends rather than continuing indefinitely.',
    yours: 'Access to the site and hosting, or an introduction to whoever holds it.' },
  { n: '05', t: 'Content and local', length: 'A quarter or two',
    d: 'Pages built on verified terms, and the Google Business Profile corrected and maintained. We write drafts, you correct the things only you would know, we publish.',
    yours: 'Subject matter review. Nobody outside your business can supply this.' },
  { n: '06', t: 'Earned links', length: 'Quarters',
    d: 'The slow lever, and the one that decides whether a competitive head term is reachable at all. Publishing things worth citing, genuine sponsorship, supplier and sector relationships.',
    yours: 'Introductions, and patience. This is the part with no shortcut.' },
];

const REFUSALS: { t: string; d: string }[] = [
  { t: 'We do not buy links, and we will not work alongside someone who does',
    d: 'Google lists buying links for ranking purposes as link spam. The recovery from a manual penalty costs more than the links did and takes months, during which the site earns less than before anyone started.' },
  { t: 'We do not publish thin pages for every suburb',
    d: 'It is the oldest tactic in local search and it stopped working years ago. It also creates dozens of near-identical pages that compete with each other, which is a problem you then pay someone to unpick.' },
  { t: 'We do not promise a position on a date',
    d: 'Google publishes that some changes take hours and others take months. Any date attached to a ranking is invented, and the agencies who give you one are counting on you having forgotten by the time it passes.' },
  { t: 'We do not hold your domain, hosting or accounts',
    d: 'Everything is in your name from day one. If a supplier will not agree to that, it is because leaving is meant to be difficult, and that tells you what the relationship is built on.' },
  { t: 'We do not build pages for terms with no Australian volume',
    d: 'Every term is checked against Google Ads volume first. In our Australian measurements, whole groups of terms returned nothing at all. Building against those would have produced pages nobody could ever find.' },
  { t: 'We do not take the work when search is not your problem',
    d: 'If your traffic is fine and your enquiries are not, more traffic will not fix it. That is a conversion problem, and selling you search work for it would be taking money for something that cannot help.' },
];

/* ─── JSON-LD. Organization is defined sitewide and referenced only by @id. ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Services Australia',
      serviceType: 'Search engine optimisation: technical SEO, SEO audits, local SEO, ecommerce SEO and SEO consulting',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'SEO services for Australian businesses. Demand and competition measured before scoping, technical SEO and SEO audits, local SEO and Google Business Profile, ecommerce and Shopify SEO, content built on verified search terms, and earned links. The client owns every account.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Australian SEO services',
        itemListElement: [
          'Technical SEO audit and repair',
          'Local SEO and Google Business Profile',
          'Ecommerce and Shopify SEO',
          'Keyword demand verification',
          'Content built for verified Australian search terms',
          'Digital PR and link earning',
          'SEO consulting',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: CRUMBS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: '2026-08-25',
      dateModified: UPDATED,
      image: 'https://factoryjet.com/images/au/seo/seo-og.webp',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      about: { '@id': `${CANONICAL}#service` },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: ['https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', 'https://github.com/factoryjet-tech'],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'SEO agencies serving Australian businesses',
      itemListElement: AGENCIES.map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: a.name })),
    },
    // Mapped from FAQ_ITEMS, the SAME array the visible FAQ below renders.
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
      'SEO services for Australian businesses, measured before they are sold: technical SEO, SEO audits, local SEO and ecommerce SEO, with earned links and every account in your name.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/seo/seo-og.webp', width: 1200, height: 630, alt: 'SEO services Australia: a Sydney business owner and an SEO consultant review a rising search performance chart on a laptop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'SEO services in Australia from an SEO agency that measures demand and competition before it quotes.',
    images: ['/images/au/seo/seo-og.webp'],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const imgStyle = { width: '100%', height: 'auto', borderRadius: 12, display: 'block' } as const;

export default function AuSeoPage() {
  return (
    <>
      <script id="ld-au-seo" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />

      <div className="au-svc">
      <main id="main-content">

        <Breadcrumbs items={CRUMBS} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />SEO Services Australia</span>
                  <span className="chip">Local, Technical and Ecommerce SEO</span>
                  <span className="chip">Measured Before We Quote</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet provides SEO services in Australia for businesses that want enquiries, not a ranking
                  report. Before we quote, we check which of your search terms Australians actually use, who holds
                  page one, and whether that gap can be closed. Then we fix the technical and local basics first,
                  and earn links rather than buy them.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />25 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <p style={{ fontSize: 14.5, marginBottom: 10 }}>
                    <b>Free site review.</b> Send your address. We crawl the site, check your Google Business Profile
                    and send a written note on the three biggest problems.
                  </p>
                  <HeroInlineForm region="au" source="au_seo_hub_hero" submitLabel="Get my free review" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/seo/seo-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A Sydney business owner and a FactoryJet SEO consultant sit side by side reviewing a rising search performance chart on a laptop, with printed charts on the table" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What every engagement includes</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Demand and competition check</div><div className="scorecard-note">before any quote</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Included</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Links earned, never bought</div><div className="scorecard-note">no link spam risk</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Always</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Site, data and every account</div><div className="scorecard-note">in your name from day one</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Yours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What do SEO services in Australia actually include?</span>
              <p>
                SEO services make your website more likely to appear when Australians search for what you sell. The
                work has three parts: repair the technical faults that stop Google reading the site, build pages and
                a Google Business Profile that answer what buyers type, and earn links from real sites. Done in that
                order, the fast work pays for the slow work.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Four terms, in plain English</span>
              <p>
                <b>Technical SEO</b> is whether search engines can crawl and index your pages. <b>On-page SEO</b> is
                the words and structure of each page. <b>Local SEO</b> is your Google Business Profile and map
                results. <b>Off-page SEO</b> is links and mentions from other websites. An <b>SEO audit</b> checks all
                four and ranks what to fix first.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The competition is real. The Australian Bureau of Statistics counted 2,814,778 actively trading
              businesses at 30 June 2026, up 3.1% in a year. Most of them want the same first page. The businesses
              that win it are rarely the ones spending most. They are the ones who fixed the basics, picked terms
              with real demand, and stopped paying for work that could not move the number.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '2.8 million', t: 'actively trading Australian businesses at 30 June 2026, most competing for the same first page', s: 'ABS, June 2026', u: SRC_ABS },
                { v: '12 of 14', t: 'Australian city SEO searches we tested showed a Google map pack; only 2 showed an AI Overview', s: 'FactoryJet, Sept 2026', u: '#measured' },
                { v: '2.5 seconds', t: 'Google’s pass mark for Largest Contentful Paint, one of the three Core Web Vitals', s: 'Google Search Central', u: SRC_CWV },
                { v: 'No way', t: 'to pay Google for a better local ranking, in Google’s own words. Fix the profile instead', s: 'Google Business Profile Help', u: SRC_LOCAL_RANK },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {})} style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. LISTICLE: THE ORDER THAT PAYS BACK ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">What an SEO agency should do</span>
              <h2>SEO services in the order that pays back: five stages</h2>
              <p className="lead mt-4">
                Most SEO is sold in reverse: a monthly retainer for links and blog posts before anyone has checked
                whether Google can read the site. These five stages are the order we work in, and the order we
                suggest you hold any SEO company to, including us.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {ORDER.map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{s.n}</span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p style={{ marginTop: 6 }}>{s.d}</p>
                    <p style={{ marginTop: 8, fontFamily: T.fm, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: T.small }}>Typical payback: {s.payback}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p style={srcNote}>
              Google says some changes take effect within hours and others take several months, and advises waiting a
              few weeks before judging a change: <a href={SRC_STARTER} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Google SEO Starter Guide</a>.
            </p>
          </div>
        </section>

        {/* ═══ 5. SERVICES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Our SEO services</span>
              <h2>SEO services for Australian businesses, from audit to earned links</h2>
              <p className="lead mt-4">
                You can take any one of these on its own. Most Australian businesses start with an SEO audit and the
                local basics, then decide on ongoing work once they have seen the first results.
              </p>
            </div>
            <ul className="col-3 mt-10">
              <li className="svc-card">
                <h3>Technical SEO</h3>
                <p className="mt-4">Crawling and indexing faults, Core Web Vitals, site structure, internal links, redirects, canonical tags and structured data. Finite work with an end date, usually where the fastest movement comes from.</p>
              </li>
              <li className="svc-card">
                <h3>SEO audit</h3>
                <p className="mt-4">A ranked list of what is holding the site back, not a hundred-page export. You get the three problems that cost you most, why, and what fixing each would take. Useful on its own even if you do the work in-house.</p>
              </li>
              <li className="svc-card">
                <h3>Local SEO</h3>
                <p className="mt-4">Google Business Profile set-up and repair, categories, service areas, photos, review replies and consistent business details across Australian directories. The highest-return work for trades, clinics and shopfronts.</p>
              </li>
              <li className="svc-card">
                <h3>Ecommerce and Shopify SEO</h3>
                <p className="mt-4">Collection and category pages written for real search terms, product structured data, and control of the duplicate URLs that filters and variants create. Built by the same team that builds <a href="/au/shopify-development" style={srcLink}>Shopify stores in Australia</a>.</p>
              </li>
              <li className="svc-card">
                <h3>Content on verified demand</h3>
                <p className="mt-4">One strong page per service, for terms with real Australian search volume. We draft, you correct what only you would know, we publish. Written plainly so both Google and AI summaries can quote it.</p>
              </li>
              <li className="svc-card">
                <h3>Earned links and digital PR</h3>
                <p className="mt-4">Research and resources worth citing, supplier and industry relationships, genuine sponsorships and local press. Slow, and the only kind of link that does not carry a penalty risk.</p>
              </li>
              <li className="svc-card">
                <h3>SEO consulting</h3>
                <p className="mt-4">For businesses with a marketer or developer already. An SEO consultant sets direction, reviews work and answers questions, and your team carries it out. Often better value than a full retainer.</p>
              </li>
              <li className="svc-card">
                <h3>Sector SEO</h3>
                <p className="mt-4">Dental, legal, trades, B2B and professional services. Each has its own search patterns and rules. Health and legal pages in particular need claims your regulator would accept, checked by you before they go live.</p>
              </li>
              <li className="svc-card">
                <h3>AI search visibility</h3>
                <p className="mt-4">Getting named in ChatGPT, Perplexity and Google AI Overviews as well as ranking. It shares most of its foundations with classic SEO, and has its own page: <a href="/au/ai-seo" style={srcLink}>AI SEO in Australia</a>.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 6. TECHNICAL SEO + SEO AUDIT (image + <details>) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Technical SEO and SEO audits</span>
                <h2>What a proper SEO audit checks, and why the order matters</h2>
                <p className="lead mt-4" style={{ maxWidth: 580 }}>
                  An SEO audit is only useful if it tells you what to do first. Open any check to see what we look at.
                  Every audit ends with a ranked list, not a spreadsheet of warnings.
                </p>
                <div className="card mt-8" style={{ padding: '4px 22px' }}>
                  {AUDIT_CHECKS.map((c, i) => (
                    <details key={c.t}>
                      <summary><span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 10 }}>{String(i + 1).padStart(2, '0')}</span>{c.t}</span></summary>
                      <div style={{ paddingBottom: 18 }}>
                        <p style={{ fontSize: 15 }}>{c.d}</p>
                      </div>
                    </details>
                  ))}
                </div>
                <p style={srcNote}>
                  Core Web Vitals pass marks: <a href={SRC_CWV} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Google Search Central</a>.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/seo/seo-technical.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a FactoryJet engineer in a Melbourne studio, one monitor showing a map of a website's pages as connected circles and the other a page load waterfall of coloured bars" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    The left screen is a crawl map: every page on the site and the links between them. Pages floating
                    on their own, with nothing linking in, are the first thing we look for. The right screen shows what
                    loads, in what order, and what slows the page down.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 mt-12">
              <div className="card">
                <h3>Why technical SEO comes first</h3>
                <p className="mt-4">A page Google cannot index will never rank, however good the writing. Technical faults are also the cheapest to find and fix, and the fix does not wear off.</p>
              </div>
              <div className="card">
                <h3>A fault we find again and again</h3>
                <p className="mt-4">Duplicate versions of the same page: an old site still live, or a staging copy indexed by accident. Google splits its attention between them and neither ranks well.</p>
              </div>
              <div className="card">
                <h3>What you need to give us</h3>
                <p className="mt-4">Read access to Google Search Console and Analytics if you have them. If you do not, setting them up in your name is part of the work, and they stay yours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. LOCAL SEO + GBP (image left) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-4060">
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/seo/seo-local.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An Adelaide café owner in an apron photographs her own shopfront on a sunny street with her phone, to add real photos to her Google Business Profile" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Real photographs of your own premises, taken by you, are one of the simplest local SEO tasks there
                    is, and one of the most often skipped.
                  </p>
                </div>
              </div>
              <div>
                <span className="eyebrow">Local SEO services</span>
                <h2>Local SEO: how Australian businesses get into the map pack</h2>
                <div className="stack mt-6">
                  <p>
                    For most local searches in Australia, the first thing a buyer sees is a map with three businesses on
                    it. In our September 2026 measurement, a map pack appeared on 12 of the 14 city SEO searches we
                    tested. Local SEO is the work of getting into that box, and it runs on different rules from the
                    ordinary results beneath it.
                  </p>
                  <p>
                    Google says local results are based mainly on <b>relevance</b> (how well your profile matches the
                    search), <b>distance</b> (how far you are from the searcher) and <b>prominence</b> (how well known
                    you are, including links and reviews). It also says plainly that there is no way to request or pay
                    for a better local ranking. You cannot change distance. Relevance and prominence are where a local
                    SEO agency earns its keep.
                  </p>
                  <p>
                    The rules matter as much as the tactics. Google does not allow a Business Profile for a virtual
                    office, and service-area businesses, such as a mobile mechanic or a plumber working from home,
                    should hide their address and show a service area instead. A common cause of suspension is a
                    service-area business, often a tradie, showing a home address it should have hidden.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_LOCAL_RANK} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Google, local ranking factors</a>;{' '}
                  <a href={SRC_GBP_GUIDE} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Google Business Profile guidelines</a>.
                </p>
              </div>
            </div>
            <div className="card card-top-orange mt-10" style={{ maxWidth: 900 }}>
              <span className="eyebrow">Local SEO checklist we work through</span>
              <div className="scorecard-row"><div><div className="scorecard-metric">Profile verified, no duplicates</div><div className="scorecard-note">the step most businesses stall on</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Relevance</div></div>
              <div className="scorecard-row"><div><div className="scorecard-metric">Most specific primary category</div><div className="scorecard-note">plus a few honest secondary ones</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Relevance</div></div>
              <div className="scorecard-row"><div><div className="scorecard-metric">Service area set, home address hidden</div><div className="scorecard-note">usually within about two hours’ drive</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Guidelines</div></div>
              <div className="scorecard-row"><div><div className="scorecard-metric">Reviews asked for and answered</div><div className="scorecard-note">every one, good or bad</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Prominence</div></div>
              <div className="scorecard-row"><div><div className="scorecard-metric">Same details on every directory</div><div className="scorecard-note">name, address, website, hours</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Prominence</div></div>
              <div className="scorecard-row"><div><div className="scorecard-metric">One strong page per service on your site</div><div className="scorecard-note">linked from the profile</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Both</div></div>
            </div>
          </div>
        </section>

        {/* ═══ 8. ECOMMERCE SEO (image right) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Ecommerce SEO services</span>
                <h2>Ecommerce SEO for Australian online stores</h2>
                <div className="stack mt-6">
                  <p>
                    Ecommerce SEO is the fastest-growing part of Australian SEO demand we measured: searches for
                    ecommerce SEO services roughly doubled on a year earlier. That makes sense. For an online store,
                    organic search is the one channel that does not charge again for every visit.
                  </p>
                  <p>
                    Store SEO is mostly about <b>category and collection pages</b>. Those carry the valuable terms,
                    such as &ldquo;linen bedding&rdquo; or &ldquo;ceramic planters&rdquo;, while product pages carry
                    the long tail. The common problems are thin collection pages with no words on them, product
                    descriptions copied from the supplier, and filters and variants that create thousands of duplicate
                    URLs for Google to wade through.
                  </p>
                  <p>
                    Shopify is a sound base for SEO, and most Shopify SEO services come down to fixing those three
                    problems. On WooCommerce, Magento and BigCommerce the same principles apply with different
                    plumbing. Because we also <a href="/au/ecommerce-development" style={srcLink}>build ecommerce stores for Australian brands</a>,
                    we can fix the template causing the problem rather than patching around it.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/seo/seo-ecommerce.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Brisbane homewares store owner at his packing bench, reviewing a grid of product photos on his laptop, with ceramics on the shelves and a camera on a tripod beside him" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What moves an online store</span>
                  <div className="scorecard-row"><div className="scorecard-metric">Collection pages with real copy</div><div className="scorecard-val" style={{ fontSize: 14 }}>High</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Duplicate URLs from filters and variants</div><div className="scorecard-val" style={{ fontSize: 14 }}>Controlled</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Product structured data</div><div className="scorecard-val" style={{ fontSize: 14 }}>Matches page</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Shipping and returns information</div><div className="scorecard-val" style={{ fontSize: 14 }}>Clear, ACL-aligned</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. MEASURED: AIO + CITY REACHABILITY + AUDIT IMAGE ═══ */}
        <section className="sec-lg" id="measured">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">We measure before we sell</span>
                <h2>What Australian search actually looks like, including the parts that do not suit us</h2>
                <div className="stack mt-6">
                  <p>
                    In September 2026 we pulled Google Ads search volume for Australian search terms and measured 156
                    live Google Australia results in detail: who ranks, whether an AI Overview appears, whether a map
                    pack appears, and which sites the AI summaries cite. Two findings are worth knowing before you spend
                    anything on SEO in this country.
                  </p>
                  <p>
                    <b>One: AI Overviews depend on the subject.</b> An AI Overview is the summary Google places above the
                    ordinary results. When one appears, fewer people click through to any website. On local SEO
                    searches they were rare. On anything with &ldquo;AI&rdquo; or &ldquo;ecommerce&rdquo; in it, they
                    were almost always there.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/seo/seo-audit.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet SEO strategist in a Perth meeting room draws three clusters of search terms on a whiteboard while a business owner and her marketing coordinator watch" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Before a quote, we group your search terms into clusters, one page per cluster, and check the real
                    volume behind each one. Some clusters turn out to be empty. We say so.
                  </p>
                </div>
              </div>
            </div>

            <div className="card mt-10" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table">
                <caption className="sr-only">AI Overview and map pack presence by type of search, Google Australia, September 2026</caption>
                <thead>
                  <tr>
                    <th>Type of search</th>
                    <th className="fj">AI Overview shown</th>
                    <th>Map pack shown</th>
                    <th>What it means for you</th>
                  </tr>
                </thead>
                <tbody>
                  {AIO_ROWS.map((r) => (
                    <tr key={r.line}>
                      <td className="feat">{r.line}</td>
                      <td className="fj">{r.aio}</td>
                      <td>{r.pack}</td>
                      <td>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>FactoryJet measurement of 156 live Google Australia search results, 24 September 2026.</p>

            <h3 className="mt-12" style={{ fontSize: 22 }}>Two: some Australian cities are reachable and some are not</h3>
            <p className="mt-4" style={{ maxWidth: 820 }}>
              Ranking for competitive terms is decided largely by how many other websites reference yours. We counted
              that figure for every business on page one for the main SEO term in each capital, and compared the
              weakest of them with our own earned total of 28 linking domains. The result decided which city pages
              we built and which we did not.
            </p>
            <ul className="col-4 mt-8" style={{ gap: 16 }}>
              {CITY_ROWS.map((c) => (
                <li key={c.slug}>
                  <a href={`/au/${c.slug}`} className="svc-card" style={{ display: 'block', height: '100%' }}>
                    <h3 style={{ fontSize: 17 }}>SEO in {c.city} <span aria-hidden="true" style={{ color: T.small }}>→</span></h3>
                    <p style={{ marginTop: 8, fontSize: 14 }}>{c.headline}</p>
                    <p style={{ marginTop: 8, fontSize: 13.5 }}>Weakest page-one competitor: <b>{c.weakest} linking domains</b></p>
                    <p style={{ marginTop: 6, fontSize: 13.5, fontWeight: 600, color: T.small }}>{c.verdict}</p>
                  </a>
                </li>
              ))}
            </ul>
            <div className="def mt-8" style={{ maxWidth: 940 }}>
              <span className="lab">Where we are not competing, and why we say so</span>
              <p>
                Sydney, Perth and the Gold Coast carry the largest SEO search volumes in the country. The weakest
                business on page one measured 119 linking domains in Sydney, 125 in Perth and 136 on the Gold Coast,
                against our 28. The same arithmetic applies to you: if an agency proposes to win you a Sydney head
                term, ask how many sites link to the weakest business on page one today. If they cannot answer, the
                plan is a hope rather than a forecast.
              </p>
            </div>
            <p style={srcNote}>City search volumes and linking-domain counts: FactoryJet measurement, August 2026.</p>
          </div>
        </section>

        <MidPageCTA
          headline="Want the same measurement done on your own search terms?"
          sub="Tell us what you sell and where. We check real Australian search volume for those terms, look at who holds page one, and count how many sites link to the weakest of them. You get the numbers whether or not they favour us."
          label="Get a free demand check"
          note="Bhavesh replies within one business day, Australian hours."
        />

        {/* ═══ 10. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 820 }}>DIY vs an SEO consultant vs a large SEO agency vs FactoryJet</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Each option is right for someone. The table shows where each tends to be strong, so you can match the
              option to the job rather than to the sales pitch.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Do it yourself</th>
                    <th>SEO consultant</th>
                    <th>Large SEO agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">Businesses that want the work done and the site fixed properly</span></td><td><span className="partial">Local basics, tight budgets</span></td><td><span className="partial">Teams with their own marketer or developer</span></td><td><span className="partial">Large brands, big content and PR programmes</span></td></tr>
                  <tr><td className="feat">Demand checked before quoting</td><td className="fj"><span className="yes">Always, with real volume</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Often</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Technical fixes made, not just reported</td><td className="fj"><span className="yes">Yes, by engineers</span></td><td><span className="partial">If you can code</span></td><td><span className="no">Usually advises only</span></td><td><span className="partial">Often needs your developer</span></td></tr>
                  <tr><td className="feat">Local SEO and Business Profile</td><td className="fj"><span className="yes">Included</span></td><td><span className="yes">Very doable</span></td><td><span className="partial">Advice</span></td><td><span className="yes">Usually</span></td></tr>
                  <tr><td className="feat">Ecommerce and Shopify SEO</td><td className="fj"><span className="yes">Templates fixed at source</span></td><td><span className="partial">Apps and settings</span></td><td><span className="partial">Depends on the person</span></td><td><span className="yes">Often a specialism</span></td></tr>
                  <tr><td className="feat">Link building approach</td><td className="fj"><span className="yes">Earned only</span></td><td><span className="partial">Slow on your own</span></td><td><span className="partial">Varies</span></td><td><span className="partial">Ask how links are sourced</span></td></tr>
                  <tr><td className="feat">Contract shape</td><td className="fj"><span className="yes">Fixed repair milestones, ongoing work separate</span></td><td><span className="yes">None</span></td><td><span className="yes">Usually flexible</span></td><td><span className="partial">Often 6 to 12 months</span></td></tr>
                  <tr><td className="feat">Who owns the accounts</td><td className="fj"><span className="yes">You, from day one</span></td><td><span className="yes">You</span></td><td><span className="yes">Usually you</span></td><td><span className="partial">Check the contract</span></td></tr>
                  <tr><td className="feat">Who you talk to</td><td className="fj"><span className="yes">The founder and the engineers doing the work</span></td><td><span className="yes">Yourself</span></td><td><span className="yes">The consultant</span></td><td><span className="partial">An account manager</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 11. WHICH OPTION FITS (interactive checklist) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Which option fits you</span>
              <h2>A quick check: which kind of SEO help do you actually need?</h2>
              <p className="lead mt-4">
                Open the description that sounds most like your business. The honest answer is not always an SEO
                agency, and not always us.
              </p>
            </div>
            <div className="card mt-8" style={{ padding: '4px 22px', maxWidth: 900 }}>
              <details>
                <summary>We are a local business and nobody finds us on Google Maps</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>Start with local SEO, and try it yourself first.</b> Verify your Google Business Profile, pick the most specific category, add real photos and ask for reviews. If you are still invisible after a month, a local SEO audit will find why.</p>
                </div>
              </details>
              <details>
                <summary>Our traffic dropped suddenly after a redesign or a platform move</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>That is a technical SEO problem, and it is urgent.</b> Usually missing redirects, a noindex tag left on, or pages that changed address. A technical SEO audit finds it in days. Ask for our free review.</p>
                </div>
              </details>
              <details>
                <summary>We run an online store and our collection pages do not rank</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>You need ecommerce SEO.</b> Collection copy, duplicate URL control and product data. If the store itself needs rebuilding, see <a href="/au/shopify-development" style={srcLink}>Shopify development in Australia</a>.</p>
                </div>
              </details>
              <details>
                <summary>We have a marketer in-house and want direction, not a team</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>Look at SEO consulting.</b> An audit, a written plan and a regular review call, with your marketer doing the work. Usually better value than a full retainer.</p>
                </div>
              </details>
              <details>
                <summary>Buyers ask ChatGPT and Perplexity, and we are never named</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>That is AI search visibility.</b> It builds on classic SEO but adds citation work. See our <a href="/au/ai-seo" style={srcLink}>AI SEO and GEO service for Australian businesses</a>.</p>
                </div>
              </details>
              <details>
                <summary>Our website itself is slow, dated or hard to update</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>Fix the site before paying for SEO on it.</b> See our <a href="/au" style={srcLink}>web design for Australian businesses</a>, with 7-day delivery for websites up to 5 pages.</p>
                </div>
              </details>
              <details>
                <summary>Our traffic is fine but enquiries are not</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>That is not an SEO problem.</b> More traffic will not fix it. Look at the offer, the page and the enquiry form first. We will tell you that on the free review rather than sell you search work.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ 12. AI SEARCH BRIDGE (prominent link to /au/ai-seo) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">SEO and AI search</span>
                <h2>Classic SEO and AI search share one foundation</h2>
                <div className="stack mt-6">
                  <p>
                    Being found now means three places: the ordinary Google results, the AI Overview above them, and
                    the answers ChatGPT, Gemini, Claude and Perplexity give when someone asks for a recommendation.
                    When we asked those four assistants which SEO agencies suit Australian small businesses, they named
                    a small, repeated set of agencies and cited directory lists and agency blogs to do it.
                  </p>
                  <p>
                    The good news is that the same pages win in all three. Clear structure, a direct answer near the
                    top, real facts with sources, and a site Google can crawl. Pages padded with adjectives lose
                    everywhere. So we build every SEO page to be quotable, and treat AI citation work, such as getting
                    listed where assistants look, as its own service.
                  </p>
                  <p>
                    For the data behind this, read our analysis <a href="/blog/is-seo-dead-2026-ai-search-data" style={srcLink}>is SEO dead in 2026?</a> and
                    our guide to <a href="/blog/how-long-does-seo-take-2026-month-by-month-timeline" style={srcLink}>how long SEO takes, month by month</a>.
                  </p>
                </div>
              </div>
              <a href="/au/ai-seo" className="svc-card card-top-orange" style={{ display: 'block' }}>
                <span className="eyebrow">AI SEO Australia</span>
                <h3 style={{ fontSize: 22, marginTop: 8 }}>Get named when Australian buyers ask ChatGPT, Perplexity and Google AI <span aria-hidden="true" style={{ color: T.small }}>→</span></h3>
                <p style={{ marginTop: 12, fontSize: 15 }}>
                  Generative engine optimisation (GEO) and answer engine optimisation (AEO) for Australian businesses:
                  an AI visibility check across the major assistants, pages written to be cited, and listings in the
                  sources they trust.
                </p>
                <div className="scorecard-row mt-6"><div className="scorecard-metric">AI Overview on AI SEO searches we tested</div><div className="scorecard-val" style={{ fontSize: 14 }}>9 of 9</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Monthly Australian searches for AI SEO terms</div><div className="scorecard-val" style={{ fontSize: 14 }}>About 1,000</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Change on a year earlier</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Roughly doubled</div></div>
                <p style={{ marginTop: 14, fontWeight: 600, color: T.small, fontSize: 14 }}>See AI SEO services →</p>
              </a>
            </div>
          </div>
        </section>

        {/* ═══ 13. HOW AN ENGAGEMENT RUNS (<details>) + CONTENT IMAGE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How it runs</span>
                <h2>What the work looks like, and what it needs from you</h2>
                <p className="lead mt-4" style={{ maxWidth: 580 }}>
                  Open any stage to see what happens and what we need from you. Search work fails more often through
                  missing input from the client than through anything the agency does, and the two stages that need
                  you most cannot be outsourced: subject matter review, and introductions.
                </p>
                <div className="card mt-8" style={{ padding: '4px 22px' }}>
                  {STAGES.map((s) => (
                    <details key={s.n}>
                      <summary><span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 10 }}>{s.n}</span>{s.t} <span style={{ fontFamily: T.fm, fontSize: 11, color: T.n400, marginLeft: 6 }}>{s.length}</span></span></summary>
                      <div style={{ paddingBottom: 18 }}>
                        <p style={{ fontSize: 15 }}>{s.d}</p>
                        <p style={{ fontSize: 14, marginTop: 8 }}><b>What we need from you:</b> {s.yours}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/seo/seo-content.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Canberra accountant marks up printed drafts of her new service pages with a pen while a FactoryJet content writer sits beside her and listens" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Stage five in practice: we write the draft, the person who knows the work corrects it. That review
                    is what makes a page accurate enough for Google and AI assistants to trust.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mt-12" style={{ fontSize: 22 }}>Six things we will not do</h3>
            <p className="mt-4" style={{ maxWidth: 820 }}>
              Ask any SEO company you are considering the same question. One that cannot name a single thing it
              refuses has either not thought about it or is willing to do things that will cost you later.
            </p>
            <ul className="col-3 mt-8">
              {REFUSALS.map((r) => (
                <li key={r.t} className="card">
                  <h3 style={{ fontSize: 16.5 }}>{r.t}</h3>
                  <p className="mt-4" style={{ fontSize: 14.5 }}>{r.d}</p>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Link buying as link spam: <a href={SRC_SPAM} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Google spam policies</a>.
            </p>
          </div>
        </section>

        {/* ═══ 14. COST DRIVERS (no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>How much should I pay for SEO? What actually sets the cost</h2>
                <p className="lead mt-4" style={{ maxWidth: 580 }}>
                  &ldquo;How much should I expect to pay for SEO?&rdquo; is the question Australians ask Google most
                  about SEO. The honest answer is that it depends on the size of the gap between your site and page
                  one, so we measure the gap first and quote a fixed price per stage. Engagements usually take one of
                  four shapes.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>SEO audit.</b> A ranked list of problems and a written plan. Some businesses take it to their own developer, and that is fine.</li>
                  <li><b>Technical and local repair.</b> Fixed milestones with an end date: indexing, speed, structure, Business Profile and business details.</li>
                  <li><b>Ongoing content and links.</b> Pages on verified terms and earned links, month by month once the repair has shown results.</li>
                  <li><b>SEO consulting.</b> Direction and review for a team that does the work itself.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 580 }}>
                  Be careful with any SEO pricing that arrives before anyone has looked at your site. A package priced
                  on a call cannot know whether your problem is a single noindex tag or a year of link earning.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Number of technical faults</div><div className="scorecard-note">a single tag or a rebuild</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Repair</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Strength of page one</div><div className="scorecard-note">linking domains of the weakest rival</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Gap</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Pages to write</div><div className="scorecard-note">one per real service or category</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Content</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Locations served</div><div className="scorecard-note">one suburb or a national footprint</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Store size</div><div className="scorecard-note">products, filters and variants</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Ecommerce</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Who makes the changes</div><div className="scorecard-note">us, or your own developer</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Delivery</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">First review with the founder</div><div className="scorecard-note">written note on three problems</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 15. COMPETITORS (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>SEO agencies in Australia worth knowing</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These SEO companies appear most often when Australians search for
                an SEO agency or ask ChatGPT, Gemini, Claude and Perplexity for one. Each note is based on what the
                company says on its own website. Talk to two or three and compare what they measure.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {AGENCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Agencies named from live Google Australia results and AI assistant answers for SEO agency queries, September 2026. Notes reflect each company’s own homepage on 25 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ 16. AUSTRALIA-WIDE + DEMAND PANEL ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Australia-wide</span>
                <h2>An SEO company for Sydney, Melbourne, Brisbane, Perth, Adelaide and regional Australia</h2>
                <div className="stack mt-6">
                  <p>
                    SEO does not need anyone on site. We run engagements remotely, with shared documents, your own
                    Search Console and Analytics, and calls in Australian business hours. A clinic in Geelong or a
                    supplier in Newcastle gets the same senior team as a business in the Sydney CBD.
                  </p>
                  <p>
                    What matters more than a postcode is who does the work. FactoryJet has served more than 500
                    businesses since 2014, with more than a decade in commerce, including B2B ordering for Bombay
                    Petals and the Belle Maison store built on Commerceflo. That is why our SEO work is strongest
                    where search meets a website or a store we can change at the source.
                  </p>
                  <p>
                    SEO demand in Australia is concentrated but not only in the big two. In our measurement, SEO
                    searches mentioning Sydney and Melbourne each ran at several thousand a month, Perth and Brisbane
                    close behind, and Adelaide, Canberra and the Gold Coast each above a thousand.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/au">FactoryJet Australia</a>
                  <a className="city-pill" href="/au/melbourne">Melbourne</a>
                  <a className="city-pill" href="/au/brisbane">Brisbane</a>
                  <a className="city-pill" href="/au/adelaide">Adelaide</a>
                  <a className="city-pill" href="/au/canberra">Canberra</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>Australia · Monthly SEO Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {DEMAND.map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.note}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, Google Australia, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 17. SIBLING SERVICES (hover cards) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Related services in Australia</span>
              <h2>SEO works best on a site built to be found</h2>
            </div>
            <ul className="col-4 mt-10" style={{ gap: 16 }}>
              {[
                { h: '/au/ai-seo', t: 'AI SEO and GEO', d: 'Get named in ChatGPT, Perplexity, Gemini and Google AI Overviews, not only ranked.' },
                { h: '/au', t: 'Web design Australia', d: 'Fast, well-structured websites, with 7-day delivery for sites up to 5 pages.' },
                { h: '/au/shopify-development', t: 'Shopify development', d: 'Stores built with clean collection pages and structured data from day one.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Custom and replatformed stores, with SEO carried across during migration.' },
              ].map((c) => (
                <li key={c.h}>
                  <a href={c.h} className="svc-card" style={{ display: 'block', height: '100%' }}>
                    <h3 style={{ fontSize: 17 }}>{c.t} <span aria-hidden="true" style={{ color: T.small }}>→</span></h3>
                    <p style={{ marginTop: 8, fontSize: 14 }}>{c.d}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 18. FAQ (sidebar filter + mobile pill nav) ═══ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>SEO services in Australia: {FAQ_ITEMS.length} questions Australians ask</h2>
            </div>
            <nav className="faq-pill-nav" aria-label="FAQ topics">
              {FAQ_CATEGORIES.map((c) => (
                <a key={c.key} href={`#faq-${c.key}`}>
                  {c.label}
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

        {/* ═══ 19. SOURCES ═══ */}
        <section className="sec" aria-label="Sources">
          <div className="wrap">
            <span className="eyebrow">Sources</span>
            <ol className="stack-sm mt-6" style={{ maxWidth: 900, listStyle: 'none', padding: 0 }}>
              {CITATIONS.map((c) => (
                <li key={c.id} style={{ display: 'flex', gap: 12 }}>
                  <span style={{ fontFamily: T.fm, fontSize: 12, fontWeight: 600, color: T.small }}>[{c.id}]</span>
                  <div>
                    <a href={c.url} target="_blank" rel="noopener noreferrer nofollow" style={{ fontWeight: 600, textDecoration: 'underline' }}>{c.source}: {c.title}</a>
                    <p style={{ fontSize: 13.5, marginTop: 4 }}>{c.claim}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p style={srcNote}>
              Search volumes, AI Overview and map pack presence, and competitor link counts on this page were measured by FactoryJet against Google Australia in August and September 2026.
            </p>
          </div>
        </section>

        {/* ═══ 20. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Find out whether SEO is worth your money</h2>
            <p className="mt-4">
              Send your name and work email. We crawl the site, check your Google Business Profile, read your own
              Search Console data and measure the businesses holding the positions you want. You get a written note on
              the three biggest problems and an honest view of whether the gap can be closed. If search is not your
              real problem, that is what we will tell you.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get a free site review" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/au/ai-seo" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See AI SEO services</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

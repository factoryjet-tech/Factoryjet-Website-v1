import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import { CANONICAL, CRUMBS, CITATIONS, SERVICE_AREAS } from './pageData';
import { FAQ_CATEGORIES, FAQ_ITEMS } from './faqData';
import '../au-service.css';

/* Primary terms (DataForSEO, Australia, fetched 2026-09-24, close variants collapsed):
   web design melbourne 1,900 · website design melbourne 1,300 · seo consultant melbourne
   1,000 · melbourne web designer 720 · web design company / agency melbourne 590.
   Title and H1 intent kept from the previous version of this page (it already carries
   "web design" + "SEO consultant" + "Melbourne"). */
const UPDATED = '2026-09-25';
const TITLE = 'Web Design & SEO Consultant Melbourne | FactoryJet';
const H1 = 'Web design and SEO consulting in Melbourne';
const DESCRIPTION =
  'Melbourne web design and SEO consulting. Fast sites built by senior engineers, honest advice on what will move enquiries, and you own everything. Free site review.';

/* Design tokens, copied by value from ../au-service.css (same as /au/ai-agents). */
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

const [SRC_ABS, SRC_SEO_GUIDE, SRC_CWV] = CITATIONS;

/* ─── Melbourne search demand (DataForSEO, Australia, 2026-09-24) ─── */
const DEMAND = [
  { kw: 'web design melbourne', v: '1,900', w: '100%', note: 'Head term, Maps pack shown' },
  { kw: 'website design melbourne', v: '1,300', w: '68%', note: 'Same buyer, different wording' },
  { kw: 'melbourne web designer', v: '720', w: '38%', note: 'Looking for a person, not a firm' },
  { kw: 'web design company melbourne', v: '590', w: '31%', note: 'Also “web design agency melbourne”' },
  { kw: 'ecommerce website design melbourne', v: '390', w: '21%', note: 'Online stores' },
  { kw: 'small business website design melbourne', v: '320', w: '17%', note: 'Owner-operators' },
  { kw: 'web developer melbourne', v: '210', w: '11%', note: 'Also “wordpress developer melbourne”' },
  { kw: 'website design melbourne cost', v: '110', w: '6%', note: 'AI Overview shown' },
];

/* ─── All tracked searches naming each city (analysis.json "cities") ─── */
const CITIES = [
  { city: 'Sydney', total: '10,430', seo: '7,270', web: '2,640', ecom: '310', ai: '200', href: '' },
  { city: 'Melbourne', total: '10,330', seo: '6,630', web: '2,920', ecom: '430', ai: '240', href: '' },
  { city: 'Perth', total: '7,900', seo: '4,940', web: '2,670', ecom: '240', ai: '40', href: '' },
  { city: 'Brisbane', total: '5,490', seo: '4,000', web: '1,380', ecom: '100', ai: 'under 10', href: '/au/brisbane' },
  { city: 'Adelaide', total: '3,780', seo: '2,970', web: '800', ecom: '10', ai: 'under 10', href: '/au/adelaide' },
  { city: 'Canberra', total: '2,200', seo: '1,250', web: '950', ecom: 'under 10', ai: 'under 10', href: '/au/canberra' },
];

/* ─── Five symptoms (rendered as <details>) ─── */
const DIAGNOSIS: { symptom: string; likely: string; fix: string }[] = [
  { symptom: 'Traffic is fine, enquiries are not',
    likely: 'A conversion problem, not a search problem. More traffic will not fix it, and buying SEO will waste your money.',
    fix: 'Look at what the page asks a visitor to do and how hard it is to do it on a phone. Usually a clearer first screen, a shorter form and real proof of past work.' },
  { symptom: 'You rank for your business name and nothing else',
    likely: 'A content problem. The site describes the company rather than answering what buyers search for.',
    fix: 'One strong page per service, named the way customers say it. This usually moves within a quarter.' },
  { symptom: 'Pages exist but do not appear in Google at all',
    likely: 'A technical problem, and the cheapest of the five to fix.',
    fix: 'Something is blocking indexing: a robots rule, a leftover noindex tag, or content that only loads after JavaScript. Search Console names the cause.' },
  { symptom: 'You appear in search but never in the map results',
    likely: 'A local listing problem.',
    fix: 'The Google Business Profile is unverified, miscategorised or duplicated, or your business details differ across directories. Usually a one-off fix.' },
  { symptom: 'You rank on page two and never move',
    likely: 'An authority problem, and the slowest to fix. Other sites do not reference you.',
    fix: 'Earned mentions and links over quarters: local data worth quoting, supplier and industry relationships, genuine sponsorships. Never bought links.' },
];

/* ─── Who we build for in Melbourne ─── */
const SECTORS = [
  { name: 'Professional services', where: 'CBD, Southbank, South Yarra', note: 'Accountants, lawyers, brokers and consultancies. Long decision cycles and buyers who read several pages before making contact, so depth of content beats speed of contact.' },
  { name: 'Health and allied health', where: 'Richmond, Box Hill, the eastern suburbs', note: 'Driven heavily by Maps and reviews, where how close the searcher is does much of the ranking work. Online booking has to connect to the practice system, not sit beside it.' },
  { name: 'Manufacturing and trade supply', where: 'Dandenong, the north and west, out to Geelong', note: 'Often B2B with procurement teams involved, so the site has to survive scrutiny rather than convert on the spot. Product catalogues and trade ordering matter more than hero images.' },
  { name: 'Creative and studio businesses', where: 'Fitzroy, Collingwood, Brunswick', note: 'Usually strong on brand and weak on technical foundations. A pleasant problem: the fixes are quick and the payoff is immediate.' },
  { name: 'Hospitality and independent retail', where: 'CBD laneways, Carlton, St Kilda', note: 'Discovery happens in Maps and on phones, often while someone is already walking nearby. Opening hours, menus and a tappable map link come before anything else.' },
  { name: 'Trades and construction', where: 'Across the whole metro area', note: 'Phone-first buyers searching from a job address. A clear call button and the suburbs you cover, in the first screen, matter more than anything else on the page.' },
];

/* ─── How we build (web design) ─── */
const BUILD: { t: string; d: string }[] = [
  { t: 'Built to a measured standard, not a described one', d: 'Google publishes the marks it judges page experience on: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. We build against those numbers and show you the before and after measurement rather than telling you the site is fast.' },
  { t: 'Structured around what Melbourne buyers search', d: 'One page per service you genuinely want enquiries for, named the way customers say it. A firm selling business restructuring advice needs a page called that, not one called advisory solutions. This is the single most common thing we change on Melbourne sites, and it is usually the cheapest.' },
  { t: 'Content that answers before it sells', d: 'Each page opens by answering the question that brought the reader there, then covers how the work runs, what it asks of you, what can go wrong, and what happens next. Pages written this way are also the ones AI assistants quote, because they contain answers rather than adjectives.' },
  { t: 'Designed for the phone first', d: 'Most local enquiries start on a phone, often on a tram or between jobs. We design the mobile view first: readable text, buttons you can tap with a thumb, a short form, and nothing that pushes the page sideways. The desktop version follows from that.' },
  { t: 'Integrated with what you already run', d: 'Practice management software, a booking system, a CRM, Xero or MYOB. Most Melbourne businesses of any size already run something, and a website that ignores it creates double entry for whoever does your admin. We connect them where an interface exists and say plainly when one does not.' },
  { t: 'Handed over with nothing held back', d: 'Domain, hosting, site and admin access to every account, all in your name. If you leave, nothing breaks and nothing has to be bought back. We have taken on enough rescue work from businesses who did not own their own domain to be firm about this.' },
];

/* ─── How we advise (SEO consulting) ─── */
const ADVISE: { t: string; d: string }[] = [
  { t: 'A diagnosis you can act on without us', d: 'A written audit that names each fault, ranks it by what it is costing you rather than by how hard it is to fix, and says who should do it. Plenty of Melbourne businesses take that document to their existing developer and never engage us further. That is a legitimate outcome, and the audit is scoped to work as a standalone piece.' },
  { t: 'Demand checked before anything is written', d: 'We verify search volume against Google Ads data before recommending a single page, because Search Console impressions can be inflated by rank-tracking software rather than by people. If a term has no genuine Australian volume, we say so.' },
  { t: 'A brief your team can execute', d: 'If you have a marketer or a developer, the most efficient arrangement is often that we set direction and they do the work. You get the judgement without paying for hours your own team can cover. We write the briefs, review what comes back, and stay out of the way otherwise.' },
  { t: 'Local search set up properly, once', d: 'Google Business Profile claimed, verified, categorised to the most specific option, service areas set honestly, and business details made consistent across every directory you appear in. For most Melbourne businesses this is the highest-return hour available, and it is a one-off rather than a retainer.' },
  { t: 'Links earned, never bought', d: 'We earn mentions by making things worth mentioning: original local data, useful tools, genuine sponsorships and supplier relationships. We do not buy links, use private blog networks, or run automated outreach. Bought links are the fastest route to a manual penalty.' },
  { t: 'Reporting aimed at enquiries', d: 'The search terms bringing people in, what they did after arriving, and how many enquiries came from search. Rankings are in there, but they are the weakest number in the report. A first position on a term nobody searches is worth nothing.' },
];

/* ─── Process (rendered as <details>) ─── */
const STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Free review of your site and Google listing', d: 'Send the address. We crawl the site the way Google does, check your Google Business Profile, and read your Search Console data if you share it. We work out which of the five problems above you actually have.', out: 'A short written note on the three biggest problems and what each is likely costing you.' },
  { n: '02', t: 'A written scope with a fixed price', d: 'Pages, content, integrations, who supplies what, and the date. If the right answer is advice rather than a build, the scope says so.', out: 'A scope and fixed quote you can take to anyone. Nothing is charged before you have read it.' },
  { n: '03', t: 'Sitemap and content workshop', d: 'A video workshop in Melbourne business hours where we map every page against what your buyers search, using real volume data, and agree the words before any design.', out: 'A sitemap and page briefs, named the way customers search.' },
  { n: '04', t: 'Design, mobile first', d: 'Layouts for the phone view first, then desktop. You review real pages with your real content, not grey boxes.', out: 'Approved designs for every page template.' },
  { n: '05', t: 'Build, speed test and SEO setup', d: 'Built by the engineer you have been talking to. Measured against Google’s Core Web Vitals marks, with titles, structured data, redirects from any old pages, and Search Console connected.', out: 'A staging site with a speed report you can check yourself.' },
  { n: '06', t: 'Launch and handover', d: 'We launch, watch for errors in the first days, and hand over the domain, hosting and admin access in your name. Websites up to 5 pages qualify for our 7-day delivery from approved scope and content.', out: 'A live site you own outright, plus a short guide to editing it.' },
  { n: '07', t: 'Support and search work after launch', d: 'Optional. Monthly fixes and updates, or an SEO consulting rhythm where we review data and brief your team. You can stop either at any time.', out: 'The same team that built it, still answering.' },
];

/* ─── Six questions (existing ChoosingSomeone content) ─── */
const QUESTIONS: { q: string; good: string; bad: string }[] = [
  { q: 'Who will actually do the work?', good: 'A name, a role, and a yes to whether they will be on your calls.', bad: 'A vague reference to “the team” or a promise that you will be well looked after.' },
  { q: 'What happens if I leave in six months?', good: 'You keep the domain, the site, the content and admin access to everything.', bad: 'Any hesitation, or a mention of transfer fees, handover charges or licence terms.' },
  { q: 'Can you show me a site you built two years ago and run a speed test on it now?', good: 'They open it and run the test with you, whatever it says.', bad: 'Screenshots, a portfolio page, or an explanation of why that client changed things.' },
  { q: 'How did you choose these keywords?', good: 'Real search volume, checked against advertising data, with the numbers shown.', bad: 'A tool difficulty score alone, or a long list of terms with no volume attached.' },
  { q: 'What will you refuse to do?', good: 'A specific answer. Buying links is the obvious one and the most important.', bad: 'Nothing comes to mind, or whatever the client wants.' },
  { q: 'What should I see in ninety days, and what will still be unfinished?', good: 'A leading indicator with a date, plus honesty that authority takes quarters.', bad: 'A ranking promise, a position guarantee, or a date attached to page one.' },
];

/* Page one for "web design company melbourne", Google AU, 2026-09-24, directories
   (Clutch and similar) removed. Observation of the results page, not an endorsement. */
const PAGE_ONE = [
  'chromatix.com.au', 'makemywebsite.com.au', 'earnedmedia.com.au', '23digital.com.au',
  'designpoint.com.au', 'simple.com.au', 'digitalsurfer.com.au', 'magicdust.com.au',
];

/* ─── JSON-LD. Organization is defined sitewide; referenced here by @id only.
       No LocalBusiness node: FactoryJet has no Melbourne office. ─── */
const AUTHOR = {
  '@type': 'Person',
  name: 'Bhavesh Barot',
  jobTitle: 'Founder & CEO',
  url: 'https://factoryjet.com/about',
  sameAs: ['https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', 'https://github.com/factoryjet-tech'],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Web Design and SEO Consulting Melbourne',
      serviceType: 'Website design, web development and search engine optimisation consulting',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Melbourne' },
        { '@type': 'AdministrativeArea', name: 'Victoria' },
        ...SERVICE_AREAS.map((name) => ({ '@type': 'Place', name })),
      ],
      url: CANONICAL,
      description:
        'Web design and SEO consulting for Melbourne and Victorian businesses, delivered remotely in Melbourne business hours. Fast websites built by senior engineers, technical SEO audits, Google Business Profile and local search, ecommerce builds. The client owns everything.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Melbourne web design and SEO services',
        itemListElement: [
          'Website design and build',
          'Small business website design',
          'Ecommerce website design',
          'Website speed and Core Web Vitals repair',
          'Technical SEO audit and written diagnosis',
          'SEO advisory for in-house teams',
          'Local SEO and Google Business Profile',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumbs`,
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
      image: 'https://factoryjet.com/images/au/melbourne/melbourne-og.webp',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumbs` },
      about: { '@id': `${CANONICAL}#service` },
      author: AUTHOR,
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    // Generated by mapping FAQ_ITEMS, the SAME array the FAQ section renders.
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
      'Fast websites and straight advice on search for Melbourne businesses. We build it, or we brief your team. Free review before anything is charged.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/melbourne/melbourne-og.webp', width: 1200, height: 630, alt: 'Web design Melbourne: a web designer and a business owner review a new homepage in a Collingwood warehouse studio, with a tram passing outside' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Fast websites and straight advice on search for Melbourne businesses.',
    images: ['/images/au/melbourne/melbourne-og.webp'],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const imgStyle = { width: '100%', height: 'auto', borderRadius: 12, display: 'block' } as const;

export default function MelbournePage() {
  return (
    <>
      <script id="ld-au-melbourne" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />Melbourne, Victoria</span>
                  <span className="chip">Web Design</span>
                  <span className="chip">SEO Consulting</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Web design in Melbourne for businesses that need the website to bring in work. We design and build
                  fast websites, advise on the search work that will actually move enquiries, and you deal with the
                  engineer doing the job, not an account manager relaying messages. You own everything at the end.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />25 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="au" source="au_melbourne_hero_inline" submitLabel="Get my free site review" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/melbourne/melbourne-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A Melbourne web designer and a business owner review her new homepage design on a monitor in a Collingwood warehouse studio, with a tram passing on the street outside" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">How we work with Melbourne businesses</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Senior engineers only</div><div className="scorecard-note">the person who scopes it builds it</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Always</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">7-day delivery</div><div className="scorecard-note">websites up to 5 pages</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>7 days</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Domain, site and every account</div><div className="scorecard-note">in your name from day one</div></div>
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
              <span className="lab">What does a web design company in Melbourne actually do?</span>
              <p>
                A good web design company in Melbourne builds a site that loads fast on a phone, says what you sell in
                the first screen, and is structured around what Melbourne buyers type into Google. It connects to the
                software you already run, hands you the domain and every login, and measures success in enquiries,
                not in how the homepage looks on launch day.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">And what does an SEO consultant in Melbourne do?</span>
              <p>
                An SEO consultant diagnoses why your website is not producing enquiries, puts the causes in the order
                that pays back fastest, and either fixes them or briefs whoever will. That is different from a
                retainer, which buys a fixed number of hours whether or not they are aimed at your real problem.
                FactoryJet works both ways: we build and run the work, or we advise and your team executes.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Melbourne is one of the two busiest search markets in Australia for this work. Across web design, SEO,
              ecommerce and AI services, Melbourne records about 10,330 searches a month that name the city, just
              behind Sydney. For web design alone, and for ecommerce and AI agents, it is the busiest city in the
              country. That means more buyers, and more agencies competing for them, so this page spends as much time
              on how to judge a web designer as it does on selling ours.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '2,920', t: 'monthly Melbourne web design searches, the most of any Australian city', s: 'DataForSEO, Sep 2026', u: '' },
                { v: '19,581', t: 'more businesses in Victoria across 2025–26, the second largest rise of any state', s: 'ABS, Aug 2026', u: SRC_ABS.url },
                { v: 'No AIO', t: 'Google showed no AI Overview on “web design company melbourne” or “melbourne web designer”', s: 'Google AU, 24 Sep 2026', u: '' },
                { v: '2.5s', t: 'Google’s Largest Contentful Paint mark for a good page experience', s: 'Google Search Central', u: SRC_CWV.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  {r.u ? (
                    <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                  ) : (
                    <span style={{ fontFamily: T.fm, fontSize: 10, color: T.n400 }}>{r.s}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. FIVE SYMPTOMS (interactive <details>) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Diagnosis before design</span>
                <h2>Five reasons a Melbourne website stops bringing in work</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Five Melbourne businesses can have the same complaint, that the website does not bring in work, and
                  five different causes with very different costs to fix. Being sold a content retainer when the real
                  problem is a noindex tag is how owners come to believe search does not work for them. Open the one
                  that sounds like you.
                </p>
                <div className="card mt-8" style={{ padding: '4px 22px' }}>
                  {DIAGNOSIS.map((d, i) => (
                    <details key={d.symptom}>
                      <summary><span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 10 }}>{String(i + 1).padStart(2, '0')}</span>{d.symptom}</span></summary>
                      <div style={{ paddingBottom: 18 }}>
                        <p style={{ fontSize: 15 }}><b>Likely cause:</b> {d.likely}</p>
                        <p style={{ fontSize: 15, marginTop: 8 }}><b>What fixes it:</b> {d.fix}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Melbourne engagements at a glance</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Where we work</div><div className="scorecard-note">CBD to Box Hill, Footscray, Dandenong and Geelong</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Metro + VIC</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Two ways to engage</div><div className="scorecard-note">we build it, or we advise your team</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Build / Advise</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">How it starts</div><div className="scorecard-note">site and Google listing review, in writing</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">How we meet</div><div className="scorecard-note">video calls in Melbourne business hours</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Remote</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">What we will not do</div><div className="scorecard-note">buy links, hold your domain, promise a position</div></div><div className="scorecard-val" style={{ color: T.small, fontSize: 14 }}>Never</div></div>
                <p style={{ fontSize: 13, color: T.n400, marginTop: 12 }}>
                  No price figures appear on this page on purpose. What a Melbourne engagement costs depends on which
                  of the five problems you actually have, and a number posted here would be wrong for most readers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. MELBOURNE MARKET + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The Melbourne search market</span>
                <h2>What Melbourne website design searches look like in September 2026</h2>
                <div className="stack mt-6">
                  <p>
                    Victoria gained 19,581 businesses across 2025–26, the second largest net increase of any state or
                    territory, within a national total of 2,814,778 actively trading businesses at 30 June 2026. More
                    businesses means more people competing for the same attention, which is part of why Melbourne is a
                    harder search market than Brisbane or Adelaide.
                  </p>
                  <p>
                    The demand is real. “Web design melbourne” is searched about 1,900 times a month and “website
                    design melbourne” about 1,300, and they are largely the same buyer using different words. A smaller
                    group searches for a person rather than a firm, “melbourne web designer”, and they tend to be
                    owner-operators who want to deal with one named human. We wrote this page for both.
                  </p>
                  <p>
                    We checked who holds page one on 24 September 2026, counting how many separate websites link to
                    each one (known as referring domains, the main measure of a site’s authority). For “web design
                    company melbourne” the weakest agency on page one had links from 335 websites and the middle of
                    the pack about 780. Those positions belong to firms with a decade of reputation, and nobody reaches
                    them in months. The softer searches are different: one small studio on page one for “melbourne web
                    designer” had links from just 3 websites. Depth and clarity still win there.
                  </p>
                  <p>
                    One more thing worth knowing. Most of these searches show a Google Maps pack, the three local
                    businesses with pins, above the ordinary results. That pack goes to businesses with a Melbourne
                    address close to the searcher. We do not have a Melbourne office and will not invent one to get in.
                    What we can do is set up your own Google Business Profile so that you are in it.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_ABS.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC_ABS.source}, {SRC_ABS.title}</a>;
                  {' '}search volumes and page-one checks from DataForSEO, Google Australia, 24 September 2026.
                </p>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>Melbourne · Monthly Searches</span>
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
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Google Australia, September 2026. Close variants overlap.</p>
                </div>
              </div>
            </div>

            <h3 className="mt-12" style={{ maxWidth: 760 }}>How Melbourne compares with other Australian cities</h3>
            <p className="mt-4" style={{ maxWidth: 760 }}>
              Monthly searches that name each city, across the web design, SEO, ecommerce and AI agent terms we track.
              Melbourne edges Sydney on web design, ecommerce and AI agent demand, and trails it on SEO.
            </p>
            <div className="card mt-6" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>City</th>
                    <th>All tracked searches</th>
                    <th className="fj">Web design</th>
                    <th>SEO</th>
                    <th>Ecommerce</th>
                    <th>AI agents</th>
                  </tr>
                </thead>
                <tbody>
                  {CITIES.map((c) => (
                    <tr key={c.city}>
                      <td className="feat">{c.href ? <a href={c.href} style={srcLink}>{c.city}</a> : c.city}{c.city === 'Melbourne' ? ' (this page)' : ''}</td>
                      <td>{c.total}</td>
                      <td className="fj">{c.web}</td>
                      <td>{c.seo}</td>
                      <td>{c.ecom}</td>
                      <td>{c.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>DataForSEO, Google Australia, keyword volumes fetched 24 September 2026, close variants collapsed.</p>
          </div>
        </section>

        {/* ═══ 6. WHO WE BUILD FOR ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who we build for in Melbourne</span>
                <h2>Small business website design across Melbourne, suburb by suburb</h2>
                <p className="lead mt-4" style={{ maxWidth: 580 }}>
                  About 320 Melbourne searches a month are for small business website design specifically. Every
                  industry buys differently, so the site has to match how your customers decide, not a template. These
                  are the Melbourne businesses we build for most.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/melbourne/melbourne-laneway.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A cafe owner in a Melbourne CBD laneway checks her new website on her phone in the doorway of her cafe, with murals, hanging plants and bluestone cobbles behind her" style={imgStyle} />
                <div style={{ padding: '12px 10px 6px' }}>
                  <p style={{ fontSize: 14 }}>
                    In a laneway cafe, most visitors arrive on a phone within a few hundred metres of the door. Hours, the
                    menu and a map link have to load before anything else.
                  </p>
                </div>
              </div>
            </div>
            <ul className="col-3 mt-12">
              {SECTORS.map((s) => (
                <li key={s.name} className="svc-card">
                  <h3>{s.name}</h3>
                  <p style={{ fontFamily: T.fm, fontSize: 11, color: T.small, marginTop: 6, textTransform: 'uppercase', letterSpacing: '.06em' }}>{s.where}</p>
                  <p className="mt-4">{s.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8" style={{ fontSize: 14, color: T.n400 }}>
              Areas we work across: {SERVICE_AREAS.join(', ')}, and the rest of Victoria.
            </p>
          </div>
        </section>

        {/* ═══ 7. WEB DESIGN: WHEN WE BUILD IT ═══ */}
        <section className="sec-lg" id="web-design-melbourne">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Web design in Melbourne</span>
              <h2>Website design in Melbourne, when we build it: six things every site gets</h2>
              <p className="lead mt-4">
                We design and build the site, rework the content with you, and launch it. Websites of up to five pages
                qualify for our 7-day delivery from an approved scope. Builds with bookings, logins or integrations take
                longer, and you get the date at scope rather than discovering it in week six.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {BUILD.map((s, i) => (
                <li key={s.t} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p style={srcNote}>
              Core Web Vitals marks: <a href={SRC_CWV.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC_CWV.source}, {SRC_CWV.title}</a>.
            </p>
          </div>
        </section>

        {/* ═══ 8. INTEGRATIONS + CLINIC IMAGE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/melbourne/melbourne-clinic.webp" width={1200} height={800} loading="lazy" decoding="async" alt="The receptionist at a physiotherapy clinic in a renovated Richmond terrace checks the booking system while a patient waits at the front desk" style={imgStyle} />
              </div>
              <div>
                <span className="eyebrow">Beyond the brochure site</span>
                <h2>A website that works with the systems behind the front desk</h2>
                <div className="stack mt-6">
                  <p>
                    A Richmond physio, a Box Hill dental practice or a South Yarra accountant rarely needs a prettier
                    homepage. They need the booking button to write into the practice system, the enquiry form to land
                    in the CRM with the right tags, and the invoice to reach Xero or MYOB without someone retyping it.
                  </p>
                  <p>
                    That is where custom web design earns its keep over a template. We connect the site to the tools
                    you already run through their official connections, and we say plainly when a tool has no way in,
                    so you can decide whether to change it or live with a manual step.
                  </p>
                  <p>
                    If the repeated admin behind the website is the real problem, such as sorting enquiries or copying
                    orders between systems, that is a job for an <a href="/au/ai-agents" style={srcLink}>AI agent built into your existing tools</a>,
                    and Melbourne is the city with the most searches for exactly that. For a first opinion on where AI
                    fits at all, see <a href="/au/ai-consulting" style={srcLink}>AI consulting for Australian businesses</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Not sure which of the five problems you have?"
          sub="Send us your address. We crawl the site, check your Google Business Profile and read your own Search Console data, then tell you which one is actually costing you enquiries. Free, and if the answer is that you do not need us, we will say that."
          label="Get a free diagnosis"
          note="Bhavesh replies within one business day, Australian hours."
        />

        {/* ═══ 9. SEO CONSULTING ═══ */}
        <section className="sec-lg" id="seo-consultant-melbourne">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">SEO consultant Melbourne</span>
                <h2>SEO consulting in Melbourne, when your team does the work</h2>
                <p className="lead mt-4" style={{ maxWidth: 580 }}>
                  About 1,000 Melbourne searches a month are for an SEO consultant rather than an agency. Consultant
                  intent is advisory: the buyer usually has someone who can do the work and wants direction. Google itself
                  says some changes take effect in a few hours and others take several months, and advises waiting a few
                  weeks before judging a change. We plan around that.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/melbourne/melbourne-trades.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Melbourne plumber beside his white van on a leafy street of red-brick Edwardian houses checks a new job enquiry on his phone" style={imgStyle} />
                <div style={{ padding: '12px 10px 6px' }}>
                  <p style={{ fontSize: 14 }}>
                    For a tradie in the eastern suburbs, the Google Business Profile does more work than the website.
                    Setting it up properly is usually the first hour we recommend.
                  </p>
                </div>
              </div>
            </div>
            <ul className="col-3 mt-12">
              {ADVISE.map((a) => (
                <li key={a.t} className="card">
                  <h3 style={{ fontSize: 17 }}>{a.t}</h3>
                  <p className="mt-4" style={{ fontSize: 14.5 }}>{a.d}</p>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Timing guidance: <a href={SRC_SEO_GUIDE.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC_SEO_GUIDE.source}, {SRC_SEO_GUIDE.title}</a>.
              {' '}For the full SEO service, see <a href="/au/seo" style={srcLink}>SEO services in Australia</a>; for visibility in ChatGPT and Google AI answers, see <a href="/au/ai-seo" style={srcLink}>AI SEO for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ 10. PROCESS (<details>) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How a Melbourne project runs</span>
                <h2>From free review to live website in seven steps</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Open any step to see what happens and what you get at the end of it. You can stop after the review or
                  after the scope, and keep what we gave you.
                </p>
                <div className="card mt-8" style={{ padding: '4px 22px' }}>
                  {STEPS.map((s) => (
                    <details key={s.n}>
                      <summary><span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 10 }}>{s.n}</span>{s.t}</span></summary>
                      <div style={{ paddingBottom: 18 }}>
                        <p style={{ fontSize: 15 }}>{s.d}</p>
                        <p style={{ fontSize: 14, marginTop: 8 }}><b>You get:</b> {s.out}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/melbourne/melbourne-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A web strategist sketches a website sitemap of connected boxes on a whiteboard for two business owners in a Southbank meeting room overlooking the Yarra River" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Step three is a sitemap, not a colour palette. Every page gets named after something Melbourne buyers
                    actually search, using real volume data, before anyone opens a design tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>Freelance web designer vs design studio vs full-service agency vs FactoryJet</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Melbourne buyers search for all four, from “freelance web designer melbourne” to “web design agency
              melbourne”. Each is right for someone. The table shows where each one tends to be strong.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Freelance web designer</th>
                    <th>Design studio</th>
                    <th>Full-service agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">Sites that must perform and connect to your systems</span></td><td><span className="partial">Small, well-defined sites</span></td><td><span className="partial">Brand-led, visual work</span></td><td><span className="partial">Campaigns, ads and brand under one roof</span></td></tr>
                  <tr><td className="feat">Who writes the code</td><td className="fj"><span className="yes">Senior engineers you speak to</span></td><td><span className="yes">The freelancer</span></td><td><span className="partial">Varies, sometimes outsourced</span></td><td><span className="partial">Often a separate team</span></td></tr>
                  <tr><td className="feat">Speed measured against Google’s marks</td><td className="fj"><span className="yes">Before and after report</span></td><td><span className="partial">Depends on the person</span></td><td><span className="partial">Sometimes</span></td><td><span className="partial">Sometimes</span></td></tr>
                  <tr><td className="feat">Search demand checked before pages are planned</td><td className="fj"><span className="yes">Real volume data</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Sometimes</span></td><td><span className="yes">Usually</span></td></tr>
                  <tr><td className="feat">Integrations (bookings, CRM, Xero)</td><td className="fj"><span className="yes">Built in</span></td><td><span className="partial">Plugins</span></td><td><span className="partial">Varies</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Ownership of domain and accounts</td><td className="fj"><span className="yes">Yours from day one</span></td><td><span className="partial">Check the contract</span></td><td><span className="partial">Check the contract</span></td><td><span className="partial">Often held by the agency</span></td></tr>
                  <tr><td className="feat">Support after launch</td><td className="fj"><span className="yes">Same team</span></td><td><span className="partial">If available</span></td><td><span className="partial">Varies</span></td><td><span className="yes">Usually, on retainer</span></td></tr>
                  <tr><td className="feat">Melbourne office you can visit</td><td className="fj"><span className="no">No, remote in Melbourne hours</span></td><td><span className="partial">Sometimes</span></td><td><span className="yes">Usually</span></td><td><span className="yes">Usually</span></td></tr>
                  <tr><td className="feat">TV, print and brand campaigns</td><td className="fj"><span className="no">Not our work</span></td><td><span className="no">No</span></td><td><span className="partial">Brand, yes</span></td><td><span className="yes">Yes</span></td></tr>
                </tbody>
              </table>
            </div>
            <p style={srcNote}>The last two rows are where we are the wrong choice. A comparison where the author wins every line is not worth reading.</p>
          </div>
        </section>

        {/* ═══ 12. SIX QUESTIONS + WHO RANKS ═══ */}
        <section className="sec-lg dot-grid" id="choosing">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Choosing someone</span>
              <h2>Six questions that separate Melbourne web design agencies quickly</h2>
              <p className="lead mt-4">
                More Melbourne searches ask who to hire than what the work costs, so this is the part of the page worth
                your time. Ask all six of whoever you are considering, including us. Watch the right-hand column: it is
                where the difference usually shows.
              </p>
            </div>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table">
                <thead>
                  <tr><th>Ask this</th><th className="fj">A good answer sounds like</th><th>Walk away if you hear</th></tr>
                </thead>
                <tbody>
                  {QUESTIONS.map((r) => (
                    <tr key={r.q}><td className="feat">{r.q}</td><td className="fj"><span className="yes">{r.good}</span></td><td><span className="no">{r.bad}</span></td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="col-2 mt-12">
              <div className="card">
                <h3>Why there is no “best Melbourne web design agencies” list here</h3>
                <p className="mt-4">
                  Google shows several versions of that question to Melbourne searchers, so we know you are asking it.
                  We will not rank our own competitors, because a list written by us is marketing wearing a lab coat.
                  Every agency that publishes one puts itself at the top. Build your own shortlist instead: search the
                  terms you want to win, ask other owners in your industry who they use, then put the six questions to
                  each. Three conversations is usually enough.
                </p>
              </div>
              <div className="card card-top-orange">
                <h3>Who Google showed on page one</h3>
                <p className="mt-4" style={{ fontSize: 14.5 }}>
                  For “web design company melbourne” on 24 September 2026, with directories removed, page one held
                  these sites. It is a record of the results page, not a recommendation, and a sensible place to start
                  your own research.
                </p>
                <ul className="flex-wrap mt-4" style={{ listStyle: 'none', padding: 0 }}>
                  {PAGE_ONE.map((d) => (<li key={d} className="chip">{d}</li>))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. ECOMMERCE / B2B ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Ecommerce website design Melbourne</span>
                <h2>When the website has to sell, not just inform</h2>
                <div className="stack mt-6">
                  <p>
                    Ecommerce website design is the largest Melbourne web search after the core design terms, at about
                    390 searches a month, and Melbourne has more ecommerce searches naming the city than anywhere else in
                    Australia. Some of the most valuable are manufacturers and wholesalers in the south east and the west who
                    want trade customers to reorder online instead of by email.
                  </p>
                  <p>
                    That is a different build from a brochure site. Stock has to sync, GST has to be right, trade pricing
                    has to show only to logged-in accounts, shipping has to work with Australia Post and couriers, and
                    orders have to land in Xero or MYOB. FactoryJet has spent more than a decade on commerce builds,
                    including B2B ordering for Bombay Petals.
                  </p>
                  <p>
                    For store builds, see our <a href="/au/ecommerce-development" style={srcLink}>ecommerce development service in Australia</a>.
                    If you are on or moving to Shopify, see <a href="/au/shopify-development" style={srcLink}>Shopify development for Australian businesses</a>;
                    we are a registered Shopify Partner.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/melbourne/melbourne-b2b.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An operations manager with a tablet and a warehouse worker check a pallet of plain cartons in a light-industrial warehouse in Dandenong South, Melbourne" style={imgStyle} />
                <div style={{ padding: '12px 10px 6px' }}>
                  <p style={{ fontSize: 14 }}>
                    In a Dandenong South warehouse, the website is an ordering system. It has to agree with the stock on
                    the racks and the invoice in the accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. WHICH OPTION FITS (<details>) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Which option fits you</span>
              <h2>A quick check: what does your Melbourne business actually need?</h2>
              <p className="lead mt-4">Open the line that sounds most like you. The honest answer is not always this page.</p>
            </div>
            <div className="card mt-8" style={{ padding: '4px 22px', maxWidth: 900 }}>
              <details>
                <summary>We need a new website, up to five pages, and our content is mostly ready</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>This page is the right place.</b> Websites up to 5 pages qualify for our 7-day delivery from approved scope. Start with the free review so the scope is right.</p></div>
              </details>
              <details>
                <summary>Our site is fine, but we do not show up in Google or Maps</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>You need SEO, not a redesign.</b> Start with a technical audit and your Google Business Profile. See our <a href="/au/seo" style={srcLink}>SEO services for Australian businesses</a>.</p></div>
              </details>
              <details>
                <summary>We have a marketer or developer and just need direction</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>SEO consulting.</b> We diagnose, rank the fixes and brief your team. Often better value than a retainer.</p></div>
              </details>
              <details>
                <summary>We sell products online, or want trade customers to order online</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>An ecommerce build.</b> See <a href="/au/ecommerce-development" style={srcLink}>ecommerce development</a> or <a href="/au/shopify-development" style={srcLink}>Shopify development</a> in Australia.</p></div>
              </details>
              <details>
                <summary>We want ChatGPT, Perplexity and Google AI answers to name our business</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>That is AI search visibility.</b> See our <a href="/au/ai-seo" style={srcLink}>AI SEO service for Australian businesses</a>.</p></div>
              </details>
              <details>
                <summary>Our real problem is admin: enquiries, orders and invoices copied by hand</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Look at automation.</b> See <a href="/au/ai-agents" style={srcLink}>AI agents built into Xero, HubSpot and your other tools</a>.</p></div>
              </details>
              <details>
                <summary>We want a brand campaign, TV or print, or an office we can visit weekly</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Not us.</b> A Melbourne full-service agency or local studio is the better fit, and we would say so on a call.</p></div>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ 15. SIBLINGS + CITIES (hover cards) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">FactoryJet Australia</span>
              <h2>More services for Melbourne businesses</h2>
            </div>
            <ul className="col-3 mt-10" style={{ gap: 16 }}>
              {[
                { h: '/au', t: 'FactoryJet Australia', d: 'Web design, ecommerce, AI agents and AI search for Australian businesses, in one place.' },
                { h: '/au/seo', t: 'SEO services Australia', d: 'Technical repair, content and local search, reported on enquiries rather than rankings.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Online stores and B2B ordering connected to stock, shipping, GST and accounts.' },
                { h: '/au/shopify-development', t: 'Shopify development', d: 'Shopify builds, migrations and apps from a registered Shopify Partner.' },
                { h: '/au/ai-agents', t: 'AI agents & automation', d: 'Custom AI agents inside Xero, HubSpot and Microsoft 365, with human approval built in.' },
                { h: '/au/ai-seo', t: 'AI SEO', d: 'Get your business named in ChatGPT, Perplexity and Google AI answers.' },
              ].map((c) => (
                <li key={c.h}>
                  <a href={c.h} className="svc-card" style={{ display: 'block', height: '100%' }}>
                    <h3 style={{ fontSize: 17 }}>{c.t} <span aria-hidden="true" style={{ color: T.small }}>→</span></h3>
                    <p style={{ marginTop: 8, fontSize: 14 }}>{c.d}</p>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-10" style={{ fontSize: 15 }}>Web design and SEO in other Australian cities:</p>
            <div className="flex-wrap mt-4">
              <a className="city-pill" href="/au/brisbane">Web design Brisbane</a>
              <a className="city-pill" href="/au/adelaide">Web design Adelaide</a>
              <a className="city-pill" href="/au/canberra">Web design Canberra</a>
              <a className="city-pill" href="/au">All of Australia</a>
            </div>
          </div>
        </section>

        {/* ═══ 16. FAQ ═══ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Web design and SEO in Melbourne: questions buyers ask</h2>
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

        {/* ═══ 17. SOURCES ═══ */}
        <section className="sec">
          <div className="wrap" style={{ maxWidth: 900 }}>
            <span className="eyebrow">Sources</span>
            <ol className="stack mt-4" style={{ paddingLeft: 18 }}>
              {CITATIONS.map((c) => (
                <li key={c.id} style={{ fontSize: 14 }}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" style={srcLink}>{c.source}: {c.title}</a>
                  <p style={{ fontSize: 13.5, color: T.n400, marginTop: 4 }}>{c.claim}</p>
                </li>
              ))}
            </ol>
            <p style={srcNote}>
              Search volumes, page-one link counts, Maps pack and AI Overview presence were measured by FactoryJet with
              DataForSEO against Google Australia on 24 September 2026.
            </p>
          </div>
        </section>

        {/* ═══ 18. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Find out what is actually holding your Melbourne site back</h2>
            <p className="mt-4">
              Send us the address. We will work out which of the five problems on this page you actually have, in
              writing, and if your problem is conversion rather than search we will say so. The founder replies within
              one business day, Australian hours.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get a free site review" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/au/seo" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See SEO services</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

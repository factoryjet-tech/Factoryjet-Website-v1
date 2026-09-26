import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import { CANONICAL, CRUMBS, CITATIONS, SERVICE_AREAS } from './pageData';
import { FAQ_CATEGORIES, FAQ_ITEMS } from './faqData';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-city.css';

/* Primary terms (DataForSEO, Australia, fetched 2026-09-24, close variants collapsed):
   web design melbourne 1,900 · website design melbourne 1,300 · seo consultant melbourne
   1,000 · melbourne web designer 720 · web design company / agency melbourne 590.
   Title and H1 intent kept from the previous version of this page (it already carries
   "web design" + "SEO consultant" + "Melbourne"). */
const UPDATED = '2026-09-26';
const TITLE = 'Web Design & SEO Consultant Melbourne | FactoryJet';
const H1 = 'Web design and SEO consulting in Melbourne';
const DESCRIPTION =
  'Melbourne web design and SEO consulting. Fast sites by senior engineers, honest advice on what will move enquiries, and you own everything. Free site review.';

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

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'melbourne';

/* H1 split for the Family A hero emphasis. Rendered text stays byte-identical to H1 (schema headline). */
const H1_SPLIT = H1.lastIndexOf(' in ');
const H1_LEAD = H1.slice(0, H1_SPLIT);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 1);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec panel rows (the old "How we work with Melbourne businesses" hero card rows). */
const HERO_ROWS: { note: string; metric: string; val: string; icon: string }[] = [
  { note: 'the person who scopes it builds it', metric: 'Senior engineers only', val: 'Always', icon: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 10c0-4 3-6 7-6s7 2 7 6' },
  { note: 'websites up to 5 pages', metric: '7-day delivery', val: '7 days', icon: 'M4 5h16v15H4V5Zm0 5h16M8 3v4m8-4v4' },
  { note: 'in your name from day one', metric: 'Domain, site and every account', val: 'Yours', icon: 'M14 4a6 6 0 1 1-4.2 10.3L4 20m2-2 2 2m1-5 2 2' },
];

/* Icons and visual-slot subjects for the six web design cards (same order as BUILD). */
const BUILD_ICONS = [
  'M4 16a8 8 0 1 1 16 0M12 16l4-5',
  'M4 5h16M4 12h11M4 19h7',
  'M6 3h9l4 4v14H6V3Zm3 8h7m-7 4h7',
  'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 15h2',
  'M9 3v5m6-5v5M7 8h10v3a5 5 0 0 1-10 0V8Zm5 8v5',
  'M14 4a6 6 0 1 1-4.2 10.3L4 20m2-2 2 2m1-5 2 2',
] as const;
const BUILD_SUBJECTS = [
  'AI-generated model: a white speed gauge with its needle resting in an orange good zone beside a small phone',
  'AI-generated model: a row of white page cards, each labelled with a short search phrase, linked to one site map',
  'AI-generated model: a white page card with an orange answer block at the top and plain text lines below',
  'AI-generated model: a white phone showing a short form and one large orange call button',
  'AI-generated model: a website card connected by thin lines to a booking calendar, a CRM card and an invoice card',
  'AI-generated model: an orange key being handed from one small figure to another in front of a white website card',
] as const;

export default function MelbournePage() {
  return (
    <>
      <script id="ld-au-melbourne" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {CRUMBS.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === CRUMBS.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="main-content">

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Melbourne, Victoria</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Web design in Melbourne for businesses that need the website to bring in work. We design and build
                fast websites, advise on the search work that will actually move enquiries, and you deal with the
                engineer doing the job, not an account manager relaying messages. You own everything at the end.
              </p>
              <HeroInlineForm region="au" source="au_melbourne_hero_inline" submitLabel="Get my free site review" />
            </div>

            <form
              className="specpanel"
              aria-label="How we work with Melbourne businesses"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="How every Melbourne engagement runs: senior engineers only, 7-day delivery for small sites, and every account in the client's name"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · HOW WE WORK WITH MELBOURNE BUSINESSES</span>
                <span className="sys"><span>WEB DESIGN</span><span>SEO CONSULTING</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore how we work">
                {HERO_ROWS.map((r, i) => (
                  <label key={r.metric} className={i === HERO_ROWS.length - 1 ? 'specrow hold' : 'specrow run'}>
                    <input className="workflow-select" type="radio" name="melbourne-step" value={String(i + 1)} />
                    <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={r.icon} /></svg></span>
                    <span className="idx">{r.note}</span>
                    <span className="title">{r.metric}</span>
                    <span className="tag">{r.val}</span>
                  </label>
                ))}
              </div>
              <div className="specpanel-foot">RULE · If you leave, nothing breaks and nothing has to be bought back.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '2,920', t: 'monthly Melbourne web design searches, the most of any Australian city', s: 'DataForSEO, Sep 2026', u: '' },
              { v: '19,581', t: 'more businesses in Victoria across 2025–26, the second largest rise of any state', s: 'ABS, Aug 2026', u: SRC_ABS.url },
              { v: 'No AIO', t: 'Google showed no AI Overview on “web design company melbourne” or “melbourne web designer”', s: 'Google AU, 24 Sep 2026', u: '' },
              { v: '2.5s', t: 'Google’s Largest Contentful Paint mark for a good page experience', s: 'Google Search Central', u: SRC_CWV.url },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k">{r.u ? <a href={r.u} {...extLink}>{r.s}</a> : r.s}</div>
                <div className="v">
                  <strong className={/^[\d.,]+s?$/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />26 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) → facts ═══ */}
        <section className="section facts" id="answer">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does a web design company in Melbourne actually do?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    A good web design company in Melbourne builds a site that loads fast on a phone, says what you sell in
                    the first screen, and is structured around what Melbourne buyers type into Google. It connects to the
                    software you already run, hands you the domain and every login, and measures success in enquiries,
                    not in how the homepage looks on launch day.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div data-speakable="true">
                    <h3>And what does an SEO consultant in Melbourne do?</h3>
                    <p>
                      An SEO consultant diagnoses why your website is not producing enquiries, puts the causes in the order
                      that pays back fastest, and either fixes them or briefs whoever will. That is different from a
                      retainer, which buys a fixed number of hours whether or not they are aimed at your real problem.
                      FactoryJet works both ways: we build and run the work, or we advise and your team executes.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Melbourne is one of the two busiest search markets in Australia for this work. Across web design, SEO,
                    ecommerce and AI services, Melbourne records about 10,330 searches a month that name the city, just
                    behind Sydney. For web design alone, and for ecommerce and AI agents, it is the busiest city in the
                    country. That means more buyers, and more agencies competing for them, so this page spends as much time
                    on how to judge a web designer as it does on selling ours.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A Melbourne web designer and a business owner reviewing her new homepage on a monitor in a Collingwood warehouse studio">
                <img src="/images/au/melbourne/melbourne-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="A Melbourne web designer and a business owner review her new homepage design on a monitor in a Collingwood warehouse studio, with a tram passing on the street outside" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ FIVE SYMPTOMS (<details>) → vlog, engagement card as a panel ═══ */}
        <section className="vlog" id="diagnosis">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Diagnosis before design</div>
              <h2>Five reasons a Melbourne website stops bringing in work</h2>
              <p>
                Five Melbourne businesses can have the same complaint, that the website does not bring in work, and
                five different causes with very different costs to fix. Being sold a content retainer when the real
                problem is a noindex tag is how owners come to believe search does not work for them. Open the one
                that sounds like you.
              </p>
            </div>
            <div className="ventries">
              {DIAGNOSIS.map((d) => (
                <details key={d.symptom} className="ventry">
                  <summary><h3>{d.symptom}</h3><span className="chev" aria-hidden="true">+</span></summary>
                  <p><b>Likely cause:</b> {d.likely}</p>
                  <p><b>What fixes it:</b> {d.fix}</p>
                </details>
              ))}
              <div className="au-panel">
                <div className="eyebrow">Melbourne engagements at a glance</div>
                <ul className="trigrows">
                  <li><span className="m">Where we work</span><span className="n">CBD to Box Hill, Footscray, Dandenong and Geelong</span><span className="t">Metro + VIC</span></li>
                  <li><span className="m">Two ways to engage</span><span className="n">we build it, or we advise your team</span><span className="t">Build / Advise</span></li>
                  <li><span className="m">How it starts</span><span className="n">site and Google listing review, in writing</span><span className="t">Free</span></li>
                  <li><span className="m">How we meet</span><span className="n">video calls in Melbourne business hours</span><span className="t">Remote</span></li>
                  <li><span className="m">What we will not do</span><span className="n">buy links, hold your domain, promise a position</span><span className="t">Never</span></li>
                </ul>
                <p className="au-note">
                  No price figures appear on this page on purpose. What a Melbourne engagement costs depends on which
                  of the five problems you actually have, and a number posted here would be wrong for most readers.
                  For published Australian ranges, see our{' '}
                  <a href="/blog/website-cost-australia-2026">guide to website design cost in Australia</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MELBOURNE MARKET + DEMAND → prose/demand split, then city table ═══ */}
        <section className="section market" id="market">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The Melbourne search market</div>
              <h2>What Melbourne website design searches look like in September 2026</h2>
            </div>
            <div className="au-split au-split-flush">
              <div>
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
                <p className="au-note">
                  Sources: <a href={SRC_ABS.url} {...extLink}>{SRC_ABS.source}, {SRC_ABS.title}</a>;
                  {' '}search volumes and page-one checks from DataForSEO, Google Australia, 24 September 2026.
                </p>
              </div>
              <div className="demand">
                <div className="demand-head"><span>Melbourne · Monthly Searches</span><b>DataForSEO</b></div>
                <ul>
                  {DEMAND.map((r) => (
                    <li key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.note}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Google Australia, September 2026. Close variants overlap.</p>
              </div>
            </div>

            <div className="city-sub">
              <h3>How Melbourne compares with other Australian cities</h3>
              <p>
                Monthly searches that name each city, across the web design, SEO, ecommerce and AI agent terms we track.
                Melbourne edges Sydney on web design, ecommerce and AI agent demand, and trails it on SEO.
              </p>
            </div>
            <div className="tablewrap">
              <table>
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
                      <th scope="row">{c.href ? <a href={c.href}>{c.city}</a> : c.city}{c.city === 'Melbourne' ? ' (this page)' : ''}</th>
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
            <p className="tablenote">DataForSEO, Google Australia, keyword volumes fetched 24 September 2026, close variants collapsed.</p>
          </div>
        </section>

        {/* ═══ WHO WE BUILD FOR → ruled rows + suburb pills + city-map slot ═══ */}
        <section className="section platforms" id="who-we-build-for">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Who we build for in Melbourne</div>
                <h2>Small business website design across Melbourne, suburb by suburb</h2>
              </div>
              <p>
                About 320 Melbourne searches a month are for small business website design specifically. Every
                industry buys differently, so the site has to match how your customers decide, not a template. These
                are the Melbourne businesses we build for most.
              </p>
            </div>
            <div className="platlist" role="list">
              {SECTORS.map((s, i) => (
                <div key={s.name} className="plat" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{s.name}</h3></div>
                  <p className="plat-fit">{s.where}</p>
                  <p className="plat-build">{s.note}</p>
                </div>
              ))}
            </div>
            <div className="city-areas">
              <VisualSlot page={PAGE_KEY} slot="platforms" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A cafe owner in a Melbourne CBD laneway checking her new website on her phone in the doorway of her cafe"
                caption="In a laneway cafe, most visitors arrive on a phone within a few hundred metres of the door. Hours, the menu and a map link have to load before anything else.">
                <img src="/images/au/melbourne/melbourne-laneway.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A cafe owner in a Melbourne CBD laneway checks her new website on her phone in the doorway of her cafe, with murals, hanging plants and bluestone cobbles behind her" />
              </VisualSlot>
              <div>
                <div className="factlabel">Areas we work across</div>
                <ul className="city-list">
                  {SERVICE_AREAS.map((a) => (<li key={a}><span>{a}</span></li>))}
                </ul>
                <p className="city-areas-more">And the rest of Victoria.</p>
                <VisualSlot page={PAGE_KEY} slot="city-map" kind="map" ratio="3:2"
                  subject="A plain map of greater Melbourne with the listed suburbs and Geelong marked as small dots; no office pin, because FactoryJet has no Melbourne office" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WEB DESIGN: WHEN WE BUILD IT → capgrid ═══ */}
        <section className="section capabilities" id="web-design-melbourne">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Web design in Melbourne</div>
              <h2>Website design in Melbourne, when we build it: six things every site gets</h2>
              <p className="lead">
                We design and build the site, rework the content with you, and launch it. Websites of up to five pages
                qualify for our 7-day delivery from an approved scope. Builds with bookings, logins or integrations take
                longer, and you get the date at scope rather than discovering it in week six.
              </p>
            </div>
            <div className="capgrid">
              {BUILD.map((s, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={s.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={BUILD_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={BUILD_SUBJECTS[i]} />
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                );
              })}
            </div>
            <p className="tablenote">
              Core Web Vitals marks: <a href={SRC_CWV.url} {...extLink}>{SRC_CWV.source}, {SRC_CWV.title}</a>.
            </p>
          </div>
        </section>

        {/* ═══ INTEGRATIONS + CLINIC IMAGE → definition (image left, copy right) ═══ */}
        <section className="definition" id="integrations">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="The receptionist at a Richmond physiotherapy clinic checking the booking system while a patient waits">
              <img src="/images/au/melbourne/melbourne-clinic.webp" width={1200} height={800} loading="lazy" decoding="async" alt="The receptionist at a physiotherapy clinic in a renovated Richmond terrace checks the booking system while a patient waits at the front desk" />
            </VisualSlot>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Beyond the brochure site</div>
            <h2>A website that works with the systems behind the front desk</h2>
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
              orders between systems, that is a job for an <a href="/au/ai-agents">AI agent built into your existing tools</a>,
              and Melbourne is the city with the most searches for exactly that. For a first opinion on where AI
              fits at all, see <a href="/au/ai-consulting">AI consulting for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ SEO CONSULTING → facts ═══ */}
        <section className="section facts" id="seo-consultant-melbourne">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">SEO consultant Melbourne</div>
              <h2>SEO consulting in Melbourne, when your team does the work</h2>
              <p className="lead">
                About 1,000 Melbourne searches a month are for an SEO consultant rather than an agency. Consultant
                intent is advisory: the buyer usually has someone who can do the work and wants direction. Google itself
                says some changes take effect in a few hours and others take several months, and advises waiting a few
                weeks before judging a change. We plan around that.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                {ADVISE.map((a, i) => (
                  <div key={a.t} className="fact">
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <h3>{a.t}</h3>
                      <p>{a.d}</p>
                      {i === ADVISE.length - 1 ? (
                        <p className="au-note">
                          Timing guidance: <a href={SRC_SEO_GUIDE.url} {...extLink}>{SRC_SEO_GUIDE.source}, {SRC_SEO_GUIDE.title}</a>.
                          {' '}For the full SEO service, see <a href="/au/seo">SEO services in Australia</a>; for visibility in ChatGPT and Google AI answers, see <a href="/au/ai-seo">AI SEO for Australian businesses</a>.
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A Melbourne plumber beside his van on a leafy street checking a new job enquiry on his phone"
                caption={<>For a tradie in the eastern suburbs, the Google Business Profile does more work than the website. Setting it up properly is usually the first hour we recommend. See what goes on a{' '}<a href="/au/websites-for-tradies">website for tradies</a>.</>}>
                <img src="/images/au/melbourne/melbourne-trades.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Melbourne plumber beside his white van on a leafy street of red-brick Edwardian houses checks a new job enquiry on his phone" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white Melbourne tram-stop sign beside a row of white website page cards, one card lifted in orange" />

        {/* ═══ PROCESS (steps stay openable, as the copy says) ═══ */}
        <section className="section process" id="process">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a Melbourne project runs</div>
                <h2>From free review to live website in seven steps</h2>
                <p className="lead">
                  Open any step to see what happens and what you get at the end of it. You can stop after the review or
                  after the scope, and keep what we gave you.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A web strategist sketching a sitemap on a whiteboard for two business owners in a Southbank meeting room"
                caption="Step three is a sitemap, not a colour palette. Every page gets named after something Melbourne buyers actually search, using real volume data, before anyone opens a design tool.">
                <img src="/images/au/melbourne/melbourne-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A web strategist sketches a website sitemap of connected boxes on a whiteboard for two business owners in a Southbank meeting room overlooking the Yarra River" />
              </VisualSlot>
            </div>
            <div className="timeline timeline-4">
              {STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                  <p><b>You get:</b> {s.out}</p>
                </details>
              ))}
            </div>
            <p className="tablenote">
              Monthly fixes and updates are covered by our <a href="/au/website-maintenance">website maintenance</a> plans.
            </p>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline="Not sure which of the five problems you have?"
            sub="Send us your address. We crawl the site, check your Google Business Profile and read your own Search Console data, then tell you which one is actually costing you enquiries. Free, and if the answer is that you do not need us, we will say that."
            label="Get a free diagnosis"
            note="Bhavesh replies within one business day, Australian hours."
          />
        </div>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>Freelance web designer vs design studio vs full-service agency vs FactoryJet</h2>
                <p className="lead">
                  Melbourne buyers search for all four, from “freelance web designer melbourne” to “web design agency
                  melbourne”. Each is right for someone. The table shows where each one tends to be strong.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
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
                  <tr><th scope="row">Best fit</th><td className="fj">Sites that must perform and connect to your systems</td><td>Small, well-defined sites</td><td>Brand-led, visual work</td><td>Campaigns, ads and brand under one roof</td></tr>
                  <tr><th scope="row">Who writes the code</th><td className="fj">Senior engineers you speak to</td><td>The freelancer</td><td>Varies, sometimes outsourced</td><td>Often a separate team</td></tr>
                  <tr><th scope="row">Speed measured against Google’s marks</th><td className="fj">Before and after report</td><td>Depends on the person</td><td>Sometimes</td><td>Sometimes</td></tr>
                  <tr><th scope="row">Search demand checked before pages are planned</th><td className="fj">Real volume data</td><td>Rarely</td><td>Sometimes</td><td>Usually</td></tr>
                  <tr><th scope="row">Integrations (bookings, CRM, Xero)</th><td className="fj">Built in</td><td>Plugins</td><td>Varies</td><td>Varies</td></tr>
                  <tr><th scope="row">Ownership of domain and accounts</th><td className="fj">Yours from day one</td><td>Check the contract</td><td>Check the contract</td><td>Often held by the agency</td></tr>
                  <tr><th scope="row">Support after launch</th><td className="fj">Same team</td><td>If available</td><td>Varies</td><td>Usually, on retainer</td></tr>
                  <tr><th scope="row">Melbourne office you can visit</th><td className="fj">No, remote in Melbourne hours</td><td>Sometimes</td><td>Usually</td><td>Usually</td></tr>
                  <tr><th scope="row">TV, print and brand campaigns</th><td className="fj">Not our work</td><td>No</td><td>Brand, yes</td><td>Yes</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">The last two rows are where we are the wrong choice. A comparison where the author wins every line is not worth reading.</p>
          </div>
        </section>

        {/* ═══ SIX QUESTIONS + WHO RANKS ═══ */}
        <section className="section" id="choosing">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Choosing someone</div>
              <h2>Six questions that separate Melbourne web design agencies quickly</h2>
              <p className="lead">
                More Melbourne searches ask who to hire than what the work costs, so this is the part of the page worth
                your time. Ask all six of whoever you are considering, including us. Watch the right-hand column: it is
                where the difference usually shows.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr><th>Ask this</th><th className="fj">A good answer sounds like</th><th>Walk away if you hear</th></tr>
                </thead>
                <tbody>
                  {QUESTIONS.map((r) => (
                    <tr key={r.q}><th scope="row">{r.q}</th><td className="fj">{r.good}</td><td>{r.bad}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="au-split">
              <div>
                <h3>Why there is no “best Melbourne web design agencies” list here</h3>
                <p>
                  Google shows several versions of that question to Melbourne searchers, so we know you are asking it.
                  We will not rank our own competitors, because a list written by us is marketing wearing a lab coat.
                  Every agency that publishes one puts itself at the top. Build your own shortlist instead: search the
                  terms you want to win, ask other owners in your industry who they use, then put the six questions to
                  each. Three conversations is usually enough.
                </p>
              </div>
              <div className="au-panel">
                <h3>Who Google showed on page one</h3>
                <p>
                  For “web design company melbourne” on 24 September 2026, with directories removed, page one held
                  these sites. It is a record of the results page, not a recommendation, and a sensible place to start
                  your own research.
                </p>
                <ul className="city-list">
                  {PAGE_ONE.map((d) => (<li key={d}><span>{d}</span></li>))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ECOMMERCE / B2B → facts ═══ */}
        <section className="section facts" id="ecommerce">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Ecommerce website design Melbourne</div>
              <h2>When the website has to sell, not just inform</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Ecommerce website design is the largest Melbourne web search after the core design terms, at about
                  390 searches a month, and Melbourne has more ecommerce searches naming the city than anywhere else in
                  Australia. Some of the most valuable are manufacturers and wholesalers in the south east and the west who
                  want trade customers to reorder online instead of by email.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  That is a different build from a brochure site. Stock has to sync, GST has to be right, trade pricing
                  has to show only to logged-in accounts, shipping has to work with Australia Post and couriers, and
                  orders have to land in Xero or MYOB. FactoryJet has spent more than a decade on commerce builds,
                  including B2B ordering for Bombay Petals.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  For store builds, see our <a href="/au/ecommerce-development">ecommerce development service in Australia</a>.
                  If you are on or moving to Shopify, see <a href="/au/shopify-development">Shopify development for Australian businesses</a>;
                  we are a registered Shopify Partner.
                </p></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="An operations manager with a tablet and a warehouse worker checking a pallet of cartons in a Dandenong South warehouse"
                caption="In a Dandenong South warehouse, the website is an ordering system. It has to agree with the stock on the racks and the invoice in the accounts.">
                <img src="/images/au/melbourne/melbourne-b2b.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An operations manager with a tablet and a warehouse worker check a pallet of plain cartons in a light-industrial warehouse in Dandenong South, Melbourne" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ WHICH OPTION FITS (<details>) → vlog ═══ */}
        <section className="vlog" id="which-option">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you</div>
              <h2>A quick check: what does your Melbourne business actually need?</h2>
              <p>Open the line that sounds most like you. The honest answer is not always this page.</p>
            </div>
            <div className="ventries">
              <details className="ventry">
                <summary><h3>We need a new website, up to five pages, and our content is mostly ready</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">This page is the right place.</span>
                <p>Websites up to 5 pages qualify for our 7-day delivery from approved scope. Start with the free review so the scope is right.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our site is fine, but we do not show up in Google or Maps</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">You need SEO, not a redesign.</span>
                <p>Start with a technical audit and your Google Business Profile. See our <a href="/au/seo">SEO services for Australian businesses</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We have a marketer or developer and just need direction</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">SEO consulting.</span>
                <p>We diagnose, rank the fixes and brief your team. Often better value than a retainer.</p>
              </details>
              <details className="ventry">
                <summary><h3>We sell products online, or want trade customers to order online</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">An ecommerce build.</span>
                <p>See <a href="/au/ecommerce-development">ecommerce development</a> or <a href="/au/shopify-development">Shopify development</a> in Australia.</p>
              </details>
              <details className="ventry">
                <summary><h3>We want ChatGPT, Perplexity and Google AI answers to name our business</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">That is AI search visibility.</span>
                <p>See our <a href="/au/ai-seo">AI SEO service for Australian businesses</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our real problem is admin: enquiries, orders and invoices copied by hand</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Look at automation.</span>
                <p>See <a href="/au/ai-agents">AI agents built into Xero, HubSpot and your other tools</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We want a brand campaign, TV or print, or an office we can visit weekly</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Not us.</span>
                <p>A Melbourne full-service agency or local studio is the better fit, and we would say so on a call.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ SIBLINGS + CITIES → agentdir + city pills ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">FactoryJet Australia</div>
              <h2>More services for Melbourne businesses</h2>
            </div>
            <ul className="agentdir-grid">
              {[
                { h: '/au', t: 'FactoryJet Australia', d: 'Web design, ecommerce, AI agents and AI search for Australian businesses, in one place.' },
                { h: '/au/seo', t: 'SEO services Australia', d: 'Technical repair, content and local search, reported on enquiries rather than rankings.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Online stores and B2B ordering connected to stock, shipping, GST and accounts.' },
                { h: '/au/shopify-development', t: 'Shopify development', d: 'Shopify builds, migrations and apps from a registered Shopify Partner.' },
                { h: '/au/ai-agents', t: 'AI agents & automation', d: 'Custom AI agents inside Xero, HubSpot and Microsoft 365, with human approval built in.' },
                { h: '/au/ai-seo', t: 'AI SEO', d: 'Get your business named in ChatGPT, Perplexity and Google AI answers.' },
              ].map((c) => (
                <li key={c.h}>
                  <a href={c.h}>
                    <span className="agentdir-t">{c.t}</span>
                    <span className="agentdir-l">{c.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="city-links">
              <p>Web design and SEO in other Australian cities:</p>
              <ul className="city-list">
                <li><a href="/au/brisbane">Web design Brisbane</a></li>
                <li><a href="/au/adelaide">Web design Adelaide</a></li>
                <li><a href="/au/canberra">Web design Canberra</a></li>
                <li><a href="/au">All of Australia</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Web design and SEO in Melbourne: questions buyers ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="sources">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs refs-claims">
              {CITATIONS.map((c) => (
                <div className="ref" key={c.id}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.source}: {c.title}</a>
                  <p>{c.claim}</p>
                </div>
              ))}
            </div>
            <p className="au-note">
              Search volumes, page-one link counts, Maps pack and AI Overview presence were measured by FactoryJet with
              DataForSEO against Google Australia on 24 September 2026.
            </p>
          </div>
        </section>

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Next step</div>
              <h2>Find out what is actually holding your Melbourne site back</h2>
              <p>
                Send us the address. We will work out which of the five problems on this page you actually have, in
                writing, and if your problem is conversion rather than search we will say so. The founder replies within
                one business day, Australian hours.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Get a free site review" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/seo">See SEO services</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

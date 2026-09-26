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
   web design brisbane 2,400 (same cluster: website design brisbane, web design company
   brisbane, web developer brisbane) · seo agency brisbane 1,900 · seo services brisbane
   720 · seo consultant / expert brisbane 590 · brisbane web designer 480 · web design
   agency brisbane 390 · local seo brisbane 390. Title and H1 intent kept from the
   previous version of this page. */
const UPDATED = '2026-09-26';
const TITLE = 'Web Design & SEO Brisbane | Fast Sites | FactoryJet';
const H1 = 'Web design and SEO for Brisbane businesses';
const DESCRIPTION =
  'Brisbane web design and SEO for businesses that need enquiries. Fast sites by senior engineers, Google Business Profile done properly, and you own it all.';

const [SRC_ABS, SRC_CWV, SRC_SEO_GUIDE] = CITATIONS;

/* ─── Brisbane search demand (DataForSEO, Australia, 2026-09-24) ─── */
const DEMAND = [
  { kw: 'web design brisbane', v: '2,400', w: '100%', note: 'Includes website design / web design company brisbane' },
  { kw: 'seo agency brisbane', v: '1,900', w: '79%', note: 'Also “seo company brisbane”' },
  { kw: 'seo services brisbane', v: '720', w: '30%', note: 'Buyer intent' },
  { kw: 'seo consultant brisbane', v: '590', w: '25%', note: 'Also “seo expert brisbane”' },
  { kw: 'brisbane web designer', v: '480', w: '20%', note: 'Looking for a person, not a firm' },
  { kw: 'web design agency brisbane', v: '390', w: '16%', note: 'Maps pack shown' },
  { kw: 'local seo brisbane', v: '390', w: '16%', note: 'Google Maps visibility' },
  { kw: 'ecommerce website design brisbane', v: '260', w: '11%', note: 'Online stores' },
  { kw: 'small business website design brisbane', v: '140', w: '6%', note: 'Owner-operators' },
];

/* ─── All tracked searches naming each city (analysis.json "cities") ─── */
const CITIES = [
  { city: 'Sydney', total: '10,430', seo: '7,270', web: '2,640', ecom: '310', href: '' },
  { city: 'Melbourne', total: '10,330', seo: '6,630', web: '2,920', ecom: '430', href: '/au/melbourne' },
  { city: 'Perth', total: '7,900', seo: '4,940', web: '2,670', ecom: '240', href: '' },
  { city: 'Brisbane', total: '5,490', seo: '4,000', web: '1,380', ecom: '100', href: '' },
  { city: 'Adelaide', total: '3,780', seo: '2,970', web: '800', ecom: '10', href: '/au/adelaide' },
  { city: 'Canberra', total: '2,200', seo: '1,250', web: '950', ecom: 'under 10', href: '/au/canberra' },
  { city: 'Gold Coast', total: '1,900', seo: '1,310', web: '580', ecom: '10', href: '' },
];

/* ─── First ninety days ─── */
const FIRST_NINETY: string[] = [
  'A technical review of the site in plain English, with each fault ranked by what it is costing you rather than by how hard it is to fix.',
  'Google Business Profile claimed, verified, categorised properly, and set to the parts of South East Queensland you genuinely cover.',
  'Business name, address and phone number made identical everywhere they appear, including old directory listings you have forgotten about.',
  'Search Console and Analytics connected properly, so reporting comes from your own data rather than a third-party estimate.',
  'A shortlist of Brisbane search terms scored on volume, commercial value, and how strong the sites already ranking actually are.',
  'The first service pages rebuilt around what Brisbane buyers type, not around your internal job titles.',
];

/* ─── Who we build for in Brisbane ─── */
const SECTORS = [
  { name: 'Trades and construction', where: 'Across Brisbane and the South East', note: 'A large share of local search demand. These buyers search on a phone, often from the job address, and they call rather than fill in a form. The site has to load on mobile data and show a tappable call button in the first screen.' },
  { name: 'Professional services', where: 'CBD, Newstead, Milton', note: 'Accountants, lawyers, brokers and consultants. Longer decision cycles, more research, and buyers who read several pages before making contact. Depth of content matters more here than speed of contact.' },
  { name: 'Health and allied health', where: 'Chermside, Mount Gravatt, the inner south', note: 'Clinics and practices driven by Google Maps and reviews, where distance from the searcher does much of the ranking work. Online booking has to write into the practice system.' },
  { name: 'Manufacturing and industrial', where: 'Ipswich, Logan, the TradeCoast', note: 'Often selling B2B with a long sales cycle, where the website has to survive scrutiny from a procurement team rather than convert on the spot. Catalogues and trade ordering matter.' },
  { name: 'Hospitality and independent retail', where: 'Fortitude Valley, South Brisbane, West End', note: 'Discovery happens in Maps and social rather than classic search, so the local listing usually deserves more attention than the website does.' },
  { name: 'Growing businesses across the South East', where: 'Moreton Bay, Redlands, Logan, Ipswich', note: 'Businesses serving fast-growing corridors, where a clear service area on the site and the Business Profile decides whether you appear for the suburb a customer is in.' },
];

/* ─── Web design work ─── */
const WEB_DESIGN: { t: string; d: string }[] = [
  { t: 'A build that survives contact with a phone', d: 'Most Brisbane enquiries arrive on a phone, often on mobile data somewhere with poor reception. We build for that case first. Google publishes the marks it uses: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. We build against those numbers and show you the measurement before and after.' },
  { t: 'Pages arranged the way buyers think', d: 'One page per service you actually want enquiries for, named the way customers say it rather than the way your industry says it. A tiler who sells bathroom waterproofing needs a page called bathroom waterproofing, not one called remedial membrane systems. This is the single most common thing we fix on Brisbane sites.' },
  { t: 'Content that answers before it sells', d: 'Each service page opens by answering the question that brought the reader there, then explains how the job works, what it asks of the customer, what can go wrong, and what happens next. Pages built this way also get quoted by AI assistants, because they contain answers rather than adjectives.' },
  { t: 'Contact that matches how people buy', d: 'A trade business needs a tappable call button in the first screen and very little else. A professional services firm needs a short form and a clear sense of what happens after they send it. We match the contact method to the buying behaviour rather than putting the same eight-field form on every page.' },
  { t: 'Handover with nothing held back', d: 'You get the domain, the hosting, the site and admin access to every account involved, in your own name. If you leave, nothing breaks and nothing needs to be bought back. We have taken on enough rescue jobs from businesses who did not own their own domain to be firm about this.' },
];

/* ─── SEO work ─── */
const SEO_WORK: { t: string; d: string }[] = [
  { t: 'Technical repair, done first', d: 'We crawl the site the way Google does and fix what stops it being read: pages blocked in robots.txt, leftover noindex tags from a staging site, content that only appears after JavaScript runs, broken internal links, and duplicate versions of the same page competing with each other.' },
  { t: 'Google Business Profile, properly set up', d: 'For most Brisbane businesses this is the highest-return hour of work available. Claim it, verify it, choose the most specific primary category, set service areas to where you genuinely go, add real photos of real jobs, and answer every review.' },
  { t: 'Consistent details across the web', d: 'Your business name, address and phone number need to be identical everywhere they appear, including listings you created years ago and forgot. Inconsistency quietly holds back local ranking and never announces itself. We find the old listings and correct them or get them removed.' },
  { t: 'Pages built for terms people actually search', d: 'We check demand against Google Ads volume before writing anything, because Search Console impressions can be inflated by rank-tracking software rather than real people. If a term has no genuine Australian volume, we say so and we do not build a page for it.' },
  { t: 'Links earned, never bought', d: 'We earn mentions by making things worth mentioning: original local data, useful tools, genuine sponsorships and supplier relationships. We do not buy links, use private blog networks, or run automated outreach. Bought links are the fastest way to a manual penalty.' },
  { t: 'Reporting on enquiries, not rankings', d: 'Every month you get the search terms bringing people in, what they did once they arrived, and how many enquiries came from search. Rankings are included but they are the weakest number in the report.' },
];

/* ─── Process (rendered as <details>) ─── */
const STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Free review of your site and Google listing', d: 'Send the address. We crawl the site, check your Google Business Profile, and read your Search Console data if you share it.', out: 'A short written summary of the three biggest problems and what each is likely costing you.' },
  { n: '02', t: 'A written scope with a fixed price', d: 'Pages, content, integrations, who supplies what, and the date. If the right first step is SEO repair rather than a new site, the scope says so.', out: 'A scope and fixed quote you can take to anyone. Nothing is charged before you have read it.' },
  { n: '03', t: 'Sitemap and content workshop', d: 'A video workshop in Queensland business hours where we map every page against what Brisbane buyers search, using real volume data, and agree the words before any design.', out: 'A sitemap and page briefs, named the way customers search.' },
  { n: '04', t: 'Design, mobile first', d: 'Layouts for the phone first, then desktop. You review real pages with your real content, not placeholder boxes.', out: 'Approved designs for every page template.' },
  { n: '05', t: 'Build, speed test and SEO setup', d: 'Built by the engineer you have been talking to, measured against Google’s Core Web Vitals marks, with titles, structured data, redirects from old pages and Search Console connected.', out: 'A staging site with a speed report you can check yourself.' },
  { n: '06', t: 'Launch and handover', d: 'We launch, watch for errors, and hand over the domain, hosting and admin access in your name. Websites up to 5 pages qualify for our 7-day delivery from approved scope and content.', out: 'A live site you own outright, plus a short guide to editing it.' },
  { n: '07', t: 'Local search and support after launch', d: 'Optional. Monthly search work on your Business Profile, content and links, or plain support and fixes. You can stop either at any time.', out: 'The same team that built it, still answering.' },
];

/* ─── Six questions ─── */
const QUESTIONS: { q: string; why: string }[] = [
  { q: 'Who is actually doing the work?', why: 'The most common disappointment in this industry is meeting a senior person and being handed to a junior one. Ask for the name of the person who will build the site, and whether they will be on your calls.' },
  { q: 'What happens if I leave?', why: 'You should keep the domain, the site, the content and admin access to everything. If any of those stay with the agency, you are renting your own business presence.' },
  { q: 'Can you show me a site you built that is still fast?', why: 'Anyone can show a screenshot from launch day. Ask them to run a live speed test on a site they built two years ago. The answer tells you whether they build for the long term or for the portfolio.' },
  { q: 'How did you decide these were the right search terms?', why: 'The answer should involve checking real search volume. If it involves a tool score alone, or a list of terms with no volume attached, the plan may be aimed at words nobody types.' },
  { q: 'What will you not do?', why: 'An agency that cannot name anything it refuses to do has not thought about it, or is willing to do things that will hurt you later. Buying links is the obvious one.' },
  { q: 'When will I know if this is working?', why: 'You want a specific leading indicator with a date attached, not a promise about positions. Impressions on commercial terms moving within a quarter is a reasonable thing to expect.' },
];

/* Page one for "web design companies brisbane", Google AU, 2026-09-24, directories
   removed. Observation of the results page, not an endorsement. */
const PAGE_ONE = [
  'mywork.com.au', 'webeasy.com.au', 'digitalnomadshq.com.au', 'vivogroup.com.au', 'alanajadestudio.com',
  'isonic.com.au', 'whitepeakdigital.com', 'elevatewebdesigns.com.au', 'excitemedia.com.au',
];

/* ─── JSON-LD. Organization is defined sitewide; referenced by @id only.
       No LocalBusiness node: FactoryJet has no Brisbane office. ─── */
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
      name: 'Web Design and SEO Brisbane',
      serviceType: 'Website design, web development and search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Brisbane' },
        { '@type': 'AdministrativeArea', name: 'Queensland' },
        ...SERVICE_AREAS.map((name) => ({ '@type': 'Place', name })),
      ],
      url: CANONICAL,
      description:
        'Web design and SEO for Brisbane and South East Queensland businesses, delivered remotely in Queensland business hours. Fast websites built by senior engineers, technical SEO, Google Business Profile and local search, ecommerce builds. The client owns everything.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Brisbane web design and SEO services',
        itemListElement: [
          'Website design and build',
          'Small business website design',
          'Ecommerce website design',
          'Website speed and Core Web Vitals repair',
          'Technical SEO audit and repair',
          'Local SEO and Google Business Profile',
          'Content built for Brisbane search terms',
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
      datePublished: '2026-08-26',
      dateModified: UPDATED,
      image: 'https://factoryjet.com/images/au/brisbane/brisbane-og.webp',
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
    title: 'Web Design & SEO Brisbane | FactoryJet',
    description:
      'Fast websites and search visibility for Brisbane businesses, built by senior engineers. Free review of your site and your Google Business Profile before anything is charged.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/brisbane/brisbane-og.webp', width: 1200, height: 630, alt: 'Web design Brisbane: a web designer and a business owner review a new homepage in a Fortitude Valley office with the Story Bridge outside' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Brisbane | FactoryJet',
    description: 'Fast websites and search visibility for Brisbane businesses, built by senior engineers.',
    images: ['/images/au/brisbane/brisbane-og.webp'],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'brisbane';

/* H1 split for the Family A hero emphasis. Rendered text stays byte-identical to H1 (schema headline). */
const H1_SPLIT = H1.lastIndexOf(' for ');
const H1_LEAD = H1.slice(0, H1_SPLIT);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 1);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec panel rows (the old "What you get, in short" hero card rows). */
const HERO_ROWS: { note: string; metric: string; val: string; icon: string }[] = [
  { note: 'websites up to 5 pages', metric: '7-day delivery', val: '7 days', icon: 'M4 5h16v15H4V5Zm0 5h16M8 3v4m8-4v4' },
  { note: 'on every build, measured', metric: 'Largest Contentful Paint target', val: 'Under 2.5s', icon: 'M4 16a8 8 0 1 1 16 0M12 16l4-5' },
  { note: 'in your name from day one', metric: 'Domain, site and every account', val: 'Yours', icon: 'M14 4a6 6 0 1 1-4.2 10.3L4 20m2-2 2 2m1-5 2 2' },
];

/* Icons and visual-slot subjects for the five web design cards (same order as WEB_DESIGN). */
const WEB_DESIGN_ICONS = [
  'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 15h2',
  'M4 5h16M4 12h11M4 19h7',
  'M6 3h9l4 4v14H6V3Zm3 8h7m-7 4h7',
  'M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z',
  'M14 4a6 6 0 1 1-4.2 10.3L4 20m2-2 2 2m1-5 2 2',
] as const;
const WEB_DESIGN_SUBJECTS = [
  'AI-generated model: a white phone with a fast-loading page and a small orange speed gauge beside it',
  'AI-generated model: a row of white page cards, each labelled with the plain name a customer would search',
  'AI-generated model: a white page card with an orange answer block at the top and plain text lines below',
  'AI-generated model: a white phone with one large orange call button beside a laptop showing a short form',
  'AI-generated model: an orange key being handed from one small figure to another in front of a white website card',
] as const;

export default function BrisbanePage() {
  return (
    <>
      <script id="ld-au-brisbane" type="application/ld+json"
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
              <div className="eyebrow">Brisbane, Queensland</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Web design in Brisbane for businesses with a real sales process behind the website. We build fast
                websites for Brisbane companies and get them found in Google and Google Maps. Senior engineers do the
                work, you own everything at the end, and we tell you which parts of a search plan pay back in weeks
                and which take quarters.
              </p>
              <HeroInlineForm region="au" source="au_brisbane_hero_inline" submitLabel="Get my free site review" />
            </div>

            <form
              className="specpanel"
              aria-label="What you get, in short"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What every Brisbane build includes: 7-day delivery for small sites, a measured speed target, and every account in the client's name"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT YOU GET, IN SHORT</span>
                <span className="sys"><span>WEB DESIGN</span><span>SEO &amp; LOCAL SEARCH</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what you get">
                {HERO_ROWS.map((r, i) => (
                  <label key={r.metric} className={i === HERO_ROWS.length - 1 ? 'specrow hold' : 'specrow run'}>
                    <input className="workflow-select" type="radio" name="brisbane-step" value={String(i + 1)} />
                    <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={r.icon} /></svg></span>
                    <span className="idx">{r.note}</span>
                    <span className="title">{r.metric}</span>
                    <span className="tag">{r.val}</span>
                  </label>
                ))}
              </div>
              <div className="specpanel-foot">RULE · If you leave, nothing breaks and nothing needs to be bought back.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '2,400', t: 'monthly searches for “web design brisbane” and its close variants', s: 'DataForSEO, Sep 2026', u: '' },
              { v: '19,244', t: 'more businesses in Queensland across 2025–26', s: 'ABS, Aug 2026', u: SRC_ABS.url },
              { v: '22', t: 'websites linking to the weakest page-one site for “brisbane web designer”', s: 'Google AU, 24 Sep 2026', u: '' },
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
              <h2 data-speakable="true">What does a web design and SEO agency in Brisbane actually do?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    A web design and SEO agency in Brisbane builds a site that loads quickly and explains what you sell,
                    then gets it found by people searching in this city. That is three jobs done in order: fix the
                    technical faults that stop Google reading the site, build pages that answer what Brisbane buyers type
                    and connect them to a correct Google Business Profile, then earn mentions from real Queensland sites.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <p>
                    FactoryJet does all three and reports on enquiries rather than rankings. The order matters more than most
                    agencies admit. Publishing content on a site Google struggles to crawl is money spent on pages nobody will
                    be shown. Chasing links before the map listing is right is effort spent on the slowest lever first. So we
                    sequence the work by what pays back soonest, and say out loud which parts take a couple of quarters.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A Brisbane web designer and a business owner reviewing a new homepage on a monitor in a Fortitude Valley office">
                <img src="/images/au/brisbane/brisbane-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="A Brisbane web designer and a business owner review a new homepage design on a monitor in a Fortitude Valley office with timber louvres, palms and the Story Bridge outside" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ FIRST NINETY DAYS → facts, at-a-glance card as the side panel ═══ */}
        <section className="section facts" id="first-ninety-days">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What happens first</div>
              <h2>Web design and SEO in Brisbane: six things in the first ninety days</h2>
              <p className="lead">
                Whether you start with a new site or with search repair, these are the six things a good Brisbane
                engagement delivers in its first quarter. Use the list to compare any agency, including us.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                {FIRST_NINETY.map((item, i) => (
                  <div key={item} className="fact">
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="au-panel">
                <div className="eyebrow">Brisbane web design and SEO at a glance</div>
                <ul className="trigrows">
                  <li><span className="m">Where we work</span><span className="n">Brisbane City to Ipswich, Logan, Redlands, Moreton Bay</span><span className="t">SEQ</span></li>
                  <li><span className="m">Who it is for</span><span className="n">trades, professional services, clinics, B2B, retail</span><span className="t">SMBs</span></li>
                  <li><span className="m">How it starts</span><span className="n">site and Google listing review, then a written scope</span><span className="t">Free</span></li>
                  <li><span className="m">How we meet</span><span className="n">video calls in Queensland business hours</span><span className="t">Remote</span></li>
                  <li><span className="m">What we will not do</span><span className="n">buy links, publish thin suburb pages, hold your domain</span><span className="t">Never</span></li>
                </ul>
                <p className="au-note">
                  No price figures appear on this page on purpose. Brisbane quotes vary by how much repair a site needs
                  and how much content already exists. You get yours in writing after the free review. Our{' '}
                  <a href="/blog/website-cost-australia-2026">Australian website cost guide</a> shows the
                  published market ranges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BRISBANE MARKET + DEMAND → prose/demand split, then city table ═══ */}
        <section className="section market" id="market">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The Brisbane search market</div>
              <h2>What competing for website design in Brisbane actually looks like</h2>
            </div>
            <div className="au-split au-split-flush">
              <div>
                <p>
                  Queensland gained 19,244 businesses across 2025–26, part of a national count of 2,814,778 actively
                  trading businesses at 30 June 2026. The same ABS release puts the national entry rate at 16.9% and
                  the exit rate at 13.8%. Roughly one in six businesses around you is new, and roughly one in seven
                  will be gone within the year.
                </p>
                <p>
                  For search, that churn cuts both ways. New competitors appear constantly, which is why a site left
                  alone for three years slides. But it also means part of the Brisbane page-one field has not been
                  building authority for long. We checked on 24 September 2026, counting how many separate websites
                  link to each page-one result (referring domains, the main measure of authority). For “brisbane web
                  designer” the weakest site had links from 22 websites and the middle of the pack about 55. In
                  Melbourne, the middle of page one for the same search sat at around 960.
                </p>
                <p>
                  That makes the Brisbane web design searches among the more reachable we measured for a site
                  that is fast, clear and genuinely useful. The SEO agency searches are harder: the middle of page one
                  for “brisbane seo agency” had about 610 linking sites. We tell you which of your terms sit where
                  before you spend anything.
                </p>
                <p>
                  Most of these searches also show a Google Maps pack above the ordinary results, and that pack goes
                  to businesses with a nearby Brisbane address. We do not have a Brisbane office and will not invent
                  one. What we do is set up your own Google Business Profile so you are the one in it.
                </p>
                <p className="au-note">
                  Sources: <a href={SRC_ABS.url} {...extLink}>{SRC_ABS.source}, {SRC_ABS.title}</a>;
                  {' '}search volumes and page-one checks from DataForSEO, Google Australia, 24 September 2026.
                </p>
              </div>
              <div className="demand">
                <div className="demand-head"><span>Brisbane · Monthly Searches</span><b>DataForSEO</b></div>
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
              <h3>How Brisbane compares with other Australian cities</h3>
              <p>
                Monthly searches that name each city, across the web design, SEO and ecommerce terms we track. Brisbane
                has fewer searches than Sydney or Melbourne, and far fewer agencies with deep link profiles competing for
                them. Add the Gold Coast next door and South East Queensland is a sizeable market in its own right.
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
                  </tr>
                </thead>
                <tbody>
                  {CITIES.map((c) => (
                    <tr key={c.city}>
                      <th scope="row">{c.href ? <a href={c.href}>{c.city}</a> : c.city}{c.city === 'Brisbane' ? ' (this page)' : ''}</th>
                      <td>{c.total}</td>
                      <td className="fj">{c.web}</td>
                      <td>{c.seo}</td>
                      <td>{c.ecom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">DataForSEO, Google Australia, keyword volumes fetched 24 September 2026, close variants collapsed. City totals group terms by topic, so they differ from single-keyword volumes above.</p>
          </div>
        </section>

        {/* ═══ WHO WE BUILD FOR → ruled rows + suburb pills + city-map slot ═══ */}
        <section className="section platforms" id="who-we-build-for">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Who we build for in Brisbane</div>
                <h2>Small business website design for Brisbane and South East Queensland</h2>
              </div>
              <p>
                Most of our Brisbane work is for businesses whose enquiries come from people searching rather than
                walking past a shopfront. Every industry buys differently, so the site has to match how your customers
                decide.
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
                subject="A cafe owner at a riverside cafe in South Bank checking his cafe's listing on his phone"
                caption="For a South Bank cafe, discovery happens in Google Maps on a phone. Opening hours, the menu and reviews do more work than the homepage.">
                <img src="/images/au/brisbane/brisbane-cafe.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A cafe owner at a riverside cafe in South Bank, Brisbane, checks his cafe’s listing on his phone, with the Brisbane River, the city skyline and the Wheel of Brisbane behind him" />
              </VisualSlot>
              <div>
                <div className="factlabel">Areas we work across</div>
                <ul className="city-list">
                  {SERVICE_AREAS.map((a) => (<li key={a}><span>{a}</span></li>))}
                </ul>
                <p className="city-areas-more">And the rest of Queensland.</p>
                <VisualSlot page={PAGE_KEY} slot="city-map" kind="map" ratio="3:2"
                  subject="A plain map of Brisbane and South East Queensland with the listed areas marked as small dots; no office pin, because FactoryJet has no Brisbane office" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WEB DESIGN → capgrid ═══ */}
        <section className="section capabilities" id="web-design-brisbane">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Web design Brisbane</div>
              <h2>Website design in Brisbane: five things every site we build gets</h2>
              <p className="lead">
                We design and build the site, write or rework the content with you, and launch it. Websites of up to
                five pages qualify for our 7-day delivery from an approved scope. Larger builds with bookings, customer
                logins or integrations take longer, and we give you a date at scope rather than discovering it later.
              </p>
            </div>
            <div className="capgrid capgrid-odd">
              {WEB_DESIGN.map((s, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={s.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={WEB_DESIGN_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={WEB_DESIGN_SUBJECTS[i]} />
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

        {/* ═══ INTEGRATIONS + CLINIC → definition (image left, copy right) ═══ */}
        <section className="definition" id="integrations">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="The receptionist at a Chermside dental clinic checking the booking system while a mother and daughter wait">
              <img src="/images/au/brisbane/brisbane-clinic.webp" width={1200} height={800} loading="lazy" decoding="async" alt="The receptionist at a dental clinic in Chermside, Brisbane, checks the booking system while a mother and daughter wait in a bright room with subtropical greenery outside" />
            </VisualSlot>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Beyond the brochure site</div>
            <h2>A website that works with the systems behind the front desk</h2>
            <p>
              A Chermside dental practice, a Milton law firm or a Newstead accountant rarely needs a prettier
              homepage. They need the booking button to write into the practice system, the enquiry form to land in
              the CRM, and invoices to reach Xero or MYOB without someone retyping them.
            </p>
            <p>
              That is where a custom build earns its keep over a template. We connect the site to the tools you
              already run through their official connections, and say plainly when a tool has no way in, so you can
              decide whether to change it or live with a manual step.
            </p>
            <p>
              If the repeated admin behind the website is the real problem, such as answering the same enquiry
              fifty times a week or copying orders between systems, look at <a href="/au/ai-agents">AI agents built into your existing tools</a>.
              If missed calls are the problem, see our <a href="/au/ai-receptionist">AI receptionist for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ SEO → facts ═══ */}
        <section className="section facts" id="seo-brisbane">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">SEO Brisbane</div>
              <h2>SEO and local search in Brisbane, in the order that pays back</h2>
              <p className="lead">
                About 1,900 Brisbane searches a month are for an SEO agency and another 390 for local SEO. Google
                itself says some changes take effect in a few hours and others take several months, and advises
                waiting a few weeks before judging a change. We plan against that reality rather than a launch date.
                See <a href="/blog/seo-cost-australia-2026#seo-cost-by-city">SEO cost by city</a> for
                published Australian price ranges.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                {SEO_WORK.map((a, i) => (
                  <div key={a.t} className="fact">
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <h3>{a.t}</h3>
                      <p>{a.d}</p>
                      {i === SEO_WORK.length - 1 ? (
                        <p className="au-note">
                          Timing guidance: <a href={SRC_SEO_GUIDE.url} {...extLink}>{SRC_SEO_GUIDE.source}, {SRC_SEO_GUIDE.title}</a>.
                          {' '}For the full service, see <a href="/au/seo">SEO services in Australia</a>; for visibility in ChatGPT and Google AI answers, see <a href="/au/ai-seo">AI SEO for Australian businesses</a>.
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="An electrician on the front steps of a Queenslander house checking a new job enquiry on his phone"
                caption={<>A Brisbane sparky gets most new work from the Maps pack on a customer’s phone. A complete Business Profile with honest service areas is the first job, not the last. More on{' '}<a href="/au/websites-for-tradies">websites and local SEO for tradies</a>.</>}>
                <img src="/images/au/brisbane/brisbane-tradie.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An electrician on the front steps of a white Queenslander house with a jacaranda in flower checks a new job enquiry on his phone" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white Queenslander house model beside a row of white website page cards, one card lifted in orange" />

        {/* ═══ PROCESS (steps stay openable, as the copy says) ═══ */}
        <section className="section process" id="process">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a Brisbane project runs</div>
                <h2>From free review to live website in seven steps</h2>
                <p className="lead">
                  Open any step to see what happens and what you get at the end of it. You can stop after the review or
                  after the scope, and keep what we gave you.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A web designer and a business owner planning a sitemap with cards pinned to a wall in a West End studio"
                caption="Step three is the sitemap: every page named after something Brisbane buyers search, agreed with you before anyone opens a design tool.">
                <img src="/images/au/brisbane/brisbane-planning.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A web designer and a business owner plan a website sitemap with pastel cards pinned to a wall in a West End Brisbane studio with louvred windows and ceiling fans" />
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
            headline="See what is actually holding your Brisbane site back"
            sub="Send us the address and we will crawl the site, check your Google Business Profile and read your own Search Console data, then send a short written summary of the three biggest problems. No charge, and no obligation to go further."
            label="Get a free site review"
            note="Bhavesh replies within one business day, Australian hours."
          />
        </div>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>FactoryJet vs a freelancer vs a traditional Brisbane web design agency</h2>
                <p className="lead">
                  The last two rows are the ones worth reading. Every comparison table on the internet has the author
                  winning every line, which is why nobody believes them.
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
                    <th>Traditional agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Who writes the code</th><td className="fj">Senior engineers, the same people you speak to</td><td>The freelancer</td><td>Often a junior team or a subcontractor you never meet</td></tr>
                  <tr><th scope="row">Time to launch</th><td className="fj">7-day delivery for websites up to 5 pages</td><td>Depends on their workload</td><td>Often several weeks for a comparable site</td></tr>
                  <tr><th scope="row">SEO and Google Business Profile</th><td className="fj">Built into the project</td><td>Sometimes basic</td><td>Usually, often a separate retainer</td></tr>
                  <tr><th scope="row">Ownership</th><td className="fj">Domain, site, content and every account in your name from day one</td><td>Check the contract</td><td>Frequently held by the agency until exit</td></tr>
                  <tr><th scope="row">Ongoing fee to stay online</th><td className="fj">None. Hosting and domain only, and you can move them</td><td>Varies</td><td>Sometimes a monthly fee keeps the site published</td></tr>
                  <tr><th scope="row">Link building</th><td className="fj">Earned only, never bought</td><td>Rarely offered</td><td>Varies. Paid placement is still sold in this market</td></tr>
                  <tr><th scope="row">Where we are the wrong choice</th><td className="fj">Brand campaigns, TV, print or a full marketing department</td><td>Not offered either</td><td>A full-service agency is genuinely better here</td></tr>
                  <tr><th scope="row">Also the wrong choice if</th><td className="fj">You want a Brisbane office to visit weekly. We work remotely</td><td>Sometimes local</td><td>A local studio with an office wins, plainly</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ SIX QUESTIONS + WHO RANKS → ruled rows + panel ═══ */}
        <section className="section platforms" id="choosing">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Before you choose anyone</div>
                <h2>Six questions worth asking every Brisbane web design agency, including us</h2>
              </div>
              <p>
                These questions separate agencies quickly. We have written down why each one matters so you can use
                them on us as well as everyone else. If our answers do not satisfy you, that is useful information too.
              </p>
            </div>
            <div className="platlist" role="list">
              {QUESTIONS.map((item, i) => (
                <div key={item.q} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{item.q}</h3></div>
                  <p className="plat-build">{item.why}</p>
                </div>
              ))}
            </div>
            <div className="au-panel au-panel-wide">
              <h3>Who Google showed on page one</h3>
              <p>
                For “web design companies brisbane” on 24 September 2026, with directories removed, page one held these
                sites. It is a record of the results page, not a recommendation, and a sensible place to start your own
                shortlist before you ask the six questions.
              </p>
              <ul className="city-list">
                {PAGE_ONE.map((d) => (<li key={d}><span>{d}</span></li>))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ ECOMMERCE / B2B → facts ═══ */}
        <section className="section facts" id="ecommerce">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Ecommerce website design Brisbane</div>
              <h2>When the website has to take orders, not just enquiries</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  About 260 Brisbane searches a month are for ecommerce website design, and some of the most valuable
                  buyers behind them are wholesalers and manufacturers around the TradeCoast, Ipswich and Logan who
                  want trade customers to reorder online.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  That is a different build from a brochure site. Stock has to sync, GST has to be right, trade prices
                  must show only to logged-in accounts, shipping has to work with Australia Post and couriers, and
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
                subject="A sales manager showing a trade buyer a tablet beside pallets of cartons in a warehouse near the Brisbane TradeCoast"
                caption="Near the TradeCoast, the website is an ordering system. It has to agree with the pallets on the floor and the invoice in the accounts.">
                <img src="/images/au/brisbane/brisbane-industrial.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A sales manager shows a trade buyer a tablet beside pallets of plain cartons in a bright distribution warehouse near the Brisbane TradeCoast" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ WHICH OPTION FITS (<details>) → vlog ═══ */}
        <section className="vlog" id="which-option">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you</div>
              <h2>A quick check: what does your Brisbane business actually need?</h2>
              <p>Open the line that sounds most like you. The honest answer is not always this page.</p>
            </div>
            <div className="ventries">
              <details className="ventry">
                <summary><h3>We need a new website, up to five pages, and our content is mostly ready</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">This page is the right place.</span>
                <p>Websites up to 5 pages qualify for our 7-day delivery from approved scope. Start with the free review so the scope is right.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our site is fine, but we do not show up in Google or on Maps</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">You need SEO, not a redesign.</span>
                <p>Start with a technical audit and your Google Business Profile. See our <a href="/au/seo">SEO services for Australian businesses</a>.</p>
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
                <summary><h3>We miss calls and after-hours enquiries</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Look at a voice agent.</span>
                <p>See our <a href="/au/ai-receptionist">AI receptionist</a>, which answers, qualifies and books calls into your calendar or job system.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our real problem is admin: enquiries, orders and invoices copied by hand</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Look at automation.</span>
                <p>See <a href="/au/ai-agents">AI agents built into Xero, HubSpot, ServiceM8 and your other tools</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We want a brand campaign, TV or print, or an office we can visit weekly</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Not us.</span>
                <p>A Brisbane full-service agency or local studio is the better fit, and we would say so on a call.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ SIBLINGS + CITIES → agentdir + city pills ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">FactoryJet Australia</div>
              <h2>More services for Brisbane businesses</h2>
            </div>
            <ul className="agentdir-grid">
              {[
                { h: '/au', t: 'FactoryJet Australia', d: 'Web design, ecommerce, AI agents and AI search for Australian businesses, in one place.' },
                { h: '/au/seo', t: 'SEO services Australia', d: 'Technical repair, content and local search, reported on enquiries rather than rankings.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Online stores and B2B ordering connected to stock, shipping, GST and accounts.' },
                { h: '/au/shopify-development', t: 'Shopify development', d: 'Shopify builds, migrations and apps from a registered Shopify Partner.' },
                { h: '/au/ai-agents', t: 'AI agents & automation', d: 'Custom AI agents inside Xero, HubSpot and ServiceM8, with human approval built in.' },
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
                <li><a href="/au/melbourne">Web design Melbourne</a></li>
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
          heading="Web design and SEO in Brisbane: questions businesses actually ask"
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
              <h2>Find out what is actually holding your Brisbane site back</h2>
              <p>
                Send us the address. We crawl the site, check your Google Business Profile and read your own Search
                Console data, then send back a short written summary of the three biggest problems and what each one is
                costing you. No charge, and no obligation to go any further.
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

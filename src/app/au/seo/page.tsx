import type { Metadata } from 'next';
import { Fragment, type ReactNode } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import { CANONICAL, CRUMBS, CITATIONS, CITY_ROWS, AIO_ROWS, AGENCIES, DEMAND } from './pageData';
import { FAQ_CATEGORIES, FAQ_ITEMS } from './faqData';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';

const UPDATED = '2026-09-26';
const TITLE = 'SEO Services Australia | SEO Agency & Company | FactoryJet';
/* Shortened 2026-09-26 so the hero form sits in the first desktop screen; the rest of the old H1
   ("an SEO agency that measures before it sells") moved into the hero lead. */
const H1 = 'SEO Services Australia: An SEO Agency That Measures First';
const DESCRIPTION =
  'SEO services in Australia from an SEO agency that measures demand first: local SEO, technical SEO, SEO audits and ecommerce SEO. Free site review, no lock-in.';

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

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'seo';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec panel icons (same order as the three spec rows). */
const HERO_ICONS = [
  'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4',
  'M9 15 15 9M8 11l-2 2a4 4 0 0 0 6 6l2-2M16 13l2-2a4 4 0 0 0-6-6l-2 2',
  'M15 7a4 4 0 1 1-3.5 6L5 19.5V21h3v-2h2v-2h2l1.5-1.5A4 4 0 0 1 15 7Z',
] as const;

/* The nine SEO services (was the service card grid). Body copy unchanged; links kept. */
const SERVICES: { t: string; d: ReactNode }[] = [
  { t: 'Technical SEO', d: 'Crawling and indexing faults, Core Web Vitals, site structure, internal links, redirects, canonical tags and structured data. Finite work with an end date, usually where the fastest movement comes from.' },
  { t: 'SEO audit', d: 'A ranked list of what is holding the site back, not a hundred-page export. You get the three problems that cost you most, why, and what fixing each would take. Useful on its own even if you do the work in-house.' },
  { t: 'Local SEO', d: <>Google Business Profile set-up and repair, categories, service areas, photos, review replies and consistent business details across Australian directories. The highest-return work for trades, clinics and shopfronts. For practices, see <a href="/au/dental-website-design#dental-seo">dental SEO in Australia</a>.</> },
  { t: 'Ecommerce and Shopify SEO', d: <>Collection and category pages written for real search terms, product structured data, and control of the duplicate URLs that filters and variants create. Built by the same team that builds <a href="/au/shopify-development">Shopify stores in Australia</a>.</> },
  { t: 'Content on verified demand', d: 'One strong page per service, for terms with real Australian search volume. We draft, you correct what only you would know, we publish. Written plainly so both Google and AI summaries can quote it.' },
  { t: 'Earned links and digital PR', d: 'Research and resources worth citing, supplier and industry relationships, genuine sponsorships and local press. Slow, and the only kind of link that does not carry a penalty risk.' },
  { t: 'SEO consulting', d: 'For businesses with a marketer or developer already. An SEO consultant sets direction, reviews work and answers questions, and your team carries it out. Often better value than a full retainer.' },
  { t: 'Sector SEO', d: 'Dental, legal, trades, B2B and professional services. Each has its own search patterns and rules. Health and legal pages in particular need claims your regulator would accept, checked by you before they go live.' },
  { t: 'AI search visibility', d: <>Getting named in ChatGPT, Perplexity and Google AI Overviews as well as ranking. It shares most of its foundations with classic SEO, and has its own page: <a href="/au/ai-seo">AI SEO in Australia</a>.</> },
];

/* Icons and visual-slot subjects for the nine service cards (same order as SERVICES). */
const SERVICE_ICONS = [
  'm8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14',
  'M9 4h6v3H9zM7 5H5v16h14V5h-2M9 14l2 2 4-4',
  'M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  'M3 4h2l2 11h11l2-8H6M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  'M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h5',
  'M9 15 15 9M8 11l-2 2a4 4 0 0 0 6 6l2-2M16 13l2-2a4 4 0 0 0-6-6l-2 2',
  'M4 5h16v11H9l-5 4V5Zm4 5h8M8 13h5',
  'M4 21V7l8-4 8 4v14M9 21v-6h6v6M8 10h2M14 10h2',
  'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6',
] as const;
const SERVICE_SUBJECTS = [
  'AI-generated model: a white website page lifted on a stand with an orange wrench tightening one broken link',
  'AI-generated model: a white clipboard with three orange-ticked lines ranked at the top of a long list',
  'AI-generated model: a white street map with an orange pin standing above three small shopfront blocks',
  'AI-generated model: a white shopping cart holding stacked product cards, one orange collection tag on top',
  'AI-generated model: a white page draft with an orange pen correcting one line',
  'AI-generated model: white website blocks joined by orange chain links from several directions',
  'AI-generated model: two white chairs facing a small whiteboard with one orange arrow drawn on it',
  'AI-generated model: a row of white miniature buildings (clinic, office, workshop) with an orange sign on one',
  'AI-generated model: a white chat bubble quoting a small web page, with an orange citation marker',
] as const;

export default function AuSeoPage() {
  return (
    <>
      <script id="ld-au-seo" type="application/ld+json"
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
              <div className="eyebrow">SEO Services Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                FactoryJet provides SEO services in Australia for businesses that want enquiries, not a ranking
                report. We are an SEO agency that measures before it sells. Before we quote, we check which of your
                search terms Australians actually use, who holds page one, and whether that gap can be closed. Then we
                fix the technical and local basics first, and earn links rather than buy them.
              </p>
              <p className="hero-offer">
                <b>Free site review.</b> Send your address. We crawl the site, check your Google Business Profile
                and send a written note on the three biggest problems.
              </p>
              <HeroInlineForm region="au" source="au_seo_hub_hero" submitLabel="Get my free review" />
            </div>

            <form
              className="specpanel"
              aria-label="What every SEO engagement includes"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What every engagement includes: a demand and competition check before any quote, links earned never bought, and every account in the client's name"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT EVERY ENGAGEMENT INCLUDES</span>
                <span className="sys"><span>LOCAL</span><span>TECHNICAL</span><span>ECOMMERCE</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what every engagement includes">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="seo-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">before any quote</span>
                  <span className="title">Demand and competition check</span>
                  <span className="tag">Included</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="seo-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">no link spam risk</span>
                  <span className="title">Links earned, never bought</span>
                  <span className="tag">Always</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="seo-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">in your name from day one</span>
                  <span className="title">Site, data and every account</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · We do not buy links, and we will not work alongside someone who does.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band; verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '2.8 million', t: 'actively trading Australian businesses at 30 June 2026, most competing for the same first page', s: 'ABS, June 2026', u: SRC_ABS },
              { v: '12 of 14', t: 'Australian city SEO searches we tested showed a Google map pack; only 2 showed an AI Overview', s: 'FactoryJet, Sept 2026', u: '#measured' },
              { v: '2.5 seconds', t: 'Google’s pass mark for Largest Contentful Paint, one of the three Core Web Vitals', s: 'Google Search Central', u: SRC_CWV },
              { v: 'No way', t: 'to pay Google for a better local ranking, in Google’s own words. Fix the profile instead', s: 'Google Business Profile Help', u: SRC_LOCAL_RANK },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? (r.v.length > 8 ? 'ledger-number ledger-long' : 'ledger-number') : 'ledger-word'}>{r.v}</strong>
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

        {/* ═══ ANSWER-FIRST (GEO) → Family A facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What do SEO services in Australia actually include?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">SEO services make your website more likely to appear when Australians search for what you sell.</span> The
                    work has three parts: repair the technical faults that stop Google reading the site, build pages and
                    a Google Business Profile that answer what buyers type, and earn links from real sites. Done in that
                    order, the fast work pays for the slow work.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Four terms, in plain English</div>
                    <p>
                      <b>Technical SEO</b> is whether search engines can crawl and index your pages. <b>On-page SEO</b> is
                      the words and structure of each page. <b>Local SEO</b> is your Google Business Profile and map
                      results. <b>Off-page SEO</b> is links and mentions from other websites. An <b>SEO audit</b> checks all
                      four and ranks what to fix first.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    The competition is real. The Australian Bureau of Statistics counted 2,814,778 actively trading
                    businesses at 30 June 2026, up 3.1% in a year. Most of them want the same first page. The businesses
                    that win it are rarely the ones spending most. They are the ones who fixed the basics, picked terms
                    with real demand, and stopped paying for work that could not move the number.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A Sydney business owner and an SEO consultant reviewing a rising search performance chart on a laptop">
                <img src="/images/au/seo/seo-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="A Sydney business owner and a FactoryJet SEO consultant sit side by side reviewing a rising search performance chart on a laptop, with printed charts on the table" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ THE ORDER THAT PAYS BACK → numbered timeline (five stages) ═══ */}
        <section className="section au-top" id="order">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What an SEO agency should do</div>
              <h2>SEO services in the order that pays back: five stages</h2>
              <p className="lead">
                Most SEO is sold in reverse: a monthly retainer for links and blog posts before anyone has checked
                whether Google can read the site. These five stages are the order we work in, and the order we
                suggest you hold any SEO company to, including us.
              </p>
            </div>
            <ol className="timeline">
              {ORDER.map((s) => (
                <li key={s.n} className="tnode">
                  <div className="idx">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p className="tnode-meta">Typical payback: {s.payback}</p>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
            <p className="au-note">
              Google says some changes take effect within hours and others take several months, and advises waiting a
              few weeks before judging a change: <a href={SRC_STARTER} {...extLink}>Google SEO Starter Guide</a>.
            </p>
          </div>
        </section>

        {/* ═══ SERVICES → capgrid (nine cards) ═══ */}
        <section className="section capabilities" id="services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Our SEO services</div>
              <h2>SEO services for Australian businesses, from audit to earned links</h2>
              <p className="lead">
                You can take any one of these on its own. Most Australian businesses start with an SEO audit and the
                local basics, then decide on ongoing work once they have seen the first results.
              </p>
            </div>
            <div className="capgrid capgrid-9">
              {SERVICES.map((s, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={s.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={SERVICE_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={SERVICE_SUBJECTS[i]} />
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ TECHNICAL SEO + SEO AUDIT → facts with numbered checks ═══ */}
        <section className="section facts au-top" id="audit">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Technical SEO and SEO audits</div>
              <h2>What a proper SEO audit checks, and why the order matters</h2>
              <p className="lead">
                An SEO audit is only useful if it tells you what to do first. Open any check to see what we look at.
                Every audit ends with a ranked list, not a spreadsheet of warnings.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="au-acc">
                  {AUDIT_CHECKS.map((c, i) => (
                    <details key={c.t}>
                      <summary><span className="n">{String(i + 1).padStart(2, '0')}</span><span className="t">{c.t}</span><span className="chev" aria-hidden="true">+</span></summary>
                      <div className="body"><p>{c.d}</p></div>
                    </details>
                  ))}
                </div>
                <p className="au-note">
                  Core Web Vitals pass marks: <a href={SRC_CWV} {...extLink}>Google Search Central</a>.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="An engineer's two monitors: a crawl map of a website's pages as connected circles, and a page load waterfall"
                caption="The left screen is a crawl map: every page on the site and the links between them. Pages floating on their own, with nothing linking in, are the first thing we look for. The right screen shows what loads, in what order, and what slows the page down.">
                <img src="/images/au/seo/seo-technical.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a FactoryJet engineer in a Melbourne studio, one monitor showing a map of a website's pages as connected circles and the other a page load waterfall of coloured bars" />
              </VisualSlot>
            </div>
            <div className="platlist span-all" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Why technical SEO comes first</h3></div><p className="plat-build">A page Google cannot index will never rank, however good the writing. Technical faults are also the cheapest to find and fix, and the fix does not wear off.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>A fault we find again and again</h3></div><p className="plat-build">Duplicate versions of the same page: an old site still live, or a staging copy indexed by accident. Google splits its attention between them and neither ranks well.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>What you need to give us</h3></div><p className="plat-build">Read access to Google Search Console and Analytics if you have them. If you do not, setting them up in your name is part of the work, and they stay yours.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ LOCAL SEO + GBP → facts with checklist rows ═══ */}
        <section className="section facts au-top" id="local-seo">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Local SEO services</div>
              <h2>Local SEO: how Australian businesses get into the map pack</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  For most local searches in Australia, the first thing a buyer sees is a map with three businesses on
                  it. In our September 2026 measurement, a map pack appeared on 12 of the 14 city SEO searches we
                  tested. Local SEO is the work of getting into that box, and it runs on different rules from the
                  ordinary results beneath it.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Google says local results are based mainly on <b>relevance</b> (how well your profile matches the
                  search), <b>distance</b> (how far you are from the searcher) and <b>prominence</b> (how well known
                  you are, including links and reviews). It also says plainly that there is no way to request or pay
                  for a better local ranking. You cannot change distance. Relevance and prominence are where a local
                  SEO agency earns its keep.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  The rules matter as much as the tactics. Google does not allow a Business Profile for a virtual
                  office, and service-area businesses, such as a mobile mechanic or a plumber working from home,
                  should hide their address and show a service area instead. A common cause of suspension is a
                  service-area business, often a tradie, showing a home address it should have hidden.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    For trade businesses, our <a href="/au/websites-for-tradies">tradie websites and SEO for tradies</a> page
                    covers licence display rules and Google Business Profile setup.
                  </p>
                  <p>
                    Is local SEO worth it? For a business that serves a defined area, usually yes: the map pack sits
                    above the ordinary results on most local searches. Our <a href="/au/local-seo">local SEO services</a>{' '}
                    page covers the full Google Business Profile, reviews and map ranking work. If you run a small
                    business on a tight budget, <a href="/au/small-business-seo">small business SEO</a> explains what to
                    do first and what to skip.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_LOCAL_RANK} {...extLink}>Google, local ranking factors</a>;{' '}
                    <a href={SRC_GBP_GUIDE} {...extLink}>Google Business Profile guidelines</a>.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§05</div><div>
                  <div className="factlabel">Local SEO checklist we work through</div>
                  <ul className="trigrows">
                    <li><span className="m">Profile verified, no duplicates</span><span className="n">the step most businesses stall on</span><span className="t">Relevance</span></li>
                    <li><span className="m">Most specific primary category</span><span className="n">plus a few honest secondary ones</span><span className="t">Relevance</span></li>
                    <li><span className="m">Service area set, home address hidden</span><span className="n">usually within about two hours’ drive</span><span className="t">Guidelines</span></li>
                    <li><span className="m">Reviews asked for and answered</span><span className="n">every one, good or bad</span><span className="t">Prominence</span></li>
                    <li><span className="m">Same details on every directory</span><span className="n">name, address, website, hours</span><span className="t">Prominence</span></li>
                    <li><span className="m">One strong page per service on your site</span><span className="n">linked from the profile</span><span className="t">Both</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="An Adelaide café owner photographing her own shopfront with her phone for her Google Business Profile"
                caption="Real photographs of your own premises, taken by you, are one of the simplest local SEO tasks there is, and one of the most often skipped.">
                <img src="/images/au/seo/seo-local.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An Adelaide café owner in an apron photographs her own shopfront on a sunny street with her phone, to add real photos to her Google Business Profile" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ ECOMMERCE SEO → definition module (image left, copy right) ═══ */}
        <section className="definition" id="ecommerce-seo">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A Brisbane homewares store owner at his packing bench reviewing a grid of product photos on his laptop">
              <img src="/images/au/seo/seo-ecommerce.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Brisbane homewares store owner at his packing bench, reviewing a grid of product photos on his laptop, with ceramics on the shelves and a camera on a tripod beside him" />
            </VisualSlot>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Ecommerce SEO services</div>
            <h2>Ecommerce SEO for Australian online stores</h2>
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
              plumbing. Because we also <a href="/au/ecommerce-development">build ecommerce stores for Australian brands</a>,
              we can fix the template causing the problem rather than patching around it.
            </p>
            <p>
              For the full playbook, see our <a href="/au/ecommerce-seo">ecommerce SEO agency page</a>,
              covering Shopify SEO, Magento, Google Shopping free listings and migrations.
            </p>
            <div className="factlabel">What moves an online store</div>
            <ul className="trigrows">
              <li><span className="m">Collection pages with real copy</span><span className="t">High</span></li>
              <li><span className="m">Duplicate URLs from filters and variants</span><span className="t">Controlled</span></li>
              <li><span className="m">Product structured data</span><span className="t">Matches page</span></li>
              <li><span className="m">Shipping and returns information</span><span className="t">Clear, ACL-aligned</span></li>
            </ul>
          </div>
        </section>

        {/* ═══ MEASURED: AIO + CITY REACHABILITY ═══ */}
        <section className="section facts" id="measured">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">We measure before we sell</div>
              <h2>What Australian search actually looks like, including the parts that do not suit us</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  In September 2026 we pulled Google Ads search volume for Australian search terms and measured 156
                  live Google Australia results in detail: who ranks, whether an AI Overview appears, whether a map
                  pack appears, and which sites the AI summaries cite. Two findings are worth knowing before you spend
                  anything on SEO in this country.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>One: AI Overviews depend on the subject.</b> An AI Overview is the summary Google places above the
                  ordinary results. When one appears, fewer people click through to any website. On local SEO
                  searches they were rare. On anything with &ldquo;AI&rdquo; or &ldquo;ecommerce&rdquo; in it, they
                  were almost always there.
                </p></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-4" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="An SEO strategist drawing three clusters of search terms on a whiteboard for a business owner and her coordinator"
                caption="Before a quote, we group your search terms into clusters, one page per cluster, and check the real volume behind each one. Some clusters turn out to be empty. We say so.">
                <img src="/images/au/seo/seo-audit.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet SEO strategist in a Perth meeting room draws three clusters of search terms on a whiteboard while a business owner and her marketing coordinator watch" />
              </VisualSlot>
            </div>
            <div className="span-all">
              <div className="tablewrap">
                <table>
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
                        <th scope="row">{r.line}</th>
                        <td className="fj">{r.aio}</td>
                        <td>{r.pack}</td>
                        <td>{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="tablenote">FactoryJet measurement of 156 live Google Australia search results, 24 September 2026.</p>

              <div className="au-subhead">
                <h3>Two: some Australian cities are reachable and some are not</h3>
                <p>
                  Ranking for competitive terms is decided largely by how many other websites reference yours. We counted
                  that figure for every business on page one for the main SEO term in each capital, and compared the
                  weakest of them with our own earned total of 28 linking domains. The result decided which city pages
                  we built and which we did not.
                </p>
              </div>
              <div className="platlist" role="list">
                {CITY_ROWS.map((c, i) => (
                  <a key={c.slug} href={`/au/${c.slug}`} className="plat plat-link" role="listitem">
                    <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                    <div className="plat-name"><h3>SEO in {c.city}</h3></div>
                    <p className="plat-fit">{c.headline}</p>
                    <div>
                      <p className="plat-note">Weakest page-one competitor: <b>{c.weakest} linking domains</b></p>
                      <p className="plat-verdict">{c.verdict}</p>
                    </div>
                    <span className="plat-go" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
              <div className="au-panel au-panel-wide">
                <div className="eyebrow">Where we are not competing, and why we say so</div>
                <p>
                  Sydney, Perth and the Gold Coast carry the largest SEO search volumes in the country. The weakest
                  business on page one measured 119 linking domains in Sydney, 125 in Perth and 136 on the Gold Coast,
                  against our 28. The same arithmetic applies to you: if an agency proposes to win you a Sydney head
                  term, ask how many sites link to the weakest business on page one today. If they cannot answer, the
                  plan is a hope rather than a forecast.
                </p>
              </div>
              <p className="au-note">City search volumes and linking-domain counts: FactoryJet measurement, August 2026.</p>
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline="Want the same measurement done on your own search terms?"
            sub="Tell us what you sell and where. We check real Australian search volume for those terms, look at who holds page one, and count how many sites link to the weakest of them. You get the numbers whether or not they favour us."
            label="Get a free demand check"
            note="Bhavesh replies within one business day, Australian hours."
          />
        </div>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">Side by side</div>
              <h2>DIY vs an SEO consultant vs a large SEO agency vs FactoryJet</h2>
              <p className="lead">
                Each option is right for someone. The table shows where each tends to be strong, so you can match the
                option to the job rather than to the sales pitch.
              </p>
            </div>
            <div className="tablewrap">
              <table>
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
                  <tr><th scope="row">Best fit</th><td className="fj">Businesses that want the work done and the site fixed properly</td><td>Local basics, tight budgets</td><td>Teams with their own marketer or developer</td><td>Large brands, big content and PR programmes</td></tr>
                  <tr><th scope="row">Demand checked before quoting</th><td className="fj">Always, with real volume</td><td>Rarely</td><td>Often</td><td>Varies</td></tr>
                  <tr><th scope="row">Technical fixes made, not just reported</th><td className="fj">Yes, by engineers</td><td>If you can code</td><td>Usually advises only</td><td>Often needs your developer</td></tr>
                  <tr><th scope="row">Local SEO and Business Profile</th><td className="fj">Included</td><td>Very doable</td><td>Advice</td><td>Usually</td></tr>
                  <tr><th scope="row">Ecommerce and Shopify SEO</th><td className="fj">Templates fixed at source</td><td>Apps and settings</td><td>Depends on the person</td><td>Often a specialism</td></tr>
                  <tr><th scope="row">Link building approach</th><td className="fj">Earned only</td><td>Slow on your own</td><td>Varies</td><td>Ask how links are sourced</td></tr>
                  <tr><th scope="row">Contract shape</th><td className="fj">Fixed repair milestones, ongoing work separate</td><td>None</td><td>Usually flexible</td><td>Often 6 to 12 months</td></tr>
                  <tr><th scope="row">Who owns the accounts</th><td className="fj">You, from day one</td><td>You</td><td>Usually you</td><td>Check the contract</td></tr>
                  <tr><th scope="row">Who you talk to</th><td className="fj">The founder and the engineers doing the work</td><td>Yourself</td><td>The consultant</td><td>An account manager</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ WHICH OPTION FITS (<details>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you</div>
              <h2>A quick check: which kind of SEO help do you actually need?</h2>
              <p>
                Open the description that sounds most like your business. The honest answer is not always an SEO
                agency, and not always us.
              </p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="illustration" ratio="3:2"
                subject="AI-generated model: seven white signposts at a fork, one orange sign pointing to the right kind of SEO help" />
            </div>
            <div className="ventries">
              <details className="ventry">
                <summary><h3>We are a local business and nobody finds us on Google Maps</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Start with local SEO, and try it yourself first.</b> Verify your Google Business Profile, pick the most specific category, add real photos and ask for reviews. If you are still invisible after a month, a local SEO audit will find why.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our traffic dropped suddenly after a redesign or a platform move</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>That is a technical SEO problem, and it is urgent.</b> Usually missing redirects, a noindex tag left on, or pages that changed address. A technical SEO audit finds it in days. Ask for our free review.</p>
              </details>
              <details className="ventry">
                <summary><h3>We run an online store and our collection pages do not rank</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>You need ecommerce SEO.</b> Collection copy, duplicate URL control and product data. See <a href="/au/ecommerce-seo">ecommerce SEO services in Australia</a>. If the store itself needs rebuilding, see <a href="/au/shopify-development">Shopify development in Australia</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We have a marketer in-house and want direction, not a team</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Look at SEO consulting.</b> An audit, a written plan and a regular review call, with your marketer doing the work. Usually better value than a full retainer.</p>
              </details>
              <details className="ventry">
                <summary><h3>Buyers ask ChatGPT and Perplexity, and we are never named</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>That is AI search visibility.</b> It builds on classic SEO but adds citation work. See our <a href="/au/ai-seo">AI SEO and GEO service for Australian businesses</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our website itself is slow, dated or hard to update</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Fix the site before paying for SEO on it.</b> See our <a href="/au">web design for Australian businesses</a>, with 7-day delivery for websites up to 5 pages.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our traffic is fine but enquiries are not</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>That is not an SEO problem.</b> More traffic will not fix it. Look at the offer, the page and the enquiry form first. We will tell you that on the free review rather than sell you search work.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ AI SEARCH BRIDGE (prominent link to /au/ai-seo) → prose + link card ═══ */}
        <section className="section" id="ai-search">
          <div className="wrap au-split">
            <div className="au-prose">
              <div className="eyebrow">SEO and AI search</div>
              <h2>Classic SEO and AI search share one foundation</h2>
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
                For the data behind this, read our analysis <a href="/blog/is-seo-dead-2026-ai-search-data">is SEO dead in 2026?</a> and
                our guide to <a href="/blog/how-long-does-seo-take-2026-month-by-month-timeline">how long SEO takes, month by month</a>.
              </p>
            </div>
            <a href="/au/ai-seo" className="au-linkcard">
              <span className="eyebrow">AI SEO Australia</span>
              <h3>Get named when Australian buyers ask ChatGPT, Perplexity and Google AI</h3>
              <p>
                Generative engine optimisation (GEO) and answer engine optimisation (AEO) for Australian businesses:
                an AI visibility check across the major assistants, pages written to be cited, and listings in the
                sources they trust.
              </p>
              <ul className="trigrows">
                <li><span className="m">AI Overview on AI SEO searches we tested</span><span className="t">9 of 9</span></li>
                <li><span className="m">Monthly Australian searches for AI SEO terms</span><span className="t">About 1,000</span></li>
                <li><span className="m">Change on a year earlier</span><span className="t">Roughly doubled</span></li>
              </ul>
              <p className="au-linkcard-go">See AI SEO services →</p>
            </a>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white website page on a workbench, an orange magnifying glass over it and a short stack of printed drafts beside it" />

        {/* ═══ HOW AN ENGAGEMENT RUNS → process timeline (stages stay openable, as the copy says) ═══ */}
        <section className="section process" id="how-it-runs">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How it runs</div>
                <h2>What the work looks like, and what it needs from you</h2>
                <p className="lead">
                  Open any stage to see what happens and what we need from you. Search work fails more often through
                  missing input from the client than through anything the agency does, and the two stages that need
                  you most cannot be outsourced: subject matter review, and introductions.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="An accountant marking up printed drafts of her service pages while a content writer listens"
                caption="Stage five in practice: we write the draft, the person who knows the work corrects it. That review is what makes a page accurate enough for Google and AI assistants to trust.">
                <img src="/images/au/seo/seo-content.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Canberra accountant marks up printed drafts of her new service pages with a pen while a FactoryJet content writer sits beside her and listens" />
              </VisualSlot>
            </div>
            <div className="timeline timeline-4 timeline-3">
              {STAGES.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p className="tnode-meta">{s.length}</p>
                  <p>{s.d}</p>
                  <p><b>What we need from you:</b> {s.yours}</p>
                </details>
              ))}
            </div>

            <div className="au-subhead">
              <h3>Six things we will not do</h3>
              <p>
                Ask any SEO company you are considering the same question. One that cannot name a single thing it
                refuses has either not thought about it or is willing to do things that will cost you later.
              </p>
            </div>
            <div className="platlist" role="list">
              {REFUSALS.map((r, i) => (
                <div key={r.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{r.t}</h3></div>
                  <p className="plat-build">{r.d}</p>
                </div>
              ))}
            </div>
            <p className="au-note">
              Link buying as link spam: <a href={SRC_SPAM} {...extLink}>Google spam policies</a>.
            </p>
          </div>
        </section>

        {/* ═══ COST DRIVERS (no pricing) → ruled rows + scope panel ═══ */}
        <section className="section platforms" id="cost">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>How much should I pay for SEO? What actually sets the cost</h2>
              </div>
              <p>
                &ldquo;How much should I expect to pay for SEO?&rdquo; is the question Australians ask Google most
                about SEO. The honest answer is that it depends on the size of the gap between your site and page
                one, so we measure the gap first and quote a fixed price per stage. Engagements usually take one of
                four shapes.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>SEO audit.</h3></div><p className="plat-build">A ranked list of problems and a written plan. Some businesses take it to their own developer, and that is fine.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Technical and local repair.</h3></div><p className="plat-build">Fixed milestones with an end date: indexing, speed, structure, Business Profile and business details.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Ongoing content and links.</h3></div><p className="plat-build">Pages on verified terms and earned links, month by month once the repair has shown results.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>SEO consulting.</h3></div><p className="plat-build">Direction and review for a team that does the work itself.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  Be careful with any SEO pricing that arrives before anyone has looked at your site. A package priced
                  on a call cannot know whether your problem is a single noindex tag or a year of link earning.
                </p>
                <p>
                  Want to see what Australian providers publish? Our <a href="/blog/seo-cost-australia-2026">SEO cost in Australia guide</a> compares
                  package, hourly and audit prices from six sources.
                </p>
                <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the scope</div>
                <ul className="trigrows">
                  <li><span className="m">Number of technical faults</span><span className="n">a single tag or a rebuild</span><span className="t">Repair</span></li>
                  <li><span className="m">Strength of page one</span><span className="n">linking domains of the weakest rival</span><span className="t">Gap</span></li>
                  <li><span className="m">Pages to write</span><span className="n">one per real service or category</span><span className="t">Content</span></li>
                  <li><span className="m">Locations served</span><span className="n">one suburb or a national footprint</span><span className="t">Reach</span></li>
                  <li><span className="m">Store size</span><span className="n">products, filters and variants</span><span className="t">Ecommerce</span></li>
                  <li><span className="m">Who makes the changes</span><span className="n">us, or your own developer</span><span className="t">Delivery</span></li>
                  <li><span className="m">First review with the founder</span><span className="n">written note on three problems</span><span className="t">Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AGENCIES (self-disclosure, ItemList from AGENCIES) → ruled rows ═══ */}
        <section className="section platforms" id="agencies">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>SEO agencies in Australia worth knowing</h2>
              </div>
              <p>
                We are one option, not the only one. These SEO companies appear most often when Australians search for
                an SEO agency or ask ChatGPT, Gemini, Claude and Perplexity for one. Each note is based on what the
                company says on its own website. Talk to two or three and compare what they measure.
              </p>
            </div>
            <div className="platlist" role="list">
              {AGENCIES.map((a, i) => (
                <div key={a.name} className={a.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{a.name}</h3>{a.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{a.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Agencies named from live Google Australia results and AI assistant answers for SEO agency queries, September 2026. Notes reflect each company’s own homepage on 25 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ AUSTRALIA-WIDE + DEMAND PANEL → prose + demand bars ═══ */}
        <section className="section au-top" id="australia-wide">
          <div className="wrap au-split">
            <div className="au-prose">
              <div className="eyebrow">Australia-wide</div>
              <h2>An SEO company for Sydney, Melbourne, Brisbane, Perth, Adelaide and regional Australia</h2>
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
              <ul className="city-list">
                <li><a href="/au">FactoryJet Australia</a></li>
                <li><a href="/au/melbourne">Melbourne</a></li>
                <li><a href="/au/brisbane">Brisbane</a></li>
                <li><a href="/au/adelaide">Adelaide</a></li>
                <li><a href="/au/canberra">Canberra</a></li>
              </ul>
            </div>
            <div className="demand">
              <div className="demand-head"><span>Australia · Monthly SEO Search Demand</span><b>DataForSEO</b></div>
              <ul>
                {DEMAND.map((r) => (
                  <li key={r.kw} className="demand-row">
                    <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                    <div className="demand-bar"><i style={{ width: r.w }} /></div>
                    <div className="demand-kd">{r.note}</div>
                  </li>
                ))}
              </ul>
              <p className="demand-src">Source: DataForSEO, Google Australia, September 2026</p>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="related">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related services in Australia</div>
              <h2>SEO works best on a site built to be found</h2>
            </div>
            <ul className="agentdir-grid au-grid-2">
              {[
                { h: '/au/local-seo', t: 'Local SEO', d: 'Google Business Profile, reviews and the map pack for businesses that serve a defined area.' },
                { h: '/au/small-business-seo', t: 'Small business SEO', d: 'The few SEO jobs that matter most when the budget and the team are small.' },
                { h: '/au/ai-seo', t: 'AI SEO and GEO', d: 'Get named in ChatGPT, Perplexity, Gemini and Google AI Overviews, not only ranked.' },
                { h: '/au', t: 'Web design Australia', d: 'Fast, well-structured websites, with 7-day delivery for sites up to 5 pages.' },
                { h: '/au/shopify-development', t: 'Shopify development', d: 'Stores built with clean collection pages and structured data from day one.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Custom and replatformed stores, with SEO carried across during migration.' },
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
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading={`SEO services in Australia: ${FAQ_ITEMS.length} questions Australians ask`}
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references (claims kept under each link) ═══ */}
        <section className="section referencesSection references" id="references" aria-label="Sources">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs refs-claims">
              {CITATIONS.map((c) => (
                <div key={c.id}>
                  <span className="refs-id">[{c.id}]</span>
                  <a href={c.url} {...extLink}>{c.source}: {c.title}</a>
                  <p>{c.claim}</p>
                </div>
              ))}
            </div>
            <p className="au-note">
              Search volumes, AI Overview and map pack presence, and competitor link counts on this page were measured by FactoryJet against Google Australia in August and September 2026.
            </p>
          </div>
        </section>

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Next step</div>
              <h2>Find out whether SEO is worth your money</h2>
              <p>
                Send your name and work email. We crawl the site, check your Google Business Profile, read your own
                Search Console data and measure the businesses holding the positions you want. You get a written note on
                the three biggest problems and an honest view of whether the gap can be closed. If search is not your
                real problem, that is what we will tell you.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Get a free site review" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-seo">See AI SEO services</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

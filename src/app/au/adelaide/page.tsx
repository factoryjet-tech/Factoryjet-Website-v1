import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import { CANONICAL, CRUMBS, CITATIONS, SERVICE_AREAS } from './pageData';
import { FAQS, type Faq } from './faqData';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-city.css';

/* Redesigned 2026-09-25 into the AU service design system (reference:
   ../ai-agents/page.tsx). Title, H1 intent, keyword targets, city facts, the
   FAQ set and the sources are carried over from the August 2026 page; the
   old sections/ folder and the Lenis client shell were removed. */

const UPDATED = '2026-09-26';
const TITLE = 'Web Design & SEO Adelaide | Easier to Rank In | FactoryJet';
const H1 = 'Web design Adelaide: websites and SEO for South Australian businesses';
const DESCRIPTION =
  'Adelaide web design and SEO. Less entrenched competition than Sydney or Perth, so the same work goes further. Fast sites by senior engineers. Free site review.';
const OG_IMAGE = '/images/au/adelaide/adelaide-og.webp';

const [ABS, CWV, STARTER] = CITATIONS;

/* ─── FAQ categories: derived from the topic on each FAQ, so the sidebar,
       the visible list and the FAQPage schema all come from FAQS. ─── */
const TOPIC_ORDER: Faq['topic'][] = [
  'Is it worth it',
  'Cost and scope',
  'Websites',
  'SEO',
  'Google and local search',
];
const topicKey = (t: string) => t.toLowerCase().replace(/[^a-z]+/g, '-');

/* ─── Who we build for (carried from the August page) ─── */
const SECTORS: { name: string; note: string }[] = [
  { name: 'Defence and space', note: 'Osborne, Edinburgh and the Lot Fourteen precinct. These buyers are usually B2B with long procurement cycles, and the website is read by a committee rather than a person. Depth, precision and evidence beat persuasion.' },
  { name: 'Wine and food producers', note: 'The Barossa, McLaren Vale and the Adelaide Hills. A trade audience that wants specifications and a consumer audience that wants a cellar door visit. Those two need different pages, not one compromise page.' },
  { name: 'Health and medical', note: 'The North Terrace precinct and clinics across the suburbs. Maps and reviews carry most of the weight, and closeness to the searcher does much of the ranking for you.' },
  { name: 'Advanced manufacturing', note: 'Across the northern suburbs. Often selling nationally rather than locally, which means the local listing matters less and the depth of the service pages matters more.' },
  { name: 'Trades and construction', note: 'Metro-wide. Phone-first buyers searching from a job site, so a tappable number and a clear service area in the first screen matter more than anything else on the page.' },
  { name: 'Professional services', note: 'The CBD, Norwood and Unley. Longer decision cycles and buyers who read several pages before contacting anyone, so content depth matters more than speed of contact.' },
];

const B2B: { title: string; body: string }[] = [
  { title: 'Pages that survive a procurement review', body: 'A buying committee checks capability, certifications, insurance, past projects and whether you look likely to still exist in three years. That means real project detail, named accreditations, and dates. Vague claims about quality and partnership hurt you here, because the reader is looking for something to verify and finding nothing.' },
  { title: 'Depth over speed of contact', body: 'A procurement reader will visit several times over weeks before making contact. Optimising that page for an instant enquiry is the wrong goal. What works is making it easy to return to, easy to send to a colleague, and easy to pull a specification from without having to ask you for it.' },
  { title: 'Documents that are actually findable', body: 'Capability statements, specification sheets and compliance documents are usually buried in a downloads page nobody visits. Putting the content on real pages, with the file as a second option, makes it findable in Google and readable on a phone.' },
  { title: 'Search work aimed at national terms', body: 'If you sell nationally from Adelaide, your Google Business Profile is close to irrelevant and your service pages are everything. We check where your buyers actually search before recommending anything. For many South Australian manufacturers the honest answer is that local SEO is not where the money is.' },
];

const LOCAL: { title: string; body: string }[] = [
  { title: 'Found on a phone, close to the moment of deciding', body: 'Someone choosing where to go this afternoon searches on a phone, looks at the map results, checks the photos and the reviews, and calls. The website is often the third thing they see. That makes the Google Business Profile the highest-value asset you have, and a complete, well-photographed one beats a beautiful site with a neglected listing.' },
  { title: 'Speed measured, not asserted', body: 'Google publishes the marks it judges page experience on: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. We build against those and show you the before and after rather than calling the site fast.' },
  { title: 'Reviews treated as a system, not a favour', body: 'Reviews are the strongest thing a local Adelaide business can influence, and most do it ad hoc. We set up a simple, repeatable way of asking at the right moment and answering every one. It is unglamorous and it moves the map results more reliably than most things we could sell you.' },
  { title: 'Two audiences, two paths', body: 'If you sell to trade and to the public, the home page needs two clear routes rather than one hedged message. Cellar doors, wholesalers and suppliers with a retail arm all need this and very few of them have it.' },
];

/* ─── Choosing a web designer in Adelaide (listicle) ─── */
const CHECKS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Ask who actually builds the site', d: 'Many agencies sell with a senior person and build with a junior or a subcontractor. That is not always bad, but you should know. Ask for the name of the person who will write the code and whether they will still be there after launch.' },
  { n: '02', t: 'Run a speed test on a site they built two years ago', d: 'Anyone can make a new site fast. The test is whether their older work still passes Google’s Core Web Vitals marks today. Paste a past project into PageSpeed Insights on your phone while you are talking to them.' },
  { n: '03', t: 'Check who owns the domain, hosting and code', d: 'The answer should be you, from day one. A common Adelaide complaint is a small business that cannot change its own site because the agency holds the domain or built it on a closed system. Get ownership in writing before you pay a deposit.' },
  { n: '04', t: 'Ask how they will write the words', d: 'Most small business sites fail on content, not design. Find out whether the designer writes copy, interviews you for it, or expects you to supply it. If it is you, plan for that time, because it is usually what delays launch.' },
  { n: '05', t: 'Ask what happens to your Google rankings on launch day', d: 'A redesign that changes page addresses without redirects can wipe out years of rankings overnight. A good web designer maps every old page to a new one before launch and checks Search Console afterwards.' },
  { n: '06', t: 'Look for proof you can check', d: 'Named clients, live sites and dated projects. Review counts in a page title are marketing; a site you can open and test is evidence. For FactoryJet that means Bombay Petals for B2B and Belle Maison, built on Commerceflo, for DTC.' },
  { n: '07', t: 'Ask what they will tell you not to do', d: 'If search demand for your service in Adelaide is too small to justify SEO work, the right agency says so. An agency that has never talked a client out of spending is worth being careful with.' },
  { n: '08', t: 'Agree what support looks like after launch', d: 'Updates, security, small changes and someone to call when a form stops sending. The enemy of a good website is the agency that disappears once the invoice is paid. Get the support arrangement written into the scope.' },
];

/* ─── Build process (<details>) ─── */
const STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Free review of your site and Google listing', d: 'We crawl the current site, run Core Web Vitals on real pages, check your Google Business Profile, and look at who holds the Adelaide positions you want and how many sites link to them.', out: 'A short written note with the real size of the gap, and whether the work is worth doing.' },
  { n: '02', t: 'Written scope, before you commit', d: 'Pages, content, integrations, search work and what sits with you, such as photos and sign-off. We name the items that will decide the launch date.', out: 'A fixed-scope proposal you can compare against other Adelaide quotes line by line.' },
  { n: '03', t: 'Site map and audience paths', d: 'A whiteboard session, held by video, where we draw the pages and the routes through them. If you sell to trade and to the public, this is where the two paths are designed.', out: 'An agreed site map and the list of pages each audience needs.' },
  { n: '04', t: 'Words and design together', d: 'Copy written in your customers’ language, not your industry’s, and a design that puts what you do in the first screen. You review real pages, not a mood board.', out: 'Approved page designs with real content in them.' },
  { n: '05', t: 'Build, speed and accessibility checks', d: 'Built by senior engineers against Google’s published Core Web Vitals marks, tested on real phones, with labelled forms, keyboard access and readable contrast.', out: 'A staging site with a speed and accessibility report.' },
  { n: '06', t: 'Launch without losing rankings', d: 'Every old page address mapped to a new one, Search Console and Analytics connected in your name, and the Google Business Profile updated to point at the right pages.', out: 'A live site, with a launch checklist signed off. Sites of up to five pages can have 7-day delivery once content is ready.' },
  { n: '07', t: 'Support and search work after launch', d: 'Updates, fixes and, if you want it, ongoing SEO: pages for the services people search, review systems and earned local links. Reported against enquiries, not rankings alone.', out: 'The same team that built the site, still answering after it goes live.' },
];

/* ─── Demand (DataForSEO, Google Australia, September 2026) ─── */
const DEMAND: { kw: string; v: string; w: string; note: string }[] = [
  { kw: 'website design adelaide', v: '1,300', w: '100%', note: 'Shared by close variants: adelaide web design, web developer adelaide' },
  { kw: 'seo agency adelaide', v: '1,300', w: '100%', note: 'Shared with seo company adelaide. Map pack shown' },
  { kw: 'adelaide website designer', v: '480', w: '37%', note: 'Map pack shown, no AI Overview' },
  { kw: 'seo services adelaide', v: '480', w: '37%', note: 'Map pack shown, no AI Overview' },
  { kw: 'seo consultant adelaide', v: '390', w: '30%', note: 'Buyers wanting one named expert' },
  { kw: 'web design company adelaide', v: '210', w: '16%', note: 'Buyer intent' },
  { kw: 'local seo adelaide', v: '140', w: '11%', note: 'Mostly trades and clinics' },
  { kw: 'ecommerce website design adelaide', v: '50', w: '4%', note: 'Small but high value' },
];

/* ─── JSON-LD. Organization is defined sitewide and referenced only by @id.
       No LocalBusiness node: FactoryJet has no Adelaide office. ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Web Design and SEO Adelaide',
      serviceType: 'Web design, website development and search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Adelaide' },
        { '@type': 'AdministrativeArea', name: 'South Australia' },
        ...SERVICE_AREAS.map((name) => ({ '@type': 'Place', name })),
      ],
      url: CANONICAL,
      description:
        'Web design and SEO for Adelaide and South Australian businesses, including defence, manufacturing, wine, health, trades and professional services. Delivered remotely by senior engineers; the client owns the site, domain and accounts.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: CRUMBS.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
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
      image: `https://factoryjet.com${OG_IMAGE}`,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      about: { '@id': `${CANONICAL}#service` },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    // Mapped from FAQS, the SAME array the FAQ section below renders.
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'Web Design & SEO Adelaide | FactoryJet',
    description:
      'Fast websites and search work for South Australian businesses. Adelaide has the least entrenched first page of any Australian capital, and we can show you the numbers.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'A web designer and an Adelaide business owner review a new website layout on a laptop, with East End sandstone shopfronts and the Adelaide Hills through the window' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Adelaide | FactoryJet',
    description: 'Fast websites and search work for South Australian businesses.',
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'adelaide';

/* H1 split for the Family A hero emphasis. Rendered text stays byte-identical to H1 (schema headline). */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec panel rows (the old "What every Adelaide build includes" hero card rows). */
const HERO_ROWS: { note: string; metric: string; val: string; icon: string }[] = [
  { note: 'and you can take just one', metric: 'Web design and search', val: 'Both', icon: 'M4 5h16v11H4V5Zm4 15h8m-4-4v4' },
  { note: 'Google’s published pass mark', metric: 'Largest Contentful Paint target', val: 'Under 2.5s', icon: 'M4 16a8 8 0 1 1 16 0M12 16l4-5' },
  { note: 'from day one and after you leave', metric: 'Site, domain and every account', val: 'Yours', icon: 'M14 4a6 6 0 1 1-4.2 10.3L4 20m2-2 2 2m1-5 2 2' },
];

/* Icons and visual-slot subjects for the four B2B cards (same order as B2B). */
const B2B_ICONS = [
  'M6 3h9l4 4v14H6V3Zm3 10 2 2 4-4',
  'M4 19V9m5 10V5m5 14v-7m5 7V8',
  'M6 3h9l4 4v14H6V3Zm3 8h7m-7 4h7',
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-9 9h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
] as const;
const B2B_SUBJECTS = [
  'AI-generated model: a white capability page card beside a checklist clipboard with orange ticks, as a procurement reviewer would read it',
  'AI-generated model: the same white page card shown several times along a calendar strip, one visit marked in orange',
  'AI-generated model: a white specification sheet turning into a white web page card readable on a small phone',
  'AI-generated model: a small white globe with orange markers across Australia beside a white service page card',
] as const;

/* FAQ categories and items for the shared Family A FAQ, mapped from the SAME FAQS array the FAQPage JSON-LD maps. */
const FAQ_CATEGORIES = TOPIC_ORDER.map((t) => ({ key: topicKey(t), label: t }));
const FAQ_ITEMS = FAQS.map((f) => ({ category: topicKey(f.topic), question: f.q, answer: f.a, links: f.links }));

export default function AdelaidePage() {
  return (
    <>
      <script id="ld-au-adelaide" type="application/ld+json"
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
              <div className="eyebrow">Adelaide, South Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Adelaide is the easiest capital city in Australia to get found in, and we can show you why. Fewer
                entrenched competitors hold the first page here than in Sydney, Melbourne or Perth, which changes what
                is realistic and what it takes. We design and build fast websites for South Australian businesses and do
                the search work that gets them found.
              </p>
              <HeroInlineForm region="au" source="au_adelaide_hero_inline" submitLabel="Get my free review" />
              <p className="hero-more">
                Senior engineers do the job, you own everything at the end, and if the numbers say the work is not
                worth doing for you, we will tell you that instead of selling you a retainer.
              </p>
            </div>

            <form
              className="specpanel"
              aria-label="What every Adelaide build includes"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What every Adelaide build includes: web design and search from one team, a measured speed target, and every account in the client's name"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT EVERY ADELAIDE BUILD INCLUDES</span>
                <span className="sys"><span>WEBSITE DESIGN</span><span>SEO</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what every build includes">
                {HERO_ROWS.map((r, i) => (
                  <label key={r.metric} className={i === HERO_ROWS.length - 1 ? 'specrow hold' : 'specrow run'}>
                    <input className="workflow-select" type="radio" name="adelaide-step" value={String(i + 1)} />
                    <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={r.icon} /></svg></span>
                    <span className="idx">{r.note}</span>
                    <span className="title">{r.metric}</span>
                    <span className="tag">{r.val}</span>
                  </label>
                ))}
              </div>
              <div className="specpanel-foot">RULE · Get ownership in writing before you pay a deposit.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '1,300', t: 'monthly Google searches for website design in Adelaide and its close variants', s: 'DataForSEO, Sept 2026', u: '#adelaide-demand' },
              { v: '27', t: 'sites linking to the weakest first-page business for the main Adelaide web design term', s: 'FactoryJet, Aug 2026', u: '#why-easier' },
              { v: '2.5s', t: 'Google’s pass mark for Largest Contentful Paint, the main page speed measure', s: 'Google Search Central', u: CWV.url },
              { v: '3.1%', t: 'growth in actively trading Australian businesses across 2025–26, with every state growing', s: 'ABS', u: ABS.url },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className={/^[\d.,]+(s|%)?$/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
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
              <h2 data-speakable="true">What does a web design and SEO agency in Adelaide actually do?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    A good Adelaide web designer builds a fast site that says what you do in the first screen, works on a
                    phone, and connects to your Google Business Profile. The SEO side makes sure Google can read it, adds pages
                    for what buyers search, and earns local links. Adelaide&rsquo;s first page is less entrenched than other
                    capitals, so the same work goes further here.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="An Adelaide business owner reviewing her new website layout on a laptop with a web designer, East End shopfronts and the Adelaide Hills through the window">
                <img src="/images/au/adelaide/adelaide-hero.webp" width={1400} height={933} loading="lazy" decoding="async"
                  alt="Over the shoulder of an Adelaide business owner reviewing her new website layout on a laptop with a web designer, East End sandstone shopfronts and the Adelaide Hills through the window" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ WHY ADELAIDE IS EASIER → facts with measured panel ═══ */}
        <section className="section facts" id="why-easier">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Answer first</div>
              <h2>Why Adelaide is easier to rank in than the other capitals</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Ranking in Google is decided largely by how many other websites reference yours, and Adelaide has the
                  least entrenched field of any Australian capital we measured. In August 2026 the weakest business
                  holding a first-page position for the main Adelaide web design search had links from 27 other
                  websites. The equivalent figure in Perth was 92 and in Sydney 101. That difference is the whole story:
                  the same amount of work buys a better result here.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The honest counterweight is that Adelaide searches are smaller. Fewer people search for a web designer
                  here than in Melbourne, so the total prize is lower even when your share of it is higher. For most
                  South Australian businesses that trade is worth taking, because a first page you can actually reach
                  beats a bigger one you cannot.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What we measured, and what it means for you</div>
                <ol className="au-numlist">
                  <li><span>The weakest first-page business for the main Adelaide web design term had links from <b>27</b> other sites. Perth: 92. Sydney: 101.</span></li>
                  <li><span>On the main Adelaide SEO term the weakest first-page business had <b>37</b>. That is a realistic target, not an aspiration.</span></li>
                  <li><span>Directories hold at most <b>one to three</b> spots on any Adelaide first page we checked. There is no directory wall to climb.</span></li>
                  <li><span>Google showed <b>no AI Overview</b> on the Adelaide web design and SEO searches we tested, so a ranking still earns the click.</span></li>
                  <li><span>The trade-off is volume: smaller searches than Melbourne or Perth, so a lower ceiling that is easier to reach.</span></li>
                </ol>
                <p className="au-note">Link counts measured by FactoryJet, August 2026. Directory and AI Overview checks repeated September 2026, Google Australia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ LOCAL MARKET → facts, sectors as ruled rows ═══ */}
        <section className="section facts" id="adelaide-market">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The local market</div>
              <h2>South Australia sells differently, so the website has to work differently</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Australia held 2,814,778 actively trading businesses at 30 June 2026, up 85,130 or 3.1% across the
                  year, with every state and territory growing.<sup><a href="#sources">[1]</a></sup>{' '}
                  South Australian businesses lean towards sectors that sell to other businesses or to government rather
                  than straight to consumers.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  That changes what a good Adelaide website looks like. A defence supplier and a cellar door both need a
                  site, and almost nothing about the two should be the same. The supplier is read by a procurement team
                  checking capability, certifications and track record, often months before anyone makes contact. The
                  cellar door needs to be found on a phone by someone deciding where to drive this afternoon. Selling
                  both a template is how agencies produce sites that technically work and commercially do not.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    For B2B and government-facing businesses, the local listing matters much less than you would think,
                    and the depth of your service pages matters much more. We have seen Adelaide manufacturers spend months
                    on a Google Business Profile that was never going to bring them work, because their buyers were not
                    searching on a map. Getting that diagnosis right at the start saves more money than any efficiency
                    later in the build.
                  </p>
                  <p className="au-note">
                    Source [1]: <a href={ABS.url} {...extLink}>{ABS.source}, {ABS.title}</a>, release dated 18 August 2026.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A production engineer in a northern suburbs machining workshop checking a product specification page on a tablet"
                caption="A manufacturer’s buyer wants the specification, the tolerances and the accreditations on a real page they can open on the floor, not a PDF in a downloads list.">
                <img src="/images/au/adelaide/adelaide-manufacturing.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="A production engineer in an Adelaide northern suburbs machining workshop checks a product specification page on a tablet, with CNC machines and racked aluminium parts around him" />
              </VisualSlot>
            </div>
            <div className="platlist span-all" role="list">
              {SECTORS.map((s, i) => (
                <div key={s.name} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{s.name}</h3></div>
                  <p className="plat-build">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TWO AUDIENCES (cellar door) → definition (image left, copy right) ═══ */}
        <section className="definition" id="two-audiences">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A Barossa Valley winemaker arranging bottles on a cellar door counter while a photographer shoots them for the winery website">
              <img src="/images/au/adelaide/adelaide-cellar-door.webp" width={1200} height={800} loading="lazy" decoding="async"
                alt="A Barossa Valley winemaker arranges unlabelled bottles on a stone cellar door counter while a photographer shoots them for the winery website, vineyards rolling behind" />
            </VisualSlot>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">The one thing almost every Adelaide site gets wrong</div>
            <h2>Two audiences on one page, and neither is served well</h2>
            <p>
              A Barossa or McLaren Vale winery sells to trade buyers who want vintages, volumes and specification
              sheets, and to visitors who want opening hours, a tasting booking and directions. A wholesaler in
              Wingfield sells to retailers and, through a small online shop, to the public. The usual website tries
              to speak to both on the same home page and ends up hedging.
            </p>
            <p>
              If you sell to trade and to the public, you need two paths from the home page, each with its own
              language, its own proof and its own way of making contact. The trade path is detailed, calm and
              downloadable. The visitor path is short, photographic and bookable from a phone. It is more work than
              one page and it converts far better than a page trying to please everyone.
            </p>
            <p>
              Real photography matters more here than anywhere. Cellar doors, restaurants and producers are chosen
              on how the place looks, and a stock photo of a generic vineyard tells a visitor nothing. We plan the
              shot list with you at the site map stage so the photos exist before the pages need them.
            </p>
          </div>
        </section>

        {/* ═══ SERVICES BY BUYER → capgrid (B2B) + ruled rows with photo (local) ═══ */}
        <section className="section capabilities" id="services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Adelaide web design and SEO services</div>
              <h2>The work depends on who is reading, not on which package you pick</h2>
              <p className="lead">
                Adelaide businesses divide fairly cleanly into two kinds, and the right approach for one is close to
                wasted on the other. Work out which you are before you buy anything from anybody. If you are genuinely
                both, you need two paths through the site rather than a compromise between them.
              </p>
            </div>

            <div className="city-sub">
              <h3 id="b2b-adelaide">If you sell to businesses or to government</h3>
              <p>
                Defence suppliers, manufacturers, engineering firms, wholesalers and professional services. Your buyer is a
                committee working to a process, reading over weeks, and checking whether you can be verified. The website is
                a due diligence document that happens to look like marketing.
              </p>
            </div>
            <div className="capgrid">
              {B2B.map((it, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={it.title} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={B2B_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={B2B_SUBJECTS[i]} />
                    <h3>{it.title}</h3>
                    <p>{it.body}</p>
                  </div>
                );
              })}
            </div>

            <div className="city-sub">
              <h3 id="local-adelaide">If you sell locally to the public</h3>
              <p>
                Trades, clinics, cellar doors, hospitality and retail. Your buyer is on a phone, deciding soon, and
                comparing you against two or three others on a map. Speed, reviews and a complete listing matter more
                than anything you could put in a brand statement.
              </p>
            </div>
            <div className="au-split au-split-flush">
              <div className="platlist" role="list">
                {LOCAL.map((it, i) => (
                  <div key={it.title} className="plat plat-2col" role="listitem">
                    <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                    <div className="plat-name"><h3>{it.title}</h3></div>
                    <p className="plat-build">{it.body}</p>
                  </div>
                ))}
              </div>
              <VisualSlot page={PAGE_KEY} slot="platforms" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="An Adelaide electrician beside his van on a leafy Unley street checking a new job enquiry on his phone"
                caption="A tradie in Unley or Norwood wins work from a phone search on the street. The first screen needs the service, the suburbs covered and a way to call or book, nothing else.">
                <img src="/images/au/adelaide/adelaide-tradie.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="An Adelaide electrician beside his van on a leafy Unley street of bluestone villas checks a new job enquiry on his phone" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ LISTICLE: CHOOSING A WEB DESIGNER → ruled rows ═══ */}
        <section className="section platforms" id="choosing">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Before you hire anyone</div>
                <h2>How to choose a website designer in Adelaide: eight checks</h2>
              </div>
              <p>
                The Adelaide first page for web design is a mix of solo designers, studios, digital agencies and a Reddit
                thread of people asking for recommendations. These checks work on all of them, including us.
              </p>
            </div>
            <div className="platlist" role="list">
              {CHECKS.map((s) => (
                <div key={s.n} className="plat plat-2col" role="listitem">
                  <span className="capid">{s.n}</span>
                  <div className="plat-name"><h3>{s.t}</h3></div>
                  <p className="plat-build">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: two paths of white page cards splitting from one home page card, one path marked trade and one marked visitors in orange" />

        {/* ═══ PROCESS (steps stay openable, as the copy says) ═══ */}
        <section className="section process" id="process">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How an Adelaide project runs</div>
                <h2>Website design in seven steps, from free review to support after launch</h2>
                <p className="lead">
                  Open any step to see what happens and what you get at the end of it. Nothing is charged before you have
                  read the written scope.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A web strategist arranging sticky notes into a site map on a whiteboard in a Norwood office while two business owners watch"
                caption="Step three is a site map on a whiteboard. Most of the decisions that make a small business site work are made here, before any design.">
                <img src="/images/au/adelaide/adelaide-workshop.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="A web strategist arranges blank sticky notes into a site map on a whiteboard in a Norwood office with a sandstone wall while two Adelaide business owners watch" />
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
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline="Find out how close you actually are to page one in Adelaide"
            sub="Send us your address. We crawl the site, check your Google Business Profile, and measure the businesses currently holding the positions you want, so you can see the real gap rather than a guess. No charge."
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
                <h2>DIY builder vs freelance web designer vs Adelaide agency vs FactoryJet</h2>
                <p className="lead">
                  Each option is right for someone. The table shows where each tends to be strong, so you can match the option
                  to the job rather than to the sales pitch.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>DIY website builder</th>
                    <th>Freelance web designer</th>
                    <th>Full-service Adelaide agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best fit</th><td className="fj">Sites that must sell, rank and connect to other systems</td><td>Simple sites you will maintain yourself</td><td>Small brochure sites, clear brief</td><td>Brand, campaigns and media together</td></tr>
                  <tr><th scope="row">Who builds it</th><td className="fj">Senior engineers</td><td>You</td><td>The person you met</td><td>Varies by team</td></tr>
                  <tr><th scope="row">SEO and Google listing</th><td className="fj">Same team, measured</td><td>On you</td><td>Sometimes</td><td>Usually a separate retainer</td></tr>
                  <tr><th scope="row">Speed to Google&rsquo;s marks</th><td className="fj">Built and tested against them</td><td>Depends on the theme</td><td>Varies</td><td>Varies</td></tr>
                  <tr><th scope="row">Online store and integrations</th><td className="fj">Shopify, B2B ordering, CRM</td><td>Built-in only</td><td>Depends on the person</td><td>Often subcontracted</td></tr>
                  <tr><th scope="row">Who owns the site and domain</th><td className="fj">You, from day one</td><td>You, inside the platform</td><td>Check the contract</td><td>Check the contract</td></tr>
                  <tr><th scope="row">Support after launch</th><td className="fj">The team that built it</td><td>Platform help desk</td><td>If they are available</td><td>Usually, on retainer</td></tr>
                  <tr><th scope="row">Local office in Adelaide</th><td className="fj">No, remote in Australian hours</td><td>Not applicable</td><td>Often</td><td>Usually</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ WHICH OPTION FITS (<details>) → vlog ═══ */}
        <section className="vlog" id="which-option">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you</div>
              <h2>A quick check: what does your Adelaide business actually need?</h2>
              <p>Open the description that sounds most like you. The honest answer is not always us.</p>
            </div>
            <div className="ventries">
              <details className="ventry">
                <summary><h3>All our work comes from referrals and we are happy with that</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Keep it simple.</span>
                <p>A complete Google Business Profile and a one-page site that confirms you are real may be all you need. Do not buy SEO you will not use.</p>
              </details>
              <details className="ventry">
                <summary><h3>We are a trade or clinic and want more calls from our suburbs</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Local SEO first, site second.</span>
                <p>Fix the Google listing and reviews, then build service pages for the suburbs you cover. See our <a href="/au/seo">SEO services in Australia</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We sell to business or government and buyers check us before calling</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">A capability site.</span>
                <p>Deep service pages, real project detail and documents as pages. This page is the right place; start with the free review.</p>
              </details>
              <details className="ventry">
                <summary><h3>We want to sell online, to the public or to trade customers</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">That is a store build.</span>
                <p>See <a href="/au/shopify-development">Shopify development in Australia</a> or, for B2B ordering and custom platforms, <a href="/au/ecommerce-development">ecommerce development</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We want ChatGPT and Google AI answers to mention our business</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">That is AI search visibility.</span>
                <p>See our <a href="/au/ai-seo">AI SEO service for Australian businesses</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>The website is fine; the problem is enquiries nobody answers in time</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Look at the phones and inbox, not the site.</span>
                <p>See our <a href="/au/ai-receptionist">AI receptionist</a> and <a href="/au/ai-agents">AI agents</a> work for Australian businesses.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ GOOGLE MAPS AND LOCAL SEARCH → facts ═══ */}
        <section className="section facts" id="local-search">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Google Maps, reviews and local SEO in Adelaide</div>
              <h2>What decides the map results in Adelaide, and what we can and cannot change</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  When we checked the main Adelaide web design and SEO searches in September 2026, every one showed a
                  Google map pack above the ordinary results. For a local business that pack is where most of the calls
                  come from. Google ranks it on three things: how relevant your listing is to the search, how close you
                  are to the person searching, and how prominent your business looks, which is mostly reviews and links.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Distance is the part nobody can change. A Glenelg café will show for a Glenelg searcher before it shows
                  for someone in Salisbury, and that is how it should be. Relevance and prominence are where the work is:
                  the most specific primary category, service areas set honestly, real photos, a steady flow of reviews
                  with replies, and a website whose pages match what the listing claims.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  One honest note about us. FactoryJet has no Adelaide office, and we do not pretend otherwise. That does
                  not affect your map ranking at all, because the map depends on your address and your listing. It does
                  mean our own business will not appear in the Adelaide map pack, which is why we are clear about working
                  remotely rather than hiding it.
                </p></div>
                <div className="fact"><div className="sec">§04</div><p>
                  Below the map, the ordinary results for Adelaide searches are winnable with good pages. When we looked,
                  directories held only one to three of the ten results, and a Reddit thread of Adelaide people asking
                  for recommendations ranked on both the web design and the SEO searches. That tells you something useful:
                  buyers here trust word of mouth, so a site with checkable proof beats one with claims.
                </p></div>
                <div className="fact"><div className="sec">§05</div><div>
                  <div className="factlabel">Local SEO work that moves the map</div>
                  <ul className="trigrows">
                    <li><span className="m">Primary category and services</span><span className="n">the most specific one that fits</span><span className="t">Relevance</span></li>
                    <li><span className="m">Reviews asked for and answered</span><span className="n">a repeatable system</span><span className="t">Prominence</span></li>
                    <li><span className="m">Suburb and service pages</span><span className="n">matching what the listing says</span><span className="t">Relevance</span></li>
                    <li><span className="m">Where the searcher is standing</span><span className="n">nobody can change this</span><span className="t">Distance</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto"
                subject="A Jetty Road cafe owner in Glenelg checking his business on a phone map, with the beach and jetty at the end of the street">
                <img src="/images/au/adelaide/adelaide-glenelg.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="Over the shoulder of a Jetty Road café owner in Glenelg checking his business on a phone map, with the beach and the Glenelg jetty at the end of the street" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ DEMAND + WHERE WE WORK → prose/areas + demand panel, city-map slot ═══ */}
        <section className="section market" id="adelaide-demand">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What Adelaide actually searches</div>
              <h2>Adelaide web design and SEO demand, measured</h2>
            </div>
            <div className="au-split au-split-flush">
              <div>
                <p>
                  These are the monthly Google searches in Australia for the main Adelaide web design and SEO terms,
                  measured in September 2026. Google reports close variants with one shared figure, so the rows overlap
                  and should not be added together.
                </p>
                <p>
                  Two things stand out. First, SEO searches outnumber web design searches in Adelaide, which suggests
                  many businesses already have a site and want it found. Second, the smaller searches, such as SEO
                  consultant or local SEO in Adelaide, are the ones with the clearest intent and the weakest competition.
                  That is usually where a new site should start.
                </p>
                <p>
                  None of this matters if nobody searches for what you sell. We check the demand for your own services
                  in Adelaide before recommending search work, and we say so when it is too small.
                </p>
                <div className="city-areas city-areas-solo">
                  <div>
                    <div className="factlabel">Where we work in South Australia</div>
                    <ul className="city-list">
                      {SERVICE_AREAS.map((a) => (<li key={a}><span>{a}</span></li>))}
                    </ul>
                    <p className="city-areas-more">
                      Plus the Barossa, McLaren Vale, the Adelaide Hills and regional South Australia. All projects run
                      remotely in Australian business hours.
                    </p>
                    <VisualSlot page={PAGE_KEY} slot="city-map" kind="map" ratio="3:2"
                      subject="A plain map of metropolitan Adelaide, the Barossa, McLaren Vale and the Adelaide Hills with the listed areas marked as small dots; no office pin, because FactoryJet has no Adelaide office" />
                  </div>
                </div>
              </div>
              <div className="demand">
                <div className="demand-head"><span>Adelaide · Monthly search demand</span><b>DataForSEO</b></div>
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
          </div>
        </section>

        {/* ═══ COST DRIVERS (no prices) → ruled rows + scope panel ═══ */}
        <section className="section platforms" id="cost">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>What decides the cost of website design in Adelaide</h2>
              </div>
              <p>
                No price figures appear on this page on purpose. What an Adelaide project costs depends on how much repair
                the site needs and how much content already exists. You get yours in writing after the free review.
                Published market ranges are in our <a href="/blog/website-cost-australia-2026">website cost guide</a>{' '}
                and <a href="/blog/seo-cost-australia-2026">SEO cost guide</a>. Work usually takes one of four shapes.
              </p>
            </div>
            <div className="au-split au-split-flush">
              <div>
                <div className="platlist" role="list">
                  <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Free review.</h3></div><p className="plat-build">Site crawl, speed test, Google listing check and a look at the competition. Some businesses take the findings and do the work themselves, and that is fine.</p></div>
                  <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Website build.</h3></div><p className="plat-build">A fixed-scope design and build. Sites of up to five pages can have 7-day delivery once the content is ready.</p></div>
                  <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Search programme.</h3></div><p className="plat-build">Technical repair, service and suburb pages, Google listing and review system, reported against enquiries.</p></div>
                  <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Monthly support.</h3></div><p className="plat-build">Updates, security, small changes and a person who answers when something breaks. Monthly fixes and updates are covered by our <a href="/au/website-maintenance">website maintenance</a> plans.</p></div>
                </div>
                <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the scope</div>
                <ul className="trigrows">
                  <li><span className="m">Number of pages and templates</span><span className="t">Size</span></li>
                  <li><span className="m">Words and photos already written</span><span className="t">Content</span></li>
                  <li><span className="m">Bookings, store, CRM or logins</span><span className="t">Integrations</span></li>
                  <li><span className="m">Old pages to redirect</span><span className="t">Migration</span></li>
                  <li><span className="m">Search work alongside the build</span><span className="t">SEO</span></li>
                  <li><span className="m">First review and call</span><span className="t">Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING PAGES → agentdir + other cities ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">FactoryJet across Australia</div>
              <h2>Related services and the other cities we work in</h2>
              <p>
                Start at <a href="/au">FactoryJet Australia</a> for the full picture, or go straight to the
                service that fits. For a B2B site, our guide to{' '}
                <a href="/blog/b2b-web-design-trust-signals">B2B web design trust signals</a> goes deeper on
                what procurement readers look for.
              </p>
            </div>
            <ul className="agentdir-grid">
              {[
                { h: '/au', t: 'Web design Australia', d: 'Our national web design and development page: how we build, what you own, and the full service list.' },
                { h: '/au/seo', t: 'SEO services Australia', d: 'Technical SEO, content and local search for Australian businesses, reported against enquiries.' },
                { h: '/au/ai-seo', t: 'AI SEO', d: 'Get your business named in ChatGPT, Perplexity and Google AI answers.' },
                { h: '/au/shopify-development', t: 'Shopify development', d: 'Stores built for GST, Afterpay and Australian shipping, owned by you.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'B2B ordering, trade pricing and custom platforms for producers and wholesalers.' },
                { h: '/au/ai-agents', t: 'AI agents', d: 'Automation that works inside Xero, HubSpot and your other tools, with people approving what matters.' },
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
              <ul className="agentdir-grid">
                {[
                  { h: '/au/melbourne', t: 'Web design and SEO in Melbourne', d: 'Victoria' },
                  { h: '/au/brisbane', t: 'Web design and SEO in Brisbane', d: 'Queensland' },
                  { h: '/au/canberra', t: 'Web design and SEO in Canberra', d: 'Accessible sites for the ACT' },
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
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; items mapped from FAQS, the same array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading={`${FAQS.length} questions Adelaide businesses ask about web design and SEO`}
          intro="Each one comes from the People Also Ask questions Google shows Australian searchers. Several ask whether this work is worth paying for at all, and those are answered honestly rather than favourably."
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within one business day."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="sources">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs refs-claims">
              {CITATIONS.map((c) => (
                <div className="ref" key={c.id}>
                  <span className="ref-id">[{c.id}]</span>
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.source}: {c.title}</a>
                  <p>{c.claim}</p>
                </div>
              ))}
            </div>
            <p className="au-note">
              Search volumes: DataForSEO, Google Australia, September 2026. Competitor link counts: measured by FactoryJet in
              August 2026. Map pack, directory and AI Overview presence: Google Australia results, September 2026. On how
              long search changes take, see Google&rsquo;s <a href={STARTER.url} target="_blank" rel="noopener noreferrer">SEO Starter Guide</a>.
            </p>
          </div>
        </section>

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Next step</div>
              <h2>Find out what is actually holding your Adelaide site back</h2>
              <p>
                Send us the address. We will crawl the site, check your Google Business Profile, and count how many websites
                link to each business holding the Adelaide positions you want. You get the real size of the gap in writing,
                which in this city is usually smaller than people expect. No charge, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Get a free site review" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/seo">See our SEO services</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

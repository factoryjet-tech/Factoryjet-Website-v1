import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import { CANONICAL, CRUMBS, CITATIONS, SERVICE_AREAS } from './pageData';
import { FAQS, type Faq } from './faqData';
import '../au-service.css';

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

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const link = { textDecoration: 'underline' } as const;
const imgStyle = { width: '100%', height: 'auto', borderRadius: 12, display: 'block' } as const;

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

export default function AdelaidePage() {
  return (
    <>
      <script id="ld-au-adelaide" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />Adelaide, South Australia</span>
                  <span className="chip">Website design</span>
                  <span className="chip">SEO</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Adelaide is the easiest capital city in Australia to get found in, and we can show you why. Fewer
                  entrenched competitors hold the first page here than in Sydney, Melbourne or Perth, which changes what
                  is realistic and what it takes. We design and build fast websites for South Australian businesses and do
                  the search work that gets them found.
                </p>
                <p className="mt-4" style={{ maxWidth: 560 }}>
                  Senior engineers do the job, you own everything at the end, and if the numbers say the work is not
                  worth doing for you, we will tell you that instead of selling you a retainer.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />26 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="au" source="au_adelaide_hero_inline" submitLabel="Get my free review" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/adelaide/adelaide-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async"
                  alt="Over the shoulder of an Adelaide business owner reviewing her new website layout on a laptop with a web designer, East End sandstone shopfronts and the Adelaide Hills through the window"
                  style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What every Adelaide build includes</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Web design and search</div><div className="scorecard-note">and you can take just one</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Both</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Largest Contentful Paint target</div><div className="scorecard-note">Google&rsquo;s published pass mark</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Under 2.5s</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Site, domain and every account</div><div className="scorecard-note">from day one and after you leave</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Yours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does a web design and SEO agency in Adelaide actually do?</span>
              <p>
                A good Adelaide web designer builds a fast site that says what you do in the first screen, works on a
                phone, and connects to your Google Business Profile. The SEO side makes sure Google can read it, adds pages
                for what buyers search, and earns local links. Adelaide&rsquo;s first page is less entrenched than other
                capitals, so the same work goes further here.
              </p>
            </div>
            <div className="col-6040 mt-10" id="why-easier">
              <div>
                <span className="eyebrow">Answer first</span>
                <h2>Why Adelaide is easier to rank in than the other capitals</h2>
                <div className="stack mt-6">
                  <p>
                    Ranking in Google is decided largely by how many other websites reference yours, and Adelaide has the
                    least entrenched field of any Australian capital we measured. In August 2026 the weakest business
                    holding a first-page position for the main Adelaide web design search had links from 27 other
                    websites. The equivalent figure in Perth was 92 and in Sydney 101. That difference is the whole story:
                    the same amount of work buys a better result here.
                  </p>
                  <p>
                    The honest counterweight is that Adelaide searches are smaller. Fewer people search for a web designer
                    here than in Melbourne, so the total prize is lower even when your share of it is higher. For most
                    South Australian businesses that trade is worth taking, because a first page you can actually reach
                    beats a bigger one you cannot.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What we measured, and what it means for you</span>
                <ul className="scope-list yes-list">
                  <li>The weakest first-page business for the main Adelaide web design term had links from <b>27</b> other sites. Perth: 92. Sydney: 101.</li>
                  <li>On the main Adelaide SEO term the weakest first-page business had <b>37</b>. That is a realistic target, not an aspiration.</li>
                  <li>Directories hold at most <b>one to three</b> spots on any Adelaide first page we checked. There is no directory wall to climb.</li>
                  <li>Google showed <b>no AI Overview</b> on the Adelaide web design and SEO searches we tested, so a ranking still earns the click.</li>
                  <li>The trade-off is volume: smaller searches than Melbourne or Perth, so a lower ceiling that is easier to reach.</li>
                </ul>
                <p style={srcNote}>Link counts measured by FactoryJet, August 2026. Directory and AI Overview checks repeated September 2026, Google Australia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '1,300', t: 'monthly Google searches for website design in Adelaide and its close variants', s: 'DataForSEO, Sept 2026', u: '#adelaide-demand' },
                { v: '27', t: 'sites linking to the weakest first-page business for the main Adelaide web design term', s: 'FactoryJet, Aug 2026', u: '#why-easier' },
                { v: '2.5s', t: 'Google’s pass mark for Largest Contentful Paint, the main page speed measure', s: 'Google Search Central', u: CWV.url },
                { v: '3.1%', t: 'growth in actively trading Australian businesses across 2025–26, with every state growing', s: 'ABS', u: ABS.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.small }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {})} style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. LOCAL MARKET ═══ */}
        <section className="sec-lg dot-grid" id="adelaide-market">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The local market</span>
                <h2>South Australia sells differently, so the website has to work differently</h2>
                <div className="stack mt-6">
                  <p>
                    Australia held 2,814,778 actively trading businesses at 30 June 2026, up 85,130 or 3.1% across the
                    year, with every state and territory growing.<sup><a href="#sources" style={{ color: T.small }}>[1]</a></sup>{' '}
                    South Australian businesses lean towards sectors that sell to other businesses or to government rather
                    than straight to consumers.
                  </p>
                  <p>
                    That changes what a good Adelaide website looks like. A defence supplier and a cellar door both need a
                    site, and almost nothing about the two should be the same. The supplier is read by a procurement team
                    checking capability, certifications and track record, often months before anyone makes contact. The
                    cellar door needs to be found on a phone by someone deciding where to drive this afternoon. Selling
                    both a template is how agencies produce sites that technically work and commercially do not.
                  </p>
                  <p>
                    For B2B and government-facing businesses, the local listing matters much less than you would think,
                    and the depth of your service pages matters much more. We have seen Adelaide manufacturers spend months
                    on a Google Business Profile that was never going to bring them work, because their buyers were not
                    searching on a map. Getting that diagnosis right at the start saves more money than any efficiency
                    later in the build.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/adelaide/adelaide-manufacturing.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="A production engineer in an Adelaide northern suburbs machining workshop checks a product specification page on a tablet, with CNC machines and racked aluminium parts around him"
                  style={imgStyle} />
                <div style={{ padding: '12px 10px 6px' }}>
                  <p style={{ fontSize: 14 }}>
                    A manufacturer&rsquo;s buyer wants the specification, the tolerances and the accreditations on a real
                    page they can open on the floor, not a PDF in a downloads list.
                  </p>
                </div>
              </div>
            </div>
            <ul className="col-3 mt-12">
              {SECTORS.map((s) => (
                <li key={s.name} className="svc-card">
                  <h3>{s.name}</h3>
                  <p className="mt-4">{s.note}</p>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Source [1]: <a href={ABS.url} target="_blank" rel="noopener noreferrer nofollow" style={link}>{ABS.source}, {ABS.title}</a>, release dated 18 August 2026.
            </p>
          </div>
        </section>

        {/* ═══ 5. TWO AUDIENCES (cellar door) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-4060">
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/adelaide/adelaide-cellar-door.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="A Barossa Valley winemaker arranges unlabelled bottles on a stone cellar door counter while a photographer shoots them for the winery website, vineyards rolling behind"
                  style={imgStyle} />
              </div>
              <div>
                <span className="eyebrow">The one thing almost every Adelaide site gets wrong</span>
                <h2>Two audiences on one page, and neither is served well</h2>
                <div className="stack mt-6">
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
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. SERVICES BY BUYER ═══ */}
        <section className="sec-lg dot-grid" id="services">
          <div className="wrap">
            <div style={{ maxWidth: 800 }}>
              <span className="eyebrow">Adelaide web design and SEO services</span>
              <h2>The work depends on who is reading, not on which package you pick</h2>
              <p className="lead mt-4">
                Adelaide businesses divide fairly cleanly into two kinds, and the right approach for one is close to
                wasted on the other. Work out which you are before you buy anything from anybody. If you are genuinely
                both, you need two paths through the site rather than a compromise between them.
              </p>
            </div>

            <h3 id="b2b-adelaide" className="mt-12" style={{ fontSize: 22 }}>If you sell to businesses or to government</h3>
            <p className="mt-2" style={{ maxWidth: 760 }}>
              Defence suppliers, manufacturers, engineering firms, wholesalers and professional services. Your buyer is a
              committee working to a process, reading over weeks, and checking whether you can be verified. The website is
              a due diligence document that happens to look like marketing.
            </p>
            <ul className="col-2 mt-6">
              {B2B.map((it) => (
                <li key={it.title} className="card">
                  <h3 style={{ fontSize: 17 }}>{it.title}</h3>
                  <p className="mt-2">{it.body}</p>
                </li>
              ))}
            </ul>

            <div className="col-6040 mt-12">
              <div>
                <h3 id="local-adelaide" style={{ fontSize: 22 }}>If you sell locally to the public</h3>
                <p className="mt-2">
                  Trades, clinics, cellar doors, hospitality and retail. Your buyer is on a phone, deciding soon, and
                  comparing you against two or three others on a map. Speed, reviews and a complete listing matter more
                  than anything you could put in a brand statement.
                </p>
                <ul className="col-2 mt-6">
                  {LOCAL.map((it) => (
                    <li key={it.title} className="card">
                      <h3 style={{ fontSize: 16 }}>{it.title}</h3>
                      <p className="mt-2" style={{ fontSize: 14 }}>{it.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/adelaide/adelaide-tradie.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="An Adelaide electrician beside his van on a leafy Unley street of bluestone villas checks a new job enquiry on his phone"
                  style={imgStyle} />
                <div style={{ padding: '12px 10px 6px' }}>
                  <p style={{ fontSize: 14 }}>
                    A tradie in Unley or Norwood wins work from a phone search on the street. The first screen needs the
                    service, the suburbs covered and a way to call or book, nothing else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. LISTICLE: CHOOSING A WEB DESIGNER ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Before you hire anyone</span>
              <h2>How to choose a website designer in Adelaide: eight checks</h2>
              <p className="lead mt-4">
                The Adelaide first page for web design is a mix of solo designers, studios, digital agencies and a Reddit
                thread of people asking for recommendations. These checks work on all of them, including us.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {CHECKS.map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 8. PROCESS (<details>) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How an Adelaide project runs</span>
                <h2>Website design in seven steps, from free review to support after launch</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Open any step to see what happens and what you get at the end of it. Nothing is charged before you have
                  read the written scope.
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
                <img src="/images/au/adelaide/adelaide-workshop.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="A web strategist arranges blank sticky notes into a site map on a whiteboard in a Norwood office with a sandstone wall while two Adelaide business owners watch"
                  style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Step three is a site map on a whiteboard. Most of the decisions that make a small business site work
                    are made here, before any design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Find out how close you actually are to page one in Adelaide"
          sub="Send us your address. We crawl the site, check your Google Business Profile, and measure the businesses currently holding the positions you want, so you can see the real gap rather than a guess. No charge."
          label="Get a free site review"
          note="Bhavesh replies within one business day, Australian hours."
        />

        {/* ═══ 9. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 780 }}>DIY builder vs freelance web designer vs Adelaide agency vs FactoryJet</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Each option is right for someone. The table shows where each tends to be strong, so you can match the option
              to the job rather than to the sales pitch.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 760 }}>
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
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">Sites that must sell, rank and connect to other systems</span></td><td><span className="partial">Simple sites you will maintain yourself</span></td><td><span className="partial">Small brochure sites, clear brief</span></td><td><span className="partial">Brand, campaigns and media together</span></td></tr>
                  <tr><td className="feat">Who builds it</td><td className="fj"><span className="yes">Senior engineers</span></td><td><span className="no">You</span></td><td><span className="yes">The person you met</span></td><td><span className="partial">Varies by team</span></td></tr>
                  <tr><td className="feat">SEO and Google listing</td><td className="fj"><span className="yes">Same team, measured</span></td><td><span className="no">On you</span></td><td><span className="partial">Sometimes</span></td><td><span className="yes">Usually a separate retainer</span></td></tr>
                  <tr><td className="feat">Speed to Google&rsquo;s marks</td><td className="fj"><span className="yes">Built and tested against them</span></td><td><span className="partial">Depends on the theme</span></td><td><span className="partial">Varies</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Online store and integrations</td><td className="fj"><span className="yes">Shopify, B2B ordering, CRM</span></td><td><span className="partial">Built-in only</span></td><td><span className="partial">Depends on the person</span></td><td><span className="partial">Often subcontracted</span></td></tr>
                  <tr><td className="feat">Who owns the site and domain</td><td className="fj"><span className="yes">You, from day one</span></td><td><span className="partial">You, inside the platform</span></td><td><span className="partial">Check the contract</span></td><td><span className="partial">Check the contract</span></td></tr>
                  <tr><td className="feat">Support after launch</td><td className="fj"><span className="yes">The team that built it</span></td><td><span className="no">Platform help desk</span></td><td><span className="partial">If they are available</span></td><td><span className="yes">Usually, on retainer</span></td></tr>
                  <tr><td className="feat">Local office in Adelaide</td><td className="fj"><span className="no">No, remote in Australian hours</span></td><td><span className="partial">Not applicable</span></td><td><span className="yes">Often</span></td><td><span className="yes">Usually</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 10. WHICH OPTION FITS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Which option fits you</span>
              <h2>A quick check: what does your Adelaide business actually need?</h2>
              <p className="lead mt-4">Open the description that sounds most like you. The honest answer is not always us.</p>
            </div>
            <div className="card mt-8" style={{ padding: '4px 22px', maxWidth: 900 }}>
              <details>
                <summary>All our work comes from referrals and we are happy with that</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Keep it simple.</b> A complete Google Business Profile and a one-page site that confirms you are real may be all you need. Do not buy SEO you will not use.</p></div>
              </details>
              <details>
                <summary>We are a trade or clinic and want more calls from our suburbs</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Local SEO first, site second.</b> Fix the Google listing and reviews, then build service pages for the suburbs you cover. See our <a href="/au/seo" style={link}>SEO services in Australia</a>.</p></div>
              </details>
              <details>
                <summary>We sell to business or government and buyers check us before calling</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>A capability site.</b> Deep service pages, real project detail and documents as pages. This page is the right place; start with the free review.</p></div>
              </details>
              <details>
                <summary>We want to sell online, to the public or to trade customers</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>That is a store build.</b> See <a href="/au/shopify-development" style={link}>Shopify development in Australia</a> or, for B2B ordering and custom platforms, <a href="/au/ecommerce-development" style={link}>ecommerce development</a>.</p></div>
              </details>
              <details>
                <summary>We want ChatGPT and Google AI answers to mention our business</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>That is AI search visibility.</b> See our <a href="/au/ai-seo" style={link}>AI SEO service for Australian businesses</a>.</p></div>
              </details>
              <details>
                <summary>The website is fine; the problem is enquiries nobody answers in time</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Look at the phones and inbox, not the site.</b> See our <a href="/au/ai-receptionist" style={link}>AI receptionist</a> and <a href="/au/ai-agents" style={link}>AI agents</a> work for Australian businesses.</p></div>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ 11. GOOGLE MAPS AND LOCAL SEARCH ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Google Maps, reviews and local SEO in Adelaide</span>
                <h2>What decides the map results in Adelaide, and what we can and cannot change</h2>
                <div className="stack mt-6">
                  <p>
                    When we checked the main Adelaide web design and SEO searches in September 2026, every one showed a
                    Google map pack above the ordinary results. For a local business that pack is where most of the calls
                    come from. Google ranks it on three things: how relevant your listing is to the search, how close you
                    are to the person searching, and how prominent your business looks, which is mostly reviews and links.
                  </p>
                  <p>
                    Distance is the part nobody can change. A Glenelg café will show for a Glenelg searcher before it shows
                    for someone in Salisbury, and that is how it should be. Relevance and prominence are where the work is:
                    the most specific primary category, service areas set honestly, real photos, a steady flow of reviews
                    with replies, and a website whose pages match what the listing claims.
                  </p>
                  <p>
                    One honest note about us. FactoryJet has no Adelaide office, and we do not pretend otherwise. That does
                    not affect your map ranking at all, because the map depends on your address and your listing. It does
                    mean our own business will not appear in the Adelaide map pack, which is why we are clear about working
                    remotely rather than hiding it.
                  </p>
                  <p>
                    Below the map, the ordinary results for Adelaide searches are winnable with good pages. When we looked,
                    directories held only one to three of the ten results, and a Reddit thread of Adelaide people asking
                    for recommendations ranked on both the web design and the SEO searches. That tells you something useful:
                    buyers here trust word of mouth, so a site with checkable proof beats one with claims.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/adelaide/adelaide-glenelg.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="Over the shoulder of a Jetty Road café owner in Glenelg checking his business on a phone map, with the beach and the Glenelg jetty at the end of the street"
                  style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">Local SEO work that moves the map</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Primary category and services</div><div className="scorecard-note">the most specific one that fits</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Relevance</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Reviews asked for and answered</div><div className="scorecard-note">a repeatable system</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Prominence</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Suburb and service pages</div><div className="scorecard-note">matching what the listing says</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Relevance</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Where the searcher is standing</div><div className="scorecard-note">nobody can change this</div></div><div className="scorecard-val" style={{ color: T.small, fontSize: 14 }}>Distance</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. DEMAND + WHERE WE WORK ═══ */}
        <section className="sec-lg dot-grid" id="adelaide-demand">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What Adelaide actually searches</span>
                <h2>Adelaide web design and SEO demand, measured</h2>
                <div className="stack mt-6">
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
                </div>
                <span className="eyebrow mt-8">Where we work in South Australia</span>
                <div className="flex-wrap">
                  {SERVICE_AREAS.map((a) => <span key={a} className="chip">{a}</span>)}
                </div>
                <p className="mt-4" style={{ fontSize: 14 }}>
                  Plus the Barossa, McLaren Vale, the Adelaide Hills and regional South Australia. All projects run
                  remotely in Australian business hours.
                </p>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>Adelaide · Monthly search demand</span>
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

        {/* ═══ 13. COST DRIVERS (no prices) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What decides the cost of website design in Adelaide</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  No price figures appear on this page on purpose. What an Adelaide project costs depends on how much repair
                  the site needs and how much content already exists. You get yours in writing after the free review.
                  Published market ranges are in our <a href="/blog/website-cost-australia-2026" style={link}>website cost guide</a>{' '}
                  and <a href="/blog/seo-cost-australia-2026" style={link}>SEO cost guide</a>. Work usually takes one of four shapes.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Free review.</b> Site crawl, speed test, Google listing check and a look at the competition. Some businesses take the findings and do the work themselves, and that is fine.</li>
                  <li><b>Website build.</b> A fixed-scope design and build. Sites of up to five pages can have 7-day delivery once the content is ready.</li>
                  <li><b>Search programme.</b> Technical repair, service and suburb pages, Google listing and review system, reported against enquiries.</li>
                  <li><b>Monthly support.</b> Updates, security, small changes and a person who answers when something breaks. Monthly fixes and updates are covered by our <a href="/au/website-maintenance" style={link}>website maintenance</a> plans.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Number of pages and templates</div><div className="scorecard-val" style={{ fontSize: 14 }}>Size</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Words and photos already written</div><div className="scorecard-val" style={{ fontSize: 14 }}>Content</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Bookings, store, CRM or logins</div><div className="scorecard-val" style={{ fontSize: 14 }}>Integrations</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Old pages to redirect</div><div className="scorecard-val" style={{ fontSize: 14 }}>Migration</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Search work alongside the build</div><div className="scorecard-val" style={{ fontSize: 14 }}>SEO</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">First review and call</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. SIBLING PAGES (hover cards) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">FactoryJet across Australia</span>
              <h2>Related services and the other cities we work in</h2>
              <p className="lead mt-4">
                Start at <a href="/au" style={link}>FactoryJet Australia</a> for the full picture, or go straight to the
                service that fits. For a B2B site, our guide to{' '}
                <a href="/blog/b2b-web-design-trust-signals" style={link}>B2B web design trust signals</a> goes deeper on
                what procurement readers look for.
              </p>
            </div>
            <ul className="col-3 mt-10">
              {[
                { h: '/au', t: 'Web design Australia', d: 'Our national web design and development page: how we build, what you own, and the full service list.' },
                { h: '/au/seo', t: 'SEO services Australia', d: 'Technical SEO, content and local search for Australian businesses, reported against enquiries.' },
                { h: '/au/ai-seo', t: 'AI SEO', d: 'Get your business named in ChatGPT, Perplexity and Google AI answers.' },
                { h: '/au/shopify-development', t: 'Shopify development', d: 'Stores built for GST, Afterpay and Australian shipping, owned by you.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'B2B ordering, trade pricing and custom platforms for producers and wholesalers.' },
                { h: '/au/ai-agents', t: 'AI agents', d: 'Automation that works inside Xero, HubSpot and your other tools, with people approving what matters.' },
              ].map((c) => (
                <li key={c.h}>
                  <a href={c.h} className="svc-card" style={{ display: 'block', height: '100%' }}>
                    <h3 style={{ fontSize: 17 }}>{c.t} <span aria-hidden="true" style={{ color: T.small }}>&rarr;</span></h3>
                    <p style={{ marginTop: 8, fontSize: 14 }}>{c.d}</p>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="col-3 mt-6">
              {[
                { h: '/au/melbourne', t: 'Web design and SEO in Melbourne', d: 'Victoria' },
                { h: '/au/brisbane', t: 'Web design and SEO in Brisbane', d: 'Queensland' },
                { h: '/au/canberra', t: 'Web design and SEO in Canberra', d: 'Accessible sites for the ACT' },
              ].map((c) => (
                <li key={c.h}>
                  <a href={c.h} className="svc-card" style={{ display: 'block', height: '100%', padding: 22 }}>
                    <h3 style={{ fontSize: 16 }}>{c.t} <span aria-hidden="true" style={{ color: T.small }}>&rarr;</span></h3>
                    <p style={{ marginTop: 4, fontSize: 13.5 }}>{c.d}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 15. FAQ ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>{FAQS.length} questions Adelaide businesses ask about web design and SEO</h2>
              <p className="mt-4" style={{ maxWidth: 680, margin: '16px auto 0' }}>
                Each one comes from the People Also Ask questions Google shows Australian searchers. Several ask whether
                this work is worth paying for at all, and those are answered honestly rather than favourably.
              </p>
            </div>
            <nav className="faq-pill-nav" aria-label="FAQ topics">
              {TOPIC_ORDER.map((t) => (
                <a key={t} href={`#faq-${topicKey(t)}`}>{t}<span className="pill-count">{FAQS.filter((f) => f.topic === t).length}</span></a>
              ))}
            </nav>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {TOPIC_ORDER.map((t) => (
                    <a key={t} href={`#faq-${topicKey(t)}`}>
                      {t}
                      <span className="faq-nav-count">{FAQS.filter((f) => f.topic === t).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="au" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within one business day.</p>
                </div>
              </aside>

              <div>
                {TOPIC_ORDER.map((t) => (
                  <div key={t} id={`faq-${topicKey(t)}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{t}</p>
                    </div>
                    <ul className="faq-list" style={{ listStyle: 'none' }}>{FAQS.filter((f) => f.topic === t).map((f) => (
                      <li key={f.q}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.q}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.a}</p>{f.links ? <p style={{ marginTop: 8 }}>{f.links.map((l) => <a key={l.href} href={l.href} style={{ ...link, marginRight: 16 }}>{l.label}</a>)}</p> : null}</div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 16. SOURCES ═══ */}
        <section className="sec" id="sources" style={{ borderTop: `1px solid ${T.n200}` }}>
          <div className="wrap">
            <span className="eyebrow">Sources</span>
            <ol style={{ listStyle: 'none', maxWidth: 860 }}>
              {CITATIONS.map((c) => (
                <li key={c.id} style={{ display: 'flex', gap: 12, marginTop: 14 }}>
                  <span style={{ fontFamily: T.fm, fontSize: 12, fontWeight: 600, color: T.small }}>[{c.id}]</span>
                  <div>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ ...link, fontWeight: 600, color: T.ink, fontSize: 14.5 }}>{c.source}: {c.title}</a>
                    <p style={{ fontSize: 13.5, marginTop: 4 }}>{c.claim}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p style={srcNote}>
              Search volumes: DataForSEO, Google Australia, September 2026. Competitor link counts: measured by FactoryJet in
              August 2026. Map pack, directory and AI Overview presence: Google Australia results, September 2026. On how
              long search changes take, see Google&rsquo;s <a href={STARTER.url} target="_blank" rel="noopener noreferrer" style={link}>SEO Starter Guide</a>.
            </p>
          </div>
        </section>

        {/* ═══ 17. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 680 }}>
            <span className="eyebrow">Next step</span>
            <h2>Find out what is actually holding your Adelaide site back</h2>
            <p className="mt-4">
              Send us the address. We will crawl the site, check your Google Business Profile, and count how many websites
              link to each business holding the Adelaide positions you want. You get the real size of the gap in writing,
              which in this city is usually smaller than people expect. No charge, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get a free site review" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/au/seo" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See our SEO services</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

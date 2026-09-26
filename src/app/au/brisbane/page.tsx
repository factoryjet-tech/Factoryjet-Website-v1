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
   web design brisbane 2,400 (same cluster: website design brisbane, web design company
   brisbane, web developer brisbane) · seo agency brisbane 1,900 · seo services brisbane
   720 · seo consultant / expert brisbane 590 · brisbane web designer 480 · web design
   agency brisbane 390 · local seo brisbane 390. Title and H1 intent kept from the
   previous version of this page. */
const UPDATED = '2026-09-25';
const TITLE = 'Web Design & SEO Brisbane | Fast, Findable Sites | FactoryJet';
const H1 = 'Web design and SEO for Brisbane businesses';
const DESCRIPTION =
  'Brisbane web design and SEO for businesses that need enquiries. Fast sites by senior engineers, Google Business Profile done properly, and you own it all.';

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

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const imgStyle = { width: '100%', height: 'auto', borderRadius: 12, display: 'block' } as const;

export default function BrisbanePage() {
  return (
    <>
      <script id="ld-au-brisbane" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />Brisbane, Queensland</span>
                  <span className="chip">Web Design</span>
                  <span className="chip">SEO &amp; Local Search</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Web design in Brisbane for businesses with a real sales process behind the website. We build fast
                  websites for Brisbane companies and get them found in Google and Google Maps. Senior engineers do the
                  work, you own everything at the end, and we tell you which parts of a search plan pay back in weeks
                  and which take quarters.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />25 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="au" source="au_brisbane_hero_inline" submitLabel="Get my free site review" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/brisbane/brisbane-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A Brisbane web designer and a business owner review a new homepage design on a monitor in a Fortitude Valley office with timber louvres, palms and the Story Bridge outside" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What you get, in short</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">7-day delivery</div><div className="scorecard-note">websites up to 5 pages</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>7 days</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Largest Contentful Paint target</div><div className="scorecard-note">on every build, measured</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Under 2.5s</div>
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
              <span className="lab">What does a web design and SEO agency in Brisbane actually do?</span>
              <p>
                A web design and SEO agency in Brisbane builds a site that loads quickly and explains what you sell,
                then gets it found by people searching in this city. That is three jobs done in order: fix the
                technical faults that stop Google reading the site, build pages that answer what Brisbane buyers type
                and connect them to a correct Google Business Profile, then earn mentions from real Queensland sites.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              FactoryJet does all three and reports on enquiries rather than rankings. The order matters more than most
              agencies admit. Publishing content on a site Google struggles to crawl is money spent on pages nobody will
              be shown. Chasing links before the map listing is right is effort spent on the slowest lever first. So we
              sequence the work by what pays back soonest, and say out loud which parts take a couple of quarters.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '2,400', t: 'monthly searches for “web design brisbane” and its close variants', s: 'DataForSEO, Sep 2026', u: '' },
                { v: '19,244', t: 'more businesses in Queensland across 2025–26', s: 'ABS, Aug 2026', u: SRC_ABS.url },
                { v: '22', t: 'websites linking to the weakest page-one site for “brisbane web designer”', s: 'Google AU, 24 Sep 2026', u: '' },
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

        {/* ═══ 4. FIRST NINETY DAYS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What happens first</span>
                <h2>Web design and SEO in Brisbane: six things in the first ninety days</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Whether you start with a new site or with search repair, these are the six things a good Brisbane
                  engagement delivers in its first quarter. Use the list to compare any agency, including us.
                </p>
                <ol className="stack mt-8">
                  {FIRST_NINETY.map((item, i) => (
                    <li key={item} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{String(i + 1).padStart(2, '0')}</span>
                      <p style={{ margin: 0 }}>{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Brisbane web design and SEO at a glance</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Where we work</div><div className="scorecard-note">Brisbane City to Ipswich, Logan, Redlands, Moreton Bay</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>SEQ</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Who it is for</div><div className="scorecard-note">trades, professional services, clinics, B2B, retail</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>SMBs</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">How it starts</div><div className="scorecard-note">site and Google listing review, then a written scope</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">How we meet</div><div className="scorecard-note">video calls in Queensland business hours</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Remote</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">What we will not do</div><div className="scorecard-note">buy links, publish thin suburb pages, hold your domain</div></div><div className="scorecard-val" style={{ color: T.small, fontSize: 14 }}>Never</div></div>
                <p style={{ fontSize: 13, color: T.n400, marginTop: 12 }}>
                  No price figures appear on this page on purpose. Brisbane quotes vary by how much repair a site needs
                  and how much content already exists. You get yours in writing after the free review. Our{' '}
                  <a href="/blog/website-cost-australia-2026" style={srcLink}>Australian website cost guide</a> shows the
                  published market ranges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. BRISBANE MARKET + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The Brisbane search market</span>
                <h2>What competing for website design in Brisbane actually looks like</h2>
                <div className="stack mt-6">
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
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_ABS.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC_ABS.source}, {SRC_ABS.title}</a>;
                  {' '}search volumes and page-one checks from DataForSEO, Google Australia, 24 September 2026.
                </p>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>Brisbane · Monthly Searches</span>
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

            <h3 className="mt-12" style={{ maxWidth: 760 }}>How Brisbane compares with other Australian cities</h3>
            <p className="mt-4" style={{ maxWidth: 760 }}>
              Monthly searches that name each city, across the web design, SEO and ecommerce terms we track. Brisbane
              has fewer searches than Sydney or Melbourne, and far fewer agencies with deep link profiles competing for
              them. Add the Gold Coast next door and South East Queensland is a sizeable market in its own right.
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
                  </tr>
                </thead>
                <tbody>
                  {CITIES.map((c) => (
                    <tr key={c.city}>
                      <td className="feat">{c.href ? <a href={c.href} style={srcLink}>{c.city}</a> : c.city}{c.city === 'Brisbane' ? ' (this page)' : ''}</td>
                      <td>{c.total}</td>
                      <td className="fj">{c.web}</td>
                      <td>{c.seo}</td>
                      <td>{c.ecom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>DataForSEO, Google Australia, keyword volumes fetched 24 September 2026, close variants collapsed. City totals group terms by topic, so they differ from single-keyword volumes above.</p>
          </div>
        </section>

        {/* ═══ 6. WHO WE BUILD FOR ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who we build for in Brisbane</span>
                <h2>Small business website design for Brisbane and South East Queensland</h2>
                <p className="lead mt-4" style={{ maxWidth: 580 }}>
                  Most of our Brisbane work is for businesses whose enquiries come from people searching rather than
                  walking past a shopfront. Every industry buys differently, so the site has to match how your customers
                  decide.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/brisbane/brisbane-cafe.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A cafe owner at a riverside cafe in South Bank, Brisbane, checks his cafe’s listing on his phone, with the Brisbane River, the city skyline and the Wheel of Brisbane behind him" style={imgStyle} />
                <div style={{ padding: '12px 10px 6px' }}>
                  <p style={{ fontSize: 14 }}>
                    For a South Bank cafe, discovery happens in Google Maps on a phone. Opening hours, the menu and
                    reviews do more work than the homepage.
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
              Areas we work across: {SERVICE_AREAS.join(', ')}, and the rest of Queensland.
            </p>
          </div>
        </section>

        {/* ═══ 7. WEB DESIGN ═══ */}
        <section className="sec-lg" id="web-design-brisbane">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Web design Brisbane</span>
              <h2>Website design in Brisbane: five things every site we build gets</h2>
              <p className="lead mt-4">
                We design and build the site, write or rework the content with you, and launch it. Websites of up to
                five pages qualify for our 7-day delivery from an approved scope. Larger builds with bookings, customer
                logins or integrations take longer, and we give you a date at scope rather than discovering it later.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {WEB_DESIGN.map((s, i) => (
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

        {/* ═══ 8. INTEGRATIONS + CLINIC ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/brisbane/brisbane-clinic.webp" width={1200} height={800} loading="lazy" decoding="async" alt="The receptionist at a dental clinic in Chermside, Brisbane, checks the booking system while a mother and daughter wait in a bright room with subtropical greenery outside" style={imgStyle} />
              </div>
              <div>
                <span className="eyebrow">Beyond the brochure site</span>
                <h2>A website that works with the systems behind the front desk</h2>
                <div className="stack mt-6">
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
                    fifty times a week or copying orders between systems, look at <a href="/au/ai-agents" style={srcLink}>AI agents built into your existing tools</a>.
                    If missed calls are the problem, see our <a href="/au/ai-receptionist" style={srcLink}>AI receptionist for Australian businesses</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="See what is actually holding your Brisbane site back"
          sub="Send us the address and we will crawl the site, check your Google Business Profile and read your own Search Console data, then send a short written summary of the three biggest problems. No charge, and no obligation to go further."
          label="Get a free site review"
          note="Bhavesh replies within one business day, Australian hours."
        />

        {/* ═══ 9. SEO ═══ */}
        <section className="sec-lg" id="seo-brisbane">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">SEO Brisbane</span>
                <h2>SEO and local search in Brisbane, in the order that pays back</h2>
                <p className="lead mt-4" style={{ maxWidth: 580 }}>
                  About 1,900 Brisbane searches a month are for an SEO agency and another 390 for local SEO. Google
                  itself says some changes take effect in a few hours and others take several months, and advises
                  waiting a few weeks before judging a change. We plan against that reality rather than a launch date.
                  See <a href="/blog/seo-cost-australia-2026#seo-cost-by-city" style={srcLink}>SEO cost by city</a> for
                  published Australian price ranges.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/brisbane/brisbane-tradie.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An electrician on the front steps of a white Queenslander house with a jacaranda in flower checks a new job enquiry on his phone" style={imgStyle} />
                <div style={{ padding: '12px 10px 6px' }}>
                  <p style={{ fontSize: 14 }}>
                    A Brisbane sparky gets most new work from the Maps pack on a customer’s phone. A complete Business
                    Profile with honest service areas is the first job, not the last. More on{' '}
                    <a href="/au/websites-for-tradies" style={srcLink}>websites and local SEO for tradies</a>.
                  </p>
                </div>
              </div>
            </div>
            <ul className="col-3 mt-12">
              {SEO_WORK.map((a) => (
                <li key={a.t} className="card">
                  <h3 style={{ fontSize: 17 }}>{a.t}</h3>
                  <p className="mt-4" style={{ fontSize: 14.5 }}>{a.d}</p>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Timing guidance: <a href={SRC_SEO_GUIDE.url} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{SRC_SEO_GUIDE.source}, {SRC_SEO_GUIDE.title}</a>.
              {' '}For the full service, see <a href="/au/seo" style={srcLink}>SEO services in Australia</a>; for visibility in ChatGPT and Google AI answers, see <a href="/au/ai-seo" style={srcLink}>AI SEO for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ 10. PROCESS (<details>) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How a Brisbane project runs</span>
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
                <p className="mt-4" style={{ fontSize: 14 }}>
                  Monthly fixes and updates are covered by our <a href="/au/website-maintenance" style={srcLink}>website maintenance</a> plans.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/brisbane/brisbane-planning.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A web designer and a business owner plan a website sitemap with pastel cards pinned to a wall in a West End Brisbane studio with louvred windows and ceiling fans" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Step three is the sitemap: every page named after something Brisbane buyers search, agreed with you
                    before anyone opens a design tool.
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
            <h2 style={{ maxWidth: 760 }}>FactoryJet vs a freelancer vs a traditional Brisbane web design agency</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              The last two rows are the ones worth reading. Every comparison table on the internet has the author
              winning every line, which is why nobody believes them.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Freelance web designer</th>
                    <th>Traditional agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Who writes the code</td><td className="fj"><span className="yes">Senior engineers, the same people you speak to</span></td><td><span className="yes">The freelancer</span></td><td><span className="partial">Often a junior team or a subcontractor you never meet</span></td></tr>
                  <tr><td className="feat">Time to launch</td><td className="fj"><span className="yes">7-day delivery for websites up to 5 pages</span></td><td><span className="partial">Depends on their workload</span></td><td><span className="partial">Often several weeks for a comparable site</span></td></tr>
                  <tr><td className="feat">SEO and Google Business Profile</td><td className="fj"><span className="yes">Built into the project</span></td><td><span className="partial">Sometimes basic</span></td><td><span className="yes">Usually, often a separate retainer</span></td></tr>
                  <tr><td className="feat">Ownership</td><td className="fj"><span className="yes">Domain, site, content and every account in your name from day one</span></td><td><span className="partial">Check the contract</span></td><td><span className="partial">Frequently held by the agency until exit</span></td></tr>
                  <tr><td className="feat">Ongoing fee to stay online</td><td className="fj"><span className="yes">None. Hosting and domain only, and you can move them</span></td><td><span className="partial">Varies</span></td><td><span className="partial">Sometimes a monthly fee keeps the site published</span></td></tr>
                  <tr><td className="feat">Link building</td><td className="fj"><span className="yes">Earned only, never bought</span></td><td><span className="partial">Rarely offered</span></td><td><span className="partial">Varies. Paid placement is still sold in this market</span></td></tr>
                  <tr><td className="feat">Where we are the wrong choice</td><td className="fj"><span className="no">Brand campaigns, TV, print or a full marketing department</span></td><td><span className="partial">Not offered either</span></td><td><span className="yes">A full-service agency is genuinely better here</span></td></tr>
                  <tr><td className="feat">Also the wrong choice if</td><td className="fj"><span className="no">You want a Brisbane office to visit weekly. We work remotely</span></td><td><span className="partial">Sometimes local</span></td><td><span className="yes">A local studio with an office wins, plainly</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 12. SIX QUESTIONS + WHO RANKS ═══ */}
        <section className="sec-lg dot-grid" id="choosing">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Before you choose anyone</span>
              <h2>Six questions worth asking every Brisbane web design agency, including us</h2>
              <p className="lead mt-4">
                These questions separate agencies quickly. We have written down why each one matters so you can use
                them on us as well as everyone else. If our answers do not satisfy you, that is useful information too.
              </p>
            </div>
            <ul className="col-3 mt-10">
              {QUESTIONS.map((item, i) => (
                <li key={item.q} className="card">
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 14, color: T.small }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 style={{ fontSize: 17, marginTop: 6 }}>{item.q}</h3>
                  <p className="mt-4" style={{ fontSize: 14.5 }}>{item.why}</p>
                </li>
              ))}
            </ul>
            <div className="card card-top-orange mt-10" style={{ maxWidth: 900 }}>
              <h3>Who Google showed on page one</h3>
              <p className="mt-4" style={{ fontSize: 14.5 }}>
                For “web design companies brisbane” on 24 September 2026, with directories removed, page one held these
                sites. It is a record of the results page, not a recommendation, and a sensible place to start your own
                shortlist before you ask the six questions.
              </p>
              <ul className="flex-wrap mt-4" style={{ listStyle: 'none', padding: 0 }}>
                {PAGE_ONE.map((d) => (<li key={d} className="chip">{d}</li>))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ 13. ECOMMERCE / B2B ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Ecommerce website design Brisbane</span>
                <h2>When the website has to take orders, not just enquiries</h2>
                <div className="stack mt-6">
                  <p>
                    About 260 Brisbane searches a month are for ecommerce website design, and some of the most valuable
                    buyers behind them are wholesalers and manufacturers around the TradeCoast, Ipswich and Logan who
                    want trade customers to reorder online.
                  </p>
                  <p>
                    That is a different build from a brochure site. Stock has to sync, GST has to be right, trade prices
                    must show only to logged-in accounts, shipping has to work with Australia Post and couriers, and
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
                <img src="/images/au/brisbane/brisbane-industrial.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A sales manager shows a trade buyer a tablet beside pallets of plain cartons in a bright distribution warehouse near the Brisbane TradeCoast" style={imgStyle} />
                <div style={{ padding: '12px 10px 6px' }}>
                  <p style={{ fontSize: 14 }}>
                    Near the TradeCoast, the website is an ordering system. It has to agree with the pallets on the floor
                    and the invoice in the accounts.
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
              <h2>A quick check: what does your Brisbane business actually need?</h2>
              <p className="lead mt-4">Open the line that sounds most like you. The honest answer is not always this page.</p>
            </div>
            <div className="card mt-8" style={{ padding: '4px 22px', maxWidth: 900 }}>
              <details>
                <summary>We need a new website, up to five pages, and our content is mostly ready</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>This page is the right place.</b> Websites up to 5 pages qualify for our 7-day delivery from approved scope. Start with the free review so the scope is right.</p></div>
              </details>
              <details>
                <summary>Our site is fine, but we do not show up in Google or on Maps</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>You need SEO, not a redesign.</b> Start with a technical audit and your Google Business Profile. See our <a href="/au/seo" style={srcLink}>SEO services for Australian businesses</a>.</p></div>
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
                <summary>We miss calls and after-hours enquiries</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Look at a voice agent.</b> See our <a href="/au/ai-receptionist" style={srcLink}>AI receptionist</a>, which answers, qualifies and books calls into your calendar or job system.</p></div>
              </details>
              <details>
                <summary>Our real problem is admin: enquiries, orders and invoices copied by hand</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Look at automation.</b> See <a href="/au/ai-agents" style={srcLink}>AI agents built into Xero, HubSpot, ServiceM8 and your other tools</a>.</p></div>
              </details>
              <details>
                <summary>We want a brand campaign, TV or print, or an office we can visit weekly</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Not us.</b> A Brisbane full-service agency or local studio is the better fit, and we would say so on a call.</p></div>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ 15. SIBLINGS + CITIES (hover cards) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">FactoryJet Australia</span>
              <h2>More services for Brisbane businesses</h2>
            </div>
            <ul className="col-3 mt-10" style={{ gap: 16 }}>
              {[
                { h: '/au', t: 'FactoryJet Australia', d: 'Web design, ecommerce, AI agents and AI search for Australian businesses, in one place.' },
                { h: '/au/seo', t: 'SEO services Australia', d: 'Technical repair, content and local search, reported on enquiries rather than rankings.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Online stores and B2B ordering connected to stock, shipping, GST and accounts.' },
                { h: '/au/shopify-development', t: 'Shopify development', d: 'Shopify builds, migrations and apps from a registered Shopify Partner.' },
                { h: '/au/ai-agents', t: 'AI agents & automation', d: 'Custom AI agents inside Xero, HubSpot and ServiceM8, with human approval built in.' },
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
              <a className="city-pill" href="/au/melbourne">Web design Melbourne</a>
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
              <h2>Web design and SEO in Brisbane: questions businesses actually ask</h2>
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
                        <div className="faq-ans"><p>{f.answer}</p>{f.links ? <p style={{ marginTop: 8 }}>{f.links.map((l) => <a key={l.href} href={l.href} style={{ ...srcLink, marginRight: 16 }}>{l.label}</a>)}</p> : null}</div>
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
            <h2>Find out what is actually holding your Brisbane site back</h2>
            <p className="mt-4">
              Send us the address. We crawl the site, check your Google Business Profile and read your own Search
              Console data, then send back a short written summary of the three biggest problems and what each one is
              costing you. No charge, and no obligation to go any further.
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

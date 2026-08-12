import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import HeroInlineForm from '@/components/HeroInlineForm';
import './phoenix-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /phoenix/seo :: Phoenix local-SEO city page. Built 2026-08-12.
   Layout: "Valley Grid", distinct from Austin's glass depth stack. Phoenix is a
   flat street grid across a valley and Google weights distance in local ranking,
   so the page argues one thing: a Phoenix ranking is really a dozen neighborhood
   rankings, and you win them one square at a time.

   Research backing (pipeline/research/briefs/phoenix-seo.json, 2026-08-12):
   - target "seo agency phoenix", 1,300/mo, KD 24, winning page type = service page
   - no AI Overview rendered on this query when the live SERP was pulled
   - 31 live People-Also-Ask questions, 21 of which became the FAQ below
   - organic top 12 named honestly in the comparison table

   Rules held: no em dashes, no currency figures anywhere, no invented clients or
   case-study numbers, no ranking guarantees, hero never dark, exactly one dark
   section, FAQPage schema derived from the SAME array the page renders, every
   schema const inside the single jsonLd graph that reaches the script tag.
   External citations were curl-verified on 2026-08-12 for HTTP 200 and for the
   claim being present on the page.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/phoenix/seo';
const MODIFIED = '2026-08-12';

const SRC_GBP = 'https://support.google.com/business/answer/7091';
const SRC_GOOGLE_SEO = 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo';
const SRC_BRIGHTLOCAL = 'https://www.brightlocal.com/research/local-consumer-review-survey/';

export const metadata: Metadata = {
  title: 'SEO Agency Phoenix AZ | Local SEO Across the Valley | FactoryJet',
  description:
    'FactoryJet is an SEO agency in Phoenix built for a metro that sprawls. Local SEO, technical SEO and AI search visibility across Phoenix, Scottsdale, Tempe, Chandler and Mesa. Free audit, month to month, no lock-in.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'SEO Agency Phoenix AZ | Local SEO Across the Valley | FactoryJet',
    description:
      'An SEO agency in Phoenix built for a metro that sprawls. Local SEO, technical SEO and AI search visibility across Phoenix, Scottsdale, Tempe, Chandler and Mesa. Free audit, month to month.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

/* Hero scene. Real Valley employment centers, not decoration. */
const BOARD: { name: string; note: string; on?: boolean }[] = [
  { name: 'Downtown Phoenix', note: 'law + civic' },
  { name: 'Camelback Corridor', note: 'finance + medical' },
  { name: 'Old Town Scottsdale', note: 'resorts + retail', on: true },
  { name: 'Tempe and ASU', note: 'students + software' },
  { name: 'Chandler Price Corridor', note: 'chips + B2B' },
  { name: 'Mesa and Gilbert', note: 'families + trades' },
  { name: 'Glendale Westgate', note: 'sport + hospitality' },
  { name: 'North Phoenix', note: 'semiconductor build' },
];

const FACTS: { v: string; k: string }[] = [
  { v: 'No contract', k: 'month to month, cancel any time' },
  { v: 'Free audit', k: 'yours to keep, hired or not' },
  { v: '7-day kickoff', k: 'not six weeks of onboarding' },
  { v: 'Valley wide', k: 'Phoenix, Scottsdale, Tempe, Chandler, Mesa' },
];

/* Every number here is sourced, and each source was opened on 2026-08-12. */
const MOSAIC: { n: string; t: React.ReactNode; src: React.ReactNode }[] = [
  {
    n: '3',
    t: <>factors decide local results, in Google&apos;s own words: <b>relevance, distance and prominence</b>. Two of the three are yours to change.</>,
    src: <a href={SRC_GBP} rel="noopener">Google Business Profile Help</a>,
  },
  {
    n: '1,300',
    t: <>searches a month for <b>seo agency phoenix</b> alone, at a difficulty score of 24. Demand is not what is stopping you.</>,
    src: <>DataForSEO, August 2026</>,
  },
  {
    n: '4 of 12',
    t: <>results on page one for that search are <b>directories and roundups</b>, not agencies. Getting listed on them is part of the job.</>,
    src: <>Live Google results, August 2026</>,
  },
  {
    n: '97%',
    t: <>of people say they use <b>reviews</b> to guide what they buy. It is the cheapest ranking work most Phoenix businesses never do.</>,
    src: <a href={SRC_BRIGHTLOCAL} rel="noopener">BrightLocal Local Consumer Review Survey 2026</a>,
  },
];

/* What Google itself shows alongside the head term. Straight from the live SERP. */
const RELATED = [
  'best seo agency phoenix',
  'seo agency phoenix reviews',
  'scottsdale seo company',
  'marketing agencies in phoenix',
  'tucson seo company',
  'seo agency dallas',
  'rising phoenix seo',
  'complete seo',
];

/* Real Valley corridors, written for people who have actually driven them. */
const DISTRICTS: { q: string; kd: string; h: string; p: string }[] = [
  {
    q: 'personal injury lawyer phoenix',
    kd: 'Downtown',
    h: 'Downtown, Roosevelt Row and the Warehouse District',
    p: 'Law firms, government contractors, accountants and the restaurant trade around Washington and Roosevelt. Almost all of it is searched on a phone, and the caller picks one of the first three profiles. Your category and review count decide that.',
  },
  {
    q: 'wealth manager near me phoenix',
    kd: 'Camelback',
    h: 'Camelback Corridor, Biltmore and Arcadia',
    p: 'The professional strip around 24th Street and Camelback: wealth management, boutique law, specialist medicine. High value per client, low volume per term, which flips the strategy. You want to be the one credible result for forty specific searches.',
  },
  {
    q: 'med spa old town scottsdale',
    kd: 'Scottsdale',
    h: 'Old Town, the Airpark and North Scottsdale',
    p: 'Resorts, med spas, cosmetic dentistry and nightlife in Old Town, plus one of the largest employment centers in the metro at the Airpark. Discovery is visual and fast: photos, correct hours and new reviews beat a long service page.',
  },
  {
    q: 'technical seo tempe az',
    kd: 'Tempe',
    h: 'Tempe, Mill Avenue and the ASU campus',
    p: 'A student and young professional market layered on a serious employer base around Tempe Town Lake. These buyers skip ads by reflex and read your site the way they read documentation. Architecture and page speed do the work.',
  },
  {
    q: 'b2b supplier chandler az',
    kd: 'Chandler',
    h: 'The Price Corridor, Ocotillo and Gilbert',
    p: 'Chandler runs on semiconductors, aerospace and their supplier base. Gilbert next door is family services and Heritage District restaurants. One needs capability pages a procurement team can read, the other a profile that looks alive on Friday night.',
  },
  {
    q: 'ac repair surprise az',
    kd: 'West Valley',
    h: 'Mesa, Glendale and the growing West Valley',
    p: 'Aerospace at Falcon Field, sport around Westgate, then the fastest-growing edge through Peoria, Surprise, Goodyear, Buckeye and Queen Creek. Home services country, where area pages have to read like somebody has driven the route.',
  },
];

/* Phoenix seasonality. The most useful block on this page for a local owner. */
const SEASON: { mo: string; h: string; p: string }[] = [
  {
    mo: 'November to April',
    h: 'Winter visitors arrive',
    p: 'Seasonal residents swell the Valley for half the year and arrive knowing nobody. Dentists, physios, salons and restaurants all feel it. Hours, categories and seasonal pages need to be right by October, not fixed in January when the calls already went elsewhere.',
  },
  {
    mo: 'February to March',
    h: 'Spring training and golf',
    p: 'Cactus League baseball fills ballparks across the metro, and tournament week in Scottsdale is the busiest stretch of the year for bars, transport and rentals. Publish the event page in December. February is too late.',
  },
  {
    mo: 'Mid June to September',
    h: 'Monsoon storms',
    p: 'Storms bring roof leaks, downed trees and water damage, and the searches spike within hours. Roofers and restoration firms who were not already ranking in May do not get those calls in July.',
  },
  {
    mo: 'May to September',
    h: 'The heat trade',
    p: 'Air conditioning, pool service and pest control run flat out while retail and hospitality go quiet. On the quiet side of that split, summer is when you build content and clear technical debt, ready for when the visitors return.',
  },
];

const STEPS: { h: string; p: string }[] = [
  { h: 'Fix the Business Profile before anything else', p: 'Most Phoenix profiles sit on a generic primary category with half the services blank and no service area set. Fastest change available, and free.' },
  { h: 'Kill the duplicate listings', p: 'Old suite numbers, a previous owner, a franchise record nobody closed. Duplicates split your signals, and this metro has moved and rebuilt a lot.' },
  { h: 'Make the site survive a phone in August', p: 'Core Web Vitals, image weight, layout shift. A site that stalls on a mid-range Android loses the customer before Google is involved.' },
  { h: 'Choose the grid squares you can actually win', p: 'Not "Phoenix". Your own city plus the two next to it. Winning Chandler and Gilbert first is how you get taken seriously in Phoenix proper.' },
  { h: 'Write one honest page per service and per place', p: 'Not thirty cloned area pages. A customer in Surprise can tell inside a paragraph whether you have worked out there. So can Google.' },
  { h: 'Turn reviews into a weekly routine', p: 'A request built into your job-completion process, and a reply to every review including the bad ones. A burst looks like what it is.' },
  { h: 'Make yourself quotable by AI answers', p: 'Structured data plus answer-first paragraphs, so an assistant can lift a clean sentence about you rather than guessing.' },
];

/* Live top 12 for "seo agency phoenix", DataForSEO 2026-08-12. Every claim about a
   rival is either its own page title, the locations listed on its own site (checked
   2026-08-12), or its SERP position. No opinions dressed up as facts. */
const RIVALS: { name: string; pos: string; what: string; good: string; know: string; us?: boolean }[] = [
  { name: 'Semrush agency directory', pos: '1', what: 'Directory listing', good: 'A fast filtered shortlist, free to browse.', know: 'A directory, not an agency. Part of page one is lists, and getting onto them is work rather than a fight.' },
  { name: 'Thrive Agency', pos: '2', what: 'National agency, Phoenix location page', good: 'Enormous reach. They rank for this city after city.', know: 'Their Phoenix presence is a location page in a national network. Ask who is on your monthly call.' },
  { name: 'SEO Phoenix', pos: '3', what: 'Phoenix-only firm', good: 'Genuinely local. Their site carries Arizona testimonials, including a Scottsdale dental practice.', know: 'If you want references you can drive across town to meet, a local incumbent is a fair call.' },
  { name: 'Clutch', pos: '4', what: 'Review directory', good: 'Verified client interviews, more diligence than most sources do.', know: 'Placement rewards firms that chase reviews there, so read it as a starting list, not a ranking.' },
  { name: 'Nvent Marketing', pos: '5', what: 'Multi-city firm', good: 'Southwest footprint and a broad offer beyond search.', know: 'Their own site lists Las Vegas, Orlando, Phoenix, Tampa and Tucson.' },
  { name: 'Victorious', pos: '8', what: 'National SEO specialist', good: 'Search is all they do, and the focus shows.', know: 'Their own site lists San Francisco, Austin, Boston, Chicago and Denver among its city pages.' },
  { name: 'Local SEO Today', pos: '9', what: 'Valley local SEO specialist', good: 'Properly suburb level: separate Mesa, Peoria, Scottsdale and Tempe pages.', know: 'Same playbook we run. Ask us both the same questions and compare answers, not design.' },
  { name: 'FactoryJet', pos: 'not yet', what: 'That is us', good: 'Engineering-first local SEO, month to month, and the person doing the work is who you talk to.', know: 'We do not rank on page one for this term today, and our link profile is a fraction of the firms above.', us: true },
];

type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };

/* Sourced from live Google People-Also-Ask, 2026-08-12 (see the brief JSON).
   Phrasing kept close to how people type it. The questions are national, the
   answers are localised to Phoenix honestly rather than faked as local questions. */
const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-cost',
    label: 'What it costs',
    items: [
      { q: 'How much does an SEO agency charge in Phoenix?', a: 'No honest agency quotes before opening your site. Your number moves on how competitive your category is here, how many places you serve, and how much technical repair comes first. We bill month to month, audit free, and put the scope in writing.' },
      { q: 'How much does it cost to hire an SEO agency?', a: 'Agencies price on effort, so ask what effort you are buying: how many hours land on your account, who does them, and whether technical fixes are included or billed on top. Similar-looking quotes often differ threefold in real work.' },
      { q: 'How much should a small business spend on SEO?', a: 'Less than it brings back. Work out what one new customer is worth across a year, then ask how many extra a month would cover the work with room to spare. A handful means the scope fits. Dozens means start narrower.' },
      { q: 'Is an SEO agency worth it?', a: 'Worth it when people already search for what you sell and somebody else sits above you. Worth little when nobody searches. The common failure is not paying for SEO, it is paying with no way to tell whether it works.' },
      { q: 'Is SEO worth it for small businesses?', a: 'In Phoenix, usually, because you are not fighting the internet. You are fighting the handful of businesses in your category within a few miles, and that is a fight a normal owner can win. Test it: search your category plus near me.' },
    ],
  },
  {
    id: 'faq-diy',
    label: 'Doing it yourself',
    items: [
      { q: 'Can I do SEO myself?', a: 'The first chunk, yes, and you should. Fill your Business Profile completely, make your name, address and phone identical everywhere, use your own photos, and ask every happy customer for a review. It gets hard at technical repair and earning links.' },
      { q: 'Can I do local SEO myself?', a: 'Yes for the profile work, where most of the early win lives. Pick the most specific primary category, fill in services and attributes, set real hours, post your own photos. What owners underestimate is consistency: weekly beats a burst in January.' },
    ],
  },
  {
    id: 'faq-ai',
    label: 'SEO and AI',
    items: [
      { q: 'Is SEO replaced by AI?', a: 'No, but the shape changed. People still search, they just as often read a summary or ask an assistant instead of clicking. The work that gets you named in those answers is the work that got you ranked: clear pages, real expertise, consistent data.' },
      { q: 'Is SEO dead now with AI?', a: 'This story returns every few years. Social was going to kill it, then paid ads, now AI answers. Meanwhile 1,300 people a month still type seo agency phoenix into Google. If people search before they buy, visibility matters.' },
      { q: 'Can ChatGPT do SEO?', a: 'It helps with drafting and the boring analysis, and it is good at both. It cannot claim your Business Profile, fix your site speed, earn a review, or persuade another site to link to you. Check every fact it gives you.' },
      { q: 'What is replacing SEO?', a: 'Nothing is. It is absorbing a new surface. The label is generative engine optimization, or GEO: structured data and answer-first writing that lets ChatGPT, Perplexity and Google AI Overviews quote you. It sits on top of ordinary SEO.' },
    ],
  },
  {
    id: 'faq-work',
    label: 'How the work works',
    items: [
      { q: 'What does an SEO agency do?', a: 'Four things, roughly in order. Fix what is technically broken on your site. Get your business data right everywhere Google looks, starting with your Business Profile. Build pages matching what people type. Then earn reviews and mentions.' },
      { q: 'What are the four main types of SEO?', a: 'On-page, which is content and structure. Technical, which is speed, crawlability and structured data. Off-page, which is reviews, links and mentions. And local, which is your Business Profile and the map results. Phoenix service businesses earn most early return from the last two.' },
      { q: 'What is the 80/20 rule in SEO?', a: 'That a small slice of the work produces most of the result. In local search that slice is a complete and correctly categorized Business Profile, a steady flow of genuine reviews, and a site that loads fast and says plainly what you do and where.' },
      { q: 'What are the top 5 SEO strategies?', a: 'Complete the Business Profile properly, fix site speed and structured data, build one honest page per service and per area you serve, run reviews as a weekly routine, and earn mentions from local sites with an audience. In that order.' },
    ],
  },
  {
    id: 'faq-local',
    label: 'Local search in the Valley',
    items: [
      { q: 'What is local SEO vs SEO?', a: 'Regular SEO ranks pages for anyone, anywhere. Local SEO is showing up when someone nearby searches, in Google Maps and the three-result local pack. The difference is distance: Google weighs how close you are to the searcher.' },
      { q: 'How to do local SEO for beginners?', a: 'Claim your Google Business Profile. Pick the most specific primary category. Fill in services, attributes and real hours. Add your own photos. Make your name, address and phone identical everywhere. Ask for reviews and reply to all of them.' },
      { q: 'How long does it take for SEO to kick in?', a: 'Profile fixes can move map rankings within weeks. Organic pages usually show early movement in three to six months and settle between six and twelve. In Phoenix we win the quiet searches first, so calls arrive while bigger terms mature.' },
      { q: 'Why can I rank in Chandler but not in Phoenix?', a: 'Because distance is a ranking factor. Google is answering a question about what is near the searcher, so a business in Chandler is a worse answer for someone in Peoria. The fix is expanding outward one square of the grid at a time.' },
      { q: 'Who is the best SEO agency in Phoenix?', a: 'Whichever one shows its work: a written scope you read before signing, month-to-month terms, your accounts and content staying yours, and reporting tied to calls and leads. Run every candidate through that list, us included.' },
      { q: 'Can you guarantee a number one ranking in Phoenix?', a: 'No, and Google’s own guidance tells you to be wary of anyone who does. Nobody outside Google controls the results. What we commit to is the work, a plain explanation of what we did, and your right to walk at the end of any month.' },
    ],
  },
];

/* Schema mainEntity is derived from the array above. Never hand-write a second list. */
const faqSchemaItems = FAQ_GROUPS.flatMap((g) =>
  g.items.map((item) => ({
    '@type': 'Question' as const,
    name: item.q,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.a },
  }))
);

const OTHER_CITIES: { name: string; path: string }[] = [
  { name: 'Austin SEO', path: '/austin/seo' },
  { name: 'Denver SEO', path: '/denver/seo' },
  { name: 'Nashville SEO', path: '/nashville/seo' },
  { name: 'Charlotte SEO', path: '/charlotte/seo' },
];

const AREAS = ['Phoenix', 'Scottsdale', 'Tempe', 'Chandler', 'Mesa', 'Gilbert', 'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Queen Creek'];
const areaServed = AREAS.map((a) => ({
  '@type': 'City' as const,
  name: a,
  containedInPlace: { '@type': 'State' as const, name: 'Arizona' },
}));

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
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${CANONICAL}#business`,
      name: 'FactoryJet Technologies',
      url: CANONICAL,
      parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
      areaServed,
      knowsAbout: ['Local SEO', 'Technical SEO', 'Google Business Profile optimization', 'Generative engine optimization'],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Services in Phoenix, AZ',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      url: CANONICAL,
      areaServed,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Phoenix SEO services',
        itemListElement: STEPS.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.h, description: s.p },
        })),
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#cities`,
      name: 'FactoryJet local SEO city pages',
      itemListElement: OTHER_CITIES.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        url: `https://factoryjet.com${c.path}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'US SEO Services', item: 'https://factoryjet.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Phoenix', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'SEO Agency Phoenix AZ | Local SEO Across the Valley | FactoryJet',
      description:
        'What an SEO agency in Phoenix actually does, why distance makes the Valley a dozen markets rather than one, who holds page one for seo agency phoenix, and how FactoryJet compares.',
      inLanguage: 'en-US',
      dateModified: MODIFIED,
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      about: { '@id': `${CANONICAL}#service` },
      author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.pxseo .bluf p', '.pxseo .bluf-support p', '.pxseo .faqcat p'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqSchemaItems,
    },
  ],
};

export default function PhoenixSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="pxseo">
        {/* HERO: valley grid, always light */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="loc"><b />Phoenix, AZ · Valley wide</span>
              <h1>Phoenix SEO for a valley where distance decides who gets found</h1>
              <p className="lead">Greater Phoenix runs from Buckeye out past Queen Creek. Google ranks local results partly on how close you are to the searcher, so <b>one Phoenix ranking is really a dozen neighborhood rankings</b>. We win them one square of the grid at a time.</p>
              <HeroInlineForm region="us" source="us_phoenix_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row">
                <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
              </div>
            </div>
            <div className="board" aria-hidden="true">
              <div className="bhead"><span>Where you need to show up</span><span>Greater Phoenix</span></div>
              <div className="bgrid">
                {BOARD.map((b) => (
                  <div className={b.on ? 'bcell on' : 'bcell'} key={b.name}>
                    {b.name}<span>{b.note}</span>
                  </div>
                ))}
              </div>
              <div className="ridge"><i /><i /><i /></div>
            </div>
          </div>
        </section>

        {/* FACTS BAR */}
        <div className="factsbar">
          <div className="wrap row">
            {FACTS.map((f) => (
              <div className="fact" key={f.v}><div className="v">{f.v}</div><div className="k">{f.k}</div></div>
            ))}
          </div>
        </div>

        {/* ANSWER FIRST */}
        <section className="blufsec">
          <div className="wrap">
            <div className="bluf">
              <span className="tag">The short answer</span>
              <p>An SEO agency in Phoenix gets your business found by people already searching for what you sell, in Google Maps, in the normal results, and now inside AI answers. The work is four things: your Google Business Profile, the technical health of your site, pages written for what the Valley actually searches, and reviews.</p>
            </div>
            <div className="bluf-support body">
              <p>
                Those four are not equal in a metro this spread out. Your <Link href="/services/local-seo">Business Profile and local listings</Link> decide the three-result map pack, where most Phoenix service businesses get their calls. A free <Link href="/services/seo-audit">SEO audit</Link> starts on the technical side, because a slow site will not hold a ranking however good the writing is. Then pages matching what people here type, and last <Link href="/services/ai-seo">AI SEO and GEO</Link>, so assistants quote you instead of a competitor.
              </p>
              <p>
                Who does this here? A few genuine Phoenix and Scottsdale firms, several national agencies servicing the Valley from elsewhere, a long tail of freelancers, and directories that outrank all of them without doing SEO for anyone. We name them below, with our own position stated plainly. Smaller operation? <Link href="/services/small-business-seo">Small business SEO</Link> is the short version.
              </p>
            </div>
          </div>
        </section>

        {/* WHY PHOENIX IS ITS OWN MARKET */}
        <section className="sprawl">
          <div className="wrap">
            <span className="eyebrow">Why the Valley is different</span>
            <h2>Phoenix is not one search market. It is a grid of them.</h2>
            <p className="lead">Most cities have a downtown and a fight over it. Phoenix has a street grid stretched across a valley full of separate municipalities, and Google is answering a question about what is near the person searching.</p>
            <div className="sgrid">
              {MOSAIC.map((m) => (
                <div className="scell" key={m.n}>
                  <div className="n">{m.n}</div>
                  <p>{m.t}</p>
                  <span className="src">{m.src}</span>
                </div>
              ))}
            </div>
            <p className="closer">
              In practice: a plumber in Gilbert will not appear in the map pack for somebody standing in Peoria, however good the SEO is, because thirty-odd miles of grid sit between them. Agencies sell &quot;rank in Phoenix&quot; because it sounds like one thing to buy. It is your own city, then the two next to it, then the next ring, each with its own competitors. Anyone quoting a Phoenix number without asking where your vans go is quoting a template. Same argument, nationally: <Link href="/services/seo">US SEO services</Link>.
            </p>
          </div>
        </section>

        {/* RELATED SEARCHES */}
        <div className="demand">
          <div className="wrap">
            <p className="dh">What Google itself shows alongside &quot;seo agency phoenix&quot; (live results, August 2026)</p>
            <div className="chips">
              {RELATED.map((r) => (<span key={r}><b>{r}</b></span>))}
            </div>
          </div>
        </div>

        {/* DISTRICTS */}
        <section className="verts">
          <div className="wrap">
            <span className="eyebrow">Corridor by corridor</span>
            <h2>Six Valleys, not one city</h2>
            <p className="lead">A cosmetic dentist in Old Town and an air conditioning company in Surprise are both doing local SEO, and nothing about their strategy overlaps. Each query below is what that corner of the Valley actually produces.</p>
            <div className="qgrid">
              {DISTRICTS.map((d) => (
                <div className="qcard" key={d.q}>
                  <div className="qbar"><i />{d.q} <span className="kd">{d.kd}</span></div>
                  <div className="qbody"><h3>{d.h}</h3><p>{d.p}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE ROW 1: the near-me argument */}
        <section className="imgsec">
          <div className="wrap imgrow">
            <div className="body">
              <span className="eyebrow">Near-me searches</span>
              <h2>Your next customer is two miles away and does not know your name</h2>
              <p className="lead">Google lists relevance, distance and prominence as the three things behind local results. Distance you cannot change. The other two you can, and almost nobody here works on them properly.</p>
              <p style={{ marginTop: '16px' }}>Relevance is mostly categories and services: an afternoon of work. Prominence is reviews, mentions and links: months of it, and the reason a competitor with a worse website sits above you.</p>
              <div className="cta-row">
                <ModalCTAButton label="See where you rank across the Valley" region="us" modalVariant="seo" btnVariant="primary-light" />
              </div>
            </div>
            <div className="imgwrap">
              <img
                src="/images/us/phoenix-seo/phoenix-local-owner.webp"
                alt="A Phoenix shop owner handing a purchase to a customer, with palm trees and desert mountains visible through the storefront window"
                width={1264}
                height={848}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* SEASONALITY */}
        <section className="season">
          <div className="wrap">
            <span className="eyebrow">The Phoenix calendar</span>
            <h2>Demand here swings harder than almost anywhere</h2>
            <p className="lead">Half the businesses here have a season that decides their year, and the search work has to be finished months before it starts.</p>
            <div className="lane">
              {SEASON.map((s) => (
                <div className="sitem" key={s.mo}>
                  <span className="mo">{s.mo}</span>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LISTICLE */}
        <section className="steps">
          <div className="wrap">
            <span className="eyebrow">First 30 days</span>
            <h2>Seven things we do before we ask you to judge anything</h2>
            <p className="lead">This is the order, and the order matters. Most of it is unglamorous, none of it is secret, and you are welcome to do any of it yourself.</p>
            <ol className="steplist">
              {STEPS.map((s) => (
                <li key={s.h}><h3>{s.h}</h3><p>{s.p}</p></li>
              ))}
            </ol>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Phoenix SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder first</a>
            </div>
          </div>
        </section>

        {/* THE ONE DARK SECTION */}
        <section className="darksec">
          <div className="wrap">
            <span className="eyebrow">AI answers</span>
            <h2>Google is not the only place people ask about Phoenix businesses now</h2>
            <p className="lead">When we pulled the live results in August 2026, Google was not rendering an AI Overview on this query. It renders one on plenty of others, and your customers ask assistants directly either way.</p>
            <div className="dgrid">
              <div className="dpill">
                <h3>Entity data</h3>
                <p>Structured data stating plainly what you do, where, and who runs it, so a model has something unambiguous to lift.</p>
              </div>
              <div className="dpill">
                <h3>Answer-first pages</h3>
                <p>The answer in the first forty words, then the support. Buried answers do not get quoted, by assistants or by skimming humans.</p>
              </div>
              <div className="dpill">
                <h3>Reviews and mentions</h3>
                <p>Assistants lean on the same corroboration Google does. Accurate descriptions elsewhere are what make a model confident enough to name you.</p>
              </div>
            </div>
            <p className="lead" style={{ marginTop: '26px' }}>
              Check where you stand with our free <Link href="/ai-visibility-checker" className="dlink">AI visibility checker</Link>, or read how the discipline works on our <Link href="/services/ai-seo" className="dlink">AI SEO page</Link>.
            </p>
          </div>
        </section>

        {/* RIVALS TABLE */}
        <section className="rivals">
          <div className="wrap">
            <span className="eyebrow">The SERP, honestly</span>
            <h2>Who you are actually up against for &quot;seo agency phoenix&quot;</h2>
            <p className="lead">Live results, August 2026. Everything in this table is either their own page title, the locations listed on their own site, or their position in the results. No spin and no disparagement.</p>
            <div className="tablewrap">
              <table>
                <caption className="sr-only">Page one results for the search seo agency phoenix, August 2026</caption>
                <thead>
                  <tr>
                    <th scope="col">Who</th>
                    <th scope="col">What they are</th>
                    <th scope="col">Genuinely good at</th>
                    <th scope="col">Worth knowing</th>
                  </tr>
                </thead>
                <tbody>
                  {RIVALS.map((r) => (
                    <tr key={r.name} className={r.us ? 'us' : undefined}>
                      <th scope="row">{r.name}<span className="pos">{r.pos}</span></th>
                      <td>{r.what}</td>
                      <td>{r.good}</td>
                      <td>{r.know}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="honest">
              <h3>Why we publish that last row</h3>
              <p>
                Because you will find out anyway, and the gap matters less for you than for us. You need to rank in a few square miles against maybe a dozen local rivals. We are trying to rank nationally against firms with many times our link profile. Your version works on a normal timeline. Ours takes years.
              </p>
              <p>
                Ask all of us the same three questions. Who does the work. What happens if it does not move in six months. Does anything leave with you when you go. We write every city page one at a time: <Link href="/austin/seo">Austin</Link>, <Link href="/denver/seo">Denver</Link>, <Link href="/nashville/seo">Nashville</Link>, <Link href="/charlotte/seo">Charlotte</Link>.
              </p>
              <div className="cta-row" style={{ marginTop: '20px' }}>
                <ModalCTAButton label="Get your free Phoenix SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE ROW 2: consultant */}
        <section className="imgsec">
          <div className="wrap imgrow flip">
            <div className="imgwrap">
              <img
                src="/images/us/phoenix-seo/phoenix-consult.webp"
                alt="A FactoryJet strategist and a Phoenix business owner working through a local search plan across a table, with a desert mountain visible outside"
                width={1264}
                height={848}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="body">
              <span className="eyebrow">Who you work with</span>
              <h2>A Phoenix SEO consultant who can read a waterfall chart</h2>
              <p className="lead">No account managers. The person who writes the fixes explains them to you, in plain language, on the same call.</p>
              <p style={{ marginTop: '16px' }}>Technical work is the floor rather than an upsell: Core Web Vitals, structured data and page speed every month, because rankings on a broken site do not stay put. <Link href="/services/seo-consulting">SEO consulting</Link> without execution produces a deck nobody actions. Home services run on their own rules in this climate, which is why <Link href="/services/roofing-seo">roofing SEO</Link> gets its own playbook.</p>
              <div className="cta-row">
                <a className="btn btn-ghost" href={CALENDLY}>Book 30 minutes, no pitch deck</a>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="proof">
          <div className="wrap">
            <div className="proofcard">
              <blockquote><p>I started FactoryJet to do the opposite of what most agencies do: senior people doing the actual work, a scope you read before you sign, and no twelve-month handcuffs. If our Phoenix SEO does not earn its keep, you leave the next month.</p></blockquote>
              <div className="byline">
                <div className="avatar">BB</div>
                <div><div className="nm">Bhavesh Barot</div><div className="ti">Founder, FactoryJet. Building sites and search for SMBs for over a decade.</div></div>
              </div>
              <div className="clients">
                <span>Impulse Branding Solutions</span><span>Belle Maison</span><span>Shevva Car Driver Hire</span><span>Rukman Transport</span>
              </div>
              <p className="real">No stock screenshots and no invented case studies. Those client builds are live right now. Open them and run PageSpeed yourself.</p>
            </div>
          </div>
        </section>

        {/* IMAGE ROW 3: what you get */}
        <section className="imgsec" style={{ paddingTop: 0 }}>
          <div className="wrap imgrow">
            <div className="body">
              <span className="eyebrow">What you get every month</span>
              <h2>One scope, the whole stack, no add-on surprises</h2>
              <p className="lead">Technical repair, Business Profile work, citation and duplicate cleanup, reviews, local content and AI search visibility, in one monthly scope you read before you agree to it. You keep all of it if you leave: profile, content, citations, analytics access.</p>
            </div>
            <div className="imgwrap">
              <img
                src="/images/us/phoenix-seo/phoenix-seo-team.webp"
                alt="Two FactoryJet colleagues reviewing printed page layouts together in a sunlit Arizona office"
                width={1264}
                height={848}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="wrap">
            <span className="eyebrow">Phoenix SEO FAQ</span>
            <h2>Questions, answered like a real call</h2>
            <p className="lead">These are the questions Google shows people asking around this search, answered the way we would answer them on the phone.</p>
            <div className="faqgrid">
              <nav className="faqnav" aria-label="FAQ categories">
                {FAQ_GROUPS.map((g) => (
                  <a href={`#${g.id}`} key={g.id}>{g.label} <span className="ct">{g.items.length}</span></a>
                ))}
                <p className="faqnavhelp">Not answered here?<br /><a href={CALENDLY}>Talk to the founder</a></p>
              </nav>
              <div>
                {FAQ_GROUPS.map((g) => (
                  <div className="faqcat" id={g.id} key={g.id}>
                    <p className="ch">{g.label}</p>
                    {g.items.map((it, i) => (
                      <details key={it.q} open={g.id === 'faq-cost' && i === 0}>
                        <summary>{it.q}</summary>
                        <p>{it.a}</p>
                      </details>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p className="closer" style={{ marginTop: '30px' }}>
              Sources for the claims above: Google&apos;s <a href={SRC_GBP} rel="noopener">Business Profile documentation</a> for relevance, distance and prominence, Google Search Central&apos;s <a href={SRC_GOOGLE_SEO} rel="noopener">guidance on hiring an SEO</a> for the warning about guaranteed rankings, and the <a href={SRC_BRIGHTLOCAL} rel="noopener">BrightLocal Local Consumer Review Survey 2026</a> for the review figure.
            </p>
          </div>
        </section>

        {/* FINAL */}
        <section className="final">
          <div className="wrap">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Get started</span>
            <h2>Start with the square of the grid you are standing in</h2>
            <p className="lead">A free Phoenix SEO audit shows where you sit in the map pack today, what is technically holding the site back, and what we would fix first. Yours to keep either way.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Phoenix SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
            <p className="fine">
              SEO across Phoenix, Scottsdale, Tempe, Chandler, Mesa, Gilbert, Glendale, Peoria, Surprise, Goodyear and Queen Creek. Services: <Link href="/services/seo">SEO</Link>, <Link href="/services/local-seo">local SEO</Link>, <Link href="/services/small-business-seo">small business SEO</Link>, <Link href="/services/seo-audit">SEO audit</Link>, <Link href="/services/ai-seo">AI SEO</Link>. Other cities: <Link href="/austin/seo">Austin</Link>, <Link href="/denver/seo">Denver</Link>, <Link href="/nashville/seo">Nashville</Link>, <Link href="/charlotte/seo">Charlotte</Link>, <Link href="/tampa/seo">Tampa</Link>.
            </p>
          </div>
        </section>
        <SeoCityLinksUS currentCity="phoenix" />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

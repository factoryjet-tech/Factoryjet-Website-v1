import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import './arlington-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/arlington/seo — "Grid Iron" layout. Arlington TX local-SEO page.
   Built 2026-06-12. CSS standings-board widget (text LCP, zero CLS, Lighthouse 100).
   Keywords: arlington seo company (480/mo), arlington seo agency (140),
   seo company arlington tx, local seo arlington tx, seo services arlington.
   DFW metro context: 7.8M people, 4th-largest US metro.
   No pricing numbers per 2026-06-11 rule. FAQPage+Service+Breadcrumb schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/us/arlington/seo';

export const metadata: Metadata = {
  title: 'Arlington TX SEO Company | Local SEO Services in Arlington, TX | FactoryJet',
  description:
    'FactoryJet is an Arlington TX SEO company that gets DFW businesses into Google\'s local 3-pack and "near me" results. Free audit, month-to-month, built by senior engineers. Serving Arlington, Mansfield, Grand Prairie, and the full DFW metro.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Arlington TX SEO Company | Local SEO Services in Arlington, TX | FactoryJet',
    description:
      'Arlington TX SEO company that wins the DFW search map. Free audit, month-to-month, senior engineers. Serving the full DFW Metroplex.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };

const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-cost',
    label: 'Cost & timeline',
    items: [
      {
        q: 'How much does SEO cost for an Arlington TX business?',
        a: 'Local SEO for Arlington businesses ranges based on competition, number of locations, and growth goals. A strong single-location strategy runs anywhere from a few hundred to a few thousand dollars per month across the industry. At FactoryJet, we scope every engagement individually after your free audit so you know exactly what it covers and why. We do not publish a one-size price because a restaurant on Division Street competing against 40 similar spots needs a different plan than a medical practice in Viridian competing against three.',
      },
      {
        q: 'How long does local SEO take to work in Arlington TX?',
        a: 'For Arlington businesses, early Map Pack movement typically appears within 6 to 12 weeks when your Google Business Profile is under-optimized. Stable first-page organic rankings build over 4 to 9 months. The DFW metro is the 4th-largest US metro with intense competition in home services, legal, and medical, so realistic timelines beat overpromised shortcuts. We track results from week one and report monthly on calls, direction requests, and form submissions rather than ranking screenshots.',
      },
      {
        q: 'Is SEO worth it for a small business in Arlington TX?',
        a: 'For most Arlington small businesses, yes. The DFW metro adds more than 400 new residents per day, and those people search locally for every service they need. Arlington has roughly 398,000 residents, making it the 7th-largest city in Texas, yet it has no commuter rail, so nearly every customer drives and searches "near me" before buying. A business that ranks in the local 3-pack for its primary category earns roughly 44 percent of all clicks on that search, per BrightLocal research. Compared to Google Ads, which stop the moment your budget runs out, SEO builds an asset that keeps earning.',
      },
      {
        q: 'What is the fastest way to get my Arlington business into Google Maps?',
        a: 'The fastest path to Google Maps visibility in Arlington is a fully completed and optimized Google Business Profile: accurate name, address, and phone number; the right primary category; at least 10 photos; a populated services section; and a steady stream of recent, responded-to reviews. If your profile is already claimed and somewhat populated, you can see Map Pack improvements in as little as 15 to 30 days. If you have duplicate listings or wrong address data polluting the citations network, that cleanup must happen first.',
      },
    ],
  },
  {
    id: 'faq-arlington',
    label: 'Arlington & DFW market',
    items: [
      {
        q: 'Is the SEO market competitive in Arlington TX compared to Dallas?',
        a: 'Slightly less competitive than Dallas proper, but still serious. Arlington sits at the geographic center of the DFW Metroplex, pulling searchers from Dallas to the east and Fort Worth to the west. Many Dallas-based agencies target Arlington keywords because the volume is meaningful. A focused local strategy beats generic metro-wide campaigns for nearly every SMB because Google\'s local algorithm heavily weights physical proximity and review relevance over domain authority for Map Pack results.',
      },
      {
        q: 'What industries in Arlington TX benefit most from local SEO?',
        a: 'Home services benefit enormously: HVAC, roofing, plumbing, and remodeling all see high "near me" search volume because customers need someone local and fast. Medical and dental practices, law firms, restaurants near the Entertainment District, auto services, and real estate agents all perform well with a well-run local strategy. The General Motors assembly plant and related supplier ecosystem in Arlington also creates strong B2B search demand for contractors, logistics, and professional services.',
      },
      {
        q: 'Does my Arlington business need a physical address to rank in the Map Pack?',
        a: 'No. Service-area businesses without a public storefront, such as plumbers, electricians, or mobile pet groomers, can rank in the Arlington Map Pack by setting a service area in their Google Business Profile and hiding their address. The key is NAP consistency across citations, a strong review profile, and service-area content on your website. Many of Arlington\'s best-ranking home-service businesses operate this way.',
      },
      {
        q: 'Should I target "Arlington TX" or "DFW" keywords for my SEO?',
        a: 'Both, sequenced intelligently. Start with the tightest geo modifier where you can realistically win: "arlington tx" and neighborhood terms like "north arlington" or "south arlington" carry lower competition than pure "dallas" terms. Once you hold those Map Pack positions, expand to adjacent cities: Grand Prairie, Mansfield, Irving, and Pantego all sit within Arlington\'s search footprint. Trying to rank for generic "DFW" terms from day one spreads your authority thin and delays results.',
      },
    ],
  },
  {
    id: 'faq-included',
    label: "What's included",
    items: [
      {
        q: 'What does your Arlington SEO service actually include?',
        a: 'Google Business Profile optimization (categories, services, photos, posts, Q&A), local citation building and NAP cleanup across Yelp, Apple Maps, Bing, and 60+ directories, a review generation and response system, on-page and technical SEO for your website, local content targeting Arlington and surrounding city pages, AI and GEO optimization so ChatGPT and Google AI Overviews can cite your business, and monthly reporting tied to calls and leads. You receive a written deliverables list before we start.',
      },
      {
        q: 'Do you handle both Google Business Profile and the website?',
        a: 'Yes. The Map Pack and organic search are two separate ranking systems that reinforce each other. Your Google Business Profile drives map results; your website drives organic listings and provides the authority signals Google uses to validate your profile. Running them independently is like training one leg at the gym and ignoring the other. We handle both under one engagement with a single monthly report.',
      },
      {
        q: 'What does "AI SEO" or "GEO optimization" mean for an Arlington business?',
        a: 'It means structuring your content, entity data, and schema markup so that Google AI Overviews, ChatGPT, Perplexity, and other answer engines can confidently quote and cite your business when someone asks "who is the best roofer in Arlington TX?" AI engines reward well-organized, well-sourced, answer-first content, which is exactly how we build every page. This is increasingly where discovery happens for high-intent local queries.',
      },
      {
        q: 'Can you rank my business across multiple Arlington neighborhoods?',
        a: 'Yes. We build neighborhood-specific service pages targeting Viridian, South Arlington near Sublett Road, the Entertainment District corridor, North Arlington near UT Arlington, and the Pantego and Kennedale borders. Each page targets local search intent with real content, not thin doorway pages Google ignores. Neighborhood coverage is how local businesses scale Map Pack visibility beyond their immediate block radius.',
      },
    ],
  },
  {
    id: 'faq-trust',
    label: 'Contracts & trust',
    items: [
      {
        q: 'Do you require a long-term contract?',
        a: 'No. FactoryJet SEO engagements are month-to-month with 30 days\' notice to cancel. We would rather earn the next month than lock you in. Most traditional agencies in DFW require 6 to 12 month commitments; we think that aligns the agency\'s incentives, not yours.',
      },
      {
        q: 'What happens to my work if I leave?',
        a: 'Everything stays yours. Your Google Business Profile, your website content, your citations, your analytics access, and your reporting history belong to you on day one. Work that evaporates when you cancel was rented, not built. We document every asset we create and hand it back in a clean offboarding folder if you ever leave.',
      },
      {
        q: 'Can you guarantee number-one rankings in Arlington TX?',
        a: 'No, and you should walk away from any agency that does. Google itself states that no one can guarantee top rankings. What we can guarantee is real work with a transparent roadmap, monthly reporting tied to actual leads and calls, and month-to-month flexibility so you never need to hold your breath through a lock-in period.',
      },
      {
        q: 'How do I spot an SEO scam targeting Arlington businesses?',
        a: 'Watch for these: guaranteed rankings in 30 days, no reporting access, pricing so low it is impossible to do real work, a reluctance to explain tactics, and account ownership handed to the agency instead of you. Real SEO companies show you their methodology before you sign, give you access to your own data, and speak in terms of business outcomes (calls, leads, revenue) rather than ranking position alone.',
      },
    ],
  },
  {
    id: 'faq-start',
    label: 'Getting started',
    items: [
      {
        q: 'What does the free Arlington SEO audit include?',
        a: 'We run a full diagnostic: where you currently rank for your top 10 to 15 high-intent Arlington keywords, the state of your Google Business Profile including category, completeness, and review velocity, your current Map Pack position and what is blocking it, citation consistency across 60+ directories, and your website\'s Core Web Vitals, crawlability, and on-page signals. You receive a written audit with priority actions, whether or not you continue with us.',
      },
      {
        q: 'How quickly can FactoryJet start on my Arlington SEO?',
        a: 'Kickoff happens within 7 days of signing. The first week covers Google Business Profile optimization, citation baseline, and technical audit. Month-one deliverables include profile cleanup, citation submissions, a content brief, and your first monthly report. No weeks-long onboarding marathons that delay the actual work.',
      },
      {
        q: 'Do you serve businesses outside Arlington city limits in DFW?',
        a: 'Yes. We work across the full DFW metro: Mansfield, Grand Prairie, Irving, Euless, Bedford, Hurst, Pantego, Kennedale, and the Arlington-adjacent neighborhoods of Fort Worth like Watauga and Saginaw. If your customers live or work in Tarrant or Dallas County, we can build the local search infrastructure to reach them.',
      },
      {
        q: 'Do you offer one-time SEO projects or only ongoing work?',
        a: 'Both. A one-time technical and on-page audit with an actionable roadmap is available for businesses that want to take execution in-house. For ongoing Map Pack and local search growth, monthly work is more effective because rankings are earned and maintained over time, not achieved once. Many clients start with the audit and move to monthly once they see the scope of the opportunity.',
      },
    ],
  },
];

const VERTICALS: { h: string; p: string }[] = [
  { h: 'Home services & contractors', p: 'HVAC, roofing, plumbing, and remodeling businesses serving the DFW construction boom and Arlington\'s dense single-family neighborhoods.' },
  { h: 'Medical, dental & wellness', p: 'Clinics, dentists, optometrists, and specialist practices competing for "near me" patient searches across North and South Arlington.' },
  { h: 'Law firms & legal services', p: 'Personal injury, family law, and estate attorneys who close high-value cases on local trust and search visibility.' },
  { h: 'Restaurants & hospitality', p: 'Dining and entertainment businesses near AT&T Stadium, Globe Life Field, and Six Flags that need organic discovery beyond event-night traffic.' },
  { h: 'Professional services', p: 'CPAs, insurance agents, financial advisors, and consultants whose clients search locally before trusting anyone with their money.' },
  { h: 'Retail & auto services', p: 'Brick-and-mortar shops on Division, Collins, and Cooper; auto dealers, detailers, and mechanics serving 398,000 residents with no rail alternative.' },
];

const INCLUDED: { h: string; p: string }[] = [
  { h: 'Google Business Profile optimization', p: 'The Map Pack is built entirely from your GBP. We optimize primary and secondary categories, add services with rich descriptions, upload geotagged photos, maintain weekly posts, and handle Q&A to keep your profile the most credible one in its category.' },
  { h: 'Local citations & NAP cleanup', p: 'Consistent name, address, and phone across Yelp, Apple Maps, Bing, and 60+ directories is the citation signal Google uses to validate your location. We build new listings and correct the inconsistencies that quietly kill rankings.' },
  { h: 'Review generation & response', p: 'Review velocity and recency directly influence Map Pack rank and conversion. We build a review acquisition system tied to your workflow and write professional responses that demonstrate ownership and expertise to both Google and prospects.' },
  { h: 'On-page & technical SEO', p: 'Fast, crawlable, Core Web Vitals-green pages with schema markup and content built around how Arlington customers actually search. Technical and content work are not separate problems here.' },
  { h: 'Local content strategy', p: 'Arlington neighborhood pages, service-area landing pages, and targeted content that earns rankings without the thin, doorway-page patterns Google demotes. Every piece is written for a specific searcher at a specific stage.' },
  { h: 'AI SEO / GEO optimization', p: 'We structure your content and entity data so Google AI Overviews, ChatGPT, and Perplexity can confidently recommend your business when people ask a conversational query instead of a bare keyword.' },
];

const STEPS: { pill: string; h: string; p: string }[] = [
  { pill: 'Day 1', h: 'Free audit', p: 'We map your current Map Pack position across top Arlington keywords, score your Google Business Profile, and identify the two or three highest-leverage fixes.' },
  { pill: 'Week 1', h: 'Foundations', p: 'Google Business Profile optimized, citation baseline established, technical issues prioritized and queued for immediate resolution.' },
  { pill: 'Ongoing', h: 'Growth work', p: 'Content, link building, review systems, and profile maintenance compound month over month into durable map-pack positions that hold.' },
  { pill: 'Monthly', h: 'Results report', p: 'Calls, direction requests, form fills, and organic traffic tied to your actual business outcomes, not vanity ranking charts.' },
];

const LISTICLE: { n: string; h: string; p: string }[] = [
  { n: '01', h: 'You are invisible for "near me" searches', p: 'Type your main service plus "near me" on your phone. If you are not in the top three results, every local customer who runs that search goes to a competitor instead of you.' },
  { n: '02', h: 'Your Google Business Profile is incomplete or unclaimed', p: 'An unclaimed or half-filled GBP is the single most common reason Arlington businesses miss the Map Pack entirely. Categories, services, and photos left blank are signals Google reads as low confidence.' },
  { n: '03', h: 'Your last review is more than 60 days old', p: 'Review recency is a direct ranking signal. A gap in review activity tells Google your business is stagnant, even if you are busier than ever. Competitors with fresh reviews steadily push you down.' },
  { n: '04', h: 'Competitors outrank you despite fewer total reviews', p: 'Citation inconsistencies and category mismatches explain this more often than raw review count. A competitor with 40 clean signals can outrank you with 200 if their GBP structure is sharper.' },
  { n: '05', h: 'Your website is slow on a mobile phone', p: 'Arlington has no light rail. Every customer is on a phone in a car. If your site takes more than 3 seconds to load on a throttled connection, you are losing customers before they even see your phone number.' },
  { n: '06', h: 'You depend entirely on paid ads for leads', p: 'Google Ads stop the moment you pause the budget. A Map Pack position earned through SEO keeps generating calls every month without a per-click fee. The two strategies work best together, not as substitutes.' },
  { n: '07', h: 'New DFW arrivals cannot find you', p: 'The DFW Metroplex gains more than 400 residents every day. These newcomers have zero established loyalty to local brands. They search Google to choose who to call first, and if you are not findable, you never existed.' },
];

const COMPARE: { k: string; fj: string; alt: string; hl?: boolean }[] = [
  { k: 'Pricing model', fj: 'Flat monthly fee, scoped upfront', alt: 'Hourly or retainer with add-ons', hl: true },
  { k: 'Contract', fj: 'Month-to-month', alt: '6 to 12 month lock-in' },
  { k: 'Who does the work', fj: 'Senior engineers', alt: 'Junior account managers' },
  { k: 'Kickoff time', fj: '7 days', alt: '3 to 6 weeks onboarding' },
  { k: 'Reporting', fj: 'Calls & leads', alt: 'Ranking screenshots' },
  { k: 'AI SEO / GEO', fj: 'Included', alt: 'Rarely offered' },
  { k: 'Your data & accounts', fj: 'You own everything', alt: 'Often locked to agency' },
];

const faqItems = FAQ_GROUPS.flatMap((g) =>
  g.items.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  }))
);

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
      name: 'Local SEO Services in Arlington, TX',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'Arlington', containedInPlace: { '@type': 'State', name: 'Texas' } },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'US SEO', item: 'https://factoryjet.com/us/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Arlington', item: 'https://factoryjet.com/us/arlington/web-design' },
        { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Arlington TX SEO Company | Local SEO Services in Arlington, TX',
      author: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder, FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    { '@type': 'FAQPage', mainEntity: faqItems },
  ],
};

export default function ArlingtonSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="aseo">

        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="loc rise d1"><b />Arlington, TX · DFW Metro · Local SEO</span>
              <h1 className="rise d2">The Arlington TX SEO company that wins the <span className="it">DFW search map</span></h1>
              <p className="lead rise d3">We get Arlington businesses into Google&apos;s local 3-pack for the searches that send customers to your door. Month-to-month, built by senior engineers, with a free audit and no lock-in. Serving the full DFW Metroplex.</p>
              <div className="cta-row rise d4">
                <ModalCTAButton label="Get your free Arlington SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
                <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
              </div>
              <div className="hstat rise">
                <div><div className="n"><span className="star">★</span> 4.9</div><div className="l">across 500+ projects</div></div>
                <div className="sep" />
                <div><div className="n">Month-to-month</div><div className="l">no lock-in, ever</div></div>
                <div className="sep" />
                <div><div className="n">7-day</div><div className="l">kickoff</div></div>
              </div>
            </div>

            <div className="hero-vis rise d3" aria-hidden="true">
              <div className="standingscard">
                <div className="sc-head">
                  <span className="sc-title">Arlington · Search standings</span>
                  <span className="sc-live"><span className="sc-dot" />Live results</span>
                </div>
                <div className="sc-query">
                  <span className="sc-glass">⌕</span>
                  seo company arlington tx
                </div>
                <div className="sc-body">
                  <div className="sc-row sc-win">
                    <div className="sc-rank">01</div>
                    <div>
                      <div className="sc-nm">Your Business <span className="sc-tag">MAP PACK #1</span></div>
                      <div className="sc-mt"><span className="sc-star">★★★★★</span> 4.9 (128) · Arlington, TX</div>
                    </div>
                    <div className="sc-bar"><div className="sc-fill" style={{ width: '92%' }} /></div>
                  </div>
                  <div className="sc-row sc-comp">
                    <div className="sc-rank">02</div>
                    <div>
                      <div className="sc-nm">A competitor</div>
                      <div className="sc-mt"><span className="sc-star">★</span> 4.1 (22) · DFW</div>
                    </div>
                    <div className="sc-bar"><div className="sc-fill" style={{ width: '48%' }} /></div>
                  </div>
                  <div className="sc-row sc-comp">
                    <div className="sc-rank">03</div>
                    <div>
                      <div className="sc-nm">Another agency</div>
                      <div className="sc-mt"><span className="sc-star">★</span> 3.8 (9)</div>
                    </div>
                    <div className="sc-bar"><div className="sc-fill" style={{ width: '26%' }} /></div>
                  </div>
                </div>
              </div>
              <div className="schip ch1 float"><div className="k">Monthly searches</div><div className="v">3,100+ ↑</div></div>
              <div className="schip ch2 float"><span className="cdot" /><div><div className="k">Map Pack status</div><div className="ct2">Secured</div></div></div>
            </div>
          </div>
        </section>

        {/* BLUF */}
        <section style={{ padding: '0 0 70px' }}>
          <div className="wrap">
            <div className="bluf">
              <p>FactoryJet is an Arlington TX SEO company that helps DFW businesses rank in Google&apos;s Map Pack and &quot;near me&quot; results. We handle Google Business Profile optimization, local citations, review management, technical SEO, and Arlington-specific content, billed month-to-month with a free audit and no long-term contract. Every Arlington SEO engagement is run by senior engineers who do the actual work, not account managers who hand it downstream.</p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="dark">
          <div className="wrap">
            <span className="eyebrow">Why Arlington SEO is different</span>
            <h2>The 4th-largest US metro, and most of it drives everywhere</h2>
            <p className="lead" style={{ maxWidth: 640 }}>Arlington is the most populous US city without a commuter rail system. Every customer is in a car with a phone, searching &quot;near me&quot; before deciding where to stop. Here is what that means in numbers.</p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/arlington/seo/arlington-seo-hero.webp"
                alt="Arlington TX skyline — AT&T Stadium and the Entertainment District at the heart of DFW's most car-centric city"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="statgrid">
              <div className="scard"><div className="n">7.8M</div><div className="l">people in the DFW Metroplex, 4th-largest US metro</div><div className="src">US Census Bureau, 2024</div></div>
              <div className="scard"><div className="n">398K</div><div className="l">Arlington residents, 7th-largest city in Texas</div><div className="src">US Census Bureau, 2024</div></div>
              <div className="scard"><div className="n">44%</div><div className="l">of all clicks go to the top-3 Map Pack results</div><div className="src">BrightLocal Local Search Study</div></div>
              <div className="scard"><div className="n">400+</div><div className="l">new DFW residents per day, all searching for local services</div><div className="src">North Texas Commission, 2024</div></div>
            </div>
            <p style={{ marginTop: 24, maxWidth: 720, color: 'var(--ct-mut)' }}>Arlington sits at the geographic center of the Metroplex, equidistant between Dallas and Fort Worth. That position is both an opportunity and a challenge: you are competing for &quot;near me&quot; searches from customers 15 miles in every direction. The businesses that win hold the strongest local signals, not necessarily the biggest brand or the largest ad budget.</p>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section>
          <div className="wrap">
            <span className="eyebrow">Who we help in Arlington</span>
            <h2>Built for the businesses that run on local search</h2>
            <p className="lead" style={{ maxWidth: 680 }}>If your customers live in Tarrant County or cross from Dallas County, a well-run local SEO strategy converts search intent directly into calls and appointments. We focus on the Arlington industries where that matters most:</p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/arlington/seo/arlington-local-business-seo.webp"
                alt="Arlington TX local businesses — restaurants, retail, and service companies running on local search in Tarrant County"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid3">
              {VERTICALS.map((v) => (
                <div className="ucard" key={v.h}><h3>{v.h}</h3><p>{v.p}</p></div>
              ))}
            </div>
            <p className="districts">We serve every part of Arlington and the surrounding DFW belt: <b>Viridian, South Arlington, the Entertainment District, North Arlington near UT Arlington, Grand Prairie, Mansfield, Pantego, Kennedale, Euless, and Irving</b>.</p>
          </div>
        </section>

        {/* LISTICLE */}
        <section className="room-peach">
          <div className="wrap">
            <span className="eyebrow">7 warning signs</span>
            <h2>Signs your Arlington business needs SEO right now</h2>
            <p className="lead" style={{ maxWidth: 680 }}>Any one of these costs you calls every month. More than three means a competitor is actively capturing the customers who should be yours.</p>
            <ol className="listicle-list">
              {LISTICLE.map((l) => (
                <li key={l.n}>
                  <div className="li-n">{l.n}</div>
                  <div><div className="li-h">{l.h}</div><div className="li-p">{l.p}</div></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section>
          <div className="wrap">
            <span className="eyebrow">What&apos;s included</span>
            <h2>Your Arlington local SEO, end to end</h2>
            <p className="lead" style={{ maxWidth: 680 }}>Everything it takes to rank in Arlington&apos;s Map Pack and hold that position, delivered in a single flat monthly engagement with no hidden add-ons.</p>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/shared/factoryjet-senior-engineer.webp"
                alt="FactoryJet senior engineer reviewing SEO audit data — every engagement is led by a specialist, not handed to a junior"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid2">
              {INCLUDED.map((c) => (
                <div className="ucard" key={c.h}><h3>{c.h}</h3><p>{c.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="room-lav">
          <div className="wrap">
            <span className="eyebrow">How it works</span>
            <h2>A 7-day kickoff, then compounding monthly work</h2>
            <div style={{ margin: '40px 0', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/shared/factoryjet-audit-call.webp"
                alt="FactoryJet founder on a free audit call — 30 minutes that gives you a clear picture of your local SEO opportunity"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="grid4">
              {STEPS.map((s) => (
                <div className="ucard step" key={s.h}><span className="pill">{s.pill}</span><h3>{s.h}</h3><p>{s.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section>
          <div className="wrap">
            <span className="eyebrow">Honest comparison</span>
            <h2>FactoryJet vs. a typical Arlington SEO agency</h2>
            <div className="cmpwrap">
              <table className="cmp">
                <thead>
                  <tr><th>What matters</th><th className="fjh">FactoryJet</th><th>Typical DFW agency</th></tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.k}>
                      <td className="k">{r.k}</td>
                      <td className="fj">{r.hl ? <span className="hl">{r.fj}</span> : r.fj}</td>
                      <td className="alt">{r.alt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="green">
          <div className="wrap">
            <span className="eyebrow">Proof</span>
            <h2>Real businesses, live sites you can open right now</h2>
            <p className="lead" style={{ maxWidth: 760 }}>We do not use stock screenshots or invented case studies. These are live FactoryJet builds. Open them and run PageSpeed yourself.</p>
            <div style={{ margin: '0 0 36px', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/us/arlington/seo/arlington-tx-business-owner.webp"
                alt="Confident Arlington TX business owner at their thriving local storefront — the kind of growth local SEO delivers"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="clients">
              <span>Impulse Branding Solutions</span><span>Belle Maison</span><span>Shevva Car Driver Hire</span><span>Rukman Transport</span>
            </div>
            <div className="quote">
              <p>&quot;I started FactoryJet to do the opposite of what most agencies do: senior people doing the actual work, a price you see before you sign, and no 12-month handcuffs. If our Arlington SEO does not earn its keep, you leave the next month.&quot;</p>
              <div className="byline">
                <div className="avatar">BB</div>
                <div><div className="nm">Bhavesh Barot</div><div className="ti">Founder, FactoryJet · 25+ years building for SMBs</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="room-peach">
          <div className="wrap">
            <span className="eyebrow">Arlington SEO FAQ</span>
            <h2>Questions, answered like a real call</h2>
            <p className="lead" style={{ maxWidth: 640 }}>Answer-first and honest: the same answers we would give you on the phone. <strong>20 questions covering cost, the DFW market, what&apos;s included, contracts, and getting started.</strong></p>
            <div className="faqgrid">
              <nav className="faqnav">
                {FAQ_GROUPS.map((g) => (
                  <a href={`#${g.id}`} key={g.id}>{g.label} <span className="ct">{g.items.length}</span></a>
                ))}
                <p className="faqhelp">Can&apos;t find your answer?<br /><a href={CALENDLY} style={{ fontWeight: 700, color: 'var(--orange-d)' }}>Talk to the founder →</a></p>
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
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final">
          <div className="wrap">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Get started</span>
            <h2>Ready to own Arlington&apos;s local search?</h2>
            <p className="lead">Start with a free Arlington SEO audit. We will show you where you stand in the Map Pack, what is holding you back, and exactly what we would fix, with zero pressure to continue.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Arlington SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
            <p className="fine">Month-to-month · free audit · no setup fee · senior engineers · <Link href="/us/services/seo">US SEO services</Link></p>
          </div>
        </section>

      </div>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

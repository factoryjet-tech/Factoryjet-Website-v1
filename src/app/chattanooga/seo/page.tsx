import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './chattanooga-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/chattanooga/seo - Chattanooga local-SEO city page. Built 2026-06-11.
   "The Itinerary" layout. Real SiteHeader/SiteFooter/ModalCTAButton/WhatsAppCTA.
   Styles scoped under .cseo (./chattanooga-seo.css, next/font vars, no webfont
   request). CSS route-card hero (text LCP, zero CLS), market photos lazy below
   the fold → Lighthouse 100 target. Source: research/mockup-us-chattanooga-seo-v4.html.
   Honesty: NO pricing anywhere (2026-06-11 rule), free audit, no guarantee,
   month-to-month; real clients only; founder byline. No fake LocalBusiness
   address, no self-serving Review schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/chattanooga/seo';

export const metadata: Metadata = {
  title: 'Chattanooga SEO Company | Local SEO Services in Chattanooga, TN | FactoryJet',
  description:
    'FactoryJet is a Chattanooga SEO company that wins the Map Pack, organic rankings, and AI answers for tourism, Freight Alley B2B, and tri-state local businesses. SEO services in Chattanooga, North Georgia, and Cleveland TN. Free SEO audit, month-to-month, built by senior engineers.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Chattanooga SEO Company | Local SEO Services in Chattanooga, TN | FactoryJet',
    description:
      'Chattanooga SEO company for the whole tri-state metro: Map Pack, organic, and AI answers in one plan, with separate playbooks for tourism and Freight Alley B2B. Free SEO audit, month-to-month, senior engineers, founder-led.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/blog-images/us-chattanooga-seo-og.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Chattanooga SEO company, local SEO services in Chattanooga, Tennessee',
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* ── FAQ (22) - 10 from the approved v4 mockup verbatim + 12 keyword/process adds ── */

const FAQ_ITEMS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'Who is the top SEO company in Chattanooga?',
    a: 'The one that shows proof: Map Pack positions, phone calls, bookings, and AI citations per engine. FactoryJet competes for that title with senior engineers doing the work and no long contracts. Whoever makes your shortlist of the best SEO agency in Chattanooga, ask each one for a client result with real numbers before signing anything.',
  },
  {
    q: 'How much does SEO cost in Chattanooga?',
    a: 'It depends on your market and your starting point. A restaurant chasing tourist searches, a roofer covering the tri-state metro, and a freight broker competing nationally need very different scopes. We explain your exact scope and the investment on a free call, in writing, before you commit to anything.',
  },
  {
    q: 'How long until I see results?',
    a: 'Technical fixes and Google Business Profile work often move Map Pack visibility in four to eight weeks. Competitive organic terms take three to six months, and national Freight Alley keywords sit at the longer end. We show progress markers from week one so you are never guessing.',
  },
  {
    q: 'Do you do SEO for tourism businesses?',
    a: 'Yes, and it is a different playbook. Your buyers search before they arrive, so pre-visit queries, AI Overview answers, and review strategy matter more than classic "near me" work. The two-acts section above is the honest summary of how we split the strategy.',
  },
  {
    q: 'Should I hire an SEO expert in Chattanooga or a big agency?',
    a: 'Hire whoever can show the work and the results. A solo local SEO expert can be excellent but thin on capacity; a big agency can be deep but slow. FactoryJet runs senior engineers with founder access, which is our answer to that trade-off. Either way, demand proof before retainer.',
  },
  {
    q: 'What about SEO plus ads together?',
    a: 'We stay in our lane. A Chattanooga SEO advertising company will bundle paid media with rankings, and that suits some businesses. We focus on organic and AI surfaces because that is where compounding happens, and we will tell you honestly if your situation calls for ads first.',
  },
  {
    q: 'Can you get my business into ChatGPT and Google AI answers?',
    a: 'Yes. AI engines already answer Chattanooga restaurant, attraction, and supplier questions with specific business names. We structure your site so they can quote it, then report your citations per engine every month. It is a standard part of every plan, not an upsell.',
  },
  {
    q: 'Do I need a new website first?',
    a: 'Usually no. If your site is fast and Google can read it, we build on it. If the site itself is the bottleneck we will say so on the first call and you decide. We are also a web design company Chattanooga businesses use for rebuilds, which keeps that advice honest in both directions.',
  },
  {
    q: 'Do you handle local SEO services or full SEO?',
    a: 'Both, in one plan. Local SEO wins the Map Pack while technical, content, and authority work win the organic results and the AI answers. In a market where half your buyers are not local yet, splitting the two is how budgets get wasted.',
  },
  {
    q: 'What is in the free SEO audit?',
    a: 'Your rankings, Map Pack position, site speed, citation health, and a live check of what AI engines say about your business. Thirty minutes, screen shared, and the findings are yours either way. Small business SEO services should start with evidence, not a pitch deck.',
  },
  {
    q: 'What should an SEO company in Chattanooga actually deliver each month?',
    a: 'A written list, not vibes: Google Business Profile updates, content shipped, citations fixed, reviews earned, technical issues closed, and a one-page report tying it all to calls and bookings. If an SEO company in Chattanooga cannot show you last month’s deliverables for a real client, names redacted, keep shopping.',
  },
  {
    q: 'How do I choose between the SEO companies in Chattanooga without getting burned?',
    a: 'Ask every shortlisted firm the same four questions: who exactly does the work, what gets delivered each month in writing, how is success measured, and can you leave without a penalty. Then ask what AI engines say about their current clients. Any of the SEO companies in Chattanooga that dodges those questions, or guarantees a number one position, has already answered them for you.',
  },
  {
    q: 'I searched "seo chattanooga tn" and got mostly national firms. Do you actually work here?',
    a: 'We serve Chattanooga and the whole tri-state metro, with the founder on every discovery call. Searches for SEO in Chattanooga, TN surface national resellers because they outspend locals on ads, and that is exactly the opportunity: businesses that invest in real SEO in Chattanooga outrank those template operations on the searches that matter, because Google rewards genuine local signals.',
  },
  {
    q: 'What does working with a Chattanooga SEO agency look like in the first 30 days?',
    a: 'Week one is the live audit on a shared screen. Weeks two through four are foundation work: site speed, schema, crawl fixes, and a proper Google Business Profile rebuild. A Chattanooga SEO agency worth keeping gives you a written scope before anything starts and a progress note every week, so you always know what was done and what comes next. That is how we run it, as an SEO agency Chattanooga businesses can audit week by week.',
  },
  {
    q: 'Is SEO marketing in Chattanooga different from running Google Ads?',
    a: 'Yes, and they compound differently. Ads buy visibility that stops the moment the budget does. Chattanooga SEO marketing builds an asset: rankings, reviews, and AI citations that keep producing calls and bookings without a per-click bill. Many owners type "seo marketing chattanooga" wanting the two compared honestly, so here it is: most clients run both early on, then watch the paid share shrink as organic takes over.',
  },
  {
    q: 'Do you offer SEO consulting in Chattanooga, TN, or only full management?',
    a: 'Both. Some businesses want hands-on management; others have an in-house marketer and want SEO consulting in Chattanooga, TN to set the strategy, audit the technical side, and review the work quarterly. Either way you get senior engineers, written recommendations, and no long contract holding you in place.',
  },
  {
    q: 'What is included in your Chattanooga SEO services month to month?',
    a: 'Everything in the eight-job list above: Google Business Profile management, reviews, citations, tri-state area pages, technical SEO, answer-first content, earned mentions, and per-engine AI tracking. Our SEO services in Chattanooga run as one plan rather than a menu of upsells, so the engagement never skips the unglamorous work that actually moves rankings.',
  },
  {
    q: 'Do you offer local SEO services in Chattanooga on their own?',
    a: 'Yes. If the Map Pack is your battleground, we can work as a focused Chattanooga local SEO company: your Google Business Profile, reviews, citations, and area pages across Hamilton County and North Georgia. The best local SEO services in Chattanooga are the ones measured in phone calls, so that is how we report, whatever the scope.',
  },
  {
    q: 'Every agency claims to be the top SEO company in Chattanooga, TN. How do I check?',
    a: 'Make them show their own results first: search "top seo company chattanooga tn" and see who actually ranks versus who bought the spot. Then ask for one client engagement with before-and-after numbers, names redacted is fine. Claims of being the top SEO company in Chattanooga are free to make; rankings, reviews, and per-engine AI citations are not. Judge on the second list.',
  },
  {
    q: 'What makes an AI SEO agency in Chattanooga different from a traditional one?',
    a: 'A traditional shop optimizes for ten blue links. An AI SEO agency in Chattanooga also structures your site so ChatGPT, Gemini, Claude, and Google AI Overviews can quote it, then proves it with per-engine citation counts. If you are evaluating one, ask a single question: can you show me my citations by engine, monthly? Very few can. We do, on every plan.',
  },
  {
    q: 'How do you handle Google reviews and our Google Business Profile?',
    a: 'We manage your Google Business Profile weekly: categories, services, photos, posts, and Q&A. For reviews, we set up a simple ask-and-respond system your team can run in minutes per job, because steady review velocity from real customers beats any shortcut, and in a city where 11 million visitors leave reviews as they pass through, it is the cheapest prominence engine you control.',
  },
  {
    q: 'Is there a contract, setup fee, or cancellation penalty?',
    a: 'No long-term contract, no setup fee, no penalty. Everything is month to month with 30 days notice, and you keep everything we build: your profile, your content, your citations, your data. We think an SEO partner should re-earn the engagement every month, so that is how we bill.',
  },
];

/* ── Section data ── */

const ROUTE_STOPS: { dot: string; b: string; s: string }[] = [
  { dot: '1', b: '"things to do in chattanooga"', s: 'An AI Overview answers first. Eleven million people a year make this kind of search before they ever see the river.' },
  { dot: '2', b: '"best restaurants near the aquarium"', s: 'The Map Pack decides where they eat. Three pins, winner takes most of the table.' },
  { dot: '3', b: '"chattanooga cabin rental with hot tub"', s: 'Booked days in advance, from a phone, off page one. Nobody scrolls to page two on vacation.' },
  { dot: '✓', b: 'Your business, in the answer', s: 'That is the job. Local SEO services tuned for how people actually plan a Chattanooga trip.' },
];

const STATS: { n: string; unit: string; t: string; s: string }[] = [
  { n: '11', unit: 'M', t: 'visitors a year spending $1.8 billion across restaurants, lodging, and attractions, and almost every trip starts with a search made from another city', s: 'Chattanooga Tourism Co., 2024' },
  { n: '80', unit: '%', t: 'of US freight passes through the region, which makes Chattanooga a national B2B search market hiding inside a tourist town', s: 'Freight Alley, FreightWaves' },
  { n: '$5.3', unit: 'B', t: 'in community benefit from the Gig City fiber network over 15 years, the infrastructure your fast website already runs on', s: 'UTC study, Bento Lobo, Ph.D.' },
];

const FACTS: { k: string; v: string }[] = [
  { k: 'Annual visitors', v: '11M+' },
  { k: 'Visitor spending', v: '$1.8B' },
  { k: 'Tourism jobs', v: '~13,000' },
  { k: 'US freight through region', v: '~80%' },
  { k: 'Logistics output, yearly', v: '~$1.6B' },
  { k: 'Fiber benefit, 15 years', v: '$5.3B' },
  { k: 'Interstates converging', v: 'I-75 · I-24 · I-59' },
];

const MARKET: { badge: string; h: string; p: string }[] = [
  { badge: '🏞️', h: 'Tourism, outdoor, and hospitality', p: 'Eleven million visitors spent $1.8 billion here in 2024 (Chattanooga Tourism Co.), supporting roughly 13,000 jobs across restaurants, lodging, outfitters, and attractions. Those visitors search before they arrive, which means the highest value Chattanooga SEO services for this industry target pre-visit queries: things to do, where to eat near the aquarium, rafting trips, cabin rentals on Lookout Mountain. The Map Pack near downtown, the North Shore, and the Southside decides where they spend, and AI Overviews now answer the planning questions first.' },
  { badge: '🚛', h: 'Freight, logistics, and Freight Alley B2B', p: 'Roughly 80 percent of US freight passes through this region (FreightWaves), and local logistics generates about $1.6 billion in annual output. Kenco, Steam Logistics, US Xpress, and FreightWaves itself anchor a cluster the trade press calls the Silicon Valley of trucking. The brokers, warehouses, and freight-tech suppliers around them compete for national shipper keywords, not local ones. That is a different playbook: capability pages, spec answers, and the citations AI engines quote when a procurement team asks for a shortlist.' },
  { badge: '🏭', h: 'Advanced manufacturing and its suppliers', p: 'Volkswagen builds the ID.4 at Enterprise South, Novonix approved a second battery graphite plant in 2025, and Komatsu and Astec round out the anchor tenants. The SEO buyers here are the machine shops, industrial service firms, and equipment dealers selling into that ecosystem, regionally and nationally. They need authority content that answers an engineer’s questions, because their customers compare three suppliers before a single phone call gets made.' },
  { badge: '🏥', h: 'Healthcare and practices', p: 'Erlanger Health is the region’s largest system, with CHI Memorial alongside and BlueCross BlueShield of Tennessee and Unum both headquartered downtown. The SMB layer underneath, private practices, dentists, physical therapists, and med spas, competes for patient searches across Hamilton County and North Georgia. For them, the Map Pack plus review velocity plus answer-first patient content is the whole acquisition channel, and it is exactly what best local SEO services in Chattanooga should mean in practice.' },
  { badge: '🔧', h: 'Home services and construction', p: 'In-migration and housing growth keep HVAC, roofing, remodeling, and landscaping demand climbing across East Brainerd, Hixson, Ooltewah, and over the Georgia line. This is the most contested Map Pack battleground in the metro and the place where small business SEO services earn their keep fastest: service-area pages, reviews, and a site that loads instantly on a phone in a driveway.' },
];

const ACT_TOUR: string[] = [
  'Pre-visit keyword strategy, not just "near me"',
  'Map Pack work near the aquarium, downtown, the North Shore, and Lookout Mountain',
  'AI Overview answers for "things to do" style planning queries',
  'Review velocity that outranks the chains on trust, not budget',
  'Pages fast enough for a phone on a highway rest stop',
];

const ACT_FREIGHT: string[] = [
  'National keyword maps for supplier and capability searches',
  'Pages that answer spec and service questions directly, in plain words',
  'Citations AI engines quote when buyers ask for recommendations',
  'A Chattanooga address used as a trust anchor, not a limiter',
  'Authority content that survives an engineer’s skepticism',
];

const DELIVERABLES: { mm: string; h: string; p: string }[] = [
  { mm: '01 · Local', h: 'Google Business Profile', p: 'Managed weekly, not quarterly. Categories, services, photos, posts, and Q&A maintained like the storefront it is.' },
  { mm: '02 · Local', h: 'Reviews engine', p: 'A repeatable system for earning, answering, and learning from reviews. Velocity beats volume, and we build velocity.' },
  { mm: '03 · Local', h: 'Citations and listings', p: 'Your name, address, and phone made consistent across the directories Google and AI engines actually check.' },
  { mm: '04 · Local', h: 'Tri-state area pages', p: 'Dedicated pages for Chattanooga, North Georgia, and Cleveland TN, each written for that market, never copy-pasted.' },
  { mm: '05 · Technical', h: 'Technical SEO', p: 'Speed, clean code, schema, crawlability. We build to 100 out of 100 Google speed scores and prove it on request.' },
  { mm: '06 · Content', h: 'Answer-first content', p: 'Pages built around the questions tourists, locals, and freight buyers actually type, written plainly, reviewed by a human.' },
  { mm: '07 · Authority', h: 'Earned mentions', p: 'Real citations in places search and AI engines trust. No bulk links, no directories nobody reads, no risk.' },
  { mm: '08 · Proof', h: 'Five minute reporting', p: 'Calls, direction requests, rankings, and AI citations per engine. One page, monthly, readable over coffee.' },
];

const PLAN: { wk: string; h: string; p: string }[] = [
  { wk: 'Week 1', h: 'The audit, live', p: 'We pull up your rankings, your Map Pack position, your site speed, and what ChatGPT says about your business while you watch. You see the same screen we do. Findings are yours to keep whether or not we continue.' },
  { wk: 'Weeks 2 to 4', h: 'Fix the foundation', p: 'Technical repairs first: speed, schema, crawl issues, and the Google Business Profile rebuilt properly. This is the boring work most Chattanooga SEO agencies skip because it does not show up in a slide deck. It shows up in rankings instead, and on Gig City fiber there is no excuse for a slow site.' },
  { wk: 'Weeks 5 to 8', h: 'Build the surface area', p: 'Area pages across the tri-state metro, answer-first content for your highest intent questions, and the citation cleanup that makes Google trust your address. Tourism clients get their pre-visit pages here; Freight Alley clients get their capability pages.' },
  { wk: 'Weeks 9 to 12', h: 'Earn the trust signals', p: 'Review velocity systems go live. Earned mentions begin landing. The first AI citation checks run, engine by engine, so we know exactly where you stand on the newest surface before your competitors know it exists.' },
  { wk: 'Every month after', h: 'Compound and report', p: 'One page, five minutes: calls, directions, rankings, AI citations, and what we are doing next month. SEO is compounding work and the report shows the curve, not vanity numbers.' },
];

const FACTORS: { n: string; h: string; p: string }[] = [
  { n: '01', h: 'Relevance', p: 'Does your profile and site clearly say what you do? A profile listing "whitewater rafting outfitter" with trips itemized beats a vague one every time. We make relevance explicit on every page, in language both Google and AI engines parse cleanly, whether the searcher is a tourist in Atlanta or a homeowner in Hixson.' },
  { n: '02', h: 'Distance', p: 'You cannot move your shop, but you can tell Google exactly where you work. Area pages for North Georgia and Cleveland TN widen your effective radius, which matters in a metro where customers cross a state line without noticing. Tourism businesses go further: pre-visit pages reach buyers hundreds of miles out.' },
  { n: '03', h: 'Prominence', p: 'Reviews, mentions, links, and the general weight of evidence that you are a real, busy business. This compounds monthly. In a city where 11 million annual visitors leave reviews as they pass through, a working review system is the cheapest prominence engine in local search. Start before your rival does.' },
];

const COMPARE: { k: string; fj: string; local: string; natl: string }[] = [
  { k: 'Who does the work', fj: 'Senior engineers, founder on every call', local: 'Small local team, often design-first with SEO as the add-on', natl: 'Offshore queue behind an account manager' },
  { k: 'Map Pack focus', fj: 'Weekly GBP management, tri-state area pages', local: 'Profile set up once, touched quarterly', natl: 'Template city page with your logo' },
  { k: 'Pre-visit and B2B search', fj: 'Separate playbooks for tourism and Freight Alley', local: 'One generic local playbook for everyone', natl: 'Not considered' },
  { k: 'AI search', fj: 'Citations tracked per engine, monthly', local: 'Early messaging, no deliverables behind it', natl: 'Not offered' },
  { k: 'Site speed', fj: 'Built and kept at 100 out of 100', local: 'Depends on the theme', natl: 'Never measured' },
  { k: 'Contract', fj: 'Month to month, 30 day notice', local: 'Six to twelve months', natl: 'Twelve months, auto-renew' },
  { k: 'Reporting', fj: 'One page: calls, rankings, AI citations', local: 'Ranking screenshots and activity logs', natl: '20 page PDF nobody reads' },
];

const INDUSTRIES: { h: string; p: string }[] = [
  { h: 'Restaurants and craft beverage', p: 'Map Pack near the aquarium, downtown, and the Southside, plus the pre-visit searches tourists make from Atlanta. Taprooms and distilleries get the discovery-to-reorder loop too.' },
  { h: 'Outfitters, lodging, attractions', p: 'Rafting, climbing, hang gliding, cabins. Buyers book days ahead from a phone, off page one and increasingly off an AI answer. We build the pages those surfaces quote.' },
  { h: 'HVAC, plumbing, roofing', p: 'Service-area coverage across Hamilton County and over the Georgia line, emergency-intent pages, and review velocity that outruns the franchises.' },
  { h: 'Logistics and freight B2B', p: 'National keyword strategy for brokers, warehouses, and freight-tech suppliers. Your buyers search capabilities, not cities, and your pages should answer like an expert.' },
  { h: 'Clinics and practices', p: 'Map Pack plus reviews plus patient-question content. The trifecta that fills appointment books across Hamilton County and the North Georgia catchment.' },
  { h: 'Professional services', p: 'Law firms, CPAs, staffing, and the B2B firms serving the manufacturing and logistics base. Authority content for buyers who compare three providers before one call.' },
];

const TAGS = ['real estate teams', 'med spas', 'physical therapy', 'auto repair', 'veterinarians', 'gyms', 'landscaping', 'remodelers', 'machine shops', 'event venues', 'childcare', 'senior care'];

const TRI: { i: string; b: string; p: string }[] = [
  { i: 'Tennessee', b: 'Chattanooga, TN', p: 'Downtown, the North Shore, Southside, East Brainerd, Hixson, and Ooltewah. The center of search gravity, and the neighborhoods that show up as modifiers in real queries.' },
  { i: 'Georgia', b: 'North Georgia', p: 'Fort Oglethorpe, Ringgold, and the Dalton corridor. Thousands of households who shop, eat, and hire in Chattanooga every week, invisible to an agency that only optimizes for Tennessee.' },
  { i: 'Tennessee', b: 'Cleveland, TN', p: 'Bradley County spillover, thirty minutes up I-75. Growing demand, thinner competition, and rankings that are cheaper to win now than they will be in two years.' },
];

/* ── JSON-LD: WebPage + Service (NO offers/pricing) + FAQPage (derived) ── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Chattanooga SEO Company | Local SEO Services in Chattanooga, TN',
  url: CANONICAL,
  description:
    'FactoryJet is a Chattanooga SEO company offering local SEO services across the tri-state metro: Google Business Profile, reviews, citations, technical SEO, content, and AI search optimization, with separate playbooks for tourism and Freight Alley B2B, a free audit, and month-to-month terms.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO Services in Chattanooga, TN',
  serviceType: 'Search engine optimization',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'City', name: 'Chattanooga', containedInPlace: { '@type': 'State', name: 'Tennessee' } },
    { '@type': 'City', name: 'Cleveland', containedInPlace: { '@type': 'State', name: 'Tennessee' } },
    { '@type': 'City', name: 'Fort Oglethorpe', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    { '@type': 'City', name: 'Ringgold', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    { '@type': 'City', name: 'Dalton', containedInPlace: { '@type': 'State', name: 'Georgia' } },
  ],
  url: CANONICAL,
  description:
    'Chattanooga SEO services covering the Google Map Pack, organic rankings, and AI answers: Google Business Profile management, reviews, citations, tri-state area pages, technical SEO, answer-first content, earned mentions, and per-engine AI citation reporting, with dedicated playbooks for tourism and Freight Alley B2B. Month-to-month, free audit.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function ChattanoogaSeoPage() {
  return (
    <>
      <Script id="chattanooga-seo-webpage-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="chattanooga-seo-service-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="chattanooga-seo-faq-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'US SEO Services', url: 'https://factoryjet.com/services/seo' },
          { name: 'Chattanooga SEO', url: CANONICAL },
        ]}
      />

      <div className="cseo">
        {/* 1 HERO - The Itinerary */}
        <section className="hero">
          <div className="wrap">
            <div>
              <span className="eb rise d1">SEO COMPANY · CHATTANOOGA, TN</span>
              <h1 className="rise d2">11 million visitors plan their trip <em>before they arrive.</em></h1>
              <p className="sub rise d3">Tourists google Chattanooga restaurants from Atlanta. Freight buyers research suppliers from anywhere on the I-75 corridor. Homeowners in East Brainerd type &quot;near me&quot; the day the AC dies. Every one of those journeys starts in a search box, and more of them now end in an AI answer. A Chattanooga SEO company should be able to win you all three, and prove it with calls, not charts.</p>
              <HeroInlineForm region="us" source="chattanooga_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <a className="btn btn-ghost" href="#plan">See the 90 day plan</a>
                <WhatsAppCTA city="Chattanooga" service="SEO" />
              </div>
              <div className="trustgrid rise d4">
                <div className="tchip"><i /><span><b>Tri-state Map Pack</b> strategy built in</span></div>
                <div className="tchip"><i /><span><b>Month to month</b>, no lock-in</span></div>
                <div className="tchip"><i /><span><b>AI answers tracked</b> on every plan</span></div>
              </div>
            </div>
            <div className="heroR rise d3">
              <div className="route">
                <div className="stamp">PRE-VISIT SEARCH</div>
                <p className="rh">One visitor&apos;s itinerary, before the car leaves Atlanta</p>
                {ROUTE_STOPS.map((s) => (
                  <div className="stop" key={s.b}>
                    <div className="dot" aria-hidden="true">{s.dot}</div>
                    <div><b>{s.b}</b><span>{s.s}</span></div>
                  </div>
                ))}
              </div>
              <div className="chiprow">
                <div className="chip"><b>3 interstates</b>I-75, I-24, I-59 converge here. So does the search demand</div>
                <div className="chip"><b>2 states</b>Tennessee and North Georgia, one metro, one strategy</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 STAT STRIP */}
        <section className="strip">
          <div className="wrap">
            {STATS.map((s) => (
              <div className="stat" key={s.s}>
                <div className="n">{s.n}<i>{s.unit}</i></div>
                <div className="t">{s.t}</div>
                <div className="s">{s.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 WHAT IS LOCAL SEO IN CHATTANOOGA (definition, answer-first) */}
        <section>
          <div className="wrap">
            <div className="edit">
              <div>
                <span className="eb">The short answer</span>
                <h2>What is local SEO in Chattanooga, <em>actually?</em></h2>
                <p className="body">Local SEO is the work that makes your business show up when someone searches for what you sell in or around Chattanooga. It covers three surfaces at once: <b>the Google Map Pack</b> (the three businesses pinned to the map), <b>the organic results</b> below it, and now <b>the AI answers</b> from ChatGPT, Gemini, and Google AI Overviews that increasingly sit on top of everything.</p>
                <p className="body">What makes a Chattanooga local SEO company different from one in any other mid-size city is who is doing the searching. Here, a huge share of your buyers are not in Chattanooga yet. Tourists plan from Atlanta, Nashville, and Birmingham. Freight and manufacturing buyers research from three states away. So the work splits in two: classic Map Pack and &quot;seo near me&quot; coverage for Hamilton County locals, and pre-visit or non-geo search coverage for everyone driving toward you on the interstate. An agency that only does one half hands you half a market.</p>
                <p className="body">The part most SEO companies in Chattanooga skip is the third surface. A growing share of buyers now check an AI answer before they call anyone, and AI engines pick their recommendations from structured, verifiable websites. Every plan we run treats AI search as a first-class surface, not an upsell, because the restaurants, outfitters, and contractors cited by AI today are compounding an advantage their competitors have not noticed yet. If you searched &quot;seo chattanooga tn&quot; and landed here, this page itself is the method working.</p>
                <div className="midcta">
                  <ModalCTAButton label="Check where you rank today, free" region="us" modalVariant="seo" btnVariant="primary-light" />
                  <span>30 minutes · live screen share · you keep the findings</span>
                </div>
              </div>
              <div className="factbox">
                <h3>Chattanooga search market, at a glance</h3>
                {FACTS.map((f) => (
                  <div className="fr" key={f.k}><span>{f.k}</span><span className="fv">{f.v}</span></div>
                ))}
                <p className="src">Sources: Chattanooga Tourism Co. 2024, FreightWaves, UTC fiber study</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 THE CHATTANOOGA MARKET */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Know the market, win the market</span>
            <h2>SEO in Chattanooga is five different games. <em>We play all of them.</em></h2>
            <div className="mwrap">
              <div>
                {MARKET.map((m) => (
                  <div className="mrow" key={m.h}>
                    <div className="badge" aria-hidden="true">{m.badge}</div>
                    <div><h3>{m.h}</h3><p>{m.p}</p></div>
                  </div>
                ))}
              </div>
              <div className="mphotos">
                <div className="pslot tall">
                  <img
                    src="/images/us/chattanooga/seo/chattanooga-seo-1.webp"
                    alt="Chattanooga riverfront cafe owner checking her phone for new customer calls, the kind of local business our Chattanooga SEO services put in the Map Pack"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pslot wide">
                  <img
                    src="/images/us/chattanooga/seo/chattanooga-seo-2.webp"
                    alt="Freight yard at dusk in Chattanooga with a dispatcher on a tablet, the Freight Alley B2B side of SEO in Chattanooga, TN"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 TWO ACTS: TOURISM + FREIGHT */}
        <section>
          <div className="wrap">
            <span className="eb">Two markets, one city</span>
            <h2>Chattanooga sells to tourists <em>and</em> to Freight Alley. Your SEO should know which one you are.</h2>
            <p className="lead">Most of the SEO companies in Chattanooga run one generic playbook for every client. But a riverfront restaurant and a freight brokerage have almost nothing in common in how their customers search. We start every engagement by deciding which act you are in, and some businesses are in both.</p>
            <div className="acts">
              <div className="act tour">
                <h3>Act one: <em>the visitor economy</em></h3>
                <p>Restaurants, outfitters, lodging, attractions, taprooms. Your buyers search before they arrive, from Atlanta, Nashville, and Birmingham, and they decide fast. Generic local SEO misses them because they are not local yet, and never will be.</p>
                <ul>
                  {ACT_TOUR.map((li) => (<li key={li}>{li}</li>))}
                </ul>
              </div>
              <div className="act freight">
                <h3>Act two: <em>Freight Alley B2B</em></h3>
                <p>Logistics suppliers, manufacturers, and the services selling into the corridor. Your buyers are procurement teams and owner-operators researching from three states away, and they never type the word Chattanooga into the search box.</p>
                <ul>
                  {ACT_FREIGHT.map((li) => (<li key={li}>{li}</li>))}
                </ul>
              </div>
            </div>
            <div className="midcta">
              <ModalCTAButton label="Find out which act your business is in" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>sometimes the answer is both, and the plan covers both</span>
            </div>
          </div>
        </section>

        {/* 6 DELIVERABLES (8 cards, 4x2) */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">What our Chattanooga SEO services include</span>
            <h2>Eight jobs. One plan. <em>Zero filler.</em></h2>
            <p className="lead">This is the full menu of SEO services Chattanooga businesses actually need, in one engagement. A perfect Google Business Profile on a slow website is a wasted profile, and great content nobody can find is a diary.</p>
            <div className="del">
              {DELIVERABLES.map((d) => (
                <div className="dc" key={d.h}>
                  <span className="mm">{d.mm}</span>
                  <h3>{d.h}</h3>
                  <p>{d.p}</p>
                </div>
              ))}
            </div>
            <div className="midcta">
              <ModalCTAButton label="Get the full scope for your business" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>explained in writing, on a free call</span>
            </div>
          </div>
        </section>

        {/* 7 PROCESS (90 days) */}
        <section id="plan">
          <div className="wrap">
            <span className="eb">The first 90 days</span>
            <h2>From audit to answering phones, <em>week by week.</em></h2>
            <div className="plan5">
              {PLAN.map((p) => (
                <div className="pc5" key={p.h}>
                  <span className="wk">{p.wk}</span>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 RANKING FACTORS (green room) */}
        <section className="groom">
          <div className="wrap">
            <span className="eb">How Google picks the Map Pack</span>
            <h2>Three factors decide who gets the call. <em>All three are workable.</em></h2>
            <p className="lead">Google has said publicly that local results weigh relevance, distance, and prominence. Here is what each one means for a Chattanooga business, in plain words.</p>
            <div className="rf">
              {FACTORS.map((f) => (
                <div className="rfc" key={f.h}>
                  <h3><span>{f.n}</span> {f.h}</h3>
                  <p>{f.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9 COMPARISON */}
        <section>
          <div className="wrap">
            <span className="eb">An honest comparison</span>
            <h2>FactoryJet vs the usual <em>Chattanooga options.</em></h2>
            <p className="lead">Pick any seasoned SEO company Chattanooga has produced, and you will find real strengths: long local track records, full-service bundles, twenty-year client lists. Here is where we differ, stated plainly so you can check it.</p>
            <div className="cmpwrap">
              <table>
                <thead>
                  <tr><th scope="col"><span className="sr-only">Criteria</span></th><th scope="col">FactoryJet</th><th scope="col">Typical Chattanooga shop</th><th scope="col">National reseller</th></tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.k}>
                      <td>{r.k}</td>
                      <td>{r.fj}</td>
                      <td>{r.local}</td>
                      <td>{r.natl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="midcta">
              <ModalCTAButton label="Compare us on your own numbers" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>bring any proposal, we will walk through it line by line</span>
            </div>
          </div>
        </section>

        {/* 10 INDUSTRIES (lavender room) */}
        <section className="lroom">
          <div className="wrap">
            <span className="eb">Built for Chattanooga businesses</span>
            <h2>The industries we rank <em>in this metro.</em></h2>
            <div className="ind">
              {INDUSTRIES.map((i) => (
                <div className="ic" key={i.h}><h3>{i.h}</h3><p>{i.p}</p></div>
              ))}
            </div>
            <ul className="tags" aria-label="More industries we serve in Chattanooga">
              {TAGS.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </section>

        {/* 11 TRI-STATE COVERAGE (split + route map) */}
        <section>
          <div className="wrap">
            <span className="eb">The tri-state pack</span>
            <h2>Your customers cross state lines. <em>Your rankings should too.</em></h2>
            <div className="vwrap">
              <div>
                <p className="lead">Chattanooga sits on the Georgia border, and the metro spills across it without slowing down. A local SEO expert who stops at the state line hands you half a market. Every plan we run covers the whole catchment your customers actually live in.</p>
                <div className="vquote"><b>The mechanics matter here.</b> Google decides what to show partly by where the searcher stands, so a roofer in East Brainerd can be invisible in Ringgold, eight miles away, simply because nothing on the website tells Google that Georgia is in the service area.</div>
                <p className="body" style={{ marginTop: 14 }}>We fix that with dedicated area pages, service-area settings on your Google Business Profile, and citations that name every community you serve. No tricks, just coverage that matches your actual trucks.</p>
              </div>
              <div className="vmap" role="img" aria-label="Tri-state route map showing Chattanooga, North Georgia, Cleveland TN, and Atlanta along I-75">
                <span className="road" style={{ top: '66%', left: '42%', width: '34%', transform: 'rotate(-34deg)' }} />
                <span className="road" style={{ top: '40%', left: '28%', width: '24%', transform: 'rotate(-26deg)' }} />
                <span className="road" style={{ top: '26%', left: '38%', width: '26%', transform: 'rotate(-5deg)' }} />
                <span className="vmtn" style={{ top: '48%', left: '56%' }} />
                <span className="vmtn" style={{ top: '55%', left: '66%', transform: 'scale(.8)' }} />
                <span className="vmtn" style={{ top: '42%', left: '70%', transform: 'scale(.6)' }} />
                <span className="vpin hot" style={{ top: '20%', left: '22%' }}>Chattanooga</span>
                <span className="vpin" style={{ top: '44%', left: '42%' }}>North Georgia</span>
                <span className="vpin" style={{ top: '14%', left: '60%' }}>Cleveland TN</span>
                <span className="vpin" style={{ top: '74%', left: '64%' }}>Atlanta</span>
                <span className="tag">I-75 NORTH · TRI-STATE · ONE PLAN</span>
              </div>
            </div>
            <div className="tri">
              {TRI.map((t) => (
                <div className="tc" key={t.b}><i>{t.i}</i><b>{t.b}</b><p>{t.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* 12 AI SEARCH (peach room) */}
        <section className="proom">
          <div className="wrap">
            <span className="eb">The newest surface</span>
            <h2>When travelers and buyers ask AI, <em>be the answer.</em></h2>
            <div className="aiwrap">
              <div>
                <p className="body">Ask ChatGPT what to do in Chattanooga with kids and it names specific attractions. Ask Gemini for a good logistics partner near the I-75 corridor and it answers with companies, pulled from the websites and mentions it trusts. Google now shows AI Overviews above the regular results for a growing share of planning and recommendation questions, exactly the kind 11 million visitors ask before they arrive.</p>
                <p className="body">This is the quietest land grab in local search, and almost nobody here is competing for it. One or two firms have started talking about AI search, but as the ai seo agency in Chattanooga that actually ships deliverables for it, citation tracking included, we have the field largely to ourselves. We make your pages quotable: clear questions, direct answers, schema underneath, and real mentions AI engines can verify. Then we track your citations in ChatGPT, Gemini, Claude, and Google AI Overviews every month, so AI visibility becomes a number on your report instead of a mystery. Pair it with our <Link href="/services/ai-seo">US AI SEO service</Link> for the deepest coverage.</p>
              </div>
              <div className="mini-ac" aria-label="Example of an AI assistant recommending a Chattanooga business">
                <div className="h"><i /> ai-assistant · live answer</div>
                <div className="q">&quot;Best restaurant near the Chattanooga aquarium?&quot;</div>
                <div className="a">Based on reviews, walking distance, and verified local mentions, <mark>your business</mark> is a frequently recommended pick for visitors planning a day around the aquarium…</div>
                <div className="h ft">that answer is the product · we engineer it</div>
              </div>
            </div>
            <ul className="engines" aria-label="AI engines we track">
              <li>ChatGPT ✓ tracked</li>
              <li>Gemini ✓ tracked</li>
              <li>Claude ✓ tracked</li>
              <li>AI Overviews ✓ tracked</li>
            </ul>
            <div className="midcta">
              <ModalCTAButton label="Ask us what AI says about you right now" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>we run the check live on the call</span>
            </div>
          </div>
        </section>

        {/* 13 FAQ (22) */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Questions, answered straight</span>
            <h2>Chattanooga SEO <em>FAQ.</em></h2>
            <p className="lead">22 questions, answered the way we would on a call: answer first, no hedging, no fine print.</p>
            <div className="fwrap">
              {FAQ_ITEMS.map((f) => (
                <div className="fi" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
            <p className="fnote">Still deciding? Compare our <Link href="/services/seo">US SEO services</Link> and <Link href="/services/ai-seo">AI SEO services</Link>, or just <a href={CALENDLY}>ask the founder directly</a>.</p>
          </div>
        </section>

        {/* 14 TEAM */}
        <section className="team">
          <div className="wrap">
            <div className="twrap">
              <div>
                <img
                  src="/images/us/services/seo/team-cutout.webp"
                  alt="The FactoryJet engineering team that builds and ranks Chattanooga websites"
                  width={1000}
                  height={688}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <span className="eb">Behind the rankings</span>
                <h2>Engineers first. <em>Marketers second.</em></h2>
                <p className="body">The same team that ships websites scoring 100 out of 100 on Google&apos;s speed tests runs your SEO. That ordering matters: most ranking problems in Chattanooga are engineering problems wearing a marketing costume, and an agency that cannot open the code can only write reports about it.</p>
                <p className="body">In Gig City, on America&apos;s fastest fiber, a slow site is a choice we never make. You work with senior people from day one: the founder runs every discovery call, an engineer owns your account, and nobody hands you off to a junior in month two.</p>
                <div className="tstats">
                  <div className="ts"><b>500+</b><span>businesses served</span></div>
                  <div className="ts"><b>100/100</b><span>speed score standard</span></div>
                  <div className="ts"><b>25+ yrs</b><span>engineering depth</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 15 FOUNDER CTA */}
        <section className="founder">
          <div className="wrap">
            <div>
              <span className="eb">FOUNDER ACCESS</span>
              <h2>11 million visitors are searching. <em>So is Freight Alley.</em></h2>
              <p className="fp">Book a 30 minute call. We pull up your Chattanooga rankings, your Map Pack position, and what ChatGPT says about your business, live, while you watch. You keep the findings either way, and the scope arrives in writing, never as a surprise. If you want an SEO consultant&apos;s honest read before you spend anything, this is it.</p>
              <p className="fl">Also serving: North Georgia · Cleveland TN · explore <Link href="/chattanooga/ecommerce-development">ecommerce development in Chattanooga</Link> and our <Link href="/services/seo">US SEO services</Link></p>
            </div>
            <div className="fcard">
              <div className="av" aria-hidden="true">BB</div>
              <p>&quot;Hi, I&apos;m Bhavesh, founder of FactoryJet. I run every discovery call myself, so by minute 10 we already know whether what you need pays for itself, and how fast.&quot;</p>
              <div className="stack">
                <ModalCTAButton label="Get your free Chattanooga SEO audit" region="us" modalVariant="seo" btnVariant="primary-dark" />
                <a className="btn btn-ghost-dark" href={CALENDLY}>Book a 30 minute call</a>
                <WhatsAppCTA city="Chattanooga" service="SEO" variant="dark" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './lincoln-seo.css';

/* ----------------------------------------------------------------------------
   /us/lincoln/seo - Lincoln, NE SEO city page. Built 2026-06-11.
   "The Split Ticket" layout: centered hero splitting into a green LOCAL lane
   and a lavender NATIONAL lane. Real SiteHeader/SiteFooter/ModalCTAButton/
   WhatsAppCTA. Styles scoped under .lseo (./lincoln-seo.css, next/font vars,
   no webfont request). CSS lanes hero (text LCP, zero CLS), market photos lazy
   below the fold with intrinsic dimensions, zero page-level JS
   -> Lighthouse 100 target. Source: research/mockup-us-lincoln-seo-v4.html.
   Honesty: NO pricing anywhere (2026-06-11 rule), free audit, no guarantee,
   month-to-month; founder byline. No fake LocalBusiness address, no
   self-serving Review schema.
---------------------------------------------------------------------------- */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/lincoln/seo';

export const metadata: Metadata = {
  title: 'Lincoln SEO Company | Local SEO Services in Lincoln, NE | FactoryJet',
  description:
    'FactoryJet is a Lincoln SEO company running both lanes in one plan: local SEO services in Lincoln, NE for the Map Pack, and national SEO for the insurers, ag-tech, and SaaS teams selling from the Silicon Prairie. Free SEO audit, month-to-month, built by senior engineers.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Lincoln SEO Company | Local SEO Services in Lincoln, NE | FactoryJet',
    description:
      'Lincoln SEO company for both lanes: Map Pack wins from the Haymarket to 84th Street, plus national rankings and AI answers for businesses selling coast to coast from Lincoln. Free SEO audit, month-to-month, senior engineers, founder-led.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/blog-images/us-lincoln-seo-og.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Lincoln SEO company, local SEO services in Lincoln, Nebraska',
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* -- FAQ (22) - 10 from the approved v4 mockup verbatim + 12 keyword/process adds -- */

const FAQ_ITEMS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'Who is the best SEO company in Lincoln?',
    a: 'The one that understands which lane you sell in and can prove results there. FactoryJet competes for that title with engineers doing the work, local and national strategy under one roof, and AI citations tracked monthly. Whatever shortlist you build for the best SEO agency in Lincoln, ask each one for a client result with real numbers before signing anything.',
  },
  {
    q: 'How much does SEO cost in Lincoln?',
    a: 'It depends on your lane, your competition, and your starting point. A Haymarket restaurant fighting for the Map Pack and an insurance services firm chasing national keywords need very different scopes. We explain your exact scope and price on a free call, in writing, before you commit to anything.',
  },
  {
    q: 'Do you handle local SEO for Lincoln businesses?',
    a: 'Yes. As a local SEO company Lincoln NE businesses can actually reach, we manage your Google Business Profile weekly, build real citations, earn review velocity, and structure your site so AI tools quote it. If you searched best local seo services in Lincoln to get here, that lane is the first half of every plan we run.',
  },
  {
    q: 'We sell nationally from Lincoln. Does local SEO even matter?',
    a: 'Less than you would think, and that is fine. National lane plans skip Map Pack work and put the budget into category content, authority mentions, and AI answer coverage where your buyers actually are. Paying for "seo near me" work you do not need is how retainers get wasted.',
  },
  {
    q: 'How long until I see results?',
    a: "Technical fixes and Google Business Profile work often move Map Pack visibility in four to eight weeks. Competitive organic terms, especially national ones, take three to six months. Lincoln's thin agency field shortens both timelines compared to bigger metros. We show progress markers from week one so you are never guessing.",
  },
  {
    q: 'What should I check before I hire an SEO expert in Lincoln?',
    a: 'Three things: proof with numbers, clarity about who does the work, and an exit. If you typed "hire SEO expert in Lincoln" into Google and landed here, ask whoever you shortlist for a real client result, the names of the people touching your account, and a contract you can leave on short notice. We offer all three and put them in writing.',
  },
  {
    q: 'Can you get my business into ChatGPT and Google AI answers?',
    a: 'Yes. AI engines already answer Lincoln service questions and national B2B questions with specific business names. We structure your site so they can quote it, build the mentions they verify against, and report your citations per engine every month.',
  },
  {
    q: 'Do I need a new website first?',
    a: 'Usually no. If your site is fast and Google can read it, we build on it. If the site itself is the bottleneck we will say so on the first call and you decide. Among web design companies Lincoln NE businesses can choose from, we are the one whose redesign advice is checked by its own SEO reporting, which keeps it honest.',
  },
  {
    q: 'What is in the free SEO audit?',
    a: 'Your rankings, Map Pack position, site speed, citation health, your lane call, and a live check of what AI engines say about your business. Thirty minutes, screen shared, and the findings are yours either way.',
  },
  {
    q: 'Why not just use an Omaha agency or a national firm?',
    a: 'Omaha agencies tend to deprioritize Lincoln accounts, and national firms run template playbooks from paper location pages. Neither plans around the Husker calendar, the Haymarket, or the Omaha disambiguation problem in your queries. Small business SEO services only work when someone actually knows the market the business is in.',
  },
  {
    q: 'What is included in your SEO services in Lincoln month to month?',
    a: 'Everything in the eight-job list above, split deliberately across both lanes: Google Business Profile management, reviews, citations, and neighborhood pages on the local side, plus national keyword strategy, authority content, earned mentions, and per-engine AI tracking on the national side. Our SEO services in Lincoln run as one plan rather than a menu of upsells, so the unglamorous work that actually moves rankings never gets skipped.',
  },
  {
    q: 'Do you offer local SEO services in Lincoln on their own?',
    a: 'Yes. If the Map Pack is your battleground, we can run local SEO services in Lincoln focused purely on your Google Business Profile, reviews, citations, and neighborhood pages from the Haymarket to the 84th Street corridor. The best local SEO services in Lincoln are the ones measured in phone calls, so that is how we report, whatever the scope.',
  },
  {
    q: 'What makes the best AI SEO agency in Lincoln different from a traditional one?',
    a: 'A traditional shop optimizes for ten blue links. An AI SEO agency in Lincoln also structures your site so ChatGPT, Gemini, Claude, and Google AI Overviews can quote it, then proves it with per-engine citation counts. If you are comparing candidates, ask one question: can you show me my citations by engine, monthly? Very few can. We do, for both lanes.',
  },
  {
    q: 'I searched "SEO Lincoln NE" and mostly got Omaha and national firms. Do you actually serve Lincoln?',
    a: 'Yes, with the founder on every discovery call. Searches for SEO Lincoln NE surface Omaha shops and national resellers because they outspend genuine locals on ads, and that is exactly the opening: a Lincoln NE SEO company that builds real local signals, real neighborhood pages, and real mentions outranks template operations on the searches that matter, because Google rewards evidence over ad budgets.',
  },
  {
    q: 'How do I choose an SEO agency in Lincoln without getting burned?',
    a: 'Ask every SEO agency in Lincoln the same four questions: who exactly does the work, what gets delivered each month in writing, how is success measured, and can you leave without a penalty. Then ask which lane they would put you in and why. Any agency that dodges those questions, or guarantees a number one position, has already answered them for you.',
  },
  {
    q: 'Is doing SEO in Lincoln different from doing it in a bigger city?',
    a: 'Meaningfully, yes. SEO in Lincoln means planning around the Omaha shadow, a university calendar that resets search demand every August, and seven game-day Saturdays that multiply hospitality queries. It also means a thinner field: with only about a dozen SEO-specific shops listed here, consistent Lincoln SEO work moves rankings faster than the same effort would in Denver or Austin.',
  },
  {
    q: 'Are you a web design company in Lincoln too, or only SEO?',
    a: 'Both, and that is deliberate. As a web design company Lincoln businesses can also hire for the build itself, our redesign advice during an SEO audit is checked by our own reporting. If your site is the bottleneck we say so once, you decide, and nobody sells you a rebuild you do not need. When sites do need work, we build them to the same 100 out of 100 speed standard the SEO depends on.',
  },
  {
    q: 'Can SEO really help with game-day weekends in the Haymarket?',
    a: 'Yes, if it starts early enough. The pages that win when roughly 85,000 people fill Memorial Stadium were published and earned weeks before kickoff. We build game-day landing pages in August, update Google Business Profile hours before every home date, and keep review velocity high so the choice is easy when a visitor searches from a parking lot. Rankings cannot be rented on Friday night.',
  },
  {
    q: 'How do you manage our Google Business Profile?',
    a: 'Weekly, not quarterly. Categories, services, photos, posts, Q&A, and hours maintained like the storefront it is, including game-day hours for hospitality clients and itemized services for clinics and firms. A profile touched once at setup decays quietly; a profile managed weekly compounds, and it is one of the fastest local ranking levers you control.',
  },
  {
    q: 'How do Google reviews fit into the plan?',
    a: "We set up a simple ask-and-respond system your team can run in minutes per job, because steady review velocity from real customers beats any shortcut and is one of the strongest local ranking signals there is. We also draft responses, mine reviews for the words your customers actually use, and watch competitors' velocity so you never fall behind silently.",
  },
  {
    q: 'Is there a contract, setup fee, or cancellation penalty?',
    a: 'No long-term contract, no setup fee, no penalty. Everything is month to month with 30 days notice, and you keep everything we build: your profile, your content, your citations, your data. We think an SEO partner should re-earn the engagement every month, so that is how we bill.',
  },
  {
    q: 'What should an SEO company in Lincoln actually deliver each month?',
    a: "A written list, not vibes: profile updates, content shipped, citations fixed, reviews earned, technical issues closed, and a one-page report tying both lanes to calls and rankings. If an SEO company in Lincoln cannot show you last month's deliverables for a real client, names redacted, keep shopping.",
  },
];

/* -- Section data -- */

const STATS: { n: string; unit: string; t: string; s: string }[] = [
  { n: '$3.06', unit: 'B', t: 'annual economic impact from the University of Nebraska in Lincoln, with roughly 24,000 students. A city-sized market living inside the city, and it re-searches everything every August', s: 'Nebraska Today / UNL, Feb 2025' },
  { n: '$2', unit: 'B', t: "CompanyCam's valuation, reached in August 2025. Nebraska's first homegrown unicorn was built in Lincoln, proof the national lane is real and open", s: 'Silicon Prairie News' },
  { n: '2.7', unit: '%', t: 'metro unemployment, among the tightest labor markets in the country. When you cannot hire another salesperson, your website has to do the selling', s: 'BLS / FRED, Sept 2025' },
];

const FACTS: { k: string; v: string }[] = [
  { k: 'Metro population', v: '~350K' },
  { k: 'UNL students', v: '~24,000' },
  { k: 'UNL economic impact', v: '$3.06B/yr' },
  { k: 'Metro unemployment', v: '2.7%' },
  { k: 'First NE unicorn', v: 'CompanyCam' },
  { k: 'Ag-tech incubator', v: 'The Combine' },
  { k: 'SEO-specific agencies listed', v: '~12' },
  { k: 'Home game Saturdays', v: '7/season' },
];

const MARKET: { badge: string; h: string; p: string }[] = [
  { badge: '🛡️', h: 'Insurance and financial services', p: 'Lincoln is a legacy insurance town. Ameritas employs around 2,500 people here, and Nelnet and Assurity round out a white-collar corridor that sells nationwide. The brokers, fintech spinouts, and B2B service firms orbiting that corridor need national lane SEO: category keywords, comparison content, and the kind of plainly written answer pages that AI engines quote when a buyer in Atlanta asks for a shortlist. A Map Pack pin does nothing for a carrier whose customers live in forty states.' },
  { badge: '🌽', h: 'Ag-tech and ag services', p: "The Combine incubator has grown 53 companies that have raised over $30 million in venture capital, and UNL's ag research keeps feeding the pipeline. These companies sell precision ag software, processing robotics, and farm services across the entire farm belt. Their buyers search like engineers: long queries, technical comparisons, and increasingly, questions typed into ChatGPT. Ranking for those queries takes authority content with real agronomy in it, not a brochure with a tractor photo." },
  { badge: '💻', h: 'Software and the Silicon Prairie', p: 'Hudl employs more than 5,000 people and ships to 25 countries. CompanyCam reached a $2 billion valuation in August 2025. Nelnet has put roughly $190 million into 171 startup investments, most of them in Nebraska. Every funded startup in that ecosystem is a small business that needs organic visibility before it can afford an in-house marketing team, which is exactly the moment small business SEO services pay for themselves.' },
  { badge: '🏥', h: 'Healthcare', p: 'Bryan Health runs two hospitals here and marks its centennial in 2026, and CHI Health St. Elizabeth anchors the other side of town. Around them sits a dense layer of independent practices: dentists, physical therapists, specialists, counselors. These are appointment-driven businesses where the Map Pack and reviews decide who gets the new patient, and where answer-first pages get a practice quoted when someone asks an AI assistant for a recommendation in southeast Nebraska.' },
  { badge: '🏛️', h: 'State capital professional services', p: "Lincoln is where Nebraska's government lives, and a permanent ring of law firms, accountants, lobbyists, and consultants lives with it. These firms compete locally against each other and statewide against Omaha. The play is precision: one page per practice area, written in plain English, with schema underneath and Lincoln-specific signals that win the \"Lincoln NE\" qualified searches Omaha firms cannot." },
  { badge: '🍽️', h: 'Haymarket hospitality and local retail', p: 'Restaurants, bars, boutiques, and venues in the Haymarket live on two search calendars: the everyday "lunch near me" stream from downtown workers and students, and the seven-Saturday flood when Memorial Stadium fills with roughly 85,000 people. Almost nobody in this category has both a fast website and a properly managed Google Business Profile. The few that do take a disproportionate share of both calendars.' },
];

const DELIVERABLES: { lane: 'loc' | 'nat'; mm: string; h: string; p: string }[] = [
  { lane: 'loc', mm: '01 · Local lane', h: 'Google Business Profile', p: 'Managed weekly, not quarterly. Categories, services, photos, posts, and Q&A maintained like the storefront it is, with game-day hours updated before fans search.' },
  { lane: 'loc', mm: '02 · Local lane', h: 'Reviews engine', p: 'A repeatable system for earning, answering, and learning from reviews. Velocity beats volume, and velocity is what outruns the franchise down the block.' },
  { lane: 'loc', mm: '03 · Local lane', h: 'Citations and listings', p: 'Your name, address, and phone made consistent across the directories Google and AI engines actually check, with the Omaha confusion scrubbed out.' },
  { lane: 'loc', mm: '04 · Local lane', h: 'Neighborhood pages', p: 'Dedicated pages for downtown, the Haymarket, south Lincoln, and the 84th Street corridor, each written for that area, never copy-pasted.' },
  { lane: 'nat', mm: '05 · National lane', h: 'National keyword strategy', p: 'Category and comparison keyword maps for insurance, ag-tech, SaaS, and B2B suppliers whose buyers search from anywhere except Nebraska.' },
  { lane: 'nat', mm: '06 · National lane', h: 'Authority content', p: 'Answer-first pages built around the questions your national buyers actually type, written plainly, with real industry substance, reviewed by a human every time.' },
  { lane: 'nat', mm: '07 · National lane', h: 'Earned mentions', p: 'Real citations in trade publications and industry sources search and AI engines trust. No bulk links, no directories nobody reads, no risk.' },
  { lane: 'nat', mm: '08 · National lane', h: 'AI answer coverage', p: 'Your pages structured for citation, then your mentions tracked in ChatGPT, Gemini, Claude, and Google AI Overviews, engine by engine, monthly.' },
];

const PLAN: { wk: string; h: string; p: string }[] = [
  { wk: 'Week 1', h: 'The audit, live', p: 'We pull up your Lincoln rankings, your Map Pack position, your site speed, and what ChatGPT says about your business while you watch. We also call your lane: local, national, or genuinely both. The findings are yours to keep whether or not we continue.' },
  { wk: 'Weeks 2 to 4', h: 'Fix the foundation', p: 'Technical repairs first: speed, schema, crawl issues, and the Google Business Profile rebuilt properly for local lane clients. This is the boring work most agencies skip because it does not show up in a slide deck. It shows up in rankings instead.' },
  { wk: 'Weeks 5 to 8', h: 'Build the surface area', p: 'Local lane: neighborhood pages and citation cleanup. National lane: the first authority pages targeting your category keywords. Both lanes: answer-first content for the highest intent questions your buyers ask, structured so AI engines can lift it cleanly.' },
  { wk: 'Weeks 9 to 12', h: 'Earn the trust signals', p: 'Review velocity systems go live for local clients. Earned mentions begin landing for national ones. The first AI citation checks run, engine by engine, so we know exactly where you stand on the newest surface before your competitors know it exists.' },
  { wk: 'Every month after', h: 'Compound and report', p: 'One page, five minutes: calls and directions for the local lane, rankings and AI citations for the national lane, and what we are doing next month. SEO is compounding work and the report shows the curve, not vanity numbers.' },
];

const FACTORS: { n: string; h: string; p: string }[] = [
  { n: '01', h: 'Relevance', p: 'Does your profile and site clearly say what you do? A profile listing "family law attorney" with practice areas itemized beats a vague one every time. In Lincoln this includes geographic relevance: pages that say Lincoln NE explicitly, with local schema, win the searches people qualify to dodge Omaha results.' },
  { n: '02', h: 'Distance', p: 'You cannot move your office, but you can tell Google exactly where you work. Neighborhood pages for downtown, the Haymarket, and south Lincoln widen your effective footprint in a city where a customer near 84th Street and a customer near campus type the same query and see different maps.' },
  { n: '03', h: 'Prominence', p: 'Reviews, mentions, links, and the general weight of evidence that you are a real, busy business. This compounds monthly, and in a market with only about a dozen serious SEO shops, prominence is faster to build here than almost anywhere. The earlier you start, the harder you are to displace.' },
];

const COMPARE: { k: string; fj: string; local: string; natl: string }[] = [
  { k: 'Who does the work', fj: 'Senior engineers, founder on every call', local: 'A generalist team splitting time across design, ads, and social', natl: 'Offshore queue behind an account manager' },
  { k: 'SEO focus', fj: 'SEO is the whole engagement, both lanes', local: 'SEO is one line in a broad creative retainer', natl: 'Template playbook, same for every city' },
  { k: 'Local knowledge', fj: 'Haymarket to 84th Street, game-day calendar built in', local: 'Genuine, but spread across every service they sell', natl: 'A paper location page, nobody on the ground' },
  { k: 'National lane', fj: 'Category keywords, authority content, AI citations', local: 'Rarely offered, local focus only', natl: 'Offered, but generic and unmeasured' },
  { k: 'AI search', fj: 'Citations tracked per engine, monthly', local: 'Not offered', natl: 'Not offered' },
  { k: 'Site speed', fj: 'Built and kept at 100 out of 100', local: 'Depends on the theme', natl: 'Never measured' },
  { k: 'Contract', fj: 'Month to month, 30 day notice', local: 'Six to twelve month retainers', natl: 'Twelve months, auto-renew' },
  { k: 'Reporting', fj: 'One page: calls, rankings, AI citations', local: 'Activity summaries across all services', natl: '20 page PDF nobody reads' },
];

const INDUSTRIES: { ln: 'l' | 'n'; tag: string; h: string; p: string }[] = [
  { ln: 'l', tag: 'LOCAL LANE', h: 'Dentists and clinics', p: 'Map Pack plus reviews plus patient-question content. The trifecta that fills appointment books in a town where Bryan Health and St. Elizabeth anchor the care map but independents win on findability.' },
  { ln: 'l', tag: 'LOCAL LANE', h: 'Law firms and CPAs', p: 'One page per practice area, written plainly enough for AI engines to quote and precisely enough for the bar. State capital work means state capital competition, and precision wins it.' },
  { ln: 'l', tag: 'LOCAL LANE', h: 'Trades and home services', p: 'HVAC, plumbing, roofing, remodels. Neighborhood coverage, emergency-intent pages, and review velocity in the most contested "near me" battleground in the city.' },
  { ln: 'n', tag: 'NATIONAL LANE', h: 'Insurance and fintech', p: 'Category keywords, comparison content, and trust signals for the firms in the Ameritas and Nelnet orbit whose buyers will never type a Nebraska city name.' },
  { ln: 'n', tag: 'NATIONAL LANE', h: 'Ag-tech and ag services', p: 'Authority content with real agronomy for The Combine generation: precision ag, processing robotics, and farm software sold across the entire farm belt.' },
  { ln: 'n', tag: 'NATIONAL LANE', h: 'SaaS and B2B suppliers', p: 'The Hudl and CompanyCam path: national organic visibility for software and manufacturing suppliers, including the aviation and OEM supply chains around Duncan Aviation and Kawasaki.' },
];

const TAGS = ['restaurants', 'Haymarket retail', 'physical therapy', 'veterinarians', 'real estate teams', 'med spas', 'auto repair', 'gyms', 'landscaping', 'childcare', 'senior care', 'event venues'];

const PULSE_ROWS: { lab: string; width: string }[] = [
  { lab: 'Normal Saturday', width: '22%' },
  { lab: 'Game-day searches', width: '92%' },
  { lab: 'Your ranked page', width: '92%' },
  { lab: 'Page built in October', width: '14%' },
];

const REPORT_ROWS: { lab: string; cls: 'l' | 'n'; width: string; val: string }[] = [
  { lab: 'GBP calls', cls: 'l', width: '78%', val: '↑38' },
  { lab: 'Directions', cls: 'l', width: '58%', val: '↑26' },
  { lab: 'Natl top10s', cls: 'n', width: '52%', val: '14' },
  { lab: 'AI citations', cls: 'n', width: '40%', val: '9' },
];

/* -- JSON-LD: WebPage + Service (NO offers/pricing) + FAQPage (derived) -- */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lincoln SEO Company | Local SEO Services in Lincoln, NE',
  url: CANONICAL,
  description:
    'FactoryJet is a Lincoln SEO company running local SEO services in Lincoln, NE for the Map Pack and national SEO for businesses selling coast to coast from Lincoln: Google Business Profile, reviews, citations, neighborhood pages, technical SEO, authority content, and AI search optimization, with a free audit and month-to-month terms.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO Services in Lincoln, NE',
  serviceType: 'Search engine optimization',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'City', name: 'Lincoln', containedInPlace: { '@type': 'State', name: 'Nebraska' } },
    { '@type': 'State', name: 'Nebraska' },
  ],
  url: CANONICAL,
  description:
    'Lincoln SEO services covering both lanes: local SEO for the Google Map Pack (Google Business Profile management, reviews, citations, neighborhood pages from the Haymarket to 84th Street) and national SEO for insurers, ag-tech, and SaaS teams selling from Lincoln (national keyword strategy, authority content, earned mentions, per-engine AI citation reporting). Month-to-month, free audit.',
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

export default function LincolnSeoPage() {
  return (
    <>
      <script id="lincoln-seo-webpage-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="lincoln-seo-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="lincoln-seo-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'US SEO Services', url: 'https://factoryjet.com/services/seo' },
          { name: 'Lincoln SEO', url: CANONICAL },
        ]}
      />

      <div className="lseo">
        {/* 1 HERO - The Split Ticket */}
        <section className="hero">
          <div className="top">
            <span className="eb rise d1">SEO COMPANY · LINCOLN, NEBRASKA</span>
            <h1 className="rise d2">Lincoln sells two ways. <em>Your SEO should too.</em></h1>
            <p className="sub rise d3">Half of Lincoln wins customers in the Map Pack: the Haymarket restaurant, the family law office, the dental clinic on 84th Street. The other half sells to the whole country: insurance carriers, ag-tech startups, software built a few blocks from campus. Most agencies pick one lane and quietly ignore the other. As a Lincoln NE SEO company built by engineers, we run both lanes in one plan, and report on both in one page.</p>
            <HeroInlineForm region="us" source="lincoln_seo_hero" submitLabel="Get my free SEO audit" />
            <div className="cta-row rise d4">
              <a className="btn btn-ghost" href="#lanes">See both lanes</a>
              <WhatsAppCTA city="Lincoln" service="SEO" />
            </div>
            <div className="trustgrid rise d4">
              <div className="tchip"><i /><span><b>Local + national</b> in one plan</span></div>
              <div className="tchip"><i /><span><b>Month to month</b>, no lock-in</span></div>
              <div className="tchip"><i /><span><b>AI answers tracked</b> monthly</span></div>
            </div>
          </div>
          <div className="lanes" id="lanes">
            <div className="lane local">
              <span className="ltag">LANE ONE · LOCAL LINCOLN</span>
              <h2>Win the Map Pack from the Haymarket to 84th Street</h2>
              <p>For the businesses Lincoln residents search every day: clinics, law firms, trades, restaurants, repair shops. When someone types &quot;dentist Lincoln NE&quot; or &quot;roofing near me&quot;, the three names pinned to the map get the calls. Our local SEO services are built around that map: calls, direction requests, and reviews, measured monthly. This is the lane where a local SEO company in Lincoln NE earns its keep, one ranked page and one answered review at a time.</p>
              <ul>
                <li>Google Business Profile managed weekly, not set up once and forgotten</li>
                <li>Neighborhood pages for downtown, the Haymarket, south Lincoln, and the 84th Street corridor</li>
                <li>Game-day search surges planned for before kickoff, not discovered in analytics after</li>
                <li>Review velocity that outpaces the franchise down the block</li>
                <li>Citations made consistent everywhere Google and AI engines check</li>
              </ul>
              <p className="who">FOR: clinics · law firms · trades · restaurants · retail</p>
            </div>
            <div className="lane natl">
              <span className="ltag">LANE TWO · NATIONAL FROM LINCOLN</span>
              <h2>Rank coast to coast from the Silicon Prairie</h2>
              <p>For insurers, ag-tech companies, SaaS teams, and B2B suppliers whose buyers have never set foot in Nebraska. Lincoln built a two billion dollar software company and a national insurance corridor without coastal offices, and the next wave out of The Combine and Innovation Campus needs the same thing: national keyword strategy, authority content, and AI answer coverage, run by SEO experts who think in revenue, not impressions.</p>
              <ul>
                <li>National keyword maps for your category, not just &quot;near me&quot; terms</li>
                <li>Content that answers real buyer questions plainly enough for AI engines to quote</li>
                <li>Authority mentions in the publications your industry actually reads</li>
                <li>AI citations tracked across ChatGPT, Gemini, and Google AI Overviews</li>
                <li>Technical SEO held to 100 out of 100 speed scores, verified on request</li>
              </ul>
              <p className="who">FOR: insurance · ag-tech · SaaS · manufacturing · B2B services</p>
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

        {/* 3 WHAT IS LOCAL SEO IN LINCOLN (definition, answer-first) */}
        <section>
          <div className="wrap">
            <div className="edit">
              <div>
                <span className="eb">The short answer</span>
                <h2>What is local SEO in Lincoln, <em>actually?</em></h2>
                <p className="body">Local SEO is the work that makes your business show up when someone in Lincoln searches for what you sell. It covers three surfaces at once: <b>the Google Map Pack</b> (the three businesses pinned to the map), <b>the organic results</b> below it, and now <b>the AI answers</b> from ChatGPT, Gemini, and Google AI Overviews that increasingly sit on top of everything. If your practice or shop is not on at least one of those surfaces when a Lincoln resident searches, the call goes to whoever is.</p>
                <p className="body">Lincoln adds two wrinkles most cities do not have. First, the Omaha shadow: searchers here append &quot;Lincoln NE&quot; to their queries specifically to filter out Omaha results, which means pages with genuine Lincoln signals, real addresses, real neighborhoods, real schema, beat generic Nebraska pages almost by default. The same habit shows up when owners shop for help: they type &quot;SEO Lincoln NE&quot; rather than plain &quot;SEO&quot; to skip the Omaha shops. Second, the calendar: seven home football Saturdays bend search demand for restaurants, hotels, and parking so hard that hospitality businesses effectively have two markets, game day and every other day. Doing SEO in Lincoln without planning for either is doing half the job.</p>
                <p className="body">And the supply side is thin. Directory sites list only about a dozen SEO-specific shops here, and several of those are national brands with paper location pages and no one on the ground. Most genuine local agencies bundle SEO inside broad creative retainers. That gap is the opportunity: a focused Lincoln SEO program, built on real industry knowledge and modern technical work, can outrank both groups faster here than in almost any comparable market. That is the bet this page makes, openly.</p>
                <div className="midcta">
                  <ModalCTAButton label="Check where you rank today, free" region="us" modalVariant="seo" btnVariant="primary-light" />
                  <span>30 minutes · live screen share · you keep the findings</span>
                </div>
              </div>
              <div className="factbox">
                <h3>Lincoln search market, at a glance</h3>
                {FACTS.map((f) => (
                  <div className="fr" key={f.k}><span>{f.k}</span><span className="fv">{f.v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 THE LINCOLN MARKET */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Know the market, win the market</span>
            <h2>SEO in Lincoln is six different games. <em>We play all of them.</em></h2>
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
                    src="/images/us/lincoln/seo/lincoln-seo-1.webp"
                    alt="Haymarket restaurant owner in Lincoln during the lunch rush, the kind of local business our Lincoln SEO services put in the Map Pack"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pslot wide">
                  <img
                    src="/images/us/lincoln/seo/lincoln-seo-2.webp"
                    alt="Young Lincoln SaaS team at a whiteboard near campus, the national lane of SEO in Lincoln, Nebraska"
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

        {/* 5 DELIVERABLES (8 cards, 4 local + 4 national, lane-tagged) */}
        <section>
          <div className="wrap">
            <span className="eb">What our Lincoln SEO services include</span>
            <h2>Eight jobs. Two lanes. <em>Zero filler.</em></h2>
            <p className="lead">Every engagement covers the full stack, split deliberately across both lanes, because a perfect Google Business Profile does nothing for an insurer selling in forty states, and national authority content does nothing for a clinic that lives on direction requests.</p>
            <div className="del">
              {DELIVERABLES.map((d) => (
                <div className={`dc ${d.lane}`} key={d.h}>
                  <span className="mm">{d.mm}</span>
                  <h3>{d.h}</h3>
                  <p>{d.p}</p>
                </div>
              ))}
            </div>
            <p className="body" style={{ marginTop: 22 }}>Underneath both lanes sits the same engineering floor: technical SEO, site speed held at 100 out of 100, clean schema, and crawlability, because neither lane works on a slow site. We are also a web design company Lincoln businesses can lean on when the site itself is the bottleneck, which keeps our audit advice honest. We never have to pretend a broken site is fixable with content.</p>
            <div className="midcta">
              <ModalCTAButton label="Get the full scope for your business" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>explained in writing, on a free call</span>
            </div>
          </div>
        </section>

        {/* 6 PROCESS (90 days) */}
        <section className="room-alt" id="plan">
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

        {/* 7 RANKING FACTORS (green room) */}
        <section className="groom">
          <div className="wrap">
            <span className="eb">How Google picks the Map Pack</span>
            <h2>Three factors decide who gets the call. <em>All three are workable.</em></h2>
            <p className="lead">Google has said publicly that local results weigh relevance, distance, and prominence. Here is what each one means for a Lincoln business, in plain words.</p>
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

        {/* 8 COMPARISON */}
        <section>
          <div className="wrap">
            <span className="eb">An honest comparison</span>
            <h2>FactoryJet vs the usual <em>Lincoln options.</em></h2>
            <p className="lead">Nearly every SEO agency Lincoln businesses shortlist fits one of three models. Here is the difference, stated plainly enough to be checked.</p>
            <div className="cmpwrap">
              <table>
                <thead>
                  <tr><th scope="col"><span className="sr-only">Criteria</span></th><th scope="col">FactoryJet</th><th scope="col">Local retainer bundle</th><th scope="col">National reseller</th></tr>
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

        {/* 9 INDUSTRIES (lavender room) */}
        <section className="lroom">
          <div className="wrap">
            <span className="eb">Built for Lincoln businesses</span>
            <h2>The industries we rank <em>in this city.</em></h2>
            <div className="ind">
              {INDUSTRIES.map((i) => (
                <div className="ic" key={i.h}>
                  <span className={`ln ${i.ln}`}>{i.tag}</span>
                  <h3>{i.h}</h3>
                  <p>{i.p}</p>
                </div>
              ))}
            </div>
            <ul className="tags" aria-label="More industries we serve in Lincoln">
              {TAGS.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </section>

        {/* 10 GAME DAY PULSE */}
        <section className="pulse">
          <div className="wrap">
            <span className="eb">The Lincoln rhythm</span>
            <h2>Seven Saturdays move this town. <em>Plan for the spike.</em></h2>
            <div className="pgrid">
              <div>
                <p className="body">On a home game Saturday, Memorial Stadium holds roughly 85,000 people, which makes it briefly one of the largest gatherings in the state. Tens of thousands of them are visitors, and visitors search for everything: breakfast before the game, parking near the stadium, a bar for the fourth quarter, a hotel for the night, a late slice afterward. The search demand for Lincoln hospitality terms does not rise on those weekends. It multiplies.</p>
                <p className="body">Here is the part most businesses get wrong: rankings cannot be rented on Friday night. The restaurant that appears when 85,000 people search &quot;food near Memorial Stadium&quot; earned that position weeks earlier, with a page that already existed, a profile with current game-day hours, and reviews that made the choice easy. Most Haymarket businesses discover the surge in their analytics on Monday. Our clients have pages ranked and ready in August, before the first kickoff, and updated profiles before every home date.</p>
                <p className="body">The same calendar thinking applies beyond food. Hotels, parking operators, retail, urgent care, even rideshare-adjacent services all see the seven-Saturday pattern. If any slice of your revenue follows the Husker schedule, your SEO plan should be built around that schedule, not around a generic monthly checklist written for a city without one.</p>
              </div>
              <div className="pcard" aria-label="Illustrative chart of game-day search interest in Lincoln">
                {PULSE_ROWS.map((r) => (
                  <div className="prow" key={r.lab}>
                    <span className="lab">{r.lab}</span>
                    <div className="pbar"><i style={{ width: r.width }} /></div>
                  </div>
                ))}
                <p className="pnote">Illustrative search-interest pattern for Lincoln hospitality terms on home-game weekends. The page that ranks at kickoff was published and earned weeks before it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 11 CONVERGENCE (text + vquote + both-lane report left, two-lanes visual right) */}
        <section className="merge">
          <div className="wrap">
            <div className="top">
              <span className="eb">Where the lanes meet</span>
              <h2>One engineering team. One report. <em>Both lanes.</em></h2>
            </div>
            <div className="vwrap">
              <div>
                <p className="body">The two lanes are not two separate services with two separate bills. They share an engine. Technical SEO, fast pages, clean schema, and answer-first content feed both at once: the same engineering that puts a clinic in the Lincoln Map Pack gets an ag-tech company quoted by ChatGPT for a national buyer&apos;s question. The work compounds across lanes instead of competing for budget.</p>
                <div className="vquote"><b>It also means nobody has to guess which lane they are in.</b> Plenty of Lincoln businesses are honestly both: a CPA firm with local clients and a niche national specialty, a retailer with a Haymarket storefront and nationwide shipping. The audit sorts your queries into lanes on day one, the budget follows the revenue, and the monthly report shows both lanes side by side, five minutes, one page.</div>
                <div className="report" aria-label="Sample both-lane monthly report format">
                  <div className="rhead"><b>Both-lane report</b><span>preview</span></div>
                  {REPORT_ROWS.map((r) => (
                    <div className="rrow" key={r.lab}>
                      <span className="lab">{r.lab}</span>
                      <div className="rbar"><i className={r.cls} style={{ width: r.width }} /></div>
                      <span className="val">{r.val}</span>
                    </div>
                  ))}
                  <p className="rnote">illustrative format, one page, five minutes</p>
                </div>
              </div>
              <div className="lanescard" role="img" aria-label="Two lanes, local and national, converging into one orange flag pin">
                <div className="lc-lane loc">
                  <span className="lc-tag">LOCAL</span>
                  <span className="lc-pin" style={{ top: 54 }}>Haymarket</span>
                  <span className="lc-pin" style={{ top: 116 }}>Downtown</span>
                  <span className="lc-pin" style={{ top: 178 }}>84th St</span>
                </div>
                <div className="lc-lane nat">
                  <span className="lc-tag">NATIONAL</span>
                  <span className="lc-arc" style={{ width: 36, height: 36, top: 58 }} />
                  <span className="lc-arc" style={{ width: 64, height: 64, top: 44 }} />
                  <span className="lc-arc" style={{ width: 92, height: 92, top: 30 }} />
                  <span className="lc-rise" />
                </div>
                <span className="lc-join jl" />
                <span className="lc-join jn" />
                <div className="lc-flag"><div className="ph"><span>⚑</span></div></div>
                <span className="lc-corner">TWO LANES · ONE TEAM</span>
              </div>
            </div>
          </div>
        </section>

        {/* 12 AI SEARCH (peach room) */}
        <section className="proom">
          <div className="wrap">
            <span className="eb">The newest surface</span>
            <h2>When Lincoln asks AI, <em>be the answer.</em></h2>
            <div className="aiwrap">
              <div>
                <p className="body">Ask ChatGPT for the best family law firm in Lincoln and it names names. Ask Gemini which precision ag software handles variable rate seeding and it answers with specific companies, pulled from the websites and mentions it trusts. Google now shows AI Overviews above the regular results for a growing share of questions, and pages ranked first lose a large share of their clicks when that box appears. Both of Lincoln&apos;s lanes are exposed: local businesses lose &quot;near me&quot; calls to AI recommendations, and national sellers lose shortlist spots they never knew existed.</p>
                <p className="body">This is the quietest land grab in search, and almost no SEO agency in Lincoln structures sites for AI citation today. That is precisely the argument for moving now. As an AI SEO agency in Lincoln engagements can actually verify, we make your pages quotable: clear questions, direct answers, schema underneath, and real mentions AI engines can confirm. Then we track your citations in ChatGPT, Gemini, Claude, and Google AI Overviews every month, so AI visibility becomes a number on your report instead of a mystery. The businesses cited by AI today are compounding an advantage their competitors have not noticed yet, and in a market this size, first movers keep the seat. Pair it with our <Link href="/services/ai-seo">US AI SEO service</Link> for the deepest coverage.</p>
              </div>
              <div className="mini-ac" aria-label="Example of an AI assistant recommending a Lincoln business">
                <div className="h"><i /> ai-assistant · live answer</div>
                <div className="q">&quot;Best insurance software partner in Lincoln?&quot;</div>
                <div className="a">Based on verified mentions, technical depth, and client results, <mark>your business</mark> is a frequently recommended option for insurance and fintech teams in Lincoln and beyond…</div>
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
            <h2>Lincoln SEO <em>FAQ.</em></h2>
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
                  alt="The FactoryJet engineering team that runs both SEO lanes for Lincoln businesses"
                  width={1000}
                  height={688}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <span className="eb">Behind the rankings</span>
                <h2>Engineers first. <em>Marketers second.</em></h2>
                <p className="body">The engineers who hold sites at 100 out of 100 speed scores run both Lincoln lanes, founder on every call. That ordering matters: most ranking problems, local or national, are engineering problems wearing a marketing costume, and an agency that cannot open the code can only write reports about it.</p>
                <p className="body">You work with senior people from day one. The founder runs every discovery call, an engineer owns your account, and nobody hands you off to a junior in month two.</p>
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
              <h2>Find out which lane you are losing, <em>and fix it.</em></h2>
              <p className="fp">Book a 30 minute call. We pull up your Lincoln rankings, your Map Pack position, and what ChatGPT says about your business, live, while you watch. You keep the findings either way, and the price arrives in writing, never as a surprise.</p>
              <p className="fl">Also for Lincoln businesses: <Link href="/lincoln/ecommerce-development">ecommerce development in Lincoln</Link> · our <Link href="/services/seo">US SEO services</Link> · serving southeast Nebraska statewide</p>
            </div>
            <div className="fcard">
              <div className="av" aria-hidden="true">BB</div>
              <p>&quot;Hi, I&apos;m Bhavesh, founder of FactoryJet. I run every discovery call myself, so by minute 10 we already know whether what you need pays for itself, and how fast.&quot;</p>
              <div className="stack">
                <ModalCTAButton label="Get your free Lincoln SEO audit" region="us" modalVariant="seo" btnVariant="primary-dark" />
                <a className="btn btn-ghost-dark" href={CALENDLY}>Book a 30 minute call</a>
                <WhatsAppCTA city="Lincoln" service="SEO" variant="dark" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

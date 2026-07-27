import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import ExitIntentLeadForm from '@/components/ExitIntentLeadForm';

import './charlotte-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /charlotte/seo : Charlotte local-SEO city page. Built 2026-06-06.
   Deepened 2026-07-26 (GSC push pass: page sits at avg pos 17-19 for
   "charlotte seo company" / "charlotte seo services" / "charlotte seo").
   Added: answer-first sub-paragraph, real Charlotte district + industry
   substance, honest SERP-difficulty read with live DataForSEO volumes/KD,
   named-competitor section, PAA-derived FAQ groups, internal link band,
   ItemList + speakable schema. Ticker volumes re-sourced to DataForSEO
   (US, location 2840, pulled 2026-07-26); the old figures were stale.
   "Skyline Ledger" layout, deliberately differentiated from Tampa (same brand
   fonts/palette, new structure): editorial hero + CSS skyline-chart, demand
   ticker (real search volumes), asymmetric growth ledger, sticky split
   verticals, bento, timeline, dual-panel comparison, manifesto quote, FAQ bands.
   Real SiteHeader/SiteFooter/ModalCTAButton. Styles scoped under .cseo
   (./charlotte-seo.css, next/font vars, no webfont request). No images
   (text LCP, zero CLS) → Lighthouse 100 target.
   Source: research/mockup-us-charlotte-seo-v3.html + research/city-charlotte-industry-brief.md.
   Honesty: no pricing shown (no-pricing rule), month-to-month, free audit, no guarantee; real clients
   only; founder byline. Growth stat = Census-derived 148/day (54,100/yr, vintage
   2025), deliberately NOT the CLT Alliance 157/day (older migration data).
   No fake LocalBusiness address, no self-serving Review schema.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/charlotte/seo';

export const metadata: Metadata = {
  title: 'Charlotte SEO Company | Local SEO Services Near Me, NC | FactoryJet',
  description:
    'FactoryJet is a Charlotte SEO company that gets local businesses into the Google Map Pack and "near me" results. Local SEO, GBP optimization, and technical SEO. Free audit, no long-term contracts.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Charlotte SEO Company | Local SEO Services Near Me, NC | FactoryJet',
    description:
      'Charlotte SEO company. Map Pack optimization, local SEO services, and technical SEO for Charlotte, NC businesses. Free audit, no lock-in.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

/* Volumes below are live DataForSEO pulls (US, location 2840, 2026-07-26).
   Do not "round up" these numbers. If they get re-pulled, replace the whole array. */
const TICKER: { kw: string; vol: string }[] = [
  { kw: 'charlotte seo company', vol: '880/mo' },
  { kw: 'seo agency charlotte', vol: '880/mo' },
  { kw: 'charlotte seo companies', vol: '880/mo' },
  { kw: 'seo company charlotte nc', vol: '880/mo' },
  { kw: 'seo companies in charlotte nc', vol: '880/mo' },
  { kw: 'seo charlotte', vol: '320/mo' },
  { kw: 'charlotte nc seo', vol: '320/mo' },
  { kw: 'charlotte seo', vol: '210/mo' },
  { kw: 'charlotte seo marketing', vol: '210/mo' },
  { kw: 'charlotte seo agency', vol: '170/mo' },
  { kw: 'charlotte seo services', vol: '170/mo' },
  { kw: 'seo services charlotte nc', vol: '90/mo' },
  { kw: 'charlotte seo expert', vol: '70/mo' },
  { kw: 'charlotte local seo', vol: '50/mo' },
  { kw: 'charlotte seo consultant', vol: '50/mo' },
];

/* Charlotte districts. Written from how demand actually behaves in each one,
   not from a list of neighborhood names with the same paragraph pasted under each. */
const DISTRICTS: { n: string; h: string; p: string }[] = [
  {
    n: 'Center city',
    h: 'Uptown and the four wards',
    p: 'Bank of America Corporate Center, Truist, Duke Energy Plaza, Honeywell at Legacy Union. Demand here is weekday and business to business: employment attorneys, commercial insurance, IT support, corporate catering. Very little of it behaves like a classic "near me" search.',
  },
  {
    n: 'Blue line',
    h: 'South End',
    p: "Lowe's technology hub, breweries, and a wall of new apartments along the LYNX light rail. Density is high and the search radius is tiny, so the gyms, dentists and clinics here are fighting inside a few blocks. Some of the hardest Map Pack real estate in the metro.",
  },
  {
    n: 'High ticket',
    h: 'SouthPark, Myers Park, Dilworth',
    p: 'Where the money is, and where Atrium Health Carolinas Medical Center sits. Med spas, orthodontists, private wealth, luxury remodeling. Long sales cycles and customers who read reviews properly before calling.',
  },
  {
    n: 'South of 485',
    h: 'Ballantyne',
    p: 'A corporate office park mid-redevelopment plus a big suburban household base. Roughly fifteen miles from Uptown, which is the point: a Map Pack ranking downtown does almost nothing for you here, because proximity is a live ranking factor.',
  },
  {
    n: 'North corridor',
    h: 'University City and the I-85 run',
    p: 'UNC Charlotte, Atrium Health University City, and a student population that turns over every year. Constant first-time searchers with no local habits, which is unusually good for anyone who has done their profile properly.',
  },
  {
    n: 'Independents',
    h: 'NoDa and Plaza Midwood',
    p: 'Independent restaurants, studios, small clinics, retail that lives on foot traffic and word of mouth. Photos and a steady review flow move rankings here faster than backlinks ever will.',
  },
  {
    n: 'Airport and freight',
    h: 'Steele Creek and west Charlotte',
    p: 'Charlotte Douglas is one of the busiest airports in the world by aircraft movements, and the logistics, warehousing and aviation-services layer around it searches like a B2B buyer, not a consumer. Different keywords, different pages, longer decisions.',
  },
  {
    n: 'Race City',
    h: 'Concord, Kannapolis, Mooresville',
    p: 'Charlotte Motor Speedway, the NASCAR team shops, and the machine shops, fabricators and composites suppliers that feed them. A genuinely specialized industry cluster where almost nobody has bothered to build proper category pages.',
  },
  {
    n: 'Lake Norman',
    h: 'Huntersville, Cornelius, Davidson',
    p: 'Docks, marine services, high-end remodeling, landscaping, pool work. Seasonal demand spikes that reward having your content live months before the season starts, not the week it does.',
  },
  {
    n: 'Across the line',
    h: 'Fort Mill, Indian Land, Rock Hill, SC',
    p: 'The metro runs straight into York and Lancaster counties in South Carolina. Plenty of Charlotte businesses set their service area to Mecklenburg County and quietly walk away from that demand without ever noticing.',
  },
];

/* Live DataForSEO difficulty read, US, 2026-07-26. KD is 0-100. */
const SERP_KW: { kw: string; vol: string; kd: string }[] = [
  { kw: 'charlotte seo company', vol: '880', kd: '16' },
  { kw: 'seo agency charlotte', vol: '880', kd: '12' },
  { kw: 'seo companies in charlotte nc', vol: '880', kd: '13' },
  { kw: 'seo charlotte', vol: '320', kd: '12' },
  { kw: 'charlotte nc seo', vol: '320', kd: '8' },
  { kw: 'seo services charlotte nc', vol: '90', kd: '9' },
  { kw: 'seo service charlotte nc', vol: '90', kd: '2' },
  { kw: 'seo company near me (national)', vol: '14,800', kd: '24' },
];

/* Real rivals from the same SERPs. Named openly, described fairly, never rubbished. */
const RIVALS: { dom: string; h: string; p: string; kws: string[] }[] = [
  {
    dom: 'charlotteseofirm.com',
    h: 'Charlotte SEO Firm',
    p: 'The genuine local holder of this search result, and the one to beat. They sit at #1 for the two biggest Charlotte agency terms and turn up across five of the results we tracked at an average position of 9.0. If what you want is a Charlotte-focused shop that has already proved it can rank in this city, they are the obvious call, and we will say that on a sales call.',
    kws: ['#1 charlotte seo company, 880/mo', '#1 charlotte seo companies, 880/mo', '#1 charlotte nc seo, 320/mo', '5 SERP appearances, avg pos 9.0'],
  },
  {
    dom: 'thriveagency.com',
    h: 'Thrive Agency',
    p: 'The widest footprint on these results by a distance. They turned up on 11 of the Charlotte-related searches we pulled at an average position of 3.8, and they rank at #1 for marketing terms in other languages and other countries as well. That is a serious operation with real reach. Good if you want scale, and you are comfortable that a firm this size will not be Charlotte-specific.',
    kws: ['11 SERP appearances, avg pos 3.8', '#1 agentur marketing, 720/mo', '#1 agences marketing digital, 590/mo'],
  },
  {
    dom: 'lessermedia.com',
    h: 'Lesser Media',
    p: 'Runs the scaled city-page pattern properly. They rank across a network of US cities with the same structure repeated well, which is harder to execute than it sounds. Worth reading their pages if you want to see what a well-built local landing page looks like.',
    kws: ['4 SERP appearances, avg pos 11.8', '#4 seo springfield, 110/mo', '#3 ppc san antonio, 90/mo'],
  },
  {
    dom: 'straightnorth.com',
    h: 'Straight North',
    p: 'A long-established national agency that shows up on the Charlotte results without being based here. Steady rather than spectacular positions, which is usually the signature of an agency with a broad client base and a lot of pages competing for attention.',
    kws: ['3 SERP appearances, avg pos 9.0'],
  },
  {
    dom: 'helium-seo.com',
    h: 'Helium SEO',
    p: 'Another out-of-town operator appearing consistently on the Charlotte results. Worth listing because it makes the point plainly: a large share of page one for "charlotte seo company" belongs to agencies that have never worked a job in Mecklenburg County.',
    kws: ['3 SERP appearances, avg pos 11.7'],
  },
];

const RELATED_SERVICES: { href: string; label: string; note: string }[] = [
  { href: '/services/seo', label: 'SEO services', note: 'The full US program this page sits under' },
  { href: '/services/local-seo', label: 'Local SEO', note: 'Map Pack, GBP, citations, reviews' },
  { href: '/services/small-business-seo', label: 'Small business SEO', note: 'Single location, owner-run, lean' },
  { href: '/services/seo-audit', label: 'SEO audit', note: 'Find out what is actually broken first' },
  { href: '/services/ai-seo', label: 'AI SEO and GEO', note: 'Getting cited by ChatGPT and AI Overviews' },
];

const RELATED_CITIES: { href: string; label: string; note: string }[] = [
  { href: '/nashville/seo', label: 'Nashville SEO', note: 'Where we currently rank #10 for local SEO' },
  { href: '/austin/seo', label: 'Austin SEO', note: 'Where we currently rank #8 for SEO agency' },
  { href: '/cleveland/seo', label: 'Cleveland SEO', note: 'Midwest metro, similar competitive read' },
  { href: '/tampa/seo', label: 'Tampa SEO', note: 'Another fast-growing sunbelt metro' },
  { href: '/denver/seo', label: 'Denver SEO', note: 'Front range local search' },
];

type Vertical = { h: string; p: string; badge?: string };
const VERTICAL_GROUPS: { label: string; items: Vertical[] }[] = [
  {
    label: 'Trades & home services',
    items: [
      { h: 'Contractors & home services', badge: 'strongest fit', p: 'HVAC, roofing, plumbing, landscaping, remodeling. 54,100 new residents a year need all of it, and every job starts with a "near me" search.' },
      { h: 'Real estate & property managers', p: 'Neighborhood visibility in one of the busiest housing markets in the country.' },
    ],
  },
  {
    label: 'Practices & professional services',
    items: [
      { h: 'Medical & dental practices', p: 'Clinics, dentists, and specialists competing for "near me" patient searches.' },
      { h: 'Law firms & attorneys', p: 'Practice-area pages and reviews that win high-value local cases.' },
      { h: 'CPAs, advisors & insurance', p: 'In a banking town full of finance professionals, trust and proximity close the deal.' },
    ],
  },
  {
    label: 'Storefronts & local commerce',
    items: [
      { h: 'Restaurants & local e-commerce', p: 'Local discovery, reviews, and "open now" intent across South End and NoDa.' },
    ],
  },
];

const STEPS: { when: string; h: string; p: string }[] = [
  { when: 'Day 1', h: 'Free audit', p: 'Where you rank in the Map Pack today, and what is holding you back.' },
  { when: 'Week 1', h: 'Foundations', p: 'Google Business Profile, citations, and technical fixes.' },
  { when: 'Ongoing', h: 'Content & links', p: 'Local content, reviews, and authority built month over month.' },
  { when: 'Monthly', h: 'Reporting', p: 'Tied to calls and leads, not vanity ranking screenshots.' },
];

const COMPARE: { k: string; fj: string; alt: string; hl?: boolean }[] = [
  { k: 'Pricing', fj: 'Scoped & shown upfront', alt: 'Quoted after a sales call', hl: true },
  { k: 'Contract', fj: 'Month-to-month', alt: '6-12 month lock-in' },
  { k: 'Who does the work', fj: 'Senior engineers', alt: 'Junior account managers' },
  { k: 'Kickoff', fj: '7 days', alt: 'Weeks' },
  { k: 'Reporting', fj: 'Calls & leads', alt: 'Ranking screenshots' },
  { k: 'AI SEO / GEO', fj: 'Included', alt: 'Rarely offered' },
  { k: 'Your data & accounts', fj: 'You own them', alt: 'Often locked to the agency' },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };
const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    label: 'Pricing & timeline',
    items: [
      { q: 'How much does local SEO cost in Charlotte?', a: "It depends on your competition, how many locations you run, and the current state of your Google Business Profile and citations: a single-location service business needs far less work than a multi-location brand. Rather than a one-size package, we scope it to your market and show you the number before you sign. Your audit is free, with no setup fee and no long-term contract, so book a free call and we'll give you a straight quote." },
      { q: 'How long does SEO take to work in Charlotte?', a: 'Expect early movement in 3-6 months and stable local-pack rankings in 6-12 months. If your Google Business Profile is under-optimized, the Map Pack can improve in as little as 2-8 weeks. Anyone promising page one in 30 days is selling risk, not results.' },
      { q: 'How fast can I rank in the Charlotte Map Pack?', a: 'If you already have reviews, accurate citations, and a half-optimized profile, the 3-pack can move in 15-60 days. Starting from scratch in a competitive category, plan on 3-6 months. The Map Pack is driven almost entirely by your Google Business Profile.' },
      { q: 'Why is local SEO a monthly fee instead of one-time?', a: 'Rankings are earned and defended continuously: competitors optimize, Google updates its algorithm, and your profile needs ongoing posts, reviews, and citation upkeep. A one-time setup decays; that is why we work month-to-month.' },
    ],
  },
  {
    label: 'Local SEO basics',
    items: [
      { q: 'What is local SEO?', a: 'Local SEO is how your business shows up when nearby Charlotte customers search for what you sell, in Google Maps, the local 3-pack, and "near me" results. Unlike general SEO, it targets high-intent buyers ready to call or visit.' },
      { q: 'What is the Google Map Pack (local 3-pack)?', a: 'The Map Pack is the block of three businesses with a map at the top of local searches. It is generated entirely from Google Business Profiles and ranked by relevance, distance, and prominence.' },
      { q: 'How important is Google Business Profile to local SEO?', a: 'It is the single most important asset, because the Map Pack is built from it. A complete profile with consistent name, address, and phone, plus photos, posts, and reviews, is what gets you into the three-pack.' },
      { q: 'Does local SEO still work in a city growing this fast?', a: 'It works better. The Census Bureau counted 54,100 new Charlotte metro residents in one year, about 148 a day. New residents have no habits or referrals yet: they pick businesses straight from the Map Pack. A growing city means search demand resets in your favor every month.' },
    ],
  },
  {
    label: "What's included",
    items: [
      { q: "What's included in your Charlotte SEO services?", a: 'Google Business Profile optimization, local citations and NAP cleanup, review generation and response, on-page and technical SEO, local content, AI/GEO optimization, and monthly reporting tied to calls and leads. You get a written deliverables list. Vagueness is a red flag in any SEO company.' },
      { q: 'How do you measure success?', a: 'We lead with revenue, not vanity metrics: phone calls, direction requests, form fills, and booked leads first, then Map Pack rankings, profile views, and organic traffic as the "why."' },
      { q: 'Do I get access to my analytics and a monthly report?', a: 'Yes. You keep full ownership of and access to Google Analytics and Search Console, plus a plain-English monthly report connecting rankings to traffic to calls. No access to your own data is a major red flag with any agency.' },
      { q: 'Will my business get cited by AI tools like ChatGPT?', a: 'We optimize your content and entity data so AI answer engines (ChatGPT, Perplexity, and Google AI Overviews) can find and cite your business. AI engines reward clear, well-structured, well-sourced content, which is exactly how we build.' },
    ],
  },
  {
    label: 'Contracts & guarantees',
    items: [
      { q: 'Do you require a long-term contract?', a: "No. FactoryJet local SEO is month-to-month: cancel any time with 30 days' notice. Most Charlotte agencies lock you in for 6-12 months; we would rather earn the next month." },
      { q: 'What happens to my work if I leave?', a: 'You keep everything: your Google Business Profile, website content, citations, and reporting access stay yours. Work that disappears when you leave was rented, not built.' },
      { q: 'Can you guarantee #1 rankings in Charlotte?', a: 'No, and you should walk away from anyone who does. Google itself warns against SEOs who guarantee rankings. What we guarantee is real work, a transparent roadmap, month-to-month flexibility, and reporting tied to calls and leads.' },
      { q: 'How do I avoid SEO scams in Charlotte?', a: 'Look for transparent tactics, Google Business Profile and review expertise, realistic timelines, and full access to your own data. Run from guaranteed rankings, no reporting, and one-size-fits-all packages.' },
    ],
  },
  {
    label: 'SEO near me & services',
    items: [
      {
        q: 'What should I look for in an SEO company near me in Charlotte, NC?',
        a: "When searching 'SEO company near me Charlotte NC', three things matter most: (1) Who actually does the work? Senior engineers vs. account managers is the single biggest quality gap in Charlotte SEO. (2) Does the agency report on calls and leads, not just ranking positions? Rankings are the mechanism; booked jobs are the result. (3) Are terms month-to-month? A 6-12 month lock-in protects the agency, not you. FactoryJet meets all three: a scope and a figure shown before you sign, month-to-month terms, and senior SEO experts you can verify by testing our own Lighthouse scores on factoryjet.com before you sign anything.",
      },
      {
        q: 'How do I find a good SEO company near me in Charlotte?',
        a: 'Search "SEO company near me Charlotte" and look at who actually ranks. An agency that cannot rank its own site is a warning sign. Then check six things: written deliverables, pricing shown before you sign, month-to-month terms, you own your data, reports tied to calls and leads, and no ranking guarantees. Proximity matters less than expertise; the right Charlotte SEO company does not need a storefront on Tryon Street to drive Map Pack results in Ballantyne or NoDa.',
      },
      {
        q: 'What do SEO services include for Charlotte businesses?',
        a: 'Complete Charlotte SEO services cover four layers. (1) Local SEO: Google Business Profile optimization, citation cleanup, review growth, and Map Pack targeting across Mecklenburg County and the suburbs. (2) Technical SEO: Core Web Vitals, site speed, schema markup, and crawlability. (3) On-page SEO: title tags, meta descriptions, headings, and internal linking. (4) Content: service pages and neighborhood pages that earn rankings. At FactoryJet all four are in one monthly engagement with a written deliverables list.',
      },
      {
        q: 'Do you offer local SEO services near me for Charlotte small businesses?',
        a: 'Yes. FactoryJet provides local SEO services across the entire Charlotte metro: Uptown, South End, NoDa, Plaza Midwood, University City, Ballantyne, and the broader Mecklenburg, Cabarrus, and Gaston counties, plus Rock Hill, SC. Every engagement starts with a free audit showing your current Map Pack position, GBP health, and citation accuracy across directories.',
      },
      {
        q: 'How does "near me" SEO work for Charlotte businesses?',
        a: '"Near me" searches in Charlotte are driven almost entirely by Google Business Profile signals: your categories, keywords in your description, review count and recency, and the accuracy of your name, address, and phone. GBP proximity is set when searchers do the search, so you cannot fake it, but you can maximize relevance and prominence with a fully optimized profile and consistent citations. That is the core of local SEO near me results.',
      },
    ],
  },
  {
    label: 'Fit & getting started',
    items: [
      { q: 'Does local SEO work for contractors and home services?', a: "It's one of the strongest fits there is. HVAC, roofing, plumbing, and remodeling jobs start with a \"near me\" search, and Charlotte's growth keeps demand high. Service-area businesses without a storefront can still dominate the Map Pack." },
      { q: 'How do I compete with national franchises in Charlotte?', a: 'The Map Pack is your home-field advantage. Google ranks local results by relevance, distance, and prominence, so a well-run local profile with strong reviews routinely outranks national franchises managed from a head office.' },
      { q: 'Do I need SEO if I already run Google Ads?', a: 'Yes, they work together. Ads are a faucet that stops the moment you stop paying; SEO is an asset that keeps producing. Organic local listings earn several times more clicks than paid ads, with no per-click cost once you rank.' },
      { q: 'How do I choose the best SEO company in Charlotte, NC?', a: 'Judge by behavior, not awards. The best Charlotte SEO company for you shows a written deliverables list, prices before you sign, month-to-month terms, full access to your own data, and realistic timelines. Anyone leading with guaranteed rankings or secret tactics is showing you the exit.' },
      { q: 'Do I need a Charlotte SEO expert, a local SEO consultant, or an agency?', a: 'A solo SEO consultant can audit and advise, but local SEO is execution work: profile updates, citations, reviews, content, and links every month. We work like a Charlotte local SEO consultant you can call directly, with an SEO marketing agency behind it doing the monthly work.' },
      { q: 'Do you serve Concord, Gastonia, Huntersville, and Rock Hill too?', a: 'Yes. We work across the entire Charlotte metro, including Uptown, South End, NoDa, Ballantyne, University City, Matthews, Huntersville, and Rock Hill, SC.' },
    ],
  },
  {
    label: 'Google Maps and rankings',
    items: [
      {
        q: 'How does Google Maps ranking work?',
        a: 'Three things decide it: relevance, distance, and prominence. Relevance is how well your profile matches what somebody typed, which comes down to your primary category, your services list, and your description. Distance is how far you are from the person searching, and you cannot change that. Prominence is how well known and well reviewed you are, on Google and off it. Two of those three are things you can work on, which is why two businesses on the same block in South End can rank completely differently.',
      },
      {
        q: 'How do I get my listing higher on Google Maps?',
        a: 'Start with the boring stuff, because it is what actually moves. Claim the profile. Pick the right primary category rather than the closest-sounding one. Fill in every service you offer. Get your name, address, and phone identical everywhere on the web. Add real photos of the real place, not stock. Post regularly. Then earn reviews steadily instead of in one burst, and reply to every one of them. Most Charlotte profiles we audit have never touched half of that list.',
      },
      {
        q: 'Why is my Google ranking so low?',
        a: 'Usually one of five things. Google shipped an algorithm update and your site landed on the wrong side of it. Somebody changed the site and broke something. There is a technical problem: slow pages, blocked crawling, duplicate content. A competitor simply got better. Or Google is testing results, which happens constantly and looks alarming for about a week before it settles. Before you panic, open Search Console and find the date the drop started. That date usually tells you which of the five it was.',
      },
      {
        q: 'Can I pay Google to rank higher?',
        a: 'Not in the organic results and not in the Map Pack. You can pay for ads, including the sponsored slot that sits above the map, and that is a perfectly reasonable thing to do while the organic side builds. But no amount of Google Ads spend moves your organic position, and anybody telling you Google gives ranking preference to advertisers is either confused or hoping you are.',
      },
      {
        q: 'Why can I see my listing but my customers cannot?',
        a: 'Because you are standing in your own shop. Google personalizes local results heavily by the location of the device doing the search, and it also knows you keep clicking your own listing. Check your real position with a tool that simulates a search from a specific point in the city, or ask somebody in Ballantyne to search for you while you watch. It is a very common way for owners to convince themselves everything is fine.',
      },
    ],
  },
  {
    label: 'The questions everyone asks about SEO',
    items: [
      {
        q: 'What does an SEO company do?',
        a: 'Three jobs, roughly. It fixes the technical condition of your website so search engines can crawl it, read it, and load it fast. It works out what your customers actually type, then builds pages that answer those searches better than whatever ranks today. And it builds the off-site signals that make Google treat you as a real, established business: reviews, citations, mentions, links. A local SEO company adds a fourth job, which is running your Google Business Profile like an asset instead of a form you filled in once.',
      },
      {
        q: 'Is it worth paying for SEO services?',
        a: 'For most local businesses in a metro this size, yes, with two conditions. It is worth it if your customers search before they buy, which for home services, medical, dental, legal, and most storefronts they absolutely do. And it is worth it if you can wait, because this is a compounding channel rather than a switch. If you need the phone ringing next Tuesday, run ads and build the SEO underneath it.',
      },
      {
        q: 'Is it worth paying an SEO company instead of doing it in-house?',
        a: 'It depends on whether you can keep one person genuinely busy. SEO splits into four skills: technical, content, local, and links. One in-house hire is usually strong at one of those and passable at the rest, and you pay for the tooling on top. An agency spreads it across people who each do one thing all day. Where in-house wins is depth of product knowledge, which is why the best setups tend to be an in-house owner of the content plus an outside team on everything else.',
      },
      {
        q: 'How much should I expect to pay for SEO?',
        a: 'We are not going to print a number here, because any number on a web page is a guess about a business nobody has looked at yet. What actually sets it: how many locations you run, how contested your category is in Charlotte, whether the site needs technical repair before content can rank at all, how messy your citations are, how much content has to be written, and whether you need links. A single-location plumber and a five-location dental group are not the same piece of work. We audit, we scope it, we show you the figure, you decide.',
      },
      {
        q: 'How much does the average local SEO engagement cost?',
        a: 'Averages are not much use here, because the range is enormous and the bottom of it is usually a template with your city name swapped in. What matters more is what you are buying. Is there a written deliverables list. Does a senior person do the work or a junior carrying twelve accounts. Can you leave next month if it is not working. Ask those three questions of every quote you collect and the numbers start to make sense on their own.',
      },
      {
        q: 'How much should SEO cost for a small business?',
        a: 'Enough to cover real monthly work, and not a penny more. If a quote feels like a bargain, somebody is spending about an hour a month on you and calling it a retainer. If it feels heavy, ask exactly which hours you are buying and what lands in month one. The honest answer is that it should be scoped to what your market actually demands, which is why the audit comes before the quote and not after it.',
      },
      {
        q: 'Is SEO being phased out?',
        a: 'No. The claim usually means "AI answers questions now, so nobody clicks". Some informational queries did lose clicks, that part is true. But the technical side of SEO matters more now, not less: site speed, crawlability, structured data, mobile performance. Those are exactly the signals AI answer engines use to decide who is worth citing. A technically clean site is a bigger advantage today than it was five years ago, because content quality alone stopped being a differentiator.',
      },
      {
        q: 'Is SEO dead or evolving in 2026?',
        a: 'Evolving, and it is not close. What died is the version where you stuffed keywords and bought links off a forum. What replaced it is a higher bar: content that is genuinely useful, an entity Google can identify and trust, and a site that loads properly on a phone. Demand for trustworthy, authoritative content has not gone anywhere. If anything, AI answers made trustworthiness worth more, because there are fewer slots and the engine has to pick somebody.',
      },
      {
        q: 'Why do people say SEO is no longer relevant?',
        a: 'Because social media got loud and paid ads got easy to buy, and both hand you a dashboard on day one while SEO hands you nothing for a few months. So people conclude it stopped working, when what actually happened is that it stopped being instant. Meanwhile the Map Pack still sits above everything on a "near me" search in Charlotte, three slots, and somebody is in them. It may as well be you.',
      },
      {
        q: 'What is the 80/20 rule in SEO?',
        a: 'The idea that a small slice of the work drives most of the result. In local SEO the 20 percent is unusually easy to name: your Google Business Profile, your review flow, your primary category, your page speed, and the handful of pages targeting the terms people actually buy on. Get those right and you will be ahead of most of your local competition before you have written a single blog post.',
      },
      {
        q: 'Is SEO a hard job?',
        a: 'The concepts are not hard. The discipline is. SEO is mostly doing unglamorous things consistently for months while nothing visible happens, and then everything moves at once. The genuinely hard part is judgment: knowing which of fifty possible fixes matters for your site this quarter, and having the nerve to ignore whatever the industry got excited about last week.',
      },
      {
        q: 'What does an SEO specialist actually earn?',
        a: 'We are not going to publish salary figures we cannot verify, and the number varies wildly by city and seniority anyway. The decision underneath the question is the useful one: hire somebody or use an agency. Hiring makes sense when there is enough work to fill a full week and you can carry the tool stack as well. For most single-location and small multi-location businesses in Charlotte, there is not, which is the whole reason agencies exist.',
      },
      {
        q: 'Who is the best SEO company in the USA?',
        a: 'There is not one, and anyone claiming the title is telling you about their marketing rather than their work. The better question is who is best for your situation: your category, your city, your budget, and how involved you want to be. In Charlotte specifically, Charlotte SEO Firm holds the top of the agency results, national shops like Thrive Agency and Straight North compete on scale and bench depth, and we compete on senior people doing the work with no lock-in. Pick on fit, not on a list.',
      },
      {
        q: 'Can I do local SEO myself?',
        a: 'Yes, and plenty of owners should start there. Claim and complete your Google Business Profile, fix your primary category, get your name, address and phone consistent across the big directories, ask every happy customer for a review, and put up real photos. That is a weekend of work and it beats doing nothing by a wide margin. Where owners hit the wall is technical repair, content at volume, and earning links, which is the point where hiring somebody starts to pay for itself.',
      },
      {
        q: 'Do small businesses need SEO?',
        a: 'If your customers search before they buy, yes. That covers almost every service business in Charlotte. The alternative is paying for every click forever, or leaning on referrals you cannot turn up on purpose. SEO is the only channel where the work you did last year is still producing leads this year, and for an owner-run business that difference compounds into something that looks a lot like an asset.',
      },
      {
        q: 'Is local SEO worth it for a service-area business?',
        a: 'Usually it is the highest-return marketing available to you, because the intent is so specific. Somebody typing "emergency plumber near me" in Plaza Midwood at nine at night is not browsing. The Map Pack sits at the top of that result with three slots, and the clicks pile into them. If you are not in the three, you are effectively invisible at the exact moment the customer decided to spend money.',
      },
    ],
  },
  {
    label: 'Charlotte, specifically',
    items: [
      {
        q: 'What big companies are headquartered in Charlotte?',
        a: 'Bank of America is the famous one, and it is the reason Charlotte is the second largest banking center in the country. Truist is headquartered here too. So are Duke Energy, Honeywell, Nucor, Brighthouse Financial, Sonic Automotive, Coca-Cola Consolidated, LendingTree, and Albemarle, with Lowe\'s up the road in Mooresville and a large Lowe\'s technology hub in South End. That matters for SEO in a very concrete way: a corporate base that size creates a thick layer of professional-services demand, and those searches behave nothing like consumer "near me" searches.',
      },
      {
        q: 'Which parts of Charlotte are hardest to rank in?',
        a: 'South End and Uptown, because density is highest and the search radius is smallest, so you are fighting more competitors inside a tighter proximity circle. SouthPark and Ballantyne are brutal in the high-ticket categories, medical, dental, legal, home renovation, because the customer value justifies serious spend. The easier wins tend to sit in the outer ring: Steele Creek, Mint Hill, Matthews, Concord, Gastonia, where far fewer competitors have done the basics properly.',
      },
      {
        q: 'Does the South Carolina state line matter for Charlotte SEO?',
        a: 'More than owners expect. The metro runs straight across the line into Fort Mill, Indian Land, and Rock Hill in York and Lancaster counties. A lot of Charlotte businesses set their service area to Mecklenburg County, publish nothing that mentions South Carolina, and then wonder why they never show up for a searcher fifteen minutes down I-77. If you serve it, your service area, your content, and your citations all need to say so.',
      },
      {
        q: 'How competitive is the Charlotte SEO market really?',
        a: 'Softer than you would guess at the top of the funnel. The main agency terms here carry low difficulty scores: "charlotte seo company" draws about 880 searches a month at a difficulty of 16 out of 100, "seo agency charlotte" the same volume at 12, and "charlotte nc seo" pulls 320 a month at a difficulty of 8. Compare that with the national "seo company near me", 14,800 a month at difficulty 24 with everybody in the country fighting for it. City-qualified terms are consistently easier to win and they convert better, and the same pattern almost certainly holds in your category.',
      },
      {
        q: 'Do I need to be physically located in Charlotte to rank here?',
        a: 'For the Map Pack, you need a real address or a defined service area in the metro, because Google uses proximity. For everything else, no. A large share of the page-one results on Charlotte SEO searches belong to agencies with no presence here at all. What it does mean is that whoever you hire has to understand how the city is laid out, because ranking in Uptown and ranking in Ballantyne are two different projects fifteen miles apart.',
      },
      {
        q: 'Does the Charlotte growth rate actually help my rankings?',
        a: 'Not your rankings directly, but it changes the economics. New arrivals do not have a plumber yet, or a dentist, or a lawyer. They pick from what they can see, which is the Map Pack. In a slow-growing city you are trying to take customers off an incumbent. In one adding tens of thousands of residents a year, a fresh pool of people with no loyalty to anyone shows up every single month. That is a genuinely different game and it favors whoever is visible.',
      },
    ],
  },
];

const faqSchemaItems = FAQ_GROUPS.flatMap((g) =>
  g.items.map((item) => ({
    '@type': 'Question' as const,
    name: item.q,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.a },
  }))
);

const rivalSchemaItems = RIVALS.map((r, i) => ({
  '@type': 'ListItem' as const,
  position: i + 1,
  item: {
    '@type': 'Organization' as const,
    name: r.h,
    url: `https://${r.dom}`,
    description: r.p,
  },
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
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Local SEO Services in Charlotte, NC',
      serviceType: 'Search engine optimization',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Charlotte', containedInPlace: { '@type': 'State', name: 'North Carolina' } },
        { '@type': 'City', name: 'Concord', containedInPlace: { '@type': 'State', name: 'North Carolina' } },
        { '@type': 'City', name: 'Gastonia', containedInPlace: { '@type': 'State', name: 'North Carolina' } },
        { '@type': 'City', name: 'Huntersville', containedInPlace: { '@type': 'State', name: 'North Carolina' } },
        { '@type': 'City', name: 'Matthews', containedInPlace: { '@type': 'State', name: 'North Carolina' } },
        { '@type': 'City', name: 'Mooresville', containedInPlace: { '@type': 'State', name: 'North Carolina' } },
        { '@type': 'City', name: 'Rock Hill', containedInPlace: { '@type': 'State', name: 'South Carolina' } },
        { '@type': 'City', name: 'Fort Mill', containedInPlace: { '@type': 'State', name: 'South Carolina' } },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Charlotte SEO services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local citations and NAP cleanup' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Review generation and response' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical and on-page SEO' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local content production' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI SEO and generative engine optimization' } },
        ],
      },
      url: CANONICAL,
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#competitors`,
      name: 'SEO companies competing on Charlotte, NC search results',
      description:
        'Agencies ranking on the Charlotte SEO search results as measured on 2026-07-26, listed by search visibility. Compiled by FactoryJet from third-party rank-tracking data.',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: rivalSchemaItems.length,
      itemListElement: rivalSchemaItems,
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#areas`,
      name: 'Charlotte metro districts covered',
      numberOfItems: DISTRICTS.length,
      itemListElement: DISTRICTS.map((d, i) => ({
        '@type': 'ListItem' as const,
        position: i + 1,
        name: d.h,
        description: d.p,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'US SEO Services', item: 'https://factoryjet.com/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Charlotte', item: 'https://factoryjet.com/charlotte' },
        { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Charlotte SEO Company | Local SEO Services Near Me, NC | FactoryJet',
      datePublished: '2026-06-06',
      dateModified: '2026-07-26',
      inLanguage: 'en-US',
      author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      about: { '@id': `${CANONICAL}#service` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.bluf p', '.bluf .sub', '.serp .body p'],
        xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqSchemaItems,
    },
  ],
};

export default function CharlotteSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="cseo">
        {/* HERO: editorial type + skyline-chart band */}
        <section className="hero">
          <div className="wrap hero-copy">
            <span className="loc"><b />Charlotte, NC</span>
            <h1>The Charlotte SEO company for the city everyone keeps <span className="it">moving&nbsp;to</span></h1>
            <p className="lead">About 148 people arrive daily and search Google for businesses like yours. We make sure they find <b>you</b> first.</p>
            <HeroInlineForm region="us" source="charlotte_seo_hero" submitLabel="Get my free SEO audit" />
            <div className="cta-row">
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
          </div>
          <div className="skyband" aria-hidden="true">
            <div className="sky">
              <div className="bld b1" /><div className="bld b2" /><div className="bld b3" /><div className="bld b4" /><div className="bld b5" />
              <div className="bld b6" /><div className="bld b7" /><div className="bld b8" /><div className="bld b9" /><div className="bld b10" />
            </div>
            <div className="trend">
              <svg viewBox="0 0 1180 300" preserveAspectRatio="none" aria-hidden="true">
                <path d="M 30 268 C 240 262, 360 240, 520 200 C 690 158, 800 120, 940 78 C 1010 57, 1060 45, 1100 38" />
              </svg>
            </div>
            <div className="endpin"><span className="lbl">You. Map Pack #1</span><div className="head"><i /></div></div>
          </div>
        </section>

        {/* FACTS BAR */}
        <div className="factsbar">
          <div className="wrap row">
            <div className="fact"><div className="v">Month-to-month</div><div className="k">local SEO, no lock-in</div></div>
            <div className="fact"><div className="v">Free audit</div><div className="k">no setup fee, no pressure</div></div>
            <div className="fact"><div className="v">7-day</div><div className="k">kickoff, not weeks</div></div>
            <div className="fact"><div className="v"><span className="star">★</span> 4.9</div><div className="k">across 500+ projects</div></div>
          </div>
        </div>

        {/* DEMAND TICKER: live DataForSEO volumes, US, pulled 2026-07-26.
            role="region" so aria-label is permitted ARIA (prohibited on generic div);
            second copy exists only for the continuous CSS loop, hidden from SR. */}
        <section className="ticker" role="region" aria-label="Monthly Google search volumes for Charlotte SEO terms, DataForSEO, July 2026">
          <div className="label" aria-hidden="true">Searched in Charlotte every month</div>
          <div className="track">
            {TICKER.map((t) => (
              <span key={t.kw}><b>{t.kw}</b> {t.vol}</span>
            ))}
            {TICKER.map((t) => (
              <span key={`${t.kw}-dup`} aria-hidden="true"><b>{t.kw}</b> {t.vol}</span>
            ))}
          </div>
        </section>

        {/* BLUF */}
        <section className="blufsec">
          <div className="wrap">
            <div className="bluf">
              <span className="tag">The short answer</span>
              <p>FactoryJet is a Charlotte SEO company that helps local businesses rank in Google&apos;s Map Pack and &quot;near me&quot; results. We handle Google Business Profile, citations, reviews, technical SEO, and content, billed month-to-month with a free audit and no long-term contract. Our Charlotte SEO services cover the whole metro, from Uptown to Rock Hill, and you work directly with senior SEO experts.</p>
              <p className="sub">
                Who actually does SEO in Charlotte, NC? Three groups. Local specialists such as <b>Charlotte SEO Firm</b>, which holds the top of this search result. National agencies running a city-page network into the market, such as <b>Thrive Agency</b> and <b>Straight North</b>. And freelancers and consultants working one client at a time. The work itself does not change much between them: get the Google Business Profile right, clean up the listings that carry your name, address and phone, earn reviews on a schedule, fix what is technically broken on the site, and publish pages that answer what buyers in Mecklenburg County actually type. What changes city to city is how many businesses are fighting for the same three Map Pack slots, and how well the ones ahead of you have done the basics. In most Charlotte categories the honest answer is: not very well. That is the opening. Start with a{' '}
                <Link href="/services/seo-audit">technical SEO audit</Link>, then decide whether you need full{' '}
                <Link href="/services/local-seo">local SEO</Link> or something lighter.
              </p>
            </div>
          </div>
        </section>

        {/* GROWTH LEDGER */}
        <section className="ledger">
          <div className="wrap">
            <span className="eyebrow">Why Charlotte, why now</span>
            <h2>Your next customer just moved here</h2>
            <div className="grid">
              <div>
                <div className="meganum">148<em>/day</em></div>
                <p className="megacap">people are added to the Charlotte metro every day: <b>54,100 new residents in a single year</b>. New arrivals have no habits and no referrals. They pick a dentist, a plumber, and a lawyer straight from the Map Pack.</p>
                <span className="src">US Census Bureau, vintage 2025 metro estimates</span>
              </div>
              <div className="lrows">
                <div className="lrow"><div className="n">2.9M</div><div className="t">people in the Charlotte-Concord-Gastonia metro, ranked <b>#5 in the US</b> for one-year population growth. <span className="src">US Census, 2025</span></div></div>
                <div className="lrow"><div className="n">44%</div><div className="t">of clicks go to the <b>top-3 Map Pack results</b>. Below that, most buyers never see you. <span className="src">BrightLocal</span></div></div>
                <div className="lrow"><div className="n">266%</div><div className="t">more leads for businesses with <b>50+ reviews</b> vs. under 10. Reviews are a ranking system you control. <span className="src">BrightLocal</span></div></div>
              </div>
            </div>
            <p className="closer">Charlotte is the #2 banking center in America, but your competition is not Bank of America. It is the business three blocks over, fighting you for the same three Map Pack spots among Mecklenburg County&apos;s <b>43,000+ business establishments</b>.</p>
          </div>
        </section>

        {/* LOCAL SUBSTANCE: districts + honest SERP difficulty read */}
        <section className="local">
          <div className="wrap">
            <span className="eyebrow">Charlotte, specifically</span>
            <h2>Ten Charlotte markets, ten different search problems</h2>
            <p className="lead">
              Mecklenburg County is roughly 546 square miles and the metro spills into two states. Proximity is a live Google ranking factor, so &quot;ranking in Charlotte&quot; is not one project. Ranking in Uptown and ranking in Ballantyne are two jobs about fifteen miles apart, and they need different pages.
            </p>
            <div className="dgrid">
              {DISTRICTS.map((d) => (
                <div className="dcard" key={d.h}>
                  <span className="n">{d.n}</span>
                  <h3>{d.h}</h3>
                  <p>{d.p}</p>
                </div>
              ))}
            </div>

            <div className="serp">
              <div className="kwtable">
                <div className="kh"><span>Charlotte search term</span><span>Vol/mo</span><span>KD</span></div>
                {SERP_KW.map((k) => (
                  <div className="kwrow" key={k.kw}>
                    <b>{k.kw}</b><span>{k.vol}</span><span>{k.kd}</span>
                  </div>
                ))}
                <div className="kwnote">DataForSEO, US, pulled 26 Jul 2026. KD = keyword difficulty, 0 to 100.</div>
              </div>
              <div className="body">
                <h3>How hard is Charlotte search, honestly?</h3>
                <p>
                  Softer than most people assume. The main Charlotte agency terms carry <b>difficulty scores in the single digits and teens</b>. &quot;charlotte nc seo&quot; pulls 320 searches a month at a difficulty of 8. &quot;seo agency charlotte&quot; draws 880 a month at 12. Set that against the national term &quot;seo company near me&quot;, 14,800 a month at a difficulty of 24, where every agency in the country is pushing.
                </p>
                <p>
                  That gap is the whole argument for a city page, and it applies to your category as much as ours. City-qualified searches are easier to win and they convert harder, because the person typing them has already decided where they want the work done.
                </p>
                <p>
                  The catch is who currently holds the top. <b>Charlotte SEO Firm</b> genuinely owns it, sitting at #1 for both &quot;charlotte seo company&quot; and &quot;charlotte seo companies&quot;. Below them, a large share of page one belongs to agencies with no presence in the city at all. Thrive Agency turned up on 11 of the Charlotte-related results we pulled at an average position of 3.8. Lesser Media runs the same city-page pattern into Springfield, Stamford and San Antonio. National operators reach Charlotte through scale, not through knowing it.
                </p>
                <p>
                  For a business owner the practical read is this: <b>most of your local competitors are not doing the work.</b> Their sites are slow, their profiles are half filled in, their review count stalled two years ago, and nobody has touched their categories since setup. In a lot of Charlotte categories, doing the basics properly is enough to put you in the top three. That is not true in New York or Los Angeles. It is still true here, and it will not stay true forever.
                </p>
                <p>
                  If you want the same read on your own keywords rather than ours, that is what the free{' '}
                  <Link href="/services/seo-audit">SEO audit</Link> produces. If you are a single-location owner-run business, start at{' '}
                  <Link href="/services/small-business-seo">small business SEO</Link> instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section className="who">
          <div className="wrap grid">
            <div className="left">
              <h2>Built for the businesses that live on local search</h2>
              <p>A metro growing this fast runs on trades, practices, and storefronts. If your customers are in Mecklenburg County or just across the line, the local pack turns straight into calls.</p>
              <div className="districts">We run local SEO services across the whole metro: <b>Uptown, South End, NoDa, Plaza Midwood, University City, Ballantyne</b>, plus <b>Concord, Gastonia, Huntersville, Matthews, and Rock Hill</b>.</div>
            </div>
            <div>
              {VERTICAL_GROUPS.map((g) => (
                <div key={g.label}>
                  <p className="vgroup">{g.label}</p>
                  {g.items.map((v) => (
                    <div className="vrow" key={v.h}>
                      <h3>{v.h}{v.badge ? <span>{v.badge}</span> : null}</h3>
                      <p>{v.p}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED: bento */}
        <section className="inc">
          <div className="wrap">
            <h2>Your Charlotte local SEO, end to end</h2>
            <p className="lead">SEO services in Charlotte, NC, handled by senior SEO experts. One flat monthly fee. No add-on surprises.</p>
            <div className="bento">
              <div className="bcell b-gbp">
                <div>
                  <h3>Google Business Profile optimization</h3>
                  <p>The Map Pack is built from your profile. We optimize categories, services, photos, posts, and Q&amp;A, and keep your name, address, and phone consistent everywhere.</p>
                </div>
                <div className="minipack" aria-hidden="true">
                  <div className="q">seo company charlotte</div>
                  <div className="r win">Your Business <span>#1 MAP PACK</span></div>
                  <div className="r lose">A competitor</div>
                </div>
              </div>
              <div className="bcell b-cit"><h3>Citations &amp; NAP cleanup</h3><p>Accurate, consistent listings across the directories Google trusts, and cleanup of the duplicates dragging you down.</p></div>
              <div className="bcell b-rev"><h3>Reviews that move rankings</h3><p>A system to earn and respond to reviews, one of the strongest local signals you actually control.</p></div>
              <div className="bcell b-tech"><h3>On-page &amp; technical SEO</h3><p>Fast, crawlable pages, Core Web Vitals, schema, and SEO optimization built around how Charlotte customers search.</p></div>
              <div className="bcell b-cont"><h3>Local content</h3><p>Service and neighborhood pages that earn rankings without reading like doorway pages.</p></div>
              <div className="bcell b-geo">
                <h3>AI SEO / GEO</h3>
                <p>We structure your content and entity data so AI answer engines can find and cite your business.</p>
                <div className="ai"><span>ChatGPT</span><span>Perplexity</span><span>Google AI Overviews</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS: timeline */}
        <section className="proc">
          <div className="wrap">
            <h2>A 7-day kickoff, then steady monthly work</h2>
            <div className="tl">
              <div className="steps">
                {STEPS.map((s) => (
                  <div className="step" key={s.h}>
                    <div className="dot"><i /></div>
                    <span className="when">{s.when}</span>
                    <h3>{s.h}</h3>
                    <p>{s.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NAMED COMPETITORS: real rivals, described fairly */}
        <section className="rivals">
          <div className="wrap">
            <span className="eyebrow">Who else ranks for this</span>
            <h2>The other Charlotte SEO companies, named</h2>
            <p className="lead">
              Most agency pages pretend the competition does not exist. Here is who actually shows up when you search for a Charlotte SEO company, what each of them is good at, and where we are genuinely different. Positions and volumes below are from a rank-tracking pull on 26 July 2026.
            </p>
            <div className="rgrid">
              {RIVALS.map((r) => (
                <div className="rcard" key={r.dom}>
                  <span className="dom">{r.dom}</span>
                  <h3>{r.h}</h3>
                  <p>{r.p}</p>
                  <div className="kws">
                    {r.kws.map((k) => (
                      <i key={k}>{k}</i>
                    ))}
                  </div>
                </div>
              ))}
              <div className="rcard us">
                <span className="dom">factoryjet.com</span>
                <h3>FactoryJet, and where we actually stand</h3>
                <p>
                  We are the challenger here and there is no point dressing it up. FactoryJet has 44 referring domains. Some of the agencies above have thousands. Our strongest public US local rankings right now are <b>#10 for &quot;local seo nashville&quot;</b> and <b>#8 for &quot;seo agency austin texas&quot;</b>. We are not #1 in Charlotte and we are not going to claim otherwise on our own page.
                </p>
                <p>
                  What we do differently is structural, not a slogan. Senior engineers do the work rather than handing it to a junior with a dozen accounts. Terms are month-to-month, so we have to be worth keeping every thirty days. Every account, profile and property stays in your name, so leaving costs you nothing but notice. And{' '}
                  <Link href="/services/ai-seo">AI answer-engine optimization</Link> is part of the engagement rather than a separate line item, because ChatGPT and Google AI Overviews are already deciding who gets recommended in this city.
                </p>
                <p>
                  If you want the biggest bench and the widest reach, call Thrive. If you want the shop that has already proved it can rank in Charlotte, call Charlotte SEO Firm. If you want senior people, no lock-in, and somebody who will tell you when SEO is the wrong answer for your business, that is the gap we are filling.
                </p>
                <div className="kws">
                  <i>44 referring domains, honestly</i>
                  <i>#10 local seo nashville, 90/mo</i>
                  <i>#8 seo agency austin texas, 70/mo</i>
                  <i>Month-to-month, you own the accounts</i>
                </div>
              </div>
            </div>
            <p className="honest">
              We have no relationship with any agency listed above and nothing here is paid placement. If you find an error in the data, tell us and we will correct it on this page.
            </p>
          </div>
        </section>

        {/* COMPARISON: dual panel */}
        <section className="vs">
          <div className="wrap">
            <h2>An honest comparison</h2>
            <p className="lead" style={{ maxWidth: 620 }}>Same seven questions, two very different answers. Ask any agency these before you sign.</p>
            <div className="panels">
              <div className="panel fj">
                <div className="ph">Factory<span>Jet</span></div>
                {COMPARE.map((r) => (
                  <div className="pitem" key={r.k}><span className="k">{r.k}</span><span className={r.hl ? 'v hl' : 'v'}>{r.fj}</span></div>
                ))}
              </div>
              <div className="panel alt">
                <div className="ph">A typical Charlotte agency</div>
                {COMPARE.map((r) => (
                  <div className="pitem" key={r.k}><span className="k">{r.k}</span><span className="v">{r.alt}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROOF: manifesto quote */}
        <section className="proof">
          <div className="wrap">
            <span className="mark">&ldquo;</span>
            <blockquote>
              <p>I started FactoryJet to do the opposite of what most agencies do: senior people doing the actual work, a price you see before you sign, and no 12-month handcuffs. If our Charlotte SEO doesn&apos;t earn its keep, you leave the next month.</p>
            </blockquote>
            <div className="byline"><div className="avatar">BB</div><div><div className="nm">Bhavesh Barot</div><div className="ti">Founder, FactoryJet. 12+ years building for SMBs.</div></div></div>
            <p className="real">No stock screenshots, no invented case studies. Our client builds are live right now: <b>Impulse Branding Solutions, Belle Maison, Shevva Car Driver Hire, and Rukman Transport</b>. Open them and run PageSpeed yourself.</p>
          </div>
        </section>

        {/* FAQ: category bands, 2-col */}
        <section className="faq">
          <div className="wrap">
            <span className="eyebrow">Charlotte SEO FAQ</span>
            <h2>Questions, answered like a real call</h2>
            <p className="lead">Answer-first and honest: the same answers we would give you on the phone.</p>
            {FAQ_GROUPS.map((g) => (
              <div className="fcat" key={g.label}>
                <div className="fh"><h3>{g.label}</h3><span>{g.items.length} questions</span></div>
                <div className="fcols">
                  {g.items.map((it, i) => (
                    <details key={it.q} open={g.label === 'Pricing & timeline' && i === 0}>
                      <summary>{it.q}</summary>
                      <p>{it.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
            <p className="faqhelp">Can&apos;t find your answer? <a href={CALENDLY}>Talk to the founder</a></p>
          </div>
        </section>

        {/* RELATED: internal link band */}
        <section className="related">
          <div className="wrap">
            <span className="eyebrow">Where to go next</span>
            <h2>Related services and other city pages</h2>
            <div className="rlgrid">
              <div>
                <h3>The services behind this page</h3>
                <div className="rlist">
                  {RELATED_SERVICES.map((l) => (
                    <Link href={l.href} key={l.href}>
                      {l.label}
                      <em>{l.note}</em>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3>Other US cities we work in</h3>
                <div className="rlist">
                  {RELATED_CITIES.map((l) => (
                    <Link href={l.href} key={l.href}>
                      {l.label}
                      <em>{l.note}</em>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final">
          <div className="wrap">
            <span className="eyebrow" style={{ color: '#F6A07E', justifyContent: 'center' }}>Get started</span>
            <h2>Ready to own Charlotte&apos;s local search?</h2>
            <p className="lead">Start with a free Charlotte SEO audit. We will show you where you stand in the Map Pack and exactly what we would fix, with zero pressure to continue.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get your free Charlotte SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
            </div>
            <p className="fine">Local SEO billed month-to-month, with a free audit and no setup fee. Also in Charlotte: <Link href="/charlotte/web-design">web design</Link>, <Link href="/charlotte/ecommerce-development">e-commerce</Link>, and <Link href="/charlotte/ai-automation">AI automation</Link>. <Link href="/services/seo">US SEO services</Link>. More US cities: <Link href="/cleveland/seo">Cleveland SEO</Link> · <Link href="/nashville/seo">Nashville SEO</Link> · <Link href="/austin/seo">Austin SEO</Link>.</p>
          </div>
        </section>
      </div>

      <ExitIntentLeadForm
        region="us"
        source="exit_intent_charlotte_seo"
        heading="Claim your free SEO audit"
        subheading="Map Pack, local and technical SEO. Just your name and email."
        promo="Free Charlotte SEO audit, no obligation"
      />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

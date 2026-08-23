import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import HeroInlineForm from '@/components/HeroInlineForm';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './sioux-falls-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/sioux-falls/seo - Sioux Falls local-SEO city page. Built 2026-06-11.
   "The Trust Vault" layout. Real SiteHeader/SiteFooter/ModalCTAButton/WhatsAppCTA.
   Styles scoped under .sfseo (./sioux-falls-seo.css, next/font vars, no webfont
   request). CSS passbook-vault hero (text LCP, zero CLS), market photos lazy
   below the fold → Lighthouse 95+ target. Source: research/mockup-us-sioux-falls-seo-v4.html.
   Honesty: NO pricing anywhere (2026-06-11 rule), free audit, no guarantee,
   month-to-month; "0 agencies leading with AI search" claim softened to "almost
   no agency structures sites for AI citation today" (Tiger29 now markets GEO).
   No fake LocalBusiness address, no self-serving Review schema.

   DEEPENING PASS 2026-07-26 (GSC push: 533 impressions, avg position 20.9, 1 click).
   Added: answer-first block after the hero, a seven-district Sioux Falls geography
   section with real DataForSEO volumes (city-name terms at KD 0 vs "near me" at
   14,800/mo KD 24), a named-competitor section built from live SERP data
   (Thrive 11 appearances avg 3.8, Charlotte SEO Firm 5 at 9.0, Lesser Media 4 at
   11.8, plus the national field), 17 real People Also Ask questions appended to
   the FAQ (39 total), an internal-link hub (5 services + 4 city pages), ItemList
   schema and WebPage speakable. Currency symbols stripped page-wide. No prices.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const CANONICAL = 'https://factoryjet.com/sioux-falls/seo';

export const metadata: Metadata = {
  title: 'Sioux Falls SEO Company & Agency | Local Search & AI Visibility SD | FactoryJet',
  description:
    'Ranked Top Sioux Falls SEO Company & Agency. Dominate the Google 3-Pack, organic SERPs & AI Overviews for Sioux Empire businesses in Sioux Falls, Brandon & Harrisburg SD. Free audit, month-to-month, built by senior engineers.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Sioux Falls SEO Company & Agency | Local Search SD | FactoryJet',
    description:
      'Sioux Falls SEO company for the whole Sioux Empire: Map Pack, organic, and AI answers in one compounding plan. Free SEO audit, month-to-month, senior engineers, founder-led.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/blog-images/us-sioux-falls-seo-og.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Sioux Falls SEO company, local SEO services in Sioux Falls, South Dakota',
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* ── FAQ (39) - 22 Sioux Falls specific + 17 real People Also Ask questions pulled
      from live US SERPs (DataForSEO, 2026-07-26). Answers written fresh. No prices. ── */

const FAQ_ITEMS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'Who is the best SEO agency in Sioux Falls?',
    a: 'The one that can show compounding proof: calls, Map Pack positions, and AI citations growing month over month. FactoryJet competes for that title with senior engineers doing the work and no long contracts. Whichever SEO company Sioux Falls puts on your shortlist, ask for one client result with real numbers before you sign anything.',
  },
  {
    q: 'How much does SEO cost in Sioux Falls?',
    a: 'It depends on your market, your competition, and how much groundwork your site already has. A clinic competing citywide and a B2B supplier selling into the banks need different scopes. We explain your exact scope and price on a free call, in writing, before you commit to anything.',
  },
  {
    q: 'How long until I see results?',
    a: 'Technical fixes and Google Business Profile work often move Map Pack visibility in four to eight weeks. Competitive organic terms take three to six months. Like any account worth opening, the balance builds monthly, and we show progress markers from week one so you are never guessing.',
  },
  {
    q: 'Do you only work with businesses inside Sioux Falls?',
    a: 'We cover the whole metro: Sioux Falls, Brandon, Harrisburg, Tea, and the rest of Lincoln and Minnehaha counties, plus South Dakota businesses that sell statewide or nationally. The strategy adapts to where your customers actually are, including the four-state trade area that shops here.',
  },
  {
    q: 'Should I hire an SEO expert in Sioux Falls or a bigger firm?',
    a: 'Hire whoever pairs local market knowledge with real engineering. If you do hire SEO expert in Sioux Falls help directly, ask two questions: who writes the code when the audit finds site problems, and can they show AI citations on a report. Most local options answer no to both. We built our service so the answer is yes to both.',
  },
  {
    q: 'Do you offer the best local SEO services in Sioux Falls for small businesses?',
    a: 'We let the scope argue for us: weekly profile management, review systems, town-by-town pages, and engineering, all month to month. Our small business SEO services are the same stack the bigger accounts get, sized to one location, and you can leave with 30 days notice if the numbers do not convince you.',
  },
  {
    q: 'Can you get my business into ChatGPT and Google AI answers?',
    a: 'Yes. AI tools already answer "best accountant in Sioux Falls" style questions with specific names. We structure your site so AI engines can quote it, then report your citations per engine every month. Almost no agency in this market reports that today, which is exactly the point.',
  },
  {
    q: 'Do I need a new website first?',
    a: 'Usually no. If your site is fast and Google can read it, we build on it. If the site itself is the bottleneck we will say so on the first call and you decide. Unlike the web design agencies Sioux Falls owners usually call for that rebuild, we ship in 7 days and keep working the rankings, which keeps the advice honest.',
  },
  {
    q: 'What is in the free SEO audit?',
    a: 'Your rankings, Map Pack position, site speed, citation health, and a live check of what AI engines say about your business. Thirty minutes, screen shared, and the findings are yours either way. It is the same first deposit every engagement starts with, so you see exactly how we work before you pay anything.',
  },
  {
    q: 'Do you work as an ongoing SEO consultant or only on retainers?',
    a: 'Both. Some owners want a local SEO expert running everything monthly; others want an SEO consultant to audit, set direction, and hand their team a plan. Either way you get plain-English reporting and no lock-in, because pragmatic Midwest skepticism about retainers is something we would rather earn through results than argue with.',
  },
  {
    q: 'What should a Sioux Falls SEO company actually deliver each month?',
    a: 'A written list, not vibes: Google Business Profile updates, content shipped, citations fixed, reviews earned, technical issues closed, and a one-page statement tying it all to calls. If an SEO company in Sioux Falls cannot show you last month’s deliverables for a real client, names redacted, keep shopping.',
  },
  {
    q: 'What is included in your SEO services in Sioux Falls month to month?',
    a: 'Everything in the eight-deposit list above: Google Business Profile management, reviews, citations, service-area pages, technical SEO, answer-first content, earned mentions, and per-engine AI tracking. Our Sioux Falls SEO services run as one plan rather than a menu of upsells, so the unglamorous work that actually moves rankings never gets skipped.',
  },
  {
    q: 'Do you offer local SEO services in Sioux Falls on their own?',
    a: 'Yes. If the Map Pack is your battleground, we can run local SEO services in Sioux Falls focused purely on your Google Business Profile, reviews, citations, and town-by-town pages from Brandon to Tea. The best local SEO services in Sioux Falls are the ones measured in phone calls, so that is how we report, whatever the scope.',
  },
  {
    q: 'What makes the best AI SEO agency in Sioux Falls different from a traditional one?',
    a: 'A traditional shop optimizes for ten blue links. An AI SEO agency, sometimes called an AEO agency in Sioux Falls, also structures your site so ChatGPT, Gemini, Claude, and Google AI Overviews can quote it, then proves it with per-engine citation counts. If you are evaluating the best AI SEO agency in Sioux Falls, ask one question: can you show me my citations by engine, monthly? Very few can. We do.',
  },
  {
    q: 'I searched "SEO Sioux Falls" and got national firms. Do you actually work here?',
    a: 'We serve Sioux Falls and the whole Sioux Empire, with the founder on every discovery call. Searches for SEO in Sioux Falls surface national resellers because they outspend locals on ads, and that is exactly the opportunity: businesses that invest in real Sioux Falls SEO outrank those template operations on the searches that matter, because Google rewards genuine local signals.',
  },
  {
    q: 'Are you a web design agency in Sioux Falls too, or only SEO?',
    a: 'Both, and that combination is the point. Most web design agencies Sioux Falls owners call treat SEO as a checkbox, and most SEO shops cannot rebuild the slow site holding rankings back. We design and ship fast sites in 7 days and then rank them, so the audit advice and the build advice come from the same team with the same incentive.',
  },
  {
    q: 'Can SEO work for a B2B firm selling into the trust and banking cluster?',
    a: 'Yes, and it is one of the most underpriced plays in this market. Compliance consultants, staffing firms, fintech vendors, and IT providers selling into Citi, Wells Fargo, and the 100+ trust companies face buyers who shortlist from research, not cold calls. Authority content, plainly written expertise pages, and AI answer coverage put you on that shortlist before a salesperson ever could.',
  },
  {
    q: 'How do 5,000 newcomers a year change my SEO strategy?',
    a: 'They reset the loyalty map. New residents have no dentist, no accountant, no HVAC company, and no friends here to ask yet, so Google and AI assistants are their referral network. That makes rankings in Sioux Falls unusually winnable: the businesses on page one and in the Map Pack collect customers who would otherwise have gone wherever word of mouth sent them.',
  },
  {
    q: 'How do you handle Google reviews and our Google Business Profile?',
    a: 'We manage your Google Business Profile weekly: categories, services, photos, posts, and Q&A. For reviews, we set up a simple ask-and-respond system your team can run in minutes per job, because steady review velocity from real customers beats any shortcut and is one of the strongest local ranking signals you control.',
  },
  {
    q: 'What does your process look like in the first 30 days?',
    a: 'Week one is the live audit on a shared screen. Weeks two through four are foundation work: site speed, schema, crawl fixes, and a proper Google Business Profile rebuild. You get a written scope before anything starts and a progress note every week, so you always know what was deposited and what comes next.',
  },
  {
    q: 'Is SEO in Sioux Falls different from running Google Ads?',
    a: 'Yes, and they compound differently. Ads buy visibility that stops the moment the budget does. Sioux Falls SEO builds an asset: rankings, reviews, and AI citations that keep producing calls without a per-click bill. Many clients run both early on, then watch the paid share shrink as the organic balance grows. In this city, that argument usually makes itself.',
  },
  {
    q: 'Is there a contract, setup fee, or cancellation penalty?',
    a: 'No long-term contract, no setup fee, no penalty. Everything is month to month with 30 days notice, and you keep everything we build: your profile, your content, your citations, your data. We think an SEO partner should re-earn the engagement every month, so that is how we bill.',
  },

  /* ── Real People Also Ask questions from live US SERPs ── */
  {
    q: 'How much does the average local SEO cost?',
    a: 'There is no honest average, and anyone who quotes you one is really quoting their own rate card. What moves the number is scope. How many towns do you need to rank in, one or the whole Sioux Empire? Does the site need technical repair before content will stick? How many service pages have to be written from scratch? Do you want AI answer coverage tracked as well, or just the Map Pack? A one-chair dental practice in Harrisburg and a home services company covering both Minnehaha and Lincoln counties are genuinely different jobs. We scope yours on the call and put it in writing before you commit to anything.',
  },
  {
    q: 'Is local SEO worth it?',
    a: 'In this city, usually yes, and the reason is specific to Sioux Falls. Roughly five thousand people move here every year with no dentist, no plumber, no accountant and nobody local to ask. Google and, increasingly, an AI assistant are their referral network. If you are not in the Map Pack when they search, you are invisible to a slice of demand that arrives every single year. Where it is not worth it: if you sell to a handful of named accounts and every deal comes from a relationship, spend the money elsewhere. We will say so on the call rather than sell you something you do not need.',
  },
  {
    q: 'Is SEO dead or evolving in 2026?',
    a: 'Evolving, loudly. What died is the keyword-stuffing, link-buying version. What replaced it is harder and more durable: be genuinely useful, be fast, be verifiable, and be structured so that both Google and the AI assistants can quote you. Demand for trustworthy answers went up, not down. The surface those answers appear on is what changed.',
  },
  {
    q: 'Can I do local SEO myself?',
    a: 'A good chunk of it, yes, and honestly you should. Claim your Google Business Profile and fill in every field. Make your name, address and phone identical everywhere they appear. Post real photos. Ask every happy customer for a review and reply to all of them. That is not busywork, it moves rankings. Where owners hit the wall is the technical half: page speed, schema, crawl errors, and a page structure that covers Brandon, Harrisburg and Tea without three near-identical pages competing with each other. That part is engineering, and it is usually where things are stuck.',
  },
  {
    q: 'Do small businesses need SEO?',
    a: 'If your customers search before they buy, yes. That is nearly every service business in this metro: dentists, HVAC crews, roofers, law firms, clinics, restaurants, auto shops, vets. If you sell to three industrial buyers who already have your number, no. The test takes 30 seconds. Open an incognito window, search the way a customer would, and see whether you are on the first screen. If you are not, someone else is taking that call today.',
  },
  {
    q: 'How much should SEO cost for a small business?',
    a: 'Work backwards from one closed job instead of forwards from a price list. If a new patient, roof, or retainer is worth a lot to you, the bar for SEO paying for itself is low and you can afford to do it properly. If your average job is small, you need volume, and that changes what we build. The other scope drivers are the state of your website, how many towns you need to show up in, and how much writing has to happen. We put all of that in a written scope before you spend anything.',
  },
  {
    q: 'Why is SEO no longer relevant?',
    a: 'It still is, and the people saying otherwise usually mean something narrower. Social ads got better, paid search got bigger, and AI answers started intercepting clicks, so it feels like organic shrank. What actually happened is that the front door moved. Google AI Overviews and ChatGPT still have to pull their answers from somewhere, and they pull from sites that are fast, structured, and cited by other people. That is SEO with a new scoreboard, not the end of it.',
  },
  {
    q: 'Is doing a local SEO worth it?',
    a: 'Judge it on phone calls and direction requests, not on ranking screenshots. The arithmetic is friendlier here than in a coastal metro because the local competition is genuinely thin: the Sioux Falls city-name search terms sit at a keyword difficulty of zero, meaning almost nobody has built the authority to defend them. In Austin or Charlotte you are fighting agencies with thousands of referring domains. Here you are mostly fighting inertia.',
  },
  {
    q: 'What is the 80/20 rule in SEO?',
    a: 'Roughly a fifth of the work produces most of the result. For a local business here that fifth is almost always the same four things: a properly built Google Business Profile, steady real reviews, a site fast and clean enough that Google can crawl it without complaint, and one genuinely good page per service and per town you serve. Everything else is refinement. Agencies sell the other four fifths because it fills a monthly report.',
  },
  {
    q: 'What is a SEO salary?',
    a: 'It swings enormously by market and seniority, which is why the in-house versus agency decision is not really a salary decision. With unemployment around 1.8 percent in Sioux Falls, the harder question is whether you can hire a good one at all. Then there is the second problem: one person is rarely strong at technical work, writing, and local listings all at once. Most in-house hires end up strong at one of the three and the other two quietly stop happening.',
  },
  {
    q: 'Is SEO a hard job?',
    a: 'The concepts are not hard. Doing it consistently for months while the results lag is hard, and the technical half is genuinely engineering work. Most stalled SEO efforts we look at did not fail on strategy. They failed on follow-through: the profile stopped getting updated in March, the review asks fizzled out, and nobody ever fixed the render-blocking script that was costing two seconds on every page load.',
  },
  {
    q: 'Is it worth paying an SEO company?',
    a: 'It is worth paying one that can show you its work. The failure mode is not the money, it is paying for activity: reports stuffed with traffic charts while the phone rings the same as last year. Ask any shortlisted agency three things. Show me last month deliverables for a real client with the name removed. Who writes the code when the audit finds a site problem? Can you show me my citations by AI engine? Three questions, and most shortlists get short quickly.',
  },
  {
    q: 'How much does an SEO agency typically cost?',
    a: 'The ranges you see quoted online are close to meaningless because they hide what is included. One shop counts a monthly blog post as the service. Another includes technical engineering, review systems, and answer-engine tracking. Same label, completely different job. The three things that move a real number most are how many locations and towns you need, what condition the website is in, and how much writing has to be produced. Ours arrives in writing, with no setup fee and no contract behind it.',
  },
  {
    q: 'How does Google Maps ranking work?',
    a: 'Google has said publicly that it weighs three things: relevance, distance, and prominence. Relevance is how well your profile and site match what was typed. Distance is how close you are to the searcher or to the area they named. Prominence is how well known and well regarded you are, measured through reviews, mentions, and links. You cannot move your building, but you can widen the area Google associates you with by publishing real pages for the towns you actually serve, and you can absolutely work on the other two.',
  },
  {
    q: 'How do I get my listing at the top of Google Maps higher?',
    a: 'Claim the profile. Pick the most specific primary category you can, not the vaguest. Itemize every service. Make name, address and phone identical across every directory. Add real photos regularly, not once. Write your own Q and A entries. Post. Then build steady review velocity from actual customers, because a trickle every week beats a burst every year. The step owners skip is the last one: make sure the website that profile points at is fast and clearly says which towns you cover. That is often what unsticks a listing.',
  },
  {
    q: 'Why is my Google ranking so low?',
    a: 'Usually one of five things. The site is slow or has crawl problems. The profile is thin or sitting in the wrong category. Reviews dried up. A competitor got busier. Or Google shipped an update. Rankings also just wobble, and a two-position swing week to week is noise, not a crisis. What is not noise is a steady slide across a quarter. We start with the audit because guessing at this is the expensive option.',
  },
  {
    q: 'Can I pay Google to rank higher?',
    a: 'You can pay for ads, and Google labels them as ads. You cannot buy an organic position or a Map Pack pin. There is no fee that does it, and anyone offering one is selling you something else. A Google Business Profile is free to create and free to maintain. Ads and organic do work together though: plenty of businesses run ads early for cash flow, then watch the paid share shrink as the organic side compounds.',
  },
];

/* ── Section data ── */

const VAULT_ROWS: { item: string; when: string; kind: string; amt: string }[] = [
  { item: 'Google Business Profile, managed weekly', when: ' · month 1', kind: 'deposit', amt: '+ calls' },
  { item: 'Technical fixes, site rebuilt to 100/100 speed', when: ' · month 1', kind: 'deposit', amt: '+ crawl trust' },
  { item: 'Service pages that answer real questions', when: ' · month 2', kind: 'deposit', amt: '+ rankings' },
  { item: 'Citations AI engines can verify', when: ' · month 3', kind: 'deposit', amt: '+ AI mentions' },
  { item: 'Reviews compounding month over month', when: ' · ongoing', kind: 'interest', amt: '+ trust' },
];

const STATS: { n: string; unit: string; t: string; s: string }[] = [
  { n: '600', unit: 'B+', t: 'in trust assets held by the 100+ trust companies chartered in South Dakota, most of them headquartered right here in Sioux Falls', s: 'KELOLAND · Minneapolis Fed' },
  { n: '5,088', unit: '', t: 'new residents in 2025 alone. Every one of them is a searcher with no dentist, no builder, and no provider loyalty yet', s: 'City of Sioux Falls' },
  { n: '1.8', unit: '%', t: 'unemployment. Hiring is the hardest it has ever been, which makes inbound leads the most durable growth lever left', s: 'BLS' },
];

const FACTS: { k: string; v: string }[] = [
  { k: 'City population, 2025', v: '224,676' },
  { k: 'Added in one year', v: '+5,088' },
  { k: 'Metro growth since 2020', v: '+7.6%' },
  { k: 'Largest SD sector', v: 'Finance, 13.8% GDP' },
  { k: 'Trust companies', v: '100+' },
  { k: 'Anchor employers', v: 'Sanford · Avera · Citi' },
  { k: 'Regional trade area', v: '~1M people' },
  { k: 'Unemployment', v: '1.8%' },
];

const MARKET: { badge: string; h: string; p: string }[] = [
  { badge: '🏦', h: 'Banking and back-office finance', p: "Finance and insurance is South Dakota's largest sector at 13.8% of state GDP, and it started with the 1980 usury-law change that brought Citibank's card operation from New York. Citi alone employs around 3,200 people here, with Wells Fargo close behind. The SEO opportunity is the ecosystem around them: compliance consultants, fintech vendors, staffing firms, and B2B services selling into these institutions. Those buyers research like analysts, comparing three providers before one phone call, so the winning play is authority content that holds up to scrutiny, not just a tuned Google profile." },
  { badge: '🛡️', h: 'Trust companies and wealth management', p: 'More than 100 trust companies are chartered in South Dakota, holding over 600 billion in assets, and most keep their headquarters in Sioux Falls. These firms compete nationally for high-net-worth families who search discreetly and verify everything. For them, SEO means owning branded search, publishing plainly written authority pages, and being the name AI engines cite when someone asks about South Dakota trust administration. Map Pack tactics matter less here; credibility at every search surface matters more.' },
  { badge: '🏥', h: 'Healthcare, twice over', p: 'Sioux Falls is the rare 220,000-person city with two competing health systems headquartered in it. Sanford Health employs roughly 10,900 people and Avera around 8,000, and together they pull patients from South Dakota, northwest Iowa, southwest Minnesota, and northeast Nebraska. Every referral that crosses those state lines is also a search: for a dentist near the hospital, a physical therapist, home health, a med spa. Independent practices that rank in the Map Pack catch a four-state stream of patients the big systems cannot see.' },
  { badge: '🥩', h: 'Agriculture and food processing', p: 'Smithfield Foods employs about 3,200 people at its plant, and around it sits a web of ag input suppliers, equipment dealers, and processors selling across the Dakotas and beyond. These are B2B searches with long memories: a dealer who ranks for the parts and service queries farmers actually type becomes the default for a decade. Most ag suppliers here have never had a real SEO plan, which makes the organic ground unusually easy to take.' },
  { badge: '🛍️', h: 'Regional retail and franchises', p: 'Sioux Falls is the shopping hub for a trade area of roughly one million people spanning four states. Multi-location retailers, franchises, and home-services chains need local SEO services at scale: one properly built location page per store, consistent listings, and review systems that run themselves. Done right, every location earns its own Map Pack spot instead of the brand fighting for a single pin.' },
  { badge: '🏗️', h: 'Construction and home services', p: 'Sustained growth above 2% a year keeps homebuilders, remodelers, HVAC crews, roofers, and landscapers in permanent demand, especially across Harrisburg, Tea, and Brandon where the new rooftops actually go up. This is the highest-intent "near me" battleground in the market, decided by review velocity and service-area pages. If your crew works Lincoln County but your website only says Sioux Falls, Google hands those calls to someone else.' },
];

const DELIVERABLES: { mm: string; h: string; p: string }[] = [
  { mm: 'Deposit 01 · Local', h: 'Google Business Profile', p: 'Managed weekly, not quarterly. Categories, services, photos, posts, and Q&A maintained like the storefront it is.' },
  { mm: 'Deposit 02 · Local', h: 'Reviews engine', p: 'A repeatable system for earning, answering, and learning from reviews. Velocity beats volume, and we build velocity.' },
  { mm: 'Deposit 03 · Local', h: 'Citations and listings', p: 'Your name, address, and phone made consistent across the directories Google and AI engines actually check.' },
  { mm: 'Deposit 04 · Local', h: 'Service-area pages', p: 'Dedicated pages for Sioux Falls, Brandon, Harrisburg, Tea, and beyond, each written for that town, never copy-pasted.' },
  { mm: 'Deposit 05 · Technical', h: 'Technical SEO', p: 'Speed, clean code, schema, crawlability. We build to 100 out of 100 Google speed scores, the engineering gap no generalist shop in town fills.' },
  { mm: 'Deposit 06 · Content', h: 'Answer-first content', p: 'Pages built around the questions Sioux Falls buyers actually type, written plainly, reviewed by a human every time.' },
  { mm: 'Deposit 07 · Authority', h: 'Earned mentions', p: 'Real citations in places search and AI engines trust. No bulk links, no directories nobody reads, no risk.' },
  { mm: 'Deposit 08 · Proof', h: 'Five minute reporting', p: 'Calls, direction requests, rankings, and AI citations per engine. One page, monthly, readable over coffee.' },
];

const PLAN: { wk: string; h: string; p: string }[] = [
  { wk: 'Week 1', h: 'The audit, live', p: 'We pull up your rankings, your Map Pack position, your site speed, and what ChatGPT says about your business while you watch. You see the same screen we do. The findings are yours to keep whether or not we continue, which is what a free SEO audit should mean.' },
  { wk: 'Weeks 2 to 4', h: 'Fix the foundation', p: 'Technical repairs first: speed, schema, crawl issues, and the Google Business Profile rebuilt properly. This is the boring work most agencies skip because it never shows up in a slide deck. It shows up in rankings instead, and it is the first deposit in the passbook.' },
  { wk: 'Weeks 5 to 8', h: 'Build the surface area', p: 'Service-area pages for every town you cover from Brandon to Tea, answer-first content for your highest intent questions, and the citation cleanup that makes Google trust your address.' },
  { wk: 'Weeks 9 to 12', h: 'Earn the trust signals', p: 'Review velocity systems go live. Earned mentions begin landing. The first AI citation checks run, engine by engine, so we know exactly where you stand on the newest surface before your competitors know it exists.' },
  { wk: 'Every month after', h: 'Compound and report', p: 'One page, five minutes: calls, directions, rankings, AI citations, and what we are doing next month. SEO is compounding work and the report shows the curve, not vanity numbers. Like any good statement, the balance only moves one way when the deposits keep landing.' },
];

const FACTORS: { n: string; h: string; p: string }[] = [
  { n: '01', h: 'Relevance', p: 'Does your profile and site clearly say what you do? A profile listing "HVAC contractor" with every service itemized beats a vague one every time. We make relevance explicit on every page, in language both Google and AI engines parse cleanly, which is also what gets you quoted when someone asks an AI assistant for a recommendation.' },
  { n: '02', h: 'Distance', p: 'You cannot move your shop, but you can tell Google exactly where you work. Service-area pages for Brandon, Harrisburg, Tea, and the Lincoln County growth corridor widen your effective radius, which matters in a metro where the new households are landing outside the old city limits.' },
  { n: '03', h: 'Prominence', p: 'Reviews, mentions, links, and the general weight of evidence that you are a real, busy business. This compounds monthly, like everything else in this city. The earlier you start, the harder you are to displace, which is the whole argument for opening the account before the next five thousand residents arrive.' },
];

const COMPARE: { k: string; fj: string; gen: string; seo: string }[] = [
  { k: 'Who does the work', fj: 'Senior engineers, founder on every call', gen: 'Designers first, SEO assigned to whoever is free', seo: 'SEO specialists, no engineers on staff' },
  { k: 'Map Pack focus', fj: 'Weekly GBP management, metro-wide pages', gen: 'Profile set up once, touched quarterly', seo: 'Solid, but stops where the website code starts' },
  { k: 'AI search', fj: 'Citations tracked per engine, monthly', gen: 'Not offered', seo: 'Mentioned, rarely measured' },
  { k: 'Site speed', fj: 'Built and kept at 100 out of 100', gen: 'Depends on the theme', seo: 'Flagged in audits, fixed by no one' },
  { k: 'Can rebuild your site', fj: 'Yes, 7-day builds in house', gen: 'Yes, on a months-long timeline', seo: 'No, you hire a second vendor' },
  { k: 'Contract', fj: 'Month to month, 30 day notice', gen: 'Six to twelve months', seo: 'Six to twelve months' },
  { k: 'Reporting', fj: 'One page: calls, rankings, AI citations', gen: 'Traffic charts', seo: 'Ranking screenshots' },
];

const INDUSTRIES: { h: string; p: string }[] = [
  { h: 'Dentists and clinics', p: 'Map Pack plus reviews plus patient-question content, tuned for a city whose two health systems pull patients from four states past your door.' },
  { h: 'HVAC, plumbing, roofing', p: 'Service-area coverage across the metro and the Lincoln County boom towns, emergency-intent pages, and review velocity that outruns the franchises.' },
  { h: 'Trust and wealth firms', p: 'Discreet, authority-led SEO: branded search dominance, plainly written expertise pages, and AI answer coverage for the questions HNW families actually ask.' },
  { h: 'Law firms and CPAs', p: 'One page per practice area, written clearly enough for AI engines to quote and precise enough for the State Bar, serving a market dense with relocating businesses.' },
  { h: 'B2B suppliers to the anchors', p: 'Compliance, staffing, IT, and fintech vendors selling into Citi, Wells Fargo, Sanford, and Avera need authority content for buyers who shortlist before they ever call.' },
  { h: 'Retail and franchises', p: 'Location-page architecture for the chains serving a million-person trade area, so every store earns its own Map Pack pin.' },
];

const TAGS = ['home builders', 'remodelers', 'physical therapy', 'med spas', 'home health', 'ag equipment dealers', 'insurance agencies', 'restaurants', 'auto repair', 'veterinarians', 'landscaping', 'senior care'];

const REPORT_ROWS: { lab: string; width: string; val: string }[] = [
  { lab: 'GBP calls', width: '82%', val: '↑64' },
  { lab: 'Directions', width: '64%', val: '↑41' },
  { lab: 'Map Pack avg', width: '74%', val: '#2.4' },
  { lab: 'AI citations', width: '44%', val: '12' },
];

/* ── Answer-first: the four surfaces SEO in Sioux Falls actually covers ── */

const SURFACES: { mm: string; h: string; p: string }[] = [
  { mm: 'Surface 01', h: 'The Google Map Pack', p: 'The three businesses pinned above the results. Won with a properly built Google Business Profile, consistent listings, review velocity, and pages naming the towns you serve.' },
  { mm: 'Surface 02', h: 'The organic results', p: 'The blue links underneath. Won with one real page per service and per town, written to answer the question that was typed rather than to hit a word count.' },
  { mm: 'Surface 03', h: 'The site underneath', p: 'Speed, clean markup, schema, and a crawlable structure. This is the half most local shops cannot touch, and it is usually why rankings sit still.' },
  { mm: 'Surface 04', h: 'The AI answers', p: 'ChatGPT, Gemini, Claude, and Google AI Overviews now name specific businesses. Getting quoted takes structure and verifiable mentions, and it can be measured monthly.' },
];

/* ── Real Sioux Falls geography. Where the searches physically come from. ── */

const DISTRICTS: { badge: string; h: string; p: string }[] = [
  { badge: '🌉', h: 'Downtown and Phillips Avenue', p: 'The stretch from Falls Park down Phillips past the Sculpture Walk, the Levitt, and the Steel District build-out on the east bank of the Big Sioux. Searches here are discovery searches: somewhere to eat before a show at the PREMIER Center, a boutique, a law office above a storefront. Photos, hours, and Map Pack position decide these. Long-form content barely matters. What matters is that your profile looks alive at 6pm on a Friday.' },
  { badge: '🛒', h: 'The 41st Street corridor', p: 'Empire Mall and the big-box spine either side of it. This is the most search-contested ground in the metro, because national chains with real SEO budgets have locations here and their corporate pages rank by default. An independent on 41st Street does not out-content a national brand. It out-specifics them: exact services, real photos, review velocity, and a page that says what happens when you walk in.' },
  { badge: '🏘️', h: 'South and the Lincoln County corridor', p: 'Everything past 57th and 85th, out through Harrisburg and Tea, plus the Bridges area and the newer development off Louise. This is where the rooftops go up and where "near me" home-services searches physically originate. The single most common technical mistake we find in this market lives here: a contractor whose crews work Lincoln County every day, on a website that only ever says Sioux Falls. Google reads that literally and hands the call to whoever named the town.' },
  { badge: '🛣️', h: 'East side, Brandon, and the Highway 100 corridor', p: 'Dawley Farm Village, the growth pushing toward Veterans Parkway, and Brandon just over the county line. Newer households, fewer established loyalties, and a stretch of buyers who genuinely do choose their dentist and their garage from a phone screen. Service-area pages earn their keep out here faster than anywhere else in the metro.' },
  { badge: '🏥', h: 'The hospital corridors', p: 'The Avera campus on Cliff Avenue and the Sanford campuses on West 18th and out at 69th pull patients in from South Dakota, northwest Iowa, southwest Minnesota, and northeast Nebraska. Every one of those referrals is followed by a search: a dentist near the hospital, physio, home health, a med spa, somewhere to stay. Independent practices in these corridors are catching a four-state stream the big systems never see, and most of them are not even trying to rank for it.' },
  { badge: '🚚', h: 'North side, I-90, and the industrial belt', p: 'The interchange where I-29 and I-90 cross, the ag and logistics ground around it, and the USD Discovery District. Nobody here types "near me". They type part numbers, specifications, and product categories, and they compare three suppliers before a single phone call. This is the quietest, least contested organic ground in the whole market, and almost nobody local is competing for it.' },
  { badge: '🧭', h: 'West side and Lake Lorraine', p: 'The newer mixed-use retail and office ground off 26th and I-29, plus the older Western Avenue and Minnesota Avenue trade. A useful reminder that Sioux Falls is not one search market. A business on Western competing for the whole metro will lose to a business that admits it serves the west side and says so clearly.' },
];

/* ── Who else actually shows up on these SERPs (DataForSEO, US, 2026-07-26) ── */

const RIVALS: { badge: string; h: string; p: string }[] = [
  { badge: '01', h: 'Thrive Agency (thriveagency.com)', p: 'The most persistent name in this data set: 11 appearances across the SERPs we tracked, at an average position of 3.8. Their page-one wins tell you what kind of operation it is. They hold number one for "agentur marketing" at 720 searches a month and "agences marketing digital" at 590, which are German and French queries. That is a global content machine with a very large publishing budget behind it. If you want an agency that has done your industry somewhere in the world already, they probably have. What they are not is a firm that knows the difference between a Harrisburg lead and a Brandon one.' },
  { badge: '02', h: 'Charlotte SEO Firm (charlotteseofirm.com)', p: 'Five appearances at an average position of 9.0, and genuinely the best argument on this list for hiring local. They hold position one for "charlotte seo companies" and "charlotte seo company", both at 880 searches a month, plus "charlotte nc seo" at 320. One city, owned outright. We rate that highly and it is close to the model we are running here, because "sioux falls seo" and "seo sioux falls" both sit at 30 searches a month with a keyword difficulty of zero. Nobody has claimed this city the way they claimed theirs.' },
  { badge: '03', h: 'Lesser Media (lessermedia.com)', p: 'Four appearances at an average position of 11.8, running the multi-city page model: position four for "seo springfield" and "seo stamford", both 110 a month, and position three for "ppc san antonio" at 90. Proof the city-page play works when the pages are real rather than a find-and-replace job. The risk in that model is obvious, and it is the same risk we hold ourselves to: a page about Sioux Falls that could have any other city name pasted into it will eventually be treated as what it is.' },
  { badge: '04', h: 'The national field', p: 'Straight North (3 appearances, average position 9.0), Helium SEO (3 at 11.7), Elit-Web (3 at 7.0), TastyPlacement (2 at 2.0), Tiger29 (2 at 6.5), and Synchronicity Designs (2 at 7.0). Competent firms, and several of them now market generative engine optimization properly, so the AI-search gap in this market is closing rather than sitting open forever. What none of them have is anyone in the Sioux Empire. When a Tea homeowner searches at 9pm in February, the difference between an agency that knows what that search means and one that has your account in a queue is the whole engagement.' },
];

/* ── Internal linking: services + other city SEO pages that exist ── */

const SERVICE_LINKS: { href: string; h: string; p: string }[] = [
  { href: '/services/seo', h: 'US SEO services', p: 'The full national picture: how we run technical, content, and authority work across markets.' },
  { href: '/services/local-seo', h: 'Local SEO services', p: 'Map Pack, Google Business Profile, citations, and review systems as a standalone service.' },
  { href: '/services/small-business-seo', h: 'Small business SEO', p: 'The same stack, sized to one location and one owner making the decision.' },
  { href: '/services/seo-audit', h: 'SEO audit', p: 'What we look at, in what order, and what you get to keep afterwards.' },
  { href: '/services/ai-seo', h: 'AI SEO services', p: 'Getting quoted by ChatGPT, Gemini, Claude, and Google AI Overviews, and measuring it.' },
];

const CITY_LINKS: { href: string; h: string; p: string }[] = [
  { href: '/fargo/seo', h: 'Fargo SEO', p: 'The other upper-Midwest market we work: same thin competition, same growth-driven demand.' },
  { href: '/lincoln/seo', h: 'Lincoln SEO', p: 'Nebraska, and a market with a comparable mix of healthcare, insurance, and university spend.' },
  { href: '/nashville/seo', h: 'Nashville SEO', p: 'A harder market. We sit at position 10 for "local seo nashville", and we say so rather than imply otherwise.' },
  { href: '/austin/seo', h: 'Austin SEO', p: 'Harder still. Position 8 for "seo agency austin texas" against firms with far more authority than us.' },
];

const LINK_STYLE = { color: '#B23E13', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' } as const;

/* ── JSON-LD: WebPage + Service (NO offers/pricing) + FAQPage (derived) ── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  dateModified: '2026-08-23',
  name: 'Sioux Falls SEO Company | Local SEO Services in Sioux Falls, SD',
  url: CANONICAL,
  description:
    'FactoryJet is a Sioux Falls SEO company offering local SEO services across the Sioux Empire: Google Business Profile, reviews, citations, technical SEO, content, and AI search optimization, with a free audit and month-to-month terms.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  about: { '@type': 'Thing', name: 'Local search engine optimization in Sioux Falls, South Dakota' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.answer-first .lead', '.answer-first p.body'],
  },
};

const cityListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'FactoryJet SEO services by US city',
  itemListOrder: 'https://schema.org/ItemListUnordered',
  numberOfItems: CITY_LINKS.length + 1,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Sioux Falls SEO', url: CANONICAL },
    ...CITY_LINKS.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: c.h,
      url: `https://factoryjet.com${c.href}`,
    })),
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO Services in Sioux Falls, SD',
  serviceType: 'Search engine optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'City', name: 'Sioux Falls', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Brandon', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Harrisburg', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Tea', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
  ],
  url: CANONICAL,
  description:
    'Sioux Falls SEO services covering the Google Map Pack, organic rankings, and AI answers: Google Business Profile management, reviews, citations, service-area pages, technical SEO, answer-first content, earned mentions, and per-engine AI citation reporting. Month-to-month, free audit.',
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

export default function SiouxFallsSeoPage() {
  return (
    <>
      <script id="sioux-falls-seo-webpage-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="sioux-falls-seo-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="sioux-falls-seo-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="sioux-falls-seo-citylist-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityListSchema) }} />

      <SiteHeader />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'US SEO Services', url: 'https://factoryjet.com/services/seo' },
          { name: 'Sioux Falls SEO', url: CANONICAL },
        ]}
      />

      <main className="sfseo">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'US SEO Services', url: 'https://factoryjet.com/services/seo' },
          { name: 'Sioux Falls SEO', url: CANONICAL },
        ]} />
        {/* 1 HERO - The Trust Vault */}
        <section className="hero">
          <div className="wrap">
            <div>
              <span className="eb rise d1">SEO COMPANY · SIOUX FALLS, SOUTH DAKOTA</span>
              <h1 className="rise d2">In the city of trust companies, <em>rankings compound</em> like interest.</h1>
              <p className="sub rise d3">Sioux Falls runs on compounding. The trust cluster grows balances, the banks grow card portfolios, and the city itself added 5,088 residents in a single year. SEO works the same way here: every deposit of content, citations, reviews, and engineering earns more than the month before. Most agencies in town never open the account. We are the Sioux Falls SEO company that does.</p>
              <HeroInlineForm region="us" source="sioux_falls_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <a className="btn btn-ghost" href="#dividend">See what compounds</a>
                <WhatsAppCTA city="Sioux Falls" service="SEO" />
              </div>
              <div className="trustgrid rise d4">
                <div className="tchip"><i /><span><b>Technical + AI search</b>, the gap in this market</span></div>
                <div className="tchip"><i /><span><b>Month to month</b>, no lock-in</span></div>
                <div className="tchip"><i /><span><b>Proof per engine</b>, monthly</span></div>
              </div>
            </div>
            <div className="vault rise d3" aria-label="Search equity passbook, an illustration of how SEO work compounds">
              <div className="vhead"><b>SEARCH EQUITY PASSBOOK</b><span>account: your business</span></div>
              {VAULT_ROWS.map((r) => (
                <div className="vrow" key={r.item}>
                  <span>{r.item}<span className="d">{r.when}</span></span>
                  <span className="d">{r.kind}</span>
                  <span className="amt">{r.amt}</span>
                </div>
              ))}
              <div className="vfoot"><b>Balance after 12 months</b><span className="tot">page one + AI answers</span></div>
            </div>
          </div>
        </section>

        {/* 1b ANSWER-FIRST - who does SEO in Sioux Falls and what the work is */}
        <section className="answer-first">
          <div className="wrap">
            <span className="eb">Answer first</span>
            <h2>Who does SEO in Sioux Falls, and what does the work <em>actually involve?</em></h2>
            <p className="lead">Three kinds of firm compete for this work, and the job itself comes down to four surfaces. Here is the whole thing in about a minute.</p>
            <p className="body" style={{ marginTop: 18 }}><b>Who does it.</b> Three groups. First, local generalist web and marketing shops that build sites and add SEO as a line item. Second, national agencies that market into South Dakota without anyone living here, which is most of the names you will find if you search right now. Third, specialists like FactoryJet, where senior engineers do the work and the founder runs every first call. Nobody in that list is automatically right for you. The useful question is which one can open your website code, and which one can prove what happened last month.</p>
            <p className="body"><b>What the work is.</b> Local SEO means making your business appear when someone in the Sioux Empire searches for what you sell. In practice that is a Google Business Profile maintained weekly rather than set up once, consistent business listings across the directories Google checks, a steady flow of real reviews, one honest page for each service and each town you serve from Brandon to Tea, a website fast and cleanly built enough for Google to crawl without complaint, and now a structure that lets AI assistants quote you. It is unglamorous, it compounds, and it takes months rather than weeks. Anyone promising it takes weeks is describing an ad budget.</p>
            <p className="body"><b>Whether it is worth it here.</b> Probably more than you think. The city-name searches look tiny on paper: &quot;seo sioux falls&quot; and &quot;sioux falls seo&quot; each draw about 30 searches a month, and &quot;sioux falls seo company&quot; about 20. But almost nobody types a city name any more. They type &quot;seo company near me&quot;, which draws 14,800 a month nationally, and Google localizes it to wherever their phone is standing. Your real market is the localised version of every &quot;near me&quot; search in the metro, and the city-name volume badly understates the prize.</p>
            <div className="del" style={{ marginTop: 28 }}>
              {SURFACES.map((s) => (
                <div className="dc" key={s.h}>
                  <span className="mm">{s.mm}</span>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
            <div className="vquote" style={{ marginTop: 24, borderRadius: '0 14px 14px 0' }}>
              <b>Where we stand, honestly.</b> FactoryJet has 44 referring domains. Coalition Technologies, one of the firms we compete against, has roughly 2,800. We rank position 10 for &quot;local seo nashville&quot; and position 8 for &quot;seo agency austin texas&quot;. We are the challenger, not the incumbent, and we would rather you knew that before the call than after it. What we compete on is engineering and AI-answer coverage, not link volume. See the full breakdown in <Link href="/services/seo" style={LINK_STYLE}>our US SEO services</Link> or start with a <Link href="/services/seo-audit" style={LINK_STYLE}>free SEO audit</Link>.
            </div>
          </div>
        </section>

        {/* 2 STAT STRIP */}
        <section className="strip">
          <div className="wrap">
            {STATS.map((s) => (
              <div className="stat" key={s.s}>
                <div className="n">{s.n}{s.unit ? <i>{s.unit}</i> : null}</div>
                <div className="t">{s.t}</div>
                <div className="s">{s.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 WHAT IS LOCAL SEO IN SIOUX FALLS (definition, answer-first) */}
        <section>
          <div className="wrap">
            <div className="edit">
              <div>
                <span className="eb">The short answer</span>
                <h2>What is local SEO in Sioux Falls, <em>actually?</em></h2>
                <p className="body">Local SEO is the work that makes your business show up when someone in the Sioux Empire searches for what you sell. It covers three surfaces at once: <b>the Google Map Pack</b> (the three businesses pinned to the map), <b>the organic results</b> below it, and now <b>the AI answers</b> from ChatGPT, Gemini, and Google AI Overviews that increasingly sit on top of everything.</p>
                <p className="body">In a market like Sioux Falls the Map Pack decides who gets the call for most service businesses. When a Harrisburg homeowner types &quot;furnace repair near me&quot;, the three names on that map split the work. Position four might as well be position forty. That is why our local SEO services start there: Google Business Profile, reviews, citations, and the service-area pages that tell Google you cover Brandon, Tea, and the rest of Lincoln County, the fastest growing county in South Dakota.</p>
                <p className="body">The part most SEO companies in Sioux Falls skip is the third surface. A growing share of buyers now checks an AI answer before calling anyone, and AI engines pick their recommendations from fast, structured, verifiable websites. Every plan we run treats AI search as a first-class surface, not an upsell, because the Sioux Falls businesses cited by AI today are compounding an advantage their competitors have not even noticed. In a city built on compounding, that should sound familiar.</p>
                <div className="midcta">
                  <ModalCTAButton label="Check where you rank today, free" region="us" modalVariant="seo" btnVariant="primary-light" />
                  <span>30 minutes · live screen share · you keep the findings</span>
                </div>
              </div>
              <div className="factbox">
                <h3>Sioux Falls search market, at a glance</h3>
                {FACTS.map((f) => (
                  <div className="fr" key={f.k}><span>{f.k}</span><span className="fv">{f.v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 THE SIOUX FALLS MARKET */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Know the market, win the market</span>
            <h2>SEO in Sioux Falls is six different games. <em>We play all of them.</em></h2>
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
                    src="/images/us/sioux-falls/seo/sioux-falls-seo-1.webp"
                    alt="Sioux Falls coffee shop owner in her downtown storefront, the kind of local business our Sioux Falls SEO services put in the Map Pack"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pslot wide">
                  <img
                    src="/images/us/sioux-falls/seo/sioux-falls-seo-2.webp"
                    alt="Front desk of a Sioux Falls clinic taking a patient call generated by local SEO in Sioux Falls, South Dakota"
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

        {/* 4b THE MAP - real Sioux Falls geography and what it means for search */}
        <section className="groom">
          <div className="wrap">
            <span className="eb">Where the searches come from</span>
            <h2>Sioux Falls is not one search market. <em>It is seven.</em></h2>
            <p className="lead">A search from a house off 85th Street behaves nothing like a search from a table on Phillips Avenue. If your SEO plan does not know the difference, it is a template with your name on it.</p>
            <div style={{ marginTop: 26 }}>
              {DISTRICTS.map((d) => (
                <div className="mrow" key={d.h}>
                  <div className="badge" aria-hidden="true">{d.badge}</div>
                  <div><h3>{d.h}</h3><p>{d.p}</p></div>
                </div>
              ))}
            </div>
            <div className="edit" style={{ marginTop: 34 }}>
              <div>
                <h3 style={{ fontSize: 21, marginBottom: 10 }}>How competitive is the Sioux Falls SERP, really?</h3>
                <p className="body">Thinner than almost anyone here assumes. Every Sioux Falls city-name search term we pulled comes back at a keyword difficulty of zero, which in plain terms means no site has built enough authority around those phrases to defend them. Compare that with the national &quot;near me&quot; terms in the same data: &quot;best seo company near me&quot; sits at a difficulty of 41, &quot;local seo company near me&quot; at 34. Those are fights. The Sioux Falls terms are not fights, they are a vacancy.</p>
                <p className="body">The catch is that low difficulty does not mean low effort, it means low competition for the ground you have to hold anyway. Your customers still mostly type &quot;near me&quot;, and winning those localized results needs the same Map Pack work, the same reviews, and the same fast site as anywhere else. The difference is that in Austin you are up against agencies with thousands of referring domains, and here you are up against businesses that have not updated their Google profile since 2023. Same work, far less resistance, and the businesses that start now get to compound before anyone else notices the gap.</p>
                <p className="body">One more thing worth knowing before you spend anything. Most of the firms that rank when a Sioux Falls owner searches for SEO help are not from South Dakota. That is not a scandal, plenty of them are good, but it does mean the local signals Google rewards most are sitting there unclaimed. <Link href="/services/local-seo" style={LINK_STYLE}>Local SEO</Link> is the most underused lever in this market and it is the one nobody is pulling.</p>
              </div>
              <div className="factbox">
                <h3>Real search volume, Sioux Falls and near me</h3>
                <div className="fr"><span>seo sioux falls</span><span className="fv">30/mo · KD 0</span></div>
                <div className="fr"><span>sioux falls seo</span><span className="fv">30/mo · KD 0</span></div>
                <div className="fr"><span>sioux falls seo company</span><span className="fv">20/mo · KD 0</span></div>
                <div className="fr"><span>seo company near me</span><span className="fv">14,800/mo · KD 24</span></div>
                <div className="fr"><span>local seo company near me</span><span className="fv">1,900/mo · KD 34</span></div>
                <div className="fr"><span>best seo company near me</span><span className="fv">1,000/mo · KD 41</span></div>
                <div className="fr"><span>seo marketing company near me</span><span className="fv">390/mo · KD 30</span></div>
                <div className="fr"><span>top seo company near me</span><span className="fv">90/mo · KD 29</span></div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: '#50505a', marginTop: 12, lineHeight: 1.6 }}>US volumes, DataForSEO, July 2026. KD is keyword difficulty on a 0 to 100 scale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 DELIVERABLES (8 deposits, 4x2) */}
        <section>
          <div className="wrap">
            <span className="eb">What our Sioux Falls SEO services include</span>
            <h2>Eight monthly deposits. <em>One compounding balance.</em></h2>
            <p className="lead">Every engagement is built like a savings plan. Each line of work earns on its own and multiplies the others, because a perfect Google profile on a slow website is a wasted profile, and great content nobody can find is a diary.</p>
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
            <p className="lead">Google has said publicly that local results weigh relevance, distance, and prominence. Here is what each one means for a Sioux Falls business, in plain words.</p>
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
            <h2>FactoryJet vs the usual <em>Sioux Falls options.</em></h2>
            <p className="lead">Most web design agencies Sioux Falls businesses call treat SEO as a line item, and the SEO-only shops cannot rebuild the slow site that is holding the rankings back. We run as both: the web design agency Sioux Falls owners use for fast rebuilds and the SEO team that ranks them. That is the comparison that matters.</p>
            <div className="cmpwrap">
              <table>
                <thead>
                  <tr><th scope="col"><span className="sr-only">Criteria</span></th><th scope="col">FactoryJet</th><th scope="col">Typical design-led generalist</th><th scope="col">Typical SEO-only shop</th></tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.k}>
                      <td>{r.k}</td>
                      <td>{r.fj}</td>
                      <td>{r.gen}</td>
                      <td>{r.seo}</td>
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

        {/* 8b WHO ELSE RANKS - named competitors, treated fairly */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">The firms you will actually find</span>
            <h2>Who else shows up when you search for SEO help, <em>and what they are good at.</em></h2>
            <p className="lead">We pulled the live US results for these searches in July 2026. These are the domains that kept appearing, with their real positions and their real page-one keywords. Judge for yourself.</p>
            <div style={{ marginTop: 26 }}>
              {RIVALS.map((r) => (
                <div className="mrow" key={r.h}>
                  <div className="badge" aria-hidden="true" style={{ fontFamily: 'var(--mono)', fontSize: 16, fontWeight: 700, color: '#B23E13' }}>{r.badge}</div>
                  <div><h3>{r.h}</h3><p>{r.p}</p></div>
                </div>
              ))}
            </div>
            <div className="vquote" style={{ marginTop: 26 }}>
              <b>So why us.</b> Not because those firms are bad. Several are better resourced than we are and we are not going to pretend otherwise. We win a specific kind of engagement: a Sioux Falls business whose rankings are stuck behind an engineering problem, or who wants to be quoted by AI assistants before their competitors work out that is a thing. If your problem is neither of those, one of the firms above may genuinely serve you better, and we will say so on the call rather than take the retainer.
            </div>
            <div className="midcta">
              <ModalCTAButton label="Get a straight second opinion" region="us" modalVariant="seo" btnVariant="primary-light" />
              <span>bring any proposal you have already received</span>
            </div>
          </div>
        </section>

        {/* 9 INDUSTRIES (lavender room) */}
        <section className="lroom">
          <div className="wrap">
            <span className="eb">Built for Sioux Falls businesses</span>
            <h2>The industries we rank <em>in the Sioux Empire.</em></h2>
            <div className="ind">
              {INDUSTRIES.map((i) => (
                <div className="ic" key={i.h}><h3>{i.h}</h3><p>{i.p}</p></div>
              ))}
            </div>
            <ul className="tags" aria-label="More industries we serve in Sioux Falls">
              {TAGS.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </section>

        {/* 10 GROWTH DIVIDEND (split + compounding curve) */}
        <section className="room-alt" id="dividend">
          <div className="wrap">
            <span className="eb">The growth dividend</span>
            <h2>A city this young in loyalty <em>rewards early rankers.</em></h2>
            <div className="vwrap">
              <div>
                <p className="body">Five thousand newcomers a year, plus a steady stream of owners relocating for a state with zero personal and zero corporate income tax, means Sioux Falls searches are unusually winnable. New residents have no dentist, no accountant, no HVAC company, no builder. They pick from page one and the Map Pack, and increasingly from whatever an AI assistant tells them. Word of mouth is strong here, but newcomers do not have any mouths to hear it from yet. Google is their referral network, and it can be yours.</p>
                <p className="body">The supply side is just as lopsided. Local agencies are mostly generalists, one leads with SEO, and nobody in this market leads with engineering plus AI search together. That is the gap a business owner can drive a truck through: rankings in Sioux Falls cost less effort to win than in any coastal metro, and the compounding starts the month you begin. The dividend goes to whoever deposits first.</p>
                <div className="vquote"><b>The dividend, in numbers.</b> New residents in 2025: 5,088. Trust companies anchoring downtown: 100+. Anchor employers: Sanford, Avera, and Citi, the top 3. And almost no agency in this market structures sites for AI citation today.</div>
              </div>
              <div className="curve" role="img" aria-label="Search equity compounding curve showing citations, service pages, reviews, and AI mentions building month over month">
                <span className="clab">DEPOSITS COMPOUND · MONTH OVER MONTH</span>
                <span className="riseline" />
                <span className="axis" />
                <span className="dchip" style={{ left: '7%', bottom: 84 }}><i>📍</i>Citations</span>
                <span className="dchip" style={{ left: '27%', bottom: 136 }}><i>📄</i>Service pages</span>
                <span className="dchip" style={{ left: '48%', bottom: 194 }}><i>⭐</i>Reviews</span>
                <span className="dchip hot" style={{ left: '64%', bottom: 256 }}><i>💬</i>AI mentions</span>
                <span className="imark" style={{ left: '30%' }}>Month 3 · interest</span>
                <span className="imark" style={{ left: '56%' }}>Month 6 · interest</span>
                <span className="imark" style={{ left: '82%' }}>Month 12 · interest</span>
              </div>
            </div>
          </div>
        </section>

        {/* 11 AI SEARCH (peach room) */}
        <section className="proom">
          <div className="wrap">
            <span className="eb">The newest surface</span>
            <h2>When Sioux Falls asks AI, <em>be the answer.</em></h2>
            <div className="aiwrap">
              <div>
                <p className="body">Ask ChatGPT for the best roofing company in Sioux Falls and it names names. Ask Gemini which firm handles South Dakota trust administration and it answers with specific companies, pulled from the websites and mentions it trusts. Google now shows AI Overviews above the regular results for a growing share of local questions, and pages ranked first lose more than half their clicks when that happens. The search results your customers see in 2026 are not the ones your last agency optimized for.</p>
                <p className="body">This is the quietest land grab in local search, and almost nobody here has noticed. If you went looking for an AI SEO agency in Sioux Falls today, or an AEO agency that can show answer-engine citations on a report, you would find almost no one who delivers that. We make your pages quotable: clear questions, direct answers, schema underneath, and real mentions AI engines can verify. Then we track your citations in ChatGPT, Gemini, Claude, and Google AI Overviews every month, so AI visibility becomes a number on your statement instead of a mystery. Pair it with our <Link href="/services/ai-seo">US AI SEO service</Link> for the deepest coverage. In the city that turned a 1980 banking law into its largest industry, being early to a new set of rules is a local tradition.</p>
                <ul className="pills" aria-label="AI engines we track">
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
              <div className="aistack">
                <div className="mini-ac" aria-label="Example of an AI assistant recommending a Sioux Falls business">
                  <div className="h"><i /> ai-assistant · live answer</div>
                  <div className="q">&quot;Best accountant in Sioux Falls?&quot;</div>
                  <div className="a">Based on reviews, response times, and verified credentials, <mark>your business</mark> is a frequently recommended option for Sioux Falls and Lincoln County clients…</div>
                  <div className="h ft">that answer is the product · we engineer it</div>
                </div>
                <div className="report" aria-label="Sample monthly statement format">
                  <div className="rhead"><b>Monthly Statement</b><span>preview</span></div>
                  {REPORT_ROWS.map((r) => (
                    <div className="rrow" key={r.lab}>
                      <span className="lab">{r.lab}</span>
                      <div className="rbar"><i style={{ width: r.width }} /></div>
                      <span className="val">{r.val}</span>
                    </div>
                  ))}
                  <p className="rnote">illustrative format, one page, five minutes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12 FAQ (22) */}
        <section className="room-alt">
          <div className="wrap">
            <span className="eb">Questions, answered straight</span>
            <h2>Sioux Falls SEO <em>FAQ.</em></h2>
            <p className="lead">39 questions, answered the way we would on a call: answer first, no hedging, no fine print. The second half are the questions people actually ask Google about SEO, pulled from live results rather than invented.</p>
            <div className="fwrap">
              {FAQ_ITEMS.map((f) => (
                <div className="fi" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
            <p className="fnote">Still deciding? Compare our <Link href="/services/seo">US SEO services</Link>, <Link href="/services/local-seo">local SEO services</Link>, <Link href="/services/small-business-seo">small business SEO</Link> and <Link href="/services/ai-seo">AI SEO services</Link>, or just <a href={CALENDLY}>ask the founder directly</a>.</p>
          </div>
        </section>

        {/* 13 TEAM */}
        <section className="team">
          <div className="wrap">
            <div className="twrap">
              <div>
                <img
                  src="/images/us/services/seo/team-cutout.webp"
                  alt="The FactoryJet engineering team that builds and ranks Sioux Falls websites"
                  width={1000}
                  height={688}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <span className="eb">The people behind the rankings</span>
                <h2>Engineers first. <em>Marketers second.</em></h2>
                <p className="body">Where most Sioux Falls agencies are generalists, your rankings are run by senior engineers who build websites scoring 100 out of 100 on Google&apos;s speed tests. That ordering matters: most ranking problems in this market are engineering problems wearing a marketing costume, and an agency that cannot open the code can only write reports about it.</p>
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

        {/* 13b KEEP READING - services + other city SEO pages */}
        <section>
          <div className="wrap">
            <span className="eb">Keep reading</span>
            <h2>The rest of the work, <em>and the rest of the map.</em></h2>
            <p className="lead">If you want the detail behind any part of this page, start here. Every service below is the same team doing the same work, described properly.</p>
            <div className="del" style={{ marginTop: 28 }}>
              {SERVICE_LINKS.map((s) => (
                <div className="dc" key={s.href}>
                  <span className="mm">Service</span>
                  <h3><Link href={s.href} style={LINK_STYLE}>{s.h}</Link></h3>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
            <p className="body" style={{ marginTop: 34 }}><b>Other cities we run this play in.</b> The method travels, the content does not. Every city page we publish is researched separately, because a page about Sioux Falls that would read identically with another city name pasted in has no business ranking for either.</p>
            <div className="del" style={{ marginTop: 16 }}>
              {CITY_LINKS.map((c) => (
                <div className="dc" key={c.href}>
                  <span className="mm">City</span>
                  <h3><Link href={c.href} style={LINK_STYLE}>{c.h}</Link></h3>
                  <p>{c.p}</p>
                </div>
              ))}
            </div>
            <p className="body" style={{ marginTop: 20 }}>Building something rather than ranking something? Our <Link href="/sioux-falls/ecommerce-development" style={LINK_STYLE}>Sioux Falls ecommerce development</Link> page covers the store side, and a <Link href="/services/seo-audit" style={LINK_STYLE}>free SEO audit</Link> is the sensible first step either way.</p>
          </div>
        </section>

        {/* 14 FOUNDER CTA */}
        <section className="founder">
          <div className="wrap">
            <div>
              <span className="eb">FOUNDER ACCESS</span>
              <h2>Open the account. <em>Watch it compound.</em></h2>
              <p className="fp">Book a 30 minute call. We pull up your Sioux Falls rankings, your Map Pack position, and what ChatGPT says about your business, live, while you watch. You keep the findings either way, and the price arrives in writing, never as a surprise. The first deposit costs you nothing but the half hour.</p>
              <p className="fl">Also serving: Brandon · Harrisburg · Tea · explore <Link href="/sioux-falls/ecommerce-development">ecommerce development in Sioux Falls</Link> and our <Link href="/services/seo">US SEO services</Link></p>
            </div>
            <div className="fcard">
              <div className="av" aria-hidden="true">BB</div>
              <p>&quot;Hi, I&apos;m Bhavesh, founder of FactoryJet. I run every discovery call myself, so by minute 10 we already know whether what you need pays for itself, and how fast.&quot;</p>
              <div className="stack">
                <ModalCTAButton label="Get your free Sioux Falls SEO audit" region="us" modalVariant="seo" btnVariant="primary-dark" />
                <a className="btn btn-ghost-dark" href={CALENDLY}>Book a 30 minute call</a>
                <WhatsAppCTA city="Sioux Falls" service="SEO" variant="dark" />
              </div>
            </div>
          </div>
        </section>
        <SeoCityLinksUS currentCity="sioux-falls" />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

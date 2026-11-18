import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-seo-agencies-uk';
const link = 'text-[#B23E13] underline';
const CHECKED = '16 November 2026';

// Every fact about every agency below was read on that agency's own website on
// 16 November 2026 (URLs in `sources`). Clutch figures were read on each agency's
// clutch.co profile the same day. Blue Array's live site refused automated
// requests, so its facts come from the Wayback Machine copy dated 23 April 2026.
// Nothing here is paid placement and the order is not a ranking: agencies are
// grouped by the kind of buyer they suit. The table, the profiles, the Clutch
// table and the ItemList schema all map from this one array.

const SRC = {
  whitehat: 'https://whitehat-seo.co.uk/blog/seo-package-prices',
  statcounter: 'https://gs.statcounter.com/search-engine-market-share/all/united-kingdom',
  ons: 'https://www.ons.gov.uk/businessindustryandtrade/retailindustry/timeseries/j4mc/drsi',
};

type Group = 'enterprise' | 'organic' | 'ecommerce' | 'technical' | 'sme' | 'us';

interface Clutch {
  url: string;
  rating?: string;
  reviews?: number;
  min: string;
  rate: string;
}

interface Agency {
  name: string;
  url: string;
  sources: string[];
  group: Group;
  based: string;
  type: string;
  ai: boolean;
  clients: string;
  what: string;
  proof?: string;
  awards?: string;
  price: string;
  clutch?: Clutch;
  bestFor: string;
  ask: string;
}

const AGENCIES: Agency[] = [
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/uk/seo',
    sources: ['https://factoryjet.com/uk/seo'],
    group: 'us',
    based: 'Works remotely with UK clients and schedules calls in UK business hours',
    type: 'Founder-led SEO consultancy with its own developers; 500+ businesses served since 2014',
    ai: true,
    clients: 'No SEO client is named in this profile; ask us for a reference in your sector',
    what: 'FactoryJet runs SEO with one senior person accountable from audit to results, and the same team writes and builds the pages, so fixes ship as plain HTML that Google and AI crawlers can read without running scripts. That covers technical SEO, local SEO, ecommerce category and product pages, and reporting on rankings, organic traffic, enquiries and where you appear in ChatGPT, Gemini, Perplexity and AI Overviews. Each phase has a fixed price, quoted in writing. Changes are quoted and approved per request, and there is no monthly minimum.',
    proof: 'No SEO result is published in this profile. Across all its work, FactoryJet has served 500+ businesses since 2014, delivers 97% of projects on time and holds a 4.9 average review rating.',
    price: 'No rate card. The price is fixed in writing after a free audit call, which covers twelve checks written up in plain English.',
    bestFor: 'A business that wants the person who writes the SEO plan to also build the pages.',
    ask: 'To see the twelve-check audit of your own site before you agree to anything.',
  },
  {
    name: 'Brainlabs',
    url: 'https://www.brainlabsdigital.com/',
    sources: ['https://www.brainlabsdigital.com/', 'https://www.brainlabsdigital.com/about-us/'],
    group: 'enterprise',
    based: 'London (White Collar Factory, EC1Y), plus New York and Singapore',
    type: 'Large media and search agency; "1,000+ Brainlabbers across 5 continents"',
    ai: true,
    clients: 'Client logos are shown without names, so we cannot list them',
    what: 'Brainlabs was founded in 2012 by Dan Gilbert. Its homepage says "independent and founder-led", while its about page says "management-owned and PE-backed". SEO sits inside a service it calls AI Visibility: "SEO, digital PR, and content strategy to make your brand the most visible in LLMs and search". It also runs paid media and measurement, built on its own Cortex AI platform, which it says has 32 proprietary tools, and Hippocampus, "our repository of 2,500+ logged experiments". It says it works with 250+ brands.',
    awards: 'Named Breakthrough Agency of the Year by Adweek (no year given on its site).',
    price: 'No price printed.',
    clutch: { url: 'https://clutch.co/profile/brainlabs', rating: '5.0', reviews: 1, min: 'Undisclosed', rate: 'Undisclosed' },
    bestFor: 'A large brand that wants SEO judged next to paid media spend, by one agency.',
    ask: 'Who runs the SEO work day to day, and how SEO results are separated from paid results in reporting.',
  },
  {
    name: 'Croud',
    url: 'https://croud.com/en-gb/',
    sources: ['https://croud.com/en-gb/', 'https://croud.com/en-gb/about/our-locations/'],
    group: 'enterprise',
    based: 'London (Curtain Road, EC2A) and Shrewsbury, plus New York, Dubai and Atlanta',
    type: 'Digital media agency with "600+ Digital experts" and an on-demand specialist network',
    ai: true,
    clients: 'IWG, MPB, Thorne, Timberland',
    what: 'Croud was founded in 2011. Its model pairs an in-house team of 600+ with what it calls the Croudie Network: "2,900+ On-demand marketing specialists" across "118 Markets covered". It calls itself independent and says it took investment from private equity firm ECI Partners in 2024. Its client work includes a case titled "Growing AI search visibility" for Thorne.',
    awards: 'Campaign Global Independent Media Agency of the Year 2025 (stated on its site).',
    price: 'No price printed.',
    clutch: { url: 'https://clutch.co/profile/croud', min: '$10,000+', rate: '$150 to $199 an hour' },
    bestFor: 'A brand selling into several countries that wants SEO, paid and data under one roof.',
    ask: 'How many of the people on your account are in-house staff, and how many come from the on-demand network.',
  },
  {
    name: 'Builtvisible',
    url: 'https://builtvisible.com/',
    sources: ['https://builtvisible.com/', 'https://builtvisible.com/case-studies/', 'https://bravebison.com/insights/brave-bison-acquires-leading-independent-seo-content-and-digital-pr-agency/'],
    group: 'organic',
    based: 'London (Stephen Street, W1T)',
    type: '"A specialist SEO, Content and Digital PR agency", now part of Brave Bison',
    ai: false,
    clients: 'GLL, Icelandair, Towergate',
    what: 'Builtvisible does organic work only: SEO, content and digital PR. Its site says "Builtvisible is now part of Brave Bison", the digital group that announced the purchase. Its case studies page names clients and states the returns it claims.',
    proof: '"1,156% ROI for UK\'s largest leisure charitable social enterprise" (GLL), on its case studies page.',
    price: 'No price printed.',
    clutch: { url: 'https://clutch.co/profile/builtvisible', min: 'Undisclosed', rate: '$50 to $99 an hour' },
    bestFor: 'A brand that wants a pure organic specialist with a long record in content and PR.',
    ask: 'What changed for clients after the move into Brave Bison, and whether AI search is part of a standard plan.',
  },
  {
    name: 'Rise at Seven',
    url: 'https://riseatseven.com/',
    sources: ['https://riseatseven.com/', 'https://riseatseven.com/about/'],
    group: 'organic',
    based: 'Manchester and London, plus New York',
    type: 'Search-first creative agency: SEO, digital PR and social search',
    ai: true,
    clients: 'JD Sports, PrettyLittleThing, Revolution Beauty, SIXT, Dojo',
    what: 'Rise at Seven runs onsite SEO, "AI Visibility & GEO", digital PR and social search (getting found on TikTok and YouTube). Its work is built around campaigns that earn press coverage and links, then turn that coverage into rankings.',
    awards: '"79 Global Awards and Counting" (self-stated on its homepage).',
    price: 'No price printed.',
    clutch: { url: 'https://clutch.co/profile/rise-seven', min: '$10,000+', rate: 'Undisclosed' },
    bestFor: 'A consumer brand that wants PR-led campaigns as much as technical SEO.',
    ask: 'How much of the monthly fee goes to campaigns versus onsite SEO, and how links from campaigns are reported.',
  },
  {
    name: 'Impression',
    url: 'https://www.impressiondigital.com/',
    sources: ['https://www.impressiondigital.com/', 'https://www.impressiondigital.com/about/', 'https://www.impressiondigital.com/blog/impression-shortlisted-six-times-at-2025-uk-search-awards/'],
    group: 'organic',
    based: 'Nottingham (King Street), London and Manchester, plus New York',
    type: 'Search and digital PR agency, "120+ strong", Certified B Corporation',
    ai: true,
    clients: 'Wizz Air, Norse Atlantic Airways, Queensmith, Tensar',
    what: 'Impression runs SEO, ecommerce SEO, generative engine optimisation (GEO) and digital PR from four offices, three of them in England. It is one of two B Corp certified agencies on this list. It is also one of the few large agencies headquartered outside London, which can matter if you want in-person meetings in the Midlands.',
    awards: 'Best UK SEO Campaign at the 2026 Global Search Awards; shortlisted six times at the 2025 UK Search Awards (both stated on its site).',
    price: 'No price printed.',
    clutch: { url: 'https://clutch.co/profile/impression', rating: '4.9', reviews: 7, min: '$5,000+', rate: '$150 to $199 an hour' },
    bestFor: 'A mid-size or large brand that wants SEO and PR from a big team outside London.',
    ask: 'Which office would run your account, and who the named lead is.',
  },
  {
    name: 'ROAST',
    url: 'https://weareroast.com/',
    sources: ['https://weareroast.com/', 'https://weareroast.com/about-us/', 'https://weareroast.com/work/camelot/'],
    group: 'organic',
    based: 'London (Frith Street), plus New York and Cape Town',
    type: 'Independent search agency founded in 2015: SEO, content, digital PR and paid media',
    ai: true,
    clients: 'The National Lottery (Camelot), AJ Bell, Experian, PitchBook, WEX',
    what: 'ROAST was founded in 2015 by Ollie Bishop and Charlotte Cosky and calls itself "fiercely independent". Its organic team covers technical SEO, content, digital PR, GEO and app store optimisation, and it runs paid media alongside. Clients lean towards finance, data and large consumer brands.',
    proof: 'For The National Lottery it states "#1 for every team, every launch, eight years running" (no percentage given).',
    awards: 'Independent Agency of the Year (Large) at the UK Agency Awards 2026 (stated on its site).',
    price: 'No price printed.',
    clutch: { url: 'https://clutch.co/profile/roast', rating: '4.9', reviews: 17, min: '$5,000+', rate: '$100 to $149 an hour' },
    bestFor: 'A regulated or data-heavy brand, such as finance, that wants SEO and paid from one independent team.',
    ask: 'Whether SEO and paid are reported together, and what one quarter of SEO-only work would cover.',
  },
  {
    name: 'Re:signal',
    url: 'https://resignal.com/',
    sources: ['https://resignal.com/agency/', 'https://resignal.com/awards/', 'https://resignal.com/contact/', 'https://resignal.com/case-studies/asics/'],
    group: 'ecommerce',
    based: 'London (Eastbourne Terrace) and Manchester, plus Los Angeles; "A remote organic growth agency"',
    type: 'Organic growth agency for ecommerce brands; "30 Remote team members, each with 5+ years experience"',
    ai: true,
    clients: 'ASICS, FatFace, Vivobarefoot, Loop Earplugs, Expedia',
    what: 'Re:signal works mostly with ecommerce brands on technical SEO, digital PR, GEO and retail search (Google Shopping and Amazon). It bought the digital PR agency Root Digital in 2025. Of all the agencies here, it is the one with the clearest published entry price, and that price is high.',
    proof: 'ASICS: "20X increase in organic revenue since start of work" and "438% Delivered ROI to date".',
    awards: 'Best Small SEO Agency at the UK Search Awards in 2017, 2018, 2022, 2023 and 2024; Best Global SEO Campaign: Large at the 2026 Global Search Awards (ASICS).',
    price: 'Printed: "our typical client engagements begin at £10k ($15k) per month."',
    clutch: { url: 'https://clutch.co/profile/resignal', rating: '4.9', reviews: 4, min: '$5,000+', rate: '$150 to $199 an hour' },
    bestFor: 'An established online retailer with a budget of £10,000 a month or more.',
    ask: 'Which senior people from the award-winning campaigns would work on your account.',
  },
  {
    name: 'NOVOS',
    url: 'https://thisisnovos.com/',
    sources: ['https://thisisnovos.com/about-us/', 'https://thisisnovos.com/blog/novos-became-an-employee-owned-company/'],
    group: 'ecommerce',
    based: 'London (Liverpool Street) and Sheffield',
    type: '"eCommerce Specialists": employee-owned, "40+ proud co-owners"',
    ai: true,
    clients: 'Adidas, TALA, Heal\'s, Osprey, Vitabiotics, Ruggable',
    what: 'NOVOS started in 2018 and calls itself an "eCommerce discovery agency". It works on SEO, GEO, paid media, digital PR, Shopify and platform migrations. It became employee-owned in 2022, when its founders "sold 90% of their shares to an \'employee trust\'". It says it has worked with 250+ ecommerce brands.',
    awards: '"40+ award wins and nominations", including National Digital Awards for Best eCommerce Agency and Best Digital PR Agency (year not shown).',
    price: 'No price printed.',
    clutch: { url: 'https://clutch.co/profile/novos', rating: '5.0', reviews: 4, min: '$5,000+', rate: '$150 to $199 an hour' },
    bestFor: 'An online store planning a replatform or migration that wants a specialist to protect its rankings.',
    ask: 'For a migration case study on your platform, with organic revenue before and after.',
  },
  {
    name: 'StudioHawk UK',
    url: 'https://studiohawk.co.uk/',
    sources: ['https://studiohawk.co.uk/about-us', 'https://studiohawk.co.uk/contact/', 'https://studiohawk.co.uk/case-studies/'],
    group: 'ecommerce',
    based: 'London (New Inn Yard, EC2A); the wider group also has offices in Australia and the USA',
    type: 'SEO-only agency; UK arm "founded by Anthony Barone in 2019"',
    ai: true,
    clients: 'RIXO, Damson Madder, REFY Beauty, Touchnote',
    what: 'StudioHawk does SEO and nothing else: technical, local, ecommerce, international and enterprise SEO, migrations, digital PR and AI search. It says it has "a team of 70+ SEO masters", but the page does not say whether that is the UK team or the whole group. Its UK clients lean towards fashion and beauty stores.',
    proof: 'Damson Madder: "558% increase in clicks through to product pages".',
    price: 'No price printed. Contract terms printed: "we don\'t do lock in contracts" and "No long term contracts".',
    clutch: { url: 'https://clutch.co/profile/studiohawk', rating: '4.8', reviews: 6, min: '$1,000+', rate: '$150 to $199 an hour' },
    bestFor: 'A fashion, beauty or lifestyle store that wants an SEO-only team without a long contract.',
    ask: 'How many of the 70+ people are in the UK, and who would run your account.',
  },
  {
    name: 'ClickSlice',
    url: 'https://clickslice.co.uk/',
    sources: ['https://clickslice.co.uk/about/', 'https://clickslice.co.uk/contact/', 'https://clickslice.co.uk/case-studies/'],
    group: 'ecommerce',
    based: 'London (Hoxton, E2)',
    type: 'Boutique SEO agency "founded by Joshua George in 2016"',
    ai: true,
    clients: 'Dino Decking, Plumbworld, Honeypot Furniture, Cut Throat Club',
    what: 'ClickSlice is a small team focused on ecommerce and Shopify SEO, technical SEO, digital PR and AI search (GEO and AEO, including a Reddit-focused service). It is the only agency here that prints both a starting price and its contract terms.',
    proof: 'Dino Decking: "501% increase in organic traffic".',
    price: 'Printed: "Our search marketing services start from £2,500 per month", on "rolling 30-day contracts... you can cancel anytime".',
    clutch: { url: 'https://clutch.co/profile/clickslice', rating: '5.0', reviews: 9, min: '$5,000+', rate: 'Undisclosed' },
    bestFor: 'A small or mid-size online store that wants a founder-led team and a monthly exit.',
    ask: 'Who does the work after the first month: the founder, or someone else on the team.',
  },
  {
    name: 'Screaming Frog',
    url: 'https://www.screamingfrog.co.uk/',
    sources: ['https://www.screamingfrog.co.uk/about/', 'https://www.screamingfrog.co.uk/blog/screaming-frog-2025-search-awards-win/'],
    group: 'technical',
    based: 'Henley-on-Thames (Greys Road)',
    type: 'Search agency "founded in 2010", and the maker of the SEO Spider crawler',
    ai: true,
    clients: 'Good Travel Management (award-winning campaign)',
    what: 'Screaming Frog makes the SEO Spider and Log File Analyser, tools that many other agencies on this list use to audit sites. Its agency side runs technical SEO, link building, AI search work and PPC. If your problem is a large or messy site (crawl waste, duplicate pages, log files nobody reads), few teams know the tooling better.',
    awards: 'Best Low Budget Campaign (SEO) at the UK Search Awards, December 2025, which it says "marks a five-year winning streak at the event".',
    price: 'No agency price printed (its software prices are public).',
    clutch: { url: 'https://clutch.co/profile/screaming-frog', rating: '5.0', reviews: 1, min: '$1,000+', rate: '$50 to $99 an hour' },
    bestFor: 'A large or complex site with technical problems that need crawl and log data to solve.',
    ask: 'For a sample technical audit, and who turns the findings into fixes your developers can ship.',
  },
  {
    name: 'Blue Array',
    url: 'https://www.bluearray.co.uk/',
    sources: ['https://web.archive.org/web/20260423024203/https://www.bluearray.co.uk/'],
    group: 'technical',
    based: 'Reading and London',
    type: 'Organic search agency; "one of 2000 companies in the UK to be B Corp certified"',
    ai: true,
    clients: 'Boden, GoCardless, Iwoca, Monsoon Accessorize, TrueLayer (logos)',
    what: 'Blue Array sells SEO and GEO through what it calls its "consulgency®" approach: consultancy for in-house teams, with the agency doing the work where needed. It has a package called Ignite for startups. Its live site refused our automated checks, so every fact here comes from the archived copy of its homepage dated 23 April 2026.',
    awards: '"Best Large SEO Agency" (year not shown).',
    price: 'No price printed.',
    clutch: { url: 'https://clutch.co/profile/blue-array-seo', rating: '5.0', reviews: 2, min: '$5,000+', rate: '$100 to $149 an hour' },
    bestFor: 'A company with its own marketing team that wants senior SEO advice more than hands-on delivery.',
    ask: 'How the work splits between their consultants and your team, and what Ignite includes.',
  },
  {
    name: 'The SEO Works',
    url: 'https://www.seoworks.co.uk/',
    sources: ['https://www.seoworks.co.uk/about-seoworks/', 'https://www.seoworks.co.uk/case-studies/ai-search-for-dhl/'],
    group: 'sme',
    based: 'Sheffield HQ, Leeds and London (its footer also lists Manchester and Birmingham)',
    type: '"80+ specialists | Established 2009 | Employee owned"',
    ai: true,
    clients: 'Just Eat, NHS, Tata Steel, Denby, Zippo',
    what: 'The SEO Works runs what it calls "Integrated GEO & SEO" plus local SEO, technical SEO and digital PR, and is a Google Premier Partner. It says it is "rated 4.5 out of 5 or higher on Google and Clutch, from over 150 verified reviews". It appeared on five of the lists ranking for this search, more than any other agency.',
    proof: 'DHL: "+287% growth in AI Overview citation and a +121% increase in ChatGPT referrals" (quarter on quarter), plus 62% more organic revenue.',
    awards: 'The DHL campaign won Use of Search, B2C (SEO), Large at the UK Search Awards (its page does not state the year).',
    price: 'No price printed.',
    clutch: { url: 'https://clutch.co/profile/seo-works', rating: '4.8', reviews: 58, min: '$1,000+', rate: '$100 to $149 an hour' },
    bestFor: 'A UK SME or mid-size firm in the North or Midlands that wants an established team and AI search included.',
    ask: 'The minimum contract length, since it is not printed on the pages we read.',
  },
  {
    name: 'Add People',
    url: 'https://www.addpeople.co.uk/',
    sources: ['https://www.addpeople.co.uk/about-us/', 'https://www.addpeople.co.uk/seo/'],
    group: 'sme',
    based: 'Altrincham, Greater Manchester',
    type: '"2,000+ five-star reviews | 250+ experts | 20+ years"; trading since 2002',
    ai: false,
    clients: 'No clients named in the page text we read',
    what: 'Add People is built for small businesses. It sells SEO, local SEO, ecommerce SEO, paid ads and websites, and is a Google Premier Partner. It is the only agency here with a printed price under £100, but that price is for its Smart Sites website product, not SEO.',
    awards: 'Ranked 12th in Prolific North\'s Top 150 Agencies 2026; Investors in People Platinum (both stated on its site).',
    price: 'Printed: "services as low as £89 a month (Smart Sites)". That is a website product; no SEO price is printed.',
    clutch: { url: 'https://clutch.co/profile/add-people', rating: '4.2', reviews: 8, min: '$1,000+', rate: '$50 to $99 an hour' },
    bestFor: 'A local business (a trade, a clinic, a shop) that wants an affordable starting point and one supplier for site and ads.',
    ask: 'What the SEO part of a package costs on its own, and how many hours a month it buys.',
  },
];

const GROUPS: { key: Group; heading: string; intro: string }[] = [
  {
    key: 'us',
    heading: 'Where FactoryJet fits (we wrote this list)',
    intro: 'We wrote this list and list ourselves first. Read our entry with that in mind.',
  },
  {
    key: 'enterprise',
    heading: 'Best SEO agencies in the UK for large, multi-market brands',
    intro: 'These two run SEO as one channel inside large media teams. They suit brands spending heavily on paid media in several countries. A ten-person firm will not get their best people.',
  },
  {
    key: 'organic',
    heading: 'Best UK SEO agencies for digital PR and content-led growth',
    intro: 'These agencies win rankings with content and press coverage as much as with technical fixes. Pick them when your site is sound but nobody links to it or talks about it.',
  },
  {
    key: 'ecommerce',
    heading: 'Best SEO agencies in the UK for online stores',
    intro: 'Store SEO is mostly category pages, product pages, faceted navigation and migrations. These four show ecommerce clients and results on their own sites. Our separate list of the best ecommerce SEO agencies in the UK goes deeper on stores.',
  },
  {
    key: 'technical',
    heading: 'Best UK SEO agencies for technical SEO and in-house teams',
    intro: 'Pick one of these when the problem is the site itself (crawling, indexing, speed, migrations) or when you already have a marketing team and need senior advice.',
  },
  {
    key: 'sme',
    heading: 'Best SEO companies in the UK for small and local businesses',
    intro: 'These two are built around small firms: lower entry points, local SEO and Google Business Profile work, and teams in the North of England.',
  },
];

const ALSO_CHECKED: { name: string; url: string; note: string }[] = [
  {
    name: 'Bird Marketing',
    url: 'https://clutch.co/profile/bird-marketing',
    note: 'On five of the lists that rank for this search, and rated 5.0 from 75 reviews on Clutch (minimum project $5,000+). Its own website refused every automated request we made, so we could not check its services or clients at the source. Not profiled for that reason only.',
  },
  {
    name: 'Embryo',
    url: 'https://embryo.com/',
    note: 'Manchester agency offering GEO, AEO and AI search plus digital PR; client logos include HSS Hire, Homebase, Bella Italia and British Cycling. We found no published result or award on the pages we read. Clutch minimum project $5,000+.',
  },
  {
    name: 'Candidsky',
    url: 'https://candidsky.com/',
    note: 'Manchester agency trading since 2006, shows a Global Search Awards 2024 winner badge without naming the category. We could not confirm its team size, clients or AI search services from its site.',
  },
];

const FAQS: FAQItem[] = [
  {
    q: 'Which SEO agency is the best in the UK?',
    a: 'There is no single best SEO agency in the UK, because the right one depends on your budget and business type. From the 14 we checked on 16 November 2026: Brainlabs or Croud for large brands in many countries, NOVOS, Re:signal, StudioHawk UK or ClickSlice for online stores, Screaming Frog or Blue Array for technical work, and The SEO Works or Add People for small UK businesses.',
  },
  {
    q: 'What are the top SEO agencies in the UK?',
    a: 'The names that turn up most often across the lists ranking on Google UK are The SEO Works and Bird Marketing (five lists each), then ClickSlice, Re:signal, ROAST and StudioHawk (three each). Our own list adds agencies with strong published records, such as Brainlabs, Croud, Builtvisible, Rise at Seven, Impression, NOVOS, Screaming Frog, Blue Array and Add People.',
  },
  {
    q: 'How much does SEO typically cost in the UK?',
    a: 'Whitehat SEO\'s UK pricing guide (page dated 13 April 2026) puts monthly SEO at £500 to £1,200 for local or startup businesses, £1,500 to £3,000 for a growing SME, £2,500 to £5,000 for mid-market B2B and £5,000 to £20,000+ for enterprise. These are market ranges, not any one agency\'s price.',
  },
  {
    q: 'How much does an SEO agency cost?',
    a: 'Only a few UK agencies print a price. On 16 November 2026, ClickSlice said its services "start from £2,500 per month" and Re:signal said engagements "begin at £10k ($15k) per month". On Clutch, minimum project sizes for the agencies we checked ranged from $1,000+ to $10,000+.',
  },
  {
    q: 'How much should SEO cost for a small business?',
    a: 'For a single-location business, Whitehat SEO\'s guide puts the market range at £500 to £1,200 a month, and £1,500 to £3,000 for a growing SME. A one-off audit costs £500 to £7,500 depending on depth in the same guide, and is a sensible first step before signing a retainer.',
  },
  {
    q: 'What is the cheapest SEO?',
    a: 'The cheapest SEO is the work you do yourself: fixing page titles, claiming your Google Business Profile and writing pages that answer customer questions. Paid SEO under about £500 a month usually means automated reports or bulk links, which can do harm. Note that Add People\'s £89 a month price is for a website product, not SEO.',
  },
  {
    q: 'Is paying for SEO worth it?',
    a: 'It is worth it when customers search for what you sell and you can afford six to twelve months before judging results. Google handled 90.59% of UK searches in October 2026 (StatCounter), and online sales were 28.3% of UK retail in September 2026 (ONS). If buyers do not search for your service, spend the money elsewhere.',
  },
  {
    q: 'How do I pick an SEO company?',
    a: 'Decide your segment first (local, ecommerce, B2B, enterprise), then shortlist three agencies that show clients like you. Ask each for one case study with revenue or leads, the name of the person who will run your account, the price in writing and the minimum contract length. Drop any agency that guarantees rankings.',
  },
  {
    q: 'Who is the best SEO expert in London?',
    a: 'If you want the best SEO agency in London specifically, this list has eight with London offices: Brainlabs, Croud, Builtvisible, ROAST, NOVOS, StudioHawk UK, ClickSlice and Re:signal. Location matters less than fit, though. Nine of the 14 agencies we checked have a UK office outside London, in Manchester, Sheffield, Leeds, Nottingham, Shrewsbury, Reading, Altrincham or Henley-on-Thames, and most work with clients across the UK.',
  },
  {
    q: 'Do I need an SEO agency near me?',
    a: 'Only if you want regular face-to-face meetings. For local SEO, what matters is that the agency knows your town\'s search results and keeps your Google Business Profile active, which can be done from anywhere. The SEO Works, Add People, Impression and Rise at Seven all have offices outside London if you prefer someone closer.',
  },
  {
    q: 'Is SEO dead or evolving in 2026?',
    a: 'SEO is changing. Google still handled 90.59% of UK searches in October 2026 (StatCounter), and AI answers in ChatGPT and Google AI Overviews draw on the same well-structured pages that rank. Most agencies on this list now sell AI search work, often called GEO or AEO, alongside classic SEO.',
  },
  {
    q: 'Is AI replacing SEO?',
    a: 'AI is changing where people read answers, but those answers still cite websites. The SEO Works, for example, publishes a DHL case with a 287% rise in AI Overview citations quarter on quarter. Good SEO now means being the page an AI tool quotes, as well as the page Google ranks.',
  },
  {
    q: 'Will SEO exist in 5 years?',
    a: 'Nobody can promise that, but people will still look for suppliers, and some tool, search engine or AI assistant will decide which websites to show them. The work of making your site clear, fast, trusted and easy to quote will matter whatever that tool is called.',
  },
  {
    q: 'Can ChatGPT do SEO?',
    a: 'ChatGPT can draft page titles, suggest topics and explain technical errors, but it cannot see your Google Search Console data, fix your site, earn links or check its own advice. Use it as a helper. Check anything it says about your site against real data before acting on it.',
  },
  {
    q: 'Can I do SEO on my own?',
    a: 'Yes, for a small site. Claim and fill in your Google Business Profile, give every page a clear title and one topic, answer the questions customers ask you, and collect reviews. Bring in an agency when the site is large, you are moving platforms, or you have stopped growing after doing the basics.',
  },
  {
    q: 'Can a beginner do SEO?',
    a: 'A beginner can handle the basics in a few weekends using Google\'s free Search Console and its SEO starter guide. The hard parts are technical problems on large sites and earning links from other websites, which is where most agencies earn their fee.',
  },
  {
    q: 'What are common mistakes when hiring an SEO agency?',
    a: 'Signing a 12-month contract before seeing any work, buying on traffic graphs instead of revenue or leads, not knowing who will actually run your account, and hiring an enterprise agency for a small budget (you get the junior team). Ask for a short paid audit first.',
  },
  {
    q: 'How long does SEO take to work?',
    a: 'Expect technical fixes to show within weeks, new pages to rank over three to six months, and steady revenue gains after six to twelve months. Competitive national terms take longer than local ones. Be wary of anyone promising page-one rankings in 30 days.',
  },
  {
    q: 'Which UK SEO agencies publish their prices?',
    a: 'Few do. Of the 14 we checked, only ClickSlice (from £2,500 a month) and Re:signal (from £10k a month) printed an SEO price. Add People prints £89 a month for a website product. Clutch shows a minimum project size and hourly rate for most of them, in US dollars.',
  },
  {
    q: 'What contract terms should I expect from a UK SEO agency?',
    a: 'Terms vary, and most agencies do not print them. ClickSlice says it works on "rolling 30-day contracts" and StudioHawk UK says "we don\'t do lock in contracts". For everyone else, ask for the minimum term, the notice period and who owns the content and accounts if you leave.',
  },
  {
    q: 'Which is the best ecommerce SEO agency in the UK?',
    a: 'For stores, look at NOVOS (ecommerce specialists, employee-owned), Re:signal (ASICS, FatFace; from £10k a month), StudioHawk UK (RIXO, Damson Madder) and ClickSlice (Dino Decking, Plumbworld; from £2,500 a month). Impression also runs a dedicated ecommerce SEO service.',
  },
  {
    q: 'Which is the best local SEO agency for a small business?',
    a: 'Add People and The SEO Works are the two built most around small UK businesses, and StudioHawk UK lists local SEO as a service. Whoever you pick, check that they will update your Google Business Profile every week and report calls and direction requests as well as rankings.',
  },
  {
    q: 'Which is the best technical SEO agency in the UK?',
    a: 'Screaming Frog, which makes the SEO Spider crawler many agencies use, and won at the UK Search Awards in December 2025 for the fifth year running. Blue Array suits companies that want senior technical advice for an in-house team.',
  },
  {
    q: 'Are "best SEO agency" lists paid for?',
    a: 'Some are. Of the pages ranking for this search on 16 November 2026, only Clutch and SelectedFirms said that some placements are paid, and several agency-written lists put their own firm first without saying why. Look for a stated method and dates. Nobody paid to appear on this list.',
  },
  {
    q: 'Why is FactoryJet on its own list?',
    a: 'We run SEO for UK businesses, so leaving ourselves off would hide a real option. FactoryJet wrote this list and lists itself first, in its own section. That placement is not a ranking, and the other agencies are not ranked either. Our entry uses the same facts as everyone else: where we work, what we do, what we do not publish, and what to ask us.',
  },
];

export const post: BlogPost = {
  id: '230',
  slug: 'best-seo-agencies-uk',
  title: 'Best SEO Agencies in the UK (2026): 14 Checked, Plus FactoryJet',
  excerpt:
    'The best SEO agencies in the UK for large brands, online stores, technical work and small businesses: 14 agencies checked on their own websites and on Clutch on 16 November 2026, with printed prices, contract terms and awards. FactoryJet wrote this list and lists itself first.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Jun 11, 2026',
  dateModified: 'Nov 18, 2026',
  readTime: '28 min read',
  imageUrl: '/blog-images/best-seo-agencies-uk-2026.webp',
  meta: {
    title: 'Best SEO Agencies UK (2026): 14 Checked, Plus Us',
    description:
      '14 UK SEO agencies checked at source on 16 Nov 2026, grouped by buyer type, with Clutch ratings, printed prices, contract terms and awards. Method shown.',
  },
  keyTakeaways: [
    'The best SEO agency in the UK depends on your segment. We grouped 14 agencies by buyer type instead of ranking them: large brands, digital PR, online stores, technical, and small businesses.',
    'Every fact was read on the agency\'s own website and its Clutch profile on 16 November 2026, with the source linked under each profile.',
    'Only two of the 14 print an SEO price: ClickSlice from £2,500 a month and Re:signal from £10k a month. Clutch minimum projects range from $1,000+ to $10,000+.',
    'Market ranges from Whitehat SEO\'s UK guide: £500 to £1,200 a month for local businesses, £1,500 to £3,000 for SMEs, £5,000 to £20,000+ for enterprise.',
    'Only ClickSlice and StudioHawk UK print contract terms (rolling 30 days, no lock-in). Ask everyone else for the minimum term in writing.',
    'Nine of the 14 have a UK office outside London, in Manchester, Sheffield, Leeds, Nottingham, Shrewsbury, Reading, Altrincham or Henley-on-Thames.',
  ],
  faqs: FAQS,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': `${PAGE_URL}#agencies`,
            name: 'Best SEO agencies in the UK, checked 16 November 2026',
            itemListOrder: 'https://schema.org/ItemListUnordered',
            numberOfItems: AGENCIES.length,
            itemListElement: AGENCIES.map((a, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: a.name.replace(' (that is us)', ''),
              url: a.url,
            })),
          }),
        }}
      />

      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg mb-8">
        <p className="font-semibold text-amber-900 mb-1">The short answer</p>
        <p className="text-amber-800 mb-3">
          The best SEO agency in the UK is the one that has done your kind of work and will put the price and terms in writing. For large brands in many countries, look at Brainlabs or Croud. For online stores, NOVOS, Re:signal, StudioHawk UK or ClickSlice. For technical problems, Screaming Frog or Blue Array.
        </p>
        <p className="text-amber-800 mb-3">
          For small and local businesses, The SEO Works or Add People. For growth led by content and press coverage, Builtvisible, Rise at Seven, Impression or ROAST.
        </p>
        <p className="text-amber-800">
          We read every agency&rsquo;s own website and Clutch profile on {CHECKED}. Nobody paid to be listed. FactoryJet wrote this guide and lists itself first; the other agencies are not in ranked order.
        </p>
      </div>

      <p className="mb-4">
        Search still decides who UK buyers find. <strong>Google handled 90.59% of UK searches in October 2026</strong> (<a href={SRC.statcounter} className={link} rel="noopener" target="_blank">StatCounter</a>), and <strong>online sales were 28.3% of all UK retail in September 2026</strong> (<a href={SRC.ons} className={link} rel="noopener" target="_blank">ONS series J4MC</a>). A wrong pick costs months as well as money.
      </p>
      <p className="mb-4">
        On {CHECKED} we pulled the Google UK results for &ldquo;best seo agencies uk&rdquo; and &ldquo;best seo agency uk&rdquo; and read the 12 ranking pages we could open. Two were single agencies&rsquo; own service pages, and one named only its own firm. <strong>None of the blog lists said when each agency was checked, and none explained how its order was chosen.</strong> Only Clutch and SelectedFirms said some placements are paid. Three printed pound price ranges, and none named a source.
      </p>
      <p className="mb-4">
        So this guide starts from each agency&rsquo;s own website. For every firm we noted where it is based, what it sells, clients it names, one result it publishes, any award it claims, any price or contract term it prints, and its Clutch figures. Every fact is dated and linked.
      </p>
      <p className="mb-6">
        <strong>A note on who wrote this.</strong> FactoryJet runs <a href="/uk/seo" className={link}>SEO for UK businesses</a>, so we are on this list, in the first section. Read every list with care, ours included. If you sell to other businesses, our <a href="/blog/best-b2b-seo-agencies-uk-2026" className={link}>best B2B SEO agencies in the UK</a> list goes deeper. For AI search specialists, see our <a href="/blog/best-ai-seo-agencies-uk" className={link}>UK AI SEO and GEO agencies</a> list, and for stores, our <a href="/blog/best-ecommerce-seo-agencies-uk-2026" className={link}>UK ecommerce SEO agencies</a> list.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The best SEO agencies in the UK at a glance</h2>
      <p className="mb-4">
        Scan this first. Find the rows that match your business, then read those profiles in full.
      </p>
      <p className="md:hidden text-sm text-gray-600 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-8 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 820 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th scope="col" className="p-3 text-left border border-gray-700">Agency</th>
              <th scope="col" className="p-3 text-left border border-gray-700">Where based</th>
              <th scope="col" className="p-3 text-left border border-gray-700">AI search named</th>
              <th scope="col" className="p-3 text-left border border-gray-700">Price printed</th>
              <th scope="col" className="p-3 text-left border border-gray-700">Best for</th>
            </tr>
          </thead>
          <tbody>
            {AGENCIES.map((a) => (
              <tr key={a.name} className={a.group === 'us' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                <td className="p-3 border border-gray-200 align-top">{a.based}</td>
                <td className="p-3 border border-gray-200 align-top">{a.ai ? 'Yes' : 'Not on pages read'}</td>
                <td className="p-3 border border-gray-200 align-top">{a.price.startsWith('Printed') ? a.price.replace('Printed: ', '') : 'No'}</td>
                <td className="p-3 border border-gray-200 align-top">{a.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we chose these UK SEO agencies</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start from the search results.</strong> On {CHECKED} we pulled Google UK results and &ldquo;People also ask&rdquo; questions for &ldquo;best seo agencies uk&rdquo;, &ldquo;best seo agency uk&rdquo;, &ldquo;top seo agencies uk&rdquo;, &ldquo;seo agency uk&rdquo;, &ldquo;best seo company uk&rdquo; and six related searches.</li>
        <li><strong>Read the lists that rank.</strong> We counted which agencies each list names. The SEO Works and Bird Marketing appeared on five; ClickSlice, Re:signal, ROAST, StudioHawk and SQ Digital on three.</li>
        <li><strong>Add agencies with a public record.</strong> We kept agencies from our June 2026 list and added firms that appear on several ranking lists or publish award wins and named results.</li>
        <li><strong>Check each agency on its own site.</strong> We read home, about, SEO service, pricing and contact pages for 17 agencies on {CHECKED}. Every profile below links to the pages it came from.</li>
        <li><strong>Check Clutch.</strong> We read each agency&rsquo;s Clutch profile the same day: star rating, number of reviews, minimum project size and hourly rate. Clutch shows these in US dollars.</li>
        <li><strong>Profile only what we could confirm.</strong> If an agency&rsquo;s own site would not load for us, we did not profile it, however often it appears elsewhere. Those firms are listed further down with the reason.</li>
        <li><strong>No scores we cannot prove.</strong> We have not hired these agencies, so there are no star ratings of our own and no ranking. Self-stated claims, such as award counts, are marked as such.</li>
      </ol>

      {GROUPS.map((g) => (
        <div key={g.key}>
          <h2 className="text-2xl font-bold mt-10 mb-4">{g.heading}</h2>
          <p className="mb-6">{g.intro}</p>
          {AGENCIES.filter((a) => a.group === g.key).map((a) => (
            <section key={a.name} className="mb-8">
              <h3 className="text-xl font-bold mt-6 mb-2">{a.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Based:</strong> {a.based}. <strong>Type:</strong> {a.type}.
              </p>
              <p className="mb-3">{a.what}</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li><strong>Best for:</strong> {a.bestFor}</li>
                <li><strong>Clients named on its site:</strong> {a.clients}</li>
                {a.proof ? <li><strong>A result it publishes:</strong> {a.proof}</li> : null}
                {a.awards ? <li><strong>Awards:</strong> {a.awards}</li> : null}
                <li><strong>Price and terms:</strong> {a.price}</li>
                {a.clutch ? (
                  <li>
                    <strong>Clutch:</strong>{' '}
                    {a.clutch.rating ? `${a.clutch.rating} from ${a.clutch.reviews} review${a.clutch.reviews === 1 ? '' : 's'}; ` : 'no rating shown; '}
                    minimum project {a.clutch.min}; hourly rate {a.clutch.rate}.
                  </li>
                ) : null}
                <li><strong>Worth asking them:</strong> {a.ask}</li>
              </ul>
              <p className="text-sm text-gray-600">
                Sources, read {CHECKED}:{' '}
                {[...a.sources, ...(a.clutch ? [a.clutch.url] : [])].map((s, i, arr) => (
                  <React.Fragment key={s}>
                    <a href={s} className={link} rel="noopener" target={s.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                      {s.replace('https://', '').replace('web.archive.org/web/20260423024203/https://', 'archived copy of ')}
                    </a>
                    {i < arr.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </p>
              {a.name === 'Screaming Frog' && (
                <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg my-8 not-prose">
                  <p className="font-semibold text-orange-900 mb-2">Not sure which group you are in?</p>
                  <p className="text-orange-800 mb-3">
                    A free audit call covers twelve checks on your site, written up in plain English, including whether ChatGPT and Google&rsquo;s AI Overviews name you. It tells you what to fix first, whoever you hire to fix it.
                  </p>
                  <a href="/uk/seo-audit" className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors">
                    Get a free UK SEO audit
                  </a>
                </div>
              )}
            </section>
          ))}
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-10 mb-4">Clutch ratings and minimum budgets, side by side</h2>
      <p className="mb-4">
        Clutch is a review site that verifies client reviews and shows each agency&rsquo;s minimum project size and hourly rate. Read on {CHECKED}. Ratings from one or two reviews tell you little, so look at the review count first.
      </p>
      <div className="overflow-x-auto mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 620 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th scope="col" className="p-3 text-left border border-gray-700">Agency</th>
              <th scope="col" className="p-3 text-left border border-gray-700">Rating</th>
              <th scope="col" className="p-3 text-left border border-gray-700">Reviews</th>
              <th scope="col" className="p-3 text-left border border-gray-700">Minimum project</th>
              <th scope="col" className="p-3 text-left border border-gray-700">Hourly rate</th>
            </tr>
          </thead>
          <tbody>
            {AGENCIES.filter((a) => a.clutch).map((a) => (
              <tr key={a.name} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">
                  <a href={a.clutch!.url} className={link} rel="noopener" target="_blank">{a.name}</a>
                </td>
                <td className="p-3 border border-gray-200 align-top">{a.clutch!.rating ?? 'None shown'}</td>
                <td className="p-3 border border-gray-200 align-top">{a.clutch!.reviews ?? 0}</td>
                <td className="p-3 border border-gray-200 align-top">{a.clutch!.min}</td>
                <td className="p-3 border border-gray-200 align-top">{a.clutch!.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Only two agencies have more than ten Clutch reviews: The SEO Works (58) and ROAST (17). Most agencies here collect reviews elsewhere, on Google or on their own sites, so a thin Clutch profile is not a warning sign by itself. A $10,000+ minimum (Croud, Rise at Seven) is a clear signal that a small business is not their target client.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How much does an SEO agency cost in the UK?</h2>
      <p className="mb-4">
        Most agencies do not print prices, so start with market ranges. These come from{' '}
        <a href={SRC.whitehat} className={link} rel="noopener" target="_blank">Whitehat SEO&rsquo;s UK SEO pricing guide</a> (page dated 13 April 2026). They are market estimates, not any one agency&rsquo;s price.
      </p>
      <div className="overflow-x-auto mb-6 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th scope="col" className="p-3 text-left border border-gray-700">Business type</th>
              <th scope="col" className="p-3 text-left border border-gray-700">Monthly market range</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white"><td className="p-3 border border-gray-200 font-semibold">Local or startup</td><td className="p-3 border border-gray-200">£500–£1,200</td></tr>
            <tr className="bg-gray-50"><td className="p-3 border border-gray-200 font-semibold">Growing SME</td><td className="p-3 border border-gray-200">£1,500–£3,000</td></tr>
            <tr className="bg-white"><td className="p-3 border border-gray-200 font-semibold">Mid-market B2B</td><td className="p-3 border border-gray-200">£2,500–£5,000</td></tr>
            <tr className="bg-gray-50"><td className="p-3 border border-gray-200 font-semibold">Enterprise</td><td className="p-3 border border-gray-200">£5,000–£20,000+</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">The same guide makes four further points worth knowing:</p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li>One-off SEO audits cost £500 to £7,500, depending on depth.</li>
        <li>Monthly retainers are the most common model, used by 78% of the market.</li>
        <li>UK SEO prices have risen 15–30% since 2024.</li>
        <li>Answer engine optimisation (AEO, work aimed at AI answers) adds 20–50% to traditional SEO costs in 2026.</li>
      </ol>
      <p className="mb-6">
        Against those ranges, the two printed prices on our list sit at the SME level (ClickSlice, from £2,500 a month) and the enterprise level (Re:signal, from £10k a month). If two quotes look far apart, ask whether AI search is included in both. For a breakdown by business type, see our guide to <a href="/blog/seo-cost-uk-2026" className={link}>SEO cost in the UK</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Contract terms: the question most lists skip</h2>
      <p className="mb-4">
        A low monthly price on a 12-month contract can cost more than a higher price you can cancel. Of the 14 agencies, only two print their terms. ClickSlice works on &ldquo;rolling 30-day contracts&rdquo;, and StudioHawk UK says &ldquo;we don&rsquo;t do lock in contracts&rdquo;. For every other agency, get these five answers in writing before you sign:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Minimum term.</strong> How many months before you can leave.</li>
        <li><strong>Notice period.</strong> How many days&rsquo; notice, and whether you pay for that time.</li>
        <li><strong>Ownership.</strong> Whether you keep the content, reports and any links if you leave.</li>
        <li><strong>Access.</strong> That Google Search Console, Analytics and your Google Business Profile stay in your name.</li>
        <li><strong>Who does the work.</strong> The named person on your account, and how much of their time you get each month.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">Awards, and how to read them</h2>
      <p className="mb-4">
        Award claims are easy to make and hard to check. The official UK Search Awards site did not load for us on {CHECKED}, so every award below is as stated on the agency&rsquo;s own site, with the year where the agency gives one.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Screaming Frog:</strong> Best Low Budget Campaign (SEO), UK Search Awards 2025, its fifth year in a row winning at the event.</li>
        <li><strong>Re:signal:</strong> Best Small SEO Agency at the UK Search Awards in 2017, 2018, 2022, 2023 and 2024.</li>
        <li><strong>Impression:</strong> Best UK SEO Campaign, Global Search Awards 2026.</li>
        <li><strong>ROAST:</strong> Independent Agency of the Year (Large), UK Agency Awards 2026.</li>
        <li><strong>Croud:</strong> Campaign Global Independent Media Agency of the Year 2025.</li>
        <li><strong>The SEO Works:</strong> Use of Search, B2C (SEO), Large, UK Search Awards, for its DHL campaign (year not stated on its page).</li>
      </ul>
      <p className="mb-6">
        Two cautions. Award totals are self-counted: Re:signal&rsquo;s own pages say 91 search awards in one place and 89 in another. And a campaign award shows what a senior team did for one client, which may differ from what your account gets, so ask who worked on the winning campaign.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Seven steps to choose an SEO agency in the UK</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Name your segment.</strong> Local, ecommerce, B2B or multi-market. The groups above are the shortlist for each.</li>
        <li><strong>Check the budget fits.</strong> Compare your budget with the Clutch minimums and the market ranges. An agency whose minimum is twice your budget will not give you its best people.</li>
        <li><strong>Ask for one result like yours.</strong> Revenue or leads from a business of similar size. Traffic graphs alone prove little.</li>
        <li><strong>Get a named lead.</strong> The person who will run your account, and how many hours a month they spend on it.</li>
        <li><strong>Ask about AI search.</strong> Whether ChatGPT and Google AI Overviews are included, and how they are reported. Twelve of the 14 agencies name AI search work on their sites.</li>
        <li><strong>Get price and terms in writing.</strong> Monthly fee, minimum term, notice period and ownership.</li>
        <li><strong>Start small.</strong> A paid audit or a 90-day project shows how an agency thinks before you commit to a year. Our <a href="/uk/seo-audit" className={link}>UK SEO audit</a> page explains what a useful audit covers.</li>
      </ol>
      <p className="mb-6">
        If you are a local business, our page on <a href="/uk/local-seo" className={link}>local SEO in the UK</a> explains what weekly Google Business Profile work looks like. If you run a store, our <a href="/uk/ecommerce-seo" className={link}>ecommerce SEO</a> page covers category, product and migration work, and if a rebuild is part of the plan, see our <a href="/uk/web-design" className={link}>UK web design</a> service.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Other agencies we checked</h2>
      <p className="mb-4">
        These firms came up in the search results or on other lists. We checked them on the same day and kept the notes here, so you can see every firm we looked at.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th scope="col" className="p-3 text-left border border-gray-700">Agency</th>
              <th scope="col" className="p-3 text-left border border-gray-700">What we found on {CHECKED}</th>
            </tr>
          </thead>
          <tbody>
            {ALSO_CHECKED.map((f) => (
              <tr key={f.name} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">
                  <a href={f.url} className={link} rel="noopener" target="_blank">{f.name}</a>
                </td>
                <td className="p-3 border border-gray-200 align-top">{f.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Sources</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1 text-sm">
        <li><a href={SRC.statcounter} className={link} rel="noopener" target="_blank">StatCounter, search engine market share, United Kingdom</a> (October 2026: Google 90.59%).</li>
        <li><a href={SRC.ons} className={link} rel="noopener" target="_blank">ONS, internet sales as a percentage of total retail sales, series J4MC</a> (September 2026: 28.3%, released 23 October 2026).</li>
        <li><a href={SRC.whitehat} className={link} rel="noopener" target="_blank">Whitehat SEO, SEO packages and pricing UK</a> (page dated 13 April 2026).</li>
        <li>Each agency&rsquo;s own website and Clutch profile, linked under its profile above, all read on {CHECKED}.</li>
      </ul>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg my-8">
        <p className="font-semibold text-orange-900 mb-2">
          Want a second opinion on an SEO quote?
        </p>
        <p className="text-orange-800 mb-3">
          Bhavesh runs every first call himself. Send the proposal you have, and you get a plain answer on scope, timeline and whether the price fits the market ranges above.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Book a 30-minute call
        </a>
      </div>
    </>
  ),
};

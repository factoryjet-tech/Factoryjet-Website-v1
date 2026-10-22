import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-b2b-seo-agencies-uk-2026';
const IMG = '/blog-images/best-b2b-seo-agencies-uk-2026';
const link = 'text-[#B23E13] underline';

// Every fact about every firm below was read on that firm's own website on
// 22 October 2026 (URL in `source`). The verbatim quote behind each claim is
// in the research ledger kept outside the repo
// (docs/reports/drafts/best-b2b-seo-agencies-uk-2026/research/ledger.md).
// Nothing here is paid placement and the order is not a ranking: firms are
// grouped by the kind of B2B buyer they suit. The table, the coverage matrix,
// the profiles and the ItemList schema all map from this same array.
type Mark = 'yes' | 'no' | 'separate';
interface Firm {
  name: string;
  url: string;
  source: string;
  group: 'saas' | 'services' | 'industrial' | 'full' | 'links' | 'us';
  based: string;
  type: string;
  sectors: string;
  clients: string;
  what: string;
  proof?: string;
  price: string;
  bestFor: string;
  ask: string;
  // What the firm's own B2B SEO pages name, as read on 22 Oct 2026.
  covers: { bofu: Mark; migrations: Mark; ai: Mark; leads: Mark };
}

const FIRMS: Firm[] = [
  {
    name: 'Gripped',
    url: 'https://gripped.io/',
    source: 'https://gripped.io/b2b-saas-tech-seo-agency/',
    group: 'saas',
    based: 'London (140-148 Borough High Street, SE1)',
    type: 'B2B marketing agency for SaaS, tech and IT companies, with SEO as one of its channels',
    sectors: 'B2B SaaS, AI and tech; mid-market to enterprise',
    clients: 'Crownpeak, Nexstor, and a client it says was acquired by Epicor',
    what: 'Gripped works only with B2B SaaS, tech and IT firms and says it knows how to market products worth £50k or more a year to enterprise buyers. Its SEO page maps keywords from early research searches through to bottom-of-funnel product comparisons, then writes or refines content for each stage. It runs paid search, LinkedIn and account-based marketing alongside SEO, and has a separate page for AI search. It says it turns away more than half of the prospects who contact it and asks clients for at least 90 days before judging a strategy.',
    proof: 'On its own B2B SEO list page, Gripped says customers have seen "growth in traffic by 1567% and a 4300% increase in lead flow" from its SEO work. The page does not name the clients.',
    price: 'Published: "From £3,500/month + project fees" for its advisory or execution model. It adds that "A typical investment is £5K-£15K per month" across core channels and that most marketing leaders spend £8K to £12K a month.',
    bestFor: 'A funded SaaS or tech company that wants SEO run as part of a wider demand generation plan, not on its own.',
    ask: 'How much of a £3,500 month goes to SEO rather than paid media, and which comparison pages it would write first.',
    covers: { bofu: 'yes', migrations: 'no', ai: 'separate', leads: 'yes' },
  },
  {
    name: 'MRS Digital',
    url: 'https://mrs.digital/',
    source: 'https://mrs.digital/seo/saas-seo-agency/',
    group: 'saas',
    based: 'Fleet, Hampshire',
    type: 'Search-led performance marketing agency, started in 1999, with a team of 40+',
    sectors: 'SaaS, healthcare, payroll services, insurance, IT and construction',
    clients: 'Staffology (payroll and HR software); it says it works with over 150 UK businesses',
    what: 'MRS has separate pages for B2B SEO and SaaS SEO. The SaaS page covers technical audits, keyword strategy, content and digital PR, and says it monitors client brands across ChatGPT as well as Google. It has a dedicated site migration service. Its B2B page names SaaS, healthcare, payroll and construction among the markets it has worked in. It says it has no fixed packages and quotes for each job.',
    proof: 'Staffology work won "Best Use of Search B2B (SEO): Large" at the European Search Awards 2024. Staffology’s quote on the page says it climbed from 73rd to 12th for "HR software" and reached position 4 for "payroll software".',
    price: 'No price published. Its about page says there is no "one size fits all" price and it quotes per project.',
    bestFor: 'A B2B software company competing for crowded category terms such as "payroll software" against much larger brands.',
    ask: 'Which keywords it would target first in your category, and how long the Staffology climb from 73rd to 12th took month by month.',
    covers: { bofu: 'no', migrations: 'separate', ai: 'yes', leads: 'no' },
  },
  {
    name: 'Polaris Agency',
    url: 'https://www.polarisagency.com/',
    source: 'https://www.polarisagency.com/seo/b2b-seo/',
    group: 'saas',
    based: 'Chalfont Park, Gerrards Cross, Buckinghamshire',
    type: 'SEO and GEO agency, working since 2009, with B2B, SaaS and fintech practices',
    sectors: 'SaaS and martech, fintech, IT and cloud, consulting, manufacturing and wholesale',
    clients: 'Thomson Reuters, Sodexo, CACI, Sidetrade, Reachdesk, Abacum, Liquidline, Milton Park',
    what: 'Polaris has the deepest B2B case library of any firm here, with named work for Thomson Reuters, Sodexo, CACI and several fintech and SaaS brands. Its B2B page says it puts lead quality over volume, maps real customer use cases and targets competitive gaps, and covers Google AI Overviews and other AI search. It runs migrations as a separate practice and publishes a migration case study for a UK manufacturer. It also publishes its prices, which few B2B firms do.',
    proof: 'Reachdesk: "420% increase in Leads". Johnson Analytica, a UK manufacturer of testing products: organic sessions "increased by 317% month on month" after a rebrand migration to a new domain.',
    price: 'Published: "SME campaigns range from £3,000 - £5,000 per month", "SCA packages range from £6,500 - £10,000 per month" (the tier it describes for established B2B businesses), "ENT packages range from £12,500 - £19,500 per month", and projects "starting from £5,450 + VAT".',
    bestFor: 'An established B2B or SaaS firm with a sales team waiting on leads and a budget of £3,000 a month or more.',
    ask: 'Which of its three tiers your site falls into, and who on that tier writes the content for your sales team’s topics.',
    covers: { bofu: 'no', migrations: 'yes', ai: 'yes', leads: 'yes' },
  },
  {
    name: 'Definition',
    url: 'https://comms.thisisdefinition.com/',
    source: 'https://comms.thisisdefinition.com/services/b2b-seo',
    group: 'services',
    based: 'London (2 Stephen Street, W1) and Leeds (1 Park Row)',
    type: 'B2B PR, content and SEO agency, doing B2B SEO since 2008',
    sectors: 'Technology, SaaS and professional services, plus industrial and third-sector clients',
    clients: 'Automation Consultants, Compleat Software, Access Self Storage',
    what: 'Definition joins SEO to B2B PR, so links and mentions come from press work as well as outreach. Its keyword research includes interviews with your subject matter experts and sales team, which is how B2B content gets the detail buyers look for. Its one-off audit checks over 100 factors, including canonicals, redirect chains, hreflang and JavaScript rendering, and every retained client gets one. It says over 70% of its own leads come through search. It names AI search and GEO as part of the work.',
    proof: 'Compleat Software’s Chief Growth Officer, quoted on the page: the PR-led SEO "resulted in record high keyword rankings and increases in organic traffic and organic leads". The page gives no figures for that result.',
    price: 'Published rate: the monthly fee is "based on a blended agency rate of £140 per hour". Project work is available "for the right budget".',
    bestFor: 'A professional services or tech firm whose experts have plenty to say and want SEO and PR run as one programme.',
    ask: 'How many hours a month your budget buys at £140, and how they split between PR, content and technical work.',
    covers: { bofu: 'no', migrations: 'yes', ai: 'yes', leads: 'yes' },
  },
  {
    name: 'Position Digital',
    url: 'https://www.position.digital/',
    source: 'https://www.position.digital/sectors/professional-services/',
    group: 'services',
    based: 'London (5 Forest Road, E17)',
    type: 'Small SEO and AI search agency, founded in 2019',
    sectors: 'B2B, SaaS, professional services and recruitment',
    clients: 'Oriel Partners, Proven Partners, an accounting firm and a salary benchmarking tool (named on its case study pages)',
    what: 'Position Digital has separate sector pages for B2B and for professional services, and its professional services page pitches SEO as a way off referrals and networking events. Its work is content-led: thought leadership written for each sector, link building and digital PR, technical SEO with its own developers, and AI search optimisation for Google AI Overviews, AI Mode, ChatGPT and Claude. It describes itself as a small team.',
    proof: 'A salary benchmarking tool: "80% Increase in Free Trial Signups". An accounting firm: "69% Higher Monthly Conversions YoY". Oriel Partners, a London recruiter: "17 keywords triggering AI Overviews" after a content refresh.',
    price: 'No price published. Its B2B page says pricing is personalised to goals and budget.',
    bestFor: 'A professional services or recruitment firm that wants content written for its sector by a small senior team.',
    ask: 'Who writes your thought leadership pieces, and how it checks them with your partners before they go live.',
    covers: { bofu: 'no', migrations: 'no', ai: 'yes', leads: 'no' },
  },
  {
    name: 'Whitehat SEO',
    url: 'https://whitehat-seo.co.uk/',
    source: 'https://whitehat-seo.co.uk/digital-services-pricing',
    group: 'services',
    based: 'London',
    type: 'B2B marketing agency and HubSpot Diamond Partner, established 2011',
    sectors: 'UK B2B companies, especially those running HubSpot or WordPress',
    clients: 'No client names on the pages we read; it shows a 5.0 rating from 40 reviews on HubSpot’s partner directory',
    what: 'Whitehat runs SEO, answer engine optimisation and GEO as one programme and tracks what search brings in through HubSpot to closed deals, so you can see revenue by page rather than rankings alone. It also sells fixed-price website audits, and the enterprise audit covers multi-domain and international SEO, migration planning and a quarterly re-audit. Its founder, Clwyd Probert, started the London HubSpot User Group, which it says now has more than 2,000 members. It calls itself deliberately lean, with senior people doing the work.',
    price: 'Published: SEO "starts from £1,967 per month" for retainers and "from £2,967 per month for premium campaigns with content creation included", on "30-day rolling contracts". Website audits are £2,500 (Essential), £4,500 (Comprehensive) and £7,500+ (Enterprise).',
    bestFor: 'A B2B firm on HubSpot that wants SEO tied to deals in its CRM, on a short notice period.',
    ask: 'What the gap between the £1,967 and £2,967 tiers buys in content each month, and how it attributes a closed deal to a page.',
    covers: { bofu: 'no', migrations: 'yes', ai: 'yes', leads: 'yes' },
  },
  {
    name: 'The SEO Works',
    url: 'https://www.seoworks.co.uk/',
    source: 'https://www.seoworks.co.uk/sector/b2b/',
    group: 'industrial',
    based: 'Sheffield (Fountain Precinct, Balm Green), with an office in London',
    type: 'SEO, GEO and PPC agency, founded in 2009, with over 80 specialists',
    sectors: 'Manufacturing, construction, logistics, software, legal, finance and other B2B sectors',
    clients: 'DHL, Office Reality, a Rotherham seating manufacturer and an industrial pump manufacturer (the last two unnamed)',
    what: 'The SEO Works has sector pages for B2B and for manufacturing, and its manufacturing case studies are the strongest of any firm here. Its B2B page says mid-funnel buyers look for comparison pages and service breakdowns and bottom-of-funnel buyers need clear service pages, trust signals and strong calls to action, and it targets the long, question-based searches that big rivals ignore. It runs migrations and GEO, and tracks share of voice in Google AI Overviews. It is the one firm here that also appears on our general and AI SEO lists for the UK.',
    proof: 'A Rotherham cinema and stadium seating manufacturer now holds "60.6% share of voice in AI Overviews" for its priority terms. An industrial pump manufacturer "doubled organic traffic" and won a six figure contract.',
    price: 'No price published.',
    bestFor: 'A UK manufacturer or industrial supplier that wants a large SEO team with proof in its own sector.',
    ask: 'Which searches in your product range already show an AI Overview, and how it measured the 60.6% share of voice.',
    covers: { bofu: 'yes', migrations: 'yes', ai: 'yes', leads: 'no' },
  },
  {
    name: 'JDR Group',
    url: 'https://www.jdrgroup.co.uk/',
    source: 'https://www.jdrgroup.co.uk/seo-services',
    group: 'industrial',
    based: 'Derby (Wyvern Business Park)',
    type: 'Inbound marketing agency and HubSpot partner, in business since 2004 and offering SEO since 2007',
    sectors: 'Manufacturing, construction equipment, technical training, accountancy and other SMEs',
    clients: 'IC2 CCTV and IC2 Distribution, Premier Forrester, a construction equipment manufacturer (unnamed)',
    what: 'JDR started as a business coaching company and sells SEO as one part of a full inbound plan: website, SEO, Google Ads, email and HubSpot CRM. That suits a manufacturer with one marketing person, which is the situation its construction equipment case study describes. It rebuilt that client’s site on HubSpot CMS, moved its CRM data from an old system and set up automated follow-up for inbound leads. It now sells AEO and GEO services too. It says it has more than 100 reviews on Google and HubSpot.',
    proof: 'A construction equipment manufacturer "tripled their website traffic and grown the number of inbound enquiries by over six times".',
    price: 'No SEO price published. Its pricing guide quotes a rule of thumb of 5 to 15% of annual revenue for marketing as a whole.',
    bestFor: 'A small or mid-size manufacturer with a thin marketing team that wants the website, CRM and SEO from one supplier.',
    ask: 'How much of the monthly fee is SEO, and whether you keep full access to your HubSpot site and data if you leave.',
    covers: { bofu: 'no', migrations: 'yes', ai: 'yes', leads: 'yes' },
  },
  {
    name: 'Push Group',
    url: 'https://www.pushgroup.co.uk/',
    source: 'https://www.pushgroup.co.uk/b2b-seo-agency',
    group: 'full',
    based: 'London (199 Bishopsgate, EC2), with offices in New York, Dubai and Athens',
    type: 'Performance marketing and AI agency with a B2B SEO team',
    sectors: 'B2B and SaaS, professional services, manufacturing',
    clients: 'BRITA (Professional Dispensers), Clarks, Hilti, Taghleef Industries',
    what: 'Push ranked first in Google’s results for "b2b seo agency" when we searched, and Google’s AI Overview named it. Its B2B SEO page covers keyword research mapped to the buying cycle, technical audits it says are done by people rather than tools, content, link building, international SEO across 150 countries, and migrations, which it calls a speciality. It builds B2B strategies to show up in AI answers as well as in Google, and it won Best Use of AI in Search at the UK Search Awards 2025. It does not insist on yearly contracts.',
    proof: 'BRITA Professional Dispensers: "#1 in AI Overviews, outranking NHS" and "+230 Top 10 Keywords site-wide" in six months.',
    price: 'No price published. Its FAQ says costs "can range" and it also works on a project basis.',
    bestFor: 'A B2B brand that wants SEO, paid search and AI search run by one large team, including outside the UK.',
    ask: 'Which part of the BRITA work you could expect in your first six months, and who leads the account day to day.',
    covers: { bofu: 'no', migrations: 'yes', ai: 'yes', leads: 'no' },
  },
  {
    name: 'Hallam',
    url: 'https://hallam.agency/',
    source: 'https://hallam.agency/b2b-agency/',
    group: 'full',
    based: 'Nottingham',
    type: 'B2B marketing agency, employee owned since summer 2025 and a certified B Corp',
    sectors: 'Complex B2B markets, including SaaS and commercial property',
    clients: 'Infodesk, Fora',
    what: 'Hallam repositioned as a B2B specialist in October 2025, saying about 80% of its clients were already in complex B2B markets. It won Best B2B Agency at the UK Agency Awards 2026. Its B2B page is about demand generation across channels, with SEO and AI search sold through separate service pages. Google’s AI Overview for "seo agency b2b" named it. The work it chose to describe in its awards post was mostly paid media.',
    proof: 'Infodesk: "3X the marketing qualified leads" between January and April 2026. Hallam says about 70% of that budget went to LinkedIn, so this is not an SEO result.',
    price: 'No price published.',
    bestFor: 'A B2B company that wants one agency to plan demand across LinkedIn, paid search and organic search together.',
    ask: 'For an SEO-only result in your sector, since its featured B2B work is paid-led.',
    covers: { bofu: 'no', migrations: 'no', ai: 'separate', leads: 'yes' },
  },
  {
    name: 'Bulldog Digital Media',
    url: 'https://bulldogdigitalmedia.com/',
    source: 'https://bulldogdigitalmedia.com/b2b-seo-agency/',
    group: 'links',
    based: 'London (29 Queen Elizabeth Street, SE1) and Chelmsford, Essex',
    type: 'Link building and digital PR agency with a B2B SEO service',
    sectors: 'SaaS, manufacturing, technology and services',
    clients: 'No B2B client names on the pages we read',
    what: 'Bulldog is a links business first. It says it has run 400 campaigns over 11 years and built more than 20,000 backlinks and 500 PR placements. Its B2B SEO page is unusually specific about sales pages: it lists pricing and consultation landing pages, better calls to action for demo requests, and SEO tracking joined to HubSpot, Salesforce or Zoho. It prices links per placement rather than as a retainer. Google’s AI Overview named it.',
    proof: 'Its pricing page says the backlinks it built over the past six months averaged a domain rating of 51.',
    price: 'Published: "£200 per backlink", PR "publication placements for £450 a pop", and "£200 per brand mention" when a journalist does not link.',
    bestFor: 'A B2B site whose pages are in good shape but which lacks links from trade and industry publications.',
    ask: 'Which trade publications in your sector it has placed links on, and which of your pages those links would point at.',
    covers: { bofu: 'yes', migrations: 'no', ai: 'no', leads: 'yes' },
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/uk/seo',
    source: 'https://factoryjet.com/uk/seo',
    group: 'us',
    based: 'Works remotely with UK clients and schedules calls in UK business hours',
    type: 'Founder-led SEO consultancy with its own developers; 500+ businesses served since 2014',
    sectors: 'Professional services, B2B wholesale and manufacturing, ecommerce',
    clients: 'B2B wholesaler Bombay Petals, among the businesses named on our UK SEO page',
    what: 'FactoryJet runs SEO with one senior person accountable from audit to results, and the same team writes and builds the pages, so fixes ship in server-rendered HTML that Google and AI crawlers can read. For B2B that means comparison, pricing and use-case pages built for the questions buyers ask, entity and schema work for AI answers, and reporting on rankings, organic traffic, enquiries and where you appear in ChatGPT, Gemini, Perplexity and AI Overviews. Work is sold as a fixed-price milestone project, a monthly retainer or booked advisory sessions.',
    price: 'No rate card. The price is fixed in writing after a free audit call, which covers twelve checks written up in plain English.',
    bestFor: 'A B2B firm that wants the person who writes the SEO plan to also build the pages.',
    ask: 'To see the twelve-check audit of your own site before you agree to anything.',
    covers: { bofu: 'yes', migrations: 'yes', ai: 'yes', leads: 'yes' },
  },
];

const GROUPS: { key: Firm['group']; heading: string; intro: string }[] = [
  {
    key: 'saas',
    heading: 'Which UK B2B SEO agencies suit SaaS and tech companies?',
    intro: 'Software buyers compare products before they ever speak to sales, so SaaS SEO lives on comparison pages, category terms such as "payroll software" and content for each stage of a long evaluation. These three show SaaS work on their own sites.',
  },
  {
    key: 'services',
    heading: 'Which agencies suit professional services and long sales cycles?',
    intro: 'Law, accountancy, consulting and recruitment firms sell expertise, so the content has to sound like their partners wrote it, and a sale can take months. These three write for those firms, and one of them reports search results all the way to closed deals.',
  },
  {
    key: 'industrial',
    heading: 'Which agencies show SEO work for UK manufacturers?',
    intro: 'Manufacturing searches are small in volume but large in value: a few dozen searches a month for a specialist part can lead to a six-figure order. These two publish named manufacturing results on their own sites.',
  },
  {
    key: 'full',
    heading: 'Which agencies run SEO inside a wider B2B marketing team?',
    intro: 'Both of these were named in Google’s AI Overview for "seo agency b2b". Both run paid media and AI search beside SEO, which suits a firm that wants one agency planning every channel.',
  },
  {
    key: 'links',
    heading: 'Which agency should you use if you mainly need links?',
    intro: 'Some B2B sites are technically sound and well written but have few links from trade press. One firm here prices that work per link rather than per month.',
  },
  {
    key: 'us',
    heading: 'Which agency plans the SEO and builds the pages in the same team?',
    intro: 'One entry here, and it is ours, so read it with that in mind. Position Digital and Polaris above also say they can implement technical fixes themselves.',
  },
];

const COVER_COLS: { key: keyof Firm['covers']; label: string }[] = [
  { key: 'bofu', label: 'Comparison, pricing or demo pages' },
  { key: 'migrations', label: 'Migrations' },
  { key: 'ai', label: 'AI search' },
  { key: 'leads', label: 'Leads or pipeline reporting' },
];
const markText = (m: Mark) => (m === 'yes' ? 'Named' : m === 'separate' ? 'Separate page' : 'Not named');

// Firms we read on 22 Oct 2026 but did not profile. Kept so a reader can see
// what was checked, not only what made the cut.
const ALSO_CHECKED: { name: string; url: string; note: string }[] = [
  { name: 'Twogether Digital', url: 'https://twogether-digital.co.uk/our-blog/how-much-do-b2b-seo-services-cost-in-the-uk/', note: 'Publishes three B2B SEO guide prices: "Saying hello: £800 per month", "Catching up: £1,700 per month" and "Dominating: £4,500 per month". Its pricing guide links to its Birmingham SEO page.' },
  { name: 'Ink Digital', url: 'https://ink-digital.co.uk/services/seo/industry/b2b/', note: 'Has B2B, B2B SaaS and manufacturing SEO pages and says it works on "rolling monthly contracts" with "No lock-ins". No price published.' },
  { name: 'Rank Revenue', url: 'https://rankrevenue.co.uk/industry/b2b-seo-agency/', note: 'Founder-led B2B SEO agency with "No Contracts". Its B2B page describes work for an industrial manufacturer of conveyor belts, rollers and geared units. No price published.' },
  { name: 'Reflect Digital', url: 'https://www.reflectdigital.co.uk/seo', note: 'Maidstone, Kent agency covering SEO, PR, paid media and video. Its enquiry form starts at "£10k-£30k per month", which covers all marketing, not SEO alone.' },
  { name: 'Digitaloft', url: 'https://digitaloft.co.uk/insights/b2b-seo/', note: 'Its B2B SEO strategy guide was one of three pages Google’s AI Overview cited for "b2b seo". The pages we read showed SEO and digital PR work but no B2B SEO service page.' },
  { name: 'Giraffe Digital and Geeky Tech', url: 'https://www.geekytech.co.uk/', note: 'Both rank on page one for B2B SEO searches. Giraffe’s page refused our request on 22 October 2026 and Geeky Tech’s B2B page returned "not found", so we could not check them.' },
];

const FAQS: FAQItem[] = [
  {
    q: 'Which is the best B2B SEO agency in the UK?',
    a: 'There is no single best one; match the firm to your sector. For SaaS and tech, Gripped, MRS Digital and Polaris show SaaS work on their own sites. For professional services, Definition, Position Digital and Whitehat SEO. For manufacturers, The SEO Works and JDR Group publish factory results. Push Group and Hallam run SEO inside wider B2B teams, and Bulldog sells links. FactoryJet, which wrote this list, plans the SEO and builds the pages.',
  },
  {
    q: 'What does a B2B SEO agency do?',
    a: 'It gets your business found when other companies search for what you sell, and turns those visits into enquiries your sales team can use. The work covers keyword research tied to the buying process, pages that answer evaluation questions such as comparisons and pricing, technical fixes, links from trade press, visibility in AI answers, and reporting on leads rather than traffic. Good ones interview your sales team first.',
  },
  {
    q: 'How much does B2B SEO cost in the UK?',
    a: 'Most UK B2B SEO costs about £1,500 to £5,000 a month, with SaaS and enterprise work higher. Rudo’s 2026 guide says retainers run from around £1,500 at entry level to £5,000 or more, with enterprise reaching £10,000 to £25,000+. Gorilla Marketing puts professional services at £1,500 to £5,000 and growing SaaS at £3,000 to £8,000. Both were read on 22 October 2026.',
  },
  {
    q: 'Which UK B2B SEO agencies publish their prices?',
    a: 'On 22 October 2026: Polaris (£3,000 to £5,000, £6,500 to £10,000 and £12,500 to £19,500 a month by tier, projects from £5,450 + VAT), Whitehat SEO (from £1,967 a month, premium from £2,967), Gripped (from £3,500 a month plus project fees), Definition (a blended rate of £140 an hour), Twogether Digital (£800, £1,700 and £4,500 packages) and Bulldog (£200 per backlink). The others quote per job.',
  },
  {
    q: 'How is B2B SEO different from B2C SEO?',
    a: 'B2B searches are fewer and worth more. A term searched 50 times a month by procurement managers can matter more than one searched 5,000 times by consumers. Several people sign off a B2B purchase over weeks or months, so you need pages for each of them: technical detail for engineers, pricing and risk for finance, and comparisons for whoever builds the shortlist. Success is measured in qualified leads and pipeline.',
  },
  {
    q: 'How long does B2B SEO take to work?',
    a: 'Expect movement in about three to six months and steady results in six to twelve. Definition gives that range on its B2B SEO page, and Push Group says results can take two to twelve months, with early change in the first two to three. Gripped asks for at least 90 days before a strategy is judged. Long sales cycles add more time between a first visit and a signed contract.',
  },
  {
    q: 'Is it worth paying for SEO as a B2B company?',
    a: 'Usually, if buyers research suppliers online and one new client is worth thousands. Organic leads keep arriving after the work stops, unlike paid clicks, and Google’s AI Overviews now show on about 30% of UK searches, according to Ofcom, so being the cited source matters too. It is not worth it if your market is a few dozen named accounts you already know: account-based sales will reach them faster.',
  },
  {
    q: 'Which agency is best for SaaS SEO in the UK?',
    a: 'Three firms here show SaaS work on their own sites. MRS Digital won a European Search Award in 2024 for Staffology, the payroll software brand. Polaris publishes SaaS cases for Reachdesk and Abacum. Gripped works only with SaaS, tech and IT firms and runs SEO beside paid and account-based marketing. Position Digital also has a SaaS free-trial case study.',
  },
  {
    q: 'Which agencies do SEO for manufacturers and industrial firms?',
    a: 'The SEO Works in Sheffield publishes a 60.6% share of voice in AI Overviews for a Rotherham seating manufacturer and a six-figure contract for a pump manufacturer. JDR Group in Derby tripled traffic for a construction equipment maker. Polaris has a migration case for a UK testing-products manufacturer, and Rank Revenue describes work for a conveyor maker. Ask each for a result in your product category.',
  },
  {
    q: 'What is SEO for law firms and professional services?',
    a: 'It is SEO aimed at the searches clients make before they hire a firm, such as "employment solicitor for small business" or "R&D tax credit accountant". The content has to show real expertise, because Google treats legal and financial advice as high-stakes, and it has to read as if a partner wrote it. Position Digital, Definition and Whitehat SEO have professional services pages; we also cover this in our UK SEO service.',
  },
  {
    q: 'What is a GEO agency?',
    a: 'A GEO agency works on generative engine optimisation: getting your business named and cited in AI answers from ChatGPT, Perplexity, Gemini and Google AI Overviews. In practice that means clear answers on your own pages, structured data, and mentions on sites the AI tools read. Google says there are no extra requirements for AI Overviews beyond normal SEO, so most GEO agencies are SEO agencies with added AI tracking.',
  },
  {
    q: 'Which GEO agency is best for B2B SaaS?',
    a: 'Look for published AI search results in B2B. The SEO Works shows a 60.6% AI Overview share for a manufacturer and a 287% rise in AI Overview citations for DHL. Push Group took BRITA’s B2B division to first in AI Overviews. Position Digital got a recruiter into AI Overviews for 17 keywords. For SaaS specifically, MRS tracks brands across ChatGPT and Gripped has a separate AI search page.',
  },
  {
    q: 'Do B2B buyers use AI to research suppliers?',
    a: 'Many already see AI answers whether they ask for them or not. Ofcom found that about 30% of UK searches show an AI Overview and 53% of adults say they see them often. Agencies we read report it from their own client data: Push Group found only two AI-driven conversions on BRITA’s site before its work, both from ChatGPT. Treat AI answers as a second shop window next to Google results.',
  },
  {
    q: 'Is SEO dead now with AI?',
    a: 'No. Google’s guide to AI features says the same SEO practices apply to AI Overviews and AI Mode, with no extra requirements. AI assistants also read web pages to build answers, so a site that ranks and explains things clearly is more likely to be cited. What changes for B2B is measurement: track AI referrals and assistant mentions in your analytics alongside Google clicks.',
  },
  {
    q: 'Can ChatGPT do SEO for a B2B company?',
    a: 'It can draft a page outline, summarise a call transcript into an FAQ or suggest title tags. It cannot see your Search Console data, interview your engineers, change your site or earn you links from trade press, and it will invent detail when it lacks facts. Use it for drafts, and have someone who knows the product check every claim before it goes on a page buyers will read.',
  },
  {
    q: 'Can I do B2B SEO myself?',
    a: 'A small firm can do a lot in-house: one good page per service, a pricing or "how we work" page, honest comparison pages, case studies with real numbers, and Search Console set up properly. It gets harder with a large site, a migration, or a crowded software category. Many firms buy a one-off audit, such as Definition’s 100-factor audit or Polaris’s projects from £5,450 + VAT, then do the fixes themselves.',
  },
  {
    q: 'Is PPC better than SEO for B2B?',
    a: 'They do different jobs. Paid search buys clicks today, which helps when you need leads this quarter, but B2B clicks are expensive and stop when the budget stops. SEO builds pages that keep bringing enquiries and show up in AI answers. Most firms here, including Gripped, Push Group and Hallam, run both, using paid search data to choose which SEO pages to build first.',
  },
  {
    q: 'What is the rule of 7 in B2B marketing?',
    a: 'It is an old rule of thumb that a buyer needs to come across a brand about seven times before acting. It is not a measured law, so do not plan around the exact number. The useful point for B2B SEO is repeat contact: a buyer who finds your guide, then your comparison page, then sees you cited in an AI answer is far more likely to put you on the shortlist.',
  },
  {
    q: 'What is the 80/20 rule for SEO?',
    a: 'It is the idea that a small share of pages bring most of the results. On a B2B site it often holds: a handful of service, comparison and pricing pages bring most of the enquiries. Check it in Search Console and your CRM, then spend most of the effort on those pages and the searches just below them, rather than writing more blog posts nobody converts from.',
  },
  {
    q: 'Should I sign a 12-month B2B SEO contract?',
    a: 'Not before you have seen the first work. Whitehat SEO works on 30-day rolling contracts, Ink Digital on rolling monthly terms, Rank Revenue with no contracts, and Push Group says it does not require yearly contracts. Gripped asks clients to give a strategy at least 90 days. A fixed term makes sense for a migration with a set plan. Get the notice period in writing.',
  },
  {
    q: 'Do I need a London B2B SEO agency?',
    a: 'No. B2B SEO is national, so the agency’s sector knowledge matters more than its postcode. Several firms here are outside London: The SEO Works in Sheffield, JDR Group in Derby, Hallam in Nottingham, Definition in Leeds as well as London, MRS Digital in Fleet and Polaris in Buckinghamshire. Choose on proof in your sector, then check they can meet your team when you need them to.',
  },
  {
    q: 'Should I hire a B2B SEO consultant or an agency?',
    a: 'A consultant suits a firm with its own writers or developers that needs a senior plan and someone to check the work. An agency suits a firm that needs content, links and technical work done for it every month. Ask either one who will do the work day to day, because a senior name in the pitch does not always mean a senior person on the account.',
  },
  {
    q: 'What should I ask a B2B SEO agency before signing?',
    a: 'Google suggests asking for examples of past work, what results to expect and when, and how changes will be explained; it also says no one can guarantee a first-place ranking. Add four B2B questions. Will you interview our sales team? Which comparison and pricing pages will you build? How will you report leads rather than traffic? What is the notice period? Each profile above ends with one more.',
  },
  {
    q: 'How is this list different from your other UK SEO lists?',
    a: 'Our general UK SEO list covers firms for every kind of business, our AI SEO list covers GEO specialists, and our ecommerce list covers online stores. This one is only about firms that sell to other businesses. Every agency here has a B2B, SaaS, manufacturing or professional services page on its own site. The SEO Works appears on the general and AI lists too; Polaris also appears on the ecommerce list.',
  },
  {
    q: 'Why is FactoryJet on its own list?',
    a: 'Because we do this work, and leaving ourselves out would hide that from you. We put FactoryJet last, labelled it, and used the same profile format as everyone else, with facts taken from our own UK SEO page. All three agency-written lists we read put their own firm first. Read every list on this topic, ours included, knowing who wrote it.',
  },
];

export const post: BlogPost = {
  id: '830',
  slug: 'best-b2b-seo-agencies-uk-2026',
  title: 'Best B2B SEO Agencies in the UK (2026): 11 Checked',
  excerpt:
    'Eleven UK B2B SEO agencies for SaaS, professional services and manufacturers, each checked on its own website on 22 October 2026: where it is based, the sectors it names, what its B2B SEO pages cover, one published result and any price it prints. FactoryJet wrote this list and is on it, last.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 22, 2026',
  readTime: '24 min read',
  imageUrl: `${IMG}.webp`,
  imageAlt:
    'Three colleagues at an oak meeting table review a laptop showing a grid of grey rows and blue blocks, a woman in a burgundy blouse pointing at the screen while a bearded older man holds a sheet and a younger woman in a teal jumper takes notes',
  meta: {
    title: 'Best B2B SEO Agencies UK (2026): 11 Compared',
    description:
      'Eleven UK B2B SEO agencies for SaaS, professional services and manufacturers, checked on their own sites on 22 Oct 2026, with the prices they publish.',
  },
  keyTakeaways: [
    'There is no single best B2B SEO agency in the UK. Match the firm to your sector: SaaS and tech (Gripped, MRS Digital, Polaris), professional services (Definition, Position Digital, Whitehat SEO), manufacturing (The SEO Works, JDR Group), wider B2B marketing teams (Push Group, Hallam), or links (Bulldog Digital Media).',
    'Every fact below was read on each firm’s own website on 22 October 2026. Nobody paid to be here, the order is not a ranking, and FactoryJet, which wrote the list, is last.',
    'We read four lists that rank for this search. All three written by agencies put their own firm first, and between them the four named 32 firms, only 5 of them more than once.',
    'Six of the firms we checked print a price. Polaris publishes £3,000 to £19,500 a month by tier, Whitehat SEO from £1,967, Gripped from £3,500 plus project fees, and Definition a blended £140 an hour. UK guides put most B2B SEO at £1,500 to £5,000 a month.',
    'Only three of the eleven outside firms name comparison, pricing or demo pages on their B2B SEO pages, the pages B2B buyers use to build a shortlist: Gripped, The SEO Works and Bulldog.',
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
            name: 'UK B2B SEO agencies compared (2026)',
            itemListOrder: 'https://schema.org/ItemListUnordered',
            numberOfItems: FIRMS.length,
            itemListElement: FIRMS.map((a, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: a.name,
              url: a.url,
            })),
          }),
        }}
      />

      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg mb-8">
        <p className="font-semibold text-amber-900 mb-1">The short answer</p>
        <p className="text-amber-800 mb-3">
          The best B2B SEO agency in the UK is the one that can show a result in your sector and report it as leads, not traffic. For SaaS and tech, look at Gripped, MRS Digital and Polaris. For law, accountancy, consulting and recruitment, Definition, Position Digital and Whitehat SEO. For manufacturers, The SEO Works and JDR Group. Push Group and Hallam run SEO inside wider B2B marketing teams, and Bulldog Digital Media sells links by the piece.
        </p>
        <p className="text-amber-800">
          We read every firm&rsquo;s own website on 22 October 2026. Nobody paid to be listed, and the order is not a ranking. FactoryJet wrote this guide and is on it, last.
        </p>
      </div>

      <p className="mb-4">
        B2B buyers in the UK increasingly meet an AI answer before they meet a supplier&rsquo;s website. Ofcom found that <strong>about 30% of UK searches now show an AI Overview</strong>, and 53% of adults say they see them often (<a href="https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025" className={link} rel="noopener" target="_blank">Ofcom Online Nation 2025</a>). A B2B SEO agency&rsquo;s job is to put your firm on the shortlist in both places, and then on the call list of your sales team.
      </p>
      <p className="mb-4">
        We searched Google UK for &ldquo;b2b seo agency&rdquo;, &ldquo;seo agency b2b&rdquo;, &ldquo;b2b seo services&rdquo; and 21 related terms on 22 October 2026. Google&rsquo;s AI Overview for &ldquo;seo agency b2b&rdquo; named five firms: Push Group, Polaris, Definition, Hallam and Bulldog Digital Media. Much of the rest of page one was lists of agencies, so we read four of them. <strong>All three lists written by agencies put their own firm in first place.</strong> The fourth, from SEO Giant, calls itself independent and put Web Choice UK first. Between them the four named 32 firms, and only 5 appeared more than once. The same AI Overview gave a price of &ldquo;£1,500 to £5,000+ per month&rdquo; for small and mid-size UK B2B firms without naming a source.
      </p>
      <p className="mb-4">
        So this guide starts from each agency&rsquo;s own website. For every firm we noted where it is based, which B2B sectors it names, what its B2B SEO pages actually cover, one result it publishes, and any price it prints. Every fact is dated and linked.
      </p>
      <p className="mb-4">
        <strong>A note on who wrote this.</strong> FactoryJet runs <a href="/uk/seo" className={link}>SEO for UK businesses</a>, B2B firms included, so we are on this list, in the last group. That is a good reason to read every list, ours included, with care. Our <a href="/blog/best-seo-agencies-uk" className={link}>list of the best SEO agencies in the UK</a> covers every kind of business, our <a href="/blog/best-ai-seo-agencies-uk" className={link}>UK AI SEO and GEO list</a> covers AI search specialists, and our <a href="/blog/best-ecommerce-seo-agencies-uk-2026" className={link}>UK ecommerce SEO list</a> covers online stores. This one is only about firms that sell to other businesses.
      </p>
      <p className="mb-6">
        A few terms first. <strong>B2B SEO</strong> is SEO for companies whose customers are other companies. The <strong>ICP</strong> (ideal customer profile) is the kind of company you most want to sell to. <strong>Bottom-of-funnel pages</strong> are the ones buyers read just before they get in touch: comparisons, pricing, &ldquo;how we work&rdquo; and case studies. <strong>Pipeline</strong> is the value of deals your sales team is working on. <strong>GEO</strong> (generative engine optimisation) is work aimed at being cited in AI answers such as ChatGPT and Google AI Overviews.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The UK B2B SEO agencies at a glance</h2>
      <p className="mb-4">
        Scan this first. Find the rows that match your sector, then read those profiles in full.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              <th className="p-3 text-left border border-gray-700">Where based</th>
              <th className="p-3 text-left border border-gray-700">Type</th>
              <th className="p-3 text-left border border-gray-700">B2B sectors named</th>
              <th className="p-3 text-left border border-gray-700">Best for</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((a) => (
              <tr key={a.name} className={a.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                <td className="p-3 border border-gray-200 align-top">{a.based}</td>
                <td className="p-3 border border-gray-200 align-top">{a.type}</td>
                <td className="p-3 border border-gray-200 align-top">{a.sectors}</td>
                <td className="p-3 border border-gray-200 align-top">{a.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start from the search results.</strong> We pulled Google UK results, AI Overviews and &ldquo;People also ask&rdquo; questions for 24 B2B SEO searches on 22 October 2026, including &ldquo;b2b seo agency uk&rdquo;, &ldquo;saas seo agency uk&rdquo;, &ldquo;industrial seo agency&rdquo;, &ldquo;seo for professional services&rdquo; and &ldquo;b2b seo cost&rdquo;.</li>
        <li><strong>Note who the AI answer names.</strong> Google&rsquo;s AI Overview for &ldquo;seo agency b2b&rdquo; named five firms. All five are profiled below.</li>
        <li><strong>Read the lists that rank.</strong> We counted which agencies each list names and where each publisher put itself.</li>
        <li><strong>Check each agency on its own site.</strong> We read the B2B, SaaS, manufacturing, professional services, pricing, about and contact pages of 20 agencies on 22 October 2026. Every description below comes from those pages and links to them.</li>
        <li><strong>Keep only B2B work.</strong> A firm made the main list if its own site has a B2B, SaaS, manufacturing or professional services SEO page and names B2B clients or results. Firms we checked but did not profile are listed further down, with the reason.</li>
        <li><strong>No scores we cannot prove.</strong> We have not hired these firms, so there are no star ratings or rankings. We say who each one suits and give one question worth asking it.</li>
        <li><strong>Prices only from the firm.</strong> Where a firm prints a price, a rate or a minimum, we copy it exactly and link the page. We never guess another company&rsquo;s price.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">What each agency&rsquo;s B2B SEO pages cover</h2>
      <p className="mb-4">
        Four jobs separate B2B SEO from ordinary SEO: pages for buyers who are comparing suppliers, moving a site without losing rankings, showing up in AI answers, and reporting results as leads or pipeline. This table shows which of the four each firm names on the B2B pages we read. &ldquo;Not named&rdquo; means we did not find it there, not that the firm cannot do it, so ask.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              {COVER_COLS.map((c) => (
                <th key={c.key} className="p-3 text-left border border-gray-700">{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((a) => (
              <tr key={a.name} className={a.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                {COVER_COLS.map((c) => (
                  <td key={c.key} className="p-3 border border-gray-200 align-top">{markText(a.covers[c.key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Eight of the eleven outside firms name AI search on their B2B pages, and two more sell it on a separate page. Seven name leads or pipeline reporting. Only three name comparison, pricing or demo pages, even though those are the pages a buying committee reads last. If a proposal does not mention them, ask why.
      </p>

      {GROUPS.map((g) => (
        <div key={g.key}>
          <h2 className="text-2xl font-bold mt-10 mb-4">{g.heading}</h2>
          <p className="mb-6">{g.intro}</p>
          {FIRMS.filter((a) => a.group === g.key).map((a) => (
            <section key={a.name} className="mb-8">
              <h3 className="text-xl font-bold mt-6 mb-2">{a.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Based:</strong> {a.based}. <strong>Type:</strong> {a.type}.
              </p>
              <p className="mb-3">{a.what}</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li><strong>Best for:</strong> {a.bestFor}</li>
                <li><strong>B2B sectors named:</strong> {a.sectors}</li>
                <li><strong>Clients named on its site:</strong> {a.clients}</li>
                {a.proof ? <li><strong>A result it publishes:</strong> {a.proof}</li> : null}
                <li><strong>Price:</strong> {a.price}</li>
                <li><strong>Worth asking them:</strong> {a.ask}</li>
              </ul>
              <p className="text-sm text-gray-600">
                Source, read 22 October 2026:{' '}
                <a href={a.source} className={link} rel="noopener" target={a.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                  {a.source.replace('https://', '')}
                </a>
              </p>
              {a.name === 'Whitehat SEO' && (
                <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg my-8 not-prose">
                  <p className="font-semibold text-orange-900 mb-2">Not sure which of these fits your firm?</p>
                  <p className="text-orange-800 mb-3">
                    Our free SEO audit runs twelve checks on your site, including whether ChatGPT and Google&rsquo;s AI Overviews name you, and tells you which pages to fix first, whoever you hire to fix them.
                  </p>
                  <a href="/uk/seo" className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors">
                    Get a free UK SEO audit
                  </a>
                </div>
              )}
              {a.name === 'The SEO Works' && (
                <figure className="my-8 not-prose">
                  <img
                    src={`${IMG}-factory.webp`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="On a bright factory floor, a man in glasses and an orange high-visibility vest looks at a tablet while a woman with a grey bob and safety glasses on her head points towards a large grey machine"
                    className="w-full h-auto rounded-xl"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2">Manufacturing searches are small in number. The people making them are often engineers with a part number and a budget.</figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-10 mb-4">Other agencies we checked</h2>
      <p className="mb-4">
        These firms came up in the search results or in other lists. We read their sites on the same day and kept the notes here so you can see what was checked, not only what made the cut.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              <th className="p-3 text-left border border-gray-700">What we found on 22 October 2026</th>
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

      <h2 className="text-2xl font-bold mt-10 mb-4">How much does a B2B SEO agency cost in the UK?</h2>
      <p className="mb-4">
        Usually £1,500 to £5,000 a month, more for SaaS and enterprise. Three UK guides we read on 22 October 2026 agree on the core range. <a href="https://rudo.co.uk/insights/articles/b2b-seo-cost-uk/" className={link} rel="noopener" target="_blank">Rudo</a> says most UK B2B retainers &ldquo;run from around £1,500 a month at the entry level to £5,000 or more for established programmes, with enterprise engagements reaching £10,000–£25,000-plus&rdquo;. <a href="https://blog.gorilla.marketing/how-much-does-seo-cost/" className={link} rel="noopener" target="_blank">Gorilla Marketing</a> puts professional services at &ldquo;£1,500-£5,000/month minimum for meaningful progress&rdquo; and says &ldquo;£3,000-£8,000/month are typical for growing SaaS companies&rdquo;. <a href="https://whitehat-seo.co.uk/digital-services-pricing" className={link} rel="noopener" target="_blank">Whitehat SEO</a> says most UK B2B companies spend £2,000 to £8,000 a month across two or three channels.
      </p>
      <p className="mb-4">Here is what the agencies themselves print, copied exactly:</p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              <th className="p-3 text-left border border-gray-700">What its site says</th>
              <th className="p-3 text-left border border-gray-700">Kind of figure</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://www.polarisagency.com/seo/seo-pricing/" className={link} rel="noopener" target="_blank">Polaris</a></td>
              <td className="p-3 border border-gray-200 align-top">£3,000 - £5,000 per month (SME); £6,500 - £10,000 per month; £12,500 - £19,500 per month (enterprise); projects from £5,450 + VAT</td>
              <td className="p-3 border border-gray-200 align-top">Price bands</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://whitehat-seo.co.uk/digital-services-pricing" className={link} rel="noopener" target="_blank">Whitehat SEO</a></td>
              <td className="p-3 border border-gray-200 align-top">SEO &ldquo;starts from £1,967 per month&rdquo;; premium campaigns with content &ldquo;from £2,967 per month&rdquo;; 30-day rolling contracts</td>
              <td className="p-3 border border-gray-200 align-top">Starting prices</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://gripped.io/pricing/" className={link} rel="noopener" target="_blank">Gripped</a></td>
              <td className="p-3 border border-gray-200 align-top">&ldquo;From £3,500/month + project fees&rdquo;; &ldquo;A typical investment is £5K-£15K per month&rdquo; across channels</td>
              <td className="p-3 border border-gray-200 align-top">Starting price (all channels, not SEO only)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://comms.thisisdefinition.com/services/b2b-seo" className={link} rel="noopener" target="_blank">Definition</a></td>
              <td className="p-3 border border-gray-200 align-top">Monthly fee &ldquo;based on a blended agency rate of £140 per hour&rdquo;</td>
              <td className="p-3 border border-gray-200 align-top">Hourly rate</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://twogether-digital.co.uk/our-blog/how-much-do-b2b-seo-services-cost-in-the-uk/" className={link} rel="noopener" target="_blank">Twogether Digital</a></td>
              <td className="p-3 border border-gray-200 align-top">&ldquo;Saying hello: £800 per month&rdquo;; &ldquo;Catching up: £1,700 per month&rdquo;; &ldquo;Dominating: £4,500 per month&rdquo;</td>
              <td className="p-3 border border-gray-200 align-top">B2B SEO guide prices</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold align-top"><a href="https://bulldogdigitalmedia.com/pricing/" className={link} rel="noopener" target="_blank">Bulldog Digital Media</a></td>
              <td className="p-3 border border-gray-200 align-top">&ldquo;£200 per backlink&rdquo;; PR placements &ldquo;for £450 a pop&rdquo;</td>
              <td className="p-3 border border-gray-200 align-top">Per-link prices</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        The other firms publish no SEO price. Definition&rsquo;s hourly rate makes a useful yardstick: at £140 an hour, a £3,000 month buys about 21 hours of agency time, so ask any agency how many hours, pages and links your fee covers. For the full picture by business type, including audits, day rates and VAT, see our <a href="/blog/seo-cost-uk-2026" className={link}>guide to SEO cost in the UK</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What a B2B SEO engagement should cover</h2>
      <p className="mb-4">
        Use this as a checklist when you compare proposals. The first month should be discovery: who buys from you, which searches they make, and which pages your sales team already sends to prospects.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Content built around the accounts you want</h3>
      <p className="mb-4">
        Account-based SEO starts from your ideal customer profile, not a keyword tool. If your best clients are mid-size logistics firms, the content should answer the questions their operations directors, finance leads and IT teams ask, in their words. Definition interviews clients&rsquo; subject matter experts and sales teams before writing, and Gripped says it will tell you if your ideal customer profile is too broad. Expect fewer, longer pages than a B2C plan, each written for a role in the buying group, with case studies from the same sector.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Comparison and pricing pages</h3>
      <p className="mb-4">
        B2B buyers build a shortlist before they contact anyone, and they search for comparisons (&ldquo;X vs Y&rdquo;, &ldquo;alternatives to X&rdquo;) and for prices. If you do not publish those pages, a competitor or a list site will, and AI answers will quote them instead. A pricing page does not need a rate card: ranges, what changes the price and how a quote works are enough. Gripped, The SEO Works and Bulldog name this work; ask every other agency whether it will build these pages and who signs off the claims.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Technical SEO for large and complex sites</h3>
      <p className="mb-4">
        Most B2B sites are small, but some are not: parts catalogues, documentation hubs, multi-country sites and software help centres. Google&rsquo;s <a href="https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget" className={link} rel="noopener" target="_blank">crawl budget guide</a> (updated 22 July 2026) says crawl budget matters for sites with 1 million+ unique pages that change weekly, or 10,000+ pages that change daily. Below that, the usual problems are duplicate pages, slow templates, content that only appears after JavaScript runs and broken redirects after a rebrand. For a move to a new domain or platform, Google&rsquo;s <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" className={link} rel="noopener" target="_blank">site move guide</a> recommends permanent 301 or 308 redirects and warns against chains of redirects.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">AI Overviews and assistant answers for B2B buying questions</h3>
      <p className="mb-4">
        Buyers now ask assistants questions such as &ldquo;which payroll software suits a 200-person firm?&rdquo; or &ldquo;who supplies auditorium seating in the UK?&rdquo;. Google&rsquo;s <a href="https://developers.google.com/search/docs/appearance/ai-features" className={link} rel="noopener" target="_blank">guide to AI features</a> says there are &ldquo;no additional requirements&rdquo; to appear in AI Overviews or AI Mode beyond normal SEO, so the same pages do the work: clear answers near the top, facts a model can quote, and your name on trade and review sites you do not own. The SEO Works&rsquo; seating manufacturer case is a good model: one well-structured page per buying question, then tracking which answers name you and which name a rival.
      </p>
      <figure className="my-8 not-prose">
        <img
          src={`${IMG}-answers.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="Seen from behind her shoulder, a woman with short copper-red hair and glasses in a green shirt reads a monitor showing a column of grey chat bubbles beside three blue rows, with an orange folder on the desk"
          className="w-full h-auto rounded-xl"
        />
        <figcaption className="text-sm text-gray-600 mt-2">An assistant&rsquo;s shortlist is built from pages it can read and quote. If your comparison page does not exist, a rival&rsquo;s will be quoted instead.</figcaption>
      </figure>

      <h3 className="text-xl font-bold mt-6 mb-3">Reporting in leads and pipeline</h3>
      <p className="mb-4">
        Rankings and traffic are early signs, not results. Ask for reporting that follows an organic visit to a form fill, then to a sales conversation, then to a deal, which usually means joining your analytics to your CRM. Whitehat SEO tracks this through HubSpot, Bulldog names HubSpot, Salesforce and Zoho, and Definition reports inbound leads and cost per acquisition. With a sales cycle of six months, the first closed deal from SEO may arrive well after the first ranking.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to choose a B2B SEO agency in the UK</h2>
      <p className="mb-4">
        Start with sector proof: one published result for a firm like yours, reported as leads or revenue, not only rankings. Then check fit. Google&rsquo;s own advice on <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" className={link} rel="noopener" target="_blank">hiring an SEO</a> (updated 5 June 2026) is to ask for examples of past work and how results will be explained, and it says plainly that &ldquo;No one can guarantee a #1 ranking on Google.&rdquo;
      </p>
      <p className="mb-4">
        Add four B2B questions. Will you interview our sales team before writing anything? Which comparison and pricing pages will you build in the first three months? How will you report leads and pipeline as well as traffic? What is the notice period? The first answer tells you most: an agency that writes B2B content without talking to the people who sell will produce pages your buyers skim and leave.
      </p>
      <p className="mb-6">
        If you sell to trade buyers online as well, our <a href="/uk/b2b-ecommerce" className={link}>UK B2B ecommerce service</a> covers trade portals and wholesale ordering, and our <a href="/uk/ai-seo" className={link}>UK AI SEO service</a> covers getting named in AI answers.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Sources</h2>
      <p className="mb-4">
        All read on 22 October 2026: each agency&rsquo;s own pages, linked in its profile and in the tables above; <a href="https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025" className={link} rel="noopener" target="_blank">Ofcom Online Nation 2025</a>; Google Search Central on <a href="https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget" className={link} rel="noopener" target="_blank">crawl budget</a>, <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" className={link} rel="noopener" target="_blank">site moves</a>, <a href="https://developers.google.com/search/docs/appearance/ai-features" className={link} rel="noopener" target="_blank">AI features</a> and <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" className={link} rel="noopener" target="_blank">hiring an SEO</a>; and the B2B price guides from <a href="https://rudo.co.uk/insights/articles/b2b-seo-cost-uk/" className={link} rel="noopener" target="_blank">Rudo</a>, <a href="https://blog.gorilla.marketing/how-much-does-seo-cost/" className={link} rel="noopener" target="_blank">Gorilla Marketing</a>, <a href="https://twogether-digital.co.uk/our-blog/how-much-do-b2b-seo-services-cost-in-the-uk/" className={link} rel="noopener" target="_blank">Twogether Digital</a> and <a href="https://whitehat-seo.co.uk/digital-services-pricing" className={link} rel="noopener" target="_blank">Whitehat SEO</a>. The lists we tallied were published by <a href="https://www.polarisagency.com/marketing-insights/b2b-seo-finding-the-right-seo-agency/" className={link} rel="noopener" target="_blank">Polaris</a>, <a href="https://gripped.io/b2b-seo/b2b-seo-agency/" className={link} rel="noopener" target="_blank">Gripped</a> (last updated 15 May 2025), <a href="https://bulldogdigitalmedia.com/best-b2b-seo-agencies/" className={link} rel="noopener" target="_blank">Bulldog Digital Media</a> (updated 16 February 2026) and <a href="https://seo-giant.co.uk/the-best-b2b-seo-agencies-in-the-uk-2026-guide/" className={link} rel="noopener" target="_blank">SEO Giant</a>.
      </p>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg my-8">
        <p className="font-semibold text-orange-900 mb-2">Want a second opinion on your shortlist?</p>
        <p className="text-orange-800 mb-3">
          Send us your site and the proposals you have. We will check where you rank and where AI answers name you, tell you which pages your buyers are missing, and fix the price in writing before any work starts.
        </p>
        <a href="/uk/seo" className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors">
          See our UK SEO service
        </a>
      </div>
    </>
  ),
};

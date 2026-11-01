import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-seo-agencies-australia-2026';
const IMG = '/blog-images/best-seo-agencies-australia-2026';

// HOW THIS LIST WAS BUILT (22 October 2026)
// 1. On 9 Oct 2026 we put one buyer question, "Which SEO agencies in Australia are best for small
//    businesses?", to eight AI surfaces (ChatGPT API and app, Claude, Gemini API and app, Perplexity,
//    Google AI Mode, Google AI Overviews): 14 answers in all. Raw answers:
//    pipeline/research/data/ai-buyer-sweep-2026-10-09-buyers-au/calls.json, id MS1.
// 2. A firm counts when an answer names it as an agency to consider. Firms that appear only as the
//    publisher of a cited list (Local Digital, Shuffle Digital) are not counted for that answer.
// 3. Eight firms were named in three or more answers. Seven are profiled. Online Marketing Gurus
//    (three answers) blocked both our fetch and our browser on 22 Oct, so we could not read its site.
// 4. Three firms named in two answers are profiled because each publishes a price or a minimum
//    (Digital Marketing Tribe, Red Search, Webomaze). Four more named in two answers get a short entry.
// 5. Every fact in FIRMS and ALSO_CHECKED was read on the firm's own site on 22 Oct 2026.
//    No scores, no star ratings, no ranking. The order groups firms by size and is NOT a ranking.
// 6. Prices are each firm's own published figures, copied exactly. They are NOT FactoryJet prices.
//    FactoryJet's own prices are never published (house rule, 30 Sep 2026).
// Do not edit a fact here without re-opening the source page first.
interface Firm {
  name: string;
  url: string;
  source: string;
  more?: string;
  based: string;
  type: string;
  terms: string;
  what: string;
  bestFor: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'StudioHawk',
    url: 'https://studiohawk.com.au/',
    source: 'https://studiohawk.com.au/about/',
    more: 'https://studiohawk.com.au/seo-services/small-business-seo/',
    based: '39/41 Mount Street, Prahran, Melbourne and South Eveleigh, Sydney',
    type: 'Large specialist SEO and AI search agency',
    terms: 'No lock-in contracts; prices given after a call',
    what: 'Harry Sanders founded it in 2015. Its about page says it has a team of 120+ SEO specialists and has helped over 500 clients, and that it is a Google Partner. The small business SEO page covers local SEO, local link building and search intent, and says the firm does not start fees high or lock small businesses into long-term contracts. The first step is a free SEO and AI audit, and the page says some small sites are given advice to fix first instead.',
    bestFor: 'Growing businesses that want a large SEO-only team and can grow the budget over time.',
    ask: 'Who on the team runs your account each month, and what the first three months include for a small budget.',
  },
  {
    name: 'Supple Digital',
    url: 'https://supple.com.au/',
    source: 'https://supple.com.au/about/',
    more: 'https://supple.com.au/local-seo/',
    based: '5/84 Church Street, Richmond, Melbourne, with offices in Haymarket, Sydney and on St Georges Terrace, Perth',
    type: 'Full-service digital agency with a large SEO team',
    terms: 'No price list; a first-month-free offer was showing on 22 Oct',
    what: 'Its about page says it grew from a two-person company to a full agency in about ten years, serves over 2,000 clients and is a certified Google Partner. Its local SEO page sets out five steps: market research, an audit, a strategy ranked on an impact and effort matrix, implementation by its SEO team, designers and developers, then reporting. It also has separate pages for AI SEO, ecommerce platforms and trades such as plumbers and lawyers.',
    bestFor: 'Businesses that want SEO, web changes and paid ads from one large agency with offices in three cities.',
    ask: 'What the first-month offer covers, and what the notice period is after it ends.',
  },
  {
    name: 'Gorilla 360',
    url: 'https://gorilla360.com.au/',
    source: 'https://gorilla360.com.au/about-us/',
    based: '15 Darling Street, Carrington (Newcastle), with offices in Surry Hills, Melbourne and Brisbane',
    type: 'Digital marketing agency with an ecommerce focus',
    terms: 'No price list; its enquiry form starts at an “Under $1,000” monthly budget',
    what: 'Two friends founded it in 2010, and its about page says it is now a team of 25+ specialists. Its SEO page describes a written roadmap that says which tasks you do and which it does, real-time reporting, and structured data work for ecommerce sites. Its homepage says its Google Ads team holds Google Premier Partner status. It publishes an ecommerce marketing calendar for 2026.',
    bestFor: 'Online stores and growing businesses that want SEO and Google Ads planned together.',
    ask: 'Which tasks on the roadmap are yours, and how many hours a month they expect from your team.',
  },
  {
    name: 'SIXGUN',
    url: 'https://sixgun.com.au/',
    source: 'https://sixgun.com.au/about/',
    based: 'Unit 7/1 Bromham Place, Richmond, Melbourne',
    type: 'SEO and digital marketing agency',
    terms: 'No price list; its enquiry form starts at a A$1,000 to A$2,000 monthly budget',
    what: 'David Pagotto founded it in 2017. Its SEO page says each client gets an in-house team with a dedicated account manager, SEO specialists and content writers, and that it serves all of Victoria, including Geelong, Bendigo and Ballarat. It has separate pages for local SEO, AI SEO and trades such as electricians and dentists. Its own cost guide says Australian SEO retainers typically run from A$1,000 to A$10,000 a month.',
    bestFor: 'Victorian businesses that want a Melbourne team with local client work they can check.',
    ask: 'Which of the in-house team writes your content, and how often you meet them.',
  },
  {
    name: 'Safari Digital',
    url: 'https://www.safaridigital.com.au/',
    source: 'https://www.safaridigital.com.au/pricing/',
    based: 'Level 2/11 York Street, Sydney',
    type: 'SEO-only agency',
    terms: 'Month-to-month billing on every account; no published price list',
    what: 'Liam Ridings founded it in 2018. It sells SEO only, with no ads or design work, and says there are no account managers: you deal directly with an SEO specialist. Its pricing page explains why it has no price list, says it is not a “$499 P/M” provider, and lists monthly reporting, 24/7 keyword tracking and calls every two weeks. It says it writes content in-house and does not rely on AI tools to write it. It has a small business SEO page and pages for trades.',
    bestFor: 'Small and mid-size businesses that want to talk to the specialist doing the work.',
    ask: 'The monthly figure in writing, and what changes if you pause the campaign.',
  },
  {
    name: 'Digital Nomads HQ',
    url: 'https://digitalnomadshq.com.au/',
    source: 'https://digitalnomadshq.com.au/seo-packages/',
    more: 'https://digitalnomadshq.com.au/case-studies/air-charter-network/',
    based: '208/45 Brisbane Road, Mooloolaba, on the Sunshine Coast, Queensland',
    type: 'Full-service digital marketing agency',
    terms: 'No lock-in contracts; package names are published, prices were not shown on 22 Oct',
    what: 'Jodi and Chris founded it, and it now works for clients from Brisbane to Perth. Its packages page lists four SEO packages (Core, Plus, Pro and Premium) and two local SEO packages, each with what is included, from link building targets to Google Business Profile posting and citations. It says all work is done in-house with no outsourcing. It publishes case studies, including one for Air Charter Network that reports 92 unique pages cited in AI answers after a nine-month SEO campaign.',
    bestFor: 'Queensland businesses that want a fixed package list they can compare line by line.',
    ask: 'The monthly price of the package you are offered, and which link building level it includes.',
  },
  {
    name: 'Bloom Digital',
    url: 'https://www.bloomdigital.net.au/',
    source: 'https://www.bloomdigital.net.au/seo-perth/',
    based: 'Level 2, 16/210 Bagot Road, Subiaco, Perth',
    type: 'Web design, SEO and marketing agency',
    terms: 'No price list',
    what: 'Its SEO page says it won Best Small SEO Agency at the 2025 and 2026 APAC Search Awards. It says all its work is done in-house and that SEO runs through its website builds too. The page covers technical SEO, structured data so AI tools can read the site, Google Business Profile work for local businesses, monthly reports and optional monthly meetings.',
    bestFor: 'Western Australian businesses that want the website and the SEO from one in-house team.',
    ask: 'Whether a site rebuild is part of the plan, and what the SEO work costs without one.',
  },
  {
    name: 'Digital Marketing Tribe',
    url: 'https://digitalmarketingtribe.com.au/',
    source: 'https://digitalmarketingtribe.com.au/services/small-business-seo/',
    based: 'Offices in Sydney, Hunters Hill and O’Connell Street, North Adelaide',
    type: 'SEO, Google Ads and web agency for small businesses',
    terms: 'From A$1,200 a month plus GST; month-to-month with 30 days’ notice',
    what: 'In business since 2017 and a certified Google Partner. Its small business page sets the entry point: the Starter Local SEO retainer covers one suburb or service area, Google Business Profile work, up to 10 keywords, on-page work (edits to the pages themselves) on up to 5 pages, citations and a monthly rank-grid report. It says it reports on calls and enquiries rather than rankings, and adds schema (hidden code that states your business details in a form machines read) so AI Overviews and ChatGPT can read them.',
    bestFor: 'Owner-run businesses in Sydney or Adelaide that want a published starting price.',
    ask: 'What moves you from the Starter retainer to the full one, and at what price.',
  },
  {
    name: 'Red Search',
    url: 'https://www.redsearch.com.au/',
    source: 'https://www.redsearch.com.au/',
    based: 'Level 1, 5 George Street, North Strathfield, Sydney',
    type: 'Senior-led SEO and AI search agency',
    terms: 'Says SEO typically starts at A$2,000 a month; no locked-in long-term contracts',
    what: 'Its homepage says it uses senior SEO specialists only, no juniors, and has done local SEO in Sydney since 2018. It lists custom SEO and GEO (generative engine optimisation, or getting named in AI answers) strategy, national SEO, link building, technical audits and local SEO. Its FAQ says SEO engagements typically start at A$2,000 a month, and that competitive industries or national campaigns can start between A$5,000 and A$10,000+ a month.',
    bestFor: 'Sydney businesses in competitive markets that want senior people on the account.',
    ask: 'Which senior specialist works on your site, and how many hours a month the fee buys.',
  },
  {
    name: 'Webomaze',
    url: 'https://www.webomaze.com.au/',
    source: 'https://www.webomaze.com.au/seo-services/small-businesses/',
    based: 'Level 2/1 Southbank Boulevard, Southbank, Melbourne',
    type: 'SEO agency for small and mid-size businesses',
    terms: 'Minimum engagement from A$700 a month; monthly subscription, no lock-in',
    what: 'Its small business page says its minimum engagement starts from A$700 a month and varies with the type of site, keyword competition and scope. The listed work includes keyword and competitor research, on-page optimisation, a Google Business Profile listing, a real-time reporting dashboard and weekly reports. It also has location pages for cities in every mainland state.',
    bestFor: 'Small businesses with a tight budget that want a low entry point and no lock-in.',
    ask: 'What the A$700 level includes for your site, and whether it is quoted with or without GST.',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/au/seo',
    source: 'https://factoryjet.com/au/seo',
    based: 'We work remotely with Australian clients and schedule calls in Australian business hours',
    type: 'SEO done by the team that builds and fixes websites and online stores',
    terms: 'Fixed written quote after a free first call; we do not publish prices',
    what: 'We start by measuring: where you rank today, what your Google Business Profile is missing, which questions your buyers ask in Google and AI tools, and what the sites above you do. Then our engineers change the site itself, because we build websites and online stores, and we report each month on enquiries as well as rankings. We have served 500+ businesses since 2014.',
    bestFor: 'Businesses whose SEO problems sit in the website, such as slow pages or an old platform.',
    ask: 'What we would change on your site first, and what we would leave alone.',
  },
];

// Named in two of the 14 answers; same fetch date and rules as FIRMS.
const ALSO_CHECKED: { name: string; source: string; line: string }[] = [
  { name: 'Boylen', source: 'https://www.boylen.com.au/', line: 'Adelaide. Web design, SEO and graphic design, from a business that says it has worked with brands for over 30 years and began as a print and digital publisher.' },
  { name: 'Bambrick', source: 'https://bambrick.com.au/', line: 'Brisbane. A team of about 30 working on SEO, Google Ads, social and conversion work, with separate AI SEO, local SEO and SEO audit pages.' },
  { name: 'Zib Digital', source: 'https://zibdigital.com.au/', line: 'Level 7/34 Eastern Road, South Melbourne. A Google Partner working in digital since 2009, which now describes a model of specialists working with AI tools for audits and reporting.' },
  { name: 'Melbourne Web Digital', source: 'https://melbournewebdigital.com.au/', line: 'Ground floor, 470 St Kilda Road, Melbourne. SEO next to web design, ads and social, with separate small business SEO, local SEO and Google Business Profile pages.' },
];

// Published prices and minimums, copied exactly from each firm's own page on 22 Oct 2026.
// These are the firms' own figures, not FactoryJet prices.
const PRICES: { firm: string; figure: string; gst: string; source: string }[] = [
  { firm: 'Webomaze', figure: 'Minimum engagement from A$700 a month', gst: 'Not stated; monthly subscription, no lock-in', source: 'https://www.webomaze.com.au/seo-services/small-businesses/' },
  { firm: 'Digital Marketing Tribe', figure: 'Starter Local SEO retainer A$1,200 a month (one suburb or service area); Google Ads management from A$1,000 a month', gst: 'Plus GST; month-to-month, 30 days’ notice', source: 'https://digitalmarketingtribe.com.au/services/small-business-seo/' },
  { firm: 'Red Search', figure: 'SEO typically starts at A$2,000 a month; A$5,000 to A$10,000+ for competitive industries or national campaigns', gst: 'Not stated; no locked-in long-term contracts', source: 'https://www.redsearch.com.au/' },
];

// Questions come from Google Australia People Also Ask (DataForSEO, location 2036, 28 results pages
// on 22 Oct 2026, US$0.062). The FAQPage schema is built from this same array.
const FAQS: FAQItem[] = [
  {
    q: 'Which SEO company is the best in Australia?',
    a: 'No single firm is best for everyone. For a large team, StudioHawk, Supple Digital and Gorilla 360 run national agencies with offices in several cities. For an SEO-only specialist, Safari Digital and Red Search in Sydney. For small budgets, Webomaze and Digital Marketing Tribe publish their entry prices. Match the firm to your size and state, then ask each one for a sample monthly report.',
  },
  {
    q: 'What are the top 10 SEO companies in Australia?',
    a: 'Our shortlist table lists the ten firms AI tools named most often for small businesses, each checked on its own site on 22 October 2026. Online Marketing Gurus was also named often, but its site blocked our check. The order is not a ranking.',
  },
  {
    q: 'Which SEO agency is best for a small business in Australia?',
    a: 'Pick one that publishes a starting price, lets you leave month to month and reports on calls and enquiries. On 22 October 2026, Digital Marketing Tribe listed a A$1,200 a month starter plus GST, Webomaze a A$700 minimum, and Safari Digital offered month-to-month billing on every account. In Perth, Bloom Digital won Best Small SEO Agency at the 2025 and 2026 APAC Search Awards.',
  },
  {
    q: 'How much does SEO cost in Australia for a small business?',
    a: 'SIXGUN’s cost guide puts most monthly retainers between A$1,000 and A$10,000, hourly rates between A$100 and A$300, and one-off projects between A$2,000 and A$30,000. The three firms on this list that publish an entry price started at A$700 a month (Webomaze), A$1,200 plus GST (Digital Marketing Tribe) and about A$2,000 (Red Search) on 22 October 2026. Below that, ask what work happens each month. Our SEO cost guide for Australia has more sourced ranges.',
  },
  {
    q: 'How much does local SEO cost for a small business?',
    a: 'Local SEO often sits at the bottom of an agency’s price list. Digital Marketing Tribe’s Starter Local SEO retainer was A$1,200 a month plus GST on 22 October 2026, for one suburb or service area, Google Business Profile work, up to 10 keywords and 5 pages. Digital Nomads HQ lists two local SEO packages but did not show prices on its page that day.',
  },
  {
    q: 'What are the typical SEO packages available in Australia?',
    a: 'Package names and tiers differ by firm. Digital Nomads HQ names four SEO packages (Core, Plus, Pro and Premium) plus two local SEO packages, each with its own link building target. Digital Marketing Tribe starts with a Starter Local SEO retainer for one suburb or service area. Ask any agency for its package list in writing, with the hours, pages and links each tier includes.',
  },
  {
    q: 'Why is SEO so expensive?',
    a: 'Because it is skilled labour that runs every month. A real campaign pays for research, technical fixes, writing, outreach for links and reporting, and the results build over months. Cheap plans usually cut the hours that move rankings. Safari Digital’s pricing page warns about “$499 P/M” offers for this reason. Ask any agency how many hours your monthly fee buys.',
  },
  {
    q: 'How much does Google charge for SEO?',
    a: 'Nothing. Google does not sell organic rankings. Its own Business Profile help page says there is no way to request or pay for a better local ranking. What you pay for is the work to improve your site and profile, done by your team or an agency. Google Ads is the paid product, and it is separate from SEO.',
  },
  {
    q: 'Is it worth hiring an SEO agency?',
    a: 'It is worth it when customers search for what you sell, your competitors show up and you do not, and you lack the time or skills to fix that. It is not worth it if you could not handle more enquiries, or your website itself needs replacing first. Start with an audit or a three-month plan with no lock-in, and judge it on enquiries.',
  },
  {
    q: 'Is doing local SEO worth it?',
    a: 'For a business that serves a suburb, a city or a region, usually yes. Google shows a map with local businesses above the normal results on many searches. On 21 October 2026, Google Australia showed that map pack for “seo agencies australia” itself. A complete Google Business Profile, steady reviews and clear service pages are often the cheapest wins in SEO.',
  },
  {
    q: 'How do I pick an SEO agency?',
    a: 'Search your main service in Google and in ChatGPT and note who appears. Then compare two or three agencies on five things: a sample report, who does the work, how many hours or pages the fee buys, the GST position and the notice period. Ask for local clients you can check. Start with an audit or a short trial before any long contract.',
  },
  {
    q: 'Do Australian SEO agencies lock you into contracts?',
    a: 'Many no longer do. On their own sites on 22 October 2026, StudioHawk, Safari Digital, Digital Nomads HQ, Digital Marketing Tribe, Red Search and Webomaze all said they offer no lock-in or month-to-month terms. Get the notice period in writing before you sign.',
  },
  {
    q: 'How long does SEO take?',
    a: 'Expect three to six months for clear movement on local and low-competition searches, and longer for national ones. Safari Digital says its campaigns run six to nine months at a minimum. Google Business Profile fixes and technical repairs can show sooner. Judge progress on calls and enquiries over a quarter, not on one keyword in one week.',
  },
  {
    q: 'How do I rank higher on Google Maps?',
    a: 'Google says local results depend on relevance, distance and prominence. So fill in every part of your Business Profile, choose the right categories, keep your name, address and phone the same everywhere, add photos, and ask happy customers for reviews. Google says more reviews and positive ratings can help your local ranking. You cannot pay Google for a better map position.',
  },
  {
    q: 'What does an SEO agency do, and what is included?',
    a: 'An SEO agency is a firm that helps your website show up when customers search Google. It finds what they search for, fixes technical problems, edits or adds pages (on-page work), tidies your Google Business Profile and directory listings, earns links from other sites and reports each month. Digital Marketing Tribe’s starter, for example, lists up to 10 keywords, on-page work on up to 5 pages and a monthly rank-grid report (a map of where you rank across your area). Ask for the list in writing, with quantities.',
  },
  {
    q: 'Can I do SEO myself?',
    a: 'Yes, the basics. Claim and complete your Google Business Profile, ask for reviews, make one clear page for each service and suburb you serve, and use Google Search Console (Google’s free tool that shows which searches bring people to your site) to see what people search to find you. An agency adds technical skill, writing time and link building, which matter more as competition rises. Many owners start alone and hire later.',
  },
  {
    q: 'Can ChatGPT do SEO?',
    a: 'It can help with parts of the job, such as outlining pages, listing questions to answer and checking your copy is clear. It cannot see your Search Console data, fix your site or earn links. Pages written by AI and posted without your own facts rarely rank well. Safari Digital, for one, says it writes content in-house and does not rely on AI tools to write it.',
  },
  {
    q: 'Is SEO dead now with AI?',
    a: 'No. Google’s AI Overviews and AI Mode pick their sources from pages Google can already find and trust, and Google says there are no extra requirements to appear in them beyond sound SEO. On 21 October 2026, Google Australia showed an AI Overview for “seo agencies australia” and for “best seo company australia”, so being a cited source now matters as much as ranking. StudioHawk, SIXGUN, Red Search and Digital Marketing Tribe already sell AI search work next to SEO.',
  },
  {
    q: 'What is the 80/20 rule in SEO?',
    a: 'It is the idea that about 80% of results come from about 20% of the work. Safari Digital says it applies a strict 80/20 rule to small business campaigns: target high-intent searches with less competition, write strong pages for them, and build trust with a few good links, rather than chase broad terms that big competitors own.',
  },
  {
    q: 'How do I tell if my SEO is working?',
    a: 'Look at calls, form enquiries and sales from search, then at the searches you appear for in Google Search Console, then at rankings. Watch your Google Business Profile insights for calls and direction requests. If rankings rise but enquiries do not, the agency may be chasing the wrong searches. Ask for a report that starts with enquiries.',
  },
  {
    q: 'What are some reputable SEO agencies in Sydney?',
    a: 'From this list: Safari Digital on York Street, Red Search in North Strathfield, StudioHawk in South Eveleigh, Gorilla 360 in Surry Hills, Supple Digital in Haymarket and Digital Marketing Tribe in Sydney and Hunters Hill. They range from SEO-only specialists to full-service agencies, so start from the shortlist table and your budget.',
  },
  {
    q: 'What are the best SEO agencies in Melbourne?',
    a: 'Six firms on this list give a Melbourne address first. StudioHawk is in Prahran, Supple Digital and SIXGUN are in Richmond, Webomaze is in Southbank, Zib Digital is in South Melbourne and Melbourne Web Digital is on St Kilda Road. Gorilla 360 also has a Melbourne office. Webomaze is the only one of these that publishes a minimum price, from A$700 a month.',
  },
  {
    q: 'Should I hire an SEO agency or a freelance SEO consultant?',
    a: 'A freelancer suits a small site with one clear job, such as fixing your Google Business Profile or a technical audit, and you deal with one person. An agency suits ongoing work that needs writing, link building and development at the same time. SIXGUN’s cost guide puts hourly SEO rates at A$100 to A$300, so ask either one for the hours a month your fee buys.',
  },
  {
    q: 'Are there good SEO agencies in Brisbane, Perth and Adelaide?',
    a: 'Yes. In Perth, Bloom Digital in Subiaco, plus Supple Digital’s Perth office. In Queensland, Digital Nomads HQ on the Sunshine Coast, Bambrick in Brisbane and Gorilla 360’s Brisbane office. In Adelaide, Digital Marketing Tribe in North Adelaide and Boylen. Most SEO work is done remotely, but a local firm may know your suburbs and competitors better.',
  },
];

export const post: BlogPost = {
  id: '840',
  slug: 'best-seo-agencies-australia-2026',
  title: 'Best SEO Agencies in Australia for Small Business (2026): 10 Compared',
  excerpt:
    'Ten Australian SEO agencies for small and mid-size businesses, checked on their own websites on 22 October 2026: where each is based, the contract terms, published prices copied exactly, and who each one suits. Four more get a short entry. FactoryJet is listed last and says so.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 22, 2026',
  dateModified: 'Oct 31, 2026',
  readTime: '21 min read',
  imageUrl: `${IMG}-hero.webp`,
  imageAlt:
    'Over the shoulder of a tile showroom owner with a short black bob in a navy polo, looking at a simple map with three orange pins on her laptop at the sales counter',
  meta: {
    title: 'Best SEO Agencies in Australia 2026: 10 Compared',
    description:
      'Ten Australian SEO agencies for small business compared: where each is based, contract terms, published prices in AUD and who it suits. Checked 22 Oct 2026.',
  },
  keyTakeaways: [
    'There is no single best SEO agency in Australia. Match the firm to your size and your budget.',
    'We started from the agencies AI tools name when asked which suit small businesses, then read each firm’s own site on 22 October 2026.',
    'Three of the ten publish a price or minimum: from A$700 a month (Webomaze) to about A$2,000 a month (Red Search). Most quote after a call.',
    'Six of the ten said on their own sites that they offer no lock-in or month-to-month terms. Get the notice period and GST position in writing.',
    'FactoryJet is on this list, last. We work remotely with Australian clients.',
  ],
  faqs: FAQS,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': PAGE_URL,
              url: PAGE_URL,
              name: 'Best SEO Agencies in Australia for Small Business (2026): 10 Compared',
              description:
                'Ten Australian SEO agencies for small business compared: where each is based, contract terms, published prices in AUD and who it suits. Checked 22 Oct 2026.',
              inLanguage: 'en-AU',
              datePublished: '2026-10-22',
              dateModified: '2026-10-31',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'SEO agencies for small and mid-size businesses in Australia' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1', 'h2'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Ten SEO agencies in Australia compared, plus FactoryJet',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: FIRMS.length,
              itemListElement: FIRMS.map((f, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: f.name.replace(' (that is us)', ''),
                url: f.url,
              })),
            },
          ]),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          The best SEO company in Australia for a small business depends on your size and budget. For a large national team, look at StudioHawk, Supple Digital and Gorilla 360. For an SEO-only specialist, Safari Digital or Red Search in Sydney. For a published starting price, Webomaze in Melbourne (from A$700 a month) and Digital Marketing Tribe in Sydney and Adelaide (from A$1,200 a month plus GST). In Perth, Bloom Digital; on the Sunshine Coast, Digital Nomads HQ.
        </p>
        <p className="text-gray-800 leading-relaxed">
          We started from the agencies AI tools themselves name for small businesses, then read each firm&rsquo;s own website on 22 October 2026. Nobody paid to be listed. The order is not a ranking. FactoryJet is last, and labelled.
        </p>
      </div>

      <p className="mb-4">
        On 9 October 2026 we asked eight AI tools the question an Australian owner asks before hiring: &ldquo;Which SEO agencies in Australia are best for small businesses?&rdquo; We ran it twice each on ChatGPT (the API and the app), Claude, Gemini (the API and the app) and Perplexity, and once each on Google AI Mode and Google AI Overviews: 14 answers in all. StudioHawk was named in 11 of them, Digital Nomads HQ in 9 and Supple Digital in 7. Eight firms were named in three answers or more.
      </p>
      <p className="mb-4">
        <strong>A note on honesty.</strong> FactoryJet sells SEO in Australia, so we are on this list. We put ourselves last. Many lists that rank for this search are written by an agency that puts itself first, which is a reason to read every list, this one included, with care. For how we do the work, see our{' '}
        <a href="/au/seo" className="text-[#B23E13] underline">SEO services in Australia</a>.
      </p>
      <p className="mb-6">
        This list is about everyday SEO: ranking in Google, the map pack and the searches local customers make. If you mainly want your business named inside ChatGPT and Google AI Overviews, read our separate list of the{' '}
        <a href="/blog/best-ai-seo-agencies-australia-2026" className="text-[#B23E13] underline">best AI SEO agencies in Australia</a>, published a day earlier with a different set of firms.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The shortlist at a glance</h2>
      <p className="mb-4">
        Find the rows that match your size and your state, then read those profiles in full.
      </p>
      <p className="md:hidden text-xs text-gray-600 mb-2 not-prose">Swipe sideways to see every column.</p>
      <div className="mb-8 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 720 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              <th className="p-3 text-left border border-gray-700">Where based</th>
              <th className="p-3 text-left border border-gray-700">Type</th>
              <th className="p-3 text-left border border-gray-700">Price and contract terms on its site</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((f) => (
              <tr key={f.name} className={f.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{f.name}</td>
                <td className="p-3 border border-gray-200 align-top">{f.based}</td>
                <td className="p-3 border border-gray-200 align-top">{f.type}</td>
                <td className="p-3 border border-gray-200 align-top">{f.terms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we chose these firms</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start with what buyers see.</strong> We took every agency the AI tools put forward in 14 answers to one small business question, asked on 9 October 2026. A firm whose only role was publishing a list the AI tool cited did not count for that answer.</li>
        <li><strong>Keep the ones named often.</strong> Eight firms were named in three or more answers. Seven pass the next checks; Online Marketing Gurus blocked our checks on 22 October.</li>
        <li><strong>Add firms that publish prices.</strong> Digital Marketing Tribe, Red Search and Webomaze were each named in two answers. We profile them because a published price helps a small business compare.</li>
        <li><strong>Check for an Australian base and an SEO service.</strong> Each firm here shows an Australian address and a real SEO service on its own site. Funnel Boost Media, named in two answers, is out: the site we reached showed a US phone number and no Australian address. Local Digital and Digital Hitmen blocked our checks.</li>
        <li><strong>Read the source, not the summary.</strong> Every description comes from the firm&rsquo;s own pages, opened on 22 October 2026, and we link the page on every profile.</li>
        <li><strong>No scores.</strong> We have not hired these firms, so we give no stars and no ranking. We say who each one suits and one question worth asking it.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">The best SEO agencies and companies in Australia for small business</h2>
      <p className="mb-6">
        The order is not a ranking. Larger agencies come first, then SEO specialists, then firms that publish a starting price, then us.
      </p>

      {FIRMS.map((f, i) => (
        <section key={f.name} className="mb-8">
          <h3 className="text-xl font-bold mt-6 mb-2">{i + 1}. {f.name}</h3>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Based:</strong> {f.based}. <strong>Type:</strong> {f.type}.
          </p>
          <p className="mb-3">{f.what}</p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li><strong>Best for:</strong> {f.bestFor}</li>
            <li><strong>Price and terms:</strong> {f.terms}</li>
            <li><strong>Worth asking them:</strong> {f.ask}</li>
          </ul>
          <p className="text-sm text-gray-600">
            Source: <a href={f.source} className="text-[#B23E13] underline" rel="noopener" target={f.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>{f.source.replace('https://', '')}</a>
            {f.more && (
              <>
                {' '}and{' '}
                <a href={f.more} className="text-[#B23E13] underline" rel="noopener" target="_blank">{f.more.replace('https://', '')}</a>
              </>
            )}
          </p>
          {f.name === 'Digital Nomads HQ' && (
            <figure className="my-8 not-prose">
              <img
                src={`${IMG}-report.webp`}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                alt="A bald man in his 60s with a grey beard and an olive linen shirt and a red-haired woman in a white t-shirt reading printed bar charts at a pale timber table in a bright meeting room"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="text-sm text-gray-600 mt-2">Ask to see a real monthly report before you sign. The useful ones start with calls and enquiries, not rankings.</figcaption>
            </figure>
          )}
        </section>
      ))}

      <h2 className="text-2xl font-bold mt-10 mb-4">Four more firms that passed the same checks</h2>
      <p className="mb-4">
        Each of these was named in two of the 14 AI answers and shows an Australian address and an SEO service on its own site.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        {ALSO_CHECKED.map((a) => (
          <li key={a.name}>
            <strong>{a.name}.</strong> {a.line}{' '}
            <a href={a.source} className="text-[#B23E13] underline" rel="noopener" target="_blank">Source</a>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">What these SEO agencies publish about price</h2>
      <p className="mb-4">
        Most Australian SEO agencies quote after a call. Three of the ten we profiled publish a price or a minimum on their own sites. We copied them exactly on 22 October 2026. These are each firm&rsquo;s own figures, not FactoryJet prices.
      </p>
      <p className="md:hidden text-xs text-gray-600 mb-2 not-prose">Swipe sideways to see every column.</p>
      <div className="mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 600 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Published figure</th>
              <th className="p-3 text-left border border-gray-700">GST and terms</th>
            </tr>
          </thead>
          <tbody>
            {PRICES.map((p) => (
              <tr key={p.firm} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">
                  <a href={p.source} className="text-[#B23E13] underline" rel="noopener" target="_blank">{p.firm}</a>
                </td>
                <td className="p-3 border border-gray-200 align-top">{p.figure}</td>
                <td className="p-3 border border-gray-200 align-top">{p.gst}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Budget bands are not prices.</strong> Gorilla 360&rsquo;s enquiry form starts at &ldquo;Under $1,000&rdquo; a month and SIXGUN&rsquo;s at A$1,000 to A$2,000. That tells you the smallest budget they expect to hear, not what they will quote.</li>
        <li><strong>Read the market range too.</strong> SIXGUN&rsquo;s own{' '}
          <a href="https://sixgun.com.au/insights/how-much-does-seo-cost-a-breakdown-of-seo-pricing/" className="text-[#B23E13] underline" rel="noopener" target="_blank">SEO cost guide</a>{' '}
          puts typical retainers at A$1,000 to A$10,000 a month, hourly rates at A$100 to A$300, and one-off projects at A$2,000 to A$30,000.</li>
        <li><strong>Check GST.</strong> GST in Australia is 10%. One of the three firms says its price is plus GST; the other two do not say either way.</li>
        <li><strong>Check the unit.</strong> One price covers one suburb or service area, another is a minimum that grows with competition. Ask each firm to restate its quote as hours, pages and links a month.</li>
      </ul>
      <p className="mb-6">
        For package, hourly and audit prices across more Australian providers, read our{' '}
        <a href="/blog/seo-cost-australia-2026" className="text-[#B23E13] underline">SEO cost guide for Australia</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What an SEO engagement in Australia should cover</h2>
      <p className="mb-4">
        Strip away the package names and the work on these sites comes down to five jobs. An agency should be able to tell you how many hours each one gets in your plan.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Local SEO and your Google Business Profile.</strong> Categories, services, photos, opening hours, posts and a steady flow of reviews, plus the same name, address and phone number on every directory listing (these are called citations).</li>
        <li><strong>The map pack.</strong> The map pack is the box of local businesses, usually three, that Google shows with a map above the normal results. Google says local results depend on relevance, distance and prominence, that more reviews and positive ratings can help, and that there is no way to pay for a better local ranking.</li>
        <li><strong>Technical SEO.</strong> A site Google can crawl and load quickly on a phone: no blocked pages, broken redirects or duplicate pages, with schema (hidden code that states your business details for machines) on the key pages.</li>
        <li><strong>Content.</strong> One clear page for each service and each area you serve, written to answer what customers ask, in your own words and with your own photos.</li>
        <li><strong>Google AI Overviews and AI tools.</strong> Short, direct answers near the top of each page and consistent facts about your business across the web. Google says there are no extra requirements to appear in AI Overviews or AI Mode beyond sound SEO.</li>
      </ul>
      <p className="mb-6">
        Sources:{' '}
        <a href="https://support.google.com/business/answer/7091?hl=en" className="text-[#B23E13] underline" rel="noopener" target="_blank">Google Business Profile Help, tips to improve your local ranking</a>{' '}and{' '}
        <a href="https://developers.google.com/search/docs/appearance/ai-features" className="text-[#B23E13] underline" rel="noopener" target="_blank">Google Search Central, AI features and your website</a>, both read on 22 October 2026. A lighter version of this list, built for owner-run businesses, is our{' '}
        <a href="/au/small-business-seo" className="text-[#B23E13] underline">small business SEO service in Australia</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to choose an SEO agency in Australia: 7 steps</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Check where you stand.</strong> Search your main service and suburb in Google, look at who appears in the map, and note it. Ask ChatGPT the same question, or run our free <a href="/ai-visibility-checker" className="text-[#B23E13] underline">AI visibility checker</a>.</li>
        <li><strong>Fix what you can for free.</strong> Claim and complete your Google Business Profile and ask your last ten happy customers for a review before you pay anyone.</li>
        <li><strong>Match the firm to your size.</strong> Use the table above. A sole trader in Geelong and a national retailer need different teams.</li>
        <li><strong>Ask for a sample report.</strong> It should start with calls and enquiries, then rankings, with dates.</li>
        <li><strong>Ask who does the work.</strong> The specialist on the sales call, an account manager, or a team you have not met?</li>
        <li><strong>Get the unit, GST and exit in writing.</strong> Hours, pages and links a month, whether the price includes GST, and the notice period.</li>
        <li><strong>Start small.</strong> An audit or a three-month plan with no lock-in tells you more than a 12-month contract. Walk away from any pitch that guarantees a first-page or map pack spot, or offers to pay Google for rankings: Google says that cannot be done.</li>
      </ol>

      <h2 id="what-else-ranks" className="text-2xl font-bold mt-10 mb-4">What else ranks for &ldquo;seo agencies australia&rdquo;, and how this list differs</h2>
      <p className="mb-4">
        On 21 October 2026, Google Australia showed a map pack and an AI Overview for this search. Its top ten mixed agency service pages (StudioHawk, Impressive, First Page, Bruce Clay, Localsearch, Zib Digital and Advisible) with three list pages: Clutch, Semrush and Avenue Group.
      </p>
      <p className="mb-6">
        The two directories rank firms in different ways. Clutch&rsquo;s{' '}
        <a href="https://clutch.co/au/seo-firms" className="text-[#B23E13] underline" rel="noopener" target="_blank">Australian SEO list</a>{' '}
        says it verifies reviews, and that it may earn a fee for some placements. The{' '}
        <a href="https://agencies.semrush.com/list/seo/australia/" className="text-[#B23E13] underline" rel="noopener" target="_blank">Semrush Agency Partners list</a>{' '}
        showed 145 Australian SEO agencies sorted by an &ldquo;Agency Score&rdquo; the page does not explain (both read on 31 October 2026). This list says how the firms were picked, links every claim to the firm&rsquo;s own page, prints the prices firms publish and puts its author last.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Other lists that may fit better</h2>
      <p className="mb-6">
        For online stores, our list of the{' '}
        <a href="/blog/best-ecommerce-agency-small-business-australia-2026" className="text-[#B23E13] underline">best ecommerce agencies for small business in Australia</a>{' '}
        covers firms that build and grow them. If you need a new website before any SEO, see the{' '}
        <a href="/blog/best-web-design-companies-small-business-australia" className="text-[#B23E13] underline">best web design companies for small business in Australia</a>. For other markets, the same method gives the{' '}
        <a href="/blog/best-seo-agencies-uk" className="text-[#B23E13] underline">best SEO agencies in the UK</a> and the{' '}
        <a href="/blog/best-seo-agencies-usa" className="text-[#B23E13] underline">best SEO agencies in the USA</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Where FactoryJet fits</h2>
      <p className="mb-4">
        We are FactoryJet. We have served 500+ businesses since 2014, most of that time building websites and online stores. That is why our SEO starts on the site itself: the same engineers who find what holds your rankings back make the changes to your pages and your site speed. Bhavesh, our founder, reads every request.
      </p>
      <p className="mb-6">
        Choose a firm above if you want a published price before the first call. Choose us if your SEO problems sit inside the website and you want them fixed by the people who build it. See how we work on our{' '}
        <a href="/au/seo" className="text-[#B23E13] underline">SEO services page for Australia</a>, our{' '}
        <a href="/au/small-business-seo" className="text-[#B23E13] underline">small business SEO plan</a>, or start with the{' '}
        <a href="/au" className="text-[#B23E13] underline">FactoryJet Australia hub</a>.
      </p>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg my-8 not-prose">
        <p className="font-semibold text-orange-900 mb-2">Find out what your site needs first</p>
        <p className="text-orange-800 mb-3">
          Tell us your website and the suburbs you serve. We will show you where you rank today and what we would fix first, then quote a fixed price in writing.
        </p>
        <a
          href="/au/small-business-seo"
          className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
        >
          See our small business SEO plan
        </a>
      </div>
    </>
  ),
};

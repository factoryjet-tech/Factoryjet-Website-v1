import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';

const CANONICAL = 'https://factoryjet.com/au/real-estate-websites';
const UPDATED = '2026-09-26';
const TITLE = 'Real Estate Website Design & SEO Australia | FactoryJet';
/* Visible hero heading AND schema headline: keep them identical. */
const H1_LEAD = 'Real Estate Website Design and SEO for';
const H1_EMPHASIS = 'Australian Agencies';
const H1 = `${H1_LEAD} ${H1_EMPHASIS}`;
const DESCRIPTION =
  'Real estate website design and SEO for Australian agencies: listings synced from your CRM, suburb pages that rank, appraisal enquiries and practical AI.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Real Estate Websites', url: CANONICAL },
];

/* ─── External sources, all fetch-verified 2026-09-26 ───────────────── */
// NSW Government (Fair Trading), underquoting guidance for agents: underquoting = a price statement or
// advertisement "less than their reasonable estimate of the property's likely selling price"; a range where
// "the higher price ... does not exceed the lower price by more than 10 percent"; must not use "'offers above'
// or 'offers over' an amount" or add "plus"; $2,200 penalty notice, court fines "up to $22,000", may "lose the
// full commission"; "New laws for underquoting and prices in property sale advertisements are expected to
// start towards the end of 2026."
const SRC_NSW_UNDERQUOTING =
  'https://www.nsw.gov.au/housing-and-construction/property-professionals/working-as-an-agent/underquoting-guidance';
// NSW Government, advertising guidelines for agents: photos must not be modified so they "no longer truthfully
// and fairly represent that property"; off-property photos labelled "location shot"; from 21 September 2026,
// give the tenant a copy of photos showing their belongings free of charge and get written consent before publishing.
const SRC_NSW_ADVERTISING =
  'https://www.nsw.gov.au/housing-and-construction/property-professionals/working-as-an-agent/advertising-guidelines';
// Law Society Journal (LSJ), on the Property and Stock Agents Amendment (Underquoting and Other Agent Conduct)
// Bill 2026: price guides mandatory in advertising; fines up from $22,000 to $110,000 or three times commission.
const SRC_LSJ_NSW = 'https://lsj.com.au/articles/new-laws-crack-down-on-underquoting-in-nsw/';
// Consumer Affairs Victoria, underquoting for agents: estimate based on "the 3 properties they consider most
// comparable"; "a single price" or "a range of up to 10%"; statement of information "included with online
// advertising"; no "'offers above' 'from' '+'"; penalty "more than $48,842 (240 penalty units)" and forfeiting commission.
const SRC_CAV_UNDERQUOTING =
  'https://www.consumer.vic.gov.au/licensing-and-registration/estate-agents/running-your-business/underquoting-information-for-real-estate-agents';
// Consumer Affairs Victoria, advertising and representations: no digitally enhanced photos that hide flaws;
// testimonials must be genuine; "Rental properties can only be offered at a fixed amount."
const SRC_CAV_ADVERTISING =
  'https://www.consumer.vic.gov.au/licensing-and-registration/estate-agents/running-your-business/advertising-and-representations';
// ACCC, real estate: "It is illegal for real estate agents to mislead consumers, regardless of whether this is
// deliberate or not"; must not "advertise below a price the seller has already rejected."
const SRC_ACCC = 'https://www.accc.gov.au/consumers/specific-products-and-activities/real-estate';
// REA Partner Platform, Listing Upload API overview: "The listings data is received in the REAXML format";
// "meant for the XML Providers or CRMs that REA customers use to upload listings."
const SRC_REA_UPLOAD = 'https://partner.realestate.com.au/listing-upload/overview/';
// REA Partner Platform home: "Receive property enquiries and leads in real-time through the Leads API."
const SRC_REA_PARTNER = 'https://partner.realestate.com.au/listing-upload/';
// Domain developer docs, Listings Management API: available free to those "working with agents and agencies to
// help them manage listings and leads"; PUT /v1/listings/residential; migration path from XML uploads.
const SRC_DOMAIN_API = 'https://developer.domain.com.au/docs/latest/apis/pkg_listing_management';
// OAIC, privacy and commercially available AI products: public facing AI tools such as chatbots should be
// "clearly identified as such to users"; do not enter personal information into publicly available AI tools.
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// Easy Property Listings, FeedSync: "the purpose-built bridge between your real estate CRM and your WordPress
// website"; accepts REAXML over API or FTP.
const SRC_FEEDSYNC = 'https://easypropertylistings.com.au/extensions/feedsync-service/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'websites', label: 'Real estate websites' },
  { key: 'seo',      label: 'Real estate SEO' },
  { key: 'listings', label: 'Listings, CRMs & portals' },
  { key: 'ai',       label: 'AI for real estate' },
  { key: 'rules',    label: 'Underquoting & advertising rules' },
  { key: 'working',  label: 'Cost, timing & ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Websites ──
  { category: 'websites', question: 'What is the best website design for real estate agents?',
    answer: 'The best real estate website is fast on a phone, shows current listings straight from your CRM, and makes booking an appraisal easy. Good design here means clear suburb pages, real sold results, honest agent profiles and a short enquiry form, not heavy animation. Buyers browse the portals; vendors check your site. Design for the vendor.' },
  { category: 'websites', question: 'How to build a website for a real estate agent?',
    answer: 'Start with the job: winning listings. Plan the pages a vendor needs (agent profile, suburbs you sell in, recent sales, reviews, appraisal form). Connect the listings feed from your CRM so properties update on their own. Write plain English copy, test on phones, set up Google Business Profile, then track appraisal requests monthly.' },
  { category: 'websites', question: 'What is the best website builder for real estate agents?',
    answer: 'The website your CRM provider offers is often the easiest start, because listings already flow into it. WordPress with a listings plugin suits agencies that want more control over content and SEO. General builders like Wix or Squarespace look good but usually need extra tools to take a CRM listings feed. Choose on the feed first.' },
  { category: 'websites', question: 'Do real estate agents need their own website if they are on realestate.com.au and Domain?',
    answer: 'Yes, for a different reason. Buyers search the portals for property. Vendors check your own website before they invite you to appraise their home, and there you own the enquiry instead of sitting beside other agents. It is also the page Google and AI assistants use to describe your agency.' },
  // ── SEO ──
  { category: 'seo', question: 'What is SEO in real estate?',
    answer: 'Real estate SEO means making your agency website show up on Google when local people search for things like “real estate agent Paddington” or “sell my house Geelong”. It covers suburb pages, agent profiles, Google Business Profile, reviews, site speed and structured data. The goal is appraisal requests from vendors, not just traffic.' },
  { category: 'seo', question: 'How to do SEO for real estate?',
    answer: 'Pick the suburbs where you want listings and build one genuinely useful page for each, with recent sales and local detail. Give every agent a full profile. Keep Google Business Profile complete and ask every happy vendor for a review. Make the site fast, add structured data, and publish short market updates linked to the suburb pages.' },
  { category: 'seo', question: 'Is SEO still worth it for real estate agents in 2026?',
    answer: 'Yes, if you aim it at vendors. Buyers mostly start on the portals, so ranking for “houses for sale” is not the point. People planning to sell search for agents, appraisals and suburb prices, and more of them now ask AI assistants too. Those searches are local, fairly low competition and close to a decision.' },
  { category: 'seo', question: 'How much does SEO typically cost in Australia?',
    answer: 'It depends on how many suburbs or offices you want to rank for, how competitive they are, the state of your site and how much content is needed. One agent in one area is a small engagement; a multi-office group is larger. Our SEO cost guide for Australia lists typical market ranges with sources and GST treatment.',
    links: [{ href: '/blog/seo-cost-australia-2026', label: 'SEO cost guide for Australia' }] },
  // ── Listings ──
  { category: 'listings', question: 'How do listings get from my CRM to my website?',
    answer: 'The same way they get to the portals. Your CRM sends each listing as a data feed, often in the REAXML format realestate.com.au uses, and your website reads that feed to create or update the property page. When a property sells or is withdrawn in the CRM, the website updates too. You never enter a listing twice.' },
  { category: 'listings', question: 'What is REAXML?',
    answer: 'REAXML is the listing data format realestate.com.au accepts. Its Listing Upload API receives listings in REAXML and is built for the CRMs and XML providers agencies use. Each record describes a property with fields such as bedrooms, bathrooms, car spaces, auction details, floor plans and photos. Many agency websites read the same feed.' },
  { category: 'listings', question: 'Which CRM is best for real estate in Australia?',
    answer: 'There is no single best. Agentbox, Rex and MRI Vault are among the CRMs Australian agencies use, and each says it connects to the property portals. Choose on how your team works: appraisals, vendor tracking, property management, reporting and integrations. We build around the CRM you already use, so you do not need to switch.' },
  { category: 'listings', question: 'What is the best real estate website in Australia?',
    answer: 'For buyers and renters, realestate.com.au and Domain are the two big property portals, and many agencies list on both. For your own agency website, the best one is the site that wins appraisals in the suburbs you care about. That is a different job from a portal, so copy what makes vendors trust you, not the portal.' },
  { category: 'listings', question: 'Can you connect our website to realestate.com.au and Domain enquiries?',
    answer: 'Usually through your CRM. realestate.com.au offers partners a Leads API, and Domain’s Listings Management API covers listings and leads for providers working with agencies. Many CRMs already bring portal enquiries in. We make sure website enquiries land in the same place, tagged by source, so every lead gets the same follow-up.' },
  // ── AI ──
  { category: 'ai', question: 'How do real estate agents use AI?',
    answer: 'The useful jobs are drafting listing descriptions for the agent to check, replying fast to portal and website enquiries, following up appraisal requests, answering routine rental questions, summarising call notes into the CRM and preparing vendor reports. The agent stays in charge of pricing, advice and relationships. AI takes the admin that slows follow-up.' },
  { category: 'ai', question: 'Is there an AI tool for real estate?',
    answer: 'Many. Most Australian real estate CRMs now include AI features: Rex describes an AI assistant built into its CRM, and MRI Vault says it can generate property descriptions. Start with what your CRM already has. A custom AI agent makes sense when the work spans your CRM, website, email and phone, with your own rules.' },
  { category: 'ai', question: 'Is AI replacing real estate agents?',
    answer: 'No. Selling a home involves trust, local judgement, negotiation and legal duties that AI cannot carry. What changes is the admin around the job. Agencies that use AI well reply to enquiries in minutes, follow up every appraisal and keep the CRM tidy, so agents spend their time with vendors and buyers, where listings are won.' },
  // ── Rules ──
  { category: 'rules', question: 'What are the new underquoting laws in NSW?',
    answer: 'NSW Government guidance says new laws on underquoting and prices in property sale ads are expected to start towards the end of 2026. The Law Society Journal reports the changes make price guides mandatory in advertising and raise the maximum fine from $22,000 to $110,000 or three times the commission. Check NSW Fair Trading for the start date.' },
  { category: 'rules', question: 'What are the underquoting rules for real estate advertising?',
    answer: 'In NSW and Victoria, an advertised price must not be below the agent’s reasonable estimate of the selling price, and an estimated price range cannot span more than 10 percent. Both states ban “offers over” or “offers above”, and Victoria also bans “from” and “+”. In Victoria, a statement of information must be included with online advertising.' },
  { category: 'rules', question: 'What words are not allowed in real estate advertising?',
    answer: 'Price wording is the main trap. NSW guidance bans “offers above” and “offers over” an amount and adding “plus” to a price. Consumer Affairs Victoria bans “offers above”, “from” and “+” as qualifiers. Beyond price, any misleading word is a problem, like “close to the beach” when it is not. Be specific instead.' },
  { category: 'rules', question: 'Can real estate agents use old or edited photos?',
    answer: 'Not if they mislead. NSW guidance says photos must not be modified so they no longer truthfully and fairly represent the property, and off-property photos must be labelled as a location shot. Victoria bans enhancing photos to hide flaws. From 21 September 2026, NSW also needs tenant consent for photos showing their belongings.' },
  // ── Working ──
  { category: 'working', question: 'How much does a real estate website cost in Australia?',
    answer: 'It depends on scope: agents and offices, suburb pages, the listings feed, property management features, copywriting and support. A single-agent site is a much smaller job than a multi-office group. We give a fixed quote after a short call, and our website cost guide for Australia lists typical market ranges with sources.',
    links: [{ href: '/blog/website-cost-australia-2026', label: 'Website cost guide for Australia' }] },
  { category: 'working', question: 'How long does a real estate website take to build?',
    answer: 'An agent website of up to five pages has 7-day delivery once the design is approved and your listings feed is available. Agency sites with suburb pages, team profiles and property management take a few weeks, and multi-office groups longer. Most of the time goes into content and the feed connection, not the design.' },
  { category: 'working', question: 'Do we own the website and content?',
    answer: 'Yes. The design, code, copy, suburb pages and analytics are yours, and the domain, hosting and Google Business Profile stay in your agency’s name. If you change CRM or provider, you take the website with you. We build it, support it after launch, and hand over the keys and documentation.' },
  { category: 'working', question: 'Are you a real estate marketing agency?',
    answer: 'We are a web, SEO and AI team, not a full-service property marketing agency. We do not produce signboards, print, photography or portal ad packages. We build the website, suburb and agent pages, SEO, lead handling and AI tools. Many agencies use us alongside their existing marketing partner and portal subscriptions.' },
];

/* ─── Named options in the Australian market (open self-disclosure, ItemList).
       Each company's own website was opened on 2026-09-26 to confirm an Australian address and the service. ── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Custom real estate websites, suburb SEO and AI enquiry handling, built around your CRM. We serve Australian agencies remotely and have no Australian office. You own what we build.' },
  { name: 'Agentbox Websites', note: 'Real estate websites from a CRM provider with a Sydney address. It says listings, agent data and off-market listings are pushed from your CRM into the website, with contact forms that sync with the CRM.' },
  { name: 'Rex', note: 'A real estate software company with offices listed in Brisbane and Perth. It offers a real estate CRM, property agency websites and AI features built into the CRM.' },
  { name: 'Aro Software', note: 'A real estate software company in Coolum Beach, Queensland. It says it has built more than 3,000 real estate websites and integrates with Australian real estate CRMs, whichever one you use.' },
  { name: 'Identity Marketing', note: 'A digital agency in St Morris, South Australia, with a real estate website design service for agencies and franchise groups, including CRM and property feed integration.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Real Estate Website Design and SEO Australia',
      serviceType: 'Real estate website design, real estate SEO, CRM listings feed integration and AI enquiry handling for real estate agencies',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Custom websites and SEO for Australian real estate agencies: listings synced from the agency CRM via its REAXML or API feed, suburb and agent pages built to win appraisal enquiries, price display that follows state underquoting rules, and AI for enquiry replies and appraisal follow-up. Supported after launch and owned by the agency.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: '2026-09-26',
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#providers`,
      name: 'Real estate website providers Australian agencies compare',
      itemListElement: PROVIDERS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
      })),
    },
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
    title: TITLE,
    description:
      'Websites and SEO for Australian real estate agencies: CRM listings feed, suburb pages that win appraisals, underquoting-aware price display and AI for enquiry follow-up. Supported after launch, owned by you.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: real estate website design and SEO for Australian agencies' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* The six things every agency site we build does. */
const CAPS: { t: string; d: string }[] = [
  { t: 'Listings straight from your CRM', d: 'Sale, rent and sold listings appear and update on their own from the feed your CRM already sends the portals. No double entry, no stale listings.' },
  { t: 'Suburb pages that win appraisals', d: 'One useful page per suburb you sell in: recent results, what buyers there want, and the agents who know it.' },
  { t: 'Agent profiles vendors trust', d: 'Real sales, reviews, suburbs covered and a direct way to book an appraisal. Vendors choose a person.' },
  { t: 'Appraisal and enquiry capture', d: 'Short forms routed into your CRM with the source tagged, and an instant reply so nobody waits all weekend.' },
  { t: 'Price display that follows the rules', d: 'The price shows exactly as your CRM sends it, with no hard-coded “offers over” style labels, plus a place for the Victorian statement of information.' },
  { t: 'Fast, accessible and AI-ready', d: 'Quick on a phone, built to WCAG 2.2 AA, with structured data for agents, offices and listings that search engines and AI assistants can read.' },
];
const CAP_ICONS = [
  'M3 11l9-7 9 7v9H3v-9Zm6 9v-6h6v6',
  'M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9c0-4 3-6 7-6s7 2 7 6',
  'M4 4h16v12H8l-4 4V4Zm4 5h8M8 12h5',
  'M3 12l9-9 9 9-9 9-9-9Zm9-4v5m0 3h.01',
  'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
] as const;
const CAP_SUBJECTS = [
  'AI-generated model: a white CRM box sending orange listing cards along a rail into a small house-shaped website frame',
  'AI-generated model: a white street map tile of an Australian suburb with one orange pin and a stack of sold cards beside it',
  'AI-generated model: a white agent profile card with an orange review star row and a small sold sign',
  'AI-generated model: a white appraisal request form card dropping into an orange CRM inbox tray',
  'AI-generated model: a white price tag reading a plain range beside a crossed-out tag, no real brand or text beyond numbers',
  'AI-generated model: a white phone showing a fast-loading property page with an orange lightning mark and an accessibility icon',
] as const;

/* "Which option fits you" self-check. Rendered as <details>, no client component. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'I am a new agent and just need a clean profile site with my listings.', verdict: 'CRM template site', a: 'The website your CRM provider offers is probably the fastest start, because listings already flow into it. Put your effort into your profile, reviews and Google Business Profile, and come back when you want suburb pages and SEO.' },
  { q: 'We are a single office and want more appraisal enquiries from our suburbs.', verdict: 'Custom site plus suburb SEO', a: 'This is where a custom build pays off: real suburb pages, agent profiles, fast pages and appraisal forms that land in your CRM. Listings still come from the same feed, so nothing changes for your admin team.' },
  { q: 'Our site is fine, but enquiries sit for hours before anyone replies.', verdict: 'AI enquiry handling first', a: 'Fix response time before design. An AI assistant can reply to website and portal enquiries in minutes, book appraisals and pass each lead to the right agent with a summary. See the AI section below.' },
];

/* How we build it. */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Map how you win listings', d: 'Your agents, suburbs, offices and where appraisal enquiries come from today. This decides which suburb pages come first.' },
  { n: '02', t: 'Confirm the listings feed', d: 'We get the same feed your CRM sends the portals, usually REAXML or an API, and check sale, rent, sold and off-market listings all arrive.' },
  { n: '03', t: 'Plan pages and redirects', d: 'Every page listed, and every old URL mapped to its new home, so existing Google rankings carry over.' },
  { n: '04', t: 'Write with your agents', d: 'Suburb and agent pages written from short interviews with your team, in plain English with real local detail.' },
  { n: '05', t: 'Design and build', d: 'Mobile-first templates for listings, suburbs and agents, forms connected to your CRM, and prices shown exactly as the CRM sends them.' },
  { n: '06', t: 'Test with real listings', d: 'Live feed data through the site, sold and withdrawn listings checked, every form tested end to end on real phones.' },
  { n: '07', t: 'Launch and set up search', d: 'Redirects live, sitemaps submitted, Google Business Profile linked and appraisal requests tracked by source.' },
  { n: '08', t: 'Grow and support', d: 'New suburb pages, market updates, ranking and enquiry reviews, and a healthy feed, plugins and hosting.' },
];

/* Feed and integration notes. */
const INTEGRATIONS: { sys: string; reads: string; does: string }[] = [
  { sys: 'Your CRM (Agentbox, Rex, MRI Vault and others)', reads: 'Sale, rent and sold listings, agents, photos and floor plans, as a feed (often REAXML) or an API', does: 'Creates, updates and removes property pages automatically; website enquiries flow back in, tagged by source' },
  { sys: 'realestate.com.au', reads: 'Your CRM uploads listings in REAXML through REA’s Listing Upload API', does: 'Shows the same listing data as the portal; REA also offers partners a Leads API for enquiries' },
  { sys: 'Domain', reads: 'Your CRM sends listings through Domain’s Listings Management API', does: 'Same listing data on Domain and your site, never re-keyed by hand' },
  { sys: 'WordPress sites', reads: 'The CRM feed through a listings plugin, such as Easy Property Listings with FeedSync', does: 'Keeps WordPress for content while listings sync on their own' },
  { sys: 'Google Business Profile', reads: 'Office details, reviews and photos you manage', does: 'Linked to the matching office page with consistent details for local search' },
];

const RULES_CHECK: { t: string; d: string }[] = [
  { t: 'Show the CRM price, exactly.', d: 'No template text that adds “offers over”, “from” or “+” to a price.' },
  { t: 'Keep ranges inside 10 percent.', d: 'In NSW and Victoria an estimated price range cannot have a top more than 10 percent above the bottom.' },
  { t: 'Link the statement of information.', d: 'Victorian listings include it with online advertising; the listing template has a place for it.' },
  { t: 'Remove sold and withdrawn listings fast.', d: 'The feed updates the site, so old prices never linger.' },
  { t: 'Label location shots.', d: 'Photos of the beach or café down the road say so.' },
  { t: 'Check every AI-written description.', d: 'An agent approves each one before it goes live.' },
  { t: 'Use real testimonials only.', d: 'Genuine vendor reviews, never edited to say more.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/local-seo', t: 'Local SEO', d: 'Google Business Profile, reviews and local rankings, including for agencies with several offices.' },
  { href: '/au/ai-receptionist', t: 'AI receptionist', d: 'Answers the office phone after hours and passes appraisal requests to the right agent.' },
  { href: '/au/ai-agents', t: 'AI agent development', d: 'AI agents for back-office work across your CRM, inbox and property management system.' },
  { href: '/au/small-business-web-design', t: 'Small business web design', d: 'Websites for Australian small businesses of every size.' },
  { href: '/au/website-maintenance', t: 'Website maintenance', d: 'Updates, backups, feed monitoring and small changes after launch.' },
  { href: '/au/ai-seo', t: 'AI SEO', d: 'Get your agency named when people ask ChatGPT or Google AI Overviews for a local agent.' },
];

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'real-estate-websites';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function RealEstateWebsitesAUPage() {
  return (
    <>
      <script id="ld-au-real-estate-websites" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Real Estate Websites Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead" data-speakable="true">
                Real estate websites that win appraisals, not just show listings. Listings sync from your CRM, suburb and agent pages
                rank for the searches vendors make, prices display the way underquoting rules expect, and AI helps you reply
                to every enquiry in minutes. You own it.
              </p>
              <HeroInlineForm region="au" source="au_real_estate_websites_hero" submitLabel="Plan my agency website" />
            </div>

            <form
              className="specpanel"
              aria-label="What every real estate website we build does"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The path from CRM to vendor enquiry: listings sync from the CRM, suburb pages bring vendors in, appraisal requests reach the right agent"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · FROM CRM TO APPRAISAL</span>
                <span className="sys"><span>REAXML</span><span>SEO</span><span>AI</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what the website does">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="re-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={CAP_ICONS[0]} /></svg></span>
                  <span className="idx">same feed the portals get</span>
                  <span className="title">Listings sync from your CRM</span>
                  <span className="tag">Auto</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="re-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={CAP_ICONS[1]} /></svg></span>
                  <span className="idx">for the suburbs you sell in</span>
                  <span className="title">Suburb pages bring vendors in</span>
                  <span className="tag">SEO</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="re-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={CAP_ICONS[3]} /></svg></span>
                  <span className="idx">replied to in minutes, logged in the CRM</span>
                  <span className="title">Appraisal requests reach the right agent</span>
                  <span className="tag">To an agent</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · The website shows the price exactly as your CRM sends it.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: '10%', t: 'widest allowed gap between the top and bottom of an agent’s estimated selling price range in NSW', s: 'NSW Government, underquoting', u: SRC_NSW_UNDERQUOTING },
              { v: 'Online too', t: 'a Victorian statement of information must be included with online advertising', s: 'Consumer Affairs Victoria', u: SRC_CAV_UNDERQUOTING },
              { v: 'REAXML', t: 'the format realestate.com.au receives listings in from agency CRMs', s: 'REA Partner Platform', u: SRC_REA_UPLOAD },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />26 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) → facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does a real estate website need to do, and what is real estate SEO?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">A real estate agency website has one main job: turning local homeowners into appraisal
                    requests.</span> It shows current listings from your CRM, proves your results with sold properties and reviews,
                    introduces each agent, and makes booking an appraisal easy. Real estate SEO is the work that gets those pages
                    found when vendors search for an agent in their suburb.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      A <b>CRM</b> is the software your agency runs on, such as Agentbox, Rex or MRI Vault, where listings,
                      contacts and appraisals live. <b>REAXML</b> is the listing data format realestate.com.au accepts, and
                      many agency websites read the same feed. A <b>suburb page</b> is a page about one area you sell in,
                      written to rank when people there search for an agent.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Australian agencies work differently from the American realtor sites most guides describe: listings flow
                    from a CRM to realestate.com.au and Domain, and state underquoting laws control how a price appears in an
                    ad, including on your own site.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A principal of a suburban Australian real estate agency reviewing the agency's suburb page on a laptop at the office front desk, laptop screen facing her, no readable text or logos" />
            </div>
          </div>
        </section>

        {/* ═══ WEBSITE VS PORTALS → ruled rows ═══ */}
        <section className="section platforms" id="portals">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Your website vs the portals</div>
                <h2>Buyers search the portals. Vendors check your website.</h2>
              </div>
              <p>
                realestate.com.au and Domain are where buyers and renters search, and your listings belong there. A homeowner
                choosing who should sell their home searches for agents, reads reviews and looks at your website. So a good
                agency website does not try to be a smaller portal.
              </p>
            </div>
            <div className="eyebrow plat-label">Who does what</div>
            <div className="platlist" role="list">
              <div className="plat" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Property portals</h3></div><p className="plat-build">buyers and renters searching listings</p><p className="plat-build">Fed by your CRM</p></div>
              <div className="plat plat-own" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Your agency website</h3></div><p className="plat-build">vendors choosing an agent, appraisals, trust</p><p className="plat-fit">This page</p></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Google Business Profile</h3></div><p className="plat-build">local search, maps, reviews</p><p className="plat-build"><a href="/au/local-seo">Local SEO</a></p></div>
              <div className="plat" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>AI assistants</h3></div><p className="plat-build">“who is a good agent in my suburb?”</p><p className="plat-build"><a href="/au/ai-seo">AI SEO</a></p></div>
            </div>
          </div>
        </section>

        {/* ═══ WHAT WE BUILD → capgrid ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What every agency site we build does</div>
              <h2>Six things a real estate website has to get right</h2>
              <p className="lead">
                Agency sites lose vendors on the basics: stale listings, empty suburb pages and enquiries nobody answers
                until Monday. These six fix that.
              </p>
            </div>
            <div className="capgrid">
              {CAPS.map((c, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={c.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={CAP_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={CAP_SUBJECTS[i]} />
                    <h3>{c.t}</h3>
                    <p>{c.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ FIT CHECK → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you?</div>
              <h2>A 30-second check: CRM template, custom website or AI first</h2>
              <p>Tap the line that sounds most like your agency. The answer is honest, even when it is not us.</p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A homeowner couple at their kitchen table in an Australian suburb looking at a local agent's website on a tablet before booking an appraisal, tablet screen facing them"
                caption="Vendors often compare agency websites before they book an appraisal. Yours should answer their questions before they ask." />
            </div>
            <div className="ventries">
              {FIT_CHECK.map((f) => (
                <details key={f.q} className="ventry">
                  <summary><h3>{f.q}</h3><span className="chev" aria-hidden="true">+</span></summary>
                  <span className="vtag">{f.verdict}</span>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ LISTINGS FEED + INTEGRATIONS TABLE ═══ */}
        <section className="section integrations" id="listings-feed">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Listings, CRMs and portals</div>
              <h2>How listings flow from your CRM to your website, realestate.com.au and Domain</h2>
              <p className="lead">
                You enter a listing once, in the CRM, and the CRM sends it to the portals. realestate.com.au receives
                listings in REAXML through its Listing Upload API, built for agency CRMs, and Domain offers a Listings
                Management API. Your website should read the same data, so price, photos and status always match.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>System</th>
                    <th>Where the listing data comes from</th>
                    <th className="fj">What your website does with it</th>
                  </tr>
                </thead>
                <tbody>
                  {INTEGRATIONS.map((r) => (
                    <tr key={r.sys}>
                      <th scope="row">{r.sys}</th>
                      <td>{r.reads}</td>
                      <td className="fj">{r.does}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Sources: <a href={SRC_REA_UPLOAD} {...extLink}>REA Partner Platform, Listing Upload API</a>;{' '}
              <a href={SRC_REA_PARTNER} {...extLink}>REA Partner Platform, Leads API</a>;{' '}
              <a href={SRC_DOMAIN_API} {...extLink}>Domain, Listings Management API</a>;{' '}
              <a href={SRC_FEEDSYNC} {...extLink}>Easy Property Listings, FeedSync</a>. Your CRM provider controls access to its
              feed; we request it with you, and if a feed is not available, we tell you before the build starts.
            </p>
          </div>
        </section>

        {/* ═══ REAL ESTATE SEO → facts ═══ */}
        <section className="section facts" id="real-estate-seo">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Real estate SEO</div>
              <h2>Real estate SEO in Australia: rank for the searches vendors make</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Aim at vendors, not buyers.</b> You will not outrank the portals for “houses for sale in Newtown”, and you
                  do not need to. The valuable searches come before a sale: “real estate agent Newtown” or “best agent to sell
                  my house in Geelong”. They are local, lower competition, and each one is a possible listing.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>One strong page per suburb.</b> A suburb page that ranks has what a vendor cannot get elsewhere: your
                  recent sales there, what local buyers want and which agent knows the streets. Ten good suburb pages beat two
                  hundred thin ones.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Listing pages, handled carefully.</b> Listings come and go every week. We set how sold and withdrawn
                  listings are handled, keep sold results as proof, and stop duplicate listing URLs crowding out the pages you
                  want found.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <div className="factlabel">The local SEO basics we set up</div>
                  <ul className="trigrows">
                    <li><span className="m">Google Business Profile per office</span><span className="n">name, address, hours, photos, services</span><span className="t">Set up</span></li>
                    <li><span className="m">Review requests after settlement</span><span className="n">genuine vendors and landlords only</span><span className="t">Ongoing</span></li>
                    <li><span className="m">Structured data</span><span className="n">agency, offices, agents, breadcrumbs, FAQs</span><span className="t">Built in</span></li>
                    <li><span className="m">Speed and mobile</span><span className="n">fast listing and suburb pages on a phone</span><span className="t">Built in</span></li>
                    <li><span className="m">AI search visibility</span><span className="n">clear facts AI assistants can quote</span><span className="t">Built in</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="illustration" ratio="3:2" className="factphoto"
                subject="AI-generated model: a white relief map of an Australian suburb with small orange house markers and one larger orange pin marking the agency office" />
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>CRM template website vs general website builder vs custom real estate website</h2>
                <p className="lead">
                  Each is right for someone. This compares them on what changes for your agency day to day, not on price.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom website (FactoryJet)</th>
                    <th>CRM provider template</th>
                    <th>General website builder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Listings from your CRM</th><td className="fj">Yes, from the same feed</td><td>Yes, built in</td><td>Often needs extra tools</td></tr>
                  <tr><th scope="row">Suburb pages with real content</th><td className="fj">Planned and written with your agents</td><td>Limited by the template</td><td>Possible, all manual</td></tr>
                  <tr><th scope="row">SEO control (redirects, structured data, speed)</th><td className="fj">Full</td><td>Partial</td><td>Partial</td></tr>
                  <tr><th scope="row">Price display rules</th><td className="fj">Set in templates, shows CRM price exactly</td><td>Usually follows the CRM</td><td>Up to whoever edits it</td></tr>
                  <tr><th scope="row">AI enquiry replies and follow-up</th><td className="fj">Built around your CRM and rules</td><td>Whatever the CRM offers</td><td>Add-on apps</td></tr>
                  <tr><th scope="row">If you change CRM</th><td className="fj">Keep the site, reconnect the feed</td><td>Usually rebuild</td><td>Keep the site</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Want the numbers? Our <a href="/blog/website-cost-australia-2026">website cost guide for Australia</a> and{' '}
              <a href="/blog/seo-cost-australia-2026">SEO cost guide for Australia</a> list typical market ranges with sources.
            </p>
          </div>
        </section>

        {/* ═══ PHOTOBREAK ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white Australian street of house models with small listing cards on a rail running above them into one orange agency building" />

        {/* ═══ HOW WE BUILD IT → process ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we build it</div>
                <h2>How we build your real estate website, in eight steps</h2>
                <p className="lead">
                  Most of the value sits in steps two and four. Open any step to see what happens in it. Agent websites
                  of up to five pages have 7-day delivery once the design is approved.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A FactoryJet web strategist and two agents from an Australian agency marking up a printed suburb map at a meeting table, planning which suburb pages to build"
                caption="Step one is deciding which suburbs matter most. Those become the first suburb pages we write." />
            </div>
            <div className="timeline timeline-4">
              {BUILD_STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Want more appraisal requests from your own website?'}
            sub={'Tell us your CRM, your suburbs and your current site. On a short call with the founder, we will show you where vendors drop off, which suburb pages to build first, and what your listings feed can do.'}
            label={'Plan my agency website'}
          />
        </div>

        {/* ═══ AI FOR REAL ESTATE → definition ═══ */}
        <section className="definition" id="ai-for-real-estate">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="An Australian property manager at her desk reviewing an AI-drafted reply to a tenant enquiry on her monitor, monitor facing her, no readable text or logos" />
            <p className="figcap">
              AI drafts the reply; the property manager or agent decides what goes out on anything that matters.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">AI for real estate</div>
            <h2>AI for real estate agencies: faster replies, better follow-up, agents in charge</h2>
            <p>
              One of the easiest ways to lose a listing is slow follow-up: an enquiry arrives on Saturday night and nobody
              replies until Monday. AI closes that gap. It replies to website and portal enquiries in minutes, answers
              routine questions, offers appraisal times and passes each lead to the right agent with a summary in the CRM.
            </p>
            <p>
              It also drafts listing descriptions for an agent to check, turns call notes into CRM updates and answers
              routine tenant questions for property managers. Your CRM may already do some of this, so start there. We
              build custom AI agents when the job spans your CRM, website, inbox and phone.
            </p>
            <p>
              Two rules we build in. The AI says it is AI, as the OAIC expects of public facing chatbots, and customer
              details never go into public AI tools. And a person signs off every description and price. For phone calls, see our <a href="/au/ai-receptionist">AI receptionist</a>;
              for work across systems, <a href="/au/ai-agents">AI agent development</a>.
            </p>
            <p className="au-note">
              Source: <a href={SRC_OAIC_AI} {...extLink}>OAIC, privacy and commercially available AI products</a>.
            </p>
          </div>
        </section>

        {/* ═══ UNDERQUOTING + ADVERTISING RULES → facts + checklist panel + ruled rows ═══ */}
        <section className="section facts" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The rules, in plain English</div>
              <h2>Underquoting and real estate advertising rules your website must follow</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Your website is advertising, held to the same rules as a portal ad or a signboard. The ACCC says it is
                  illegal for agents to mislead consumers whether or not it is deliberate, and they must not advertise below
                  a price the seller has already rejected. States add their own underquoting rules.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>New South Wales.</b> NSW Government guidance says an advertised price must not be below the agent’s
                  reasonable estimate of the selling price, an estimate given as a range cannot span more than 10 percent, and ads must not use
                  “offers above”, “offers over” or “plus”. Court fines run up to $22,000, with possible loss of commission. New
                  laws are expected to start towards the end of 2026; the Law Society Journal reports they make price guides
                  mandatory and raise the maximum fine to $110,000.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Victoria.</b> Consumer Affairs Victoria says the estimate must reflect the three most comparable sales,
                  as a single price or a range of up to 10 percent. Ads cannot use “offers above”, “from” or “+”, a statement
                  of information must be included with online advertising, and penalties can exceed $48,842. Rentals are
                  advertised at a fixed amount, not a range.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>Photos and descriptions.</b> NSW guidance says photos must truthfully and fairly represent the property,
                    off-site photos must be labelled as a location shot, and from 21 September 2026 a tenant’s written consent
                    is needed before publishing photos of their belongings. Victoria bans enhancing photos to hide flaws and
                    requires genuine testimonials. Other states differ in detail, so templates follow your state’s rules.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_NSW_UNDERQUOTING} {...extLink}>NSW Government, underquoting guidance</a>;{' '}
                    <a href={SRC_NSW_ADVERTISING} {...extLink}>NSW Government, advertising guidelines for agents</a>;{' '}
                    <a href={SRC_LSJ_NSW} {...extLink}>Law Society Journal, new NSW underquoting laws</a>;{' '}
                    <a href={SRC_CAV_UNDERQUOTING} {...extLink}>Consumer Affairs Victoria, underquoting</a>;{' '}
                    <a href={SRC_CAV_ADVERTISING} {...extLink}>Consumer Affairs Victoria, advertising and representations</a>;{' '}
                    <a href={SRC_ACCC} {...extLink}>ACCC, real estate</a>. Checked 26 September 2026. This is general
                    information, not legal advice.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">7 website checks for price and advertising rules</div>
                <ol className="au-numlist">
                  {RULES_CHECK.map((s) => (
                    <li key={s.t}><span><b>{s.t}</b> {s.d}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ENGAGEMENT SHAPES + DEMAND ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>Three ways to work with us on your agency website</h2>
              </div>
              <p>
                Every project is quoted for your scope, with the build and ongoing support priced separately.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Agent website.</h3></div><p className="plat-build">A personal site for one agent, up to five pages, with listings from your CRM, a full profile, reviews and an appraisal form. 7-day delivery once the design is approved.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Agency website and suburb SEO.</h3></div><p className="plat-build">A full agency site with listings, sold results, agent profiles, suburb pages, property management and ongoing SEO for the suburbs you want to win.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>AI enquiry handling.</h3></div><p className="plat-build">An AI assistant that replies to website and portal enquiries, offers appraisal times and hands each lead to the right agent. Works with your current site or a new one.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the scope: agents and offices, suburb pages, the listings feed, property management features,
                  copywriting, AI work and support. For typical Australian market ranges, see
                  our <a href="/blog/website-cost-australia-2026">website cost guide</a>, <a href="/blog/seo-cost-australia-2026">SEO
                  cost guide</a> and <a href="/blog/ai-cost-australia-2026">AI cost guide</a>. We deliver 97% of projects on time.
                </p>
                <ModalCTAButton label="Plan my agency website" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'ai for real estate', v: '480', w: '100%', kd: 'Mostly agents looking for tools' },
                    { kw: 'real estate seo', v: '210', w: '44%', kd: 'The SEO head term' },
                    { kw: 'real estate website design', v: '170', w: '35%', kd: 'The design head term' },
                    { kw: 'real estate marketing agency', v: '170', w: '35%', kd: 'Broader marketing help' },
                    { kw: 'real estate agent website', v: '90', w: '19%', kd: 'Single-agent sites' },
                    { kw: 'ai agents for real estate', v: '20', w: '4%', kd: 'Custom AI builds' },
                  ].map((r) => (
                    <li key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Source: DataForSEO, Australia, September 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROVIDER LIST (ItemList from PROVIDERS) ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Real estate website providers Australian agencies compare</h2>
              </div>
              <p>
                We are one option. CRM providers offer websites with your software, and specialist agencies build custom
                sites. Each note reflects the company’s own website.
              </p>
            </div>
            <div className="platlist" role="list">
              {PROVIDERS.map((p, i) => (
                <div key={p.name} className={p.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{p.name}</h3>{p.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Named from Australian search results for real estate website queries, September 2026. Each company’s own website was checked on 26 September 2026 for an Australian address and the service. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Beyond the website</div>
              <h2>More of what we build for Australian businesses</h2>
              <p>
                A real estate website works best alongside local search, fast lead handling and ongoing care. These
                services are built by the same team.
              </p>
            </div>
            <ul className="agentdir-grid">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Real estate website and SEO questions Australian agents actually ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>A website that wins appraisals, with listings that look after themselves</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your CRM,
                your suburbs and your current site. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Plan my agency website" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/local-seo">See local SEO for agencies</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

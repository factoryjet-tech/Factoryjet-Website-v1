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
import './page.css';

const CANONICAL = 'https://factoryjet.com/au/small-business-seo';
const UPDATED = '2026-09-26';
const TITLE = 'SEO Company for Small Business Australia | FactoryJet';
const H1 = 'SEO Company for Small Business: Buy the Right Work First';
const DESCRIPTION =
  'SEO for small business in Australia: what to buy first on a small budget, what results to expect month by month, and the contract terms to check first.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. Never
   hand-copy a second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Small Business SEO', url: CANONICAL },
];

/* ─── External sources, all fetch-verified 2026-09-26 ───────────────── */
// Google Search Central, "Do you need an SEO?": "No one can guarantee a #1 ranking
// on Google." Questions to ask an SEO include "What kind of results do you expect
// to see, and in what timeframe?" and "Do you follow the Google Search Essentials?".
// Warns about firms that email out of the blue, claim a special relationship with
// Google, or are secretive about what they will do.
const SRC_GOOGLE_HIRE = 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo';
// Google SEO Starter Guide: "Some changes might take effect in a few hours, others
// could take several months. In general, you likely want to wait a few weeks to
// assess whether your work had beneficial effects in Google Search results."
const SRC_STARTER = 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide';
// Google spam policies: "Link spam is the practice of creating links to or from a
// site primarily for the purpose of manipulating search rankings."
const SRC_SPAM = 'https://developers.google.com/search/docs/essentials/spam-policies';
// ACCC, consumer rights and guarantees: a business is a consumer when a service
// "costs less than $100,000 including GST"; services must be supplied with "an
// acceptable level of care and skill", be fit for any stated purpose, and be
// supplied within a reasonable time if no time frame is agreed.
const SRC_ACCC_GUARANTEES = 'https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees';
// ACCC, contracts: unfair contract terms law changed on 9 November 2023; from then
// "proposing, using or relying on unfair contract terms in standard form contracts
// will be banned and penalties for breaches of the law will apply". Small businesses
// covered: fewer than 100 employees or less than $10 million annual turnover.
// Terms that may be unfair include ones that let one party (but not the other)
// end the contract or change the terms.
const SRC_ACCC_CONTRACTS = 'https://www.accc.gov.au/business/selling-products-and-services/contracts';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'Small business SEO basics' },
  { key: 'buying',   label: 'What to buy & budget' },
  { key: 'results',  label: 'Timelines & results' },
  { key: 'choosing', label: 'Choosing an SEO company' },
  { key: 'diy',      label: 'DIY, ChatGPT & AI search' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is small business SEO?',
    answer: 'Small business SEO is search engine optimisation sized for a business with a small team and a small budget. It means making your website easy for Google to read, getting your Google Business Profile right, writing one clear page for each service people search for, and earning reviews and links.' },
  { category: 'basics', question: 'Is SEO worth it for a small business?',
    answer: 'Usually yes, if people already search for what you sell and your competitors are beatable. It is not worth it if nobody searches for your service, or if the businesses on page one have far more links and reviews than you can earn in a year. That is why we measure search demand and competitor strength before anyone signs anything. Sometimes the honest answer is Google Ads first, or no SEO at all.' },
  { category: 'basics', question: 'How to do SEO for a small business?',
    answer: 'Work in this order. First, fix the basics: a fast site on your own domain, Google Search Console set up, and no pages blocked from Google. Second, complete your Google Business Profile and start asking every happy customer for a review. Third, write one page for each main service and each area you serve, using the words customers type. Fourth, earn links and mentions from real local and industry websites. Then measure enquiries, not just rankings.' },
  { category: 'basics', question: 'What is the 80/20 rule in SEO?',
    answer: 'It is the idea that a small share of the work produces most of the results. For a small business, the few jobs that usually matter most are a site Google can crawl, a complete Google Business Profile with steady reviews, and strong service pages for the searches that bring buyers. Get those right before paying for blog posts, social media or long directory lists.' },
  { category: 'basics', question: 'Is SEO still worth it in 2026?',
    answer: 'Yes. People still search on Google before they call a plumber, book a dentist or hire an accountant, and AI assistants such as ChatGPT and Google’s AI Overviews draw on the same websites that rank well. What has changed is that thin pages written for keywords do worse. Clear pages that answer real questions, backed by reviews and genuine mentions, now help you in both classic search and AI answers.' },

  // ── Buying ──
  { category: 'buying', question: 'How much should SEO cost for a small business?',
    answer: 'It depends on how competitive your searches are, how many services and areas you cover, and how much of the work you do yourself. A local business in a quiet market needs far less than an online store competing nationally. Our SEO cost guide for Australia lists typical market ranges with sources and explains GST. We give you a fixed scope and price after a free first review, not a package off a menu.' },
  { category: 'buying', question: 'What should a small business buy first in SEO?',
    answer: 'A technical and local check of what you already have. That usually finds the cheapest wins: pages Google cannot read, a slow site, missing service pages, a half-finished Google Business Profile, or the wrong business category. Fixing those often does more in the first months than any monthly retainer. Only after that should you pay for new content and link building, and only for the searches that bring buyers.' },
  { category: 'buying', question: 'Do you offer SEO packages for small business?',
    answer: 'We do not sell fixed packages. A package priced the same for a Perth electrician and a Sydney online store means one of them is paying for work they do not need. We scope in stages instead: a one-off fix of the basics, then a monthly plan sized to how competitive your searches are.' },
  { category: 'buying', question: 'What are the most affordable SEO services for small businesses?',
    answer: 'The most affordable SEO is the work that pays back fastest, not the lowest monthly fee. For most small businesses that is a one-off audit and fix, a properly completed Google Business Profile, and a handful of well-written service pages. A cheap retainer that sends a report full of rankings for words nobody searches is the expensive option. Ask any provider what they will do in month one, in writing.' },
  { category: 'buying', question: 'Do I need a new website before paying for SEO?',
    answer: 'Not always. If your site is on a sound platform, loads quickly and you can add pages easily, SEO can start on it. If it is very slow, built on a page builder you cannot edit, or missing the pages you need, fixing it first saves money, because every SEO hour spent on a broken site is partly wasted. We deliver websites of up to 5 pages in 7 days when a rebuild is the right call.' },

  // ── Results ──
  { category: 'results', question: 'How long does SEO usually take?',
    answer: 'Google says some changes take effect in a few hours and others take several months, and suggests waiting a few weeks before judging a change. For a small business, technical fixes and Google Business Profile work can show up within weeks. New service pages usually take a few months to settle. Competitive searches in big cities can take much longer.' },
  { category: 'results', question: 'What results should a small business expect from SEO in the first year?',
    answer: 'In a sensible first year you should see the basics fixed in the first month or two, more impressions and map views as pages and your profile improve, and then more calls, forms and bookings from search in the second half of the year. How far it goes depends on your competitors. Nobody can promise a position, but anyone you pay should be able to say what they expect and by when.' },
  { category: 'results', question: 'How will I know if SEO is working?',
    answer: 'Look at enquiries first, then the signals that lead to them. Count calls, forms and bookings that came from Google, using call tracking or a form field. In Google Search Console, watch impressions and clicks for the searches that matter to you. In your Google Business Profile, watch calls, direction requests and website clicks. Rankings on their own can mislead, because you can rank first for a search nobody makes.' },

  // ── Choosing ──
  { category: 'choosing', question: 'Which SEO company is the best in Australia?',
    answer: 'There is no single best one. The best SEO company for a small business is the one that measures your market before quoting, explains in plain English what it will do first, reports on enquiries rather than vanity rankings, and leaves everything in your name. For a local or niche small business, a smaller team that does the basics well is often the better fit.' },
  { category: 'choosing', question: 'How to pick an SEO agency?',
    answer: 'Ask the questions Google itself suggests: can they show examples of past work, do they follow Google Search Essentials, what results do they expect and in what timeframe, what is their experience in your industry and your city, and how will they communicate with you. Then add three of your own: who owns the accounts and content, can I leave without a penalty, and what exactly happens in month one.' },
  { category: 'choosing', question: 'Can an SEO company guarantee first page rankings?',
    answer: 'No. Google says plainly that no one can guarantee a number one ranking on Google, and warns against SEOs who claim a special relationship with Google. A company that guarantees page one is either choosing searches nobody makes or taking a risk with your site. We commit to the work we will do, when it will be done and how we will report, not to a position Google decides.' },
  { category: 'choosing', question: 'What should be in an SEO contract for a small business?',
    answer: 'The work included each month, the reporting you get, who owns the website, content, Google Business Profile and analytics accounts, how either side can end the agreement, and what happens to your data when it ends. Watch for long lock-ins, automatic renewals and terms only one side can change. Since 9 November 2023, the ACCC says unfair terms in standard form contracts with small businesses are banned and penalties can apply.' },
  { category: 'choosing', question: 'Do you work with small businesses outside Sydney and Melbourne?',
    answer: 'Yes. We work remotely with small businesses anywhere in Australia, including Brisbane, Perth, Adelaide, Canberra, Hobart, Darwin and regional towns, in Australian business hours. We do not have an Australian office, and we say so. For local searches, what matters is your own business address, service area and reviews, not where your SEO team sits, so the work is the same wherever you are.' },

  // ── DIY and AI ──
  { category: 'diy', question: 'Can I do my own SEO for my business?',
    answer: 'Yes, a lot of it. Most owners can complete their Google Business Profile, ask for reviews, set up Google Search Console and write clear service pages in their own words. Where owners usually get stuck is technical problems, choosing which searches to target, and earning links. Many small businesses do the basics themselves and pay for help only with those parts.' },
  { category: 'diy', question: 'Can ChatGPT do SEO?',
    answer: 'ChatGPT can help with parts of it: drafting page outlines, suggesting questions customers ask and tidying your writing. It cannot see your Search Console data, check what your competitors rank for today, fix your website or earn links for you, and it sometimes states things that are wrong. Use it as a writing assistant, then check every fact and make the page sound like your business, not a template.' },
  { category: 'diy', question: 'Is SEO dead now with AI?',
    answer: 'No. AI answers from ChatGPT, Perplexity and Google’s AI Overviews still draw on websites, and they tend to cite pages that are clear, specific and trusted. The basics of SEO, a readable site, strong service pages, reviews and genuine mentions, are also the basics of being named in AI answers. What is fading is thin content written only for keywords. For AI visibility on top of SEO, see our AI SEO page.' },
  { category: 'diy', question: 'What are some common SEO mistakes?',
    answer: 'The common ones for small businesses: one page trying to rank for every service, a Google Business Profile with the wrong main category, no reviews for months, a site rebuild that loses old pages without redirects, buying links, copying competitors’ text, and judging success on rankings instead of enquiries. Another is paying a monthly retainer before the basic technical problems are fixed, so the new work sits on a site Google struggles to read.' },
];

/* ─── Named options in the Australian market (open self-disclosure, ItemList).
       Each note is based on the company’s own website, fetched 2026-09-26. ── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We measure search demand and competitor strength before quoting, fix the basics first, write service pages for real Australian searches, and leave every account in your name. We work remotely in Australian business hours and do not have an Australian office. Founder involved on every project.' },
  { name: 'StudioHawk', note: 'A specialist SEO and AI search agency with an office in Prahran, Melbourne. Its site lists small business SEO alongside local, ecommerce and enterprise SEO.' },
  { name: 'Digital Nomads HQ', note: 'A digital marketing agency with its head office in Mooloolaba on the Sunshine Coast, Queensland. Its site lists SEO, pay per click, social media and web design, and names small business and trades among the industries it serves.' },
  { name: 'Safari Digital', note: 'A specialist Australian SEO agency on York Street, Sydney. Its site lists small business SEO, local SEO and industry SEO services, including for accountants.' },
  { name: 'Supple Digital', note: 'A Melbourne digital marketing agency in Richmond, Victoria. Its site lists SEO services, keyword research, link building and Google penalty recovery.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Small Business SEO Australia',
      serviceType: 'Search engine optimisation for small businesses: audit and fixes, Google Business Profile, service pages, reviews and links, reporting',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'SEO for Australian small businesses, scoped in stages: a technical and local check first, then Google Business Profile, service pages for real searches, reviews and earned links. Reported on enquiries, with every account kept in the client’s name.',
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
      name: 'SEO companies Australian small businesses compare',
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
      'What an Australian small business should buy from an SEO company, in what order, and what to expect by month. Scoped in stages, reported on enquiries, owned by you.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: SEO company for small business in Australia' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* The four things to buy, in order. */
const BUY_ORDER: { t: string; d: string }[] = [
  { t: 'Fix the foundations', d: 'A technical and local check of the site you already have: can Google read every page, is it fast on a phone, is Search Console set up, are old pages redirected. These fixes are one-off, cheap compared with a retainer, and often the biggest early win.' },
  { t: 'Get found locally', d: 'A complete Google Business Profile with the right main category, service areas, photos and a steady habit of asking for reviews. For any business that serves customers in a town or city, this is where most search enquiries start.' },
  { t: 'One page per service', d: 'A clear page for each main service, written with the words customers actually type, answering price, area and timing questions. One page trying to rank for everything is the most common reason small business sites stall.' },
  { t: 'Earn mentions and links', d: 'Links and mentions from real local, supplier, industry and community websites. This is the slow, ongoing part, and the part worth paying for only once the first three are done. Never bought links.' },
];

/* Icons and visual-slot subjects for the four cards (same order as BUY_ORDER). */
const BUY_ICONS = [
  'M4 20h16M6 20V10l6-5 6 5v10M10 20v-5h4v5',
  'M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10Zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  'M6 3h9l3 3v15H6V3Zm3 7h6M9 13h6M9 16h4',
  'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
] as const;
const BUY_SUBJECTS = [
  'AI-generated model: a small white house-shaped website on a workbench with an orange spanner tightening its foundation',
  'AI-generated model: a white paper map of an Australian suburb with one orange pin and a row of small review stars',
  'AI-generated model: a neat row of white page cards, each with one orange tab naming a single service',
  'AI-generated model: white cards for a local newspaper, a supplier and a trade association joined to one orange card by thin threads',
] as const;

/* "Where is your business now?" self-check. Rendered as <details>, no client component. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'We are new, the website is basic and hardly anyone finds us.', verdict: 'Foundations and local first', a: 'Do not buy a monthly retainer yet. Fix the site basics, finish your Google Business Profile and write a page for each service. Much of that you can do yourself with a checklist. If the site itself is the problem, a small rebuild may be the better first spend.' },
  { q: 'We get some calls from Google, but competitors show up above us.', verdict: 'Audit, then a focused monthly plan', a: 'You have something working. An audit shows why competitors outrank you: usually more reviews, better service pages or more local mentions. Then a monthly plan works on the gaps, one service and area at a time, reported on enquiries.' },
  { q: 'We tried an SEO company before and got reports but no enquiries.', verdict: 'Check what was actually done', a: 'Ask for a list of every change made to your site and profile, and every link built. Often very little changed. Start again from an audit, keep every account in your name, and judge the next provider on enquiries, not rankings.' },
  { q: 'We need enquiries this month, not in six months.', verdict: 'Google Ads first, SEO alongside', a: 'SEO takes time to build. Google Ads can bring enquiries now while the SEO basics are fixed underneath. The ads data also shows which searches turn into customers, which tells the SEO work where to aim.' },
];

/* What each budget stage should buy. No prices: numbers live in the cost guide. */
const STAGES: { stage: string; buy: string; skip: string; you: string }[] = [
  { stage: 'Just starting', buy: 'One-off audit and fixes, Google Business Profile setup, service pages', skip: 'Monthly retainers, blog content, paid link building', you: 'Ask for reviews, add photos, answer enquiries fast' },
  { stage: 'Some traction', buy: 'Focused monthly work on the searches that bring buyers, area pages, local mentions', skip: 'National keywords you cannot win yet, directory blasts', you: 'Send us real customer questions, keep reviews coming' },
  { stage: 'Ready to grow', buy: 'Ongoing content for more services and areas, earned links, AI search visibility', skip: 'Anything reported only as rankings or traffic', you: 'Approve pages quickly, share sales data so we see what converts' },
];

/* Realistic first-year shape. Not a promise: a way to judge any plan. */
const YEAR_ONE: { m: string; n: string; t: string }[] = [
  { m: 'Month 1', n: 'audit, fixes, Search Console, profile', t: 'Foundations' },
  { m: 'Months 2 to 3', n: 'service pages live, reviews building', t: 'First signs' },
  { m: 'Months 4 to 6', n: 'more impressions and map views, early rankings', t: 'Traction' },
  { m: 'Months 7 to 12', n: 'enquiries from search become steady', t: 'Results' },
  { m: 'Every month', n: 'calls, forms and bookings from Google', t: 'Measured' },
];

/* How we work with a small business. */
const STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Free review', d: 'A short call and a look at your site, Google Business Profile and competitors. We tell you whether SEO is worth it for you right now, and what to fix first.' },
  { n: '02', t: 'Measure the market', d: 'We check how many people search for each service in your area and how strong the businesses on page one are. That sets what is realistic and what it is worth spending.' },
  { n: '03', t: 'Fix the basics', d: 'Technical fixes, Search Console, redirects, speed and your Google Business Profile, done as a one-off stage with a list of every change.' },
  { n: '04', t: 'Build the pages', d: 'One strong page per main service and area, written with you so it sounds like your business, with clear ways to call or book.' },
  { n: '05', t: 'Report on enquiries', d: 'A monthly plain-English report on calls, forms and bookings from search, what we did, and what is next. You can stop after any month.' },
];

const CONTRACT_CHECKS: { t: string; d: string }[] = [
  { t: 'Month one in writing.', d: 'Exactly what changes on your site and profile in the first month.' },
  { t: 'Your accounts, your name.', d: 'Website, domain, Search Console, Analytics and Google Business Profile all owned by you.' },
  { t: 'A way out.', d: 'You can end the agreement on reasonable notice without a penalty.' },
  { t: 'No one-sided changes.', d: 'Price or scope cannot change without your agreement or a right to leave.' },
  { t: 'No guaranteed rankings.', d: 'Google says no one can guarantee a number one ranking.' },
  { t: 'No bought links.', d: 'Links bought to manipulate rankings break Google’s spam policies.' },
  { t: 'Reports on enquiries.', d: 'Calls, forms and bookings, not just rankings and traffic.' },
  { t: 'Content you keep.', d: 'Pages written for you stay on your site if you leave.' },
];

const INDUSTRIES: { href: string; t: string; d: string }[] = [
  { href: '/au/websites-for-tradies', t: 'Tradies', d: 'Electricians, plumbers and builders: service and suburb pages, Google Business Profile and reviews first.' },
  { href: '/au/dental-website-design', t: 'Dental practices', d: 'Treatment pages, local search and online booking for dental clinics.' },
  { href: '/au/law-firm-seo', t: 'Law firms', d: 'Practice area pages and local visibility for small and mid-size firms.' },
  { href: '/au/accountant-website-design', t: 'Accountants', d: 'Websites and SEO for accounting and bookkeeping practices.' },
  { href: '/au/ndis-website-design', t: 'NDIS providers', d: 'Accessible websites and search visibility for NDIS providers.' },
  { href: '/au/real-estate-websites', t: 'Real estate agencies', d: 'Agency websites, suburb pages and property SEO.' },
  { href: '/au/ecommerce-seo', t: 'Online stores', d: 'Collection and product pages, Google Shopping and migrations for small online shops.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/seo', t: 'SEO services Australia', d: 'Our full SEO service: technical SEO, audits, content, links and ecommerce SEO for businesses of every size.' },
  { href: '/au/local-seo', t: 'Local SEO', d: 'Google Business Profile, map pack visibility, reviews and local citations, in depth.' },
  { href: '/au/small-business-web-design', t: 'Small business web design', d: 'A fast site built to be found, with 7-day delivery for websites up to 5 pages.' },
  { href: '/au/ai-seo', t: 'AI SEO and GEO', d: 'Getting named in ChatGPT, Perplexity and Google AI Overviews, built on the same SEO basics.' },
  { href: '/au/website-maintenance', t: 'Website maintenance', d: 'Updates, backups, security and speed, so the SEO work is not undone.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian businesses: websites, ecommerce, SEO and AI agents.' },
];

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'small-business-seo';

/* H1 is rendered byte-identical: lead + emphasis split on ': '. */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function SmallBusinessSeoAUPage() {
  return (
    <>
      <script id="ld-au-small-business-seo" type="application/ld+json"
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

        {/* ═══ HERO (copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Small Business SEO Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                SEO for small business works when you pay for the right things in the right order. FactoryJet checks
                your site, your Google Business Profile and your competitors first, fixes what is holding you back,
                then builds pages for the searches that bring buyers. We report on calls, forms and bookings, and
                every account stays in your name.
              </p>
              <HeroInlineForm region="au" source="au_small_business_seo_hero" submitLabel="Get my free SEO review" />
            </div>

            <form
              className="specpanel"
              aria-label="What a small business should buy from an SEO company, in order"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The order a small business should buy SEO in: fix the foundations, get found locally, one page per service, then earn mentions and links"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>IN ORDER · WHAT TO BUY ON A SMALL BUDGET</span>
                <span className="sys"><span>AUDIT</span><span>LOCAL</span><span>PAGES</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore the buying order">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="sbseo-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={BUY_ICONS[0]} /></svg></span>
                  <span className="idx">technical and local check</span>
                  <span className="title">Fix the foundations</span>
                  <span className="tag">One-off</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="sbseo-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={BUY_ICONS[1]} /></svg></span>
                  <span className="idx">google business profile and reviews</span>
                  <span className="title">Get found locally</span>
                  <span className="tag">Weeks</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="sbseo-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={BUY_ICONS[2]} /></svg></span>
                  <span className="idx">the words customers type</span>
                  <span className="title">One page per service</span>
                  <span className="tag">Months</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="sbseo-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={BUY_ICONS[3]} /></svg></span>
                  <span className="idx">local, supplier and industry sites</span>
                  <span className="title">Earn mentions and links</span>
                  <span className="tag">Ongoing</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Pay for the fixes before you pay for a retainer.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: 'No one', t: 'can guarantee a number one ranking on Google, in Google’s own words', s: 'Google, Do you need an SEO?', u: SRC_GOOGLE_HIRE },
              { v: 'A few weeks', t: 'is how long Google suggests waiting before judging whether a change worked', s: 'Google SEO Starter Guide', u: SRC_STARTER },
              { v: 'Protected', t: 'small businesses under 100 staff or $10 million turnover, against unfair standard contract terms', s: 'ACCC, contracts', u: SRC_ACCC_CONTRACTS },
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
              <h2 data-speakable="true">What should a small business buy from an SEO company?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">A small business should buy SEO in four steps: fix the website basics, complete its Google
                    Business Profile, write one clear page for each service, then earn links and mentions.</span> The first
                    two are mostly one-off work and often bring the fastest results. Monthly SEO only makes sense once
                    they are done, and only for searches that bring paying customers.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms, in plain English</div>
                    <p>
                      <b>SEO</b> (search engine optimisation) is the work that helps your business show up in Google
                      without paying per click. Your <b>Google Business Profile</b> is the free listing that shows your
                      business on Google Maps and in the map results. A <b>retainer</b> is a monthly fee for ongoing work,
                      which is how most SEO companies charge.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most small business SEO pages tell you what an agency does. Few tell you what to buy first, what to
                    skip, what to do yourself, or what should have happened by month six. That is what this page covers.
                    For the numbers, our <a href="/blog/seo-cost-australia-2026">SEO cost guide for Australia</a> lists
                    typical market ranges with sources.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="The owner of a small Australian cafe or trade business at a counter, looking at her Google Business Profile and website enquiries on a laptop that faces her, no text or logos visible" />
            </div>
          </div>
        </section>

        {/* ═══ SCOPE: this page vs /au/seo vs /au/local-seo → ruled rows ═══ */}
        <section className="section platforms" id="scope">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Which page you need</div>
                <h2>This page is about buying SEO on a small budget</h2>
              </div>
              <p>
                If you want the full list of SEO services we offer, from technical audits to ecommerce SEO, read our{' '}
                <a href="/au/seo">SEO services in Australia</a> page. If your main goal is the Google Maps results, read{' '}
                <a href="/au/local-seo">local SEO</a>. This page is for small business owners deciding what to pay for,
                in what order, and what to expect.
              </p>
            </div>
            <div className="eyebrow plat-label">Quick guide</div>
            <div className="platlist" role="list">
              <div className="plat plat-own" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>What to buy first, budget and timelines</h3></div><p className="plat-build">small business owners</p><p className="plat-fit">This page</p></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Showing up on Google Maps</h3></div><p className="plat-build">shops, clinics, trades</p><p className="plat-build"><a href="/au/local-seo">Local SEO</a></p></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Every SEO service we offer</h3></div><p className="plat-build">any size of business</p><p className="plat-build"><a href="/au/seo">SEO services</a></p></div>
            </div>
          </div>
        </section>

        {/* ═══ THE BUYING ORDER → capgrid + grouped lists ═══ */}
        <section className="section capabilities" id="what-to-buy">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What to buy, in order</div>
              <h2>The four things a small business should pay for, in the order that pays back</h2>
              <p className="lead">
                Plenty of small businesses sign a monthly retainer first, then find out months later that their site
                had problems no amount of new content could fix. Buy in this order instead, and stop at any step that
                is not paying back.
              </p>
            </div>
            <div className="capgrid">
              {BUY_ORDER.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={BUY_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={BUY_SUBJECTS[i]} />
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑01</span><h3>Do it yourself, free</h3></div>
              <ul className="chg-list">
                <li><span><b>Asking for reviews.</b> Nobody can do this for you, and it matters more than most paid work.</span></li>
                <li><span><b>Photos and updates on your profile.</b> Real photos of your work, team and premises.</span></li>
                <li><span><b>Answering enquiries fast.</b> SEO brings the enquiry; a slow reply loses it.</span></li>
                <li><span><b>Telling us what customers ask.</b> The best page content comes from real questions.</span></li>
              </ul>
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑02</span><h3>Skip for now</h3></div>
              <ul className="chg-list">
                <li><span><b>Hundreds of directory listings.</b> A handful of accurate, relevant ones is enough.</span></li>
                <li><span><b>Blog posts before service pages.</b> Articles rarely bring enquiries until the service pages are strong.</span></li>
                <li><span><b>National keywords.</b> If you serve one city, rank in that city first.</span></li>
                <li><span><b>Bought links and link packages.</b> They break Google’s spam policies and can hurt your site.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ WHERE ARE YOU NOW (<details>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Where is your business now?</div>
              <h2>A 30-second check: what your business should buy next</h2>
              <p>Tap the line that sounds most like you. The answer is honest, even when it is not paid SEO.</p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="An Australian tradesperson in a work ute checking a new customer enquiry on his phone, screen facing him, no readable text or logos" />
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

        {/* ═══ BUDGET STAGES TABLE ═══ */}
        <section className="section" id="budget-stages">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Small budget, bigger budget</div>
              <h2>What each budget stage should buy, skip and do in-house</h2>
              <p className="lead">
                Budget is less about the monthly figure and more about what stage your business is at.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th className="fj">Buy</th>
                    <th>Skip</th>
                    <th>You do</th>
                  </tr>
                </thead>
                <tbody>
                  {STAGES.map((r) => (
                    <tr key={r.stage}>
                      <th scope="row">{r.stage}</th>
                      <td className="fj">{r.buy}</td>
                      <td>{r.skip}</td>
                      <td>{r.you}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              For typical Australian market prices at each level, with sources and GST notes, see{' '}
              <a href="/blog/seo-cost-australia-2026">how much SEO costs in Australia (2026)</a>. We do not publish a
              price list: we scope each stage after a free review, with a fixed price for one-off work.
            </p>
          </div>
        </section>

        {/* ═══ RESULTS TIMELINE → facts + trigrows ═══ */}
        <section className="section facts" id="results">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What to expect, and when</div>
              <h2>How long SEO takes for a small business, month by month</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Google’s own SEO Starter Guide says some changes take effect in a few hours and others take several
                  months, and suggests waiting a few weeks before judging whether a change worked. That matches what we
                  see: fixes and profile work show up first, new pages take longer, and competitive city searches take
                  longest.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The shape below is not a promise. It is a way to judge any SEO plan, including ours. Ask any
                  provider for milestones like these in writing before you start.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <div className="factlabel">A realistic first year</div>
                  <ul className="trigrows">
                    {YEAR_ONE.map((r) => (
                      <li key={r.m}><span className="m">{r.m}</span><span className="n">{r.n}</span><span className="t">{r.t}</span></li>
                    ))}
                  </ul>
                  <p className="au-note">
                    Source for timing guidance: <a href={SRC_STARTER} {...extLink}>Google SEO Starter Guide</a>.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="illustration" ratio="3:2" className="factphoto"
                subject="AI-generated model: a white wall calendar for twelve months with small orange markers growing taller from month one to month twelve, no text" />
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON: package vs scoped plan ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>A cheap SEO package vs a scoped small business SEO plan vs doing it yourself</h2>
                <p className="lead">
                  The three routes most small businesses weigh up. This compares what you get, not the price.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Scoped plan (FactoryJet)</th>
                    <th>Fixed monthly package</th>
                    <th>Do it yourself</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Starts with</th><td className="fj">Audit of your site, profile and competitors</td><td>The same tasks for every client</td><td>Whatever you learn first</td></tr>
                  <tr><th scope="row">Month one</th><td className="fj">Fixes listed and done</td><td>Often setup and a report</td><td>Your spare evenings</td></tr>
                  <tr><th scope="row">Work sized to your market</th><td className="fj">Yes, measured first</td><td>Rarely</td><td>If you research it</td></tr>
                  <tr><th scope="row">Reports on</th><td className="fj">Calls, forms and bookings</td><td>Rankings and traffic</td><td>What you track</td></tr>
                  <tr><th scope="row">Links</th><td className="fj">Earned from real sites</td><td>Sometimes bought or bulk listings</td><td>Your own contacts</td></tr>
                  <tr><th scope="row">Accounts owned by</th><td className="fj">You</td><td>Check the contract</td><td>You</td></tr>
                  <tr><th scope="row">Leaving</th><td className="fj">Stop after any stage</td><td>Often a fixed term</td><td>Not applicable</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Comparing prices? Our <a href="/blog/seo-cost-australia-2026">SEO cost guide</a> covers packages,
              retainers and one-off audits with sourced Australian ranges.
            </p>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (placeholder for the visual pass) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a row of small white shopfronts along an Australian high street, one with an orange awning and a small map pin above it" />

        {/* ═══ HOW WE WORK → process timeline (five steps) ═══ */}
        <section className="section process" id="how-we-work">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we work with small businesses</div>
                <h2>Five steps, and you can stop after any of them</h2>
                <p className="lead">
                  Every stage has a clear end, a list of what changed and a decision point. You never sign up for a
                  year of work you cannot see.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A small business owner in an Australian home office on a video call with a FactoryJet SEO specialist, both looking at a shared search report on the laptop screen facing her" />
            </div>
            <div className="timeline">
              {STEPS.map((s) => (
                <div key={s.n} className="tnode">
                  <div className="idx">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Not sure what your business should buy first?'}
            sub={'Send us your website. On a short call with the founder, we will tell you what is holding you back in Google, what you can fix yourself, and whether paid SEO is worth it for you right now.'}
            label={'Get my free SEO review'}
          />
        </div>

        {/* ═══ BY INDUSTRY → definition module ═══ */}
        <section className="definition" id="industries">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A collage-style photo of three Australian small business owners at work: an electrician, a dentist at reception and an accountant at a desk, screens facing the people using them, no text or logos" />
          </div>
          <div className="definition-copy">
            <div className="eyebrow">By industry</div>
            <h2>Small business SEO for tradies, clinics, law firms, accountants and online stores</h2>
            <p>
              The buying order stays the same in every industry. What changes is where enquiries come from. A
              plumber lives or dies by the map results and reviews. A law firm or accounting practice needs strong
              practice area pages. An online store needs collection and product pages more than a map listing.
            </p>
            <ul className="chg-list">
              {INDUSTRIES.map((s) => (
                <li key={s.href}><span><b><a href={s.href}>{s.t}.</a></b> {s.d}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ CONTRACTS AND YOUR RIGHTS → facts + checklist panel + ruled rows ═══ */}
        <section className="section facts" id="contracts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Before you sign</div>
              <h2>SEO contracts, guarantees and your rights as an Australian small business</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Nobody can promise a ranking.</b> Google says no one can guarantee a number one ranking on Google,
                  and warns about SEO firms that email you out of the blue, claim a special relationship with Google,
                  or will not clearly explain what they intend to do. Treat any page-one guarantee as a red flag.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Bought links can hurt you.</b> Google’s spam policies describe link spam as creating links
                  primarily to manipulate search rankings. Cheap link packages are the most common source of it, and
                  your website carries the risk, not the seller’s.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Unfair contract terms.</b> The ACCC says changes to the unfair contract terms law took effect on
                  9 November 2023, banning unfair terms in standard form contracts and allowing penalties. Small
                  businesses with fewer than 100 employees or less than $10 million annual turnover are covered. Terms
                  that let only one side end the contract or change the terms may be unfair.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>Consumer guarantees can apply to you.</b> The ACCC says a business counts as a consumer when a
                    service costs less than $100,000 including GST. Services must then be provided with acceptable care
                    and skill, be fit for any stated purpose, and be supplied within a reasonable time if no time frame
                    was agreed.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_GOOGLE_HIRE} {...extLink}>Google Search Central, Do you need an SEO?</a>;{' '}
                    <a href={SRC_SPAM} {...extLink}>Google spam policies</a>;{' '}
                    <a href={SRC_ACCC_CONTRACTS} {...extLink}>ACCC, contracts and unfair contract terms</a>;{' '}
                    <a href={SRC_ACCC_GUARANTEES} {...extLink}>ACCC, consumer rights and guarantees</a>.
                    This is general information, not legal advice.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">8 checks before you sign any SEO agreement</div>
                <ol className="au-numlist">
                  {CONTRACT_CHECKS.map((s) => (
                    <li key={s.t}><span><b>{s.t}</b> {s.d}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ENGAGEMENT SHAPES + DEMAND → ruled rows + split ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>How we scope SEO for a small business, and what people search for</h2>
              </div>
              <p>
                Every engagement is quoted for your scope after a free review: an audit and fix stage at a fixed
                price, then monthly work only if it is worth it, with no lock-in.
              </p>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the scope: how many services and areas you cover, how strong the businesses on page one
                  are, the state of your website, and how much you want to do yourself. For typical Australian market
                  ranges, see our <a href="/blog/seo-cost-australia-2026">SEO cost guide</a>. If your website needs
                  rebuilding first, see <a href="/au/small-business-web-design">small business web design</a>.
                </p>
                <ModalCTAButton label="Get my free SEO review" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'seo company for small business', v: '590', w: '100%', kd: 'The head term' },
                    { kw: 'seo for small business', v: '480', w: '81%', kd: 'Owners researching' },
                    { kw: 'seo packages for small business', v: '210', w: '36%', kd: 'Comparing packages' },
                    { kw: 'small business seo agency', v: '170', w: '29%', kd: 'Ready to hire' },
                    { kw: 'affordable seo services for small businesses', v: '90', w: '15%', kd: 'Budget first' },
                    { kw: 'small business seo australia', v: '30', w: '5%', kd: 'Local wording' },
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

        {/* ═══ PROVIDER LIST (self-disclosure, ItemList from PROVIDERS) → ruled rows ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>SEO companies Australian small businesses compare</h2>
              </div>
              <p>
                We are one option, not the only one. These are Australian SEO agencies that come up when small
                businesses search for SEO help or ask AI assistants which agency to use. Each note is based on what the
                company says on its own website.
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
              Agencies named from live Australian search results and AI assistant answers for small business SEO
              queries, September 2026. Notes reflect each company’s own website on 26 September 2026. Listing is not
              endorsement.
            </p>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related services</div>
              <h2>The rest of what we do for Australian small businesses</h2>
              <p>
                SEO works best on a site built to be found and kept in good shape. These are the services small
                businesses usually pair with it, built and supported by the same team.
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
          heading="Small business SEO questions Australian owners actually ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Find out what your business should buy first</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                website, your Google Business Profile and your competitors, and tells you honestly whether SEO is worth
                paying for right now. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Get my free SEO review" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/blog/seo-cost-australia-2026">Read the SEO cost guide</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Websites, ecommerce, SEO and AI agents for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

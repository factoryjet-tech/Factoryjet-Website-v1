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

const CANONICAL = 'https://factoryjet.com/au/local-seo';
const UPDATED = '2026-09-26';
const TITLE = 'Local SEO Services Australia | Google Maps SEO | FactoryJet';
/* Visible hero heading AND schema headline: keep them the same text. */
const H1 = 'Local SEO Services in Australia: Get Found by Nearby Customers';
const DESCRIPTION =
  'Local SEO services for Australian businesses: Google Business Profile fixes, reviews within ACCC rules, consistent citations and service-area pages that rank.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. Never
   hand-copy a second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Local SEO', url: CANONICAL },
];

/* ─── External sources, all fetch-verified 2026-09-26 ───────────────── */
// Google Business Profile Help, "Tips to improve your local ranking on Google":
// "There's no way to request or pay for a better local ranking on Google."
// "Local results are mainly based on relevance, distance, and popularity."
// Prominence "means how well-known a business is" and is "also based on info like
// how many websites link to your business and how many reviews".
const SRC_LOCAL_RANK = 'https://support.google.com/business/answer/7091?hl=en';
// Google Business Profile Help, "Guidelines for representing your business on Google":
// virtual office "isn't eligible for a Business Profile"; "If you're a service-area
// business, you should hide your business address from customers"; service area
// "shouldn't extend farther than about 2 hours of driving time"; name "should reflect
// your business's real-world name"; "Including unnecessary information in your business
// name isn't permitted, and could result in the suspension of your Business Profile."
const SRC_GBP_GUIDE = 'https://support.google.com/business/answer/3038177?hl=en';
// Google Maps user contributed content policy, fake engagement: merchants may not
// "Offer incentives ... in exchange for posting any review" or "Discourage or prohibit
// negative reviews, or selectively solicit positive reviews from customers".
const SRC_GOOGLE_FAKE = 'https://support.google.com/contributionpolicy/answer/7400114?hl=en';
// Google Business Profile Help, report inappropriate reviews: "If you find a review on
// your Business Profile that violates Google policies, you can report it for removal";
// "only those that violate Google policies are eligible for removal."
const SRC_GOOGLE_REPORT = 'https://support.google.com/business/answer/4596773?hl=en';
// Google Business Profile Help, owners and managers: managers "can't add or remove
// users or remove the profile".
const SRC_GBP_USERS = 'https://support.google.com/business/answer/3403100?hl=en';
// Google Business, AU/NZ: "Yes, creating a Business Profile and listing your business
// on Google is free."
const SRC_GBP_FREE = 'https://business.google.com/aunz/business-profile/';
// ACCC, Online reviews for product and services: "It's against the law for a business
// to create fake or misleading reviews or to arrange for others to do so." Incentives
// "must be: applied regardless of whether the reviewer leaves a positive or negative
// review [and] clearly disclosed"; businesses must not "suppress or edit negative
// reviews" or "remove genuine reviews that are negative"; reviews by family, employees
// or paid people without disclosure are misleading.
const SRC_ACCC_REVIEWS = 'https://www.accc.gov.au/business/advertising-and-promotions/online-reviews-for-product-and-services';
// Google Search Central spam policies, doorway abuse: "Having multiple domain names or
// pages targeted at specific regions or cities that funnel users to one page".
const SRC_DOORWAY = 'https://developers.google.com/search/docs/essentials/spam-policies';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'Local SEO basics' },
  { key: 'profile', label: 'Google Business Profile & Maps' },
  { key: 'reviews', label: 'Reviews & citations' },
  { key: 'hiring',  label: 'Cost & choosing an agency' },
  { key: 'where',   label: 'Cities, offices & AI search' },
] as const;

const FAQ_ITEMS: {
  category: string;
  question: string;
  answer: string;
  links?: { href: string; label: string }[];
}[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is local SEO vs SEO?',
    answer: 'SEO is the work of getting your website found in Google’s ordinary results for any search. Local SEO is the part that deals with searches tied to a place, like “plumber Parramatta” or “dentist near me”. It covers your Google Business Profile, the map results, reviews, your business details on directories, and pages about the areas you serve. A business that sells to people nearby needs both, but local SEO usually pays back first.' },
  { category: 'basics', question: 'Does local SEO still work?',
    answer: 'Yes. Google still shows a map with three businesses for most searches that involve a service and a place. In our September 2026 check, a map pack appeared on every Australian search we ran for local SEO services, agencies and companies. What decides who gets in is still relevance, distance and prominence, and Google’s guidelines are strict: shortcuts like a keyword-stuffed business name can get a profile suspended.' },
  { category: 'basics', question: 'Is doing a local SEO worth it?',
    answer: 'It is worth it when your customers come from a defined area and search before they buy: trades, clinics, lawyers, accountants, real estate, cafés and most service businesses. It is less useful for a purely online store that ships nationally. The first steps, like verifying and completing your Business Profile, cost nothing but time, so start there and pay for help only if you stay invisible.' },
  { category: 'basics', question: 'Can I do local SEO myself?',
    answer: 'Yes, and many small businesses should try first. Google says a Business Profile is free to create, and the basics take a few hours. Where people get stuck is verification problems, suspensions, duplicate listings, competitors outranking them with a stronger website, or not having time to keep reviews and posts going. That is the point where a local SEO specialist saves more than they cost.' },
  { category: 'basics', question: 'How long does local SEO take to work?',
    answer: 'Profile fixes such as the right category, correct details and a hidden home address can change what shows up within weeks. Reviews, citations and service pages build up over months, not weeks. Competitive city searches, where the leaders have hundreds of reviews and strong websites, take longer. We tell you at the start which searches are realistic, based on who holds the top spots now.' },

  // ── Profile ──
  { category: 'profile', question: 'What does Google Business Profile Optimization do?',
    answer: 'It makes your profile match what people search for and what Google trusts. That means the most specific primary category, accurate services and service areas, hours including public holidays, real photos of your work and premises, a description in plain words, and questions answered. Google says local results depend on relevance, distance and prominence, and optimisation works on the two you can change.' },
  { category: 'profile', question: 'Is Google Business Profile Manager free?',
    answer: 'Yes. Google says creating a Business Profile and listing your business on Google is free. There is no paid tier that ranks you higher, and Google says there is no way to pay for a better local ranking. What costs money is the time to manage it well, or help from someone who does that for you. Ads that appear above the map are a separate, paid product.' },
  { category: 'profile', question: 'Is there a difference between Google My Business and Google Business Profile?',
    answer: 'No, it is the same product with a new name. Google My Business was renamed Google Business Profile. Older guides, agencies and invoices still say “GMB”. If you see either name, it means the listing that shows your business on Google Maps and in local results.' },
  { category: 'profile', question: 'How do I change who manages my Google Business Profile?',
    answer: 'An owner of the profile adds or removes people in the profile’s settings. Google says managers can do most things but cannot add or remove users or remove the profile, so make sure the business itself holds owner access, not a past web designer or agency. If you have lost access, you can request it through Google. We always work as a manager on your profile, and you stay the owner.' },
  { category: 'profile', question: 'Can I pay Google to rank higher?',
    answer: 'No. Google says there is no way to request or pay for a better local ranking. You can pay for Google Ads, including ads that appear in and above the map results, but those are labelled as sponsored and stop when the budget stops. The unpaid map positions come from relevance, distance and prominence: your profile, your reviews, your website and how well known your business is.' },

  // ── Reviews & citations ──
  { category: 'reviews', question: 'How do I get more reviews on Google?',
    answer: 'Ask every customer, at the moment they are happiest, with a direct link to your review form. Put the link in your invoice email, your booking confirmation and a text after the job. Reply to every review, good or bad. Google allows you to encourage genuine reviews without incentives. What it does not allow is selectively asking only the customers you expect to be positive, and the ACCC says fake or misleading reviews are against the law.' },
  { category: 'reviews', question: 'Can companies get rid of bad Google reviews?',
    answer: 'Not simply because they are bad. Google says only reviews that break its policies, such as fake reviews, spam or conflicts of interest, are eligible for removal, and you report them from your profile. The ACCC says removing or suppressing genuine negative reviews can mislead consumers. The better move is a calm, specific public reply, which future customers read as much as the review itself.' },
  { category: 'reviews', question: 'What are local citations in SEO?',
    answer: 'A local citation is any mention of your business name, address and phone details or website on another site: directories, industry bodies, suppliers, local chambers and maps apps. Citations help Google confirm your business is real and where it is. The detail that matters most is consistency. Old addresses, former business names and duplicate listings confuse both Google and customers, so we fix those before adding new ones.' },
  { category: 'reviews', question: 'What are some good local citations sites in Australia?',
    answer: 'Start with the maps and data sources that feed other apps: Google Business Profile, Apple Business Connect and Bing Places. Then the main Australian directories such as True Local, Yellow Pages, Hotfrog and StartLocal, plus sites specific to your trade or profession, like an industry association listing. A handful of accurate, relevant listings beats hundreds of low-quality ones from a bulk submission package.' },

  // ── Hiring ──
  { category: 'hiring', question: 'How much should I pay for local SEO?',
    answer: 'It depends on how many locations you have, how competitive your area and service are, and whether your website also needs work. A single-location tradie in a regional town needs far less than a multi-clinic group in Sydney. We quote a fixed scope after looking at your profile and competitors. Our SEO cost guide lists typical Australian market ranges with sources, including monthly retainers.',
    links: [{ href: '/blog/seo-cost-australia-2026', label: 'SEO cost in Australia (2026)' }] },
  { category: 'hiring', question: 'How to pick an SEO company?',
    answer: 'Ask for before-and-after map rankings from clients like you, measured across a service area. Check they will work as a manager on your profile while you stay the owner. Ask how they get reviews; any answer involving incentives or selective asking is a red flag. Ask what they report each month: calls, direction requests and enquiries, not just rankings. And avoid long lock-ins.' },
  { category: 'hiring', question: 'What are some reputable local SEO agencies in Australia?',
    answer: 'This page lists several Australian agencies that offer local SEO, each with an Australian office and a local SEO service described on their own website, plus FactoryJet. Look for agencies that explain their review and citation methods openly, show you real results, and leave you as the owner of your Business Profile. Our wider SEO page and SEO cost guide help you compare approaches.' },

  // ── Where ──
  { category: 'where', question: 'Do you do local SEO in Perth, Sydney, Brisbane and Melbourne?',
    answer: 'Yes. Local SEO is about your address and service area, not ours, so the method is the same in Perth, Sydney, Brisbane, Melbourne, Adelaide, Canberra or a regional town. What changes is competition. Inner-city searches usually need more reviews, stronger service pages and more time than a regional one. We measure who holds the map positions in your suburb before quoting.' },
  { category: 'where', question: 'Do you have an Australian office?',
    answer: 'No, and we say so plainly. FactoryJet has no Australian office, so we do not appear in Australian map results ourselves and we will not pretend otherwise. Local SEO ranks your business at your address, which is why the work happens on your Business Profile, your website and your listings. We work with Australian clients remotely, and the founder is involved on every project.' },
  { category: 'where', question: 'Is SEO dead now with AI?',
    answer: 'No. AI answers in Google and in assistants like ChatGPT still draw on the same sources: your website, your Business Profile, reviews and directory listings. For local searches Google still shows the map. What AI changes is that vague pages get skipped. Clear, specific pages that answer real questions, with accurate business details everywhere, are what both search and AI tools pick up.' },
  { category: 'where', question: 'Can ChatGPT do SEO?',
    answer: 'It can help you draft service descriptions, review replies and page outlines, and that saves time. It cannot verify your Business Profile, fix a suspension, clean up duplicate listings, ask your customers for reviews or know who ranks in your suburb today. Treat it as a writing tool. Everything it writes about your business needs checking against the facts before it goes live.',
    links: [{ href: '/au/ai-seo', label: 'AI SEO for Australian businesses' }] },
];

/* ─── Named options in the Australian market (open self-disclosure, ItemList).
       Each note is based on the company’s own website, fetched 2026-09-26. ── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We fix and manage your Google Business Profile, reviews process, citations and service-area pages, and build the website behind them if it needs work. No Australian office, so we work remotely on your profile as a manager while you stay the owner.' },
  { name: 'Impressive Digital', note: 'A Melbourne agency with an office in Cremorne, Victoria. Its local SEO page lists Google Business Profile optimisation, citation building and location targeting.' },
  { name: 'Sentius Digital', note: 'An agency with an office in Hawthorn East, Victoria. Its local SEO page lists Google Business Profile optimisation, local citation building, suburb-targeted content and review management.' },
  { name: 'Pivotal Agency', note: 'An agency with an office in Helensvale on the Gold Coast, Queensland. Its local SEO page lists Google Business Profile optimisation and citation audit, clean-up and new citation building.' },
  { name: 'OZ Media Digital', note: 'An agency based in Hornsby, New South Wales. Its SEO page covers local SEO and Google Maps optimisation, Google Business Profile management and a review growth strategy.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Local SEO Services Australia',
      serviceType: 'Local SEO: Google Business Profile optimisation and management, review process, local citations, service-area pages and local search reporting',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Local SEO services for Australian businesses. Google Business Profile set-up, repair and management, a review process within Google policy and ACCC guidance, consistent citations on Australian directories, service-area pages that avoid doorway patterns, and reporting on calls, direction requests and enquiries. Delivered remotely; the client owns every profile and account.',
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
      name: 'Local SEO providers Australian businesses compare',
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
      'Local SEO for Australian businesses: Google Business Profile repair and management, genuine reviews within ACCC rules, clean citations and service-area pages. You own every profile.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet local SEO services for Australian businesses' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* The six parts of the work. */
const JOBS: { t: string; d: string }[] = [
  { t: 'Business Profile set-up and repair', d: 'Verify or recover the profile, remove duplicates, fix a keyword-stuffed name before Google does, set the most specific category, and hide a home address for service-area businesses.' },
  { t: 'Categories, services and content', d: 'Match categories and services to the words Australians search, add real photos of your work and premises, and post updates that give people a reason to call.' },
  { t: 'A review process within the rules', d: 'A simple way to ask every customer for a review, reply templates and new-review alerts. No incentives, no selective asking, no removing genuine criticism.' },
  { t: 'Citations and consistent details', d: 'Fix old addresses, former names and duplicates across the web, then add the listings that matter: Apple Business Connect, Bing Places, Australian directories and industry bodies.' },
  { t: 'Service and service-area pages', d: 'One strong website page per main service, and area pages only where you have something specific to say about that area.' },
  { t: 'Tracking what actually matters', d: 'Calls, direction requests, website clicks and enquiries from the profile, map rankings measured across your service area, and a plain monthly note.' },
];

/* Icons and visual-slot subjects for the six capability cards (same order as JOBS). */
const JOB_ICONS = [
  'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  'M3 12V4h8l10 10-8 8L3 12Zm5-4h.01',
  'm12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z',
  'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14',
  'M4 20V10m6 10V4m6 16v-7M2 20h20',
] as const;
const JOB_SUBJECTS = [
  'AI-generated model: a white map pin standing on a simple white business listing card, one orange tick on the card',
  'AI-generated model: white category tags sorted into a small tray, the most specific one lifted and coloured orange',
  'AI-generated model: five white review cards on a rail, a small hand-held phone beside them showing a blank review form, one orange star',
  'AI-generated model: a stack of white directory cards being aligned into one neat column, one mismatched card set aside in orange',
  'AI-generated model: a white street map model of an Australian suburb grid with a few orange service-area blocks outlined',
  'AI-generated model: a white bar chart model rising in three steps with a small orange phone icon on the tallest bar',
] as const;

/* "Which local SEO problem do you have?" self-check. Rendered as <details>, no client component. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'We do not show up on Google Maps at all, even when people search our business name.', verdict: 'Profile repair first', a: 'Usually an unverified, suspended or duplicate profile, or details that do not match what Google sees elsewhere. This is fixed work with a clear end, not a retainer.' },
  { q: 'We show up, but only for our name, not for the service people search.', verdict: 'Categories, content and reviews', a: 'The profile is not relevant or prominent enough. Fix the primary category and services list, add real photos, build a steady flow of reviews, and link a strong service page from the profile.' },
  { q: 'We rank near our base, but not in the suburbs we actually want work from.', verdict: 'Website pages, not fake offices', a: 'Distance drives the map, and a virtual office is not allowed. Honest service-area pages and reviews that mention work in those suburbs help. Expect the ordinary results to move before the map does.' },
  { q: 'We have several locations or practitioners and every profile looks different.', verdict: 'Multi-location clean-up', a: 'One profile per real location, one naming pattern, matching categories and a location page on your website for each. Inconsistency across profiles is common, so this pays back fast.' },
];

/* How Google ranks local results, and what we work on for each factor. */
const FACTORS: { f: string; google: string; we: string }[] = [
  { f: 'Relevance', google: 'How well a Business Profile matches what someone is searching for', we: 'Primary and secondary categories, services list, description, photos, and the service page your profile links to' },
  { f: 'Distance', google: 'How far each business is from the customer who is searching', we: 'Nothing to game here. We set your real base and service area correctly, and use website pages for the areas beyond it' },
  { f: 'Prominence', google: 'How well known a business is, including links to your business and reviews', we: 'Genuine reviews and replies, consistent citations, links from real local and industry sites, and a website worth linking to' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/seo', t: 'SEO services', d: 'The wider work: technical SEO, audits, content and earned links, for businesses that also want to rank beyond their area.' },
  { href: '/au/small-business-seo', t: 'Small business SEO', d: 'SEO scoped for small Australian businesses, starting with the fixes that bring enquiries soonest.' },
  { href: '/au/websites-for-tradies', t: 'Websites for tradies', d: 'Trade websites with licence details, job photos and Business Profile setup, built to turn searches into calls.' },
  { href: '/au/dental-website-design', t: 'Dental websites and SEO', d: 'Practice websites and local search for dentists, within AHPRA advertising rules.' },
  { href: '/au/law-firm-seo', t: 'Law firm SEO', d: 'Search and websites for Australian law firms, where local intent and professional advertising rules meet.' },
  { href: '/au/ai-seo', t: 'AI SEO', d: 'Getting your business named in ChatGPT, Perplexity and Google AI answers, from the same accurate details.' },
];

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'local-seo';

const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* How we run it. */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Measure the map', d: 'We check where you appear for your main services across your whole service area, and who holds the top three spots in each suburb.' },
  { n: '02', t: 'Get access the right way', d: 'You stay the owner of your Business Profile and add us as a manager, plus Search Console and analytics access.' },
  { n: '03', t: 'Repair the profile', d: 'Verification, duplicates, name, categories, address or service area, hours and services. Suspension risks get fixed first.' },
  { n: '04', t: 'Clean up citations', d: 'We correct or close old and conflicting listings, then add the few that matter for your trade. Consistency first, volume never.' },
  { n: '05', t: 'Set up the review habit', d: 'A review link, a short request message for invoices and completed jobs, reply templates in your voice, and new-review alerts.' },
  { n: '06', t: 'Build the pages', d: 'A strong page for each main service and, where it is honest, pages for the areas you serve, linked from your profile.' },
  { n: '07', t: 'Report what changed', d: 'Each month: calls, direction requests, website clicks and enquiries from local search, map positions across your area, and next steps.' },
  { n: '08', t: 'Keep it current', d: 'Holiday hours, new services, photos, staff and locations. Local SEO decays when details go stale, so the profile gets looked after.' },
];

export default function LocalSeoAUPage() {
  return (
    <>
      <script id="ld-au-local-seo" type="application/ld+json"
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

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Local SEO Services Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead" data-speakable="true">
                FactoryJet provides local SEO services for Australian businesses that sell to people nearby. We fix
                and manage your Google Business Profile, set up a review process that stays within Google policy and
                ACCC guidance, clean up your details across directories, and build service pages that give Google a
                reason to show you. You stay the owner of every profile and account.
              </p>
              <HeroInlineForm region="au" source="au_local_seo_hero" submitLabel="Check my local rankings" />
            </div>

            <form
              className="specpanel"
              aria-label="The three parts of local SEO we work on"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The three parts of local SEO: your Google Business Profile, your reviews and citations, and the service pages on your website"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT GOOGLE LOOKS AT LOCALLY</span>
                <span className="sys"><span>MAPS</span><span>REVIEWS</span><span>PAGES</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore the three parts">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="lseo-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[0]} /></svg></span>
                  <span className="idx">category, services, service area</span>
                  <span className="title">Business Profile that matches the search</span>
                  <span className="tag">Relevance</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="lseo-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[2]} /></svg></span>
                  <span className="idx">genuine reviews, consistent listings</span>
                  <span className="title">Reviews and citations that build trust</span>
                  <span className="tag">Prominence</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="lseo-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[4]} /></svg></span>
                  <span className="idx">one strong page per service</span>
                  <span className="title">Website pages the profile links to</span>
                  <span className="tag">Both</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · There is no way to pay Google for a better local ranking, so we fix what it does measure.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: 'No way', t: 'to request or pay for a better local ranking on Google, in Google’s own words', s: 'Google Business Profile Help', u: SRC_LOCAL_RANK },
              { v: '2 hours', t: 'of driving time from your base: the rough limit Google sets for a service area', s: 'Google Business Profile guidelines', u: SRC_GBP_GUIDE },
              { v: 'Against the law', t: 'for a business to create fake or misleading reviews, or arrange for others to', s: 'ACCC, online reviews', u: SRC_ACCC_REVIEWS },
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

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) → facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What are local SEO services, and what do they change for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">Local SEO services get your business shown to people searching nearby, in the
                    Google map results and in the ordinary results beneath them.</span> The work covers your Google Business
                    Profile, genuine reviews, consistent business details across directories, and website pages for each
                    service and area you cover. The result you should measure is calls, direction requests and enquiries.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Four terms we use a lot</div>
                    <p>
                      The <b>map pack</b> is the box of three businesses on a map that Google shows for searches like
                      “electrician Newcastle”. Your <b>Google Business Profile</b> (it used to be called Google My
                      Business) is the free listing that appears there. A <b>citation</b> is any mention of your business
                      name, address and contact details on another site, such as a directory. A <b>service-area
                      business</b> is one that goes to its customers, like a plumber, and so hides its address.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    One thing to be clear about first: FactoryJet has no Australian office, so you will not find us in
                    an Australian map pack, and we will not use a borrowed address to get there. That matters less than
                    it sounds. Local SEO ranks <b>your</b> business at <b>your</b> address. Everything we do happens on
                    your profile, your website and your listings, and you own all of them.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="An Australian café owner behind her counter checking her business listing on a phone held towards her, customers in soft focus, no readable text on the screen" />
            </div>
          </div>
        </section>

        {/* ═══ THIS PAGE vs /au/seo (distinct scope, cross-links) → ruled rows ═══ */}
        <section className="section platforms" id="scope">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">This page vs our main SEO page</div>
                <h2>Local SEO is about the map and your area. SEO is about your whole website.</h2>
              </div>
              <p>
                This page covers searches with a place in them: the map pack, your Business Profile, reviews,
                directories and area pages. If you want to rank nationally, fix a slow or badly built website, or earn
                links for competitive terms, read our <a href="/au/seo">SEO services in Australia</a> page. Most
                businesses that sell locally start here and add the wider work when the basics hold.
              </p>
            </div>
            <div className="eyebrow plat-label">Quick guide</div>
            <div className="platlist" role="list">
              <div className="plat plat-own" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Show up on Google Maps near customers</h3></div><p className="plat-build">trades, clinics, firms, shopfronts</p><p className="plat-fit">This page</p></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Rank the whole website, nationally too</h3></div><p className="plat-build">technical, content, links</p><p className="plat-build"><a href="/au/seo">SEO services</a></p></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Get named in ChatGPT and AI answers</h3></div><p className="plat-build">AI search visibility</p><p className="plat-build"><a href="/au/ai-seo">AI SEO</a></p></div>
              <div className="plat" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>A new website that brings in local work</h3></div><p className="plat-build">small businesses</p><p className="plat-build"><a href="/au/small-business-web-design">Small business web design</a></p></div>
            </div>
          </div>
        </section>

        {/* ═══ SIX PARTS OF THE WORK → capgrid + grouped lists ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What our local SEO services include</div>
              <h2>Six parts of local SEO, in the order that pays back</h2>
              <p className="lead">
                The order matters. A great review process does little for a suspended profile, and area pages do
                little if the profile behind them has the wrong category. We work top to bottom and tell you when a
                part is done.
              </p>
            </div>
            <div className="capgrid">
              {JOBS.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={JOB_SUBJECTS[i]} />
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑01</span><h3>Where local SEO pays back most</h3></div>
              <ul className="chg-list">
                <li><span><b>Trades and home services.</b> Usually service-area businesses.</span></li>
                <li><span><b>Health and allied health.</b> People pick from the map and read reviews first.</span></li>
                <li><span><b>Law firms, accountants and real estate.</b> High-value “near me” searches.</span></li>
                <li><span><b>Shopfronts and hospitality.</b> Direction requests matter as much as clicks.</span></li>
                <li><span><b>Multi-location businesses.</b> Inconsistent profiles cost the most.</span></li>
              </ul>
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑02</span><h3>Where it is not the main lever</h3></div>
              <ul className="chg-list">
                <li><span><b>Online stores that ship nationally.</b> You need <a href="/au/ecommerce-seo">ecommerce SEO</a> more than a map listing.</span></li>
                <li><span><b>Businesses with no real base.</b> Without an eligible address, the map is off the table; ordinary SEO still works.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ PROBLEM CHECK (<details>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which local SEO problem do you have?</div>
              <h2>A 30-second check: what is actually stopping you showing up locally</h2>
              <p>Tap the line that sounds most like your business. The answer is the honest next step, even when it is something you can do yourself.</p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A tradie in work gear standing beside his ute on an Australian suburban street, looking at a map search on his phone, screen facing him, no readable text"
                caption="Most people choose a local business from the map on their phone. If you are not in those three spots, most of them never see you." />
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

        {/* ═══ RANKING FACTORS TABLE ═══ */}
        <section className="section integrations" id="ranking">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">How Google decides the map</div>
              <h2>Relevance, distance and prominence: what Google says, and what we work on</h2>
              <p className="lead">
                Google publishes the three things local results are mainly based on, and says there is no way to pay
                for a better local ranking. That makes local SEO simpler than it looks: improve what you can change,
                and be honest about what you cannot.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>What Google says it means</th>
                    <th className="fj">What we work on</th>
                  </tr>
                </thead>
                <tbody>
                  {FACTORS.map((r) => (
                    <tr key={r.f}>
                      <th scope="row">{r.f}</th>
                      <td>{r.google}</td>
                      <td className="fj">{r.we}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Source: <a href={SRC_LOCAL_RANK} {...extLink}>Google Business Profile Help, tips to improve your local ranking</a>.
              Google’s page describes the three as relevance, distance and prominence (it also calls the last one
              popularity). Rankings also shift with where the searcher stands, which is why we measure across your
              whole service area rather than from your front door.
            </p>
          </div>
        </section>

        {/* ═══ REVIEWS, THE AUSTRALIAN WAY → facts ═══ */}
        <section className="section facts" id="reviews">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Reviews, within the rules</div>
              <h2>How to get more Google reviews without breaking Google policy or Australian consumer law</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Google’s rules.</b> Google does not allow businesses to offer incentives such as payment,
                  discounts or free goods in exchange for any review, or to discourage negative reviews or selectively
                  ask only happy customers. It does allow you to encourage genuine reviews without incentives. Only
                  reviews that break its policies can be reported for removal.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>The ACCC’s view.</b> The ACCC says it is against the law for a business to create fake or
                  misleading reviews or arrange for others to. Reviews written by family, staff or paid people without
                  disclosing the connection are a problem, and so is suppressing, editing or removing genuine negative
                  reviews. Where incentives are offered on any platform, they must apply to positive and negative
                  reviews alike and be clearly disclosed.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <div className="factlabel">The review process we set up</div>
                  <ul className="trigrows">
                    <li><span className="m">Ask every customer</span><span className="n">after every job or visit, not a chosen few</span><span className="t">Allowed</span></li>
                    <li><span className="m">Direct review link</span><span className="n">in invoices, confirmations and a follow-up text</span><span className="t">Allowed</span></li>
                    <li><span className="m">Reply to every review</span><span className="n">calm, specific, no customer details</span><span className="t">Allowed</span></li>
                    <li><span className="m">Report policy breaches</span><span className="n">fake, spam or conflict of interest only</span><span className="t">Allowed</span></li>
                    <li><span className="m">Discounts or gifts for reviews</span><span className="n">banned for Google reviews</span><span className="t">Never</span></li>
                    <li><span className="m">Staff or family reviews</span><span className="n">misleading without disclosure</span><span className="t">Never</span></li>
                  </ul>
                  <p className="au-note">
                    Sources: <a href={SRC_GOOGLE_FAKE} {...extLink}>Google Maps content policy, fake engagement</a>;{' '}
                    <a href={SRC_GOOGLE_REPORT} {...extLink}>Google, report inappropriate reviews</a>;{' '}
                    <a href={SRC_ACCC_REVIEWS} {...extLink}>ACCC, online reviews for products and services</a>.
                    This is general information, not legal advice.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A physiotherapist at the front desk of an Australian clinic handing a patient a small card while the patient holds her phone, screen facing the patient, no readable text"
                caption="The best time to ask for a review is straight after the visit, and the same way for every customer." />
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>Doing it yourself vs a listings package vs a local SEO agency vs FactoryJet</h2>
                <p className="lead">
                  Four common routes. Each suits someone. This compares what you get, not the price; for typical
                  Australian market ranges, see our SEO cost guide.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Local SEO agency</th>
                    <th>Directory listings package</th>
                    <th>Do it yourself</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Business Profile repair</th><td className="fj">Included, suspension risks first</td><td>Usually</td><td>Sometimes</td><td>Very doable</td></tr>
                  <tr><th scope="row">Review process</th><td className="fj">Set up for your team, within the rules</td><td>Varies</td><td>Rarely</td><td>If you keep it going</td></tr>
                  <tr><th scope="row">Citation clean-up</th><td className="fj">Audit, fix, then add a few</td><td>Usually</td><td>Adds many, fixes few</td><td>Slow but possible</td></tr>
                  <tr><th scope="row">Service and area pages</th><td className="fj">Written and built by us</td><td>Sometimes</td><td>No</td><td>If you can write them</td></tr>
                  <tr><th scope="row">Website fixes behind the profile</th><td className="fj">Same team builds websites</td><td>Varies</td><td>No</td><td>Depends on your site</td></tr>
                  <tr><th scope="row">Reporting</th><td className="fj">Calls, directions, enquiries, map grid</td><td>Rankings, often</td><td>Listing count</td><td>Profile insights</td></tr>
                  <tr><th scope="row">Who owns the profile</th><td className="fj">You; we are a manager</td><td>Ask</td><td>Ask</td><td>You</td></tr>
                  <tr><th scope="row">Australian office</th><td className="fj">No, remote</td><td>Usually</td><td>Varies</td><td>Not applicable</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Costs: our <a href="/blog/seo-cost-australia-2026">SEO cost guide for Australia (2026)</a> lists typical
              market ranges for local SEO and monthly SEO retainers, with sources.
            </p>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white model of an Australian suburban street grid seen from above, three small orange map pins clustered near one corner shop, soft daylight, no text" />

        {/* ═══ HOW WE RUN IT → process timeline ═══ */}
        <section className="section process" id="how-we-work">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we work</div>
                <h2>How we run local SEO for an Australian business, in eight steps</h2>
                <p className="lead">
                  Steps one to five are fixed work with an end date. Steps six to eight are where ongoing help earns
                  its keep, and you can stop after step five if the basics are all you need. Open any step to see
                  what happens in it.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A FactoryJet specialist on a video call with an Australian business owner, both looking at their own screens showing a map grid, screens facing each person, no readable text"
                caption="Step one is measuring where you show up across your whole service area, so you know which searches are realistic before anything is quoted." />
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
            headline={'Customers nearby finding your competitors first?'}
            sub={'Send your business name and suburb. On a short call with the founder, we will show you where you appear on the map across your area, what is holding the profile back, and which fixes you can make yourself.'}
            label={'Check my local rankings'}
          />
        </div>

        {/* ═══ SERVICE-AREA PAGES → definition module ═══ */}
        <section className="definition" id="service-area-pages">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="mockup" ratio="3:2" className="definition-image"
              subject="A laptop on a desk in an Australian home office showing a clean service page with job photos and a short suburb section, screen facing the viewer's seat, no readable text" />
            <p className="figcap">
              A good area page reads like it was written by someone who has worked there. A bad one is the same page
              with the suburb name swapped.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Service-area pages, done properly</div>
            <h2>Service-area pages that rank without looking like doorway pages</h2>
            <p>
              A service-area business cannot put a pin on the map in every suburb it covers, so pages on its own
              website do that job in the ordinary results. They work when each page is genuinely useful: the jobs you
              have done there, how quickly you can get there, local conditions that change the work, and reviews from
              customers in that area.
            </p>
            <p>
              They fail, and can hurt the rest of the site, when they are near-copies. Google’s spam policies list
              pages targeted at specific regions or cities that funnel users to one page as an example of doorway
              abuse. So we write fewer area pages, only where there is something real to say, and link each one from
              the relevant service page rather than from a long list of suburbs in the footer.
            </p>
            <p>
              Source: <a href={SRC_DOORWAY} {...extLink}>Google Search Central,
              spam policies (doorway abuse)</a>. If your website itself needs rebuilding first, see{' '}
              <a href="/au/small-business-web-design">small business web design in Australia</a>.
            </p>
          </div>
        </section>

        {/* ═══ BUSINESS PROFILE RULES → facts + checklist panel + ruled rows ═══ */}
        <section className="section facts" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The rules, in plain English</div>
              <h2>Google Business Profile guidelines that decide whether you rank or get suspended</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>A real place, reachable in person.</b> Google’s guidelines say a business must be contactable at
                  its verified location during stated hours. A virtual office, a PO box or a mailbox at a remote
                  location is not eligible, and a co-working desk only counts with signage, staff and customers there.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Service-area businesses hide the address.</b> If you go to your customers, Google says you should
                  hide your address and set a service area, which should not extend farther than about two hours of
                  driving from your base. A tradie working from home who shows the home address is one of the most
                  common fixes we make.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Your real-world name, nothing added.</b> The profile name should match the name on your signage,
                  website and stationery. Google says adding unnecessary information, such as “Best Plumber Sydney
                  24/7”, is not permitted and could get the profile suspended.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>One profile per location, owned by you.</b> Google does not allow more than one profile for each
                    location. Owners can add and remove users; managers cannot. So the business should hold owner
                    access, with any agency, including us, working as a manager. Google also confirms that creating a
                    profile is free.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_GBP_GUIDE} {...extLink}>Google, guidelines for representing your business</a>;{' '}
                    <a href={SRC_GBP_USERS} {...extLink}>Google, Business Profile owners and managers</a>;{' '}
                    <a href={SRC_GBP_FREE} {...extLink}>Google Business Profile (Australia and New Zealand)</a>.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto"
                subject="A plumber standing in the doorway of his home workshop in an Australian suburb, van parked outside with no signage text visible, holding a phone with the screen facing him" />
            </div>
          </div>
        </section>

        {/* ═══ ENGAGEMENT SHAPES + DEMAND → ruled rows + split ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>Three ways to work with us on local SEO</h2>
              </div>
              <p>
                Every project is quoted for your scope after we have looked at your profile and your competitors.
                These are the shapes it usually takes.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Local SEO audit and repair.</h3></div><p className="plat-build">A one-off project: map measurement, Business Profile fixes, citation clean-up and a review process your team can run. Fixed scope, fixed end date.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Ongoing local SEO.</h3></div><p className="plat-build">Profile management, review replies, posts and photos, service and area pages, links from real local sites, and monthly reporting on calls and enquiries.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Local SEO plus a new website.</h3></div><p className="plat-build">When the website is the weak link, we rebuild it with proper service pages and then run local SEO on top. Sites up to five pages come with 7-day delivery.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the scope: how many locations and practitioners you have, how competitive your suburbs
                  are, how messy your existing listings are, and whether the website needs work. For typical
                  Australian market ranges, see our <a href="/blog/seo-cost-australia-2026">SEO cost guide</a>. If
                  you run a trade business, our <a href="/au/websites-for-tradies">websites for tradies</a> page covers
                  licence details and profile setup for trades.
                </p>
                <ModalCTAButton label="Check my local rankings" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'local seo services', v: '880', w: '100%', kd: 'The head term, map pack shown' },
                    { kw: 'local seo', v: '880', w: '100%', kd: 'Learning and hiring mixed' },
                    { kw: 'local seo agency', v: '390', w: '44%', kd: 'Shortlisting' },
                    { kw: 'local seo company', v: '390', w: '44%', kd: 'Shortlisting' },
                    { kw: 'local seo specialist', v: '260', w: '30%', kd: 'Hiring one person' },
                    { kw: 'local seo consultant', v: '210', w: '24%', kd: 'Advice first' },
                    { kw: 'local seo australia', v: '170', w: '19%', kd: 'National providers' },
                    { kw: 'google business profile management', v: '170', w: '19%', kd: 'Profile help' },
                    { kw: 'google business profile optimisation', v: '90', w: '10%', kd: 'Profile fixes' },
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
                <h2>Local SEO agencies Australian businesses compare</h2>
              </div>
              <p>
                We are one option, not the only one. These Australian agencies rank on page one for local SEO searches
                in Australia, each with an Australian office and a local SEO service described on its own website.
                Unlike them, we have no Australian office, and we list that first.
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
              Agencies named from live Australian search results for local SEO services, agency and company searches, September 2026. Notes reflect each company’s own website on 26 September 2026. Listing is not endorsement. The free option is always there too: Google says creating a Business Profile is free, and many small businesses should start by doing it themselves.
            </p>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Local SEO by industry, and the wider work</div>
              <h2>Related services for Australian businesses</h2>
              <p>
                Local SEO works best on a sound website and alongside the rules of your industry. These pages cover
                both, built by the same team.
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
          heading="Local SEO questions Australian businesses actually ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Show up when people nearby search for what you do</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                Business Profile, where you appear across your service area, and which fixes will bring the most
                calls first. No spam, no obligation, no lock-in.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Check my local rankings" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/seo">Need wider SEO? See SEO services</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

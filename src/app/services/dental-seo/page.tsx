import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import MidPageCTA from '@/components/v2/MidPageCTA';
import ComparisonTable from '@/components/v2/ComparisonTable';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import './dental-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/dental-seo, production page
   Converted from mockup-us-services-dental-seo-v1.html 2026-06-14.
   Layout: custom inline JSX, scoped under .dseo CSS wrapper.
   No pricing anywhere (no-pricing rule 2026-06-11).
   All CTAs: https://calendly.com/bhavesh-factoryjet/30min
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Dental SEO Agency | Map Pack SEO for Dentists & Dental Practices | FactoryJet',
  description:
    'Dental SEO agency that gets practices into the Google Map Pack. We optimize GBP, build review velocity, and create clinical entity authority. 500+ businesses ranked. Free audit.',
  alternates: {
    canonical: 'https://factoryjet.com/services/dental-seo',
  },
  openGraph: {
    url: 'https://factoryjet.com/services/dental-seo',
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    title: 'Dental SEO Agency | Map Pack SEO for Dentists & Dental Practices | FactoryJet',
    description:
      'Dental SEO agency that gets practices into the Google Map Pack. We optimize GBP, build review velocity, and create clinical entity authority. 500+ businesses ranked. Free audit.',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/dental-seo/hero.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: Dental SEO agency for US dental practices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental SEO Agency | Map Pack SEO for Dentists & Dental Practices | FactoryJet',
    description:
      'Dental SEO agency that gets practices into the Google Map Pack. GBP optimization, review velocity, clinical entity authority. 500+ businesses ranked. Free audit.',
    images: ['https://factoryjet.com/images/us/services/dental-seo/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD schemas
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dental SEO Agency | Map Pack SEO for Dentists and Dental Practices',
  url: 'https://factoryjet.com/services/dental-seo',
  description:
    'Dental SEO agency that gets practices into the Google Map Pack. GBP optimization, review velocity, clinical entity authority, and citation building for dental practices across the US.',
  inLanguage: 'en-US',
  // Bumped 2026-08-13 with the additive strengthening pass. Keep honest: only
  // move this when the page's content actually changes.
  dateModified: '2026-08-13',
  isPartOf: {
    '@type': 'WebSite',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Dental SEO', item: 'https://factoryjet.com/services/dental-seo' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dental SEO Services',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Dental SEO / Local SEO for Dentists',
  description:
    'Dental SEO services for US practices: Google Business Profile optimization, review velocity systems, NAP citation building, clinical entity authority content, and Map Pack ranking.',
};

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ_ITEMS mirrors the 20 visible <details> Q&A pairs in the FAQ section below
   (5 categories × 4 questions) verbatim, so faqSchema's mainEntity can be
   generated from a single source instead of a separately hand-written list.
───────────────────────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    category: 'Map Pack Basics',
    question: 'What is the Map Pack and why does it matter for dental practices?',
    answer:
      'The Map Pack is the cluster of three local business listings Google shows at the top of results for location-based searches. For "dentist near me" and most other dental queries, it sits above the organic results and captures about 42% of all clicks. If your practice is not in those three spots, most searchers never see you.',
  },
  {
    category: 'Map Pack Basics',
    question: 'How long does it take to get into the Map Pack?',
    answer:
      'Most practices with a complete GBP and healthy citation profile see measurable movement within 8 to 12 weeks of starting a structured SEO program. Highly competitive markets with many established practices take longer. The foundation work we do in the first 30 days is what makes the timeline predictable.',
  },
  {
    category: 'Map Pack Basics',
    question: 'What if my practice already has a Google Business Profile?',
    answer:
      'Great, that is the starting point. The question is whether every attribute on it is set correctly, whether it has consistent categories, whether photos are current, and whether the service list matches what your practice actually offers. We audit it against 40+ ranking factors in the first week and correct anything that is wrong or missing.',
  },
  {
    category: 'Map Pack Basics',
    question: 'Can my practice rank in multiple cities?',
    answer:
      'For the Map Pack, Google uses your verified address as the geographic center. You can appear in searches from people in surrounding areas, but you cannot rank in a Map Pack for a city where your practice is not located. For organic search, geo-specific landing pages can target surrounding communities effectively.',
  },
  {
    category: 'Google Business Profile',
    question: 'Why does my GBP category matter so much?',
    answer:
      'Your primary category tells Google which searches to consider your practice for. A general dentist set to "Dentist" will miss specialty searches like "orthodontist near me" or "cosmetic dentist." Secondary categories let you capture those as well. Getting this wrong means being invisible for entire segments of your potential patients.',
  },
  {
    category: 'Google Business Profile',
    question: 'How many photos should my GBP have?',
    answer:
      'Practices with more than 100 photos get significantly more profile views, but the cadence matters as much as volume. Four or more new photos per month signals to Google that your business is active. Interior shots, exterior shots, team photos, and equipment all contribute. Stock photos do not count and can actually hurt you.',
  },
  {
    category: 'Google Business Profile',
    question: 'Should I respond to negative reviews?',
    answer:
      'Yes, every time, within 48 hours. Negative reviews that go unanswered look worse to potential patients than the review itself. A professional, calm response demonstrates that you take feedback seriously. It is also indexed by Google, so your response language becomes part of your local relevance signal for patient-experience related searches.',
  },
  {
    category: 'Google Business Profile',
    question: 'What are GBP posts and do they help SEO?',
    answer:
      'GBP posts let you publish updates, offers, events, and service highlights directly on your profile. They expire after seven days for most post types. Consistent posting signals activity and gives Google fresh content to associate with your practice. They appear in your knowledge panel and can increase profile engagement metrics that correlate with ranking.',
  },
  {
    category: 'Review Strategy',
    question: 'How do we get more Google reviews without sounding pushy?',
    answer:
      'Timing is everything. The best moment to ask is right after the appointment when the patient expresses satisfaction. A simple verbal ask from the front desk followed by a text with a direct link to your review page converts at far higher rates than email blasts. We design the full workflow including the script, the SMS copy, and the timing so your team can use it without it feeling awkward.',
  },
  {
    category: 'Review Strategy',
    question: 'Can I offer incentives for reviews?',
    answer:
      'No. Google explicitly prohibits incentivized reviews and can remove your entire review count if it detects the pattern. Beyond the Google policy, HIPAA also creates complications around acknowledging that someone was your patient publicly. The right approach is making it easy to leave a review for patients who are already happy, not manufacturing reviews.',
  },
  {
    category: 'Review Strategy',
    question: 'What review count do I need to be competitive?',
    answer:
      'This depends entirely on your local market. In smaller markets, 40 reviews with a 4.8 average can dominate. In competitive urban markets, the top Map Pack positions often have 300 or more. We pull the actual counts for the practices currently in your Map Pack as part of your audit so you know exactly what target you are competing against.',
  },
  {
    category: 'Review Strategy',
    question: 'How do I handle a fake negative review?',
    answer:
      'Report it to Google using the flag feature and document your reasoning. Google does remove reviews that violate policies, but the process takes time. While waiting, respond professionally to the review without admitting any connection to the reviewer, since there may not be one. We handle the reporting and response drafting as part of ongoing GBP management.',
  },
  {
    category: 'Technical and On-Site SEO',
    question: 'Do I need separate landing pages for each dental service?',
    answer:
      'Yes. A single "services" page that lists everything you do cannot rank for individual service searches. Someone searching "dental implants near me" and someone searching "Invisalign dentist near me" have different intent. Separate pages with dedicated content, schema markup, and internal linking perform dramatically better than a combined page for either query.',
  },
  {
    category: 'Technical and On-Site SEO',
    question: 'What is schema markup and does my dental site need it?',
    answer:
      'Schema markup is structured data code you add to your site that tells Google exactly what your content means. For dental practices, this includes Dentist schema, MedicalProcedure schema, and LocalBusiness JSON-LD. Google uses it to show rich results in search, including your opening hours, star rating, and service categories directly in the search results page before anyone clicks.',
  },
  {
    category: 'Technical and On-Site SEO',
    question: 'How important is site speed for dental SEO?',
    answer:
      'Core Web Vitals are an official Google ranking factor. More practically, a slow site loses patients who are searching on a mobile phone and will not wait more than three seconds for a page to load. Mobile speed is especially critical for emergency dental searches where someone is in discomfort and needs to call immediately.',
  },
  {
    category: 'Technical and On-Site SEO',
    question: 'Should I build location pages for every city near my practice?',
    answer:
      'Pages targeting surrounding communities can capture organic traffic from people willing to travel to your location, but only if those pages have genuinely useful local content. Thin pages that swap city names into a template get filtered by Google and do not rank. When we build location pages, each one earns its own page with research specific to that community.',
  },
  {
    category: 'Results and Expectations',
    question: 'What results should I expect in the first 90 days?',
    answer:
      'GBP visibility improvements are typically measurable within 30 to 60 days. You should see profile view increases, more direction requests, and more phone calls attributed to your profile before organic rankings shift. Organic keyword movements take longer but are often visible by month three. We set up tracking before starting so you can see exactly what changed and when.',
  },
  {
    category: 'Results and Expectations',
    question: 'How do you measure success for a dental SEO campaign?',
    answer:
      'New patient inquiries is the only metric that matters for your practice\'s bottom line. We track that along with the upstream signals: GBP calls, direction requests, website visits from local search, keyword rankings by specialty, and review velocity. You get a monthly report connecting all of those to actual business outcomes.',
  },
  {
    category: 'Results and Expectations',
    question: 'Can SEO replace my current patient referral program?',
    answer:
      'They work differently and neither replaces the other. Referrals from existing patients convert at higher rates because there is already trust built in. SEO generates new patient volume from people who have no existing relationship with your practice, which expands your total patient base beyond your existing network. The strongest practices run both.',
  },
  {
    category: 'Results and Expectations',
    question: 'What happens if Google changes its algorithm while we are running a campaign?',
    answer:
      'Google updates its local search algorithm multiple times per year. Our approach focuses on signals that have been consistent across algorithm changes: citation accuracy, review velocity, GBP completeness, and on-site technical health. Practices that chased shortcuts or artificial signals take the hit. Practices built on clean fundamentals tend to hold or improve after updates.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/factoryjet',
    'https://www.crunchbase.com/organization/factoryjet',
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Additive strengthening pass, 2026-08-13. ADD ONLY: nothing above this block
   was removed, and all 20 FAQs are untouched.

   Adds cited numbers, three checklists, the named systems this work runs on,
   and a four-way comparison of how a practice can actually get this done.

   Every source below was opened with curl on 2026-08-13, returned HTTP 200, and
   the exact claim was located in the fetched page before it was written here.
   If a source stops resolving, cut the claim rather than leaving it uncited.

   Health-claim guard: this page sells search visibility, not clinical outcomes.
   Nothing here promises patient volume, treatment results, or medical advice.
   Where patient data is involved, the HIPAA position is stated plainly and
   cited to the regulation rather than gestured at.
───────────────────────────────────────────────────────────────────────────── */

const LINK_STYLE = {
  color: 'var(--orange-d)',
  fontWeight: 600,
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
} as const;

const GOOGLE_LOCAL_RANKING_DOC = 'https://support.google.com/business/answer/7091';
const GOOGLE_LOCALBUSINESS_DOC =
  'https://developers.google.com/search/docs/appearance/structured-data/local-business';
const BRIGHTLOCAL_REVIEW_SURVEY = 'https://www.brightlocal.com/research/local-consumer-review-survey/';
const WEB_DEV_VITALS = 'https://web.dev/articles/vitals';
const SCHEMA_ORG_DENTIST = 'https://schema.org/Dentist';
const ECFR_BAA =
  'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.502';

const DENTAL_STATS = [
  {
    value: '97%',
    label:
      'Share of consumers who read reviews for local businesses. In 2026, 41% always read them before choosing, up from 29% a year earlier. Your reviews get read before your homepage does.',
    sourceUrl: BRIGHTLOCAL_REVIEW_SURVEY,
    sourceLabel: 'BrightLocal Local Consumer Review Survey',
  },
  {
    value: '89%',
    label:
      'Share of consumers who expect an owner to reply to reviews, and 42% are unlikely to use a business that ignores them entirely. Replying is the cheapest visible signal you own.',
    sourceUrl: BRIGHTLOCAL_REVIEW_SURVEY,
    sourceLabel: 'BrightLocal Local Consumer Review Survey',
  },
  {
    value: '3',
    label:
      'Factors Google names in its own Business Profile documentation as the main inputs to local ranking: relevance, distance, and prominence. The same page states there is no way to pay for a better one.',
    sourceUrl: GOOGLE_LOCAL_RANKING_DOC,
    sourceLabel: 'Google Business Profile Help, local ranking',
  },
  {
    value: '2.5s',
    label:
      'The Largest Contentful Paint threshold Google publishes for a good page experience, alongside Interaction to Next Paint at 200 ms and Cumulative Layout Shift at 0.1. Your booking page is held to the same bar.',
    sourceUrl: WEB_DEV_VITALS,
    sourceLabel: 'Core Web Vitals thresholds, web.dev',
  },
];

/* The order we actually work in during the first two weeks. Not a generic list. */
const VISIBILITY_CHECKLIST = [
  {
    title: 'Primary category on the Google Business Profile',
    body: 'One field, and it moves more than any other. A practice filed under Dentist competes for general searches and sits out orthodontic and cosmetic ones.',
  },
  {
    title: 'Secondary categories, services, and attributes',
    body: 'Google matches these against how people phrase the search. We fill every field that applies, including the accepting new patients attribute, and drop the rest.',
  },
  {
    title: 'Name, address, and phone consistency at the data source',
    body: 'Most US directory listings trace back to a handful of aggregators. We correct the source record first, then the copies, then suppress duplicates.',
  },
  {
    title: 'Healthgrades, Zocdoc, Yelp, and the state dental board listing',
    body: 'Healthcare directories carry weight generic ones do not, and BrightLocal records Healthgrades among the review sites gaining ground. Each needs the same hours, suite number and phone.',
  },
  {
    title: 'Review volume, recency, and reply rate',
    body: 'Google names review count as a prominence input. We build the request flow into the practice management software you already pay for, or into an n8n, Zapier or Make.com workflow fired by a webhook.',
  },
  {
    title: 'schema.org Dentist markup, written as JSON-LD',
    body: 'Dentist sits under LocalBusiness and MedicalBusiness in the schema.org hierarchy. The structured data carries address, hours, phone, and geo coordinates, validated before it ships.',
  },
  {
    title: 'One page per procedure, not one services page',
    body: 'Implants, Invisalign, veneers and emergency care are four searches with four intents. Separate pages with their own schema markup and internal linking beat a combined page. Near-duplicate pages get filtered, so content pruning usually comes before writing anything new.',
  },
  {
    title: 'Internal linking from the pages that already rank',
    body: 'A homepage carrying topical authority should pass it down to the procedure pages. Internal linking costs nothing, and most practice sites leave the implant page orphaned.',
  },
  {
    title: 'Canonical tags and single-hop 301 redirects',
    body: 'Old URLs from the last rebuild, tracking parameters and www variants split the signals. We do the url mapping first, write a redirect map, ship each 301 redirect as a single hop, and set a canonical tag on what stays.',
  },
  {
    title: 'Core Web Vitals measured on a phone, on cell data',
    body: 'Local traffic arrives on mobile. We read Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift from field data, not one Lighthouse run on an office laptop.',
  },
  {
    title: 'Google Search Console coverage and query data',
    body: 'Search Console shows which dental queries you surface for and which procedure pages Google chose not to index. In a technical SEO audit that is where the fastest wins are, and where you catch crawl budget draining away.',
  },
  {
    title: 'GA4 and Google Tag Manager wired to calls, not sessions',
    body: 'Click-to-call taps, direction requests and booking submits become named GA4 events through Google Tag Manager. Without that, nobody can honestly tell you whether this worked.',
  },
  {
    title: 'The online booking path, timed end to end',
    body: 'We open the booking widget on a phone and count the taps and the seconds. One that loads in an iframe after four seconds undoes the ranking work.',
  },
  {
    title: 'Profile posts, current photos, and the Q and A',
    body: 'An active profile outranks a dormant one with the same reviews. Anyone can post a question on a Business Profile, including a competitor, so the Q and A gets read monthly.',
  },
];

const PRACTICE_PAGE_STRUCTURE = [
  'One H1 naming the procedure and the city, matching how people search rather than how the profession writes.',
  'A direct answer in the first paragraph, in plain language, so an answer engine has something quotable above the fold.',
  'What the appointment involves, how long it takes and what follows, written in the practice and reviewed by the dentist.',
  'Who the treatment is not suitable for, stated openly. That reads as honesty to a patient and as depth to a search engine.',
  'schema.org Dentist structured data in JSON-LD, plus FAQPage markup generated from the questions the page visibly shows.',
  'Real photographs of the room, the equipment, and the team, not licensed images of a practice abroad.',
  'Insurance and payment logistics answered plainly. The second question after cost, and the one most practice sites skip.',
  'A click-to-call link and a booking link that both work with one thumb, on a phone, above the fold.',
  'Named clinicians with credentials, linked to their profile pages. Google reads a page by a named dentist differently from an anonymous one.',
  'Internal linking out to related procedure pages and back to the location page, so no page is a dead end.',
];

const REVIEW_REQUEST_CHECKLIST = [
  'Ask as the appointment ends and the patient says they are happy. Nothing you send later beats that timing.',
  'Follow it with one text carrying a direct link to the review page. Two taps, no login hunt, no QR code on a card that gets binned.',
  'Send from the number you already text appointment reminders from, or a dedicated Twilio number, so it is not read as spam.',
  'Never offer anything in exchange. Google prohibits incentivized reviews and removes review counts when it detects the pattern.',
  'Never confirm publicly that a reviewer was a patient. Reply to what was said about the visit, not to who they are.',
  'Reply to every review inside 48 hours, good and bad. Owner replies are indexed, and BrightLocal finds 89% of consumers expect one.',
  'Write each reply specifically. Templated replies make half of consumers less likely to choose a business, so a copy-pasted thank you is worse than a slow one.',
  'Report a fake review through the flag tool, document the reason, and reply professionally without claiming any connection to the reviewer.',
];

const DENTAL_SYSTEMS = [
  {
    name: 'Google Business Profile',
    body: 'Categories, services, attributes, hours, posts, photos and the Q and A. The largest single input into Map Pack position, and the one most owners never reopen after launch.',
  },
  {
    name: 'Google Search Console',
    body: 'Which dental queries you appear for, which procedure pages are indexed, and which Google dropped. We pull coverage and query data monthly, and run log file analysis when a group site is not being crawled.',
  },
  {
    name: 'Google Analytics 4 and Google Tag Manager',
    body: 'Calls, direction requests and booking submits land in GA4 as named events through Google Tag Manager. Where the site allows it we move to server-side tracking with consent mode, so the first-party data survives.',
  },
  {
    name: 'Google Maps',
    body: 'Where the profile is actually seen. Photos, directions, hours, and reviews render here first, and a Maps card behaves nothing like a desktop result.',
  },
  {
    name: 'Healthgrades, Zocdoc, and Yelp',
    body: 'The healthcare directories patients check after they find you. Each carries its own reviews and its own copy of your details, so one wrong suite number contradicts the rest.',
  },
  {
    name: 'schema.org Dentist and MedicalBusiness',
    body: 'Dentist is a subtype of both LocalBusiness and MedicalBusiness. We write it as JSON-LD and declare multiple types as an array where a practice genuinely offers more than one.',
  },
  {
    name: 'Online booking systems',
    body: 'Whatever you already run, we time the path into it on a phone and link it from the profile and the procedure pages. We do not replace a booking system that works.',
  },
  {
    name: 'Patient intake forms',
    body: 'Any form collecting patient information is a HIPAA question before it is a conversion question. We check what the vendor stores, whether a signed agreement covers it, and keep it out of analytics.',
  },
  {
    name: 'Review request tooling',
    body: 'The practice management software usually has this built in. When it does not, an n8n, Zapier or Make.com workflow with a Twilio number sends one text at the right moment.',
  },
  {
    name: 'The website platform itself',
    body: 'Most practice sites run on WordPress and can be fixed in place. Where a rebuild is warranted we ship static site generation in Next.js with edge caching on Cloudflare, and every canonical tag gets set on the way out.',
  },
  {
    name: 'Answer engines',
    body: 'Patients ask ChatGPT, Claude and Gemini for a recommendation before they open Maps. Those tools read the same profile, review and structured data signals, so this and AI visibility are one project.',
  },
  {
    name: 'Heatmaps and session recording',
    body: 'When a procedure page gets traffic but not booking requests, one heatmap and a few session recordings beat another round of A/B testing.',
  },
];

const APPROACH_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'The front desk, in-house' },
  { label: 'A dental marketing package' },
  { label: 'A generalist local SEO agency' },
] as const;

const APPROACH_ROWS = [
  {
    feature: 'Who does the work',
    values: [
      'The founder scopes it and stays on the account',
      'Your office manager, between patients and insurance calls',
      'An account manager running the same playbook across many practices',
      'A local SEO specialist learning dentistry on your time',
    ],
  },
  {
    feature: 'Google Business Profile',
    values: [
      'Categories, services, attributes, posts and Q and A, reviewed weekly',
      'Simple to set up, easy to leave dormant for a year',
      'Set up properly, then usually managed on a fixed monthly cadence',
      'Handled well. This is the part every local agency knows',
    ],
  },
  {
    feature: 'Dental specifics',
    values: [
      'Procedure pages, dental categories, and the directories that carry weight',
      'You already know the clinical detail better than any agency will',
      'Strong. Dental keywords and procedure pages are the whole product',
      'Often generic. Implants and Invisalign become ordinary service pages',
    ],
  },
  {
    feature: 'Technical work on the site',
    values: [
      'Technical SEO audit, schema markup in JSON-LD, a redirect map, and Core Web Vitals on mobile',
      'Realistic only if someone in the practice builds websites',
      'Often limited to their own site template. Core Web Vitals rarely covered',
      'Covered, though the schema markup is frequently skipped',
    ],
  },
  {
    feature: 'Who owns the website',
    values: [
      'You do. We work on your site, or build one you own outright',
      'You do',
      'Often the vendor. The site can sit on their platform and leave with them',
      'You do, in most cases',
    ],
  },
  {
    feature: 'Patient data and HIPAA',
    values: [
      'We vet every form vendor and keep patient information out of GA4',
      'Entirely in your control, the safest of the four',
      'Usually familiar with the requirement. Ask for the agreement in writing',
      'Varies. A generalist agency may not know to ask',
    ],
  },
  {
    feature: 'What gets reported',
    values: [
      'Calls, direction requests and booking submits as GA4 events, in a dashboard you keep',
      'Whatever you check yourself inside the Business Profile',
      'A monthly report, sometimes on calls, sometimes on rankings',
      'Rankings and traffic, sometimes calls',
    ],
  },
  {
    feature: 'Commitment',
    values: [
      'Month to month',
      'Your team hours, which is the real cost',
      'Twelve month agreements are still common here',
      'Six to twelve month lock-in is still common',
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page component
───────────────────────────────────────────────────────────────────────────── */

export default function DentalSEOPage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <script
        id="schema-dental-seo-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="schema-dental-seo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="schema-dental-seo-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="schema-dental-seo-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="schema-dental-seo-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <SiteHeader />
      <main className="dseo">

      {/* Cursor glow */}
      <div className="cursor-glow" id="dseo-cursor-glow" aria-hidden="true"></div>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="hero" aria-label="Hero">
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">
            <div className="eyebrow" data-reveal>
              <span className="eyebrow-dot" aria-hidden="true"></span>
              Dental SEO Services
            </div>

            <h1 className="hero-h1" data-reveal data-reveal-delay="1">
              {/* Was "42% of dental appointments", which overstated the source. BrightLocal
                  measures 42% of local search CLICKS. Clicks are not booked appointments, and
                  the proof chip directly below this line cites the click figure, so the H1 was
                  contradicting its own citation. */}
              The Map Pack takes <span className="g-text">42%</span> of local search clicks.
            </h1>

            <div className="proof-chips" data-reveal data-reveal-delay="2">
              <span className="proof-chip">
                <span className="proof-chip-icon" aria-hidden="true">&#10003;</span>
                Map Pack: 42% of local search clicks (BrightLocal)
              </span>
              <span className="proof-chip">
                <span className="proof-chip-icon" aria-hidden="true">&#10003;</span>
                Reviews: 24% of your GBP ranking
              </span>
            </div>

            <p className="hero-sub" data-reveal data-reveal-delay="3">
              Every dentist in your zip code is fighting for those three spots. We put you in them and keep you there when new practices open nearby.
            </p>

            <HeroInlineForm region="us" source="services_dental_seo_hero" submitLabel="Get my free SEO audit" />
            <div className="cta-row" data-reveal data-reveal-delay="4">
              <a href="https://calendly.com/bhavesh-factoryjet/30min" className="btn-ghost">Talk to the founder</a>
              <a href="#how-it-works" className="btn-ghost">
                How Map Pack Works
              </a>
            </div>

            <div className="hero-trust" data-reveal data-reveal-delay="5">
              <div className="hero-trust-avatars" aria-hidden="true">
                <div className="avatar">B</div>
                <div className="avatar">K</div>
                <div className="avatar">R</div>
                <div className="avatar">V</div>
              </div>
              <span className="trust-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>Trusted by 500+ businesses across the US, UK, UAE and India</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right" data-reveal data-reveal-delay="2">
            <div className="hero-img-wrap">
              <Image
                src="/images/us/services/dental-seo/hero.webp"
                alt="Modern bright dental clinic reception area with natural light"
                width={600}
                height={800}
                priority
              />
            </div>

            {/* Glassmorphism map card */}
            <div className="map-card-float" aria-label="Google Map Pack example" role="img">
              <div className="map-card-header">
                <div className="google-g" aria-hidden="true">G</div>
                <span className="map-search-text">Dentist near me</span>
              </div>
              <div className="map-result top">
                <div className="result-name">Bright Smile Family Dental</div>
                <div className="result-meta">
                  <span className="result-stars" aria-label="4.9 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span>4.9 (312)</span>
                  <span className="result-open">Open</span>
                </div>
              </div>
              <div className="map-result">
                <div className="result-name">Sunshine Pediatric Dentistry</div>
                <div className="result-meta">
                  <span className="result-stars" aria-label="4.6 stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                  <span>4.6 (89)</span>
                </div>
              </div>
              <div className="map-result">
                <div className="result-name">CitySmile Cosmetic</div>
                <div className="result-meta">
                  <span className="result-stars" aria-label="4.4 stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                  <span>4.4 (201)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════ */}
      <section className="stats-bar" aria-label="Key statistics" id="how-it-works">
        <div className="stats-inner">
          <div className="stat-card card" data-reveal>
            <div className="stat-num" data-counter="42" data-suffix="%">0%</div>
            <div className="stat-label">Map Pack click share on dental searches</div>
          </div>
          <div className="stat-card card" data-reveal data-reveal-delay="1">
            <div className="stat-num" data-counter="24" data-suffix="%">0%</div>
            <div className="stat-label">Reviews influence on Google Business Profile ranking</div>
          </div>
          <div className="stat-card card" data-reveal data-reveal-delay="2">
            <div className="stat-num" data-counter="3" data-suffix="x">0x</div>
            <div className="stat-label">More calls from Map Pack vs page 2 organic results</div>
          </div>
          <div className="stat-card card" data-reveal data-reveal-delay="3">
            <div className="stat-num" data-counter="8" data-suffix=" wks">0 wks</div>
            <div className="stat-label">Our average time to Map Pack entry for new clients</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CITED NUMBERS, additive pass 2026-08-13
      ═══════════════════════════════════════ */}
      <section className="gbp" aria-labelledby="numbers-h2">
        <div className="gbp-inner">
          <div className="section-label" data-reveal>The numbers, and where they came from</div>
          <h2 className="section-h2" id="numbers-h2" data-reveal data-reveal-delay="1">
            Four figures worth checking before you spend a month on this.
          </h2>
          <p className="gbp-intro" data-reveal data-reveal-delay="2">
            Dental marketing runs on statistics nobody can trace. Each of these links to the page it came from.
          </p>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}
          >
            {DENTAL_STATS.map((s) => (
              <div
                key={s.value}
                className="card"
                data-reveal
                style={{
                  background: 'var(--cream)',
                  border: '1px solid rgba(26,23,18,0.07)',
                  borderTop: '3px solid var(--orange)',
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--disp)',
                    fontWeight: 800,
                    fontSize: 'clamp(30px, 4vw, 44px)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    color: 'var(--orange)',
                  }}
                >
                  {s.value}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--n600)', marginTop: 12 }}>{s.label}</p>
                <a
                  href={s.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: 14,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.04em',
                    color: 'var(--orange-d)',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                    <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {s.sourceLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SPECIALTY BENTO
      ═══════════════════════════════════════ */}
      <section className="specialty" aria-labelledby="specialty-h2">
        <div className="specialty-inner">
          <div className="section-label" data-reveal>By Service Type</div>
          <h2 className="section-h2" id="specialty-h2" data-reveal data-reveal-delay="1">
            Every dental specialty has different keywords. We know <em>all</em> of them.
          </h2>

          <div className="bento-grid">

            <div className="bento-tile tile-cream card span-tall" data-reveal>
              <div className="bento-tile-eyebrow">General Dentistry</div>
              <h3>The highest-volume keyword in dental SEO</h3>
              <p>&ldquo;Dentist near me&rdquo; pulls over 40,000 monthly searches in major US metros. It is the foundation every practice&rsquo;s local SEO strategy is built on. Get this one right and every other dental keyword becomes worth chasing.</p>
              <div className="bento-tile-stat">40K<span style={{ fontSize: '18px', fontWeight: 600 }}>/mo</span></div>
            </div>

            <div className="bento-tile tile-lav card" data-reveal data-reveal-delay="1">
              <div className="bento-tile-eyebrow">Cosmetic and Veneers</div>
              <h3>High-value cases start with a search</h3>
              <p>&ldquo;Dental veneers near me&rdquo; is one of the most considered searches in dentistry. People compare several practices before they call, so the depth of your page decides whether that searcher requests a consultation or moves on to a competitor with a better one.</p>
            </div>

            <div className="bento-tile tile-dark card" data-reveal data-reveal-delay="2">
              <div className="bento-tile-eyebrow">Dental Implants</div>
              <h3>Your highest-revenue keyword needs schema</h3>
              <p>&ldquo;Dental implants near me&rdquo; drives 27,100 searches a month. Procedure schema markup and FAQ schema are non-negotiable for capturing featured snippets at the top of those results.</p>
              <div className="bento-tile-stat">27,100<span style={{ fontSize: '18px', fontWeight: 600 }}>/mo</span></div>
            </div>

            <div className="bento-tile tile-green card" data-reveal data-reveal-delay="1">
              <div className="bento-tile-eyebrow">Invisalign and Orthodontics</div>
              <h3>Two buyer journeys, two separate pages</h3>
              <p>&ldquo;Invisalign provider&rdquo; and &ldquo;clear aligners near me&rdquo; attract different searchers at different stages. One landing page tries to serve both and converts neither.</p>
            </div>

            <div className="bento-tile tile-peach card" data-reveal data-reveal-delay="2">
              <div className="bento-tile-eyebrow">Pediatric Dentistry</div>
              <h3>Seasonal peaks reward prepared practices</h3>
              <p>Search volume spikes every August as parents prep kids for back-to-school. A content strategy that runs year-round means you are visible when the spike hits, not scrambling to catch up.</p>
            </div>

            <div className="bento-tile tile-orange card span-full" data-reveal data-reveal-delay="3">
              <div className="tile-text">
                <div className="bento-tile-eyebrow">Emergency Dental</div>
                <h3>A 24/7 search pattern demands 24/7 visibility</h3>
                <p>&ldquo;Emergency dentist near me&rdquo; is searched at midnight on Sundays. Your GBP must clearly display hours and availability or Google will show the practice that does.</p>
              </div>
              <div className="tile-pull-stat" aria-label="Available 24 slash 7">24/7</div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEW VELOCITY
      ═══════════════════════════════════════ */}
      <section className="reviews" aria-labelledby="reviews-h2">
        <div className="reviews-inner">
          <div className="reviews-section-label" data-reveal>Google Business Profile Ranking</div>
          <div className="reviews-big-stat" data-reveal data-reveal-delay="1">24%</div>
          <p className="reviews-big-label" id="reviews-h2" data-reveal data-reveal-delay="2">
            of your Map Pack ranking is reviews.
          </p>

          <div className="reviews-cards">
            <div className="review-card card" data-reveal>
              <div className="review-card-icon" aria-hidden="true">&#11088;</div>
              <h3>Volume is the baseline</h3>
              <p>Practices with fewer than 50 reviews rarely appear in the Map Pack for competitive keywords. Volume signals that your practice is active and patients trust it enough to leave public feedback.</p>
            </div>
            <div className="review-card card" data-reveal data-reveal-delay="1">
              <div className="review-card-icon" aria-hidden="true">&#128337;</div>
              <h3>Recency beats old stars</h3>
              <p>A practice with 200 reviews from three years ago loses to a practice with 40 reviews from this month. Google weights recent activity heavily because it signals the business is still operating as described.</p>
            </div>
            <div className="review-card card" data-reveal data-reveal-delay="2">
              <div className="review-card-icon" aria-hidden="true">&#128172;</div>
              <h3>Every reply is a ranking signal</h3>
              <p>Owner responses to reviews are indexed by Google and contribute to your authority in local search. Responding to 100% of reviews, positive and negative, is one of the most overlooked local SEO levers.</p>
            </div>
          </div>

          <p className="reviews-closer" data-reveal>
            We build a <strong>repeatable review acquisition workflow</strong> that fits your front desk routine. Not a review widget your team sets up once and forgets.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEW REQUEST CHECKLIST, additive pass 2026-08-13
      ═══════════════════════════════════════ */}
      <section className="gbp" aria-labelledby="review-checklist-h2">
        <div className="gbp-inner">
          <div className="section-label" data-reveal>The ask, step by step</div>
          <h2 className="section-h2" id="review-checklist-h2" data-reveal data-reveal-delay="1">
            Eight rules for asking patients for a review.
          </h2>
          <p className="gbp-intro" data-reveal data-reveal-delay="2">
            Print this for the front desk. Most practices we audit are not short on happy patients. They are short
            on a moment in the day when somebody asks.
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12, maxWidth: 860 }}>
            {REVIEW_REQUEST_CHECKLIST.map((r) => (
              <li
                key={r}
                data-reveal
                style={{
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
                  background: 'var(--cream)',
                  border: '1px solid rgba(26,23,18,0.07)',
                  borderRadius: 14,
                  padding: '16px 20px',
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--n600)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" style={{ flexShrink: 0, marginTop: 4 }}>
                  <circle cx="10" cy="10" r="9" fill="#0E5C46" />
                  <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                </svg>
                {r}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--n600)', maxWidth: 760, marginTop: 24 }}>
            The response numbers come from the{' '}
            <a href={BRIGHTLOCAL_REVIEW_SURVEY} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
              BrightLocal Local Consumer Review Survey
            </a>
            , which also finds 42% of consumers unlikely to use a business that ignores its reviews entirely. The
            same discipline sits underneath our wider{' '}
            <Link href="/services/local-seo" style={LINK_STYLE}>local SEO services</Link>, because a review engine
            is a review engine whether the business fills chairs or vans.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GBP OPTIMIZATION
      ═══════════════════════════════════════ */}
      <section className="gbp" aria-labelledby="gbp-h2">
        <div className="gbp-inner">
          <div className="section-label" data-reveal>Google Business Profile</div>
          <div className="gbp-header">
            <h2 className="section-h2" id="gbp-h2" data-reveal data-reveal-delay="1">
              Your Google Business Profile is your strongest Map Pack signal.
            </h2>
          </div>
          <p className="gbp-intro" data-reveal data-reveal-delay="2">
            Most practices set it up once at launch and never touch it again. That is exactly how competitors move ahead of you. Four levers move the needle more than anything else.
          </p>
          <div className="gbp-grid">
            <div className="gbp-card card" data-reveal>
              <div className="gbp-card-num">01</div>
              <h3>Accepting New Patients toggle</h3>
              <p>This single attribute filters your practice in or out of &ldquo;accepting new patients&rdquo; searches, which represent a significant share of dental queries. Leaving it off by default is leaving appointments on the table.</p>
            </div>
            <div className="gbp-card card" data-reveal data-reveal-delay="1">
              <div className="gbp-card-num">02</div>
              <h3>Service category selection</h3>
              <p>Wrong primary and secondary categories make your practice invisible for specialty searches. Getting this right means Google knows to surface you for implants, orthodontics, and cosmetic procedures separately.</p>
            </div>
            <div className="gbp-card card" data-reveal data-reveal-delay="2">
              <div className="gbp-card-num">03</div>
              <h3>Photo cadence and quality</h3>
              <p>Practices that post four or more photos per month see 35% more direction requests than those with static profiles. We build and maintain a photo publishing calendar so this happens automatically.</p>
            </div>
            <div className="gbp-card card" data-reveal data-reveal-delay="3">
              <div className="gbp-card-num">04</div>
              <h3>Q&amp;A management</h3>
              <p>Anyone can post a question on your GBP, including competitors. Unmonitored Q&amp;As contain incorrect information that Google surfaces in search results. We audit and manage this monthly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VISIBILITY CHECKLIST, additive pass 2026-08-13
      ═══════════════════════════════════════ */}
      <section className="specialty" aria-labelledby="checklist-h2">
        <div className="specialty-inner">
          <div className="section-label" data-reveal>The first two weeks</div>
          <h2 className="section-h2" id="checklist-h2" data-reveal data-reveal-delay="1">
            The 14 checks we run before we touch anything else.
          </h2>
          <p className="gbp-intro" data-reveal data-reveal-delay="2">
            Ordered by impact. This is the order we work in, and the list you can hold any other dental SEO company
            to on their first call.
          </p>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12, maxWidth: 900 }}>
            {VISIBILITY_CHECKLIST.map((c, i) => (
              <li
                key={c.title}
                data-reveal
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                  background: 'var(--cream)',
                  border: '1px solid rgba(26,23,18,0.07)',
                  borderRadius: 14,
                  padding: '18px 20px',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontFamily: 'var(--disp)',
                    fontWeight: 800,
                    fontSize: 17,
                    width: 34,
                    height: 34,
                    lineHeight: '34px',
                    textAlign: 'center',
                    borderRadius: 10,
                    background: 'var(--orange-soft)',
                    color: 'var(--orange-d)',
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 17, color: 'var(--ink)' }}>
                    {c.title}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--n600)', marginTop: 4 }}>{c.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div style={{ maxWidth: 780, marginTop: 44 }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--n600)' }}>
              Most of that is ordinary{' '}
              <Link href="/services/seo" style={LINK_STYLE}>SEO</Link> with a geography constraint bolted on, which
              is why a dental practice and a plumbing company get the same first fortnight. The{' '}
              <Link href="/services/seo-audit" style={LINK_STYLE}>free SEO audit</Link> runs this exact list either
              way. Single-location owners usually start with{' '}
              <Link href="/services/small-business-seo" style={LINK_STYLE}>small business SEO</Link>, and the Map
              Pack mechanics sit on our{' '}
              <Link href="/services/local-seo" style={LINK_STYLE}>local SEO</Link> page.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--n600)', marginTop: 18 }}>
              Sometimes the honest finding is that the profile is fine and the site is the problem. One that takes
              six seconds to show a booking button is a{' '}
              <Link href="/services/web-design" style={LINK_STYLE}>web design</Link> problem, better served by{' '}
              <Link href="/services/small-business-website-design" style={LINK_STYLE}>small business website design</Link>{' '}
              than by another month of profile tuning.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--n600)', marginTop: 18 }}>
              Patients also ask ChatGPT, Claude, and Gemini which dentist to see, and those tools read the same
              signals this list builds. That overlap is what{' '}
              <Link href="/services/ai-seo" style={LINK_STYLE}>AI SEO</Link> and{' '}
              <Link href="/services/generative-engine-optimization" style={LINK_STYLE}>AI search optimization</Link>{' '}
              cover, so we treat them as one job. Where a metro changes the plan we publish a page for it:{' '}
              <Link href="/austin/seo" style={LINK_STYLE}>Austin</Link>,{' '}
              <Link href="/dallas/seo" style={LINK_STYLE}>Dallas</Link>,{' '}
              <Link href="/chicago/seo" style={LINK_STYLE}>Chicago</Link>,{' '}
              <Link href="/phoenix/seo" style={LINK_STYLE}>Phoenix</Link>, and{' '}
              <Link href="/san-diego/seo" style={LINK_STYLE}>San Diego</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS
      ═══════════════════════════════════════ */}
      <section className="process" aria-labelledby="process-h2" id="process">
        <div className="process-inner">
          <div className="section-label" data-reveal>How We Work</div>
          <h2 className="section-h2" id="process-h2" data-reveal data-reveal-delay="1">
            How we turn your practice into a new patient magnet.
          </h2>

          <div className="process-steps" role="list">
            <div className="process-connector" aria-hidden="true"></div>

            <div className="process-step" data-reveal role="listitem">
              <div className="step-dot" aria-hidden="true">1</div>
              <div className="step-title">Practice Audit</div>
              <div className="step-desc">Full diagnostic on your GBP, citation health, competitor Map Pack positions, and on-site technical signals.</div>
            </div>
            <div className="process-step" data-reveal data-reveal-delay="1" role="listitem">
              <div className="step-dot" aria-hidden="true">2</div>
              <div className="step-title">Keyword Strategy</div>
              <div className="step-desc">Map every dental keyword by specialty, intent, and zip code. No overlap, no wasted effort.</div>
            </div>
            <div className="process-step" data-reveal data-reveal-delay="2" role="listitem">
              <div className="step-dot" aria-hidden="true">3</div>
              <div className="step-title">GBP Rebuild</div>
              <div className="step-desc">Categories, services, photos, hours, Q&amp;A, posts. Every attribute set correctly from day one.</div>
            </div>
            <div className="process-step" data-reveal data-reveal-delay="3" role="listitem">
              <div className="step-dot" aria-hidden="true">4</div>
              <div className="step-title">Review System</div>
              <div className="step-desc">Front-desk workflow, timing triggers, response templates. A machine that generates reviews without you thinking about it.</div>
            </div>
            <div className="process-step" data-reveal data-reveal-delay="4" role="listitem">
              <div className="step-dot" aria-hidden="true">5</div>
              <div className="step-title">Monthly Growth</div>
              <div className="step-desc">Rank tracking, competitor monitoring, content updates, and a monthly call to walk through what changed and what is next.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCEDURE PAGE ANATOMY + HIPAA, additive pass 2026-08-13
      ═══════════════════════════════════════ */}
      <section className="gbp" aria-labelledby="page-anatomy-h2">
        <div className="gbp-inner">
          <div className="section-label" data-reveal>On the site itself</div>
          <h2 className="section-h2" id="page-anatomy-h2" data-reveal data-reveal-delay="1">
            What a procedure page needs before it can rank.
          </h2>
          <p className="gbp-intro" data-reveal data-reveal-delay="2">
            Ten things, in the order a reader meets them. Miss the first three and it will not rank. Miss the last
            three and it will rank without ever producing a booking request.
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10, maxWidth: 860 }}>
            {PRACTICE_PAGE_STRUCTURE.map((p, i) => (
              <li
                key={p}
                data-reveal
                style={{
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'var(--n600)',
                  borderBottom: '1px solid rgba(26,23,18,0.07)',
                  paddingBottom: 12,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontFamily: 'var(--mono)',
                    fontSize: 12,
                    fontWeight: 700,
                    color: 'var(--orange-d)',
                    minWidth: 22,
                    paddingTop: 3,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {p}
              </li>
            ))}
          </ul>

          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--n600)', maxWidth: 780, marginTop: 26 }}>
            On item five, Google&rsquo;s{' '}
            <a href={GOOGLE_LOCALBUSINESS_DOC} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
              LocalBusiness structured data documentation
            </a>{' '}
            asks for the most specific subtype and for multiple types declared as an array, which for a practice
            means{' '}
            <a href={SCHEMA_ORG_DENTIST} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
              schema.org Dentist
            </a>
            . Alongside it go a canonical tag, a redirect map, internal linking from the pages that carry topical
            authority, and an accessibility audit against WCAG, because a booking page a screen reader cannot use
            is one some of your patients cannot use either.
          </p>

          <h3
            style={{
              fontFamily: 'var(--disp)',
              fontSize: 22,
              fontWeight: 700,
              color: 'var(--ink)',
              marginTop: 44,
              letterSpacing: '-0.01em',
            }}
          >
            Where patient data is involved, say the quiet part out loud
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--n600)', maxWidth: 780, marginTop: 12 }}>
            Marketing work touches patient information the moment a form asks for more than a name and a phone
            number. Under the HIPAA Privacy Rule, a practice may hand protected health information to an outside
            vendor only with satisfactory assurances that the vendor will safeguard it, and{' '}
            <a href={ECFR_BAA} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
              45 CFR 164.502(e)
            </a>{' '}
            requires those assurances to be documented in a written contract. In practice that is a Business
            Associate Agreement, and it is needed with every vendor that processes the data, including the form
            host, the intake tool, the scheduling system, and any subcontractor sitting behind them.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--n600)', maxWidth: 780, marginTop: 16 }}>
            So our rule is simple. Patient information never enters GA4 or Google Tag Manager. We track that a
            booking form was submitted, never what was typed into it, and keep patient details out of URLs and event
            parameters. If a tool you use needs an agreement you do not have, we flag it. We are not your compliance
            counsel, but no ranking is worth putting patient data somewhere it does not belong.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ENTITY AUTHORITY
      ═══════════════════════════════════════ */}
      <section className="entity" aria-labelledby="entity-h2">
        <div className="entity-inner">
          <div className="entity-label" data-reveal>2026 Algorithm Update</div>
          <h2 className="entity-h2" id="entity-h2" data-reveal data-reveal-delay="1">
            Google now understands dental terminology at a clinical level.
          </h2>
          <p className="entity-sub" data-reveal data-reveal-delay="2">
            Keyword stuffing was replaced by entity relationships years ago. What that actually means for a dental practice in 2026:
          </p>
          <div className="entity-cards">
            <div className="entity-card card" data-reveal>
              <div className="entity-card-chip">Procedure Entities</div>
              <h3>Procedure names, not just keywords</h3>
              <p>Google&rsquo;s Knowledge Graph links &ldquo;osseointegration&rdquo; to &ldquo;implant&rdquo; to &ldquo;oral surgeon&rdquo; to your practice, or a competitor&rsquo;s. We structure your content so the entity graph resolves to you for every procedure you offer.</p>
            </div>
            <div className="entity-card card" data-reveal data-reveal-delay="1">
              <div className="entity-card-chip">NAP Consistency</div>
              <h3>Your name, address, and phone must match exactly</h3>
              <p>Across Yelp, Healthgrades, ZocDoc, WebMD, and 40+ other directories, one character difference creates a conflicting entity signal. We audit and fix every citation so Google trusts your practice location data.</p>
            </div>
            <div className="entity-card card" data-reveal data-reveal-delay="2">
              <div className="entity-card-chip">Schema Markup</div>
              <h3>Structured data closes the loop</h3>
              <p>Dentist schema, MedicalProcedure markup, and LocalBusiness JSON-LD tell Google what you are, what you do, and where you are in machine-readable format. This is not optional for practices competing in 2026.</p>
            </div>
          </div>
        </div>
      </section>

    

      {/* ═══════════════════════════════════════
          NAMED SYSTEMS, additive pass 2026-08-13
      ═══════════════════════════════════════ */}
      <section className="specialty" aria-labelledby="systems-h2">
        <div className="specialty-inner">
          <div className="section-label" data-reveal>Where the work happens</div>
          <h2 className="section-h2" id="systems-h2" data-reveal data-reveal-delay="1">
            The systems your practice&rsquo;s visibility actually runs on.
          </h2>
          <p className="gbp-intro" data-reveal data-reveal-delay="2">
            None of this lives in one dashboard. Your visibility sits across systems that do not talk to each other,
            and the gaps are where bookings leak. Here is each one, and what we do with it.
          </p>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 14,
            }}
          >
            {DENTAL_SYSTEMS.map((s) => (
              <li
                key={s.name}
                data-reveal
                style={{
                  background: 'var(--cream)',
                  border: '1px solid rgba(26,23,18,0.07)',
                  borderLeft: '3px solid var(--orange)',
                  borderRadius: 14,
                  padding: '18px 20px',
                }}
              >
                <div style={{ fontFamily: 'var(--disp)', fontWeight: 700, fontSize: 17, color: 'var(--ink)' }}>
                  {s.name}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--n600)', marginTop: 4 }}>{s.body}</p>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--n600)', maxWidth: 780, marginTop: 26 }}>
            Every report is built from your own Google Business Profile, Google Search Console, and GA4 data. There
            is no proprietary score, because a number only we can calculate is one you cannot check. And to be plain
            about what nobody can sell you: Google states in its own{' '}
            <a href={GOOGLE_LOCAL_RANKING_DOC} target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
              local ranking documentation
            </a>{' '}
            that there is no way to request or pay for a better local ranking. Anyone guaranteeing a Map Pack
            position is guaranteeing something they do not control.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOUR APPROACHES, additive pass 2026-08-13
      ═══════════════════════════════════════ */}
      <ComparisonTable
        eyebrow="How the options compare"
        headline="Four honest ways to get this done, including not hiring us"
        lead={
          'A practice has real choices here and we are only one of them. With one location and an organized office manager, in-house genuinely works, and it is the safest option for patient data. Read the row that matters most to you and decide on that one.'
        }
        columns={APPROACH_COLUMNS}
        rows={APPROACH_ROWS}
        footer={
          'Typical shape of each option as of 2026, not a scorecard. Good vendors exist in all four columns. We are the wrong choice if you want one supplier for ads, print, direct mail and the website, or if you want a guaranteed Map Pack position, because we will not sell you one.'
        }
      />

      <MidPageCTA
        headline={'Patients finding the practice down the road instead?'}
        sub={'Send us your practice name and city. We will check your profile, reviews and categories and tell you what is losing you bookings.'}
        label={'Get a free practice check'}
      />

      {/* ═══════════════════════════════════════
          TEAM
      ═══════════════════════════════════════ */}
      <section className="team" aria-labelledby="team-h2">
        <div className="team-inner">
          <div className="team-img-wrap img-wrap" data-reveal>
            <Image
              src="/images/us/services/dental-seo/team.webp"
              alt="FactoryJet dental SEO team"
              width={600}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="team-right">
            <div className="section-label" data-reveal>The Team</div>
            <h2 className="section-h2" id="team-h2" data-reveal data-reveal-delay="1">
              Dental SEO specialists, not generalists.
            </h2>
            <div className="team-chips" data-reveal data-reveal-delay="2">
              <span className="trust-chip">500+ businesses served</span>
              <span className="trust-chip">Map Pack specialists</span>
              <span className="trust-chip">No long-term contracts</span>
              <span className="trust-chip">US-focused</span>
            </div>
            <div className="founder-card card" data-reveal data-reveal-delay="3">
              <div className="founder-name">Bhavesh Barot</div>
              <div className="founder-role">Founder, FactoryJet</div>
              <p className="founder-bio">
                Returns on your time. If we are not generating measurable new patient inquiries within 90 days, something is wrong and we fix it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="faq" aria-labelledby="faq-h2" id="faq">
        <div className="faq-inner">

          <div className="faq-sidebar">
            <div className="faq-sidebar-label" data-reveal>Questions</div>
            <h2 className="faq-sidebar-h2" id="faq-h2" data-reveal data-reveal-delay="1">
              Common questions about dental SEO
            </h2>
            <p className="faq-sidebar-sub" data-reveal data-reveal-delay="2">
              Twenty questions across five categories. If yours is not here, ask on the call.
            </p>
            <a href="https://calendly.com/bhavesh-factoryjet/30min" className="faq-cta-pill" data-reveal data-reveal-delay="3">
              Book a Free Audit
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="faq-content" role="list">

            <div className="faq-category">Map Pack Basics</div>

            <details>
              <summary>
                What is the Map Pack and why does it matter for dental practices?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>The Map Pack is the cluster of three local business listings Google shows at the top of results for location-based searches. For &ldquo;dentist near me&rdquo; and most other dental queries, it sits above the organic results and captures about 42% of all clicks. If your practice is not in those three spots, most searchers never see you.</p>
            </details>

            <details>
              <summary>
                How long does it take to get into the Map Pack?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Most practices with a complete GBP and healthy citation profile see measurable movement within 8 to 12 weeks of starting a structured SEO program. Highly competitive markets with many established practices take longer. The foundation work we do in the first 30 days is what makes the timeline predictable.</p>
            </details>

            <details>
              <summary>
                What if my practice already has a Google Business Profile?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Great, that is the starting point. The question is whether every attribute on it is set correctly, whether it has consistent categories, whether photos are current, and whether the service list matches what your practice actually offers. We audit it against 40+ ranking factors in the first week and correct anything that is wrong or missing.</p>
            </details>

            <details>
              <summary>
                Can my practice rank in multiple cities?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>For the Map Pack, Google uses your verified address as the geographic center. You can appear in searches from people in surrounding areas, but you cannot rank in a Map Pack for a city where your practice is not located. For organic search, geo-specific landing pages can target surrounding communities effectively.</p>
            </details>

            <div className="faq-category">Google Business Profile</div>

            <details>
              <summary>
                Why does my GBP category matter so much?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Your primary category tells Google which searches to consider your practice for. A general dentist set to &ldquo;Dentist&rdquo; will miss specialty searches like &ldquo;orthodontist near me&rdquo; or &ldquo;cosmetic dentist.&rdquo; Secondary categories let you capture those as well. Getting this wrong means being invisible for entire segments of your potential patients.</p>
            </details>

            <details>
              <summary>
                How many photos should my GBP have?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Practices with more than 100 photos get significantly more profile views, but the cadence matters as much as volume. Four or more new photos per month signals to Google that your business is active. Interior shots, exterior shots, team photos, and equipment all contribute. Stock photos do not count and can actually hurt you.</p>
            </details>

            <details>
              <summary>
                Should I respond to negative reviews?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Yes, every time, within 48 hours. Negative reviews that go unanswered look worse to potential patients than the review itself. A professional, calm response demonstrates that you take feedback seriously. It is also indexed by Google, so your response language becomes part of your local relevance signal for patient-experience related searches.</p>
            </details>

            <details>
              <summary>
                What are GBP posts and do they help SEO?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>GBP posts let you publish updates, offers, events, and service highlights directly on your profile. They expire after seven days for most post types. Consistent posting signals activity and gives Google fresh content to associate with your practice. They appear in your knowledge panel and can increase profile engagement metrics that correlate with ranking.</p>
            </details>

            <div className="faq-category">Review Strategy</div>

            <details>
              <summary>
                How do we get more Google reviews without sounding pushy?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Timing is everything. The best moment to ask is right after the appointment when the patient expresses satisfaction. A simple verbal ask from the front desk followed by a text with a direct link to your review page converts at far higher rates than email blasts. We design the full workflow including the script, the SMS copy, and the timing so your team can use it without it feeling awkward.</p>
            </details>

            <details>
              <summary>
                Can I offer incentives for reviews?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>No. Google explicitly prohibits incentivized reviews and can remove your entire review count if it detects the pattern. Beyond the Google policy, HIPAA also creates complications around acknowledging that someone was your patient publicly. The right approach is making it easy to leave a review for patients who are already happy, not manufacturing reviews.</p>
            </details>

            <details>
              <summary>
                What review count do I need to be competitive?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>This depends entirely on your local market. In smaller markets, 40 reviews with a 4.8 average can dominate. In competitive urban markets, the top Map Pack positions often have 300 or more. We pull the actual counts for the practices currently in your Map Pack as part of your audit so you know exactly what target you are competing against.</p>
            </details>

            <details>
              <summary>
                How do I handle a fake negative review?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Report it to Google using the flag feature and document your reasoning. Google does remove reviews that violate policies, but the process takes time. While waiting, respond professionally to the review without admitting any connection to the reviewer, since there may not be one. We handle the reporting and response drafting as part of ongoing GBP management.</p>
            </details>

            <div className="faq-category">Technical and On-Site SEO</div>

            <details>
              <summary>
                Do I need separate landing pages for each dental service?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Yes. A single &ldquo;services&rdquo; page that lists everything you do cannot rank for individual service searches. Someone searching &ldquo;dental implants near me&rdquo; and someone searching &ldquo;Invisalign dentist near me&rdquo; have different intent. Separate pages with dedicated content, schema markup, and internal linking perform dramatically better than a combined page for either query.</p>
            </details>

            <details>
              <summary>
                What is schema markup and does my dental site need it?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Schema markup is structured data code you add to your site that tells Google exactly what your content means. For dental practices, this includes Dentist schema, MedicalProcedure schema, and LocalBusiness JSON-LD. Google uses it to show rich results in search, including your opening hours, star rating, and service categories directly in the search results page before anyone clicks.</p>
            </details>

            <details>
              <summary>
                How important is site speed for dental SEO?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Core Web Vitals are an official Google ranking factor. More practically, a slow site loses patients who are searching on a mobile phone and will not wait more than three seconds for a page to load. Mobile speed is especially critical for emergency dental searches where someone is in discomfort and needs to call immediately.</p>
            </details>

            <details>
              <summary>
                Should I build location pages for every city near my practice?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Pages targeting surrounding communities can capture organic traffic from people willing to travel to your location, but only if those pages have genuinely useful local content. Thin pages that swap city names into a template get filtered by Google and do not rank. When we build location pages, each one earns its own page with research specific to that community.</p>
            </details>

            <div className="faq-category">Results and Expectations</div>

            <details>
              <summary>
                What results should I expect in the first 90 days?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>GBP visibility improvements are typically measurable within 30 to 60 days. You should see profile view increases, more direction requests, and more phone calls attributed to your profile before organic rankings shift. Organic keyword movements take longer but are often visible by month three. We set up tracking before starting so you can see exactly what changed and when.</p>
            </details>

            <details>
              <summary>
                How do you measure success for a dental SEO campaign?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>New patient inquiries is the only metric that matters for your practice&rsquo;s bottom line. We track that along with the upstream signals: GBP calls, direction requests, website visits from local search, keyword rankings by specialty, and review velocity. You get a monthly report connecting all of those to actual business outcomes.</p>
            </details>

            <details>
              <summary>
                Can SEO replace my current patient referral program?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>They work differently and neither replaces the other. Referrals from existing patients convert at higher rates because there is already trust built in. SEO generates new patient volume from people who have no existing relationship with your practice, which expands your total patient base beyond your existing network. The strongest practices run both.</p>
            </details>

            <details>
              <summary>
                What happens if Google changes its algorithm while we are running a campaign?
                <span className="summary-icon" aria-hidden="true">+</span>
              </summary>
              <p>Google updates its local search algorithm multiple times per year. Our approach focuses on signals that have been consistent across algorithm changes: citation accuracy, review velocity, GBP completeness, and on-site technical health. Practices that chased shortcuts or artificial signals take the hit. Practices built on clean fundamentals tend to hold or improve after updates.</p>
            </details>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════ */}
      <section className="final-cta" aria-labelledby="final-cta-h2">
        <div className="final-cta-inner">
          <div className="final-cta-label" data-reveal>Free Practice Audit</div>
          <h2 id="final-cta-h2" data-reveal data-reveal-delay="1">
            How many new patients are you leaving on the table?
          </h2>
          <p className="final-cta-sub" data-reveal data-reveal-delay="2">
            We audit your GBP, your Map Pack position, your review velocity, and your top three competitors. No charge. No obligation. Just a clear picture of where you stand.
          </p>
          <div data-reveal data-reveal-delay="3">
            <a href="https://calendly.com/bhavesh-factoryjet/30min" className="btn-white">
              Book Your Free Audit
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <p className="final-trust" data-reveal data-reveal-delay="4">30-minute call. No sales pitch. Audit delivered same day.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CLIENT-SIDE ANIMATIONS
      ═══════════════════════════════════════ */}
      <Script id="dental-seo-animations" strategy="afterInteractive">{`
(function () {
  'use strict';

  /* Cursor glow */
  var glow = document.getElementById('dseo-cursor-glow');
  if (glow && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    }, { passive: true });
  }

  /* IntersectionObserver stagger reveals */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.dseo [data-reveal]').forEach(function (el) {
    io.observe(el);
  });

  /* Counter animation */
  function countUp(el, to, suffix) {
    suffix = suffix || '';
    var observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      var t0 = null;
      var duration = 1800;
      var decimals = 0;
      function tick(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / duration, 1);
        var ease = 1 - Math.pow(1 - p, 3);
        var val = ease * to;
        el.textContent = val.toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = to + suffix;
      }
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(el);
  }

  document.querySelectorAll('.dseo [data-counter]').forEach(function (el) {
    var to = parseInt(el.getAttribute('data-counter'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    el.textContent = '0' + suffix;
    countUp(el, to, suffix);
  });

  /* Smooth scroll for anchor links */
  document.querySelectorAll('.dseo a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* Bento tile pointer-tilt */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.dseo .bento-tile.card').forEach(function (tile) {
      tile.addEventListener('mousemove', function (e) {
        var rect = tile.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        tile.style.transform = 'translateY(-5px) rotateX(' + (-dy * 3) + 'deg) rotateY(' + (dx * 3) + 'deg)';
      });
      tile.addEventListener('mouseleave', function () {
        tile.style.transform = '';
      });
    });
  }

})();
`}</Script>

      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

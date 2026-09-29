import type { Metadata } from 'next';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceHeroImageBand from '@/components/v2/ServiceHeroImageBand';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/medical-website-design: US medical, dental and specialty practice
   website design page. Structure mirrors /services/law-firm-website-design.

   Intent owned by THIS page (DataForSEO, US, location_code 2840, 2026-09-29):
     medical website design: 590 US searches a month, KD 27.
   Live top 10 pulled 2026-09-29 (pipeline/research/data/
   us-medical-website-design-2026-09-29/serp_paa.json): practis.com,
   orbitmedia.com, wix.com, officite.com, dribbble.com,
   medicalpracticewebsitedesign.com, dbswebsite.com, remedyconnect.com.
   AI Overview present. FAQ questions below come from People Also Ask for
   "medical website design", "medical practice website design",
   "healthcare website design", "website design for doctors",
   "hipaa compliant website design" and "medical website cost".

   Rules for editing this page:
   - FactoryJet has no healthcare client it can name. Say what we build,
     never who we built it for.
   - Never claim HIPAA "certification" or "compliance" for FactoryJet itself.
   - Every external claim links to a source that was fetched and read.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/medical-website-design';
const TITLE = 'Medical Website Design for US Practices | FactoryJet';
const DESCRIPTION =
  'Medical website design for US clinics, private practices, dental and specialty offices. Online booking, provider pages, HIPAA-aware forms and WCAG 2.1 AA.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description:
      'Websites for US medical, dental and specialty practices: online booking, provider pages, insurance pages, HIPAA-aware forms and accessible design.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: Medical Website Design USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Medical practice websites with online booking, provider pages, HIPAA-aware forms and WCAG 2.1 AA accessibility. FactoryJet.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
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
   Sources. Each URL below was fetched and read on 2026-09-29.
───────────────────────────────────────────────────────────────────────────── */

const SOURCES = {
  hhsTracking: {
    url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html',
    label: 'HHS Office for Civil Rights, Use of Online Tracking Technologies by HIPAA Covered Entities and Business Associates',
  },
  ecfr504: {
    url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-84/subpart-I/section-84.84',
    label: '45 CFR 84.84, Requirements for web and mobile accessibility (eCFR)',
  },
  adaWeb: {
    url: 'https://www.ada.gov/resources/web-guidance/',
    label: 'ADA.gov, Guidance on Web Accessibility and the ADA',
  },
  wcag22: {
    url: 'https://www.w3.org/TR/WCAG22/',
    label: 'W3C, Web Content Accessibility Guidelines (WCAG) 2.2',
  },
  hhsSecurityNprm: {
    url: 'https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/index.html',
    label: 'HHS, HIPAA Security Rule NPRM',
  },
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD. Every schema below is built from the same arrays the page renders.
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Keep honest: bump only when the page content changes.
const PAGE_MODIFIED = '2026-09-29';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
  datePublished: PAGE_MODIFIED,
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#medical-short-answer'] },
  citation: Object.values(SOURCES).map((s) => ({ '@type': 'CreativeWork', name: s.label, url: s.url })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Medical Website Design',
  serviceType: 'Medical Website Design',
  url: PAGE_URL,
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'US medical practices, clinics, dental offices and specialty practices',
  },
  description:
    'FactoryJet designs and builds websites for US medical practices, clinics, dental and specialty offices: online booking, provider pages, insurance pages, forms routed to HIPAA-covered tools, WCAG 2.1 AA accessibility and local search setup.',
};

/** Single source of truth for the breadcrumb trail: feeds the visible
 *  <Breadcrumbs> and the BreadcrumbList JSON-LD. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Medical Website Design', url: PAGE_URL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const SHORT_ANSWER_POINTS = [
  'Online booking, or a clear request form, reachable from every page in one tap.',
  'Forms that send patient details only to a tool that signs a business associate agreement (BAA) with your practice. Never to a plain email inbox.',
  'Pages built to WCAG 2.1 AA, the accessibility level US health rules point to.',
  'One page per provider, per service and per location, so each can show up in "near me" searches.',
  'An insurance page, and a site that loads fast on a phone over a weak signal.',
];

const MEDICAL_BUILD: ReadonlyArray<{
  name: string;
  description: string;
  example?: string;
  linkLabel?: string;
  linkHref?: string;
}> = [
  {
    name: 'Online booking.',
    description:
      'Most practices already pay for scheduling inside their practice management or EHR system (the software that holds your patient charts). We connect the booking link or widget that system provides, place it in the header and on every service page, and test it on a phone. If your system has no online booking, we build a short request form that routes to your front desk tool.',
    example: 'One "Book appointment" button in the same place on every page.',
    linkLabel: 'See all web design services.',
    linkHref: '/services/web-design',
  },
  {
    name: 'HIPAA-aware forms.',
    description:
      'HIPAA is the US law that protects patient health information. If a form asks for a reason for visit, date of birth or insurance details, that answer is protected health information (PHI). We send it straight into a form or intake tool that will sign a BAA with your practice. A BAA is a contract where the vendor agrees to protect PHI the way HIPAA requires.',
    example: 'The website itself never stores or emails patient answers.',
  },
  {
    name: 'Accessible design (ADA and WCAG).',
    description:
      'WCAG is the W3C checklist that makes a site usable for people who are blind, deaf, color blind or who use a keyboard instead of a mouse. We build to WCAG 2.1 AA: text contrast of at least 4.5:1, labels on every form field, alt text on images, captions on video and full keyboard access.',
    example: 'Checked with automated tools and by hand with a keyboard and screen reader.',
  },
  {
    name: 'Provider pages.',
    description:
      'Patients pick a person, then a practice. Every doctor, dentist, nurse practitioner or therapist gets a page with a real photo, credentials, board certifications, languages spoken, the locations they see patients at and a booking button for their schedule. Each page carries Physician or Dentist structured data so search engines read it correctly.',
    example: 'A provider page can rank for that provider\'s name on its own.',
  },
  {
    name: 'Insurance and billing page.',
    description:
      'Before booking, patients want to know one thing: will my plan cover this visit? We build a plain list of the plans you accept, what to bring, how self-pay works and who to call about a bill. Your front desk updates it from the CMS in a minute when a contract changes.',
    example: 'Fewer "do you take my insurance?" calls at the front desk.',
  },
  {
    name: 'Local SEO for "near me" searches.',
    description:
      'A search like "pediatrician near me" is answered first by the Google map results, which draw on your Google Business Profile, then by location and service pages. We build one page per location with the exact address, hours, parking and directions, add MedicalClinic or Dentist structured data, and match every detail to your profile.',
    example: 'The same name, address and phone number everywhere.',
    linkLabel: 'Pair it with healthcare SEO.',
    linkHref: '/services/healthcare-seo',
  },
  {
    name: 'Speed on a phone.',
    description:
      'Many patients look you up on a phone in a parking lot or a waiting room. We build light pages, compress every image, set image sizes so nothing jumps while loading, and keep heavy scripts off the page until they are needed. We test on a mid-range phone, not only a fast office laptop.',
    example: 'Click-to-call phone number in the header on mobile.',
  },
];

const RULE_STATS = [
  {
    value: '4.5:1',
    label: 'minimum color contrast for normal body text under WCAG success criterion 1.4.3. Light gray text on white usually fails it.',
    sourceUrl: SOURCES.wcag22.url,
    sourceLabel: 'W3C WCAG 2.2',
  },
  {
    value: 'May 11, 2027',
    label: 'date by which HHS-funded recipients with 15 or more employees must meet WCAG 2.1 AA on their websites and apps. Smaller recipients follow on May 10, 2028.',
    sourceUrl: SOURCES.ecfr504.url,
    sourceLabel: '45 CFR 84.84',
  },
  {
    value: 'June 20, 2024',
    label: 'a federal court in Texas vacated part of the HHS tracking guidance. The parts about logged-in pages such as patient portals still stand.',
    sourceUrl: SOURCES.hhsTracking.url,
    sourceLabel: 'HHS OCR',
  },
] as const;

const MEDICAL_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Practice and patient audit',
    description:
      'We read your current site, your Google Business Profile and the top local results for your specialty. We list every third-party script that loads on your booking and contact pages, and every form that collects patient details.',
  },
  {
    number: '02',
    title: 'Site plan and tool choices',
    description:
      'We map one page per provider, service and location. You confirm which booking, forms and intake tools your practice has a BAA with, and we plan where each one plugs in. Nothing gets designed until this plan is signed off.',
  },
  {
    number: '03',
    title: 'Design for calm and clarity',
    description:
      'Plain words at a reading level most patients find easy, real photos of your team and space, large tap targets and color contrast that passes WCAG. You review the designs in two feedback rounds.',
  },
  {
    number: '04',
    title: 'Build, connect and test',
    description:
      'We build the pages, add Physician, Dentist or MedicalClinic structured data, connect booking and forms, and test with a keyboard, a screen reader and a mid-range phone. Ad pixels stay off booking and intake flows unless your compliance lead approves them.',
  },
  {
    number: '05',
    title: 'Launch and handover',
    description:
      'We set up redirects from old URLs, submit the sitemap to Google Search Console, update your Google Business Profile links and train your front desk to edit providers, hours and insurance plans.',
  },
];

/* ─── Listicle: who shows up on page one ──────────────────────────────────── */

const SERP_CHECK_DATE = 'September 29, 2026';

const PARTNER_TYPES = [
  {
    name: 'Healthcare-only marketing firms',
    examples: 'Practis, Officite and RemedyConnect all rank on page one.',
    body:
      'These firms work only with practices. Several bundle the website with reviews, SEO, patient education or answering services in one package. A good fit if you want one vendor for all of your marketing. Ask who owns the site, the content and the domain if you leave.',
  },
  {
    name: 'General web design agencies with a healthcare portfolio',
    examples: 'Orbit Media, a Chicago agency, ranks with a page of healthcare site examples.',
    body:
      'Broad design teams that take on medical work among other industries. A good fit for larger groups with their own marketing staff. Ask how they handle BAA vendors and tracking scripts on booking pages, since that is specific to healthcare.',
  },
  {
    name: 'DIY website builders',
    examples: 'Wix ranks with a medical website template page.',
    body:
      'You build the site yourself from a template. It can work for a brand new solo practice. The public pages are the easy part. Any form or booking tool that collects patient details needs a vendor that will sign a BAA, so get that answer in writing before you publish.',
  },
  {
    name: 'Design galleries and example round-ups',
    examples: 'Dribbble and a DBS Website examples article also rank.',
    body:
      'Useful for collecting ideas you like before you brief anyone. They do not build or run a site for you.',
  },
  {
    name: 'FactoryJet (that is us)',
    examples: 'A web design and AI services company founded in 2014 that has served 500+ businesses.',
    body:
      'We design and build the site, connect the booking and intake tools your practice already has a BAA with, and hand you the code. Marketing retainers are optional, never bundled. We do not hold a HIPAA certification and we will not claim one.',
  },
] as const;

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `Types of medical website design partner on Google page one (checked ${SERP_CHECK_DATE})`,
  itemListElement: PARTNER_TYPES.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    description: `${p.examples} ${p.body}`,
  })),
};

/* ─── Comparison ──────────────────────────────────────────────────────────── */

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Healthcare marketing package' },
  { label: 'DIY website builder' },
  { label: 'Generic freelancer' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'How it is paid for.',
    values: ['One project quote, agreed in writing before work starts.', 'Usually a monthly package.', 'Monthly plan plus add-on apps.', 'Varies widely.'],
  },
  {
    feature: 'You own the code, content and domain.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hc" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
    ],
  },
  {
    feature: 'Patient forms routed to a tool with a BAA.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hc" kind="yes" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
    ],
  },
  {
    feature: 'Tracking script check on booking and intake pages.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hc" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
    ],
  },
  {
    feature: 'Built and hand-tested to WCAG 2.1 AA.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hc" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
    ],
  },
  {
    feature: 'Provider pages with Physician or Dentist structured data.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hc" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
    ],
  },
  {
    feature: 'One page per location for "near me" searches.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hc" kind="yes" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
    ],
  },
  {
    feature: 'Custom design for your practice.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="hc" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fr" kind="yes" />,
    ],
  },
];

/* ─── Engagement tiers (no prices by policy: scope in words only) ─────────── */

const PRICING_TIERS = [
  {
    name: 'Solo or small practice.',
    priceRange: 'Quoted in writing after a short scoping call.',
    description:
      'For a single provider or a small office with one location. Five pages or fewer can be delivered in 7 days once content and photos are ready. Larger small-practice sites take 3 to 5 weeks.',
    features: [
      'Home, About, Services, Provider, Insurance and Contact pages.',
      'Booking button connected to your scheduling system.',
      'Contact or request form routed to a tool with a BAA.',
      'Provider page with Physician or Dentist structured data.',
      'MedicalClinic or Dentist structured data for your location.',
      'WCAG 2.1 AA design, tested by hand.',
      'Mobile-first build, click-to-call header.',
      'Google Business Profile link and category check.',
    ],
    cta: { label: 'Talk to the Founder.', modal: true, region: 'us' },
  },
  {
    name: 'Group practice or clinic.',
    priceRange: 'Quoted in writing after a short scoping call.',
    description:
      'For multi-provider practices and clinics with several services. Typical delivery is 5 to 8 weeks, depending mostly on how quickly provider bios and photos arrive.',
    features: [
      'A page for every provider, with their own booking link.',
      'A page for every service or condition you want to be found for.',
      'Insurance, new patient and patient forms pages.',
      'Tracking script review on booking and intake pages.',
      'Up to three location pages with directions and hours.',
      'Redirect plan so current Google rankings carry over.',
      'Two design feedback rounds.',
      'Front desk training on editing providers and plans.',
    ],
    cta: { label: 'Get a Scoped Quote.', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Multi-location or specialty group.',
    priceRange: 'Quoted in writing after a discovery session.',
    description:
      'For groups with many locations or specialties, or with custom intake logic. Typical delivery is 8 to 14 weeks.',
    features: [
      'Location pages for every office.',
      'Provider search by specialty, location and language.',
      'Multi-step intake that routes by service or location.',
      'Structured data on every provider, service and location page.',
      'Content workflow for your marketing or compliance reviewer.',
      'Accessibility check on every page template.',
      'Search Console and analytics setup without ad pixels on intake.',
      'A single point of contact for the whole build.',
    ],
    cta: { label: 'Book a Discovery Call.', modal: true, region: 'us' },
  },
] as const;

/* ─── FAQ ──────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Cost and Value.' },
  { key: 'build', label: 'What to Build.' },
  { key: 'hipaa', label: 'HIPAA and Privacy.' },
  { key: 'access', label: 'Accessibility.' },
  { key: 'local', label: 'Local Search.' },
  { key: 'process', label: 'Process and Timeline.' },
];

const FAQ_ITEMS = [
  /* ── Cost and Value ── */
  {
    category: 'cost',
    question: 'How much does a medical website cost?',
    answer:
      'No published survey prices medical sites on their own, but general small business websites cost $1,000 to $48,000 on average, and small agencies typically charge $6,000 to $12,000, according to WebFX. Where you land depends on four things: how many providers and locations need their own pages, whether booking and intake tools need connecting, how much writing we do for you, and how custom the design is. A one-provider, five-page site sits at the small end. A multi-location group with provider search sits at the large end. We quote every project in writing after a short call, and our website cost guide explains each driver in detail.',
  },
  {
    category: 'cost',
    question: 'Is there a monthly fee to have a medical practice website?',
    answer:
      'Some costs repeat and some do not. Hosting and the domain renew every year. Booking, forms and patient intake tools usually charge a monthly subscription, and that vendor is the one who signs your BAA. The design and build itself is a one-time project with us. Ongoing care or SEO is optional and never a condition of owning your site.',
  },
  {
    category: 'cost',
    question: 'Is a low-cost template website good enough for a medical practice?',
    answer:
      'It can be for a brand new solo practice with one location. The risk is in the details templates skip: forms that email patient answers to a normal inbox, light gray text that fails contrast rules, no page per provider, and ad pixels that load on booking pages by default. If you use a template, fix those four things before launch.',
  },
  {
    category: 'cost',
    question: 'Which platform should a medical website be built on?',
    answer:
      'Pick the platform your front desk can update without calling anyone. We build on WordPress or a modern framework such as Next.js with a simple editor. Patient data does not belong in the website platform at all. It goes into your booking, forms or intake tool, so the website choice is about speed, editing and cost.',
  },

  /* ── What to Build ── */
  {
    category: 'build',
    question: 'What is the best website design for a medical clinic?',
    answer:
      'The best design is the one that gets a worried patient to a booking in the fewest taps. That means a booking button in the same place on every page, a phone number you can tap on mobile, plain words instead of clinical jargon, real photos of your team and space, and text with strong contrast. Calm colors help, but clarity matters more than any palette.',
  },
  {
    category: 'build',
    question: 'What should every medical practice website include?',
    answer:
      'At minimum: a home page that says who you treat and where, a page for each provider, a page for each main service, an insurance and billing page, a new patient page with forms, a location page with hours and directions, and online booking or a request form. Add a privacy notice and an accessibility statement. Everything else is optional.',
  },
  {
    category: 'build',
    question: 'How do I create a website for a doctor or medical practice?',
    answer:
      'Start with the content, not the design. Collect provider bios, headshots, the services you want to be found for, the insurance plans you accept and your hours. Then decide which booking and forms tools you will use and confirm each will sign a BAA. Only then choose a builder or agency. Content is what usually delays a launch.',
  },
  {
    category: 'build',
    question: 'What tools does a doctor\'s website usually connect to?',
    answer:
      'Most practice sites link to four tools: an online scheduling tool, usually part of the practice management or EHR system; a patient portal for results and messages; a secure forms or intake tool; and Google Business Profile for reviews and maps. The website is the front door that points patients to each of them.',
  },
  {
    category: 'build',
    question: 'What are red flags on a medical practice website?',
    answer:
      'Outdated provider lists, a contact form that says nothing about how patient details are handled, no insurance information, generic stock photos instead of your real team, a phone number buried in the footer, and pages that take several seconds to load on a phone. Each one gives a patient a reason to go back to search results and pick the next practice.',
  },
  {
    category: 'build',
    question: 'Do you build websites for dental and specialty practices?',
    answer:
      'Yes. Dental, dermatology, physical therapy, mental health, pediatrics and other specialty sites use the same foundation with different pages. A dental site needs Dentist structured data and pages for each treatment. A therapy practice needs extra care with intake privacy. For dental search visibility after launch, see our dental SEO service.',
  },

  /* ── HIPAA and Privacy ── */
  {
    category: 'hipaa',
    question: 'How do I make my medical website HIPAA compliant?',
    answer:
      'HIPAA applies to patient health information, not to your home page. The work is on pages that collect or show that information. Send form and booking data only to vendors that sign a BAA with your practice, use HTTPS everywhere, keep ad and analytics pixels off patient portals and intake flows unless your compliance lead approves them, and publish your privacy notice. Your compliance lead or attorney makes the final call.',
  },
  {
    category: 'hipaa',
    question: 'Which website builder is HIPAA compliant?',
    answer:
      'No website builder makes a practice HIPAA compliant on its own. What matters is whether the tool that receives patient details will sign a BAA with you. Many practices build public pages on any platform and use a separate form, booking or intake tool that signs a BAA. Ask each vendor for their BAA in writing before you publish a form.',
  },
  {
    category: 'hipaa',
    question: 'Can I use Wix or Squarespace for a medical practice website?',
    answer:
      'For public information pages, many practices do. The question is the forms, chat and booking features that collect patient details. Ask the builder in writing whether it will sign a BAA for those features. If the answer is no, collect patient details through a separate tool that will, and link to it from your site.',
  },
  {
    category: 'hipaa',
    question: 'What is the new HIPAA rule in 2026?',
    answer:
      'The change people usually mean is the HIPAA Security Rule update that HHS proposed on December 27, 2024, the first update to that rule since 2013. It would require stronger cybersecurity from most providers and their business associates. When we checked the HHS page on September 29, 2026, it still described the rule as a proposal, so check HHS for its current status.',
  },
  {
    category: 'hipaa',
    question: 'Can I use Google Analytics or a Meta pixel on my medical website?',
    answer:
      'Be careful where. HHS guidance says tracking code on logged-in pages, such as a patient portal, generally has access to protected health information, and a vendor that receives it needs a BAA. A court vacated one part of that guidance in June 2024, about public pages. Booking and intake flows still collect names and appointment dates, so we keep pixels off them by default.',
  },
  {
    category: 'hipaa',
    question: 'Does a contact form on a medical website need to be HIPAA compliant?',
    answer:
      'If the form invites patients to describe symptoms, a reason for visit, a date of birth or insurance details, treat it as collecting protected health information and route it to a tool that signs a BAA. A plain "send us a message" form that emails your inbox is the most common gap we see on practice sites. Adding one line asking patients not to share medical details helps but does not replace a proper tool.',
  },
  {
    category: 'hipaa',
    question: 'Is FactoryJet HIPAA certified?',
    answer:
      'No, and we will not claim to be. We design sites so patient information goes into the booking, forms and intake tools your practice already has a BAA with, and does not pass through or get stored by the website we build. Your compliance lead approves the tool list during planning, before any design work starts.',
  },

  /* ── Accessibility ── */
  {
    category: 'access',
    question: 'Does my medical website need to be ADA compliant?',
    answer:
      'The Department of Justice says the ADA requires businesses open to the public to give people with disabilities full and equal access, and its web guidance applies that to websites. It lists barriers such as poor color contrast, images without text alternatives, videos without captions, forms without labels and pages that only work with a mouse. A medical practice is a business open to the public.',
  },
  {
    category: 'access',
    question: 'What is WCAG and which level should a practice website meet?',
    answer:
      'WCAG, the Web Content Accessibility Guidelines, is the W3C standard for accessible websites. Level AA is the common target. The HHS rule for organizations that receive federal financial assistance names WCAG 2.1 Level AA. The newest version is WCAG 2.2, and its current W3C Recommendation is dated December 12, 2024. We build to 2.1 AA and pick up 2.2 items where practical.',
  },
  {
    category: 'access',
    question: 'When do HHS-funded practices have to meet WCAG 2.1 AA?',
    answer:
      'Under 45 CFR 84.84, recipients of HHS federal financial assistance with 15 or more employees must meet WCAG 2.1 AA by May 11, 2027. Recipients with fewer than 15 employees have until May 10, 2028. These dates come from the current eCFR text, which was amended in May 2026. Ask your compliance lead whether your practice counts as a recipient.',
  },

  /* ── Local Search ── */
  {
    category: 'local',
    question: 'How do patients find doctors with "near me" searches?',
    answer:
      'Google shows map results first, which draw on your Google Business Profile: category, reviews, hours and distance. Below that, it ranks pages that clearly match the service and place. A location page with your exact address, hours and services, marked up with MedicalClinic or Dentist structured data and matching your profile word for word, gives Google a clear answer.',
  },
  {
    category: 'local',
    question: 'Should each provider have their own page?',
    answer:
      'Yes. Patients search for doctors by name, especially after a referral. A provider page with a photo, credentials, board certification, languages, locations and a booking link can rank for that name and answers the questions patients ask before choosing. One shared "Our Team" page cannot do that for every provider at once.',
  },
  {
    category: 'local',
    question: 'Should we list the insurance plans we accept on the website?',
    answer:
      'Yes. Coverage is one of the first things patients check, and a clear list saves your front desk phone time. Keep it on one page that the front desk can edit, add a short note that coverage depends on the specific plan, and explain self-pay and billing contacts on the same page.',
  },
  {
    category: 'local',
    question: 'Will a new medical website help us rank on Google?',
    answer:
      'A well-built site removes the reasons you cannot rank: missing service pages, slow mobile speed, no structured data and unclear locations. Ranking also depends on reviews, your Google Business Profile and other sites that mention you. If you want ongoing work on those after launch, that is our healthcare SEO service, kept separate from the build.',
  },

  /* ── Process and Timeline ── */
  {
    category: 'process',
    question: 'How long does it take to build a medical website?',
    answer:
      'A site of five pages or fewer can be delivered in 7 days once content and photos are ready. Typical US timelines are 3 to 5 weeks for a small practice, 5 to 8 weeks for a group practice or clinic, and 8 to 14 weeks for multi-location groups or custom intake. Provider bios and headshots are usually what slows things down.',
  },
  {
    category: 'process',
    question: 'Can you redesign our practice website without losing Google rankings?',
    answer:
      'Yes. Before launch we crawl every page on your current site, record which ones get search traffic and map each old address to its new one with a permanent redirect. We keep titles and content that already rank unless you approve a change. After launch we watch Google Search Console for errors and fix them.',
  },
  {
    category: 'process',
    question: 'Can the website book appointments and answer patient questions automatically?',
    answer:
      'Booking comes from the scheduling tool you already use, connected to the site. For routine questions like hours, parking, plans accepted and new patient steps, some practices add an AI assistant that answers from approved content and hands anything clinical to staff. We build those as a separate service, healthcare AI agents.',
  },
  {
    category: 'process',
    question: 'What do we need to give you to get started?',
    answer:
      'Provider bios and real headshots, the list of services you want to be found for, the insurance plans you accept, location details, your logo, and the names of the booking and forms tools your practice uses. One person with authority to approve pages keeps the project on schedule. Bhavesh Barot, our founder, reads every enquiry and usually replies within 2 to 3 hours.',
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

/* ─── Related links (internal) ────────────────────────────────────────────── */

const RELATED_LINKS = [
  { href: '/services/web-design', label: 'Web design services for US businesses.' },
  { href: '/services/healthcare-seo', label: 'Healthcare SEO for practices that want more patients from search.' },
  { href: '/services/dental-seo', label: 'Dental SEO for practices competing on "dentist near me".' },
  { href: '/services/healthcare-ai-agents', label: 'Healthcare AI agents for front desk questions and intake.' },
  { href: '/website-cost', label: 'How much a website costs, and what drives the price.' },
] as const;

const linkClass = 'text-[#B23E13] underline underline-offset-2';

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function MedicalWebsiteDesignPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        id="medical-website-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="medical-website-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="medical-website-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="medical-website-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="medical-website-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'Medical Website Design', href: '/services/medical-website-design' },
          { label: 'Healthcare SEO', href: '/services/healthcare-seo' },
          { label: 'Plans', href: '#plans' },
          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          formSlot={
            <HeroInlineForm
              region="us"
              service="Website Design"
              source="services_medical_website_design_hero"
            />
          }
          eyebrow="MEDICAL WEBSITE DESIGN · USA."
          headline="Medical Website Design for US Practices That Want More Booked Appointments."
          lead="We design and build websites for US clinics, private practices, dental offices and specialty groups. Online booking on every page, a page for each provider, an insurance page, forms that send patient details to a HIPAA-covered tool instead of an inbox, and design built to WCAG 2.1 AA."
          secondaryCta={{ label: 'See What We Build.', href: '#what-we-build' }}
          trustItems={[
            'Founded 2014. 500+ businesses served.',
            '7-day delivery for sites of 5 pages or fewer.',
            'You own the code and content.',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                WHERE PRACTICE SITES LOSE PATIENTS
              </p>
              <p className="mt-4 font-fj-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.025em] text-fj-ink">
                Before and after
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    before: 'A "Contact us" form that emails symptoms and dates of birth to a shared inbox.',
                    after: 'A form that sends patient details to a tool your practice has a BAA with.',
                  },
                  {
                    before: 'One "Our Team" page. Patients searching a doctor\'s name land somewhere else.',
                    after: 'A page for every provider, with credentials and their own booking link.',
                  },
                  {
                    before: 'Light gray text, tiny buttons and a phone number hidden in the footer.',
                    after: 'WCAG 2.1 AA contrast, large tap targets and click-to-call in the header.',
                  },
                ].map((row, i) => (
                  <div key={i} className="rounded-xl border border-fj-neutral-100 bg-fj-neutral-50 p-4">
                    <p className="font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-fj-neutral-600">Common today</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.before}</p>
                    <p className="mt-2 font-fj-body text-[0.75rem] font-medium uppercase tracking-wide text-[#B23E13]">What we build</p>
                    <p className="mt-1 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-600">{row.after}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 1a. ANSWER-FIRST BLOCK ───────────────────────────────────────── */}
        <section className="bg-white py-12 md:py-16 border-y border-fj-neutral-100">
          <div id="medical-short-answer" className="mx-auto max-w-[1120px] px-6 md:px-8 grid grid-cols-1 gap-8 lg:grid-cols-[7fr_5fr] lg:gap-14">
            <div>
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                THE SHORT ANSWER
              </p>
              <h2 className="mt-3 font-fj-display text-[1.75rem] md:text-[2.125rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-fj-ink">
                What good medical website design gives a US practice.
              </h2>
              <p className="mt-4 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-neutral-700">
                A medical practice website has one job: help a patient who is worried, busy or in pain book the right visit with the right provider, without putting their health details at risk. In practice that means five things.
              </p>
              <ol className="mt-5 space-y-3 font-fj-body text-[1rem] leading-[1.6] text-fj-neutral-700 list-decimal pl-5">
                {SHORT_ANSWER_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 md:p-8 self-start">
              <p className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">Timelines we work to</p>
              <ul className="mt-3 space-y-2 font-fj-body text-[0.9375rem] leading-[1.55] text-fj-neutral-700">
                <li>7 days for a site of 5 pages or fewer, once content is ready.</li>
                <li>3 to 5 weeks for a small practice.</li>
                <li>5 to 8 weeks for a group practice or clinic.</li>
                <li>8 to 14 weeks for multi-location or specialty groups.</li>
              </ul>
              <p className="mt-4 font-fj-body text-[0.875rem] leading-[1.55] text-fj-neutral-600">
                Want to see what a build like this costs to plan for? Read our <a href="/website-cost" className={linkClass}>website cost guide</a>.
              </p>
            </div>
          </div>
        </section>

        {/* ── 1b. HERO IMAGE BAND ──────────────────────────────────────────── */}
        <ServiceHeroImageBand
          imageSrc="/images/services/healthcare-seo-eeat.webp"
          imageAlt="A doctor in a white coat typing on a laptop at a clinic desk, next to a stethoscope."
          stats={[
            { value: '2014', label: 'Year FactoryJet Was Founded.' },
            { value: '500+', label: 'Businesses Served.' },
            { value: '7 Days', label: 'Delivery for Sites of 5 Pages or Fewer.' },
            { value: 'WCAG 2.1 AA', label: 'Accessibility Level We Build To.' },
          ]}
        />

        {/* ── 2. TRUST STATEMENT ───────────────────────────────────────────── */}
        <BigThreeTrustBlock
          variant="statement"
          eyebrow="WHAT WE PROMISE, AND WHAT WE DO NOT"
          headline="We build the site and connect the tools your practice already trusts. We never claim a HIPAA certification we do not hold."
        />

        {/* ── 3. WHAT MAKES MEDICAL DIFFERENT ──────────────────────────────── */}
        <ServiceExplanation
          eyebrow="MEDICAL WEBSITE DESIGN EXPLAINED"
          headline="Why a Medical Practice Website Needs Different Rules From Any Other Business Site."
          lead="A restaurant site that leaks a customer email is a nuisance. A practice site that sends a patient's reason for visit to an ad network is a privacy problem. Medical sites also carry accessibility rules with dates attached. So the build starts with where patient data goes, then moves to design."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Online Booking', 'BAA Vendors', 'Provider Pages', 'Insurance Page', 'WCAG 2.1 AA', 'Physician Schema', 'Local SEO', 'Mobile Speed'].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p>
                HHS, the federal health department, published guidance on tracking code used by practices and their vendors. It says tracking technologies on logged-in pages such as a patient portal or telehealth platform generally have access to protected health information. It also says that when a vendor receives that information, the practice needs a business associate agreement with them. Read the <a href={SOURCES.hhsTracking.url} className={linkClass} rel="noopener" target="_blank">HHS tracking guidance</a> for the full text.
              </p>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  HHS gives this example itself: a patient books an appointment on a clinic website that runs third-party tracking, and the tracker may receive details from that booking.
                </p>
              </div>
              <p>
                On June 20, 2024, a federal court in Texas vacated one part of that guidance: the idea that HIPAA is triggered just by linking a visitor&apos;s IP address to a visit to a public page about a health condition or a provider. HHS added that ruling to the top of its page. The parts about portals and logged-in pages were not vacated. Booking and intake flows still collect names, contact details and appointment dates, so we treat them as sensitive by default.
              </p>
              <p>
                Accessibility has dates too. Under 45 CFR 84.84, organizations that receive HHS federal financial assistance must make their websites meet WCAG 2.1 Level AA: by May 11, 2027 with 15 or more employees, and by May 10, 2028 with fewer. The <a href={SOURCES.ecfr504.url} className={linkClass} rel="noopener" target="_blank">current eCFR text</a> shows those dates, which were pushed back one year by an amendment in May 2026.
              </p>
              <p>
                None of this means your site has to feel clinical. It means the plumbing gets decided first. After that, we design for calm: plain words, real photos of your team and space, and a booking button that is always one tap away. If you need a general business site rather than a practice site, start with our <a href="/services/web-design" className={linkClass}>web design services</a>.
              </p>
            </>
          }
          rightSlot={
            <div
              className="w-full overflow-hidden rounded-2xl bg-white shadow-sm"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: '2px',
                borderTopColor: '#F05A28',
              }}
            >
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-600"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Every Practice Site Includes
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { category: 'Booking', tools: 'Your scheduler, on every page.' },
                  { category: 'Forms', tools: 'Routed to a BAA-covered tool.' },
                  { category: 'Providers', tools: 'One page each, with schema.' },
                  { category: 'Insurance', tools: 'Plans accepted, self-pay info.' },
                  { category: 'Access', tools: 'WCAG 2.1 AA, hand-tested.' },
                  { category: 'Local', tools: 'A page per location.' },
                  { category: 'Tracking', tools: 'No ad pixels on intake.' },
                  { category: 'Mobile', tools: 'Click-to-call, fast pages.' },
                ].map((item) => (
                  <div key={item.category} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(240,90,40,0.50)]" aria-hidden="true" />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.category}</p>
                    </div>
                    <p className="text-right font-fj-body text-[0.8125rem] text-fj-neutral-600">{item.tools}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                  You own the code and content. Care plans are optional.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 4. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <div id="what-we-build">
          <IndustriesGrid
            variant="cards"
            eyebrow="WHAT WE BUILD FOR MEDICAL PRACTICES"
            headline="Seven Parts of a Medical Website That Books Patients."
            lead="Each part answers a question a patient asks before they book. Here is what we build, in plain words."
            sectors={MEDICAL_BUILD}
          />
        </div>

        {/* ── 5. THE RULES, WITH SOURCES ───────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE RULES THAT SHAPE A US MEDICAL SITE."
          headline="Two Dates and One Number Every Practice Website Should Be Built Around."
          leadParagraphs={[
            'Most medical website pages tell you to be "HIPAA compliant" and "ADA compliant" without saying what that means for a web page. Here is what the primary sources say, read on September 29, 2026.',
            'The Department of Justice web guidance says the ADA covers businesses open to the public and names the barriers it sees most: poor contrast, missing image text, uncaptioned video, unlabeled forms and mouse-only menus. The newest version, WCAG 2.2, carries a W3C Recommendation date of December 12, 2024.',
            'HHS also proposed the first update to the HIPAA Security Rule since 2013 on December 27, 2024. When we checked, HHS still listed it as a proposed rule. If it becomes final, it mostly affects your systems and vendors, and a well-planned site already keeps patient data out of the website itself.',
          ]}
          stats={RULE_STATS}
        />

        {/* ── 6. THE TRACKING PROBLEM (ONLY DARK SECTION) ──────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PART MOST PRACTICE SITES GET WRONG."
          headline="The riskiest thing on many practice websites is a few lines of marketing code on the booking page."
          lead="Analytics and ad pixels are often added by whoever set up the site, then forgotten. They load on every page by default, including the pages where patients type their name, reason for visit and appointment time."
          pillars={[
            {
              title: 'Portals and logged-in pages.',
              body: 'HHS guidance says tracking code on user-authenticated pages generally has access to protected health information. We keep ad and social pixels off portal links and any logged-in area, and we do not embed third-party chat on those pages without a BAA.',
            },
            {
              title: 'Booking and intake flows.',
              body: 'A patient typing their name and choosing an appointment time is sharing identifying details. We load only what the booking tool needs on those steps, and we measure bookings with a simple count that carries no patient details.',
            },
            {
              title: 'Public information pages.',
              body: 'A June 2024 court ruling narrowed what HHS can say about public pages. Your compliance lead still decides what runs there. We give them a written list of every script on every page template so the decision is informed.',
            },
          ]}
        />

        {/* ── 7. MID-PAGE CTA ──────────────────────────────────────────────── */}
        <MidPageCTA
          headline="Want to know what your booking page sends to Google and Meta?"
          sub="Send us your practice website. We will list every third-party script that loads on your booking and contact pages, flag which forms collect patient details, and tell you what we would change."
          label="Get a free practice site review"
          note="Bhavesh Barot, our founder, reads every enquiry and usually replies within 2 to 3 hours."
        />

        {/* ── 8. LISTICLE: WHO IS ON PAGE ONE ──────────────────────────────── */}
        <section className="bg-fj-cream py-14 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p
              className="font-fj-mono font-medium uppercase text-[#B23E13]"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              YOUR OPTIONS, FROM GOOGLE PAGE ONE
            </p>
            <h2 className="mt-3 max-w-[780px] font-fj-display text-[1.75rem] md:text-[2.25rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-fj-ink">
              Five kinds of medical website partner, and who each one suits.
            </h2>
            <p className="mt-4 max-w-[780px] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-neutral-700">
              We searched &quot;medical website design&quot; on Google in the US on {SERP_CHECK_DATE} and grouped the eight organic results by type. Disclosure: FactoryJet wrote this list and is one of the options on it. We have no business relationship with the other companies named, and we describe them only from their own public pages.
            </p>
            <ol className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {PARTNER_TYPES.map((p, i) => (
                <li
                  key={p.name}
                  className={`rounded-2xl border bg-white p-6 md:p-7 ${i === PARTNER_TYPES.length - 1 ? 'border-[#F05A28] lg:col-span-2' : 'border-fj-neutral-200'}`}
                >
                  <p className="font-fj-mono text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#B23E13]">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-fj-display text-[1.25rem] font-bold leading-[1.25] text-fj-ink">{p.name}</h3>
                  <p className="mt-2 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">{p.examples}</p>
                  <p className="mt-2 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-neutral-600">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW THE OPTIONS COMPARE."
          headline="FactoryJet vs. Healthcare Marketing Package vs. DIY Builder vs. Generic Freelancer."
          lead="Every option can produce a good-looking site. The differences show up in who owns it, where patient data goes and whether accessibility was tested."
          pullQuote={{
            stat: 'You own it.',
            caption: 'The code, the content and the domain are yours at handover. Ongoing care is optional, never a condition.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Columns describe typical setups, not any named company, and individual vendors vary. Ask any vendor, including us, to put ownership, BAA and accessibility answers in writing."
        />

        {/* ── 10. PROCESS ──────────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Practice Audit to Live Website: Five Stages."
          lead="Where patient data goes gets decided in stage two, before any design work. That order is what keeps a practice site from being rebuilt later."
          stages={MEDICAL_JOURNEY_STAGES}
          closingNote="7 DAYS FOR 5 PAGES OR FEWER. 3 TO 5 WEEKS SMALL PRACTICE. 5 TO 8 WEEKS GROUP OR CLINIC. 8 TO 14 WEEKS MULTI-LOCATION."
        />

        {/* ── 11. ENGAGEMENT TIERS ─────────────────────────────────────────── */}
        <div id="plans">
          <PricingTiers
            eyebrow="HOW WE SCOPE A PRACTICE SITE."
            headline="Three Ways We Build Medical Websites, Sized to Your Practice."
            lead="Every quote is agreed in writing before work starts. What changes between tiers is the number of providers, services and locations, and how much intake logic you need."
            tiers={PRICING_TIERS}
            footnote="Hosting, domain, and booking, forms or intake tool subscriptions are separate and paid to those vendors. You own the code, content and CMS login at handover."
          />
        </div>

        {/* ── 12. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS."
          headline="Medical Website Design Questions, Answered Plainly."
          lead="These come from the questions US patients and practice owners type into Google about medical, healthcare and doctor websites."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 13. SOURCES + RELATED LINKS ──────────────────────────────────── */}
        <section className="py-12 bg-[#FAFAF7]">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8 grid grid-cols-1 gap-10 lg:grid-cols-[7fr_5fr]">
            <div>
              <p className="font-fj-mono text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">Related services.</p>
              <h2 className="mt-2 font-fj-display text-[1.5rem] font-bold text-fj-ink">Where to go next.</h2>
              <ul className="mt-5 grid grid-cols-1 gap-3">
                {RELATED_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="block rounded-lg border border-[#E5E5E0] bg-white p-4 font-fj-body text-[0.9375rem] font-semibold leading-snug text-fj-ink transition-colors hover:border-[#F05A28]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-fj-mono text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">Sources.</p>
              <h2 className="mt-2 font-fj-display text-[1.5rem] font-bold text-fj-ink">What we read.</h2>
              <ul className="mt-5 space-y-3 font-fj-body text-[0.875rem] leading-[1.55] text-fj-neutral-700">
                {Object.values(SOURCES).map((s) => (
                  <li key={s.url}>
                    <a href={s.url} className={linkClass} rel="noopener" target="_blank">{s.label}</a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-fj-body text-[0.8125rem] leading-[1.55] text-fj-neutral-600">
                All read on September 29, 2026. This page explains how we build websites. It is not legal advice, and your compliance lead or attorney has the final say on HIPAA and accessibility questions.
              </p>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ────────────────────────────────────────────────── */}
        <FinalCTA
          variant="light"
          eyebrow="START WITH A FREE PRACTICE SITE REVIEW."
          headline="Send Us Your Practice Website and Get a Plain List of What to Fix."
          sub="We check where your forms send patient details, which scripts load on your booking pages, how your provider and location pages are set up and where accessibility fails. You get the list and a written quote. No retainer, no pressure."
          primaryCta={{ label: 'Get a Free Practice Site Review.', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See All Web Design Services.', href: '/services/web-design' }}
          objectionHandler="Quoted in writing before work starts. You own everything at handover. The founder reads every enquiry."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

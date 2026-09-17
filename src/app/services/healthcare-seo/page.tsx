import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import TalkToFounder from '@/components/v2/TalkToFounder';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/healthcare-seo, rebuilt 2026-09-17 (ranking diagnosis + health tech offer)

   Why this rebuild (Search Console + URL Inspection + live HTML, 2026-09-17):
   - The 47.9 average position (243 impressions, Jun 17 to Sep 15) is a blend, not
     a ranking. Of the 138 query-attributed impressions, 91% landed on or before
     Aug 2, 94% sat at position 45 or deeper, 94% were desktop, and 61% were
     pharma, biotech, medical device or diagnostics queries this page never
     targeted. The head term "healthcare seo agency" logged 1 impression, at 78.
     Since Aug 3 the page has had about one query-attributed impression a week.
   - Indexing was never the problem: URL Inspection PASS, Google canonical equals
     ours, last crawl Aug 30, single-hop 301 from /us/services/healthcare-seo.
   - Real limits: page one for the head term is authority-gated (weakest result
     100 referring domains), only four internal links point here, the H1 never
     said "healthcare SEO agency", most of the page was local-practice SEO that
     overlaps /services/dental-seo and /services/local-seo, and a YMYL page had
     trust defects: unsourced stats, a false "GA4 Business Associate Agreement"
     claim, "HIPAA-compliant" claims, a count-up counter that server-rendered
     "0+ businesses served", tab content missing from the HTML, and IndustriesGrid
     rendering unverified percentage claims.

   Rules for editing this page:
   - Every statistic links to a fetch-verified source in SOURCE_LIST.
   - Never claim HIPAA certification or compliance status. We describe a process;
     the client's privacy officer or counsel decides.
   - Never name, describe or hint at any healthcare client or prospect.
   - No invented results, no pricing figures, no em dashes.
   - Exactly one dark section: StrategicDarkSection.
   - Schema is derived, never hand-copied: FAQPage from FAQ_ITEMS, Service offers
     from ENGAGEMENTS, BreadcrumbList from BREADCRUMB_ITEMS, WebPage citations
     from SOURCE_LIST.

   Keywords (US Google Ads volumes via DataForSEO): healthcare seo agency 1,600
   (shares its volume with "seo agency for healthcare"), healthcare seo services
   590, seo for healthcare 590, medical seo services 590, healthcare seo 390,
   healthcare seo company 320, medical seo agency 260, medical seo company 260.
   People Also Ask pulled 2026-09-17 for: healthcare seo, medical seo, hipaa
   compliant seo, medical device seo, healthtech marketing, b2b healthcare
   marketing, healthcare it marketing.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/healthcare-seo';
const HERO_IMAGE = 'https://factoryjet.com/images/services/healthcare-seo.webp';
const PAGE_TITLE = 'Healthcare SEO Agency for Clinics & Health Tech | FactoryJet';
const PAGE_DESCRIPTION =
  'Healthcare SEO agency for practices, clinics and health tech companies. Get found on Google and in AI answers with pages your compliance team can approve.';
const H1_TEXT = 'Healthcare SEO agency for practices, clinics and health tech companies.';
const PAGE_MODIFIED = '2026-09-17';
const REVIEWED_DATE = 'September 17, 2026';

const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const INK = '#0F0F12';
const CREAM = '#FAFAF7';

const H2_STYLE: CSSProperties = {
  fontSize: 'clamp(1.625rem, 3vw, 2.375rem)',
  lineHeight: 1.1,
  letterSpacing: '-0.025em',
};
const H3_STYLE: CSSProperties = {
  fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)',
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
  color: INK,
};
const LEAD_STYLE: CSSProperties = { fontSize: '1.0625rem', lineHeight: 1.65 };
const BODY_STYLE: CSSProperties = { color: 'rgba(15,15,18,0.74)', fontSize: '1rem', lineHeight: 1.7 };
const LINK_CLASS = 'font-semibold underline underline-offset-2';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [
      {
        url: HERO_IMAGE,
        width: 1344,
        height: 1024,
        alt: 'FactoryJet healthcare SEO agency for practices, clinics and health tech companies',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description:
      'Healthcare SEO for practices, clinics and health tech companies: Google rankings, AI answers and compliance-aware content.',
    images: [HERO_IMAGE],
  },
  alternates: {
    // Literal on purpose: scripts/validate-build.mjs checks canonical literals against the route.
    canonical: 'https://factoryjet.com/services/healthcare-seo',
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
   Sources. Every URL fetch-verified on 2026-09-17 with the quoted wording
   present on the page. Rendered in the Sources section AND in WebPage.citation.
───────────────────────────────────────────────────────────────────────────── */

interface Source {
  title: string;
  publisher: string;
  url: string;
}

const SOURCE_RATER8_AI: Source = {
  title: '2026 Patient Choice Report (press release, June 3, 2026)',
  publisher: 'rater8',
  url: 'https://www.prnewswire.com/news-releases/rater8-study-finds-that-patients-searching-for-a-new-doctor-trust-ai-tools-more-than-google-and-physician-referrals-302789633.html',
};
const SOURCE_RATER8_REVIEWS: Source = {
  title: 'How Patients Choose Their Doctors (press release, February 12, 2025)',
  publisher: 'rater8',
  url: 'https://www.prnewswire.com/news-releases/rater8-study-finds-that-online-reviews-inform-care-decisions-but-more-than-half-of-patients-are-not-leaving-them-302374399.html',
};
const SOURCE_FORRESTER: Source = {
  title: 'The State Of Business Buying, 2026 (press release, January 21, 2026)',
  publisher: 'Forrester',
  url: 'https://www.forrester.com/press-newsroom/forrester-2026-the-state-of-business-buying/',
};
const SOURCE_GOOGLE_HELPFUL: Source = {
  title: 'Creating helpful, reliable, people-first content',
  publisher: 'Google Search Central',
  url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
};
const SOURCE_GOOGLE_AI_FEATURES: Source = {
  title: 'AI features and your website',
  publisher: 'Google Search Central',
  url: 'https://developers.google.com/search/docs/appearance/ai-features',
};
const SOURCE_GOOGLE_LOCAL: Source = {
  title: 'Tips to improve your local ranking on Google',
  publisher: 'Google Business Profile Help',
  url: 'https://support.google.com/business/answer/7091',
};
const SOURCE_GA_HIPAA: Source = {
  title: 'HIPAA and Google Analytics',
  publisher: 'Google Analytics Help',
  url: 'https://support.google.com/analytics/answer/13297105',
};
const SOURCE_OPENAI_BOTS: Source = {
  title: 'Overview of OpenAI crawlers',
  publisher: 'OpenAI',
  url: 'https://developers.openai.com/api/docs/bots',
};
const SOURCE_HL7_FHIR: Source = {
  title: 'FHIR summary',
  publisher: 'HL7',
  url: 'https://hl7.org/fhir/summary.html',
};
const SOURCE_FTC_HEALTH: Source = {
  title: 'Health Products Compliance Guidance',
  publisher: 'Federal Trade Commission',
  url: 'https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance',
};

const SOURCE_LIST: ReadonlyArray<Source> = [
  SOURCE_RATER8_AI,
  SOURCE_RATER8_REVIEWS,
  SOURCE_FORRESTER,
  SOURCE_GOOGLE_HELPFUL,
  SOURCE_GOOGLE_AI_FEATURES,
  SOURCE_GOOGLE_LOCAL,
  SOURCE_GA_HIPAA,
  SOURCE_OPENAI_BOTS,
  SOURCE_HL7_FHIR,
  SOURCE_FTC_HEALTH,
];

function SourceLink({ source, children }: { source: Source; children: ReactNode }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className={LINK_CLASS}
      style={{ color: ORANGE_DARK }}
    >
      {children}
    </a>
  );
}

function InternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={LINK_CLASS} style={{ color: ORANGE_DARK }}>
      {children}
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Breadcrumbs: one array feeds the visible trail AND the BreadcrumbList schema.
───────────────────────────────────────────────────────────────────────────── */

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Healthcare SEO', url: PAGE_URL },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const FACTS: ReadonlyArray<{ figure: string; text: string; source: Source; sourceLabel: string }> = [
  {
    figure: '36%',
    text: 'of US patients who searched for a doctor in the past year named AI tools like ChatGPT as an influence on their choice, ahead of Google search (34%) and doctor recommendations (32%).',
    source: SOURCE_RATER8_AI,
    sourceLabel: 'rater8, 2026 Patient Choice Report',
  },
  {
    figure: '84%',
    text: 'of patients say they check online reviews before choosing a new healthcare provider.',
    source: SOURCE_RATER8_REVIEWS,
    sourceLabel: 'rater8 patient survey, 2025',
  },
  {
    figure: '13',
    text: 'people inside the buying company take part in a typical B2B buying decision, plus nine outside influencers. Forrester also found that searches in generative AI (genAI) tools are now where B2B buyers start.',
    source: SOURCE_FORRESTER,
    sourceLabel: 'Forrester, The State Of Business Buying, 2026',
  },
  {
    figure: 'No BAA',
    text: 'Google does not offer a Business Associate Agreement for Google Analytics. That is the contract HIPAA, the US federal health privacy law, requires before a vendor handles patient health information for you. Google says HIPAA-regulated organizations must not use Google Analytics in a way that exposes that information to Google.',
    source: SOURCE_GA_HIPAA,
    sourceLabel: 'Google Analytics Help',
  },
];

interface Priority {
  number: string;
  title: string;
  body: ReactNode;
  signal: string;
}

const PRACTICE_PRIORITIES: ReadonlyArray<Priority> = [
  {
    number: '01',
    title: 'A Google Business Profile that matches reality',
    body: 'Correct categories, every service you offer, accurate hours, real photos and one profile per location. Wrong or missing categories keep good practices out of map results for services they provide.',
    signal: 'Map results for near me searches',
  },
  {
    number: '02',
    title: 'A review program that protects patient privacy',
    body: 'Ask every patient at the same point in their visit, and reply without confirming anyone is a patient or mentioning their care. Your privacy officer approves the reply templates first.',
    signal: 'Review count, rating and replies',
  },
  {
    number: '03',
    title: 'Provider pages with real credentials',
    body: 'Each clinician gets a page with licensure, board certifications, training and the conditions they treat. These pages carry the experience and expertise Google looks for on health content.',
    signal: 'Trust signals on every clinical page',
  },
  {
    number: '04',
    title: 'Service and condition pages your clinician signs off',
    body: 'One page per service or condition patients search for, answering their real questions, with sources and a named reviewer and date. We draft. Your clinician corrects and approves.',
    signal: 'Rankings for treatments and conditions',
  },
  {
    number: '05',
    title: 'Structured data that matches the page',
    body: (
      <>
        Schema markup such as MedicalClinic, Physician and MedicalProcedure labels what each page is about.{' '}
        <SourceLink source={SOURCE_GOOGLE_AI_FEATURES}>Google advises</SourceLink> making sure structured data
        matches the visible text, so we only mark up what the page shows.
      </>
    ),
    signal: 'Clear signals for Google and AI answers',
  },
  {
    number: '06',
    title: 'Tracking that keeps patient data out',
    body: 'Appointment forms, patient portals and condition pages are where analytics and ad tags can pick up health information. We map every tag, flag risky ones and set up measurement your compliance team accepts.',
    signal: 'Measurement without privacy risk',
  },
];

const MATRIX_ROWS: ReadonlyArray<{
  type: string;
  looks: string;
  pages: string;
  schema: string;
  proof: string;
}> = [
  {
    type: 'Private practice or clinic',
    looks: 'Google map results, reviews, AI assistants',
    pages: 'Service, condition and provider pages',
    schema: 'MedicalClinic, Physician',
    proof: 'Reviews, credentials, named reviewers',
  },
  {
    type: 'Dental practice',
    looks: 'Google map results and reviews',
    pages: 'Treatment pages, such as implants and aligners',
    schema: 'Dentist, MedicalProcedure',
    proof: 'Reviews, dentist credentials',
  },
  {
    type: 'Hospital or health system',
    looks: 'Local results for each location, condition searches',
    pages: 'Location, service line and doctor finder pages',
    schema: 'Hospital, MedicalClinic, Physician',
    proof: 'Accreditations, physician credentials',
  },
  {
    type: 'Telehealth or digital health app',
    looks: 'Google, AI assistants, app stores',
    pages: 'Condition, coverage and how-it-works pages',
    schema: 'Organization, MedicalWebPage',
    proof: 'Clinician reviewers, a clear privacy policy',
  },
  {
    type: 'EHR-connected or healthcare IT software',
    looks: 'AI assistants, Google, ratings sites such as KLAS and G2',
    pages: 'Integration, security and role pages',
    schema: 'SoftwareApplication, Organization',
    proof: 'Live integrations, security audits or certifications you actually hold',
  },
  {
    type: 'Billing and claims (revenue cycle management) software vendor',
    looks: 'AI assistants, Google, ratings sites',
    pages: 'Workflow, denial and prior authorization pages',
    schema: 'SoftwareApplication, FAQPage',
    proof: 'Customer results you are cleared to share',
  },
  {
    type: 'Medical device company',
    looks: 'Google, AI assistants, specialty publications',
    pages: 'Product, indication and evidence summary pages',
    schema: 'Product, Organization',
    proof: 'Regulatory status stated exactly as cleared or approved',
  },
];

const MISTAKES = [
  {
    title: 'Trust signals added last instead of first',
    body: 'Google gives extra weight to trust on health topics. A page with no named author, reviewer, sources or credentials can have clean technical SEO and still lose to a page that shows who stands behind it. We build bylines, reviewers and sources into the first draft.',
  },
  {
    title: 'Reviews left to chance',
    body: 'Reviews help local rankings and shape which provider a patient books. Asking only when someone remembers leaves that lever idle. A steady, privacy-safe review program moves rankings and bookings at the same time.',
  },
  {
    title: 'Analytics tags that can see patient data',
    body: 'Google does not offer a Business Associate Agreement for Google Analytics. The risk hides in tags on appointment forms, portals and condition pages. We map your tags and flag the risks, and your privacy officer or counsel makes the call.',
  },
];

const BUYING_PATH: ReadonlyArray<{ title: string; body: ReactNode }> = [
  {
    title: 'The shortlist starts in an answer.',
    body: (
      <>
        <SourceLink source={SOURCE_FORRESTER}>Forrester&apos;s 2026 buyer research</SourceLink> found that genAI
        searches are the starting point for B2B buyers. Someone types a question like &quot;best prior authorization
        software for a mid-size health system&quot; into ChatGPT or Google, and the vendors named in that answer make
        the first list.
      </>
    ),
  },
  {
    title: 'Every committee member checks a different claim.',
    body: 'Forrester puts a typical buying decision at 13 people inside the buying company and nine outside influencers. The CIO looks up integrations, the security team looks for proof of security audits, clinical leaders look at workflow and finance looks for a return on the investment. Each needs a page that answers their question.',
  },
  {
    title: 'AI answers can only use pages they can reach.',
    body: (
      <>
        <SourceLink source={SOURCE_GOOGLE_AI_FEATURES}>Google says</SourceLink> a page must be indexed and eligible to
        show a snippet to appear as a link in AI Overviews and AI Mode.{' '}
        <SourceLink source={SOURCE_OPENAI_BOTS}>OpenAI says</SourceLink> sites that block OAI-SearchBot will not be
        shown in ChatGPT search answers. Text locked behind a form or a login cannot be read at all.
      </>
    ),
  },
  {
    title: 'Buyers verify before they trust.',
    body: 'Forrester also found that AI search tools often give incomplete or unreliable information, so buyers look for validation from trusted sources. For a health tech vendor, that means peer reviews, analyst coverage, partner listings and precise product pages.',
  },
];

const HEALTHTECH_CONTENT: ReadonlyArray<{ title: string; body: ReactNode }> = [
  {
    title: 'Integration pages, one per system.',
    body: 'A page for each EHR or platform you connect to, such as Epic, Oracle Health or athenahealth, stating what data moves, in which direction, and how: a FHIR API, an HL7 v2 interface or a file transfer. List only integrations that are live.',
  },
  {
    title: 'Interoperability in plain words.',
    body: (
      <>
        FHIR, short for Fast Healthcare Interoperability Resources, is a{' '}
        <SourceLink source={SOURCE_HL7_FHIR}>standards framework created by HL7</SourceLink> that systems use to share
        health data. Say which FHIR version and resources you support, and what that means for a hospital IT team.
      </>
    ),
  },
  {
    title: 'A security and privacy center reviewers can use.',
    body: 'Explain how you handle and store data, which security audits or certifications you actually hold, and how to request documents. Public answers save your team from retyping the same security questionnaire answers for every deal.',
  },
  {
    title: 'Revenue cycle proof pages.',
    body: "If you sell revenue cycle management (RCM) software, the tools behind billing, claims and payments, describe the problem in your buyer's words, such as denials or prior authorization delays. Show the workflow step by step, and use only results a customer has approved you to share.",
  },
  {
    title: 'Pages for each role on the committee.',
    body: 'Short pages for the CIO, the chief information security officer (CISO), clinical leaders, the billing and claims lead and the purchasing team, each answering what that person has to approve.',
  },
  {
    title: 'Fair comparison pages.',
    body: 'Buyers ask AI assistants to compare vendors. A specific, honest comparison you publish gives those answers accurate material to draw on.',
  },
  {
    title: 'A glossary of buyer terms.',
    body: 'Clear one-paragraph definitions of terms like prior authorization, clearinghouse or FHIR API are easy for AI answers to quote and easy for buyers to forward to colleagues.',
  },
];

const TECHNICAL_WORK: ReadonlyArray<ReactNode> = [
  <>
    Put product, integration and documentation text in the HTML.{' '}
    <SourceLink source={SOURCE_GOOGLE_AI_FEATURES}>Google lists</SourceLink> making important content available in
    textual form among its best practices for AI features.
  </>,
  'Publish an ungated summary for every gated guide, so search engines and AI assistants can read the main points.',
  'Allow the crawlers you want to be cited by, such as Googlebot, Bingbot, OAI-SearchBot and PerplexityBot. Recheck your robots.txt file and your CDN (content delivery network) settings after every site change, since either one can block them.',
  'Add structured data that matches what the page shows: Organization, SoftwareApplication and FAQPage where they fit.',
  'Link problem pages to solution, integration, security and proof pages, so readers and crawlers can follow the path.',
  "Track whether AI answers name you for your buyers' key questions, next to rankings and demo requests.",
];

const EEAT_CARDS: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: 'Experience',
    body: 'Has the author actually done this? On a practice site, the treating clinician. On a health tech site, the person who has led real implementations.',
  },
  {
    title: 'Expertise',
    body: 'Does the author know the subject deeply? Licensure and credentials for clinical topics, real technical depth for FHIR, security or revenue cycle topics.',
  },
  {
    title: 'Authoritativeness',
    body: 'Do others vouch for you? Mentions in trade press, peer reviews, analyst coverage, partner listings and links from respected sites.',
  },
  {
    title: 'Trustworthiness',
    body: 'Is the page accurate, honest and safe? Sources for claims, a named reviewer and date, clear privacy information and no overpromising. Google calls trust the most important of the four.',
  },
];

const REVIEW_STEPS: ReadonlyArray<{ title: string; body: ReactNode }> = [
  {
    title: 'Source first.',
    body: (
      <>
        Every claim gets a source before drafting starts. The{' '}
        <SourceLink source={SOURCE_FTC_HEALTH}>FTC expects</SourceLink> claims about the health benefits or safety of
        health products to be backed by competent and reliable scientific evidence, so an unsourced claim stays a note,
        not copy.
      </>
    ),
  },
  {
    title: 'Plain-language draft.',
    body: 'We write for the reader, explain every term on first use, and mark each claim with its source.',
  },
  {
    title: 'Expert review.',
    body: 'Your clinician, product lead or engineer checks accuracy and corrects anything we got wrong.',
  },
  {
    title: 'Compliance and legal review.',
    body: "Your team checks regulated wording, such as privacy statements, security claims and how a device's regulatory status is described. We flag risky lines. We do not give legal advice.",
  },
  {
    title: 'Publish with a named reviewer and date.',
    body: 'Then re-review on a schedule, and sooner when a regulation, product or guideline changes.',
  },
];

const HEALTHCARE_SEO_JOURNEY: ReadonlyArray<ServiceJourneyStage> = [
  {
    number: '01',
    title: 'Healthcare SEO audit',
    description:
      'We review technical health, trust signals, local or B2B visibility, tracking risk and the questions you should rank for. You get a scorecard and a 90-day plan you own.',
  },
  {
    number: '02',
    title: 'Technical and trust baseline',
    description:
      'We fix crawl and speed problems, add bylines, reviewers and sources, correct structured data, and clean up risky tracking.',
  },
  {
    number: '03',
    title: 'Local or B2B visibility',
    description:
      'Practices: Google Business Profile, listings such as Healthgrades and Zocdoc, and reviews. Health tech: integration, security and comparison pages, plus the review sites and partner listings buyers check.',
  },
  {
    number: '04',
    title: 'Reviewed content',
    description:
      'Service, condition, role and proof pages in plain language, sourced and approved by your reviewers before they go live.',
  },
  {
    number: '05',
    title: 'Monthly reporting',
    description:
      'Rankings, map positions or demo requests, and AI answer visibility for your key questions, in one monthly report.',
  },
];

interface Engagement {
  name: string;
  cadence: string;
  description: string;
  features: ReadonlyArray<string>;
  ctaLabel: string;
}

const ENGAGEMENTS: ReadonlyArray<Engagement> = [
  {
    name: 'Healthcare SEO Audit',
    cadence: 'One-time project',
    description:
      'A full review of technical health, trust signals, visibility and tracking risk, with a 90-day plan you own.',
    features: [
      'Technical and E-E-A-T gap review',
      'Local or B2B visibility review',
      'Tracking and patient data risk review',
      'AI answer visibility check',
      'One strategy call with the founder',
    ],
    ctaLabel: 'Book the audit',
  },
  {
    name: 'Practice and Clinic Growth',
    cadence: 'Monthly retainer',
    description: 'For practices and clinics that want more patients from local search.',
    features: [
      'Google Business Profile and listings',
      'Privacy-safe review program',
      'Provider, service and condition pages',
      'Monthly local rankings report',
    ],
    ctaLabel: 'Talk about local growth',
  },
  {
    name: 'Health Tech Authority',
    cadence: 'Monthly retainer',
    description:
      'For health tech, healthcare IT and medical device companies that sell to hospitals, clinics and health insurers.',
    features: [
      'Integration, security and proof pages',
      'Compliance-aware review workflow',
      'AI answer visibility for buyer questions',
      'Bi-weekly review with the founder',
    ],
    ctaLabel: 'Talk about health tech SEO',
  },
  {
    name: 'Enterprise and Multi-location',
    cadence: 'Custom scope',
    description: 'For health systems, multi-location groups and larger health tech companies.',
    features: [
      'Custom scope and reporting',
      'Plans across many locations or products',
      'Review governance for many approvers',
      'Quarterly executive review',
    ],
    ctaLabel: 'Talk to the founder',
  },
];

const RELATED_SERVICES: ReadonlyArray<{ href: string; title: string; body: string }> = [
  {
    href: '/services/dental-seo',
    title: 'Dental SEO',
    body: 'Map results, reviews and treatment pages for dental practices.',
  },
  {
    href: '/services/local-seo',
    title: 'Local SEO',
    body: 'Google Business Profile work and local rankings for any location-based business.',
  },
  {
    href: '/services/ai-seo',
    title: 'AI SEO',
    body: 'Getting named in ChatGPT, Perplexity and Google AI Overviews answers.',
  },
  {
    href: '/services/seo-audit',
    title: 'SEO audit',
    body: 'A technical and content audit when you need the diagnosis before the plan.',
  },
  {
    href: '/services/ai-agents-for-healthcare',
    title: 'AI agents for healthcare',
    body: 'Scheduling, intake and front office work handled by AI agents, with a clear clinical boundary.',
  },
  {
    href: '/services/saas-website-design',
    title: 'SaaS website design',
    body: 'Product websites for software companies, including health tech.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data. Questions grounded in People Also Ask (pulled 2026-09-17), job and
   career questions excluded. FAQPage schema is generated from this array.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Healthcare SEO basics' },
  { key: 'practices', label: 'Practices and clinics' },
  { key: 'healthtech', label: 'Health tech and healthcare IT' },
  { key: 'ai', label: 'AI search' },
  { key: 'privacy', label: 'Privacy and compliance' },
  { key: 'engagement', label: 'Cost and choosing an agency' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Healthcare SEO basics ─────────────────────────────────────────────────
  {
    category: 'basics',
    question: 'What is SEO in healthcare?',
    answer:
      "SEO stands for search engine optimization. In healthcare, it means making a practice, hospital or health tech company easy to find when people search for care, a condition or a product, on Google and in AI answers. It covers the site's technical setup, pages that answer real questions, reviews and mentions, and proof that the content is accurate. Google holds health topics to a higher trust bar than most subjects.",
  },
  {
    category: 'basics',
    question: 'Is medical SEO the same as healthcare SEO?',
    answer:
      'Mostly. People say medical SEO when they mean doctors, dentists and clinics, and healthcare SEO as the wider term that also covers hospitals and the companies that sell to them. The core work is the same. What changes is the buyer: a clinic needs local visibility and booked visits, while a health tech company needs to be named when hospital teams research vendors.',
  },
  {
    category: 'basics',
    question: 'Is SEO still worth it for healthcare in 2026?',
    answer:
      'Yes, and the goal is wider than rankings now. In a 2026 rater8 survey of US patients who searched for a doctor, 36% named AI tools as an influence, 34% named Google search and 32% named doctor recommendations. AI answers and search results both draw on public web pages, so strong SEO supports both. What no longer works is thin content with no real expertise behind it.',
  },
  {
    category: 'basics',
    question: 'How long does healthcare SEO take to work?',
    answer:
      'Technical and trust fixes often show movement within one to three months, because they remove problems that were holding pages back. Map results for a practice tend to move once the profile, listings and reviews are in shape. New content and authority usually take three to six months or longer, and competitive markets or health tech categories can take more. You see progress in a monthly report.',
  },

  // ── Practices and clinics ─────────────────────────────────────────────────
  {
    category: 'practices',
    question: 'What is local SEO for doctors?',
    answer:
      "Local SEO for doctors is getting a practice to show up when nearby patients search for care, especially in Google's map results. It covers your Google Business Profile, matching name, address and phone details across listings such as Healthgrades and Zocdoc, reviews, and location and service pages on your site. Google says more reviews and positive ratings can help a business rank locally.",
  },
  {
    category: 'practices',
    question: "How do I get my practice into Google's map results for near me searches?",
    answer:
      "Start with a complete Google Business Profile: the right primary category, every service, accurate hours and real photos. Keep your name, address and phone number identical everywhere they appear online. Grow reviews steadily and reply without mentioning anyone's care. Then give each service and location its own page. Distance from the searcher also matters, and no agency can change that, so focus on what you control.",
  },
  {
    category: 'practices',
    question: 'Do patient reviews affect healthcare SEO?',
    answer:
      "Yes, in two ways. Google says more reviews and positive ratings can help a business's local ranking. Reviews also shape the decision itself: in a rater8 survey, 84% of patients said they check online reviews before choosing a new provider. The safe way to grow reviews is to ask every patient consistently and reply without confirming anyone is a patient or discussing their care.",
  },
  {
    category: 'practices',
    question: 'How do you handle SEO for a practice with several locations?',
    answer:
      'Each location gets its own Google Business Profile, its own page with details that are true for that location, and consistent listings. We avoid pages that only swap the city name, because they give patients and search engines little reason to choose them. Reporting splits rankings and calls by location, so you can see which markets are growing and which need attention.',
  },

  // ── Health tech and healthcare IT ─────────────────────────────────────────
  {
    category: 'healthtech',
    question: 'Do you work with health tech and healthcare IT companies?',
    answer:
      'Yes, and it is a different job from practice SEO. Health tech and healthcare IT companies sell to hospitals, clinics and health insurers through long deals decided by a committee. The work centers on integration, security, proof and comparison pages, plus technical access for search and AI crawlers, all reviewed by your product and compliance experts. The goal is qualified demo requests and being named in AI answers, not patient traffic.',
  },
  {
    category: 'healthtech',
    question: 'What do health tech companies do?',
    answer:
      'Health tech companies build software, devices or services that help deliver or run healthcare. Examples include electronic health record (EHR) software, telehealth platforms, revenue cycle management tools that handle billing and claims, interoperability tools that move data between systems, and remote monitoring devices. Their buyers are usually hospitals, clinics, health insurers or employers, so their SEO looks more like B2B software marketing than local marketing.',
  },
  {
    category: 'healthtech',
    question: 'Can you write accurately about EHR integration, FHIR or revenue cycle topics?',
    answer:
      'We write them with your experts, not instead of them. We research the topic, draft in plain language and attach a source to every claim, then your engineers or revenue cycle leads correct and approve the technical detail. Public definitions can come from the standard itself, such as HL7 for FHIR, but which resources and workflows you support must come from your team.',
  },

  // ── AI search ─────────────────────────────────────────────────────────────
  {
    category: 'ai',
    question: 'Can ChatGPT do SEO for a healthcare website?',
    answer:
      "It can help with parts of the job, such as outlining a page or listing questions to answer. It cannot verify its own health claims, know which integrations you actually support, get your clinician's approval or fix a site that search engines cannot read. On health topics, accuracy and trust carry extra weight, so use AI to speed up drafts and keep people responsible for facts and review.",
  },
  {
    category: 'ai',
    question: 'Is SEO being replaced by AI search?',
    answer:
      'No, it is being extended. Google says there are no additional requirements to appear in AI Overviews or AI Mode: a page must be indexed and eligible to show a snippet, which is ordinary SEO. ChatGPT search relies on its OAI-SearchBot crawler being allowed to reach your site. The foundations are shared. What changes is measurement: being named and linked in answers, not only rankings.',
  },
  {
    category: 'ai',
    question: 'How do I get my healthcare company mentioned in ChatGPT and Google AI Overviews?',
    answer:
      'Make your pages easy to reach and easy to quote. Allow the crawlers behind AI search, keep key text in the HTML, and answer the exact questions patients or buyers ask in plain sentences. Then earn mentions on sites those answers already trust, such as reputable directories, trade press and peer review sites. We track whether you are named for your key questions every month.',
  },

  // ── Privacy and compliance ────────────────────────────────────────────────
  {
    category: 'privacy',
    question: 'Can Google Analytics be HIPAA compliant?',
    answer:
      'Google says it makes no representations that Google Analytics satisfies HIPAA requirements and does not offer Business Associate Agreements for it. HIPAA-regulated organizations must not use it in a way that exposes patient health information to Google. In practice, that means keeping it away from pages and events that could reveal health information, or using a different tool. Your privacy officer or counsel decides. We map the tags and flag the risks.',
  },
  {
    category: 'privacy',
    question: 'What does HIPAA-compliant SEO mean?',
    answer:
      'Ask any agency using the phrase exactly what it means in their process, because it can mean very different things. For us it means SEO work that keeps protected health information out entirely: no patient details in analytics, ad tags, review replies or case examples. We design the work so we never need patient data, and your compliance team approves anything that touches privacy.',
  },
  {
    category: 'privacy',
    question: 'Will you need access to patient data?',
    answer:
      'No. SEO runs on your public pages, search data such as Google Search Console, and analytics set up to exclude patient information. We do not need records, form submissions with health details or call recordings. If a task would ever touch protected health information, we stop, and your compliance team decides the next step, including whether any agreement is required first.',
  },

  // ── Cost and choosing an agency ───────────────────────────────────────────
  {
    category: 'engagement',
    question: 'How much does healthcare SEO cost?',
    answer:
      'It depends on scope, so we quote each engagement instead of publishing rates. The biggest cost drivers are the number of locations or products, how competitive your market is, how much content needs expert and compliance review, the current state of your site, and whether you need local SEO, B2B content or both. Hospitals and multi-location groups cost more mainly because of scale and extra review layers.',
  },
  {
    category: 'engagement',
    question: 'Can I start with just a healthcare SEO audit?',
    answer:
      'Yes. The audit is a standalone project: a written review of technical health, trust signals, local or B2B visibility, tracking risk and keyword opportunity, plus a 90-day plan. Some teams run the plan themselves and others continue with us. You own the deliverables either way. If you want a quick view first, the free first look gives you a short fix list.',
  },
  {
    category: 'engagement',
    question: 'Do you require annual contracts?',
    answer:
      "No. Standard retainers are month-to-month, with one billing cycle's notice to stop. Larger enterprise programs are scoped individually, and any term is agreed in writing before work starts. The work should keep you as a client, not the paperwork.",
  },
  {
    category: 'engagement',
    question: 'What are the top healthcare SEO agencies in the US?',
    answer:
      "No single ranking settles it. When we checked Google on September 17, 2026, the 'best agencies' lists on page one for 'healthcare SEO agency' came from First Page Sage, Intrepy and Percepture, which are marketing agencies themselves, and the AI Overview cited pages from firms including Cardinal Digital Marketing, OuterBox, Percepture, Thrive and Medicotech. FactoryJet was not among them. Judge any agency on verifiable healthcare work, its review process and who does the work.",
  },
  {
    category: 'engagement',
    question: 'What makes FactoryJet different from other healthcare SEO agencies?',
    answer:
      'Three things. We cover both sides of healthcare search, local practices and B2B health tech, so the plan fits how your buyer decides. We put trust and privacy basics first: sources, named reviewers and a tracking review before content volume. And you work directly with the founder, not an account manager. If what you need is outside what we do well, we will say so.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD. WebPage + BreadcrumbList + Service + FAQPage. The sitewide
   Organization node (@id https://factoryjet.com/#organization) comes from the
   root layout, so this page references it instead of repeating it.
───────────────────────────────────────────────────────────────────────────── */

const AUTHOR_PERSON = {
  '@type': 'Person',
  name: 'Bhavesh Barot',
  jobTitle: 'Founder & CEO',
  url: 'https://factoryjet.com/author/bhavesh-barot',
  sameAs: ['https://www.linkedin.com/in/bhavesh-ai-gtm-expert/'],
  worksFor: { '@id': 'https://factoryjet.com/#organization' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Healthcare SEO Agency for Practices, Clinics and Health Tech Companies',
  description: PAGE_DESCRIPTION,
  inLanguage: 'en-US',
  dateModified: PAGE_MODIFIED,
  lastReviewed: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'Healthcare SEO' },
  primaryImageOfPage: { '@type': 'ImageObject', url: HERO_IMAGE, width: 1344, height: 1024 },
  author: AUTHOR_PERSON,
  reviewedBy: AUTHOR_PERSON,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first'],
  },
  citation: SOURCE_LIST.map((source) => ({
    '@type': 'CreativeWork',
    name: source.title,
    url: source.url,
    publisher: { '@type': 'Organization', name: source.publisher },
  })),
};

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

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Healthcare SEO Services',
  url: PAGE_URL,
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Healthcare SEO / Medical SEO / Health Tech SEO / Healthcare IT SEO',
  audience: [
    {
      '@type': 'BusinessAudience',
      name: 'US medical practices, clinics, dental groups and health systems',
    },
    {
      '@type': 'BusinessAudience',
      name: 'Health tech, healthcare IT and medical device companies that sell to hospitals, clinics and health insurers',
    },
  ],
  description:
    'Healthcare SEO for US practices, clinics, health systems and health tech companies: technical SEO, E-E-A-T trust signals, local visibility, B2B integration and security content, AI answer visibility, and a compliance-aware review workflow. Quoted per engagement.',
  offers: ENGAGEMENTS.map((engagement) => ({
    '@type': 'Offer',
    name: engagement.name,
    description: engagement.description,
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline section components (all server-rendered, no client JS)
───────────────────────────────────────────────────────────────────────────── */

function AnswerFirst() {
  return (
    <section id="answer-first" className="py-12 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="rounded-2xl p-7 md:p-9" style={{ backgroundColor: CREAM, borderLeft: `5px solid ${ORANGE}` }}>
          <p
            className="font-fj-mono font-bold uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.13em', color: ORANGE_DARK }}
          >
            Short answer
          </p>
          <h2
            className="fj-display mt-3 font-bold text-fj-ink"
            style={{ fontSize: 'clamp(1.375rem, 2.4vw, 1.75rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            What does a healthcare SEO agency do?
          </h2>
          <p className="mt-3 max-w-[880px] font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
            <strong className="text-fj-ink">
              A healthcare SEO agency makes a medical practice, clinic or health tech company easy to find on Google
              and in AI answers, while meeting the higher trust bar Google sets for health topics.
            </strong>{' '}
            The work covers four things: a website search engines can read, pages that answer real patient or buyer
            questions, reviews and mentions on trusted sites, and a named expert and a source behind every health
            claim.
          </p>
          <p className="mt-4 max-w-[880px] font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
            We run two versions of that job. For practices and clinics, it is local search: your Google Business
            Profile, reviews, and provider and service pages. For health tech and healthcare IT companies, it is
            business-to-business (B2B) search: integration, security and proof pages that a hospital buying
            committee and an AI assistant can both trust. Dentists have a dedicated <InternalLink href="/services/dental-seo">dental SEO</InternalLink>{' '}
            service, and front desk automation lives under{' '}
            <InternalLink href="/services/ai-agents-for-healthcare">AI agents for healthcare</InternalLink>.
          </p>
        </div>
      </div>
    </section>
  );
}

function ReviewedBy() {
  return (
    <div className="mx-auto max-w-[1120px] px-6 md:px-8 py-4" style={{ borderBottom: '1px solid rgba(15,15,18,0.08)' }}>
      <p className="font-fj-body" style={{ color: 'rgba(15,15,18,0.70)', fontSize: '0.875rem', lineHeight: 1.6 }}>
        <span style={{ fontWeight: 600, color: INK }}>
          Written and reviewed by{' '}
          <InternalLink href="/author/bhavesh-barot">Bhavesh Barot</InternalLink>
        </span>
        {', Founder & CEO, FactoryJet. Last reviewed '}
        <time dateTime={PAGE_MODIFIED}>{REVIEWED_DATE}</time>
        {'. Every statistic on this page names its source, and all sources are listed at the bottom.'}
      </p>
    </div>
  );
}

function FactsSection() {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: CREAM }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[720px]">
          <p className="fj-eyebrow">WHAT THE DATA SAYS</p>
          <h2 className="fj-display font-semibold text-fj-ink mt-3" style={H2_STYLE}>
            Four facts that shape healthcare SEO in 2026.
          </h2>
          <p className="mt-4 font-fj-body text-fj-neutral-600" style={LEAD_STYLE}>
            We only use numbers we could check at the source. Each card links to where the figure comes from.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {FACTS.map((fact) => (
            <li
              key={fact.figure}
              className="rounded-2xl p-6 md:p-7"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(15,15,18,0.09)' }}
            >
              <p
                className="fj-display font-bold"
                style={{ color: ORANGE, fontSize: 'clamp(2.25rem, 3.5vw, 2.75rem)', lineHeight: 1, letterSpacing: '-0.025em' }}
              >
                {fact.figure}
              </p>
              <p className="mt-3 font-fj-body" style={{ color: INK, fontSize: '1rem', lineHeight: 1.6 }}>
                {fact.text}
              </p>
              <p className="mt-3 font-fj-body" style={{ color: 'rgba(15,15,18,0.70)', fontSize: '0.8125rem' }}>
                {'Source: '}
                <SourceLink source={fact.source}>{fact.sourceLabel}</SourceLink>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AudienceJumpCard() {
  const options = [
    {
      href: '#practices',
      title: 'Practices and clinics',
      body: 'Map results, reviews, provider pages and privacy-safe tracking.',
    },
    {
      href: '#health-tech',
      title: 'Health tech and healthcare IT',
      body: 'Integration, security and proof content, AI answer visibility and compliance-aware review.',
    },
  ];
  return (
    <div
      className="w-full rounded-2xl border p-7"
      style={{ borderColor: 'rgba(15,15,18,0.10)', backgroundColor: '#FFFFFF' }}
    >
      <p
        className="font-fj-mono font-bold uppercase"
        style={{ fontSize: '11px', letterSpacing: '0.14em', color: ORANGE_DARK }}
      >
        Jump to your version
      </p>
      <ul className="mt-5 space-y-4">
        {options.map((option) => (
          <li key={option.href}>
            <a
              href={option.href}
              className="block rounded-xl p-4 transition-colors hover:bg-[#FAFAF7]"
              style={{ border: '1px solid rgba(15,15,18,0.09)' }}
            >
              <span className="block fj-display font-semibold" style={{ color: INK, fontSize: '1.0625rem' }}>
                {option.title} <span aria-hidden="true">→</span>
              </span>
              <span className="mt-1 block font-fj-body" style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.5 }}>
                {option.body}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PracticePriorities() {
  return (
    <section id="practices" className="py-14 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[760px]">
          <p className="fj-eyebrow">FOR PRACTICES AND CLINICS</p>
          <h2 className="fj-display font-semibold text-fj-ink mt-3" style={H2_STYLE}>
            6 healthcare SEO priorities for practices and clinics, in the order we tackle them.
          </h2>
          <p className="mt-4 font-fj-body text-fj-neutral-600" style={LEAD_STYLE}>
            This order clears what blocks rankings first, then builds the pages and reviews that win patients.
          </p>
        </div>
        <ol className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PRACTICE_PRIORITIES.map((item) => (
            <li
              key={item.number}
              className="rounded-2xl p-7"
              style={{ backgroundColor: CREAM, border: '1px solid rgba(15,15,18,0.09)' }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="fj-display font-bold shrink-0"
                  style={{ color: ORANGE, fontSize: '1.75rem', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {item.number}
                </span>
                <h3 className="fj-display font-semibold" style={{ ...H3_STYLE, fontSize: '1.125rem' }}>
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 font-fj-body" style={BODY_STYLE}>
                {item.body}
              </p>
              <p
                className="mt-4 inline-block rounded-lg px-3 py-2 font-fj-body"
                style={{ backgroundColor: 'rgba(240,90,40,0.07)', color: INK, fontSize: '0.8125rem', fontWeight: 500 }}
              >
                <span className="font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.12em', color: ORANGE_DARK }}>
                  {'Moves: '}
                </span>
                {item.signal}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-8 font-fj-body" style={BODY_STYLE}>
          Running a dental practice? See <InternalLink href="/services/dental-seo">dental SEO</InternalLink>. Need
          local rankings for a business outside healthcare? See <InternalLink href="/services/local-seo">local SEO</InternalLink>.
        </p>
      </div>
    </section>
  );
}

function PriorityMatrix() {
  const thStyle: CSSProperties = {
    padding: '12px 14px',
    textAlign: 'left',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(15,15,18,0.70)',
    borderBottom: '2px solid rgba(240,90,40,0.25)',
    verticalAlign: 'bottom',
  };
  const tdStyle: CSSProperties = {
    padding: '12px 14px',
    fontSize: '0.875rem',
    color: 'rgba(15,15,18,0.80)',
    borderBottom: '1px solid rgba(15,15,18,0.07)',
    lineHeight: 1.5,
    verticalAlign: 'top',
  };

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: CREAM }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[760px]">
          <p className="fj-eyebrow">PRIORITY MATRIX</p>
          <h2 className="fj-display font-semibold text-fj-ink mt-3" style={H2_STYLE}>
            Healthcare SEO priorities by organization type.
          </h2>
          <p className="mt-4 font-fj-body text-fj-neutral-600" style={LEAD_STYLE}>
            Where your buyers look first decides where the work starts. Find your row, then read across.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(15,15,18,0.10)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#FFFFFF', minWidth: '760px' }}>
            <caption className="sr-only">
              Healthcare SEO priorities by organization type: where buyers look first, the pages that matter most,
              useful schema types and the proof buyers expect.
            </caption>
            <thead>
              <tr style={{ backgroundColor: 'rgba(240,90,40,0.04)' }}>
                <th scope="col" style={thStyle}>Organization type</th>
                <th scope="col" style={thStyle}>Where buyers look first</th>
                <th scope="col" style={thStyle}>Pages that matter most</th>
                <th scope="col" style={thStyle}>Useful schema types</th>
                <th scope="col" style={thStyle}>Proof buyers expect</th>
              </tr>
            </thead>
            <tbody>
              {MATRIX_ROWS.map((row) => (
                <tr key={row.type}>
                  <th scope="row" style={{ ...tdStyle, fontWeight: 600, color: INK, textAlign: 'left' }}>
                    {row.type}
                  </th>
                  <td style={tdStyle}>{row.looks}</td>
                  <td style={tdStyle}>{row.pages}</td>
                  <td style={{ ...tdStyle, fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.8rem' }}>
                    {row.schema}
                  </td>
                  <td style={tdStyle}>{row.proof}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-fj-body" style={{ color: 'rgba(15,15,18,0.70)', fontSize: '0.8125rem' }}>
          Schema type names are from schema.org. Mark up only what the page visibly shows.
        </p>
      </div>
    </section>
  );
}

function HealthTechSection() {
  return (
    <section
      id="health-tech"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#FFFFFF', borderTop: `4px solid ${ORANGE}` }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p
              className="inline-block rounded-full font-fj-mono font-bold uppercase"
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: ORANGE_DARK,
                backgroundColor: 'rgba(240,90,40,0.08)',
                border: '1px solid rgba(240,90,40,0.25)',
                padding: '6px 12px',
              }}
            >
              For health tech and healthcare IT companies
            </p>
            <h2 className="fj-display font-semibold text-fj-ink mt-4" style={H2_STYLE}>
              SEO for health tech companies that sell to hospitals, clinics and health insurers.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="font-fj-body text-fj-neutral-600" style={LEAD_STYLE}>
              If you sell EHR integrations, billing and claims software, tools that move data between health systems
              or digital health products, your SEO goal is not patient traffic. It is being the vendor Google and AI assistants name
              when a buying committee researches the problem you solve, with pages that survive every committee
              member&apos;s checks.
            </p>
          </div>
        </div>

        {/* A. How AI answers and Google shape the purchase */}
        <div className="mt-14 max-w-[860px]">
          <h3 className="fj-display font-semibold" style={H3_STYLE}>
            How AI answers and Google shape a healthcare IT purchase
          </h3>
          <p className="mt-3 font-fj-body" style={BODY_STYLE}>
            Healthcare IT deals take months, and much of the research happens before anyone fills in your demo form.
            Here is the path, and what each step asks of your website.
          </p>
          <ol className="mt-6 space-y-5">
            {BUYING_PATH.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                <span
                  className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-fj-mono font-bold"
                  style={{ backgroundColor: ORANGE_DARK, color: '#FFFFFF', fontSize: '0.8125rem' }}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <p className="font-fj-body" style={BODY_STYLE}>
                  <strong style={{ color: INK }}>{step.title}</strong> {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* B. Content that wins deals */}
        <div className="mt-14">
          <h3 className="fj-display font-semibold max-w-[860px]" style={H3_STYLE}>
            The content that wins healthcare IT deals
          </h3>
          <ol className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {HEALTHTECH_CONTENT.map((item, index) => (
              <li
                key={item.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: CREAM, border: '1px solid rgba(15,15,18,0.09)' }}
              >
                <p className="font-fj-mono font-bold" style={{ color: ORANGE_DARK, fontSize: '0.8125rem', letterSpacing: '0.08em' }}>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-2 font-fj-body" style={BODY_STYLE}>
                  <strong style={{ color: INK }}>{item.title}</strong> {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* C. Technical work */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h3 className="fj-display font-semibold" style={H3_STYLE}>
              Technical SEO that matters on health tech sites
            </h3>
            <ul className="mt-6 space-y-4">
              {TECHNICAL_WORK.map((item, index) => (
                <li key={index} className="flex items-start gap-3 font-fj-body" style={BODY_STYLE}>
                  <span
                    className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: ORANGE }}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* D. E-E-A-T explained plainly */}
          <div className="lg:col-span-5">
            <h3 className="fj-display font-semibold" style={H3_STYLE}>
              E-E-A-T for health topics, explained plainly
            </h3>
            <p className="mt-3 font-fj-body" style={BODY_STYLE}>
              E-E-A-T stands for Experience, Expertise, Authoritativeness and Trustworthiness.{' '}
              <SourceLink source={SOURCE_GOOGLE_HELPFUL}>Google says</SourceLink> its systems give even more weight
              to these signals on topics that could affect people&apos;s health, money or safety, which it calls Your
              Money or Your Life (YMYL) topics, and that trust matters most.
            </p>
            <ul className="mt-5 space-y-3">
              {EEAT_CARDS.map((card) => (
                <li
                  key={card.title}
                  className="rounded-xl p-4"
                  style={{ backgroundColor: CREAM, borderLeft: `3px solid ${ORANGE}` }}
                >
                  <p className="fj-display font-semibold" style={{ color: INK, fontSize: '1rem' }}>
                    {card.title}
                  </p>
                  <p className="mt-1 font-fj-body" style={{ color: 'rgba(15,15,18,0.74)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    {card.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* E. Compliance-aware content review */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h3 className="fj-display font-semibold" style={H3_STYLE}>
              Compliance-aware content review: how a page goes live
            </h3>
            <p className="mt-3 font-fj-body" style={BODY_STYLE}>
              Health content needs a review step that a normal content calendar skips. Ours has five steps, and your
              experts keep the final say.
            </p>
            <ol className="mt-6 space-y-4">
              {REVIEW_STEPS.map((step, index) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-fj-mono font-bold"
                    style={{ border: `1.5px solid ${ORANGE_DARK}`, color: ORANGE_DARK, fontSize: '0.8125rem' }}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <p className="font-fj-body" style={BODY_STYLE}>
                    <strong style={{ color: INK }}>{step.title}</strong> {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-7" style={{ backgroundColor: CREAM, border: '1px solid rgba(15,15,18,0.10)' }}>
              <p className="fj-display font-semibold" style={{ color: INK, fontSize: '1.125rem', lineHeight: 1.3 }}>
                What we never need: patient data.
              </p>
              <p className="mt-3 font-fj-body" style={BODY_STYLE}>
                Our SEO work runs on your public pages, search data and analytics set up to exclude patient
                information. If a task would ever touch protected health information, we stop, and your compliance
                team decides the next step.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: ORANGE_DARK, color: '#FFFFFF' }}
                >
                  Talk to the founder about health tech SEO <span aria-hidden="true">→</span>
                </a>
                <Link
                  href="/services/ai-seo"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90"
                  style={{ color: ORANGE_DARK, border: `1.5px solid ${ORANGE_DARK}` }}
                >
                  How we approach AI search visibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EngagementsSection() {
  return (
    <section
      id="pricing"
      className="py-14 md:py-20"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.065) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: CREAM,
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[760px]">
          <p className="fj-eyebrow">ENGAGEMENTS AND PRICING</p>
          <h2 className="fj-display font-semibold text-fj-ink mt-3" style={H2_STYLE}>
            Quote-first engagements, scoped to your organization.
          </h2>
          <p className="mt-4 max-w-[640px] font-fj-body text-fj-neutral-600" style={LEAD_STYLE}>
            Scope depends on whether you are a practice or a health tech company, how competitive your market is,
            how many locations or products you have, and how much content needs expert review. We quote each
            engagement before any work starts.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENTS.map((engagement) => (
            <li
              key={engagement.name}
              className="flex flex-col rounded-2xl p-7"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(15,15,18,0.10)', borderTop: `3px solid ${ORANGE}` }}
            >
              <p className="font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.12em', color: ORANGE_DARK }}>
                {engagement.cadence}
              </p>
              <h3 className="mt-2 fj-display font-semibold" style={{ color: INK, fontSize: '1.125rem', lineHeight: 1.25 }}>
                {engagement.name}
              </h3>
              <p className="mt-2 fj-display font-bold" style={{ color: ORANGE, fontSize: '1.5rem', lineHeight: 1.1 }}>
                Custom quote
              </p>
              <p className="mt-3 font-fj-body" style={{ color: 'rgba(15,15,18,0.74)', fontSize: '0.9375rem', lineHeight: 1.55 }}>
                {engagement.description}
              </p>
              <ul className="mt-5 flex-1 space-y-3">
                {engagement.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-fj-body"
                    style={{ color: 'rgba(15,15,18,0.82)', fontSize: '0.875rem', lineHeight: 1.5 }}
                  >
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: ORANGE_DARK }}
                      aria-hidden="true"
                    >
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90"
                style={{ color: ORANGE_DARK, border: `1.5px solid ${ORANGE_DARK}` }}
              >
                {engagement.ctaLabel} <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-fj-body" style={{ color: 'rgba(15,15,18,0.70)', fontSize: '0.875rem', fontWeight: 500 }}>
          Standard retainers are month-to-month. You own every deliverable from day one.
        </p>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[720px]">
          <p className="fj-eyebrow">RELATED SERVICES</p>
          <h2 className="fj-display font-semibold text-fj-ink mt-3" style={H2_STYLE}>
            Related services for healthcare teams.
          </h2>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RELATED_SERVICES.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="block h-full rounded-2xl p-6 transition-colors hover:bg-[#FAFAF7]"
                style={{ border: '1px solid rgba(15,15,18,0.10)' }}
              >
                <span className="block fj-display font-semibold" style={{ color: INK, fontSize: '1.0625rem' }}>
                  {service.title} <span aria-hidden="true">→</span>
                </span>
                <span className="mt-2 block font-fj-body" style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.55 }}>
                  {service.body}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SourcesSection() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(15,15,18,0.08)' }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <p className="fj-eyebrow">SOURCES</p>
        <h2 className="fj-display font-semibold text-fj-ink mt-3" style={{ ...H2_STYLE, fontSize: 'clamp(1.375rem, 2.4vw, 1.75rem)' }}>
          Sources for the facts on this page.
        </h2>
        <p className="mt-3 font-fj-body" style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem' }}>
          {'Checked on '}
          <time dateTime={PAGE_MODIFIED}>{REVIEWED_DATE}</time>
          {'. When a source changes, we update the page.'}
        </p>
        <ol className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
          {SOURCE_LIST.map((source) => (
            <li key={source.url} className="font-fj-body" style={{ color: 'rgba(15,15,18,0.80)', fontSize: '0.9375rem', lineHeight: 1.55 }}>
              <span style={{ fontWeight: 600, color: INK }}>{source.publisher}</span>
              {': '}
              <SourceLink source={source}>{source.title}</SourceLink>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page render
───────────────────────────────────────────────────────────────────────────── */

export default function HealthcareSeoServicePage() {
  return (
    <>
      {/* JSON-LD schemas, all derived from the arrays that render below */}
      <script
        id="healthcare-seo-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="healthcare-seo-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="healthcare-seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="healthcare-seo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />
      <main>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ─── 1. Hero (light, form-first) ─────────────────────────────────── */}
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_services_healthcare_seo_hero" />}
          eyebrow="HEALTHCARE SEO AGENCY"
          headline={H1_TEXT}
          lead="We help healthcare organizations get found on Google and named in AI answers from ChatGPT and Google AI Overviews. Practices reach patients ready to book, and health tech companies show up where buyers at hospitals and health insurers start their research."
          secondaryCta={{ label: 'See the health tech plan', href: '#health-tech' }}
          trustItems={[
            'Every health claim sourced and reviewer-approved',
            'No patient data needed for our SEO work',
            'Google rankings and AI answers in one report',
          ]}
          rightSlot={
            /* Desktop-only visual; never the mobile LCP element */
            <div className="hidden lg:block relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <Image
                src="/images/services/healthcare-seo.webp"
                alt="Clinician reviewing website search analytics on a laptop in a clinic office"
                width={1344}
                height={1024}
                className="w-full object-cover max-h-[520px]"
                priority={false}
                loading="lazy"
              />
            </div>
          }
        />

        {/* ─── 2. Answer-first block ──────────────────────────────────────── */}
        <AnswerFirst />

        {/* ─── 3. Byline ──────────────────────────────────────────────────── */}
        <ReviewedBy />

        {/* ─── 4. Sourced facts ───────────────────────────────────────────── */}
        <FactsSection />

        {/* ─── 5. Two audiences ───────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WHO WE HELP"
          headline="Two kinds of healthcare companies, two different SEO jobs."
          lead="A dental group and a company that sells electronic health record (EHR) software both work in healthcare, but their buyers search in completely different ways. We plan the work around how your buyer actually decides."
          body={
            <>
              <p>
                Patients decide fast and close to home. They search for a service nearby, read reviews, sometimes ask
                an AI assistant, and book. For a practice, SEO lives in map results, provider and service pages, and
                reviews. <SourceLink source={SOURCE_GOOGLE_LOCAL}>Google says</SourceLink> more reviews and positive
                ratings can help a business rank locally.
              </p>
              <p>
                Hospitals and health insurers decide slowly and in groups. The chief information officer (CIO) checks
                integrations, the security team checks data protection, the billing and claims lead checks the workflow,
                and the purchasing team checks risk. For a health
                tech company, SEO means being the vendor that search results and AI answers name, with pages that hold
                up when each of those people checks your claims.
              </p>
            </>
          }
          rightSlot={<AudienceJumpCard />}
        />

        {/* ─── 6. Practices and clinics listicle ──────────────────────────── */}
        <PracticePriorities />

        {/* ─── 7. Priority matrix table (both audiences) ──────────────────── */}
        <PriorityMatrix />

        {/* ─── 8. The one dark section ────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHERE HEALTHCARE SEO STALLS"
          headline="Three healthcare SEO mistakes that quietly cap your rankings."
          lead="Each one sits below a standard SEO checklist, which is why generic audits miss them."
          pillars={MISTAKES}
        />

        {/* ─── 9. Health tech and healthcare IT (clearly separated section) ─ */}
        <HealthTechSection />

        {/* ─── 10. Mid-page CTA (light) ───────────────────────────────────── */}
        <FinalCTA
          variant="light"
          eyebrow="FREE FIRST LOOK"
          headline="Not sure where you stand? Start with a free first look."
          sub="Tell us about your site. We will review your Google visibility and the trust signals on your key pages, then send a short, prioritized fix list within 48 hours. No sales call required."
          primaryCta={{ label: 'Get my free first look', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See engagement options', href: '#pricing' }}
        />

        {/* ─── 11. Process ────────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW AN ENGAGEMENT RUNS"
          headline="Five steps from audit to rankings, AI answers and a monthly report."
          lead="Practices and health tech companies follow the same five steps. What changes is the pages we build and the people who review them."
          stages={HEALTHCARE_SEO_JOURNEY}
          closingNote="Every step ships a deliverable, and nothing health-related goes live without your reviewer's approval."
        />

        {/* ─── 12. Comparison ─────────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs generalist agencies, freelancers and in-house teams."
          lead="Four common ways healthcare organizations staff SEO, and where a health-focused, compliance-aware approach differs."
          columns={[
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Generalist agency' },
            { label: 'Freelancer' },
            { label: 'In-house' },
          ]}
          rows={[
            {
              feature: 'Contract terms',
              values: ['Month-to-month', 'Annual contracts common', 'Hourly or per project', 'Salaried staff'],
            },
            {
              feature: 'Health trust signals (E-E-A-T)',
              values: [
                <CompareIcon key="fj-eeat" kind="yes" />,
                <CompareIcon key="gen-eeat" kind="partial" />,
                <CompareIcon key="free-eeat" kind="partial" />,
                <CompareIcon key="house-eeat" kind="partial" />,
              ],
            },
            {
              feature: 'Tracking review for patient data risk',
              values: [
                <CompareIcon key="fj-track" kind="yes" />,
                <CompareIcon key="gen-track" kind="no" />,
                <CompareIcon key="free-track" kind="no" />,
                <CompareIcon key="house-track" kind="partial" />,
              ],
            },
            {
              feature: 'Local SEO for practices',
              values: [
                <CompareIcon key="fj-local" kind="yes" />,
                <CompareIcon key="gen-local" kind="partial" />,
                <CompareIcon key="free-local" kind="partial" />,
                <CompareIcon key="house-local" kind="partial" />,
              ],
            },
            {
              feature: 'B2B health tech content (integrations, security, proof)',
              values: [
                <CompareIcon key="fj-b2b" kind="yes" />,
                <CompareIcon key="gen-b2b" kind="partial" />,
                <CompareIcon key="free-b2b" kind="no" />,
                <CompareIcon key="house-b2b" kind="partial" />,
              ],
            },
            {
              feature: 'AI answer visibility reporting',
              values: [
                <CompareIcon key="fj-ai" kind="yes" />,
                <CompareIcon key="gen-ai" kind="partial" />,
                <CompareIcon key="free-ai" kind="no" />,
                <CompareIcon key="house-ai" kind="partial" />,
              ],
            },
            {
              feature: 'Reviewer approval built into publishing',
              values: [
                <CompareIcon key="fj-review" kind="yes" />,
                <CompareIcon key="gen-review" kind="no" />,
                <CompareIcon key="free-review" kind="no" />,
                <CompareIcon key="house-review" kind="partial" />,
              ],
            },
          ]}
          footer="Comparison reflects typical offerings in each category as of September 2026. Individual providers vary."
        />

        {/* ─── 13. Engagements (no pricing figures) ───────────────────────── */}
        <EngagementsSection />

        {/* ─── 14. Related services (internal links) ──────────────────────── */}
        <RelatedServices />

        {/* ─── 15. FAQ, schema derived from FAQ_ITEMS ─────────────────────── */}
        <FAQ
          eyebrow="HEALTHCARE SEO FAQ"
          headline="Healthcare SEO questions, answered plainly."
          lead="The questions practice owners, marketing leads and health tech founders ask most, including the ones people type into Google."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 16. Sources ────────────────────────────────────────────────── */}
        <SourcesSection />

        {/* ─── 17. Closing CTA (light, keeps the page at one dark section) ── */}
        <TalkToFounder variant="full" theme="light" eyebrow="FOUNDER ACCESS" />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

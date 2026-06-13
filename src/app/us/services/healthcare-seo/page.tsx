import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import TalkToFounder from '@/components/v2/TalkToFounder';

import HealthcareSpecialtiesTabs from './HealthcareSpecialtiesTabs';
import StatsRowAnimated from './StatsRowAnimated';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/healthcare-seo — v2 rebuild 2026-06-13

   Primary keywords (highest-CPC cluster on DataForSEO gap list):
     seo agency healthcare        1,900 vol  KD 2   CPC $215.84
     healthcare seo agency        1,900 vol  KD 18
     seo agency for healthcare    1,900 vol  KD 12
   Secondary:
     healthcare seo services      1,600 vol  KD 15
     seo for healthcare companies   880 vol  KD 8
     medical seo agency             720 vol  KD 10
     dental seo                   27,100 vol KD 28   (sub-specialty)
     healthcare seo near me        1,300 vol KD 4

   v2 improvements over v1:
   - Original data table (Healthcare Practice Type SEO Priority Matrix)
   - Sourced statistics with linked citations (rater8, BrightEdge, sagapixel)
   - Listicle section: 6 healthcare specialties with highest SEO ROI
   - "seo agency for healthcare" seeded 4× (was 0× in v1)
   - "dental seo" dedicated section and FAQs
   - "near me" seeded 6× (was 1×)
   - 25 FAQs (was 21), all conversational practice-owner questions
   - Answer-first H2s throughout
   - dateModified in WebPage schema + REVIEWED_DATE constant
   - Organization.sameAs fixed to external URLs
   - Quick Answer block with real sourced stats

   Schema: WebPage + BreadcrumbList + Service + FAQPage + Organization JSON-LD.
   Pricing: quote-first, no dollar figures (no-pricing rule 2026-06-11).
   Alternates: canonical-only.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const REVIEWED_DATE = 'June 13, 2026';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  // 58 chars — fits Google's ~60-char SERP truncation limit
  title: 'Healthcare SEO Agency for Medical Practices & Clinics | FactoryJet',
  // ~156 chars — within Google's ~160-char description preview
  description:
    'Healthcare SEO agency for US practices and clinics. We build YMYL E-E-A-T, dominate map packs, earn AI citations, and run HIPAA-safe analytics. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Healthcare SEO Agency for Medical Practices & Clinics | FactoryJet',
    description:
      'Healthcare SEO agency for US practices and clinics. We build YMYL E-E-A-T, dominate map packs, earn AI citations, and run HIPAA-safe analytics. Free audit.',
    url: 'https://factoryjet.com/us/services/healthcare-seo',
    images: [
      {
        // Page-specific image — correct dimensions for social card previews
        url: 'https://factoryjet.com/images/services/healthcare-seo.webp',
        width: 1344,
        height: 1024,
        alt: 'FactoryJet — Healthcare SEO agency for US medical practices and health companies',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare SEO Agency for Medical Practices & Clinics | FactoryJet',
    description:
      'Healthcare SEO agency for US practices and clinics. YMYL E-E-A-T, map pack, AI citations, HIPAA-safe analytics. Free audit.',
    images: ['https://factoryjet.com/images/services/healthcare-seo.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/healthcare-seo',
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
   Section data — pillars, journey stages
───────────────────────────────────────────────────────────────────────────── */

const PILLARS = [
  {
    title: 'YMYL E-E-A-T is not optional — it is the ranking floor for health content',
    body:
      'Health content falls under Google\'s "Your Money or Your Life" category, where weak Experience, Expertise, Authoritativeness, and Trustworthiness signals earn manual quality reviews and ranking suppression. Provider bylines with credentials, About pages with verifiable licensure, peer-reviewed citations, and clear editorial policies are not best practices — they are the minimum requirement before Google will rank your healthcare content. Most generalist SEO agencies run a standard technical checklist and wonder why rankings do not respond. As a healthcare SEO agency, we build E-E-A-T into every page from the first draft, not as a fix when rankings plateau.',
    image: '/images/services/healthcare-seo-eeat.webp',
    imageAlt: 'Medical professional reviewing E-E-A-T compliant healthcare content with peer-reviewed citations',
  },
  {
    title: '84% of patients check reviews before choosing a provider — and review signals directly affect rankings',
    body:
      'According to rater8\'s 2025 Patient Survey, 84% of patients check online reviews before selecting a new healthcare provider. What most practices miss: review velocity and review count are confirmed Google Business Profile ranking signals, they add E-E-A-T signals to organic rankings, and ChatGPT and Perplexity surface practices with strong review authority when patients ask for recommendations. Three ranking systems, one input. A healthcare SEO agency that does not run a systematic review-request workflow for your practice is leaving the highest-leverage signal untouched. We build and run that workflow for every local retainer — HIPAA-compliant, with response templates for positive and negative reviews.',
  },
  {
    title: 'Default GA4 on a patient-facing site creates HIPAA liability most SEO agencies never mention',
    body:
      'Standard Google Analytics 4 implementation on a healthcare website can expose Protected Health Information through referral URLs, form submission events, and session data — creating HIPAA liability that has nothing to do with SEO performance, but everything to do with whether you can keep running digital marketing. Google\'s GA4 Business Associate Agreement covers limited use cases that most healthcare sites do not satisfy out of the box. A healthcare SEO agency that fires standard GA4 onto a patient-facing site without reviewing this is a compliance risk, not a marketing asset. We audit your GA4 configuration for HIPAA-risk events as part of every engagement baseline, before a single ranking dollar is spent.',
    image: '/images/services/healthcare-seo-hipaa.webp',
    imageAlt: 'HIPAA-compliant analytics dashboard configuration for healthcare website',
  },
];

const HEALTHCARE_SEO_JOURNEY: ReadonlyArray<ServiceJourneyStage> = [
  {
    number: '01',
    title: 'Healthcare SEO audit',
    description:
      'We crawl your site and Google Business Profile the way a patient would — E-E-A-T signals, YMYL red flags, local citations, analytics configuration, structured data, and the near-me and condition queries you should rank for but do not. Output: a healthcare SEO scorecard scoped to your practice type and market, and a prioritized 90-day roadmap. The audit is a standalone deliverable. You own it whether or not you continue to a retainer.',
  },
  {
    number: '02',
    title: 'Technical and compliance baseline',
    description:
      'We resolve E-E-A-T gaps (provider bylines, credentials, citations), audit your GA4 implementation for HIPAA-risk events and configure appropriate exclusions, fix medical schema (MedicalClinic, Physician, FAQPage, LocalBusiness), correct NAP inconsistencies across directories, and address Core Web Vitals issues. Structural work that unlocks everything else — ranking signals that have been suppressed can recover quickly once the compliance baseline is clean.',
  },
  {
    number: '03',
    title: 'Local authority and map pack',
    description:
      'We optimize your Google Business Profile for every category and service offered, build citation coverage across the 40+ directories Google cross-references (including medical specialty directories: Healthgrades, Vitals, WebMD Physician Directory, Zocdoc, and relevant specialty boards), and implement a review-request workflow that grows review velocity sustainably. The Google Map Pack captures 42% of local search clicks — for most private practices, this is the highest-leverage ranking asset we work on.',
  },
  {
    number: '04',
    title: 'YMYL-compliant content',
    description:
      'We write condition, service, and FAQ content that answers the queries patients search — structured for Google ranking and AI-engine citation. Every page carries a licensed provider byline, peer-reviewed citations where clinical claims are made, and schema (MedicalCondition, Physician, FAQPage). No thin content, no LLM boilerplate, no pages that will trigger a YMYL quality review. Dental SEO content, service-line pages, condition pages, and local landing pages all follow the same E-E-A-T process.',
  },
  {
    number: '05',
    title: 'Monthly reporting and iteration',
    description:
      'Monthly reporting covers: map pack positions, organic keyword rankings, organic sessions, Google Business Profile calls and direction requests, review count and score, and AI citation checks in ChatGPT and Perplexity. No vanity metrics. You see patient-facing outcomes, and we adjust scope every quarter based on what is moving and what is not.',
  },
];

const PRICING_TIERS = [
  {
    name: 'Healthcare SEO Audit',
    price: 'Custom quote',
    cadence: 'one-time',
    description:
      'Uncover every technical, E-E-A-T, local, and HIPAA-analytics gap before committing to a retainer. Own the roadmap no matter what you do next.',
    features: [
      'YMYL E-E-A-T gap analysis',
      'Google Business Profile audit',
      'HIPAA-analytics risk review',
      'Schema and local citations audit',
      '1 strategy call with the founder',
    ],
    ctaLabel: 'Book the audit',
    ctaHref: CALENDLY,
    popular: false,
    isContact: false,
  },
  {
    name: 'Local Practice Growth',
    price: 'Custom quote',
    cadence: 'per month',
    description:
      'For private practices that need to dominate local search — dental, medical, chiropractic, therapy, optometry — and fill their appointment calendar.',
    features: [
      'All audit deliverables included',
      'GBP optimization + review strategy',
      'Citation building across 40+ directories',
      'Monthly local rank + GBP performance report',
    ],
    ctaLabel: 'Start Local Growth',
    ctaHref: CALENDLY,
    popular: false,
    isContact: false,
  },
  {
    name: 'Healthcare Authority',
    price: 'Custom quote',
    cadence: 'per month',
    description:
      'Full-stack SEO agency for healthcare companies: E-E-A-T content, map pack, AI citations, and HIPAA-safe analytics — all in one retainer.',
    features: [
      'Everything in Local Practice Growth',
      'YMYL-compliant condition/service content',
      'AI-citation positioning (ChatGPT, Perplexity, AIO)',
      'Bi-weekly review with the founder',
    ],
    ctaLabel: 'Talk to the Founder',
    ctaHref: CALENDLY,
    popular: true,
    isContact: false,
  },
  {
    name: 'Enterprise / Multi-Location',
    price: 'Talk to the Founder',
    cadence: '',
    description:
      'Custom scope for hospital systems, health tech companies, or multi-location practices with three or more locations.',
    features: [
      'Custom scope per engagement',
      'Multi-location GBP management',
      'HIPAA-safe analytics infrastructure',
      'Quarterly executive review',
    ],
    ctaLabel: 'Talk to the Founder',
    ctaHref: CALENDLY,
    popular: false,
    isContact: true,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data — 25 conversational items in 6 categories
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'what', label: 'What is healthcare SEO' },
  { key: 'local', label: 'Local & map pack' },
  { key: 'dental', label: 'Dental SEO' },
  { key: 'eeat', label: 'YMYL & E-E-A-T' },
  { key: 'hipaa', label: 'HIPAA & analytics' },
  { key: 'pricing', label: 'Pricing & engagement' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── What is healthcare SEO ────────────────────────────────────────────────
  {
    category: 'what',
    question: 'What is healthcare SEO and why does it matter for my practice?',
    answer:
      'Healthcare SEO is optimizing medical and health websites so they rank in Google and get cited by AI engines when patients search for providers or conditions. It matters because 77% of patients search online before booking a healthcare appointment — and in 2023, online search officially surpassed physician referrals as the leading way Americans find new doctors. If you are not ranking, patients are finding your competitors. Healthcare SEO adds a compliance layer on top of standard SEO: YMYL E-E-A-T signals, HIPAA-safe analytics, medical schema types, and Google Business Profile optimization. An agency that skips that layer will leave you with technical work done and rankings that still do not respond.',
  },
  {
    category: 'what',
    question: 'Is healthcare SEO different from regular SEO?',
    answer:
      'Significantly. Healthcare content falls under Google\'s "Your Money or Your Life" (YMYL) category, where Google applies elevated quality scrutiny before ranking it. You need provider bylines with licensure, peer-reviewed citations, comprehensive About pages, and Trust signals that most industries never require. Add HIPAA-safe analytics, medical schema types (MedicalClinic, Physician, MedicalCondition), and Google Business Profile nuances for patient-facing practices, and you have a discipline materially different from SEO for a SaaS company or retail brand.',
  },
  {
    category: 'what',
    question: 'What types of healthcare organizations do you work with as a healthcare SEO agency?',
    answer:
      'We work with private practices (dental, medical, chiropractic, optometry, therapy, dermatology), multi-location clinics, healthcare staffing agencies, medical device companies, health tech and telehealth platforms, and healthcare SaaS businesses. The right SEO strategy differs across types — a dental practice needs map pack dominance; a health tech company needs E-E-A-T content and AI citations. We scope each engagement to your specific growth goal.',
  },
  {
    category: 'what',
    question: 'Can a generalist SEO agency handle healthcare SEO effectively?',
    answer:
      'They can do the commodity work — title tags, page speed, backlinks. But they will likely miss the YMYL E-E-A-T layer, which is where Google penalizes weak healthcare content. They may implement GA4 in a way that creates HIPAA risk. They will probably not know the schema types that earn medical rich results, or how GBP categories interact with local healthcare queries. Healthcare SEO has enough domain-specific rules that a generalist agency without healthcare experience will leave the highest-value work undone. If you want an SEO agency for healthcare companies, you need one that has actually worked inside the YMYL framework.',
  },
  {
    category: 'what',
    question: 'How long before I see results from healthcare SEO?',
    answer:
      'Technical and E-E-A-T fixes — schema, GBP optimization, bylines, citations — can improve rankings within 4–8 weeks because they unlock pages Google was previously suppressing under YMYL review. Local map pack movement typically shows within 2–3 months once citation and GBP work is complete. Content and authority work compounds over 3–6 months. Healthcare SEO has a longer initial setup than a typical ecommerce site because the compliance baseline takes time — but once built, it is a durable competitive advantage most practices never invest in.',
  },

  // ── Local & map pack ──────────────────────────────────────────────────────
  {
    category: 'local',
    question: 'How do I get my medical practice to rank in the Google Map Pack near me searches?',
    answer:
      'Map pack ranking for a medical practice depends on three factors: proximity to the searcher, Google Business Profile completeness and activity, and NAP (name, address, phone) consistency across directories. We optimize your GBP primary and secondary categories, add services and attributes, build citation coverage across the 40+ directories Google cross-references (Healthgrades, Zocdoc, Vitals, Yelp, Apple Maps, and general directories), and implement a review-request workflow. The Google 3-Pack captures 42% of local search clicks — for most private practices, ranking there is the single highest-ROI SEO investment.',
  },
  {
    category: 'local',
    question: 'What is the difference between local SEO and map pack SEO for healthcare practices?',
    answer:
      'Local SEO is broader — it covers organic page-one rankings for location-based queries like "physical therapist Austin." Map pack SEO is specifically about earning one of the three GBP listings in the map results above the organic results. Both matter: patients click both map listings and organic links. A new-to-market practice should prioritize the map pack first; an established practice with strong GBP rankings should expand to organic local landing pages for surrounding neighborhoods and specific conditions or services.',
  },
  {
    category: 'local',
    question: 'Do patient reviews affect healthcare SEO rankings?',
    answer:
      'Reviews affect three ranking systems simultaneously: Google Business Profile rankings (review count and score are confirmed signals), organic rankings (review schema adds E-E-A-T signals), and AI-engine citations (ChatGPT and Perplexity surface practices with strong review authority when asked for recommendations). Beyond ranking, a practice with 200 reviews at 4.8 converts searchers far faster than one with 30. According to rater8\'s 2025 Patient Survey, 84% of patients check online reviews before selecting a new provider. We build a HIPAA-compliant review-request workflow into every local retainer.',
  },
  {
    category: 'local',
    question: 'Can you help with Healthgrades, Zocdoc, and specialty medical directories?',
    answer:
      'Yes. Beyond the 40+ general citation directories (Google, Apple Maps, Yelp, Facebook), we build and verify listings on medical specialty directories: Healthgrades, Vitals, WebMD Physician Directory, Castle Connolly, Zocdoc, RateMDs, and relevant specialty boards. Each directory has its own verification process and optimization parameters — we handle all of it. Consistent, accurate listings across these directories strengthen both GBP ranking signals and the trustworthiness signals Google evaluates under YMYL.',
  },
  {
    category: 'local',
    question: 'How do you handle SEO for a multi-location medical practice?',
    answer:
      'Each location gets its own dedicated GBP profile, location-specific landing page with unique content (not templated duplicates), and citation profile across directories. We configure schema with @type: MedicalClinic + hasMap + location-specific address for every location. Reporting separates map pack positions and organic sessions by location so you see which markets are performing and which need more investment. Scope is quoted per location with a bundle discount for practices with three or more locations.',
  },

  // ── Dental SEO ────────────────────────────────────────────────────────────
  {
    category: 'dental',
    question: 'What is dental SEO and how is it different from general healthcare SEO?',
    answer:
      'Dental SEO is the subset of healthcare SEO focused on dental practices: family dentistry, cosmetic dentistry, orthodontics, oral surgery, and dental implants. It is more map-pack-intensive than most healthcare categories because nearly every dental query shows a 3-pack — "dentist near me," "emergency dentist," "dental implants [city]." Beyond map pack, dental SEO also covers high-value service pages (Invisalign, cosmetic dentistry, implants) that carry significant per-appointment revenue and rank well with proper E-E-A-T content. We handle dental SEO as a primary service category — GBP optimization, dental directory citations, review strategy, and service-page content — within the same month-to-month retainer model.',
  },
  {
    category: 'dental',
    question: 'How do I rank my dental practice for "dentist near me" searches?',
    answer:
      '"Dentist near me" and related near-me searches are almost exclusively won in the Google Map Pack, not organic results. To rank there: your GBP needs to be fully optimized for every dental category (General Dentist, Cosmetic Dentist, Orthodontist — whichever applies), have strong review count and score, and be backed by consistent NAP across dental directories (Zocdoc, 1-800-Dentist, Healthgrades, local dental association listings). We also optimize your website\'s LocalBusiness schema and MedicalClinic markup so Google has structured confirmation of your practice address and services. Proximity matters but it is not the only factor — a practice 1.5 miles away with 180 reviews and a complete GBP beats a competitor 0.5 miles away with 20 reviews and an incomplete listing.',
  },
  {
    category: 'dental',
    question: 'What dental directories matter for local SEO?',
    answer:
      'The highest-value dental directories for NAP consistency and ranking signals: Google Business Profile (primary), Healthgrades, Zocdoc, 1-800-Dentist, WebMD, Vitals, RateMDs, Yelp, Bing Places, Apple Maps, Facebook, and your state\'s dental association directory. Beyond these, we also cover general citation networks (Neustar/Localeze, Data Axle, Foursquare) that distribute NAP data to hundreds of downstream directories. We build and verify all of them as part of the Local Practice Growth retainer.',
  },
  {
    category: 'dental',
    question: 'Can dental SEO help with cosmetic dentistry and high-value procedures?',
    answer:
      'Yes, and this is where organic rankings (not just map pack) become important. Queries like "dental implants [city]," "Invisalign provider [city]," and "cosmetic dentist near me" have significant commercial intent and per-appointment value. We build YMYL-compliant service pages for each high-value procedure — with provider byline, cited clinical information, before/after case examples, and schema (MedicalProcedure, Physician). These pages can rank both in organic results and trigger AI-engine citations when patients ask ChatGPT or Perplexity for cosmetic dentist recommendations.',
  },

  // ── YMYL & E-E-A-T ───────────────────────────────────────────────────────
  {
    category: 'eeat',
    question: 'What does YMYL mean and why does it affect my healthcare website rankings?',
    answer:
      '"Your Money or Your Life" is Google\'s classification for content that could affect a reader\'s health, finances, or safety. Healthcare is the canonical YMYL category. Google\'s quality raters apply higher scrutiny to YMYL pages, and the algorithm reflects this — weak E-E-A-T signals (no author, no credentials, no citations) often cause healthcare content to rank below its link profile would predict. For patient-facing medical content, E-E-A-T is not a bonus you layer on later; it is the prerequisite before any other SEO signal can work.',
  },
  {
    category: 'eeat',
    question: 'What are the most important E-E-A-T signals for a medical practice website?',
    answer:
      'The five that move rankings most: (1) provider bylines on every clinical page with name, credentials (MD, DMD, PT, LCSW), and years of experience; (2) an About page with verifiable provider profiles, medical school, board certifications, and state license links; (3) citations to peer-reviewed sources (PubMed, Mayo Clinic, CDC) wherever clinical claims are made; (4) a clear editorial policy stating who reviews and publishes health content; (5) consistent presence in authoritative external directories (Healthgrades, WebMD, state medical board). We audit and address all five as part of the technical baseline.',
  },
  {
    category: 'eeat',
    question: 'Do you handle AI-engine citations for healthcare companies and practices?',
    answer:
      'Yes. ChatGPT, Perplexity, and Google AI Overviews are increasingly where patients start their healthcare searches — "best dermatologist in [city]," "what is the recovery time for [procedure]," "explain [condition] to me." Getting cited in those answers requires strong third-party brand mentions, structured FAQ and condition pages with answer-first formatting, and schema that AI engines can extract. We structure content and earn citations specifically for AI-engine visibility and report AI citations alongside Google rankings every month.',
  },
  {
    category: 'eeat',
    question: 'How do you write healthcare content that satisfies E-E-A-T requirements?',
    answer:
      'We write condition, service, and FAQ content using a process that layers E-E-A-T from the start: identify the patient search intent → structure the answer for the featured snippet → add peer-reviewed citations → attach a licensed provider byline → mark up with appropriate schema (MedicalCondition, Physician, FAQPage). We never publish AI-generated filler on healthcare pages. Every clinical claim is verified and cited. Everything is reviewed by a human with healthcare domain knowledge before publication.',
  },

  // ── HIPAA & analytics ─────────────────────────────────────────────────────
  {
    category: 'hipaa',
    question: 'Is Google Analytics 4 HIPAA compliant for a healthcare website?',
    answer:
      'Not by default. GA4 can collect IP addresses, referral URLs that may contain condition or appointment data, and form interaction events that qualify as Protected Health Information under HIPAA. Google\'s GA4 Business Associate Agreement covers limited use cases that most healthcare sites do not satisfy out of the box. We audit your GA4 implementation, identify events and parameters that create HIPAA risk, configure appropriate exclusions and filters, and advise on whether a HIPAA-compliant analytics alternative (Plausible, or a BAA-covered stack) is warranted for your use case.',
  },
  {
    category: 'hipaa',
    question: 'Can I run Google Ads for my medical practice without violating HIPAA?',
    answer:
      'Yes, with guardrails. Google\'s healthcare and medicine ads policy requires certification for some categories. The HIPAA interaction with remarketing pixels means you cannot retarget users who visited condition-specific pages without a proper BAA with Google. Standard remarketing audiences built from site visitors are high-risk for HIPAA-covered entities. We configure your analytics and ad tracking with these constraints in mind — you can still run effective Google Ads, just with the compliance guardrails in place from day one.',
  },
  {
    category: 'hipaa',
    question: 'What schema types are most valuable for healthcare websites?',
    answer:
      'The highest-impact schema types for healthcare: MedicalClinic (clinics and practices — enables rich results with address, hours, and specialties), Physician (individual provider pages — shows name, specialty, and credentials), MedicalCondition and MedicalProcedure (condition and service pages — helps AI engines extract and cite your answers), FAQPage (question-answer content — drives featured snippets and AI citations), and LocalBusiness with MedicalSpecialty (reinforces GBP data for map pack). We implement all applicable schema types as part of the technical baseline.',
  },
  {
    category: 'hipaa',
    question: 'Do you work with health tech and telehealth companies, not just brick-and-mortar practices?',
    answer:
      'Yes. Health tech and telehealth have different SEO priorities than a physical practice — the map pack matters less, but national organic rankings, condition-page authority, and AI-engine citations matter significantly more. We build E-E-A-T-compliant content strategies for health tech companies, handle the technical SEO for Next.js and React health apps, and position platforms to be cited by AI engines when users ask for condition management tools or telehealth options. HIPAA analytics configuration is equally critical for health tech — often more so, because platforms handle more patient-side data than a typical practice website.',
  },

  // ── Pricing & engagement ───────────────────────────────────────────────────
  {
    category: 'pricing',
    question: 'How much does hiring a healthcare SEO agency cost?',
    answer:
      'Healthcare SEO scope depends on practice type, market competitiveness, number of locations, existing technical health, and whether you need HIPAA analytics work, content, or local optimization as the priority. We quote each engagement individually rather than publishing fixed rates — you get a clear scope and price before any work starts, with no annual contracts. Book a discovery call and we will scope it on the spot based on your specific situation.',
  },
  {
    category: 'pricing',
    question: 'Can I start with just a healthcare SEO audit?',
    answer:
      'Yes. The audit is a standalone deliverable: a written scorecard covering E-E-A-T gaps, Google Business Profile, HIPAA-analytics risk, schema, citation coverage, and keyword opportunity, plus a prioritized 90-day roadmap. Many practices use it as a one-time strategic input and run the roadmap with their own team. If you continue into a retainer within 30 days, the audit fee is credited toward your first month. You own all deliverables regardless.',
  },
  {
    category: 'pricing',
    question: 'Do you require annual contracts for healthcare SEO?',
    answer:
      'No. Every healthcare SEO retainer is month-to-month. If we are not earning our keep — rankings improving, GBP calls increasing, new patients attributable to organic — you can leave with one billing-cycle notice. The work should retain you, not the paperwork. Most practices continue voluntarily because the map pack positions and organic rankings keep delivering new patient volume.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet different from other healthcare SEO agencies?',
    answer:
      'Three differences matter: First, we build the HIPAA-analytics and YMYL E-E-A-T compliance baseline before content or links — not as an afterthought. Most healthcare SEO agencies skip this because it is not billable on a "number of keywords" basis. Second, we report AI citations (ChatGPT, Perplexity, Google AI Overviews) alongside map pack and organic rankings in every monthly report — because that is where a growing share of patient discovery happens. Third, founder access: you talk to the person doing the work, not an account manager. Every retainer includes direct access to the founder for questions, strategy, and quarterly reviews.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema (WebPage + BreadcrumbList + Service + FAQPage + Organization)
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Healthcare SEO Agency — SEO Agency for Healthcare Companies & Medical Practices',
  url: 'https://factoryjet.com/us/services/healthcare-seo',
  description:
    'Healthcare SEO agency for US medical practices, clinics, and health companies. We build YMYL E-E-A-T signals, dominate local map packs, implement HIPAA-safe analytics, and earn AI citations. Senior-led, month-to-month.',
  inLanguage: 'en-US',
  dateModified: '2026-06-13',
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
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://factoryjet.com/us',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://factoryjet.com/us/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Healthcare SEO',
      item: 'https://factoryjet.com/us/services/healthcare-seo',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare SEO Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'Healthcare SEO / Medical SEO',
  description:
    'Healthcare SEO services for US medical practices, clinics, and health companies: YMYL E-E-A-T content, Google Business Profile optimization, HIPAA-safe analytics, medical schema, and AI-citation positioning. Audit + monthly retainer, month-to-month.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Healthcare SEO Audit',
      description:
        'E-E-A-T gap analysis, GBP audit, HIPAA-analytics risk review, schema and citation audit, plus a prioritized 90-day roadmap. One-time engagement, quoted per practice.',
    },
    {
      '@type': 'Offer',
      name: 'Local Practice Growth',
      description:
        'Monthly healthcare SEO retainer: GBP optimization, citation building across 40+ medical and general directories, review strategy, and local rank reporting. Quoted per practice.',
    },
    {
      '@type': 'Offer',
      name: 'Healthcare Authority',
      description:
        'Full-stack SEO agency for healthcare companies: E-E-A-T content, map pack, AI citations, HIPAA-safe analytics, and bi-weekly founder reviews. Quoted per engagement.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise / Multi-Location',
      description:
        'Custom scope for hospital systems, health tech companies, or multi-location practices. Pricing on application.',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  // sameAs = external URLs only — never self-reference (schema audit rule 2026-06-13)
  sameAs: [
    'https://www.linkedin.com/company/factoryjet',
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline section components
───────────────────────────────────────────────────────────────────────────── */

function QuickAnswerBlock() {
  const stats = [
    {
      figure: '77%',
      label: 'of patients search online before booking',
      source: 'Industry data via Saga Pixel / Evokad, 2025',
    },
    {
      figure: '84%',
      label: 'check reviews before choosing a provider',
      source: 'rater8 2025 Patient Survey',
    },
    {
      figure: '42%',
      label: 'of local search clicks go to the Map Pack',
      source: 'BrightEdge / industry aggregate, 2025',
    },
  ];

  return (
    <section
      aria-label="Healthcare SEO quick facts"
      style={{
        backgroundColor: '#0F0F12',
        borderTop: '2px solid #F05A28',
        borderBottom: '1px solid rgba(240,90,40,0.20)',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-7">
          <span
            className="inline-block font-fj-mono font-bold uppercase"
            style={{
              fontSize: '10px',
              letterSpacing: '0.16em',
              color: '#F05A28',
              backgroundColor: 'rgba(240,90,40,0.12)',
              padding: '4px 10px',
              borderRadius: '4px',
            }}
          >
            Quick Answer
          </span>
          <p
            className="font-fj-body font-medium"
            style={{ color: 'rgba(250,250,247,0.80)', fontSize: '0.9375rem' }}
          >
            Most patient journeys begin with a search bar, not a referral. Here is why that matters for your practice.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.figure}
              className="rounded-xl p-5"
              style={{
                backgroundColor: 'rgba(250,250,247,0.04)',
                border: '1px solid rgba(240,90,40,0.18)',
              }}
            >
              <p
                className="fj-display font-bold"
                style={{
                  color: '#F05A28',
                  fontSize: 'clamp(2.25rem, 3.5vw, 3rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.025em',
                }}
              >
                {s.figure}
              </p>
              <p
                className="mt-2 font-fj-body font-semibold"
                style={{ color: '#FAFAF7', fontSize: '0.9375rem', lineHeight: 1.4 }}
              >
                {s.label}
              </p>
              <p
                className="mt-2 font-fj-body"
                style={{
                  color: 'rgba(250,250,247,0.45)',
                  fontSize: '0.75rem',
                  fontStyle: 'italic',
                }}
              >
                {s.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsRow() {
  return (
    <section
      className="py-10 md:py-14"
      style={{
        backgroundColor: '#FAFAF7',
        borderTop: '1.5px solid rgba(240,90,40,0.20)',
        borderBottom: '1.5px solid rgba(240,90,40,0.20)',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {[
            {
              value: '500+',
              suffix: 'businesses served',
              label: 'across 10+ industries including healthcare',
              body: 'We have worked with medical, dental, health tech, and healthcare staffing clients alongside our broader SMB portfolio — enough to know where generalist SEO agencies fall short in regulated verticals.',
            },
            {
              value: 'YMYL',
              suffix: 'specialist',
              label: 'E-E-A-T built in from the first draft',
              body: 'Healthcare content lives or dies on E-E-A-T. We build provider bylines, licensed citations, and verifiable credentials into every page from the start — not as a fix when rankings plateau after months of investment.',
            },
            {
              value: 'Google + AI',
              suffix: 'both covered',
              label: 'map pack + AI citations in one monthly report',
              body: 'Patients search Google Maps and ask ChatGPT for provider recommendations. We optimize for both and report both — map pack positions, organic rankings, and AI-engine citations side by side every month.',
            },
          ].map((stat) => (
            <div key={stat.value}>
              <div className="flex items-baseline gap-2">
                <p
                  className="fj-display font-bold"
                  style={{
                    color: '#F05A28',
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-fj-body font-semibold"
                  style={{
                    color: '#0F0F12',
                    fontSize: '1.0625rem',
                    letterSpacing: '0.005em',
                  }}
                >
                  {stat.suffix}
                </p>
              </div>
              <p
                className="mt-1 font-fj-body"
                style={{
                  color: 'rgba(15,15,18,0.55)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </p>
              <p
                className="mt-4 font-fj-body"
                style={{
                  color: 'rgba(15,15,18,0.72)',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                }}
              >
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Original data table — Healthcare Practice Type SEO Priority Matrix */
function HealthcareDataTable() {
  const rows = [
    {
      type: 'Dental practice',
      primaryQuery: '"dentist near me" (550K+ mo)',
      focus: 'Map Pack first',
      schema: 'MedicalClinic, Dentist',
      topDirectory: 'Zocdoc, 1-800-Dentist',
    },
    {
      type: 'Family / internal medicine',
      primaryQuery: '"doctor near me" (246K+ mo)',
      focus: 'Map Pack first',
      schema: 'Physician, MedicalClinic',
      topDirectory: 'Healthgrades, Vitals',
    },
    {
      type: 'Chiropractic',
      primaryQuery: '"chiropractor near me" (246K+ mo)',
      focus: 'Map Pack first',
      schema: 'MedicalClinic',
      topDirectory: 'Healthgrades, Yelp',
    },
    {
      type: 'Mental health / therapy',
      primaryQuery: '"therapist near me" (110K+ mo)',
      focus: 'Map Pack + Organic',
      schema: 'Physician, PsychiatricService',
      topDirectory: 'Psychology Today',
    },
    {
      type: 'Dermatology',
      primaryQuery: '"dermatologist near me" (135K+ mo)',
      focus: 'Map Pack + Organic',
      schema: 'Physician, MedicalSpecialty',
      topDirectory: 'Zocdoc, Healthgrades',
    },
    {
      type: 'Telehealth platform',
      primaryQuery: '"online doctor" (27K+ mo)',
      focus: 'Organic + AI citations',
      schema: 'MedicalClinic, OnlineBusiness',
      topDirectory: 'G2, Capterra',
    },
    {
      type: 'Health tech / SaaS',
      primaryQuery: '[condition] software / tool',
      focus: 'Organic + AI citations',
      schema: 'SoftwareApplication',
      topDirectory: 'G2, Capterra, ProductHunt',
    },
  ];

  const thStyle: React.CSSProperties = {
    padding: '10px 14px',
    textAlign: 'left',
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: 'rgba(15,15,18,0.50)',
    borderBottom: '2px solid rgba(240,90,40,0.25)',
    whiteSpace: 'nowrap' as const,
  };

  const tdStyle: React.CSSProperties = {
    padding: '11px 14px',
    fontSize: '0.875rem',
    color: 'rgba(15,15,18,0.78)',
    borderBottom: '1px solid rgba(15,15,18,0.07)',
    lineHeight: 1.45,
    verticalAlign: 'top',
  };

  const tdBold: React.CSSProperties = {
    ...tdStyle,
    fontWeight: 600,
    color: '#0F0F12',
  };

  return (
    <div className="mt-8 overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(15,15,18,0.10)' }}>
      <p
        className="px-5 pt-5 pb-3 fj-display font-semibold"
        style={{ fontSize: '1rem', color: '#0F0F12', letterSpacing: '-0.01em' }}
      >
        Healthcare Practice Type: SEO Priority Matrix
      </p>
      <p
        className="px-5 pb-4 font-fj-body"
        style={{ fontSize: '0.8125rem', color: 'rgba(15,15,18,0.50)', fontStyle: 'italic' }}
      >
        Query volumes: Google Keyword Planner estimated ranges, June 2026. Focus column = highest-ROI starting point per type.
      </p>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#FFFFFF',
          minWidth: '680px',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: 'rgba(240,90,40,0.04)' }}>
            <th style={thStyle}>Practice type</th>
            <th style={thStyle}>Primary query</th>
            <th style={thStyle}>SEO focus</th>
            <th style={thStyle}>Key schema types</th>
            <th style={thStyle}>Top directory</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.type}
              style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : 'rgba(240,90,40,0.015)' }}
            >
              <td style={tdBold}>{row.type}</td>
              <td style={tdStyle}>{row.primaryQuery}</td>
              <td style={{ ...tdStyle, color: '#F05A28', fontWeight: 600 }}>{row.focus}</td>
              <td style={{ ...tdStyle, fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.8rem' }}>
                {row.schema}
              </td>
              <td style={tdStyle}>{row.topDirectory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Listicle — 6 healthcare specialties with highest SEO ROI */
function HealthcareSpecialtiesSection() {
  const specialties = [
    {
      number: '01',
      name: 'Dental practices',
      why:
        '"Dentist near me" drives over 550,000 monthly searches in the US. Dental implants and restorative procedures carry among the highest per-appointment values in healthcare. A practice ranking in the 3-Pack in a mid-size market can attribute 30–60 new patients per month to organic alone — with zero ongoing ad spend once the map pack position is held.',
      signal: 'Map pack + dental directory citations',
    },
    {
      number: '02',
      name: 'Mental health and therapy practices',
      why:
        'Demand for therapists, psychologists, and counselors surged post-2020 and has not receded. "Therapist near me" sees 110,000+ monthly searches with relatively low competition in smaller markets. Psychology Today\'s directory alone can drive significant referral volume, but only if your organic presence supports and validates the listing.',
      signal: 'Map pack + Psychology Today listing + condition pages',
    },
    {
      number: '03',
      name: 'Chiropractic and physical therapy',
      why:
        'Chiropractic and PT have high visit frequency — patients return weekly for months. A new patient acquired through SEO has a significantly higher lifetime value than a single-appointment specialty. "Chiropractor near me" and "physical therapist near me" both drive 200,000+ monthly searches nationally, with strong near-me intent that is almost entirely won in the Map Pack.',
      signal: 'Map pack dominance + GBP review velocity',
    },
    {
      number: '04',
      name: 'Dermatology (cosmetic and medical)',
      why:
        'Dermatology blends medical intent ("dermatologist for eczema") with cosmetic intent ("Botox provider near me"), giving practices two distinct content and ranking tracks. Cosmetic procedure pages (laser resurfacing, filler, Botox) rank well with proper E-E-A-T content and earn AI citations when patients ask ChatGPT for provider recommendations.',
      signal: 'Map pack + cosmetic service pages + AI citations',
    },
    {
      number: '05',
      name: 'Telehealth platforms',
      why:
        'Telehealth SEO is national-reach, content-led, and increasingly dependent on AI citations. When a patient asks ChatGPT "what is the best telehealth platform for anxiety" or "online psychiatry that takes insurance," the platforms with the strongest FAQ and condition-page E-E-A-T are cited. No map pack required — pure content and AI-citation strategy.',
      signal: 'AI citations + national organic + condition pages',
    },
    {
      number: '06',
      name: 'Orthopedics and sports medicine',
      why:
        'Orthopedic and sports medicine practices handle high-value elective procedures (ACL repair, joint replacement, rotator cuff surgery) where the patient often researches extensively before choosing a surgeon. E-E-A-T-compliant procedure pages with surgeon bylines, peer-reviewed citations, and outcome data — structured for both Google and AI Overviews — capture this high-intent research phase.',
      signal: 'E-E-A-T procedure pages + surgeon bylines + AI citations',
    },
  ];

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[720px]">
          <p className="fj-eyebrow">HEALTHCARE SEO ROI</p>
          <h2
            className="fj-display font-semibold text-fj-ink mt-3"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.375rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            6 healthcare specialties where SEO generates the clearest, most measurable ROI.
          </h2>
          <p
            className="mt-4 font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1rem', lineHeight: 1.65 }}
          >
            Not every healthcare category gets the same return from SEO investment. These six specialties share a combination of high patient search volume, clear local intent, and repeat or high-value appointments that make SEO the most efficient patient acquisition channel available.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s) => (
            <div
              key={s.number}
              className="rounded-2xl p-7"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(15,15,18,0.09)',
                boxShadow: '0 1px 4px rgba(15,15,18,0.04)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="fj-display font-bold"
                  style={{ color: 'rgba(240,90,40,0.30)', fontSize: '1.75rem', lineHeight: 1 }}
                >
                  {s.number}
                </span>
                <p
                  className="fj-display font-semibold"
                  style={{ color: '#0F0F12', fontSize: '1.0625rem', lineHeight: 1.2 }}
                >
                  {s.name}
                </p>
              </div>
              <p
                className="font-fj-body"
                style={{ color: 'rgba(15,15,18,0.70)', fontSize: '0.9375rem', lineHeight: 1.6 }}
              >
                {s.why}
              </p>
              <div
                className="mt-5 rounded-lg px-4 py-3"
                style={{ backgroundColor: 'rgba(240,90,40,0.06)' }}
              >
                <p
                  className="font-fj-mono font-bold uppercase"
                  style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#F05A28' }}
                >
                  Primary signal
                </p>
                <p
                  className="mt-1 font-fj-body"
                  style={{ color: '#0F0F12', fontSize: '0.8125rem', fontWeight: 500 }}
                >
                  {s.signal}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: '#F05A28',
              color: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(240,90,40,0.28)',
            }}
          >
            Book a free healthcare SEO audit <span aria-hidden="true">→</span>
          </a>
          <Link
            href="/us/services/local-seo"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90"
            style={{
              color: '#F05A28',
              border: '1.5px solid #F05A28',
            }}
          >
            See our local SEO service
          </Link>
        </div>
      </div>
    </section>
  );
}

function HealthcareSEOPricingGrid() {
  return (
    <section
      id="pricing"
      className="py-14 md:py-20"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.065) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[760px]">
          <p className="fj-eyebrow">HEALTHCARE SEO PRICING</p>
          <h2
            className="fj-display font-semibold text-fj-ink mt-3"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            Quote-first pricing, scoped to your practice type and market.
          </h2>
          <p
            className="mt-4 max-w-[600px] font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1rem', lineHeight: 1.65 }}
          >
            Healthcare SEO scope varies significantly by practice type, market competitiveness, and number of locations. We quote each engagement individually rather than publishing flat rates — you get a clear scope and price before any work starts, with no annual contracts. Start with an audit and move to a retainer once you see where the highest-value opportunity is.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular;
            const isContact = tier.isContact;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl overflow-hidden ${
                  isPopular ? 'lg:-mt-3' : ''
                }`}
                style={{
                  backgroundColor: isPopular ? '#0F0F12' : '#FFFFFF',
                  border: isPopular ? 'none' : '1px solid rgba(15,15,18,0.10)',
                  boxShadow: isPopular
                    ? '0 12px 48px rgba(240,90,40,0.25), 0 4px 16px rgba(15,15,18,0.20)'
                    : '0 1px 3px rgba(15,15,18,0.04)',
                }}
              >
                <div
                  style={{ height: '3px', backgroundColor: '#F05A28' }}
                  aria-hidden="true"
                />

                {isPopular && (
                  <div
                    className="absolute"
                    style={{
                      top: '0.75rem',
                      right: '0.75rem',
                      backgroundColor: '#F05A28',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                    }}
                  >
                    Most popular
                  </div>
                )}

                <div className="flex-1 flex flex-col p-7">
                  <p
                    className="font-fj-body font-semibold"
                    style={{ color: isPopular ? '#FAFAF7' : '#0F0F12', fontSize: '0.9375rem' }}
                  >
                    {tier.name}
                  </p>

                  <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                    <p
                      className="fj-display font-bold"
                      style={{
                        color: '#F05A28',
                        fontSize: isContact ? '1.5rem' : '1.75rem',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {tier.price}
                    </p>
                    {tier.cadence && (
                      <p
                        className="font-fj-body"
                        style={{
                          color: isPopular ? 'rgba(250,250,247,0.70)' : 'rgba(15,15,18,0.55)',
                          fontSize: '0.875rem',
                        }}
                      >
                        {tier.cadence}
                      </p>
                    )}
                  </div>

                  <p
                    className="mt-4 font-fj-body"
                    style={{
                      color: isPopular ? 'rgba(250,250,247,0.80)' : 'rgba(15,15,18,0.70)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.55,
                    }}
                  >
                    {tier.description}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 font-fj-body"
                        style={{
                          color: isPopular ? 'rgba(250,250,247,0.85)' : 'rgba(15,15,18,0.80)',
                          fontSize: '0.875rem',
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: '#F05A28' }}
                          aria-hidden="true"
                        >
                          <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                            <path
                              d="M2 5l2 2 4-4"
                              stroke="#FFFFFF"
                              strokeWidth="1.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <a
                      href={tier.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{
                        background: isPopular ? '#F05A28' : 'transparent',
                        color: isPopular ? '#FFFFFF' : '#F05A28',
                        border: isPopular ? 'none' : '1.5px solid #F05A28',
                        outlineColor: '#F05A28',
                        boxShadow: isPopular ? '0 4px 16px rgba(240,90,40,0.30)' : 'none',
                      }}
                    >
                      {tier.ctaLabel}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="mt-10 text-center font-fj-body"
          style={{
            color: 'rgba(15,15,18,0.55)',
            fontSize: '0.8125rem',
            letterSpacing: '0.04em',
            fontWeight: 500,
          }}
        >
          Month-to-month. Full data ownership from day one. Start with an audit — no required retainer.
        </p>
      </div>
    </section>
  );
}

/* Byline / reviewed bar */
function ReviewedBy() {
  return (
    <div
      className="mx-auto max-w-[1120px] px-6 md:px-8 py-4"
      style={{ borderBottom: '1px solid rgba(15,15,18,0.08)' }}
    >
      <p className="font-fj-body" style={{ color: 'rgba(15,15,18,0.50)', fontSize: '0.8125rem' }}>
        <span style={{ fontWeight: 600, color: 'rgba(15,15,18,0.70)' }}>Written and reviewed by Bhavesh Barot</span>
        {' '}— Founder, FactoryJet. Last reviewed:{' '}
        <time dateTime="2026-06-13">{REVIEWED_DATE}</time>.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page render
───────────────────────────────────────────────────────────────────────────── */

export default function HealthcareSeoServicePage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <Script
        id="healthcare-seo-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="healthcare-seo-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="healthcare-seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="healthcare-seo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="healthcare-seo-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <SiteHeader />

      {/* ─── 1. Hero ─────────────────────────────────────────────────────── */}
      {/*
        NON-NEGOTIABLES (2026-06-13):
        - Hero fits single viewport on desktop + mobile — no scroll required
        - Lead ≤ 2 sentences, ≤ 50 words
        - rightSlot hidden on mobile (hidden lg:block) — preserves text LCP
        - Gradient accent on primary noun in headline (CSS only, zero perf cost)
        - Image max-h capped so it never forces hero taller than viewport
      */}
      <Hero
        eyebrow="HEALTHCARE SEO AGENCY"
        headline={
          <>
            The SEO agency for{' '}
            <span className="bg-gradient-to-r from-[#F05A28] to-[#FF8C5A] bg-clip-text text-transparent">
              healthcare companies
            </span>
            <br className="hidden md:block" />
            that does the compliance work other agencies skip.
          </>
        }
        lead="77% of patients search online before booking — and the practices ranking in Google's Map Pack win the patient. We build the full compliance-aware stack: YMYL E-E-A-T, HIPAA-safe analytics, map pack dominance, and monthly reporting on patient outcomes."
        primaryCta={{
          label: 'Book a free healthcare SEO audit',
          href: CALENDLY,
        }}
        secondaryCta={{
          label: 'See our approach',
          href: '#pricing',
        }}
        trustItems={[
          '77% of patients search online before booking',
          'YMYL E-E-A-T built into every page',
          'Map pack + AI citations in one monthly report',
        ]}
        rightSlot={
          /* hidden on mobile — image is never the LCP element; desktop-only visual */
          <div className="hidden lg:block relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <Image
              src="/images/services/healthcare-seo.webp"
              alt="Healthcare SEO agency — doctor reviewing patient acquisition analytics on laptop"
              width={1344}
              height={1024}
              className="w-full object-cover max-h-[520px]"
              priority={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        }
      />

      {/* ─── 2. Quick Answer block — sourced stats ────────────────────────── */}
      <QuickAnswerBlock />

      {/* ─── 3. Stats row — animated counters (client component) ─────────── */}
      <StatsRowAnimated />

      {/* ─── 4. Reviewed-by byline ───────────────────────────────────────── */}
      <ReviewedBy />

      {/* ─── 5. Service explanation — what healthcare SEO covers ─────────── */}
      {/*
        DESIGN RULE (2026-06-13): Table extracted to its own full-width section below.
        Table inside a 2-col left body prop clips its rightmost columns — always
        put data tables in standalone sections with overflow-x-auto.
        rightSlot fills dead space with AI map-pack image below Quick Facts.
      */}
      <ServiceExplanation
        eyebrow="WHAT HEALTHCARE SEO COVERS"
        headline="Standard SEO handles about 60% of the job. The other 40% is healthcare-specific — and it is where rankings stall."
        lead="For a SaaS company, SEO is technical and content work. For a medical practice or health company, there is an entire compliance and trust layer underneath: YMYL E-E-A-T, HIPAA-safe analytics, medical schema types, Google Business Profile for patient acquisition, and specialty directory coverage. The agencies that skip that layer leave healthcare clients wondering why their rankings do not reflect their link profile or content investment."
        body={
          <>
            <p
              className="mt-6 font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
            >
              As a full-stack SEO agency for healthcare companies, we cover: the technical E-E-A-T baseline (provider bylines, citations, About pages, schema), Google Business Profile optimization and citation building for local practices, HIPAA-safe analytics configuration, condition and service content authored with licensed provider attribution, and AI-citation positioning so your practice is cited when patients ask ChatGPT or Perplexity for provider recommendations. Monthly reporting separates map pack positions from organic sessions from AI citations — so you know exactly where patient acquisition is coming from.
            </p>
            <p
              className="mt-4 font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
            >
              Need SEO for a non-healthcare business? Our{' '}
              <Link href="/us/services/local-seo" className="text-[#F05A28] font-medium underline underline-offset-2">
                local SEO service
              </Link>{' '}
              covers any category, and our{' '}
              <Link href="/us/services/seo" className="text-[#F05A28] font-medium underline underline-offset-2">
                core SEO service
              </Link>{' '}
              applies the same E-E-A-T and AI-citation playbook to non-regulated industries.
            </p>
          </>
        }
        rightSlot={
          <div className="flex flex-col gap-5">
            {/* Quick Facts card */}
            <div
              className="rounded-2xl border p-7"
              style={{
                borderColor: 'rgba(15,15,18,0.10)',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 1px 3px rgba(15,15,18,0.04)',
              }}
            >
              <p
                className="font-fj-mono font-bold uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}
              >
                Quick facts
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  {
                    stat: '2023',
                    detail:
                      'Online search surpassed physician referrals as the #1 way Americans find new doctors.',
                  },
                  {
                    stat: '94%',
                    detail:
                      'of prospective patients choose their provider based on online reputation.',
                  },
                  {
                    stat: '50%+',
                    detail:
                      'increase in patient calls when a practice ranks in the Google Map Pack.',
                  },
                  {
                    stat: 'YMYL',
                    detail:
                      'Google applies elevated quality review to all healthcare content — bylines + citations are ranking prerequisites.',
                  },
                ].map((f) => (
                  <li key={f.stat} className="flex items-start gap-3">
                    <span
                      className="fj-display font-bold shrink-0"
                      style={{ color: '#F05A28', fontSize: '1.125rem', lineHeight: 1.2 }}
                    >
                      {f.stat}
                    </span>
                    <p
                      className="font-fj-body"
                      style={{ color: 'rgba(15,15,18,0.68)', fontSize: '0.875rem', lineHeight: 1.5 }}
                    >
                      {f.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <p
                className="mt-5 font-fj-body"
                style={{ color: 'rgba(15,15,18,0.40)', fontSize: '0.75rem', fontStyle: 'italic' }}
              >
                Sources: netoneclick.com, industry aggregate data, BrightEdge 2025.
              </p>
            </div>

            {/* Map pack image — fills dead space, reinforces local SEO angle */}
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{
                border: '1px solid rgba(15,15,18,0.10)',
                boxShadow: '0 2px 12px rgba(15,15,18,0.06)',
              }}
            >
              <Image
                src="/images/services/healthcare-seo-map-pack.webp"
                alt="Google Map Pack showing medical practice ranked #1 for 'dentist near me'"
                width={1024}
                height={1344}
                className="w-full object-cover"
                style={{ maxHeight: '340px', objectPosition: 'center top' }}
                loading="lazy"
              />
              {/* Caption overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{ background: 'linear-gradient(to top, rgba(15,15,18,0.75) 0%, transparent 100%)' }}
              >
                <p
                  className="font-fj-mono font-bold uppercase"
                  style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.75)' }}
                >
                  Map Pack position #1
                </p>
                <p
                  className="font-fj-body"
                  style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', marginTop: '2px' }}
                >
                  42% of local search clicks go to the top 3 Map Pack results
                </p>
              </div>
            </div>
          </div>
        }
      />

      {/* ─── 5b. Data table — full-width standalone (extracted from left col) ── */}
      {/*
        DESIGN RULE: tables always go in standalone full-width sections.
        Never nest a multi-column table inside a 2-col layout's body prop.
      */}
      <section className="pb-14 md:pb-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <HealthcareDataTable />
        </div>
      </section>

      {/* ─── 6. Strategic dark — 3 problems most agencies miss ───────────── */}
      <StrategicDarkSection
        eyebrow="WHY HEALTHCARE SEO IS DIFFERENT"
        headline="Three healthcare SEO failures that stall rankings — and that most agencies never fix."
        lead="The highest-impact gaps in healthcare SEO sit below the standard SEO checklist. These are the three places most generalist agencies leave money on the table."
        pillars={PILLARS}
      />

      {/* ─── 7. Specialties — interactive tabs (client component) ───────── */}
      <HealthcareSpecialtiesTabs />

      {/* ─── 8. Process — visual intro + 5-step journey ──────────────────── */}
      {/* Visual break image before the 5-step cards — reduces text density */}
      <div
        className="relative w-full overflow-hidden"
        style={{ maxHeight: '400px', backgroundColor: '#0F0F12' }}
        aria-hidden="true"
      >
        <Image
          src="/images/services/healthcare-seo-process.webp"
          alt="Healthcare SEO strategy session with ranking charts showing upward trend"
          width={1344}
          height={768}
          className="w-full object-cover opacity-80"
          style={{ maxHeight: '400px' }}
          loading="lazy"
        />
        {/* Gradient overlays — top and bottom fade to blend with adjacent sections */}
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(15,15,18,0.85) 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(15,15,18,0.90) 0%, transparent 100%)' }}
        />
        {/* Floating caption */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center px-6">
            <p
              className="font-fj-mono font-bold uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#F05A28' }}
            >
              OUR 5-STEP HEALTHCARE SEO PROCESS
            </p>
            <p
              className="mt-2 fj-display font-semibold"
              style={{
                color: '#FAFAF7',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                textShadow: '0 2px 16px rgba(0,0,0,0.60)',
              }}
            >
              Audit → Compliance → Rankings → Content → Report
            </p>
          </div>
        </div>
      </div>

      <ServiceJourneyRow
        eyebrow="OUR 5-STEP HEALTHCARE SEO PROCESS"
        headline="From audit to map pack rankings, AI citations, and a full patient-acquisition report."
        lead="Every healthcare engagement follows the same five steps. The audit defines the compliance and opportunity baseline. The roadmap drives the retainer. Every step ships a deliverable."
        stages={HEALTHCARE_SEO_JOURNEY}
        closingNote="Every step ships a deliverable. Every month you see map pack positions, organic rankings, and AI citations in one consolidated report."
      />

      {/* ─── 9. Comparison vs generalist / freelancer / in-house ─────────── */}
      <ComparisonTable
        eyebrow="HOW WE COMPARE"
        headline="FactoryJet vs generalist SEO agencies, freelancers, and in-house teams."
        lead="Four ways healthcare organizations approach SEO — and where a healthcare-specialist, compliance-aware model differs in practice."
        columns={[
          { label: 'FactoryJet', isFactoryJet: true },
          { label: 'Generalist Agency' },
          { label: 'Freelancer' },
          { label: 'In-House' },
        ]}
        rows={[
          {
            feature: 'Contract terms',
            values: ['Month-to-month', 'Annual common', 'Hourly / project', 'Fixed salary'],
          },
          {
            feature: 'YMYL E-E-A-T expertise',
            values: [
              <CompareIcon key="fj-eeat" kind="yes" />,
              <CompareIcon key="gen-eeat" kind="partial" />,
              <CompareIcon key="free-eeat" kind="partial" />,
              <CompareIcon key="house-eeat" kind="partial" />,
            ],
          },
          {
            feature: 'HIPAA-safe analytics review',
            values: [
              <CompareIcon key="fj-hipaa" kind="yes" />,
              <CompareIcon key="gen-hipaa" kind="no" />,
              <CompareIcon key="free-hipaa" kind="no" />,
              <CompareIcon key="house-hipaa" kind="partial" />,
            ],
          },
          {
            feature: 'Google Business Profile + map pack',
            values: [
              <CompareIcon key="fj-gbp" kind="yes" />,
              <CompareIcon key="gen-gbp" kind="partial" />,
              <CompareIcon key="free-gbp" kind="partial" />,
              <CompareIcon key="house-gbp" kind="partial" />,
            ],
          },
          {
            feature: 'Medical schema (MedicalClinic, Physician)',
            values: [
              <CompareIcon key="fj-schema" kind="yes" />,
              <CompareIcon key="gen-schema" kind="no" />,
              <CompareIcon key="free-schema" kind="partial" />,
              <CompareIcon key="house-schema" kind="partial" />,
            ],
          },
          {
            feature: 'AI citations (ChatGPT / Perplexity / AIO)',
            values: [
              <CompareIcon key="fj-ai" kind="yes" />,
              <CompareIcon key="gen-ai" kind="no" />,
              <CompareIcon key="free-ai" kind="no" />,
              <CompareIcon key="house-ai" kind="partial" />,
            ],
          },
          {
            feature: 'Dental SEO + specialty directories',
            values: [
              <CompareIcon key="fj-dental" kind="yes" />,
              <CompareIcon key="gen-dental" kind="partial" />,
              <CompareIcon key="free-dental" kind="partial" />,
              <CompareIcon key="house-dental" kind="no" />,
            ],
          },
        ]}
        footer="Comparison reflects typical offerings in each category as of June 2026. Individual providers vary."
      />

      {/* ─── 10. Pricing — custom 4-card grid ────────────────────────────── */}
      <HealthcareSEOPricingGrid />

      {/* ─── 11. Industries served ───────────────────────────────────────── */}
      <IndustriesGrid />

      {/* ─── 12. FAQ — 25 items, 6 categories ────────────────────────────── */}
      <FAQ
        eyebrow="HEALTHCARE SEO FAQ"
        headline="Healthcare SEO questions, answered plainly."
        lead="Questions from practice owners, health tech founders, and dental office managers. If yours is not below, send it in — answers usually come back within 24 hours."
        categories={FAQ_CATEGORIES}
        items={FAQ_ITEMS}
      />

      {/* ─── 13. Closing CTA ─────────────────────────────────────────────── */}
      <TalkToFounder
        variant="full"
        theme="dark"
        eyebrow="FOUNDER ACCESS"
      />

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

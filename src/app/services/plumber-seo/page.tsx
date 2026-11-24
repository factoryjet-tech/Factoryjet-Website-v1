import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import HeroInlineForm from '@/components/HeroInlineForm';

import {
  CALENDLY,
  CREAM,
  GREEN_SOFT,
  HAIRLINE,
  HUB_HREF,
  ORANGE,
  ORANGE_DARK,
  PEACH,
  CheckCircle,
  Eyebrow,
  H2,
  InlineLink,
  JsonLd,
  Lead,
  RelatedGrid,
  SourceCards,
  TwoLists,
  VolumeCard,
  buildTradeSchemas,
} from '../_trade-seo/TradeSeoParts';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/plumber-seo: US plumbing SEO vertical page.

   Intent owned by THIS page (DataForSEO US, pulled 24 Nov 2026):
     plumber seo / seo for plumbers / plumbing seo (480/mo each, CPC $45.49) ·
     local seo for plumbers (390) · plumbing marketing (390) ·
     seo for plumbing companies (320) · plumbing seo company (260, CPC $71.12) ·
     plumber seo services (260).

   Angle that separates it from the electrician and cleaning pages: emergency
   versus planned plumbing demand, Local Services Ads next to the map pack, and
   after-hours call handling. Links UP to the home services hub and ACROSS to
   roofing, HVAC, electrician and cleaning.

   Rules honoured: no em dashes, no FactoryJet prices, no invented stats or
   clients, no phone number, no team location, no italic heading emphasis.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/plumber-seo';
const REVIEWED_ISO = '2026-11-24';
const REVIEWED_DATE = 'November 24, 2026';

export const metadata: Metadata = {
  title: 'Plumber SEO: SEO for Plumbers and Plumbing Companies | FactoryJet',
  description:
    'Plumber SEO built for two buyers: the burst pipe at 2am and the planned water heater or repipe. Map pack, Local Services Ads, service pages and AI answers.',
  keywords: [
    'plumber seo',
    'seo for plumbers',
    'plumbing seo',
    'local seo for plumbers',
    'seo for plumbing companies',
    'plumbing seo company',
    'plumber seo services',
    'plumbing marketing',
    'plumbing seo agency',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Plumber SEO: SEO for Plumbers and Plumbing Companies | FactoryJet',
    description:
      'Search work for US plumbing companies: emergency and planned job pages, Google Business Profile, Local Services Ads alignment, reviews and AI answer engines.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/local-seo/section-plumber-door-phone-map.webp',
        width: 1376,
        height: 768,
        alt: 'A homeowner showing a plumber a map on her phone at her front door',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plumber SEO: SEO for Plumbers and Plumbing Companies | FactoryJet',
    description:
      'Plumbing search has two buyers on two clocks. We build for the emergency call and the planned job, in the towns your vans actually reach.',
    images: ['https://factoryjet.com/images/us/services/local-seo/section-plumber-door-phone-map.webp'],
  },
  alternates: { canonical: PAGE_URL, languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ─── Two buyers on two clocks ──────────────────────────────────────────── */

type BuyerRow = { label: string; emergency: string; planned: string };

const BUYER_ROWS: ReadonlyArray<BuyerRow> = [
  {
    label: 'What they type',
    emergency: 'emergency plumber near me, burst pipe, sewer backup, no hot water tonight',
    planned: 'tankless water heater install, repipe cost, sewer line replacement, water softener',
  },
  {
    label: 'Device and moment',
    emergency: 'A phone, wet floor, often outside office hours',
    planned: 'Laptop or phone over several evenings, comparing two or three quotes',
  },
  {
    label: 'What decides the call',
    emergency: 'Map pack position, a tap-to-call button, and proof someone answers now',
    planned: 'Clear scope, photos of similar jobs, warranty terms, financing, reviews that name the job',
  },
  {
    label: 'Page that wins',
    emergency: 'A short emergency page per service area, call button above the fold',
    planned: 'A long service page per job type with process, permits and what affects scope',
  },
  {
    label: 'Where it leaks',
    emergency: 'Calls that ring out after 6pm, voicemail, a form that promises a reply tomorrow',
    planned: 'Thin pages that list every service in one paragraph and answer nothing',
  },
];

/* ─── Program (also feeds the Service schema offer catalog) ───────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'Business Profile set up the way Google describes for plumbers',
    body:
      'Primary category Plumber, secondary categories only for work you take (drainage service, water heater installation, septic). Address hidden if you run from home, service areas drawn by the towns your vans reach, hours that match when someone picks up. Google uses a home-based plumber as its own example of who should hide an address.',
  },
  {
    n: '02',
    title: 'Emergency pages that load fast and ring through',
    body:
      'One short page per core service area for burst pipes, sewer backups and no-heat water heater failures. Tap-to-call above the fold, hours stated plainly, and no claim of 24/7 unless the phone is answered at 2am. We check this by calling it.',
  },
  {
    n: '03',
    title: 'One deep page per planned job',
    body:
      'Water heater repair and replacement, tankless conversion, drain cleaning, hydro jetting, leak detection, repiping, sewer line repair and trenchless options, gas line work, fixture installs. Each page explains the job, what changes scope, permits where your city needs them, and what the visit looks like.',
  },
  {
    n: '04',
    title: 'Service-area pages with real job evidence',
    body:
      'A page for each town you actually serve, carrying job photos, the housing stock you see there (slab foundations, older galvanized lines, well water), and local permit notes. No swapped-city-name doorway pages.',
  },
  {
    n: '05',
    title: 'Local Services Ads and organic working from one profile',
    body:
      'Plumbing sits in the Local Services Ads program, which shows above the map pack in many markets. Google says ad ranking can drop if you regularly miss calls. We line up license details, reviews and job types so the paid and organic listings describe the same business.',
  },
  {
    n: '06',
    title: 'Missed-call capture after hours',
    body:
      'Every unanswered emergency call is a lead paid for by your rankings and then handed to the next plumber. We wire call tracking and, where it fits, an AI receptionist that books or escalates, so rankings turn into dispatched jobs.',
  },
  {
    n: '07',
    title: 'Review requests tied to job close in your field software',
    body:
      'Requests fire when a job closes in ServiceTitan, Housecall Pro or Jobber, sent to every customer, not a hand-picked few. Google rules out selective asking and incentives, so the process is built to be safe to run every day.',
  },
  {
    n: '08',
    title: 'Answers AI assistants can quote',
    body:
      'Short, factual answers to the questions homeowners now ask ChatGPT and Google AI Overviews first: is a running toilet urgent, tank versus tankless, what a camera inspection shows. Marked up with schema so engines can attribute the answer to you.',
  },
  {
    n: '09',
    title: 'Reporting in booked jobs, not visits',
    body:
      'Map rankings across a grid of your service area, Search Console impressions, tracked calls and form fills, matched to booked and invoiced jobs in your CRM. If a page brings traffic and no work, we say so and change it.',
  },
];

/* ─── Channel comparison ───────────────────────────────────────────────── */

type ChannelRow = { label: string; seo: string; lsa: string; ads: string; shared: string };

const CHANNEL_ROWS: ReadonlyArray<ChannelRow> = [
  {
    label: 'Where it shows',
    seo: 'Map pack and organic results, plus AI answers',
    lsa: 'Top of the page in many plumbing searches',
    ads: 'Sponsored slots above and below organic',
    shared: 'Inside the marketplace app or site',
  },
  {
    label: 'How you pay',
    seo: 'Ongoing work, no per-lead charge',
    lsa: 'Per lead, with disputes for bad leads',
    ads: 'Per click, whether or not they call',
    shared: 'Per lead, often sold to several plumbers',
  },
  {
    label: 'Who owns the lead',
    seo: 'You',
    lsa: 'You, while the budget runs',
    ads: 'You, while the bids run',
    shared: 'The marketplace, and they resell it',
  },
  {
    label: 'Emergency calls',
    seo: 'Strong once you rank near the searcher',
    lsa: 'Strong, and ranking drops if you miss calls',
    ads: 'Strong if the budget lasts the night',
    shared: 'Speed-to-dial decides who wins',
  },
  {
    label: 'Planned jobs',
    seo: 'Strongest: deep pages win comparison shoppers',
    lsa: 'Fine, though profiles say little about scope',
    ads: 'Expensive for long research journeys',
    shared: 'Price shoppers, low close rates',
  },
  {
    label: 'When you stop paying',
    seo: 'Rankings fade slowly over months',
    lsa: 'Leads stop the same day',
    ads: 'Leads stop the same day',
    shared: 'Leads stop the same day',
  },
];

/* ─── Who ranks today (observed 24 Nov 2026) ───────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'marketingstrategiesplumbing.com',
    note: 'Positions 1 and 2 for seo for plumbers',
    detail:
      'Two pages from one plumbing-only firm hold the top two spots on that query. That is what focus looks like on a term this narrow, and it is a fair choice if you want a vendor that only does plumbing.',
  },
  {
    domain: 'theagencywp.com',
    note: 'Position 1 for plumber seo',
    detail:
      'Leads with the 2am emergency moment and with AI answers. A home services agency page that understands the trade, which is part of why it sits first.',
  },
  {
    domain: 'comradeweb.com',
    note: 'Position 2, a 14-company listicle',
    detail:
      'A list of plumbing SEO companies published by one of the companies on it, which ranks itself first. Useful as a directory. Read it knowing who wrote it.',
  },
  {
    domain: 'plumbingseoagency.us',
    note: 'Position 3, packages priced on the page',
    detail:
      'Publishes fixed monthly package tiers and a long list of Texas towns. A clear offer if a fixed package suits you, and a different model from scoped work.',
  },
  {
    domain: 'hookagency.com',
    note: 'Position 7, a six-step guide',
    detail:
      'Around 3,100 words walking through profile, reviews, service pages, city pages, links and AI questions in order. One of the better free guides if you want to do it yourself first.',
  },
  {
    domain: 'housecallpro.com',
    note: 'Position 10 for seo for plumbers',
    detail:
      'A field software company ranking with a list of local SEO companies. You are often competing with software brands that plumbers already use, not only with agencies.',
  },
];

/* ─── FAQ ─────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Plumber SEO basics' },
  { key: 'emergency', label: 'Emergency calls' },
  { key: 'local', label: 'Map pack and reviews' },
  { key: 'scope', label: 'Scope and results' },
  { key: 'ai', label: 'AI search' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is plumber SEO?',
    answer:
      'Plumber SEO is the work of getting a plumbing company found in the Google map pack, the organic results and AI answers for the jobs and towns it serves. For plumbers it splits in two: emergency searches that need a fast call, and planned jobs like water heaters and repipes that need detailed pages.',
  },
  {
    category: 'basics',
    question: 'What keywords should a plumbing company target?',
    answer:
      'Start with job plus place: water heater replacement in your town, drain cleaning, sewer line repair, leak detection, repiping. Add emergency phrases for each core service area. Broad terms like plumber near me are decided mostly by distance and your Business Profile, so pages alone will not win them.',
  },
  {
    category: 'basics',
    question: 'Do plumbers need a blog?',
    answer:
      'Rarely in the usual sense. A plumber needs strong service pages and short answers to real homeowner questions, such as whether a running toilet is urgent or what a camera inspection finds. Generic monthly posts about plumbing tips seldom bring calls.',
  },
  {
    category: 'emergency',
    question: 'How do I rank for emergency plumber near me?',
    answer:
      'Emergency searches lean heavily on distance and the map pack. You need a Business Profile with accurate hours and service areas, reviews that mention emergency work, a short emergency page per core area, and a phone that is answered when the profile says it will be.',
  },
  {
    category: 'emergency',
    question: 'Should I say 24/7 on my website?',
    answer:
      'Only if a person or a booking system answers at 2am. Homeowners who call a 24/7 number and reach voicemail leave bad reviews and call the next listing. If nobody answers overnight, state your real hours and an after-hours option.',
  },
  {
    category: 'emergency',
    question: 'What happens to emergency calls I miss?',
    answer:
      'They go to the next plumber in the list, usually within a minute. Missed calls also hurt Local Services Ads, since Google says ranking can drop if you regularly fail to answer. Call tracking shows how many you miss, and an AI receptionist or answering service can catch them.',
  },
  {
    category: 'local',
    question: 'Should a plumber show their address on Google?',
    answer:
      'If customers do not visit your premises, Google says to hide the address and set service areas instead, and it uses a plumber working from home as its example. Keep the service area within about two hours of driving from your base, as Google advises.',
  },
  {
    category: 'local',
    question: 'How does Google rank plumbers in the map pack?',
    answer:
      'Google says local results are mainly based on relevance, distance and popularity. For a plumber that means correct categories and services, being close to the searcher, and a steady flow of genuine reviews and mentions across the web.',
  },
  {
    category: 'local',
    question: 'Can I offer a discount for Google reviews?',
    answer:
      'No. Google prohibits offering payment, discounts or free services in exchange for reviews, and it also prohibits asking only happy customers. Ask every customer after every job, and reply to each review, good or bad.',
  },
  {
    category: 'local',
    question: 'Are Local Services Ads better than SEO for plumbers?',
    answer:
      'They do different jobs. Local Services Ads charge per lead and stop when the budget stops, but they can fill the phone quickly. SEO costs effort up front and keeps working. Most busy plumbing companies run both from the same profile, reviews and license details.',
  },
  {
    category: 'scope',
    question: 'How long does plumbing SEO take?',
    answer:
      'Profile and citation fixes can move map rankings within weeks. Service pages for planned jobs usually take three to six months to settle, longer in large metros with many established plumbers. Anyone promising page one in thirty days is guessing.',
  },
  {
    category: 'scope',
    question: 'How much does plumbing SEO cost?',
    answer:
      'It depends on how many service areas and job types you cover, how strong local competitors are, and whether the site needs rebuilding first. We scope after looking at your market and quote a fixed price per phase. We do not publish one price for every plumber because markets differ too much.',
  },
  {
    category: 'scope',
    question: 'How do you measure whether plumber SEO works?',
    answer:
      'By booked jobs. We track map rankings across a grid of your service area, organic impressions, tracked calls and form fills, and match them to jobs in ServiceTitan, Housecall Pro or Jobber where we have access.',
  },
  {
    category: 'ai',
    question: 'How do plumbers show up in ChatGPT and AI Overviews?',
    answer:
      'AI assistants quote pages that answer a question directly and are clearly tied to a real local business. Short answers on your service pages, consistent business details across directories, and genuine reviews give engines something to cite. Nobody can guarantee a mention.',
  },
];

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Home Services SEO', url: `https://factoryjet.com${HUB_HREF}` },
  { name: 'Plumber SEO', url: PAGE_URL },
];

const SCHEMAS = buildTradeSchemas({
  url: PAGE_URL,
  name: 'Plumber SEO: SEO for Plumbers and Plumbing Companies',
  description:
    'Search program for US plumbing companies covering emergency and planned job pages, Google Business Profile, Local Services Ads alignment, after-hours call capture, reviews and AI answer engines.',
  serviceName: 'Plumber SEO',
  serviceType: 'Plumber SEO / SEO for Plumbers / Plumbing SEO / Local SEO for Plumbers',
  audience: 'US residential and commercial plumbing companies',
  reviewed: REVIEWED_ISO,
  speakable: ['#answer-first', '#what-is-plumber-seo'],
  offers: DELIVERABLES,
  faq: FAQ_ITEMS,
  breadcrumbs: BREADCRUMB_ITEMS,
});

/* ─── Page ────────────────────────────────────────────────────────────── */

export default function PlumberSeoPage() {
  return (
    <>
      <JsonLd id="plumb-schema" data={SCHEMAS} />
      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-14 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-18">
            <div>
              <p className="fj-eyebrow">Plumber SEO &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.5rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Plumber SEO for the 2am burst pipe and the planned repipe
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                Plumbing search has two buyers. One is standing in water and calls the first listing that
                looks open. The other is pricing a tankless water heater over three evenings. We build the
                profile, pages and call handling that win both, in the towns your vans reach.
              </p>
              <HeroInlineForm region="us" source="services_plumber_seo_hero" submitLabel="Get a plumber SEO review" />
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-fj-body text-base font-semibold text-fj-ink transition-all hover:gap-3"
                >
                  Talk to the founder <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href={HUB_HREF}
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  All home services SEO
                </Link>
              </div>
            </div>

            {/* Hero visual: the two clocks plumbing demand runs on */}
            <div className="mx-auto w-full max-w-[520px] space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl p-5" style={{ background: PEACH, border: `1px solid ${HAIRLINE}` }}>
                  <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: ORANGE_DARK }}>
                    Emergency clock
                  </span>
                  <p className="fj-display mt-2 text-[1.6rem] font-bold leading-none text-fj-ink">Minutes</p>
                  <p className="mt-2 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-700">
                    Burst pipe, sewer backup, no hot water. Wins on distance, hours and a phone that answers.
                  </p>
                </div>
                <div className="rounded-2xl p-5" style={{ background: GREEN_SOFT, border: `1px solid ${HAIRLINE}` }}>
                  <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em] text-fj-neutral-700">
                    Planned clock
                  </span>
                  <p className="fj-display mt-2 text-[1.6rem] font-bold leading-none text-fj-ink">Weeks</p>
                  <p className="mt-2 font-fj-body text-[0.8125rem] leading-[1.5] text-fj-neutral-700">
                    Water heater, repipe, sewer line. Wins on detail, photos, warranty and reviews that name the job.
                  </p>
                </div>
              </div>
              <VolumeCard
                title="Live US search demand"
                rows={[
                  { k: 'emergency plumber near me', v: '165,000 / mo' },
                  { k: 'plumber seo', v: '480 / mo' },
                  { k: 'local seo for plumbers', v: '390 / mo' },
                  { k: 'plumbing seo company', v: '260 / mo' },
                ]}
                note="Monthly US search volume from DataForSEO (Google Ads data), pulled 24 November 2026. The first row is what your customers type. The rest is what plumbers type when they look for help."
              />
            </div>
          </div>
        </section>

        {/* 2. SHORT ANSWER */}
        <section id="answer-first" className="pb-14 md:pb-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="rounded-2xl bg-white p-7 md:p-9" style={{ borderLeft: `5px solid ${ORANGE}`, boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}>
              <p className="font-fj-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Short answer
              </p>
              <h2 id="what-is-plumber-seo" className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                What is plumber SEO?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">Plumber SEO is the work of getting a plumbing company chosen</b> in
                the map pack, the organic results and AI answers for the jobs it does and the towns it serves.
                The emergency half is mostly decided by your Business Profile, your distance from the searcher
                and whether the phone is answered. The planned half is decided by pages: one deep page per job
                type that answers scope, permits, warranty and financing before the homeowner asks.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Plumbing also sits next to Google&rsquo;s Local Services Ads, which often show above the map
                pack. Good plumber SEO runs both from one set of facts: the same license, hours, service areas
                and reviews. Plumbing is one trade in our{' '}
                <InlineLink href={HUB_HREF}>home services SEO</InlineLink> practice, alongside{' '}
                <InlineLink href="/services/hvac-seo">HVAC</InlineLink>,{' '}
                <InlineLink href="/services/roofing-seo">roofing</InlineLink> and{' '}
                <InlineLink href="/services/electrician-seo">electrical</InlineLink>.
              </p>
            </div>
          </div>
        </section>

        {/* 3. TWO BUYERS TABLE */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Two buyers, two clocks</Eyebrow>
            <H2>The emergency caller and the planned-job shopper need different pages</H2>
            <Lead>
              Most plumbing sites serve neither well because one page tries to do both. Here is how the two
              buyers differ, and what each one needs from you.
            </Lead>
            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: HAIRLINE }}>
              <table className="w-full min-w-[760px] border-collapse text-left">
                <caption className="sr-only">Emergency plumbing searches compared with planned plumbing job searches</caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">&nbsp;</th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>Emergency</th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">Planned job</th>
                  </tr>
                </thead>
                <tbody>
                  {BUYER_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 ? CREAM : '#FFFFFF' }}>
                      <th scope="row" className="border-t p-4 font-fj-body text-[0.875rem] font-bold text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.label}
                      </th>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>{row.emergency}</td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>{row.planned}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              The planned side also has a quieter source of demand. The EPA estimates household leaks waste
              nearly one trillion gallons of water a year across the US, and many of those leaks become a
              leak detection or repipe search months later. A page that explains how you find hidden leaks
              catches that homeowner before the ceiling stain does.
            </p>
          </div>
        </section>

        {/* 4. PROFILE + LSA (image) */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/services/local-seo/section-plumber-door-phone-map.webp"
                alt="A homeowner at her front door showing a plumber with a tool bag the map on her phone"
                width={1376}
                height={768}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: HAIRLINE }}
              />
            </div>
            <div>
              <Eyebrow>Profile first, pages second</Eyebrow>
              <H2>Google uses a plumber as its example. Set the profile up that way.</H2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Google&rsquo;s own guidance on service-area businesses names a plumber running from a home
                address as the case for hiding the address. It ranks local results mainly on relevance,
                distance and popularity. Distance is measured from the person searching, so the plumber
                closest to a flooded basement starts with an edge no page can buy back.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Hide a home address, show service areas.', s: 'Draw areas by the towns you dispatch to, within about two hours of driving, as Google advises.' },
                  { t: 'Hours are a promise.', s: 'If the profile says open now, someone answers. Missed calls also lower Local Services Ads ranking.' },
                  { t: 'Categories match the work you want.', s: 'Plumber first. Add water heater or drainage categories only if you take those jobs.' },
                  { t: 'License details match everywhere.', s: 'Local Services Ads may ask for license documents. Keep the same number on the profile, site and directories.' },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                    <CheckCircle size={20} />
                    <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">{item.s}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. PROGRAMME */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>The program</Eyebrow>
            <H2>Nine pieces of work, in the order a plumbing company needs them</H2>
            <Lead>
              Profile and call handling come before content. A plumbing site with fifty blog posts and a
              phone that rings out after six will lose to a three-page site that answers.
            </Lead>
            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {DELIVERABLES.map((d) => (
                <li key={d.n} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>{d.n}</span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>{d.title}</h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{d.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Item six is where search and our AI work meet. If after-hours calls are the leak, our{' '}
              <InlineLink href="/services/ai-receptionist">AI receptionist</InlineLink> answers, books into
              your schedule and escalates true emergencies to the on-call plumber.
            </p>
          </div>
        </section>

        {/* 6. CHANNEL TABLE */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Where plumbing leads come from</Eyebrow>
            <H2>SEO, Local Services Ads, Google Ads and shared lead sites side by side</H2>
            <Lead>
              We sell the first column. We still tell plumbers with idle vans to switch on the second this
              week. The companies that stay busy usually run two or three of these.
            </Lead>
            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: HAIRLINE }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">Plumber SEO compared with Local Services Ads, Google Ads and shared lead marketplaces</caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    {['', 'Plumber SEO', 'Local Services Ads', 'Google Ads', 'Shared lead sites'].map((h, i) => (
                      <th key={h || 'blank'} scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: i === 1 ? ORANGE_DARK : '#14110F' }}>
                        {h || ' '}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CHANNEL_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 ? CREAM : '#FFFFFF' }}>
                      <th scope="row" className="border-t p-4 font-fj-body text-[0.875rem] font-bold text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>{row.label}</th>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] font-medium text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)', background: GREEN_SOFT }}>{row.seo}</td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>{row.lsa}</td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>{row.ads}</td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>{row.shared}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll sideways on a phone. Local Services Ads behaviour is from Google&rsquo;s own help pages,
              linked in the sources below.
            </p>
          </div>
        </section>

        {/* 7. COMPETITORS */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Who ranks today</Eyebrow>
            <H2>What we found on the plumber SEO results page</H2>
            <Lead max={760}>
              We pulled the live US results for plumber seo and seo for plumbers on 24 November 2026 and read
              the top pages. Several are good. You should know who they are before you hire anyone.
            </Lead>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {RIVALS.map((r) => (
                <div key={r.domain} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{r.domain}</span>
                  <h3 className="fj-display mt-1.5 text-[1.05rem] font-bold" style={{ letterSpacing: '-0.015em', color: ORANGE_DARK }}>{r.note}</h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{r.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Where we differ: we build the website as well as the search program, so speed and call-button
              fixes ship instead of waiting on another vendor, and we treat after-hours call capture as part
              of SEO. We are not a plumbing-only shop. If that is your first requirement, the plumbing-only
              firms above are a fair answer.
            </p>
          </div>
        </section>

        {/* 8. FIT CHECK */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Honest fit check</Eyebrow>
            <H2 max={720}>When plumber SEO is the right buy, and when it is not</H2>
            <TwoLists
              goodTitle="A strong fit"
              good={[
                'You want more water heater, repipe and sewer line jobs, not just more drain calls',
                'You pay for shared leads and want to depend on them less',
                'Your profile shows the wrong hours or an address customers should not visit',
                'You serve a defined set of towns and plan to be there for years',
                'You can answer the phone, or are willing to add after-hours cover',
              ]}
              badTitle="A poor fit"
              bad={[
                'You need calls next week to cover payroll. Start Local Services Ads now and SEO alongside',
                'You want hundreds of city pages for towns you never drive to',
                'You expect guaranteed rankings, which Google says nobody can promise',
                'Nobody can return a form or voicemail the same day',
              ]}
              footer={
                <>
                  Not sure yet? An <InlineLink href="/services/seo-audit">SEO audit</InlineLink> shows what is
                  broken before you commit to anything.
                </>
              }
            />
          </div>
        </section>

        {/* 9. SOURCES */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Check us against the source</Eyebrow>
            <H2>Where the claims on this page come from</H2>
            <SourceCards
              sources={[
                {
                  src: 'Google Business Profile Help',
                  title: 'Service-area businesses',
                  body: 'Google says a service-area business should hide its address, gives a plumber working from a residential address as the example, and says the overall service area should not extend farther than about two hours of driving.',
                  href: 'https://support.google.com/business/answer/3038177',
                },
                {
                  src: 'Google Business Profile Help',
                  title: 'How local ranking works',
                  body: 'Google says local results are mainly based on relevance, distance and popularity, and that replying to reviews helps a business stand out.',
                  href: 'https://support.google.com/business/answer/7091',
                },
                {
                  src: 'Google Local Services Help',
                  title: 'Local Services Ads requirements',
                  body: 'Google describes the Google Verified badge, license and insurance document uploads, and warns that regularly failing to answer calls or messages can affect ad ranking.',
                  href: 'https://support.google.com/localservices/answer/6224841',
                },
                {
                  src: 'US EPA WaterSense',
                  title: 'Fix a Leak Week',
                  body: 'The EPA says household leaks can waste nearly one trillion gallons of water a year nationwide.',
                  href: 'https://www.epa.gov/watersense/fix-leak-week',
                },
              ]}
            />
            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Search volumes are DataForSEO US figures pulled 24 November 2026. Competitor positions are what
              we observed on the same day and will move.
            </p>
          </div>
        </section>

        {/* 10. WHO YOU WORK WITH */}
        <section className="py-14 md:py-20" style={{ background: PEACH }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <Eyebrow>Who you work with</Eyebrow>
                <H2 max={680}>One senior person who scopes it and does it</H2>
                <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                  The founder scopes plumbing engagements, reads your market and stays on the calls. We build
                  sites as well as rank them, and we will tell you plainly when Local Services Ads, not SEO,
                  is the faster fix for this quarter.
                </p>
                <p className="mt-5 font-fj-mono text-[0.78rem] text-fj-neutral-600">
                  Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder, FactoryJet
                </p>
              </div>
              <div>
                <ModalCTAButton label="Talk to the Founder" region="us" modalVariant="seo" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* 11. RELATED */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Other trades and services</Eyebrow>
            <H2 max={700}>Related home services SEO</H2>
            <RelatedGrid
              cards={[
                { label: 'Home services SEO', href: HUB_HREF, desc: 'The hub for every trade we work with, and how the shared groundwork fits together.' },
                { label: 'HVAC SEO', href: '/services/hvac-seo', desc: 'Heating and cooling search, where demand follows the weather and maintenance plans matter.' },
                { label: 'Roofing SEO', href: '/services/roofing-seo', desc: 'Storm-driven demand, insurance claims and financing questions for roofers.' },
                { label: 'Electrician SEO', href: '/services/electrician-seo', desc: 'License, permit and code questions, and selling panel upgrades and EV chargers.' },
                { label: 'Cleaning company SEO', href: '/services/cleaning-company-seo', desc: 'Recurring residential clients and commercial contracts, which search very differently.' },
                { label: 'Local SEO', href: '/services/local-seo', desc: 'Map pack and Business Profile work for any service-area business.' },
              ]}
            />
          </div>
        </section>

        {/* 12. FAQ */}
        <FAQ
          eyebrow="Plumber SEO FAQ"
          headline="Questions plumbing companies ask us"
          lead="Answers on emergency calls, the map pack, reviews, Local Services Ads, timing and AI search. If yours is not here, send a short brief and we usually reply within one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* 13. FINAL CTA (the one dark section) */}
        <FinalCTA
          variant="dark"
          eyebrow="PLUMBER SEO REVIEW"
          headline="Find out which calls your plumbing company is losing, and why"
          sub="Book a call with the founder. We will look at your Business Profile, your hours and service areas, how your site handles an emergency visitor on a phone, and the searches in your towns, then tell you plainly what to fix first."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See home services SEO', href: HUB_HREF }}
          objectionHandler="Founder-led. Fixed price per phase. No guaranteed rankings and no invented case studies."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

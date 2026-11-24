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
  GREEN,
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
   /services/electrician-seo: US electrical contractor SEO vertical page.

   Intent owned by THIS page (DataForSEO US, pulled 24 Nov 2026):
     electrician seo / seo for electricians (480/mo each, CPC $39.80) ·
     electrician marketing (210) · electrician seo services (110) ·
     seo for electrical contractors (40) · electrical contractor seo (10).

   Angle that separates it from the plumber and cleaning pages: trust and
   compliance questions (license, permit, code), and job value (moving the mix
   from small repairs to panel upgrades, EV chargers, generators and commercial
   work). Links UP to the hub and ACROSS to roofing, HVAC, plumber, cleaning.

   Rules honoured: no em dashes, no FactoryJet prices, no invented stats or
   clients, no phone number, no team location, no italic heading emphasis.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/electrician-seo';
const REVIEWED_ISO = '2026-11-24';
const REVIEWED_DATE = 'November 24, 2026';

export const metadata: Metadata = {
  title: 'Electrician SEO: SEO for Electricians and Electrical Contractors | FactoryJet',
  description:
    'Electrician SEO that answers the license, permit and code questions homeowners search, and wins panel upgrades, EV chargers and commercial work.',
  keywords: [
    'electrician seo',
    'seo for electricians',
    'electrician marketing',
    'electrician seo services',
    'seo for electrical contractors',
    'electrical contractor seo',
    'local seo for electricians',
    'electrical company seo',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Electrician SEO: SEO for Electricians and Electrical Contractors | FactoryJet',
    description:
      'Search work for US electrical contractors: license and permit content, job-value page architecture, Google Business Profile, reviews and AI answer engines.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/construction-ai-agents/electrical-contractor-cable-pull.webp',
        width: 1200,
        height: 800,
        alt: 'An electrician pulling orange cable from a reel through steel stud framing',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrician SEO: SEO for Electricians and Electrical Contractors | FactoryJet',
    description:
      'Homeowners search permits, licenses and code before they hire an electrician. We build the pages that answer them and win the bigger jobs.',
    images: ['https://factoryjet.com/images/us/construction-ai-agents/electrical-contractor-cable-pull.webp'],
  },
  alternates: { canonical: PAGE_URL, languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ─── Job ladder (hero visual): what each kind of job needs from search ── */

type Rung = { job: string; search: string; needs: string };

const LADDER: ReadonlyArray<Rung> = [
  { job: 'Commercial fit-out and service contracts', search: 'commercial electrician, tenant improvement electrical', needs: 'Capability pages, project list, insurance and bonding' },
  { job: 'Standby generators', search: 'whole house generator installer', needs: 'Sizing guide, permit and utility steps, service plans' },
  { job: 'Panel upgrades and service changes', search: '200 amp panel upgrade, replace fuse box', needs: 'Permit and inspection walk-through, utility coordination' },
  { job: 'EV charger installs', search: 'level 2 charger installation', needs: 'Load check explained, rebate pointers, photos of real installs' },
  { job: 'Repairs and troubleshooting', search: 'electrician near me, outlet not working', needs: 'Map pack, hours, tap-to-call' },
];

/* ─── Trust questions homeowners search before hiring ────────────────── */

type TrustQ = { q: string; why: string; page: string };

const TRUST_QUESTIONS: ReadonlyArray<TrustQ> = [
  {
    q: 'Do I need a permit to replace my panel?',
    why: 'Panel swaps and service upgrades usually need a permit and an inspection, and the utility often has to disconnect and reconnect service. Homeowners want to know who handles that.',
    page: 'A panel upgrade page that walks through permit, inspection and utility steps in your city, and says you pull the permit.',
  },
  {
    q: 'How do I check an electrician’s license?',
    why: 'Licensing is set by states and sometimes cities, and many homeowners look a contractor up before they call back.',
    page: 'Your license number and how to verify it on your state board, shown on the site, the Business Profile and every directory listing.',
  },
  {
    q: 'Is my wiring up to code?',
    why: 'Home sales, insurance renewals and older homes with knob-and-tube or aluminum wiring all trigger this search.',
    page: 'An inspection page explaining what a code check covers, what commonly fails, and what happens next.',
  },
  {
    q: 'Can my panel handle an EV charger?',
    why: 'The answer depends on load and panel capacity, so it often turns a charger job into a panel job.',
    page: 'An EV charger page with a plain load-check explanation and a clear path to booking an assessment.',
  },
];

/* ─── Residential vs commercial ─────────────────────────────────────── */

type SplitRow = { label: string; res: string; com: string };

const SPLIT_ROWS: ReadonlyArray<SplitRow> = [
  { label: 'Who searches', res: 'Homeowner, often on a phone', com: 'Facility manager, general contractor, property manager' },
  { label: 'How they search', res: 'Job plus town, or near me', com: 'Capability plus metro, then the contractor name' },
  { label: 'What they check', res: 'License, reviews, photos, permit handling', com: 'Insurance, bonding, past projects, safety record, response times' },
  { label: 'What converts', res: 'Tap-to-call, short booking form', com: 'Capability statement, bid request form, a named contact' },
  { label: 'Page structure', res: 'One page per job type and service town', com: 'One page per sector and capability, with project examples' },
  { label: 'Review source', res: 'Google reviews carry most of the weight', com: 'References and repeat GC relationships matter more than stars' },
];

/* ─── Program ─────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'License and trust signals on every surface',
    body:
      'License number and the state board lookup on the site, Business Profile and directories, matched exactly. Insurance and permit-pulling stated plainly. Local Services Ads may ask for license documents, so the details line up before you apply.',
  },
  {
    n: '02',
    title: 'Pages that sell the job, not the trade',
    body:
      'Separate pages for panel upgrades, EV chargers, generators, rewiring, lighting, surge protection and troubleshooting. Each explains the job, the permit and inspection steps, and what changes the scope. One page called Electrical Services cannot rank for all of that.',
  },
  {
    n: '03',
    title: 'Permit and code answers written for homeowners',
    body:
      'Short, accurate answers to the permit, inspection and code questions people type before they hire. We write them with you, since rules vary by city, and keep them dated so readers know they are current.',
  },
  {
    n: '04',
    title: 'Business Profile built for an electrical contractor',
    body:
      'Primary category Electrician, services listed by job, service areas drawn from where you dispatch, and photos of real panels and installs. Hours that match when someone answers.',
  },
  {
    n: '05',
    title: 'A commercial section that reads like a capability statement',
    body:
      'Sector pages (retail, offices, light industrial, multifamily), project examples you can show, insurance and bonding facts, and a bid request form that reaches an estimator, not the residential call queue.',
  },
  {
    n: '06',
    title: 'Review requests that fire from job close',
    body:
      'Every customer gets the same request when the job closes in your field software. No discounts for reviews and no filtering to happy customers, both of which Google prohibits.',
  },
  {
    n: '07',
    title: 'Answers built for AI search',
    body:
      'Google AI Overviews already show on electrician searches. We structure your permit, load and code answers so engines can quote them and attribute them to your business.',
  },
  {
    n: '08',
    title: 'Reporting by job type',
    body:
      'Calls and forms tagged by the page they came from, so you can see whether panel and EV pages bring panel and EV jobs. Ranking reports alone hide the mix.',
  },
];

/* ─── AI Overview citations observed ─────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'cyberoptik.net',
    note: 'Position 1 for electrician seo',
    detail: 'A strategy article for electricians. An agency blog post, not a service page, holds the top organic spot on the head term.',
  },
  {
    domain: 'getjobber.com',
    note: 'Position 1 for seo for electricians',
    detail: 'Field service software teaching electricians SEO. Software brands own a large share of trade SEO searches.',
  },
  {
    domain: 'helium-seo.com',
    note: 'Cited in the AI Overview',
    detail: 'One of the sources Google AI Overviews drew on for both electrician queries. A general SEO agency rather than an electrical specialist.',
  },
  {
    domain: 'builtrightdigital.com',
    note: 'Cited in the AI Overview',
    detail: 'A contractor marketing agency, cited alongside the others in the AI answer above the organic results.',
  },
  {
    domain: 'spotlightmedia360.com',
    note: 'Cited in the AI Overview',
    detail: 'Another agency source for the AI answer. Being cited there puts a vendor in front of the searcher before any blue link.',
  },
  {
    domain: 'bluecorona.com',
    note: 'Cited in the AI Overview',
    detail: 'A large home services agency with electrical as one vertical among several.',
  },
];

/* ─── FAQ ───────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Electrician SEO basics' },
  { key: 'trust', label: 'Licenses, permits, code' },
  { key: 'local', label: 'Map pack and reviews' },
  { key: 'scope', label: 'Scope and results' },
  { key: 'ai', label: 'AI search' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is electrician SEO?',
    answer:
      'Electrician SEO is the work of getting an electrical contractor found in the map pack, organic results and AI answers for the jobs it wants and the towns it serves. For electricians that means answering license, permit and code questions, and building separate pages for higher-value jobs like panel upgrades, EV chargers and generators.',
  },
  {
    category: 'basics',
    question: 'How can I effectively market my electrical business?',
    answer:
      'Make your Business Profile accurate and full of real job photos, build one page per job type you want more of, ask every customer for a review, and answer the permit and license questions homeowners search. Add Local Services Ads or Google Ads when you need calls faster than search can deliver.',
  },
  {
    category: 'basics',
    question: 'Should residential and commercial electrical work share one website?',
    answer:
      'They can share a domain, but they need separate sections. Homeowners want a fast call and proof you are licensed. Facility managers and general contractors want capability, insurance and project examples. Mixing both on one services page serves neither.',
  },
  {
    category: 'trust',
    question: 'Should I put my electrical license number on my website?',
    answer:
      'Yes. Show the number and how to verify it with your state board, and use the same number on your Business Profile and directories. Some states, California among them, require the license number in contractor advertising, so check your state rule, and Local Services Ads may ask for license documents.',
  },
  {
    category: 'trust',
    question: 'Why write about permits on an electrician website?',
    answer:
      'Homeowners search permit questions before they hire, especially for panel upgrades, service changes and EV chargers. A clear page saying you pull the permit and handle the inspection answers the question and removes a reason to call someone else.',
  },
  {
    category: 'trust',
    question: 'Can I publish code advice if rules vary by city?',
    answer:
      'Yes, if you say where it applies and date it. Explain the general process, note that your city or county may differ, and keep pages reviewed. Out-of-date code advice is worse than none.',
  },
  {
    category: 'local',
    question: 'How do electricians rank in the Google map pack?',
    answer:
      'Google says local results are mainly based on relevance, distance and popularity. Correct categories and services, a service area drawn from where you dispatch, real photos and a steady flow of genuine reviews are what you control.',
  },
  {
    category: 'local',
    question: 'Should an electrician show a home address on Google?',
    answer:
      'If customers do not come to you, Google says to hide the address and set service areas instead, kept within about two hours of driving from your base.',
  },
  {
    category: 'local',
    question: 'How do I get more Google reviews as an electrician?',
    answer:
      'Ask every customer when the job closes, by text or email from your field software, with a direct link. Google prohibits incentives for reviews and asking only happy customers, so make the request routine for everyone.',
  },
  {
    category: 'scope',
    question: 'How long does electrician SEO take?',
    answer:
      'Profile fixes can move map rankings within weeks. New job pages usually take three to six months to rank well, longer in big metros. Commercial pages often take longer still because fewer people search and links matter more.',
  },
  {
    category: 'scope',
    question: 'How much does SEO for an electrical contractor cost?',
    answer:
      'It depends on how many job types and towns you target, how strong local competitors are, and whether the site needs work first. We scope after reviewing your market and quote a fixed price per phase, so there is no single published price.',
  },
  {
    category: 'ai',
    question: 'Can ChatGPT do SEO for my electrical business?',
    answer:
      'It can draft pages and suggest keywords, but it cannot verify your city permit rules, fix your Business Profile or earn reviews. Pages that read like generic AI text also tend to be ignored by the AI engines you want to be cited by. Use it as a helper, with a person checking every fact.',
  },
  {
    category: 'ai',
    question: 'Do AI Overviews show up on electrician searches?',
    answer:
      'Yes. On 24 November 2026 both electrician seo and seo for electricians showed a Google AI Overview citing agency and software sites. Homeowner questions about permits and EV chargers attract them too, which is why we write short, sourced answers on your job pages.',
  },
];

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Home Services SEO', url: `https://factoryjet.com${HUB_HREF}` },
  { name: 'Electrician SEO', url: PAGE_URL },
];

const SCHEMAS = buildTradeSchemas({
  url: PAGE_URL,
  name: 'Electrician SEO: SEO for Electricians and Electrical Contractors',
  description:
    'Search program for US electrical contractors covering license and permit content, job-value page architecture, residential and commercial sections, Google Business Profile, reviews and AI answer engines.',
  serviceName: 'Electrician SEO',
  serviceType: 'Electrician SEO / SEO for Electricians / Electrical Contractor SEO / Electrician Marketing',
  audience: 'US residential and commercial electrical contractors',
  reviewed: REVIEWED_ISO,
  speakable: ['#answer-first', '#what-is-electrician-seo'],
  offers: DELIVERABLES,
  faq: FAQ_ITEMS,
  breadcrumbs: BREADCRUMB_ITEMS,
});

export default function ElectricianSeoPage() {
  return (
    <>
      <JsonLd id="elec-schema" data={SCHEMAS} />
      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-14 md:px-8 lg:grid-cols-[1fr_1fr] lg:py-18">
            <div>
              <p className="fj-eyebrow">Electrician SEO &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.5rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Electrician SEO that wins the panel upgrade, not just the outlet repair
              </h1>
              <p className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                Before a homeowner hires an electrician, they search whether the job needs a permit, how to
                check a license and whether their panel can take an EV charger. Answer those questions on the
                right pages and the bigger jobs start calling you first.
              </p>
              <HeroInlineForm region="us" source="services_electrician_seo_hero" submitLabel="Get an electrician SEO review" />
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-fj-body text-base font-semibold text-fj-ink transition-all hover:gap-3"
                >
                  Talk to the founder <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link href={HUB_HREF} className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4" style={{ color: ORANGE_DARK }}>
                  All home services SEO
                </Link>
              </div>
            </div>

            {/* Hero visual: job-value ladder */}
            <div className="mx-auto w-full max-w-[540px]">
              <div className="rounded-2xl border bg-white p-5 sm:p-6" style={{ borderColor: HAIRLINE, boxShadow: '0 18px 44px rgba(20,18,12,0.08)' }}>
                <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em] text-fj-neutral-500">
                  The job ladder: what each rung needs from search
                </span>
                <ol className="mt-4 space-y-2">
                  {LADDER.map((r, i) => (
                    <li
                      key={r.job}
                      className="rounded-xl px-4 py-3"
                      style={{ background: i < 2 ? PEACH : i < 4 ? '#FFF8F5' : CREAM, borderLeft: `4px solid ${i < 4 ? ORANGE : GREEN}` }}
                    >
                      <p className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{r.job}</p>
                      <p className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-600">{r.search}</p>
                      <p className="mt-1 font-fj-body text-[0.78rem] text-fj-neutral-700">{r.needs}</p>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 font-fj-body text-[0.75rem] leading-[1.5] text-fj-neutral-600">
                  Most electrician sites only serve the bottom rung. The example searches are typical phrasings,
                  not measured volumes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SHORT ANSWER */}
        <section id="answer-first" className="pb-14 md:pb-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="rounded-2xl bg-white p-7 md:p-9" style={{ borderLeft: `5px solid ${ORANGE}`, boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}>
              <p className="font-fj-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>Short answer</p>
              <h2 id="what-is-electrician-seo" className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                What is electrician SEO?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">Electrician SEO gets an electrical contractor found and trusted</b> in
                the map pack, the organic results and AI answers. Two things set it apart from other trades.
                Homeowners check compliance before they call: license, permit, inspection, code. And the value of
                a job varies hugely, so the pages you build decide whether search sends you outlet repairs or
                panel upgrades, generators and commercial work.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Electrical is one trade in our <InlineLink href={HUB_HREF}>home services SEO</InlineLink> practice.
                See also <InlineLink href="/services/hvac-seo">HVAC SEO</InlineLink>,{' '}
                <InlineLink href="/services/roofing-seo">roofing SEO</InlineLink> and{' '}
                <InlineLink href="/services/plumber-seo">plumber SEO</InlineLink>.
              </p>
            </div>
          </div>
        </section>

        {/* 3. TRUST QUESTIONS */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>License, permit, code</Eyebrow>
            <H2>The four questions homeowners search before they hire an electrician</H2>
            <Lead>
              Electrical work can burn a house down, and homeowners know it. They check you before they call.
              Each question below deserves a page or a clear section, written for your city.
            </Lead>
            <div className="mt-10 space-y-4">
              {TRUST_QUESTIONS.map((t, i) => (
                <div key={t.q} className="grid grid-cols-1 gap-4 rounded-2xl border p-6 md:grid-cols-[0.9fr_1.05fr_1.05fr]" style={{ borderColor: 'rgba(15,15,18,0.09)', background: i % 2 ? '#FFFFFF' : CREAM }}>
                  <h3 className="fj-display text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>{t.q}</h3>
                  <p className="font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                    <span className="block font-fj-mono text-[10px] uppercase tracking-[0.1em] text-fj-neutral-500">Why they ask</span>
                    {t.why}
                  </p>
                  <p className="font-fj-body text-[0.9062rem] leading-[1.6] text-fj-ink">
                    <span className="block font-fj-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: ORANGE_DARK }}>What answers it</span>
                    {t.page}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. DEMAND + IMAGE */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow>What the numbers say</Eyebrow>
              <H2 max={640}>Homeowners search near me. Electricians search marketing.</H2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Electrician near me draws hundreds of thousands of US searches a month, and nearly all of it is
                decided in the map pack by distance and your Business Profile. On the contractor side, more
                electricians search for electrician marketing than for electrical contractor SEO, which tells
                you most owners want calls, not a lecture on rankings. We report in calls.
              </p>
              <div className="mt-6 max-w-[460px]">
                <VolumeCard
                  title="Live US search demand"
                  rows={[
                    { k: 'electrician near me', v: '368,000 / mo' },
                    { k: 'electrician seo', v: '480 / mo' },
                    { k: 'electrician marketing', v: '210 / mo' },
                    { k: 'electrical contractor seo', v: '10 / mo' },
                  ]}
                  note="Monthly US search volume from DataForSEO (Google Ads data), pulled 24 November 2026."
                />
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px]">
              <img
                src="/images/us/construction-ai-agents/electrical-contractor-cable-pull.webp"
                alt="An electrician in safety glasses pulling orange cable from a reel through steel stud framing on a commercial job"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: HAIRLINE }}
              />
            </div>
          </div>
        </section>

        {/* 5. RES vs COM */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Residential and commercial</Eyebrow>
            <H2>Two kinds of electrical customer search in two different ways</H2>
            <Lead>
              If you do both, build both. The table shows why a single services page loses on each side.
            </Lead>
            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: HAIRLINE }}>
              <table className="w-full min-w-[760px] border-collapse text-left">
                <caption className="sr-only">Residential electrical searches compared with commercial electrical searches</caption>
                <thead>
                  <tr style={{ background: GREEN_SOFT }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">&nbsp;</th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: GREEN }}>Residential</th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">Commercial</th>
                  </tr>
                </thead>
                <tbody>
                  {SPLIT_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 ? CREAM : '#FFFFFF' }}>
                      <th scope="row" className="border-t p-4 font-fj-body text-[0.875rem] font-bold text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>{row.label}</th>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>{row.res}</td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>{row.com}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. PROGRAMME */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>The program</Eyebrow>
            <H2>Eight pieces of work for an electrical contractor</H2>
            <Lead>
              Trust signals and job pages come first. They are what move an electrician from small calls to
              the work that pays for the next van.
            </Lead>
            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {DELIVERABLES.map((d) => (
                <li key={d.n} className="flex gap-5 rounded-2xl border bg-white p-6" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                  <span className="fj-display text-[1.6rem] font-bold leading-none" style={{ color: ORANGE }}>{d.n}</span>
                  <div>
                    <h3 className="fj-display text-[1.05rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>{d.title}</h3>
                    <p className="mt-2 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{d.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 7. WHO SHOWS UP */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Who shows up today</Eyebrow>
            <H2>The electrician SEO results page, including the AI answer</H2>
            <Lead max={760}>
              We pulled US results for electrician seo and seo for electricians on 24 November 2026. Both
              showed a Google AI Overview above the links. These are the sites it cited and the sites ranked
              first.
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
              The pattern matters for your own market. When a homeowner asks about panel permits, an AI answer
              may appear before any electrician&rsquo;s listing. Being the cited source is now part of being
              found, which is why AI search sits inside our{' '}
              <InlineLink href="/services/ai-seo">AI SEO</InlineLink> work as well as here.
            </p>
          </div>
        </section>

        {/* 8. FIT CHECK */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Honest fit check</Eyebrow>
            <H2 max={720}>Who electrician SEO suits</H2>
            <TwoLists
              goodTitle="A strong fit"
              good={[
                'You want more panel, EV charger, generator or commercial work in the mix',
                'You pull permits and want that to show as a reason to hire you',
                'You do residential and commercial and both sit on one generic page today',
                'You have real job photos and happy customers but few reviews',
              ]}
              badTitle="A poor fit"
              bad={[
                'You need the phone full next week. Run ads first, then build search',
                'You will not show a license number or handle permits',
                'You want city pages for places you do not work',
                'You expect a guaranteed ranking position',
              ]}
              footer={
                <>
                  Owner-run shop without a marketer? Our{' '}
                  <InlineLink href="/services/small-business-seo">small business SEO</InlineLink> is scoped for that.
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
                  title: 'How local ranking works',
                  body: 'Google says local results are mainly based on relevance, distance and popularity, and recommends replying to reviews.',
                  href: 'https://support.google.com/business/answer/7091',
                },
                {
                  src: 'Google Business Profile Help',
                  title: 'Service-area businesses',
                  body: 'Google says businesses that serve customers at their location should hide their address and keep the service area within about two hours of driving.',
                  href: 'https://support.google.com/business/answer/3038177',
                },
                {
                  src: 'Google Local Services Help',
                  title: 'License checks for Local Services Ads',
                  body: 'Google describes the Google Verified badge and the license and insurance documents it may ask for before ads go live.',
                  href: 'https://support.google.com/localservices/answer/6224841',
                },
                {
                  src: 'Google Maps contribution policy',
                  title: 'Review rules',
                  body: 'Google prohibits offering incentives for reviews and selectively asking only satisfied customers for them.',
                  href: 'https://support.google.com/contributionpolicy/answer/7400114',
                },
              ]}
            />
            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Search volumes are DataForSEO US figures pulled 24 November 2026. Results-page observations are
              from the same day. Permit and license rules vary by state and city, so check yours.
            </p>
          </div>
        </section>

        {/* 10. WHO YOU WORK WITH */}
        <section className="py-14 md:py-20" style={{ background: GREEN_SOFT }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <Eyebrow>Who you work with</Eyebrow>
                <H2 max={680}>The founder scopes it and stays on it</H2>
                <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                  We build websites as well as search programs, so the panel page, the bid form and the
                  speed fixes ship without a second vendor. We will not invent case studies, and we will say
                  so if search is the wrong spend for you this year.
                </p>
                <p className="mt-5 font-fj-mono text-[0.78rem] text-fj-neutral-600">
                  Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder, FactoryJet
                </p>
              </div>
              <div>
                <ModalCTAButton label="Talk to the Founder" region="us" modalVariant="seo" btnVariant="primary-light" />
              </div>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {['Search and website build in one team', 'Classic search and AI answers in one plan', 'Fixed price per phase', 'No guaranteed rankings, no invented results'].map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 font-fj-body text-[0.9375rem] font-bold text-fj-ink">
                  <CheckCircle size={18} fill={GREEN} /> {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 11. RELATED */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Other trades and services</Eyebrow>
            <H2 max={700}>Related home services SEO</H2>
            <RelatedGrid
              cards={[
                { label: 'Home services SEO', href: HUB_HREF, desc: 'Every trade we work with, and the shared groundwork behind each program.' },
                { label: 'HVAC SEO', href: '/services/hvac-seo', desc: 'Heating and cooling contractors, where weather drives demand.' },
                { label: 'Roofing SEO', href: '/services/roofing-seo', desc: 'Storm-season demand, insurance claims and financing questions.' },
                { label: 'Plumber SEO', href: '/services/plumber-seo', desc: 'Emergency calls and planned jobs, with Local Services Ads alongside.' },
                { label: 'Cleaning company SEO', href: '/services/cleaning-company-seo', desc: 'Recurring residential clients and commercial cleaning contracts.' },
                { label: 'AI SEO', href: '/services/ai-seo', desc: 'Getting named in ChatGPT, Perplexity and Google AI Overviews.' },
              ]}
            />
          </div>
        </section>

        {/* 12. FAQ */}
        <FAQ
          eyebrow="Electrician SEO FAQ"
          headline="Questions electrical contractors ask us"
          lead="Licenses, permits, code content, the map pack, reviews, timing and AI search. If yours is not here, send a short brief and we usually reply within one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* 13. FINAL CTA */}
        <FinalCTA
          variant="dark"
          eyebrow="ELECTRICIAN SEO REVIEW"
          headline="See which electrical jobs your site is losing to the contractor down the road"
          sub="Book a call with the founder. We will check your Business Profile, how you show your license and permits, which job pages you have and which you are missing, and what the AI answer says in your market."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See home services SEO', href: HUB_HREF }}
          objectionHandler="Founder-led. Fixed price per phase. No guaranteed rankings and no invented case studies."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

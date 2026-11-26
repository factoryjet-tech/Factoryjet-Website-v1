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
  CrossCircle,
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
   /services/cleaning-company-seo: US cleaning business SEO vertical page.

   Intent owned by THIS page (DataForSEO US, pulled 24 Nov 2026):
     seo for cleaning companies (170/mo, CPC $19.75) · cleaning company marketing
     (90) · cleaning company seo (70, CPC $43.03) · seo for cleaning business (30)
     · house cleaning seo (10). Commercial and janitorial SEO terms returned no
     measurable volume, so they are covered as sections, not targeted in titles.

   Angle that separates it from the plumber and electrician pages: recurring
   versus one-off clients, residential versus commercial buyers, job-seeker
   traffic that floods quote forms, and Google's review rules as they bite on
   cleaners. Links UP to the hub and ACROSS to roofing, HVAC, plumber, electrician.

   Rules honoured: no em dashes, no FactoryJet prices, no invented stats or
   clients, no phone number, no team location, no italic heading emphasis.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/cleaning-company-seo';
const REVIEWED_ISO = '2026-11-24';
const REVIEWED_DATE = 'November 24, 2026';

export const metadata: Metadata = {
  title: 'SEO for Cleaning Companies: Cleaning Business SEO | FactoryJet',
  description:
    'SEO for cleaning companies that want recurring clients and commercial contracts, not one-off price shoppers. Map pack, service pages, reviews and AI answers.',
  keywords: [
    'seo for cleaning companies',
    'cleaning company seo',
    'cleaning business seo',
    'seo for cleaning business',
    'cleaning company marketing',
    'house cleaning seo',
    'commercial cleaning seo',
    'janitorial seo',
    'maid service seo',
  ],
  openGraph: {
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet' }],
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO for Cleaning Companies: Cleaning Business SEO | FactoryJet',
    description:
      'Search work for US residential and commercial cleaning companies, built around recurring clients, quote quality and the reviews Google allows you to ask for.',
    url: PAGE_URL,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'SEO for Cleaning Companies: Cleaning Business SEO | FactoryJet',
    description:
      'A recurring cleaning client is worth many one-off jobs. We build search around the clients you want to keep.',
  },
  alternates: { canonical: PAGE_URL, languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ─── Hero visual: four weeks of one recurring client vs one-off jobs ── */

const WEEKS = ['Week 1', 'Week 2', 'Week 3', 'Week 4'] as const;
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] as const;
// [weekIndex, dayIndex, kind]
const VISITS: ReadonlyArray<[number, number, 'recurring' | 'oneoff']> = [
  [0, 1, 'recurring'],
  [1, 1, 'recurring'],
  [2, 1, 'recurring'],
  [3, 1, 'recurring'],
  [0, 3, 'recurring'],
  [2, 3, 'recurring'],
  [1, 4, 'oneoff'],
  [3, 0, 'oneoff'],
];

/* ─── Residential vs commercial ─────────────────────────────────────── */

type SplitRow = { label: string; res: string; com: string };

const SPLIT_ROWS: ReadonlyArray<SplitRow> = [
  { label: 'Who decides', res: 'A homeowner or renter, often a couple deciding together', com: 'Office manager, facility manager, property manager, sometimes procurement' },
  { label: 'What they type', res: 'house cleaning near me, maid service, deep cleaning, move out cleaning', com: 'office cleaning, janitorial services, commercial cleaning company plus city' },
  { label: 'What they worry about', res: 'Trust in their home, the same cleaner each visit, insurance, pets', com: 'Reliability, supervision, after-hours access, insurance certificates, checklists' },
  { label: 'How they buy', res: 'Instant or fast quote, then a first clean', com: 'Walkthrough, written proposal, sometimes a formal bid' },
  { label: 'What converts', res: 'A quote form that asks home size and frequency', com: 'A walkthrough request form that reaches a person who prices jobs' },
  { label: 'Reviews', res: 'Google reviews decide most choices', com: 'References and named clients matter as much as stars' },
];

/* ─── Programme ─────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'Pages that sell frequency, not just a clean',
    body:
      'Separate pages for recurring weekly and biweekly service, deep cleaning, move-in and move-out, post-construction and short-term rental turnovers. The recurring page leads, explains what a regular visit includes, and asks for frequency in the quote form.',
  },
  {
    n: '02',
    title: 'A commercial section with its own form',
    body:
      'Office, medical office, retail, gym and multi-unit common-area pages, each with the checklists, hours and insurance details a facility manager asks for. A walkthrough request form routes to whoever prices commercial work.',
  },
  {
    n: '03',
    title: 'A careers page that keeps applicants out of the quote inbox',
    body:
      'Cleaning companies hire constantly, and people searching for cleaning jobs land on service pages and fill in quote forms. A clear careers page, linked in the main menu and from the profile, gives them somewhere to go.',
  },
  {
    n: '04',
    title: 'Business Profile for a service-area cleaner',
    body:
      'House Cleaning Service or Commercial Cleaning Service as the primary category, depending on where your revenue sits. Address hidden if clients never visit, service areas drawn from where your teams can reach on time.',
  },
  {
    n: '05',
    title: 'A review routine that follows Google’s rules',
    body:
      'Recurring clients see you every week, which makes it tempting to offer a discount for a review or only ask the happy ones. Google bans both. We set up one plain request to every client after the first and the tenth visit, with no scripted wording.',
  },
  {
    n: '06',
    title: 'Trust details on every page',
    body:
      'Insurance and bonding, background checks if you run them, whether the same cleaner returns, supplies and products used, and what happens if something breaks. These are the questions people ask before they let a stranger in.',
  },
  {
    n: '07',
    title: 'Seasonal pages published ahead of demand',
    body:
      'Spring cleaning, holiday deep cleans, and move-out cleaning around lease turnover dates. Pages go live weeks before the season so they are indexed when people start searching.',
  },
  {
    n: '08',
    title: 'Short answers for AI assistants',
    body:
      'How often to book a cleaner, what a deep clean covers, whether to tip, what a commercial checklist includes. Written plainly and marked up so AI answers can quote and credit your company.',
  },
  {
    n: '09',
    title: 'Reporting on recurring sign-ups',
    body:
      'We tag quotes by type and frequency so you can see whether search brings weekly clients or one-off move-outs, then shift pages toward what you want more of.',
  },
];

/* ─── Who ranks today ─────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'localseohelpers.com',
    note: 'Position 1 for seo for cleaning companies',
    detail: 'A local SEO firm with a cleaning industry page that splits residential, commercial and specialty cleaning. Publishes monthly plans on the page.',
  },
  {
    domain: 'alturamarketingfirm.com',
    note: 'Position 2 for cleaning company seo',
    detail: 'A seven-step guide for house cleaning and maid services, including a step on giving job seekers their own page. A useful free read.',
  },
  {
    domain: 'cleaningcompanyseo.com',
    note: 'Position 10, exact-match domain',
    detail: 'A cleaning-only SEO site pitching less dependence on lead platforms. A specialist option if cleaning focus matters most to you.',
  },
  {
    domain: 'cleaninginmotion.com',
    note: 'Position 10 for seo for cleaning companies',
    detail: 'A B2B marketing firm for janitorial and commercial cleaning companies, including franchises. Strongest fit for commercial-only operators.',
  },
];

/* ─── FAQ ───────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Cleaning SEO basics' },
  { key: 'clients', label: 'Recurring and commercial' },
  { key: 'local', label: 'Map pack and reviews' },
  { key: 'scope', label: 'Scope and results' },
  { key: 'ai', label: 'AI search' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is SEO for cleaning companies?',
    answer:
      'SEO for cleaning companies is the work of getting a cleaning business found in the map pack, organic results and AI answers by the clients it wants. For cleaners, the aim is usually recurring residential clients and commercial contracts, so pages, forms and reviews are built around frequency and trust rather than one-off price shoppers.',
  },
  {
    category: 'basics',
    question: 'How do I market my cleaning company?',
    answer:
      'Get your Google Business Profile right, build separate pages for recurring, deep, move-out and commercial cleaning, ask every client for a review, and give job applicants a careers page so they stop filling in your quote form. Add Google Ads or Local Services Ads when you need bookings faster than search delivers.',
  },
  {
    category: 'basics',
    question: 'What keywords should a cleaning company target?',
    answer:
      'Service plus town: house cleaning, recurring cleaning, deep cleaning, move out cleaning, office cleaning, janitorial services. Broad phrases like house cleaning near me are decided mostly by distance and your Business Profile, so they are won in the map pack more than with pages.',
  },
  {
    category: 'clients',
    question: 'How do I get more recurring cleaning clients from search?',
    answer:
      'Make the recurring service page your strongest page, ask for frequency in the quote form, explain what a regular visit includes and whether the same cleaner returns, and show reviews from long-term clients. Then track which pages bring weekly and biweekly sign-ups.',
  },
  {
    category: 'clients',
    question: 'Should residential and commercial cleaning have separate pages?',
    answer:
      'Yes. Homeowners care about trust in their home and a quick quote. Facility managers care about reliability, supervision, after-hours access and insurance, and expect a walkthrough and a written proposal. One page cannot speak to both.',
  },
  {
    category: 'clients',
    question: 'Why do job seekers keep filling in my quote form?',
    answer:
      'People searching for cleaning jobs land on service pages because the words overlap. A careers page linked in your menu and footer, with its own application form, gives them a place to go and keeps your quote inbox for clients.',
  },
  {
    category: 'local',
    question: 'Should a cleaning company show its address on Google?',
    answer:
      'If clients never visit your office, Google says to hide the address and set service areas, kept within about two hours of driving from your base. Most cleaning companies are service-area businesses.',
  },
  {
    category: 'local',
    question: 'Can I give clients a discount for leaving a review?',
    answer:
      'No. Google prohibits incentives such as payment, discounts or free services in exchange for reviews. It also prohibits asking only happy clients and asking reviewers to include specific content. Ask every client the same way and let them write what they want.',
  },
  {
    category: 'local',
    question: 'How does Google rank cleaning companies on the map?',
    answer:
      'Google says local results are mainly based on relevance, distance and popularity. Accurate categories and services, realistic service areas, and a steady flow of genuine reviews are the parts you control.',
  },
  {
    category: 'scope',
    question: 'How long does SEO take for a cleaning business?',
    answer:
      'Business Profile fixes can show in map rankings within weeks. Service pages usually take three to six months to rank, longer in large cities with many cleaning companies and franchises.',
  },
  {
    category: 'scope',
    question: 'How much does SEO for a cleaning company cost?',
    answer:
      'It depends on how many services and towns you target, whether you need a commercial section, and how strong local competitors are. We review your market first and quote a fixed price per phase, so we do not publish one figure for every cleaner.',
  },
  {
    category: 'scope',
    question: 'Is SEO or Google Ads better for a cleaning company?',
    answer:
      'Ads bring bookings this week and stop when you stop paying. SEO is slower to start and keeps working. Many cleaning companies use ads to fill the schedule while search builds, then lean on search for recurring clients.',
  },
  {
    category: 'ai',
    question: 'Do AI search tools recommend cleaning companies?',
    answer:
      'Yes, people ask assistants for cleaners and for advice like how often to book a deep clean. On 24 November 2026 a Google AI Overview showed on seo for cleaning companies. Clear answers on your pages, consistent business details and genuine reviews give AI tools something to cite. No one can guarantee a mention.',
  },
];

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Home Services SEO', url: `https://factoryjet.com${HUB_HREF}` },
  { name: 'Cleaning Company SEO', url: PAGE_URL },
];

const SCHEMAS = buildTradeSchemas({
  url: PAGE_URL,
  name: 'SEO for Cleaning Companies: Cleaning Business SEO',
  description:
    'Search program for US residential and commercial cleaning companies covering recurring-service pages, commercial sections, careers pages, Google Business Profile, review routines that follow Google policy, and AI answer engines.',
  serviceName: 'Cleaning Company SEO',
  serviceType: 'SEO for Cleaning Companies / Cleaning Business SEO / House Cleaning SEO / Commercial Cleaning SEO',
  audience: 'US residential and commercial cleaning companies',
  reviewed: REVIEWED_ISO,
  speakable: ['#answer-first', '#what-is-cleaning-company-seo'],
  offers: DELIVERABLES,
  faq: FAQ_ITEMS,
  breadcrumbs: BREADCRUMB_ITEMS,
});

export default function CleaningCompanySeoPage() {
  return (
    <>
      <JsonLd id="clean-schema" data={SCHEMAS} />
      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-14 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-18">
            <div>
              <p className="fj-eyebrow">Cleaning company SEO &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.5rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                SEO for cleaning companies that want clients who stay
              </h1>
              <p className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                A weekly client books you dozens of times a year. A one-off move-out books you once and
                compares your price with four others. We build search for cleaning businesses around the
                clients worth keeping: recurring homes and commercial contracts.
              </p>
              <HeroInlineForm region="us" source="services_cleaning_company_seo_hero" submitLabel="Get a cleaning SEO review" />
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

            {/* Hero visual: a four-week schedule */}
            <div className="mx-auto w-full max-w-[520px] space-y-4">
              <div className="rounded-2xl border bg-white p-5 sm:p-6" style={{ borderColor: HAIRLINE, boxShadow: '0 18px 44px rgba(20,18,12,0.08)' }}>
                <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em] text-fj-neutral-500">
                  Four weeks of a schedule built on recurring clients
                </span>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[300px] border-separate text-center" style={{ borderSpacing: 4 }}>
                    <caption className="sr-only">Illustration of recurring weekly and biweekly visits compared with one-off jobs over four weeks</caption>
                    <thead>
                      <tr>
                        <th scope="col" className="font-fj-mono text-[10px] font-normal text-fj-neutral-500">&nbsp;</th>
                        {DAYS.map((d) => (
                          <th key={d} scope="col" className="font-fj-mono text-[10px] font-normal text-fj-neutral-500">{d}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {WEEKS.map((w, wi) => (
                        <tr key={w}>
                          <th scope="row" className="pr-1 text-left font-fj-mono text-[10px] font-normal text-fj-neutral-500">{w}</th>
                          {DAYS.map((d, di) => {
                            const v = VISITS.find(([a, b]) => a === wi && b === di);
                            const bg = v ? (v[2] === 'recurring' ? GREEN : ORANGE) : CREAM;
                            return (
                              <td key={d} className="h-9 rounded-md" style={{ background: bg }}>
                                <span className="sr-only">{v ? (v[2] === 'recurring' ? 'recurring visit' : 'one-off job') : 'open'}</span>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 flex flex-wrap gap-4 font-fj-body text-[0.78rem] text-fj-neutral-700">
                  <span className="inline-flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-sm" style={{ background: GREEN }} /> Recurring client</span>
                  <span className="inline-flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-sm" style={{ background: ORANGE }} /> One-off job</span>
                </div>
                <p className="mt-3 font-fj-body text-[0.75rem] leading-[1.5] text-fj-neutral-600">
                  An illustration, not client data. One weekly and one biweekly client fill six slots a month
                  without a single new quote.
                </p>
              </div>
              <VolumeCard
                title="Live US search demand"
                rows={[
                  { k: 'house cleaning near me', v: '74,000 / mo' },
                  { k: 'seo for cleaning companies', v: '170 / mo' },
                  { k: 'cleaning company marketing', v: '90 / mo' },
                  { k: 'cleaning company seo', v: '70 / mo' },
                ]}
                note="Monthly US search volume from DataForSEO (Google Ads data), pulled 24 November 2026."
              />
            </div>
          </div>
        </section>

        {/* 2. SHORT ANSWER */}
        <section id="answer-first" className="pb-14 md:pb-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="rounded-2xl bg-white p-7 md:p-9" style={{ borderLeft: `5px solid ${ORANGE}`, boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}>
              <p className="font-fj-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>Short answer</p>
              <h2 id="what-is-cleaning-company-seo" className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                What is SEO for cleaning companies?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">Cleaning company SEO gets a cleaning business found by the clients it wants to keep.</b>{' '}
                Plumbers and electricians mostly win single jobs. A cleaner&rsquo;s best client books every week
                or two for years, and a commercial account can run on a contract. So the work is weighted
                toward recurring-service pages, quote forms that ask for frequency, trust details people need
                before letting a team into their home, and a separate path for facility managers.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Cleaning is one trade in our <InlineLink href={HUB_HREF}>home services SEO</InlineLink> practice,
                next to <InlineLink href="/services/hvac-seo">HVAC</InlineLink>,{' '}
                <InlineLink href="/services/roofing-seo">roofing</InlineLink> and{' '}
                <InlineLink href="/services/plumber-seo">plumbing</InlineLink>.
              </p>
            </div>
          </div>
        </section>

        {/* 3. RES vs COM */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Homes and buildings</Eyebrow>
            <H2>Residential and commercial cleaning buyers barely overlap</H2>
            <Lead>
              Commercial and janitorial SEO phrases showed no measurable US volume when we checked, because
              facility managers search for the service in their city, not for marketing terms. That is why the
              commercial side needs its own pages rather than a line on the homepage.
            </Lead>
            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: HAIRLINE }}>
              <table className="w-full min-w-[760px] border-collapse text-left">
                <caption className="sr-only">Residential cleaning buyers compared with commercial cleaning buyers</caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">&nbsp;</th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>Residential</th>
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

        {/* 4. THREE LEAKS */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Where cleaning sites leak</Eyebrow>
            <H2>Three problems we find on most cleaning company websites</H2>
            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl bg-white p-7" style={{ border: `1px solid ${HAIRLINE}` }}>
                <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>01</span>
                <h3 className="fj-display mt-2 text-[1.2rem] font-bold text-fj-ink">The quote form treats every visitor as a one-off</h3>
                <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
                  A form that asks only name, email and a message gets one-off price checks. Ask home size,
                  frequency (weekly, biweekly, monthly, one time) and start date, and you learn which leads are
                  worth calling first. The recurring page should be the one the menu, the profile and the ads
                  point to.
                </p>
              </div>
              <div className="space-y-5">
                <div className="rounded-2xl p-7" style={{ background: PEACH }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>02</span>
                  <h3 className="fj-display mt-2 text-[1.1rem] font-bold text-fj-ink">Applicants fill the client inbox</h3>
                  <p className="mt-2 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                    Cleaning businesses hire often, and job searches overlap with service searches. Without a
                    careers page, applications arrive as quote requests.
                  </p>
                </div>
                <div className="rounded-2xl p-7" style={{ background: GREEN_SOFT }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: GREEN }}>03</span>
                  <h3 className="fj-display mt-2 text-[1.1rem] font-bold text-fj-ink">Trust questions go unanswered</h3>
                  <p className="mt-2 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                    Insured? Bonded? Same cleaner each time? What if something breaks? If the page is silent,
                    the visitor picks a company that says so.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. REVIEW RULES */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Eyebrow>Reviews from regulars</Eyebrow>
              <H2 max={560}>Recurring clients make reviews easy to get and easy to get wrong</H2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                You see a regular client every week, so asking is easy. The traps are the habits that feel
                harmless: a discount on the next clean, asking only the clients who praise you, or suggesting
                they mention deep cleaning by name. Google&rsquo;s contribution policy prohibits all three.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { ok: false, t: 'A discount for a review', s: 'Google bans payment, discounts or free services in exchange for reviews.' },
                { ok: false, t: 'Asking only happy clients', s: 'Selectively soliciting positive reviews is prohibited.' },
                { ok: false, t: 'Scripting what they write', s: 'Google says merchants should not request specific content in reviews.' },
                { ok: true, t: 'One plain ask to every client', s: 'Same message after the first visit and again after a few months.' },
                { ok: true, t: 'Reply to every review', s: 'Google says replying shows you value feedback and helps you stand out.' },
                { ok: true, t: 'Fix what reviews raise', s: 'Missed corners and late arrivals in reviews are free operations data.' },
              ].map((r) => (
                <div key={r.t} className="flex items-start gap-3 rounded-2xl p-5" style={{ background: r.ok ? GREEN_SOFT : CREAM, border: `1px solid ${HAIRLINE}` }}>
                  {r.ok ? <CheckCircle size={18} /> : <CrossCircle size={18} />}
                  <div className="font-fj-body text-[0.9375rem] font-bold text-fj-ink">
                    {r.t}
                    <small className="mt-0.5 block text-[0.8125rem] font-medium text-fj-neutral-600">{r.s}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PROGRAMME */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>The program</Eyebrow>
            <H2>Nine pieces of work for a cleaning business</H2>
            <Lead>
              Recurring pages and the quote form come first, because they decide what kind of client search
              sends you. Seasonal and AI work build on top.
            </Lead>
            <ol className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
              {DELIVERABLES.map((d) => (
                <li key={d.n} className="border-t pt-5" style={{ borderColor: 'rgba(15,15,18,0.14)' }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>{d.n}</span>
                  <h3 className="fj-display mt-1.5 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>{d.title}</h3>
                  <p className="mt-2 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{d.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 7. WHO RANKS */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Who ranks today</Eyebrow>
            <H2>What the cleaning company SEO results page shows</H2>
            <Lead max={760}>
              We pulled US results for seo for cleaning companies and cleaning company seo on 24 November 2026.
              The second query also showed a local map pack, so Google reads it partly as a search for a
              nearby business.
            </Lead>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {RIVALS.map((r) => (
                <div key={r.domain} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{r.domain}</span>
                  <h3 className="fj-display mt-1.5 text-[1.05rem] font-bold" style={{ letterSpacing: '-0.015em', color: ORANGE_DARK }}>{r.note}</h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{r.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              We are not a cleaning-only agency. What we bring is search and website build in one team, so the
              quote form, careers page and speed fixes ship together, plus AI search work most cleaning
              specialists do not offer yet.
            </p>
          </div>
        </section>

        {/* 8. FIT */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <Eyebrow>Honest fit check</Eyebrow>
            <H2 max={720}>Is cleaning company SEO worth it for you?</H2>
            <TwoLists
              goodTitle="A strong fit"
              good={[
                'You want more weekly and biweekly clients, or more commercial accounts',
                'You rely on lead platforms or ads and want a channel you own',
                'Your quote form brings job applicants and one-off price checks',
                'You have happy regular clients and few Google reviews',
              ]}
              badTitle="A poor fit"
              bad={[
                'You need a full schedule this month. Run ads first',
                'You cannot take on new recurring clients without hiring first',
                'You want pages for towns your teams cannot reach on time',
                'You expect guaranteed rankings',
              ]}
              footer={
                <>
                  Want to see what is broken first? Start with an{' '}
                  <InlineLink href="/services/seo-audit">SEO audit</InlineLink>.
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
                  src: 'Google Maps contribution policy',
                  title: 'What you may not do to get reviews',
                  body: 'Google prohibits incentives for reviews, discouraging negative reviews, selectively asking for positive ones, and requesting that specific content be included.',
                  href: 'https://support.google.com/contributionpolicy/answer/7400114',
                },
                {
                  src: 'Google Business Profile Help',
                  title: 'How local ranking works',
                  body: 'Google says local results are mainly based on relevance, distance and popularity, and that replying to reviews helps a business stand out.',
                  href: 'https://support.google.com/business/answer/7091',
                },
                {
                  src: 'Google Business Profile Help',
                  title: 'Service-area businesses',
                  body: 'Google says businesses that serve customers at their location should hide the address and keep service areas within about two hours of driving.',
                  href: 'https://support.google.com/business/answer/3038177',
                },
              ]}
            />
            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Search volumes are DataForSEO US figures pulled 24 November 2026. Results-page observations are
              from the same day and will change.
            </p>
          </div>
        </section>

        {/* 10. WHO YOU WORK WITH */}
        <section className="py-14 md:py-20" style={{ background: PEACH }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <Eyebrow>Who you work with</Eyebrow>
                <H2 max={680}>A founder-led team that builds the site too</H2>
                <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                  The founder scopes cleaning engagements and stays on the calls. We will tell you if your
                  schedule cannot take more clients yet, or if ads are the better spend this quarter.
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
                { label: 'Home services SEO', href: HUB_HREF, desc: 'Every trade we work with, and the groundwork they share.' },
                { label: 'HVAC SEO', href: '/services/hvac-seo', desc: 'Heating and cooling, where maintenance plans are the recurring revenue.' },
                { label: 'Roofing SEO', href: '/services/roofing-seo', desc: 'Storm-season demand, insurance claims and financing questions.' },
                { label: 'Plumber SEO', href: '/services/plumber-seo', desc: 'Emergency calls and planned jobs on two different clocks.' },
                { label: 'Electrician SEO', href: '/services/electrician-seo', desc: 'License, permit and code questions, and higher-value electrical jobs.' },
                { label: 'Local SEO', href: '/services/local-seo', desc: 'Map pack and Business Profile work for any service-area business.' },
              ]}
            />
          </div>
        </section>

        {/* 12. FAQ */}
        <FAQ
          eyebrow="Cleaning company SEO FAQ"
          headline="Questions cleaning business owners ask us"
          lead="Recurring clients, commercial accounts, job applicants, reviews, timing and AI search. If yours is not here, send a short brief and we usually reply within one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* 13. FINAL CTA */}
        <FinalCTA
          variant="dark"
          eyebrow="CLEANING SEO REVIEW"
          headline="Find out what kind of clients your website is attracting"
          sub="Book a call with the founder. We will look at your Business Profile, your quote form, your recurring and commercial pages, and the searches in your area, then tell you plainly what to change first."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See home services SEO', href: HUB_HREF }}
          objectionHandler="Founder-led. Fixed price per phase. No guaranteed rankings and no invented case studies."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

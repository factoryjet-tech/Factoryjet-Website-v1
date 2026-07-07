import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import Heading from '@/components/v2/Heading'
import FAQ from '@/components/v2/FAQ'
import TalkToFounder from '@/components/v2/TalkToFounder'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

import {
  CASE_STUDIES,
  getCaseStudyBySlug,
  type CaseStudy,
  type CaseStudyMetric,
  type CaseStudyGlanceTile,
  type CaseStudyScreenshot,
} from '@/data/case-studies'

/**
 * Case Study Visual Template — `/case-studies/{slug}/`.
 *
 * 10-section layout per audit-current-state/26_case_study_mockup_and_repositioning_2026-05-28.md
 * "Visual template mockup". Dark/light rhythm: hero light → at-a-glance cream
 * → challenge dark → approach light → solution cream → results dark
 * → testimonial light → CTA cream → related light → FAQ cream.
 *
 * Every section gracefully degrades when its CaseStudy field is undefined,
 * so cases can ship progressively as interview data lands.
 *
 * Pure server component — no `'use client'`. Native HTML/CSS only.
 * v2 tokens: orange #F05A28, cream #FAFAF7, charcoal #0F0F12. No blue.
 */

const ORANGE = '#F05A28'
const ORANGE_DEEP = '#C94A1A'
const CHARCOAL = '#0F0F12'
const CREAM = '#FAFAF7'

type Props = {
  params: Promise<{ slug: string }>
}

// ───── Static generation ────────────────────────────────────────────────────
export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }))
}

// ───── Metadata ─────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)

  if (!cs) {
    return { title: 'Case Study Not Found | FactoryJet' }
  }

  const title = `${cs.headline} | FactoryJet Case Study`
  const description = cs.summary
  const url = `https://factoryjet.com/case-studies/${slug}`
  const ogImage = cs.ogImageUrl?.startsWith('http')
    ? cs.ogImageUrl
    : `https://factoryjet.com${cs.ogImageUrl || '/og-default.png'}`

  return {
    title,
    description,
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
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      siteName: 'FactoryJet',
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: cs.headline }],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

// ───── JSON-LD generators ───────────────────────────────────────────────────
function articleJsonLd(cs: CaseStudy, slug: string) {
  const image = cs.ogImageUrl?.startsWith('http')
    ? cs.ogImageUrl
    : `https://factoryjet.com${cs.ogImageUrl || '/og-default.png'}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cs.headline,
    description: cs.summary,
    image,
    datePublished: new Date(cs.publishedDate).toISOString(),
    dateModified: new Date(cs.publishedDate).toISOString(),
    author: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
    publisher: {
      '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      logo: { '@type': 'ImageObject', url: 'https://factoryjet.com/FinalLogo.svg' },
    },
    about: {
      '@type': 'Organization',
      name: cs.client,
      ...(cs.clientUrl ? { url: cs.clientUrl } : {}),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://factoryjet.com/case-studies/${slug}`,
    },
  }
}

function faqJsonLd(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

function localBusinessJsonLd(cs: CaseStudy, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://factoryjet.com/case-studies/${slug}#client-localbusiness`,
    name: cs.client,
    ...(cs.clientUrl ? { url: cs.clientUrl } : {}),
    address: { '@type': 'PostalAddress', addressLocality: cs.location },
  }
}

// ───── Section helpers ──────────────────────────────────────────────────────

/** Orange eyebrow used at the top of every section. */
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className="font-fj-mono text-[11px] font-bold uppercase"
      style={{ letterSpacing: '0.14em', color: dark ? ORANGE : ORANGE_DEEP }}
    >
      {children}
    </p>
  )
}

/** Crystal card — v2 "premium" surface used for KPI tiles + result cards. */
function CrystalCard({
  children,
  dark = false,
  className = '',
}: {
  children: React.ReactNode
  dark?: boolean
  className?: string
}) {
  if (dark) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 p-6 ${className}`.trim()}
        style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          backgroundImage:
            'radial-gradient(ellipse 100% 80% at 20% 0%, rgba(240,90,40,0.10) 0%, transparent 65%)',
        }}
      >
        {children}
      </div>
    )
  }
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-6 ${className}`.trim()}
      style={{
        backgroundImage:
          'radial-gradient(ellipse 100% 80% at 20% 0%, rgba(240,90,40,0.04) 0%, transparent 65%)',
        boxShadow: '0 1px 2px rgba(15,15,18,0.04), 0 4px 16px rgba(15,15,18,0.04)',
      }}
    >
      {children}
    </div>
  )
}

// ───── SECTION 1 — HERO ─────────────────────────────────────────────────────
function HeroSection({ cs }: { cs: CaseStudy }) {
  const stats = cs.heroStats ?? []
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20"
      style={{
        backgroundColor: CREAM,
        backgroundImage: [
          'radial-gradient(circle 380px at -60px -80px, rgba(240,90,40,0.14) 0%, rgba(240,90,40,0.05) 55%, transparent 72%)',
          'radial-gradient(circle, rgba(15,15,18,0.09) 1px, transparent 1px)',
        ].join(', '),
        backgroundSize: '100%, 22px 22px',
      }}
    >
      {/* Bottom shimmer separator */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(240,90,40,0.22) 30%, rgba(240,90,40,0.22) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* LEFT — eyebrow + headline + tagline + stats */}
          <div className="lg:col-span-7">
            <Eyebrow>Case Study · {cs.category ?? cs.industry}</Eyebrow>
            <Heading as="h1" size="hero" className="mt-4 text-fj-ink">
              {cs.headline}
            </Heading>
            {cs.tagline && (
              <p
                className="mt-5 max-w-[620px] font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                {cs.tagline}
              </p>
            )}

            {/* Hero maxi-stats row (3) */}
            {stats.length > 0 && (
              <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 border-t border-black/[0.08] pt-8">
                {stats.slice(0, 3).map((s, i) => (
                  <div key={i}>
                    <p
                      className="fj-display font-fj-display text-[1.75rem] sm:text-[2.5rem] font-bold leading-none tracking-[-0.025em]"
                      style={{ color: ORANGE }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-2 font-fj-body text-[12px] sm:text-[13px] leading-[1.45] text-fj-neutral-600">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — client logo + meta */}
          <div className="lg:col-span-5">
            <div
              className="flex h-full min-h-[260px] flex-col justify-between rounded-2xl border border-black/[0.08] bg-white p-7"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse 100% 80% at 80% 10%, rgba(240,90,40,0.06) 0%, transparent 65%)',
              }}
            >
              <div>
                <p
                  className="font-fj-mono text-[10px] font-bold uppercase"
                  style={{ letterSpacing: '0.16em', color: 'rgba(15,15,18,0.45)' }}
                >
                  Client
                </p>
                <div className="mt-3 flex items-center gap-4">
                  {cs.clientLogoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cs.clientLogoUrl}
                      alt={`${cs.client} logo`}
                      width={64}
                      height={64}
                      className="h-12 w-12 rounded-lg object-contain"
                    />
                  ) : (
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg text-white"
                      style={{
                        background: `linear-gradient(135deg, ${CHARCOAL} 0%, ${ORANGE} 100%)`,
                        fontFamily: 'var(--font-clash-display), serif',
                        fontWeight: 700,
                      }}
                      aria-hidden="true"
                    >
                      {cs.client.charAt(0)}
                    </div>
                  )}
                  <p className="fj-display font-fj-display text-[1.5rem] font-semibold text-fj-ink">
                    {cs.client}
                  </p>
                </div>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-y-4 gap-x-6">
                <div>
                  <dt className="font-fj-mono text-[10px] font-bold uppercase text-fj-neutral-400" style={{ letterSpacing: '0.14em' }}>
                    Industry
                  </dt>
                  <dd className="mt-1 font-fj-body text-[0.9375rem] font-medium text-fj-ink">{cs.industry}</dd>
                </div>
                {cs.location && (
                  <div>
                    <dt className="font-fj-mono text-[10px] font-bold uppercase text-fj-neutral-400" style={{ letterSpacing: '0.14em' }}>
                      Location
                    </dt>
                    <dd className="mt-1 font-fj-body text-[0.9375rem] font-medium text-fj-ink">{cs.location}</dd>
                  </div>
                )}
                {cs.services?.length > 0 && (
                  <div className="col-span-2">
                    <dt className="font-fj-mono text-[10px] font-bold uppercase text-fj-neutral-400" style={{ letterSpacing: '0.14em' }}>
                      Services
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {cs.services.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-full px-2.5 py-1 font-fj-body text-[11px] font-medium"
                          style={{ background: 'rgba(240,90,40,0.08)', color: ORANGE_DEEP }}
                        >
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>

        {/* Pinned founder card at hero bottom */}
        <div className="mt-12">
          <TalkToFounder
            variant="compact"
            theme="light"
            mailtoSubject={`About the ${cs.client} case study`}
          />
        </div>
      </div>
    </section>
  )
}

// ───── SECTION 2 — AT A GLANCE ──────────────────────────────────────────────
function AtAGlanceSection({ tiles }: { tiles: CaseStudyGlanceTile[] }) {
  if (!tiles?.length) return null
  return (
    <section className="bg-fj-cream py-14 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="mb-10 max-w-[640px]">
          <Eyebrow>At a glance</Eyebrow>
          <Heading as="h2" size="h3" className="mt-4 text-fj-ink">
            The vitals.
          </Heading>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.slice(0, 6).map((t, i) => (
            <CrystalCard key={i}>
              <p
                className="font-fj-mono text-[10px] font-bold uppercase"
                style={{ letterSpacing: '0.16em', color: 'rgba(15,15,18,0.45)' }}
              >
                {t.label}
              </p>
              <p className="fj-display font-fj-display mt-3 text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.015em] text-fj-ink md:text-[1.625rem]">
                {t.value}
              </p>
              {t.note && (
                <p className="mt-2 font-fj-body text-[13px] leading-[1.5] text-fj-neutral-600">
                  {t.note}
                </p>
              )}
            </CrystalCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// ───── SECTION 3 — CHALLENGE (dark) ─────────────────────────────────────────
function ChallengeSection({ body, pullQuote }: { body: string; pullQuote?: string }) {
  if (!body) return null
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20"
      style={{
        backgroundColor: CHARCOAL,
        backgroundImage: [
          'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
          'linear-gradient(135deg, #060D1F 0%, #0F0F12 45%, #0D0818 100%)',
        ].join(', '),
        backgroundSize: '28px 28px, 100% 100%',
      }}
    >
      {/* Orange aurora orb left */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: '-10%',
          top: '15%',
          width: '620px',
          height: '620px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(240,90,40,0.18) 0%, transparent 65%)',
          filter: 'blur(48px)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="mb-10 max-w-[700px]">
          <Eyebrow dark>The Challenge</Eyebrow>
          <Heading as="h2" size="h3" className="mt-4" style={{ color: CREAM }}>
            What we were up against.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div
              className="font-fj-body"
              style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: 'rgba(250,250,247,0.82)' }}
            >
              {body.split('\n').filter(Boolean).map((p, i) => (
                <p key={i} className={i > 0 ? 'mt-5' : ''}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          {pullQuote && (
            <aside className="lg:col-span-5">
              <div
                className="relative rounded-2xl border border-white/10 p-7"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backgroundImage:
                    'radial-gradient(ellipse 100% 80% at 20% 0%, rgba(240,90,40,0.10) 0%, transparent 65%)',
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-2 font-fj-display"
                  style={{ fontSize: '4rem', color: ORANGE, lineHeight: 1, opacity: 0.55 }}
                >
                  &ldquo;
                </span>
                <p
                  className="fj-display font-fj-display relative"
                  style={{
                    fontSize: '1.625rem',
                    lineHeight: 1.35,
                    fontStyle: 'italic',
                    color: CREAM,
                    paddingTop: '1.5rem',
                  }}
                >
                  {pullQuote}
                </p>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}

// ───── SECTION 4 — APPROACH (light) ─────────────────────────────────────────
function ApproachSection({ body, techStack }: { body: string; techStack?: string[] }) {
  if (!body) return null
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="mb-10 max-w-[700px]">
          <Eyebrow>Our Approach</Eyebrow>
          <Heading as="h2" size="h3" className="mt-4 text-fj-ink">
            How we attacked it.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div
              className="font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
            >
              {body.split('\n').filter(Boolean).map((p, i) => (
                <p key={i} className={i > 0 ? 'mt-5' : ''}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          {techStack && techStack.length > 0 && (
            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-black/[0.08] bg-fj-cream p-7">
                <p
                  className="font-fj-mono text-[10px] font-bold uppercase"
                  style={{ letterSpacing: '0.16em', color: ORANGE_DEEP }}
                >
                  Tech Stack
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {techStack.map((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center rounded-full border border-black/[0.08] bg-white px-3 py-1.5 font-fj-body text-[13px] font-medium text-fj-ink"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}

// ───── SECTION 5 — SOLUTION (cream) ─────────────────────────────────────────
function SolutionSection({
  body,
  screenshots,
}: {
  body: string
  screenshots?: CaseStudyScreenshot[]
}) {
  if (!body && !screenshots?.length) return null
  return (
    <section className="bg-fj-cream py-14 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="mb-10 max-w-[760px]">
          <Eyebrow>What We Built</Eyebrow>
          <Heading as="h2" size="h3" className="mt-4 text-fj-ink">
            The solution we shipped.
          </Heading>
        </div>

        {body && (
          <div
            className="mb-12 max-w-[760px] font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
          >
            {body.split('\n').filter(Boolean).map((p, i) => (
              <p key={i} className={i > 0 ? 'mt-5' : ''}>
                {p}
              </p>
            ))}
          </div>
        )}

        {screenshots && screenshots.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {screenshots.slice(0, 5).map((s, i) => {
              const isMobile = s.device === 'mobile'
              return (
                <figure
                  key={i}
                  className={`relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white ${
                    !isMobile && i === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: isMobile ? '9 / 16' : '16 / 10',
                      background: '#F5F5F2',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.src}
                      alt={s.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {s.caption && (
                    <figcaption className="border-t border-black/[0.06] px-5 py-3 font-fj-body text-[13px] leading-[1.5] text-fj-neutral-600">
                      {s.caption}
                    </figcaption>
                  )}
                </figure>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

// ───── SECTION 6 — RESULTS (dark) ───────────────────────────────────────────
function ResultsSection({
  body,
  headlineMetric,
  resultsMetrics,
}: {
  body?: string
  headlineMetric?: CaseStudyMetric
  resultsMetrics?: CaseStudyMetric[]
}) {
  if (!headlineMetric && !resultsMetrics?.length && !body) return null
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20"
      style={{
        backgroundColor: CHARCOAL,
        backgroundImage: [
          'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          'linear-gradient(135deg, #060D1F 0%, #0F0F12 45%, #0D0818 100%)',
        ].join(', '),
        backgroundSize: '28px 28px, 100% 100%',
      }}
    >
      {/* Aurora orb right */}
      <div
        className="pointer-events-none absolute"
        style={{
          right: '-8%',
          top: '20%',
          width: '640px',
          height: '640px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(240,90,40,0.18) 0%, transparent 65%)',
          filter: 'blur(56px)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="mb-10 max-w-[700px]">
          <Eyebrow dark>Results</Eyebrow>
          <Heading as="h2" size="h3" className="mt-4" style={{ color: CREAM }}>
            What changed for the business.
          </Heading>
        </div>

        {/* Huge headline metric */}
        {headlineMetric && (
          <div className="mb-14 border-y border-white/10 py-10">
            <p
              className="fj-display font-fj-display font-bold leading-none tracking-[-0.035em]"
              style={{ color: ORANGE, fontSize: 'clamp(3.5rem, 9vw, 6rem)' }}
            >
              {headlineMetric.value}
            </p>
            <p
              className="mt-5 max-w-[640px] font-fj-body font-medium"
              style={{ fontSize: '1.125rem', color: 'rgba(250,250,247,0.82)' }}
            >
              {headlineMetric.label}
              {headlineMetric.note && (
                <span className="block mt-2 text-[0.9375rem]" style={{ color: 'rgba(250,250,247,0.55)' }}>
                  {headlineMetric.note}
                </span>
              )}
            </p>
          </div>
        )}

        {/* 5-6 metric crystal cards */}
        {resultsMetrics && resultsMetrics.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resultsMetrics.slice(0, 6).map((m, i) => (
              <CrystalCard key={i} dark>
                <p
                  className="fj-display font-fj-display font-bold leading-none tracking-[-0.025em]"
                  style={{ color: ORANGE, fontSize: '2.25rem' }}
                >
                  {m.value}
                </p>
                <p
                  className="mt-3 font-fj-body"
                  style={{ fontSize: '0.9375rem', lineHeight: 1.55, color: 'rgba(250,250,247,0.85)' }}
                >
                  {m.label}
                </p>
                {m.note && (
                  <p
                    className="mt-2 font-fj-body text-[12px] leading-[1.5]"
                    style={{ color: 'rgba(250,250,247,0.55)' }}
                  >
                    {m.note}
                  </p>
                )}
              </CrystalCard>
            ))}
          </div>
        )}

        {body && (
          <div
            className="mt-12 max-w-[760px] font-fj-body"
            style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: 'rgba(250,250,247,0.82)' }}
          >
            {body.split('\n').filter(Boolean).map((p, i) => (
              <p key={i} className={i > 0 ? 'mt-5' : ''}>
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// ───── SECTION 7 — TESTIMONIAL (light) ──────────────────────────────────────
function TestimonialSection({ t }: { t: CaseStudy['testimonial'] }) {
  if (!t) return null
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[920px] px-6 md:px-8">
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-4 -top-6 font-fj-display"
            style={{ fontSize: '7rem', color: ORANGE, lineHeight: 1, opacity: 0.18 }}
          >
            &ldquo;
          </span>
          <blockquote
            className="fj-display font-fj-display relative text-fj-ink"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
              lineHeight: 1.4,
              fontStyle: 'italic',
            }}
          >
            {t.quote}
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-black/[0.08] pt-7">
            {t.photoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={t.photoUrl}
                alt={t.author}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-full text-white font-fj-display font-semibold text-xl"
                style={{ background: `linear-gradient(135deg, ${CHARCOAL} 0%, ${ORANGE} 100%)` }}
              >
                {t.author.charAt(0)}
              </div>
            )}
            <div className="flex-1">
              <p className="font-fj-body text-[1.0625rem] font-semibold text-fj-ink">{t.author}</p>
              <p className="mt-0.5 font-fj-body text-[0.9375rem] text-fj-neutral-600">{t.title}</p>
            </div>
            {t.companyLogoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={t.companyLogoUrl}
                alt=""
                className="h-8 w-auto opacity-70"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ───── SECTION 8 — TALK TO FOUNDER (full banner) ────────────────────────────
function FounderBannerSection({ teaser }: { teaser?: string }) {
  return (
    <TalkToFounder
      variant="full"
      theme="light"
      eyebrow="Want results like this?"
      bio={
        teaser
          ? `${teaser} Hi, I'm Bhavesh, founder of FactoryJet. I run every discovery call myself — so by minute 10 we already know whether what you need pays for itself, and how fast.`
          : undefined
      }
    />
  )
}

// ───── SECTION 9 — RELATED CASES (light) ────────────────────────────────────
function RelatedCasesSection({ current }: { current: CaseStudy }) {
  // Prefer explicit related slugs; fall back to next 2 cases by date.
  let related: CaseStudy[] = []
  if (current.relatedSlugs?.length) {
    related = current.relatedSlugs
      .map((s) => CASE_STUDIES.find((cs) => cs.slug === s))
      .filter((cs): cs is CaseStudy => Boolean(cs))
      .slice(0, 2)
  }
  if (related.length < 2) {
    const fallback = CASE_STUDIES.filter(
      (cs) => cs.slug !== current.slug && !related.some((r) => r.slug === cs.slug)
    ).slice(0, 2 - related.length)
    related = [...related, ...fallback]
  }
  if (!related.length) return null

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Related Cases</Eyebrow>
            <Heading as="h2" size="h3" className="mt-4 text-fj-ink">
              Other wins worth a look.
            </Heading>
          </div>
          <Link
            href="/case-studies"
            className="font-fj-body text-[0.9375rem] font-semibold hover:underline"
            style={{ color: ORANGE_DEEP }}
          >
            All case studies →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {related.map((r) => {
            const stat = r.heroStats?.[0] ?? r.keyMetrics?.[0]
            return (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="group block"
              >
                <CrystalCard className="h-full transition-transform group-hover:-translate-y-0.5">
                  <p
                    className="font-fj-mono text-[11px] font-bold uppercase"
                    style={{ letterSpacing: '0.14em', color: ORANGE_DEEP }}
                  >
                    {r.category ?? r.industry}
                  </p>
                  <p className="fj-display font-fj-display mt-3 text-[1.375rem] font-semibold leading-[1.25] tracking-[-0.015em] text-fj-ink">
                    {r.headline}
                  </p>
                  <p className="mt-3 font-fj-body text-[15px] leading-[1.6] text-fj-neutral-600">
                    {r.summary}
                  </p>
                  {stat && (
                    <div className="mt-6 flex items-center gap-3 border-t border-black/[0.06] pt-5">
                      <p
                        className="fj-display font-fj-display font-bold leading-none tracking-[-0.025em]"
                        style={{ color: ORANGE, fontSize: '1.625rem' }}
                      >
                        {stat.value}
                      </p>
                      <p className="font-fj-body text-[13px] leading-[1.4] text-fj-neutral-600">
                        {stat.label}
                      </p>
                    </div>
                  )}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-fj-body text-[0.875rem] font-medium text-fj-ink">
                      Read case study
                    </span>
                    <span aria-hidden="true" className="font-fj-body text-[18px] font-medium" style={{ color: ORANGE }}>
                      →
                    </span>
                  </div>
                </CrystalCard>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ───── SECTION 10 — FAQ (cream) ─────────────────────────────────────────────
function FAQSection({ faqs, client }: { faqs: CaseStudy['faqs']; client: string }) {
  if (!faqs?.length) return null
  return (
    <FAQ
      eyebrow="Frequently asked"
      headline={`Questions about the ${client} project.`}
      items={faqs.map((f) => ({ question: f.q, answer: f.a }))}
    />
  )
}

// ───── PAGE ─────────────────────────────────────────────────────────────────
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)
  if (!cs) notFound()

  const articleSchema = articleJsonLd(cs, slug)
  const faqSchema = cs.faqs?.length ? faqJsonLd(cs.faqs) : null
  const localBizSchema = cs.location ? localBusinessJsonLd(cs, slug) : null

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Case Studies', url: 'https://factoryjet.com/case-studies' },
          { name: cs.headline, url: `https://factoryjet.com/case-studies/${slug}` },
        ]}
      />
      <script
        id="case-study-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          id="case-study-faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {localBizSchema && (
        <script
          id="case-study-localbiz-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
        />
      )}

      <SiteHeader />
      <main>
        <HeroSection cs={cs} />
        <AtAGlanceSection tiles={cs.glanceTiles ?? []} />
        <ChallengeSection body={cs.challenge} pullQuote={cs.challengePullQuote} />
        <ApproachSection body={cs.approach} techStack={cs.techStack} />
        <SolutionSection body={cs.solution} screenshots={cs.screenshots} />
        <ResultsSection
          body={cs.results}
          headlineMetric={cs.headlineMetric}
          resultsMetrics={cs.resultsMetrics}
        />
        <TestimonialSection t={cs.testimonial} />
        <FounderBannerSection teaser={cs.ctaTeaser} />
        <RelatedCasesSection current={cs} />
        <FAQSection faqs={cs.faqs} client={cs.client} />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}

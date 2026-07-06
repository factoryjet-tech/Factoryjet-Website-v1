import type { Metadata } from 'next'
import Link from 'next/link'

import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import Heading from '@/components/v2/Heading'
import TalkToFounder from '@/components/v2/TalkToFounder'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns'
import { CASE_STUDIES } from '@/data/case-studies'

/**
 * Case studies index — `/case-studies/`.
 *
 * Renders a grid of CASE_STUDIES entries (crystal-card style) when the data
 * has been populated. Falls back to a "Coming soon" placeholder while the
 * launch queue (Belle Maison → Bombay Petals → Formative Concepts per
 * Report 19) is still gathering client-secured content.
 *
 * Pure server component — v2 tokens only.
 */

const ORANGE = '#F05A28'
const ORANGE_DEEP = '#C94A1A'
const CHARCOAL = '#0F0F12'
const CREAM = '#FAFAF7'

export const metadata: Metadata = {
  title: 'Case Studies | FactoryJet',
  description:
    'Real FactoryJet client wins — measurable revenue, traffic, and efficiency gains from web design, Shopify, and custom development projects.',
  alternates: { canonical: 'https://factoryjet.com/case-studies' },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Case Studies | FactoryJet',
    description:
      'Real FactoryJet client wins — measurable revenue, traffic, and efficiency gains from web design, Shopify, and custom development projects.',
    url: 'https://factoryjet.com/case-studies',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Case Studies',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | FactoryJet',
    description:
      'Real FactoryJet client wins — measurable revenue, traffic, and efficiency gains from web design, Shopify, and custom development projects.',
    images: ['https://factoryjet.com/og-default.png'],
  },
}

export default function CaseStudiesIndexPage() {
  const cases = CASE_STUDIES
  const hasCases = cases.length > 0

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
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
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(240,90,40,0.22) 30%, rgba(240,90,40,0.22) 70%, transparent 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1120px] px-6 md:px-8">
            <p
              className="font-fj-mono text-[11px] font-bold uppercase"
              style={{ letterSpacing: '0.14em', color: ORANGE_DEEP }}
            >
              Case Studies
            </p>
            <Heading
              as="h1"
              size="hero"
              className="mt-4 max-w-[820px] text-fj-ink"
            >
              Real client wins, audited numbers, zero filler.
            </Heading>
            <p
              className="mt-5 max-w-[640px] font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
            >
              Every case below is a real FactoryJet engagement — measurable revenue,
              traffic, or efficiency gains, with the client&apos;s permission to
              publish. No fabricated logos, no mock metrics.
            </p>
          </div>
        </section>

        {/* ── GRID OR PLACEHOLDER ──────────────────────────────────────── */}
        {hasCases ? (
          <section className="bg-fj-cream py-14 md:py-20">
            <div className="mx-auto max-w-[1120px] px-6 md:px-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cases.map((cs) => {
                  const stat = cs.heroStats?.[0] ?? cs.keyMetrics?.[0]
                  return (
                    <Link
                      key={cs.slug}
                      href={`/case-studies/${cs.slug}`}
                      className="group block h-full"
                    >
                      <article
                        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-7 transition-transform group-hover:-translate-y-0.5"
                        style={{
                          backgroundImage:
                            'radial-gradient(ellipse 100% 80% at 20% 0%, rgba(240,90,40,0.04) 0%, transparent 65%)',
                          boxShadow:
                            '0 1px 2px rgba(15,15,18,0.04), 0 4px 16px rgba(15,15,18,0.04)',
                        }}
                      >
                        {/* Category badge */}
                        <p
                          className="font-fj-mono text-[11px] font-bold uppercase"
                          style={{ letterSpacing: '0.14em', color: ORANGE_DEEP }}
                        >
                          {cs.category ?? cs.industry}
                        </p>

                        {/* Client + logo */}
                        <div className="mt-3 flex items-center gap-3">
                          {cs.clientLogoUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={cs.clientLogoUrl}
                              alt={`${cs.client} logo`}
                              width={40}
                              height={40}
                              className="h-10 w-10 rounded-lg object-contain"
                            />
                          ) : (
                            <div
                              className="flex h-10 w-10 items-center justify-center rounded-lg text-white font-fj-display font-semibold"
                              style={{
                                background: `linear-gradient(135deg, ${CHARCOAL} 0%, ${ORANGE} 100%)`,
                              }}
                              aria-hidden="true"
                            >
                              {cs.client.charAt(0)}
                            </div>
                          )}
                          <p className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">
                            {cs.client}
                          </p>
                        </div>

                        <p className="fj-display font-fj-display mt-4 text-[1.25rem] font-semibold leading-[1.3] tracking-[-0.015em] text-fj-ink md:text-[1.375rem]">
                          {cs.headline}
                        </p>

                        <p className="mt-3 font-fj-body text-[15px] leading-[1.6] text-fj-neutral-600">
                          {cs.summary}
                        </p>

                        {stat && (
                          <div className="mt-auto flex items-center gap-3 border-t border-black/[0.06] pt-5">
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
                          <span
                            aria-hidden="true"
                            className="font-fj-body text-[18px] font-medium"
                            style={{ color: ORANGE }}
                          >
                            →
                          </span>
                        </div>
                      </article>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-fj-cream py-14 md:py-20">
            <div className="mx-auto max-w-[760px] px-6 md:px-8 text-center">
              <div
                className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-10"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(240,90,40,0.06) 0%, transparent 65%)',
                }}
              >
                <p
                  className="font-fj-mono text-[11px] font-bold uppercase"
                  style={{ letterSpacing: '0.14em', color: ORANGE_DEEP }}
                >
                  Coming soon
                </p>
                <Heading as="h2" size="h3" className="mt-4 text-fj-ink">
                  The first deep-dive cases land in 2026.
                </Heading>
                <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
                  We&apos;re finalising client-approved numbers and quotes for the
                  launch queue. In the meantime, you can talk to the founder
                  directly — every project Bhavesh runs starts the same way.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── Founder banner ──────────────────────────────────────────── */}
        <TalkToFounder
          variant="full"
          theme="light"
          eyebrow="See yourself in one of these stories?"
        />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}

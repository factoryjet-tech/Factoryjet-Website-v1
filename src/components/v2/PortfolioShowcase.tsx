/**
 * PortfolioShowcase — v2.0 case study card grid per factoryjet.DESIGN.md §5.9.
 *
 * Section 09 of the 15-section landing page system. Displays 3 portfolio
 * cards matched to the city's top industries. Each card shows a website
 * screenshot image, industry label, title, stat pair, and description.
 *
 * The assembler emits:
 *   <PortfolioShowcase
 *     eyebrow="RECENT WORK"
 *     headline="What Austin businesses look like after FactoryJet."
 *     cards={[
 *       { industry: "Health & Wellness", title: "Austin Health & Wellness Client",
 *         description: "...", imageSrc: "/images/us/austin/web-design/portfolio-1.webp",
 *         stat1: "+40% conversions", stat2: "< 1.5s load time" },
 *       ...
 *     ]}
 *     ctaHref="/portfolio"
 *     ctaLabel="View full portfolio"
 *   />
 *
 * Design spec:
 *   - bg-fj-cream
 *   - py-24 md:py-32
 *   - 3-column bento-style card grid at lg, stacked at mobile
 *   - Card: bg-fj-neutral-50 rounded-2xl, hover lifts with shadow
 *   - Image: aspect-video (4:3 via aspect-[4/3]) rounded-xl, object-cover
 *   - Industry pill: Geist Mono 10px, jet-blue bg-jet-blue/8 rounded-full px-3 py-1
 *   - Title: Clash Display 1.125rem, fj-ink
 *   - Stats: 2 inline pills — fj-neutral-100 bg, fj-neutral-700 text, Geist Mono 11px
 *   - Description: Inter 0.875rem, fj-neutral-600
 *   - CTA row: centered, ghost button → full portfolio
 *
 * Pure server component (no JS interactions on this component).
 */

import Link from 'next/link';

export interface PortfolioCard {
  industry: string;
  title: string;
  description: string;
  imageSrc: string;
  /** Short stat displayed as a pill, e.g. "+40% conversions" */
  stat1?: string;
  /** Short stat displayed as a pill, e.g. "< 1.5s load time" */
  stat2?: string;
}

export interface PortfolioShowcaseProps {
  eyebrow?: string;
  headline: string;
  cards: PortfolioCard[];
  ctaHref?: string;
  ctaLabel?: string;
}

export default function PortfolioShowcase({
  eyebrow,
  headline,
  cards,
  ctaHref = '/portfolio',
  ctaLabel = 'View full portfolio',
}: PortfolioShowcaseProps) {
  return (
    <section className="bg-fj-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[600px]">
            {eyebrow && (
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                {eyebrow}
              </p>
            )}
            <h2
              className={`fj-display font-medium text-fj-ink ${eyebrow ? 'mt-6' : ''}`}
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 3rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              {headline}
            </h2>
          </div>

          {/* Desktop CTA, hidden on mobile, shown at md */}
          {ctaHref && (
            <Link
              href={ctaHref}
              className="hidden md:inline-flex items-center gap-2 shrink-0 font-fj-body text-[0.9375rem] font-semibold text-fj-ink border-b-2 border-fj-ink pb-0.5 hover:text-[#F05A28] hover:border-[#F05A28] transition-colors"
            >
              {ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        {/* Card grid */}
        {/* <ul>/<li>: a portfolio is a list. Rulebook rule 10, median 110 <li>
            on AI-Overview-cited pages. Preflight zeroes list styling, so each
            <li> just becomes the grid cell. Ships on 59 pages. */}
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <li key={i}>
            <article
              className="group flex flex-col overflow-hidden rounded-2xl bg-fj-neutral-50 border border-fj-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.imageSrc}
                  alt={`${card.title} website screenshot`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ aspectRatio: '4 / 3' }}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={450}
                />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-4 p-5 lg:p-6">
                {/* Industry pill */}
                <span
                  className="self-start rounded-full font-fj-mono font-medium uppercase text-[#B23E13]"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    background: 'rgba(0, 82, 204, 0.08)',
                    padding: '4px 10px',
                  }}
                >
                  {card.industry}
                </span>

                {/* Title */}
                <h3
                  className="fj-display font-medium text-fj-ink"
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="flex-1 font-fj-body text-fj-neutral-600"
                  style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                >
                  {card.description}
                </p>

                {/* Stat pills */}
                {(card.stat1 || card.stat2) && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {card.stat1 && (
                      <span
                        className="rounded-md font-fj-mono font-medium text-fj-neutral-700"
                        style={{
                          fontSize: '11px',
                          letterSpacing: '0.04em',
                          background: 'rgba(15, 15, 18, 0.06)',
                          padding: '4px 8px',
                        }}
                      >
                        {card.stat1}
                      </span>
                    )}
                    {card.stat2 && (
                      <span
                        className="rounded-md font-fj-mono font-medium text-fj-neutral-700"
                        style={{
                          fontSize: '11px',
                          letterSpacing: '0.04em',
                          background: 'rgba(15, 15, 18, 0.06)',
                          padding: '4px 8px',
                        }}
                      >
                        {card.stat2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </article>
            </li>
          ))}
        </ul>

        {/* Mobile CTA, only shown on small screens */}
        {ctaHref && (
          <div className="mt-10 flex justify-center md:hidden">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 font-fj-body text-[0.9375rem] font-semibold text-fj-ink border-b-2 border-fj-ink pb-0.5 hover:text-[#F05A28] hover:border-[#F05A28] transition-colors"
            >
              {ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

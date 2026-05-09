import type { ReactNode } from 'react';
import MotionFadeUp from './MotionFadeUp';

/**
 * ServiceExplanation — v2.1 visual upgrade.
 *
 * Design language (Path A — CSS/JSX only):
 *   - Background: cream + dot grid (same system as CityContextSection /
 *     PricingTiers — no section-level bloom, content is the visual hero)
 *   - Headline: clamp(1.625rem, 3vw, 2.5rem) via direct <h2> — replaces
 *     <Heading size="h2"> which was oversizing at clamp(2rem, 4vw, 3.5rem)
 *   - Padding: py-10 md:py-14 — consistent with other v2.1 content sections
 *   - Bottom shimmer: blue gradient hairline separating from next section
 *   - DOM / layout logic unchanged (reverseOnDesktop, content-first order)
 *
 * Pure server component.
 */

export interface ServiceExplanationProps {
  eyebrow?: string;
  /** H2 content (plain text post M1.d.2 — italic-emphasis pattern dropped). */
  headline: ReactNode;
  /** Sub-headline at --type-lead size, capped to ~560px for measure. */
  lead: string;
  /** Optional follow-on body — typically a stack of `<p>` paragraphs.
   *  Caller controls structure; component supplies typography + spacing. */
  body?: ReactNode;
  /** Caller-supplied content for the 40% column (callout, image, stat). */
  rightSlot?: ReactNode;
  /** Default false → 60/40. True → 40/60 on lg+ only (mobile order
   *  remains content-first for AEO crawlers and a11y). */
  reverseOnDesktop?: boolean;
}

export default function ServiceExplanation({
  eyebrow,
  headline,
  lead,
  body,
  rightSlot,
  reverseOnDesktop = false,
}: ServiceExplanationProps) {
  /* 60/40 over a 12-col grid = 7/5. Order is toggled at lg+ only so
   * mobile keeps the content-first DOM order. */
  const contentClass = `lg:col-span-7 ${reverseOnDesktop ? 'lg:order-2' : 'lg:order-1'}`;
  const slotClass = `lg:col-span-5 ${reverseOnDesktop ? 'lg:order-1' : 'lg:order-2'} flex items-start lg:items-center`;

  return (
    <section
      className="relative py-10 md:py-14"
      style={{
        /*
         * Clean cream + dot grid — no bloom. The 60/40 editorial layout and
         * the inline content (chip strip, stat cards, pull-quote) carry all
         * the visual weight. A section-level bloom here would compete with
         * the caller's rightSlot rather than framing it.
         */
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.068) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      {/* Bottom shimmer separator */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,82,204,0.15) 30%, rgba(0,82,204,0.15) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Content (60%) */}
          <MotionFadeUp className={contentClass}>
            {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
            <h2
              className={`fj-display font-semibold text-fj-ink ${eyebrow ? 'mt-3' : ''}`}
              style={{
                fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
              }}
            >
              {headline}
            </h2>
            <p className="mt-5 max-w-[560px] font-fj-body text-[1.125rem] leading-[1.6] text-fj-neutral-600">
              {lead}
            </p>
            {body && (
              <div className="mt-6 max-w-[640px] space-y-4 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
                {body}
              </div>
            )}
          </MotionFadeUp>

          {/* Right slot (40%) */}
          {rightSlot && (
            <MotionFadeUp delay={0.15} className={slotClass}>
              {rightSlot}
            </MotionFadeUp>
          )}
        </div>
      </div>
    </section>
  );
}

export { ServiceExplanation };

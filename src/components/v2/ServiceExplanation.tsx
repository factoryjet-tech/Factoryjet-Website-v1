import type { ReactNode } from 'react';
import { Heading } from './Heading';

/**
 * ServiceExplanation — v2.0 60/40 asymmetric explanation block.
 *
 * Cream section. Editorial 60/40 split (lg+): text content on one side,
 * a caller-supplied `rightSlot` (callout, image, stat block) on the
 * other. `reverseOnDesktop` flips the layout to 40/60 without affecting
 * mobile DOM order — the content paragraph stays first in the document
 * so screen readers and crawlers always read the explanation before the
 * supporting visual.
 *
 * No motion, no parallax, no reveal-on-scroll. Static asymmetric
 * editorial — the §4.4 lane.
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
    <section className="bg-fj-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Content (60%) */}
          <div className={contentClass}>
            {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
            <Heading
              as="h2"
              size="h2"
              className={`text-fj-ink ${eyebrow ? 'mt-6' : ''}`}
            >
              {headline}
            </Heading>
            <p className="mt-6 max-w-[560px] font-fj-body text-[1.375rem] leading-[1.5] text-fj-neutral-600">
              {lead}
            </p>
            {body && (
              <div className="mt-6 max-w-[640px] space-y-4 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
                {body}
              </div>
            )}
          </div>

          {/* Right slot (40%) */}
          {rightSlot && <div className={slotClass}>{rightSlot}</div>}
        </div>
      </div>
    </section>
  );
}

export { ServiceExplanation };

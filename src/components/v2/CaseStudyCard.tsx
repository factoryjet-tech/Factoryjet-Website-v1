import type { ReactNode } from 'react';
import Link from 'next/link';
import { Heading } from './Heading';
import ImageBlock from './ImageBlock';

/**
 * CaseStudyCard — v2.0 portfolio-evidence card.
 *
 * Cream surface, 1px fj-neutral-200 border, 16px radius, 32px padding.
 * Optional ImageBlock at top (4/3 aspect by default). Eyebrow industry
 * tag, client name (Heading h3 size h4), one-line plain headline,
 * 2–3 sentence body, optional metrics row at the bottom in Clash
 * Display Jet Blue numerals.
 *
 * NO hover-lift, NO shadow change — restraint per §6.2. When `href` is
 * provided, the entire card becomes a link and a static "→" glyph
 * appears in the bottom-right.
 *
 * Pure server component.
 */

export interface CaseStudyMetric {
  /** Big number, e.g. "+210%", "60-day". */
  value: string;
  /** Short descriptive label below the value. */
  label: string;
}

export interface CaseStudyCardProps {
  clientName: string;
  /** Industry eyebrow rendered above the client name. */
  industry?: string;
  /** One-line outcome. Plain text post M1.d.2 — italic-emphasis pattern
   *  dropped. ReactNode kept for callers that need to embed inline links
   *  or other inline elements. */
  headline: ReactNode;
  /** 2–3 sentence body. */
  body: string;
  /** Optional 1–3 metrics shown in a row at the bottom. */
  metrics?: ReadonlyArray<CaseStudyMetric>;
  /** Optional cover image — rendered via ImageBlock at 4/3. */
  image?: { src: string; alt: string; width: number; height: number };
  /** When present, the entire card becomes a link. */
  href?: string;
  className?: string;
}

export default function CaseStudyCard({
  clientName,
  industry,
  headline,
  body,
  metrics,
  image,
  href,
  className = '',
}: CaseStudyCardProps) {
  const cardClasses = `flex flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-8 ${className}`.trim();

  const inner = (
    <>
      {image && (
        <div className="mb-8">
          <ImageBlock
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            aspectRatio="4/3"
          />
        </div>
      )}

      {industry && (
        <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.14em] text-fj-jet-blue">
          {industry}
        </p>
      )}

      <div className={industry ? 'mt-3' : ''}>
        <Heading as="h3" size="h4" className="text-fj-ink">
          {clientName}
        </Heading>
      </div>

      <p className="fj-display font-fj-display mt-4 text-[1.5rem] font-medium leading-[1.25] tracking-[-0.015em] text-fj-ink md:text-[1.75rem]">
        {headline}
      </p>

      <p className="mt-4 font-fj-body text-[15px] leading-[1.6] text-fj-neutral-600">
        {body}
      </p>

      {metrics && metrics.length > 0 && (
        <div className="mt-8 flex flex-grow flex-wrap items-end gap-x-8 gap-y-4 border-t border-fj-neutral-200 pt-6">
          {metrics.map((m, i) => (
            <div key={i}>
              <p className="fj-display font-fj-display text-[2rem] font-medium leading-none tracking-[-0.025em] text-fj-jet-blue">
                {m.value}
              </p>
              <p className="mt-2 font-fj-body text-[13px] leading-[1.5] text-fj-neutral-600">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {href && (
        <div className="mt-6 flex justify-end">
          <span
            aria-hidden
            className="font-fj-body text-[18px] font-medium text-fj-jet-blue"
          >
            →
          </span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {inner}
      </Link>
    );
  }

  return <article className={cardClasses}>{inner}</article>;
}

export { CaseStudyCard };

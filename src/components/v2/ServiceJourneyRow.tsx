import type { ReactNode } from 'react';
import { Heading } from './Heading';

/**
 * ServiceJourneyRow — v2.0 delivery-stage row.
 *
 * Loosely follows factoryjet.DESIGN.md §5.4 (Neurons-Lab "service journey
 * row" pattern: cream BG, large numerals in Fraunces, 1px neutral-200
 * connecting line, no animation, no marquee). The §5.4 spec describes a
 * row of SERVICE cards (each card a service offering); this component
 * repurposes the same visual lane for delivery-process STAGES (Discover →
 * Run). Same typography, same connecting-line treatment, different prop
 * shape — flagged as a deliberate semantic shift in the M1.c.2 PR.
 *
 * Layout: 5-col grid on lg, 2-col on md, 1-col on sm. The connecting line
 * is achieved via a `border-t` on each card; on lg the borders abut with
 * small grid-gap breaks, reading as a horizontally-segmented timeline.
 *
 * Pure server component.
 */

export interface ServiceJourneyStage {
  /** Two-character ordinal, e.g. "01", "02". */
  number: string;
  title: string;
  /** ~1–2 short sentences. */
  description: string;
}

/* Canonical 5-stage delivery journey. Exported so callers can spread +
 * override individual stages without re-stating the full sequence. */
export const DEFAULT_JOURNEY_STAGES: ReadonlyArray<ServiceJourneyStage> = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A 30-minute call. We map the problem, the constraints, and what success looks like.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Wireframes and a system in Figma. You sign off the surface before we touch code.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering against your stack. Daily commits, weekly demos, no black-box weeks.',
  },
  {
    number: '04',
    title: 'Ship',
    description:
      'Production launch with monitoring, analytics, and a recorded handover. No proposal-tag.',
  },
  {
    number: '05',
    title: 'Run',
    description:
      'Optional retainer for evolutions. Or hand back the keys — your codebase, your call.',
  },
];

export interface ServiceJourneyRowProps {
  eyebrow?: string;
  /** H2 content. Pass JSX with `<em>` for italic conviction words. */
  headline: ReactNode;
  lead?: string;
  /** Defaults to `DEFAULT_JOURNEY_STAGES` (5 stages). Caller may override. */
  stages?: ReadonlyArray<ServiceJourneyStage>;
}

export default function ServiceJourneyRow({
  eyebrow,
  headline,
  lead,
  stages = DEFAULT_JOURNEY_STAGES,
}: ServiceJourneyRowProps) {
  return (
    <section className="bg-fj-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        {/* Header */}
        <div className="max-w-[820px]">
          {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
          <Heading
            as="h2"
            size="h2"
            className={`text-fj-ink ${eyebrow ? 'mt-6' : ''}`}
          >
            {headline}
          </Heading>
          {lead && (
            <p className="mt-6 max-w-[640px] font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
              {lead}
            </p>
          )}
        </div>

        {/* Stages grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-5 lg:gap-6">
          {stages.map((stage, i) => (
            <div key={i} className="border-t border-fj-neutral-200 pt-6">
              <p className="fj-display font-fj-display text-[3rem] font-medium leading-none tracking-[-0.025em] text-fj-jet-blue md:text-[3.5rem]">
                {stage.number}
              </p>
              <Heading as="h3" size="h4" className="mt-4 text-fj-ink">
                {stage.title}
              </Heading>
              <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.55] text-fj-neutral-600">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ServiceJourneyRow };

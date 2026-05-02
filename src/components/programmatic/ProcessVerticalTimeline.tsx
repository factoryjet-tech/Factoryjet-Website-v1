export interface ProcessVerticalTimelineProps {
  eyebrow: string;
  headline: string;
  lead: string;
  steps: ReadonlyArray<{
    numeral: string; // "01" through "05"
    dayRange: string; // e.g. "DAY 1–3"
    title: string;
    body: string;
  }>; // Length must be 5
}

/**
 * Treatment 5 — `vertical_timeline_5step`. Process section.
 *
 * Pure Server Component. Off-white background (bg-soft) for visual
 * separation. Single centered column, 5 stacked steps with numerals
 * acting as the timeline rail. Numerals are rendered as text — not
 * filled circles — to match the restraint lane.
 */
export default function ProcessVerticalTimeline({
  eyebrow,
  headline,
  lead,
  steps,
}: ProcessVerticalTimelineProps) {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-section-y lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
            {eyebrow}
          </div>
          <h2 className="font-display text-display-md text-navy">{headline}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-slate">
            {lead}
          </p>
        </div>

        {/* Timeline */}
        <ol className="relative">
          {steps.map((step, i) => (
            <li
              key={step.numeral}
              className="relative grid grid-cols-[auto_1fr] gap-6 pb-12 last:pb-0"
            >
              {/* Numeral column with vertical rail */}
              <div className="relative flex flex-col items-center">
                <span className="font-display text-headline text-text-meta">
                  {step.numeral}
                </span>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="mt-3 block w-px flex-1 bg-border-soft"
                  />
                )}
              </div>

              {/* Step body */}
              <div className="pb-2">
                <div className="font-mono text-body-sm uppercase tracking-[0.08em] text-jet-blue">
                  {step.dayRange}
                </div>
                <h3 className="mt-2 font-sans text-headline text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-body text-slate">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

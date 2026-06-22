import { lookupIcon } from './lucideIconLookup';

export interface ServiceStepsHorizontalProps {
  eyebrow: string;
  headline: string;
  lead: string;
  steps: ReadonlyArray<{
    title: string;
    description: string;
    lucideIconName: string;
  }>; // 3–4
}

/**
 * Treatment 11 — `service_steps_horizontal`. Service explanation
 * (alternate, for short scannable explanations vs editorial prose).
 *
 * Pure Server Component. White background. Header above; below,
 * 3–4 step cards in a row (collapses to 2-col on md, 1-col on sm).
 * Each card: lucide icon, title, short description. No motion.
 *
 * Icon names resolve via the curated lucideIconLookup. Unknown
 * names fall back to Sparkles so missing icons render visibly
 * rather than crashing.
 */
export default function ServiceStepsHorizontal({
  eyebrow,
  headline,
  lead,
  steps,
}: ServiceStepsHorizontalProps) {
  // Number of columns at lg+ matches the step count (3 or 4).
  const lgCols = steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3';

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
            {eyebrow}
          </div>
          <h2 className="font-display text-display-md text-navy">{headline}</h2>
          <p className="mt-6 text-body-lg text-slate">{lead}</p>
        </div>

        {/* Step cards */}
        <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${lgCols}`}>
          {steps.map((step) => {
            const Icon = lookupIcon(step.lucideIconName);
            return (
              <div
                key={step.title}
                className="rounded-lg border border-border-soft bg-white p-6"
              >
                <Icon className="size-7 text-jet-blue" aria-hidden />
                <h3 className="mt-4 text-title font-medium text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-body text-slate">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

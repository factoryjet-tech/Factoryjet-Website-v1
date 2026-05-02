import { Fragment } from 'react';
import { RevealStagger } from './RevealOnScroll';

export interface TestimonialEntry {
  /** path to headshot WebP, or empty string for initials fallback */
  headshotPath: string;
  name: string;
  role: string;
  company: string;
  /** Optional company logo path — used as a small mark below the name */
  companyLogoPath?: string;
  /** Quote with **metric** markers for bold-blue emphasis */
  quote: string;
  permissionStatus: 'granted' | 'pending';
}

export interface TestimonialsNamedWithMetricsProps {
  eyebrow: string;
  headline: string;
  /** Always exactly 3. Only entries with permissionStatus === 'granted'
   *  are rendered. If filtered length < 3, the component renders
   *  nothing (graceful skip — sparse testimonial rows look weak). */
  testimonials: ReadonlyArray<TestimonialEntry>;
}

/**
 * `testimonials_v2_named_with_metrics` per spec §5.10.
 *
 * Pure Server Component. White background. 3 named-and-headshotted
 * testimonial cards with quoted outcomes that include a quantified
 * metric (rendered in bold Jet Blue inside the otherwise-italic
 * serif quote).
 *
 * Hard gate: only entries with permissionStatus === 'granted' are
 * rendered. If fewer than 3 are granted, the whole section ships
 * nothing — no sparse rows, no half-filled grids.
 *
 * Wrapped in <RevealStagger> for entry choreography.
 */
export default function TestimonialsNamedWithMetrics({
  eyebrow,
  headline,
  testimonials,
}: TestimonialsNamedWithMetricsProps) {
  // Hard gate: skip everything if we don't have 3 granted testimonials.
  const granted = testimonials.filter((t) => t.permissionStatus === 'granted');
  if (granted.length < 3) return null;

  // Render exactly the first 3 (defensive — pipeline should already cap).
  const visible = granted.slice(0, 3);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        {/* Header — centered */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
            {eyebrow}
          </div>
          <h2 className="font-display text-display-md text-navy">{headline}</h2>
        </div>

        {/* Cards */}
        <RevealStagger
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          staggerDelay={0.07}
        >
          {visible.map((t) => (
            <article
              key={`${t.name}-${t.company}`}
              className="flex flex-col rounded-xl border border-border-soft bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Headshot — 80×80 circular */}
              <div className="mb-6">
                <Headshot
                  headshotPath={t.headshotPath}
                  name={t.name}
                />
              </div>

              {/* Quote — body-lg serif italic with bold Jet Blue metric */}
              <blockquote className="font-serif text-body-lg italic text-navy">
                <QuoteWithMetric text={t.quote} />
              </blockquote>

              {/* Attribution */}
              <div className="mt-6">
                <div className="text-body font-medium text-navy">{t.name}</div>
                <div className="text-body-sm text-text-meta">
                  {t.role} · {t.company}
                </div>
                {t.companyLogoPath && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.companyLogoPath}
                    alt={`${t.company} logo`}
                    className="mt-3 h-5 w-auto opacity-70"
                  />
                )}
              </div>
            </article>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Headshot({
  headshotPath,
  name,
}: {
  headshotPath: string;
  name: string;
}) {
  if (headshotPath) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={headshotPath}
        alt={`${name}, headshot`}
        className="size-20 rounded-full object-cover"
      />
    );
  }
  // Initials fallback
  const initials = name
    .split(/\s+/)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
    .slice(0, 2);
  return (
    <div
      role="img"
      aria-label={`Initials avatar for ${name}`}
      className="flex size-20 items-center justify-center rounded-full bg-jet-blue font-display text-headline font-medium text-white"
    >
      {initials}
    </div>
  );
}

/**
 * Parses **markdown bold** markers in the quote and renders the
 * wrapped runs in not-italic semibold Jet Blue (visually breaking
 * out the metric the testimonial centres on).
 */
function QuoteWithMetric({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (
          part.startsWith('**') &&
          part.endsWith('**') &&
          part.length > 4
        ) {
          return (
            <strong
              key={i}
              className="font-semibold not-italic text-jet-blue"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

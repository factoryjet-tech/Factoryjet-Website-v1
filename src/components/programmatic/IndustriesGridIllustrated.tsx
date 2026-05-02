import Link from 'next/link';
import { ArrowRight, ImageIcon } from 'lucide-react';
import { RevealStagger } from './RevealOnScroll';

export interface IndustriesGridV2Props {
  eyebrow: string;
  headline: string;
  lead: string;
  sectors: ReadonlyArray<{
    slug: string;
    name: string;
    description: string; // ~60 words
    /** Pexels CDN URL or empty string for placeholder */
    photoUrl: string;
    /** e.g. "Photo by John Doe on Pexels" */
    photoCredit: string;
    photoAlt: string;
    linkText: string;
    linkHref: string;
  }>; // Length must be 6
}

// Backward-compat alias so older imports keep working until M4 cleanup.
export type IndustriesGridIllustratedProps = IndustriesGridV2Props;

/**
 * Industries v2 — `industries_v2_buyer_persona_grid` per spec §5.8.
 *
 * Filename kept as `IndustriesGridIllustrated.tsx` to avoid M1.5
 * import churn (rename deferred to a future cleanup pass — slug
 * in spec is already `industries_v2_buyer_persona_grid`).
 *
 * 3×2 grid of sector cards. Each card has a 16:10 buyer-persona
 * photograph at top with a dark gradient overlay and the industry
 * name overlaid in serif. Below: 60-word description, in-card link,
 * photo credit. Empty `photoUrl` falls back to the M1 placeholder
 * treatment (icon + "illustration pending") so the grid renders
 * cleanly while M3 is still wiring Pexels.
 *
 * Wrapped in <RevealStagger> for entry choreography.
 * Photo zooms slightly on hover via inner overflow-hidden + scale.
 */
export default function IndustriesGridIllustrated({
  eyebrow,
  headline,
  lead,
  sectors,
}: IndustriesGridV2Props) {
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

        {/* Sector grid */}
        <RevealStagger
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
        >
          {sectors.map((sector) => (
            <article
              key={sector.slug}
              className="group flex flex-col overflow-hidden rounded-lg border border-border-soft bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Photo slot — 16:10 with overlay + sector name */}
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft">
                {sector.photoUrl ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={sector.photoUrl}
                      alt={sector.photoAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    {/* Dark gradient overlay (the one permitted dark gradient
                     * per spec §4 — bottom-anchored, fades to transparent) */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                    />
                    {/* Sector name overlaid bottom-left */}
                    <h3 className="absolute bottom-4 left-4 font-display text-2xl font-medium text-white drop-shadow-sm">
                      {sector.name}
                    </h3>
                  </>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-bg-soft">
                    <ImageIcon className="size-8 text-text-meta" aria-hidden />
                    <span className="mt-2 text-body-sm text-text-meta">
                      illustration pending
                    </span>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-6">
                {/* When no photo, show name in body since overlay version
                 * isn't present */}
                {!sector.photoUrl && (
                  <h3 className="mb-2 text-title font-medium text-navy">
                    {sector.name}
                  </h3>
                )}

                <p className="text-body text-slate">{sector.description}</p>

                <Link
                  href={sector.linkHref}
                  className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-medium text-jet-blue hover:text-primary-dark"
                >
                  <span>{sector.linkText}</span>
                  <ArrowRight className="size-4" aria-hidden />
                </Link>

                {/* Photo credit at very bottom */}
                {sector.photoUrl && sector.photoCredit && (
                  <small className="mt-auto pt-4 text-body-sm text-text-meta">
                    {sector.photoCredit}
                  </small>
                )}
              </div>
            </article>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

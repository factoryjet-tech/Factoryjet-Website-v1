import Link from 'next/link';
import { ArrowRight, ImageIcon } from 'lucide-react';

export interface IndustriesGridIllustratedProps {
  eyebrow: string;
  headline: string;
  lead: string;
  sectors: ReadonlyArray<{
    slug: string;
    name: string;
    description: string; // ~60 words
    linkText: string;
    linkHref: string;
    illustrationPath: string; // "" for M1 placeholder; M3 will populate
  }>; // Length must be 6
}

/**
 * Treatment 6 — `industries_grid_3x2_illustrated`. Industries section.
 *
 * Pure Server Component. White background. 3×2 grid of sector cards
 * (collapses to 2-col on md, 1-col on sm). Each card has a 4:3
 * illustration slot — for M1, an empty `illustrationPath` renders a
 * placeholder block with an icon + "illustration pending" caption.
 * M3 wires real assets.
 */
export default function IndustriesGridIllustrated({
  eyebrow,
  headline,
  lead,
  sectors,
}: IndustriesGridIllustratedProps) {
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <article
              key={sector.slug}
              className="rounded-lg border border-border-soft bg-white p-6"
            >
              {/* Illustration slot — 4:3 */}
              <div className="mb-4 aspect-[4/3] overflow-hidden rounded-md">
                {sector.illustrationPath ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={sector.illustrationPath}
                    alt=""
                    aria-hidden
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-bg-soft">
                    <ImageIcon className="size-8 text-text-meta" aria-hidden />
                    <span className="mt-2 text-body-sm text-text-meta">
                      illustration pending
                    </span>
                  </div>
                )}
              </div>

              {/* Sector content */}
              <h3 className="text-title font-medium text-navy">{sector.name}</h3>
              <p className="mt-2 text-body text-slate">{sector.description}</p>

              {/* In-card link */}
              <Link
                href={sector.linkHref}
                className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-medium text-jet-blue hover:text-primary-dark"
              >
                <span>{sector.linkText}</span>
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

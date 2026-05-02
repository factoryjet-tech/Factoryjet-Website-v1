import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface CityContextStatStripProps {
  /** Uppercase eyebrow chip text */
  eyebrow: string;
  /** Section H2 — 5–8 words */
  headline: string;
  /** 1–2 sentence lead paragraph */
  leadParagraph: string;
  /** Exactly 3 stats */
  stats: ReadonlyArray<{
    value: string; // e.g. "9.0M"
    label: string; // e.g. "London population (2021)"
    sourceUrl: string; // ONS / Companies House / etc.
    sourceLabel: string; // e.g. "ons.gov.uk"
  }>;
}

/**
 * Treatment 2 — `stat_strip_3up_with_lead`. City context section.
 *
 * Pure Server Component. White background, asymmetric 5/12 + 7/12
 * grid: lead column on the left, three stat cards on the right.
 * Stacks vertically on mobile.
 */
export default function CityContextStatStrip({
  eyebrow,
  headline,
  leadParagraph,
  stats,
}: CityContextStatStripProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — lead (5/12) */}
          <div className="lg:col-span-5">
            <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
              {eyebrow}
            </div>
            <h2 className="font-display text-display-md text-navy">
              {headline}
            </h2>
            <p className="mt-6 text-body-lg text-slate">{leadParagraph}</p>
          </div>

          {/* Right — 3 stat cards (7/12) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border-soft bg-white p-6"
                >
                  <div className="font-display text-display-md font-medium text-navy">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-body text-navy">{stat.label}</div>
                  <Link
                    href={stat.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-body-sm text-text-meta hover:text-navy"
                  >
                    <span>{stat.sourceLabel}</span>
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

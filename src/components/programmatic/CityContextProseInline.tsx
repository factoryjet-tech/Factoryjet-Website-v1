import Link from 'next/link';

export interface CityContextProseInlineProps {
  eyebrow: string;
  headline: string;
  paragraphs: ReadonlyArray<string>; // 3–4
  inlineStats: ReadonlyArray<{
    value: string;
    whatItMeans: string;
    sourceUrl: string;
  }>; // 2–3
}

/**
 * Treatment 10 — `prose_with_inline_stats`. City context (alternate
 * for cities where the stat-strip lacks 3 strong proof points).
 *
 * Pure Server Component. Off-white background (bg-soft). Single
 * centered column. Stats interleave with paragraphs as their own
 * centered visual rhythm blocks (paragraph → stat → paragraph →
 * stat → paragraph). If there are more paragraphs than stats, the
 * remaining paragraphs render sequentially.
 */
export default function CityContextProseInline({
  eyebrow,
  headline,
  paragraphs,
  inlineStats,
}: CityContextProseInlineProps) {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-3xl px-6 py-section-y lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
            {eyebrow}
          </div>
          <h2 className="font-display text-display-md text-navy">{headline}</h2>
        </div>

        {/* Interleaved paragraphs + stats */}
        <div className="flex flex-col">
          {paragraphs.map((para, i) => {
            const stat = inlineStats[i];
            return (
              <div key={i}>
                <p className="text-body-lg text-slate">{para}</p>
                {stat ? (
                  <p className="my-6 text-center">
                    <strong className="font-semibold text-navy">
                      {stat.value}
                    </strong>
                    <span className="text-slate"> — {stat.whatItMeans}</span>
                    <Link
                      href={stat.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1"
                    >
                      <sup className="font-mono text-mono-sm text-text-meta hover:text-navy">
                        source
                      </sup>
                    </Link>
                  </p>
                ) : (
                  i < paragraphs.length - 1 && <div className="mt-6" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

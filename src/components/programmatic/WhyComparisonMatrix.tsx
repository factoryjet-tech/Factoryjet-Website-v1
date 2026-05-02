import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { lookupIcon } from './lucideIconLookup';
import { RevealOnScroll, RevealStagger } from './RevealOnScroll';

export interface WhyComparisonMatrixV2Props {
  eyebrow: string;
  headline: string;
  lead: string;
  /**
   * NEW in v2 — case study tiles rendered ABOVE the matrix.
   * If undefined or empty, only the matrix + advantage tiles render
   * (M1 layout). If exactly 3 entries provided, render a 3-up tile
   * row using granted client artefacts.
   */
  caseStudyTiles?: ReadonlyArray<{
    clientLogoPath: string;
    clientName: string;
    industryTag: string;
    /** One sentence with a metric, e.g. "Lifted qualified leads 47% in Q1." */
    outcomeStatement: string;
    storyHref: string;
  }>;
  /**
   * Per-row label is a feature/dimension (Pricing, Turnaround, …),
   * NOT an agency. The matrix is dimensions × agencies, and the
   * dimension is the row label.
   */
  comparisonRows: ReadonlyArray<{
    agencyName: string; // dimension label, e.g. "Pricing"
    theirOffering: string;
    ourOffering: string;
    ourAdvantage: string; // optional emphasis text rendered after ourOffering
  }>;
  /**
   * Optional per-column header for the "their" agency name. If absent
   * the matrix renders a single "Local London agency" column —
   * deliberately generic, never a real agency name. Future variants
   * may supply 2–3 named columns when the city/service warrants it,
   * but we publish no specific pricing claims about named competitors.
   */
  competitorColumnHeaders?: ReadonlyArray<string>;
  advantageTiles: ReadonlyArray<{
    title: string;
    body: string;
    lucideIconName: string; // e.g. "Zap"
  }>; // length 3
}

// Backward-compat alias so older imports keep working until M4 cleanup.
export type WhyComparisonMatrixProps = WhyComparisonMatrixV2Props;

/**
 * Treatment 4 — `comparison_matrix_with_advantage_tiles`. Why
 * FactoryJet (default).
 *
 * Pure Server Component. White background. Two artefacts:
 *   1. A semantic <table> matrix comparing FactoryJet to N local
 *      agencies across M dimensions. The FactoryJet column carries
 *      a Jet Blue left-border accent.
 *   2. A 3-tile advantage row below the table — lucide icon + title
 *      + body, drawn from a curated icon palette (lucideIconLookup).
 *
 * The `comparisonRows.agencyName` field is interpreted as the
 * dimension/feature label (Pricing, Turnaround, etc.) — NOT an
 * agency name. The brief flagged this naming as ambiguous; this
 * component takes the dimension reading. If pipeline copy needs
 * the other reading, rename via mock data.
 */
export default function WhyComparisonMatrix({
  eyebrow,
  headline,
  lead,
  caseStudyTiles,
  comparisonRows,
  competitorColumnHeaders = ['Local London agency'],
  advantageTiles,
}: WhyComparisonMatrixV2Props) {
  const hasCaseStudies = caseStudyTiles && caseStudyTiles.length === 3;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
            {eyebrow}
          </div>
          <h2 className="font-display text-display-md text-navy">{headline}</h2>
          <p className="mt-6 text-body-lg text-slate">{lead}</p>
        </div>

        {/* Case study tile row — v2 only, rendered when 3 tiles provided */}
        {hasCaseStudies && (
          <RevealStagger
            className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
            staggerDelay={0.06}
          >
            {caseStudyTiles!.map((tile) => (
              <article
                key={tile.clientName}
                className="flex flex-col rounded-lg border border-border-soft bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Client logo */}
                <div className="h-8">
                  {tile.clientLogoPath ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={tile.clientLogoPath}
                      alt={`${tile.clientName} logo`}
                      className="h-8 w-auto"
                    />
                  ) : (
                    <span className="font-display text-base font-semibold text-navy">
                      {tile.clientName}
                    </span>
                  )}
                </div>

                <p className="mt-6 font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
                  {tile.industryTag}
                </p>
                <p className="mt-2 text-body text-navy">
                  {tile.outcomeStatement}
                </p>

                <Link
                  href={tile.storyHref}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-body-sm font-medium text-jet-blue hover:text-primary-dark"
                >
                  <span>Read the story</span>
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </article>
            ))}
          </RevealStagger>
        )}

        {/* Matrix */}
        <RevealOnScroll className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-border-soft">
                <th className="p-4 text-left text-body-sm font-medium text-text-meta">
                  &nbsp;
                </th>
                <th className="border-l-4 border-jet-blue p-4 text-left text-body-sm font-medium text-navy">
                  FactoryJet
                </th>
                {competitorColumnHeaders.map((h) => (
                  <th
                    key={h}
                    className="p-4 text-left text-body-sm font-medium text-text-meta"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.agencyName} className="border-b border-border-soft">
                  <td className="p-4 align-top text-body font-medium text-navy">
                    {row.agencyName}
                  </td>
                  <td className="border-l-4 border-jet-blue p-4 align-top text-body text-navy">
                    <span>{row.ourOffering}</span>
                    {row.ourAdvantage ? (
                      <span className="mt-1 block text-body-sm font-medium text-jet-blue">
                        {row.ourAdvantage}
                      </span>
                    ) : null}
                  </td>
                  {competitorColumnHeaders.map((h) => (
                    <td
                      key={`${row.agencyName}-${h}`}
                      className="p-4 align-top text-body text-slate"
                    >
                      {row.theirOffering}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </RevealOnScroll>

        {/* Advantage tiles */}
        <RevealStagger
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
          staggerDelay={0.06}
        >
          {advantageTiles.map((tile) => {
            const Icon = lookupIcon(tile.lucideIconName);
            return (
              <div
                key={tile.title}
                className="rounded-lg border border-border-soft bg-white p-6"
              >
                <Icon className="size-6 text-jet-blue" aria-hidden />
                <h3 className="mt-3 text-title font-medium text-navy">
                  {tile.title}
                </h3>
                <p className="mt-2 text-body text-slate">{tile.body}</p>
              </div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

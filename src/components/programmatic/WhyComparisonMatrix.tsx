import { lookupIcon } from './lucideIconLookup';

export interface WhyComparisonMatrixProps {
  eyebrow: string;
  headline: string;
  lead: string;
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
   * the matrix renders a single "Local agency" column. M1 mock data
   * sets a fixed length-1 array; future variants can supply 2–3.
   */
  competitorColumnHeaders?: ReadonlyArray<string>;
  advantageTiles: ReadonlyArray<{
    title: string;
    body: string;
    lucideIconName: string; // e.g. "Zap"
  }>; // length 3
}

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
  comparisonRows,
  competitorColumnHeaders = ['Local agency'],
  advantageTiles,
}: WhyComparisonMatrixProps) {
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

        {/* Matrix */}
        <div className="overflow-x-auto">
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
        </div>

        {/* Advantage tiles */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}

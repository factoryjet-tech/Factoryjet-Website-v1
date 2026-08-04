import type { ReactNode } from 'react';
import { Heading } from './Heading';
import MotionFadeUp from './MotionFadeUp';

/**
 * ComparisonTable — v2.0 comparison block per factoryjet.DESIGN.md §5.6.
 *
 * Cream section. Semantic <table> with <thead>/<tbody>/<th scope=...>.
 * The FactoryJet column (declared via `isFactoryJet: true`) sits on a
 * jet-blue-tint background and renders its values in semibold ink — the
 * single piece of visual emphasis. No gradients, no glow, no shadow stack.
 *
 * Mobile: the inner table forces a `min-w-[720px]` and the outer wrapper
 * is `overflow-x-auto`; the feature-label column is `sticky left-0` over
 * a cream background so labels stay visible while users scroll the
 * comparison columns horizontally — per §5.6.
 *
 * SVG icons (NO emoji per §5.6): a `<CompareIcon kind="yes|partial|no">`
 * helper is exported from this module so callers can drop icons directly
 * into a `row.values` array. `kind="yes"` renders Jet Blue; `partial`
 * renders neutral-400; `no` renders neutral-200.
 *
 * Pure server component.
 */

export interface ComparisonColumn {
  label: string;
  /** When true, the column gets the visual emphasis treatment
   *  (jet-blue-tint background + jet-blue header + bolder cell weight). */
  isFactoryJet?: boolean;
}

export interface ComparisonRow {
  /** Feature/dimension label rendered as the row header (sticky on
   *  horizontal scroll). */
  feature: string;
  /** Cell values aligned by index to `columns`. ReactNode so callers can
   *  pass `<CompareIcon kind="yes" />` or plain text. */
  values: ReadonlyArray<ReactNode>;
}

export interface ComparisonTableProps {
  eyebrow?: string;
  /** H2 content (plain text post M1.d.2 — italic-emphasis pattern dropped). */
  headline: ReactNode;
  lead?: string;
  /** Optional pull-quote panel rendered to the right of the headline on lg+
   *  viewports. When provided, the intro switches from single-col to a 7/5
   *  asymmetric grid. */
  pullQuote?: {
    /** Large display stat or short quote fragment (e.g. "3–5×"). */
    stat: string;
    /** Caption beneath the stat (e.g. "cheaper than a London agency"). */
    caption: string;
  };
  /** Typically 2–3 columns; spec §5.6 envisions up to 5. The FactoryJet
   *  column should sit leftmost per spec — caller orders the array. */
  columns: ReadonlyArray<ComparisonColumn>;
  /** Rows; each `values.length` should equal `columns.length`. */
  rows: ReadonlyArray<ComparisonRow>;
  /** Optional small line below the table (caveats, sources, footnote). */
  footer?: ReactNode;
}

const HEADER_TYPE =
  'font-fj-body text-[0.8125rem] leading-[1.4] font-semibold tracking-[0.12em] uppercase text-left px-4 py-4';
const ROW_LABEL_TYPE =
  'font-fj-body text-[1.0625rem] leading-[1.5] font-medium text-fj-ink text-left align-top px-4 py-5';
const CELL_BASE = 'font-fj-body text-[0.9375rem] leading-[1.55] text-fj-ink align-top px-4 py-5';

export default function ComparisonTable({
  eyebrow,
  headline,
  lead,
  pullQuote,
  columns,
  rows,
  footer,
}: ComparisonTableProps) {
  const hasPullQuote = !!pullQuote;

  return (
    <section className="bg-fj-cream py-14 md:py-20 overflow-x-clip">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        {/* Header, 2-col with pull-quote when provided, single-col otherwise */}
        {hasPullQuote ? (
          <MotionFadeUp className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: eyebrow + headline + lead */}
            <div className="lg:col-span-7">
              {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
              <Heading
                as="h2"
                size="h2"
                className={`text-fj-ink ${eyebrow ? 'mt-6' : ''}`}
              >
                {headline}
              </Heading>
              {lead && (
                <p className="mt-6 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
                  {lead}
                </p>
              )}
            </div>
            {/* Right: pull-quote panel */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl bg-white p-8 md:p-10 overflow-hidden"
                style={{
                  border: '1px solid #E5E7EB',
                  borderTopWidth: '3px',
                  borderTopStyle: 'solid',
                  borderTopColor: '#F05A28',
                }}
              >
                <div className="mb-5 h-[3px] w-10 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="font-fj-display fj-display font-bold text-[#F05A28] leading-none tracking-[-0.02em]"
                  style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word',
                  }}
                >
                  {pullQuote.stat}
                </p>
                <p className="mt-4 font-fj-body text-[1rem] leading-[1.55] text-fj-neutral-600">
                  {pullQuote.caption}
                </p>
              </div>
            </div>
          </MotionFadeUp>
        ) : (
          <MotionFadeUp className="max-w-[820px]">
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
          </MotionFadeUp>
        )}

        {/* Table wrapper, horizontal scroll on narrow viewports */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-10 w-[180px] bg-fj-cream"
                  aria-hidden
                />
                {columns.map((col) => (
                  <th
                    key={col.label}
                    scope="col"
                    className={`${HEADER_TYPE} ${
                      col.isFactoryJet
                        ? 'bg-[#FFF3EE] text-[#B23E13]'
                        : 'text-fj-neutral-600'
                    }`}
                    style={col.isFactoryJet ? { borderTopWidth: '3px', borderTopStyle: 'solid', borderTopColor: '#F05A28' } : undefined}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-t border-fj-neutral-200 transition-colors hover:bg-fj-neutral-50/40">
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 bg-fj-cream ${ROW_LABEL_TYPE}`}
                  >
                    {row.feature}
                  </th>
                  {row.values.map((value, ci) => {
                    const col = columns[ci];
                    const cellClass = col?.isFactoryJet
                      ? `${CELL_BASE} bg-[#FFF3EE] font-semibold`
                      : CELL_BASE;
                    return (
                      <td key={ci} className={cellClass}>
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        {footer && (
          <div className="mt-6 font-fj-body text-[0.8125rem] text-fj-neutral-400">
            {footer}
          </div>
        )}
      </div>
    </section>
  );
}

export { ComparisonTable };

/* ------------------------------------------------------------------ */
/*   CompareIcon — SVG glyph helper for row values. NO emoji per §5.6. */
/* ------------------------------------------------------------------ */

export interface CompareIconProps {
  kind: 'yes' | 'partial' | 'no';
  /** Visually-hidden label override; defaults to a sensible English label. */
  label?: string;
}

const ICON_COLOR: Record<CompareIconProps['kind'], string> = {
  yes: 'text-[#F05A28]',
  partial: 'text-fj-neutral-400',
  no: 'text-fj-neutral-200',
};

const ICON_LABEL: Record<CompareIconProps['kind'], string> = {
  yes: 'Yes',
  partial: 'Partial',
  no: 'No',
};

export function CompareIcon({ kind, label }: CompareIconProps) {
  const visualLabel = label ?? ICON_LABEL[kind];
  return (
    <span className={`relative inline-flex items-center ${ICON_COLOR[kind]}`}>
      {kind === 'yes' && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3.5 9.5L7.5 13.5L14.5 5.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {kind === 'partial' && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          aria-hidden="true"
        >
          <circle
            cx="9"
            cy="9"
            r="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M9 2 A 7 7 0 0 1 9 16 Z" fill="currentColor" />
        </svg>
      )}
      {kind === 'no' && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 5L13 13M13 5L5 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
      <span className="sr-only">{visualLabel}</span>
    </span>
  );
}

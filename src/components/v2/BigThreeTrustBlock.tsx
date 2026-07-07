import Image from 'next/image';
import Link from 'next/link';

/**
 * BigThreeTrustBlock — v2.2 Option B asymmetric redesign.
 *
 * Design language:
 *   - Background: cream #FAFAF7 — matches Hero and page base tone
 *   - Orange top/bottom borders (1.5px rgba(240,90,40,0.22)) as section delimiter
 *   - Asymmetric split: left 57% hero number panel / right 43% two-stat stack
 *   - Thin orange vertical divider between panels (desktop only)
 *   - Left: 523+ in orange at 4rem+, keyword-rich description, orange CTA pill
 *   - Right: 7-day delivery + "Fixed Price" stat, each with orange accent bar
 *   - All accent color (#F05A28) applied via inline style — no Tailwind palette entry
 *   - No year references. High-volume keywords embedded in copy.
 *
 * Pure server component.
 */

export interface BigThreeTrustBlockProps {
  eyebrow?: string;
  headline?: string;
  /**
   * Render mode.
   *  - undefined / 'showcase' (default): the hardcoded US stat block
   *    (523+, Fixed Price, 7-day guarantee). Used by ~105 pages — unchanged.
   *  - 'statement': a clean cream band rendering only the eyebrow + headline
   *    you pass. Used by the India SEO pages (no US price, no /contact CTA).
   */
  variant?: 'showcase' | 'statement';
  /** Unused in Option B layout — kept for API compatibility */
  cityCount?: { value: string; label: string; source?: string };
  /** Optional illustration image paths for the three stats */
  illustrations?: {
    businesses?: string;
    delivery?: string;
    savings?: string;
  };
}

export default function BigThreeTrustBlock({
  eyebrow,
  headline,
  variant,
  illustrations,
}: BigThreeTrustBlockProps) {
  if (variant === 'statement') {
    return (
      <section
        style={{
          backgroundColor: '#FAFAF7',
          borderTop: '1.5px solid rgba(240,90,40,0.22)',
          borderBottom: '1.5px solid rgba(240,90,40,0.22)',
        }}
        className="py-12 md:py-16"
      >
        <div className="mx-auto max-w-[900px] px-6 md:px-8 text-center">
          {eyebrow && (
            <p
              className="font-fj-mono font-semibold uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}
            >
              {eyebrow}
            </p>
          )}
          {headline && (
            <h2
              className="fj-display mt-3 font-semibold text-fj-ink"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              {headline}
            </h2>
          )}
        </div>
      </section>
    );
  }
  return (
    <section
      style={{
        backgroundColor: '#FAFAF7',
        borderTop: '1.5px solid rgba(240,90,40,0.22)',
        borderBottom: '1.5px solid rgba(240,90,40,0.22)',
      }}
      className="py-10 md:py-14"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">

        {/* Asymmetric grid: left 57 / divider 1px / right 43 */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[57fr_1px_43fr] lg:gap-0 lg:items-center">

          {/* ── Left panel ─────────────────────────────────────────────── */}
          <div className="lg:pr-14">

            {/* Eyebrow */}
            {eyebrow && (
              <p
                className="font-fj-mono font-semibold uppercase mb-4"
                style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}
              >
                {eyebrow}
              </p>
            )}

            {/* Illustration — businesses stat */}
            {illustrations?.businesses && (
              <div className="mb-4">
                <Image
                  src={illustrations.businesses}
                  alt=""
                  width={56}
                  height={56}
                  aria-hidden="true"
                  className="opacity-85"
                />
              </div>
            )}

            {/* Hero number */}
            <p
              className="fj-display font-bold"
              style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: '#F05A28',
              }}
            >
              523+
            </p>

            {/* Keyword-rich description */}
            <p
              className="mt-4 font-fj-body text-fj-neutral-600"
              style={{ fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '420px' }}
            >
              Websites designed and built for US small businesses, Shopify stores,
              B2B companies, and DTC brands. Affordable web design services —
              at a fixed, transparent price, your codebase delivered in full,
              and a 7-day delivery guarantee.
            </p>

            {/* CTA pill */}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full font-fj-body font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: '#F05A28',
                padding: '10px 22px',
                fontSize: '0.9rem',
                boxShadow: '0 4px 18px rgba(240,90,40,0.30)',
              }}
            >
              Book a strategy call
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-full"
                style={{ background: 'rgba(255,255,255,0.22)' }}
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* ── Vertical divider — desktop only ───────────────────────── */}
          <div
            className="hidden lg:block self-stretch"
            style={{ background: 'rgba(240,90,40,0.20)' }}
            aria-hidden="true"
          />

          {/* ── Right panel — two stacked stats ───────────────────────── */}
          <div className="lg:pl-14 flex flex-col gap-8">

            {/* Stat 1 — 7-day delivery */}
            <div>
              {illustrations?.delivery && (
                <div className="mb-3">
                  <Image
                    src={illustrations.delivery}
                    alt=""
                    width={48}
                    height={48}
                    aria-hidden="true"
                    className="opacity-85"
                  />
                </div>
              )}
              <div
                aria-hidden="true"
                style={{ width: 28, height: 3, background: '#F05A28', borderRadius: 2, marginBottom: 12 }}
              />
              <p
                className="fj-display font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
              >
                7 Days
              </p>
              <p
                className="mt-2 font-fj-body font-semibold text-fj-ink"
                style={{ fontSize: '0.9375rem' }}
              >
                Website Delivery Guarantee
              </p>
              <p
                className="mt-1.5 font-fj-body text-fj-neutral-500"
                style={{ fontSize: '0.8125rem', lineHeight: 1.55, fontWeight: 500 }}
              >
                Custom web design, live in 7 days — or you don&apos;t pay
              </p>
            </div>

            {/* Thin horizontal divider between stats */}
            <div
              aria-hidden="true"
              style={{ height: '1px', background: 'rgba(240,90,40,0.16)', borderRadius: 1 }}
            />

            {/* Stat 2 — Fixed Price fixed price */}
            <div>
              {illustrations?.savings && (
                <div className="mb-3">
                  <Image
                    src={illustrations.savings}
                    alt=""
                    width={48}
                    height={48}
                    aria-hidden="true"
                    className="opacity-85"
                  />
                </div>
              )}
              <div
                aria-hidden="true"
                style={{ width: 28, height: 3, background: '#F05A28', borderRadius: 2, marginBottom: 12 }}
              />
              <p
                className="fj-display font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
              >
                Fixed Price
              </p>
              <p
                className="mt-2 font-fj-body font-semibold text-fj-ink"
                style={{ fontSize: '0.9375rem' }}
              >
                Confirmed Upfront
              </p>
              <p
                className="mt-1.5 font-fj-body text-fj-neutral-500"
                style={{ fontSize: '0.8125rem', lineHeight: 1.55, fontWeight: 500 }}
              >
                One quote before we start — no hourly billing, no scope surprises
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

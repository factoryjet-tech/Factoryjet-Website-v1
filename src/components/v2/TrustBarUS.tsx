/**
 * TrustBarUS — slim social-proof strip that sits directly under the /us hero.
 *
 * Replaces the generic LogoBar marquee on the homepage with a static, legible
 * row of REAL client builds + the Clutch rating. Static (not a fast marquee) so
 * the proof is actually readable; names are real and verifiable. Navy carries
 * the trust weight, orange the rating stars — matching the new hero treatment.
 *
 * Layout note: client names are spaced wordmarks (no separator dots) so the row
 * wraps cleanly at any width without orphaning a leading "·". Label sits above
 * the names; the Clutch pill stays right-aligned (stacks on mobile).
 *
 * Pure server component.
 */

const CLIENTS = ['Belle Maison', 'Impulse Branding', 'Formative Concepts', 'Shevvaa', 'RDB Travels'];

export interface TrustBarUSProps {
  className?: string;
}

export default function TrustBarUS({ className = '' }: TrustBarUSProps) {
  return (
    <section
      className={className}
      style={{ borderTop: '1px solid rgba(15,33,56,0.10)', borderBottom: '1px solid rgba(15,33,56,0.10)', background: '#FFFFFF' }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8 py-5 md:py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
          {/* Left: label above a clean wordmark row */}
          <div className="min-w-0">
            <p
              className="font-fj-mono"
              style={{ fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#103A5E', fontWeight: 600, marginBottom: '10px' }}
            >
              Real client builds you can check yourself
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {CLIENTS.map((c) => (
                <span
                  key={c}
                  className="font-fj-display"
                  style={{ fontWeight: 700, fontSize: '15px', color: '#33506b', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Clutch rating pill (navy) */}
          <div
            className="inline-flex shrink-0 items-center gap-2.5 self-start md:self-auto"
            style={{ background: '#103A5E', borderRadius: 12, padding: '9px 14px' }}
          >
            <span aria-hidden="true" style={{ color: '#F05A28', fontSize: 13, letterSpacing: 1 }}>★★★★★</span>
            <span>
              <span className="font-fj-display" style={{ display: 'block', fontWeight: 700, fontSize: 13, color: '#fff', lineHeight: 1.1 }}>
                4.9 on Clutch
              </span>
              <span style={{ display: 'block', fontSize: '10.5px', color: 'rgba(255,255,255,0.72)', marginTop: 1 }}>
                150+ verified reviews
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import ModalCTAButton from './ModalCTAButton';

/**
 * GetFreeQuoteCTA — compact India-market quote CTA section.
 *
 * Replaces the PricingTiers section site-wide (2026-06-08 pricing removal).
 * Opens ContactFormModal v3 (region='in') — only Name + Email required,
 * all other fields optional.
 *
 * Design: cream dot-grid bg (same system as rest of v2), centred layout,
 * orange primary CTA, trust chips row beneath.
 * Pure server component (ModalCTAButton is the client leaf).
 */

export interface GetFreeQuoteCTAProps {
  /** Override headline. Defaults to generic India-market copy. */
  headline?: string;
  /** Override sub copy. */
  sub?: string;
}

export default function GetFreeQuoteCTA({
  headline = 'Get Your Free Project Quote',
  sub = 'Tell us what you need, we\'ll send a timeline, scope, and fixed-price estimate within 24 hours. No commitment. No agency jargon.',
}: GetFreeQuoteCTAProps) {
  return (
    <section
      className="py-14 md:py-20"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8 text-center">

        {/* Eyebrow */}
        <p className="fj-eyebrow">FREE QUOTE, NO COMMITMENT</p>

        {/* Headline */}
        <h2
          className="fj-display font-semibold text-fj-ink mt-3"
          style={{
            fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
          }}
        >
          {headline}
        </h2>

        {/* Sub copy */}
        <p
          className="mt-4 font-fj-body text-fj-neutral-600 mx-auto"
          style={{ fontSize: '1rem', lineHeight: 1.65, maxWidth: '520px' }}
        >
          {sub}
        </p>

        {/* CTA */}
        <div className="mt-8">
          <ModalCTAButton
            label="Get Free Quote"
            region="in"
            btnVariant="primary-light"
            className="inline-flex px-10 py-4 text-base"
          />
        </div>

        {/* Trust chips */}
        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-fj-body text-fj-neutral-500"
          style={{ fontSize: '0.8125rem' }}
        >
          {[
            '7-day delivery guarantee',
            'Fixed price · no surprises',
            '500+ businesses served',
            '30-day post-launch support',
          ].map((chip) => (
            <span key={chip} className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="5.5" stroke="rgba(240,90,40,0.35)" fill="rgba(240,90,40,0.07)" />
                <path d="M3.5 6l1.8 1.8 3-3.6" stroke="#F05A28" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {chip}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

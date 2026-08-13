import Link from 'next/link';

/**
 * Mid-page call to action.
 *
 * Why this exists: a 2026-08-12 audit of every live page found 46 service and commercial pages
 * with a hero form at the top and a closing CTA at ~96%, and NOTHING in between. On a page the
 * length of /b2b-ecommerce that is roughly 90,000 characters where a convinced reader has no way
 * to act without scrolling to one extreme or the other. It is the same gap the 2026-07-31 audit
 * described as "zero triggers between hero and closing FAQ", never fully closed.
 *
 * Deliberately a real <Link> to /contact rather than a modal button. Three reasons:
 *   - it works with JavaScript disabled and for any crawler that reads anchors
 *   - the audit's E5/E6 checks only count real anchors, and a functional CTA that no measurement
 *     can see is a CTA nobody will ever defend in the next audit
 *   - it costs no client JS on a page that may already be hydrating a heavy interactive block
 *
 * Design: light band only. Pages are capped at one dark section and that budget is nearly always
 * already spent by the closing CTA, so this must never be dark.
 */
export interface MidPageCTAProps {
  /** Short, specific to the page. Not "Ready to get started?". */
  headline: string;
  /** One sentence. Say what actually happens next. */
  sub: string;
  /** Button label. Name the thing, e.g. "Get a B2B commerce audit". */
  label?: string;
  /** Where it goes. Defaults to /contact. */
  href?: string;
  /** Optional reassurance line under the button. */
  note?: string;
}

export default function MidPageCTA({
  headline,
  sub,
  label = 'Talk to the founder',
  href = '/contact',
  note = 'Bhavesh replies within one business day.',
}: MidPageCTAProps) {
  return (
    <section className="bg-[#FAFAF7] border-y border-gray-100 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-gray-200 px-6 py-8 md:px-10 md:py-10">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-widest text-[#B23E13]">
            Next step
          </p>
          <h2 className="mt-3 font-fj-display text-2xl md:text-3xl font-bold text-[#0F0F12]">
            {headline}
          </h2>
          <p className="mt-3 max-w-2xl font-fj-body text-base leading-relaxed text-[#3A3A38]">
            {sub}
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            {/* 18px+ and semibold so white-on-#F05A28 clears the large-text contrast bar.
                Below ~18px this pairing measures 3.4:1 and fails. */}
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-full bg-[#F05A28] px-6 py-3 text-lg font-semibold text-white transition-opacity hover:opacity-90"
            >
              {label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
            {note ? (
              <span className="font-fj-body text-sm text-[#4A4A45]">{note}</span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

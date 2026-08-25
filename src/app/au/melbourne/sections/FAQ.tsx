import { FAQS, type Faq } from '../faqData';

/**
 * Visible FAQ for /au/melbourne.
 *
 * Renders the SAME FAQS array that page.tsx maps into FAQPage JSON-LD. There is no second
 * copy of these questions anywhere. If you are about to paste questions into a
 * <script type="application/ld+json"> block, stop: that is the drift bug this arrangement
 * exists to prevent.
 *
 * Native <details> accordion, so it works with JavaScript disabled and the answers are in
 * the HTML for crawlers and answer engines regardless of interaction.
 */

// Order differs from the Brisbane page on purpose: vendor selection is the dominant
// Melbourne search intent, so it leads.
const TOPIC_ORDER: Faq['topic'][] = [
  'Choosing someone',
  'Cost and scope',
  'Websites',
  'SEO',
  'Google and local search',
];

export default function FAQ() {
  const grouped = TOPIC_ORDER.map((topic) => ({
    topic,
    items: FAQS.filter((f) => f.topic === topic),
  })).filter((g) => g.items.length > 0);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions about web design and SEO in Melbourne"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Questions
        </p>

        <h2 className="mt-4 max-w-[760px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          {FAQS.length} questions Melbourne businesses actually ask
        </h2>

        <p className="mt-5 max-w-[720px] font-fj-body text-[16px] leading-[1.7] text-fj-neutral-600">
          Every question below is one Google itself shows Australian searchers, taken from
          People Also Ask data collected in August 2026. Several of them ask us to rank our
          own competitors. We have answered those honestly rather than usefully-for-us.
        </p>

        <div className="mt-10 space-y-12">
          {grouped.map((group) => (
            <div key={group.topic}>
              <h3 className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                {group.topic}
              </h3>
              <div className="mt-4 divide-y divide-fj-neutral-200 border-t border-fj-neutral-200">
                {group.items.map((f) => (
                  <details key={f.q} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-fj-display text-[16.5px] font-bold leading-[1.4] text-fj-ink">
                      <span>{f.q}</span>
                      <span
                        aria-hidden="true"
                        className="mt-1 flex-shrink-0 font-fj-mono text-[18px] font-normal leading-none text-[#B23E13] transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-[840px] font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export interface FAQEditorialColumnProps {
  eyebrow: string;
  headline: string;
  lead: string;
  faqs: ReadonlyArray<{
    question: string;
    answer: string;
  }>; // 8–12 items
}

/**
 * Treatment 8 — `faq_static_editorial`. FAQ section.
 *
 * Pure Server Component. White background. Single centered column.
 *
 * NO `<details>` / `<summary>` accordions — all answers are fully
 * rendered into static HTML at build time. AEO requirement: AI
 * crawlers must be able to read every Q-A pair from the initial
 * server-rendered markup, not behind a JS-only collapse.
 */
export default function FAQEditorialColumn({
  eyebrow,
  headline,
  lead,
  faqs,
}: FAQEditorialColumnProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-section-y lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
            {eyebrow}
          </div>
          <h2 className="font-display text-display-md text-navy">{headline}</h2>
          <p className="mt-6 text-body-lg text-slate">{lead}</p>
        </div>

        {/* Q-A pairs */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={faq.question}>
              {i > 0 && <hr className="my-10 border-border-soft" />}
              <h3 className="font-sans text-headline font-medium text-navy">
                {faq.question}
              </h3>
              <p className="mt-4 max-w-prose text-body text-slate">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

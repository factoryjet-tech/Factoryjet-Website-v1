import { Heading } from './Heading';

/**
 * FAQ — v2.0 FAQ block per factoryjet.DESIGN.md §5.12 + §10.
 *
 * Static-HTML answers only — NO `<details>`, NO `<summary>`, NO JS
 * accordion. Every Q-A pair is rendered fully expanded into the initial
 * server-rendered markup so AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
 * can index the full FAQ without executing JavaScript. Per SearchPilot
 * data this delivers a 12–14% ranking uplift over collapsed accordions.
 *
 * Layout: asymmetric 5/12 + 7/12 (header content left, FAQ items right).
 *
 * Items carry data-faq-* attributes so a future schema-extraction utility
 * can build JSON-LD FAQPage markup at the page level. This component
 * does NOT emit JSON-LD — that's the page-assembler's job.
 *
 * Pure server component.
 */

import type { ReactNode } from 'react';

export interface FAQProps {
  eyebrow?: string;
  /** H2 content. Pass JSX with `<em>` for italic conviction words. */
  headline: ReactNode;
  lead?: string;
  /** 6–12 Q-A pairs per spec. */
  items: ReadonlyArray<{ question: string; answer: string }>;
}

export default function FAQ({ eyebrow, headline, lead, items }: FAQProps) {
  return (
    <section className="bg-fj-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — header (5/12) */}
          <div className="lg:col-span-5">
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

          {/* Right — FAQ items (7/12) */}
          <div className="lg:col-span-7">
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <article
                  key={i}
                  data-faq-item
                  className={`py-8 ${isLast ? '' : 'border-b border-fj-neutral-200'}`}
                >
                  <Heading
                    as="h3"
                    size="h4"
                    className="text-fj-ink"
                    data-faq-question
                  >
                    {item.question}
                  </Heading>
                  <p
                    data-faq-answer
                    className="mt-4 max-w-[65ch] font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600"
                  >
                    {item.answer}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from 'react';
import { Heading } from './Heading';
import MotionFadeUp from './MotionFadeUp';

/**
 * FAQ — v2.1 FAQ block, Linear Minimal edition.
 *
 * Layout:
 *   Desktop (lg+): 3/12 left sticky sidebar (category nav) + 9/12 right col (accordion Q-A).
 *   Mobile:        horizontal pill nav strip → stacked accordion below.
 *
 * Design: Linear-inspired minimal sidebar — no card, just a clean left-anchored
 * nav list. Active indicator = orange 2px left border. Open accordion answers
 * get an orange left-border accent with padding for visual rhythm.
 *
 * Accordion: native <details>/<summary> — zero JavaScript, fully accessible,
 * Lighthouse-safe. `group-open:` Tailwind variants drive the chevron rotation
 * and colour change via pure CSS.
 *
 * AI citation (GEO): <details> content is in the DOM even when collapsed —
 * AI crawlers (GPTBot, ClaudeBot, PerplexityBot) index all answer text.
 *
 * Active state: CSS :target on the section ID highlights the category header
 * when users jump via anchor link. Sidebar nav uses hover-only — zero JS.
 *
 * Backward compatible: when `categories` is omitted the component falls back
 * to a plain 2-col grid of open (non-collapsible) Q-A pairs.
 *
 * Pure server component.
 */

export interface FAQItem {
  question: string;
  answer: string;
  /** Optional — must match a `key` in the `categories` prop. */
  category?: string;
}

export interface FAQCategory {
  /** URL-safe slug — used as the HTML anchor id ("faq-{key}"). */
  key: string;
  /** Display label in the sidebar and mobile nav. */
  label: string;
}

export interface FAQProps {
  eyebrow?: string;
  headline: ReactNode;
  lead?: string;
  categories?: ReadonlyArray<FAQCategory>;
  items: ReadonlyArray<FAQItem>;
  /** Section background utility class. Defaults to the cream brand background;
   *  pass e.g. "bg-white" for white-background pages. */
  bgClassName?: string;
}

/* ─── Chevron icon ──────────────────────────────────────────────────────── */
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 5L7 9L11 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Single accordion item ─────────────────────────────────────────────── */
function AccordionItem({ item }: { item: FAQItem }) {
  return (
    <details
      data-faq-item
      className="group border-t border-fj-neutral-200 first:border-t-0"
    >
      <summary
        data-faq-question
        className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden"
      >
        <span className="font-fj-body text-[0.9375rem] font-semibold leading-[1.55] text-fj-ink transition-colors group-open:text-[#B23E13]">
          {item.question}
        </span>
        {/* Chevron */}
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-fj-neutral-200 bg-white text-fj-neutral-400 transition-all group-open:border-[#F05A28]/30 group-open:bg-[#F05A28]/5 group-open:text-[#C94A1A]"
        >
          <ChevronDown className="transition-transform duration-[220ms] ease-in-out group-open:rotate-180" />
        </span>
      </summary>

      {/* Answer — in DOM even when closed; AI crawlers index it.
          Orange left-border accent when open (group-open: reads the <details open> attr). */}
      <div
        className="pb-6 pt-0.5 group-open:border-l-2 group-open:pl-4"
        style={{ borderLeftColor: '#F05A28' }}
      >
        <p
          data-faq-answer
          className="font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600"
        >
          {item.answer}
        </p>
      </div>
    </details>
  );
}

/* ─── Main component ────────────────────────────────────────────────────── */
export default function FAQ({
  eyebrow,
  headline,
  lead,
  categories,
  items,
  bgClassName = 'bg-fj-cream',
}: FAQProps) {
  const hasCats = !!categories?.length;

  /* Group items by category */
  const grouped: Record<string, FAQItem[]> = {};
  if (hasCats) {
    for (const cat of categories!) grouped[cat.key] = [];
    for (const item of items) {
      const key = item.category ?? categories![0].key;
      if (grouped[key]) grouped[key].push(item);
    }
  }

  const totalCount = items.length;

  /* ── Fallback: no categories → plain 2-col open grid ─────────────────── */
  if (!hasCats) {
    return (
      <section className={`${bgClassName} py-14 md:py-20`}>
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <MotionFadeUp className="mx-auto max-w-[760px] text-center">
            {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
            <Heading as="h2" size="h3" className={`text-fj-ink ${eyebrow ? 'mt-6' : ''}`}>
              {headline}
            </Heading>
            {lead && (
              <p className="mt-6 font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
                {lead}
              </p>
            )}
          </MotionFadeUp>
          <div className="mt-16 grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {items.map((item, i) => (
              <MotionFadeUp key={i} delay={(i % 2) * 0.1}>
                <article data-faq-item className="border-t border-fj-neutral-200 py-7">
                  <Heading as="h3" size="h4" className="text-fj-ink" data-faq-question>
                    {item.question}
                  </Heading>
                  <p
                    data-faq-answer
                    className="mt-4 font-fj-body text-[0.9375rem] leading-[1.7] text-fj-neutral-600"
                  >
                    {item.answer}
                  </p>
                </article>
              </MotionFadeUp>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── Categorised accordion layout — Linear Minimal ────────────────────── */
  return (
    <section className={`${bgClassName} py-14 md:py-20`}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">

        {/* ── Section header (full-width) ──────────────────────────────── */}
        <MotionFadeUp>
          {eyebrow && <p className="fj-eyebrow">{eyebrow}</p>}
          <Heading
            as="h2"
            size="h3"
            className={`text-fj-ink ${eyebrow ? 'mt-6' : ''} max-w-[640px]`}
          >
            {headline}
          </Heading>
          {lead && (
            <p className="mt-5 max-w-[560px] font-fj-body text-[1.0625rem] leading-[1.6] text-fj-neutral-600">
              {lead}
            </p>
          )}
        </MotionFadeUp>

        {/* ── Mobile: horizontal pill nav ──────────────────────────────── */}
        <div className="mt-8 lg:hidden">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories!.map((cat) => (
              <a
                key={cat.key}
                href={`#faq-${cat.key}`}
                className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-fj-neutral-200 bg-white px-4 py-2 font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600 transition-colors hover:border-[#F05A28] hover:text-[#C94A1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05A28]"
              >
                {cat.label}
                <span
                  className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-fj-neutral-100 font-fj-mono text-[0.5625rem] font-bold text-fj-neutral-500"
                  aria-hidden="true"
                >
                  {grouped[cat.key]?.length ?? 0}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Two-column layout: LEFT sidebar nav + RIGHT accordion ─────── */}
        <div className="mt-10 grid grid-cols-1 gap-x-14 lg:mt-12 lg:grid-cols-12">

          {/* ── LEFT: Sticky sidebar nav (col-span-3, desktop only) ──── */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">

              {/* Sidebar label */}
              <p className="mb-3 font-fj-mono text-[0.625rem] font-bold tracking-[0.14em] uppercase text-fj-neutral-400">
                Topics
              </p>

              {/* Nav list — Linear Minimal style with left-border indicator */}
              <nav aria-label="FAQ topics">
                <ul className="space-y-0.5" role="list">
                  {categories!.map((cat) => {
                    const count = grouped[cat.key]?.length ?? 0;
                    return (
                      <li key={cat.key}>
                        <a
                          href={`#faq-${cat.key}`}
                          className="group flex items-center justify-between border-l-2 border-transparent px-3 py-2.5 transition-all duration-150 hover:border-[#F05A28] hover:bg-[#F05A28]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05A28]"
                        >
                          <span className="font-fj-body text-[0.875rem] font-medium text-fj-neutral-500 transition-colors group-hover:text-[#C94A1A]">
                            {cat.label}
                          </span>
                          <span
                            className="ml-2 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-fj-neutral-100 px-1 font-fj-mono text-[0.5625rem] font-bold text-fj-neutral-400 transition-colors group-hover:bg-[#F05A28]/10 group-hover:text-[#C94A1A]"
                            aria-hidden="true"
                          >
                            {count}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Thin divider */}
              <div className="mt-5 border-t border-fj-neutral-200 pt-5">
                <p className="font-fj-body text-[0.8125rem] leading-[1.55] text-fj-neutral-400">
                  Can&rsquo;t find your answer?
                </p>
                <a
                  href="#final-cta"
                  className="mt-2 inline-flex items-center gap-1.5 font-fj-body text-[0.8125rem] font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F05A28]"
                  style={{ color: '#B23E13' }}
                >
                  Talk to the founder
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Freshness note */}
              <p
                className="mt-6 font-fj-mono text-[0.5625rem] tracking-[0.08em] text-fj-neutral-300 uppercase"
                aria-hidden="true"
              >
                {totalCount} questions
              </p>
            </div>
          </div>

          {/* ── RIGHT: Accordion Q-A (col-span-9) ────────────────────── */}
          <div className="lg:col-span-9">
            <div className="space-y-10">
              {categories!.map((cat, ci) => {
                const catItems = grouped[cat.key] ?? [];
                if (catItems.length === 0) return null;
                return (
                  <div
                    key={cat.key}
                    id={`faq-${cat.key}`}
                    className="scroll-mt-28"
                  >
                    <MotionFadeUp delay={ci * 0.04}>
                      {/* Category header — thin orange accent bar + label */}
                      <div className="mb-1 flex items-center gap-3 pb-4">
                        <div
                          className="h-[2px] w-6 flex-shrink-0"
                          style={{ background: '#F05A28' }}
                          aria-hidden="true"
                        />
                        <p className="font-fj-mono text-[0.6875rem] font-bold tracking-[0.12em] uppercase" style={{ color: '#B23E13' }}>
                          {cat.label}
                        </p>
                      </div>

                      {/* Accordion items */}
                      <div>
                        {catItems.map((item, i) => (
                          <AccordionItem key={i} item={item} />
                        ))}
                        {/* Bottom border on last item */}
                        <div className="border-t border-fj-neutral-200" />
                      </div>
                    </MotionFadeUp>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * Static answer blocks for the India service and city pages (added 24 Nov 2026).
 *
 * Why these exist: AI assistants and Google AI Overviews lift short, direct answers that sit
 * under a heading phrased the way buyers ask. These blocks give each page:
 *   - AnswerFirst: one quotable answer right after the hero (an H2 phrased as the buyer's question).
 *   - QuestionAnswers: a run of question H2s, each answered in 40 to 100 words, with optional sources.
 *   - SourceList: the external sources a page cites, each fetch-checked on the date shown.
 *
 * Server components only: no state, no client JS. All copy comes in through props, so pages that
 * share these blocks do not share text.
 */
import type { ReactNode } from 'react';

export interface IndiaSource {
  label: string;
  url: string;
}

export interface AnswerFirstProps {
  eyebrow: string;
  /** Rendered as an H2. Phrase it the way a buyer asks an assistant. */
  question: string;
  /** First paragraph is the quotable answer: keep it under about 100 words. */
  answer: ReadonlyArray<ReactNode>;
  facts?: ReadonlyArray<{ k: string; v: ReactNode }>;
  factsTitle?: string;
  links?: ReadonlyArray<{ label: string; href: string }>;
}

export function AnswerFirst({ eyebrow, question, answer, facts, factsTitle, links }: AnswerFirstProps) {
  return (
    <section id="short-answer" className="border-b border-fj-neutral-200 bg-white py-14 md:py-16">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-fj-mono text-xs font-bold uppercase tracking-[0.14em] text-[#B23E13]">{eyebrow}</p>
          <h2 className="mt-4 font-fj-display text-3xl font-extrabold leading-[1.15] tracking-[-0.03em] text-fj-ink sm:text-4xl">
            {question}
          </h2>
          <div className="mt-5 space-y-4 font-fj-body text-lg leading-relaxed text-fj-ink">
            {answer.map((p, i) => (
              <p key={i} className={i === 0 ? '' : 'text-base text-fj-neutral-600'}>
                {p}
              </p>
            ))}
          </div>
          {links && links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-fj-body text-sm font-semibold">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-fj-ink underline underline-offset-4 hover:opacity-70">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {facts && facts.length > 0 && (
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
              {factsTitle && (
                <p className="font-fj-mono text-xs font-bold uppercase tracking-[0.12em] text-fj-neutral-600">
                  {factsTitle}
                </p>
              )}
              <dl className="mt-3 grid gap-3">
                {facts.map((f) => (
                  <div key={f.k} className="border-t border-fj-neutral-200 pt-3 first:border-t-0 first:pt-0">
                    <dt className="font-fj-display text-[15px] font-bold text-fj-ink">{f.k}</dt>
                    <dd className="mt-0.5 font-fj-body text-[14px] leading-snug text-fj-neutral-600">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export interface QuestionAnswer {
  /** Rendered as an H2. */
  q: string;
  /** 40 to 100 words across the paragraphs. */
  a: ReadonlyArray<ReactNode>;
  sources?: ReadonlyArray<IndiaSource>;
}

export interface QuestionAnswersProps {
  eyebrow: string;
  intro?: string;
  items: ReadonlyArray<QuestionAnswer>;
  /** Defaults to the cream page background. */
  bgClassName?: string;
}

export function QuestionAnswers({ eyebrow, intro, items, bgClassName = 'bg-fj-cream' }: QuestionAnswersProps) {
  return (
    <section className={`border-b border-fj-neutral-200 py-14 md:py-20 ${bgClassName}`}>
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-[0.14em] text-[#B23E13]">{eyebrow}</p>
        {intro && (
          <p className="mt-3 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">{intro}</p>
        )}
        <div className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200">
          {items.map((item) => (
            <article key={item.q} className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-12 lg:gap-10">
              <h2 className="font-fj-display text-2xl font-bold leading-snug tracking-[-0.02em] text-fj-ink lg:col-span-5">
                {item.q}
              </h2>
              <div className="space-y-3 font-fj-body text-base leading-relaxed text-fj-ink lg:col-span-7">
                {item.a.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {item.sources && item.sources.length > 0 && <SourceLine sources={item.sources} />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SourceLine({ sources }: { sources: ReadonlyArray<IndiaSource> }) {
  return (
    <p className="font-fj-body text-[13px] leading-snug text-fj-neutral-600">
      Source{sources.length > 1 ? 's' : ''}:{' '}
      {sources.map((s, i) => (
        <span key={s.url}>
          {i > 0 && ', '}
          <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            {s.label}
          </a>
        </span>
      ))}
    </p>
  );
}

export interface SourceListProps {
  title?: string;
  checkedOn: string;
  sources: ReadonlyArray<IndiaSource & { note?: string }>;
}

export function SourceList({ title = 'Sources used on this page', checkedOn, sources }: SourceListProps) {
  return (
    <section className="bg-fj-cream py-10">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-[0.12em] text-fj-neutral-600">{title}</p>
        <ul className="mt-3 grid gap-2 font-fj-body text-sm leading-relaxed text-fj-ink">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
                {s.label}
              </a>
              {s.note ? <span className="text-fj-neutral-600">: {s.note}</span> : null}
            </li>
          ))}
        </ul>
        <p className="mt-3 font-fj-body text-[13px] text-fj-neutral-600">Each link was opened and checked on {checkedOn}.</p>
      </div>
    </section>
  );
}

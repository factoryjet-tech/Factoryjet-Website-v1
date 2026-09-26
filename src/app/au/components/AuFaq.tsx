import { Fragment } from 'react';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

/*
 * AU FAQ in the US Family A markup (same as /services/ai-seo and /services/web-design):
 * sticky .faqintro (eyebrow, h2.faqHeading, category nav) + .faqlist of numbered <details>.
 * Server component, no client code of its own (ModalCTAButton is the shared client button).
 *
 * Schema rule: the page passes the SAME `items` array it maps into its FAQPage JSON-LD.
 * Never hand-copy questions into this component or into a second array.
 */
export interface AuFaqCategory { key: string; label: string }
export interface AuFaqItem {
  category: string;
  question: string;
  answer: string;
  /** Optional follow-up links, rendered as a second answer line. */
  links?: ReadonlyArray<{ href: string; label: string }>;
}

export interface AuFaqProps {
  categories: ReadonlyArray<AuFaqCategory>;
  items: ReadonlyArray<AuFaqItem>;
  heading: string;
  /** Optional one-line intro under the heading (only existing page copy). */
  intro?: string;
  /** Label for the modal button under the category nav. Omit to hide it. */
  askLabel?: string;
  /** Small note under the ask button. */
  askNote?: string;
}

export default function AuFaq({ categories, items, heading, intro, askLabel, askNote }: AuFaqProps) {
  // Q01.. numbering follows the rendered order (category by category), so ids are stable per page.
  let n = 0;
  return (
    <section className="section faq" id="faq">
      <div className="wrap">
        <div className="faqwrap">
          <div className="faqintro">
            <div className="eyebrow">FAQ</div>
            <h2 className="faqHeading">{heading}</h2>
            {intro ? <p>{intro}</p> : null}
            <nav className="faq-catnav" aria-label="FAQ categories">
              {categories.map((c) => (
                <a key={c.key} href={`#faq-${c.key}`}>
                  {c.label}
                  <span className="faq-nav-count">{items.filter((f) => f.category === c.key).length}</span>
                </a>
              ))}
            </nav>
            {askLabel ? (
              <div className="faq-ask">
                <ModalCTAButton label={askLabel} region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-ghost" />
                {askNote ? <p>{askNote}</p> : null}
              </div>
            ) : null}
          </div>
          <div className="faqlist">
            {categories.map((c) => (
              <Fragment key={c.key}>
                <div className="faq-category" id={`faq-${c.key}`}>{c.label}</div>
                {items.filter((f) => f.category === c.key).map((f) => {
                  n += 1;
                  const qid = `Q${String(n).padStart(2, '0')}`;
                  return (
                    <details className="faqitem" data-faq-item key={f.question}>
                      <summary data-faq-question>
                        <span className="qid">{qid}</span>
                        <span className="qtext">{f.question}</span>
                        <span className="chev" aria-hidden="true">+</span>
                      </summary>
                      <p className="ans" data-faq-answer>{f.answer}</p>
                      {f.links && f.links.length > 0 ? (
                        <p className="ans ans-links">
                          {f.links.map((l, i) => (
                            <Fragment key={l.href}>
                              {i > 0 ? ' ' : null}
                              <a className="faqsrc" href={l.href}>{l.label} ↗</a>
                            </Fragment>
                          ))}
                        </p>
                      ) : null}
                    </details>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

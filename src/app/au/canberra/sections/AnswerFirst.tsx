import { CITATIONS } from '../pageData';

/**
 * Answer-first block, directly under the hero.
 *
 * Canberra framing is accessibility-led, because the buyer mix here (associations, peak
 * bodies, not-for-profits, public-sector suppliers) makes it the question that actually
 * decides whether a site is fit for purpose.
 *
 * IMPORTANT: this section makes NO claim about Australian government policy or any legal
 * obligation. digital.gov.au could not be fetched during research, so nothing about the
 * Digital Service Standard is asserted here. See the note in pageData.ts.
 */

const AT_A_GLANCE: Array<{ term: string; detail: string }> = [
  {
    term: 'Where we work',
    detail:
      'Civic and Barton through to Belconnen, Woden, Tuggeranong and Gungahlin, plus Fyshwick, Mitchell and across the border in Queanbeyan.',
  },
  {
    term: 'Who it is for',
    detail:
      'Associations and peak bodies, not-for-profits, professional services, and businesses that supply into the public sector.',
  },
  {
    term: 'Accessibility',
    detail:
      'Built to the WCAG criteria as part of the work, with a written test result you can attach to a tender response.',
  },
  {
    term: 'How it starts',
    detail:
      'A free review covering the site, its accessibility and your Google listing, then a written scope. Nothing charged before you read it.',
  },
  {
    term: 'What you own',
    detail:
      'Everything, including the code. That matters more here than elsewhere, because contracts often ask who holds it.',
  },
];

const BASICS: string[] = [
  'Every image carries a text description, so a screen reader can convey what it shows.',
  'The whole site can be operated with a keyboard alone, with a visible focus outline showing where you are.',
  'Text has enough contrast against its background to be readable in ordinary conditions.',
  'Form fields have real labels attached to them, not placeholder text that disappears when you type.',
  'Headings run in order and describe the section beneath, so the page can be navigated by structure.',
  'Nothing depends on colour alone. A red asterisk is not enough to mark a required field.',
  'Documents are published as real pages where possible, rather than as scanned files that cannot be searched or read aloud.',
];

export default function AnswerFirst() {
  const w3c = CITATIONS[0];

  return (
    <section
      id="what-we-do"
      aria-label="Accessible web design in Canberra"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Answer first
        </p>

        <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-[57%_1fr] lg:gap-16">
          <div>
            <h2 className="font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
              What accessible web design in Canberra actually means
            </h2>

            <p className="mt-5 font-fj-body text-[17px] leading-[1.7] text-fj-ink md:text-[18px]">
              An accessible website is one that still works for someone using a screen reader,
              navigating by keyboard, or viewing at high magnification. The international
              standard for it is WCAG, published by the W3C and currently spanning versions
              2.0, 2.1 and 2.2.
              <sup className="ml-0.5 font-fj-mono text-[11px] text-[#B23E13]">[1]</sup> In
              Canberra it comes up more than anywhere else in Australia, because so much work
              here involves tenders and contracts that ask you to state which standard your
              site meets.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              We are not going to tell you what the law requires of your organisation. That
              depends on who you are and what you have signed, and it is a question for your
              own legal advice rather than for a web agency. What we can tell you is the
              practical position: the question gets asked, an honest answer of "we do not
              know" costs you work, and the underlying fixes are neither expensive nor ugly.
            </p>

            <h3 className="mt-10 font-fj-display text-[20px] font-bold text-fj-ink md:text-[22px]">
              The basics that cover most of it
            </h3>
            <ul className="mt-4 space-y-3">
              {BASICS.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-fj-body text-[15px] leading-[1.65] text-fj-neutral-600"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#B23E13]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              None of that makes a site look worse, and most of it is invisible to people who
              do not need it. Sites fail these checks through inattention rather than through
              a design decision, which is also why retrofitting an existing site is usually
              cheaper than the rebuild people expect.
            </p>
          </div>

          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
              <h3 className="font-fj-display text-[18px] font-bold text-fj-ink">
                Canberra work at a glance
              </h3>
              <dl className="mt-5 space-y-5">
                {AT_A_GLANCE.map((row) => (
                  <div key={row.term}>
                    <dt className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                      {row.term}
                    </dt>
                    <dd className="mt-1.5 font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600">
                      {row.detail}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-fj-neutral-200 pt-4 font-fj-body text-[13px] leading-[1.6] text-fj-neutral-600">
                Source [1]: {w3c.source}, {w3c.title}.
              </p>
            </div>

            <p className="mt-4 font-fj-body text-[13px] leading-[1.6] text-fj-neutral-600">
              No price figures appear on this page on purpose. Accessibility retrofits vary
              enormously depending on how the existing site was built, and a number posted
              here would mislead most readers.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

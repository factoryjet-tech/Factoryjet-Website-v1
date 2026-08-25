/**
 * Answer-first block, directly under the hero. Written so the opening paragraph stands
 * alone if it is the only thing an answer engine ever quotes.
 *
 * Framed around the consultant question rather than the agency question, matching what
 * Melbourne searchers actually type. Static server component.
 */

const AT_A_GLANCE: Array<{ term: string; detail: string }> = [
  {
    term: 'Where we work',
    detail:
      'The CBD and inner suburbs, out through Box Hill and Preston, west to Footscray, south east to Dandenong, and down to Geelong.',
  },
  {
    term: 'Who it is for',
    detail:
      'Melbourne businesses with a sales process behind the website: professional services, clinics, manufacturers, B2B suppliers, trades and independent retail.',
  },
  {
    term: 'Two ways to engage',
    detail:
      'We build the site and run the search work, or we advise and your existing team executes. The second is often better value if you already have a marketer or a developer.',
  },
  {
    term: 'How it starts',
    detail:
      'A free review of the site and the Google Business Profile, then a written scope. Nothing is charged before you have read it.',
  },
  {
    term: 'What we will not do',
    detail:
      'Buy links, publish thin suburb pages, hold your domain, or promise a ranking position on a date.',
  },
];

const DIAGNOSIS: Array<{ symptom: string; likely: string }> = [
  {
    symptom: 'Traffic is fine, enquiries are not',
    likely:
      'This is a conversion problem, not a search problem. More traffic will not fix it and buying SEO will waste your money. Look at what the page asks a visitor to do and how hard it is to do it.',
  },
  {
    symptom: 'You rank for your business name and nothing else',
    likely:
      'Usually a content problem. The site describes the company rather than answering what buyers search for. One strong page per service usually moves this within a quarter.',
  },
  {
    symptom: 'Pages exist but do not appear in Google at all',
    likely:
      'A technical problem, and the cheapest of the three to fix. Something is blocking indexing: a robots rule, a leftover noindex tag, or content that only loads after JavaScript.',
  },
  {
    symptom: 'You appear in search but never in the map results',
    likely:
      'A local listing problem. The Google Business Profile is unverified, miscategorised, duplicated, or your business details differ across directories.',
  },
  {
    symptom: 'You rank on page two and never move',
    likely:
      'Usually an authority problem, and the slowest to fix. Other sites do not reference you. This needs earned links over quarters, not a content package.',
  },
];

export default function AnswerFirst() {
  return (
    <section
      id="what-we-do"
      aria-label="What a Melbourne SEO consultant and web designer does"
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
              What an SEO consultant in Melbourne actually does
            </h2>

            <p className="mt-5 font-fj-body text-[17px] leading-[1.7] text-fj-ink md:text-[18px]">
              An SEO consultant in Melbourne diagnoses why your website is not producing
              enquiries, puts the causes in the order that pays back fastest, and either fixes
              them or briefs whoever will. That is different from an agency retainer, which
              buys you a fixed number of hours whether or not those hours are aimed at your
              real problem. FactoryJet works both ways: we build and run the work for
              businesses without an internal team, and we advise and direct for businesses
              that already have one.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              The diagnosis matters more than the label. Five Melbourne businesses can present
              with the same complaint, that the website does not bring in work, and have five
              different underlying causes with wildly different costs to fix. Being sold a
              content retainer when your actual problem is a noindex tag is how businesses
              come to believe search does not work for them.
            </p>

            <h3 className="mt-10 font-fj-display text-[20px] font-bold text-fj-ink md:text-[22px]">
              Five common symptoms and what usually causes them
            </h3>
            <dl className="mt-4 space-y-4">
              {DIAGNOSIS.map((d) => (
                <div key={d.symptom}>
                  <dt className="font-fj-display text-[15px] font-bold text-fj-ink">
                    {d.symptom}
                  </dt>
                  <dd className="mt-1 font-fj-body text-[14.5px] leading-[1.7] text-fj-neutral-600">
                    {d.likely}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
              <h3 className="font-fj-display text-[18px] font-bold text-fj-ink">
                Melbourne engagements at a glance
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
            </div>

            <p className="mt-4 font-fj-body text-[13px] leading-[1.6] text-fj-neutral-600">
              No price figures appear on this page on purpose. What a Melbourne engagement
              costs depends on which of the five problems above you actually have, and a
              number posted here would be wrong for most readers.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

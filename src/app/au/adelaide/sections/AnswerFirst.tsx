/**
 * Answer-first block, directly under the hero. Written to stand alone if the opening
 * paragraph is the only thing an answer engine ever quotes.
 *
 * Adelaide framing: the honest "should you bother" question, because this market has
 * enough headroom that the answer is more often yes than in the bigger capitals, and
 * saying why is more persuasive than claiming expertise.
 */

const AT_A_GLANCE: Array<{ term: string; detail: string }> = [
  {
    term: 'Where we work',
    detail:
      'The CBD and inner suburbs, north through Salisbury and Elizabeth, south to Marion and Glenelg, and out to Mount Barker and Gawler.',
  },
  {
    term: 'Who it is for',
    detail:
      'South Australian businesses with a sales process behind the site: trades, professional services, clinics, manufacturers, wineries and B2B suppliers.',
  },
  {
    term: 'How it starts',
    detail:
      'A free review of the site and the Google Business Profile, then a written scope. Nothing is charged before you have read it.',
  },
  {
    term: 'What you own',
    detail:
      'Everything. Site, content, domain, and admin access to every account we touch, from day one and after you leave.',
  },
  {
    term: 'When we say no',
    detail:
      'When the search demand is not there. We check volume against advertising data first, and we have told Australian businesses not to spend.',
  },
];

const WHY_EASIER: string[] = [
  'The weakest business holding a first-page position for the main Adelaide web design term had links from 27 other websites when we measured it. In Perth the same figure was 92, and in Sydney 101.',
  'On the main Adelaide SEO term, the weakest first-page business had 37. That is close enough to a well-run new site to be a realistic target rather than an aspiration.',
  'Directories hold at most one or two of any Adelaide first page. There is no Yellow Pages or Clutch wall to get past, which is not true of many overseas markets.',
  'Google did not show an AI Overview on any Adelaide web design or local SEO term we tested, so an ordinary ranking still earns the click rather than losing it to a summary above.',
  'The trade-off is volume. Adelaide searches are smaller than Melbourne or Perth, so the ceiling is lower. Reaching it is simply more achievable.',
];

export default function AnswerFirst() {
  return (
    <section
      id="what-we-do"
      aria-label="What a web design and SEO agency in Adelaide does"
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
              Why Adelaide is easier to rank in than the other capitals
            </h2>

            <p className="mt-5 font-fj-body text-[17px] leading-[1.7] text-fj-ink md:text-[18px]">
              Ranking in Google is decided largely by how many other websites reference
              yours, and Adelaide has the least entrenched field of any Australian capital we
              measured. In August 2026 the weakest business holding a first-page position for
              the main Adelaide web design search had links from 27 other websites. The
              equivalent figure in Perth was 92 and in Sydney 101. That difference is the
              whole story: the same amount of work buys a materially better result here.
            </p>

            <p className="mt-4 font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
              The honest counterweight is that Adelaide searches are smaller. Fewer people
              search for a web designer here than in Melbourne, so the total prize is lower
              even when your share of it is higher. For most South Australian businesses that
              trade is worth taking, because a first page you can actually reach beats a
              bigger one you cannot.
            </p>

            <h3 className="mt-10 font-fj-display text-[20px] font-bold text-fj-ink md:text-[22px]">
              What we measured, and what it means for you
            </h3>
            <ul className="mt-4 space-y-3">
              {WHY_EASIER.map((item) => (
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
          </div>

          <aside>
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
              <h3 className="font-fj-display text-[18px] font-bold text-fj-ink">
                Adelaide work at a glance
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
              No price figures appear on this page on purpose. What an Adelaide project costs
              depends on how much repair the site needs and how much content already exists.
              You get yours in writing after the free review.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

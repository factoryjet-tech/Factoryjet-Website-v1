/**
 * Birmingham specifics, honest qualification, and the page's external sources.
 *
 * The sources block is rendered from `CITATIONS` in ../pageData.ts. Every URL in that
 * array was fetched and read on 2026-08-25 before it was allowed in. Do not add a source
 * to this page without doing the same.
 *
 * Static server component. No client JS, no hooks.
 */

import { CITATIONS } from '../pageData';

const DISTRICTS: Array<{ area: string; note: string }> = [
  {
    area: 'Colmore Business District and Colmore Row',
    note: 'Solicitors, accountants and consultancies. Searches are cautious and comparison heavy, so the work is credibility pages, named people and case detail rather than volume.',
  },
  {
    area: 'Jewellery Quarter',
    note: 'Makers and independent retailers selling to trade and to the public at the same time. Needs a site that handles both audiences without either one feeling like an afterthought.',
  },
  {
    area: 'Digbeth and Deritend',
    note: 'Studios, food and drink, events and creative businesses. Highly visual, heavily reliant on the map pack, photographs and reviews rather than long written pages.',
  },
  {
    area: 'Erdington, Tyseley, Aston and Witton',
    note: 'Manufacturing, engineering and logistics. Buyers search in specifications and certifications, so the winning pages read like a capability sheet, not a brochure.',
  },
  {
    area: 'Edgbaston, Harborne, Moseley and Kings Heath',
    note: 'Consumer and household services. Urgent, phone-first searches where being in the map results beats being first in the blue links below it.',
  },
  {
    area: 'Solihull, Sandwell, Dudley, Walsall and Wolverhampton',
    note: 'Separate places with separate search behaviour. Worth their own pages only where you have genuinely different content, not the Birmingham page with the town name swapped.',
  },
];

const LOCAL_FACTORS: string[] = [
  'Birmingham map results shift over short distances, so a city centre address and a suburban one compete in different sets of results for the same search.',
  'A large share of local searches happen on a phone while someone is already moving, which makes load speed a sales problem before it is a ranking one.',
  'Many Birmingham firms sit in serviced or shared offices, which changes what Google will let them list and how they should be set up.',
  'The city sits inside a dense ring of separate towns, so guessing the wrong service area quietly removes you from results a few miles away.',
  'Trade and industrial buyers here often search from a supplier list, not from a browser tab, which rewards specification pages over marketing pages.',
  'Long-standing Birmingham competitors usually rank on age and links rather than better pages, which is exactly what makes them beatable on specific terms.',
];

const SUITS: string[] = [
  'You already convert enquiries reliably and simply need more of them.',
  'One new customer is worth enough that a handful of extra enquiries a month pays for the work.',
  'You can give a subject expert an hour a month for a call or a content review.',
  'You are willing to judge the work on enquiries rather than on a rankings screenshot.',
  'You want to own the accounts and the content, including on the day you leave.',
  'You can wait two to three quarters for the harder Birmingham terms to move.',
];

const DOES_NOT_SUIT: string[] = [
  'You need enquiries this month. Paid search will do that, and we will say so.',
  'You want a guaranteed first position, which no honest agency can sell you.',
  'Nobody internally can review copy or answer a technical question about what you do.',
  'The business model depends on being the cheapest option in the city.',
  'You want volume blog posts published without anyone checking whether they are true.',
];

export default function LocalSignals() {
  return (
    <section
      id="birmingham-specifics"
      aria-label="Birmingham specifics and sources"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Local detail
        </p>
        <h2 className="mt-4 max-w-[820px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          What is different about search in Birmingham
        </h2>
        <p className="mt-5 max-w-[760px] font-fj-body text-[16px] leading-[1.7] text-fj-neutral-600">
          Birmingham is not one market. It is a compact city centre wrapped in industrial
          corridors, residential suburbs and five neighbouring boroughs, and the same search
          behaves differently in each. Getting the geography wrong is the most common reason a
          well written Birmingham page never appears.
        </p>

        {/* Districts */}
        <h3 className="mt-12 font-fj-display text-[20px] font-bold text-fj-ink md:text-[22px]">
          How the work changes by part of the city
        </h3>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {DISTRICTS.map((d) => (
            <li
              key={d.area}
              className="rounded-2xl border border-fj-neutral-200 bg-white p-5 md:p-6"
            >
              <p className="font-fj-display text-[16px] font-bold leading-snug text-fj-ink">
                {d.area}
              </p>
              <p className="mt-2 font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600">
                {d.note}
              </p>
            </li>
          ))}
        </ul>

        {/* Local factors */}
        <h3 className="mt-14 font-fj-display text-[20px] font-bold text-fj-ink md:text-[22px]">
          Six local factors that change the plan
        </h3>
        <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
          {LOCAL_FACTORS.map((f) => (
            <li
              key={f}
              className="flex gap-3 font-fj-body text-[14.5px] leading-[1.65] text-fj-neutral-600"
            >
              <span
                aria-hidden="true"
                className="mt-[8px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#B23E13]"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Fit */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
            <h3 className="font-fj-display text-[19px] font-bold text-fj-ink">
              This suits you if
            </h3>
            <ul className="mt-4 space-y-3">
              {SUITS.map((s) => (
                <li
                  key={s}
                  className="flex gap-3 font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[2px] flex-shrink-0 font-fj-mono text-[13px] font-bold text-[#B23E13]"
                  >
                    &#10003;
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
            <h3 className="font-fj-display text-[19px] font-bold text-fj-ink">
              Look elsewhere if
            </h3>
            <ul className="mt-4 space-y-3">
              {DOES_NOT_SUIT.map((s) => (
                <li
                  key={s}
                  className="flex gap-3 font-fj-body text-[14.5px] leading-[1.6] text-fj-neutral-600"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[2px] flex-shrink-0 font-fj-mono text-[13px] font-bold text-fj-neutral-400"
                  >
                    &times;
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-14 rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-8">
          <h3 className="font-fj-display text-[19px] font-bold text-fj-ink md:text-[21px]">
            Sources used on this page
          </h3>
          <p className="mt-2 max-w-[720px] font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
            Every number and rule quoted above comes from one of these. Each was opened and
            read on 25 August 2026, and each link goes to the original, not to a summary of it.
          </p>
          <ol className="mt-6 space-y-5">
            {CITATIONS.map((c) => (
              <li key={c.url} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-[2px] flex-shrink-0 font-fj-mono text-[13px] font-bold tabular-nums text-[#B23E13]"
                >
                  [{c.id}]
                </span>
                <div>
                  <p className="font-fj-body text-[15px] leading-snug text-fj-ink">
                    <span className="font-semibold">{c.source}</span>
                    <span className="text-fj-neutral-600">, </span>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="underline decoration-fj-neutral-400 underline-offset-4 transition-colors hover:text-[#B23E13]"
                    >
                      {c.title}
                    </a>
                  </p>
                  <p className="mt-1.5 font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
                    {c.claim}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

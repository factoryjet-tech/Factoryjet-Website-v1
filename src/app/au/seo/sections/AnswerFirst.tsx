/**
 * Answer-first block for the national hub. Written so the opening paragraph works as a
 * standalone quote, since a hub page is the one most likely to be pulled by an assistant.
 */

const ORDER: Array<{ step: string; body: string; payback: string }> = [
  {
    step: 'Technical repair',
    body: 'Fix what stops search engines reading the site: blocked pages, leftover noindex tags, content that only appears after JavaScript runs, broken internal links, and duplicate versions of the same page competing with each other.',
    payback: 'Weeks',
  },
  {
    step: 'Google Business Profile',
    body: 'Claim, verify, categorise specifically, set service areas honestly, add real photographs, answer reviews. For a local business this is usually the single highest-return hour of work available anywhere in a search plan.',
    payback: 'Weeks',
  },
  {
    step: 'Consistent business details',
    body: 'Make your name, address and phone identical everywhere they appear, including old directory listings you have forgotten about. Inconsistency quietly holds back local ranking and never announces itself.',
    payback: 'Weeks to months',
  },
  {
    step: 'Pages built on verified demand',
    body: 'Write pages for terms that have real Australian volume, checked against advertising data rather than impression counts. One strong page per service beats five thin ones on the same topic.',
    payback: 'One to two quarters',
  },
  {
    step: 'Earned links and mentions',
    body: 'Publish things worth referencing, sponsor genuinely, build supplier and sector relationships. This is the slowest lever and the one that decides whether you can compete on a head term at all.',
    payback: 'Quarters to years',
  },
];

export default function AnswerFirst() {
  return (
    <section
      id="what-we-do"
      aria-label="What SEO services do"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Answer first
        </p>

        <h2 className="mt-4 max-w-[800px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          What SEO services actually do, in the order that pays back
        </h2>

        <p className="mt-5 max-w-[820px] font-fj-body text-[17px] leading-[1.7] text-fj-ink md:text-[18px]">
          SEO services make a website more likely to appear when Australians search for what
          it sells. The work divides into three parts: repairing the technical faults that
          stop search engines reading the site, building pages that answer what buyers
          actually type and connecting them to a correct Google Business Profile, and earning
          references from other sites so Google treats the business as credible. Done in that
          order, the cheap fast work funds the slow expensive work. Done in reverse, which is
          how it is commonly sold, you pay for the slowest lever first.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">
              The five stages of search work and how quickly each pays back
            </caption>
            <thead>
              <tr className="border-b border-fj-neutral-200">
                <th
                  scope="col"
                  className="w-[22%] py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600"
                >
                  Stage
                </th>
                <th
                  scope="col"
                  className="py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600"
                >
                  What it involves
                </th>
                <th
                  scope="col"
                  className="w-[18%] py-3 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B23E13]"
                >
                  Typical payback
                </th>
              </tr>
            </thead>
            <tbody>
              {ORDER.map((r, i) => (
                <tr key={r.step} className="border-b border-fj-neutral-200 align-top">
                  <th
                    scope="row"
                    className="py-4 pr-4 font-fj-display text-[14.5px] font-bold text-fj-ink"
                  >
                    <span className="font-fj-mono text-[11px] text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-1 block">{r.step}</span>
                  </th>
                  <td className="py-4 pr-4 font-fj-body text-[14.5px] leading-[1.65] text-fj-neutral-600">
                    {r.body}
                  </td>
                  <td className="py-4 font-fj-body text-[14.5px] font-semibold leading-[1.65] text-fj-ink">
                    {r.payback}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-[820px] font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
          Google itself says some changes take effect within a few hours while others take
          several months, and advises waiting a few weeks before judging whether a change
          helped. Any Australian agency quoting you a date for a ranking position is working
          against what the search engine publishes about its own behaviour.
        </p>
      </div>
    </section>
  );
}

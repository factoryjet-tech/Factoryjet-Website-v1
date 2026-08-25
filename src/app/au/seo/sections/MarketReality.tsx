import Link from 'next/link';
import { CITY_ROWS } from '../pageData';

/**
 * The measured picture of Australian search, including the parts that do not favour us.
 *
 * This is the section that makes the hub worth linking to: it publishes real numbers from
 * the August 2026 DataForSEO pass, including the three cities where we concluded we cannot
 * currently compete. Saying that out loud is the point.
 */

const AIO_ROWS: Array<{ line: string; share: string; note: string }> = [
  { line: 'Web design', share: '13%', note: 'Almost every ordinary ranking still earns the click.' },
  { line: 'Local SEO terms', share: '20%', note: 'Largely unaffected, and the largest pool of volume.' },
  { line: 'E-commerce build', share: '36%', note: 'Mixed. Worth checking the specific term first.' },
  { line: 'AI agents and automation', share: '71%', note: 'Most of the click is absorbed above the results.' },
  { line: 'Agentic commerce', share: '75%', note: 'Reading audience rather than a buying one.' },
  { line: 'AI SEO and GEO terms', share: '100%', note: 'Every term tested. Also close to zero Australian volume.' },
];

export default function MarketReality() {
  return (
    <section
      id="market"
      aria-label="What we measured in Australian search"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          What we measured
        </p>

        <h2 className="mt-4 max-w-[820px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          Australian search in August 2026, including the parts that do not suit us
        </h2>

        <p className="mt-5 max-w-[820px] font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
          We ran 297 Australian keywords through Google Ads volume data, then measured 103 of
          the resulting search results in detail. Two findings are worth your attention before
          you spend anything on search in this country.
        </p>

        <h3 className="mt-12 font-fj-display text-[clamp(20px,2.4vw,26px)] font-bold tracking-[-0.02em] text-fj-ink">
          One: AI Overviews are rare in Australia, but only on some topics
        </h3>
        <p className="mt-3 max-w-[820px] font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
          An AI Overview is the summary Google increasingly places above the ordinary results.
          When one appears, fewer people click through to any website. Across all 103
          Australian terms we tested, one appeared on 34%. That average hides the useful
          detail, which is that the rate depends almost entirely on the subject.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <caption className="sr-only">
              How often an AI Overview appeared, by service line, Australia, August 2026
            </caption>
            <thead>
              <tr className="border-b border-fj-neutral-200">
                <th scope="col" className="w-[28%] py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600">
                  Type of search
                </th>
                <th scope="col" className="w-[18%] py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B23E13]">
                  AI Overview shown
                </th>
                <th scope="col" className="py-3 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600">
                  What it means for you
                </th>
              </tr>
            </thead>
            <tbody>
              {AIO_ROWS.map((r) => (
                <tr key={r.line} className="border-b border-fj-neutral-200 align-top">
                  <th scope="row" className="py-4 pr-4 font-fj-display text-[14.5px] font-bold text-fj-ink">
                    {r.line}
                  </th>
                  <td className="py-4 pr-4 font-fj-body text-[14.5px] font-semibold text-fj-ink">
                    {r.share}
                  </td>
                  <td className="py-4 font-fj-body text-[14.5px] leading-[1.65] text-fj-neutral-600">
                    {r.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 max-w-[820px] font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
          The practical reading: if you sell web design, trades, professional services or
          anything local, Australian search is currently a better place to invest than the
          American equivalent, where these summaries are far more common. If you sell anything
          with the word AI in the search term, the opposite is true here as well as there.
        </p>

        <h3 className="mt-14 font-fj-display text-[clamp(20px,2.4vw,26px)] font-bold tracking-[-0.02em] text-fj-ink">
          Two: some Australian cities are reachable and some are not
        </h3>
        <p className="mt-3 max-w-[820px] font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
          Ranking is decided largely by how many other websites reference yours. We counted
          that figure for every business holding a first-page position on the main search term
          in each capital, and compared the weakest of them against our own earned total of 28.
          The result decided which city pages we built and which we did not.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CITY_ROWS.map((c) => (
            <Link
              key={c.slug}
              href={`/au/${c.slug}`}
              className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5 transition-colors hover:border-[#B23E13]"
            >
              <span className="font-fj-display text-[17px] font-bold text-fj-ink">{c.city}</span>
              <span className="mt-1.5 block font-fj-body text-[14px] leading-[1.6] text-fj-neutral-600">
                {c.headline}
              </span>
              <span className="mt-3 block font-fj-body text-[13.5px] text-fj-neutral-600">
                Weakest first-page competitor:{' '}
                <strong className="text-fj-ink">{c.weakest} linking domains</strong>
              </span>
              <span className="mt-1 block font-fj-body text-[13.5px] font-semibold text-[#B23E13]">
                {c.verdict}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7">
          <h4 className="font-fj-display text-[17px] font-bold text-fj-ink">
            Where we are not competing, and why we say so
          </h4>
          <p className="mt-3 max-w-[840px] font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
            Sydney, Perth and the Gold Coast carry the largest search volumes in the country
            and we have not built pages for them. The weakest business holding a first-page
            position measured 119 linking domains in Sydney, 125 in Perth and 136 on the Gold
            Coast, against our 28. Building pages aimed at those terms today would produce
            pages that cannot rank.
          </p>
          <p className="mt-3 max-w-[840px] font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
            We mention it because the same arithmetic applies to you. If an agency proposes to
            win you a Sydney head term, ask what the current first page looks like and how many
            sites link to the weakest business on it. If they cannot answer, they have not
            measured, and the plan is a hope rather than a forecast.
          </p>
        </div>
      </div>
    </section>
  );
}

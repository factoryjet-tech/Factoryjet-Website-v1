/**
 * Buyer guidance plus an honest comparison. This section exists because the strongest
 * People-Also-Ask questions on the Brisbane terms are buyer-anxiety questions ("how to
 * choose a web design agency", "is an SEO agency worth it", "how to tell if your SEO is
 * working"), not feature questions.
 *
 * The comparison table names real trade-offs on both sides, including where we are the
 * wrong choice. A comparison where we win every row reads as marketing and gets ignored.
 */

const QUESTIONS: Array<{ q: string; why: string }> = [
  {
    q: 'Who is actually doing the work?',
    why: 'The most common disappointment in this industry is meeting a senior person and being handed to a junior one. Ask for the name of the person who will build the site, and whether they will be on your calls.',
  },
  {
    q: 'What happens if I leave?',
    why: 'You should keep the domain, the site, the content and admin access to everything. If any of those stay with the agency, you are renting your own business presence.',
  },
  {
    q: 'Can you show me a site you built that is still fast?',
    why: 'Anyone can show a screenshot from launch day. Ask them to run a live speed test on a site they built two years ago. The answer tells you whether they build for the long term or for the portfolio.',
  },
  {
    q: 'How did you decide these were the right search terms?',
    why: 'The answer should involve checking real search volume. If it involves a tool score alone, or a list of terms with no volume attached, the plan may be aimed at words nobody types.',
  },
  {
    q: 'What will you not do?',
    why: 'An agency that cannot name anything it refuses to do has not thought about it, or is willing to do things that will hurt you later. Buying links is the obvious one.',
  },
  {
    q: 'When will I know if this is working?',
    why: 'You want a specific leading indicator with a date attached, not a promise about positions. Impressions on commercial terms moving within a quarter is a reasonable thing to expect.',
  },
];

const ROWS: Array<{ dimension: string; us: string; them: string }> = [
  {
    dimension: 'Who writes the code',
    us: 'Senior engineers, the same people you speak to.',
    them: 'Often a junior team or an offshore subcontractor you never meet.',
  },
  {
    dimension: 'Time to launch',
    us: 'Seven days from approved scope for a site of up to five pages.',
    them: 'Six to twelve weeks is common for a comparable brochure site.',
  },
  {
    dimension: 'Ownership',
    us: 'Domain, site, content and every account in your name from day one.',
    them: 'Frequently held by the agency, released on request or on exit.',
  },
  {
    dimension: 'Ongoing fee to stay online',
    us: 'None. Hosting and domain only, and you can take those elsewhere.',
    them: 'Often a monthly fee that keeps the site published.',
  },
  {
    dimension: 'Link building',
    us: 'Earned only. We will not buy links or use networks.',
    them: 'Varies. Paid placement is still widely sold in this market.',
  },
  {
    dimension: 'Where we are the wrong choice',
    us: 'Large brand and campaign work, television, print, or a full in-house marketing department. We do not do those and will say so.',
    them: 'A full-service agency genuinely is better if you need all of that under one roof.',
  },
  {
    dimension: 'Also the wrong choice if',
    us: 'You want someone in a Brisbane office you can visit weekly. We work remotely with Australian clients.',
    them: 'A local studio with a physical office wins on this one, plainly.',
  },
];

export default function ChoosingAnAgency() {
  return (
    <section
      id="choosing"
      aria-label="Choosing a web design and SEO agency in Brisbane"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-12 sm:px-8 md:py-20">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Before you choose anyone
        </p>

        <h2 className="mt-4 max-w-[760px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          Six questions worth asking every agency, including us
        </h2>

        <p className="mt-5 max-w-[760px] font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
          These are the questions that separate agencies quickly. We have written down why
          each one matters so you can use them on us as well as on everyone else you speak
          to. If our answers do not satisfy you, that is useful information too.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {QUESTIONS.map((item, i) => (
            <div
              key={item.q}
              className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6"
            >
              <span className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-fj-display text-[16.5px] font-bold leading-[1.3] text-fj-ink">
                {item.q}
              </h3>
              <p className="mt-2.5 font-fj-body text-[14.5px] leading-[1.7] text-fj-neutral-600">
                {item.why}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-fj-display text-[clamp(21px,2.5vw,28px)] font-bold tracking-[-0.02em] text-fj-ink">
          How we compare with a traditional Brisbane agency
        </h3>
        <p className="mt-3 max-w-[760px] font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
          The last two rows are the ones worth reading. Every comparison table on the
          internet has the author winning every line, which is why nobody believes them.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">
              FactoryJet compared with a traditional Brisbane agency
            </caption>
            <thead>
              <tr className="border-b border-fj-neutral-200">
                <th
                  scope="col"
                  className="py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600"
                >
                  Dimension
                </th>
                <th
                  scope="col"
                  className="py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B23E13]"
                >
                  FactoryJet
                </th>
                <th
                  scope="col"
                  className="py-3 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600"
                >
                  Traditional agency
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.dimension} className="border-b border-fj-neutral-200 align-top">
                  <th
                    scope="row"
                    className="py-4 pr-4 font-fj-display text-[14.5px] font-bold text-fj-ink"
                  >
                    {r.dimension}
                  </th>
                  <td className="py-4 pr-4 font-fj-body text-[14.5px] leading-[1.65] text-fj-ink">
                    {r.us}
                  </td>
                  <td className="py-4 font-fj-body text-[14.5px] leading-[1.65] text-fj-neutral-600">
                    {r.them}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/**
 * Vendor-selection section. This is the centrepiece of the Melbourne page rather than a
 * footnote, because the Melbourne People-Also-Ask data is overwhelmingly about choosing:
 * "who is the best SEO agency in Melbourne", "what are some reputable SEO agencies in
 * Melbourne", "who are some SEO experts in Melbourne", "where can I find affordable SEO
 * services in Melbourne".
 *
 * We deliberately do NOT publish a ranked list of Melbourne competitors. Any such list
 * written by us is self-serving, and saying so is more useful to a reader than faking
 * neutrality.
 */

const QUESTIONS: Array<{ q: string; good: string; bad: string }> = [
  {
    q: 'Who will actually do the work?',
    good: 'A name, a role, and a yes to whether they will be on your calls.',
    bad: 'A vague reference to "the team" or a promise that you will be well looked after.',
  },
  {
    q: 'What happens if I leave in six months?',
    good: 'You keep the domain, the site, the content and admin access to everything.',
    bad: 'Any hesitation, or a mention of transfer fees, handover charges or licence terms.',
  },
  {
    q: 'Can you show me a site you built two years ago and run a speed test on it now?',
    good: 'They open it and run the test with you, whatever it says.',
    bad: 'Screenshots, a portfolio page, or an explanation of why that client changed things.',
  },
  {
    q: 'How did you choose these keywords?',
    good: 'Real search volume, checked against advertising data, with the numbers shown.',
    bad: 'A tool difficulty score alone, or a long list of terms with no volume attached.',
  },
  {
    q: 'What will you refuse to do?',
    good: 'A specific answer. Buying links is the obvious one and the most important.',
    bad: 'Nothing comes to mind, or whatever the client wants.',
  },
  {
    q: 'What should I see in ninety days, and what will still be unfinished?',
    good: 'A leading indicator with a date, plus honesty that authority takes quarters.',
    bad: 'A ranking promise, a position guarantee, or a date attached to page one.',
  },
];

export default function ChoosingSomeone() {
  return (
    <section
      id="choosing"
      aria-label="How to choose a Melbourne web designer or SEO consultant"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Choosing someone
        </p>

        <h2 className="mt-4 max-w-[800px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          Six questions that separate Melbourne agencies quickly
        </h2>

        <p className="mt-5 max-w-[800px] font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
          More people search for who to hire in Melbourne than for what the work costs, so
          this is the part of the page worth your time. Ask all six of whoever you are
          considering, including us. The answer column on the right is the one to watch:
          it is where the difference usually shows up.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <caption className="sr-only">
              Questions to ask a Melbourne agency, with good and poor answers
            </caption>
            <thead>
              <tr className="border-b border-fj-neutral-200">
                <th
                  scope="col"
                  className="w-[38%] py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600"
                >
                  Ask this
                </th>
                <th
                  scope="col"
                  className="py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B23E13]"
                >
                  A good answer sounds like
                </th>
                <th
                  scope="col"
                  className="py-3 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600"
                >
                  Walk away if you hear
                </th>
              </tr>
            </thead>
            <tbody>
              {QUESTIONS.map((r) => (
                <tr key={r.q} className="border-b border-fj-neutral-200 align-top">
                  <th
                    scope="row"
                    className="py-4 pr-4 font-fj-display text-[14.5px] font-bold leading-[1.4] text-fj-ink"
                  >
                    {r.q}
                  </th>
                  <td className="py-4 pr-4 font-fj-body text-[14.5px] leading-[1.65] text-fj-ink">
                    {r.good}
                  </td>
                  <td className="py-4 font-fj-body text-[14.5px] leading-[1.65] text-fj-neutral-600">
                    {r.bad}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 md:p-7">
          <h3 className="font-fj-display text-[18px] font-bold text-fj-ink">
            Why there is no list of the best Melbourne agencies on this page
          </h3>
          <p className="mt-3 max-w-[840px] font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
            Google shows several versions of that question to Melbourne searchers, so we know
            you are asking it. We are not going to answer it, because a ranked list of our own
            competitors written by us is marketing wearing a lab coat. Every agency that
            publishes one puts itself at the top and fills the rest with firms it does not
            compete against.
          </p>
          <p className="mt-3 max-w-[840px] font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
            Build your own shortlist instead. Search the terms you want to win and note who
            actually ranks, since that is a live demonstration rather than a claim. Ask other
            owners in your industry who they use and what went wrong. Then put the six
            questions above to each of them. Three conversations is usually enough.
          </p>
        </div>
      </div>
    </section>
  );
}

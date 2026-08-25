/**
 * How an engagement actually runs, and what we refuse to do.
 *
 * Added because the hub was short of the depth bar the other AU pages hit, and because
 * the "what will you refuse to do" question is the one that separates agencies fastest.
 * Everything here is a real constraint we work under rather than a benefit list.
 */

const STAGES: Array<{ name: string; length: string; body: string; yours: string }> = [
  {
    name: 'Free review',
    length: 'A few days',
    body: 'We crawl the site, check the Google Business Profile, read your Search Console data if you grant access, and look at who currently holds the positions you want. You get a written note on the three biggest problems.',
    yours: 'Site address, and read access to Search Console if you have it.',
  },
  {
    name: 'Demand check',
    length: 'A few days',
    body: 'Before anything is scoped, we verify that Australians actually search for what you sell, using Google Ads volume rather than impression counts. This is the step that decides whether there is a project at all, and sometimes the answer is that there is not.',
    yours: 'A list of what you sell and where you sell it.',
  },
  {
    name: 'Written scope',
    length: 'About a week',
    body: 'A document naming each piece of work, what it should achieve, roughly when, and what it depends on from you. Repair work is priced as fixed milestones. Ongoing content and link work is separate, so you can take one without the other.',
    yours: 'Time to read it properly and push back on anything vague.',
  },
  {
    name: 'Technical repair',
    length: 'Weeks',
    body: 'The finite work: indexing faults, speed, structure, internal linking, duplicate pages. This is where the fastest movement usually comes from, and it ends rather than continuing indefinitely.',
    yours: 'Access to the site and hosting, or an introduction to whoever holds it.',
  },
  {
    name: 'Content and local',
    length: 'A quarter or two',
    body: 'Pages built on verified terms, and the Google Business Profile corrected and maintained. We write drafts, you correct the things only you would know, we publish.',
    yours: 'Subject matter review. Nobody outside your business can supply this.',
  },
  {
    name: 'Earned links',
    length: 'Quarters',
    body: 'The slow lever, and the one that decides whether a competitive head term is reachable at all. Publishing things worth citing, genuine sponsorship, supplier and sector relationships.',
    yours: 'Introductions, and patience. This is the part with no shortcut.',
  },
];

const REFUSALS: Array<{ what: string; why: string }> = [
  {
    what: 'We do not buy links, and we will not work alongside someone who does',
    why: 'Paid link schemes breach Google spam policies. The recovery from a manual penalty costs more than the links did and takes months, during which the site earns less than before anyone started.',
  },
  {
    what: 'We do not publish thin pages for every suburb',
    why: 'It is the oldest tactic in local search and it stopped working years ago. It also creates dozens of near-identical pages that compete with each other, which is a problem you then pay someone to unpick.',
  },
  {
    what: 'We do not promise a position on a date',
    why: 'Google publishes that some changes take hours and others take months. Any date attached to a ranking is invented, and the agencies who give you one are counting on you having forgotten by the time it passes.',
  },
  {
    what: 'We do not hold your domain, hosting or accounts',
    why: 'Everything is in your name from day one. If a supplier will not agree to that, it is because leaving is meant to be difficult, and that tells you what the relationship is built on.',
  },
  {
    what: 'We do not build pages for terms with no Australian volume',
    why: 'We measured 297 Australian keywords in August 2026 and 77 of them returned nothing at all, including every localised AI SEO term. Building against those would have produced pages nobody could ever find.',
  },
  {
    what: 'We do not take the work when search is not your problem',
    why: 'If your traffic is fine and your enquiries are not, more traffic will not fix it. That is a conversion problem, and selling you search work for it would be taking money for something that cannot help.',
  },
];

export default function Engagement() {
  return (
    <section
      id="engagement"
      aria-label="How an engagement runs and what we refuse to do"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          How it runs
        </p>

        <h2 className="mt-4 max-w-[820px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          What the work looks like, and what it needs from you
        </h2>

        <p className="mt-5 max-w-[820px] font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
          The right-hand column is the one worth reading before you commit to anything. Search
          work fails more often through missing input from the client than through anything the
          agency does, and the two stages that need you most are the two that cannot be
          outsourced: subject matter review, and introductions.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left">
            <caption className="sr-only">
              The stages of a search engagement, how long each takes, and what it needs from you
            </caption>
            <thead>
              <tr className="border-b border-fj-neutral-200">
                <th scope="col" className="w-[16%] py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600">
                  Stage
                </th>
                <th scope="col" className="w-[13%] py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600">
                  Typical length
                </th>
                <th scope="col" className="py-3 pr-4 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-fj-neutral-600">
                  What happens
                </th>
                <th scope="col" className="w-[24%] py-3 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B23E13]">
                  What we need from you
                </th>
              </tr>
            </thead>
            <tbody>
              {STAGES.map((s) => (
                <tr key={s.name} className="border-b border-fj-neutral-200 align-top">
                  <th scope="row" className="py-4 pr-4 font-fj-display text-[14.5px] font-bold text-fj-ink">
                    {s.name}
                  </th>
                  <td className="py-4 pr-4 font-fj-body text-[14px] font-semibold text-fj-ink">
                    {s.length}
                  </td>
                  <td className="py-4 pr-4 font-fj-body text-[14.5px] leading-[1.65] text-fj-neutral-600">
                    {s.body}
                  </td>
                  <td className="py-4 font-fj-body text-[14.5px] leading-[1.65] text-fj-ink">
                    {s.yours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-16 font-fj-display text-[clamp(21px,2.5vw,28px)] font-bold tracking-[-0.02em] text-fj-ink">
          Six things we will not do
        </h3>
        <p className="mt-3 max-w-[820px] font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
          Ask any agency you are considering the same question. One that cannot name a single
          thing it refuses has either not thought about it or is willing to do things that will
          cost you later.
        </p>

        <p className="mt-4 max-w-[820px] font-fj-body text-[15px] leading-[1.75] text-fj-neutral-600">
          None of these are positions we took for marketing reasons. Each one comes from
          cleaning up after the opposite choice, usually for a business that inherited the
          problem from a previous supplier and had no idea it was there until the traffic
          fell away. The suburb pages are the most common of the six by a distance, and the
          bought links are the most expensive to undo.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {REFUSALS.map((r) => (
            <div key={r.what} className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
              <h4 className="font-fj-display text-[16px] font-bold leading-[1.35] text-fj-ink">
                {r.what}
              </h4>
              <p className="mt-2.5 font-fj-body text-[14.5px] leading-[1.7] text-fj-neutral-600">
                {r.why}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

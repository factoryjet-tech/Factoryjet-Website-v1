/**
 * Melbourne service detail, structured around the two engagement shapes (we execute, or
 * we advise and your team executes) rather than around a service list. That framing comes
 * straight from the local search data: the winnable Melbourne term is "seo consultant
 * melbourne", not "seo agency melbourne", and consultant intent is advisory.
 */

const BUILD: Array<{ title: string; body: string }> = [
  {
    title: 'Built to a measured standard, not a described one',
    body: 'Google publishes the marks it judges page experience on: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. We build against those numbers and show you the before and after measurement rather than telling you the site is fast.',
  },
  {
    title: 'Structured around what buyers search',
    body: 'One page per service you genuinely want enquiries for, named the way customers say it. A firm selling business restructuring advice needs a page called that, not one called advisory solutions. This is the single most common thing we change on Melbourne sites, and it is usually the cheapest.',
  },
  {
    title: 'Content that answers before it sells',
    body: 'Each page opens by answering the question that brought the reader there, then covers how the work runs, what it asks of you, what can go wrong, and what happens next. Pages written this way are also the ones AI assistants quote, because they contain answers rather than adjectives.',
  },
  {
    title: 'Integrated with what you already run',
    body: 'Practice management software, a booking system, a CRM, an accounting package. Most Melbourne businesses of any size already run something, and a website that ignores it creates double entry for whoever does your admin. We connect them where an interface exists and say plainly when one does not.',
  },
  {
    title: 'Handed over with nothing held back',
    body: 'Domain, hosting, site and admin access to every account, all in your name. If you leave, nothing breaks and nothing has to be bought back. We have taken on enough rescue work from businesses who did not own their own domain to be firm about this.',
  },
];

const ADVISE: Array<{ title: string; body: string }> = [
  {
    title: 'A diagnosis you can act on without us',
    body: 'A written audit that names each fault, ranks it by what it is costing you rather than by how hard it is to fix, and says who should do it. Plenty of Melbourne businesses take that document to their existing developer and never engage us further. That is a legitimate outcome and we price the audit so it works as a standalone piece.',
  },
  {
    title: 'Demand checked before anything is written',
    body: 'We verify search volume against Google Ads data before recommending a single page, because Search Console impressions can be inflated by rank-tracking software rather than by people. If a term has no genuine Australian volume, we say so. That check has already stopped us recommending several pages in this market that would have earned nothing.',
  },
  {
    title: 'A brief your team can execute',
    body: 'If you have a marketer or a developer, the most efficient arrangement is often that we set direction and they do the work. You get the judgement without paying agency rates for hours your own team can cover. We write the briefs, review what comes back, and stay out of the way otherwise.',
  },
  {
    title: 'Local search set up properly, once',
    body: 'Google Business Profile claimed, verified, categorised to the most specific option available, service areas set honestly, and business details made consistent across every directory you appear in. For most Melbourne businesses this is the highest-return hour available, and it is a one-off rather than a retainer.',
  },
  {
    title: 'Links earned, never bought',
    body: 'We earn mentions by making things worth mentioning: original local data, useful tools, genuine sponsorships and supplier relationships. We do not buy links, use private blog networks, or run automated outreach. Bought links are the fastest route to a manual penalty, and cleaning one up costs more than the links ever did.',
  },
  {
    title: 'Reporting aimed at enquiries',
    body: 'The search terms bringing people in, what they did after arriving, and how many enquiries came from search. Rankings are in there but they are the weakest number in the report. A first position on a term nobody searches is worth nothing, and we would rather show you the figure that pays wages.',
  },
];

function Block({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl border border-fj-neutral-200 bg-white p-6">
          <h4 className="font-fj-display text-[16.5px] font-bold leading-[1.3] text-fj-ink">
            {it.title}
          </h4>
          <p className="mt-2.5 font-fj-body text-[14.5px] leading-[1.7] text-fj-neutral-600">
            {it.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-label="How we work with Melbourne businesses"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Two ways to work with us
        </p>

        <h2 className="mt-4 max-w-[780px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          We build it, or we tell your team how to
        </h2>

        <p className="mt-5 max-w-[780px] font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
          Which one suits you depends on whether you have people. A Melbourne business with a
          marketing coordinator and a developer on retainer usually gets more from advice than
          from an agency contract. A business with neither is better off handing the whole
          thing over. We work out which during the free review, and we will tell you if the
          cheaper of the two is the better fit.
        </p>

        <h3
          id="web-design-melbourne"
          className="mt-14 font-fj-display text-[clamp(21px,2.5vw,28px)] font-bold tracking-[-0.02em] text-fj-ink"
        >
          Web design in Melbourne, when we build it
        </h3>
        <p className="mt-3 max-w-[760px] font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
          We design and build the site, rework the content with you, and launch it. A
          straightforward site of up to five pages goes live within seven days of an approved
          scope. Builds with bookings, logins or integrations take longer, and you get the
          date at scope rather than discovering it in week six.
        </p>
        <Block items={BUILD} />

        <h3
          id="seo-consultant-melbourne"
          className="mt-16 font-fj-display text-[clamp(21px,2.5vw,28px)] font-bold tracking-[-0.02em] text-fj-ink"
        >
          SEO consulting in Melbourne, when your team executes
        </h3>
        <p className="mt-3 max-w-[760px] font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
          Google itself says some changes take effect in a few hours and others take several
          months, and advises waiting a few weeks before judging whether a change helped. An
          advisory engagement is built around that reality: sequence the work by payback,
          measure, and adjust, rather than committing to a fixed monthly output.
        </p>
        <Block items={ADVISE} />
      </div>
    </section>
  );
}

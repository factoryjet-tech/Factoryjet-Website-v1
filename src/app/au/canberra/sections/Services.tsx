/**
 * Canberra service detail. Organised around the two things this market actually buys:
 * a site that passes a verification read, and search work in an unusually open field.
 */

const BUILD: Array<{ title: string; body: string }> = [
  {
    title: 'Accessible from the first commit',
    body: 'We build against the WCAG success criteria as we go and hand over a written test result at launch. Retrofitting accessibility after a site is finished costs several times more than including it, and produces a worse outcome, because some of the failures are structural rather than cosmetic.',
  },
  {
    title: 'Built to be verified, not just admired',
    body: 'Named credentials, dated projects, real people with real roles, and the currency signals a checker looks for. If your last news item is from 2024, that is the first thing an assessor notices. We build the site so keeping it current takes minutes rather than a support ticket.',
  },
  {
    title: 'Documents turned into pages',
    body: 'Annual reports, submissions, position papers and capability statements usually live as files in a downloads list. Published as real pages, with the file as a secondary option, they become searchable, readable on a phone, accessible to a screen reader, and findable in Google. This is the highest-return change available to most Canberra organisations.',
  },
  {
    title: 'Speed measured against the published marks',
    body: 'Google publishes what it judges: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. We build to those and show you the measurement before and after rather than describing the site as fast.',
  },
  {
    title: 'Separate paths for separate audiences',
    body: 'Members and departments. People seeking help and people funding it. Trade and public. Where an organisation has two audiences, it needs two clear routes from the home page rather than one message hedging between them. Almost every association site we review is doing the hedged version.',
  },
  {
    title: 'Code and accounts in your name',
    body: 'Domain, hosting, source code and admin access, all yours from day one. This matters more in Canberra than elsewhere because contracts and grant conditions frequently ask who owns the work. The answer should be you, and it should be provable.',
  },
];

const SEARCH: Array<{ title: string; body: string }> = [
  {
    title: 'A genuinely open field, for now',
    body: 'The weakest organisation holding a first-page Canberra SEO position had links from seven other websites when we measured in August 2026. In Sydney the equivalent figure was 119. That gap is the opportunity, and it exists because Canberra is small enough that few agencies have bothered to compete here properly.',
  },
  {
    title: 'Demand verified before anything is written',
    body: 'We check search volume against Google Ads data rather than trusting impression counts, which can be inflated by rank-tracking software. Canberra is small, so some terms that look worthwhile have almost no real volume. We say when that is the case rather than building pages to fill a content plan.',
  },
  {
    title: 'Honest about when search is the wrong tool',
    body: 'A fair number of Canberra organisations reach their audience through member networks, mailing lists or formal processes, not through a search box. For those, search work is a poor use of money and we will say so. Being told not to buy something is the most useful thing an agency can do for that group.',
  },
  {
    title: 'Local listing done once, properly',
    body: 'Google Business Profile claimed, verified, categorised specifically, and set to the areas you genuinely serve. Note that Google requires in-person customer contact for a listing, so a consultancy operating entirely online does not qualify. Attempting it anyway usually ends in a suspension, and we will tell you before you try.',
  },
  {
    title: 'Links earned, never bought',
    body: 'Submissions, research, member resources and genuine sector relationships are what earn references in this city. We do not buy links or run automated outreach. For association and advocacy organisations this is easier than most, because you are already producing the kind of material other sites cite.',
  },
  {
    title: 'Reporting aimed at what you actually need',
    body: 'For a supplier that means enquiries. For an association it might be membership applications or document downloads. We agree the number before the work starts and report against it, rather than defaulting to a rankings dashboard that flatters everyone and informs nobody.',
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
      aria-label="Web design and SEO services in Canberra"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          What we do
        </p>

        <h2 className="mt-4 max-w-[800px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          Build it to be checked, then get it found
        </h2>

        <p className="mt-5 max-w-[800px] font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
          Those are the two jobs in this city, in that order. A Canberra site that cannot
          survive a verification read does not benefit from more traffic. Once it can, the
          search side here is more winnable than anywhere else in the country.
        </p>

        <h3
          id="web-design-canberra"
          className="mt-14 font-fj-display text-[clamp(21px,2.5vw,28px)] font-bold tracking-[-0.02em] text-fj-ink"
        >
          Web design in Canberra
        </h3>
        <Block items={BUILD} />

        <h3
          id="seo-canberra"
          className="mt-16 font-fj-display text-[clamp(21px,2.5vw,28px)] font-bold tracking-[-0.02em] text-fj-ink"
        >
          SEO in Canberra
        </h3>
        <Block items={SEARCH} />
      </div>
    </section>
  );
}

/**
 * Adelaide service detail, organised by WHO THE BUYER IS rather than by service name.
 *
 * That structure comes from the local market: South Australian businesses skew towards
 * selling to other businesses and to government, and the work needed for a procurement
 * audience is genuinely different from the work needed for a walk-in audience. Splitting
 * on that axis is more useful to an Adelaide reader than another list of deliverables.
 */

const B2B: Array<{ title: string; body: string }> = [
  {
    title: 'Pages that survive a procurement review',
    body: 'A buying committee checks capability, certifications, insurance, past projects and whether you look likely to still exist in three years. That means real project detail, named accreditations, and dates. Vague claims about quality and partnership actively hurt you here, because the reader is looking for something to verify and finding nothing.',
  },
  {
    title: 'Depth over speed of contact',
    body: 'A procurement reader will visit several times over weeks before making contact. Optimising that page for an immediate enquiry is the wrong goal. What works is making it easy to return to, easy to send to a colleague, and easy to extract a specification from without having to ask you for it.',
  },
  {
    title: 'Documents that are actually findable',
    body: 'Capability statements, specification sheets and compliance documents are usually buried in a downloads page nobody visits. Putting the content on real pages, with the document as a secondary option, makes it findable in Google and readable on a phone. This alone has moved enquiry volume for manufacturers we have worked with.',
  },
  {
    title: 'Search work aimed at national terms',
    body: 'If you sell nationally from Adelaide, your Google Business Profile is close to irrelevant and your service pages are everything. We check where your buyers actually search before recommending anything, and for a good number of South Australian manufacturers the honest answer is that local SEO is not where the money is.',
  },
];

const LOCAL: Array<{ title: string; body: string }> = [
  {
    title: 'Found on a phone, close to the moment of deciding',
    body: 'Someone choosing where to go this afternoon searches on a phone, looks at the map results, checks the photographs and the reviews, and calls. The website is often the third thing they see, not the first. That makes the Google Business Profile the highest-value asset you have, and a complete, well-photographed one outperforms a beautiful site with a neglected listing.',
  },
  {
    title: 'Speed measured, not asserted',
    body: 'Google publishes the marks it judges page experience on: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. We build against those and show you the before and after rather than describing the site as fast.',
  },
  {
    title: 'Reviews treated as a system, not a favour',
    body: 'Reviews are the single strongest thing a local Adelaide business can influence, and most do it ad hoc. We set up a simple, repeatable way of asking at the right moment and answering every one. It is unglamorous and it moves the map results more reliably than most things we could sell you.',
  },
  {
    title: 'Two audiences, two paths',
    body: 'If you sell to trade and to the public, the home page needs two clear routes rather than one hedged message. That is more work than a single path and it converts considerably better. Cellar doors, wholesalers and suppliers with a retail arm all need this and almost none of them have it.',
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
      aria-label="Web design and SEO services in Adelaide"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          What we do
        </p>

        <h2 className="mt-4 max-w-[800px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          The work depends on who is reading, not on which package you pick
        </h2>

        <p className="mt-5 max-w-[800px] font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
          Adelaide businesses divide fairly cleanly into two kinds, and the right approach for
          one is close to wasted on the other. Work out which you are before you buy anything
          from anybody. If you are genuinely both, you need two paths through the site rather
          than a compromise between them.
        </p>

        <h3
          id="b2b-adelaide"
          className="mt-14 font-fj-display text-[clamp(21px,2.5vw,28px)] font-bold tracking-[-0.02em] text-fj-ink"
        >
          If you sell to businesses or to government
        </h3>
        <p className="mt-3 max-w-[760px] font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
          Defence suppliers, manufacturers, engineering firms, wholesalers and professional
          services. Your buyer is a committee working to a process, reading over weeks, and
          checking whether you can be verified. The website is a due diligence document that
          happens to look like marketing.
        </p>
        <Block items={B2B} />

        <h3
          id="local-adelaide"
          className="mt-16 font-fj-display text-[clamp(21px,2.5vw,28px)] font-bold tracking-[-0.02em] text-fj-ink"
        >
          If you sell locally to the public
        </h3>
        <p className="mt-3 max-w-[760px] font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
          Trades, clinics, cellar doors, hospitality and retail. Your buyer is on a phone,
          deciding soon, and comparing you against two or three others on a map. Speed,
          reviews and a complete listing matter more than anything you could put in a brand
          statement.
        </p>
        <Block items={LOCAL} />
      </div>
    </section>
  );
}

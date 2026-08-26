/**
 * The two service blocks: web design, then SEO. This carries most of the page depth.
 *
 * Structured as two H3 blocks under one H2 rather than as a card grid, because the page
 * has to rank for two distinct head terms ("web design brisbane" and "seo agency
 * brisbane") and each needs enough genuine prose to be the answer to its own query.
 */

const WEB_DESIGN: Array<{ title: string; body: string }> = [
  {
    title: 'A build that survives contact with a phone',
    body: 'Most Brisbane enquiries arrive on a phone, often on mobile data somewhere with poor reception. We build for that case first and let the desktop version follow. Google publishes the marks it uses to judge this: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. Those are the numbers we build against, and we show you the measurement before and after rather than describing the site as fast.',
  },
  {
    title: 'Pages arranged the way buyers think',
    body: 'One page per service you actually want enquiries for, named the way customers say it rather than the way your industry says it. A tiler who sells bathroom waterproofing needs a page called bathroom waterproofing, not one called remedial membrane systems. This sounds obvious and it is the single most common thing we fix on Brisbane sites.',
  },
  {
    title: 'Content that answers before it sells',
    body: 'Each service page opens by answering the question that brought the reader there, then explains how the job works, what it costs you in time, what can go wrong, and what happens next. Selling comes after answering. Pages built this way also happen to be the ones that get quoted by AI assistants, because they contain actual answers rather than adjectives.',
  },
  {
    title: 'Contact that matches how people buy',
    body: 'A trade business needs a tappable phone number in the first screen and very little else. A professional services firm needs a short form and a clear sense of what happens after they send it. We match the contact method to the buying behaviour rather than putting the same eight-field form on every page and hoping.',
  },
  {
    title: 'Handover with nothing held back',
    body: 'You get the domain, the hosting, the site and admin access to every account involved, in your own name. If you leave, nothing breaks and nothing needs to be bought back. We have taken on enough rescue jobs from businesses who did not own their own domain to be firm about this.',
  },
];

const SEO_WORK: Array<{ title: string; body: string }> = [
  {
    title: 'Technical repair, done first',
    body: 'We crawl the site the way Google does and fix what stops it being read: pages blocked in robots.txt, leftover noindex tags from a staging site, content that only appears after JavaScript runs, broken internal links, and duplicate versions of the same page competing with each other. This is unglamorous and it is the work that makes everything after it worth doing.',
  },
  {
    title: 'Google Business Profile, properly set up',
    body: 'For most Brisbane businesses this is the highest-return hour of work available. Claim it, verify it, choose the most specific primary category rather than a broad one, set service areas to where you genuinely go, add real photographs of real jobs, and answer every review. Maps ranking leans heavily on how close the searcher is to you, so the listing does work the website cannot.',
  },
  {
    title: 'Consistent details across the web',
    body: 'Your business name, address and phone number need to be identical everywhere they appear, including listings you created years ago and forgot. Inconsistency here quietly holds back local ranking, and it is the kind of problem that never announces itself. We find the old listings and either correct them or get them removed.',
  },
  {
    title: 'Pages built for terms people actually search',
    body: 'We check demand against Google Ads volume before writing anything, because search console impressions can be inflated by rank-tracking software rather than by real people. If a term has no genuine volume in Australia, we say so and we do not build a page for it. That has already stopped us building several pages in this market that would have earned nothing.',
  },
  {
    title: 'Links earned, never bought',
    body: 'We earn mentions by making things worth mentioning: original local data, useful tools, genuine sponsorship and supplier relationships. We do not buy links, use private blog networks, or run automated outreach. Bought links are the fastest way to a manual penalty, and cleaning one up costs more than the links ever bought.',
  },
  {
    title: 'Reporting on enquiries, not rankings',
    body: 'Every month you get the search terms bringing people in, what they did once they arrived, and how many enquiries came from search. Rankings are included but they are the weakest number in the report. A first position on a term nobody searches is worth nothing, and we would rather show you the number that pays your wages.',
  },
];

function Block({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
      {items.map((it) => (
        <div
          key={it.title}
          className="rounded-2xl border border-fj-neutral-200 bg-white p-6"
        >
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
      aria-label="Web design and SEO services in Brisbane"
      className="w-full bg-fj-cream"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          What we do
        </p>

        <h2 className="mt-4 max-w-[780px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          Two services, and they are better together than apart
        </h2>

        <p className="mt-5 max-w-[760px] font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
          A fast site nobody can find earns nothing. Ranking a site that does not convert
          earns nothing either. Most Brisbane businesses that come to us need some of both,
          and the sequence depends on which side is currently weaker. We work that out during
          the free review rather than selling you the package we would prefer to sell.
        </p>

        {/* ---- Web design ---- */}
        <h3
          id="web-design-brisbane"
          className="mt-14 font-fj-display text-[clamp(21px,2.5vw,28px)] font-bold tracking-[-0.02em] text-fj-ink"
        >
          Web design in Brisbane
        </h3>
        <p className="mt-3 max-w-[760px] font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
          We design and build the site, write or rework the content with you, and launch it.
          A straightforward site of up to five pages goes live within seven days of an
          approved scope. Larger builds with bookings, customer logins or integrations into
          software you already run take longer, and we give you a date at scope rather than
          discovering it later.
        </p>
        <Block items={WEB_DESIGN} />

        {/* Editorial band: the build in progress, between the two service blocks */}
        <figure className="m-0 mt-12 overflow-hidden rounded-2xl border border-fj-neutral-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/au/brisbane/process-desk-768.webp"
            srcSet="/images/au/brisbane/process-desk-768.webp 768w, /images/au/brisbane/process-desk-1200.webp 1200w"
            sizes="(max-width: 1120px) 92vw, 1088px"
            alt="A FactoryJet website build in progress: layout blocks on dual monitors in the studio"
            width={1200}
            height={800}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </figure>

        {/* ---- SEO ---- */}
        <h3
          id="seo-brisbane"
          className="mt-16 font-fj-display text-[clamp(21px,2.5vw,28px)] font-bold tracking-[-0.02em] text-fj-ink"
        >
          SEO in Brisbane
        </h3>
        <p className="mt-3 max-w-[760px] font-fj-body text-[15.5px] leading-[1.75] text-fj-neutral-600">
          Search work runs in the order below because that is the order that pays back
          fastest. Google itself says some changes take effect in a few hours while others
          take several months, and advises waiting a few weeks before judging whether a change
          helped. We plan against that reality rather than against a launch date.
        </p>
        <Block items={SEO_WORK} />
      </div>
    </section>
  );
}

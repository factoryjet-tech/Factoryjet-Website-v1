/**
 * "The people behind the build" for /au/brisbane.
 *
 * Direction A editorial layer: the page claimed "senior engineers do the work" in prose;
 * this section shows it. Portraits are labelled by ROLE only, deliberately without names
 * or fabricated biographies, so the section carries no fake-social-proof risk (same
 * doctrine as the aggregateRating comment in page.tsx). Imagery is AI-generated and was
 * reviewed for hand/face/text artefacts per the 2026-08-03 imagery rule.
 *
 * Static server component. Images lazy-load below the fold.
 */

const TEAM: Array<{ img: string; role: string; line: string; alt: string }> = [
  {
    img: '/images/au/brisbane/team-engineer-480',
    role: 'Senior engineer',
    line: 'Ships the build. Twelve-plus years of production experience, working on your site from day one, never passed to juniors.',
    alt: 'A senior FactoryJet engineer at her desk with website wireframes on screen',
  },
  {
    img: '/images/au/brisbane/team-designer-480',
    role: 'Design lead',
    line: 'Owns how it looks and whether it converts. Approves every layout against the brief before a line of code is written.',
    alt: 'A FactoryJet design lead annotating printed homepage wireframes at a studio desk',
  },
  {
    img: '/images/au/brisbane/team-seo-480',
    role: 'SEO lead',
    line: 'Owns whether you get found. Technical repair, Google Business Profile and the reporting you actually read each month.',
    alt: 'A FactoryJet SEO lead beside monitors showing search analytics charts',
  },
];

export default function TeamSection() {
  return (
    <section
      id="brisbane-team"
      aria-label="The people who do the work"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
          Who does the work
        </p>

        <h2 className="mt-4 max-w-[760px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
          The people behind the build
        </h2>

        <p className="mt-5 max-w-[720px] font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
          Every Brisbane project is run by the same small senior team. You talk to the people
          doing the work, in Australian hours, from the first call to the handover.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TEAM.map((m) => (
            <figure key={m.role} className="m-0">
              <div className="overflow-hidden rounded-2xl border border-fj-neutral-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${m.img}.webp`}
                  srcSet={`${m.img}-480.webp 480w, ${m.img.replace('-480', '')}-800.webp 800w`}
                  sizes="(max-width: 640px) 92vw, 340px"
                  alt={m.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-4">
                <span className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
                  {m.role}
                </span>
                <p className="mt-2 font-fj-body text-[14px] leading-[1.65] text-fj-neutral-600">
                  {m.line}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

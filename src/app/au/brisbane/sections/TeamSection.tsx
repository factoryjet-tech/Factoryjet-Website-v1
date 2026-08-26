/**
 * "The people behind the build" for /au/brisbane.
 *
 * Uses the real FactoryJet team photo from the shared assets, not AI-generated
 * portraits. The photo shows the actual team at work, which is honest and avoids
 * the fabricated-social-proof risk entirely.
 *
 * Static server component. Image lazy-loads below the fold.
 */

export default function TeamSection() {
  return (
    <section
      id="brisbane-team"
      aria-label="The people who do the work"
      className="w-full bg-white"
      style={{ maxWidth: '100vw' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[55%_1fr] lg:gap-16">
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#B23E13]">
              Who does the work
            </p>

            <h2 className="mt-4 max-w-[760px] font-fj-display text-[clamp(24px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.02em] text-fj-ink">
              The people behind the build
            </h2>

            <p className="mt-5 max-w-[720px] font-fj-body text-[16.5px] leading-[1.7] text-fj-ink">
              Every Brisbane project is run by the same small senior team. You talk to
              the people doing the work, in Australian hours, from the first call to
              the handover.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  role: 'Senior engineer',
                  line: 'Ships the build. Twelve-plus years of production experience, working on your site from day one, never passed to juniors.',
                },
                {
                  role: 'Design lead',
                  line: 'Owns how it looks and whether it converts. Approves every layout against the brief before a line of code is written.',
                },
                {
                  role: 'SEO lead',
                  line: 'Owns whether you get found. Technical repair, Google Business Profile and the reporting you actually read each month.',
                },
              ].map((m) => (
                <div key={m.role} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#B23E13]"
                  />
                  <div>
                    <span className="font-fj-display text-[15px] font-bold text-fj-ink">
                      {m.role}
                    </span>
                    <span className="font-fj-body text-[15px] text-fj-neutral-600">
                      {' '}&mdash; {m.line}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <figure className="m-0">
            <div className="overflow-hidden rounded-2xl border border-fj-neutral-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/us/services/service-team.webp"
                alt="The FactoryJet team collaborating on a client project"
                width={800}
                height={600}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

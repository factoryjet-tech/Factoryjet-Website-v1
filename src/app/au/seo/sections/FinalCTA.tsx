import Link from 'next/link';
import AuModalButton from '@/app/au/components/AuModalButton';

/**
 * Closing CTA and the SINGLE dark section on this page, sitting immediately above the
 * footer. Also carries the links down to the four city pages so the hub is a real hub.
 */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export default function FinalCTA() {
  return (
    <section
      aria-label="Talk to us about search in Australia"
      className="w-full"
      style={{ backgroundColor: '#14110F' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 sm:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[58%_1fr] lg:gap-16">
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#FF8A4C]">
              Next step
            </p>

            <h2 className="mt-4 font-fj-display text-[clamp(26px,3.4vw,40px)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
              Find out whether search is worth your money
            </h2>

            <p className="mt-5 max-w-[620px] font-fj-body text-[16.5px] leading-[1.7] text-[#D9D2CC]">
              Send us your address. We crawl the site, check your Google Business Profile, read
              your own Search Console data, and measure the businesses currently holding the
              positions you want. You get a written summary of the three biggest problems and
              an honest view of whether the gap is closeable. No charge, and if the answer is
              that search is not your real problem, that is what we will tell you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/*
                Explicit classes rather than au-home.css `.primary`, whose rules are scoped
                under `.auh` and would not apply here. #F05A28 with white text only at 16px
                and 700 weight, which clears the large-text contrast bar.
              */}
              <AuModalButton
                ctaId="au_seo_hub_final_cta"
                className="inline-flex items-center justify-center rounded-full bg-[#F05A28] px-7 py-3.5 font-fj-body text-[16px] font-bold text-white transition-colors hover:bg-[#D8441A]"
              >
                Get a free site review
              </AuModalButton>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="font-fj-body text-[15px] font-semibold text-white underline underline-offset-4"
              >
                Or book a 30 minute call
              </a>
            </div>

            <p className="mt-5 font-fj-body text-[13.5px] text-[#A79C93]">
              Bhavesh replies within one business day, Australian hours.
            </p>
          </div>

          <aside>
            <div
              className="rounded-2xl p-6"
              style={{ border: '1px solid #3A332E', backgroundColor: '#1C1815' }}
            >
              <h3 className="font-fj-display text-[16px] font-bold text-white">
                SEO by city
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  { href: '/au/brisbane', label: 'Brisbane' },
                  { href: '/au/melbourne', label: 'Melbourne' },
                  { href: '/au/adelaide', label: 'Adelaide' },
                  { href: '/au/canberra', label: 'Canberra' },
                  { href: '/au', label: 'Web design across Australia' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-fj-body text-[14.5px] leading-[1.6] text-[#D9D2CC] underline underline-offset-2 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

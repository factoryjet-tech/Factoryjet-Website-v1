import Link from 'next/link';
import AuModalButton from '@/app/au/components/AuModalButton';

/**
 * Closing CTA. This is the SINGLE dark section on the page, and it sits immediately above
 * the footer, per the house rule of at most one dark section placed mid-page or near the
 * footer. The hero and every body section stay light.
 *
 * Also carries the internal links up to the AU hub and across to the sibling city pages,
 * so the page is not a dead end for a crawler.
 */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export default function FinalCTA() {
  return (
    <section
      aria-label="Talk to us about your Brisbane project"
      className="w-full"
      style={{ backgroundColor: '#14110F' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-12 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[58%_1fr] lg:gap-16">
          <div>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#FF8A4C]">
              Next step
            </p>

            <h2 className="mt-4 font-fj-display text-[clamp(26px,3.4vw,40px)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
              Find out what is actually holding your Brisbane site back
            </h2>

            <p className="mt-5 max-w-[600px] font-fj-body text-[16.5px] leading-[1.7] text-[#D9D2CC]">
              Send us the address. We crawl the site, check your Google Business Profile and
              read your own Search Console data, then send back a short written summary of the
              three biggest problems and what each one is costing you. No charge, and no
              obligation to go any further.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/*
                Explicit classes, not the au-home.css `.primary` class: those rules are
                scoped under `.auh`, which this page is not inside, so `.primary` alone
                would render an unstyled button here.
                #F05A28 with white text is only used at 16px+ and 700 weight, which clears
                the large-text contrast bar; smaller white-on-orange would not.
              */}
              <AuModalButton
                ctaId="au_brisbane_final_cta"
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
                More from FactoryJet Australia
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  { href: '/au', label: 'Web design and development in Australia' },
                  { href: '/au/melbourne', label: 'Web design and SEO in Melbourne' },
                  { href: '/au/adelaide', label: 'Web design and SEO in Adelaide' },
                  { href: '/au/canberra', label: 'Web design and SEO in Canberra' },
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

import Image from "next/image";
import UkAuditButton from "@/app/uk/sections/UkAuditButton";

/*
 * Hero. Light by house rule: cream ground, ink type, image carried in a card on
 * the right rather than washed behind the text. The old build was a full-bleed
 * dark photo with a black gradient over it, which is the one thing the brand
 * anchor says a hero may never be.
 *
 * Asymmetric 7/5 split, left aligned. The subheading is deliberately 40 to 60
 * words: it is the answer-first block, so it has to stand on its own if an
 * answer engine lifts it out of the page.
 */

const TRUST = [
  "Fixed-price milestones, no day rates",
  "Reply within 4 business hours",
  "You keep the code, content and data",
];

export default function Hero() {
  // 2026-09-26 (perf): server component. The GSAP fade-up on the eyebrow, H1,
  // subhead (the LCP text), CTAs and trust bar was removed, so they paint in their
  // final state with the HTML. Only the audit button hydrates, via UkAuditButton.

  return (
    <section id="hero" className="bg-fj-cream pb-14 pt-8 md:pb-20 md:pt-10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">

          {/* Left: 7 of 12 */}
          <div className="lg:col-span-7">
            <p
              className="font-fj-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#B23E13]"
            >
              SEO agency Manchester
            </p>

            <h1
              className="mt-4 font-fj-display text-3xl font-bold leading-[1.12] text-fj-ink md:text-4xl lg:text-5xl"
            >
              SEO and web design in Manchester, built to bring in enquiries
            </h1>

            <p
              className="mt-5 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600 md:text-lg"
            >
              We are an SEO and web design agency working with Manchester and Greater Manchester
              businesses. We fix whatever stops search engines reading your site, build a proper
              page for each thing you sell, keep your local listings straight, and then earn the
              mentions that hold a position. You keep the code, the content and the data.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <UkAuditButton
                trackName="get_free_site_review"
                location="manchester_hero"
                className="rounded-full bg-[#F05A28] px-6 py-3 text-lg font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get a free site review
              </UkAuditButton>
              <a
                href="https://wa.me/919699977699"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-fj-neutral-200 bg-white px-6 py-3 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:bg-fj-neutral-50"
              >
                Message us on WhatsApp
              </a>
            </div>

            <ul
              className="mt-7 flex flex-wrap gap-x-7 gap-y-2 font-fj-body text-sm text-fj-neutral-600"
            >
              {TRUST.map((badge) => (
                <li key={badge} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 flex-none rounded-full bg-[#B23E13]"
                  />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: 5 of 12 */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-fj-neutral-100">
              <Image
                src="/images/manchester/hero-people.webp"
                alt="Business owners working together in a Manchester office"
                fill
                priority
                quality={72}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

/**
 * Answer-first block, sits directly under the hero.
 *
 * /uk is the country hub. Its job is to answer "what is this and where do I go
 * next" in the first screen after the fold, then route the reader to the right
 * service hub or city page. Everything here is a real anchor so both readers
 * and crawlers can follow it.
 *
 * Static server component. No client JS.
 */

const SERVICE_HUBS: Array<{ href: string; label: string; blurb: string }> = [
  {
    href: "/uk/web-design",
    label: "Web design",
    blurb: "Next.js builds for UK businesses that need a site to earn its keep.",
  },
  {
    href: "/uk/ecommerce-development",
    label: "E-commerce development",
    blurb: "Shopify, Shopify Plus, WooCommerce and headless storefronts.",
  },
  {
    href: "/uk/shopify-development",
    label: "Shopify development",
    blurb: "Theme work, app integrations and Shopify Plus migrations.",
  },
  {
    href: "/uk/ai-agents",
    label: "AI agents",
    blurb: "Agents that answer, qualify, and push data into your own systems.",
  },
  {
    href: "/uk/ai-seo",
    label: "AI SEO (GEO, AEO, AIO)",
    blurb: "Being the source AI answers quote, not just a blue link.",
  },
  {
    href: "/uk/seo",
    label: "SEO",
    blurb: "Technical fixes, content and links for UK organic search.",
  },
  {
    href: "/uk/local-seo",
    label: "Local SEO",
    blurb: "Google Business Profile, local packs and multi-branch listings.",
  },
  {
    href: "/uk/ecommerce-seo",
    label: "E-commerce SEO",
    blurb: "Category, product and facet pages that actually get indexed.",
  },
  {
    href: "/uk/shopify-seo",
    label: "Shopify SEO",
    blurb: "Fixing the crawl, speed and duplication traps Shopify ships with.",
  },
  {
    href: "/uk/seo-audit",
    label: "SEO audit",
    blurb: "A one-off technical audit with a prioritised list of fixes.",
  },
];

const IN_SHORT: string[] = [
  "We are a digital agency working with UK businesses across web design, e-commerce, AI agents and search.",
  "Everything is built on one stack, Next.js and Tailwind, so the site, the shop and the search work do not fight each other.",
  "Work is scoped in writing first, then delivered on fixed-price milestones, a one-off audit, or a monthly retainer.",
  "Every build is set up to be readable by Google and by AI answer engines from the first day it goes live.",
  "There are ten UK service hubs and twenty-one UK city pages under this one, each written for its own job.",
  "We are remote-first and work in UK hours, so there is no travel cost baked into a quote.",
  "You talk to the engineers doing the work, not to an account manager who relays messages.",
];

export default function AnswerFirst() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="w-full border-y border-fj-neutral-200 bg-white"
      style={{ maxWidth: "100vw" }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:px-8 md:py-20">
        {/* Asymmetric 7/5 split, left-aligned */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B23E13]">
              Start here
            </p>
            <h2
              id="what-we-do-heading"
              className="font-fj-display mt-3 text-fj-ink"
              style={{
                fontWeight: 700,
                fontSize: "clamp(24px, 3.2vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
              }}
            >
              What FactoryJet does for UK businesses
            </h2>

            {/* Answer-first paragraph: direct, no wind-up. */}
            <p className="font-fj-body mt-5 max-w-2xl text-[17px] leading-relaxed text-fj-neutral-600">
              FactoryJet is an AI-native digital agency for UK businesses. We
              build websites and online shops, we build AI agents that do real
              work inside a business, and we do the search work that gets those
              pages found by Google and quoted by AI assistants. One team, one
              stack, scoped and quoted in writing before anything starts. This
              page is the front door: pick the service hub or the city below and
              you land on the page written for that exact job.
            </p>

            <h3 className="font-fj-display mt-8 text-lg font-bold text-fj-ink">
              In short
            </h3>
            <ul className="font-fj-body mt-3 max-w-2xl list-none space-y-2.5 p-0 text-[15px] leading-relaxed text-fj-neutral-600">
              {IN_SHORT.map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full"
                    style={{ backgroundColor: "#F05A28" }}
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right rail, 5 of 12: routing block */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 md:p-7">
              <h3 className="font-fj-display text-lg font-bold text-fj-ink">
                Go straight to a UK service hub
              </h3>
              <p className="font-fj-body mt-2 text-[14px] leading-relaxed text-fj-neutral-600">
                Ten hubs, each with its own pricing shape, process and FAQs.
              </p>
              <ul className="mt-4 list-none space-y-3 p-0">
                {SERVICE_HUBS.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="font-fj-body block text-[15px] font-semibold text-fj-ink underline-offset-4 hover:underline"
                    >
                      {s.label}
                    </Link>
                    <span className="font-fj-body block text-[13.5px] leading-snug text-fj-neutral-600">
                      {s.blurb}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-fj-body mt-5 border-t border-fj-neutral-200 pt-4 text-[14px] leading-relaxed text-fj-neutral-600">
                Looking for a city instead?{" "}
                <a
                  href="#cities"
                  data-lenis-scroll
                  className="font-semibold text-fj-ink underline underline-offset-4"
                >
                  Jump to the 21 UK city pages
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

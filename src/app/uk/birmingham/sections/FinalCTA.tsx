import Link from "next/link";
import UkAuditButton from "@/app/uk/sections/UkAuditButton";

const CITIES = [
  { name: "Leeds", slug: "leeds" },
  { name: "Manchester", slug: "manchester" },
  { name: "Sheffield", slug: "sheffield" },
  { name: "Bristol", slug: "bristol" },
  { name: "Edinburgh", slug: "edinburgh" },
  { name: "Liverpool", slug: "liverpool" },
  { name: "Glasgow", slug: "glasgow" },
  { name: "Newcastle", slug: "newcastle" },
  { name: "Nottingham", slug: "nottingham" },
];

// 2026-08-25: these pointed at /uk/birmingham/{web-design,ecommerce,ai-agents,ai-seo}.
// Those four routes were retired in the August doorway-page consolidation, so all four
// links had been hard 404s sitting in the closing block of the page. They now point at the
// national hubs that actually exist. Check the route exists before adding to this list.
const SERVICES = [
  { name: "SEO", href: "/uk/seo" },
  { name: "Local SEO", href: "/uk/local-seo" },
  { name: "AI SEO", href: "/uk/ai-seo" },
  { name: "SEO Audit", href: "/uk/seo-audit" },
  { name: "Web Design", href: "/uk/web-design" },
  { name: "E-Commerce", href: "/uk/ecommerce-development" },
  { name: "AI Agents", href: "/uk/ai-agents" },
];

// Birmingham-specific watermarks
const WATERMARKS: Array<{
  label: string;
  top: string;
  left: string;
  rotate: number;
}> = [
  { label: "£31.9bn", top: "8%", left: "4%", rotate: -6 },
  { label: "60,000", top: "14%", left: "78%", rotate: 5 },
  { label: "2.6M", top: "62%", left: "6%", rotate: 4 },
  // Was "7-day", implying a seven day delivery promise that the FAQ on this same page
  // contradicts. Replaced with something the page actually offers.
  { label: "Free review", top: "68%", left: "72%", rotate: -5 },
];

/**
 * Closing CTA.
 *
 * 2026-08-25: this band was a solid #F05A28 carrying white text down to 12.5px. White on
 * that orange measures roughly 3.4:1, which fails at anything below large-text size, and
 * most of the copy in here sits below it. It now uses the charcoal token instead, which is
 * also the ONE dark section this page is allowed, sitting directly above the footer.
 */
export default function FinalCTA() {
  // 2026-09-26 (perf): server component. The review button is the shared
  // UkAuditButton island with the same tracking calls it made inline.

  return (
    <section
      id="contact"
      aria-label="Book a free Birmingham site review"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#0F0F12",
        color: "#FFFFFF",
        maxWidth: "100vw",
      }}
    >
      {/* Decorative stat watermarks, behind content */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {WATERMARKS.map((w) => (
          <span
            key={w.label}
            className="font-clash hidden lg:block"
            style={{
              position: "absolute",
              top: w.top,
              left: w.left,
              fontWeight: 700,
              fontSize: 140,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "rgba(255,255,255,0.04)",
              transform: `rotate(${w.rotate}deg)`,
              whiteSpace: "nowrap",
            }}
          >
            {w.label}
          </span>
        ))}
      </div>

      {/* Subtle grid texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, #000 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, #000 25%, transparent 75%)",
        }}
      />

      <div
        className="relative mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Headline block */}
        <div className="flex flex-col items-center text-center">
          <p
            style={{
              color: "#FF6B35",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Start with the free review
          </p>

          <h2
            className="font-clash mt-5"
            style={{
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "clamp(24px, 4vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            Find out what is stopping Birmingham from finding you
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 56, height: 2, backgroundColor: "#FF6B35" }}
          />

          <p
            className="mt-8"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.2vw, 18px)",
              lineHeight: 1.8,
              maxWidth: 820,
            }}
          >
            Send us your web address. We crawl the site, look at your Google
            Business Profile and read your own Search Console data, then write
            back with the three things costing you the most search traffic and
            an honest read on which Birmingham search terms are winnable this
            year. No charge, no discovery fee, and no obligation to go any
            further. Whether you are in Digbeth, the Jewellery Quarter,
            Brindleyplace or out towards Solihull, you get the same review.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <UkAuditButton
              trackName="free_birmingham_site_review"
              location="final_cta"
              className="inline-flex items-center justify-center gap-2"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#B23E13",
                padding: "17px 32px",
                borderRadius: 8,
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "0.01em",
                boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                border: "none",
                cursor: "pointer",
                minHeight: 48,
              }}
            >
              Get a free site review
              <span aria-hidden="true" style={{ fontSize: 18, lineHeight: 1 }}>
                →
              </span>
            </UkAuditButton>
          </div>

          <p
            className="mt-5"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: "var(--font-sans)",
              fontSize: 14.5,
            }}
          >
            Email:{" "}
            <a
              href="mailto:connect@factoryjet.com"
              style={{
                color: "#FFFFFF",
                textDecoration: "underline",
                textDecorationColor: "rgba(255,255,255,0.5)",
              }}
            >
              connect@factoryjet.com
            </a>
          </p>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="mt-16"
          style={{
            height: 1,
            backgroundColor: "rgba(255,255,255,0.14)",
          }}
        />

        {/* City links */}
        <div className="mt-12">
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 12.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Explore Our City Pages
          </p>
          <ul
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {CITIES.map((c, i) => (
              <li key={c.slug} className="flex items-center gap-5">
                <Link
                  href={`/uk/${c.slug}`}
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: 15.5,
                    textDecorationColor: "rgba(255,255,255,0.35)",
                  }}
                  className="underline-offset-4 hover:underline"
                >
                  {c.name}
                </Link>
                {i < CITIES.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Service links */}
        <div className="mt-10">
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 12.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Explore Our Service Pages
          </p>
          <ul
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {SERVICES.map((s, i) => (
              <li key={s.href} className="flex items-center gap-5">
                <Link
                  href={s.href}
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: 15.5,
                    textDecorationColor: "rgba(255,255,255,0.35)",
                  }}
                  className="underline-offset-4 hover:underline"
                >
                  {s.name}
                </Link>
                {i < SERVICES.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

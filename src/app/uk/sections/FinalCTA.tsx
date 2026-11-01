import UkAuditButton from "./UkAuditButton";

// 2026-11-01: the "Explore our city pages / service pages" strips were cut.
// The Cities and Services sections above and the footer already link every
// UK city and hub, so the strip was the third copy of the same links.
// The +91 WhatsApp button was cut the same day: no team location on any page.

// Four oversized stat watermarks behind the content.
const WATERMARKS: Array<{
  label: string;
  top: string;
  left: string;
  rotate: number;
}> = [
  { label: "£10B+", top: "8%", left: "4%", rotate: -6 },
  { label: "54%", top: "14%", left: "82%", rotate: 5 },
  { label: "£265B+", top: "62%", left: "6%", rotate: 4 },
  { label: "30%", top: "70%", left: "78%", rotate: -5 },
];

export default function FinalCTA() {

  return (
    <section
      id="contact"
      aria-label="Ready to future-proof your UK business"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#F05A28", color: "#FFFFFF", maxWidth: "100vw" }}
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
            Final CTA
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
            Ready to Future-Proof Your UK Business?
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
            Whether you need a high-performance website, a revenue-generating
            online store, custom AI agents that work 24/7, or AI SEO that gets
            you found in ChatGPT and Google alike, FactoryJet delivers it all
            at pricing that makes traditional agencies uncomfortable. Start
            with a free digital audit.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <UkAuditButton
              trackName="get_your_free_digital_audit"
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
              Get Your Free Digital Audit
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

      </div>
    </section>
  );
}

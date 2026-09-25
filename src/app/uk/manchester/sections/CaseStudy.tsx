import BeforeAfterSlider from "./BeforeAfterSlider";

const BEFORE_METRICS = [
  { label: "Lighthouse Performance", value: "38 / 100" },
  { label: "Mobile load time", value: "6.2 seconds" },
  { label: "Contact form completion", value: "1.2%" },
  { label: "Local search ranking", value: "Not ranking" },
];

const AFTER_METRICS = [
  { label: "Lighthouse Performance", display: "92 / 100" },
  { label: "Mobile load time", display: "Under 1.5s" },
  { label: "Form completion (target)", display: "8–12%" },
  { label: "AI search visibility", display: "GEO + AEO ready" },
];

export default function CaseStudy() {

  // 2026-09-26 (perf): the GSAP header and before/after card fade-ups on
  // scroll were removed; this section is a server component. The drag
  // slider is the ./BeforeAfterSlider client island.

  return (
    <section
      id="case-study"
      style={{ background: "#F0F4FF", padding: "128px 0", overflow: "hidden" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ maxWidth: "1200px" }}>

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div>
          <p
            className="font-semibold uppercase"
            style={{
              color: "#B23E13",
              fontSize: "13px",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            What It Looks Like in Practice
          </p>

          <h2
            className="font-clash"
            style={{
              fontSize: "clamp(2rem, 1.7rem + 1.2vw, 2.8rem)",
              lineHeight: 1.15,
              color: "#0a0f1c",
              marginBottom: "16px",
            }}
          >
            A Manchester Business, Before and After FactoryJet
          </h2>

          <p
            className="mx-auto"
            style={{
              fontSize: "16px",
              fontStyle: "italic",
              color: "#6B7280",
              maxWidth: "700px",
              lineHeight: 1.7,
              marginBottom: "48px",
            }}
          >
            A financial advisory firm in Spinningfields, replacing a four-year-old
            WordPress site that scored 38 on Lighthouse, took 6.2 seconds to load
            on mobile and ranked nowhere for &ldquo;financial advisor Manchester&rdquo;.
          </p>
        </div>

        {/* ── Split cards ──────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 text-left"
          style={{ gap: "24px" }}
        >

          {/* BEFORE card */}
          <div
            className="rounded-xl"
            style={{
              background: "white",
              border: "1px solid #E5E7EB",
              padding: "32px",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full mb-8"
              style={{ background: "#FEF2F2", padding: "4px 12px" }}>
              <span
                className="rounded-full flex-shrink-0"
                style={{ width: "8px", height: "8px", background: "#EF4444" }}
                aria-hidden="true"
              />
              <span
                className="font-semibold uppercase"
                style={{ fontSize: "12px", color: "#EF4444", letterSpacing: "0.05em" }}
              >
                Before FactoryJet
              </span>
            </div>

            {/* Metrics */}
            <ul className="flex flex-col">
              {BEFORE_METRICS.map(({ label, value }, i) => (
                <li
                  key={label}
                  className="flex items-center justify-between"
                  style={{
                    padding: "16px 0",
                    borderBottom:
                      i < BEFORE_METRICS.length - 1
                        ? "1px solid #F3F4F6"
                        : "none",
                  }}
                >
                  <span style={{ fontSize: "15px", color: "#6B7280" }}>
                    {label}
                  </span>
                  <span
                    className="font-clash font-bold"
                    style={{ fontSize: "20px", color: "#EF4444" }}
                  >
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AFTER card */}
          <div
            className="rounded-xl"
            style={{
              background: "white",
              border: "1px solid #E5E7EB",
              padding: "32px",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full mb-8"
              style={{ background: "#ECFDF5", padding: "4px 12px" }}>
              <span
                className="rounded-full flex-shrink-0"
                style={{ width: "8px", height: "8px", background: "#10B981" }}
                aria-hidden="true"
              />
              <span
                className="font-semibold uppercase"
                style={{ fontSize: "12px", color: "#10B981", letterSpacing: "0.05em" }}
              >
                After FactoryJet
              </span>
            </div>

            {/* Metrics */}
            <ul className="flex flex-col">
              {AFTER_METRICS.map(({ label, display }, i) => (
                <li
                  key={label}
                  className="flex items-center justify-between"
                  style={{
                    padding: "16px 0",
                    borderBottom:
                      i < AFTER_METRICS.length - 1
                        ? "1px solid #F3F4F6"
                        : "none",
                  }}
                >
                  <span style={{ fontSize: "15px", color: "#6B7280" }}>
                    {label}
                  </span>
                  <span
                    className="font-clash font-bold"
                    style={{ fontSize: "20px", color: "#10B981" }}
                  >
                    {display}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Before/After image comparison slider ─────────────────────── */}
        <BeforeAfterSlider />

      </div>
    </section>
  );
}

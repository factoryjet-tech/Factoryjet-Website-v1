export default function MidPageCTA() {
  return (
    <div
      style={{ background: "#0052CC", padding: "64px 0" }}
      aria-label="Call to action"
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8"
        style={{ maxWidth: "1400px" }}
      >
        {/* Left: statement */}
        <p
          className="font-clash text-white text-center lg:text-left"
          style={{
            fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2.2rem)",
            lineHeight: 1.25,
            maxWidth: "600px",
          }}
        >
          Your Manchester website. Live in 2–4 weeks. Guaranteed Lighthouse 90+.
        </p>

        {/* Right: CTA */}
        <a
          href="#final-cta"
          className="w-full lg:w-auto text-center font-semibold text-white rounded-lg transition-all duration-200 hover:brightness-110 flex-shrink-0"
          style={{
            background: "#FF6B35",
            padding: "16px 32px",
            fontSize: "15px",
          }}
        >
          Start Today →
        </a>
      </div>
    </div>
  );
}

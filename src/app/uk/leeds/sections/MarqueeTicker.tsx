const ITEMS = [
  "WEB DESIGN LEEDS",
  "Pricing is fixed and published upfront",
  "NEXT.JS 15 + TAILWIND CSS 4",
  "LEEDS DOCK · VICTORIA QUARTER · KIRKGATE MARKET",
  "2–4 WEEK DELIVERY",
  "LIGHTHOUSE 95+ GUARANTEED",
  "AI-NATIVE AGENCY",
];

function TickerItem({ label }: { label: string }) {
  return (
    <>
      <span className="whitespace-nowrap">{label}</span>
      {/* Diamond separator */}
      <span className="text-[#F05A28] mx-4 select-none" aria-hidden="true">
        ◆
      </span>
    </>
  );
}

export default function MarqueeTicker() {
  return (
    <div
      id="marquee-ticker"
      role="marquee"
      aria-label="Trust signals"
      className="w-full overflow-hidden"
      style={{
        background: "#111827",
        height: "48px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* animate-marquee is defined in globals.css: translateX(0) → translateX(-50%) 30s linear infinite */}
      <div
        className="animate-marquee flex items-center h-full"
        style={{
          width: "max-content",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.5)",
          textTransform: "uppercase",
        }}
      >
        {/* First copy */}
        {ITEMS.map((item) => (
          <TickerItem key={`a-${item}`} label={item} />
        ))}
        {/* Duplicate for seamless loop */}
        {ITEMS.map((item) => (
          <TickerItem key={`b-${item}`} label={item} />
        ))}
      </div>
    </div>
  );
}

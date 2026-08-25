/*
 * MarqueeTicker.
 *
 * Light band as of 2026-08-25, and role="marquee" is gone: that is not a real
 * ARIA role, so assistive tech ignored it and validators flagged it. The second
 * copy of the list exists only to make the loop seamless, so it is aria-hidden.
 */

const ITEMS = [
  "LIGHTHOUSE 100 SEO",
  "90-DAY SUPPORT INCLUDED",
  "NO LOCK-IN CONTRACTS",
  "MEDIACITYUK · SPINNINGFIELDS · NORTHERN QUARTER",
  "SEO AGENCY MANCHESTER",
  "FIXED-PRICE MILESTONES",
  "NEXT.JS 15 + GSAP + TAILWIND",
];

function TickerItem({ label }: { label: string }) {
  return (
    <>
      <span className="whitespace-nowrap">{label}</span>
      <span className="mx-4 select-none text-[#B23E13]" aria-hidden="true">
        ◆
      </span>
    </>
  );
}

export default function MarqueeTicker() {
  return (
    <div
      id="marquee-ticker"
      aria-label="Trust signals"
      className="w-full overflow-hidden border-y border-fj-neutral-200 bg-white"
      style={{ height: "48px" }}
    >
      {/* animate-marquee is defined in globals.css: translateX(0) to translateX(-50%), 30s linear infinite */}
      <div
        className="animate-marquee flex h-full items-center font-fj-body"
        style={{
          width: "max-content",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          color: "#4A4A45",
          textTransform: "uppercase",
        }}
      >
        {ITEMS.map((item) => (
          <TickerItem key={`a-${item}`} label={item} />
        ))}
        {/* Duplicate copy: visual loop only, hidden from assistive tech. */}
        <span aria-hidden="true" className="flex items-center">
          {ITEMS.map((item) => (
            <TickerItem key={`b-${item}`} label={item} />
          ))}
        </span>
      </div>
    </div>
  );
}

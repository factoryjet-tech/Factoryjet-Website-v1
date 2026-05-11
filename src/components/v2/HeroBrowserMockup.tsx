/**
 * HeroBrowserMockup — v2 hero right-slot visual.
 *
 * Renders a browser window mockup containing a stylised preview of a
 * FactoryJet-built website, plus two floating proof-point badges.
 *
 * Pure server component — no images, no client JS, no external deps.
 * Works as a placeholder until real project screenshots are available.
 */

export default function HeroBrowserMockup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative select-none py-6 pr-6 ${className}`}>

      {/* ── Browser window ─────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_24px_64px_-12px_rgba(15,15,18,0.22)]">

        {/* Chrome bar */}
        <div className="flex items-center gap-3 border-b border-black/[0.07] bg-[#ECECED] px-4 py-3">
          <div className="flex shrink-0 gap-1.5">
            <span className="block h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="block h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="block h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate rounded-md bg-white px-3 py-1.5 font-mono text-[11px] leading-none text-[#9CA3AF]">
              wetstonelabs.com
            </div>
          </div>
        </div>

        {/* ── Site preview ──────────────────────────────────────────────── */}
        <div className="bg-[#FAFAF7]">

          {/* Navbar */}
          <div className="flex items-center justify-between bg-[#0F0F12] px-5 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="block h-2 w-2 rounded-sm bg-[#0052CC]" />
              <span className="block h-2 w-14 rounded-sm bg-white/60" />
            </div>
            <div className="flex items-center gap-3">
              <span className="block h-1.5 w-8 rounded-full bg-white/25" />
              <span className="block h-1.5 w-8 rounded-full bg-white/25" />
              <span className="block h-1.5 w-8 rounded-full bg-white/25" />
              <span className="block h-5 w-20 rounded-md bg-[#0052CC]" />
            </div>
          </div>

          {/* Hero area */}
          <div className="px-5 pb-4 pt-5">
            {/* Eyebrow */}
            <span className="mb-3 block h-1.5 w-20 rounded-full bg-[#0052CC]/60" />
            {/* Headline skeleton */}
            <div className="mb-3 space-y-2">
              <span className="block h-4 w-[95%] rounded-md bg-[#0F0F12]" />
              <span className="block h-4 w-[80%] rounded-md bg-[#0F0F12]" />
              <span className="block h-4 w-[60%] rounded-md bg-[#0F0F12]" />
            </div>
            {/* Lead skeleton */}
            <div className="mb-4 space-y-1.5">
              <span className="block h-2 w-[88%] rounded-full" style={{ backgroundColor: 'rgba(15,15,18,0.15)' }} />
              <span className="block h-2 w-[72%] rounded-full" style={{ backgroundColor: 'rgba(15,15,18,0.15)' }} />
              <span className="block h-2 w-[52%] rounded-full" style={{ backgroundColor: 'rgba(15,15,18,0.15)' }} />
            </div>
            {/* CTAs */}
            <div className="flex gap-2.5">
              <span className="block h-7 w-24 rounded-lg bg-[#0052CC]" />
              <span className="block h-7 w-20 rounded-lg" style={{ border: '1px solid rgba(15,15,18,0.12)' }} />
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-2.5 px-5 pb-4">
            {[
              { n: '500+',   l: 'businesses' },
              { n: '7-day',  l: 'delivery'   },
              { n: '60–70%', l: 'vs agencies' },
            ].map(({ n }) => (
              <div
                key={n}
                className="rounded-xl bg-white p-3"
                style={{ border: '1px solid rgba(15,15,18,0.06)' }}
              >
                <div className="mb-1.5 text-[12px] font-bold leading-tight text-[#0F0F12]">{n}</div>
                <span className="mb-1 block h-1.5 w-full rounded-full" style={{ backgroundColor: 'rgba(15,15,18,0.09)' }} />
                <span className="block h-1.5 w-3/4 rounded-full" style={{ backgroundColor: 'rgba(15,15,18,0.09)' }} />
              </div>
            ))}
          </div>

          {/* Dark section preview */}
          <div className="px-5 pb-5">
            <div className="overflow-hidden rounded-xl bg-[#0F0F12] p-4">
              <span className="mb-2 block h-1.5 w-14 rounded-full bg-[#0052CC]/70" />
              <span className="mb-1.5 block h-3 w-[85%] rounded-md bg-white/80" />
              <span className="mb-4 block h-3 w-[65%] rounded-md bg-white/55" />
              <div className="grid grid-cols-3 gap-2">
                {['AI-native', 'Transparent', 'Guaranteed'].map((t) => (
                  <div
                    key={t}
                    className="rounded-lg p-2.5"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.10)',
                    }}
                  >
                    <span className="mb-1.5 block h-1.5 w-full rounded-full bg-white/70" />
                    <span className="mb-1 block h-1 w-full rounded-full bg-white/25" />
                    <span className="block h-1 w-3/4 rounded-full bg-white/25" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Floating badge: Lighthouse score ────────────────────────────── */}
      <div
        className="absolute right-0 top-10 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2"
        style={{
          border: '1px solid rgba(15,15,18,0.07)',
          boxShadow: '0 8px 24px -4px rgba(15,15,18,0.14)',
        }}
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0052CC]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <polyline
              points="22 7 13.5 15.5 8.5 10.5 2 17"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="16 7 22 7 22 13"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-bold leading-tight text-[#0F0F12]">98 / 100</p>
          <p className="text-[10px] leading-tight text-[#6B7280]">Lighthouse score</p>
        </div>
      </div>

      {/* ── Floating badge: Delivery ─────────────────────────────────────── */}
      <div
        className="absolute -left-2 bottom-4 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2"
        style={{
          border: '1px solid rgba(15,15,18,0.07)',
          boxShadow: '0 8px 24px -4px rgba(15,15,18,0.14)',
        }}
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{ background: 'rgba(22,163,74,0.10)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
              stroke="#16A34A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="22 4 12 14.01 9 11.01"
              stroke="#16A34A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-bold leading-tight text-[#0F0F12]">Live in 6 days</p>
          <p className="text-[10px] leading-tight text-[#6B7280]">Austin, TX · 2024</p>
        </div>
      </div>

    </div>
  );
}

import Image from 'next/image';

/**
 * HeroImageMockup — v2.2 hero right-slot visual.
 *
 * Uses the Gemini-generated browser mockup image (hero-us.webp) with
 * crisp HTML badge chips overlaid for sharp Plus Jakarta Sans text.
 *
 * Badge chips use the same floating card pattern as the rest of v2.1
 * so they integrate naturally with the hero background.
 *
 * Pure server component — no client JS.
 */

const BADGES = [
  {
    id: 'businesses',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          stroke="#0052CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(0,82,204,0.08)"/>
      </svg>
    ),
    title: '500+ businesses',
    sub: 'served worldwide',
    position: 'top-right',
  },
  {
    id: 'savings',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"
          stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="16 7 22 7 22 13"
          stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '60–70% less',
    sub: 'than US agencies',
    position: 'bottom-left',
  },
] as const;

export default function HeroImageMockup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`}>

      {/* ── Hero image ──────────────────────────────────────────────────── */}
      {/*
       * Container fixes the height so the image fills the right slot properly.
       * object-cover + objectPosition 55% centers on the browser mockup without
       * aggressively cutting the left side of the browser window.
       * The source image is 16:9 landscape; the container is near-square, so
       * object-cover always crops horizontally. 55% from left shows the full
       * browser chrome while avoiding the far-left badge pill area.
       */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          height: 'clamp(280px, 40vw, 500px)',
          boxShadow: '0 24px 64px -12px rgba(15,15,18,0.18), 0 4px 16px -4px rgba(15,15,18,0.10)',
        }}
      >
        <Image
          src="/images/hero-us.webp"
          alt="FactoryJet builds high-converting e-commerce and business websites for US small businesses"
          fill
          className="object-cover"
          style={{ objectPosition: '55% center' }}
          priority
          quality={90}
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </div>

      {/* ── Floating badge: 500+ businesses ─────────────────────────────── */}
      <div
        className="absolute -right-3 top-8 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2"
        style={{
          border: '1px solid rgba(15,15,18,0.07)',
          boxShadow: '0 8px 24px -4px rgba(15,15,18,0.14)',
        }}
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{ background: 'rgba(0,82,204,0.08)' }}
        >
          {BADGES[0].icon}
        </div>
        <div>
          <p className="font-fj-body text-[11px] font-bold leading-tight text-[#0F0F12]">
            {BADGES[0].title}
          </p>
          <p className="font-fj-body text-[10px] leading-tight text-[#6B7280]">
            {BADGES[0].sub}
          </p>
        </div>
      </div>

      {/* ── Floating badge: 60-70% savings ──────────────────────────────── */}
      <div
        className="absolute -left-3 bottom-6 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2"
        style={{
          border: '1px solid rgba(15,15,18,0.07)',
          boxShadow: '0 8px 24px -4px rgba(15,15,18,0.14)',
        }}
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{ background: 'rgba(22,163,74,0.10)' }}
        >
          {BADGES[1].icon}
        </div>
        <div>
          <p className="font-fj-body text-[11px] font-bold leading-tight text-[#0F0F12]">
            {BADGES[1].title}
          </p>
          <p className="font-fj-body text-[10px] leading-tight text-[#6B7280]">
            {BADGES[1].sub}
          </p>
        </div>
      </div>

      {/* ── Floating badge: 7-day delivery ──────────────────────────────── */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-4 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2"
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
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
              stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22 4 12 14.01 9 11.01"
              stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="font-fj-body text-[11px] font-bold leading-tight text-[#0F0F12]">
            Live in 7 days
          </p>
          <p className="font-fj-body text-[10px] leading-tight text-[#6B7280]">
            Guaranteed delivery
          </p>
        </div>
      </div>

    </div>
  );
}

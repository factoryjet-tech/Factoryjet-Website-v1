import { CheckCircle2, Rocket } from 'lucide-react';

const trustBadges = [
  '500+ businesses',
  '7-day delivery',
  'US-focused',
] as const;

const browserDots = [
  'bg-[#FF5F57]',
  'bg-[#FFBD2E]',
  'bg-[#28C840]',
] as const;

/**
 * HomepageHero — v2 component
 *
 * Two-column layout: left copy/CTAs, right browser mockup.
 * Generated via Google Stitch, converted to Next.js TSX with FactoryJet
 * design tokens (Clash Display + Inter + Geist Mono, fj-* palette).
 *
 * Usage: drop into /app/us/page.tsx as the first section above the fold.
 */
export function HomepageHero() {
  return (
    <section className="bg-fj-cream">
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: headline, subtext, CTAs, trust badges ── */}
          <div className="flex flex-col items-start gap-6">

            {/* Eyebrow chip */}
            <span className="bg-fj-jet-orange text-white px-4 py-1.5 rounded-full font-fj-mono text-xs uppercase tracking-wider">
              WEB DESIGN AGENCY
            </span>

            {/* Headline — Clash Display 700, tight tracking */}
            <h1 className="font-clash font-bold text-[clamp(2.75rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-fj-ink">
              Your Website. 7 Days. Guaranteed.
            </h1>

            {/* Subtext */}
            <p className="font-inter text-lg text-[#64748B] max-w-[480px] leading-relaxed">
              Professional websites for US small businesses — delivered in 7 days, fixed-price, with full code ownership.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="/get-started"
                className="bg-[#F05A28] text-white px-8 py-3.5 rounded-lg text-sm font-semibold font-inter hover:bg-[#0F0F12] transition-colors shadow-sm"
              >
                Get Started Free
              </a>
              <a
                href="/portfolio"
                className="bg-transparent border border-[#F05A28] text-[#F05A28] px-8 py-3.5 rounded-lg text-sm font-semibold font-inter hover:bg-[#F05A28]-tint transition-colors"
              >
                See Our Work
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-4 pt-6 border-t border-fj-neutral-200 w-full">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-[#64748B]">
                  <CheckCircle2 className="w-5 h-5 text-[#F05A28] shrink-0" />
                  <span className="font-inter text-sm font-semibold">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: browser mockup with floating badge ── */}
          <div className="relative">

            {/* Browser window */}
            <div className="bg-white rounded-xl shadow-xl border border-fj-neutral-200 overflow-hidden lg:rotate-2 hover:rotate-0 transition-transform duration-500">

              {/* Browser chrome bar */}
              <div className="bg-[#F3F4F6] px-4 py-3 flex items-center gap-3 border-b border-fj-neutral-200">
                <div className="flex gap-1.5 shrink-0">
                  {browserDots.map((color, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${color}`} />
                  ))}
                </div>
                <div className="bg-white rounded-md px-3 py-0.5 text-[10px] text-[#9CA3AF] flex-1 text-center mx-6 truncate">
                  factoryjet.io/preview/client-success
                </div>
              </div>

              {/* Browser content area — placeholder UI skeleton */}
              <div className="aspect-video bg-[#F8FAFC] relative overflow-hidden">
                <div className="absolute inset-0 p-4 flex flex-col gap-3">
                  <div className="w-1/3 h-3.5 bg-[rgba(240,90,40,0.20)] rounded-full" />
                  <div className="w-1/2 h-8 bg-[#F05A28] rounded-lg" />
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-white rounded-lg shadow-sm border border-fj-neutral-200"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating "Launch Fast" badge */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-fj-neutral-200 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-fj-jet-orange flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-inter text-sm font-semibold text-fj-ink">Launch Fast</p>
                <p className="font-inter text-xs text-[#64748B]">Live in 168 hours</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

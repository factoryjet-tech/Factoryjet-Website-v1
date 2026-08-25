"use client";

import { useRef } from "react";
import Image from "next/image";
import { Sparkles, Bot, ShoppingBag, TrendingUp } from "lucide-react";

// ── Bento stat definition ────────────────────────────────────────────────────
type Stat = {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  trend: string;
};

const STATS: Stat[] = [
  {
    // 2026-08-25: was "£80.8B UK AI Sector Value", which no source we could
    // fetch supports and which sat awkwardly beside the government's own
    // figures further down the page. Replaced with DSIT's published numbers.
    value: "£10B+",
    label: "UK AI Sector Revenue",
    sublabel: "Across 3,000+ UK AI companies (DSIT, 2024)",
    icon: Sparkles,
    trend: "DSIT 2024",
  },
  {
    value: "54%",
    label: "UK Firms Using AI",
    sublabel: "Up from 9% in 2023",
    icon: Bot,
    trend: "6x Growth",
  },
  {
    // 2026-08-25: sublabel said "28% of total UK retail sales". ONS Retail
    // Sales GB, June 2026 puts the online share at 29.4%, so the page was
    // contradicting the source it now cites further down.
    value: "£265B+",
    label: "UK E-Commerce Market",
    sublabel: "29.4% of UK retail sales are online (ONS, June 2026)",
    icon: ShoppingBag,
    trend: "ONS 2026",
  },
  {
    // 2026-08-25: was "42%", which no source we could fetch supports. Ofcom's
    // Online Nation 2025 measures roughly 30% of searches showing an AI
    // overview, so that is the number the page now carries.
    value: "30%",
    label: "UK Searches Showing an AI Overview",
    sublabel: "53% of UK adults say they see these summaries often",
    icon: TrendingUp,
    trend: "Ofcom 2025",
  },
];

export default function DigitalLandscape() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="digital-landscape"
      aria-label="The UK digital landscape in 2026"
      className="relative w-full"
      style={{ backgroundColor: "#FFFFFF", maxWidth: "100vw" }}
    >
      <div
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{ paddingTop: "clamp(64px, 10vw, 120px)", paddingBottom: "clamp(64px, 10vw, 120px)" }}
      >
        {/* ── Heading block ───────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center">
          <p
            style={{
              color: "#B23E13",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            The UK Digital Landscape in 2026
          </p>

          <h2
            className="font-clash mt-5"
            style={{
              color: "#0A0F1C",
              fontWeight: 700,
              fontSize: "clamp(24px, 3.5vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Why UK Businesses Need an AI-Native Digital Agency
          </h2>

          {/* Jet Orange underline accent */}
          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#FF6B35" }}
          />
        </div>

        {/* ── Editorial two-column ─────────────────────────────────────── */}
        <div className="mt-16 flex flex-col gap-10 lg:grid lg:grid-cols-[55%_45%] lg:gap-14">
          {/* Prose */}
          <div className="order-2 lg:order-1">
            <div
              className="space-y-6"
              style={{
                maxWidth: 720,
                color: "#374151",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.1vw, 17px)",
                lineHeight: 1.8,
              }}
            >
              <p>
                Google AI Overviews now appear on around 30% of searches, and
                ChatGPT took 1.8 billion UK visits in the first eight months of
                2025, up from 368 million a year earlier, according to Ofcom.
                More than half of UK adults say they see AI summaries often. The
                digital agencies that built their models around WordPress
                templates and traditional SEO are not equipped for this reality.
              </p>
              <p>
                FactoryJet is. We are the AI-native web design agency,
                e-commerce development partner, AI agent builder, and AI SEO
                agency built from the ground up for how UK businesses need to
                compete in 2026. We deliver enterprise-grade web design,
                Shopify and WooCommerce e-commerce stores, custom AI agents,
                and next-generation search optimisation, including generative
                engine optimisation (GEO), answer engine optimisation (AEO),
                and AI optimisation (AIO), at a fixed, transparent quote,
                with senior engineers and no agency overhead.
              </p>
              <p>
                The United Kingdom has one of the largest AI sectors in
                Europe. The government&rsquo;s own AI sector study counts more than
                3,000 UK AI companies, turning over more than £10 billion a year
                and employing over 60,000 people in AI roles. British businesses
                are adopting AI faster than almost anywhere else: the proportion of UK firms actively using AI has leapt
                from 9% in 2023 to 25% in late 2024 to 54% in early 2026,
                according to the British Chambers of Commerce. Yet a
                significant gap remains: only 28% of UK businesses have fully
                integrated AI into their operations, and 87% of those using
                it describe their adoption as only partial. Among small
                businesses with under 50 employees, just 26% have adopted AI
                at all, with the top barriers being lack of expertise (35%),
                high costs (30%), and uncertain ROI (25%).
              </p>
              <p>
                This gap represents one of the largest business opportunities
                in UK digital services today. The companies that bridge it,
                that make AI accessible, affordable, and practical for British
                SMBs, will define the next era of UK business technology.
                That is exactly what FactoryJet was built to do.
              </p>
              <p>
                Simultaneously, the way customers find businesses online is
                transforming at an unprecedented pace. The UK e-commerce
                market exceeds £265 billion, and the Office for National
                Statistics put 29.4% of all UK retail sales online in June 2026,
                the highest share since April 2021. But &ldquo;organic
                search&rdquo; no longer means just Google&rsquo;s ten blue
                links. Ofcom found that around 30% of searches now return an AI
                overview, and that ChatGPT took 1.8 billion UK visits in the
                first eight months of 2025, up from 368 million a year earlier.
                A shopper can now read a full answer, and a recommendation,
                without ever landing on a shop. UK businesses need a digital
                partner that understands both worlds, traditional search and
                AI-powered discovery, and builds for both from day one.
              </p>
            </div>
          </div>

          {/* Sticky editorial image */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-[120px]">
              <div
                className="relative w-full overflow-hidden"
                style={{
                  borderRadius: 12,
                  aspectRatio: "4 / 5",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/images/uk/uk-landscape.jpg"
                  alt="Modern UK technology and business landscape, London glass office towers at daylight"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* Caption */}
              <p
                className="mt-4"
                style={{
                  color: "#6b7280",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  lineHeight: 1.6,
                  letterSpacing: "0.01em",
                }}
              >
                British businesses are adopting AI faster than almost anywhere
                else in Europe, and FactoryJet is built for that reality.
              </p>
            </div>
          </div>
        </div>

        {/* ── 4-Col Bento Stats Grid (Clean, Balanced & Zero Overlap) ── */}
        <div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          role="list"
          aria-label="UK digital statistics"
        >
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                role="listitem"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5622]/40 hover:shadow-xl hover:shadow-[#F05A28]/5"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  minHeight: 200,
                }}
              >
                {/* Header: Clean Icon Badge + Trend Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEEFEA] border border-[#F3C9B6] text-[#F05A28] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-[#F6F6F9] border border-[#E6E6EC] px-2.5 py-0.5 font-fj-mono text-[11px] font-semibold text-[#141414]">
                    {s.trend}
                  </span>
                </div>

                {/* Big Number Headline */}
                <div>
                  <div
                    className="font-clash"
                    style={{
                      fontSize: "clamp(32px, 2.8vw, 42px)",
                      fontWeight: 700,
                      color: "#F05A28",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mt-2.5 font-fj-body text-[14px] font-semibold leading-snug text-[#0A0F1C]"
                  >
                    {s.label}
                  </div>
                  <p
                    className="mt-1 font-fj-body text-[12px] leading-relaxed text-[#6b7280]"
                  >
                    {s.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Pull quote ────────────────────────────────────────────────── */}
        <figure
          className="mx-auto mt-16 flex flex-col items-center px-8 py-10 text-center"
          style={{
            maxWidth: 900,
            backgroundColor: "#F8FAFC",
            borderTop: "2px solid #FF6B35",
            borderRadius: 12,
          }}
        >
          {/* 2026-08-25: this used to assert "AI search traffic converts at 4.4
              times the rate of traditional organic search". We could not find a
              primary source for that number, so it is replaced with a claim we
              can link to. */}
          <blockquote
            className="font-clash"
            style={{
              color: "#F05A28",
              fontWeight: 600,
              fontSize: "clamp(22px, 2.5vw, 28px)",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            Google says there is no separate trick for appearing in AI
            Overviews. The fundamentals are the work.
          </blockquote>
          <figcaption className="mt-4">
            <a
              href="https://developers.google.com/search/docs/appearance/ai-features"
              target="_blank"
              rel="noopener noreferrer"
              className="font-fj-mono text-[12px] text-[#4A4A45] underline underline-offset-4 hover:text-[#0A0F1C]"
            >
              Source: Google Search Central, AI features and your website
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

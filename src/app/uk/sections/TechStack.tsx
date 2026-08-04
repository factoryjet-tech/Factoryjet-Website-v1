"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ── Tech badge data (verbatim from content.md) ───────────────────────────────
type Tech = {
  id: string;
  name: string;
  description: string;
  // Asymmetric placement on desktop (12-col grid).
  colClass: string;
  // Vertical offset to break the grid rhythm (desktop only).
  offsetPx: number;
  // Parallax scrub amount (px travelled while section scrolls).
  parallax: number;
  // Accent swatch for the icon tile.
  accent: string;
  // Small monogram that stands in for a brand icon.
  mark: string;
};

const TECH: Tech[] = [
  {
    id: "nextjs",
    name: "Next.js 15 (React Framework)",
    description:
      "Server-side rendering, static site generation, and incremental static regeneration deliver websites that load in under two seconds and score 90+ on Google Lighthouse Performance. Websites that load in one second convert at three times the rate of sites that take five seconds. This is not marginal optimisation, it directly impacts your revenue.",
    colClass: "lg:col-span-5 lg:col-start-1",
    offsetPx: 0,
    parallax: 40,
    accent: "#FFFFFF",
    mark: "N",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS 4",
    description:
      "Utility-first CSS that eliminates stylesheet bloat. Our sites have smaller CSS bundles, faster paint times, and pixel-perfect responsive layouts across every device and screen size, from mobile to ultra-wide desktop.",
    colClass: "lg:col-span-5 lg:col-start-8",
    offsetPx: 72,
    parallax: -60,
    accent: "#38BDF8",
    mark: "T",
  },
  {
    id: "gsap",
    name: "GSAP & Framer Motion",
    description:
      "Premium, performant animations that enhance user experience without sacrificing page speed. Purposeful motion that guides attention and increases engagement, not flashy effects that slow your site down.",
    colClass: "lg:col-span-5 lg:col-start-2",
    offsetPx: 36,
    parallax: 30,
    accent: "#10B981",
    mark: "◆",
  },
  {
    id: "ai-workflow",
    name: "AI-Augmented Development Workflow",
    description:
      "We use AI throughout our development process, from design generation to code review to quality assurance. This is not a marketing gimmick; it is the operational advantage that allows us to deliver 2–3x faster than traditional agencies while maintaining higher quality standards, and it is why we can price at a fixed, transparent quote without cutting corners.",
    colClass: "lg:col-span-5 lg:col-start-7",
    offsetPx: 96,
    parallax: -45,
    accent: "#FF6B35",
    mark: "✦",
  },
  {
    id: "ai-crawler",
    name: "AI Crawler Optimisation",
    description:
      "Every site we build is configured from day one for readability by Google, ChatGPT (GPTBot), Claude (ClaudeBot), Perplexity (PerplexityBot), and Google AI Overviews. Most UK websites accidentally block these crawlers via Cloudflare’s default settings, making them invisible to the fastest-growing search channels.",
    colClass: "lg:col-span-6 lg:col-start-4",
    offsetPx: 48,
    parallax: 50,
    accent: "#F05A28",
    mark: "⚡",
  },
];

// ── Badge ────────────────────────────────────────────────────────────────────
function TechBadge({ tech }: { tech: Tech }) {
  return (
    <article
      data-tech-badge
      data-parallax={tech.parallax}
      className={[
        "relative w-full",
        tech.colClass,
      ].join(" ")}
      style={{
        marginTop: `var(--offset, 0px)`,
        // Custom property lets us disable the offset on mobile via media query below.
        ["--offset" as never]: `${tech.offsetPx}px`,
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#111827",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 16,
          padding: "28px 28px 30px",
          boxShadow:
            "0 30px 60px -25px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Subtle inner glow accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full"
          style={{
            background: `radial-gradient(circle, ${tech.accent}22 0%, transparent 70%)`,
          }}
        />

        <header className="flex items-start gap-4">
          <div
            aria-hidden="true"
            className="flex h-12 w-12 flex-none items-center justify-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: `1px solid ${tech.accent}40`,
              borderRadius: 10,
              color: tech.accent,
              fontFamily: "var(--font-clash), 'Clash Display', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            {tech.mark}
          </div>
          <h3
            className="font-clash"
            style={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "clamp(18px, 1.8vw, 22px)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              marginTop: 2,
            }}
          >
            {tech.name}
          </h3>
        </header>

        <p
          className="mt-5"
          style={{
            color: "rgba(255,255,255,0.72)",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(14px, 1.05vw, 15.5px)",
            lineHeight: 1.75,
          }}
        >
          {tech.description}
        </p>
      </div>
    </article>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      // Parallax: only runs on desktop viewports where the asymmetric layout
      // actually applies. On narrow screens the badges stack and the offset
      // would just feel like jitter.
      const desktop = window.matchMedia("(min-width: 1024px)");
      if (!desktop.matches) return;

      const badges =
        gridRef.current?.querySelectorAll<HTMLElement>("[data-tech-badge]");
      if (!badges || !badges.length) return;

      badges.forEach((el) => {
        const amount = Number(el.getAttribute("data-parallax") ?? "0");
        gsap.fromTo(
          el,
          { y: -amount / 2 },
          {
            y: amount / 2,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger && sectionRef.current?.contains(t.trigger as Node)) {
            t.kill();
          }
        });
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="technology-stack"
      aria-label="Our technology stack"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0A0F1C", maxWidth: "100vw" }}
    >
      {/* Keyframes for the code ticker marquee (paused under reduced motion). */}
      <style>{`
        @keyframes fj-ticker {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }
        .fj-ticker-track {
          animation: fj-ticker 60s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .fj-ticker-track { animation: none; }
        }
        @media (max-width: 1023px) {
          [data-tech-badge] { --offset: 0px !important; }
        }
      `}</style>

      {/* Faint grid pattern backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, #000 30%, transparent 75%)",
        }}
      />

      <div
        className="relative mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Heading block */}
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
            Our Technology Stack
          </p>

          <h2
            className="font-clash mt-5"
            style={{
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "clamp(24px, 3.5vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            Built on the Stack That Powers Stripe, Vercel &amp; Linear
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#FF6B35" }}
          />

          <p
            className="mt-8"
            style={{
              color: "rgba(255,255,255,0.72)",
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.1vw, 17px)",
              lineHeight: 1.8,
              maxWidth: 760,
            }}
          >
            The technology your website is built on determines how fast it
            loads, how well it ranks, and how effectively it converts visitors
            into customers. Most UK web agencies still build on WordPress and
            PHP, technology that was cutting-edge in 2010. FactoryJet builds
            exclusively on the modern stack that the world’s best technology
            companies use, and we believe this matters more than most
            businesses realise.
          </p>
        </div>

        {/* Floating tech badges, asymmetric, parallax on scroll */}
        <div
          ref={gridRef}
          className="mt-20 grid grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-12 lg:gap-8"
        >
          {TECH.map((t) => (
            <TechBadge key={t.id} tech={t} />
          ))}
        </div>
      </div>

      {/* Code ticker, marquee */}
      <div
        className="relative w-full"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backgroundColor: "#07090F",
          paddingTop: 22,
          paddingBottom: 22,
          marginTop: "clamp(48px, 8vw, 96px)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10"
          aria-hidden="true"
          style={{
            width: 120,
            background:
              "linear-gradient(90deg, #07090F 0%, rgba(7,9,15,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10"
          aria-hidden="true"
          style={{
            width: 120,
            background:
              "linear-gradient(270deg, #07090F 0%, rgba(7,9,15,0) 100%)",
          }}
        />

        <div
          className="fj-ticker-track flex whitespace-nowrap"
          style={{
            width: "max-content",
            fontFamily:
              "var(--font-mono, 'JetBrains Mono'), ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 14.5,
            letterSpacing: "0.01em",
          }}
          role="presentation"
          aria-hidden="true"
        >
          {/* Two copies so the marquee loops seamlessly */}
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center">
              <CodeLine />
              <span className="mx-8" style={{ color: "rgba(255,255,255,0.2)" }}>
                {"//"}
              </span>
              <CodeLine />
              <span className="mx-8" style={{ color: "rgba(255,255,255,0.2)" }}>
                {"//"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Code ticker line ─────────────────────────────────────────────────────────
function CodeLine() {
  // Tokens are inline-coloured so the marquee stays lightweight — no
  // syntax-highlighter runtime, no extra bundle cost.
  const kw = { color: "#FF6B35" } as const;     // keywords
  const fn = { color: "#38BDF8" } as const;     // function names
  const str = { color: "#10B981" } as const;    // strings
  const num = { color: "#A78BFA" } as const;    // numbers
  const pun = { color: "rgba(255,255,255,0.55)" } as const; // punctuation
  const mute = { color: "rgba(255,255,255,0.85)" } as const; // identifiers

  return (
    <span className="inline-flex items-center gap-0">
      <span style={kw}>const</span>
      <span className="mx-2" style={mute}>site</span>
      <span style={pun}>=</span>
      <span className="mx-2" style={kw}>await</span>
      <span style={fn}>factoryjet.build</span>
      <span style={pun}>(</span>
      <span style={pun}>{"{"}</span>
      <span className="ml-2" style={mute}>framework</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={str}>&quot;Next.js 15&quot;</span>
      <span style={pun}>,</span>
      <span className="ml-2" style={mute}>styling</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={str}>&quot;Tailwind CSS 4&quot;</span>
      <span style={pun}>,</span>
      <span className="ml-2" style={mute}>motion</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={str}>&quot;GSAP&quot;</span>
      <span style={pun}>,</span>
      <span className="ml-2" style={mute}>ai</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={str}>&quot;crawler-ready&quot;</span>
      <span style={pun}>,</span>
      <span className="ml-2" style={mute}>lighthouse</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={num}>92</span>
      <span className="ml-2" style={pun}>{"}"}</span>
      <span style={pun}>)</span>
      <span style={pun}>;</span>
    </span>
  );
}

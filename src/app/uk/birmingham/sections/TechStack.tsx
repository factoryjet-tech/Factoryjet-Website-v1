"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Platform = {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  mark: string;
};

const PLATFORMS: Platform[] = [
  { id: "nextjs",    name: "Next.js 15",       tagline: "App Router, SSR, ISR | server rendering by default",                accent: "#1A1A1A", mark: "N" },
  { id: "react",     name: "React 19",          tagline: "Server Components, concurrent rendering, zero layout shift",           accent: "#61DAFB", mark: "R" },
  { id: "nodejs",    name: "Node.js",           tagline: "API layers, webhooks, and server-side integrations",                   accent: "#8CC84B", mark: "⬡" },
  { id: "wordpress", name: "WordPress",         tagline: "Custom themes, plugins, and content-managed builds",                   accent: "#21759B", mark: "W" },
  { id: "woo",       name: "WooCommerce",       tagline: "B2B & B2C stores with deep ERP and CRM integration",                   accent: "#96588A", mark: "Wc" },
  { id: "shopify",   name: "Shopify Plus",      tagline: "Headless builds, custom checkout, Flow automation",                    accent: "#96BF48", mark: "S" },
  { id: "magento",   name: "Magento 2",         tagline: "Enterprise catalogue management for Birmingham manufacturers",          accent: "#EE672F", mark: "M" },
  { id: "webflow",   name: "Webflow",           tagline: "Pixel-perfect CMS sites for Birmingham's creative sector",             accent: "#4353FF", mark: "Wf" },
  { id: "framer",    name: "Framer",            tagline: "Motion-rich marketing sites with no-code content updates",             accent: "#0055FF", mark: "Fr" },
  { id: "wix",       name: "Wix Enterprise",    tagline: "Managed hosting for fast-turnaround SMB projects",                     accent: "#FAAD4D", mark: "Wx" },
  { id: "php",       name: "PHP 8.2",           tagline: "Legacy migration, custom portals, and CRM backends",                   accent: "#8993BE", mark: "Php" },
  { id: "custom",    name: "Custom Stack",      tagline: "Bespoke architecture for manufacturing, legal, and fintech",           accent: "#FF6B35", mark: "✦" },
];

function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #D9D9D2",
        borderRadius: 12,
        padding: "20px 20px 22px",
        borderLeft: `3px solid ${platform.accent}`,
      }}
    >
      <header className="flex items-center gap-3">
        <div
          aria-hidden="true"
          className="flex h-9 w-9 flex-none items-center justify-center text-[13px] font-bold"
          style={{
            backgroundColor: "#FAFAF7",
            border: `1px solid ${platform.accent}66`,
            borderRadius: 8,
            color: "#1A1A1A",
            fontFamily: "var(--font-clash), 'Clash Display', sans-serif",
            lineHeight: 1,
          }}
        >
          {platform.mark}
        </div>
        <h3
          className="font-clash"
          style={{
            color: "#1A1A1A",
            fontWeight: 600,
            fontSize: "clamp(15px, 1.2vw, 17px)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {platform.name}
        </h3>
      </header>
      <p
        className="mt-3"
        style={{
          color: "#4A4A45",
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          lineHeight: 1.6,
        }}
      >
        {platform.tagline}
      </p>
    </div>
  );
}

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const cards =
        gridRef.current?.querySelectorAll<HTMLElement>("[data-platform-card]");
      if (!cards || !cards.length) return;

      gsap.fromTo(
        cards,
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.04,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

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
      style={{ backgroundColor: "#FAFAF7", maxWidth: "100vw" }}
    >
      <style>{`
        @keyframes bham-ticker {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }
        .bham-ticker-track {
          animation: bham-ticker 60s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .bham-ticker-track { animation: none; }
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
            "linear-gradient(rgba(26,26,26,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.05) 1px, transparent 1px)",
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
              color: "#B23E13",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Platforms we work in
          </p>

          <h2
            className="font-clash mt-5"
            style={{
              color: "#1A1A1A",
              fontWeight: 700,
              fontSize: "clamp(24px, 3.5vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            The platform your site runs on decides how far SEO can take it
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#B23E13" }}
          />

          <div
            className="mt-8 space-y-5"
            style={{
              color: "#4A4A45",
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.1vw, 17px)",
              lineHeight: 1.8,
              maxWidth: 760,
            }}
          >
            <p>
              SEO work is only as good as the site it runs on. If pages cannot
              have their own titles, if the platform will not let you add
              structured data, or if the thing simply loads too slowly on a
              phone, no amount of content writing fixes it. So we work with
              whatever you already have, and we say plainly when the platform
              itself is the problem.
            </p>
            <p>
              We build in Next.js with React and Tailwind when a project needs a
              custom front end, and we work inside WordPress, Shopify, Webflow,
              Framer, Wix and Magento when that is where your site already
              lives. There is no single right platform. There is only the one
              your team can actually keep updated, which loads fast enough to
              hold a visitor who arrived from a search result.
            </p>
            <p>
              What does not change is the measurement. Google publishes the pass
              marks for the three Core Web Vitals, and we test against them on a
              real mobile connection rather than on a fast office laptop. For
              Birmingham manufacturers that usually means fixing images and
              integrations. For professional services it usually means cutting
              the scripts nobody remembers adding.
            </p>
          </div>
        </div>

        {/* Platform grid */}
        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {PLATFORMS.map((p) => (
            <div key={p.id} data-platform-card>
              <PlatformCard platform={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Code ticker, marquee */}
      <div
        className="relative w-full"
        style={{
          borderTop: "1px solid #D9D9D2",
          borderBottom: "1px solid #D9D9D2",
          backgroundColor: "#FFFFFF",
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
              "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10"
          aria-hidden="true"
          style={{
            width: 120,
            background:
              "linear-gradient(270deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        <div
          className="bham-ticker-track flex whitespace-nowrap"
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
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center">
              <BirminghamCodeLine />
              <span className="mx-8" style={{ color: "#B0B0A8" }}>
                {"//"}
              </span>
              <BirminghamCodeLine />
              <span className="mx-8" style={{ color: "#B0B0A8" }}>
                {"//"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BirminghamCodeLine() {
  const kw = { color: "#B23E13" } as const;
  const fn = { color: "#0B5FA5" } as const;
  const str = { color: "#046C4E" } as const;
  const num = { color: "#6127C4" } as const;
  const pun = { color: "#6B6B62" } as const;
  const mute = { color: "#1A1A1A" } as const;

  return (
    <span className="inline-flex items-center gap-0">
      <span style={kw}>const</span>
      <span className="mx-2" style={mute}>birmingham</span>
      <span style={pun}>=</span>
      <span className="mx-2" style={pun}>{"{"}</span>
      <span className="ml-2" style={mute}>stack</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={str}>&quot;next15&quot;</span>
      <span style={pun}>,</span>
      <span className="ml-2" style={mute}>ai</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={str}>&quot;claude-api&quot;</span>
      <span style={pun}>,</span>
      <span className="ml-2" style={mute}>deploy</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={str}>&quot;vercel&quot;</span>
      <span style={pun}>,</span>
      <span className="ml-2" style={mute}>seo</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={str}>&quot;lighthouse-100&quot;</span>
      <span style={pun}>,</span>
      <span className="ml-2" style={mute}>city</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={str}>&quot;birmingham&quot;</span>
      <span style={pun}>,</span>
      <span className="ml-2" style={mute}>region</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={str}>&quot;west-midlands&quot;</span>
      <span style={pun}>,</span>
      <span className="ml-2" style={mute}>hs2</span>
      <span style={pun}>:</span>
      <span className="ml-2" style={num}>true</span>
      <span className="ml-2" style={pun}>{"}"}</span>
      <span style={fn}> →</span>
    </span>
  );
}

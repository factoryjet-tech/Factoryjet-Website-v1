"use client";

// Light hero. Cream background, ink type, one orange accent.
// Rebuilt 2026-08-25: the previous version shipped a dark WebGL hero, which
// breaks the house rule that the hero is never dark and cost a chunk of the
// page's Perfect Page score. No mesh gradient, no glow, no particles.

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";

const TRUST: string[] = [
  "Liverpool City Region and Merseyside",
  "You talk to the person doing the work",
  "Fixed-price milestones or monthly retainer",
  "Your accounts, your content, your data",
];

const ANSWER_POINTS: string[] = [
  "Technical fixes so Google can crawl, index and load your pages on a phone",
  "Google Business Profile and citations rebuilt for the map results",
  "A real page for every service you sell, written to answer what people type",
  "Mentions earned from chambers, partners and local press, never bought",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const { openModal: openContactModal } = useContactModal();
  const openModal = () => openContactModal("uk", "default");

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const els = introRef.current?.querySelectorAll<HTMLElement>("[data-hero-item]");
      if (!els || !els.length) return;

      gsap.fromTo(
        els,
        { y: 18, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
          clearProps: "transform,opacity,visibility",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="SEO agency in Liverpool"
      className="relative w-full overflow-hidden bg-fj-cream"
      style={{ maxWidth: "100vw" }}
    >
      {/* Very light skyline line at the base. Decorative only. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        style={{ height: 140, color: "#EFEFEA" }}
      >
        <g fill="currentColor">
          <rect x="0" y="150" width="50" height="50" />
          <rect x="52" y="140" width="35" height="60" />
          <rect x="90" y="155" width="45" height="45" />
          {/* Liver Building, two towers */}
          <rect x="145" y="60" width="52" height="140" />
          <polygon points="145,60 171,30 197,60" />
          <rect x="210" y="65" width="50" height="135" />
          <polygon points="210,65 235,35 260,65" />
          {/* Cunard and Port of Liverpool buildings */}
          <rect x="270" y="85" width="65" height="115" />
          <rect x="345" y="90" width="60" height="110" />
          <ellipse cx="375" cy="90" rx="30" ry="18" />
          <rect x="415" y="120" width="40" height="80" />
          <rect x="458" y="130" width="55" height="70" />
          <rect x="516" y="110" width="38" height="90" />
          {/* Dock cranes */}
          <rect x="565" y="100" width="8" height="100" />
          <rect x="540" y="100" width="60" height="8" />
          <rect x="650" y="90" width="8" height="110" />
          <rect x="622" y="90" width="62" height="8" />
          <rect x="740" y="95" width="8" height="105" />
          <rect x="712" y="95" width="62" height="8" />
          <rect x="790" y="125" width="50" height="75" />
          <rect x="843" y="115" width="42" height="85" />
          <rect x="890" y="100" width="36" height="100" />
          <rect x="940" y="85" width="8" height="115" />
          <rect x="912" y="85" width="62" height="8" />
          <rect x="990" y="120" width="55" height="80" />
          <rect x="1050" y="105" width="40" height="95" />
          <rect x="1095" y="130" width="60" height="70" />
          <rect x="1160" y="115" width="38" height="85" />
          <rect x="1215" y="88" width="8" height="112" />
          <rect x="1188" y="88" width="62" height="8" />
          <rect x="1265" y="125" width="55" height="75" />
          <rect x="1325" y="110" width="44" height="90" />
          <rect x="1374" y="140" width="60" height="60" />
          <rect x="1440" y="120" width="50" height="80" />
          <rect x="1496" y="135" width="55" height="65" />
          <rect x="1553" y="148" width="47" height="52" />
        </g>
      </svg>

      <div className="relative mx-auto w-full max-w-[1120px] px-6 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
        {/* Asymmetric 55/45 split, left aligned. */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[55%_1fr] lg:gap-14">
          <div ref={introRef}>
            <p
              data-hero-item
              className="font-fj-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B23E13]"
            >
              SEO agency Liverpool
            </p>

            <h1
              data-hero-item
              className="mt-5 font-fj-display font-bold text-fj-ink"
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              An SEO agency for Liverpool businesses that need the phone to ring.
            </h1>

            <p
              data-hero-item
              className="mt-6 max-w-[620px] font-fj-body text-lg leading-relaxed text-fj-neutral-600"
            >
              We get Liverpool and Merseyside businesses found on Google, in the
              map results, and inside AI answers such as ChatGPT and Perplexity.
              Four things happen, in this order:
            </p>

            <ul data-hero-item className="mt-5 max-w-[620px] space-y-2.5">
              {ANSWER_POINTS.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-ink"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#F05A28]"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div
              data-hero-item
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => {
                  trackCTAClick("get_a_free_site_review", "hero", "primary");
                  trackButtonClick("get_a_free_site_review", "hero");
                  openModal();
                }}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#F05A28] px-7 py-3 text-lg font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get a free site review
              </button>
              <a
                href="#what-you-get"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-fj-neutral-200 bg-white px-7 py-3 font-fj-body text-[15px] font-semibold text-fj-ink transition-colors hover:border-[#B23E13]"
              >
                See what is included
              </a>
            </div>

            <ul
              data-hero-item
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-fj-body text-[13px] text-fj-neutral-600"
            >
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 flex-none rounded-full bg-fj-neutral-400"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Image card */}
          <div className="lg:pt-4">
            <figure className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/uk/liverpool/hero-liverpool.webp"
                  alt="The Liverpool waterfront at the Royal Albert Dock"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  priority
                  fetchPriority="high"
                  quality={80}
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-fj-neutral-200 px-5 py-4 font-fj-body text-[13px] leading-relaxed text-fj-neutral-600">
                We work across Liverpool, Wirral, Sefton, Knowsley, St Helens and
                Halton. Remote, so your budget goes on the work rather than on a
                city centre office.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

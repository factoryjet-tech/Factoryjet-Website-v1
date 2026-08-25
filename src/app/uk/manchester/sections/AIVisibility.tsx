"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/*
 * AIVisibility.
 *
 * Rewritten 2026-08-25: light ground (the page allows one dark band and the
 * closing CTA has it), prose cut roughly in half, and the "what we ship" copy
 * moved out of a paragraph into a real list so an answer engine can lift it.
 */

const BODY_PARAGRAPHS = [
  "Google still sends most of the traffic. A growing share of business discovery now happens somewhere else: ChatGPT, Perplexity, Google AI Overviews and Claude. When someone asks one of those which agency to use in Manchester, the answer is not read off a rankings page. It is assembled from structured data, clear content and signals of who wrote it.",
  "Most Manchester sites are simply not readable to those systems. Content sits behind tabs and accordions, pages need JavaScript to show anything, and there is no structured data past a title tag. We build for both audiences at once.",
];

const SHIPPED = [
  "LocalBusiness and Service schema on every page",
  "FAQPage data aimed at People Also Ask boxes",
  "All content visible, never hidden behind toggles",
  "BreadcrumbList and HowTo schema for rich results",
  "Server-rendered pages that need no JavaScript to read",
  "A named author with a real profile behind the content",
];

const INFO_CARDS = [
  {
    badge: "GEO",
    title: "Generative engine optimisation",
    description:
      "Schema on every page, so your business gets cited when an AI system answers a Manchester question.",
  },
  {
    badge: "AEO",
    title: "Answer engine optimisation",
    description:
      "FAQ data aimed at People Also Ask. Everything stays expanded, never buried in a toggle.",
  },
  {
    badge: "SSR",
    title: "Server-side rendering",
    description:
      "Pages arrive complete from the server, so a crawler reads them without running any JavaScript.",
  },
];

export default function AIVisibility() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(leftRef.current, { y: 40, autoAlpha: 0, duration: 0.8, ease: "power3.out" })
        .from(
          cardsRef.current ? cardsRef.current.querySelectorAll(".info-card") : [],
          { x: 30, autoAlpha: 0, duration: 0.7, stagger: 0.15, ease: "power3.out" },
          "-=0.5"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="ai-visibility"
      className="bg-white"
      style={{ padding: "96px 0", overflow: "hidden" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">

          {/* LEFT */}
          <div ref={leftRef}>
            <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B23E13]">
              AI search visibility
            </p>

            <h2 className="mt-3 mb-7 font-fj-display text-3xl font-bold leading-tight text-fj-ink md:text-4xl">
              Being found by AI search is the gap most Manchester sites still have
            </h2>

            <div className="flex flex-col gap-5">
              {BODY_PARAGRAPHS.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="max-w-[55ch] font-fj-body text-base leading-relaxed text-fj-neutral-600 md:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>

            <h3 className="mt-8 font-fj-display text-lg font-bold text-fj-ink">
              What ships on every page
            </h3>
            <ul className="mt-3 grid gap-y-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
              {SHIPPED.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#F05A28]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <ul ref={cardsRef} className="flex flex-col gap-4">
            {INFO_CARDS.map(({ badge, title, description }) => (
              <li
                key={badge}
                className="info-card rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6"
              >
                <span
                  className="inline-block rounded-md bg-[#B23E13] px-2 py-1 font-fj-mono text-xs font-bold tracking-wider text-white"
                >
                  {badge}
                </span>
                <h3 className="mt-3 mb-2 font-fj-display text-lg font-bold text-fj-ink">
                  {title}
                </h3>
                <p className="font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  {description}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}

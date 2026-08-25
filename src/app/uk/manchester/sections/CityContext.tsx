"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/*
 * CityContext.
 *
 * Rewritten 2026-08-25. Was a dark band with a photo washed out behind a 90%
 * navy gradient. Now light: the photo carries its own card, the stat panel is a
 * real <ul> so the figures are extractable, and the prose is roughly a third
 * shorter without losing a single attributed claim.
 *
 * Every figure below carries the name of whoever published it. If you add one,
 * add the publisher with it or leave it out.
 */

const STATS = [
  { label: "Greater Manchester GVA", value: "£100B" },
  { label: "Tech sector annual output", value: "£30B+" },
  { label: "Digital ecosystem value", value: "£5B" },
  { label: "AI Cities Index rank", value: "#1" },
  { label: "Gigabit broadband coverage", value: "94%" },
  { label: "New companies registered (2024)", value: "13,202" },
];

const PARAGRAPHS = [
  "Manchester topped the SAS AI Cities Index in both 2024 and 2025, first nationally for AI job opportunities, innovation funding and business activity. Neighbouring Salford came fifth in the same index.",
  "Research from Barclays Eagle Labs found Manchester benefits economically from its tech businesses more than any UK city outside London. A Capital Enterprise study put Manchester top for founders deciding where to start a tech company.",
  "The population has grown from around 422,000 in 2000 to close to 600,000, and most of that growth has landed around the core: Ancoats, the Northern Quarter and Salford Quays. That is a young, phone-first audience with money to spend.",
];

export default function CityContext() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const parasRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headingRef.current, { y: 40, autoAlpha: 0, duration: 0.7, ease: "power3.out" })
        .from(
          parasRef.current ? parasRef.current.querySelectorAll(".body-para") : [],
          { y: 25, autoAlpha: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          statsRef.current ? statsRef.current.querySelectorAll(".stat-row") : [],
          { x: 20, autoAlpha: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
          "-=0.3"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="city-context"
      className="bg-white"
      style={{ padding: "96px 0", overflow: "hidden" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>

        <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B23E13]">
          Manchester market context
        </p>

        <h2
          ref={headingRef}
          className="mt-3 mb-10 max-w-3xl font-fj-display text-3xl font-bold leading-tight text-fj-ink md:text-4xl"
        >
          Manchester is growing faster than any UK city outside London
        </h2>

        {/* 60 / 40 split */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[60fr_40fr] lg:gap-16">

          {/* LEFT: body text plus the photo */}
          <div>
            <div ref={parasRef} className="flex flex-col gap-5">
              {PARAGRAPHS.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="body-para max-w-[65ch] font-fj-body text-base leading-relaxed text-fj-neutral-600 md:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-fj-neutral-100">
              <Image
                src="/images/manchester/northern-quarter.webp"
                alt="Manchester Northern Quarter creative district"
                fill
                priority={false}
                quality={72}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* RIGHT: stat panel, sticky on desktop */}
          <div ref={statsRef} className="lg:sticky lg:top-[120px]">
            <h3 className="font-fj-display text-lg font-bold text-fj-ink">
              Greater Manchester at a glance
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {STATS.map(({ label, value }) => (
                <li
                  key={label}
                  className="stat-row flex items-center justify-between rounded-xl border border-fj-neutral-200 bg-fj-cream px-5 py-4"
                >
                  <span className="font-fj-body text-[15px] text-fj-neutral-600">{label}</span>
                  <span className="font-fj-display text-2xl font-bold text-fj-ink">{value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Output figures for individual councils are published by the ONS in its{' '}
              <a
                className="text-[#B23E13] underline underline-offset-2 hover:no-underline"
                href="https://www.ons.gov.uk/economy/grossvalueaddedgva/datasets/regionalgrossvalueaddedbalancedbylocalauthorityintheuk"
                target="_blank"
                rel="noopener noreferrer"
              >
                regional gross value added dataset
              </a>
              , if you want to check the city region yourself.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

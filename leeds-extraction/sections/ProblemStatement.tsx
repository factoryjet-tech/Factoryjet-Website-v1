"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

const BODY_PARAGRAPHS = [
  "Walk through Victoria Quarter, Leeds Dock, or the South Bank innovation district and you'll find businesses investing heavily in physical spaces — fit-outs, branding, location. Then visit their websites. Slow-loading WordPress themes last updated in 2021. Mobile experiences that feel like desktop afterthoughts. No conversion architecture. No schema markup. Zero visibility in AI search results.",
  "This is the reality across Leeds's SME landscape. While the city's digital infrastructure is world-class, most local business websites are not. They sit below the fold of Google's local pack, invisible to ChatGPT, Perplexity, and Claude when potential customers ask \"who builds websites in Leeds?\" or \"best web agency near Park Row.\"",
  "The Leeds web design market is crowded — there are over 200 agencies operating in the city region. But crowded doesn't mean good. Most are template shops: WordPress installs with premium themes, basic contact forms, and no performance engineering. They charge £4,500–£8,000 for websites that score 40–60 on Google Lighthouse, take 4–6 seconds to load on mobile, and have zero AI search visibility.",
];

export default function ProblemStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const pullRef = useRef<HTMLQuoteElement>(null);
  const parasRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const trigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      // H2 reveal
      gsap.from(headingRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      // Pull quote slides in from left
      gsap.from(pullRef.current, {
        x: -30,
        autoAlpha: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      // Body paragraphs stagger
      if (parasRef.current) {
        gsap.from(parasRef.current.querySelectorAll(".problem-para"), {
          y: 25,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: parasRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="problem-statement"
      className="pt-16 md:pt-24"
      style={{
        background: "#FFFFFF",
        paddingBottom: "128px",
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1400px" }}>

        {/* ── H2 — architectural heading ───────────────────────────────── */}
        <h2
          ref={headingRef}
          className="font-clash"
          style={{
            fontSize: "clamp(2.5rem, 2rem + 2vw, 4rem)",
            lineHeight: 1.1,
            color: "#0a0f1c",
            maxWidth: "900px",
            marginBottom: "48px",
          }}
        >
          Most Leeds Websites Are Built to Exist. Yours Should Be Built to
          Convert.
        </h2>

        {/* ── Pull quote — full container width ────────────────────────── */}
        <blockquote
          ref={pullRef}
          style={{
            borderLeft: "4px solid #0052CC",
            paddingLeft: "32px",
            margin: "0 0 48px 0",
          }}
        >
          <p
            className="font-clash"
            style={{
              fontSize: "clamp(1.3rem, 1.1rem + 0.8vw, 1.8rem)",
              lineHeight: 1.35,
              color: "#0052CC",
              fontStyle: "italic",
            }}
          >
            &ldquo;Your customers are asking AI assistants for recommendations.
            If your website can&rsquo;t be cited by AI systems, you&rsquo;re
            invisible to a growing segment of your market.&rdquo;
          </p>
        </blockquote>

        {/* ── Body copy + sticky image — 60/40 split ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mt-12">

          {/* LEFT 60%: body paragraphs */}
          <div
            ref={parasRef}
            className="lg:col-span-3 space-y-6"
          >
            {BODY_PARAGRAPHS.map((para, i) => (
              <p
                key={i}
                className="problem-para"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "#374151",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* RIGHT 40%: photography — sticky on desktop, stacks below on mobile */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg sticky top-8">
              <Image
                src="/images/leeds/coworking-interior.jpg"
                alt="Modern Leeds coworking space representing the city's thriving digital business scene"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

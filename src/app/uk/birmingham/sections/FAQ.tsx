"use client";

// Birmingham FAQ — fully static, zero accordion/filter logic.
// All 12 answers permanently visible in the DOM.
// AI crawlers (GPTBot, ClaudeBot, PerplexityBot) see every answer in HTML source.

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import { FAQS } from '../faqData';


export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const headerEls =
        headerRef.current?.querySelectorAll<HTMLElement>("[data-faq-head]");
      if (headerEls && headerEls.length) {
        gsap.fromTo(
          headerEls,
          { y: 18, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.07,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const cards =
        listRef.current?.querySelectorAll<HTMLElement>("[data-faq-card]");
      if (cards && cards.length) {
        gsap.fromTo(
          cards,
          { y: 15, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.04,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

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
      id="faq"
      aria-label="Frequently asked questions — Birmingham web design"
      className="relative w-full"
      style={{ backgroundColor: "#FFFFFF", maxWidth: "100vw" }}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Two-column layout: header left, cards right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[35%_1fr] lg:gap-16">

          {/* Left — section header, sticky on desktop */}
          <aside>
            <div ref={headerRef} className="lg:sticky lg:top-[120px]">
              <p
                data-faq-head
                style={{
                  color: "#B23E13",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Birmingham Web Design FAQ
              </p>

              <h2
                data-faq-head
                className="font-clash mt-4"
                style={{
                  color: "#0A0F1C",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3.2vw, 36px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Everything Birmingham Businesses Ask Us
              </h2>

              <p
                data-faq-head
                style={{
                  color: "#6b7280",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  marginTop: 10,
                }}
              >
                12 answers. Zero jargon.
              </p>
            </div>
          </aside>

          {/* Right — all 12 cards, permanently expanded */}
          <div ref={listRef} className="flex flex-col gap-4">
            {FAQS.map((item, i) => (
              <div
                key={item.q}
                data-faq-card
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                style={{
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: 16,
                  padding: "24px",
                }}
              >
                <div className="flex items-start gap-5">
                  {/* Numbered badge */}
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 flex items-center justify-center rounded-full font-bold"
                    style={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      backgroundColor: "rgba(0,82,204,0.08)",
                      border: "1px solid rgba(0,82,204,0.2)",
                      color: "#B23E13",
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3
                      itemProp="name"
                      style={{
                        color: "#0A0F1C",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "clamp(15px, 1.1vw, 17px)",
                        lineHeight: 1.4,
                        letterSpacing: "-0.005em",
                        margin: 0,
                      }}
                    >
                      {item.q}
                    </h3>

                    <div
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p
                        itemProp="text"
                        style={{
                          color: "#4b5563",
                          fontFamily: "var(--font-sans)",
                          fontWeight: 400,
                          fontSize: "clamp(14px, 1.05vw, 15px)",
                          lineHeight: 1.75,
                          marginTop: 10,
                          marginBottom: 0,
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

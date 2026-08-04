'use client';

/**
 * HomepageHeroV3 — Section 1, v3 redesign
 *
 * Editorial serif headline (Cormorant Garamond) with orange italic accent.
 * Two-column: left = copy/CTAs/trust strip | right = free-floating delivery engine.
 * Right side: NO container panel — gauge + cards float freely on cream bg (AxisFlow-style).
 */

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const trustItems = [
  '500+ sites delivered',
  '7-day guarantee',
  '60–70% cheaper',
] as const;

export default function HomepageHeroV3() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const gaugeRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const crosshairHRef = useRef<HTMLDivElement>(null);
  const crosshairVRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          eyebrowRef.current,
          headlineRef.current,
          subRef.current,
          ctaRef.current,
          trustRef.current,
        ],
        { opacity: 0, y: 28 }
      );
      gsap.set(gaugeRef.current, { opacity: 0, scale: 0.84 });
      gsap.set(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
        ],
        { opacity: 0, y: 16 }
      );
      gsap.set([crosshairHRef.current, crosshairVRef.current], {
        opacity: 0,
        scaleX: crosshairHRef.current ? 0 : 1,
        scaleY: crosshairVRef.current ? 0 : 1,
      });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.1)
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.85 }, 0.22)
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.65 }, 0.5)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.68)
        .to(trustRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.82);

      // Crosshairs expand first
      tl.to(
        crosshairHRef.current,
        { opacity: 1, scaleX: 1, duration: 0.55, ease: 'power2.out', transformOrigin: 'center center' },
        0.25
      ).to(
        crosshairVRef.current,
        { opacity: 1, scaleY: 1, duration: 0.55, ease: 'power2.out', transformOrigin: 'center center' },
        0.32
      );

      // Gauge pops in
      tl.to(
        gaugeRef.current,
        { opacity: 1, scale: 1, duration: 0.75, ease: 'back.out(1.6)' },
        0.38
      );

      // Cards fan in staggered
      tl.to(
        [card1Ref.current, card2Ref.current],
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 },
        0.7
      ).to(
        [card3Ref.current, card4Ref.current],
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 },
        0.82
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#FAFAF7' }}
    >
      {/* ── Background atmosphere ── */}
      {/* Blue bloom, top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: '-180px',
          right: '-120px',
          width: '680px',
          height: '680px',
          background: 'radial-gradient(circle, rgba(0,82,204,0.12) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />
      {/* Orange bloom, bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          bottom: '-140px',
          left: '-100px',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(255,107,53,0.10) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.6,
        }}
      />
      {/* Bottom hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,82,204,0.18) 40%, rgba(0,82,204,0.18) 60%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-12 py-24 md:py-32 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] gap-12 lg:gap-8 items-center">

          {/* ──────────────── LEFT ──────────────── */}
          <div className="flex flex-col items-start">

            {/* Eyebrow pill */}
            <div ref={eyebrowRef} className="mb-8 flex items-center gap-2.5 opacity-0">
              <span
                aria-hidden="true"
                className="inline-block w-[7px] h-[7px] rounded-full shrink-0"
                style={{ background: '#FF6B35' }}
              />
              <span
                className="font-fj-mono uppercase text-[#64748B]"
                style={{ fontSize: '10.5px', letterSpacing: '0.175em' }}
              >
                US Web Design Agency
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-fj-serif font-semibold text-[#1A1A1A] mb-7 opacity-0"
              style={{
                fontSize: 'clamp(3.8rem, 6.5vw, 5.6rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.026em',
              }}
            >
              Your Website.
              <br />
              <em
                style={{
                  fontStyle: 'italic',
                  color: '#FF6B35',
                  fontWeight: 600,
                }}
              >
                7 Days.
              </em>
              <br />
              Guaranteed.
            </h1>

            {/* Sub-headline */}
            <p
              ref={subRef}
              className="font-fj-body text-[17px] leading-[1.65] text-[#64748B] max-w-[420px] mb-10 opacity-0"
            >
              Professional websites for US small businesses, delivered in a week, at a fixed, transparent price.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-3 mb-11 opacity-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 font-fj-body font-semibold text-white rounded-lg transition-all duration-200 hover:brightness-90 active:scale-[0.98]"
                style={{
                  fontSize: '14.5px',
                  padding: '14px 28px',
                  background: '#B23E13',
                  boxShadow: '0 1px 2px rgba(0,82,204,0.25), 0 4px 16px rgba(0,82,204,0.18)',
                }}
              >
                Start Your Project
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-fj-body font-semibold text-[#1A1A1A] rounded-lg border transition-all duration-200 hover:bg-white"
                style={{
                  fontSize: '14.5px',
                  padding: '14px 24px',
                  borderColor: 'rgba(0,0,0,0.14)',
                  background: 'rgba(255,255,255,0.6)',
                }}
              >
                See Our Work
              </Link>
            </div>

            {/* Trust strip */}
            <div
              ref={trustRef}
              className="flex flex-wrap gap-6 pt-7 w-full opacity-0"
              style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
            >
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#64748B]">
                  <CheckCircle2 className="w-4 h-4 text-[#F05A28] shrink-0" />
                  <span className="font-fj-body text-[13px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ──────────────── RIGHT, free-floating ──────────────── */}
          {/* No glass container. Elements float directly on the cream background. */}
          <div className="relative hidden lg:block" style={{ height: '560px' }}>

            {/* Crosshair, horizontal */}
            <div
              ref={crosshairHRef}
              aria-hidden="true"
              className="absolute pointer-events-none opacity-0"
              style={{
                top: '50%',
                left: '4%',
                right: '4%',
                height: '1px',
                background: 'rgba(0,0,0,0.065)',
                transform: 'translateY(-50%) scaleX(0)',
              }}
            />
            {/* Crosshair, vertical */}
            <div
              ref={crosshairVRef}
              aria-hidden="true"
              className="absolute pointer-events-none opacity-0"
              style={{
                left: '50%',
                top: '6%',
                bottom: '6%',
                width: '1px',
                background: 'rgba(0,0,0,0.065)',
                transform: 'translateX(-50%) scaleY(0)',
              }}
            />

            {/* ── Central Gauge, floats directly on cream ── */}
            <div
              ref={gaugeRef}
              className="absolute opacity-0"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'drop-shadow(0 8px 40px rgba(0,0,0,0.10))',
              }}
            >
              <svg
                width="240"
                height="240"
                viewBox="0 0 240 240"
                aria-label="Delivery engine, 7-day build cycle"
              >
                {/* Outer circle, dark */}
                <circle cx="120" cy="120" r="112" fill="#080E1B" />
                {/* Subtle outer ring */}
                <circle cx="120" cy="120" r="112" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                {/* Dashed inner rings */}
                <circle cx="120" cy="120" r="82" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" strokeDasharray="5 7" />
                <circle cx="120" cy="120" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" strokeDasharray="5 7" />
                {/* Crosshair lines inside gauge */}
                <line x1="120" y1="10" x2="120" y2="230" stroke="rgba(255,255,255,0.05)" strokeWidth="0.75" />
                <line x1="10" y1="120" x2="230" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="0.75" />

                {/* Orange delivery sector arc, roughly 120° */}
                {/* Sector from top (12 o'clock) sweeping clockwise ~120° */}
                <path
                  d="M120,120 L120,10 A110,110 0 0,1 215.4,175 Z"
                  fill="#FF6B35"
                  opacity="0.92"
                />
                {/* Sector edge highlight */}
                <path
                  d="M120,120 L120,10 A110,110 0 0,1 215.4,175 Z"
                  fill="none"
                  stroke="rgba(255,160,110,0.5)"
                  strokeWidth="0.75"
                />

                {/* Tick marks on outer ring */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i / 24) * 360;
                  const rad = (angle - 90) * (Math.PI / 180);
                  const x1 = 120 + 104 * Math.cos(rad);
                  const y1 = 120 + 104 * Math.sin(rad);
                  const x2 = 120 + 96 * Math.cos(rad);
                  const y2 = 120 + 96 * Math.sin(rad);
                  const isMajor = i % 6 === 0;
                  return (
                    <line
                      key={i}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={isMajor ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'}
                      strokeWidth={isMajor ? 1.25 : 0.75}
                    />
                  );
                })}

                {/* Centre hub */}
                <circle cx="120" cy="120" r="14" fill="#080E1B" stroke="#FF6B35" strokeWidth="1.75" />
                <circle cx="120" cy="120" r="5" fill="#FF6B35" />

                {/* Label */}
                <text
                  x="120" y="196"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.18)"
                  fontSize="9"
                  fontFamily="ui-monospace, Consolas, monospace"
                  letterSpacing="3"
                >
                  DELIVERY ENGINE
                </text>
                <text
                  x="120" y="212"
                  textAnchor="middle"
                  fill="rgba(255,107,53,0.55)"
                  fontSize="8"
                  fontFamily="ui-monospace, Consolas, monospace"
                  letterSpacing="1.5"
                >
                  7-DAY BUILD CYCLE
                </text>
              </svg>
            </div>

            {/* ── Card: Site health (top-right) ── */}
            <div
              ref={card1Ref}
              className="absolute opacity-0"
              style={{ top: '12px', right: '0px' }}
            >
              <div
                className="rounded-2xl p-4"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.075)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.06)',
                  minWidth: '172px',
                }}
              >
                <p className="font-fj-mono uppercase text-[#64748B] mb-2 flex items-center gap-1.5" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0"
                    style={{ boxShadow: '0 0 4px rgba(16,185,129,0.7)' }}
                    aria-hidden="true"
                  />
                  Site health
                </p>
                <p
                  className="font-fj-serif font-semibold text-[#1A1A1A]"
                  style={{ fontSize: '38px', lineHeight: 1, letterSpacing: '-0.02em' }}
                >
                  98
                  <span className="font-fj-body text-[15px] font-normal text-[#64748B] ml-0.5">%</span>
                </p>
                <svg width="100%" height="28" viewBox="0 0 150 28" preserveAspectRatio="none" className="mt-2.5" aria-hidden="true">
                  <polyline
                    points="0,24 20,18 40,21 60,11 80,14 100,5 120,8 140,2 150,4"
                    fill="none"
                    stroke="#F05A28"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* ── Card: Delivered (top-left) ── */}
            <div
              ref={card2Ref}
              className="absolute opacity-0"
              style={{ top: '20px', left: '0px' }}
            >
              <div
                className="rounded-2xl p-4"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.075)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.06)',
                  minWidth: '158px',
                }}
              >
                <p className="font-fj-mono uppercase text-[#64748B] mb-2" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>
                  Delivered
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-fj-serif font-semibold text-[#1A1A1A]"
                    style={{ fontSize: '38px', lineHeight: 1, letterSpacing: '-0.02em' }}
                  >
                    500
                  </span>
                  <span className="font-fj-body text-sm text-[#64748B] pb-0.5">+ sites</span>
                </div>
                <p className="font-fj-body font-semibold mt-1.5" style={{ fontSize: '12px', color: '#10B981' }}>
                  All on time ✓
                </p>
              </div>
            </div>

            {/* ── Card: 7-day timeline (bottom-right) ── */}
            <div
              ref={card3Ref}
              className="absolute opacity-0"
              style={{ bottom: '16px', right: '0px' }}
            >
              <div
                className="rounded-2xl p-4"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.075)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.06)',
                  minWidth: '172px',
                }}
              >
                <p className="font-fj-mono uppercase text-[#64748B] mb-3" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>
                  7-day timeline
                </p>
                <div className="flex items-center gap-1.5 mb-2.5">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div
                      key={day}
                      className="flex-1 rounded-full"
                      style={{
                        height: '6px',
                        background: day <= 3 ? '#F05A28' : 'rgba(0,82,204,0.13)',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-fj-body text-[10px] text-[#64748B]">Day 1</span>
                  <span className="font-fj-body text-[10px] text-[#64748B]">Day 7</span>
                </div>
                <p className="font-fj-body font-semibold" style={{ fontSize: '12px', color: '#B23E13' }}>
                  Day 3 · On track →
                </p>
              </div>
            </div>

            {/* ── Card: Active projects (bottom-left) ── */}
            <div
              ref={card4Ref}
              className="absolute opacity-0"
              style={{ bottom: '24px', left: '0px' }}
            >
              <div
                className="rounded-2xl p-4"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.075)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.06)',
                  minWidth: '165px',
                }}
              >
                <p className="font-fj-mono uppercase text-[#64748B] mb-3" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>
                  Active now
                </p>
                {[
                  { label: 'Design', pct: 85, color: '#F05A28' },
                  { label: 'Build', pct: 60, color: '#FF6B35' },
                  { label: 'QA', pct: 40, color: '#10B981' },
                ].map(({ label, pct, color }) => (
                  <div key={label} className="flex items-center gap-2 mb-2.5 last:mb-0">
                    <span className="font-fj-body text-[#64748B] w-10 shrink-0" style={{ fontSize: '11px' }}>
                      {label}
                    </span>
                    <div
                      className="flex-1 rounded-full overflow-hidden"
                      style={{ height: '5px', background: 'rgba(0,0,0,0.07)' }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, background: color }}
                      />
                    </div>
                    <span className="font-fj-body font-semibold text-[#1A1A1A] w-6 text-right" style={{ fontSize: '11px' }}>
                      {pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle glow behind gauge, reinforces float without a panel */}
            <div
              aria-hidden="true"
              className="absolute pointer-events-none rounded-full"
              style={{
                top: '50%',
                left: '50%',
                width: '320px',
                height: '320px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)',
              }}
            />

          </div>
          {/* end right */}

        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

// Before/after drag slider for ./CaseStudy.tsx (/uk/manchester). Split out of
// CaseStudy on 2026-09-26 so the rest of that section can be a server
// component; this is the only part that needs state and pointer events.
// Unchanged apart from the move.
// ── Before/After image slider ─────────────────────────────────────────────────
export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const clamp = (v: number) => Math.min(95, Math.max(5, v));

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPosition(clamp(((clientX - left) / width) * 100));
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging.current) updatePosition(e.touches[0].clientX);
    };
    const stopDrag = () => { isDragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [updatePosition]);

  return (
    <div className="mt-16">
      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative mx-auto rounded-2xl overflow-hidden shadow-lg select-none"
        style={{
          maxWidth: "900px",
          aspectRatio: "16 / 10",
          cursor: "col-resize",
          touchAction: "none",
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        aria-label="Before and after website comparison. Drag to compare."
        role="img"
      >
        {/* Layer 0: BEFORE image (full width, base layer) */}
        <Image
          src="/images/manchester/case-before.webp"
          alt="Manchester financial advisory firm website before FactoryJet redesign, slow, outdated WordPress theme"
          fill
          quality={80}
          className="object-cover object-top"
          style={{ zIndex: 0 }}
          draggable={false}
        />

        {/* Layer 1, AFTER image (clipped to reveal from left) */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src="/images/manchester/case-after.webp"
            alt="Manchester financial advisory firm website after FactoryJet redesign, fast, modern, conversion-engineered"
            fill
            quality={80}
            className="object-cover object-top"
            draggable={false}
          />
        </div>

        {/* Layer 2, Vertical divider line */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            zIndex: 2,
            left: `${position}%`,
            transform: "translateX(-50%)",
            width: "2px",
            background: "white",
            boxShadow: "0 0 8px rgba(0,0,0,0.4)",
          }}
          aria-hidden="true"
        />

        {/* Layer 3, Drag handle */}
        <div
          className="absolute top-1/2 flex items-center justify-center rounded-full pointer-events-none"
          style={{
            zIndex: 3,
            left: `${position}%`,
            transform: "translate(-50%, -50%)",
            width: "44px",
            height: "44px",
            background: "white",
            boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
            fontSize: "16px",
            color: "#F05A28",
            fontWeight: 700,
            letterSpacing: "-1px",
            userSelect: "none",
          }}
          aria-hidden="true"
        >
          ⟨⟩
        </div>

        {/* BEFORE badge, top-left */}
        <div
          className="absolute top-4 left-4 rounded-full px-3 py-1 pointer-events-none"
          style={{
            zIndex: 4,
            background: "rgba(239,68,68,0.9)",
            fontSize: "11px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
          aria-hidden="true"
        >
          Before
        </div>

        {/* AFTER badge, top-right */}
        <div
          className="absolute top-4 right-4 rounded-full px-3 py-1 pointer-events-none"
          style={{
            zIndex: 4,
            background: "rgba(16,185,129,0.9)",
            fontSize: "11px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
          aria-hidden="true"
        >
          After
        </div>
      </div>

      {/* Caption */}
      <p
        className="text-center mx-auto mt-4"
        style={{ fontSize: "14px", color: "#4B5563", maxWidth: "600px" }}
      >
        Drag to compare: A Manchester professional services firm before and after
        the FactoryJet redesign
      </p>
    </div>
  );
}

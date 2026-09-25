"use client";

import { useEffect } from "react";

// Hover tilt + shadow for the ./Cities.tsx bento cards.
//
// Cities.tsx is a server component; this island renders nothing and attaches
// the same pointer/focus handlers the cards used to carry inline, to the
// server-rendered [data-city-card] links inside the section. The tilt still
// only runs on devices that truly support hover.
const SHADOW_ON =
  "0 20px 60px -15px rgba(0,82,204,0.45), 0 4px 12px rgba(0,0,0,0.08)";
const SHADOW_OFF = "0 1px 3px rgba(0,0,0,0.04)";

export default function CityTiltFx({ sectionId }: { sectionId: string }) {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const cards = Array.from(
      section.querySelectorAll<HTMLElement>("[data-city-card]")
    );
    const offs: Array<() => void> = [];

    cards.forEach((card) => {
      const img = card.querySelector<HTMLElement>("[data-city-img]");

      const onMove = (e: MouseEvent) => {
        if (!window.matchMedia("(hover: hover)").matches) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotY = (x - 0.5) * 10; // plus or minus 5deg
        const rotX = -(y - 0.5) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
        if (img) img.style.transform = "scale(1.05)";
      };
      const onLeave = () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        if (img) img.style.transform = "scale(1)";
      };
      const onShadowOn = () => {
        card.style.boxShadow = SHADOW_ON;
      };
      const onShadowOff = () => {
        card.style.boxShadow = SHADOW_OFF;
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      card.addEventListener("mouseenter", onShadowOn);
      card.addEventListener("focus", onShadowOn);
      card.addEventListener("blur", onShadowOff);
      offs.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
        card.removeEventListener("mouseenter", onShadowOn);
        card.removeEventListener("focus", onShadowOn);
        card.removeEventListener("blur", onShadowOff);
      });
    });

    return () => offs.forEach((off) => off());
  }, [sectionId]);

  return null;
}

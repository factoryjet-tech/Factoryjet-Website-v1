'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * MotionFadeUp — v2.0 scroll-triggered fade-up wrapper.
 *
 * Wraps any content in a div that fades in + translates up when it enters
 * the viewport. Uses GSAP ScrollTrigger; the wrapper itself is invisible
 * until the animation runs so there's no layout shift.
 *
 * `delay` offsets the animation start for staggered children in a grid.
 * `once` (default true) plays the animation once and kills the trigger.
 *
 * Client component — isolates the GSAP boundary so parent sections stay
 * pure server components. Keep the wrapper as thin as possible; it should
 * only wrap the content that needs motion, not entire section shells.
 *
 * Anti-slop rules: no bounce, no spring physics, no elastic. Simple
 * ease-out with 0.6s duration max. This is editorial, not a TikTok reel.
 */

gsap.registerPlugin(ScrollTrigger);

export interface MotionFadeUpProps {
  children: ReactNode;
  /** Stagger delay in seconds (default 0). */
  delay?: number;
  /** CSS class names forwarded to the wrapper div. */
  className?: string;
  /** Inline styles forwarded to the wrapper div. */
  style?: CSSProperties;
  /** If true (default), destroy trigger after first play. */
  once?: boolean;
}

export default function MotionFadeUp({
  children,
  delay = 0,
  className = '',
  style,
  once = true,
}: MotionFadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial state
    gsap.set(el, { opacity: 0, y: 28 });

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.vars.trigger === el)
        .forEach((st) => st.kill());
    };
  }, [delay, once]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export { MotionFadeUp };

'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode, CSSProperties } from 'react';

/**
 * MotionFadeUp — v2.0 scroll-triggered fade-up wrapper.
 *
 * GSAP + ScrollTrigger are dynamically imported inside useEffect so they
 * are excluded from the initial JS bundle (saves ~314 KiB on first load).
 * The element starts visible (opacity:1) until GSAP hydrates, then the
 * animation plays. Elements already in the viewport at load time animate
 * immediately without waiting for a scroll trigger.
 *
 * Anti-slop rules: no bounce, no spring physics, no elastic. Simple
 * ease-out with 0.6s duration max.
 */

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

    // Respect user's motion preference — skip all animation if reduce is set.
    // This also satisfies WCAG 2.1 SC 2.3.3 (AAA) and is a Core Web Vitals
    // best-practice: avoids layout shifts on devices with the flag enabled.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let killed = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let tween: any = null;

    // Dynamically import GSAP so it is excluded from the initial JS bundle.
    // This alone saves ~314 KiB on first load (FCP / LCP improvement).
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        if (killed) return;
        gsap.registerPlugin(ScrollTrigger);

        // Set initial invisible state only after GSAP loads (not before),
        // so the element stays visible in the SSR HTML until JS hydrates.
        gsap.set(el, { opacity: 0, y: 28 });

        // Elements already in the viewport at load time won't receive a
        // scroll event to trigger the animation — animate them immediately.
        const rect = el.getBoundingClientRect();
        const alreadyInView = rect.top < window.innerHeight * 0.88;

        if (alreadyInView) {
          tween = gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            delay,
            ease: 'power2.out',
          });
        } else {
          tween = gsap.to(el, {
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
        }
      });
    });

    return () => {
      killed = true;
      if (tween) {
        tween.kill();
        // ScrollTrigger may not be loaded yet if cleanup runs very early
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll()
            .filter((st) => st.vars.trigger === el)
            .forEach((st) => st.kill());
        });
      }
    };
  }, [delay, once]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export { MotionFadeUp };

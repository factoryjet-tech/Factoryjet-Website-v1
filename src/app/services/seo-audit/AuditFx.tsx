'use client';

import { useEffect } from 'react';

/* Lightweight, dependency-free motion for /us/services/ecommerce-seo.
   - Scroll reveals via IntersectionObserver (content is visible by default in CSS;
     this only ADDS the `.in` class to play a reveal; a safety timeout guarantees
     nothing stays hidden).
   - Crystal-glass cards: pointer mapped to the nearest card's on-screen center
     (3D :hover hit-testing is unreliable in Safari), plus a one-time auto-demo
     on first view so all three layers visibly animate.
   No GSAP/Framer, keeps the page at a clean 100/100. Honors reduced-motion. */
export default function EcomFx() {
  useEffect(() => {
    const root = document.querySelector('.aseo');
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- scroll reveals ----
    const reveals = Array.prototype.slice.call(root.querySelectorAll('[data-reveal]')) as HTMLElement[];
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in');
              io.unobserve(en.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      );
      reveals.forEach((el) => io.observe(el));
      // safety net: never leave content hidden
      window.setTimeout(() => reveals.forEach((el) => el.classList.add('in')), 3000);
    }

    // ---- crystal-glass cards ----
    const grow = root.querySelector('.glass-row') as HTMLElement | null;
    if (!grow) return;
    const cards = Array.prototype.slice.call(grow.querySelectorAll('.gcard')) as HTMLElement[];
    let centers: number[] = [];
    const measure = () => {
      centers = cards.map((c) => {
        c.classList.remove('is-active');
        const r = c.getBoundingClientRect();
        return r.left + r.width / 2;
      });
    };
    const desktop = () => window.matchMedia('(min-width: 921px)').matches;
    measure();
    window.addEventListener('resize', measure);

    const onMove = (e: MouseEvent) => {
      if (!desktop()) return;
      let best = 0;
      let bd = Infinity;
      centers.forEach((cx, i) => {
        const d = Math.abs(e.clientX - cx);
        if (d < bd) {
          bd = d;
          best = i;
        }
      });
      cards.forEach((c, i) => c.classList.toggle('is-active', i === best));
    };
    const onLeave = () => cards.forEach((c) => c.classList.remove('is-active'));
    grow.addEventListener('mousemove', onMove);
    grow.addEventListener('mouseleave', onLeave);

    // one-time auto-demo on first view (proves all three animate, incl. Layer 03)
    let demoIO: IntersectionObserver | null = null;
    const timers: number[] = [];
    if (!reduce && 'IntersectionObserver' in window) {
      demoIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            demoIO && demoIO.disconnect();
            cards.forEach((_, i) => {
              timers.push(
                window.setTimeout(() => {
                  cards.forEach((x, j) => x.classList.toggle('is-active', j === i));
                  if (i === cards.length - 1) {
                    timers.push(window.setTimeout(() => cards.forEach((x) => x.classList.remove('is-active')), 700));
                  }
                }, 400 + i * 560)
              );
            });
          });
        },
        { threshold: 0.45 }
      );
      demoIO.observe(grow);
    }

    return () => {
      window.removeEventListener('resize', measure);
      grow.removeEventListener('mousemove', onMove);
      grow.removeEventListener('mouseleave', onLeave);
      demoIO && demoIO.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return null;
}

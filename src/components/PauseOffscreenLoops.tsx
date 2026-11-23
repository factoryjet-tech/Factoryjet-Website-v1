'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Pauses looping CSS animations while their <section> is off-screen (2026-10-17).
 *
 * The homepage runs 18 infinite animations (hero workflow rows, status dots, the
 * hx-step list ~17,000 px down). They animate background and border colours, so
 * the browser restyles 60 times a second even when nobody can see them.
 *
 * Only animations with infinite iterations are paused, and only by setting
 * data-loop-paused on their element; index.css turns that into
 * animation-play-state: paused. CSS stays in control, so hover-to-pause and the
 * workflow pause checkbox keep working, and one-shot entrance animations are
 * never touched. On screen, everything runs exactly as before.
 */
const ATTR = 'data-loop-paused';

export default function PauseOffscreenLoops() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || typeof document.getAnimations !== 'function') return;

    const ownedBy = (el: Element, section: Element) => el.closest('section') === section;

    const io = new IntersectionObserver(
      (entries) => {
        for (const { target: section, isIntersecting } of entries) {
          if (isIntersecting) {
            section.querySelectorAll(`[${ATTR}]`).forEach((el) => {
              if (ownedBy(el, section)) el.removeAttribute(ATTR);
            });
          } else {
            for (const a of section.getAnimations({ subtree: true })) {
              const el = (a.effect as KeyframeEffect | null)?.target;
              if (el && a.effect?.getTiming().iterations === Infinity && ownedBy(el, section)) el.setAttribute(ATTR, '');
            }
          }
        }
      },
      { rootMargin: '200px 0px' },
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((s) => io.observe(s));
    return () => {
      io.disconnect();
      document.querySelectorAll(`[${ATTR}]`).forEach((el) => el.removeAttribute(ATTR));
    };
  }, [pathname]);

  // The hero workflow panels' "Replay animation" button is a type="reset" button.
  // Reset clears a selected row and the pause box, but CSS cannot restart a running
  // animation, so with nothing selected or paused the click changed nothing (Clarity
  // dead-click review, 2026-11-23). The reset event fires before the inputs clear,
  // so wait a frame, then send every looping animation in that panel back to 0.
  useEffect(() => {
    const onReset = (e: Event) => {
      const form = e.target;
      if (!(form instanceof HTMLFormElement) || !form.querySelector('.workflow-replay')) return;
      if (typeof form.getAnimations !== 'function') return;
      requestAnimationFrame(() => {
        for (const a of form.getAnimations({ subtree: true })) {
          if (a.effect?.getTiming().iterations === Infinity) a.currentTime = 0;
        }
      });
    };
    document.addEventListener('reset', onReset);
    return () => document.removeEventListener('reset', onReset);
  }, []);

  return null;
}

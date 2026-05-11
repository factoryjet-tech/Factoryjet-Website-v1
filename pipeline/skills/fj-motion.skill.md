# Skill: fj-motion
# Use when: adding scroll animations, hover states, or any motion to FactoryJet pages

## The one approved easing

`cubic-bezier(0.22, 1, 0.36, 1)` — custom ease-out-quint. Use this for ALL transitions.
Never use `linear`. Never use `ease-in`. Prefer ease-out or ease-in-out variants of this curve.

## Approved motion patterns

### Fade-up on viewport entry (primary scroll reveal)
```css
/* Initial state */
transform: translateY(16px);
opacity: 0;

/* Animated state */
transform: translateY(0);
opacity: 1;
transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 600ms cubic-bezier(0.22, 1, 0.36, 1);
```
Stagger: max 6 elements. Delay increment: 80–100ms per element.
The `MotionFadeUp` component in `src/components/v2/MotionFadeUp.tsx` handles this — use it.

### Card hover lift
```css
transform: translateY(-2px);
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 200ms cubic-bezier(0.22, 1, 0.36, 1);
```

### Link underline draw
```css
/* pseudo-element width 0 → 100%, 200ms ease-out-quint */
```

### Smooth scroll
Lenis is already in the stack. Do not add a second scroll library.

## prefers-reduced-motion

ALL motion must be wrapped with `@media (prefers-reduced-motion: reduce)` to disable or reduce.
In React: `const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches`
Or use the CSS `@media` query directly on transition properties.

## Forbidden motion — hard no

- ❌ Spinning counters / count-up-on-scroll number animations
- ❌ Mouse-tracking spotlight or glow effects on any element
- ❌ Video backgrounds (any section, any page)
- ❌ Infinite marquees (logo bar 60s loop with pause-on-hover is the single exception)
- ❌ Particles, floating geometric shapes, abstract orbs
- ❌ Load-screen / splash animations
- ❌ Parallax backgrounds (performance + accessibility cost)
- ❌ Reveal animations longer than 600ms
- ❌ Stagger across more than 6 elements
- ❌ GSAP ScrollTrigger for decorative effects — only for functional reveals
- ❌ Three.js or WebGL effects (not in brand)

## When to add motion vs. leave static

Motion earns its place by guiding attention to conversion. Apply to:
- Hero → content (fade-up on load, 1 pass)
- Section content (fade-up on first viewport entry)
- Card hover states

Leave static:
- Stat numerals (no count-up)
- Logo bar (static strip, no scroll animation)
- Navigation
- Footer

'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { lookupIcon } from './lucideIconLookup';
import { RevealOnScroll } from './RevealOnScroll';

export interface ProcessVisualTimelineProps {
  eyebrow: string;
  headline: string;
  lead: string;
  steps: ReadonlyArray<{
    numeral: string; // "01" through "05"
    dayRange: string;
    title: string;
    body: string; // one sentence
    lucideIconName: string;
  }>; // length 5
}

/**
 * `process_v2_visual_timeline` per spec §5.7. Replaces the deleted
 * <ProcessVerticalTimeline> with a horizontal 5-step timeline.
 *
 * Client Component — uses framer-motion to animate the connecting
 * line behind the icon row (scaleX 0 → 1 over 600ms when the
 * section enters the viewport, transformOrigin: 'left'). Steps
 * themselves stay server-rendered through the RevealOnScroll
 * wrapper, so the static HTML still carries every label.
 *
 * Layout: 5 columns desktop (lg:grid-cols-5), 2 cols tablet,
 * 1 col mobile. Each column: numbered illustrated icon top
 * (Lucide icon size-8 inside bg-soft circle), then day-range tag
 * in mono uppercase Jet Blue, title in text-title, body sentence.
 *
 * The connecting line draws only on lg+ — vertical stacks on
 * narrow viewports don't need a horizontal rail.
 */
export default function ProcessVisualTimeline({
  eyebrow,
  headline,
  lead,
  steps,
}: ProcessVisualTimelineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-16 max-w-3xl">
            <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
              {eyebrow}
            </div>
            <h2 className="font-display text-display-md text-navy">
              {headline}
            </h2>
            <p className="mt-6 text-body-lg text-slate">{lead}</p>
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Animated connecting rail — desktop only.
           * Sits behind the icon row at the icons' vertical centre. */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px lg:block"
          >
            <motion.div
              className="h-full origin-left bg-border-soft"
              initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            />
          </div>

          {/* Step columns */}
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step) => {
              const Icon = lookupIcon(step.lucideIconName);
              return (
                <div key={step.numeral} className="flex flex-col items-start">
                  {/* Icon disc — sits ON the rail */}
                  <div className="relative mb-5 flex size-16 items-center justify-center rounded-full bg-bg-soft ring-8 ring-white">
                    <Icon className="size-7 text-jet-blue" aria-hidden />
                    {/* Numeral badge top-right of disc */}
                    <span className="absolute -right-1 -top-1 rounded-full bg-navy px-1.5 py-0.5 font-mono text-[9px] font-medium text-white">
                      {step.numeral}
                    </span>
                  </div>

                  <div className="font-mono text-mono-sm uppercase tracking-[0.08em] text-jet-blue">
                    {step.dayRange}
                  </div>
                  <h3 className="mt-2 text-title font-medium text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-body text-slate">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

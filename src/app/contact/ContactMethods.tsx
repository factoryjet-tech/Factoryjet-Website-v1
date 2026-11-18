'use client';

/**
 * ContactMethods: the "other ways to reach us" band on /contact.
 *
 * Both actions are plain anchors (calendly.com, mailto:). GTM
 * (single source of truth) auto-detects those link clicks and fires the matching
 * GA4 events + Ads conversions, so no inline gtag calls are needed here.
 * (GTM-only 2026-07-02.)
 *
 * Whole-card click target (2026-10-12): each card is `relative` and its anchor
 * carries an `after:absolute after:inset-0` overlay, so a click on the icon, the
 * title or the text follows the same link. Before this only the small text link
 * at the bottom was clickable. The anchor element, its href, its text and its
 * data attributes are unchanged, so the GTM link-click triggers see the same
 * click as before. Keep the anchor as the last child of the card so the overlay
 * sits above everything else in it.
 */

import { CalendarClock, Mail } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/bhavesh-factoryjet/30min';
const EMAIL = 'connect@factoryjet.com';

/* Stretches the anchor's hit area over its `relative` card. */
const CARD_LINK = "after:absolute after:inset-0 after:rounded-2xl after:content-['']";

export default function ContactMethods() {
  return (
    <section className="border-y border-slate-100 bg-[#FAFBFC] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-fj-display text-2xl font-extrabold tracking-[-0.02em] text-[#0A0F1C] sm:text-3xl">
          Other ways to reach us
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-slate-500">
          Use whichever is easiest for you. Bhavesh replies to every email within 24 hours.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Book a call, featured */}
          <div className="relative flex flex-col rounded-2xl border-2 border-[#F05A28] bg-white p-6">
            <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0EA]">
              <CalendarClock className="h-6 w-6 text-[#F05A28]" />
            </div>
            <span className="mb-2.5 inline-block rounded-md bg-[#FFF0EA] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
              Recommended
            </span>
            <h3 className="font-fj-display text-[17px] font-bold text-[#0A0F1C]">Book a 30-minute call</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              Thirty minutes with Bhavesh to talk through what you want built. The first call is
              free.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto inline-flex items-center gap-2 self-start pt-4 text-sm font-bold text-[#B23E13] ${CARD_LINK}`}
            >
              Pick a time
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Email */}
          <div className="relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6">
            <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0EA]">
              <Mail className="h-6 w-6 text-[#F05A28]" />
            </div>
            <h3 className="font-fj-display text-[17px] font-bold text-[#0A0F1C]">Email us</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              Best for a detailed brief or a document we should read before we talk.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className={`mt-auto inline-flex items-center gap-2 self-start pt-4 text-sm font-bold text-[#B23E13] ${CARD_LINK}`}
            >
              {EMAIL}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

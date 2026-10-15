'use client';

/**
 * ContactMethods: the "other ways to reach us" band on /contact.
 *
 * All three actions are plain anchors (calendly.com, wa.me, mailto:). GTM
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
import { usePathname } from 'next/navigation';
import { whatsappHref } from '@/utils/whatsappHref';

const CALENDLY_URL = 'https://calendly.com/bhavesh-factoryjet/30min';
const EMAIL = 'connect@factoryjet.com';

/* Stretches the anchor's hit area over its `relative` card. */
const CARD_LINK = "after:absolute after:inset-0 after:rounded-2xl after:content-['']";

export default function ContactMethods() {
  const pathname = usePathname();
  const WHATSAPP_HREF = whatsappHref("Hi FactoryJet, I'd like to talk about a project.", pathname);

  return (
    <section className="border-y border-slate-100 bg-[#FAFBFC] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-fj-display text-2xl font-extrabold tracking-[-0.02em] text-[#0A0F1C] sm:text-3xl">
          Other ways to reach us
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-slate-500">
          Use whichever is easiest for you. Bhavesh replies to WhatsApp messages and emails
          within 24 hours.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3">
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

          {/* WhatsApp */}
          <div className="relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6">
            <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F7EF]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.4-8.4z" fill="#25D366"/>
                <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3 0-.46.13-.6.13-.14.3-.35.45-.52.14-.18.19-.3.29-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.29.18-1.41-.07-.12-.27-.2-.57-.35z" fill="#fff"/>
              </svg>
            </div>
            <h3 className="font-fj-display text-[17px] font-bold text-[#0A0F1C]">WhatsApp us</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              WhatsApp opens with a short message already typed. Use it for a quick question or
              to send a file.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp"
              className={`mt-auto inline-flex items-center gap-2 self-start pt-4 text-sm font-bold text-[#0E7A3A] ${CARD_LINK}`}
            >
              Chat on WhatsApp
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

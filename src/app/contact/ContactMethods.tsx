'use client';

/**
 * ContactMethods — the "reach us another way" band on /contact.
 *
 * All three actions are plain anchors (calendly.com, wa.me, mailto:). GTM
 * (single source of truth) auto-detects those link clicks and fires the matching
 * GA4 events + Ads conversions — no inline gtag calls needed here. (GTM-only 2026-07-02.)
 */

import { CalendarClock, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { whatsappHref } from '@/utils/whatsappHref';

const CALENDLY_URL = 'https://calendly.com/bhavesh-factoryjet/30min';
const EMAIL = 'connect@factoryjet.com';

export default function ContactMethods() {
  const pathname = usePathname();
  const WHATSAPP_HREF = whatsappHref("Hi FactoryJet, I'd like to talk about a project.", pathname);

  return (
    <section className="border-y border-slate-100 bg-[#FAFBFC] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold tracking-[-0.02em] text-[#0A0F1C] sm:text-3xl">
          Prefer to reach us another way?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-slate-500">
          Pick whatever is fastest for you. A real person answers, not a call center.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Book a call, featured */}
          <div className="rounded-2xl border-2 border-[#F05A28] bg-white p-6">
            <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0EA]">
              <CalendarClock className="h-6 w-6 text-[#F05A28]" />
            </div>
            <span className="mb-2.5 inline-block rounded-md bg-[#FFF0EA] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
              Recommended
            </span>
            <h3 className="text-[17px] font-bold text-[#0A0F1C]">Book a 30-minute call</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              Best for mapping out your project and getting honest recommendations from Bhavesh.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#B23E13]"
            >
              Pick a time
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6">
            <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F7EF]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.4-8.4z" fill="#25D366"/>
                <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3 0-.46.13-.6.13-.14.3-.35.45-.52.14-.18.19-.3.29-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.29.18-1.41-.07-.12-.27-.2-.57-.35z" fill="#fff"/>
              </svg>
            </div>
            <h3 className="text-[17px] font-bold text-[#0A0F1C]">WhatsApp us</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              Quick questions or sharing docs. We reply within 30 minutes during business hours.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0E7A3A]"
            >
              Chat on WhatsApp
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6">
            <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0EA]">
              <Mail className="h-6 w-6 text-[#F05A28]" />
            </div>
            <h3 className="text-[17px] font-bold text-[#0A0F1C]">Email us</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              Best for detailed briefs. We reply within 4 business hours, every time.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#B23E13]"
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

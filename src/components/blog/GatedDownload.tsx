'use client';

/**
 * GatedDownload: a three-field form (name, work email, company) that unlocks a
 * file. Built 2026-10-17 for the AI agent governance policy template.
 *
 * The lead goes through submitLead() like every other form (Firestore + email +
 * ERPNext). A download is a lighter signal than a project enquiry, so this fires
 * `resource_download` and NOT `lead_converted`: template downloads must not be
 * counted as sales leads in GA4 or Google Ads. A filled trap field is kept and
 * marked as likely spam on the server (keepTrappedLead), and still gets the file.
 *
 * The file sits in /public, so this is a soft gate: anyone with the URL can fetch it.
 */

import React, { useState } from 'react';
import { submitLead } from '@/utils/submitLead';
import { keepTrappedLead } from '@/utils/trappedLead';
import { pushToDataLayer } from '@/utils/gtm';

export interface GatedDownloadProps {
  /** Path of the file under /public, e.g. /downloads/x.docx */
  fileHref: string;
  /** Name the browser saves the file as. */
  fileName: string;
  /** Lead source tag, e.g. download_ai_agent_governance_template */
  source: string;
  eyebrow: string;
  heading: string;
  body: string;
  /** Short list of what is inside the file. */
  contents: string[];
  formatNote: string;
}

export default function GatedDownload({ fileHref, fileName, source, eyebrow, heading, body, contents, formatNote }: GatedDownloadProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const startDownload = () => {
    const a = document.createElement('a');
    a.href = fileHref;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === 'sending') return;
    setState('sending');
    const lead = {
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      service: 'AI Agent Development',
      message: `Downloaded: ${heading}`,
      region: 'us',
      source,
    };
    if (honeypot.trim() !== '') {
      await keepTrappedLead({ ...lead, honeypot });
      setState('done');
      startDownload();
      return;
    }
    try {
      await submitLead(lead);
      pushToDataLayer({ event: 'resource_download', form_name: source, file_name: fileName });
      setState('done');
      startDownload();
    } catch {
      setState('error');
    }
  };

  const field =
    'w-full rounded-lg border border-[#D6CFC7] bg-white px-3.5 py-2.5 text-[15px] text-[#1F2937] placeholder:text-[#6B7280] focus:border-[#B23E13] focus:outline-none focus:ring-2 focus:ring-[#B23E13]/20';

  return (
    <section
      aria-label={heading}
      className="not-prose my-10 rounded-2xl border-2 border-[#E5DFD7] bg-[#FAF8F5] p-6 sm:p-8"
    >
      <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] lg:grid-cols-1 xl:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">{eyebrow}</p>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">{heading}</h3>
          <p className="text-[#374151] text-base leading-relaxed mb-4">{body}</p>
          <ul className="space-y-1.5 text-sm text-[#374151]">
            {contents.map((c) => (
              <li key={c} className="flex gap-2">
                <span aria-hidden="true" className="text-[#B23E13] font-bold">+</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[#4B5563]">{formatNote}</p>
        </div>

        <div className="rounded-xl border border-[#E5DFD7] bg-white p-5">
          {state === 'done' ? (
            <div role="status">
              <p className="text-lg font-bold text-[#1F2937] mb-2">Your download has started.</p>
              <p className="text-sm text-[#374151] mb-4">
                If it did not, use the link below. Bhavesh, our founder, may follow up once by email to ask whether a
                second look at your first agent would help. That is all.
              </p>
              <a
                href={fileHref}
                download={fileName}
                className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white hover:bg-[#9A3510]"
              >
                Download the template
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="relative space-y-3" noValidate={false}>
              <div>
                <label htmlFor={`${source}-name`} className="block text-sm font-semibold text-[#1F2937] mb-1">Name</label>
                <input id={`${source}-name`} required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
              </div>
              <div>
                <label htmlFor={`${source}-email`} className="block text-sm font-semibold text-[#1F2937] mb-1">Work email</label>
                <input id={`${source}-email`} type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
              </div>
              <div>
                <label htmlFor={`${source}-company`} className="block text-sm font-semibold text-[#1F2937] mb-1">Company</label>
                <input id={`${source}-company`} required autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} className={field} />
              </div>
              <input
                type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
                value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              />
              <button
                type="submit"
                disabled={state === 'sending'}
                className="w-full rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white hover:bg-[#9A3510] disabled:opacity-70"
              >
                {state === 'sending' ? 'Sending…' : 'Get the template'}
              </button>
              {state === 'error' && (
                <p role="alert" className="text-sm text-[#B23E13]">
                  That did not go through. Check your connection and try again, or email connect@factoryjet.com.
                </p>
              )}
              <p className="text-xs text-[#4B5563]">No newsletter. We use your details only to send this and, at most, one follow-up email.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

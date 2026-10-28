'use client';

/**
 * useTurnstile — invisible Cloudflare Turnstile for the lead forms.
 *
 * load() renders the widget on first focus (not on page open: the challenge
 * pulls ~730 KB). freshToken() runs at submit and returns a token the server
 * can still verify, or '' after a few seconds. A missing token never blocks a
 * lead: notify-lead.js saves it as 'absent'.
 *
 * Why freshToken exists (2026-10-28): a token lives 5 minutes and can be
 * verified once. Forms used the token minted on first focus, so a visitor who
 * read the page before sending failed the check (9 real leads, 16 to 26 Oct,
 * Obelisk among them), and a retry after an error resent a used token. The
 * careers form got the same fix in 3308dfc.
 */

import { useCallback, useRef } from 'react';

interface TurnstileApi {
  render: (container: HTMLElement | string, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
}
function turnstileApi(): TurnstileApi | undefined {
  return (window as unknown as { turnstile?: TurnstileApi }).turnstile;
}

const SCRIPT_ID = 'cf-turnstile-script';
// Reuse a token younger than this; past it, ask for a new one. 60 s of slack
// under the 5-minute lifetime covers the trip to siteverify.
const TOKEN_MAX_AGE_MS = 4 * 60 * 1000;
// How long submit waits for a new token. An invisible check usually takes 1 to 2 s.
const WAIT_MS = 4000;

export function useTurnstile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const token = useRef({ value: '', at: 0, used: false });

  const load = useCallback(() => {
    const renderWidget = () => {
      const api = turnstileApi();
      const container = containerRef.current;
      if (!container || !api || widgetId.current) return;
      widgetId.current = api.render(container, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA',
        callback: (t: unknown) => { token.current = { value: t as string, at: Date.now(), used: false }; },
        'expired-callback': () => { token.current = { value: '', at: 0, used: false }; },
        'error-callback': () => { token.current = { value: '', at: 0, used: false }; },
        theme: 'light',
        appearance: 'interaction-only',
        size: 'normal',
      });
    };
    if (turnstileApi()) { renderWidget(); return; }
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true; script.defer = true; script.onload = renderWidget;
      document.head.appendChild(script);
    } else {
      let attempts = 0;
      const poll = setInterval(() => {
        attempts++;
        if (turnstileApi()) { clearInterval(poll); renderWidget(); }
        if (attempts > 50) clearInterval(poll);
      }, 100);
    }
  }, []);

  const remove = useCallback(() => {
    const api = turnstileApi();
    if (widgetId.current && api) {
      try { api.remove(widgetId.current); } catch { /* already gone */ }
    }
    widgetId.current = null;
    token.current = { value: '', at: 0, used: false };
  }, []);

  /** A token that has not been sent before and has time left, or '' if none
   *  arrives within WAIT_MS. Marks the returned token as used. */
  const freshToken = useCallback(async (): Promise<string> => {
    const t = token.current;
    const reusable = t.value && !t.used && Date.now() - t.at < TOKEN_MAX_AGE_MS;
    if (!reusable) {
      token.current = { value: '', at: 0, used: false };
      const api = turnstileApi();
      if (widgetId.current && api) {
        try { api.reset(widgetId.current); } catch { widgetId.current = null; }
      }
      load();
      for (let waited = 0; waited < WAIT_MS && !token.current.value; waited += 150) {
        await new Promise((r) => setTimeout(r, 150));
      }
    }
    if (!token.current.value) return '';
    token.current.used = true;
    return token.current.value;
  }, [load]);

  return { containerRef, load, remove, freshToken };
}

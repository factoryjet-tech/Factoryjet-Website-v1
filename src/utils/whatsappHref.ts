/**
 * whatsappHref — build a wa.me link whose prefilled message carries the page it
 * was sent from.
 *
 * Why: WhatsApp is a real acquisition channel (GA4 records whatsapp_click, and a
 * July 2026 US customer arrived entirely through it) but it is completely blind.
 * The visitor leaves the site to a different app, so there is no referrer, no
 * session, and nothing lands in Firestore — the lead simply appears in an inbox
 * with no indication of which page persuaded them.
 *
 * Appending "(from /services/ai-automation)" to the prefilled text means the very
 * first message states its own source, which is the only attribution this channel
 * can have without asking the customer.
 *
 * Pass `pathname` from next/navigation's usePathname() rather than reading
 * window.location here — that keeps the href identical between the static
 * prerender and hydration, so it cannot cause a hydration mismatch.
 */

export const WHATSAPP_NUMBER = '919699977699';

export function whatsappHref(message: string, pathname?: string | null): string {
  const text = pathname ? `${message} (from ${pathname})` : message;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

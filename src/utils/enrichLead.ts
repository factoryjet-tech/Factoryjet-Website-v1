/**
 * enrichLead — sends the step-2 modal details (phone, company, message) to
 * /api/notify-lead in `enrich` mode so they attach to the lead step 1 created.
 * Bounded like submitLead: 8s, then one 6s retry. Never throws.
 */

export interface EnrichInput {
  docId: string;
  enrichToken: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  source: string;
  honeypot?: string;
}

/** Server keeps 10,000 characters; send no more so the request stays small. */
export const ENRICH_MESSAGE_MAX = 10000;

async function post(payload: Record<string, unknown>, timeoutMs: number): Promise<boolean> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch('/api/notify-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export async function enrichLead(input: EnrichInput): Promise<boolean> {
  const payload = { mode: 'enrich', ...input, message: input.message.slice(0, ENRICH_MESSAGE_MAX) };
  if (await post(payload, 8000)) return true;
  return post(payload, 6000);
}

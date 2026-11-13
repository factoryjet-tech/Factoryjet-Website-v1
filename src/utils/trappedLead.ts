/**
 * keepTrappedLead — what a form does when its hidden trap field is filled.
 *
 * Until 2026-10-08 every form dropped these in the browser. Three of them showed
 * "Request sent!" first, and nothing was saved, emailed or counted. A browser
 * autofill can fill the trap for a real visitor (it was named company_website and
 * sat next to a real company field; renamed fj_hp_x on 2026-10-26 after Chrome
 * filled it for a real job applicant), so a real lead could vanish with no trace.
 *
 * Now the lead is sent like any other and the server marks it likely spam in the
 * email subject, the same way it treats a failed Turnstile check. Two things are
 * deliberately left out, because most of these are bots: no conversion is counted
 * (no form_success, no /thank-you), and the step-2 details modal does not open.
 * The form_spam_trap event is what makes trap hits countable in GA4.
 */

import { submitLead, type LeadInput } from '@/utils/submitLead';
import { pushToDataLayer } from '@/utils/gtm';

/** Returns true once the server confirms the lead was kept. Never throws. */
export async function keepTrappedLead(input: LeadInput & { honeypot: string }): Promise<boolean> {
  pushToDataLayer({ event: 'form_spam_trap', form_name: input.source });
  try {
    await submitLead(input);
    return true;
  } catch {
    return false;
  }
}

/**
 * keepVendorLead: what a form does when the visitor answers "I offer a product
 * or service" (founder decision, 13 Nov 2026). Same pattern as a trapped lead:
 * the lead is saved and emailed (the server sends it to the vendor inbox and
 * skips the CRM follow-up task), but it is not a sales lead, so no form_success,
 * no lead_converted (GA4 generate_lead and the Ads conversion), no step-2 modal
 * and no /thank-you. The form shows a short inline confirmation instead.
 * form_vendor_submit is what makes vendor submits countable in GA4.
 */
export const VENDOR_CONFIRMATION = 'Thanks, we have your details. Offers from vendors go to a separate inbox, and we reply when there is a fit.';

/** Returns true once the server confirms the lead was kept. Never throws. */
export async function keepVendorLead(input: LeadInput & { intent: 'vendor' }): Promise<boolean> {
  pushToDataLayer({ event: 'form_vendor_submit', form_name: input.source });
  try {
    await submitLead(input);
    return true;
  } catch {
    return false;
  }
}

/**
 * Cloudflare Pages Function — /api/notify-lead
 *
 * Receives a POST from ContactFormModal after successful Firestore write,
 * then sends a real-time lead notification email to bhavesh@factoryjet.com
 * via the Resend API.
 *
 * Why a Pages Function instead of a Next.js API route:
 *   The site uses `output: 'export'` in production, which compiles to pure
 *   static HTML/JS. Next.js API routes are server-side and are stripped out
 *   during static export. Cloudflare Pages Functions run as edge workers
 *   *alongside* the static site — same URL space, no new infrastructure.
 *
 * Setup (one-time):
 *   1. Create a Resend account at resend.com (free, 3k emails/mo)
 *   2. Verify factoryjet.com as a sending domain in Resend → Domains
 *   3. Create an API key in Resend → API Keys
 *   4. Add RESEND_API_KEY to Cloudflare Pages → Settings → Environment Variables
 *      (Production + Preview). Never commit it to the repo.
 *   5. Redeploy — Cloudflare picks up the new env var automatically.
 */

const NOTIFY_TO   = 'bhavesh@factoryjet.com';
const NOTIFY_FROM = 'FactoryJet Leads <leads@factoryjet.com>';

// Firestore project + public web API key. The key is the same one shipped in the
// client bundle (NEXT_PUBLIC_FIREBASE_API_KEY), so this exposes nothing new.
// Env vars override the fallbacks if ever set in Cloudflare Pages settings.
const FB_PROJECT = 'factoryjet-c5f8a';
const FB_API_KEY = 'AIzaSyC1EBwPNqicJfuygSKfpy4te8CajzSFvL4';

/**
 * Authoritative server-side lead write to Firestore via the REST API.
 * This is the reliable capture path — it does NOT depend on the browser
 * Firestore SDK, which hangs in production. PATCH to an explicit document id
 * is an upsert, so it shares the client's docId without creating duplicates.
 */
async function writeLeadToFirestore(env, lead) {
  const project = (env && env.FIREBASE_PROJECT_ID) || FB_PROJECT;
  const apiKey  = (env && (env.FIREBASE_API_KEY || env.NEXT_PUBLIC_FIREBASE_API_KEY)) || FB_API_KEY;
  const docId   = (lead.docId && String(lead.docId).replace(/[^A-Za-z0-9_-]/g, '')) ||
                  `${new Date().toISOString().replace(/[:.]/g, '-')}_lead_${crypto.randomUUID().slice(0, 6)}`; // no name: ids reach GA4 and URLs
  // Collection allow-list — never let the client write to an arbitrary path.
  const ALLOWED = ['contactus', 'contactpage', 'location_leads'];
  const collection = ALLOWED.includes(lead.collection) ? lead.collection : 'contactus';

  const url = `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/${collection}/${encodeURIComponent(docId)}?key=${apiKey}`;
  const s = (v) => ({ stringValue: v == null ? '' : String(v) });
  const body = {
    fields: {
      name:       s(lead.name),
      email:      s(lead.email),
      phone:      s(lead.phone),
      company:    s(lead.company),
      service:    s(lead.service),
      // One of five categories (see src/utils/leadService.ts); inferred from
      // the page when the form had no service picker (serviceInferred = "yes").
      serviceCategory: s(lead.serviceCategory),
      serviceInferred: s(lead.serviceInferred),
      message:    s(lead.message),
      region:     s(lead.region),
      source:     s(lead.source),
      page:       s(lead.page),
      // Where the visitor came from (see src/utils/leadAttribution.ts)
      landingPage:       s(lead.landingPage),
      referrer:          s(lead.referrer),
      utmSource:         s(lead.utmSource),
      utmMedium:         s(lead.utmMedium),
      utmCampaign:       s(lead.utmCampaign),
      clickId:           s(lead.clickId),
      gclid:             s(lead.gclid),
      aiAssistant:       s(lead.aiAssistant),
      lastTouchReferrer: s(lead.lastTouchReferrer),
      lastTouchLanding:  s(lead.lastTouchLanding),
      lastTouchCampaign: s(lead.lastTouchCampaign),
      lastTouchAt:       s(lead.lastTouchAt),
      channel:           s(channelLabel(lead)),
      turnstileToken: s(lead.turnstileToken),
      turnstileVerdict: s(lead.turnstileVerdict),
      // 'filled' when the form's hidden trap field had a value (see trapFilled).
      honeypot:   s(lead.honeypot),
      // Buyer | Vendor pitch | Likely spam | Test (see leadTypeOf).
      leadType:   s(lead.leadType),
      // Two-letter country of the visitor's network, from Cloudflare. A country
      // code only: the IP address itself is never stored.
      ipCountry:  s(lead.ipCountry),
      status:     s('new'),
      capturedBy: s('server'),
      createdAt:  { timestampValue: new Date().toISOString() },
    },
  };

  try {
    const res = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.ok) return { saved: true, docId };
    const errText = await res.text();
    console.error('Firestore REST write failed:', res.status, errText);
    return { saved: false, status: res.status };
  } catch (err) {
    console.error('Firestore REST write error:', err);
    return { saved: false, error: String(err) };
  }
}

// ERPNext base URL only. The API key and secret MUST come from Cloudflare Pages
// environment secrets (ERPNEXT_API_KEY, ERPNEXT_API_SECRET). Never hardcode
// them here: this repository is public on GitHub.
const DEFAULT_ERPNEXT_URL = 'https://erp.factoryjet.com';

// ERPNext must never hold up the visitor or the email alert. Each ERPNext request
// gets its own time limit, and the lead request only waits a short grace period
// for the CRM record (so the alert can link it) before answering the visitor and
// letting the sync finish in the background via context.waitUntil.
// 2026-09-17: the first live test took 16s because an ERPNext call stalled.
const LEAD_OWNER = 'bhavesh@factoryjet.com';
const ERP_FETCH_TIMEOUT_MS = 8000;
const ERP_EMAIL_GRACE_MS = 2500;
const ERP_HEADERS = {
  Accept: 'application/json',
  'User-Agent': 'FactoryJet-LeadSync/1.0 (+https://factoryjet.com)',
};

/** fetch() with a hard time limit. Throws an AbortError when the limit is hit. */
async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/** Short, non-sensitive description of a failed request, for logs and the health check. */
function describeFetchError(err) {
  if (err && err.name === 'AbortError') return 'timeout';
  return `network_error: ${String((err && err.message) || err).slice(0, 120)}`;
}

function erpTimeout(env) {
  const n = Number(env && env.ERPNEXT_TIMEOUT_MS);
  return Number.isFinite(n) && n > 0 ? n : ERP_FETCH_TIMEOUT_MS;
}

/**
 * Direct push to ERPNext CRM Lead via REST API, plus follow-up task assignment.
 * Ensures every incoming web lead directly registers inside ERPNext with an
 * actionable ToDo task on Bhavesh's dashboard.
 */
async function writeLeadToERPNext(env, lead) {
  const erpUrl = (env && env.ERPNEXT_URL) || DEFAULT_ERPNEXT_URL;
  const apiKey = env && env.ERPNEXT_API_KEY;
  const apiSecret = env && env.ERPNEXT_API_SECRET;

  if (!apiKey || !apiSecret) {
    console.error('ERPNext lead sync skipped: ERPNEXT_API_KEY/ERPNEXT_API_SECRET not configured');
    return { saved: false, error: 'not configured' };
  }

  const authHeader = `token ${apiKey}:${apiSecret}`;

  // 1. Deduplication check: see if a lead with this Firebase docId already exists
  let leadId = null;
  if (lead.docId) {
    try {
      const checkRes = await fetchWithTimeout(
        `${erpUrl}/api/resource/Lead?filters=${encodeURIComponent(JSON.stringify([["custom_firebase_doc_id", "=", lead.docId]]))}&fields=${encodeURIComponent(JSON.stringify(["name"]))}`,
        {
          headers: { ...ERP_HEADERS, 'Authorization': authHeader },
        },
        erpTimeout(env)
      );
      if (!checkRes.ok) console.warn('ERPNext duplicate check returned HTTP', checkRes.status);
      if (checkRes.ok) {
        const checkData = await checkRes.json();
        if (checkData.data && checkData.data.length > 0) {
          leadId = checkData.data[0].name;
          console.log(`Lead already exists in ERPNext with docId ${lead.docId}: ${leadId}`);
          return { saved: true, leadId, duplicate: true };
        }
      }
    } catch (err) {
      console.warn('ERPNext deduplication check warning:', describeFetchError(err));
    }
  }

  const category = lead.serviceCategory || 'Other';
  // Worked out once in onRequestPost; the fallback only covers a caller that
  // forgot to pass it.
  const leadType = LEAD_TYPES.includes(lead.leadType) ? lead.leadType : leadTypeOf(lead);
  // "Lead type" is the first line on purpose: the note is shared by the new-Lead
  // path and the returning-lead comment, so both open with the label.
  const noteText = `Lead type: ${leadType}\nService: ${category}${lead.serviceInferred === 'yes' ? ' (guessed from the page, the form had no service picker)' : ''}\n${lead.service ? `Service picked on form: ${serviceLabel(lead.service)}\n` : ''}Came from: ${channelLabel(lead)}\n${lead.aiAssistant ? `AI assistant: yes (${lead.aiAssistant})\n` : ''}${attributionLines(lead)}Form: ${lead.source || 'Website'}\nForm page: ${isSafeSitePath(lead.page) ? `https://factoryjet.com${lead.page}` : (lead.page || 'N/A')}\nWebsite region: ${lead.region ? String(lead.region).toUpperCase() : 'Not specified'}\nVisitor country (from network): ${lead.ipCountry || 'unknown'}\nMessage: ${lead.message || 'N/A'}\nFirebase Doc ID: ${lead.docId || 'N/A'}`;
  // The phone prefix wins because the visitor typed it. The network country is
  // the fallback for the many leads that leave no phone.
  const country = countryFromPhone(lead.phone) || countryFromNetwork(lead.ipCountry);

  // 2. Returning prospect? ERPNext rejects a second Lead with the same email while
  // CRM Settings "Allow Lead Duplication based on Emails" is off (it was off on
  // 2026-09-17), so a returning prospect's new inquiry would silently never reach
  // the CRM. Attach it to the existing Lead instead.
  let returning = false;
  if (lead.email) {
    try {
      const byEmail = await fetchWithTimeout(
        `${erpUrl}/api/resource/Lead?filters=${encodeURIComponent(JSON.stringify([["email_id", "=", String(lead.email).trim()]]))}&fields=${encodeURIComponent(JSON.stringify(["name"]))}&limit_page_length=1`,
        { headers: { ...ERP_HEADERS, 'Authorization': authHeader } },
        erpTimeout(env)
      );
      if (byEmail.ok) {
        const found = ((await byEmail.json()) || {}).data || [];
        if (found.length > 0) {
          leadId = found[0].name;
          returning = true;
        }
      } else {
        console.warn('ERPNext email lookup returned HTTP', byEmail.status);
      }
    } catch (err) {
      console.warn('ERPNext email lookup warning:', describeFetchError(err));
    }
  }

  if (returning) {
    // 3a. Add the new inquiry to the existing Lead's timeline as a comment.
    try {
      const commentRes = await fetchWithTimeout(`${erpUrl}/api/resource/Comment`, {
        method: 'POST',
        headers: {
          ...ERP_HEADERS,
          'Content-Type': 'application/json',
          'Authorization': authHeader,
        },
        body: JSON.stringify({
          comment_type: 'Comment',
          reference_doctype: 'Lead',
          reference_name: leadId,
          content: `<p><strong>New website inquiry from a returning lead</strong></p><p>${escapeHtml(noteText).replace(/\n/g, '<br>')}</p>`,
        }),
      }, erpTimeout(env));
      if (!commentRes.ok) {
        console.warn('ERPNext returning-lead comment returned HTTP', commentRes.status, (await commentRes.text()).slice(0, 300));
      }
    } catch (err) {
      console.warn('ERPNext returning-lead comment warning:', describeFetchError(err));
    }
  } else {
    // 3b. Create a new Lead. ERPNext also rejects a Lead whose email equals its
    // owner, so an internal test from the owner's own address gets no owner set.
    const payload = {
      lead_name: lead.name || 'Website Inquiry',
      email_id: lead.email || '',
      mobile_no: lead.phone || '',
      company_name: lead.company || lead.name || 'Individual',
      source: 'Website',
      status: 'Open',
      ...(String(lead.email || '').trim().toLowerCase() !== LEAD_OWNER ? { lead_owner: LEAD_OWNER } : {}),
      custom_firebase_doc_id: lead.docId || '',
      custom_sequence_status: 'Not Contacted',
      // Service category. ERPNext silently ignores this key until a Custom Field
      // named custom_service_interest exists on Lead; the note carries it either way.
      custom_service_interest: category,
      // Buyer | Vendor pitch | Likely spam | Test. A Select Custom Field on Lead
      // (custom_lead_type, created 2026-10-12) whose options are exactly these
      // four strings (LEAD_TYPES). Rename an option in ERPNext and ERPNext
      // refuses every insert that sends the old name; the retry below then saves
      // the Lead without the field. The first line of the note carries the label
      // either way. It is a label only: status and custom_sequence_status are
      // the same for every type.
      custom_lead_type: leadType,
      // From the phone prefix, else from the visitor's network (see
      // NETWORK_COUNTRIES). When neither is known ERPNext fills its system
      // default (India), which is cleared right after the insert below.
      ...(country ? { country } : {}),
      // The note and ToDo fields render as HTML in ERPNext, so the visitor's
      // text is escaped. Newlines are kept: the first line is the lead type.
      notes: [{ note: escapeHtml(noteText) }],
    };
    const postLead = (body) => fetchWithTimeout(`${erpUrl}/api/resource/Lead`, {
      method: 'POST',
      headers: {
        ...ERP_HEADERS,
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(body),
    }, erpTimeout(env));

    try {
      let res = await postLead(payload);
      let countrySent = country;
      // ERPNext refuses the whole Lead when a Link or Select value is not one it
      // holds: a country name it does not list, or a lead type missing from the
      // field's options. Both are labels, so try once more without them rather
      // than lose the Lead; the note still carries both. Only on a 4xx, where
      // ERPNext answered and saved nothing. A timeout or a 5xx may have saved the
      // Lead, and a second insert there could duplicate it.
      if (!res.ok && res.status >= 400 && res.status < 500) {
        const firstErr = (await res.text()).slice(0, 300);
        console.warn('ERPNext Lead write refused, retrying without lead type and country:', res.status, firstErr);
        const bare = { ...payload };
        delete bare.custom_lead_type;
        delete bare.country;
        res = await postLead(bare);
        countrySent = '';
      }

      if (res.ok) {
        const data = await res.json();
        leadId = data?.data?.name;
        // ERPNext applies its default country (India) to any Lead created without
        // one, which made every US/UK lead look Indian. Clear it when unknown.
        if (leadId && !countrySent && data?.data?.country) {
          try {
            const clr = await fetchWithTimeout(`${erpUrl}/api/resource/Lead/${encodeURIComponent(leadId)}`, {
              method: 'PUT',
              headers: { ...ERP_HEADERS, 'Content-Type': 'application/json', 'Authorization': authHeader },
              body: JSON.stringify({ country: '' }),
            }, erpTimeout(env));
            if (!clr.ok) console.warn('ERPNext country clear returned HTTP', clr.status);
          } catch (err) {
            console.warn('ERPNext country clear warning:', describeFetchError(err));
          }
        }
      } else {
        const errText = (await res.text()).slice(0, 500);
        console.error('ERPNext Lead write failed:', res.status, errText);
        return { saved: false, status: res.status, error: `http_${res.status}` };
      }
    } catch (err) {
      const kind = describeFetchError(err);
      console.error('ERPNext Lead write error:', kind);
      return { saved: false, error: kind };
    }
  }

  // 3. Create high-priority follow-up ToDo task assigned to bhavesh@factoryjet.com
  let todoId = null;
  if (leadId) {
    try {
      const serviceName = category;
      const todoPayload = {
        description: escapeHtml(`${returning ? 'Returning lead, new inquiry. ' : ''}Follow up with ${lead.name || 'Website Lead'} (${lead.company || 'Individual'})\nLead type: ${leadType} · Service: ${serviceName} · Page: ${lead.page || '/'}\nCame from: ${channelLabel(lead)}${lead.landingPage ? ` · Landed on: ${lead.landingPage}` : ''}\nPhone: ${lead.phone || 'N/A'} · Email: ${lead.email || 'N/A'}\nInquiry: ${lead.message || 'N/A'}`),
        status: 'Open',
        priority: 'High',
        allocated_to: LEAD_OWNER,
        assigned_by: 'Administrator',
        reference_type: 'Lead',
        reference_name: leadId,
        date: new Date().toISOString().slice(0, 10),
      };

      const todoRes = await fetchWithTimeout(`${erpUrl}/api/resource/ToDo`, {
        method: 'POST',
        headers: {
          ...ERP_HEADERS,
          'Content-Type': 'application/json',
          'Authorization': authHeader,
        },
        body: JSON.stringify(todoPayload),
      }, erpTimeout(env));

      if (todoRes.ok) {
        const todoData = await todoRes.json();
        todoId = todoData?.data?.name;
      } else {
        console.warn('ERPNext ToDo creation warning:', await todoRes.text());
      }
    } catch (todoErr) {
      console.warn('ERPNext ToDo creation exception:', describeFetchError(todoErr));
    }
  }

  return { saved: true, leadId, todoId, returning };
}


/**
 * Country from an international phone prefix, only when it is unambiguous.
 * +1 is skipped on purpose (US, Canada and the Caribbean share it), and numbers
 * without a "+" or "00" prefix return '' because the country is not known.
 */
const PHONE_COUNTRIES = [
  ['971', 'United Arab Emirates'], ['353', 'Ireland'], ['44', 'United Kingdom'],
  ['61', 'Australia'], ['64', 'New Zealand'], ['65', 'Singapore'], ['91', 'India'],
  ['49', 'Germany'], ['33', 'France'], ['31', 'Netherlands'], ['27', 'South Africa'],
];
export function countryFromPhone(phone) {
  const raw = String(phone || '').trim();
  const m = raw.match(/^(?:\+|00)\s*([\d\s().-]+)$/);
  if (!m) return '';
  const digits = m[1].replace(/\D/g, '');
  const hit = PHONE_COUNTRIES.find(([code]) => digits.startsWith(code));
  return hit ? hit[1] : '';
}

/**
 * Country of the visitor's network, as Cloudflare reports it on every request
 * (request.cf.country, an ISO two-letter code). Most leads leave no phone, so
 * without this the CRM country was blank on all 9 leads in the week of
 * 2026-10-05. It says where the request came from, which a VPN, a proxy or a
 * trip abroad can move, so the CRM note always labels it "from network" and the
 * phone prefix keeps priority.
 *
 * Returns '' when Cloudflare does not know: "XX" (unknown) and "T1" (Tor) are
 * both dropped. Only the code is kept. The IP address is never read here.
 */
export function networkCountryCode(request) {
  const code = String((request && request.cf && request.cf.country) || '').trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) && code !== 'XX' ? code : '';
}

/**
 * ISO code to the country NAME ERPNext stores. Lead.country is a Link field: a
 * name ERPNext does not hold makes the whole Lead insert fail, and its spellings
 * are not guessable ("Korea, Republic of", "Russian Federation"). Every name
 * below was read from the live Country list on erp.factoryjet.com on 2026-10-12
 * (250 records). Before adding a code, check its exact spelling there. A code
 * that is not listed leaves country blank; the note still shows the code.
 */
export const NETWORK_COUNTRIES = Object.freeze({
  US: 'United States', CA: 'Canada', GB: 'United Kingdom', IE: 'Ireland',
  AU: 'Australia', NZ: 'New Zealand', IN: 'India', AE: 'United Arab Emirates',
  SA: 'Saudi Arabia', QA: 'Qatar', KW: 'Kuwait', BH: 'Bahrain', OM: 'Oman', IL: 'Israel',
  DE: 'Germany', FR: 'France', NL: 'Netherlands', BE: 'Belgium', ES: 'Spain',
  IT: 'Italy', PT: 'Portugal', CH: 'Switzerland', AT: 'Austria', SE: 'Sweden',
  NO: 'Norway', DK: 'Denmark', FI: 'Finland', PL: 'Poland',
  SG: 'Singapore', MY: 'Malaysia', ID: 'Indonesia', PH: 'Philippines', TH: 'Thailand',
  VN: 'Vietnam', JP: 'Japan', HK: 'Hong Kong',
  PK: 'Pakistan', BD: 'Bangladesh', LK: 'Sri Lanka', NP: 'Nepal',
  ZA: 'South Africa', NG: 'Nigeria', KE: 'Kenya', EG: 'Egypt', MX: 'Mexico', BR: 'Brazil',
});
export function countryFromNetwork(code) {
  const key = String(code || '').trim().toUpperCase();
  return Object.prototype.hasOwnProperty.call(NETWORK_COUNTRIES, key) ? NETWORK_COUNTRIES[key] : '';
}

// The five service categories (mirror of src/utils/leadService.ts, which the
// browser uses; this copy is the server-side fallback for old or odd clients).
const SERVICE_CATEGORIES = ['AI Agent Development', 'E-commerce', 'SEO & AI Search', 'Website Design', 'Other'];
function categoryFromPath(path) {
  const p = String(path || '').toLowerCase().split('?')[0];
  if (!p || p === '/') return '';
  if (/(ai-seo|generative-engine|(^|[/-])geo([/-]|$)|(^|[/-])aeo([/-]|$)|ai-visibility|answer-engine|llm-seo|ai-search)/.test(p)) return 'SEO & AI Search';
  if (/(ai-agent|ai-automation|ai-receptionist|ai-chatbot|ai-consult|ai-development|ai-integration|ai-workflow|ai-voice|agentic|jetagent|jetsdr|jetdocs|(^|\/)services\/ai-|(^|\/)ai(\/|$))/.test(p)) return 'AI Agent Development';
  if (/(replatform|-to-shopify|migration)/.test(p)) return 'E-commerce';
  if (/seo/.test(p)) return 'SEO & AI Search';
  if (/(ecommerce|e-commerce|shopify|woocommerce|magento|bigcommerce|commerceflo|replatform|b2b-commerce|wholesale|marketplace|tiktok-shop|headless-commerce)/.test(p)) return 'E-commerce';
  if (/(web-design|website|web-development|webflow|wordpress|landing-page|redesign)/.test(p)) return 'Website Design';
  return '';
}
function categoryFromValue(value) {
  const v = String(value || '').trim().toLowerCase();
  if (!v || v === 'unknown') return '';
  const exact = SERVICE_CATEGORIES.find((c) => c.toLowerCase() === v);
  if (exact) return exact;
  if (/(ai-seo|ai seo|\bgeo\b|\baeo\b|ai search|seo|\bsearch\b)/.test(v)) return 'SEO & AI Search';
  if (/(ai-agents?|\bai agents?\b|\bagents?\b|\bagentic\b|automation|chatbot|receptionist)/.test(v)) return 'AI Agent Development';
  if (/(e-?commerce|shopify|woocommerce|magento|bigcommerce|replatform|marketplace|wholesale|store)/.test(v)) return 'E-commerce';
  if (/(website|web design|web|maintenance|amc|landing|brand)/.test(v)) return 'Website Design';
  if (/^other/.test(v)) return 'Other';
  return '';
}
/** Trust the browser's category only if it is one of the five; else work it out here. */
export function resolveCategory({ serviceCategory, service, page, landingPage }) {
  if (SERVICE_CATEGORIES.includes(serviceCategory)) return serviceCategory;
  return categoryFromValue(service) || categoryFromPath(page) || categoryFromPath(landingPage) || 'Other';
}

/** Pretty-print the service slug into a human label */
function serviceLabel(id) {
  const map = {
    'ai-agents': 'AI Agent Development',
    website:     'Website Design',
    ecommerce:   'E-Commerce / Shopify',
    seo:         'SEO / Local SEO',
    'ai-seo':    'AI SEO / GEO',
    maintenance: 'AMC / Maintenance',
    other:       'Other / Custom',
  };
  return map[id] || id || 'Not specified';
}

/** Trim an untrusted string from the request body to a safe length. */
function clipText(value, max) {
  return value == null ? '' : String(value).trim().slice(0, max);
}

/** Escape text for the HTML email. */
function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Strict on purpose: an address that fails it is shown as plain text, never as a
// mailto link or a reply_to. No "?", "&", "%" or "#", so it cannot smuggle mailto
// headers (cc=, body=) into the link.
const STRICT_EMAIL = /^[A-Za-z0-9._+'-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
export function isStrictEmail(value) {
  return typeof value === 'string' && value.length <= 254 && STRICT_EMAIL.test(value);
}

/**
 * True when the value is a path on factoryjet.com: one leading "/", and no "//",
 * "@", backslash or whitespace. "https://factoryjet.com" + "@evil.tld/login" is a
 * link to evil.tld, so anything else is shown as plain text.
 */
export function isSafeSitePath(value) {
  return typeof value === 'string' && /^\/(?!\/)/.test(value) && !/[@\\\s]/.test(value);
}

// Length caps for the lead form, applied after trimming and before anything is
// stored or emailed. Over-long values are cut, never rejected: a lead is never lost.
export const LEAD_FIELD_CAPS = {
  name: 120, email: 254, phone: 40, company: 160, service: 80, message: 5000, page: 300,
};
const OTHER_FIELD_CAP = 500;

/** The lead form's own fields, trimmed and capped (see LEAD_FIELD_CAPS). */
export function clipLeadFields(body) {
  const b = body || {};
  const out = {};
  for (const key of ['docId', 'collection', 'name', 'email', 'phone', 'company', 'service', 'message', 'region', 'source', 'page']) {
    out[key] = clipText(b[key], LEAD_FIELD_CAPS[key] || OTHER_FIELD_CAP);
  }
  return out;
}

/**
 * The CRM health check is open only to a caller holding HEALTH_CHECK_KEY, sent
 * as the X-Health-Key header or ?key=. Both sides are hashed first so the
 * comparison takes the same time whatever the input. No key set means closed.
 */
export async function healthKeyMatches(env, request) {
  const expected = env && env.HEALTH_CHECK_KEY;
  if (!expected) return false;
  const given = request.headers.get('X-Health-Key') || new URL(request.url).searchParams.get('key') || '';
  if (!given) return false;
  const digest = async (s) => new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(s))));
  const [a, b] = await Promise.all([digest(expected), digest(given)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

// Referring hosts we know, mapped to a plain channel name for the lead record.
const KNOWN_REFERRERS = [
  [/(^|\.)chatgpt\.com$|(^|\.)chat\.openai\.com$/, 'ChatGPT'],
  [/(^|\.)perplexity\.ai$/, 'Perplexity'],
  [/(^|\.)claude\.ai$/, 'Claude'],
  [/(^|\.)gemini\.google\.com$/, 'Gemini'],
  [/(^|\.)copilot\.microsoft\.com$|(^|\.)copilot\.com$/, 'Microsoft Copilot'],
  [/(^|\.)bing\.com$/, 'Bing'],
  [/(^|\.)google\.[a-z.]+$/, 'Google'],
  [/(^|\.)duckduckgo\.com$/, 'DuckDuckGo'],
  [/(^|\.)linkedin\.com$|(^|\.)lnkd\.in$/, 'LinkedIn'],
  [/(^|\.)clutch\.co$/, 'Clutch'],
  [/(^|\.)designrush\.com$/, 'DesignRush'],
  [/(^|\.)goodfirms\.co$/, 'GoodFirms'],
];

/**
 * One plain-language answer to "where did this lead come from?".
 * Order: ad click, UTM campaign, known referrer, other referrer, then an earlier
 * external visit, else direct or unknown.
 */
function channelLabel(lead) {
  const click = { 'google-ads': 'Google Ads', 'microsoft-ads': 'Microsoft Ads', meta: 'Meta ads', linkedin: 'LinkedIn ads' };
  if (lead.clickId && click[lead.clickId]) return click[lead.clickId];
  const knownName = (host) => {
    const hit = host && KNOWN_REFERRERS.find(([re]) => re.test(String(host).toLowerCase()));
    return hit ? hit[1] : '';
  };
  // ChatGPT and others tag outbound links with utm_source=<their domain>, so a
  // known source name wins over the generic "Campaign" label.
  const fromReferrer = knownName(lead.referrer);
  if (fromReferrer) return `${fromReferrer} (${lead.referrer})`;
  const fromUtm = knownName(lead.utmSource);
  if (fromUtm) return `${fromUtm} (utm_source=${lead.utmSource})`;
  if (lead.utmSource) return `Campaign: ${lead.utmSource}${lead.utmMedium ? ` / ${lead.utmMedium}` : ''}`;
  if (lead.referrer) return `Referral from ${lead.referrer}`;
  if (lead.lastTouchReferrer) return `Direct visit, first came via ${lead.lastTouchReferrer}`;
  if (lead.landingPage) return 'Direct or unknown (no referring site)';
  return 'Unknown (no visit data captured)';
}

/** Extra attribution lines for the CRM note. Empty string when nothing was captured. */
function attributionLines(lead) {
  let out = '';
  if (lead.landingPage) out += `Landing page: https://factoryjet.com${lead.landingPage}\n`;
  if (lead.utmSource) out += `UTM: source=${lead.utmSource}${lead.utmMedium ? ` medium=${lead.utmMedium}` : ''}${lead.utmCampaign ? ` campaign=${lead.utmCampaign}` : ''}\n`;
  else if (lead.utmCampaign) out += `Campaign name: ${lead.utmCampaign}\n`;
  if (lead.referrer) out += `Referrer: ${lead.referrer}\n`;
  if (lead.gclid) out += `gclid: ${lead.gclid}\n`;
  if (lead.lastTouchReferrer && lead.lastTouchReferrer !== lead.referrer) {
    out += `Earlier visit: via ${lead.lastTouchReferrer}${lead.lastTouchLanding ? ` to ${lead.lastTouchLanding}` : ''}${lead.lastTouchAt ? ` on ${lead.lastTouchAt.slice(0, 10)}` : ''}\n`;
  }
  return out;
}

/**
 * Build a clean HTML email body. Every visitor-supplied value is escaped, and a
 * value only becomes a link when it passes isStrictEmail or isSafeSitePath, so a
 * lead cannot plant its own buttons or links in the alert.
 */
export function buildHtml({ name, email, phone, company, service, serviceCategory, serviceInferred, message, region, page, turnstileVerdict, trapFilled, erpLeadId, erpReturning, attribution }) {
  const a = attribution || {};
  const mailOk = isStrictEmail(email);
  const firstName = name ? String(name).trim().split(/\s+/)[0] : '';
  const sitePath = (p, style) => (isSafeSitePath(p)
    ? `<a href="https://factoryjet.com${escapeHtml(p)}" style="${style}">factoryjet.com${escapeHtml(p)}</a>`
    : `<span style="${style}">${escapeHtml(p)}</span>`);
  const now = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Lead — FactoryJet</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#F05A28,#d44d1f);padding:28px 32px;">
              <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.7);text-transform:uppercase;">FactoryJet</p>
              <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;">🔥 New Lead</h1>
              <p style="margin:4px 0 0;font-size:13px;color:rgba(255,255,255,0.8);">${now} IST</p>
            </td>
          </tr>

          <!-- Lead Details -->
          <tr>
            <td style="padding:28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row('Name',    escapeHtml(name    || '—'))}
                ${row('Email',   !email ? '—' : mailOk ? `<a href="mailto:${escapeHtml(email)}" style="color:#F05A28;text-decoration:none;">${escapeHtml(email)}</a>` : escapeHtml(email))}
                ${row('Phone',   escapeHtml(phone   || '—'))}
                ${row('Company', escapeHtml(company || '—'))}
                ${row('Service', `<span style="display:inline-block;background:#FFF1EB;color:#B23E13;padding:3px 10px;border-radius:20px;font-weight:600;font-size:13px;">${escapeHtml(serviceCategory || serviceLabel(service))}</span>${serviceInferred === 'yes' ? ' <span style="color:#6B7280;font-size:12px;">(guessed from the page)</span>' : (service ? ` <span style="color:#6B7280;font-size:12px;">${escapeHtml(serviceLabel(service))}</span>` : '')}`)}
                ${row('Region',  escapeHtml(String(region || '').toUpperCase() || '—'))}
                ${message ? row('Message', `<span style="color:#374151;">${escapeHtml(message).replace(/\r?\n/g, '<br>')}</span>`) : ''}
                ${erpLeadId ? row('CRM Lead', `<a href="https://erp.factoryjet.com/app/lead/${encodeURIComponent(erpLeadId)}" style="color:#F05A28;font-weight:600;text-decoration:none;">${escapeHtml(erpLeadId)} ${erpReturning ? '(returning lead, new inquiry added)' : '(Assigned to Bhavesh)'}</a>`) : ''}
                ${row('Came from', `<strong>${escapeHtml(channelLabel(a))}</strong>${a.aiAssistant ? ' <span style="color:#B23E13;font-size:12px;font-weight:600;">AI assistant</span>' : ''}`)}
                ${a.landingPage ? row('Landing page', sitePath(a.landingPage, 'color:#6B7280;font-size:12px;')) : ''}
                ${a.utmCampaign ? row('Campaign', escapeHtml(a.utmCampaign)) : ''}
                ${page ? row('Form page', sitePath(page, 'color:#6B7280;font-size:12px;')) : ''}
                ${turnstileVerdict === 'failed'
                  ? row('Spam check', '<span style="color:#B23E13;font-weight:600;">Failed bot check — treat with suspicion</span>')
                  : ''}
                ${trapFilled
                  ? row('Spam trap', '<span style="color:#B23E13;font-weight:600;">Hidden trap field was filled. Usually a bot, sometimes a real visitor whose browser autofilled it. Read before deleting.</span>')
                  : ''}
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 28px;">
              ${mailOk ? `<a href="mailto:${escapeHtml(email)}" style="display:inline-block;background:#F05A28;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;">Reply to ${escapeHtml(firstName || 'Lead')}</a>` : ''}
              ${erpLeadId ? `<a href="https://erp.factoryjet.com/app/lead/${encodeURIComponent(erpLeadId)}" style="display:inline-block;margin-left:12px;background:#111827;color:#ffffff;padding:12px 20px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;">Open in CRM →</a>` : ''}
              <a href="https://console.firebase.google.com/project/factoryjet-c5f8a/firestore/data/contactus" style="display:inline-block;margin-left:12px;color:#6B7280;font-size:13px;text-decoration:none;">View in Firestore →</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
              <p style="margin:0;font-size:11px;color:#9ca3af;">Sent by FactoryJet lead notification system · <a href="https://factoryjet.com" style="color:#9ca3af;">factoryjet.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function row(label, value) {
  return `
    <tr>
      <td style="padding:8px 0;vertical-align:top;width:110px;">
        <span style="font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;">${label}</span>
      </td>
      <td style="padding:8px 0;vertical-align:top;">
        <span style="font-size:14px;color:#111827;">${value}</span>
      </td>
    </tr>`;
}

/**
 * Label (never block) inbound sales pitches. Of 23 live form leads between
 * 2026-09-17 and 2026-09-29, the largest single group was link builders and SEO
 * freelancers pitching FactoryJet (e.g. "Quality Link-builders", "Linked Builder
 * Team", *seoconsultant@gmail.com). Turnstile cannot catch them because they are
 * real people. The tag feeds leadTypeOf, so it reaches the email subject, the
 * Firestore doc and the CRM. A buyer wrongly tagged is the expensive mistake, so
 * every pattern here is one a buyer would not write. When in doubt it is left out
 * and the lead stays "Buyer".
 *
 * Checked on 2026-10-12 against all 61 leads saved since 2026-09-01: it fires on
 * 9, all sellers, and on no buyer. Left out on purpose because a buyer could
 * write the same words: "design partner", "partner with us", "we are building",
 * bare "email list" or "contact list", "sponsorship packages" with no "your
 * company" beside it. Still a risk: an SEO buyer who types "backlinks", "link
 * building", "guest post" or "domain authority" is tagged, because link sellers
 * (the largest group) use the same words.
 */
// Fires on the email alone, and hero forms carry no message, so only role words.
// Not a bare "seo" or "outreach": joseortiz@, jiwoo.seo@ and outreach@<charity>
// are real people.
const PITCH_EMAIL = /seo[._-]?(expert|specialist|consultant|executive|services?|agency|company|team|guru|freelancer|outreach)|(expert|specialist|consultant|executive|freelancer?|outreach)[._-]?seo|linkbuild|backlink|guest[._-]?post|(blogger|link)[._-]?outreach/;
const PITCH_COMPANY = /link.?build|backlink|guest.?post|seo (expert|specialist|consultant|executive)/;
const PITCH_MESSAGE = [
  // Paid links and guest posts.
  /backlink|link.?building|link insertion|link placements?|\bpaid links\b|\bdo-?follow\b|niche edits?|guest.?post|sponsored (post|article)|domain authority|\bda ?\d{2}\b|\bdr ?\d{2}\b|write for (you|us)|rank(ing)? your (website|site)|partnership opportunit/,
  // SEO sold in the second person. A buyer writes "get US on the first page".
  /(get|put|rank|bring|place|push|take) (you|your (website|site|business|store|brand|company))( \w+){0,3} (on|to|onto) (the )?(first page|page one|page 1|top) of google/,
  // Agencies selling their own services to us. Narrow nouns: "we offer design and
  // installation" and "we provide development finance" are buyers.
  /\bwe (offer|provide) (seo|link|(web|website)( (and|&) \w+)? (design|development)|design (and|&) development|development (and|&) design|content (writing|marketing)|lead generation)/,
  // "White label" and "outsource" are buyer words too (an agency that wants us
  // as its white-label team; "do you outsource?"), so only the selling forms.
  /white.?label( \w+){0,2} (for|to) your\b|\b(we|i) (offer|provide)( \w+){0,4} white.?label/,
  /\boutsource (your|any|all|some|overflow|extra)( \w+){0,3} (to|with) us\b|\byou (can|could|may|might) outsource( \w+){0,3} (to|with) us\b|\byour outsourcing partner/,
  // Events selling a stand or a sponsor slot, always aimed at "your company".
  /(sponsorship|exhibition|exhibitor)s? (participation|opportunit(y|ies)|packages?|options?|slots?) (for|to) your (company|organi[sz]ation|business|brand|team|firm)/,
  /invit\w* (you|your (company|organi[sz]ation|team|brand|firm)) to (sponsor|exhibit|participate as an? (sponsor|exhibitor))/,
  /(connect|introduce|direct|point|refer)\w* (me|us) (to|with) (the |a |an )?((right|appropriate|relevant|concerned|best) )?(person|team|contact|someone|department)( or (person|team|department))? (responsible for|in charge of|who handles|that handles|handling) (the |your )?(exhibitions?|sponsorships?|trade shows?)/,
  // Contact-list sellers. They ask about OUR targets; a buyer talks about theirs.
  /are you (looking|planning|trying|hoping) to (connect with|reach( out to)?|target|market to)\b/,
  /(share|send|tell|let) (me |us )?(know )?your target (countr(y|ies)|geograph(y|ies)|job titles|criteria)/,
  /would you be interested in (acquiring|purchasing|buying)( \S+){0,6} (lists?|database|contacts)\b/,
];
export function isVendorPitch({ email, company, message }) {
  const local = String(email || '').toLowerCase().split('@')[0];
  const org = String(company || '').toLowerCase();
  // One line, plain hyphens, so a line break or a typographic hyphen inside a
  // phrase cannot hide it.
  const msg = String(message || '').toLowerCase().replace(/[\u2010-\u2015]/g, '-').replace(/\s+/g, ' ');
  if (PITCH_EMAIL.test(local)) return true;
  if (PITCH_COMPANY.test(org)) return true;
  return PITCH_MESSAGE.some((re) => re.test(msg));
}

/**
 * One label per lead, worked out once per request and used everywhere (the
 * Firestore doc, the CRM note and field, the email subject) so they cannot
 * disagree. First match wins:
 *   Test          name starts with "FactoryJet Test Lead" (our own checks)
 *   Likely spam   hidden trap field filled, or Turnstile verification failed
 *   Vendor pitch  reads like someone selling to us (isVendorPitch)
 *   Buyer         everything else
 * It labels and never blocks: every type is saved, emailed and sent to the CRM
 * the same way. "Buyer" means nothing says otherwise. It does not mean qualified.
 */
export const LEAD_TYPES = ['Buyer', 'Vendor pitch', 'Likely spam', 'Test'];
export function leadTypeOf({ name, email, company, message, trapFilled, turnstileVerdict }) {
  if (/^\s*factoryjet test lead/i.test(String(name || ''))) return 'Test';
  if (trapFilled || turnstileVerdict === 'failed') return 'Likely spam';
  if (isVendorPitch({ email, company, message })) return 'Vendor pitch';
  return 'Buyer';
}
// The three existing prefixes are unchanged: inbox searches match on them.
const SUBJECT_PREFIX = {
  'Likely spam': '⚠️ LIKELY SPAM — ',
  'Vendor pitch': '🧾 Vendor pitch — ',
  Test: '🧪 TEST · ',
  Buyer: '🔥 ',
};

/**
 * Verify the Turnstile token with Cloudflare.
 *
 * Until now the token was stored and never checked, which made the widget purely
 * decorative — link-building outreach walked straight through it.
 *
 * This FLAGS, it never blocks. That is deliberate:
 *   - the widget is interaction-only, so a real visitor can legitimately submit
 *     with no token at all if it has not finished rendering;
 *   - Turnstile tokens expire (~5 min), so someone who opens the form, gets
 *     distracted and submits later fails verification while being entirely real;
 *   - losing one real lead costs far more than receiving ten spam ones, and this
 *     file exists because a 2026-06-22 regression silently lost ~100% of leads.
 *
 * Returns: 'verified' | 'failed' | 'absent' | 'unchecked'
 */
async function verifyTurnstile(env, token, ip) {
  const secret = env && env.TURNSTILE_SECRET_KEY;
  if (!secret) return 'unchecked';        // not configured — degrade quietly
  if (!token) return 'absent';            // legit users can land here; not spam
  try {
    const form = new FormData();
    form.append('secret', secret);
    form.append('response', token);
    if (ip) form.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', body: form,
    });
    const out = await res.json();
    return out.success ? 'verified' : 'failed';
  } catch (err) {
    console.error('Turnstile verify error:', err);
    return 'unchecked';                   // never let our own outage look like spam
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Lead enrichment (step 2). After the inline name+email form saves a lead, a
// modal asks for phone, company and a free-text brief. Those details are
// attached to the SAME lead here. Spec:
// docs/superpowers/specs/2026-09-23-lead-enrichment-modal-design.md
//
// The create response carries an enrichToken, "<issuedAtMs>.<hmac>", which the
// modal sends back. The HMAC key is LEAD_ENRICH_SECRET, else ERPNEXT_API_SECRET
// (already configured; used only as key material, never exposed).
// ─────────────────────────────────────────────────────────────────────────────
const ENRICH_MAX_AGE_MS = 2 * 60 * 60 * 1000;
const ENRICH_CLOCK_SKEW_MS = 60 * 1000;
// The create's ERPNext work runs in waitUntil and has taken 16s live, so keep
// looking for ~14s before falling back to the email match.
const ENRICH_LOOKUP_DELAYS_MS = [0, 2000, 4000, 8000];

function enrichKey(env) {
  return (env && (env.LEAD_ENRICH_SECRET || env.ERPNEXT_API_SECRET)) || '';
}

async function hmacHex(key, text) {
  const enc = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(text));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Same sanitizing writeLeadToFirestore applies, so client and server ids agree. */
export function sanitizeDocId(docId) {
  return docId == null ? '' : String(docId).replace(/[^A-Za-z0-9_-]/g, '');
}

export async function signEnrichToken(key, docId, issuedAt = Date.now()) {
  if (!key || !docId) return null;
  return `${issuedAt}.${await hmacHex(key, `${docId}.${issuedAt}`)}`;
}

export async function verifyEnrichToken(key, docId, token, now = Date.now()) {
  if (!key || !docId || typeof token !== 'string') return false;
  const dot = token.indexOf('.');
  if (dot < 1) return false;
  const issuedAt = Number(token.slice(0, dot));
  if (!Number.isFinite(issuedAt)) return false;
  if (issuedAt > now + ENRICH_CLOCK_SKEW_MS || now - issuedAt > ENRICH_MAX_AGE_MS) return false;
  const expected = await hmacHex(key, `${docId}.${issuedAt}`);
  const given = token.slice(dot + 1);
  if (given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ given.charCodeAt(i);
  return diff === 0;
}

// Step-2 choices. The modal (src/components/lead/LeadEnrichModal.tsx) offers the
// same strings; anything else is dropped, so the CRM and the inbox only ever see
// these values. tests/notify-lead-enrich.test.mjs checks the two lists match.
export const ENRICH_PROJECT_TYPES = ['New online store', 'Store rebuild or migration', 'B2B or wholesale portal', 'ERP or inventory integration', 'AI agent', 'Other'];
export const ENRICH_SYSTEMS = ['Shopify', 'WooCommerce', 'BigCommerce', 'Magento', 'QuickBooks', 'NetSuite', 'Odoo', 'Salesforce', 'Faire', 'Amazon', 'Other'];
export const ENRICH_TIMELINES = ['As soon as possible', 'Within 3 months', '3 to 6 months', 'Just researching'];
export const MAX_BRIEF_BYTES = 5 * 1024 * 1024;

export function cleanEnrichInput(body) {
  const b = body || {};
  const pick = (v, list) => (list.includes(v) ? v : '');
  const systems = Array.isArray(b.systems) ? b.systems.filter((x) => ENRICH_SYSTEMS.includes(x)) : [];
  return {
    phone: clipText(b.phone, 100),
    company: clipText(b.company, 100),
    message: clipText(b.message, 10000),
    projectType: pick(b.projectType, ENRICH_PROJECT_TYPES),
    systems: [...new Set(systems)].join(', '),
    timeline: pick(b.timeline, ENRICH_TIMELINES),
  };
}

function base64ToBytes(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/**
 * The uploaded brief, checked by its first bytes (PDF, or a zip named .docx),
 * not by the name or MIME type the browser sent. Returns { bytes, name, ext },
 * { error } when a file was sent but is not acceptable, or null when none was.
 */
export function cleanBrief(brief) {
  if (!brief || typeof brief !== 'object' || typeof brief.data !== 'string' || !brief.data) return null;
  if (brief.data.length > Math.ceil(MAX_BRIEF_BYTES / 3) * 4 + 8) return { error: 'too_large' };
  let bytes;
  try { bytes = base64ToBytes(brief.data); } catch { return { error: 'bad_encoding' }; }
  if (!bytes.length) return null;
  if (bytes.length > MAX_BRIEF_BYTES) return { error: 'too_large' };
  const name = String(brief.name || '').toLowerCase();
  let ext = null;
  if (bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) ext = 'pdf';
  else if (bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x03 && bytes[3] === 0x04 && name.endsWith('.docx')) ext = 'docx';
  if (!ext) return { error: 'bad_type' };
  const base = String(brief.name || 'brief').replace(/\.[^.]*$/, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'brief';
  return { bytes, name: `${base}.${ext}`, ext };
}

function bytesToBase64(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

const BRIEF_MIME = { pdf: 'application/pdf', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' };

/**
 * Create-only write of the step-2 details to contactus/<docId>_details.
 * The live Firestore rules allow create but deny update on contactus (verified
 * 2026-09-23), so the lead doc itself cannot be patched. exists=false also makes
 * a retried or replayed request fail instead of saving the details twice.
 */
export function buildEnrichFirestoreRequest(env, docId, fields, source, nowIso = new Date().toISOString(), leadType = '') {
  const project = (env && env.FIREBASE_PROJECT_ID) || FB_PROJECT;
  const apiKey  = (env && (env.FIREBASE_API_KEY || env.NEXT_PUBLIC_FIREBASE_API_KEY)) || FB_API_KEY;
  const s = (v) => ({ stringValue: v == null ? '' : String(v) });
  const out = { leadDocId: s(docId) };
  for (const k of ['phone', 'company', 'message', 'projectType', 'systems', 'timeline', 'briefName']) if (fields[k]) out[k] = s(fields[k]);
  // Present only when these details raise a flag (see handleEnrich). The lead doc
  // keeps the label it got at step 1 and cannot be updated.
  if (leadType && leadType !== 'Buyer') out.leadType = s(leadType);
  out.enrichedAt = { timestampValue: nowIso };
  out.enrichSource = s(source);
  const url = `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/contactus/${encodeURIComponent(`${docId}_details`)}?currentDocument.exists=false&key=${apiKey}`;
  return { url, body: { fields: out } };
}

const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function erpFindLead(env, erpUrl, authHeader, field, value, fields = ['name']) {
  const res = await fetchWithTimeout(
    `${erpUrl}/api/resource/Lead?filters=${encodeURIComponent(JSON.stringify([[field, '=', value]]))}&fields=${encodeURIComponent(JSON.stringify(fields))}&limit_page_length=1`,
    { headers: { ...ERP_HEADERS, Authorization: authHeader } },
    erpTimeout(env),
  );
  if (!res.ok) { console.warn('ERPNext enrich lookup returned HTTP', res.status); return null; }
  const rows = ((await res.json()) || {}).data || [];
  return rows.length ? rows[0] : null;
}

/**
 * Attach step-2 details to the Lead created from this docId. The create call may
 * still be running (it finishes in waitUntil), so look up a few times. A visitor
 * whose email already existed had their inquiry attached to the older Lead as a
 * comment at step 1; their details go there too, without overwriting its fields.
 * The comment is written BEFORE the field update: ERPNext rejects phone text it
 * cannot parse, and the comment must survive that.
 */
export async function enrichLeadInERPNext(env, lead, sleep = (ms) => new Promise((r) => setTimeout(r, ms))) {
  const erpUrl = (env && env.ERPNEXT_URL) || DEFAULT_ERPNEXT_URL;
  if (!env || !env.ERPNEXT_API_KEY || !env.ERPNEXT_API_SECRET) return { saved: false, error: 'not configured' };
  const authHeader = `token ${env.ERPNEXT_API_KEY}:${env.ERPNEXT_API_SECRET}`;

  let leadId = null;
  for (const delay of ENRICH_LOOKUP_DELAYS_MS) {
    if (delay) await sleep(delay);
    try { leadId = ((await erpFindLead(env, erpUrl, authHeader, 'custom_firebase_doc_id', lead.docId)) || {}).name || null; }
    catch (err) { console.warn('ERPNext enrich lookup warning:', describeFetchError(err)); }
    if (leadId) break;
  }
  let returning = false;
  if (!leadId && lead.email) {
    try {
      const row = await erpFindLead(env, erpUrl, authHeader, 'email_id', String(lead.email).trim(), ['name', 'custom_firebase_doc_id']);
      if (row) {
        leadId = row.name;
        // A create that finished after the docId retries is this visitor's new
        // Lead, not an older one: treat it as new so its fields get updated.
        returning = row.custom_firebase_doc_id !== lead.docId;
      }
    } catch (err) { console.warn('ERPNext enrich email lookup warning:', describeFetchError(err)); }
  }
  if (!leadId) {
    console.error('ERPNext enrich: no Lead found for docId', lead.docId);
    return { saved: false, error: 'lead_not_found' };
  }

  const send = (path, method, payload) => fetchWithTimeout(`${erpUrl}${path}`, {
    method,
    headers: { ...ERP_HEADERS, 'Content-Type': 'application/json', Authorization: authHeader },
    body: JSON.stringify(payload),
  }, erpTimeout(env));

  // Set by handleEnrich only when these details read like a pitch (or a test).
  const flagged = LEAD_TYPES.includes(lead.leadType) && lead.leadType !== 'Buyer';
  const text = [
    returning ? 'Details added on the website (returning lead)' : 'Details added on the website',
    flagged && `Lead type: ${lead.leadType}`,
    lead.projectType && `Project type: ${lead.projectType}`,
    lead.systems && `Systems: ${lead.systems}`,
    lead.timeline && `Timeline: ${lead.timeline}`,
    lead.brief && `Brief attached: ${lead.brief.name}`,
    lead.phone && `Phone: ${lead.phone}`,
    lead.company && `Company: ${lead.company}`,
    lead.message && `Message:\n${lead.message}`,
  ].filter(Boolean).join('\n');
  let commented = false;
  try {
    const res = await send('/api/resource/Comment', 'POST', {
      comment_type: 'Comment',
      reference_doctype: 'Lead',
      reference_name: leadId,
      content: `<p>${escapeHtml(text).replace(/\n/g, '<br>')}</p>`,
    });
    commented = res.ok;
    if (!res.ok) console.warn('ERPNext enrich comment returned HTTP', res.status);
  } catch (err) {
    console.warn('ERPNext enrich comment warning:', describeFetchError(err));
  }

  // The uploaded brief, as a PRIVATE file on the Lead. Separate from the comment so
  // a refused upload (ERPNext rejects files it cannot parse) costs nothing else.
  if (lead.brief) {
    try {
      const form = new FormData();
      form.append('file', new Blob([lead.brief.bytes], { type: BRIEF_MIME[lead.brief.ext] }), lead.brief.name);
      form.append('is_private', '1');
      form.append('doctype', 'Lead');
      form.append('docname', leadId);
      const res = await fetchWithTimeout(`${erpUrl}/api/method/upload_file`, {
        method: 'POST',
        headers: { ...ERP_HEADERS, Authorization: authHeader },
        body: form,
      }, erpTimeout(env));
      if (!res.ok) console.warn('ERPNext enrich brief upload returned HTTP', res.status);
    } catch (err) {
      console.warn('ERPNext enrich brief upload warning:', describeFetchError(err));
    }
  }

  if (!returning) {
    const update = {};
    if (lead.phone) update.mobile_no = lead.phone;
    if (lead.company) update.company_name = lead.company;
    if (Object.keys(update).length) {
      try {
        const res = await send(`/api/resource/Lead/${encodeURIComponent(leadId)}`, 'PUT', update);
        if (!res.ok) console.warn('ERPNext enrich field update returned HTTP', res.status, 'fields', Object.keys(update).join(','));
      } catch (err) {
        console.warn('ERPNext enrich field update warning:', describeFetchError(err));
      }
    }
    // A pitch typed into the details box: move the Lead's own label from Buyer to
    // Vendor pitch. Its own request, after the comment and the phone/company
    // update, so a refused value costs nothing. Read first: a Likely spam or Test
    // label set at step 1 outranks Vendor pitch and is left alone.
    if (lead.leadType === 'Vendor pitch') {
      try {
        const path = `/api/resource/Lead/${encodeURIComponent(leadId)}`;
        const cur = await fetchWithTimeout(`${erpUrl}${path}`, { headers: { ...ERP_HEADERS, Authorization: authHeader } }, erpTimeout(env));
        const current = cur.ok ? ((((await cur.json()) || {}).data || {}).custom_lead_type || '') : null;
        if (current === '' || current === 'Buyer') {
          const res = await send(path, 'PUT', { custom_lead_type: 'Vendor pitch' });
          if (!res.ok) console.warn('ERPNext enrich lead type update returned HTTP', res.status);
        }
      } catch (err) {
        console.warn('ERPNext enrich lead type update warning:', describeFetchError(err));
      }
    }
  }
  return { saved: commented, leadId, returning };
}

function buildEnrichHtml({ name, email, phone, company, message, projectType, systems, timeline, briefName, erpLeadId, returning }) {
  const erpLink = erpLeadId
    ? `<a href="${DEFAULT_ERPNEXT_URL}/app/lead/${encodeURIComponent(erpLeadId)}">${escapeHtml(erpLeadId)}</a>${returning ? ' (returning lead)' : ''}`
    : 'Updating in the background';
  return `<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#f6f5f3;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e7ded6;border-radius:10px;">
    <tr><td style="padding:22px 26px 6px;">
      <div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#B23E13;font-weight:700;">Details added</div>
      <div style="font-size:20px;font-weight:700;color:#14110F;margin-top:6px;">${escapeHtml(name || email)} added project details</div>
    </td></tr>
    <tr><td style="padding:8px 26px 22px;"><table width="100%" cellpadding="0" cellspacing="0">
      ${row('Name', escapeHtml(name || 'N/A'))}
      ${row('Email', escapeHtml(email || 'N/A'))}
      ${row('Project type', escapeHtml(projectType || 'Not given'))}
      ${row('Systems', escapeHtml(systems || 'Not given'))}
      ${row('Timeline', escapeHtml(timeline || 'Not given'))}
      ${row('Brief', briefName ? `${escapeHtml(briefName)} (attached)` : 'None')}
      ${row('Phone', escapeHtml(phone || 'Not given'))}
      ${row('Company', escapeHtml(company || 'Not given'))}
      ${row('Message', message ? escapeHtml(message).replace(/\n/g, '<br>') : 'Not given')}
      ${row('CRM lead', erpLink)}
    </table></td></tr>
  </table></body></html>`;
}

async function sendEnrichEmail(env, data) {
  if (!env || !env.RESEND_API_KEY) { console.error('RESEND_API_KEY not set, enrich email skipped'); return false; }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: [NOTIFY_TO],
        subject: `📝 Details added: ${(data.name || data.email || 'website lead').replace(/[\r\n]+/g, ' ')}`,
        html: buildEnrichHtml({ ...data, briefName: data.brief ? data.brief.name : '' }),
        ...(EMAIL_SHAPE.test(data.email || '') ? { reply_to: data.email } : {}),
        ...(data.brief ? { attachments: [{ filename: data.brief.name, content: bytesToBase64(data.brief.bytes) }] } : {}),
      }),
    });
    if (!res.ok) console.error('Resend enrich error:', res.status);
    return res.ok;
  } catch (err) {
    console.error('Resend enrich fetch error:', err);
    return false;
  }
}

async function handleEnrich(context, body, corsHeaders) {
  const { env } = context;
  const reply = (obj, status = 200) => new Response(JSON.stringify(obj), {
    status, headers: { 'Content-Type': 'application/json', ...corsHeaders },
  });

  if (body.honeypot && String(body.honeypot).trim()) return reply({ ok: true, enriched: false });
  const docId = sanitizeDocId(body.docId);
  if (!(await verifyEnrichToken(enrichKey(env), docId, body.enrichToken))) {
    return reply({ ok: false, error: 'invalid token' }, 403);
  }
  const fields = cleanEnrichInput(body);
  const brief = cleanBrief(body.brief);
  if (brief && brief.error) return reply({ ok: false, error: `brief_${brief.error}` }, 400);
  const filled = Object.values(fields).some(Boolean) || Boolean(brief);
  if (!filled) return reply({ ok: true, enriched: false });
  if (brief) fields.briefName = brief.name;

  const name = clipText(body.name, 120);
  const email = clipText(body.email, 200);
  const source = clipText(body.source, 80).replace(/[<>"'`]/g, '');
  // What these details say on their own. Name-and-email forms have no message at
  // step 1, so this is the first place a pitch from one of them can show. Step 2
  // can raise the flag; it never clears a label set at step 1 ("Buyer" here
  // writes nothing).
  const detailsType = leadTypeOf({ name, email, company: fields.company, message: fields.message });

  // (1) AUTHORITATIVE: create contactus/<docId>_details (create-only).
  let saved = false;
  try {
    const { url, body: fsBody } = buildEnrichFirestoreRequest(env, docId, fields, source, undefined, detailsType);
    const res = await fetch(url, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(fsBody) });
    saved = res.ok;
    if (!res.ok) {
      const errText = (await res.text()).slice(0, 300);
      // Already saved: a retry or replay of the same details. Do not comment or
      // email a second time.
      if (res.status === 409 || /ALREADY_EXISTS|FAILED_PRECONDITION/.test(errText)) return reply({ ok: true, duplicate: true });
      console.error('Firestore enrich write failed:', res.status, errText);
    }
  } catch (err) {
    console.error('Firestore enrich write error:', err);
  }

  // (2) ERPNext in the background; wait briefly so the email can link the Lead.
  const erpPromise = enrichLeadInERPNext(env, { docId, email, name, leadType: detailsType, ...fields, brief })
    .catch((err) => ({ saved: false, error: describeFetchError(err) }));
  if (typeof context.waitUntil === 'function') context.waitUntil(erpPromise);
  const erp = await Promise.race([
    erpPromise,
    new Promise((resolve) => setTimeout(() => resolve({ pending: true }), ERP_EMAIL_GRACE_MS)),
  ]);

  // (3) Tell the inbox.
  const emailed = await sendEnrichEmail(env, { name, email, ...fields, brief, erpLeadId: erp.leadId, returning: erp.returning });

  const ok = saved || emailed;
  return reply({ ok, saved, emailed }, ok ? 200 : 502);
}

/** Cloudflare Pages Function entry point */
export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS — allow requests from factoryjet.com and Cloudflare preview URLs
  const origin = request.headers.get('Origin') || '';
  const allowed = origin.includes('factoryjet.com') || origin.includes('pages.dev') || origin === '';
  const corsHeaders = {
    'Access-Control-Allow-Origin':  allowed ? origin : 'https://factoryjet.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Parse body
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Step-2 details from the enrichment modal attach to an existing lead.
  if (body && body.mode === 'enrich') return handleEnrich(context, body, corsHeaders);

  // Trimmed and capped once here (clipLeadFields), before Firestore, ERPNext or
  // the email sees them, so one request cannot write a megabyte of text.
  const { docId, collection, name, email, phone, company, service, message, region, source, page } = clipLeadFields(body);

  // Where the visitor came from (src/utils/leadAttribution.ts). Untrusted input:
  // trimmed here, escaped in the email, and paths must start with "/".
  // Attribution values never need markup or quotes, so strip them before the
  // values reach Firestore, the CRM note (rendered as HTML in ERPNext) or email.
  const attr = (v, max) => clipText(v, max).replace(/[<>"'`]/g, '');
  const pathOnly = (v) => { const p = attr(v, 200); return p.startsWith('/') ? p : ''; };
  const attribution = {
    landingPage:       pathOnly(body.landingPage),
    referrer:          attr(body.referrer, 100),
    utmSource:         attr(body.utmSource, 120),
    utmMedium:         attr(body.utmMedium, 120),
    utmCampaign:       attr(body.utmCampaign, 120),
    clickId:           attr(body.clickId, 20),
    gclid:             attr(body.gclid, 200).replace(/[^A-Za-z0-9_-]/g, ''),
    aiAssistant:       attr(body.aiAssistant, 20).replace(/[^a-z]/g, ''),
    lastTouchReferrer: attr(body.lastTouchReferrer, 100),
    lastTouchLanding:  pathOnly(body.lastTouchLanding),
    lastTouchCampaign: attr(body.lastTouchCampaign, 120),
    lastTouchAt:       attr(body.lastTouchAt, 40),
  };

  const serviceCategory = resolveCategory({
    serviceCategory: clipText(body.serviceCategory, 40), service, page, landingPage: attribution.landingPage,
  });
  const serviceInferred = categoryFromValue(service) ? 'no' : 'yes';

  // Guard: need at minimum a name + email
  if (!name || !email) {
    return new Response(JSON.stringify({ error: 'name and email are required' }), {
      status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Spam signal only — see verifyTurnstile. Never gates capture.
  const turnstileVerdict = await verifyTurnstile(
    env, body.turnstileToken, request.headers.get('CF-Connecting-IP')
  );
  // Same rule for the hidden trap field. The forms used to drop these in the
  // browser and show "Request sent!", leaving no record; a browser autofill can
  // fill that field for a real visitor (it is named company_website on three
  // forms). The lead is kept and marked; the trap value itself is never stored.
  const trapFilled = Boolean(body.honeypot && String(body.honeypot).trim());
  // One label for this lead (Buyer, Vendor pitch, Likely spam or Test), worked out
  // here once and handed to Firestore, the CRM and the email subject.
  const leadType = leadTypeOf({ name, email, company, message, trapFilled, turnstileVerdict });
  // Country of the visitor's network, per Cloudflare. A two-letter code only.
  const ipCountry = networkCountryCode(request);

  // ── (1) AUTHORITATIVE: persist the lead to Firestore server-side ───────────
  // This is the reliable capture path; it runs regardless of email status.
  const fsResult = await writeLeadToFirestore(env, {
    docId, collection, name, email, phone, company, service, serviceCategory, serviceInferred, message, region, source, page,
    ...attribution,
    turnstileToken: body.turnstileToken, turnstileVerdict,
    honeypot: trapFilled ? 'filled' : '',
    leadType, ipCountry,
  });

  // ── (1b) Push lead to ERPNext CRM without ever blocking the visitor ────────
  // Wait at most ERP_EMAIL_GRACE_MS so a quick CRM write can be linked in the
  // alert email; otherwise answer now and let the sync finish in the background.
  const erpPromise = writeLeadToERPNext(env, {
    docId: fsResult.docId || docId,
    name, email, phone, company, service, serviceCategory, serviceInferred, message, region, source, page,
    ...attribution,
    leadType, ipCountry,
  }).then((result) => {
    if (!result.saved) console.error('ERPNext lead sync did not save:', result.error || result.status || 'unknown');
    return result;
  }).catch((err) => {
    console.error('ERPNext lead sync exception:', describeFetchError(err));
    return { saved: false, error: describeFetchError(err) };
  });
  if (typeof context.waitUntil === 'function') context.waitUntil(erpPromise);
  const erpResult = await Promise.race([
    erpPromise,
    new Promise((resolve) => setTimeout(() => resolve({ saved: false, pending: true }), ERP_EMAIL_GRACE_MS)),
  ]);

  // ── (2) Notify by email via Resend (best-effort) ───────────────────────────
  // A filled trap field is still saved and labelled above, but sends no alert:
  // a bot hammering the form would otherwise burn the Resend quota. The lead
  // stays in Firestore and the CRM as "Likely spam" for a human to read.
  let emailed = false;
  const apiKey = env.RESEND_API_KEY;
  if (trapFilled) {
    console.log('Trap field filled: lead saved, alert email skipped');
  } else if (!apiKey) {
    console.error('RESEND_API_KEY not set — lead saved, email skipped');
  } else {
    const serviceStr = serviceCategory;
    // Only an outright verification FAILURE is worth flagging in the subject.
    // 'absent' and 'unchecked' are normal for real people and stay unmarked, so
    // the warning keeps its meaning instead of appearing on half the leads.
    // The prefix comes from the same leadType the CRM and Firestore received.
    const subject = `${SUBJECT_PREFIX[leadType]}New lead: ${name} — ${serviceStr}${region ? ` (${region.toUpperCase()})` : ''}`.replace(/[\r\n]+/g, ' ');
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: NOTIFY_FROM,
          to: [NOTIFY_TO],
          subject,
          html: buildHtml({
            name, email, phone, company, service, serviceCategory, serviceInferred, message, region, page,
            turnstileVerdict, trapFilled, erpLeadId: erpResult.leadId, erpReturning: Boolean(erpResult.returning), attribution,
          }),
          ...(isStrictEmail(email) ? { reply_to: email } : {}),
        }),
      });
      emailed = resendRes.ok;
      if (!resendRes.ok) {
        console.error('Resend API error:', resendRes.status, await resendRes.text());
      }
    } catch (err) {
      console.error('Resend fetch error:', err);
    }
  }

  // Capture is successful if the lead was saved OR an alert email was sent.
  const ok = fsResult.saved || erpResult.saved || emailed;
  // Lets the step-2 modal attach phone/company/message to THIS lead. Only for a
  // lead Firestore actually saved: otherwise the docId is whatever the client
  // sent, and signing it would hand out a token for a document we never wrote.
  const enrichToken = fsResult.saved ? await signEnrichToken(enrichKey(env), sanitizeDocId(fsResult.docId)) : null;
  return new Response(
    JSON.stringify({
      ok,
      saved: fsResult.saved,
      erpLeadId: erpResult.leadId || null,
      erpPending: Boolean(erpResult.pending),
      emailed,
      docId: fsResult.docId || docId,
      enrichToken,
    }),
    {
      // 502 only when ALL paths failed, so the client retries.
      status: ok ? 200 : 502,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    },
  );
}

/**
 * CRM health check that creates nothing: GET /api/notify-lead?check=crm with the
 * HEALTH_CHECK_KEY secret in an X-Health-Key header (or ?key=). Without the right
 * key it answers exactly like any other GET, so the check is not discoverable and
 * strangers cannot make it call ERPNext.
 *
 * Reports whether ERPNext credentials are configured, whether ERPNext is
 * reachable from Cloudflare, and whether the credentials authenticate, with
 * timings. It never returns secrets or the API user's name. Use it to verify the
 * CRM layer of lead tracking without sending a test lead.
 */
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const json = (obj, status) => new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
  if (url.searchParams.get('check') !== 'crm' || !(await healthKeyMatches(env, request))) {
    return json({ error: 'Method not allowed. POST a lead.' }, 405);
  }

  const erpUrl = (env && env.ERPNEXT_URL) || DEFAULT_ERPNEXT_URL;
  const configured = Boolean(env && env.ERPNEXT_API_KEY && env.ERPNEXT_API_SECRET);
  const crm = { configured, reachable: null, authOk: null, httpStatus: null, pingMs: null, authMs: null, error: null };

  let started = Date.now();
  try {
    const ping = await fetchWithTimeout(`${erpUrl}/api/method/ping`, { headers: ERP_HEADERS }, erpTimeout(env));
    crm.reachable = ping.ok;
    crm.httpStatus = ping.status;
  } catch (err) {
    crm.reachable = false;
    crm.error = describeFetchError(err);
  }
  crm.pingMs = Date.now() - started;

  if (configured && crm.reachable) {
    started = Date.now();
    try {
      const auth = await fetchWithTimeout(`${erpUrl}/api/method/frappe.auth.get_logged_user`, {
        headers: { ...ERP_HEADERS, Authorization: `token ${env.ERPNEXT_API_KEY}:${env.ERPNEXT_API_SECRET}` },
      }, erpTimeout(env));
      crm.authOk = auth.ok;
      crm.httpStatus = auth.status;
    } catch (err) {
      crm.authOk = false;
      crm.error = describeFetchError(err);
    }
    crm.authMs = Date.now() - started;
  }

  return json({ crm }, 200);
}

/** Handle CORS preflight */
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin':  '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

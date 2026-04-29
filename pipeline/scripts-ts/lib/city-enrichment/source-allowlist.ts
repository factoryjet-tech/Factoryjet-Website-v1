/**
 * Host allowlists for source-citation enforcement.
 *
 * HEADLINE_STAT_HOSTS — required for population, GDP, businessCount sources.
 *   Primary government statistics agencies only. No Statista, no Wikipedia,
 *   no Britannica for these fields.
 *
 * SECONDARY_HOSTS — additionally permitted for industries, competitors,
 *   landmarks. Reputable secondary sources allowed because these fields
 *   are qualitative or descriptive.
 *
 * Hosts are matched case-insensitively. A source URL passes iff its host
 * (after lowercasing) equals an allowlist entry OR ends with `.${entry}`
 * (covers subdomains).
 */

export const HEADLINE_STAT_HOSTS: ReadonlyArray<string> = [
  // UK
  'ons.gov.uk',
  'companieshouse.gov.uk',
  'find-and-update.company-information.service.gov.uk',
  'gov.uk',
  // US
  'census.gov',
  'bea.gov',
  'bls.gov',
];

/**
 * Hosts permitted ONLY for qualitative fields (industries, competitors,
 * landmarks). NEVER for headline numeric statistics — those must cite
 * primary government sources via HEADLINE_STAT_HOSTS.
 *
 * Agency directory inclusion (digitalagencynetwork, sortlist, clutch,
 * etc.) is a deliberate trade-off: these are not authoritative on
 * pricing accuracy but are widely-used reference lists for "who are
 * the agencies in city X" lookups. Competitor records carry their own
 * `pricingPublic` flag for downstream consumers to filter on.
 */
export const SECONDARY_HOSTS: ReadonlyArray<string> = [
  // General reputable references.
  'wikipedia.org',
  'britannica.com',
  // Government / public sector.
  'gov.uk',                                  // councils, official city pages
  'gov',                                     // generic .gov suffix (matched as suffix)
  'edu',                                     // .edu institutional sources
  'data.london.gov.uk',                      // GLA Datastore
  'london.gov.uk',                           // Mayor of London / GLA
  'trustforlondon.org.uk',                   // demographics analysis citing ONS
  // Tourism / heritage (landmarks).
  'visitbritain.com',
  'historicengland.org.uk',
  'english-heritage.org.uk',
  'nationaltrust.org.uk',
  'visitlondon.com',
  'nps.gov',
  'visittheusa.com',
  // Agency directories (for competitor enrichment).
  'digitalagencynetwork.com',
  'sortlist.com',
  'sortlist.co.uk',
  'clutch.co',
  'designrush.com',
  'inbeat.agency',
  'bluelinks.agency',
  'whitehat-seo.co.uk',                      // London SEO comparison content
];

function normalizeHost(input: string): string | null {
  try {
    const u = new URL(input);
    return u.hostname.toLowerCase();
  } catch {
    return null;
  }
}

function matchesAllowlist(host: string, allowlist: ReadonlyArray<string>): boolean {
  const h = host.toLowerCase();
  for (const entry of allowlist) {
    const e = entry.toLowerCase();
    if (h === e) return true;
    if (h.endsWith(`.${e}`)) return true;
  }
  return false;
}

export function isHeadlineStatHost(url: string): boolean {
  const host = normalizeHost(url);
  if (!host) return false;
  return matchesAllowlist(host, HEADLINE_STAT_HOSTS);
}

export function isAcceptableSecondaryHost(url: string): boolean {
  const host = normalizeHost(url);
  if (!host) return false;
  return matchesAllowlist(host, HEADLINE_STAT_HOSTS) || matchesAllowlist(host, SECONDARY_HOSTS);
}

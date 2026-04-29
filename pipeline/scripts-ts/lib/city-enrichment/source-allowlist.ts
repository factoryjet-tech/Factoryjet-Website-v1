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

export const SECONDARY_HOSTS: ReadonlyArray<string> = [
  // Wider reputable set for qualitative fields.
  'wikipedia.org',
  'britannica.com',
  'gov.uk',           // councils, official city pages
  'gov',              // generic .gov suffix (matched as suffix)
  'edu',              // .edu institutional sources
  'visitbritain.com',
  'historicengland.org.uk',
  'english-heritage.org.uk',
  'nationaltrust.org.uk',
  'visitlondon.com',
  'nps.gov',
  'visittheusa.com',
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

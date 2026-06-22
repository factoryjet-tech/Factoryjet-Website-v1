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
  // UK government statistics — primary
  'ons.gov.uk',
  'companieshouse.gov.uk',
  'find-and-update.company-information.service.gov.uk',
  'gov.uk',
  'parliament.uk',                          // House of Commons Library research briefings
  'commonslibrary.parliament.uk',           // explicit subdomain match
  'data.gov.uk',                            // UK government open data portal
  // US government statistics — primary
  'census.gov',
  'bea.gov',
  'bls.gov',
  'fred.stlouisfed.org',                    // Fed economic data
  // International primary stats sometimes used for cross-checks
  'oecd.org',
  'worldbank.org',
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
  'gov.uk',
  'gov',
  'edu',
  'data.london.gov.uk',
  'london.gov.uk',
  'trustforlondon.org.uk',
  'centreforcities.org',                     // urban policy think tank
  // Tourism / heritage (landmarks).
  'visitbritain.com',
  'historicengland.org.uk',
  'english-heritage.org.uk',
  'nationaltrust.org.uk',
  'visitlondon.com',
  'nps.gov',
  'visittheusa.com',
  // Agency directories.
  'digitalagencynetwork.com',
  'sortlist.com',
  'sortlist.co.uk',
  'clutch.co',
  'designrush.com',
  'inbeat.agency',
  'bluelinks.agency',
  'whitehat-seo.co.uk',
  // Reputable UK business / industry press.
  'bmmagazine.co.uk',                        // Business Matters Magazine
  'cityam.com',                              // City AM (London business daily)
  'thedrum.com',                             // marketing / advertising trade
  'campaignlive.co.uk',                      // marketing trade
  'prweek.com',                              // PR trade
  'marketingweek.com',                       // marketing trade
  'ft.com',                                  // Financial Times
  'bbc.co.uk',                               // BBC
  'theguardian.com',                         // Guardian
  'reuters.com',                             // Reuters
  'bloomberg.com',                           // Bloomberg
  // US business / industry press equivalents.
  'forbes.com',
  'wsj.com',
  'nytimes.com',
  'inc.com',
  'fastcompany.com',
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

/**
 * Permissive predicate for competitor record sources. Accepts any
 * well-formed URL because the natural primary citation for "Agency X
 * is a London-based digital agency" is agency-x.com itself. The
 * agency's own website is more primary than a directory listing.
 *
 * This predicate does NOT relax the headline-stat policy — competitor
 * pricing and revenue claims still need either pricingPublic=true
 * (sourced from the agency itself) or no claim at all.
 */
export function isAcceptableCompetitorSource(url: string): boolean {
  try {
    const u = new URL(url);
    // Must be http(s) and have a non-empty host.
    return (u.protocol === 'http:' || u.protocol === 'https:') && u.hostname.length > 3;
  } catch {
    return false;
  }
}

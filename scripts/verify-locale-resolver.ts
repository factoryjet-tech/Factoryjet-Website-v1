/**
 * One-shot verification harness for the M1.d.3 locale resolver.
 *
 * Not added to package.json scripts — invoke manually as:
 *   pnpm tsx scripts/verify-locale-resolver.ts
 *
 * Asserts:
 *   - listPopulatedLocales() returns the expected populated set
 *   - resolveLocale() returns Locale objects with currency/stats fields
 *   - bcp47ToCountryCode() roundtrips en-GB → gb
 *   - resolveLocale() throws for unpopulated countries (au)
 */

import { resolveLocale, bcp47ToCountryCode, listPopulatedLocales } from '../src/lib/locales';
import type { CountryCode } from '../src/lib/locales';

const populated = listPopulatedLocales();
console.log('Populated locales:', populated);

for (const cc of populated) {
  const loc = resolveLocale(cc);
  console.log(`\n[${cc}]`);
  console.log(`  ${loc.countryName} / ${loc.bcp47}`);
  console.log(`  Currency: ${loc.currencyCode} (${loc.currencySymbol}) — ${loc.currencyName}`);
  console.log(`  Stats body: ${loc.officialStatsBodyName} (${loc.officialStatsBodyUrl})`);
  console.log(`  Regulator: ${loc.regulatoryAuthorityName}`);
  console.log(`  Archetype: "${loc.agencyArchetypeLabel}"`);
}

// Roundtrip check
const gbFromBcp = bcp47ToCountryCode('en-GB');
console.log(`\nRoundtrip en-GB → ${gbFromBcp} (expected: gb)`);
if (gbFromBcp !== 'gb') {
  console.error('FAIL: roundtrip mismatch');
  process.exit(1);
}

const usFromBcp = bcp47ToCountryCode('en-US');
console.log(`Roundtrip en-US → ${usFromBcp} (expected: us)`);
if (usFromBcp !== 'us') {
  console.error('FAIL: roundtrip mismatch');
  process.exit(1);
}

const unknownFromBcp = bcp47ToCountryCode('zh-CN');
console.log(`Roundtrip zh-CN → ${unknownFromBcp} (expected: undefined)`);
if (unknownFromBcp !== undefined) {
  console.error('FAIL: unknown locale should return undefined');
  process.exit(1);
}

// Failure mode
try {
  resolveLocale('au' as CountryCode);
  console.error('FAIL: should have thrown for unpopulated locale au');
  process.exit(1);
} catch (e) {
  console.log(`\nCorrectly threw for unpopulated locale: ${(e as Error).message}`);
}

console.log('\n✅ Verification complete');

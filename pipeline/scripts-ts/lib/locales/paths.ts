import type { Locale } from './types.js';

/** Returns '/uk' for gb (legacy URL parity) and '/<countryCode>' for all others. */
export function localeBasePath(locale: Locale): string {
  return locale.countryCode === 'gb' ? '/uk' : `/${locale.countryCode}`;
}

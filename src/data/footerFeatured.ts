import type { SiteFooterColumn } from '@/components/v2/SiteFooter';

/** Builds a compact "featured" footer view from a full column set, reusing the
 * same link objects so the two cannot drift. Throws on an href that is not in the
 * full set, which turns a typo into a build failure instead of a dead link. */
export function pickFooterLinks(
  columns: ReadonlyArray<SiteFooterColumn>,
  picks: ReadonlyArray<[string, ReadonlyArray<string>]>,
): ReadonlyArray<SiteFooterColumn> {
  const all = columns.flatMap((column) => column.links);
  return picks.map(([heading, hrefs]) => ({
    heading,
    links: hrefs.map((href) => {
      const link = all.find((item) => item.href === href);
      if (!link) throw new Error(`Unknown footer destination: ${href}`);
      return link;
    }),
  }));
}

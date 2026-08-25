import { CITATIONS } from '../pageData';

/**
 * Visible source list. Renders the SAME CITATIONS array the page body cites inline, so a
 * reader can check any claim without leaving the page.
 *
 * Every URL here was fetched with curl on 2026-08-25 and the claim text was read out of
 * the response body. Sources whose content is rendered by JavaScript were rejected during
 * research rather than cited on trust, see the note in pageData.ts.
 */
export default function Sources() {
  return (
    <section
      aria-label="Sources"
      className="w-full bg-white"
      style={{ borderTop: '1px solid #E7DED6' }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-14 sm:px-8">
        <h2 className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B23E13]">
          Sources
        </h2>
        <ol className="mt-5 space-y-4">
          {CITATIONS.map((c) => (
            <li key={c.id} className="flex gap-3">
              <span className="font-fj-mono text-[12px] font-semibold text-[#B23E13]">
                [{c.id}]
              </span>
              <div>
                <a
                  href={c.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-fj-body text-[14.5px] font-semibold text-fj-ink underline underline-offset-2"
                >
                  {c.source}: {c.title}
                </a>
                <p className="mt-1 max-w-[820px] font-fj-body text-[13.5px] leading-[1.65] text-fj-neutral-600">
                  {c.claim}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 font-fj-body text-[12.5px] leading-[1.6] text-fj-neutral-600">
          Search volume, competitor link counts and AI Overview presence quoted on this page
          were measured by FactoryJet in August 2026 against Google Australia results.
        </p>
      </div>
    </section>
  );
}

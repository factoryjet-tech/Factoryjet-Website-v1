// Static server component. Light section.
//
// Rebuilt 2026-08-25. The previous version was a dark "our tech stack" showcase
// with a marquee ticker, a "same stack as Stripe, Vercel and Linear" claim and a
// guaranteed Lighthouse score. None of that answers the question a Liverpool
// business actually has, which is "can you work on the site I already own, and
// what will you have to fix on it?". So that is what this section answers now.

type Platform = {
  id: string;
  name: string;
  accent: string;
  mark: string;
  catch_: string;
};

const PLATFORMS: Platform[] = [
  {
    id: 'wordpress',
    name: 'WordPress',
    accent: '#21759B',
    mark: 'W',
    catch_:
      'Usually fixable. The common problems are a page builder producing huge pages, dozens of plugins loading on every request, and tag or category archives competing with your real pages.',
  },
  {
    id: 'shopify',
    name: 'Shopify and Shopify Plus',
    accent: '#5A8F2E',
    mark: 'S',
    catch_:
      'Strong out of the box. Watch collection filters creating endless URLs, duplicate product pages across collections, and theme apps injecting scripts that slow the mobile page down.',
  },
  {
    id: 'woo',
    name: 'WooCommerce',
    accent: '#7A4470',
    mark: 'Wc',
    catch_:
      'Flexible but heavy. Product attribute pages and layered navigation generate crawl traps quickly, so the crawl rules and canonical tags need setting properly.',
  },
  {
    id: 'webflow',
    name: 'Webflow',
    accent: '#3341C4',
    mark: 'Wf',
    catch_:
      'Clean HTML and fast by default. The usual gaps are missing structured data, no proper redirect handling after a rebuild, and CMS collections with thin templated pages.',
  },
  {
    id: 'squarespace',
    name: 'Squarespace',
    accent: '#3A3A38',
    mark: 'Sq',
    catch_:
      'Fine for small service sites. Limits show up in URL control, redirect handling and page speed on image heavy templates, so plan around them rather than fighting them.',
  },
  {
    id: 'wix',
    name: 'Wix',
    accent: '#8A6A1F',
    mark: 'Wx',
    catch_:
      'Better than its reputation now. Check that pages render for crawlers without JavaScript, and that the built-in SEO settings have actually been filled in rather than left default.',
  },
  {
    id: 'magento',
    name: 'Magento and Adobe Commerce',
    accent: '#B2481F',
    mark: 'M',
    catch_:
      'Powerful and slow if left alone. Multi-store setups duplicate content across store views, and uncached category pages are the usual cause of poor mobile speed.',
  },
  {
    id: 'nextjs',
    name: 'Next.js and other custom builds',
    accent: '#1A1A1A',
    mark: 'N',
    catch_:
      'Fast when server rendered. The failure we see most is a page that renders only in the browser, so crawlers receive an empty shell and index nothing useful.',
  },
  {
    id: 'hubspot',
    name: 'HubSpot CMS',
    accent: '#B23E13',
    mark: 'H',
    catch_:
      'Good for marketing teams. Blog and landing page templates often ship without proper headings or schema, and tracking scripts add weight on mobile.',
  },
];

const HANDOVER: string[] = [
  'We can make changes ourselves, or hand your developer a written ticket per fix',
  'Every change is logged with a date, so nothing is a mystery six months later',
  'Nothing is installed that we would not be happy to hand to another agency',
  'No proprietary plugin, portal or tracking that stops working if you leave',
];

export default function TechStack() {
  return (
    <section
      id="platforms"
      aria-labelledby="platforms-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#B23E13]">
            Platforms
          </p>
          <h2
            id="platforms-heading"
            className="mt-4 font-fj-display text-3xl font-bold leading-tight tracking-tight text-fj-ink md:text-[42px]"
          >
            We work on the site you already own
          </h2>
          <p className="mt-5 font-fj-body text-lg leading-relaxed text-fj-neutral-600">
            You almost certainly do not need a new website to rank better. You need
            the one you have fixed. Here is what typically needs fixing on each
            platform, so you can see the honest version before we speak.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((p) => (
            <li
              key={p.id}
              className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6"
              style={{ borderLeft: `3px solid ${p.accent}` }}
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border font-fj-display text-[13px] font-bold"
                  style={{
                    borderColor: '#D9D9D2',
                    backgroundColor: '#FFFFFF',
                    color: p.accent,
                    lineHeight: 1,
                  }}
                >
                  {p.mark}
                </span>
                <h3 className="font-fj-display text-[17px] font-bold text-fj-ink">
                  {p.name}
                </h3>
              </div>
              <p className="mt-3 font-fj-body text-[14px] leading-relaxed text-fj-neutral-600">
                {p.catch_}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 md:p-8">
          <h3 className="font-fj-display text-xl font-bold text-fj-ink">
            How the work reaches your site
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
            {HANDOVER.map((h) => (
              <li
                key={h}
                className="flex gap-3 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600"
              >
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#F05A28]"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

interface RelatedGuide {
  href: string;
  label: string;
}

/**
 * RelatedGuides — small additive internal-links block placed near the bottom of
 * high-authority pages to pass link equity to topically related blog posts.
 * Keep anchors keyword-rich and descriptive.
 */
export default function RelatedGuides({
  heading = 'Related guides',
  links,
}: {
  heading?: string;
  links: RelatedGuide[];
}) {
  if (!links?.length) return null;
  return (
    <section className="bg-white py-14 md:py-20 border-t border-fj-charcoal/10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <p className="text-xs font-fj-mono uppercase tracking-widest text-[#F05A28] mb-5">{heading}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex items-start gap-2 text-fj-ink font-fj-body hover:text-[#F05A28] transition-colors"
              >
                <span className="text-[#F05A28] mt-0.5">→</span>
                <span className="underline-offset-4 group-hover:underline">{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Link from 'next/link';

export interface ServiceEditorialPullquoteProps {
  eyebrow: string;
  headline: string;
  sidebarCta: { label: string; href: string };
  introParagraph: string;
  pullquoteText: string;
  bodyParagraphs: ReadonlyArray<string>; // length 2
  diagramNodes: ReadonlyArray<{
    label: string;
    description: string;
  }>; // length 5
}

/**
 * Treatment 3 — `editorial_prose_with_pullquote_and_diagram`.
 * Service explanation (default).
 *
 * Pure Server Component. White background. Two-column 4/12 + 8/12.
 * Left column is sticky on lg+ (eyebrow + headline + outlined CTA).
 * Right column is editorial prose: intro paragraph, then a serif
 * pull-quote with a Jet Blue left border, then two body paragraphs,
 * then an inline 5-node SVG flow diagram.
 *
 * The diagram is hand-rolled SVG (no JS, no D3) — it stays in the
 * server-rendered HTML so AI crawlers see the labels. Mobile users
 * scroll horizontally inside the SVG container.
 */
export default function ServiceEditorialPullquote({
  eyebrow,
  headline,
  sidebarCta,
  introParagraph,
  pullquoteText,
  bodyParagraphs,
  diagramNodes,
}: ServiceEditorialPullquoteProps) {
  // Diagram geometry: 5 nodes spaced evenly across an 800px viewBox.
  const nodeWidth = 130;
  const nodeHeight = 56;
  const nodeY = 60;
  const totalSpan = 800;
  const step = (totalSpan - nodeWidth) / (diagramNodes.length - 1);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container-xl px-6 py-section-y lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — sticky sidebar (4/12) */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="mb-6 inline-flex items-center font-mono text-mono-sm uppercase tracking-[0.08em] text-text-meta">
                {eyebrow}
              </div>
              <h2 className="font-display text-display-md text-navy">
                {headline}
              </h2>
              <Link
                href={sidebarCta.href}
                className="mt-8 inline-flex items-center justify-center rounded-lg border border-navy bg-white px-5 py-2.5 text-body-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {sidebarCta.label}
              </Link>
            </div>
          </aside>

          {/* Right — editorial body (8/12) */}
          <div className="lg:col-span-8">
            <p className="text-body-lg text-slate">{introParagraph}</p>

            {/* Pull quote */}
            <blockquote className="my-8 border-l-4 border-jet-blue py-2 pl-6 font-serif text-headline italic text-navy">
              {pullquoteText}
            </blockquote>

            {bodyParagraphs.map((para, i) => (
              <p key={i} className="mt-6 text-body text-slate">
                {para}
              </p>
            ))}

            {/* Inline 5-node diagram */}
            <div className="mt-12 overflow-x-auto">
              <svg
                viewBox="0 0 800 200"
                className="min-w-[640px] w-full"
                role="img"
                aria-label="Process flow diagram"
              >
                {/* Connector arrows between nodes */}
                {diagramNodes.slice(0, -1).map((_, i) => {
                  const x1 = i * step + nodeWidth;
                  const x2 = (i + 1) * step;
                  const y = nodeY + nodeHeight / 2;
                  return (
                    <g key={`arrow-${i}`}>
                      <line
                        x1={x1}
                        x2={x2 - 6}
                        y1={y}
                        y2={y}
                        stroke="#64748B"
                        strokeWidth={1.5}
                      />
                      <polygon
                        points={`${x2 - 6},${y - 4} ${x2},${y} ${x2 - 6},${y + 4}`}
                        fill="#64748B"
                      />
                    </g>
                  );
                })}

                {/* Nodes */}
                {diagramNodes.map((node, i) => {
                  const x = i * step;
                  return (
                    <g key={node.label}>
                      <rect
                        x={x}
                        y={nodeY}
                        width={nodeWidth}
                        height={nodeHeight}
                        rx={8}
                        fill="white"
                        stroke="#64748B"
                        strokeWidth={1.5}
                      />
                      <text
                        x={x + nodeWidth / 2}
                        y={nodeY + nodeHeight / 2 + 4}
                        textAnchor="middle"
                        fontSize={13}
                        fontWeight={500}
                        fill="#0F172A"
                        fontFamily="ui-sans-serif, system-ui, sans-serif"
                      >
                        {node.label}
                      </text>
                      <text
                        x={x + nodeWidth / 2}
                        y={nodeY + nodeHeight + 22}
                        textAnchor="middle"
                        fontSize={11}
                        fill="#64748B"
                        fontFamily="ui-sans-serif, system-ui, sans-serif"
                      >
                        {node.description}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

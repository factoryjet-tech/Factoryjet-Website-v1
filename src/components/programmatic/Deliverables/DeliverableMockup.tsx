import { Edit3, FileCode2, Layers } from 'lucide-react';
import { BrowserMockup } from '../BrowserMockup';

export type DeliverableType =
  | 'cms_dashboard'
  | 'lighthouse_score'
  | 'figma_artifact'
  | 'analytics_dashboard'
  | 'github_handover';

export interface DeliverableMockupProps {
  type: DeliverableType;
  /**
   * Per-variant payload. Shape varies by `type` — each variant
   * documents its own expected fields below. Pure data; no images,
   * no AI generation. Pipeline copy specifies the type and supplies
   * the matching payload.
   */
  data: Record<string, unknown>;
}

/**
 * Discriminated-union deliverable mockup. Renders the right
 * mockup variant for the type. M1.5 implements all 5 variants
 * as hand-coded HTML/SVG with no external image dependencies.
 *
 * Per spec §5.5 — these replace the old SVG flow diagram inside
 * <ServiceEditorialPullquote>. Each variant is restrained: muted
 * palette, restraint lane, no decorative flourish, designed to
 * look like a screenshot of a real working artefact.
 */
export function DeliverableMockup({ type, data }: DeliverableMockupProps) {
  // Cast through `unknown` because Record<string, unknown> doesn't
  // structurally overlap with the discriminated payloads (TS rule).
  // The discipline that keeps this safe lives in mock-data.ts and
  // (in M2 onwards) the pipeline copy schema validator.
  switch (type) {
    case 'cms_dashboard':
      return <CmsDashboardMockup data={data as unknown as CmsDashboardData} />;
    case 'lighthouse_score':
      return <LighthouseScoreMockup data={data as unknown as LighthouseData} />;
    case 'figma_artifact':
      return <FigmaArtifactMockup data={data as unknown as FigmaData} />;
    case 'analytics_dashboard':
      return <AnalyticsDashboardMockup data={data as unknown as AnalyticsData} />;
    case 'github_handover':
      return <GithubHandoverMockup data={data as unknown as GithubData} />;
  }
}

/* ====================================================================
 * 1. cms_dashboard — fictional CMS with sidebar nav + content list
 * ================================================================== */

interface CmsDashboardData {
  siteName: string;
  /** sidebar nav items, e.g. ["Pages", "Blog", "Settings"] */
  navItems: string[];
  /** recent content entries shown in the main panel */
  recentEdits: Array<{ title: string; status: string; updatedAt: string }>;
}

function CmsDashboardMockup({ data }: { data: CmsDashboardData }) {
  return (
    <BrowserMockup
      url={`cms.${data.siteName.toLowerCase().replace(/\s+/g, '-')}.com`}
      ariaLabel={`Mock CMS dashboard for ${data.siteName}`}
    >
      <div className="grid grid-cols-[160px_1fr] text-[11px]">
        {/* Sidebar */}
        <aside className="border-r border-border-soft bg-bg-soft px-3 py-4">
          <div className="mb-4 font-display text-xs font-semibold text-navy">
            {data.siteName}
          </div>
          <nav className="flex flex-col gap-1.5" aria-hidden>
            {data.navItems.map((item, i) => (
              <span
                key={item}
                className={
                  i === 0
                    ? 'rounded bg-jet-blue/10 px-2 py-1 font-medium text-jet-blue'
                    : 'px-2 py-1 text-text-meta'
                }
              >
                {item}
              </span>
            ))}
          </nav>
        </aside>

        {/* Main panel */}
        <div className="px-4 py-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-medium text-navy">{data.navItems[0]}</span>
            <button
              type="button"
              tabIndex={-1}
              className="rounded bg-jet-blue px-2 py-1 text-[10px] font-medium text-white"
              aria-hidden
            >
              + New
            </button>
          </div>

          <ul className="flex flex-col">
            {data.recentEdits.map((entry) => (
              <li
                key={entry.title}
                className="flex items-center justify-between border-t border-border-soft py-2"
              >
                <div className="flex items-center gap-2">
                  <Edit3 className="size-3 text-text-meta" aria-hidden />
                  <span className="text-navy">{entry.title}</span>
                </div>
                <div className="flex items-center gap-3 text-text-meta">
                  <span
                    className={
                      entry.status === 'Published'
                        ? 'rounded-full bg-jet-green/10 px-2 py-0.5 text-[9px] font-medium text-jet-green'
                        : 'rounded-full bg-bg-soft px-2 py-0.5 text-[9px] font-medium'
                    }
                  >
                    {entry.status}
                  </span>
                  <span className="text-[10px]">{entry.updatedAt}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserMockup>
  );
}

/* ====================================================================
 * 2. lighthouse_score — 4 circular progress rings (P/A/BP/SEO)
 * ================================================================== */

interface LighthouseData {
  url: string;
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
}

function LighthouseScoreMockup({ data }: { data: LighthouseData }) {
  const entries: Array<[string, number]> = [
    ['Performance', data.scores.performance],
    ['Accessibility', data.scores.accessibility],
    ['Best Practices', data.scores.bestPractices],
    ['SEO', data.scores.seo],
  ];

  return (
    <div
      className="rounded-lg border border-border-soft bg-white p-6"
      role="img"
      aria-label={`Mock Lighthouse audit for ${data.url}`}
    >
      <div className="mb-4 flex items-center gap-2">
        <Layers className="size-4 text-text-meta" aria-hidden />
        <span className="font-mono text-mono-sm text-text-meta">
          Lighthouse · {data.url}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {entries.map(([label, score]) => (
          <LighthouseRing key={label} label={label} score={score} />
        ))}
      </div>
    </div>
  );
}

function LighthouseRing({ label, score }: { label: string; score: number }) {
  // Circle geometry — circumference = 2 * π * r, r = 22
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  // Colour bands matching real Lighthouse: ≥90 green, 50-89 amber, <50 red
  const colour =
    score >= 90 ? '#10B981' : score >= 50 ? '#FF6B35' : '#EF4444';

  return (
    <div className="flex flex-col items-center">
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden>
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="4"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke={colour}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 32 32)"
        />
        <text
          x="32"
          y="36"
          textAnchor="middle"
          fontSize="16"
          fontWeight="600"
          fill="#0F172A"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          {score}
        </text>
      </svg>
      <span className="mt-2 text-[10px] text-text-meta">{label}</span>
    </div>
  );
}

/* ====================================================================
 * 3. figma_artifact — fictional Figma file with overlapping frames
 * ================================================================== */

interface FigmaData {
  fileName: string;
  /** frame labels rendered inside the canvas */
  frameNames: string[];
}

function FigmaArtifactMockup({ data }: { data: FigmaData }) {
  return (
    <div
      className="rounded-lg border border-border-soft bg-bg-soft p-4"
      role="img"
      aria-label={`Mock Figma file: ${data.fileName}`}
    >
      <div className="mb-3 flex items-center gap-2">
        <FileCode2 className="size-4 text-text-meta" aria-hidden />
        <span className="font-mono text-mono-sm text-text-meta">
          Figma · {data.fileName}
        </span>
      </div>

      <div className="relative h-[220px] w-full overflow-hidden rounded-md bg-white shadow-sm">
        {/* Overlapping wireframe rectangles — 4 frames offset diagonally */}
        {data.frameNames.slice(0, 4).map((name, i) => {
          const offsetX = i * 28;
          const offsetY = i * 22;
          const widths = ['180px', '170px', '160px', '150px'];
          const heights = ['120px', '120px', '120px', '120px'];
          return (
            <div
              key={name}
              className="absolute rounded border border-border-soft bg-white shadow-sm"
              style={{
                left: `${20 + offsetX}px`,
                top: `${20 + offsetY}px`,
                width: widths[i],
                height: heights[i],
              }}
            >
              {/* Mock frame header */}
              <div className="border-b border-border-soft bg-bg-soft px-2 py-1 text-[9px] font-medium text-text-meta">
                {name}
              </div>
              {/* Mock content rows */}
              <div className="space-y-1.5 px-2 py-2">
                <div className="h-2 w-3/4 rounded bg-border-soft" />
                <div className="h-2 w-1/2 rounded bg-border-soft" />
                <div className="h-2 w-2/3 rounded bg-border-soft" />
                <div className="mt-3 h-3 w-1/3 rounded bg-jet-blue/30" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ====================================================================
 * 4. analytics_dashboard — fictional GA4 dashboard with chart + KPIs
 * ================================================================== */

interface AnalyticsData {
  siteName: string;
  /** KPI cards across the top */
  kpiCards: Array<{ label: string; value: string; delta: string }>;
}

function AnalyticsDashboardMockup({ data }: { data: AnalyticsData }) {
  // Fake daily series for the line chart — 14 points, gentle upward trend.
  const series = [12, 18, 14, 22, 19, 28, 24, 30, 27, 38, 35, 44, 41, 52];
  const chartW = 360;
  const chartH = 80;
  const max = Math.max(...series);
  const points = series
    .map((v, i) => {
      const x = (i / (series.length - 1)) * chartW;
      const y = chartH - (v / max) * chartH;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <BrowserMockup
      url={`analytics.google.com / ${data.siteName.toLowerCase()}`}
      ariaLabel={`Mock GA4 dashboard for ${data.siteName}`}
    >
      <div className="px-5 py-5 text-[11px]">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-medium text-navy">
            {data.siteName} · Last 14 days
          </span>
          <span className="font-mono text-[10px] text-text-meta">
            All traffic
          </span>
        </div>

        {/* KPI cards */}
        <div className="mb-5 grid grid-cols-3 gap-3">
          {data.kpiCards.map((kpi) => {
            const isUp = kpi.delta.trim().startsWith('+');
            return (
              <div
                key={kpi.label}
                className="rounded-md border border-border-soft p-3"
              >
                <div className="text-[10px] text-text-meta">{kpi.label}</div>
                <div className="mt-1 font-display text-base font-medium text-navy">
                  {kpi.value}
                </div>
                <div
                  className={
                    isUp
                      ? 'mt-0.5 text-[10px] font-medium text-jet-green'
                      : 'mt-0.5 text-[10px] font-medium text-red-600'
                  }
                >
                  {kpi.delta}
                </div>
              </div>
            );
          })}
        </div>

        {/* Line chart */}
        <svg
          width="100%"
          height={chartH + 20}
          viewBox={`0 0 ${chartW} ${chartH + 20}`}
          aria-hidden
        >
          <polyline
            points={points}
            fill="none"
            stroke="#0052CC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Filled area under the line */}
          <polygon
            points={`0,${chartH} ${points} ${chartW},${chartH}`}
            fill="#0052CC"
            fillOpacity="0.08"
          />
        </svg>
      </div>
    </BrowserMockup>
  );
}

/* ====================================================================
 * 5. github_handover — fictional GitHub repo page with README
 * ================================================================== */

interface GithubData {
  repoOwner: string;
  repoName: string;
  /** First line of README rendered as the title */
  readmeTitle: string;
  /** First paragraph of README rendered as body */
  readmeIntro: string;
  lastCommitMessage: string;
  lastCommitAuthor: string;
  lastCommitTime: string;
}

function GithubHandoverMockup({ data }: { data: GithubData }) {
  return (
    <BrowserMockup
      url={`github.com/${data.repoOwner}/${data.repoName}`}
      ariaLabel={`Mock GitHub repo handover for ${data.repoOwner}/${data.repoName}`}
    >
      <div className="px-5 py-4 text-[11px]">
        {/* Repo header row */}
        <div className="mb-3 flex items-center justify-between">
          <div className="font-mono text-navy">
            <span className="text-text-meta">{data.repoOwner}</span>
            <span className="px-1 text-text-meta">/</span>
            <span className="font-medium">{data.repoName}</span>
          </div>
          <button
            type="button"
            tabIndex={-1}
            className="rounded bg-jet-green px-3 py-1 text-[10px] font-medium text-white"
            aria-hidden
          >
            &lt;&gt; Code
          </button>
        </div>

        {/* Last commit row */}
        <div className="mb-4 flex items-center justify-between rounded-md border border-border-soft bg-bg-soft px-3 py-2">
          <span className="text-text-meta">
            <span className="font-medium text-navy">
              {data.lastCommitAuthor}
            </span>{' '}
            {data.lastCommitMessage}
          </span>
          <span className="font-mono text-[10px] text-text-meta">
            {data.lastCommitTime}
          </span>
        </div>

        {/* README preview */}
        <div className="rounded-md border border-border-soft p-4">
          <div className="mb-2 flex items-center gap-2 text-text-meta">
            <FileCode2 className="size-3" aria-hidden />
            <span className="font-mono text-[10px]">README.md</span>
          </div>
          <h3 className="font-display text-base font-medium text-navy">
            {data.readmeTitle}
          </h3>
          <p className="mt-2 text-text-meta">{data.readmeIntro}</p>
        </div>
      </div>
    </BrowserMockup>
  );
}

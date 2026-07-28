'use client';

/**
 * ScoreReport — FactoryJet-branded render of a completed SIS scan.
 *
 * "Publish observations, not verdicts" (SIS spec §6): every claim is stamped with
 * the engines asked, the number of buyer questions, and the UTC date it was run.
 * Closes with a FactoryJet "we'll fix this" CTA + a soft Seen-in-Search cross-sell.
 */

import { ENGINE_LABELS, type ScanResult, type SubScores } from './types';

const SUBSCORE_META: { key: keyof SubScores; label: string; help: string }[] = [
  { key: 'presence', label: 'Presence', help: 'How often AI answers name you at all' },
  { key: 'prominence', label: 'Prominence', help: 'How high you rank when you do appear' },
  { key: 'competitive', label: 'Share of voice', help: 'Your share vs competitors in AI answers' },
  { key: 'citations', label: 'Citations', help: 'How often AI links to your own domain' },
  { key: 'sentiment', label: 'Sentiment', help: 'How positive the mentions are' },
];

function scoreColor(n: number): string {
  if (n >= 70) return '#1F9D6B'; // green
  if (n >= 40) return '#C77A15'; // amber
  return '#B23E13'; // brand orange/red
}

function fmtDate(iso?: string): string {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      timeZone: 'UTC',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

function Bar({ value, color }: { value: number; color: string }) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className="avc-bar" aria-hidden="true">
      <span className="avc-bar-fill" style={{ width: `${v}%`, background: color }} />
    </div>
  );
}

export default function ScoreReport({
  result,
  website,
  company,
}: {
  result: ScanResult;
  website: string;
  company: string;
}) {
  const score = Math.max(0, Math.min(100, Math.round(result.score ?? 0)));
  const color = scoreColor(score);
  const grade = result.grade || (score >= 70 ? 'Strong' : score >= 40 ? 'Contender' : 'Invisible');
  const questions = result.questions ?? [];
  const totalQ = questions.length || result.meta?.questionCount || 6;
  const missed = questions.filter((q) => !q.mentioned);
  const shown = questions.filter((q) => q.mentioned);
  const competitors = (result.competitors ?? []).slice().sort((a, b) => b.mentions - a.mentions);
  const maxMentions = Math.max(1, ...competitors.map((c) => c.mentions));
  const findings = result.findings ?? [];
  const engines = (result.enginesRun ?? result.meta?.enginesRun ?? ['chatgpt', 'google_aio', 'perplexity'])
    .map((e) => ENGINE_LABELS[e] || e)
    .join(', ');
  const category = result.meta?.category || 'your category';

  // Ring geometry (static — no count-up animation, per brand rules).
  const R = 54;
  const C = 2 * Math.PI * R;
  const dash = C * (1 - score / 100);

  return (
    <div className="avc-panel avc-report">
      {/* Score header */}
      <div className="avc-report-head">
        <div className="avc-ring-wrap">
          <svg width="132" height="132" viewBox="0 0 132 132" role="img" aria-label={`AI visibility score ${score} out of 100`}>
            <circle cx="66" cy="66" r={R} fill="none" stroke="#F0E7E0" strokeWidth="11" />
            <circle
              cx="66" cy="66" r={R} fill="none" stroke={color} strokeWidth="11" strokeLinecap="round"
              strokeDasharray={C} strokeDashoffset={dash} transform="rotate(-90 66 66)"
            />
            <text x="66" y="61" textAnchor="middle" className="avc-ring-num" fill={color}>{score}</text>
            <text x="66" y="82" textAnchor="middle" className="avc-ring-of">/ 100</text>
          </svg>
        </div>
        <div className="avc-report-head-txt">
          <span className="avc-eyebrow">Your AI visibility score</span>
          <h3 className="avc-report-title">
            {company || website} is <span style={{ color }}>{grade}</span> in AI search
          </h3>
          <p className="avc-report-observe">
            We asked <b>{engines}</b> {totalQ} real buyer questions about {category}
            {result.completedAt ? ` on ${fmtDate(result.completedAt)} (UTC)` : ''}. Here is exactly what they said.
          </p>
        </div>
      </div>

      {/* Sub-scores */}
      {result.subScores && (
        <div className="avc-subscores">
          {SUBSCORE_META.map((m) => {
            const v = Math.round(result.subScores![m.key] ?? 0);
            return (
              <div key={m.key} className="avc-subscore">
                <div className="avc-subscore-top">
                  <span className="avc-subscore-label">{m.label}</span>
                  <span className="avc-subscore-val">{v}</span>
                </div>
                <Bar value={v} color={scoreColor(v)} />
                <span className="avc-subscore-help">{m.help}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Competitors / share of voice */}
      {competitors.length > 0 && (
        <section className="avc-report-sec">
          <h4 className="avc-report-h">Who AI recommends in {category}</h4>
          <ul className="avc-sov">
            {competitors.map((c) => (
              <li key={c.name} className={`avc-sov-row${c.isYou ? ' avc-sov-row--you' : ''}`}>
                <span className="avc-sov-name">{c.isYou ? `${c.name} (you)` : c.name}</span>
                <div className="avc-sov-track">
                  <span
                    className="avc-sov-fill"
                    style={{ width: `${(c.mentions / maxMentions) * 100}%`, background: c.isYou ? '#F05A28' : '#D8CCC2' }}
                  />
                </div>
                <span className="avc-sov-count">{c.mentions}/{totalQ}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Missed questions */}
      {missed.length > 0 && (
        <section className="avc-report-sec">
          <h4 className="avc-report-h">
            {missed.length} of {totalQ} buyer questions where AI never named you
          </h4>
          <ul className="avc-qlist">
            {missed.map((q) => (
              <li key={q.ordinal} className="avc-qrow avc-qrow--missed">
                <span className="avc-qmark" aria-hidden="true">✕</span>
                <span className="font-fj-body">{q.text}</span>
              </li>
            ))}
          </ul>
          {shown.length > 0 && (
            <ul className="avc-qlist avc-qlist--shown">
              {shown.map((q) => (
                <li key={q.ordinal} className="avc-qrow avc-qrow--shown">
                  <span className="avc-qmark avc-qmark--ok" aria-hidden="true">✓</span>
                  <span className="font-fj-body">{q.text}{q.rank ? ` — named #${q.rank}` : ''}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Findings */}
      {findings.length > 0 && (
        <section className="avc-report-sec">
          <h4 className="avc-report-h">The highest-impact fixes</h4>
          <ol className="avc-findings">
            {findings.map((f) => (
              <li key={f.ordinal} className="avc-finding">
                <div className="avc-finding-top">
                  <b className="font-fj-display">{f.title}</b>
                  <span className="avc-tags">
                    <span className={`avc-tag avc-tag--impact-${f.impact}`}>{f.impact} impact</span>
                    <span className="avc-tag avc-tag--effort">{f.effort} effort</span>
                  </span>
                </div>
                <p className="font-fj-body">{f.detail}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* CTA */}
      <section className="avc-report-cta">
        <h4 className="font-fj-display">Want FactoryJet to fix this for you?</h4>
        <p className="font-fj-body">
          We do the work that gets brands recommended by AI: the content, the schema, the comparison pages, the
          citations. Get a plan tailored to this exact report.
        </p>
        <div className="avc-cta-row">
          <a href="/contact" className="avc-btn avc-btn--primary">Get my fix-it plan</a>
          <a href="https://seeninsearch.com" target="_blank" rel="noopener noreferrer" className="avc-btn avc-btn--ghost">
            Track this over time with Seen in Search
          </a>
        </div>
      </section>

      <p className="avc-report-foot">
        These are observations, not verdicts: verbatim answers from {engines}, captured
        {result.completedAt ? ` ${fmtDate(result.completedAt)} (UTC)` : ' at scan time'}. AI answers change; re-run any time.
      </p>
    </div>
  );
}

// The comparison uses this small subset of the platform styles in its HTML.
export const platformStyles = `
.nqb-page {
  --pp-orange: #F05A28;
  --pp-orange-dark: #B23E13;
  --pp-ink: #14110F;
  --pp-body: #46403B;
  --pp-muted: #6E635A;
  --pp-line: #E7DED6;
  --pp-tint: #FFF8F5;
  --pp-display: var(--font-plus-jakarta), system-ui, sans-serif;
  --pp-font: var(--font-inter), system-ui, sans-serif;
  --pp-mono: var(--font-geist-mono), ui-monospace, monospace;
  background: #fff;
  color: var(--pp-ink);
  font-family: var(--pp-font);
  overflow-x: clip;
  min-height: 100vh;
}
.nqb-page .pp-wrap {
  max-width: 1180px;
  margin-inline: auto;
  padding-inline: 20px;
}
.nqb-page .pp-narrow { max-width: 820px; }
.nqb-page .pp-dotgrid {
  position: relative;
  background-image: radial-gradient(var(--pp-line) 1px, transparent 1px);
  background-size: 26px 26px;
}
.nqb-page .pp-eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  color: var(--pp-orange-dark);
  font: 700 12px/1.5 var(--pp-mono);
  text-transform: uppercase;
}
.nqb-page :is(h1, h2, h3) { font-family: var(--pp-display); }
.nqb-page h1 { font-weight: 800; letter-spacing: -.03em; line-height: 1.05; }
.nqb-page h2 {
  font-weight: 800;
  letter-spacing: -.025em;
  font-size: clamp(26px, 4vw, 42px);
  line-height: 1.1;
}
.nqb-page h3 { font-weight: 700; }
.nqb-page .pp-lead {
  font-size: clamp(16px, 1.8vw, 18.5px);
  line-height: 1.62;
  color: var(--pp-body);
}
.nqb-page .pp-mlabel {
  color: var(--pp-muted);
  font-family: var(--pp-mono);
  letter-spacing: .06em;
}
.nqb-page .pp-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.nqb-page .pp-stat { display: flex; flex-direction: column; }
.nqb-page .pp-stat b {
  font: 800 clamp(28px, 4.4vw, 44px)/1 var(--pp-display);
  letter-spacing: -.03em;
  font-variant-numeric: tabular-nums;
}
.nqb-page .pp-stat span {
  margin-top: 8px;
  padding-top: 8px;
  color: var(--pp-muted);
  font-family: var(--pp-mono);
  line-height: 1.4;
}
.nqb-page .pp-card {
  border: 1px solid var(--pp-line);
  border-radius: 18px;
  padding: 22px;
  background: #fff;
  transition: box-shadow .2s ease, border-color .2s ease;
}
.nqb-page .pp-card:hover {
  box-shadow: 0 18px 40px -28px rgba(20, 17, 15, .4);
  border-color: #E0C8BC;
}
.nqb-page .pp-card p {
  margin-top: 7px;
  line-height: 1.55;
  color: var(--pp-body);
}
.nqb-page .pp-table {
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  text-align: left;
}
.nqb-page .pp-table thead tr { border-bottom: 1px solid var(--pp-line); }
.nqb-page .pp-table thead th {
  padding-block: 12px;
  color: var(--pp-muted);
  font-family: var(--pp-mono);
  letter-spacing: .08em;
  text-transform: uppercase;
}
.nqb-page .pp-table td {
  padding-block: 16px;
  color: var(--pp-body);
  vertical-align: top;
  border-bottom: 1px solid #F0EAE4;
}
.nqb-page .pp-table .me td { background: var(--pp-tint); }
.nqb-page .pp-sec {
  padding: clamp(56px, 8vh, 96px) 0;
  border-top: 1px solid var(--pp-line);
}
.nqb-page .pp-sec.tint { background: var(--pp-tint); }
.nqb-page .pp-ctagrid {
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: clamp(32px, 5vw, 56px);
  align-items: center;
}
.nqb-page .pp-cta { display: flex; flex-direction: column; }
.nqb-page .pp-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background-color: var(--pp-orange-dark);
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(15, 15, 18, .1);
}
.nqb-page .pp-primary:hover {
  background-color: #9A3510;
  color: #fff;
}
.nqb-page .founder {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid var(--pp-line);
}
.nqb-page :is(.founder b, .pp-proof .top b) {
  display: block;
  font-family: var(--pp-display);
  font-weight: 700;
  line-height: 1.2;
}
.nqb-page :is(.founder span, .pp-proof .top span) {
  display: block;
  margin-top: 3px;
  color: var(--pp-muted);
  font-family: var(--pp-mono);
}
.nqb-page .pp-proof {
  background: #fff;
  border: 1px solid var(--pp-line);
  border-radius: 20px;
  padding: 32px 28px;
  box-shadow: 0 16px 40px rgba(20, 17, 15, .06);
}
.nqb-page .pp-proof .top { margin-bottom: 18px; }
.nqb-page .pp-proof .top b { font-size: 15px; }
.nqb-page .pp-proof blockquote {
  margin: 0 0 18px;
  color: var(--pp-body);
  font-style: italic;
  line-height: 1.6;
}
.nqb-page .pp-proof .rate {
  padding-top: 16px;
  border-top: 1px solid var(--pp-line);
  font-size: 12.5px;
}
@media (max-width: 900px) {
  .nqb-page .pp-ctagrid { grid-template-columns: 1fr; gap: 36px; }
}
@media (max-width: 720px) {
  .nqb-page .pp-stats { grid-template-columns: repeat(2, 1fr); row-gap: 26px; }
}
@media (prefers-reduced-motion: reduce) {
  .nqb-page *, .nqb-page *::before, .nqb-page *::after {
    transition-duration: .001ms !important;
    scroll-behavior: auto !important;
  }
}
`;

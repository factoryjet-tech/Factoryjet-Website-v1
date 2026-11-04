// Inline the route stylesheet to remove its blocking request.
// Keep monospace label metrics stable while the existing font loads.
export default String.raw`
.aiAgentPage.auPage.au-xero-visual-11 {
  --font-geist-mono: "Geist Mono", ui-monospace, Consolas, monospace;
}

.aiAgentPage.auPage.au-xero-visual-11 .hero-grid {
  align-items: start;
}

.aiAgentPage.auPage.au-xero-visual-11 .hero {
  padding-block: 32px 56px;
}

.aiAgentPage.auPage.au-xero-visual-11 .hero h1 {
  max-width: none;
  font-size: clamp(36px, 3.6vw, 48px);
  min-height: 4.48em;
  line-height: 1.12;
}

.aiAgentPage.auPage.au-xero-visual-11 .hero .eyebrow {
  min-height: 20px;
  line-height: 20px;
}

.aiAgentPage.auPage.au-xero-visual-11 :is(.hero-copy, .specpanel, .au-panel, .byline > *, .tablewrap) {
  min-width: 0;
  max-width: 100%;
}

.aiAgentPage.auPage.au-xero-visual-11 :is(.fact p, .cap p, .plat-build, .au-note, .tablenote, .au-split > div > p, .tnode p, .ans, .ans p, .agentdir-l, .ledgercell .v, .trigrows .m, .trigrows .n, .faqintro p, .faq-ask p) {
  font-size: 16px;
  line-height: 1.7;
}

.aiAgentPage.auPage.au-xero-visual-11 :is(.eyebrow, .factlabel, .capid, .specpanel-bar, .specpanel-foot, .sys > span, .specrow .idx, .specrow .tag, .ledgercell .k, .byline .upd, .trigrows .t, .faq-nav-count, .faq-category, .qid, .agentdir-more, .faqsrc) {
  font-size: 12px;
}

.aiAgentPage.auPage.au-xero-visual-11 :is(.byline .who, .qtext, .agentdir-t, .refs a, .btn) {
  font-size: 16px;
}

.aiAgentPage.auPage.au-xero-visual-11 .btn {
  max-width: 100%;
}

.aiAgentPage.auPage.au-xero-visual-11 .specpanel-body {
  padding: 20px;
  gap: 16px;
}

.aiAgentPage.auPage.au-xero-visual-11 .specrow {
  width: calc(100% - 6px);
  min-height: 110px;
  grid-template-columns: 36px minmax(0, 1fr);
  gap: 5px 12px;
  margin-left: 0;
}

@media (prefers-reduced-motion: no-preference) {
  .aiAgentPage.auPage.au-xero-visual-11 .specrow {
    animation-name: au-xero-workflow-step;
  }

  @keyframes au-xero-workflow-step {
    0%, 22% { transform: translateX(4px); }
    25%, 100% { transform: translateX(0); }
  }
}

.aiAgentPage.auPage.au-xero-visual-11 .specrow .idx {
  grid-column: 2;
  grid-row: 1;
  overflow-wrap: anywhere;
}

.aiAgentPage.auPage.au-xero-visual-11 .specrow .title {
  grid-column: 2;
  grid-row: 2;
  font-size: 16px;
}

.aiAgentPage.auPage.au-xero-visual-11 .specrow .tag {
  grid-column: 2;
  grid-row: 3;
  justify-self: start;
  margin-top: 3px;
}

.aiAgentPage.auPage.au-xero-visual-11 .specrow .workflow-icon {
  grid-column: 1;
  grid-row: 1 / span 3;
}

.aiAgentPage.auPage.au-xero-visual-11 :is(.workflow-toggle, .workflow-replay) {
  min-width: 44px;
  min-height: 44px;
}

.aiAgentPage.auPage.au-xero-visual-11 .au-xero-media-head {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  gap: clamp(28px, 4vw, 56px);
  align-items: start;
  margin-bottom: 36px;
}

.aiAgentPage.auPage.au-xero-visual-11 #gaps .section-head {
  max-width: none;
  margin-bottom: 0;
}

.aiAgentPage.auPage.au-xero-visual-11 .au-xero-photo {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--accent-wash);
  box-shadow: 0 2px 4px rgb(20 17 15 / 3%), 0 18px 38px -28px rgb(20 17 15 / 24%);
}

.aiAgentPage.auPage.au-xero-visual-11 .au-xero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.aiAgentPage.auPage.au-xero-visual-11 .au-xero-side-media {
  grid-column: 1;
  grid-row: 2;
  display: grid;
  gap: 24px;
  align-self: start;
}

.aiAgentPage.auPage.au-xero-visual-11 #payouts .au-panel {
  position: static;
}

.aiAgentPage.auPage.au-xero-visual-11 #how-it-runs .head-media {
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  align-items: start;
}

.aiAgentPage.auPage.au-xero-visual-11 .au-xero-process-media {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(28px, 4vw, 56px);
  align-items: start;
}

.aiAgentPage.auPage.au-xero-visual-11 #how-it-runs .timeline.timeline-3 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.aiAgentPage.auPage.au-xero-visual-11 #how-it-runs :is(.timeline::before, .tnode::before) {
  display: none;
}

.aiAgentPage.auPage.au-xero-visual-11 .tnode:last-child .idx {
  background: var(--accent-text);
  border-color: var(--accent-text);
}

.aiAgentPage.auPage.au-xero-visual-11 .tablewrap {
  width: 100%;
  overscroll-behavior-inline: contain;
}

.aiAgentPage.auPage.au-xero-visual-11 :is(button, input, summary, a.btn, .faq-catnav a, .refs a) {
  min-height: 44px;
}

.aiAgentPage.auPage.au-xero-visual-11 :is(p a, .ledgercell .k a, .hero-alt a, .crumbs a, .ans a) {
  display: inline-flex;
  align-items: center;
  min-width: 44px;
  min-height: 44px;
  max-width: 100%;
  vertical-align: baseline;
  overflow-wrap: anywhere;
}

.aiAgentPage.auPage.au-xero-visual-11 :is(button, input, a, summary):focus-visible {
  outline: 2px solid var(--accent-text);
  outline-offset: 4px;
}

.aiAgentPage.auPage.au-xero-visual-11 .hero-copy button[type='submit'] {
  font-size: 16px;
  color: white;
  background: var(--accent-text);
}

.aiAgentPage.auPage.au-xero-visual-11 .crumbs {
  padding-top: 8px;
}

.aiAgentPage.auPage.au-xero-visual-11 .crumbs a {
  opacity: 1;
}

@media (min-width: 1025px) {
  .aiAgentPage.auPage.au-xero-visual-11 .au-xero-process-media > .au-xero-photo {
    position: sticky;
    top: 112px;
  }
}

@media (max-width: 820px) {
  .aiAgentPage.auPage.au-xero-visual-11 :is(th, td) {
    font-size: 16px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .hero h1 {
    font-size: clamp(30px, 5vw, 42px);
  }

  .aiAgentPage.auPage.au-xero-visual-11 :is(.au-xero-media-head, .au-xero-process-media) {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 #how-it-runs .head-media {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
    margin-bottom: 28px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .au-xero-side-media {
    margin-top: 28px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .trigrows li {
    grid-template-columns: minmax(0, 1fr);
  }

  .aiAgentPage.auPage.au-xero-visual-11 .trigrows .t {
    grid-column: 1;
    grid-row: auto;
    justify-self: start;
    text-align: left;
    max-width: 100%;
  }

  .aiAgentPage.auPage.au-xero-visual-11 #how-it-runs .timeline.timeline-3 {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 560px) {
  .aiAgentPage.auPage.au-xero-visual-11 .hero .eyebrow {
    min-height: 40px;
    line-height: 20px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 #au-content .lead {
    font-size: 16px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 #au-content [data-hero-inline-form] input:is([type='text'], [type='email'], [type='tel']) {
    font-size: 16px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .hero {
    padding-block: 20px 44px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .hero h1 {
    font-size: clamp(25px, 6.1vw, 30px);
    min-height: 4.48em;
    margin-block: 14px 18px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .hero .lead {
    font-size: 16px;
    line-height: 1.55;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .hero-copy form {
    margin-top: 16px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 h2 {
    font-size: clamp(26px, 6.4vw, 32px);
    line-height: 1.16;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .byline {
    display: grid;
    grid-template-columns: 36px minmax(0, 1fr);
    gap: 8px 12px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .byline .upd {
    grid-column: 2;
    margin-left: 0;
    text-align: left;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .au-panel {
    padding: 20px;
  }

  .aiAgentPage.auPage.au-xero-visual-11 :is(.ctas, .ctas .btn) {
    max-width: 100%;
  }

  .aiAgentPage.auPage.au-xero-visual-11 .btn {
    gap: 12px;
    padding-inline: 16px;
    white-space: normal;
  }
}
`;

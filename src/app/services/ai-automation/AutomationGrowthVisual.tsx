/** An illustrative input → decision → action / review route; no client data or UI. */
export default function AutomationGrowthVisual() {
  return (
    <svg className="ag-workflow-visual" viewBox="0 0 440 112" fill="none" aria-hidden="true" focusable="false">
      <path d="M70 56H185M225 56H265Q277 56 277 44V30H347M277 56V82H347" stroke="#E7DED6" strokeWidth="2" />
      <path d="M70 56H185M225 56H265Q277 56 277 44V30H347" stroke="#C94A1A" strokeWidth="1.5" />
      <rect x="20" y="28" width="50" height="56" rx="6" fill="white" stroke="#E7DED6" />
      <path d="M34 43H55M34 52H55M34 61H48M34 70H52" stroke="#6E635A" strokeWidth="2" strokeLinecap="round" />
      <path d="M205 35L226 56L205 77L184 56L205 35Z" fill="#FFF8F5" stroke="#C94A1A" strokeWidth="1.5" />
      <path d="M200 56L204 60L211 51" stroke="#C94A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="347" y="11" width="62" height="38" rx="6" fill="#FFF8F5" stroke="#C94A1A" />
      <path d="M365 31L373 38L388 23" stroke="#C94A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="347" y="64" width="62" height="38" rx="6" fill="white" stroke="#E7DED6" />
      <circle cx="378" cy="77" r="5" stroke="#46403B" strokeWidth="1.5" />
      <path d="M368 94V92C368 87 372 84 378 84C384 84 388 87 388 92V94" stroke="#46403B" strokeWidth="1.5" />
      <path d="M171 52L176 56L171 60M334 26L339 30L334 34M334 78L339 82L334 86" stroke="#C94A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="ag-flow-packet" cx="83" cy="56" r="3" fill="#F05A28" />
    </svg>
  );
}

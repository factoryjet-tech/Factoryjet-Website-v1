/** A private staging copy is verified before release; a restore path stays available. */
export default function WebsiteMaintenanceStagingVisual() {
  return (
    <svg className="wm-staging-visual" viewBox="0 0 480 320" fill="none" role="img" aria-label="A private staging website is tested before an approved update reaches the live website, with a backup available for restore">
      <rect width="480" height="320" rx="16" fill="#FFF8F5" />
      <g stroke="#E7DED6" strokeWidth="1.5"><path d="M28 80h424M28 160h424M28 240h424M80 28v264M160 28v264M240 28v264M320 28v264M400 28v264" strokeDasharray="2 8" /></g>
      <g stroke="#6E635A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="32" y="70" width="148" height="116" rx="10" fill="white" />
        <path d="M32 92h148" stroke="#E7DED6" />
        <circle cx="45" cy="82" r="2" fill="#D8CCC0" stroke="none" /><circle cx="54" cy="82" r="2" fill="#D8CCC0" stroke="none" />
        <rect x="47" y="108" width="58" height="44" rx="4" fill="#E7DED6" stroke="none" /><path d="M118 111h45M118 125h34M118 139h40M47 168h114" />
        <rect x="126" y="40" width="32" height="28" rx="5" fill="white" stroke="#C94A1A" /><path d="M134 40v-6a8 8 0 0 1 16 0v6m-8 12v5" stroke="#C94A1A" />
        <path d="M180 128h32m56 0h32m-9-6 9 6-9 6" stroke="#F05A28" strokeWidth="2" />
        <circle cx="240" cy="128" r="25" fill="#F05A28" stroke="none" /><path d="m228 128 8 8 17-20" stroke="white" strokeWidth="2.5" />
        <rect x="300" y="70" width="148" height="116" rx="10" fill="white" stroke="#F05A28" />
        <path d="M300 92h148" stroke="#E7DED6" />
        <circle cx="313" cy="82" r="2" fill="#F05A28" stroke="none" /><circle cx="322" cy="82" r="2" fill="#D8CCC0" stroke="none" />
        <rect x="315" y="108" width="58" height="44" rx="4" fill="#FFF8F5" stroke="#F05A28" /><path d="M386 111h45M386 125h34M386 139h40M315 168h114" />
        <path d="M106 186v54q0 12 12 12h80m84 0h80q12 0 12-12v-54" stroke="#D8CCC0" strokeDasharray="4 5" />
        <path d="M198 234v43c0 8 84 8 84 0v-43" fill="white" />
        <ellipse cx="240" cy="234" rx="42" ry="10" fill="white" />
        <path d="M198 251c0 13 84 13 84 0M198 266c0 13 84 13 84 0" stroke="#E7DED6" />
        <path d="M222 215a21 21 0 0 1 36-9m0-9v9h-9" stroke="#C94A1A" strokeWidth="2" />
      </g>
    </svg>
  );
}

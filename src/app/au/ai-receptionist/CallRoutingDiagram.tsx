/* Text-free schematic: an incoming call branches to a booking or a person.
   Server rendered. The diagram describes a workflow, not measured outcomes. */
export default function CallRoutingDiagram() {
  return (
    <svg viewBox="0 0 960 320" role="img" aria-label="An incoming call follows agreed rules to either a calendar booking or a person with a written summary" className="rec-routing">
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="38" y="94" width="170" height="132" rx="12" fill="white" />
        <path d="M86 124h19l8 20-12 8c8 15 20 26 36 33l7-12 21 8v17c-45 5-83-29-79-74Z" />
        <path d="M145 119c12 2 21 11 23 23m-23-10c5 1 9 5 10 10" />
        <path d="M209 160h91m-9-7 9 7-9 7" />
        <rect x="308" y="101" width="182" height="118" rx="12" fill="white" />
        <path d="M337 134h56m-56 24h90m-90 24h70" stroke="var(--line-strong)" />
        <path d="m435 153 8 8 16-19" stroke="var(--accent)" strokeWidth="3" />
        <path d="M490 160h69V82h66m-9-7 9 7-9 7M559 160v79h66m-9-7 9 7-9 7" />
        <rect x="633" y="34" width="132" height="96" rx="10" fill="white" />
        <path d="M652 54h94v57h-94zm0 17h94m-75-25v15m53-15v15" />
        <rect x="680" y="82" width="18" height="16" rx="2" fill="var(--accent)" stroke="var(--accent)" />
        <rect x="633" y="189" width="270" height="98" rx="10" fill="white" />
        <circle cx="672" cy="221" r="12" />
        <path d="M650 260v-9a22 22 0 0 1 44 0v9m35-41h120m-120 16h104m-104 16h72" />
      </g>
      <circle cx="558" cy="160" r="5" fill="var(--accent)" />
    </svg>
  );
}

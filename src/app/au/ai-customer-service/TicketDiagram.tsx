/* Small, text-free system diagrams. Existing adjacent copy explains each job. */
export function TicketJobDiagram({ job }: { job: number }) {
  return (
    <svg viewBox="0 0 440 156" aria-hidden="true" className="acs-job-diagram">
      <g fill="white" stroke="var(--line-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {job === 0 && <><path d="M65 31h182v69H98l-33 23Z" /><path d="M104 54h90m-90 20h61" fill="none" /><path d="M206 69h168v66h-31l-24 17v-17H206Z" fill="var(--accent-wash)" stroke="var(--accent)" /><path d="M232 95h114m-114 18h72" stroke="var(--accent)" /></>}
        {job === 1 && <><rect x="68" y="19" width="204" height="118" rx="8" /><path d="M94 47h91m-91 21h141m-141 20h111m-111 21h74" /><rect x="257" y="52" width="95" height="82" rx="8" fill="var(--accent-wash)" stroke="var(--accent)" /><path d="m280 96 13 13 34-38" stroke="var(--accent)" strokeWidth="3" fill="none" /></>}
        {job === 2 && <><rect x="35" y="50" width="84" height="58" rx="7" /><path d="M119 79h85V31h75m-75 48h75m-75 0v48h75" fill="none" stroke="var(--accent)" /><rect x="283" y="11" width="105" height="40" rx="6" /><rect x="283" y="59" width="105" height="40" rx="6" fill="var(--accent-wash)" stroke="var(--accent)" /><rect x="283" y="107" width="105" height="40" rx="6" /><path d="M51 71h46m-46 17h29" /></>}
        {job === 3 && <><rect x="44" y="37" width="147" height="83" rx="8" /><path d="M67 63h99m-99 18h82m-82 18h54" /><path d="M192 79h73m-11-9 11 9-11 9" fill="none" stroke="var(--accent)" /><circle cx="326" cy="51" r="21" fill="var(--accent-wash)" stroke="var(--accent)" /><path d="M284 129v-16a42 42 0 0 1 84 0v16" fill="var(--accent-wash)" stroke="var(--accent)" /></>}
      </g>
    </svg>
  );
}

export default function TicketFlowDiagram() {
  return (
    <svg viewBox="0 0 960 300" role="img" aria-label="Chat and email tickets are checked against approved answers and routed to either a reply or staff approval" className="acs-ticket-flow">
      <g fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M45 56h150v83H79l-34 25Z" /><path d="M70 81h98m-98 23h73" stroke="var(--line-strong)" />
        <rect x="45" y="185" width="150" height="78" rx="8" /><path d="m45 185 75 50 75-50" />
        <path d="M195 98h56v66h59m-115 60h56v-60" fill="none" />
        <rect x="320" y="77" width="212" height="174" rx="10" /><path d="M349 105h122m-122 27h156m-156 27h122m-122 27h156m-156 27h84" stroke="var(--line-strong)" />
        <path d="M532 163h66V87h58m-58 76v71h58" fill="none" />
        <path d="M666 41h185v88H699l-33 23Z" fill="var(--accent-wash)" stroke="var(--accent)" /><path d="m702 83 13 13 30-35m22 9h58m-58 21h40" stroke="var(--accent)" fill="none" />
        <rect x="666" y="182" width="242" height="90" rx="10" /><circle cx="704" cy="208" r="12" /><path d="M682 251v-8a22 22 0 0 1 44 0v8m26-42h122m-122 20h105m-105 20h70" />
      </g>
      <circle cx="597" cy="163" r="5" fill="var(--accent)" />
    </svg>
  );
}

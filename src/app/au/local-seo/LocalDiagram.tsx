/** Schematic workflows, without fabricated rankings, reviews or an office pin. */
export function LocalCoverageDiagram() {
  return <svg className="local-coverage-diagram" viewBox="0 0 640 210" role="img" aria-label="Illustrative service-area map with several measurement locations around a business profile" fill="none">
    <g stroke="#D8DBD7" strokeWidth="2"><path d="M0 42h640M0 105h640M0 168h640M80 0v210M200 0v210M320 0v210M440 0v210M560 0v210" /><path d="M0 200L420 0M200 210L640 10" strokeWidth="14" stroke="white" /></g>
    <ellipse cx="320" cy="105" rx="208" ry="78" fill="#FFF0E7" fillOpacity=".7" stroke="#FC6927" strokeDasharray="5 8" />
    {[ [200,42],[440,42],[80,105],[560,105],[200,168],[440,168] ].map(([x,y])=><g key={`${x}-${y}`}><circle cx={x} cy={y} r="9" fill="white" stroke="#697A77" strokeWidth="2" /><path d={`M${x-3} ${y}h6M${x} ${y-3}v6`} stroke="#697A77" /></g>)}
    <rect x="276" y="68" width="88" height="74" rx="8" fill="white" stroke="#FC6927" strokeWidth="2" />
    <path d="M296 100h48M296 112h48M305 125h30M292 92l8-12h40l8 12" stroke="#172B35" strokeWidth="2" />
  </svg>;
}

export function LocalWorkDiagram({ step }: { step: number }) {
  const paths = [
    <g key="profile"><rect x="135" y="20" width="128" height="110" rx="7" /><circle cx="172" cy="55" r="13" /><path d="M195 47h43M195 59h30M152 84h94M152 100h65M280 66l10 10 20-23" /></g>,
    <g key="review"><rect x="85" y="15" width="67" height="120" rx="9" /><path d="M103 45h30M103 60h22M105 117h26M174 74h33" /><rect x="230" y="35" width="133" height="83" rx="7" /><path d="M249 57h93M249 75h72M249 94h48" /></g>,
    <g key="directory"><rect x="158" y="46" width="106" height="59" rx="6" /><path d="M178 66h65M178 84h45M155 70H90M264 70h65M211 46V17M211 105v28" /><circle cx="75" cy="70" r="15" /><circle cx="344" cy="70" r="15" /><circle cx="211" cy="12" r="10" /><circle cx="211" cy="139" r="10" /></g>,
    <g key="pages"><rect x="76" y="18" width="88" height="111" rx="5" /><rect x="192" y="34" width="72" height="89" rx="5" /><rect x="293" y="34" width="72" height="89" rx="5" /><path d="M91 39h58M91 57h44M91 75h56M164 72h28M264 72h29M207 54h42M207 73h33M308 54h42M308 73h33" /></g>,
    <g key="website"><rect x="85" y="25" width="265" height="106" rx="7" /><path d="M85 46h265M102 60h105v55H102zM229 67h99M229 83h82M229 100h58" /><circle cx="106" cy="36" r="3" /><circle cx="119" cy="36" r="3" /><circle cx="132" cy="36" r="3" /></g>,
    <g key="measure"><path d="M93 27v106h258M108 48h224M108 76h224M108 104h224M148 33v87M208 33v87M268 33v87" stroke="#CFD8D3" /><circle cx="148" cy="48" r="10" /><circle cx="268" cy="76" r="10" /><circle cx="208" cy="104" r="10" /><path d="M319 43l14 14-14 14" /></g>
  ];
  return <svg className="local-work-diagram" viewBox="0 0 430 150" aria-hidden="true" fill="none"><g stroke="#B74918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{paths[step]}</g></svg>;
}

export function LocalReviewDiagram() {
  return <svg className="local-review-diagram" viewBox="0 0 640 420" role="img" aria-label="Illustrative review process: the same direct review link is sent to every customer, followed by an owner reply" fill="none">
    <rect x="43" y="109" width="120" height="218" rx="16" fill="white" stroke="#172B35" strokeWidth="3" />
    <path d="M80 128h45M79 306h48M68 163h67M68 181h54M68 199h67" stroke="#CED5D8" strokeWidth="4" strokeLinecap="round" />
    <rect x="66" y="224" width="75" height="35" rx="5" fill="#FFF0E7" stroke="#FC6927" /><path d="M88 241h30" stroke="#FC6927" strokeWidth="3" />
    <path d="M174 218h54M212 206l12 12-12 12" stroke="#FC6927" strokeWidth="3" />
    <rect x="243" y="82" width="348" height="135" rx="8" fill="white" stroke="#CED5D8" strokeWidth="2" />
    <circle cx="277" cy="115" r="14" fill="#FFF0E7" /><path d="M307 107h175M307 123h124M266 159h299M266 179h251" stroke="#CED5D8" strokeWidth="5" strokeLinecap="round" />
    <path d="M267 238v43h24" stroke="#FC6927" strokeWidth="2" />
    <rect x="300" y="254" width="291" height="84" rx="7" fill="#FFF0E7" stroke="#FC6927" /><path d="M323 277h208M323 295h166M323 313h195" stroke="#D4B19F" strokeWidth="4" strokeLinecap="round" />
  </svg>;
}

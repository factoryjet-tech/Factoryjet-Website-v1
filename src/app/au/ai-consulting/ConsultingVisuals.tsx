/* Illustrative working documents and decisions, never client evidence or scores. */
export function DecisionWorkshopVisual() {
  return <svg className="consult-workshop" viewBox="0 0 760 270" role="img" aria-label="Working ideas are reviewed, narrowed to a short list and recorded as a written decision with a governance check" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="14" y="35" width="173" height="190" rx="7" fill="white" />
    <path d="M31 52h68M31 65h44" stroke="#B9ABA1" />
    <rect x="31" y="88" width="58" height="45" rx="3" fill="#FFF8F5" /><rect x="106" y="88" width="58" height="45" rx="3" fill="#FFF8F5" />
    <rect x="31" y="153" width="58" height="45" rx="3" fill="#FFF8F5" /><rect x="106" y="153" width="58" height="45" rx="3" fill="#FFF8F5" />
    <path d="M43 101h31M43 114h20M118 101h31M118 114h20M43 168h31M43 181h20M118 168h31M118 181h20" stroke="#B9ABA1" />
    <path d="M204 133h48m-9-9 9 9-9 9" stroke="#B23E13" />
    <circle cx="294" cy="111" r="30" fill="white" /><path d="m316 135 25 25M278 101h32M278 112h32M278 123h20" stroke="#B23E13" />
    <path d="M358 133h46m-9-9 9 9-9 9" stroke="#B23E13" />
    <rect x="424" y="44" width="78" height="64" rx="4" fill="#FFF8F5" stroke="#B23E13" /><rect x="424" y="119" width="78" height="64" rx="4" fill="#FFF8F5" stroke="#B23E13" /><rect x="424" y="194" width="78" height="42" rx="4" fill="white" />
    <path d="M439 63h47M439 78h34M439 137h47M439 152h34M439 211h47" stroke="#B9ABA1" />
    <path d="M522 133h45m-9-9 9 9-9 9" stroke="#B23E13" />
    <path d="M587 35h117l38 38v162H587z" fill="white" /><path d="M704 35v38h38M605 58h63M605 87h113" stroke="#B9ABA1" />
    <path d="M666 103v25m-40 0h80M626 128v20M706 128v20" stroke="#B23E13" />
    <rect x="609" y="150" width="34" height="31" rx="3" fill="#FFF8F5" /><rect x="687" y="150" width="36" height="31" rx="3" fill="#FFF8F5" />
    <path d="M617 158h18M617 167h13M695 165h20M705 156v19" stroke="#B23E13" />
    <path d="M643 206l11 10 24-26" stroke="#B23E13" strokeWidth="3" />
  </svg>;
}

export function BuyBuildVisual() {
  return <svg className="consult-fork" viewBox="0 0 400 160" role="img" aria-label="A reviewed use case branches to an existing tool or a custom system, with the choice recorded" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="14" y="48" width="75" height="64" rx="4" fill="white" /><path d="M27 63h48M27 77h48M27 92h30" stroke="#B9ABA1" />
    <path d="M107 80h62m-9-9 9 9-9 9M185 80h33V40h53M218 80v47h53" stroke="#B23E13" />
    <rect x="281" y="17" width="100" height="49" rx="4" fill="white" /><path d="M293 29h32M293 44h76M339 29h30" stroke="#B9ABA1" />
    <rect x="281" y="99" width="29" height="42" rx="3" fill="#FFF8F5" /><rect x="351" y="99" width="29" height="42" rx="3" fill="#FFF8F5" /><path d="M310 120h41M320 112v16M338 112v16" stroke="#B23E13" />
  </svg>;
}

export function ConsultingJob({ job }: { job: number }) {
  return <svg className="consult-job" viewBox="0 0 300 120" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
    {job===0 && <><circle cx="64" cy="44" r="17" fill="white" /><path d="M33 98V87a31 31 0 0 1 62 0M48 75l16 13 17-13" /><rect x="128" y="15" width="136" height="81" rx="6" fill="white" /><path d="M144 35h73M144 51h103M144 67h65" stroke="#B9ABA1" /><path d="m142 96-10 13 29-13" /></>}
    {job===1 && <><rect x="16" y="38" width="68" height="42" rx="3" fill="white" /><rect x="116" y="38" width="68" height="42" rx="3" fill="#FFF8F5" /><rect x="216" y="38" width="68" height="42" rx="3" fill="white" /><path d="M84 59h32M184 59h32M48 50h17M48 64h17M135 52h32M235 52h32" stroke="#B23E13" /><path d="M249 80v27H50V80" stroke="#B9ABA1" /></>}
    {job===2 && <><rect x="20" y="29" width="57" height="55" rx="3" fill="white" /><rect x="93" y="29" width="57" height="55" rx="3" fill="white" /><rect x="166" y="29" width="57" height="55" rx="3" fill="#FFF8F5" stroke="#B23E13" /><path d="M37 46h23M37 59h15M110 46h23M110 59h15M183 46h23M183 59h15" stroke="#B9ABA1" /><path d="m243 59 11 11 25-29" stroke="#B23E13" strokeWidth="3" /></>}
    {job===3 && <><ellipse cx="79" cy="31" rx="41" ry="13" fill="white" /><path d="M38 31v58c0 18 82 18 82 0V31M38 61c0 18 82 18 82 0" /><path d="M144 62h28m-8-8 8 8-8 8" stroke="#B23E13" /><circle cx="217" cy="49" r="28" fill="#FFF8F5" /><path d="m238 70 26 25M204 40h26M204 53h18" stroke="#B23E13" /></>}
    {job===4 && <><path d="M49 18h72l26 27v58H49z" fill="white" /><path d="M121 18v27h26M65 44h32M65 59h64M65 73h64M65 88h42" stroke="#B9ABA1" /><path d="m227 19 37 14v31c0 18-17 31-37 40-20-9-37-22-37-40V33z" fill="#FFF8F5" stroke="#B23E13" /><path d="m210 60 12 11 23-28" stroke="#B23E13" /></>}
    {job===5 && <><rect x="18" y="39" width="55" height="46" rx="3" fill="white" /><path d="M88 62h38V25h42M126 62v36h42" stroke="#B23E13" /><rect x="179" y="7" width="101" height="40" rx="3" fill="#FFF8F5" /><rect x="179" y="80" width="27" height="32" rx="3" fill="white" /><rect x="254" y="80" width="26" height="32" rx="3" fill="white" /><path d="M206 96h48M230 86v20M191 20h77M191 32h49" stroke="#B9ABA1" /></>}
    {job===6 && <><rect x="31" y="20" width="88" height="83" rx="4" fill="white" /><path d="M47 37h56M47 53h37M47 69h56" stroke="#B9ABA1" /><path d="M139 61h35m-8-8 8 8-8 8" stroke="#B23E13" /><circle cx="228" cy="61" r="35" fill="#FFF8F5" /><path d="m211 61 11 11 25-28" stroke="#B23E13" strokeWidth="3" /></>}
    {job===7 && <><rect x="24" y="21" width="142" height="78" rx="5" fill="white" /><path d="M24 41h142M40 33h14M72 33h14M104 33h14M42 58h89M42 73h60" stroke="#B9ABA1" /><path d="M183 61h20m-7-7 7 7-7 7" stroke="#B23E13" /><circle cx="249" cy="47" r="17" fill="#FFF8F5" /><path d="M225 96V88a24 24 0 0 1 48 0M233 82l16 11 16-11" stroke="#B23E13" /></>}
  </svg>;
}

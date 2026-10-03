/* Illustrative structure and review boundaries, no clients, case outcomes or rankings. */
export function LegalIntakeVisual() {
 return <svg className="legal-intake-visual" viewBox="0 0 660 200" role="img" aria-label="Practice-area pages lead to a short enquiry, which is routed to a solicitor for review" fill="none" stroke="currentColor" strokeWidth="2">
 <rect x="15" y="30" width="132" height="145" rx="6" fill="white"/><path d="M15 55h132M32 74h99M32 88h73" stroke="#B9ABA1"/><rect x="32" y="108" width="40" height="47" rx="3" fill="#FFF8F5"/><rect x="88" y="108" width="40" height="47" rx="3" fill="#FFF8F5"/>
 <path d="M167 100h57m-10-10 10 10-10 10" stroke="#B23E13"/>
 <rect x="246" y="43" width="130" height="120" rx="6" fill="white"/><rect x="261" y="62" width="100" height="15" rx="3" stroke="#B9ABA1"/><rect x="261" y="86" width="100" height="15" rx="3" stroke="#B9ABA1"/><path d="M261 118h62" stroke="#B9ABA1"/><rect x="261" y="136" width="100" height="10" rx="3" fill="#F05A28" stroke="none"/>
 <path d="M396 100h60m-10-10 10 10-10 10" stroke="#B23E13"/>
 <rect x="481" y="35" width="162" height="130" rx="7" fill="#FFF8F5"/><circle cx="562" cy="77" r="18"/><path d="M528 138v-19a34 34 0 0 1 68 0v19M509 149h106"/><path d="M488 177h148" stroke="#F05A28" strokeWidth="5"/>
 </svg>;
}
export function LegalJob({ job }: { job: number }) {
 return <svg className="legal-job" viewBox="0 0 320 110" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
 {job===0 && <>{[44,126,208].map(x=><g key={x}><rect x={x} y="12" width="66" height="87" rx="4" fill="white"/><path d={`M${x+11} 28h42M${x+11} 42h42M${x+11} 55h26`} stroke="#B9ABA1"/><rect x={x+11} y="76" width="42" height="8" fill="#F05A28" stroke="none"/></g>)}</>}
 {job===1 && <><path d="M32 87h256M55 50h56v37H55zM208 35h56v52h-56z" stroke="#B9ABA1"/><path d="M161 12a17 17 0 0 0-17 17c0 13 17 31 17 31s17-18 17-31a17 17 0 0 0-17-17Z" fill="#FFF8F5" stroke="#B23E13"/><circle cx="161" cy="29" r="5"/></>}
 {job===2 && <><rect x="39" y="15" width="166" height="76" rx="4" fill="white"/><path d="M39 32h166M54 46h94M54 58h62M54 73h111" stroke="#B9ABA1"/><rect x="233" y="8" width="44" height="94" rx="6" fill="#FFF8F5"/><path d="M245 26h20M245 40h20M245 55h20" stroke="#B9ABA1"/></>}
 {job===3 && <><rect x="40" y="16" width="78" height="79" rx="4" fill="white"/><path d="M52 34h54M52 48h54M52 62h29" stroke="#B9ABA1"/><path d="M138 54h40m-8-8 8 8-8 8" stroke="#B23E13"/><rect x="206" y="44" width="54" height="44" rx="5" fill="#FFF8F5"/><path d="M218 44V31a15 15 0 0 1 30 0v13M233 60v11"/></>}
 {job===4 && <><rect x="38" y="14" width="97" height="86" rx="4" fill="white"/><path d="M50 31h72M50 45h72M50 59h42" stroke="#B9ABA1"/><path d="M153 54h43m-8-8 8 8-8 8" stroke="#B23E13"/><path d="M215 22h70v56h-44l-20 13V78h-6z" fill="#FFF8F5"/><path d="M229 40h42M229 54h27" stroke="#B9ABA1"/></>}
 {job===5 && <><rect x="47" y="14" width="225" height="84" rx="4" fill="white"/><path d="M67 37h72M67 57h72M67 78h72" stroke="#B9ABA1"/><path d="M170 37h80M170 57h80M170 78h80" stroke="#B23E13"/><circle cx="155" cy="37" r="3"/><circle cx="155" cy="57" r="3"/><circle cx="155" cy="78" r="3"/></>}
 </svg>;
}

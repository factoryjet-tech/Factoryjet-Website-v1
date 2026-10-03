/* A work sequence, not a chart of promised traffic or rankings. */
export function BuyingOrderVisual() {
 return <svg className="buying-order-visual" viewBox="0 0 660 180" role="img" aria-label="Fix the website foundation, establish local presence, build individual service pages, then connect genuine mentions" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M110 88h55m-10-10 10 10-10 10M274 88h55m-10-10 10 10-10 10M438 88h55m-10-10 10 10-10 10" stroke="#B23E13"/>
  <rect x="12" y="34" width="98" height="105" rx="6" fill="white"/><path d="M12 57h98M28 74h66M28 88h40M28 105h66" stroke="#B9ABA1"/><path d="M12 150h98" stroke="#F05A28" strokeWidth="5"/>
  <rect x="177" y="34" width="98" height="105" rx="6" fill="#FFF8F5"/><path d="M226 62a18 18 0 0 0-18 18c0 15 18 35 18 35s18-20 18-35a18 18 0 0 0-18-18Z" stroke="#B23E13"/><circle cx="226" cy="80" r="5"/>
  <rect x="340" y="29" width="75" height="105" rx="4" fill="white"/><rect x="358" y="45" width="75" height="105" rx="4" fill="white"/><path d="M373 69h44M373 84h44M373 99h25" stroke="#B9ABA1"/>
  <rect x="511" y="65" width="62" height="51" rx="5" fill="#FFF8F5"/><rect x="601" y="19" width="43" height="40" rx="4" fill="white"/><rect x="601" y="126" width="43" height="40" rx="4" fill="white"/><path d="M574 84h15V39h12M574 99h15v47h12" stroke="#F05A28"/>
 </svg>;
}
export function BuyingStep({ step }: { step: number }) {
 return <svg className="buying-step" viewBox="0 0 300 110" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
 {step===0 && <><rect x="50" y="15" width="200" height="73" rx="5" fill="white"/><path d="M50 33h200M68 49h93M68 62h129M50 99h200" stroke="#B9ABA1"/><path d="M50 99h200" stroke="#F05A28" strokeWidth="5"/></>}
 {step===1 && <><path d="M53 28h195v64H53zM101 28v64M185 28v64M53 60h195" stroke="#B9ABA1"/><path d="M145 9a20 20 0 0 0-20 20c0 15 20 36 20 36s20-21 20-36a20 20 0 0 0-20-20Z" fill="#FFF8F5" stroke="#B23E13"/><circle cx="145" cy="29" r="6"/></>}
 {step===2 && <>{[40,118,196].map((x)=><g key={x}><rect x={x} y="13" width="64" height="84" rx="4" fill="white"/><path d={`M${x+12} 31h40M${x+12} 45h40M${x+12} 59h26`} stroke="#B9ABA1"/><rect x={x+12} y="76" width="40" height="6" fill="#F05A28" stroke="none"/></g>)}</>}
 {step===3 && <><rect x="123" y="36" width="64" height="44" rx="4" fill="#FFF8F5"/><rect x="30" y="10" width="52" height="35" rx="4" fill="white"/><rect x="225" y="10" width="52" height="35" rx="4" fill="white"/><rect x="30" y="68" width="52" height="35" rx="4" fill="white"/><path d="M82 27h22v27h19M82 85h22V66h19M187 56h19V27h19" stroke="#B23E13"/></>}
 </svg>;
}

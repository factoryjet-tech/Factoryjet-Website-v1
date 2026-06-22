import React, { useId } from 'react';
import { Check, ChevronDown, Minus } from 'lucide-react';

interface PricingCardProps {
  pkg: any;
  onCtaClick: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ pkg, onCtaClick }) => {
  const isPopular = pkg.popular;

  return (
    <article
      className={`relative flex flex-col h-full bg-white rounded-2xl transition-all duration-300 ${pkg.color} ${isPopular ? 'transform md:-translate-y-4 z-10' : 'border border-slate-200 hover:shadow-xl'}`}
      aria-label={`${pkg.name} package pricing`}
    >

      {isPopular && (
        <div className="absolute top-0 inset-x-0 -mt-3 flex justify-center">
             <span className="bg-jet-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                {pkg.tag || 'Most Popular'}
             </span>
        </div>
      )}

      <div className="p-6 md:p-8 flex-grow">
        <div className="mb-4">
          <h3 className="text-sm font-bold text-jet-blue uppercase tracking-widest mb-1">{pkg.name}</h3>
          <p className="text-sm text-slate-600 font-medium h-5">{pkg.subtitle}</p>
        </div>

        <div className="mb-6">
            <span className="text-[10px] md:text-xs font-semibold text-jet-orange uppercase tracking-wider">
              Starting At
            </span>
            <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl md:text-5xl font-bold text-jet-navy tracking-tight">{pkg.price}</span>
                <span className="text-slate-500 text-sm font-medium">{pkg.period.includes('Month') ? '/mo' : ''}</span>
            </div>
        </div>

        <div className="mb-8">
            <button
                onClick={onCtaClick}
                aria-label={`Get started with ${pkg.name} plan`}
                className={`w-full py-3 px-6 rounded-lg font-bold text-sm transition-all duration-200 shadow-sm active:scale-95 ${pkg.btnColor} text-white focus:ring-2 focus:ring-offset-2 focus:ring-jet-blue`}
            >
                Get Started
            </button>
            <p className="text-center text-xs text-slate-500 mt-3 font-medium">{pkg.save}</p>
        </div>

        <div className="space-y-6">
            {pkg.features.map((section: any, idx: number) => (
                <div key={idx}>
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-100 pb-1">
                        {section.category}
                    </h4>
                    <ul className="space-y-2.5">
                        {section.items.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-tight">
                                <Check className="w-4 h-4 text-jet-blue shrink-0 mt-0.5" strokeWidth={3} aria-hidden="true" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>

      {/* Footer Ideal For section */}
      <div className="bg-slate-50 p-4 md:p-6 rounded-b-2xl border-t border-slate-100 mt-auto">
          <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ideal For</p>
          <div className="flex flex-wrap gap-2">
              {pkg.idealFor?.map((tag: string, i: number) => (
                  <span key={i} className="text-[10px] font-semibold px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">
                      {tag}
                  </span>
              ))}
          </div>
      </div>
    </article>
  );
};

interface AccordionItemProps {
  question: string;
  answer: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const contentId = useId();
    const headerId = useId();

    return (
        <div className="border-b border-slate-200 last:border-0 bg-white first:rounded-t-lg last:rounded-b-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full p-5 text-left transition-colors hover:bg-slate-50 group focus:outline-none focus:bg-slate-50"
                aria-expanded={isOpen}
                aria-controls={contentId}
                id={headerId}
            >
                <span className={`font-heading font-semibold pr-4 transition-colors ${isOpen ? 'text-jet-blue' : 'text-jet-navy'}`}>
                    {question}
                </span>
                <span className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus className="w-5 h-5 text-jet-blue" aria-hidden="true" /> : <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-jet-blue" aria-hidden="true" />}
                </span>
            </button>
            <div
                id={contentId}
                role="region"
                aria-labelledby={headerId}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-l-2 border-jet-blue ml-5 mb-4">
                    {answer}
                </div>
            </div>
        </div>
    );
};

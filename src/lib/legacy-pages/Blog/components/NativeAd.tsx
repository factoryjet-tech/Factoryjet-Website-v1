import React from 'react';
import { ArrowRight, BarChart3 } from 'lucide-react';

export const NativeAd: React.FC = () => {
  return (
    <div className="my-6 md:my-10 bg-blue-50 border-l-4 border-[#0052CC] p-4 md:p-6 rounded-r-lg not-prose group cursor-pointer hover:bg-blue-100 transition-colors">
      <div className="flex items-start gap-3 md:gap-4">
        <div className="bg-white p-1.5 md:p-2 rounded-lg shadow-sm flex-shrink-0">
          <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-[#0052CC]" />
        </div>
        <div className="flex-1">
          <h4 className="font-display font-bold text-gray-900 text-base md:text-lg mb-1">
            Is your website losing customers?
          </h4>
          <p className="text-gray-700 text-xs md:text-sm mb-2 md:mb-3">
            Stop losing customers to competitors. Check your website score now and get a free optimization report.
          </p>
          <div className="flex items-center text-[#0052CC] font-semibold text-xs md:text-sm group-hover:gap-2 transition-all">
            Check your score <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
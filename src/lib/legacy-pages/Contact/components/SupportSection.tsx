import React from 'react';
import { AlertTriangle, LifeBuoy, CreditCard, Users } from 'lucide-react';

const SupportSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Emergency Section */}
        <div className="mb-10 md:mb-16 bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertTriangle className="w-48 h-48 text-red-500" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <AlertTriangle className="w-7 h-7 md:w-8 md:h-8 text-red-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-red-800">Emergency Support (Critical Issues)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div>
                <p className="text-red-700 font-medium mb-2">Emergency Hotline (24/7)</p>
                <p className="text-2xl font-bold text-slate-900">+91 96999 77699</p>
                <p className="text-sm text-red-600 mt-1">Response: Within 1 hour</p>
              </div>
              
              <div>
                 <p className="text-red-700 font-medium mb-2">What Qualifies?</p>
                 <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                   <li>Website completely down</li>
                   <li>Security breach or hack</li>
                   <li>Data loss or corruption</li>
                 </ul>
              </div>

               <div>
                 <a href="mailto:connect@factoryjet.com" className="inline-block w-full text-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
                   Email Emergency Team
                 </a>
                 <p className="text-xs text-red-600 mt-2 text-center">Reserved for existing clients only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Support Grid */}
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-6 md:mb-8 text-center">Already Working With Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <LifeBuoy className="w-8 h-8 text-jetBlue mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Technical Support</h3>
            <p className="text-sm text-slate-600 mb-4">Monday - Friday: 9 AM - 7 PM IST</p>
            <a href="mailto:connect@factoryjet.com" className="text-jetBlue font-semibold hover:underline">connect@factoryjet.com</a>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CreditCard className="w-8 h-8 text-jetBlue mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Billing Questions</h3>
            <p className="text-sm text-slate-600 mb-4">Response Time: 24 business hours</p>
            <a href="mailto:connect@factoryjet.com" className="text-jetBlue font-semibold hover:underline">connect@factoryjet.com</a>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <Users className="w-8 h-8 text-jetBlue mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Account Management</h3>
            <p className="text-sm text-slate-600 mb-4">Contact your dedicated manager</p>
            <a href="mailto:connect@factoryjet.com" className="text-jetBlue font-semibold hover:underline">connect@factoryjet.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

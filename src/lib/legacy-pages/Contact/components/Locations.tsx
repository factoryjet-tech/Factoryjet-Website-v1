import React from 'react';
import { MapPin, Globe, Building } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Text Content */}
          <div>
             <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-6 md:mb-8">Where We're Located</h2>

             <div className="space-y-6 md:space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-jetBlue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Headquarters: India</h3>
                    <p className="text-slate-600 font-medium">FactoryJet Digital Solutions</p>
                    <p className="text-slate-600 mt-1">
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Regional Presence</h3>
                    <ul className="text-slate-600 mt-2 list-disc list-inside">
                      <li>Mumbai</li>
                      <li>Pune</li>
                      <li>Bangalore</li>
                      <li>Remote team members across India</li>
                    </ul>
                  </div>
                </div>

                 <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Service Coverage</h3>
                    <ul className="text-slate-600 mt-2 list-disc list-inside">
                      <li>All of India (remote and on-site)</li>
                      <li>United States</li>
                      <li>UAE &amp; Middle East</li>
                      <li>Southeast Asia</li>
                    </ul>
                  </div>
                </div>
             </div>
          </div>

          {/* Google Maps Embed */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455541541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FactoryJet Location - India"
              className="absolute inset-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;

import React from 'react';
import { MapPin } from 'lucide-react';

const LocalSEOSection: React.FC = () => (
  <section className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4 lg:mb-6">
            Serving All of Delhi NCR
          </h2>
          <p className="text-slate mb-6 lg:mb-8 text-sm lg:text-base">
            Local Website Design Experts with Deep Understanding of NCR's Business Landscape
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Gurgaon</h4>
              <p className="text-sm text-gray-600">
                Cyber City, Golf Course Rd, DLF, Sohna Rd, Udyog Vihar
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Noida</h4>
              <p className="text-sm text-gray-600">Sector 62, 18, 63, Greater Noida, Film City</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Delhi</h4>
              <p className="text-sm text-gray-600">CP, South Delhi, Nehru Place, Dwarka, Rohini</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Faridabad & Ghaziabad</h4>
              <p className="text-sm text-gray-600">NIT, Industrial Area, Indirapuram, Vaishali</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
            <MapPin className="mr-2 text-jet-orange flex-shrink-0" />
            Office: WeWork, Two Horizon Center, Golf Course Road, Sector 43, Gurugram
          </div>
        </div>
        <div className="h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0195836706996!2d77.0266!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e9b4e61c9b%3A0x9c0c6e7e8e8e8e8e!2sWeWork%20Two%20Horizon%20Center!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FactoryJet Delhi NCR Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default LocalSEOSection;

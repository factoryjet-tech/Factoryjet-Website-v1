import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '../data.constants';

export const MobileStickyCTA = () => (
  <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex md:hidden h-16">
    <a
      href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g,'')}`}
      className="flex-1 flex items-center justify-center border-r border-gray-100 text-green-600 font-bold bg-white active:bg-gray-50"
    >
      <MessageCircle className="w-5 h-5 mr-2" fill="currentColor" />
      WhatsApp Now
    </a>
    <a
      href={`tel:${CONTACT.phone.replace(/\D/g,'')}`}
      className="flex-1 flex items-center justify-center text-[#0052CC] font-bold bg-white active:bg-gray-50"
    >
      <Phone className="w-5 h-5 mr-2" fill="currentColor" />
      Call Us
    </a>
  </div>
);

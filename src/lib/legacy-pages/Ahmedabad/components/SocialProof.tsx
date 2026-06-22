
import React from 'react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  // Real Ahmedabad-based clients from the master prompt
  const clients = [
    "Balaji Wafers",
    "Amul Dairy",
    "Cadila Healthcare",
    "Torrent Pharma",
    "Adani Group",
    "Zydus Lifesciences",
    "Nirma Limited",
    "CEPT University"
  ];

  const partners = [
    { name: "Webflow", color: "hover:text-[#4353FF]" },
    { name: "Framer", color: "hover:text-[#0055FF]" },
    { name: "WooCommerce", color: "hover:text-[#96588A]" },
    { name: "WordPress", color: "hover:text-[#21759B]" },
    { name: "Magento", color: "hover:text-[#EE672F]" },
    { name: "Adobe", color: "hover:text-[#FF0000]" },
    { name: "Salesforce", color: "hover:text-[#00A1E0]" },
    { name: "HubSpot", color: "hover:text-[#FF7A59]" },
    { name: "Cashfree", color: "hover:text-[#0070F3]" },
    { name: "PayU", color: "hover:text-[#A6C638]" },
    { name: "UPI", color: "hover:text-[#FF9900]" },
    { name: "ChatGPT", color: "hover:text-[#10A37F]" }
  ];

  // Double the arrays for seamless loop
  const duplicatedPartners = [...partners, ...partners];
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="py-12 md:py-16 bg-white overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl font-bold text-jet-navy font-heading">Trusted by 150+ Gujarat SMBs</h2>
            <p className="text-sm text-jet-gray mt-2 font-medium">Powering businesses with the world's most robust technology and payment ecosystems.</p>
          </div>
          <div className="flex items-center gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-jet-blue">&#8377;10Cr+</p>
              <p className="text-[10px] font-bold text-jet-gray uppercase tracking-widest">Revenue Built</p>
            </div>
            <div className="w-px h-10 bg-slate-100" />
            <div className="text-center">
              <p className="text-2xl font-bold text-jet-orange">4.9/5</p>
              <p className="text-[10px] font-bold text-jet-gray uppercase tracking-widest">Google Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech & Payment Partners Marquee */}
      <div className="relative flex overflow-x-hidden group py-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
        >
          {duplicatedPartners.map((partner, idx) => (
            <div
              key={idx}
              className={`inline-block mx-12 text-2xl font-bold text-slate-300 transition-colors duration-300 cursor-default ${partner.color}`}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-current rounded-full opacity-20" />
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* Client List Marquee (Reverse) */}
      <div className="relative flex overflow-x-hidden group py-8">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [-1920, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear"
            }
          }}
        >
          {duplicatedClients.map((client, idx) => (
            <div
              key={idx}
              className="inline-block mx-10"
            >
              <div className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3 hover:bg-white hover:border-jet-blue/30 hover:shadow-xl transition-all duration-300 group/item">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-jet-blue font-bold text-xs shadow-sm group-hover/item:bg-jet-blue group-hover/item:text-white transition-colors">
                  {client.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-jet-navy">{client}</p>
                  <p className="text-[9px] font-bold text-jet-gray uppercase tracking-tighter">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <span className="px-4 py-1.5 bg-jet-blue/5 border border-jet-blue/10 rounded-full text-[10px] font-bold text-jet-blue uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-jet-blue rounded-full animate-pulse" />
            Official Google Partner
          </span>
          <span className="px-4 py-1.5 bg-jet-orange/5 border border-jet-orange/10 rounded-full text-[10px] font-bold text-jet-orange uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-jet-orange rounded-full animate-pulse" />
            Razorpay Verified Agency
          </span>
          <span className="px-4 py-1.5 bg-jet-green/5 border border-jet-green/10 rounded-full text-[10px] font-bold text-jet-green uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-jet-green rounded-full animate-pulse" />
            Shopify Expert Partner
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;

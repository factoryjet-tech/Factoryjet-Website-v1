
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  const clients = [
    'Urbane Interiors',
    'Infigon Futures',
    'GACS India',
    'Shanti Overseas',
    'YourStore Dropship',
    'FabCouture',
    'PawsnCollars',
    'Mauli Controls',
  ];

  const areas = [
    'Koregaon Park',
    'Hinjewadi',
    'Baner',
    'Kothrud',
    'Wakad',
    'Pimpri-Chinchwad',
  ];

  const partners = ['Google Partner', 'Shopify Expert', 'Razorpay Partner', 'Zoho Partner'];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Stats Marquee */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="text-jet-navy font-bold">200+ Pune businesses trust FactoryJet</span>
          </motion.div>
          <span className="hidden md:block text-slate-300">|</span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <span className="text-jet-navy font-bold">₹15 Crore+ revenue generated for clients</span>
          </motion.div>
          <span className="hidden md:block text-slate-300">|</span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span className="text-jet-navy font-bold flex items-center gap-1">
              4.9 <Star className="text-yellow-500 fill-yellow-500" size={16} /> Google Rating
            </span>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-8 mb-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100 hover:shadow-md hover:border-jet-blue/20 transition-all cursor-default grayscale hover:grayscale-0"
            >
              <span className="text-xs md:text-sm font-bold text-jet-slate">{client}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Areas Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8 text-jet-gray text-sm"
        >
          {areas.map((area, index) => (
            <React.Fragment key={area}>
              <span>{area}</span>
              {index < areas.length - 1 && <span className="text-slate-300">•</span>}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Partner Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6"
        >
          {partners.map((partner) => (
            <div
              key={partner}
              className="bg-white px-4 py-2 rounded-full text-xs font-bold text-jet-gray border border-slate-200 hover:border-jet-blue/30 transition-colors grayscale hover:grayscale-0"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;

import React from 'react';
import GlassCard from './GlassCard';

const Technologies: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-heading mb-6 text-center text-jet-navy">Built on Modern Technology</h2>
        <p className="text-center text-jet-slate mb-12 max-w-2xl mx-auto">
           FactoryJet uses enterprise-grade technologies trusted by global companies, optimized for Chennai business requirements. Every technology choice is made for performance, security, and long-term maintainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <GlassCard className="p-6">
              <h3 className="font-bold text-jet-navy mb-3">Content Management</h3>
              <div className="flex flex-wrap gap-2">
                 {['WordPress', 'Webflow', 'Shopify', 'Custom CMS', 'Payload CMS'].map(t => <span key={t} className="bg-slate-100 text-jet-slate px-2 py-1 rounded text-sm">{t}</span>)}
              </div>
           </GlassCard>
           <GlassCard className="p-6">
              <h3 className="font-bold text-jet-navy mb-3">Frontend Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                 {['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion'].map(t => <span key={t} className="bg-slate-100 text-jet-slate px-2 py-1 rounded text-sm">{t}</span>)}
              </div>
           </GlassCard>
           <GlassCard className="p-6">
              <h3 className="font-bold text-jet-navy mb-3">E-Commerce Platforms</h3>
              <div className="flex flex-wrap gap-2">
                 {['WooCommerce', 'Shopify', 'Magento', 'Commerceflo.ai', 'Custom Solutions'].map(t => <span key={t} className="bg-slate-100 text-jet-slate px-2 py-1 rounded text-sm">{t}</span>)}
              </div>
           </GlassCard>
           <GlassCard className="p-6">
              <h3 className="font-bold text-jet-navy mb-3">Backend & Databases</h3>
              <div className="flex flex-wrap gap-2">
                 {['Node.js', 'Python', 'PHP', 'PostgreSQL', 'MongoDB'].map(t => <span key={t} className="bg-slate-100 text-jet-slate px-2 py-1 rounded text-sm">{t}</span>)}
              </div>
           </GlassCard>
           <GlassCard className="p-6">
              <h3 className="font-bold text-jet-navy mb-3">Cloud & Hosting</h3>
              <div className="flex flex-wrap gap-2">
                 {['AWS', 'Google Cloud', 'DigitalOcean', 'Hostinger', 'Cloudflare CDN'].map(t => <span key={t} className="bg-slate-100 text-jet-slate px-2 py-1 rounded text-sm">{t}</span>)}
              </div>
           </GlassCard>
           <GlassCard className="p-6">
              <h3 className="font-bold text-jet-navy mb-3">Integrations</h3>
              <div className="flex flex-wrap gap-2">
                 {['Razorpay', 'PayU', 'Shiprocket', 'HubSpot', 'ZOHO', 'WhatsApp API'].map(t => <span key={t} className="bg-slate-100 text-jet-slate px-2 py-1 rounded text-sm">{t}</span>)}
              </div>
           </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
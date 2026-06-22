import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 text-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold font-heading text-jet-navy mb-4">The FactoryJet Difference: Why Chennai's Best Businesses Choose Us</h2>
           <p className="text-jet-slate max-w-2xl mx-auto">FactoryJet isn't just another web design company in Chennai – we're your complete digital transformation partner. While others deliver websites, we deliver results.</p>
        </div>

        <div className="overflow-x-auto mb-16">
          <table className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-card overflow-hidden border border-slate-100">
            <thead className="bg-jet-navy text-white">
              <tr>
                <th className="p-6 text-left font-heading">Challenge</th>
                <th className="p-6 text-left text-slate-300 font-medium font-heading">Typical Agency</th>
                <th className="p-6 text-left bg-jet-blue font-bold text-xl relative font-heading">
                  FactoryJet Solution
                  <span className="absolute top-0 right-0 bg-jet-orange text-xs text-white px-2 py-1 rounded-bl-lg">WINNER</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-6 font-semibold text-jet-navy">Delivery Time</td>
                <td className="p-6 text-slate-500">8-16 weeks</td>
                <td className="p-6 font-bold text-jet-blue flex items-center gap-2"><Check size={18} /> 7 days guaranteed</td>
              </tr>
              <tr>
                <td className="p-6 font-semibold text-jet-navy">SEO Included</td>
                <td className="p-6 text-slate-500">Basic or extra cost</td>
                <td className="p-6 font-bold text-jet-blue flex items-center gap-2"><Check size={18} /> Full SEO + GEO + AEO + AIO</td>
              </tr>
              <tr>
                <td className="p-6 font-semibold text-jet-navy">Chennai Expertise</td>
                <td className="p-6 text-slate-500">Generic national approach</td>
                <td className="p-6 font-bold text-jet-blue flex items-center gap-2"><Check size={18} /> Local team, local knowledge</td>
              </tr>
              <tr>
                <td className="p-6 font-semibold text-jet-navy">Support</td>
                <td className="p-6 text-slate-500">Email only, slow response</td>
                <td className="p-6 font-bold text-jet-blue flex items-center gap-2"><Check size={18} /> WhatsApp + Phone + Office visits</td>
              </tr>
              <tr>
                <td className="p-6 font-semibold text-jet-navy">Pricing</td>
                <td className="p-6 text-slate-500">Hidden costs, scope creep</td>
                <td className="p-6 font-bold text-jet-blue flex items-center gap-2"><Check size={18} /> Transparent, fixed pricing</td>
              </tr>
              <tr>
                <td className="p-6 font-semibold text-jet-navy">Technology</td>
                <td className="p-6 text-slate-500">Outdated platforms</td>
                <td className="p-6 font-bold text-jet-blue flex items-center gap-2"><Check size={18} /> AI-powered, latest frameworks</td>
              </tr>
              <tr>
                <td className="p-6 font-semibold text-jet-navy">Results Focus</td>
                <td className="p-6 text-slate-500">"Hope it works"</td>
                <td className="p-6 font-bold text-jet-blue flex items-center gap-2"><Check size={18} /> Data-driven, conversion optimized</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* 7 Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
           {[
             { title: "Chennai-Based Expert Team", desc: "Unlike offshore agencies or Delhi-based companies serving Chennai remotely, our team works from Tidel Park on OMR. Face-to-face consultations, local market understanding, and Tamil/English communication ensure nothing gets lost in translation." },
             { title: "7-Day Express Delivery", desc: "While competitors quote months, we deliver in days. Our AI-enhanced workflow and experienced team ensure your website launches in just one week – without compromising quality." },
             { title: "Complete Optimization Package", desc: "Every website includes SEO (Google), GEO (AI search engines like Perplexity), AEO (featured snippets), and AIO (ChatGPT, Claude citations). Not as an upsell – as standard." },
             { title: "Industry-Specific Templates", desc: "Pre-built frameworks for Chennai's key industries – automobile, IT services, healthcare, manufacturing, education – customized to your brand. Faster launch, proven conversions." },
             { title: "Transparent Fixed Pricing", desc: "₹29,999 means ₹29,999. No surprise charges, no scope creep, no \"that'll cost extra.\" Clear packages with everything included." },
             { title: "Ongoing Partnership", desc: "Website launch is the beginning, not the end. Annual Maintenance Contracts from ₹2,999/month ensure your site stays updated, secure, and optimized." },
             { title: "Measurable Results", desc: "We track leads, conversions, rankings, and ROI. Monthly reports show exactly what you're getting for your investment. No vanity metrics – real business impact." },
           ].map((diff, i) => (
             <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-jet-blue text-white flex items-center justify-center font-bold shrink-0">{i+1}</div>
                <div>
                   <h3 className="font-bold text-jet-navy mb-1">{diff.title}</h3>
                   <p className="text-jet-slate text-sm leading-relaxed">{diff.desc}</p>
                </div>
             </div>
           ))}
        </div>
        
        {/* Social Proof Callout */}
        <div className="bg-white border-l-4 border-jet-orange p-6 shadow-sm max-w-3xl mx-auto italic text-jet-slate relative">
           <p className="mb-2">"FactoryJet understood Chennai's automobile market better than agencies twice their size. Our dealer portal went from zero to 200+ monthly leads in 6 months."</p>
           <p className="font-bold text-jet-navy not-italic">— Managing Director, Leading Automobile Dealership, Guindy</p>
        </div>
        
        <div className="text-center mt-12">
            <h3 className="text-xl font-bold mb-4">Ready to experience the FactoryJet difference?</h3>
            <div className="flex justify-center gap-4">
               <button className="bg-jet-blue text-white px-6 py-2 rounded-lg font-bold">Get Free Consultation</button>
               <button className="bg-white border border-jet-blue text-jet-blue px-6 py-2 rounded-lg font-bold">View Chennai Portfolio</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
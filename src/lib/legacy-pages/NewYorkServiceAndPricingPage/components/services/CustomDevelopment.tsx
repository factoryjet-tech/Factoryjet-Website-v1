import React from 'react';
import { Code2, Database, Cloud, Terminal, GitBranch, Zap, Puzzle, Trophy, Smartphone } from 'lucide-react';
import ServiceCard from '../ServiceCard';

export default function CustomDevelopment() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 tracking-tight font-heading">
            4. Custom Web Application Development
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-[#0052CC] mb-6">
            When Off-the-Shelf Isn't Enough
          </p>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed">
            Some NYC businesses need more than templates can provide. FactoryJet builds custom web applications using modern technologies like React, Next.js, Python, and Node.js for businesses with unique requirements.
          </p>
        </div>

        {/* Scenarios */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-[#0F172A] mb-12 text-center font-heading">When Custom Development Makes Sense</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              index={0}
              icon={<GitBranch className="w-6 h-6" />}
              title="Unique Business Logic"
              description="Your business processes don't fit standard templates. You need custom workflows, proprietary algorithms, or specialized functionality. Example: Financial modeling tools, inventory management systems, booking platforms with complex rules."
            />
            <ServiceCard 
              index={1}
              icon={<Zap className="w-6 h-6" />}
              title="High Performance Requirements"
              description="You need to handle thousands of users, real-time data processing, or complex calculations that standard platforms can't handle. Example: Data visualization dashboards, real-time analytics, high-traffic applications."
            />
            <ServiceCard 
              index={2}
              icon={<Puzzle className="w-6 h-6" />}
              title="Complex Integrations"
              description="You need to connect with legacy systems, proprietary APIs, or multiple third-party services in sophisticated ways. Example: ERP integration, multi-system data synchronization, custom API development."
            />
            <ServiceCard 
              index={3}
              icon={<Trophy className="w-6 h-6" />}
              title="Competitive Advantage"
              description="Your website or application IS your product, and you need complete control to innovate faster than competitors. Example: SaaS platforms, member communities, marketplace applications."
            />
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-[#0F172A] mb-12 text-center font-heading">Technologies We Use</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl hover:shadow-lg transition-all shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-[#0052CC]"><Code2 className="w-6 h-6" /><h5 className="font-bold text-[#0F172A] font-heading">Frontend</h5></div>
              <p className="text-sm text-[#334155] leading-relaxed">React • Next.js • Vue.js • TypeScript • Tailwind CSS</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl hover:shadow-lg transition-all shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-[#FF6B35]"><Terminal className="w-6 h-6" /><h5 className="font-bold text-[#0F172A] font-heading">Backend</h5></div>
              <p className="text-sm text-[#334155] leading-relaxed">Node.js • Python/Django • Express • GraphQL • REST APIs</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl hover:shadow-lg transition-all shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-[#10B981]"><Database className="w-6 h-6" /><h5 className="font-bold text-[#0F172A] font-heading">Database</h5></div>
              <p className="text-sm text-[#334155] leading-relaxed">PostgreSQL • MongoDB • Redis • Firebase</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl hover:shadow-lg transition-all shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-[#64748B]"><Cloud className="w-6 h-6" /><h5 className="font-bold text-[#0F172A] font-heading">Cloud & DevOps</h5></div>
              <p className="text-sm text-[#334155] leading-relaxed">AWS • Google Cloud • Vercel • Docker • CI/CD</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl hover:shadow-lg transition-all shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-[#0F172A]"><Smartphone className="w-6 h-6" /><h5 className="font-bold text-[#0F172A] font-heading">Mobile</h5></div>
              <p className="text-sm text-[#334155] leading-relaxed">React Native • Progressive Web Apps (PWA)</p>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-[#0F172A] mb-16 text-center font-heading">Custom Development Process</h3>
          <div className="relative">
             {/* Line */}
            <div className="hidden md:block absolute top-[45px] left-0 w-full h-0.5 bg-[#E2E8F0] z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {[
                { week: 'Week 1-2', title: 'Discovery & Planning', items: ['Requirements gathering', 'Technical architecture', 'Technology selection', 'Timeline and budget'] },
                { week: 'Week 3-4', title: 'Design & Prototyping', items: ['UI/UX design', 'Interactive prototypes', 'User testing', 'Design refinement'] },
                { week: 'Week 5-12', title: 'Development', items: ['Agile sprints', 'Weekly demos', 'Continuous testing', 'Progress tracking'] },
                { week: 'Week 13-14', title: 'Testing & Launch', items: ['QA testing', 'Security audit', 'Performance optimization', 'Production deployment'] },
                { week: 'Week 15+', title: 'Support & Iteration', items: ['Monitoring', 'Bug fixes', 'Feature additions', 'Optimization'] }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-[#E2E8F0] flex flex-col items-center text-center shadow-md">
                  <div className="bg-[#0052CC] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow-md">{step.week}</div>
                  <h5 className="font-bold text-[#0F172A] text-sm mb-4 min-h-[40px] flex items-center font-heading">{step.title}</h5>
                  <ul className="text-xs text-[#334155] space-y-2">
                    {step.items.map((item, i) => <li key={i} className="border-b border-[#E2E8F0] pb-1 last:border-0">{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Pricing */}
        <div>
          <h4 className="text-3xl font-bold text-[#0F172A] mb-12 text-center font-heading">Custom Development Investment</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-md border-t-4 border-t-[#64748B]">
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Starter Custom</h5>
              <div className="text-3xl font-bold text-[#334155] mb-6">$15,000 - $35,000</div>
              <ul className="space-y-3 text-[#334155]">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#64748B] rounded-full"></div> Simple web applications</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#64748B] rounded-full"></div> 8-12 weeks development</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#64748B] rounded-full"></div> Basic integrations</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#64748B] rounded-full"></div> Core functionality</li>
              </ul>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-md border-t-4 border-t-[#0052CC]">
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Professional Custom</h5>
              <div className="text-3xl font-bold text-[#0052CC] mb-6">$35,000 - $75,000</div>
              <ul className="space-y-3 text-[#334155]">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Complex applications</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 12-20 weeks development</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Multiple integrations</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Advanced features</li>
              </ul>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-md border-t-4 border-t-[#0F172A]">
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Enterprise Custom</h5>
              <div className="text-3xl font-bold text-[#0F172A] mb-6">$75,000 - $250,000+</div>
              <ul className="space-y-3 text-[#334155]">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#0F172A] rounded-full"></div> Mission-critical systems</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#0F172A] rounded-full"></div> 20+ weeks development</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#0F172A] rounded-full"></div> Extensive integrations</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#0F172A] rounded-full"></div> Custom everything</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
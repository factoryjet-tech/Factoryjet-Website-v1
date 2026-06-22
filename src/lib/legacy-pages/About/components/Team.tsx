'use client';

import React, { useState } from 'react';
import { TEAM } from '../data.constants';
import { LinkedinIcon } from 'lucide-react';

const Team = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-jetBlue font-semibold uppercase tracking-wider text-xs md:text-sm mb-2 md:mb-3">The People Behind the Tech</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6">Meet Our Leaders</h3>
          <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base px-4 md:px-0">A remote-first, global team of 60+ experts passionate about SMB success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {TEAM.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    experience: string;
    specialization: string;
    image?: string;
    LinkedInUrl?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [imageError, setImageError] = useState(false);

  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="group text-center">
      {/* Profile Image */}
      <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden bg-slate-100 ring-2 md:ring-4 ring-white shadow-lg">
        {member.image && !imageError ? (
          <img
            src={member.image}
            alt={member.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0052CC] to-[#0041a3] group-hover:scale-110 transition-transform duration-500">
            <span className="text-3xl md:text-4xl font-bold text-white">{initials}</span>
          </div>
        )}
      </div>

      {/* Member Info */}
      <h4 className="text-lg md:text-xl font-bold text-slate-900">{member.name}</h4>
      <p className="text-jetBlue font-medium text-xs md:text-sm mb-1">{member.role}</p>
      <p className="text-slate-500 text-xs mb-2 md:mb-3">{member.experience} Experience</p>

      <div className="inline-block bg-slate-50 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[11px] md:text-xs text-slate-600 max-w-xs mx-auto mb-4">
        {member.specialization}
      </div>

      {/* LinkedIn Button */}
      {member.LinkedInUrl && (
        <div className="mt-3">
          <a
            href={member.LinkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs md:text-sm font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Team;
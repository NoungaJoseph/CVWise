import React from 'react';
import { CVData } from '@/src/lib/EditorContext';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface TemplateProps {
  cvData: CVData;
}

// Navy Yellow Modern Professional Designer CV
export const NavyYellow: React.FC<TemplateProps> = ({ cvData }) => {
  const { personalInfo, experience, education, skills, projects, style } = cvData;

  return (
    <div className="w-full bg-white min-h-[1122px]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="bg-[#1B2845] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-[#F5C400] clip-triangle" style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 100% 100%)' }} />
        <div className="px-10 pt-10 pb-8 relative z-10">
          <p className="text-[#F5C400] text-[10px] font-black tracking-[0.4em] uppercase mb-3">{personalInfo.title || 'PROFESSIONAL DESIGNER'}</p>
          <h1 className="text-5xl font-black tracking-tight leading-none mb-4">
            {personalInfo.firstName || 'FIRST'}<br />
            {personalInfo.lastName || 'LAST'}
          </h1>
          <div className="flex flex-wrap gap-5 text-[11px] text-white/70 mt-4">
            {personalInfo.email && <span className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-[#F5C400]" />{personalInfo.email}</span>}
            {personalInfo.phone && <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#F5C400]" />{personalInfo.phone}</span>}
            {personalInfo.location && <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#F5C400]" />{personalInfo.location}</span>}
            {personalInfo.linkedin && <span className="flex items-center gap-1.5"><Linkedin className="w-3 h-3 text-[#F5C400]" />{personalInfo.linkedin}</span>}
          </div>
        </div>
      </div>

      {/* Yellow accent bar */}
      <div className="h-1.5 bg-[#F5C400]" />

      <div className="grid grid-cols-3 min-h-[900px]">
        {/* Sidebar */}
        <div className="bg-[#F7F9FC] px-7 py-8 space-y-8 border-r border-[#E5E8EF]">
          {/* Profile photo */}
          <div className="flex justify-center">
            <div className="w-28 h-28 rounded-2xl bg-[#1B2845]/10 overflow-hidden border-3 border-[#1B2845]/20">
              {personalInfo.profileImage ? (
                <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl font-black text-[#1B2845]/30">
                  {personalInfo.firstName?.[0]}{personalInfo.lastName?.[0]}
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1B2845] pb-2 mb-4 border-b-2 border-[#F5C400]">Skills</h3>
            <div className="space-y-3">
              {(skills.length > 0 ? skills : [
                { id: '1', name: 'UI/UX Design', level: 'Expert' as const, category: '' },
                { id: '2', name: 'Figma / Sketch', level: 'Expert' as const, category: '' },
                { id: '3', name: 'Branding', level: 'Expert' as const, category: '' },
                { id: '4', name: 'Motion Graphics', level: 'Proficient' as const, category: '' },
                { id: '5', name: 'Design Systems', level: 'Expert' as const, category: '' },
              ]).map(skill => (
                <div key={skill.id} className="space-y-1">
                  <span className="text-[10px] text-[#444] font-semibold">{skill.name}</span>
                  <div className="h-1 bg-[#1B2845]/10 rounded-full">
                    <div className="h-full bg-[#1B2845] rounded-full" style={{ width: skill.level === 'Expert' ? '88%' : skill.level === 'Proficient' ? '65%' : '45%' }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1B2845] pb-2 mb-4 border-b-2 border-[#F5C400]">Education</h3>
            <div className="space-y-4">
              {(education.length > 0 ? education : [
                { id: '1', degree: 'M.F.A. Design', institution: 'Royal College of Art', startDate: '2018', endDate: '2020' },
                { id: '2', degree: 'B.A. Visual Arts', institution: 'Central St. Martins', startDate: '2014', endDate: '2018' },
              ]).map(edu => (
                <div key={edu.id}>
                  <p className="font-bold text-[11px] text-[#1B2845]">{edu.degree}</p>
                  <p className="text-[10px] text-[#888] italic mt-0.5">{edu.institution}</p>
                  <p className="text-[10px] text-[#AAA] mt-0.5">{edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1B2845] pb-2 mb-4 border-b-2 border-[#F5C400]">Languages</h3>
            {['English — C2', 'French — B2', 'German — A2'].map(l => (
              <p key={l} className="text-[10px] text-[#666] py-0.5">{l}</p>
            ))}
          </section>
        </div>

        {/* Main content */}
        <div className="col-span-2 px-8 py-8 space-y-8">
          {/* Profile */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1B2845] pb-2 mb-4 border-b-2 border-[#F5C400]">Profile</h3>
            <p className="text-xs text-[#555] leading-relaxed">
              {personalInfo.summary || 'Award-winning designer with 7 years crafting digital and print experiences that merge aesthetics with strategy. Specializes in brand identity, UI/UX design, and design systems. Clients include Fortune 500 companies and innovative startups.'}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1B2845] pb-2 mb-5 border-b-2 border-[#F5C400]">Experience</h3>
            <div className="space-y-6">
              {(experience.length > 0 ? experience : [
                { id: '1', title: 'Lead Product Designer', company: 'Spotify', period: '2021 — Present', description: 'Led design for Spotify\'s creator tools, used by 5M+ artists. Established design system used across 12 product teams.' },
                { id: '2', title: 'Senior UX Designer', company: 'Airbnb', period: '2018 — 2021', description: 'Redesigned the host onboarding flow, increasing completion rates by 38%. Contributed to Airbnb\'s Design Language System.' },
              ]).map(exp => (
                <div key={exp.id} className="pl-5 border-l-2 border-[#F5C400] relative">
                  <div className="absolute w-2.5 h-2.5 bg-[#F5C400] -left-[7px] top-1"></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-black text-sm text-[#1B2845]">{exp.title}</h4>
                    <span className="text-[10px] text-[#888] font-medium ml-2 shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-[11px] font-bold text-[#F5C400] uppercase tracking-wider mb-2" style={{ color: '#1B2845', opacity: 0.6 }}>{exp.company}</p>
                  <p className="text-xs text-[#666] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1B2845] pb-2 mb-4 border-b-2 border-[#F5C400]">Featured Work</h3>
              <div className="grid grid-cols-2 gap-3">
                {projects.map(proj => (
                  <div key={proj.id} className="bg-[#F7F9FC] rounded-xl p-4 border border-[#E5E8EF]">
                    <h4 className="font-black text-xs text-[#1B2845] mb-1">{proj.title}</h4>
                    <p className="text-[10px] text-[#888] italic mb-1">{proj.role} · {proj.date}</p>
                    <p className="text-[10px] text-[#666] leading-relaxed">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

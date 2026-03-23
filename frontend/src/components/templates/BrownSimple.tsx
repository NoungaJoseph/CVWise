import React from 'react';
import { CVData } from '@/src/lib/EditorContext';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface TemplateProps {
  cvData: CVData;
}

// Brown Simple Professional Resume
export const BrownSimple: React.FC<TemplateProps> = ({ cvData }) => {
  const { personalInfo, experience, education, skills, projects, style } = cvData;

  return (
    <div className="w-full bg-white min-h-[1122px]" style={{ fontFamily: "'Georgia', serif" }}>
      {/* Header */}
      <div className="px-10 pt-10 pb-6 relative">
        <div className="flex items-center gap-8">
          {/* Profile photo */}
          <div className="w-28 h-28 rounded-full bg-[#8B5E3C]/10 overflow-hidden border-4 border-[#8B5E3C]/30 shrink-0">
            {personalInfo.profileImage ? (
              <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-3xl font-black text-[#8B5E3C]/40">
                  {personalInfo.firstName?.[0]}{personalInfo.lastName?.[0]}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-[#3D2B1F] tracking-tight">
              {personalInfo.firstName || 'FIRST'} {personalInfo.lastName || 'LAST'}
            </h1>
            <p className="text-[#8B5E3C] text-base font-medium mt-1 tracking-widest uppercase">
              {personalInfo.title || 'Professional Title'}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-[11px] text-[#666]">
              {personalInfo.email && <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-[#8B5E3C]" />{personalInfo.email}</span>}
              {personalInfo.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-[#8B5E3C]" />{personalInfo.phone}</span>}
              {personalInfo.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#8B5E3C]" />{personalInfo.location}</span>}
            </div>
          </div>
        </div>
        <div className="mt-6 h-[3px] w-full" style={{ background: 'linear-gradient(to right, #8B5E3C, #D4A574, #8B5E3C)' }} />
      </div>

      <div className="px-10 pb-10 grid grid-cols-3 gap-8">
        {/* Left sidebar */}
        <div className="space-y-6">
          {/* About */}
          {personalInfo.summary && (
            <section>
              <h3 className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-[#8B5E3C] mb-3 pb-1 border-b border-[#8B5E3C]/30">About</h3>
              <p className="text-xs text-[#555] leading-relaxed">{personalInfo.summary}</p>
            </section>
          )}

          {/* Skills */}
          <section>
            <h3 className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-[#8B5E3C] mb-3 pb-1 border-b border-[#8B5E3C]/30">Skills</h3>
            <div className="space-y-2">
              {(skills.length > 0 ? skills : [
                { id: '1', name: 'Brand Strategy', level: 'Expert' as const, category: '' },
                { id: '2', name: 'Adobe Creative Suite', level: 'Expert' as const, category: '' },
                { id: '3', name: 'Content Marketing', level: 'Proficient' as const, category: '' },
                { id: '4', name: 'Social Media', level: 'Expert' as const, category: '' },
                { id: '5', name: 'SEO / SEM', level: 'Proficient' as const, category: '' },
              ]).map(skill => (
                <div key={skill.id} className="space-y-1">
                  <span className="text-[11px] text-[#3D2B1F] font-medium">{skill.name}</span>
                  <div className="h-1 bg-[#8B5E3C]/15 rounded-full">
                    <div className="h-full bg-[#8B5E3C] rounded-full" style={{ width: skill.level === 'Expert' ? '85%' : skill.level === 'Proficient' ? '65%' : '45%' }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-[#8B5E3C] mb-3 pb-1 border-b border-[#8B5E3C]/30">Education</h3>
            <div className="space-y-4">
              {(education.length > 0 ? education : [
                { id: '1', degree: 'B.A. Graphic Design', institution: 'Art Institute', startDate: '2016', endDate: '2020' },
              ]).map(edu => (
                <div key={edu.id}>
                  <p className="font-bold text-[11px] text-[#3D2B1F]">{edu.degree}</p>
                  <p className="text-[10px] text-[#8B5E3C] italic mt-0.5">{edu.institution}</p>
                  <p className="text-[10px] text-[#999] mt-0.5">{edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-[#8B5E3C] mb-3 pb-1 border-b border-[#8B5E3C]/30">Languages</h3>
            {['English — Native', 'French — Intermediate'].map(l => (
              <p key={l} className="text-[11px] text-[#555] py-0.5">{l}</p>
            ))}
          </section>
        </div>

        {/* Main content */}
        <div className="col-span-2 space-y-6">
          {/* Experience */}
          <section>
            <h3 className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-[#8B5E3C] mb-4 pb-1 border-b border-[#8B5E3C]/30">Work Experience</h3>
            <div className="space-y-5">
              {(experience.length > 0 ? experience : [
                { id: '1', title: 'Marketing Creative Director', company: 'Brand Agency Co.', period: '2021 — Present', description: 'Led a team of 8 creatives to develop and execute brand campaigns for 20+ clients. Increased client retention by 40% through innovative design strategies.' },
                { id: '2', title: 'Senior Graphic Designer', company: 'Creative Studio', period: '2019 — 2021', description: 'Designed complete brand identities for startups and scale-ups. Produced marketing materials that generated $2M in client revenue.' },
              ]).map(exp => (
                <div key={exp.id} className="relative">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm text-[#3D2B1F]">{exp.title}</h4>
                    <span className="text-[10px] text-[#8B5E3C] font-semibold shrink-0 ml-4 bg-[#8B5E3C]/10 px-2 py-0.5 rounded">{exp.period}</span>
                  </div>
                  <p className="text-[11px] font-semibold text-[#8B5E3C] mb-2">{exp.company}</p>
                  <p className="text-xs text-[#555] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h3 className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-[#8B5E3C] mb-4 pb-1 border-b border-[#8B5E3C]/30">Projects</h3>
              <div className="space-y-4">
                {projects.map(proj => (
                  <div key={proj.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-xs text-[#3D2B1F]">{proj.title}</h4>
                      <span className="text-[10px] text-[#999] ml-4 shrink-0">{proj.date}</span>
                    </div>
                    <p className="text-[10px] italic text-[#8B5E3C] mb-1">{proj.role}</p>
                    <p className="text-xs text-[#555] leading-relaxed">{proj.description}</p>
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

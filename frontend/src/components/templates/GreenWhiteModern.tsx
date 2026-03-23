import React from 'react';
import { CVData } from '@/src/lib/EditorContext';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface TemplateProps {
  cvData: CVData;
}

// Green and White Modern Graphic Designer CV
export const GreenWhiteModern: React.FC<TemplateProps> = ({ cvData }) => {
  const { personalInfo, experience, education, skills, projects, style } = cvData;

  return (
    <div className="w-full bg-white min-h-[1122px]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header bar */}
      <div className="flex">
        <div className="bg-[#2D6A4F] w-[35%] px-8 pt-10 pb-8 flex flex-col">
          {/* Profile image */}
          <div className="w-28 h-28 rounded-2xl bg-white/20 overflow-hidden mb-6 border-2 border-white/30">
            {personalInfo.profileImage ? (
              <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-black text-white/50">
                  {personalInfo.firstName?.[0]}{personalInfo.lastName?.[0]}
                </span>
              </div>
            )}
          </div>
          <h1 className="text-3xl font-black text-white leading-tight">
            {personalInfo.firstName || 'JANE'}<br />
            <span className="text-[#B7E4C7]">{personalInfo.lastName || 'DOE'}</span>
          </h1>
          <p className="text-[#B7E4C7] text-xs tracking-widest uppercase mt-2 font-medium">
            {personalInfo.title || 'Graphic Designer'}
          </p>
        </div>
        <div className="flex-1 bg-[#F0FBF4] px-8 pt-10 pb-8 flex items-end">
          <div className="space-y-2 text-xs text-[#2D6A4F]/80">
            {personalInfo.email && <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#2D6A4F]" />{personalInfo.email}</p>}
            {personalInfo.phone && <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />{personalInfo.phone}</p>}
            {personalInfo.location && <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />{personalInfo.location}</p>}
            {personalInfo.linkedin && <p className="flex items-center gap-2"><Linkedin className="w-3.5 h-3.5 text-[#2D6A4F]" />{personalInfo.linkedin}</p>}
            {personalInfo.portfolio && <p className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-[#2D6A4F]" />{personalInfo.portfolio}</p>}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex">
        {/* Left sidebar */}
        <div className="bg-[#2D6A4F] w-[35%] px-8 py-8 space-y-8 min-h-[800px]">
          {/* Skills */}
          <section>
            <h3 className="text-[#B7E4C7] text-[10px] font-black tracking-[0.3em] uppercase mb-4 border-b border-white/20 pb-2">Skills</h3>
            <div className="space-y-3">
              {(skills.length > 0 ? skills : [
                { id: '1', name: 'Adobe Illustrator', level: 'Expert' as const, category: '' },
                { id: '2', name: 'Photoshop', level: 'Expert' as const, category: '' },
                { id: '3', name: 'Figma', level: 'Proficient' as const, category: '' },
                { id: '4', name: 'InDesign', level: 'Expert' as const, category: '' },
                { id: '5', name: 'Motion Design', level: 'Proficient' as const, category: '' },
                { id: '6', name: 'Brand Identity', level: 'Expert' as const, category: '' },
              ]).map(skill => (
                <div key={skill.id} className="space-y-1">
                  <span className="text-[10px] text-white/80 font-medium">{skill.name}</span>
                  <div className="h-1 bg-white/15 rounded-full">
                    <div className="h-full bg-[#74C69D] rounded-full" style={{ width: skill.level === 'Expert' ? '90%' : skill.level === 'Proficient' ? '65%' : '45%' }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-[#B7E4C7] text-[10px] font-black tracking-[0.3em] uppercase mb-4 border-b border-white/20 pb-2">Education</h3>
            <div className="space-y-4">
              {(education.length > 0 ? education : [
                { id: '1', degree: 'B.F.A. Graphic Design', institution: 'Parsons School of Design', startDate: '2016', endDate: '2020' },
              ]).map(edu => (
                <div key={edu.id}>
                  <p className="font-bold text-[11px] text-white">{edu.degree}</p>
                  <p className="text-[10px] text-[#B7E4C7] mt-0.5 italic">{edu.institution}</p>
                  <p className="text-[10px] text-white/40 mt-0.5">{edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-[#B7E4C7] text-[10px] font-black tracking-[0.3em] uppercase mb-4 border-b border-white/20 pb-2">Languages</h3>
            {['English — Native', 'Spanish — Fluent', 'French — Basic'].map(l => (
              <p key={l} className="text-[10px] text-white/60 py-0.5">{l}</p>
            ))}
          </section>
        </div>

        {/* Main content */}
        <div className="flex-1 px-8 py-8 space-y-8">
          {/* Profile */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2D6A4F] border-b-2 border-[#2D6A4F]/20 pb-2 mb-4">Profile</h3>
            <p className="text-xs text-[#444] leading-relaxed">
              {personalInfo.summary || 'Creative and detail-oriented graphic designer with 5+ years of experience crafting compelling visual identities, marketing materials, and digital designs. Passionate about creating designs that tell stories and drive business results.'}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2D6A4F] border-b-2 border-[#2D6A4F]/20 pb-2 mb-5">Experience</h3>
            <div className="space-y-6">
              {(experience.length > 0 ? experience : [
                { id: '1', title: 'Senior Graphic Designer', company: 'Creative Agency Ltd.', period: '2021 — Present', description: 'Lead visual design for 30+ brand identity projects. Collaborated with marketing teams to create campaigns that increased client engagement by 50%.' },
                { id: '2', title: 'Graphic Designer', company: 'Studio Works', period: '2018 — 2021', description: 'Designed logos, print materials, and digital assets for clients across multiple industries. Developed a brand guide toolkit used by the entire design team.' },
              ]).map(exp => (
                <div key={exp.id} className="pl-4 border-l-2 border-[#2D6A4F]/20 relative">
                  <div className="absolute w-2 h-2 bg-[#2D6A4F] rounded-full -left-[5px] top-1"></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-black text-sm text-[#1B4332]">{exp.title}</h4>
                    <span className="text-[10px] text-[#2D6A4F]/60 font-bold ml-2 shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-[11px] font-bold text-[#2D6A4F] uppercase tracking-wider mb-2">{exp.company}</p>
                  <p className="text-xs text-[#555] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2D6A4F] border-b-2 border-[#2D6A4F]/20 pb-2 mb-4">Portfolio Projects</h3>
              <div className="grid grid-cols-2 gap-3">
                {projects.map(proj => (
                  <div key={proj.id} className="bg-[#F0FBF4] rounded-xl p-4 border border-[#2D6A4F]/10">
                    <h4 className="font-bold text-xs text-[#1B4332] mb-1">{proj.title}</h4>
                    <p className="text-[10px] text-[#2D6A4F] italic mb-1">{proj.role}</p>
                    <p className="text-[10px] text-[#555] leading-relaxed">{proj.description}</p>
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

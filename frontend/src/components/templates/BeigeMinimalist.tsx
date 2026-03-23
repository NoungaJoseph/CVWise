import React from 'react';
import { CVData } from '@/src/lib/EditorContext';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface TemplateProps {
  cvData: CVData;
}

// Beige Minimalist Corporate IT style
export const BeigeMinimalist: React.FC<TemplateProps> = ({ cvData }) => {
  const { personalInfo, experience, education, skills, projects, style } = cvData;
  const accentColor = style.primaryColor || '#8B7355';

  return (
    <div className="w-full bg-[#F5F0E8] min-h-[1122px]" style={{ fontFamily: "'Georgia', serif" }}>
      {/* Header */}
      <div className="bg-[#4A3728] text-white px-10 py-8">
        <h1 className="text-4xl font-bold tracking-widest uppercase mb-1" style={{ letterSpacing: '0.15em' }}>
          {personalInfo.firstName || 'FIRST'} <span className="font-light">{personalInfo.lastName || 'LAST'}</span>
        </h1>
        <p className="text-[#D4C4A8] text-sm tracking-[0.3em] uppercase font-light">
          {personalInfo.title || 'IT PROJECT MANAGER'}
        </p>
        <div className="flex flex-wrap gap-6 mt-4 text-xs text-[#D4C4A8]">
          {personalInfo.email && <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {personalInfo.email}</span>}
          {personalInfo.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {personalInfo.phone}</span>}
          {personalInfo.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {personalInfo.location}</span>}
          {personalInfo.linkedin && <span className="flex items-center gap-1"><Linkedin className="w-3 h-3" /> {personalInfo.linkedin}</span>}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-0 min-h-[1000px]">
        {/* Sidebar */}
        <div className="bg-[#EDE5D0] px-7 py-8 space-y-8">
          {/* Skills */}
          <section>
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#4A3728] border-b border-[#4A3728]/30 pb-2 mb-5">Skills</h3>
            <div className="space-y-3">
              {(skills.length > 0 ? skills : [
                { id: '1', name: 'Project Management', level: 'Expert' as const, category: '' },
                { id: '2', name: 'Agile / Scrum', level: 'Expert' as const, category: '' },
                { id: '3', name: 'Risk Management', level: 'Proficient' as const, category: '' },
                { id: '4', name: 'Stakeholder Management', level: 'Expert' as const, category: '' },
                { id: '5', name: 'Microsoft Office', level: 'Expert' as const, category: '' },
              ]).map(skill => (
                <div key={skill.id}>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="font-semibold text-[#4A3728]">{skill.name}</span>
                    <span className="text-[#4A3728]/60">{skill.level}</span>
                  </div>
                  <div className="h-1 bg-[#4A3728]/20 rounded-full">
                    <div className="h-full bg-[#4A3728] rounded-full" style={{ width: skill.level === 'Expert' ? '90%' : skill.level === 'Proficient' ? '70%' : '50%' }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#4A3728] border-b border-[#4A3728]/30 pb-2 mb-5">Education</h3>
            <div className="space-y-5">
              {(education.length > 0 ? education : [
                { id: '1', institution: 'State University', degree: 'B.Sc. Information Technology', startDate: '2014', endDate: '2018' },
              ]).map(edu => (
                <div key={edu.id}>
                  <p className="font-bold text-[11px] text-[#4A3728]">{edu.degree}</p>
                  <p className="text-[10px] text-[#4A3728]/70 italic mt-0.5">{edu.institution}</p>
                  <p className="text-[10px] text-[#4A3728]/50 mt-0.5">{edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#4A3728] border-b border-[#4A3728]/30 pb-2 mb-5">Languages</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px]"><span className="text-[#4A3728] font-semibold">English</span><span className="text-[#4A3728]/60">Native</span></div>
              <div className="flex justify-between text-[10px]"><span className="text-[#4A3728] font-semibold">French</span><span className="text-[#4A3728]/60">Intermediate</span></div>
            </div>
          </section>
        </div>

        {/* Main Content */}
        <div className="col-span-2 bg-[#F5F0E8] px-8 py-8 space-y-8">
          {/* Profile */}
          {personalInfo.summary && (
            <section>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#4A3728] border-b border-[#4A3728]/30 pb-2 mb-4">Profile</h3>
              <p className="text-xs leading-relaxed text-[#4A3728]/80">{personalInfo.summary}</p>
            </section>
          )}

          {/* Experience */}
          <section>
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#4A3728] border-b border-[#4A3728]/30 pb-2 mb-5">Professional Experience</h3>
            <div className="space-y-6">
              {(experience.length > 0 ? experience : [
                { id: '1', title: 'Senior IT Project Manager', company: 'Tech Solutions Inc.', period: '2021 — Present', description: 'Led cross-functional teams of 15+ members to deliver enterprise-level IT projects on time and within budget. Implemented Agile methodologies that reduced delivery time by 25%.' },
                { id: '2', title: 'IT Project Manager', company: 'Digital Corp', period: '2018 — 2021', description: 'Managed multiple concurrent projects with budgets up to $2M. Coordinated with stakeholders across 5 departments to ensure alignment with business objectives.' },
              ]).map(exp => (
                <div key={exp.id} className="relative pl-5 border-l-2 border-[#4A3728]/20">
                  <div className="absolute w-2 h-2 bg-[#4A3728] rounded-full -left-[5px] top-1.5"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm text-[#4A3728]">{exp.title}</h4>
                    <span className="text-[10px] text-[#4A3728]/60 font-semibold shrink-0 ml-4">{exp.period}</span>
                  </div>
                  <p className="text-[11px] font-semibold text-[#8B7355] mb-2">{exp.company}</p>
                  <p className="text-xs text-[#4A3728]/70 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#4A3728] border-b border-[#4A3728]/30 pb-2 mb-5">Key Projects</h3>
              <div className="space-y-4">
                {projects.map(proj => (
                  <div key={proj.id} className="pl-5 border-l-2 border-[#4A3728]/20">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-xs text-[#4A3728]">{proj.title}</h4>
                      <span className="text-[10px] text-[#4A3728]/60 shrink-0 ml-4">{proj.date}</span>
                    </div>
                    <p className="text-[11px] italic text-[#8B7355] mb-1">{proj.role}</p>
                    <p className="text-xs text-[#4A3728]/70 leading-relaxed">{proj.description}</p>
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

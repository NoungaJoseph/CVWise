import React from 'react';
import { CVData } from '@/src/lib/EditorContext';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface TemplateProps {
  cvData: CVData;
}

// Minimalist CV - clean single column
export const MinimalistCV: React.FC<TemplateProps> = ({ cvData }) => {
  const { personalInfo, experience, education, skills, projects, style } = cvData;
  const accent = style.primaryColor || '#1A1A1A';

  return (
    <div className="w-full bg-white min-h-[1122px] px-14 py-12" style={{ fontFamily: "'Georgia', serif" }}>
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-5xl font-black tracking-tight text-[#1A1A1A] mb-2">
          {personalInfo.firstName || 'FIRST'} {personalInfo.lastName || 'LAST'}
        </h1>
        <p className="text-base text-[#555] tracking-[0.15em] uppercase font-light mb-5">
          {personalInfo.title || 'Professional Title'}
        </p>
        <div className="flex flex-wrap gap-6 text-[11px] text-[#888]">
          {personalInfo.email && <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" />{personalInfo.email}</span>}
          {personalInfo.phone && <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" />{personalInfo.phone}</span>}
          {personalInfo.location && <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{personalInfo.location}</span>}
          {personalInfo.linkedin && <span className="flex items-center gap-1.5"><Linkedin className="w-3 h-3" />{personalInfo.linkedin}</span>}
          {personalInfo.portfolio && <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" />{personalInfo.portfolio}</span>}
        </div>
        <div className="mt-6 h-px bg-[#1A1A1A]" />
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-8">
          <p className="text-sm text-[#555] leading-relaxed italic">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1A1A1A] mb-5">Experience</h2>
        <div className="space-y-7">
          {(experience.length > 0 ? experience : [
            { id: '1', title: 'Senior Manager', company: 'Acme Corporation', period: '2020 — Present', description: 'Led strategic initiatives resulting in 35% revenue growth. Managed cross-functional team of 20 professionals across 3 countries.' },
            { id: '2', title: 'Manager', company: 'Global Solutions Ltd.', period: '2017 — 2020', description: 'Drove operational improvements that reduced costs by 25%. Developed and mentored a high-performing team of 10 direct reports.' },
            { id: '3', title: 'Analyst', company: 'Consulting Partners', period: '2015 — 2017', description: 'Delivered data-driven insights to C-suite clients. Led market research across 5 industries.' },
          ]).map(exp => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm text-[#1A1A1A]">{exp.title}</h3>
                <span className="text-[10px] text-[#888] font-medium">{exp.period}</span>
              </div>
              <p className="text-[11px] text-[#666] font-medium mt-0.5 mb-2">{exp.company}</p>
              <p className="text-xs text-[#777] leading-relaxed">{exp.description}</p>
              <div className="mt-4 h-px bg-[#F0F0F0]" />
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1A1A1A] mb-5">Education</h2>
        <div className="space-y-4">
          {(education.length > 0 ? education : [
            { id: '1', degree: 'Master of Business Administration', institution: 'Stanford University', startDate: '2013', endDate: '2015' },
            { id: '2', degree: 'B.Sc. Economics', institution: 'University of Chicago', startDate: '2009', endDate: '2013' },
          ]).map(edu => (
            <div key={edu.id} className="flex justify-between items-start">
              <div>
                <p className="font-bold text-sm text-[#1A1A1A]">{edu.degree}</p>
                <p className="text-xs text-[#888] mt-0.5">{edu.institution}</p>
              </div>
              <span className="text-[10px] text-[#888] shrink-0 ml-4">{edu.startDate} — {edu.endDate}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1A1A1A] mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {(skills.length > 0 ? skills : [
            { id: '1', name: 'Strategic Planning', level: 'Expert' as const, category: '' },
            { id: '2', name: 'Financial Modeling', level: 'Expert' as const, category: '' },
            { id: '3', name: 'Team Leadership', level: 'Expert' as const, category: '' },
            { id: '4', name: 'Data Analysis', level: 'Proficient' as const, category: '' },
            { id: '5', name: 'Stakeholder Mgmt', level: 'Expert' as const, category: '' },
            { id: '6', name: 'Product Strategy', level: 'Proficient' as const, category: '' },
          ]).map(skill => (
            <span
              key={skill.id}
              className="px-3 py-1 border border-[#1A1A1A]/20 text-[10px] font-semibold text-[#444] uppercase tracking-wider"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1A1A1A] mb-5">Notable Projects</h2>
          <div className="space-y-4">
            {projects.map(proj => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm text-[#1A1A1A]">{proj.title}</h3>
                  <span className="text-[10px] text-[#888]">{proj.date}</span>
                </div>
                <p className="text-xs text-[#888] italic mt-0.5 mb-1">{proj.role}</p>
                <p className="text-xs text-[#777] leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <div className="mt-10 h-px bg-[#1A1A1A]" />
      <p className="mt-4 text-[9px] text-[#CCC] uppercase tracking-[0.35em] text-center">Crafted with CVWise</p>
    </div>
  );
};

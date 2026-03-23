import React from 'react';
import { CVData } from '@/src/lib/EditorContext';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface TemplateProps {
  cvData: CVData;
}

// Blue and Gray Simple Professional CV
export const BlueGrayProfessional: React.FC<TemplateProps> = ({ cvData }) => {
  const { personalInfo, experience, education, skills, projects, style } = cvData;

  return (
    <div className="w-full bg-white min-h-[1122px]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Top Header */}
      <div className="bg-[#2D4A6B] text-white px-10 py-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-black tracking-tight mb-2">
              {personalInfo.firstName || 'JOHN'}<br />
              <span className="text-[#A8C4E0]">{personalInfo.lastName || 'SMITH'}</span>
            </h1>
            <p className="text-[#A8C4E0] tracking-[0.2em] uppercase text-sm font-light">
              {personalInfo.title || 'PROFESSIONAL CONSULTANT'}
            </p>
          </div>
          <div className="text-right text-xs space-y-2 text-[#A8C4E0]">
            {personalInfo.email && <p>{personalInfo.email}</p>}
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.location && <p>{personalInfo.location}</p>}
            {personalInfo.linkedin && <p>{personalInfo.linkedin}</p>}
          </div>
        </div>
      </div>

      {/* Gray accent bar */}
      <div className="bg-[#9EAFC0] h-1.5 w-full" />

      <div className="grid grid-cols-3 min-h-[1000px]">
        {/* Left sidebar */}
        <div className="bg-[#F3F6F9] px-7 py-8 space-y-8">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-[#2D4A6B]/10 border-4 border-[#2D4A6B]/20 flex items-center justify-center">
              {personalInfo.profileImage ? (
                <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
              ) : (
                <span className="text-4xl font-black text-[#2D4A6B]/40">
                  {personalInfo.firstName?.[0]}{personalInfo.lastName?.[0]}
                </span>
              )}
            </div>
          </div>

          {/* Skills */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2D4A6B] border-b-2 border-[#2D4A6B] pb-2 mb-4">Skills</h3>
            <div className="space-y-2.5">
              {(skills.length > 0 ? skills : [
                { id: '1', name: 'Leadership', level: 'Expert' as const, category: '' },
                { id: '2', name: 'Project Management', level: 'Expert' as const, category: '' },
                { id: '3', name: 'Data Analysis', level: 'Proficient' as const, category: '' },
                { id: '4', name: 'Strategic Planning', level: 'Expert' as const, category: '' },
                { id: '5', name: 'Communication', level: 'Expert' as const, category: '' },
              ]).map(skill => (
                <div key={skill.id} className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="font-semibold text-[#2D4A6B]">{skill.name}</span>
                  </div>
                  <div className="h-1 bg-[#2D4A6B]/15 rounded-full">
                    <div className="h-full bg-[#2D4A6B] rounded-full transition-all" style={{ width: skill.level === 'Expert' ? '90%' : skill.level === 'Proficient' ? '70%' : '50%' }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2D4A6B] border-b-2 border-[#2D4A6B] pb-2 mb-4">Education</h3>
            <div className="space-y-4">
              {(education.length > 0 ? education : [
                { id: '1', degree: 'Master of Business Administration', institution: 'Harvard University', startDate: '2018', endDate: '2020' },
                { id: '2', degree: 'B.Sc. Business Management', institution: 'State University', startDate: '2014', endDate: '2018' },
              ]).map(edu => (
                <div key={edu.id}>
                  <p className="font-bold text-[11px] text-[#2D4A6B]">{edu.degree}</p>
                  <p className="text-[10px] text-[#9EAFC0] mt-0.5">{edu.institution}</p>
                  <p className="text-[10px] text-[#9EAFC0]/70 mt-0.5">{edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2D4A6B] border-b-2 border-[#2D4A6B] pb-2 mb-4">Languages</h3>
            <div className="space-y-2">
              {['English — Native', 'Spanish — B2', 'French — A2'].map(lang => (
                <p key={lang} className="text-[11px] text-[#2D4A6B]/70">{lang}</p>
              ))}
            </div>
          </section>
        </div>

        {/* Right main content */}
        <div className="col-span-2 px-8 py-8 space-y-8">
          {/* Summary */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2D4A6B] border-b-2 border-[#2D4A6B] pb-2 mb-4">Professional Summary</h3>
            <p className="text-xs leading-relaxed text-[#444]">
              {personalInfo.summary || 'Results-driven professional with extensive experience in strategic planning, team leadership, and business development. Known for delivering complex projects on time and exceeding stakeholder expectations. Passionate about leveraging data to drive business decisions.'}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2D4A6B] border-b-2 border-[#2D4A6B] pb-2 mb-5">Work Experience</h3>
            <div className="space-y-6">
              {(experience.length > 0 ? experience : [
                { id: '1', title: 'Senior Business Consultant', company: 'McKinsey & Company', period: '2020 — Present', description: 'Delivered strategic consulting to Fortune 500 clients, driving revenue growth and operational efficiency improvements averaging 30%.' },
                { id: '2', title: 'Business Analyst', company: 'Deloitte', period: '2018 — 2020', description: 'Analyzed business processes and implemented data-driven solutions for 12 clients across retail and finance sectors.' },
              ]).map(exp => (
                <div key={exp.id} className="pl-5 border-l-2 border-[#2D4A6B]/20 relative">
                  <div className="absolute w-2 h-2 bg-[#2D4A6B] rounded-full -left-[5px] top-1"></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-black text-sm text-[#2D4A6B]">{exp.title}</h4>
                    <span className="text-[10px] text-[#9EAFC0] font-bold ml-2 shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-[11px] font-bold text-[#9EAFC0] uppercase tracking-wider mb-2">{exp.company}</p>
                  <p className="text-xs text-[#666] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2D4A6B] border-b-2 border-[#2D4A6B] pb-2 mb-4">Key Projects</h3>
              <div className="space-y-4">
                {projects.map(proj => (
                  <div key={proj.id} className="pl-5 border-l-2 border-[#2D4A6B]/20 relative">
                    <div className="absolute w-2 h-2 bg-[#2D4A6B] rounded-full -left-[5px] top-1"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-xs text-[#2D4A6B]">{proj.title}</h4>
                      <span className="text-[10px] text-[#9EAFC0] ml-2 shrink-0">{proj.date}</span>
                    </div>
                    <p className="text-xs text-[#666] leading-relaxed">{proj.description}</p>
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

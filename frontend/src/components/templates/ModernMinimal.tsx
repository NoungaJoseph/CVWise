import React from 'react';
import { CVData } from '@/src/lib/EditorContext';

interface TemplateProps {
  cvData: CVData;
}

export const ModernMinimal: React.FC<TemplateProps> = ({ cvData }) => {
  return (
    <div 
      className="p-12 h-full"
      style={{ fontFamily: cvData.style.fontFamily }}
    >
      <header className="border-b-4 pb-8 mb-8" style={{ borderColor: cvData.style.primaryColor }}>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter" style={{ color: cvData.style.primaryColor }}>
              {cvData.personalInfo.firstName || 'YOUR'} {cvData.personalInfo.lastName || 'NAME'}
            </h1>
            <p className="text-xl font-bold opacity-70 mt-2">{cvData.personalInfo.title || 'PROFESSIONAL TITLE'}</p>
          </div>
          <div className="text-right text-sm space-y-1 opacity-60">
            <p>{cvData.personalInfo.email}</p>
            <p>{cvData.personalInfo.phone}</p>
            <p>{cvData.personalInfo.location}</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-12">
        {/* Main Column */}
        <div className="col-span-2 space-y-10">
          <section>
            <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-4 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              {cvData.personalInfo.summary || 'An accomplished professional with a track record of driving impact through architectural excellence and strategic leadership.'}
            </p>
          </section>

          <section>
            <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-6 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
              Experience
            </h3>
            <div className="space-y-8">
              {cvData.experience.map(exp => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-base">{exp.title}</h4>
                    <span className="text-xs font-bold opacity-50 uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <p className="text-sm font-bold" style={{ color: cvData.style.primaryColor }}>{exp.company}</p>
                  <p className="text-sm leading-relaxed text-slate-600 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
              <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-6 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
                  Major Projects
              </h3>
              <div className="space-y-6">
                  {cvData.projects.map(proj => (
                      <div key={proj.id} className="space-y-1">
                          <div className="flex justify-between items-baseline">
                              <h4 className="font-bold text-sm">{proj.title}</h4>
                              <span className="text-[10px] font-bold opacity-50">{proj.date}</span>
                          </div>
                          <p className="text-xs font-bold opacity-70 italic">{proj.role}</p>
                          <p className="text-xs leading-relaxed text-slate-600">{proj.description}</p>
                      </div>
                  ))}
              </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
           <section>
              <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-4 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
                  Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                  {cvData.skills.map(skill => (
                      <span key={skill.id} className="inline-block px-2 py-1 bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-tighter">
                          {skill.name}
                      </span>
                  ))}
              </div>
          </section>

          <section>
              <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-4 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
                  Education
              </h3>
              <div className="space-y-6">
                  {cvData.education.map(edu => (
                      <div key={edu.id} className="space-y-1">
                          <h4 className="font-bold text-xs">{edu.degree}</h4>
                          <p className="text-[10px] font-bold opacity-70 italic">{edu.institution}</p>
                          <p className="text-[10px] opacity-50">{edu.startDate} — {edu.endDate}</p>
                      </div>
                  ))}
              </div>
          </section>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t-2 text-[8px] font-bold opacity-20 uppercase tracking-[0.5em] text-center">
          Architected with CVWise Editorial Engine
      </div>
    </div>
  );
};

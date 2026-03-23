import React from 'react';
import { CVData } from '@/src/lib/EditorContext';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, User, Briefcase } from 'lucide-react';

interface TemplateProps {
  cvData: CVData;
}

export const ProfessionalExecutive: React.FC<TemplateProps> = ({ cvData }) => {
  const { personalInfo, experience, education, skills, projects, style } = cvData;

  return (
    <div className="flex min-h-[1122px] w-full bg-white shadow-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Left Sidebar */}
      <div className="w-[32%] bg-[#394457] text-white p-8 flex flex-col gap-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="w-48 h-48 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-200">
            {personalInfo.profileImage ? (
              <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#394457]">
                <span className="text-5xl font-bold">
                  {personalInfo.firstName?.[0]}{personalInfo.lastName?.[0]}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Contact */}
        <section>
          <h3 className="text-xl font-bold uppercase tracking-[0.2em] border-b border-white/30 pb-2 mb-6 font-headline">Contact</h3>
          <ul className="space-y-4 text-xs font-medium">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-white/70" />
              <span>{personalInfo.phone || '+123-456-7890'}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-white/70" />
              <span className="break-all">{personalInfo.email || 'hello@reallygreatsite.com'}</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-white/70" />
              <span>{personalInfo.location || '123 Anywhere St., Any City'}</span>
            </li>
            {personalInfo.linkedin && (
              <li className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-white/70" />
                <span>LinkedIn</span>
              </li>
            )}
          </ul>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-xl font-bold uppercase tracking-[0.2em] border-b border-white/30 pb-2 mb-6 font-headline">Education</h3>
          <div className="space-y-6">
            {education.length > 0 ? education.map(edu => (
              <div key={edu.id}>
                <h4 className="font-bold text-sm mb-1">{edu.institution}</h4>
                <p className="text-xs text-white/80 mb-1">{edu.degree}</p>
                <p className="text-[10px] font-bold text-white/60">{edu.startDate} - {edu.endDate}</p>
              </div>
            )) : (
              <div>
                <h4 className="font-bold text-sm mb-1">Borcelle University</h4>
                <p className="text-xs text-white/80 mb-1">Bachelor International Management</p>
                <p className="text-[10px] font-bold text-white/60">2016 - 2019</p>
              </div>
            )}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xl font-bold uppercase tracking-[0.2em] border-b border-white/30 pb-2 mb-6 font-headline">Skills</h3>
          <ul className="space-y-2 text-xs font-medium list-disc ml-4">
            {skills.length > 0 ? skills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            )) : (
              <>
                <li>Management Skills</li>
                <li>Marketing Sales</li>
                <li>Digital Marketing</li>
                <li>Negotiation</li>
                <li>Critical Thinking</li>
                <li>Leadership</li>
              </>
            )}
          </ul>
        </section>

        {/* Languages (Optional) */}
        <section className="mt-auto">
          <h3 className="text-xl font-bold uppercase tracking-[0.2em] border-b border-white/30 pb-2 mb-6 font-headline">Language</h3>
          <div className="space-y-4">
             <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>English</span>
                </div>
                <div className="h-1.5 w-full bg-white/20 rounded-full">
                  <div className="h-full bg-white rounded-full w-[90%]"></div>
                </div>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>Korean</span>
                </div>
                <div className="h-1.5 w-full bg-white/20 rounded-full">
                  <div className="h-full bg-white rounded-full w-[70%]"></div>
                </div>
             </div>
          </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col">
          {/* Header Block */}
          <div className="bg-[#394457] text-white p-12 pb-16 flex flex-col justify-end min-h-[250px] relative">
            {/* Design overlap from original */}
            <div className="absolute top-0 right-0 w-64 h-24 bg-white hidden lg:block"></div>
            
            <div className="relative pt-12">
              <h1 className="text-6xl font-serif tracking-tight font-light mb-4">
                {personalInfo.firstName || 'JACKSON'} <br/>
                <span className="font-bold">{personalInfo.lastName || 'ANDERSON'}</span>
              </h1>
              <div className="h-0.5 bg-white/30 w-full mb-4"></div>
              <p className="text-2xl font-light tracking-[0.1em] text-white/90">
                {personalInfo.title || 'Marketing Manager'}
              </p>
            </div>
          </div>

          <div className="p-12 flex-1 space-y-12">
            {/* Profile */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                 <User className="w-6 h-6 text-[#394457]" />
                 <h3 className="text-xl font-bold uppercase tracking-[0.2em] font-headline border-b-2 border-[#394457] pb-1">Profile</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                {personalInfo.summary || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
              </p>
            </section>

            {/* Experience */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                 <Briefcase className="w-6 h-6 text-[#394457]" />
                 <h3 className="text-xl font-bold uppercase tracking-[0.2em] font-headline border-b-2 border-[#394457] pb-1">Experience</h3>
              </div>
              <div className="space-y-10">
                {experience.length > 0 ? experience.map(exp => (
                  <div key={exp.id} className="grid grid-cols-4 gap-6">
                    <div className="text-xs font-bold text-[#394457] uppercase tracking-wider pt-1">
                      {exp.period}
                    </div>
                    <div className="col-span-3 border-l-2 border-[#394457]/10 pl-8 relative">
                      <div className="absolute w-3 h-3 bg-[#394457] rounded-full -left-[7px] top-1.5 border-2 border-white"></div>
                      <h4 className="font-black text-lg text-slate-900 mb-1">{exp.company}</h4>
                      <p className="text-sm font-bold text-[#394457] mb-4 uppercase tracking-widest">{exp.title}</p>
                      <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                )) : (
                  <>
                    <div className="grid grid-cols-4 gap-6">
                      <div className="text-xs font-bold text-[#394457] uppercase tracking-wider pt-1">
                        2020 - 2023
                      </div>
                      <div className="col-span-3 border-l-2 border-[#394457]/10 pl-8 relative">
                         <div className="absolute w-3 h-3 bg-[#394457] rounded-full -left-[7px] top-1.5 border-2 border-white"></div>
                        <h4 className="font-black text-lg text-slate-900 mb-1">Borcello International Co.</h4>
                        <p className="text-sm font-bold text-[#394457] mb-4 uppercase tracking-widest">Marketing Manager</p>
                        <ul className="text-sm text-slate-600 space-y-2 list-disc ml-4">
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                      <div className="text-xs font-bold text-[#394457] uppercase tracking-wider pt-1">
                        2019 - 2020
                      </div>
                      <div className="col-span-3 border-l-2 border-[#394457]/10 pl-8 relative">
                         <div className="absolute w-3 h-3 bg-[#394457] rounded-full -left-[7px] top-1.5 border-2 border-white"></div>
                        <h4 className="font-black text-lg text-slate-900 mb-1">Salford & Co.</h4>
                        <p className="text-sm font-bold text-[#394457] mb-4 uppercase tracking-widest">Marketing Manager</p>
                        <ul className="text-sm text-slate-600 space-y-2 list-disc ml-4">
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* References */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                 <Globe className="w-6 h-6 text-[#394457]" />
                 <h3 className="text-xl font-bold uppercase tracking-[0.2em] font-headline border-b-2 border-[#394457] pb-1">References</h3>
              </div>
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-2">
                  <h4 className="font-black text-slate-900">Olivia Wilson</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase">Wardiere Inc. / CEO</p>
                  <p className="text-xs flex items-center gap-2">
                    <span className="font-bold">Contact:</span> +123-456-7890
                  </p>
                </div>
              </div>
            </section>

             {/* Footer decoration */}
             <div className="mt-auto pt-12 border-t border-slate-100 text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em] text-center">
                ARCHITECTED WITH CVWISE
             </div>
          </div>
      </div>
    </div>
  );
};

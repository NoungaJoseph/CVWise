import React from 'react';
import { CVData } from '@/src/lib/EditorContext';
import { Mail, Phone, MapPin, Github, Globe } from 'lucide-react';

interface TemplateProps {
  cvData: CVData;
}

// Green Modern Bold Software Developer Resume
export const GreenModernBold: React.FC<TemplateProps> = ({ cvData }) => {
  const { personalInfo, experience, education, skills, projects, style } = cvData;

  return (
    <div className="w-full bg-[#0A1628] min-h-[1122px] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="px-10 pt-10 pb-8 relative">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-[#22C55E] text-xs font-black tracking-[0.4em] uppercase mb-3">Software Developer</div>
            <h1 className="text-6xl font-black tracking-tighter leading-none">
              {personalInfo.firstName || 'JOHN'}<br />
              <span className="text-[#22C55E]">{personalInfo.lastName || 'DOE'}</span>
            </h1>
          </div>
          <div className="text-right space-y-2 text-xs text-white/60 mt-2">
            {personalInfo.email && <p className="flex items-center gap-2 justify-end"><Mail className="w-3 h-3 text-[#22C55E]" />{personalInfo.email}</p>}
            {personalInfo.phone && <p className="flex items-center gap-2 justify-end"><Phone className="w-3 h-3 text-[#22C55E]" />{personalInfo.phone}</p>}
            {personalInfo.location && <p className="flex items-center gap-2 justify-end"><MapPin className="w-3 h-3 text-[#22C55E]" />{personalInfo.location}</p>}
            {personalInfo.github && <p className="flex items-center gap-2 justify-end"><Github className="w-3 h-3 text-[#22C55E]" />{personalInfo.github}</p>}
            {personalInfo.portfolio && <p className="flex items-center gap-2 justify-end"><Globe className="w-3 h-3 text-[#22C55E]" />{personalInfo.portfolio}</p>}
          </div>
        </div>
        <div className="mt-6 h-0.5 bg-[#22C55E]/30 w-full" />
      </div>

      <div className="px-10 pb-10 grid grid-cols-3 gap-8">
        {/* Left sidebar */}
        <div className="space-y-8">
          {/* Tech Skills */}
          <section>
            <h3 className="text-[#22C55E] text-[10px] font-black tracking-[0.3em] uppercase mb-4">{"<"} Skills {">"}</h3>
            <div className="space-y-3">
              {(skills.length > 0 ? skills : [
                { id: '1', name: 'React / Next.js', level: 'Expert' as const, category: '' },
                { id: '2', name: 'TypeScript', level: 'Expert' as const, category: '' },
                { id: '3', name: 'Node.js', level: 'Expert' as const, category: '' },
                { id: '4', name: 'Python', level: 'Proficient' as const, category: '' },
                { id: '5', name: 'AWS / GCP', level: 'Proficient' as const, category: '' },
                { id: '6', name: 'Docker / K8s', level: 'Proficient' as const, category: '' },
                { id: '7', name: 'PostgreSQL', level: 'Expert' as const, category: '' },
              ]).map(skill => (
                <div key={skill.id} className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="font-semibold text-white/80">{skill.name}</span>
                    <span className="text-[#22C55E]/60">{skill.level === 'Expert' ? '●●●' : skill.level === 'Proficient' ? '●●○' : '●○○'}</span>
                  </div>
                  <div className="h-0.5 bg-white/10 rounded-full">
                    <div className="h-full bg-[#22C55E] rounded-full" style={{ width: skill.level === 'Expert' ? '90%' : skill.level === 'Proficient' ? '65%' : '40%' }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-[#22C55E] text-[10px] font-black tracking-[0.3em] uppercase mb-4">{"<"} Education {">"}</h3>
            <div className="space-y-4">
              {(education.length > 0 ? education : [
                { id: '1', degree: 'B.Sc. Computer Science', institution: 'MIT', startDate: '2015', endDate: '2019' },
              ]).map(edu => (
                <div key={edu.id}>
                  <p className="font-black text-[11px] text-white">{edu.degree}</p>
                  <p className="text-[10px] text-[#22C55E] mt-0.5">{edu.institution}</p>
                  <p className="text-[10px] text-white/40 mt-0.5">{edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-[#22C55E] text-[10px] font-black tracking-[0.3em] uppercase mb-4">{"<"} Certifications {">"}</h3>
            <div className="space-y-2">
              {['AWS Solutions Architect', 'Google Cloud Professional', 'Kubernetes Administrator'].map(cert => (
                <p key={cert} className="text-[10px] text-white/60 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#22C55E] rounded-full shrink-0"></span>{cert}
                </p>
              ))}
            </div>
          </section>
        </div>

        {/* Main content */}
        <div className="col-span-2 space-y-8">
          {/* Summary */}
          {personalInfo.summary && (
            <section>
              <h3 className="text-[#22C55E] text-[10px] font-black tracking-[0.3em] uppercase mb-3">{"// ABOUT"}</h3>
              <p className="text-xs text-white/70 leading-relaxed font-mono">{personalInfo.summary}</p>
            </section>
          )}

          {/* Experience */}
          <section>
            <h3 className="text-[#22C55E] text-[10px] font-black tracking-[0.3em] uppercase mb-5">{"// EXPERIENCE"}</h3>
            <div className="space-y-7">
              {(experience.length > 0 ? experience : [
                { id: '1', title: 'Senior Software Engineer', company: 'Google', period: '2022 — Present', description: 'Architected and shipped high-performance React applications serving 50M+ users. Led team of 6 engineers, introduced TypeScript and testing culture that reduced bugs by 45%.' },
                { id: '2', title: 'Full Stack Developer', company: 'Stripe', period: '2019 — 2022', description: 'Built payment processing microservices handling $10B+ in annual transaction volume. Reduced API latency by 60% through Redis caching and query optimization.' },
              ]).map(exp => (
                <div key={exp.id} className="border-l-2 border-[#22C55E]/30 pl-5 relative">
                  <div className="absolute w-2 h-2 bg-[#22C55E] rounded-full -left-[5px] top-1"></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-black text-sm text-white">{exp.title}</h4>
                    <span className="text-[10px] text-[#22C55E] font-mono ml-2 shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-[11px] text-[#22C55E] font-bold uppercase tracking-wider mb-2">{exp.company}</p>
                  <p className="text-xs text-white/60 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-[#22C55E] text-[10px] font-black tracking-[0.3em] uppercase mb-4">{"// PROJECTS"}</h3>
            <div className="space-y-4">
              {(projects.length > 0 ? projects : [
                { id: '1', title: 'OpenSource CLI Tool', role: 'Creator & Maintainer', date: '2023', description: 'Built a developer productivity CLI with 5k+ GitHub stars. Saves developers ~2 hours per week on repetitive tasks.', link: 'github.com/johndoe/cli-tool' },
              ]).map(proj => (
                <div key={proj.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-black text-xs text-white">{proj.title}</h4>
                    <span className="text-[10px] text-[#22C55E]/60 ml-2 shrink-0">{proj.date}</span>
                  </div>
                  <p className="text-[10px] text-[#22C55E] mb-2">{proj.role}</p>
                  <p className="text-[10px] text-white/50 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

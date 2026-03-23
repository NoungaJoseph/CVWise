import React from 'react';
import { CVData } from '@/src/lib/EditorContext';
import { Mail, Phone, MapPin, Linkedin, Instagram, Globe } from 'lucide-react';

interface TemplateProps {
  cvData: CVData;
}

// Pink Aesthetic Beauty Influencer CV
export const PinkAesthetic: React.FC<TemplateProps> = ({ cvData }) => {
  const { personalInfo, experience, education, skills, projects, style } = cvData;

  return (
    <div className="w-full bg-[#FFF5F8] min-h-[1122px]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="bg-[#E8306B] text-white px-10 py-10 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-white/10 rounded-full" />
        <div className="absolute top-4 right-20 w-16 h-16 border-2 border-white/10 rounded-full" />
        <div className="flex items-center gap-8 relative z-10">
          {/* Profile photo */}
          <div className="w-28 h-28 rounded-full border-4 border-white/40 overflow-hidden bg-[#EC4899]/30 shrink-0">
            {personalInfo.profileImage ? (
              <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-3xl font-black text-white/60">
                  {personalInfo.firstName?.[0]}{personalInfo.lastName?.[0]}
                </span>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tight leading-tight">
              {personalInfo.firstName || 'EMMA'}<br />
              <span className="text-white/80">{personalInfo.lastName || 'ROSE'}</span>
            </h1>
            <p className="text-white/70 text-xs tracking-[0.3em] uppercase mt-2">
              {personalInfo.title || 'Beauty Influencer & Content Creator'}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-[10px] text-white/70">
              {personalInfo.email && <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{personalInfo.email}</span>}
              {personalInfo.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{personalInfo.phone}</span>}
              {personalInfo.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{personalInfo.location}</span>}
              {personalInfo.linkedin && <span className="flex items-center gap-1"><Linkedin className="w-3 h-3" />{personalInfo.linkedin}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 min-h-[900px]">
        {/* Sidebar */}
        <div className="bg-[#FDE8F0] px-7 py-8 space-y-7">
          {/* About */}
          {personalInfo.summary && (
            <section>
              <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E8306B] border-b-2 border-[#E8306B]/20 pb-2 mb-3">About</h3>
              <p className="text-[11px] text-[#666] leading-relaxed">{personalInfo.summary}</p>
            </section>
          )}

          {/* Skills */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E8306B] border-b-2 border-[#E8306B]/20 pb-2 mb-4">Skills</h3>
            <div className="space-y-3">
              {(skills.length > 0 ? skills : [
                { id: '1', name: 'Content Creation', level: 'Expert' as const, category: '' },
                { id: '2', name: 'Photography', level: 'Expert' as const, category: '' },
                { id: '3', name: 'Video Editing', level: 'Proficient' as const, category: '' },
                { id: '4', name: 'Make-up Artistry', level: 'Expert' as const, category: '' },
                { id: '5', name: 'Brand Partnerships', level: 'Expert' as const, category: '' },
                { id: '6', name: 'Social Media Mgmt', level: 'Expert' as const, category: '' },
              ]).map(skill => (
                <div key={skill.id} className="space-y-1">
                  <span className="text-[10px] text-[#444] font-semibold">{skill.name}</span>
                  <div className="h-1 bg-[#E8306B]/15 rounded-full">
                    <div className="h-full bg-[#E8306B] rounded-full" style={{ width: skill.level === 'Expert' ? '90%' : skill.level === 'Proficient' ? '65%' : '45%' }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E8306B] border-b-2 border-[#E8306B]/20 pb-2 mb-3">Education</h3>
            <div className="space-y-3">
              {(education.length > 0 ? education : [
                { id: '1', degree: 'B.A. Fashion & Media', institution: 'London College of Fashion', startDate: '2016', endDate: '2020' },
              ]).map(edu => (
                <div key={edu.id}>
                  <p className="font-bold text-[11px] text-[#333]">{edu.degree}</p>
                  <p className="text-[10px] text-[#E8306B] italic mt-0.5">{edu.institution}</p>
                  <p className="text-[10px] text-[#AAA] mt-0.5">{edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Media Stats */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E8306B] border-b-2 border-[#E8306B]/20 pb-2 mb-3">Reach</h3>
            <div className="space-y-3">
              {[
                { platform: 'Instagram', handle: '@handle', followers: '250K' },
                { platform: 'TikTok', handle: '@handle', followers: '1.2M' },
                { platform: 'YouTube', handle: 'Channel', followers: '85K' },
              ].map(s => (
                <div key={s.platform} className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-bold text-[#333]">{s.platform}</p>
                    <p className="text-[9px] text-[#AAA]">{s.handle}</p>
                  </div>
                  <span className="text-sm font-black text-[#E8306B]">{s.followers}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Main content */}
        <div className="col-span-2 px-8 py-8 space-y-8">
          {/* Experience */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E8306B] border-b-2 border-[#E8306B]/20 pb-2 mb-5">Experience</h3>
            <div className="space-y-6">
              {(experience.length > 0 ? experience : [
                { id: '1', title: 'Brand Ambassador & Content Creator', company: 'L\'Oréal Paris', period: '2022 — Present', description: 'Created 200+ pieces of sponsored content reaching 10M+ impressions. Drove 15% uplift in product sales through targeted campaigns and authentic storytelling.' },
                { id: '2', title: 'Beauty Influencer', company: 'Self-Employed', period: '2018 — 2022', description: 'Grew social media following from 5K to 250K across platforms. Collaborated with 30+ beauty brands on sponsored content and product launches.' },
                { id: '3', title: 'Make-up Artist', company: 'Freelance', period: '2016 — 2018', description: 'Provided make-up artistry for fashion shoots, weddings, and events. Built a loyal client base through word-of-mouth referrals.' },
              ]).map(exp => (
                <div key={exp.id} className="pl-5 border-l-2 border-[#E8306B]/30 relative">
                  <div className="absolute w-2 h-2 bg-[#E8306B] rounded-full -left-[5px] top-1"></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-black text-sm text-[#333]">{exp.title}</h4>
                    <span className="text-[10px] text-[#E8306B]/60 font-medium ml-2 shrink-0 bg-[#E8306B]/5 px-2 py-0.5 rounded-full">{exp.period}</span>
                  </div>
                  <p className="text-[11px] font-bold text-[#E8306B] mb-2">{exp.company}</p>
                  <p className="text-xs text-[#666] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects / Campaigns */}
          <section>
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E8306B] border-b-2 border-[#E8306B]/20 pb-2 mb-5">Featured Campaigns</h3>
            <div className="grid grid-cols-2 gap-3">
              {(projects.length > 0 ? projects : [
                { id: '1', title: 'Summer Glow Campaign', role: 'Lead Creator', date: '2023', description: 'Produced 20-piece content series for Fenty Beauty. Campaign reached 5M impressions and trending on TikTok.' },
                { id: '2', title: 'Empowerment Series', role: 'Host & Creator', date: '2022', description: 'Self-produced YouTube series exploring beauty and self-confidence with 2M total views.' },
              ]).map(proj => (
                <div key={proj.id} className="bg-white rounded-2xl p-4 border border-[#E8306B]/10 shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-black text-xs text-[#333]">{proj.title}</h4>
                    <span className="text-[10px] text-[#E8306B]/50 ml-2 shrink-0">{proj.date}</span>
                  </div>
                  <p className="text-[10px] italic text-[#E8306B] mb-1">{proj.role}</p>
                  <p className="text-[10px] text-[#666] leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

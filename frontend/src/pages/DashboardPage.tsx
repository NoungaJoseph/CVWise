import React from 'react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Card } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';
import { Lightbulb, Maximize2 } from 'lucide-react';
import { useEditor } from '@/src/lib/EditorContext';
import { useNavigate } from 'react-router-dom';

export const DashboardPage = () => {
  const { cvData, calculateProgress } = useEditor();
  const navigate = useNavigate();
  const progress = calculateProgress();
  
  const sections = [
    { 
      id: 'personal',
      icon: 'person', 
      title: 'Personal Info', 
      status: cvData.personalInfo.firstName ? 'Complete' : 'Empty',
      path: '/editor/personal'
    },
    { 
      id: 'experience',
      icon: 'work', 
      title: 'Experience', 
      status: cvData.experience.length > 0 ? 'Complete' : 'Empty',
      path: '/editor/experience'
    },
    { 
      id: 'education',
      icon: 'school', 
      title: 'Education', 
      status: cvData.education.length > 0 ? 'Complete' : 'Empty',
      path: '/editor/education'
    },
    { 
      id: 'skills',
      icon: 'psychology', 
      title: 'Skills', 
      status: cvData.skills.length > 0 ? 'Complete' : 'Empty',
      path: '/editor/skills'
    },
    { 
      id: 'projects',
      icon: 'folder', 
      title: 'Projects', 
      status: cvData.projects.length > 0 ? 'Complete' : 'Empty',
      path: '/editor/projects'
    }
  ];

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub="Editorial Mode">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-10">
        <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Editor Home</h1>
            <p className="text-on-surface-variant text-sm md:text-base">Measuring the market resonance of your professional architecture with CVWise.</p>
          </div>
          <Button className="w-full md:w-auto bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm order-first md:order-last">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            AI Polish
          </Button>
        </header>

            <div className="grid grid-cols-12 gap-8">
              {/* Left Column: Section Status */}
              <div className="col-span-12 lg:col-span-7 space-y-6">
                <div className="bg-surface-container-low p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-6 opacity-80 font-headline">Document Architecture</h3>
                  <div className="space-y-4">
                    {sections.map(section => (
                      <SectionItem 
                        key={section.id}
                        icon={section.icon}
                        title={section.title}
                        status={section.status}
                        sub={section.status === 'Complete' ? 'Ready for export' : 'Needs attention'}
                        statusColor={section.status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-surface-container-high text-on-surface-variant'}
                        onClick={() => navigate(section.path)}
                      />
                    ))}
                  </div>
                </div>

                {/* Customization Section (New) */}
                <div className="bg-surface-container-low p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-6 opacity-80 font-headline">Style Architecture</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => navigate('/editor/styling')}
                      className="flex items-center gap-4 bg-white p-4 rounded-xl border-2 border-transparent hover:border-[#F97316] transition-all text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center text-[#F97316]">
                        <span className="material-symbols-outlined">palette</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Theme Color</p>
                        <p className="text-[10px] text-on-surface-variant font-mono">{cvData.style.primaryColor}</p>
                      </div>
                    </button>
                    <button 
                      onClick={() => navigate('/editor/styling')}
                      className="flex items-center gap-4 bg-white p-4 rounded-xl border-2 border-transparent hover:border-[#F97316] transition-all text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center text-[#F97316]">
                        <span className="material-symbols-outlined">text_fields</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Typography</p>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{cvData.style.fontFamily}</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* AI Suggestion Card */}
                <div className="relative overflow-hidden bg-primary-container text-on-primary-container p-8 rounded-xl shadow-xl">
                  <div className="relative z-10">
                    <h4 className="font-headline font-bold text-xl mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 fill-current" />
                      AI Architect Insight
                    </h4>
                    <p className="text-on-primary-container/80 text-sm max-w-md mb-6 leading-relaxed">
                      "Your experience section is strong, but adding metric-driven results to your role at Apple would increase your editorial score by 12%."
                    </p>
                    <Button variant="outline" className="bg-white text-primary hover:bg-slate-50 border-none">
                      Apply Suggestions
                    </Button>
                  </div>
                  <div className="absolute -right-10 -bottom-10 opacity-10">
                    <span className="material-symbols-outlined text-[12rem]">architecture</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Preview & Status */}
              <div className="col-span-12 lg:col-span-5 space-y-8">
                <div className="bg-surface-container-low p-8 rounded-xl flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-6 self-start opacity-80 font-headline">Editorial Preview</h3>
                  <div 
                    className="w-full aspect-[1/1.414] bg-white rounded shadow-2xl relative group overflow-hidden border border-outline-variant/10 cursor-pointer"
                    onClick={() => navigate('/preview')}
                  >
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-[#F97316]" />
                        <span className="text-xs font-bold text-[#F97316]">Fullscreen Preview</span>
                      </div>
                    </div>
                    {/* Simplified Live Preview View */}
                    <div className="p-8 space-y-4">
                      <div className="flex items-center gap-4 border-b pb-4">
                        {cvData.personalInfo.profileImage ? (
                          <img src={cvData.personalInfo.profileImage} className="w-12 h-12 rounded bg-slate-100 object-cover" />
                        ) : (
                          <div className="w-12 h-12 rounded bg-slate-100"></div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-bold text-sm">{cvData.personalInfo.firstName || 'First Name'} {cvData.personalInfo.lastName || 'Last Name'}</h4>
                          <p className="text-[10px] text-slate-500">{cvData.personalInfo.title || 'Professional Title'}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-1.5 w-1/3 bg-slate-200 rounded-full"></div>
                        <div className="h-1 w-full bg-slate-100 rounded-full"></div>
                        <div className="h-1 w-full bg-slate-100 rounded-full"></div>
                        <div className="h-1 w-2/3 bg-slate-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-xs text-on-surface-variant font-medium uppercase tracking-widest opacity-60">Template: {cvData.templateId}</p>
                </div>

                <Card className="p-8">
                  <h3 className="text-lg font-bold mb-6 font-headline">Readiness Score</h3>
                  <div className="flex items-center gap-8">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle className="text-slate-100" cx="48" cy="48" fill="transparent" r="44" stroke="currentColor" strokeWidth="8"></circle>
                        <circle 
                          className="text-[#F97316]" 
                          cx="48" cy="48" 
                          fill="transparent" 
                          r="44" 
                          stroke="currentColor" 
                          strokeWidth="8"
                          strokeDasharray="276"
                          strokeDashoffset={276 - (276 * progress) / 100}
                        ></circle>
                      </svg>
                      <span className="absolute text-xl font-bold text-on-surface">{Math.round(progress)}%</span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm font-semibold text-on-surface">
                        {progress < 100 ? 'Almost Market-Ready' : 'CV Fully Optimized'}
                      </p>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {progress < 100 
                          ? `Complete all sections to reach 100% and unlock high-fidelity PDF export.`
                          : 'Your architectural career foundation is complete. Ready to architect your next role?'}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

interface SectionItemProps {
  icon: string;
  title: string;
  status: string;
  sub: string;
  statusColor: string;
  onClick: () => void;
}

const SectionItem: React.FC<SectionItemProps> = ({ icon, title, status, sub, statusColor, onClick }) => (
  <div 
    onClick={onClick}
    className={cn(
      "bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between group border-2 border-transparent transition-all cursor-pointer",
      "hover:border-[#F97316]/30 hover:shadow-md"
    )}
  >
    <div className="flex items-center gap-4">
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center",
        status === 'Empty' ? "bg-orange-100 text-[#F97316]" : "bg-[#F97316] text-white"
      )}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className={cn("font-bold text-on-surface", status === 'Empty' && "opacity-50")}>{title}</p>
        <p className="text-xs text-on-surface-variant">{sub}</p>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded", statusColor)}>{status}</span>
      <button className="text-[#F97316] font-bold text-sm hover:underline">{status === 'Empty' ? 'Add' : 'Edit'}</button>
    </div>
  </div>
);

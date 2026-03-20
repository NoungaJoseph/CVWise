import React from 'react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Card } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';
import { Lightbulb, Maximize2 } from 'lucide-react';

export const DashboardPage = () => {
  return (
    <DashboardLayout cvTitle="Resume Architect" cvSub="Editorial Mode">
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
                    <SectionItem 
                      icon="person" 
                      title="Personal Info" 
                      status="Complete" 
                      sub="Last updated: 2 hours ago" 
                      statusColor="bg-green-100 text-green-700"
                    />
                    <SectionItem 
                      icon="work" 
                      title="Experience" 
                      status="Complete" 
                      sub="3 positions listed" 
                      statusColor="bg-green-100 text-green-700"
                    />
                    <SectionItem 
                      icon="school" 
                      title="Education" 
                      status="In Progress" 
                      sub="Missing GPA details" 
                      statusColor="bg-amber-100 text-amber-700"
                    />
                    <SectionItem 
                      icon="psychology" 
                      title="Skills" 
                      status="Empty" 
                      sub="No skills added yet" 
                      statusColor="bg-surface-container-high text-on-surface-variant"
                      isInactive
                    />
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
                  <div className="w-full aspect-[1/1.414] bg-white rounded shadow-2xl p-6 relative group overflow-hidden border border-outline-variant/10">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors cursor-pointer flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold text-primary">Fullscreen Preview</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-6 w-3/4 bg-slate-200 rounded-sm mb-4"></div>
                      <div className="h-2 w-1/2 bg-slate-100 rounded-sm"></div>
                      <div className="mt-8 space-y-2">
                        <div className="h-3 w-full bg-slate-100 rounded-sm"></div>
                        <div className="h-3 w-full bg-slate-100 rounded-sm"></div>
                        <div className="h-3 w-4/5 bg-slate-100 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-xs text-on-surface-variant font-medium uppercase tracking-widest opacity-60">Current Template: The Executive Serif</p>
                </div>

                <Card className="p-8">
                  <h3 className="text-lg font-bold mb-6 font-headline">Readiness Score</h3>
                  <div className="flex items-center gap-8">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle className="text-slate-100" cx="48" cy="48" fill="transparent" r="44" stroke="currentColor" strokeWidth="8"></circle>
                        <circle className="text-primary" cx="48" cy="48" fill="transparent" r="44" stroke="currentColor" strokeDasharray="276" strokeDashoffset="41" strokeWidth="8"></circle>
                      </svg>
                      <span className="absolute text-xl font-bold text-on-surface">85%</span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm font-semibold text-on-surface">Almost Market-Ready</p>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Complete the <span className="text-secondary font-bold">Skills</span> section to reach 100% and unlock premium export features.</p>
                    </div>
                  </div>
                </Card>
              </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const SectionItem = ({ icon, title, status, sub, statusColor, isInactive }: { icon: string; title: string; status: string; sub: string; statusColor: string; isInactive?: boolean }) => (
  <div className={cn(
    "bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between group border-2 border-transparent transition-all",
    !isInactive && "hover:border-secondary-container"
  )}>
    <div className="flex items-center gap-4">
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center",
        isInactive ? "bg-orange-100 text-[#F97316]" : "bg-[#F97316] text-white"
      )}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className={cn("font-bold text-on-surface", isInactive && "opacity-50")}>{title}</p>
        <p className="text-xs text-on-surface-variant">{sub}</p>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <span className={cn("text-xs font-semibold px-2 py-1 rounded", statusColor)}>{status}</span>
      <button className="text-secondary font-bold text-sm hover:underline">{isInactive ? 'Add' : 'Edit'}</button>
    </div>
  </div>
);

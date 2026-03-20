import React from 'react';
import { 
  Briefcase, 
  Plus, 
  GripVertical, 
  Trash2, 
  Calendar, 
  Building2,
  Sparkles,
  ChevronRight,
  Eye,
  Trash
} from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

export const ExperiencePage = () => {
  return (
    <DashboardLayout cvTitle="Resume Architect" cvSub="Editorial Mode">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 py-6 md:py-10 grid grid-cols-12 gap-8 md:gap-12">
        {/* Editor Side */}
        <div className="col-span-12 lg:col-span-7">
          <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Professional History</h1>
              <p className="text-on-surface-variant text-sm md:text-base font-medium">Curating your career milestones with architectural precision.</p>
            </div>
            <div className="text-left md:text-right flex flex-col items-start md:items-end w-full md:w-auto">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316] mb-1">Step 2 of 5</p>
              <div className="w-full md:w-32 h-1 bg-[#E1E2E4] rounded-full overflow-hidden mb-4 md:mb-1">
                <div className="h-full bg-[#F97316] w-[40%]"></div>
              </div>
              <Button className="w-full md:w-auto bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm order-first md:order-last mb-4 md:mb-0">
                <Plus className="w-4 h-4" />
                Add Position
              </Button>
            </div>
          </header>

              <div className="space-y-6">
                <ExperienceItem 
                  title="Senior Creative Director"
                  company="Apple Inc."
                  period="Jan 2020 — Present"
                  description="Leading the global brand architecture and design systems for next-generation hardware products."
                  isActive
                />
                <ExperienceItem 
                  title="Design Lead"
                  company="Nike"
                  period="Mar 2017 — Dec 2019"
                  description="Spearheaded the digital transformation of the Nike+ ecosystem, resulting in a 40% increase in user engagement."
                />
                <ExperienceItem 
                  title="Senior Product Designer"
                  company="Airbnb"
                  period="Jun 2014 — Feb 2017"
                  description="Reimagined the host experience platform, focusing on high-end luxury listings and global localization."
                />
              </div>

              {/* Active Form */}
              <div className="mt-12 pt-12 border-t border-outline-variant/10 space-y-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316] mb-1">Step 2 of 5</p>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline">Edit Position</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Job Title</label>
                    <Input defaultValue="Senior Creative Director" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Company</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                      <Input className="pl-12" defaultValue="Apple Inc." />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Start Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                      <Input className="pl-12" placeholder="MM/YYYY" defaultValue="01/2020" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">End Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                      <Input className="pl-12" placeholder="Present" defaultValue="Present" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-sm font-bold text-on-surface-variant">Description & Achievements</label>
                    <button className="flex items-center gap-1 text-xs font-bold text-secondary uppercase tracking-widest hover:underline">
                      <Sparkles className="w-3 h-3" />
                      AI Polish
                    </button>
                  </div>
                  <textarea 
                    className="w-full bg-surface-container-highest border-none px-4 py-4 rounded-lg text-on-surface placeholder:text-outline focus:ring-0 focus:bg-surface-container-lowest transition-all min-h-[200px] resize-none"
                    defaultValue="Leading the global brand architecture and design systems for next-generation hardware products. Managed a team of 25+ designers and researchers."
                  ></textarea>
                </div>
                <div className="flex justify-end gap-4">
                  <Button variant="ghost">Cancel</Button>
                  <Button variant="primary">Update Position</Button>
                </div>
              </div>
            </div>

            {/* Preview Side */}
            <div className="col-span-12 lg:col-span-5">
              <div className="sticky top-24 space-y-8">
                <div className="flex justify-between items-center px-2">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline">Live Editorial Preview</h3>
                  <button className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-on-surface transition-colors">
                    <Eye className="w-4 h-4" />
                    Full View
                  </button>
                </div>
                <div className="bg-white rounded-sm shadow-2xl p-12 aspect-[1/1.414] border border-outline-variant/10 overflow-hidden">
                  <div className="space-y-10">
                    <div className="border-b-2 border-primary pb-8">
                      <h2 className="text-3xl font-black font-headline tracking-tighter uppercase">Experience</h2>
                    </div>
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-bold text-lg font-headline">Senior Creative Director</h4>
                          <span className="text-xs font-bold text-on-surface-variant">2020 — Present</span>
                        </div>
                        <p className="text-sm font-bold text-secondary uppercase tracking-widest">Apple Inc.</p>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Leading the global brand architecture and design systems for next-generation hardware products. Managed a team of 25+ designers and researchers.</p>
                      </div>
                      <div className="space-y-2 opacity-50">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-bold text-lg font-headline">Design Lead</h4>
                          <span className="text-xs font-bold text-on-surface-variant">2017 — 2019</span>
                        </div>
                        <p className="text-sm font-bold text-secondary uppercase tracking-widest">Nike</p>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Spearheaded the digital transformation of the Nike+ ecosystem, resulting in a 40% increase in user engagement.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card className="p-6 bg-primary text-on-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <div className="h-1 bg-[#F97316] w-[40%] rounded-l-full"></div>
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">AI Insight</h4>
                      <p className="text-sm text-on-primary/70 leading-relaxed">
                        "Using strong action verbs like 'Architected' or 'Spearheaded' at the start of your bullet points will improve your editorial score."
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

const ExperienceItem = ({ title, company, period, description, isActive }: { title: string; company: string; period: string; description: string; isActive?: boolean }) => (
  <div className={cn(
    "bg-surface-container-lowest p-6 rounded-xl flex items-center gap-6 group border-2 transition-all cursor-pointer",
    isActive ? "border-[#F97316] shadow-lg" : "border-transparent hover:bg-surface-container-low"
  )}>
    <div className="text-outline cursor-grab active:cursor-grabbing">
      <GripVertical className="w-5 h-5" />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-on-surface">{title}</h4>
        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{period}</span>
      </div>
      <p className="text-sm text-[#F97316] font-bold mb-2">{company}</p>
      <p className="text-xs text-on-surface-variant line-clamp-1">{description}</p>
    </div>
    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors">
        <Edit3 className="w-4 h-4" />
      </button>
      <button className="p-2 text-on-surface-variant hover:text-error transition-colors">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const Edit3 = ({ className }: { className?: string }) => (
  <span className={cn("material-symbols-outlined", className)}>edit</span>
);

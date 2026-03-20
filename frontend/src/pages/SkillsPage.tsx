import React from 'react';
import { 
  Plus, 
  X, 
  Search, 
  Sparkles, 
  Trophy,
  Zap
} from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

export const SkillsPage = () => {
  return (
    <DashboardLayout cvTitle="Resume Architect" cvSub="Editorial Mode">
      <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-10">
            <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Skill Architecture</h1>
                <p className="text-on-surface-variant text-sm md:text-base">Mapping your professional competencies and technical mastery.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button variant="outline" className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Recommendations
                </Button>
                <Button variant="gradient" className="flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add New Skill
                </Button>
              </div>
            </header>

            <div className="grid grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="col-span-12 lg:col-span-8 space-y-12">
                {/* Search / Add */}
                <section className="space-y-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
                    <Input className="pl-12 py-4 text-lg" placeholder="Search or add a skill (e.g. Strategic Planning, React, Figma)" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <p className="text-xs font-bold text-outline uppercase tracking-widest w-full mb-2">Suggested for you:</p>
                    {['Product Strategy', 'Team Leadership', 'Stakeholder Management', 'Design Systems', 'Agile'].map(skill => (
                      <button key={skill} className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium text-on-surface-variant hover:bg-secondary-container/20 hover:text-secondary transition-all">
                        + {skill}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Active Skills */}
                <section className="space-y-8">
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316] mb-1">Step 4 of 5</p>
                    <span className="text-xs font-bold text-[#F97316]">8 Skills Added</span>
                  </div>
                  
                  <div className="space-y-8">
                    <SkillCategory title="Design & Creative" skills={[
                      { name: 'Brand Architecture', level: 'Expert' },
                      { name: 'Design Systems', level: 'Expert' },
                      { name: 'UI/UX Design', level: 'Proficient' },
                    ]} />
                    
                    <SkillCategory title="Leadership & Strategy" skills={[
                      { name: 'Strategic Planning', level: 'Expert' },
                      { name: 'Team Mentorship', level: 'Proficient' },
                      { name: 'Product Vision', level: 'Expert' },
                    ]} />

                    <SkillCategory title="Technical" skills={[
                      { name: 'React / Next.js', level: 'Familiar' },
                      { name: 'Tailwind CSS', level: 'Proficient' },
                    ]} />
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="col-span-12 lg:col-span-4 space-y-8">
                <Card className="p-8 bg-secondary text-on-secondary relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold font-headline mb-2">Mastery Index</h4>
                    <p className="text-on-secondary/70 text-sm leading-relaxed mb-6">
                      Your skill profile is in the top 5% for 'Creative Director' roles in New York.
                    </p>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-[95%]"></div>
                    </div>
                  </div>
                  <Zap className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12" />
                </Card>

                <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                  <h4 className="font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    Editorial Insights
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Group your skills into categories to improve readability for executive recruiters.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Add 'Stakeholder Management' to better align with the Senior Director roles you're targeting.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </DashboardLayout>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; level: string }[] }) => (
  <div className="space-y-4">
    <h4 className="text-sm font-bold text-on-surface-variant ml-1">{title}</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map(skill => (
        <div key={skill.name} className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between group border border-outline-variant/5 hover:border-secondary-container transition-all">
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-2 h-2 rounded-full",
              skill.level === 'Expert' ? "bg-[#F97316]" : skill.level === 'Proficient' ? "bg-[#F97316]/60" : "bg-[#F97316]/30"
            )}></div>
            <div>
              <p className="font-bold text-on-surface text-sm">{skill.name}</p>
              <p className="text-[10px] font-bold text-outline uppercase tracking-widest">{skill.level}</p>
            </div>
          </div>
          <button className="opacity-0 group-hover:opacity-100 p-2 text-on-surface-variant hover:text-error transition-all">
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  </div>
);

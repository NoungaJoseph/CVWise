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

import { useEditor, Skill } from '@/src/lib/EditorContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';
import { SKILLS_LIBRARY } from '@/src/lib/skillsData';

export const SkillsPage = () => {
  const { cvData, updateSkills, addSkill, calculateProgress } = useEditor();
  const navigate = useNavigate();
  const progress = calculateProgress();
  const [skillInput, setSkillInput] = React.useState('');
  const [selectedLevel, setSelectedLevel] = React.useState<'Expert' | 'Proficient' | 'Familiar'>('Proficient');

  const handleAddSkill = (name?: string) => {
    const skillName = name || skillInput.trim();
    if (skillName) {
      const newSkill: Skill = {
        id: Math.random().toString(36).substr(2, 9),
        name: skillName,
        level: selectedLevel,
        category: 'General'
      };
      addSkill(newSkill);
      setSkillInput('');
    }
  };

  const handleDeleteSkill = (id: string) => {
    updateSkills(cvData.skills.filter(s => s.id !== id));
  };

  const handleSaveAndNext = () => {
    navigate('/editor/projects');
  };

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub="Editorial Mode">
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
                <div className="flex gap-2">
                  <select 
                    value={selectedLevel} 
                    onChange={(e) => setSelectedLevel(e.target.value as any)}
                    className="bg-white border border-[#F1F0F4] rounded-lg px-3 py-2 text-xs font-bold"
                  >
                    <option value="Expert">Expert</option>
                    <option value="Proficient">Proficient</option>
                    <option value="Familiar">Familiar</option>
                  </select>
                  <Button onClick={() => handleAddSkill()} className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
                    <Plus className="w-4 h-4" />
                    Add Skill
                  </Button>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="col-span-12 lg:col-span-8 space-y-12">
                {/* Search / Add */}
                <section className="space-y-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
                    <Input 
                      className="pl-12 py-4 text-lg" 
                      placeholder="Type a skill..." 
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <p className="text-xs font-bold text-outline uppercase tracking-widest w-full mb-2">Recommended competencies:</p>
                    {(skillInput.length > 0 
                      ? SKILLS_LIBRARY.filter(s => s.name.toLowerCase().includes(skillInput.toLowerCase())).slice(0, 8)
                      : SKILLS_LIBRARY.slice(0, 10)
                    ).map(skill => (
                      <button 
                        key={skill.name} 
                        onClick={() => handleAddSkill(skill.name)}
                        className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium text-on-surface-variant hover:bg-secondary-container/20 hover:text-secondary transition-all"
                      >
                        + {skill.name}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Active Skills */}
                <section className="space-y-8">
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316] mb-1">Step 3 of 5</p>
                    <span className="text-xs font-bold text-[#F97316]">{cvData.skills.length} Skills Added</span>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cvData.skills.map(skill => (
                        <div key={skill.id} className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between group border border-outline-variant/5 hover:border-[#F97316]/30 transition-all">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-2.5 h-2.5 rounded-full",
                              skill.level === 'Expert' ? "bg-[#F97316]" : skill.level === 'Proficient' ? "bg-[#F97316]/60" : "bg-[#F97316]/30"
                            )}></div>
                            <div>
                              <p className="font-bold text-on-surface text-sm">{skill.name}</p>
                              <p className="text-[10px] font-bold text-outline uppercase tracking-widest">{skill.level}</p>
                            </div>
                          </div>
                          <button onClick={() => handleDeleteSkill(skill.id)} className="opacity-0 group-hover:opacity-100 p-2 text-on-surface-variant hover:text-red-500 transition-all">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      {cvData.skills.length === 0 && (
                        <div className="col-span-2 text-center py-12 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                          <Zap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                          <p className="text-slate-500 font-medium">No skills mapped yet. Add your mastery!</p>
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                {/* Navigation */}
                <div className="pt-8 flex justify-between items-center border-t border-[#F1F0F4] mt-12">
                  <Button variant="outline" onClick={() => navigate('/editor/education')}>Back</Button>
                  <Button className="bg-[#F97316] text-white hover:bg-[#EA580C]" onClick={handleSaveAndNext}>
                    Save & Next
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-span-12 lg:col-span-4 space-y-8">
                <Card className="p-8 bg-[#394457] text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                      <Trophy className="w-6 h-6 text-[#F97316]" />
                    </div>
                    <h4 className="text-xl font-bold font-headline mb-2">Mastery Index</h4>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      Your skill profile is evolving. Every skill added increases your editorial resonance.
                    </p>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#F97316]" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                  <Zap className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12" />
                </Card>

                <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                  <h4 className="font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#F97316]" />
                    Editorial Insights
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 shrink-0"></div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Group your skills into categories to improve readability for executive recruiters.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 shrink-0"></div>
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

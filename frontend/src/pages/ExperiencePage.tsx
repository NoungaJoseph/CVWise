import React from 'react';
import { 
  Briefcase, 
  Plus, 
  GripVertical, 
  Trash2, 
  Calendar, 
  Building2,
  Sparkles,
  Eye,
  ArrowRight,
  User
} from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';
import { useEditor, Experience } from '@/src/lib/EditorContext';
import { useNavigate } from 'react-router-dom';

export const ExperiencePage = () => {
  const { cvData, updateExperience, addExperience, calculateProgress } = useEditor();
  const navigate = useNavigate();
  const progress = calculateProgress();
  
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState<Partial<Experience>>({
    title: '',
    company: '',
    period: '',
    description: ''
  });

  const handleEdit = (exp: Experience) => {
    setEditingId(exp.id);
    setFormData(exp);
  };

  const handleDelete = (id: string) => {
    updateExperience(cvData.experience.filter(e => e.id !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    if (editingId) {
      updateExperience(cvData.experience.map(e => e.id === editingId ? { ...e, ...formData } as Experience : e));
      setEditingId(null);
      setFormData({ title: '', company: '', period: '', description: '' });
    } else {
      const newExp: Experience = {
        id: Math.random().toString(36).substr(2, 9),
        title: formData.title || '',
        company: formData.company || '',
        period: formData.period || '',
        description: formData.description || ''
      };
      addExperience(newExp);
      setFormData({ title: '', company: '', period: '', description: '' });
    }
  };

  const handleSaveAndNext = () => {
    navigate('/editor/education');
  };

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub="Editorial Mode">
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
                <div className="h-full bg-[#F97316]" style={{ width: `${progress}%` }}></div>
              </div>
              <Button 
                onClick={() => { setEditingId(null); setFormData({ title: '', company: '', period: '', description: '' }); }}
                className="w-full md:w-auto bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm order-first md:order-last mb-4 md:mb-0"
              >
                <Plus className="w-4 h-4" />
                Add Position
              </Button>
            </div>
          </header>

              <div className="space-y-6">
                {cvData.experience.map(exp => (
                  <ExperienceItem 
                    key={exp.id}
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    isActive={editingId === exp.id}
                    onEdit={() => handleEdit(exp)}
                    onDelete={() => handleDelete(exp.id)}
                  />
                ))}
                {cvData.experience.length === 0 && (
                  <div className="text-center py-12 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                    <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500 font-medium">No experience added yet. Let's build your history!</p>
                  </div>
                )}
              </div>

              {/* Active Form */}
              <div className="mt-12 pt-12 border-t border-outline-variant/10 space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline">
                  {editingId ? 'Edit Position' : 'New Position'}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Job Title</label>
                    <Input 
                      name="title"
                      value={formData.title} 
                      onChange={handleInputChange}
                      placeholder="e.g. Senior Creative Director"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Company</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                      <Input 
                        name="company"
                        className="pl-12" 
                        value={formData.company} 
                        onChange={handleInputChange}
                        placeholder="e.g. Apple Inc."
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Period (Start — End)</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                      <Input 
                        name="period"
                        className="pl-12" 
                        placeholder="e.g. Jan 2020 — Present" 
                        value={formData.period} 
                        onChange={handleInputChange}
                      />
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
                    name="description"
                    className="w-full bg-surface-container-highest border-none px-4 py-4 rounded-lg text-on-surface placeholder:text-outline focus:ring-1 focus:ring-[#F97316]/20 focus:bg-surface-container-lowest transition-all min-h-[200px] resize-none"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your role and impact..."
                  ></textarea>
                </div>
                <div className="flex justify-end gap-4">
                  <Button variant="outline" onClick={() => { setEditingId(null); setFormData({ title: '', company: '', period: '', description: '' }); }}>Cancel</Button>
                  <Button className="bg-[#F97316] text-white hover:bg-[#EA580C]" onClick={handleUpdate}>
                    {editingId ? 'Update Position' : 'Add Position'}
                  </Button>
                </div>
              </div>

              {/* Navigation */}
              <div className="pt-8 flex justify-between items-center border-t border-[#F1F0F4] mt-12">
                <Button variant="outline" onClick={() => navigate('/editor/personal')}>Back</Button>
                <Button className="bg-[#F97316] text-white hover:bg-[#EA580C]" onClick={handleSaveAndNext}>
                  Save & Next
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
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
                    <div className="border-b-2 border-[#F97316] pb-8">
                      <h2 className="text-3xl font-black font-headline tracking-tighter uppercase">Experience</h2>
                    </div>
                    <div className="space-y-8">
                      {cvData.experience.map(exp => (
                        <div key={exp.id} className="space-y-2">
                          <div className="flex justify-between items-baseline">
                            <h4 className="font-bold text-lg font-headline">{exp.title || 'Untitled Role'}</h4>
                            <span className="text-[10px] font-bold text-on-surface-variant">{exp.period}</span>
                          </div>
                          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest">{exp.company || 'Untitled Company'}</p>
                          <p className="text-xs text-on-surface-variant leading-relaxed">{exp.description}</p>
                        </div>
                      ))}
                      {cvData.experience.length === 0 && (
                        <div className="space-y-4 opacity-20">
                          <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                          <div className="h-2 w-1/4 bg-slate-200 rounded"></div>
                          <div className="space-y-2">
                            <div className="h-2 w-full bg-slate-100 rounded"></div>
                            <div className="h-2 w-full bg-slate-100 rounded"></div>
                            <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <Card className="p-6 bg-[#394457] text-white">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">AI Insight</h4>
                      <p className="text-sm text-white/70 leading-relaxed">
                        "Your architectural impact is measured by metrics. Try adding results like 'Reduced overhead by 20%' to increase resonance."
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

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isActive?: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, period, description, isActive, onEdit, onDelete }) => (
  <div className={cn(
    "bg-surface-container-lowest p-6 rounded-xl flex items-center gap-6 group border-2 transition-all cursor-pointer",
    isActive ? "border-[#F97316] shadow-lg" : "border-transparent hover:bg-surface-container-low"
  )}>
    <div className="text-outline cursor-grab active:cursor-grabbing">
      <GripVertical className="w-5 h-5" />
    </div>
    <div className="flex-1" onClick={onEdit}>
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-on-surface">{title}</h4>
        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{period}</span>
      </div>
      <p className="text-sm text-[#F97316] font-bold mb-2">{company}</p>
      <p className="text-xs text-on-surface-variant line-clamp-1">{description}</p>
    </div>
    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-2 text-on-surface-variant hover:text-[#F97316] transition-colors" onClick={onEdit}>
        <Edit3 className="w-4 h-4" />
      </button>
      <button className="p-2 text-on-surface-variant hover:text-red-500 transition-colors" onClick={onDelete}>
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const Edit3 = ({ className }: { className?: string }) => (
  <span className={cn("material-symbols-outlined", className)}>edit</span>
);

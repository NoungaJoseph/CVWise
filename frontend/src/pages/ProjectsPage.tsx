import React from 'react';
import { 
  Plus, 
  ExternalLink, 
  Calendar, 
  User, 
  Trash2, 
  Sparkles,
  LayoutGrid,
  List,
  ArrowRight,
  Edit3 as EditIcon
} from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';
import { useEditor, Project } from '@/src/lib/EditorContext';
import { useNavigate } from 'react-router-dom';

export const ProjectsPage = () => {
  const { cvData, updateProjects, addProject, calculateProgress } = useEditor();
  const navigate = useNavigate();
  const progress = calculateProgress();
  
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState<Partial<Project>>({
    title: '',
    role: '',
    date: '',
    description: '',
    link: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    if (editingId) {
      updateProjects(cvData.projects.map(p => p.id === editingId ? { ...p, ...formData } as Project : p));
      setEditingId(null);
      setFormData({ title: '', role: '', date: '', description: '', link: '' });
    } else {
      const newProj: Project = {
        id: Math.random().toString(36).substr(2, 9),
        title: formData.title || '',
        role: formData.role || '',
        date: formData.date || '',
        description: formData.description || '',
        link: formData.link || ''
      };
      addProject(newProj);
      setFormData({ title: '', role: '', date: '', description: '', link: '' });
    }
  };

  const handleDelete = (id: string) => {
    updateProjects(cvData.projects.filter(p => p.id !== id));
  };

  const handleFinish = () => {
    navigate('/preview');
  };

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub="Editorial Mode">
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-6 md:py-10">
            <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Portfolio Architecture</h1>
                <p className="text-on-surface-variant text-sm md:text-base">Showcasing the tangible impact of your professional expertise.</p>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <div className="bg-surface-container-high p-1 rounded-lg flex">
                  <button className="p-2 bg-surface-container-lowest rounded-md shadow-sm text-[#F97316]">
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-on-surface-variant">
                    <List className="w-4 h-4" />
                  </button>
                </div>
                <Button 
                  onClick={() => { setEditingId(null); setFormData({ title: '', role: '', date: '', description: '', link: '' }); }}
                  className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm order-first md:order-last"
                >
                  <Plus className="w-4 h-4" />
                  Add Project
                </Button>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cvData.projects.map(proj => (
                <ProjectCard 
                  key={proj.id}
                  title={proj.title}
                  role={proj.role}
                  date={proj.date}
                  description={proj.description}
                  image={`https://picsum.photos/seed/${proj.id}/600/400`}
                  onEdit={() => { setEditingId(proj.id); setFormData(proj); }}
                  onDelete={() => handleDelete(proj.id)}
                />
              ))}
              
              {/* Add New Placeholder */}
              <div 
                onClick={() => { setEditingId(null); setFormData({ title: '', role: '', date: '', description: '', link: '' }); }}
                className="group border-2 border-dashed border-outline-variant/30 rounded-2xl flex flex-col items-center justify-center p-12 text-center hover:bg-surface-container-low transition-all cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="w-8 h-8 text-on-surface-variant" />
                </div>
                <h3 className="font-bold text-on-surface">New Project</h3>
                <p className="text-xs text-on-surface-variant mt-2">Add a new milestone to your portfolio.</p>
              </div>
            </div>

            {/* Active Editor Form */}
            <div className="mt-20 pt-20 border-t border-outline-variant/10">
              <div className="max-w-3xl">
                <div className="mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316] mb-1">Step 5 of 5</p>
                  <div className="w-full h-1 bg-[#E1E2E4] rounded-full mb-6">
                    <div className="h-full bg-[#F97316]" style={{ width: `${progress}%` }}></div>
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline">
                    {editingId ? 'Edit Project' : 'New Project'}
                  </h3>
                </div>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Project Name</label>
                    <Input 
                      name="title"
                      value={formData.title} 
                      onChange={handleInputChange}
                      placeholder="e.g. Global Brand Reimagining" 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant ml-1">Your Role</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                        <Input 
                          name="role"
                          className="pl-12" 
                          value={formData.role} 
                          onChange={handleInputChange}
                          placeholder="e.g. Lead Architect" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant ml-1">Completion Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                        <Input 
                          name="date"
                          className="pl-12" 
                          value={formData.date} 
                          onChange={handleInputChange}
                          placeholder="YYYY" 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Project Link (Optional)</label>
                    <div className="relative">
                      <ExternalLink className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                      <Input 
                        name="link"
                        className="pl-12" 
                        value={formData.link} 
                        onChange={handleInputChange}
                        placeholder="https://project-url.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-sm font-bold text-on-surface-variant">Description & Impact</label>
                      <button className="flex items-center gap-1 text-xs font-bold text-secondary uppercase tracking-widest hover:underline" type="button">
                        <Sparkles className="w-3 h-3" />
                        AI Polish
                      </button>
                    </div>
                    <textarea 
                      name="description"
                      className="w-full bg-surface-container-highest border-none px-4 py-4 rounded-lg text-on-surface placeholder:text-outline focus:ring-1 focus:ring-[#F97316]/20 focus:bg-surface-container-lowest transition-all min-h-[160px] resize-none"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe the project scope, your contribution, and the measurable outcomes..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end gap-4">
                    <Button variant="outline" onClick={() => { setEditingId(null); setFormData({ title: '', role: '', date: '', description: '', link: '' }); }}>Cancel</Button>
                    <Button className="bg-[#F97316] text-white hover:bg-[#EA580C]" onClick={handleUpdate}>
                      {editingId ? 'Update Project' : 'Save Project'}
                    </Button>
                  </div>
                </div>

                {/* Final Navigation */}
                <div className="pt-8 flex justify-between items-center border-t border-[#F1F0F4] mt-12">
                  <Button variant="outline" onClick={() => navigate('/editor/skills')}>Back</Button>
                  <Button className="bg-[#F97316] text-white hover:bg-[#EA580C]" onClick={handleFinish}>
                    Complete CV
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
    </DashboardLayout>
  );
};

interface ProjectCardProps {
  title: string;
  role: string;
  date: string;
  description: string;
  image: string;
  onEdit: () => void;
  onDelete: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, role, date, description, image, onEdit, onDelete }) => (
  <Card className="overflow-hidden group flex flex-col h-full border border-outline-variant/5 hover:border-[#F97316]/30 transition-all">
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={onEdit} className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-on-surface-variant hover:text-[#F97316] shadow-sm">
          <EditIcon className="w-4 h-4" />
        </button>
        <button onClick={onDelete} className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-on-surface-variant hover:text-red-500 shadow-sm">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col" onClick={onEdit} style={{ cursor: 'pointer' }}>
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-on-surface font-headline leading-tight">{title || 'Untitled Project'}</h4>
        <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{date}</span>
      </div>
      <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-4">{role || 'No Role'}</p>
      <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-6">
        {description}
      </p>
      <div className="mt-auto pt-4 border-t border-outline-variant/10">
        <button className="text-xs font-bold text-on-surface flex items-center gap-1 hover:text-[#F97316] transition-colors">
          View Details <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  </Card>
);

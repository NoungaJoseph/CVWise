import React from 'react';
import { 
  Plus, 
  ExternalLink, 
  Calendar, 
  User, 
  Trash2, 
  Sparkles,
  LayoutGrid,
  List
} from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

export const ProjectsPage = () => {
  return (
    <DashboardLayout cvTitle="Resume Architect" cvSub="Editorial Mode">
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-6 md:py-10">
            <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Portfolio Architecture</h1>
                <p className="text-on-surface-variant text-sm md:text-base">Showcasing the tangible impact of your professional expertise.</p>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <div className="bg-surface-container-high p-1 rounded-lg flex">
                  <button className="p-2 bg-surface-container-lowest rounded-md shadow-sm text-primary">
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-on-surface-variant">
                    <List className="w-4 h-4" />
                  </button>
                </div>
                <Button variant="gradient" className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Project
                </Button>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="Apple Vision Pro Launch"
                role="Design Lead"
                date="2023"
                description="Architected the spatial design language and core interface paradigms for the first generation hardware."
                image="https://picsum.photos/seed/proj1/600/400"
              />
              <ProjectCard 
                title="Nike+ Digital Transformation"
                role="Creative Director"
                date="2021"
                description="Reimagined the global digital ecosystem, connecting physical products with immersive digital experiences."
                image="https://picsum.photos/seed/proj2/600/400"
              />
              <ProjectCard 
                title="Airbnb Luxe Rebrand"
                role="Senior Designer"
                date="2018"
                description="Developed the high-end visual identity and editorial strategy for Airbnb's luxury listing tier."
                image="https://picsum.photos/seed/proj3/600/400"
              />
              
              {/* Add New Placeholder */}
              <div className="group border-2 border-dashed border-outline-variant/30 rounded-2xl flex flex-col items-center justify-center p-12 text-center hover:bg-surface-container-low transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="w-8 h-8 text-on-surface-variant" />
                </div>
                <h3 className="font-bold text-on-surface">New Project</h3>
                <p className="text-xs text-on-surface-variant mt-2">Add a new milestone to your portfolio.</p>
              </div>
            </div>

            {/* Active Editor Form (Hidden by default, shown when editing/adding) */}
            <div className="mt-20 pt-20 border-t border-outline-variant/10">
              <div className="max-w-3xl">
                <div className="mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316] mb-1">Step 5 of 5</p>
                  <div className="w-full h-1 bg-[#F97316] rounded-full mb-6"></div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline">Project Details</h3>
                </div>
                <form className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Project Name</label>
                    <Input placeholder="e.g. Global Brand Reimagining" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant ml-1">Your Role</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                        <Input className="pl-12" placeholder="e.g. Lead Architect" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant ml-1">Completion Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                        <Input className="pl-12" placeholder="YYYY" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Project Link (Optional)</label>
                    <div className="relative">
                      <ExternalLink className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                      <Input className="pl-12" placeholder="https://project-url.com" />
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
                      className="w-full bg-surface-container-highest border-none px-4 py-4 rounded-lg text-on-surface placeholder:text-outline focus:ring-0 focus:bg-surface-container-lowest transition-all min-h-[160px] resize-none"
                      placeholder="Describe the project scope, your contribution, and the measurable outcomes..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end gap-4">
                    <Button variant="ghost">Discard</Button>
                    <Button variant="primary">Save Project</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </DashboardLayout>
  );
};

const ProjectCard = ({ title, role, date, description, image }: { title: string; role: string; date: string; description: string; image: string }) => (
  <Card className="overflow-hidden group flex flex-col h-full">
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-on-surface-variant hover:text-secondary shadow-sm">
          <Edit3 className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-on-surface-variant hover:text-error shadow-sm">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-on-surface font-headline leading-tight">{title}</h4>
        <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{date}</span>
      </div>
      <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-4">{role}</p>
      <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-6">
        {description}
      </p>
      <div className="mt-auto pt-4 border-t border-outline-variant/10">
        <button className="text-xs font-bold text-on-surface flex items-center gap-1 hover:text-secondary transition-colors">
          View Details <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  </Card>
);

const Edit3 = ({ className }: { className?: string }) => (
  <span className={cn("material-symbols-outlined", className)}>edit</span>
);

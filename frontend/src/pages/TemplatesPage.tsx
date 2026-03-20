import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  PlusCircle, 
  Search, 
  Filter, 
  ArrowRight, 
  Star,
  Layout,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { MainLayout } from '@/src/components/layout';
import { Button, Card } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';
import { useAuth } from '../lib/AuthContext';


export const TemplatesPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectTemplate = () => {
    navigate('/login');
  };

  const templates = [
    {
      id: '1',
      name: 'The Helvetica Standard',
      description: 'Precision-engineered for clarity. Ideal for technical roles and design purists.',
      thumbnail: 'https://picsum.photos/seed/temp1/600/800',
      tags: ['Swiss', 'Minimal'],
      isPopular: true
    },
    {
      id: '2',
      name: 'The CEO Legacy',
      description: 'Authoritative serif typography designed for boardrooms and C-suite placement.',
      thumbnail: 'https://picsum.photos/seed/temp2/600/800',
      tags: ['Serif', 'Executive'],
      isPremium: true
    },
    {
      id: '3',
      name: 'Silicon Valley',
      description: 'Modern, energetic layout optimized for ATS and fast-moving tech startups.',
      thumbnail: 'https://picsum.photos/seed/temp3/600/800',
      tags: ['Sans-Serif', 'Modern'],
      isHot: true
    },
    {
      id: '4',
      name: 'The Curator',
      description: 'Asymmetric design for creative professionals, curators, and architects.',
      thumbnail: 'https://picsum.photos/seed/temp4/600/800',
      tags: ['Creative', 'Editorial']
    },
    {
      id: '5',
      name: 'The Academic Ivy',
      description: 'Dense data-handling for researchers, PhDs, and higher education leaders.',
      thumbnail: 'https://picsum.photos/seed/temp5/600/800',
      tags: ['Classic', 'Formal']
    }
  ];

  return (
    <MainLayout>
      <div className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-on-surface leading-none">
                Design Your Future.
              </h1>
              <p className="text-on-surface-variant max-w-lg text-lg font-body leading-relaxed">
                Select an architecturally-sound framework for your professional story. Editorial-grade layouts for leaders.
              </p>
            </div>
            <Button onClick={handleSelectTemplate} variant="secondary" size="lg" className="flex items-center gap-2 shadow-xl shadow-secondary/20">
              <PlusCircle className="w-5 h-5" />
              Create from Scratch
            </Button>
          </div>

          <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2">
            <Button variant="primary" size="sm" className="rounded-full whitespace-nowrap">All Templates</Button>
            {['Modern', 'Executive', 'Academic', 'Creative', 'Minimal'].map(cat => (
              <Button key={cat} variant="outline" size="sm" className="rounded-full whitespace-nowrap border-none bg-surface-container-low text-on-surface-variant hover:bg-surface-container">
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map(template => (
              <TemplateCard key={template.id} template={template} onSelect={handleSelectTemplate} />
            ))}
            
            {/* Custom Blueprint Placeholder */}
            <div onClick={handleSelectTemplate} className="group relative flex flex-col bg-surface-container-low border-2 border-dashed border-outline-variant/30 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-surface-container-high cursor-pointer">
              <div className="aspect-[3/4] flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <Button className="w-full bg-[#F97316] text-white hover:bg-[#EA580C] font-bold py-6 rounded-xl flex items-center justify-center gap-2 group-hover:scale-110 transition-transform">
                  <PlusCircle className="w-8 h-8" />
                </Button>
                <div>
                  <h3 className="font-headline font-bold text-xl text-primary tracking-tight">Custom Blueprint</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mt-2 px-4">
                    Start with a blank canvas and build your own architectural layout.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="mt-16 bg-gradient-to-br from-primary to-primary-container p-10 rounded-3xl text-on-primary relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold font-headline mb-4">Want more bespoke options?</h2>
              <p className="text-on-primary/80 mb-6 text-lg">
                Unlock our 'Limited Edition' series and direct export to high-resolution professional print formats.
              </p>
              <Button variant="ghost" className="text-[#F97316] font-bold hover:bg-[#F97316]/5">
                Explore Pro Templates
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
              <div className="w-full h-full rotate-12 translate-x-20 translate-y-10 border-[40px] border-on-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const TemplateCard: React.FC<{ template: any; onSelect: () => void }> = ({ template, onSelect }) => (
  <div className={cn("group relative flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-on-surface/5")}>
    <div className="aspect-[3/4] bg-surface-container relative overflow-hidden">
      <img 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        src={template.thumbnail} 
        alt={template.name}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[2px]">
        <Button onClick={onSelect} variant="outline" className="bg-white text-primary hover:bg-white/90 border-none transform translate-y-4 group-hover:translate-y-0 transition-transform">
          Use Template
        </Button>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <div className="flex justify-between items-start gap-4 mb-2">
        <h3 className="font-headline font-bold text-xl text-primary tracking-tight leading-tight">{template.name}</h3>
        <div className="flex-shrink-0">
          {template.isPopular && <Badge label="Most Popular" color="bg-secondary-fixed text-on-secondary-fixed" />}
          {template.isPremium && <Badge label="Premium" color="bg-surface-variant text-on-surface-variant" />}
          {template.isHot && <Badge label="Hot" color="bg-tertiary-fixed text-on-tertiary-fixed" />}
        </div>
      </div>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
        {template.description}
      </p>
      <div className="flex gap-2">
        {template.tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-bold text-outline uppercase">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Badge = ({ label, color }: { label: string; color: string }) => (
  <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", color)}>
    {label}
  </span>
);

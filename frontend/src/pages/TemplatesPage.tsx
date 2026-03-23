import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import { MainLayout } from '@/src/components/layout';
import { Button } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';
import { useAuth } from '../lib/AuthContext';
import { useEditor } from '../lib/EditorContext';

const TEMPLATES = [
  {
    id: 'beige-minimalist',
    name: 'Beige Minimalist',
    description: 'Classic corporate style with warm beige tones. Perfect for IT project managers and corporate professionals.',
    thumbnail: '/cv templates/Beige Minimalist Corporate IT Project Manager Resume.png',
    tags: ['Corporate', 'Minimal', 'Warm'],
    isPopular: true,
    category: 'Minimal'
  },
  {
    id: 'blue-gray-professional',
    name: 'Blue & Gray Professional',
    description: 'Clean two-column layout in cool blue and gray. Ideal for business and consulting roles.',
    thumbnail: '/cv templates/Blue and Gray Simple Professional CV Resume.png',
    tags: ['Professional', 'Two-Column'],
    category: 'Modern'
  },
  {
    id: 'brown-simple',
    name: 'Brown Simple Professional',
    description: 'Warm earth tones for creative professionals. A clean sidebar design that stands out.',
    thumbnail: '/cv templates/Brown Simple Professional Resume.png',
    tags: ['Creative', 'Warm'],
    category: 'Creative'
  },
  {
    id: 'green-modern-bold',
    name: 'Green Modern Bold',
    description: 'Dark, bold design for software developers and tech professionals. Code-inspired aesthetic.',
    thumbnail: '/cv templates/Green Modern Bold Software Developer Simple Resume.png',
    tags: ['Tech', 'Dark', 'Bold'],
    isHot: true,
    category: 'Modern'
  },
  {
    id: 'green-white-modern',
    name: 'Green & White Modern',
    description: 'Fresh green and white design for graphic designers and creatives. Portfolio-ready layout.',
    thumbnail: '/cv templates/Green and White Modern Graphic Designer Resume.png',
    tags: ['Creative', 'Fresh', 'Modern'],
    category: 'Creative'
  },
  {
    id: 'minimalist-cv',
    name: 'Minimalist Classic',
    description: 'Pure typography-driven design. Single column, maximum clarity and elegance.',
    thumbnail: '/cv templates/Minimalist CV Resume.png',
    tags: ['Minimal', 'Clean', 'Classic'],
    category: 'Minimal'
  },
  {
    id: 'navy-yellow',
    name: 'Navy Yellow Professional',
    description: 'Sophisticated navy with bold yellow accents. For designers, architects, and creatives.',
    thumbnail: '/cv templates/Navy Yellow Modern Professional Designer CV Resume.png',
    tags: ['Bold', 'Designer', 'Premium'],
    isPremium: true,
    category: 'Executive'
  },
  {
    id: 'pink-aesthetic',
    name: 'Pink Aesthetic',
    description: 'Vibrant and stylish for influencers, content creators, and beauty professionals.',
    thumbnail: '/cv templates/Pink Aesthetic Beauty Influencer CV Resume.png',
    tags: ['Creative', 'Vibrant', 'Influencer'],
    category: 'Creative'
  },
  {
    id: 'modern-minimal',
    name: 'The Helvetica Standard',
    description: 'Precision-engineered for clarity. Ideal for technical roles and design purists.',
    thumbnail: '/cv templates/Minimalist CV Resume.png',
    tags: ['Swiss', 'Minimal'],
    category: 'Minimal'
  },
  {
    id: 'professional-executive',
    name: 'The Professional Executive',
    description: 'A classic, authoritative two-column layout with a bold dark sidebar. Ideal for leadership roles.',
    thumbnail: '/cv templates/Blue and Gray Simple Professional CV Resume.png',
    tags: ['Executive', 'Dark Sidebar'],
    isPopular: false,
    category: 'Executive'
  },
];

const CATEGORIES = ['All Templates', 'Modern', 'Executive', 'Creative', 'Minimal'];

export const TemplatesPage = () => {
  const { isAuthenticated } = useAuth();
  const { setTemplate } = useEditor();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All Templates');

  const handleSelectTemplate = (id: string = 'minimalist-cv') => {
    setTemplate(id);
    if (isAuthenticated) {
      navigate('/editor/personal');
    } else {
      navigate('/login', { state: { from: { pathname: '/templates' }, selectedTemplate: id } });
    }
  };

  const filtered = activeCategory === 'All Templates'
    ? TEMPLATES
    : TEMPLATES.filter(t => t.category === activeCategory);

  return (
    <MainLayout>
      <div className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-on-surface leading-none">
                Choose Your Template
              </h1>
              <p className="text-on-surface-variant max-w-lg text-lg font-body leading-relaxed">
                Professionally designed templates for every career. All A4-ready and ATS-optimised.
              </p>
            </div>
            <Button
              onClick={() => handleSelectTemplate('minimalist-cv')}
              variant="secondary"
              size="lg"
              className="flex items-center gap-2 shadow-xl shadow-secondary/20"
            >
              <PlusCircle className="w-5 h-5" />
              Start from Scratch
            </Button>
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2">
            {CATEGORIES.map(cat => (
              <Button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                variant={activeCategory === cat ? 'primary' : 'outline'}
                size="sm"
                className={cn(
                  'rounded-full whitespace-nowrap transition-all',
                  activeCategory !== cat && 'border-none bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                )}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(template => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={() => handleSelectTemplate(template.id)}
              />
            ))}

            {/* Custom Blueprint */}
            <div
              onClick={() => handleSelectTemplate('minimalist-cv')}
              className="group relative flex flex-col bg-surface-container-low border-2 border-dashed border-outline-variant/30 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-surface-container-high cursor-pointer min-h-[320px]"
            >
              <div className="aspect-[3/4] flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#F97316]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PlusCircle className="w-8 h-8 text-[#F97316]" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-primary tracking-tight">Custom Blueprint</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mt-2 px-4">
                    Start blank and craft your own layout from scratch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="mt-16 bg-gradient-to-br from-[#333D47] to-[#191C1E] p-10 rounded-3xl text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#F97316]/20 text-[#F97316] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-sm">workspace_premium</span>
                Pro Templates
              </div>
              <h2 className="text-3xl font-bold font-headline mb-4">Want more premium options?</h2>
              <p className="text-white/70 mb-6 text-base">
                Unlock unlimited templates, AI-enhanced writing, and high-resolution PDF export.
              </p>
              <Button
                onClick={() => navigate('/upgrade')}
                className="bg-[#F97316] text-white hover:bg-[#EA580C] font-bold px-8 py-3"
              >
                Upgrade to Pro
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
              <div className="w-full h-full border-[60px] border-white rounded-full translate-x-20 translate-y-10"></div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const TemplateCard: React.FC<{ template: any; onSelect: () => void }> = ({ template, onSelect }) => (
  <div className={cn('group relative flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-on-surface/5 cursor-pointer')}>
    {/* Thumbnail */}
    <div className="aspect-[3/4] bg-surface-container relative overflow-hidden">
      <img
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        src={template.thumbnail}
        alt={template.name}
      />
      <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[2px]">
        <Button
          onClick={onSelect}
          variant="outline"
          className="bg-white text-primary hover:bg-white/90 border-none transform translate-y-4 group-hover:translate-y-0 transition-transform font-bold px-6"
        >
          Use This Template
        </Button>
      </div>
      {/* Badges */}
      <div className="absolute top-3 left-3 flex flex-col gap-1">
        {template.isPopular && <Badge label="Most Popular" color="bg-[#F97316] text-white" />}
        {template.isHot && <Badge label="🔥 Hot" color="bg-red-500 text-white" />}
        {template.isPremium && <Badge label="Pro" color="bg-[#333D47] text-white" />}
      </div>
    </div>
    {/* Info */}
    <div className="p-4 flex flex-col flex-1">
      <h3 className="font-headline font-bold text-base text-primary tracking-tight leading-tight mb-1">{template.name}</h3>
      <p className="text-on-surface-variant text-xs leading-relaxed mb-3 flex-1">{template.description}</p>
      <div className="flex gap-2 flex-wrap">
        {template.tags.map((tag: string) => (
          <span key={tag} className="text-[9px] font-bold text-outline uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Badge = ({ label, color }: { label: string; color: string }) => (
  <span className={cn('px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider', color)}>
    {label}
  </span>
);

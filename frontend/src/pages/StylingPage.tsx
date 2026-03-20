import React from 'react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Card } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';
import { 
  Palette, 
  Type, 
  ChevronRight, 
  Sparkles,
  Check,
  Layout,
  Maximize2
} from 'lucide-react';
import { useEditor } from '@/src/lib/EditorContext';
import { useNavigate } from 'react-router-dom';

const COLORS = [
  { name: 'Professional Blue', value: '#1E293B' },
  { name: 'CVWise Orange', value: '#F97316' },
  { name: 'Emerald', value: '#10B981' },
  { name: 'Royal Purple', value: '#6366F1' },
  { name: 'Rose', value: '#F43F5E' },
  { name: 'Slate', value: '#475569' },
];

const FONTS = [
  { name: 'Inter', value: 'Inter', description: 'Modern, highly readable sans-serif' },
  { name: 'Outfit', value: 'Outfit', description: 'Elegant and clean corporate style' },
  { name: 'Roboto', value: 'Roboto', description: 'Functional and versatile' },
  { name: 'Playfair Display', value: 'Playfair Display', description: 'Sophisticated serif for creative roles' },
];

export const StylingPage = () => {
  const { cvData, updateStyle, calculateProgress } = useEditor();
  const navigate = useNavigate();
  const progress = calculateProgress();

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub="Editorial Mode">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-10">
        <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Style Architecture</h1>
            <p className="text-on-surface-variant text-sm md:text-base">Personalizing the visual impact of your professional narrative.</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316]">Market Readiness</p>
            <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#F97316]" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-xs font-bold">{Math.round(progress)}%</p>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Controls */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            
            {/* Color Palette */}
            <section className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center text-[#F97316]">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-headline">Theme Palette</h3>
                  <p className="text-xs text-on-surface-variant">Choose your signature brand color</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {COLORS.map(color => (
                  <button
                    key={color.value}
                    onClick={() => updateStyle({ primaryColor: color.value })}
                    className={cn(
                      "group p-4 rounded-xl border-2 transition-all text-left relative overflow-hidden",
                      cvData.style.primaryColor === color.value 
                        ? "border-[#F97316] bg-slate-50" 
                        : "border-slate-100 hover:border-slate-200 bg-white"
                    )}
                  >
                    <div 
                      className="w-full h-8 rounded-md mb-3"
                      style={{ backgroundColor: color.value }}
                    ></div>
                    <p className="font-bold text-xs truncate">{color.name}</p>
                    {cvData.style.primaryColor === color.value && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#F97316] text-white flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </section>

            {/* Typography */}
            <section className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center text-[#F97316]">
                  <Type className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-headline">Typography System</h3>
                  <p className="text-xs text-on-surface-variant">Select a font that matches your career tone</p>
                </div>
              </div>

              <div className="space-y-4">
                {FONTS.map(font => (
                  <button
                    key={font.value}
                    onClick={() => updateStyle({ fontFamily: font.value })}
                    className={cn(
                      "w-full p-5 rounded-xl border-2 transition-all flex items-center justify-between",
                      cvData.style.fontFamily === font.value 
                        ? "border-[#F97316] bg-slate-50" 
                        : "border-slate-100 hover:border-slate-200 bg-white"
                    )}
                  >
                    <div className="text-left">
                      <p className="font-bold text-sm mb-1" style={{ fontFamily: font.value }}>{font.name}</p>
                      <p className="text-[10px] text-on-surface-variant max-w-xs">{font.description}</p>
                    </div>
                    {cvData.style.fontFamily === font.value && (
                      <div className="w-6 h-6 rounded-full bg-[#F97316] text-white flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </section>

            {/* Layout Options */}
            <section className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm opacity-50 cursor-not-allowed">
               <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-headline">Layout Architecture</h3>
                  <p className="text-xs text-on-surface-variant">Modular spacing and structural control (Coming Soon)</p>
                </div>
              </div>
            </section>

            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
              <Button 
                onClick={() => navigate('/editor/personal')}
                className="bg-[#F97316] text-white hover:bg-[#EA580C]"
              >
                Continue Editing
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Real-time Preview */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl border-4 border-slate-900 shadow-2xl overflow-hidden aspect-[1/1.414]">
                <div className="h-2" style={{ backgroundColor: cvData.style.primaryColor }}></div>
                <div className="p-10 space-y-8" style={{ fontFamily: cvData.style.fontFamily }}>
                  {/* Mock Preview Content */}
                  <header className="flex justify-between items-start border-b pb-6">
                    <div>
                      <h2 className="text-2xl font-black uppercase tracking-tighter" style={{ color: cvData.style.primaryColor }}>
                        {cvData.personalInfo.firstName || 'YOUR'} {cvData.personalInfo.lastName || 'NAME'}
                      </h2>
                      <p className="text-sm font-bold opacity-60 mt-1">{cvData.personalInfo.title || 'ARCHITECTURAL STRATEGIST'}</p>
                    </div>
                    <div className="text-[10px] font-bold text-right space-y-1 opacity-50">
                      <p>{cvData.personalInfo.email || 'hello@cvwise.io'}</p>
                      <p>{cvData.personalInfo.location || 'New York, NY'}</p>
                    </div>
                  </header>

                  <section className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest border-b pb-1" style={{ color: cvData.style.primaryColor }}>Experience</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-bold text-sm">Lead Product Architect</h4>
                          <span className="text-[10px] font-bold opacity-50">2021 — PRESENT</span>
                        </div>
                        <p className="text-[10px] font-bold" style={{ color: cvData.style.primaryColor }}>Apple Inc.</p>
                        <p className="text-[11px] leading-relaxed opacity-70">
                          Architecting the next generation of spatial computing interfaces.
                        </p>
                      </div>
                    </div>
                  </section>

                   <section className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest border-b pb-1" style={{ color: cvData.style.primaryColor }}>Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Strategic Architecture', 'Systems Design', 'Technical Leadership'].map(tag => (
                        <span key={tag} className="text-[9px] font-bold px-2 py-1 rounded bg-slate-50 border border-slate-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-white/40 backdrop-blur-sm pointer-events-none md:pointer-events-auto cursor-pointer">
                   <div 
                    onClick={() => navigate('/editor/personal')}
                    className="bg-white px-6 py-3 rounded-xl shadow-xl border border-outline-variant/10 flex items-center gap-3 animate-in fade-in zoom-in duration-300"
                   >
                    <Maximize2 className="w-5 h-5 text-[#F97316]" />
                    <span className="font-bold text-[#F97316]">Full Editor Preview</span>
                   </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F97316] animate-pulse" />
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Live Architectural Rendering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

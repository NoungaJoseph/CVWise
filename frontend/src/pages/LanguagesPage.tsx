import React from 'react';
import { Plus, X, Globe } from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { useEditor, Language } from '@/src/lib/EditorContext';
import { useNavigate } from 'react-router-dom';

export const LanguagesPage = () => {
  const { cvData, updateLanguages, addLanguage } = useEditor();
  const navigate = useNavigate();
  const [languageName, setLanguageName] = React.useState('');
  const [proficiency, setProficiency] = React.useState<'Native' | 'Fluent' | 'Intermediate' | 'Basic'>('Fluent');

  const handleAddLanguage = () => {
    if (languageName.trim()) {
      const newLanguage: Language = {
        id: Math.random().toString(36).substr(2, 9),
        name: languageName.trim(),
        proficiency
      };
      addLanguage(newLanguage);
      setLanguageName('');
      setProficiency('Fluent');
    }
  };

  const handleDeleteLanguage = (id: string) => {
    updateLanguages(cvData.languages.filter(l => l.id !== id));
  };

  const handleSaveAndNext = () => {
    navigate('/editor/certifications');
  };

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub="Editorial Mode">
      <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-10">
        <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Languages</h1>
            <p className="text-on-surface-variant text-sm md:text-base">Showcase your language proficiencies and communication abilities.</p>
          </div>
          <Button onClick={handleAddLanguage} className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
            <Plus className="w-4 h-4" />
            Add Language
          </Button>
        </header>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <Card className="p-6 md:p-8 border border-[#F1F0F4]">
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Language Name</label>
                    <Input
                      placeholder="e.g., English, Spanish, Mandarin"
                      value={languageName}
                      onChange={(e) => setLanguageName(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddLanguage()}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Proficiency Level</label>
                    <select 
                      value={proficiency} 
                      onChange={(e) => setProficiency(e.target.value as any)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full font-medium"
                    >
                      <option value="Native">Native</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Basic">Basic</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Languages List */}
              {cvData.languages.length > 0 ? (
                <div className="space-y-3">
                  {cvData.languages.map((lang) => (
                    <div key={lang.id} className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg border border-[#F1F0F4] hover:border-[#E5E1ED] transition">
                      <div className="flex items-center gap-3 flex-1">
                        <Globe className="w-4 h-4 text-[#F97316]" />
                        <div>
                          <p className="font-bold text-sm text-on-surface">{lang.name}</p>
                          <p className="text-xs text-on-surface-variant">{lang.proficiency}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteLanguage(lang.id)}
                        className="text-gray-400 hover:text-red-500 transition p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-on-surface-variant">
                  <Globe className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p className="text-sm">No languages added yet. Add your language proficiencies to enhance your CV.</p>
                </div>
              )}
            </Card>
          </div>

          {/* Preview */}
          <div className="col-span-12 lg:col-span-4">
            <Card className="p-6 border border-[#F1F0F4] sticky top-4">
              <h3 className="text-sm font-bold text-on-surface mb-4">Preview</h3>
              {cvData.languages.length > 0 ? (
                <div className="space-y-2">
                  {cvData.languages.map((lang) => (
                    <div key={lang.id} className="text-xs">
                      <p className="font-semibold text-on-surface">{lang.name}</p>
                      <p className="text-on-surface-variant text-xs">{lang.proficiency}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-on-surface-variant">Languages will appear here</p>
              )}
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            onClick={() => navigate('/editor/skills')}
            className="px-6 py-2.5 rounded-lg font-bold text-sm"
          >
            Previous
          </Button>
          <Button
            onClick={handleSaveAndNext}
            className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm"
          >
            Next: Certifications
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

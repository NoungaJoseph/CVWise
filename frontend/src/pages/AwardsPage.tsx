import React from 'react';
import { Plus, X, Star } from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { useEditor, Award } from '@/src/lib/EditorContext';
import { useNavigate } from 'react-router-dom';

export const AwardsPage = () => {
  const { cvData, updateAwards, addAward } = useEditor();
  const navigate = useNavigate();
  const [awardTitle, setAwardTitle] = React.useState('');
  const [issuer, setIssuer] = React.useState('');
  const [date, setDate] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleAddAward = () => {
    if (awardTitle.trim() && issuer.trim()) {
      const newAward: Award = {
        id: Math.random().toString(36).substr(2, 9),
        title: awardTitle.trim(),
        issuer: issuer.trim(),
        date: date || new Date().toISOString().split('T')[0],
        description: description.trim() || undefined
      };
      addAward(newAward);
      setAwardTitle('');
      setIssuer('');
      setDate('');
      setDescription('');
    }
  };

  const handleDeleteAward = (id: string) => {
    updateAwards(cvData.awards.filter(a => a.id !== id));
  };

  const handleSaveAndNext = () => {
    navigate('/editor/references');
  };

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub="Editorial Mode">
      <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-10">
        <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Awards & Recognition</h1>
            <p className="text-on-surface-variant text-sm md:text-base">Highlight your achievements and accolades.</p>
          </div>
          <Button onClick={handleAddAward} className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
            <Plus className="w-4 h-4" />
            Add Award
          </Button>
        </header>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <Card className="p-6 md:p-8 border border-[#F1F0F4]">
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Award Title</label>
                    <Input
                      placeholder="e.g., Employee of the Year"
                      value={awardTitle}
                      onChange={(e) => setAwardTitle(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Issuer/Organization</label>
                    <Input
                      placeholder="e.g., Tech Company Inc."
                      value={issuer}
                      onChange={(e) => setIssuer(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-2">Date Received</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-2">Description (Optional)</label>
                  <textarea
                    placeholder="Add details about the award..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full resize-none h-24"
                  />
                </div>
              </div>

              {/* Awards List */}
              {cvData.awards.length > 0 ? (
                <div className="space-y-3">
                  {cvData.awards.map((award) => (
                    <div key={award.id} className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg border border-[#F1F0F4] hover:border-[#E5E1ED] transition">
                      <div className="flex items-center gap-3 flex-1">
                        <Star className="w-4 h-4 text-[#F97316]" />
                        <div>
                          <p className="font-bold text-sm text-on-surface">{award.title}</p>
                          <p className="text-xs text-on-surface-variant">{award.issuer} • {new Date(award.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteAward(award.id)}
                        className="text-gray-400 hover:text-red-500 transition p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-on-surface-variant">
                  <Star className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p className="text-sm">No awards added yet. Add your achievements and recognitions.</p>
                </div>
              )}
            </Card>
          </div>

          {/* Preview */}
          <div className="col-span-12 lg:col-span-4">
            <Card className="p-6 border border-[#F1F0F4] sticky top-4">
              <h3 className="text-sm font-bold text-on-surface mb-4">Preview</h3>
              {cvData.awards.length > 0 ? (
                <div className="space-y-3">
                  {cvData.awards.map((award) => (
                    <div key={award.id} className="text-xs">
                      <p className="font-semibold text-on-surface">{award.title}</p>
                      <p className="text-on-surface-variant">{award.issuer}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-on-surface-variant">Awards will appear here</p>
              )}
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            onClick={() => navigate('/editor/certifications')}
            className="px-6 py-2.5 rounded-lg font-bold text-sm"
          >
            Previous
          </Button>
          <Button
            onClick={handleSaveAndNext}
            className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm"
          >
            Next: References
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

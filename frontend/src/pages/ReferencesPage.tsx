import React from 'react';
import { Plus, X, Users } from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { useEditor, Reference } from '@/src/lib/EditorContext';
import { useNavigate } from 'react-router-dom';

export const ReferencesPage = () => {
  const { cvData, updateReferences, addReference } = useEditor();
  const navigate = useNavigate();
  const [refName, setRefName] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const handleAddReference = () => {
    if (refName.trim() && email.trim()) {
      const newReference: Reference = {
        id: Math.random().toString(36).substr(2, 9),
        name: refName.trim(),
        position: position.trim() || 'Professional Reference',
        company: company.trim() || '',
        email: email.trim(),
        phone: phone.trim() || undefined
      };
      addReference(newReference);
      setRefName('');
      setPosition('');
      setCompany('');
      setEmail('');
      setPhone('');
    }
  };

  const handleDeleteReference = (id: string) => {
    updateReferences(cvData.references.filter(r => r.id !== id));
  };

  const handleSaveAndNext = () => {
    navigate('/editor/preview');
  };

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub="Editorial Mode">
      <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-10">
        <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Professional References</h1>
            <p className="text-on-surface-variant text-sm md:text-base">Add contacts that employers can reach out to for verification.</p>
          </div>
          <Button onClick={handleAddReference} className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
            <Plus className="w-4 h-4" />
            Add Reference
          </Button>
        </header>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <Card className="p-6 md:p-8 border border-[#F1F0F4]">
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Full Name</label>
                    <Input
                      placeholder="e.g., John Smith"
                      value={refName}
                      onChange={(e) => setRefName(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Position/Title</label>
                    <Input
                      placeholder="e.g., Senior Manager"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-2">Company/Organization</label>
                  <Input
                    placeholder="e.g., ABC Corporation"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Phone (Optional)</label>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                </div>
              </div>

              {/* References List */}
              {cvData.references.length > 0 ? (
                <div className="space-y-3">
                  {cvData.references.map((ref) => (
                    <div key={ref.id} className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg border border-[#F1F0F4] hover:border-[#E5E1ED] transition">
                      <div className="flex items-center gap-3 flex-1">
                        <Users className="w-4 h-4 text-[#F97316]" />
                        <div>
                          <p className="font-bold text-sm text-on-surface">{ref.name}</p>
                          <p className="text-xs text-on-surface-variant">{ref.position} • {ref.company}</p>
                          <p className="text-xs text-on-surface-variant">{ref.email}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteReference(ref.id)}
                        className="text-gray-400 hover:text-red-500 transition p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-on-surface-variant">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p className="text-sm">No references added yet. Add professional references for employers to contact.</p>
                </div>
              )}
            </Card>
          </div>

          {/* Preview */}
          <div className="col-span-12 lg:col-span-4">
            <Card className="p-6 border border-[#F1F0F4] sticky top-4">
              <h3 className="text-sm font-bold text-on-surface mb-4">Preview</h3>
              {cvData.references.length > 0 ? (
                <div className="space-y-4">
                  {cvData.references.map((ref) => (
                    <div key={ref.id} className="text-xs border-b border-gray-200 pb-3 last:border-b-0">
                      <p className="font-semibold text-on-surface">{ref.name}</p>
                      <p className="text-on-surface-variant">{ref.position}</p>
                      <p className="text-on-surface-variant">{ref.company}</p>
                      <p className="text-on-surface-variant">{ref.email}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-on-surface-variant">References will appear here</p>
              )}
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            onClick={() => navigate('/editor/awards')}
            className="px-6 py-2.5 rounded-lg font-bold text-sm"
          >
            Previous
          </Button>
          <Button
            onClick={handleSaveAndNext}
            className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm"
          >
            Next: Preview
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

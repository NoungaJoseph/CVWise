import React from 'react';
import { Plus, X, Award } from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { useEditor, Certification } from '@/src/lib/EditorContext';
import { useNavigate } from 'react-router-dom';

export const CertificationsPage = () => {
  const { cvData, updateCertifications, addCertification } = useEditor();
  const navigate = useNavigate();
  const [certName, setCertName] = React.useState('');
  const [issuer, setIssuer] = React.useState('');
  const [date, setDate] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [url, setUrl] = React.useState('');

  const handleAddCertification = () => {
    if (certName.trim() && issuer.trim()) {
      const newCert: Certification = {
        id: Math.random().toString(36).substr(2, 9),
        name: certName.trim(),
        issuer: issuer.trim(),
        date: date || new Date().toISOString().split('T')[0],
        expiryDate: expiryDate || undefined,
        url: url || undefined
      };
      addCertification(newCert);
      setCertName('');
      setIssuer('');
      setDate('');
      setExpiryDate('');
      setUrl('');
    }
  };

  const handleDeleteCertification = (id: string) => {
    updateCertifications(cvData.certifications.filter(c => c.id !== id));
  };

  const handleSaveAndNext = () => {
    navigate('/editor/awards');
  };

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub="Editorial Mode">
      <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-10">
        <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Certifications</h1>
            <p className="text-on-surface-variant text-sm md:text-base">Add your professional certifications and credentials.</p>
          </div>
          <Button onClick={handleAddCertification} className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
            <Plus className="w-4 h-4" />
            Add Certification
          </Button>
        </header>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <Card className="p-6 md:p-8 border border-[#F1F0F4]">
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Certification Name</label>
                    <Input
                      placeholder="e.g., AWS Certified Solutions Architect"
                      value={certName}
                      onChange={(e) => setCertName(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Issuer/Organization</label>
                    <Input
                      placeholder="e.g., Amazon Web Services"
                      value={issuer}
                      onChange={(e) => setIssuer(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Issue Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Expiry Date (Optional)</label>
                    <input
                      type="date"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">Certificate URL (Optional)</label>
                    <Input
                      placeholder="https://..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="bg-white border border-[#F1F0F4] rounded-lg px-4 py-2.5 text-sm w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Certifications List */}
              {cvData.certifications.length > 0 ? (
                <div className="space-y-3">
                  {cvData.certifications.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg border border-[#F1F0F4] hover:border-[#E5E1ED] transition">
                      <div className="flex items-center gap-3 flex-1">
                        <Award className="w-4 h-4 text-[#F97316]" />
                        <div>
                          <p className="font-bold text-sm text-on-surface">{cert.name}</p>
                          <p className="text-xs text-on-surface-variant">{cert.issuer} • {new Date(cert.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteCertification(cert.id)}
                        className="text-gray-400 hover:text-red-500 transition p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-on-surface-variant">
                  <Award className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p className="text-sm">No certifications added yet. Add your professional credentials.</p>
                </div>
              )}
            </Card>
          </div>

          {/* Preview */}
          <div className="col-span-12 lg:col-span-4">
            <Card className="p-6 border border-[#F1F0F4] sticky top-4">
              <h3 className="text-sm font-bold text-on-surface mb-4">Preview</h3>
              {cvData.certifications.length > 0 ? (
                <div className="space-y-3">
                  {cvData.certifications.map((cert) => (
                    <div key={cert.id} className="text-xs">
                      <p className="font-semibold text-on-surface">{cert.name}</p>
                      <p className="text-on-surface-variant">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-on-surface-variant">Certifications will appear here</p>
              )}
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            onClick={() => navigate('/editor/languages')}
            className="px-6 py-2.5 rounded-lg font-bold text-sm"
          >
            Previous
          </Button>
          <Button
            onClick={handleSaveAndNext}
            className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm"
          >
            Next: Awards
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

import React from 'react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { Trash2, ArrowRight, Plus } from 'lucide-react';

import { useEditor, Education } from '@/src/lib/EditorContext';
import { useNavigate } from 'react-router-dom';

export const EducationPage = () => {
  const { cvData, updateEducation, addEducation, calculateProgress } = useEditor();
  const navigate = useNavigate();
  const progress = calculateProgress();
  
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState<Partial<Education>>({
    institution: '',
    degree: '',
    startDate: '',
    endDate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    if (editingId) {
      const updatedEducation = cvData.education.map(e => 
        e.id === editingId ? { ...formData, id: editingId } as Education : e
      );
      updateEducation(updatedEducation);
      setEditingId(null);
      setFormData({ institution: '', degree: '', startDate: '', endDate: '' });
    } else {
      const newEdu: Education = {
        id: Math.random().toString(36).substr(2, 9),
        institution: formData.institution || '',
        degree: formData.degree || '',
        startDate: formData.startDate || '',
        endDate: formData.endDate || ''
      };
      updateEducation([...cvData.education, newEdu]);
      setFormData({ institution: '', degree: '', startDate: '', endDate: '' });
    }
  };

  const handleDelete = (id: string) => {
    updateEducation(cvData.education.filter(e => e.id !== id));
  };

  const handleSaveAndNext = () => {
    navigate('/editor/skills');
  };

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub="Editorial Mode">
      <div className="max-w-[1000px] px-4 md:px-12 py-6 md:py-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
              <div className="space-y-1">
                <h1 className="text-2xl md:text-[32px] font-bold text-[#191C1E] font-headline tracking-tight">Education</h1>
                <p className="text-[#44474E] text-sm md:text-[15px] font-medium">Highlight your academic credentials and highest degrees attained.</p>
              </div>
              <div className="text-left md:text-right flex flex-col items-start md:items-end w-full md:w-auto">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316] mb-1">Step 3 of 5</p>
                <p className="text-lg font-bold text-[#191C1E] font-headline">{Math.round(progress)}% Complete</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-[#E1E2E4] rounded-full overflow-hidden mb-12">
              <div className="h-full bg-[#F97316]" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="flex-1 bg-white p-10 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#F1F0F4]">
              
              {/* List of existing education */}
              <div className="mb-10 space-y-4">
                {cvData.education.map(edu => (
                  <div key={edu.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center group">
                    <div>
                      <h4 className="font-bold text-[#191C1E]">{edu.degree}</h4>
                      <p className="text-sm text-[#44474E]">{edu.institution} | {edu.startDate} — {edu.endDate}</p>
                    </div>
                    <div className="flex gap-2">
                       <button onClick={() => { setEditingId(edu.id); setFormData(edu); }} className="p-2 text-slate-400 hover:text-[#F97316] transition-colors">
                        <Plus className="w-4 h-4 rotate-45" /> {/* Use as edit icon for now or just generic */}
                      </button>
                      <button onClick={() => handleDelete(edu.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-7">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline">
                  {editingId ? 'Edit Education' : 'Add Education'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Institution</label>
                    <Input 
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      placeholder="e.g. Stanford University" 
                      className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Degree</label>
                    <Input 
                      name="degree"
                      value={formData.degree}
                      onChange={handleInputChange}
                      placeholder="e.g. Master of Business Administration" 
                      className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Start Date</label>
                    <Input 
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      type="month"
                      className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">End Date (or Expected)</label>
                    <Input 
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      type="month"
                      className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleUpdate}
                  className="w-full bg-[#F97316] text-white hover:bg-[#EA580C] py-6 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  {editingId ? 'Update Education' : 'Add Degree'}
                </Button>

                {/* Action Buttons */}
                <div className="pt-8 flex justify-between items-center border-t border-[#F1F0F4] mt-4">
                  <button onClick={() => updateEducation([])} className="flex items-center gap-2 text-[14px] font-bold text-[#44474E] hover:text-[#191C1E] transition-colors py-2 px-1">
                    <Trash2 className="w-[18px] h-[18px]" />
                    Discard All
                  </button>
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => navigate('/editor/experience')} className="bg-[#F1F3F5] hover:bg-[#EAECEF] border-none text-[#191C1E] px-8 py-2.5 rounded-lg font-bold text-[14px]">
                      Back
                    </Button>
                    <Button onClick={handleSaveAndNext} className="bg-[#F97316] text-white hover:bg-[#EA580C] px-8 py-2.5 rounded-lg font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-orange-500/10">
                      Save & Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </DashboardLayout>
  );
};

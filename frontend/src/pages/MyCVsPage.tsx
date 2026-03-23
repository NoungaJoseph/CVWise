import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Card } from '@/src/components/ui';
import { PlusCircle, MoreVertical, Edit2, Download, Trash2, Clock } from 'lucide-react';
import { useEditor } from '@/src/lib/EditorContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Template thumbnail images
const TEMPLATE_THUMBNAILS: Record<string, string> = {
  'beige-minimalist': '/cv templates/Beige Minimalist Corporate IT Project Manager Resume.png',
  'blue-gray-professional': '/cv templates/Blue and Gray Simple Professional CV Resume.png',
  'brown-simple': '/cv templates/Brown Simple Professional Resume.png',
  'green-modern-bold': '/cv templates/Green Modern Bold Software Developer Simple Resume.png',
  'green-white-modern': '/cv templates/Green and White Modern Graphic Designer Resume.png',
  'minimalist-cv': '/cv templates/Minimalist CV Resume.png',
  'navy-yellow': '/cv templates/Navy Yellow Modern Professional Designer CV Resume.png',
  'pink-aesthetic': '/cv templates/Pink Aesthetic Beauty Influencer CV Resume.png',
  'modern-minimal': '/cv templates/Minimalist CV Resume.png',
  'professional-executive': '/cv templates/Blue and Gray Simple Professional CV Resume.png',
};

export const MyCVsPage = () => {
  const { cvData, setTemplate } = useEditor();
  const navigate = useNavigate();

  // Build dynamic list from the current CV in context + placeholders
  const cvs = [
    {
      id: 'current',
      title: cvData.title || 'My Professional CV',
      lastEdited: 'Just now',
      template: cvData.templateId,
      thumbnail: TEMPLATE_THUMBNAILS[cvData.templateId] || '/cv templates/Minimalist CV Resume.png',
      isCurrent: true,
    },
    {
      id: 'sample1',
      title: 'Senior Designer CV',
      lastEdited: '3 days ago',
      template: 'navy-yellow',
      thumbnail: TEMPLATE_THUMBNAILS['navy-yellow'],
      isCurrent: false,
    },
    {
      id: 'sample2',
      title: 'Tech Lead Resume',
      lastEdited: '1 week ago',
      template: 'green-modern-bold',
      thumbnail: TEMPLATE_THUMBNAILS['green-modern-bold'],
      isCurrent: false,
    },
  ];

  const handleEdit = (cv: typeof cvs[0]) => {
    if (cv.isCurrent) {
      navigate('/editor/personal');
    } else {
      setTemplate(cv.template);
      navigate('/editor/personal');
    }
  };

  const handleExport = async (cv: typeof cvs[0]) => {
    if (!cv.isCurrent) {
      alert('Only your current active CV can be exported. Click Edit to make it active first.');
      return;
    }
    navigate('/preview');
  };

  return (
    <DashboardLayout>
      <div className="max-w-[1100px] px-4 md:px-12 py-6 md:py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <h1 className="text-2xl md:text-[32px] font-bold text-[#191C1E] font-headline tracking-tight">My CVs</h1>
            <p className="text-[#44474E] text-sm md:text-[15px] font-medium mt-1">Manage and export your professional documents.</p>
          </div>
          <Link to="/templates" className="w-full md:w-auto">
            <Button className="w-full md:w-auto bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm">
              <PlusCircle className="w-5 h-5" />
              Create New CV
            </Button>
          </Link>
        </div>

        {/* CV Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cvs.map((cv) => (
            <Card key={cv.id} className="p-0 overflow-hidden bg-white border border-[#F1F0F4] shadow-sm flex flex-col group rounded-[20px] hover:shadow-xl transition-shadow duration-300">
              {/* CV Preview Thumbnail */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F8F9FA]">
                <img
                  src={cv.thumbnail}
                  alt={cv.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Current badge */}
                {cv.isCurrent && (
                  <div className="absolute top-3 left-3 bg-[#F97316] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded">
                    Active
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#191C1E]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleEdit(cv)}
                    className="bg-white text-[#191C1E] text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#F8F9FA] transition-colors flex items-center gap-2"
                  >
                    <Edit2 className="w-3.5 h-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => handleExport(cv)}
                    className="bg-[#F97316] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#EA580C] transition-colors flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" /> Export
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-3">
                <div>
                  <h3 className="text-[16px] font-bold font-headline text-[#191C1E] truncate">{cv.title}</h3>
                  <p className="text-xs text-[#44474E] flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" /> Edited {cv.lastEdited}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(cv)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#F8F9FA] hover:bg-[#F1F0F4] border border-[#E1E2E4] text-[13px] font-bold h-10 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={() => handleExport(cv)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-[13px] font-bold h-10 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" /> Export PDF
                  </button>
                </div>
              </div>
            </Card>
          ))}

          {/* Create new card */}
          <Link to="/templates">
            <Card className="p-0 overflow-hidden bg-white border-2 border-dashed border-[#E1E2E4] flex flex-col group rounded-[20px] hover:border-[#F97316] transition-colors cursor-pointer h-full min-h-[380px]">
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#F97316]/10 group-hover:bg-[#F97316]/20 flex items-center justify-center transition-colors">
                  <PlusCircle className="w-8 h-8 text-[#F97316]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#191C1E] font-headline">Create New CV</h3>
                  <p className="text-xs text-[#44474E] mt-1">Choose from 8 professional templates</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Card } from '@/src/components/ui';
import { PlusCircle, Edit2, Download, Trash2, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { useEditor } from '@/src/lib/EditorContext';
import { useAuth } from '@/src/lib/AuthContext';
import { getAllCvs, deleteCv, downloadSavedCvPdf } from '@/src/lib/api';

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

interface SavedCV {
  _id: string;
  title: string;
  templateId: string;
  createdAt: string;
  updatedAt: string;
}

export const MyCVsPage = () => {
  const { cvData, setTemplate } = useEditor();
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const [savedCVs, setSavedCVs] = useState<SavedCV[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  // Load user's saved CVs from backend
  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const loadCVs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const cvs = await getAllCvs(token);
        setSavedCVs(cvs || []);
      } catch (err) {
        console.error('Failed to load CVs:', err);
        setError('Failed to load your CVs. Please try again.');
        setSavedCVs([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadCVs();
  }, [token, navigate]);

  const handleEdit = (cv: SavedCV) => {
    // Load this CV data into the editor
    setTemplate(cv.templateId);
    navigate(`/editor/personal?cvId=${cv._id}`);
  };

  const handleDelete = async (cvId: string) => {
    if (!window.confirm('Are you sure you want to delete this CV? This action cannot be undone.')) {
      return;
    }

    if (!token) return;

    try {
      setIsDeleting(cvId);
      await deleteCv(token, cvId);
      setSavedCVs(prevCVs => prevCVs.filter(cv => cv._id !== cvId));
    } catch (err) {
      console.error('Failed to delete CV:', err);
      alert('Failed to delete CV. Please try again.');
    } finally {
      setIsDeleting(null);
    }
  };

  const handleExport = async (cvId: string) => {
    if (!token) return;
    try {
      await downloadSavedCvPdf(token, cvId);
    } catch (err) {
      console.error('Failed to download CV:', err);
      alert('Failed to download CV. Please try again.');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <DashboardLayout>
      <div className="max-w-[1100px] px-4 md:px-12 py-6 md:py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <h1 className="text-2xl md:text-[32px] font-bold text-[#191C1E] font-headline tracking-tight">My CVs</h1>
            <p className="text-[#44474E] text-sm md:text-[15px] font-medium mt-1">
              {savedCVs.length === 0 ? 'Create your first CV' : `You have ${savedCVs.length} CV${savedCVs.length !== 1 ? 's' : ''}`}
            </p>
          </div>
          <Link to="/templates" className="w-full md:w-auto">
            <Button className="w-full md:w-auto bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm">
              <PlusCircle className="w-5 h-5" />
              Create New CV
            </Button>
          </Link>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#F97316]" />
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <Card className="p-6 bg-red-50 border border-red-200 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-red-900">Error Loading CVs</h3>
                <p className="text-sm text-red-700 mt-1">{error}</p>
              </div>
            </div>
          </Card>
        )}

        {/* Empty State */}
        {!isLoading && savedCVs.length === 0 && !error && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#F97316]/10 flex items-center justify-center mx-auto mb-4">
                <PlusCircle className="w-8 h-8 text-[#F97316]" />
              </div>
              <h3 className="font-bold text-[#191C1E] font-headline mb-1">No CVs Yet</h3>
              <p className="text-sm text-[#44474E] mb-6">Create your first CV to get started</p>
              <Link to="/templates">
                <Button className="bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm">
                  Create New CV
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* CV Grid */}
        {!isLoading && savedCVs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedCVs.map((cv) => (
              <Card key={cv._id} className="p-0 overflow-hidden bg-white border border-[#F1F0F4] shadow-sm flex flex-col group rounded-[20px] hover:shadow-xl transition-shadow duration-300">
                {/* CV Preview Thumbnail */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F8F9FA]">
                  <img
                    src={TEMPLATE_THUMBNAILS[cv.templateId] || TEMPLATE_THUMBNAILS['modern-minimal']}
                    alt={cv.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#191C1E]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleEdit(cv)}
                      className="bg-white text-[#191C1E] text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#F8F9FA] transition-colors flex items-center gap-2"
                    >
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                    </button>
                    <button
                      onClick={() => handleExport(cv._id)}
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
                      <Clock className="w-3 h-3" /> Updated {formatDate(cv.updatedAt)}
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
                      onClick={() => handleExport(cv._id)}
                      disabled={isDeleting === cv._id}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-[13px] font-bold h-10 rounded-lg transition-colors disabled:opacity-50"
                    >
                      <Download className="w-4 h-4" /> Export
                    </button>
                    <button
                      onClick={() => handleDelete(cv._id)}
                      disabled={isDeleting === cv._id}
                      className="flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 text-[13px] font-bold h-10 w-10 rounded-lg transition-colors disabled:opacity-50"
                      title="Delete CV"
                    >
                      {isDeleting === cv._id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
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
        )}
      </div>
    </DashboardLayout>
  );
};

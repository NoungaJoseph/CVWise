import React, { useRef } from 'react';
import { useEditor } from '@/src/lib/EditorContext';
import { useAuth } from '@/src/lib/AuthContext';
import { Button } from '@/src/components/ui';
import { Download, ArrowLeft, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { generatePdfDownload } from '@/src/lib/api';
import { ModernMinimal } from '@/src/components/templates/ModernMinimal';
import { ProfessionalExecutive } from '@/src/components/templates/ProfessionalExecutive';
import { BeigeMinimalist } from '@/src/components/templates/BeigeMinimalist';
import { BlueGrayProfessional } from '@/src/components/templates/BlueGrayProfessional';
import { BrownSimple } from '@/src/components/templates/BrownSimple';
import { GreenModernBold } from '@/src/components/templates/GreenModernBold';
import { GreenWhiteModern } from '@/src/components/templates/GreenWhiteModern';
import { MinimalistCV } from '@/src/components/templates/MinimalistCV';
import { NavyYellow } from '@/src/components/templates/NavyYellow';
import { PinkAesthetic } from '@/src/components/templates/PinkAesthetic';

export const PreviewPage = () => {
  const { cvData } = useEditor();
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const cvRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleDownloadPDF = async () => {
    if (!token) {
      alert('Please login to download your CV');
      navigate('/login');
      return;
    }

    setIsDownloading(true);
    setError(null);
    try {
      // Call backend API to generate PDF
      await generatePdfDownload(token, cvData);
      console.log('PDF downloaded successfully');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate PDF';
      setError(errorMessage);
      console.error('PDF Download Error:', err);
      alert(errorMessage);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderTemplate = () => {
    switch (cvData.templateId) {
      case 'professional-executive':
        return <ProfessionalExecutive cvData={cvData} />;
      case 'beige-minimalist':
        return <BeigeMinimalist cvData={cvData} />;
      case 'blue-gray-professional':
        return <BlueGrayProfessional cvData={cvData} />;
      case 'brown-simple':
        return <BrownSimple cvData={cvData} />;
      case 'green-modern-bold':
        return <GreenModernBold cvData={cvData} />;
      case 'green-white-modern':
        return <GreenWhiteModern cvData={cvData} />;
      case 'minimalist-cv':
        return <MinimalistCV cvData={cvData} />;
      case 'navy-yellow':
        return <NavyYellow cvData={cvData} />;
      case 'pink-aesthetic':
        return <PinkAesthetic cvData={cvData} />;
      case 'modern-minimal':
      default:
        return <ModernMinimal cvData={cvData} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 overflow-x-hidden">
      {/* Controls */}
      <div className="max-w-[840px] mx-auto mb-8 flex flex-wrap justify-between items-center gap-4">
        <Button variant="outline" onClick={() => navigate('/dashboard')} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Editor
        </Button>
        <div className="flex gap-3 flex-wrap">
          <Button
            disabled={isDownloading}
            onClick={handleDownloadPDF}
            className="bg-[#F97316] text-white hover:bg-[#EA580C] flex items-center gap-2 min-w-[160px] justify-center"
          >
            {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
            {isDownloading ? 'Generating...' : 'Download PDF'}
          </Button>
        </div>
      </div>

      {/* Error display */}
      {error && (
        <div className="max-w-[840px] mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm font-medium">{error}</p>
        </div>
      )}

      {/* A4 paper — exactly 794×1122px */}
      <div
        ref={cvRef}
        className="mx-auto bg-white shadow-2xl print:shadow-none print:m-0 overflow-hidden"
        style={{ width: '794px', minHeight: '1122px', maxHeight: '1122px' }}
      >
        {renderTemplate()}
      </div>

      <p className="text-center text-xs text-slate-400 mt-4">
        Template: {cvData.templateId} · A4 Format (794 × 1122 px)
      </p>

      {/* Print styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body > * { display: none; }
          body > div > div[style] { display: block !important; width: 210mm !important; height: 297mm !important; }
          @page { size: A4; margin: 0; }
        }
      ` }} />
    </div>
  );
};

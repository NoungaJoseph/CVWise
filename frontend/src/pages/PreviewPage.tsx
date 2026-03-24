import React, { useRef } from 'react';
import { useEditor } from '@/src/lib/EditorContext';
import { Button } from '@/src/components/ui';
import { Download, ArrowLeft, Printer, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
  const navigate = useNavigate();
  const cvRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = React.useState(false);

  // A4 dimensions in pixels at 96dpi: 794 x 1122
  const handleDownloadPDF = async () => {
    if (!cvRef.current) return;
    setIsDownloading(true);
    try {
      const element = cvRef.current;
      
      // Clone the element to avoid modifying the original
      const clonedElement = element.cloneNode(true) as HTMLElement;
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.top = '-9999px';
      tempContainer.style.left = '-9999px';
      tempContainer.appendChild(clonedElement);
      document.body.appendChild(tempContainer);

      try {
        // Render at ultra-high quality for crisp text and images
        const canvas = await html2canvas(clonedElement, {
          scale: 4, // Increased from 3 for better quality
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          allowTaint: true,
          windowHeight: element.scrollHeight || 1122,
          windowWidth: 794,
        });

        // Use PNG instead of JPEG for lossless quality
        const imgData = canvas.toDataURL('image/png');
        
        // A4 exact: 210mm x 297mm (at 96 dpi: 794px x 1122px)
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
          compress: true,
        });

        const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
        const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm

        // Calculate aspect ratio to maintain proper proportions
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgHeight / imgWidth;

        // Ensure image fills the page properly while maintaining aspect ratio
        const finalHeight = pdfWidth * ratio;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, Math.min(finalHeight, pdfHeight));

        // Generate filename with timestamp to avoid duplicates
        const fileName = `${cvData.personalInfo.firstName || 'CV'}_${cvData.personalInfo.lastName || 'Resume'}.pdf`;
        pdf.save(fileName);

        // Show success feedback (optional - you can add a toast notification)
        console.log('PDF downloaded successfully:', fileName);
      } finally {
        // Clean up the temporary container
        document.body.removeChild(tempContainer);
      }
    } catch (error) {
      console.error('PDF Generation Error:', error);
      alert('Failed to generate PDF. Please try again.');
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
          <Button variant="outline" onClick={() => window.print()} className="flex items-center gap-2">
            <Printer className="w-4 h-4" />
            Print
          </Button>
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

import React, { useRef } from 'react';
import { useEditor } from '@/src/lib/EditorContext';
import { Button } from '@/src/components/ui';
import { Download, ArrowLeft, Printer, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const PreviewPage = () => {
  const { cvData } = useEditor();
  const navigate = useNavigate();
  const cvRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownloadPDF = async () => {
    if (!cvRef.current) return;
    
    setIsDownloading(true);
    try {
      const element = cvRef.current;
      const canvas = await html2canvas(element, {
        scale: 2, // High quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`${cvData.personalInfo.firstName || 'CVWise'}_${cvData.personalInfo.lastName || 'Resume'}.pdf`);
    } catch (error) {
      console.error('PDF Generation Error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 no-print">
      <div className="max-w-[800px] mx-auto mb-8 flex justify-between items-center no-print">
        <Button variant="outline" onClick={() => navigate('/dashboard')} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Editor
        </Button>
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => window.print()} className="flex items-center gap-2">
            <Printer className="w-4 h-4" />
            Print
          </Button>
          <Button 
            disabled={isDownloading}
            onClick={handleDownloadPDF} 
            className="bg-[#F97316] text-white hover:bg-[#EA580C] flex items-center gap-2 min-w-[140px] justify-center"
          >
            {isDownloading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {isDownloading ? 'Generating...' : 'Download PDF'}
          </Button>
        </div>
      </div>

      {/* The actual CV paper */}
      <div 
        ref={cvRef}
        className="mx-auto bg-white shadow-2xl min-h-[1122px] w-full max-w-[794px] p-12 print:shadow-none print:p-0 print:m-0"
        style={{ fontFamily: cvData.style.fontFamily }}
      >
        <header className="border-b-4 pb-8 mb-8" style={{ borderColor: cvData.style.primaryColor }}>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tighter" style={{ color: cvData.style.primaryColor }}>
                {cvData.personalInfo.firstName || 'YOUR'} {cvData.personalInfo.lastName || 'NAME'}
              </h1>
              <p className="text-xl font-bold opacity-70 mt-2">{cvData.personalInfo.title || 'PROFESSIONAL TITLE'}</p>
            </div>
            <div className="text-right text-sm space-y-1 opacity-60">
              <p>{cvData.personalInfo.email}</p>
              <p>{cvData.personalInfo.phone}</p>
              <p>{cvData.personalInfo.location}</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="col-span-2 space-y-10">
            <section>
              <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-4 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
                Professional Summary
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                {cvData.personalInfo.summary || 'An accomplished professional with a track record of driving impact through architectural excellence and strategic leadership.'}
              </p>
            </section>

            <section>
              <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-6 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
                Experience
              </h3>
              <div className="space-y-8">
                {cvData.experience.map(exp => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-base">{exp.title}</h4>
                      <span className="text-xs font-bold opacity-50 uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <p className="text-sm font-bold" style={{ color: cvData.style.primaryColor }}>{exp.company}</p>
                    <p className="text-sm leading-relaxed text-slate-600 whitespace-pre-line">{exp.description}</p>
                  </div>
                ))}
                {cvData.experience.length === 0 && <p className="text-sm italic opacity-40 text-center py-4">No experience added yet.</p>}
              </div>
            </section>

            <section>
                <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-6 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
                    Major Projects
                </h3>
                <div className="space-y-6">
                    {cvData.projects.map(proj => (
                        <div key={proj.id} className="space-y-1">
                            <div className="flex justify-between items-baseline">
                                <h4 className="font-bold text-sm">{proj.title}</h4>
                                <span className="text-[10px] font-bold opacity-50">{proj.date}</span>
                            </div>
                            <p className="text-xs font-bold opacity-70 italic">{proj.role}</p>
                            <p className="text-xs leading-relaxed text-slate-600">{proj.description}</p>
                        </div>
                    ))}
                </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
             <section>
                <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-4 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
                    Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                    {cvData.skills.map(skill => (
                        <span key={skill.id} className="inline-block px-2 py-1 bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-tighter">
                            {skill.name} — {skill.level}
                        </span>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-4 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
                    Education
                </h3>
                <div className="space-y-6">
                    {cvData.education.map(edu => (
                        <div key={edu.id} className="space-y-1">
                            <h4 className="font-bold text-xs">{edu.degree}</h4>
                            <p className="text-[10px] font-bold opacity-70 italic">{edu.institution}</p>
                            <p className="text-[10px] opacity-50">{edu.startDate} — {edu.endDate}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-lg font-black uppercase tracking-widest border-b-2 mb-4 pb-1" style={{ color: cvData.style.primaryColor, borderColor: cvData.style.primaryColor + '40' }}>
                    Social
                </h3>
                <div className="space-y-2 text-[10px] font-bold opacity-60">
                    {cvData.personalInfo.linkedin && <p>LI: {cvData.personalInfo.linkedin}</p>}
                    {cvData.personalInfo.portfolio && <p>WEB: {cvData.personalInfo.portfolio}</p>}
                    {cvData.personalInfo.github && <p>GH: {cvData.personalInfo.github}</p>}
                </div>
            </section>
          </div>
        </div>
        
        {/* Footer decoration */}
        <div className="mt-16 pt-8 border-t-2 text-[8px] font-bold opacity-20 uppercase tracking-[0.5em] text-center">
            Architected with CVWise Editorial Engine
        </div>
      </div>
    </div>
  );
};

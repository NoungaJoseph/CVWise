import express from 'express';
import { ObjectId } from 'mongodb';
import { jsPDF } from 'jspdf';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Generate PDF from CV data
async function generatePDFFromData(cvData) {
  try {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 15;
    const lineHeight = 6;
    const margin = 15;
    const contentWidth = pageWidth - 2 * margin;

    const { personalInfo, experience, education, skills, projects, style } = cvData;

    // Helper function to add text
    function addText(text, size, isBold, color = [0, 0, 0], maxWidth = contentWidth) {
      if (yPosition > pageHeight - 10) {
        pdf.addPage();
        yPosition = 15;
      }

      pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
      pdf.setFontSize(size);
      pdf.setTextColor(...color);

      const lines = pdf.splitTextToSize(text, maxWidth);
      pdf.text(lines, margin, yPosition);
      yPosition += lines.length * (lineHeight / 2) + 2;
    }

    // Parse primary color from hex
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
    };

    const primaryColorRgb = hexToRgb(style.primaryColor);

    // Header
    addText(
      `${personalInfo.firstName || 'Your'} ${personalInfo.lastName || 'Name'}`,
      18,
      true,
      primaryColorRgb
    );
    addText(personalInfo.title || 'Professional Title', 11, false);

    // Contact info
    const contactInfo = [
      personalInfo.email,
      personalInfo.phone,
      personalInfo.location
    ].filter(Boolean).join(' • ');
    addText(contactInfo, 9, false);

    // Add spacing
    yPosition += 5;

    // Professional Summary
    if (personalInfo.summary) {
      addText('PROFESSIONAL SUMMARY', 12, true, primaryColorRgb);
      addText(personalInfo.summary, 10, false, [68, 68, 68], contentWidth);
      yPosition += 5;
    }

    // Experience
    if (experience && experience.length > 0) {
      addText('EXPERIENCE', 12, true, primaryColorRgb);
      for (const exp of experience) {
        addText(`${exp.title}`, 11, true);
        addText(`${exp.company} | ${exp.period}`, 10, false, [100, 100, 100]);
        addText(exp.description || '', 9, false, [68, 68, 68], contentWidth);
        yPosition += 3;
      }
      yPosition += 5;
    }

    // Education
    if (education && education.length > 0) {
      addText('EDUCATION', 12, true, primaryColorRgb);
      for (const edu of education) {
        addText(`${edu.degree}`, 11, true);
        addText(`${edu.institution} | ${edu.endDate}`, 10, false, [100, 100, 100]);
        if (edu.description) {
          addText(edu.description, 9, false, [68, 68, 68], contentWidth);
        }
        yPosition += 3;
      }
      yPosition += 5;
    }

    // Skills
    if (skills && skills.length > 0) {
      addText('SKILLS', 12, true, primaryColorRgb);
      const skillsByCategory = {};
      for (const skill of skills) {
        const category = skill.category || 'General';
        if (!skillsByCategory[category]) {
          skillsByCategory[category] = [];
        }
        skillsByCategory[category].push(skill.name);
      }

      for (const [category, skillList] of Object.entries(skillsByCategory)) {
        addText(`${category}: ${skillList.join(', ')}`, 10, false, [68, 68, 68], contentWidth);
      }
      yPosition += 5;
    }

    // Projects
    if (projects && projects.length > 0) {
      addText('MAJOR PROJECTS', 12, true, primaryColorRgb);
      for (const proj of projects) {
        addText(`${proj.title}`, 11, true);
        addText(`${proj.role} | ${proj.date}`, 10, false, [100, 100, 100]);
        addText(proj.description || '', 9, false, [68, 68, 68], contentWidth);
        yPosition += 3;
      }
    }

    return pdf;
  } catch (error) {
    console.error('PDF generation error:', error);
    throw error;
  }
}

// Download CV as PDF
router.post('/generate', verifyToken, async (req, res) => {
  try {
    const { cvData } = req.body;

    if (!cvData) {
      return res.status(400).json({ error: 'CV data required' });
    }

    const pdf = await generatePDFFromData(cvData);
    const fileName = `${cvData.personalInfo.firstName || 'CV'}_${cvData.personalInfo.lastName || 'Resume'}.pdf`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    
    const pdfBytes = Buffer.from(pdf.output('arraybuffer'));
    res.send(pdfBytes);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

// Download saved CV
router.get('/:cvId', verifyToken, async (req, res) => {
  try {
    const { cvId } = req.params;
    const db = req.db;

    if (!ObjectId.isValid(cvId)) {
      return res.status(400).json({ error: 'Invalid CV ID' });
    }

    const cv = await db.collection('cvs').findOne({
      _id: new ObjectId(cvId),
      userId: new ObjectId(req.userId)
    });

    if (!cv) {
      return res.status(404).json({ error: 'CV not found' });
    }

    const pdf = await generatePDFFromData(cv);
    const fileName = `${cv.personalInfo.firstName || 'CV'}_${cv.personalInfo.lastName || 'Resume'}.pdf`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    
    const pdfBytes = Buffer.from(pdf.output('arraybuffer'));
    res.send(pdfBytes);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Failed to download CV' });
  }
});

export default router;

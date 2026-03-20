export interface SkillTemplate {
  name: string;
  category: string;
}

export const SKILLS_LIBRARY: SkillTemplate[] = [
  // Technology & Software
  { name: 'JavaScript', category: 'Technology' },
  { name: 'TypeScript', category: 'Technology' },
  { name: 'React', category: 'Technology' },
  { name: 'Next.js', category: 'Technology' },
  { name: 'Node.js', category: 'Technology' },
  { name: 'Python', category: 'Technology' },
  { name: 'SQL', category: 'Technology' },
  { name: 'AWS', category: 'Technology' },
  { name: 'Docker', category: 'Technology' },
  { name: 'Kubernetes', category: 'Technology' },
  { name: 'Git', category: 'Technology' },
  { name: 'Redux', category: 'Technology' },
  { name: 'GraphQL', category: 'Technology' },
  { name: 'MongoDB', category: 'Technology' },
  { name: 'PostgreSQL', category: 'Technology' },
  
  // Design & Creative
  { name: 'UI/UX Design', category: 'Design' },
  { name: 'Figma', category: 'Design' },
  { name: 'Adobe Photoshop', category: 'Design' },
  { name: 'Adobe Illustrator', category: 'Design' },
  { name: 'Brand Identity', category: 'Design' },
  { name: 'Typography', category: 'Design' },
  { name: 'Wireframing', category: 'Design' },
  { name: 'Prototyping', category: 'Design' },
  
  // Leadership & Soft Skills
  { name: 'Project Management', category: 'Leadership' },
  { name: 'Strategic Planning', category: 'Leadership' },
  { name: 'Team Leadership', category: 'Leadership' },
  { name: 'Public Speaking', category: 'Soft Skills' },
  { name: 'Conflict Resolution', category: 'Soft Skills' },
  { name: 'Communication', category: 'Soft Skills' },
  { name: 'Problem Solving', category: 'Soft Skills' },
  { name: 'Time Management', category: 'Soft Skills' },
  { name: 'Stakeholder Management', category: 'Leadership' },
  { name: 'Agile Methodologies', category: 'Leadership' },
  
  // Marketing & Sales
  { name: 'SEO', category: 'Marketing' },
  { name: 'Content Strategy', category: 'Marketing' },
  { name: 'Social Media Marketing', category: 'Marketing' },
  { name: 'Google Analytics', category: 'Marketing' },
  { name: 'Sales Strategy', category: 'Sales' },
  { name: 'Customer Relationship Management', category: 'Sales' },
  { name: 'B2B Sales', category: 'Sales' },
  
  // Finance & Business
  { name: 'Financial Analysis', category: 'Business' },
  { name: 'Business Development', category: 'Business' },
  { name: 'Market Research', category: 'Business' },
  { name: 'Data Analysis', category: 'Business' },
  { name: 'Budgeting', category: 'Business' },
  { name: 'Risk Management', category: 'Business' },
  
  // Healthcare & Science
  { name: 'Patient Care', category: 'Healthcare' },
  { name: 'Clinical Research', category: 'Healthcare' },
  { name: 'Medical Terminology', category: 'Healthcare' },
  { name: 'Laboratory Skills', category: 'Science' },
  { name: 'Data Science', category: 'Science' },
  { name: 'Machine Learning', category: 'Technology' },
];

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  location: string;
  summary: string;
  profileImage: string;
  linkedin?: string;
  portfolio?: string;
  twitter?: string;
  github?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  isActive?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Expert' | 'Proficient' | 'Familiar';
  category?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Intermediate' | 'Basic';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  url?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Reference {
  id: string;
  name: string;
  position: string;
  company: string;
  email: string;
  phone?: string;
}

export interface StyleSettings {
  primaryColor: string;
  fontFamily: string;
  fontSize: string;
  spacing: string;
}

export interface CVData {
  title: string;
  templateId: string;
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  languages: Language[];
  certifications: Certification[];
  awards: Award[];
  references: Reference[];
  style: StyleSettings;
}

const DEFAULT_DATA: CVData = {
  title: 'My Professional CV',
  templateId: 'modern-minimal',
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    location: '',
    summary: '',
    profileImage: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  languages: [],
  certifications: [],
  awards: [],
  references: [],
  style: {
    primaryColor: '#F97316',
    fontFamily: 'Inter',
    fontSize: 'md',
    spacing: 'normal',
  },
};

interface EditorContextType {
  cvData: CVData;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  updateExperience: (experience: Experience[]) => void;
  addExperience: (exp: Experience) => void;
  updateEducation: (education: Education[]) => void;
  addEducation: (edu: Education) => void;
  updateSkills: (skills: Skill[]) => void;
  addSkill: (skill: Skill) => void;
  updateProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  updateLanguages: (languages: Language[]) => void;
  addLanguage: (language: Language) => void;
  updateCertifications: (certifications: Certification[]) => void;
  addCertification: (certification: Certification) => void;
  updateAwards: (awards: Award[]) => void;
  addAward: (award: Award) => void;
  updateReferences: (references: Reference[]) => void;
  addReference: (reference: Reference) => void;
  updateStyle: (style: Partial<StyleSettings>) => void;
  setTemplate: (templateId: string) => void;
  calculateProgress: () => number;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cvData, setCvData] = useState<CVData>(() => {
    const saved = localStorage.getItem('cv_data');
    return saved ? JSON.parse(saved) : DEFAULT_DATA;
  });

  useEffect(() => {
    localStorage.setItem('cv_data', JSON.stringify(cvData));
  }, [cvData]);

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info }
    }));
  };

  const updateExperience = (experience: Experience[]) => {
    setCvData(prev => ({ ...prev, experience }));
  };

  const addExperience = (exp: Experience) => {
    setCvData(prev => ({ ...prev, experience: [...prev.experience, exp] }));
  };

  const updateEducation = (education: Education[]) => {
    setCvData(prev => ({ ...prev, education }));
  };

  const addEducation = (edu: Education) => {
    setCvData(prev => ({ ...prev, education: [...prev.education, edu] }));
  };

  const updateSkills = (skills: Skill[]) => {
    setCvData(prev => ({ ...prev, skills }));
  };

  const addSkill = (skill: Skill) => {
    setCvData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
  };

  const updateProjects = (projects: Project[]) => {
    setCvData(prev => ({ ...prev, projects }));
  };

  const addProject = (project: Project) => {
    setCvData(prev => ({ ...prev, projects: [...prev.projects, project] }));
  };

  const updateLanguages = (languages: Language[]) => {
    setCvData(prev => ({ ...prev, languages }));
  };

  const addLanguage = (language: Language) => {
    setCvData(prev => ({ ...prev, languages: [...prev.languages, language] }));
  };

  const updateCertifications = (certifications: Certification[]) => {
    setCvData(prev => ({ ...prev, certifications }));
  };

  const addCertification = (certification: Certification) => {
    setCvData(prev => ({ ...prev, certifications: [...prev.certifications, certification] }));
  };

  const updateAwards = (awards: Award[]) => {
    setCvData(prev => ({ ...prev, awards }));
  };

  const addAward = (award: Award) => {
    setCvData(prev => ({ ...prev, awards: [...prev.awards, award] }));
  };

  const updateReferences = (references: Reference[]) => {
    setCvData(prev => ({ ...prev, references }));
  };

  const addReference = (reference: Reference) => {
    setCvData(prev => ({ ...prev, references: [...prev.references, reference] }));
  };

  const updateStyle = (style: Partial<StyleSettings>) => {
    setCvData(prev => ({ ...prev, style: { ...prev.style, ...style } }));
  };

  const setTemplate = (templateId: string) => {
    setCvData(prev => ({ ...prev, templateId }));
  };

  const calculateProgress = () => {
    let steps = 0;
    if (cvData.personalInfo.firstName && cvData.personalInfo.email) steps++;
    if (cvData.experience.length > 0) steps++;
    if (cvData.education.length > 0) steps++;
    if (cvData.skills.length > 0) steps++;
    if (cvData.projects.length > 0) steps++;
    return (steps / 5) * 100;
  };

  return (
    <EditorContext.Provider value={{
      cvData,
      updatePersonalInfo,
      updateExperience,
      addExperience,
      updateEducation,
      addEducation,
      updateSkills,
      addSkill,
      updateProjects,
      addProject,
      updateLanguages,
      addLanguage,
      updateCertifications,
      addCertification,
      updateAwards,
      addAward,
      updateReferences,
      addReference,
      updateStyle,
      setTemplate,
      calculateProgress
    }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};

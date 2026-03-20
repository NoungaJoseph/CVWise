export interface User {
  id: string;
  email: string;
  name: string;
  photoUrl?: string;
}

export interface CV {
  id: string;
  title: string;
  lastEdited: string;
  completionPercentage: number;
  templateId: string;
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  location: string;
  summary: string;
  socialLinks: {
    linkedin?: string;
    website?: string;
  };
}

export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Familiar' | 'Proficient' | 'Expert';
  category: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  date: string;
  link?: string;
  description: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
}

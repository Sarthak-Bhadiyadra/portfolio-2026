import data from '@/data/data.json';

export interface PersonalInfo {
  name: string;
  careerStartDate: string;
  title: string;
  description: string;
  email: string;
  location: string;
  socialLinks: {
    linkedin: string;
    github: string;
  };
}

export interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  crm: string[];
  cloud: string[];
  tools: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = data;

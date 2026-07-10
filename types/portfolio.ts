export interface DashboardCard {
  title: string;
  description: string;
  icon: string;
  route: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    designation: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    resume: string;
  };

  summary: {
    experience: string;
    projects: string;
    companies: string;
    skills: string;
    certifications: string;
  };

  dashboard: DashboardCard[];
}
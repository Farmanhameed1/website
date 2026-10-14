export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'seo' | 'ads' | 'analytics' | 'web';
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  remote?: boolean;
  isCurrent?: boolean;
  responsibilities: string[];
  keyHighlight?: string;
}

export interface AchievementItem {
  metric: string;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
}

export interface ImpactProject {
  id: string;
  title: string;
  category: 'Paid Media' | 'SEO & Search' | 'Analytics & Data' | 'Web & IT';
  company: string;
  outcome: string;
  description: string;
  tags: string[];
}

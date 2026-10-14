import { ServiceItem, ProcessStep, ExperienceItem, AchievementItem, ImpactProject } from '../types';

export const PERSONAL_INFO = {
  name: 'Muhammad Farman',
  shortName: 'Farman',
  title: 'Digital Marketing & IT Manager',
  location: 'Islamabad, Pakistan',
  phone: '+923456240550',
  displayPhone: '+92 345 6240550',
  whatsappUrl: 'https://wa.me/923456240550',
  whatsappPrefilledUrl: 'https://wa.me/923456240550?text=Hello%20Farman%2C%20I%20would%20like%20to%20discuss%20a%20project.',
  email: 'farmanhameed10@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/farman-hameed',
  portfolioUrl: 'https://farmanhameed1.github.io/portfolio',
  bio: 'I help businesses grow through performance marketing, SEO, analytics, website management, and digital technology. From paid media campaigns to conversion tracking and IT operations, I turn business goals into measurable results.',
  aboutSummary1: 'I am a Digital Marketing & IT Manager with experience across paid media, SEO, website development, analytics, email marketing, and IT operations. I develop and manage websites, implement conversion tracking, oversee digital marketing activities, and coordinate technology projects across multiple businesses.',
  aboutSummary2: 'My work combines performance-focused marketing with practical technical implementation, helping organizations improve online visibility, campaign effectiveness, and digital operations.',
};

export const CORE_CAPABILITIES = [
  'Performance Marketing',
  'SEO & Search Strategy',
  'Marketing Analytics',
  'Website & IT Management',
  'Email Marketing & CRM',
  'Project Management',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo-search',
    title: 'SEO & Search Strategy',
    description: 'Technical SEO, on-page optimization, off-page SEO, search strategy, and organic traffic growth.',
    iconName: 'seo',
    deliverables: ['Technical SEO Audits', 'Keyword Strategy', 'Core Web Vitals', 'Organic Growth'],
  },
  {
    id: 'paid-media',
    title: 'Paid Media & Advertising',
    description: 'Google Ads, Meta Ads, YouTube Ads, LinkedIn Ads, campaign optimization, retargeting, and ROAS improvement.',
    iconName: 'ads',
    deliverables: ['Google & Meta Ads', 'ROAS Optimization', 'Audience Segmentation', 'Creative Testing'],
  },
  {
    id: 'analytics-automation',
    title: 'Analytics & Automation',
    description: 'Google Tag Manager, GA4, conversion tracking, marketing dashboards, email automation, and CRM campaigns.',
    iconName: 'analytics',
    deliverables: ['GA4 & Google Tag Manager', 'Conversion Tracking', 'Looker Studio Dashboards', 'Email / CRM Automation'],
  },
  {
    id: 'web-it',
    title: 'Web & IT Management',
    description: 'WordPress websites, website redesign, corporate email administration, social media management, branding, and IT project coordination.',
    iconName: 'web',
    deliverables: ['WordPress Development', 'Website Redesign', 'Email Administration', 'Group IT Projects'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand business objectives, audiences, challenges, and existing digital performance.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Build a focused strategy covering marketing channels, tracking, content, and technical requirements.',
  },
  {
    step: '03',
    title: 'Execute',
    description: 'Implement campaigns, optimize websites, configure analytics, and coordinate digital projects.',
  },
  {
    step: '04',
    title: 'Optimize',
    description: 'Measure results, analyze performance, identify improvements, and scale successful initiatives.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'A&M Enterprise',
    role: 'Digital Marketing & IT Manager',
    period: 'July 2026 – Present',
    location: 'Islamabad, Pakistan',
    isCurrent: true,
    keyHighlight: 'Managing digital ecosystem for 10 subsidiaries',
    responsibilities: [
      'Develop and manage websites for 10 subsidiaries.',
      'Implement and maintain Google Tag Manager conversion tracking.',
      'Manage social media accounts and Google Business Profile listings.',
      'Administer employee business email accounts.',
      'Create brand graphics and corporate letterheads.',
      'Coordinate digital and IT projects across the group.',
    ],
  },
  {
    company: 'SWAFOO',
    role: 'Senior Digital Marketing Manager',
    period: 'September 2022 – Present',
    location: 'New York, USA',
    remote: true,
    isCurrent: true,
    keyHighlight: 'Leading cross-platform performance paid media',
    responsibilities: [
      'Lead paid media campaigns across Meta and Google Ads.',
      'Improve conversion rates through creative testing and audience segmentation.',
      'Manage email marketing, lifecycle campaigns, and retention-focused messaging.',
      'Optimize campaign assets and reporting against revenue goals.',
    ],
  },
  {
    company: 'HYNER Technologies',
    role: 'IT & Digital Marketing Manager',
    period: 'June 2021 – August 2022',
    location: 'Islamabad / China',
    keyHighlight: '$500K+ added revenue and 40% organic surge',
    responsibilities: [
      'Led a website redesign that increased organic search traffic by 40%.',
      'Generated $500K in additional revenue through PPC campaigns and automated email/CRM funnels.',
      'Managed annual paid media budgets exceeding $100K.',
      'Improved ROI through campaign pacing and budget allocation.',
    ],
  },
  {
    company: 'Concise Medico Ltd.',
    role: 'Senior Project Manager',
    period: 'January 2018 – May 2021',
    keyHighlight: 'Managed $1M+ portfolio with 10-person team',
    responsibilities: [
      'Managed marketing and digital projects worth $1M+.',
      'Applied Agile methods to improve project delivery.',
      'Coordinated a cross-functional team of 10.',
    ],
  },
  {
    company: 'Cloudwalker Life Science',
    role: 'Marketing & Communication Specialist',
    period: 'February 2014 – December 2017',
    keyHighlight: 'International B2B communication frameworks',
    responsibilities: [
      'Developed communication and content frameworks supporting international B2B partnerships.',
      'Improved digital messaging and business visibility.',
    ],
  },
  {
    company: 'Hamariweb.com',
    role: 'SEO & Search Strategy Specialist',
    period: 'January 2011 – January 2014',
    keyHighlight: 'High-volume organic visibility & traffic growth',
    responsibilities: [
      'Conducted technical SEO, on-page, and off-page optimization.',
      'Improved organic visibility and monthly website traffic.',
    ],
  },
  {
    company: 'Rakoon Tech',
    role: 'Conversion-Tracking Consultant',
    period: '2021 (Engagement)',
    keyHighlight: 'Custom tracking & event infrastructure',
    responsibilities: [
      'Designed end-to-end conversion tracking and custom event measurement architecture.',
      'Standardized tag firing rules and multi-channel attribution analytics.',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    metric: '30%',
    label: 'Increase in Conversion Rates',
    detail: 'Achieved through disciplined creative testing and audience segmentation in paid media.',
  },
  {
    metric: '35%',
    label: 'Growth in Organic & Owned Channels',
    detail: 'Delivered via integrated search strategies and multi-channel customer retention initiatives.',
  },
  {
    metric: '40%',
    label: 'Organic Search Traffic Growth',
    detail: 'Delivered following full-scale strategic website redesign and technical SEO restructuring.',
  },
  {
    metric: '$500K',
    label: 'Additional Revenue Generated',
    detail: 'Produced through targeted PPC acquisition campaigns and automated email/CRM funnels.',
  },
  {
    metric: '$1M+',
    label: 'Managed Digital & Marketing Portfolio',
    detail: 'Oversaw high-stakes technical projects, digital assets, and cross-functional teams.',
  },
  {
    metric: '25%',
    label: 'Improvement in Paid Media ROI',
    detail: 'Attained through systematic budget allocation, pacing optimization, and bid adjustments.',
  },
];

export const IMPACT_PROJECTS: ImpactProject[] = [
  {
    id: 'proj-1',
    title: 'Multi-Subsidiary Digital Infrastructure',
    company: 'A&M Enterprise',
    category: 'Web & IT',
    outcome: '10 Subsidiary Websites & Centralized GTM',
    description: 'Built and currently manage cohesive website architectures for 10 corporate subsidiaries, integrating standardized Google Tag Manager conversion events and centralized business communications.',
    tags: ['WordPress', 'Google Tag Manager', 'Domain & Email Administration', 'Brand Identity'],
  },
  {
    id: 'proj-2',
    title: 'Full-Funnel Paid Media & Retention Engine',
    company: 'SWAFOO',
    category: 'Paid Media',
    outcome: '+30% Conversion Lift & Revenue Alignment',
    description: 'Directing paid acquisition campaigns across Meta and Google Ads, paired with automated lifecycle retention email messaging and systematic ROAS pacing.',
    tags: ['Google Ads', 'Meta Ads', 'Lifecycle Email', 'Conversion Rate Optimization'],
  },
  {
    id: 'proj-3',
    title: 'Strategic Redesign & Revenue Funnels',
    company: 'HYNER Technologies',
    category: 'SEO & Search',
    outcome: '+$500K Revenue & +40% Organic Traffic',
    description: 'Executed technical website modernization and implemented automated CRM lead-nurturing funnels with high-intent PPC campaigns across international markets.',
    tags: ['Website Redesign', 'Technical SEO', 'PPC Strategy', 'CRM Funnels'],
  },
  {
    id: 'proj-4',
    title: 'Enterprise Agile Project Delivery',
    company: 'Concise Medico Ltd.',
    category: 'Web & IT',
    outcome: '$1M+ High-Stakes Project Portfolio',
    description: 'Led cross-functional teams of 10 digital specialists and developers using Agile methodologies, delivering mission-critical healthcare marketing and digital operations.',
    tags: ['Agile Leadership', 'Stakeholder Management', 'Digital Operations', 'Team of 10'],
  },
  {
    id: 'proj-5',
    title: 'Large-Scale Search Visibility Engineering',
    company: 'Hamariweb.com',
    category: 'SEO & Search',
    outcome: 'Substantial Organic Traffic & Rank Expansion',
    description: 'Spearheaded technical audits, on-page taxonomy, and strategic backlink structures for one of the leading regional web portals.',
    tags: ['Technical SEO', 'Content Strategy', 'Site Architecture', 'Organic Traffic'],
  },
  {
    id: 'proj-6',
    title: 'Conversion Tracking Architecture',
    company: 'Rakoon Tech',
    category: 'Analytics & Data',
    outcome: '100% Granular Funnel Event Visibility',
    description: 'Configured end-to-end custom event measurement in Google Tag Manager, eliminating tracking discrepancies and empowering accurate ROAS measurement.',
    tags: ['Google Tag Manager', 'GA4 Migration', 'E-commerce Tracking', 'Data Accuracy'],
  },
];

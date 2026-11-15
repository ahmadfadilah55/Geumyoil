export type ServiceCategory = 'all' | 'language' | 'study' | 'career';

export interface ServiceProgram {
  id: string;
  title: string;
  subtitle: string;
  category: 'language' | 'study' | 'career';
  badge: string;
  description: string;
  features: string[];
  targetAudience: string;
  duration: string;
  scheduleOption: string;
  popular?: boolean;
  iconName: string;
  pricingList?: { name: string; price: number }[];
  image?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  installmentMonths: number;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  badge: string;
  suitableFor: string;
}

export interface AlumniStory {
  id: string;
  name: string;
  age?: number;
  city?: string;
  category?: 'study' | 'career' | 'language';
  role?: string;
  university: string;
  location: string;
  destination: string;
  image?: string;
  topikLevel?: string;
  year: string;
  quote: string;
  fullStory?: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'study' | 'career' | 'payment';
  question: string;
  answer: string;
}

export interface QuizAnswer {
  goal: string;
  currentLevel: string;
  mode: string;
  timeline: string;
}

export interface HangeulWord {
  id: string;
  hangul: string;
  romanization: string;
  meaning: string;
  category: string;
  audioText: string;
  tips: string;
}

export interface JobPosting {
  id: string;
  title: string;
  titleEn: string;
  department: string;
  departmentEn: string;
  category: 'teaching' | 'consulting' | 'operations' | 'creative';
  type: string;
  location: string;
  locationEn: string;
  compensation: string;
  compensationEn: string;
  description: string;
  descriptionEn: string;
  responsibilities: string[];
  responsibilitiesEn: string[];
  requirements: string[];
  requirementsEn: string[];
  benefits: string[];
  benefitsEn: string[];
  deadline: string;
  deadlineEn: string;
  postedDate: string;
  urgent?: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  titleEn: string;
  category: 'study' | 'scholarship' | 'career' | 'language' | 'living';
  categoryLabel: string;
  categoryLabelEn: string;
  excerpt: string;
  excerptEn: string;
  content: string[];
  contentEn: string[];
  highlights?: string[];
  highlightsEn?: string[];
  author: string;
  role: string;
  date: string;
  dateEn: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

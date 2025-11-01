export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface StrapiMedia {
  data: {
    id: number;
    attributes: StrapiImage;
  } | null;
}

export interface HeroSection {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaSecondaryText?: string;
    backgroundImage?: StrapiMedia;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Service {
  id: number;
  attributes: {
    title: string;
    description: string;
    icon: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface WhyChooseItem {
  id: number;
  attributes: {
    title: string;
    description: string;
    icon: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ProcessStep {
  id: number;
  attributes: {
    stepNumber: number;
    title: string;
    description: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface FAQItem {
  id: number;
  attributes: {
    question: string;
    answer: string;
    category?: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface BlogPost {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    category: string;
    readTime: string;
    featuredImage?: StrapiMedia;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Page {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface GovernmentAuthority {
  id: number;
  attributes: {
    name: string;
    description: string;
    logo?: StrapiMedia;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ContactInfo {
  id: number;
  attributes: {
    address: string;
    phone: string;
    email: string;
    businessHours: string;
    mapUrl?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

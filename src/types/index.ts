// Product types
export interface ProductVariant {
  name: string;
  image: string;
  gallery: string[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: "Sale" | "New";
  description: string;
  slug: string;
  tags: string[];
  gallery: string[];
  videos: string[];
  purchaseLink?: string;
  variantType?: string;
  variants?: ProductVariant[];
  featured?: boolean;
}

// Blog types
export interface Blog {
  id: number;
  slug: string;
  category: string;
  author: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  isFeatured?: boolean;
}

// Homepage types
export interface Testimonial {
  id: number;
  content: string;
  author: string;
}

export interface ServiceStat {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface BannerSlide {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  mobileImage: string;
  buttonLink: string;
}

export interface TimelineData {
  id: number;
  subtitle: string;
  title: string;
  description1: string;
  description2: string;
  buttonText: string;
  buttonLink: string;
  sideImage?: string;
  isReversed: boolean;
}

export interface Quality {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ImageGridPost {
  id: number;
  image: string;
  title: string;
  category: string;
  link: string;
}

export interface AboutData {
  subtitle: string;
  title: string;
  description: string;
  featuredImage: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  tiktok: string;
}

export interface HeaderData {
  image: string;
}

// Legal types
export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

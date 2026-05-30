import { 
  Product, 
  Blog, 
  Testimonial, 
  ServiceStat, 
  BannerSlide, 
  TimelineData, 
  Quality, 
  ImageGridPost, 
  AboutData, 
  SocialLinks, 
  HeaderData,
  LegalContent,
  FAQItem
} from "@/src/types";

import { products } from "@/public/datas/products";
import { blogs } from "@/public/datas/blogs";
import { 
  testimonials, 
  serviceStats, 
  bannerSlides, 
  timelineData, 
  shopHeader, 
  blogHeader, 
  qualities, 
  imageGridPosts, 
  aboutData, 
  socialLinks 
} from "@/public/datas/homepage";
import { privacyPolicy, termsAndConditions, faqs } from "@/public/datas/legal";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Helper to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// PRODUCTS
export async function getProducts(): Promise<Product[]> {
  await delay(100); // Simulate API call
  
  /* 
  // Backend Integration Example:
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
  */
  
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  await delay(100);
  
  /* 
  const response = await fetch(`${API_URL}/products/${slug}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
  */
  
  return products.find(p => p.slug === slug);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await delay(100);
  return products.filter(p => p.featured);
}

// BLOGS
export async function getBlogs(): Promise<Blog[]> {
  await delay(100);
  
  /* 
  const response = await fetch(`${API_URL}/blogs`);
  if (!response.ok) throw new Error('Failed to fetch blogs');
  return response.json();
  */
  
  return blogs;
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  await delay(100);
  
  /* 
  const response = await fetch(`${API_URL}/blogs/${slug}`);
  if (!response.ok) throw new Error('Failed to fetch blog');
  return response.json();
  */
  
  return blogs.find(b => b.slug === slug);
}

export async function getFeaturedBlogs(): Promise<Blog[]> {
  await delay(100);
  return blogs.filter(b => b.isFeatured);
}

// HOMEPAGE & CMS
export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(100);
  return testimonials;
}

export async function getServiceStats(): Promise<ServiceStat[]> {
  await delay(100);
  return serviceStats;
}

export async function getBannerSlides(): Promise<BannerSlide[]> {
  await delay(100);
  return bannerSlides;
}

export async function getTimelineData(): Promise<TimelineData[]> {
  await delay(100);
  return timelineData;
}

export async function getQualities(): Promise<Quality[]> {
  await delay(100);
  return qualities;
}

export async function getImageGridPosts(): Promise<ImageGridPost[]> {
  await delay(100);
  return imageGridPosts;
}

export async function getAboutData(): Promise<AboutData> {
  await delay(100);
  return aboutData;
}

export async function getSocialLinks(): Promise<SocialLinks> {
  await delay(100);
  return socialLinks;
}

export async function getShopHeader(): Promise<HeaderData> {
  await delay(100);
  return shopHeader;
}

export async function getBlogHeader(): Promise<HeaderData> {
  await delay(100);
  return blogHeader;
}

// LEGAL
export async function getPrivacyPolicy(): Promise<LegalContent> {
  await delay(100);
  return privacyPolicy;
}

export async function getTermsAndConditions(): Promise<LegalContent> {
  await delay(100);
  return termsAndConditions;
}

export async function getFAQs(): Promise<FAQItem[]> {
  await delay(100);
  return faqs;
}

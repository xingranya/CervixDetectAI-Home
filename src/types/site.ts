export interface SiteNavigationItem {
  label: string;
  path: string;
  external?: boolean;
}

export interface ConsultationLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  wechatQr?: string;
  address?: string;
  consultationLinks?: ConsultationLink[];
}

export interface SiteConfig {
  brandName: string;
  logoUrl: string;
  heroTitle: string;
  heroSubtitle: string;
  tagline: string;
  siteUrl: string;
  loginUrl: string;
  filingNumber: string;
  navigation: SiteNavigationItem[];
  homeFeaturedNewsCount: number;
  contact: ContactInfo;
}

export interface NewsFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  cover: string;
  category: string;
  featured?: boolean;
}

export interface NewsArticle extends NewsFrontmatter {
  content: string;
  html: string;
  readingMinutes: number;
}

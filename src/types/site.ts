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
  email: string;
  wechatQr?: string;
  address?: string;
  consultationLinks?: ConsultationLink[];
}

export interface SiteActionLink {
  label: string;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
}

export interface HomeHeroSlide {
  title: string;
  description: string;
  positioning: string;
  tags: string[];
}

export interface HomeOverviewField {
  label: string;
  value: string;
}

export interface HomeOverviewCard {
  label: string;
  title: string;
  items: HomeOverviewField[];
  footer: string[];
}

export interface HomeTimelineItem {
  day: string;
  month: string;
  title: string;
}

export interface HomeTopicColumn {
  title: string;
  kicker: string;
  description: string;
  to: string;
}

export interface HomeQuickLink {
  label: string;
  shortLabel: string;
  description: string;
  to: string;
}

export interface HomeServicePanel {
  title: string;
  description: string;
  primaryAction: SiteActionLink;
  secondaryAction: SiteActionLink;
}

export interface MetricItem {
  value: number;
  suffix: string;
  label: string;
}

export interface HomeMetrics {
  accuracy: MetricItem;
  hospitals: MetricItem;
  cases: MetricItem;
  detection: MetricItem;
}

export interface HomeConfig {
  heroSlides: HomeHeroSlide[];
  overviewCard: HomeOverviewCard;
  researchUpdates: HomeTimelineItem[];
  notices: HomeTimelineItem[];
  topicColumns: HomeTopicColumn[];
  quickLinks: HomeQuickLink[];
  servicePanel: HomeServicePanel;
  metrics: HomeMetrics;
}

export interface SiteConfig {
  brandName: string;
  projectName: string;
  cooperationDirections: string[];
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
  home: HomeConfig;
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

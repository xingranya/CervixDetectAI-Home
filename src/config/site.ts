import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  brandName: 'CervixDetectAI',
  logoUrl: 'https://img1.tucang.cc/api/image/show/45b4f4864a1e97681b52b7a1e1f5cc31',
  tagline: '宫颈影像智能辅助筛查平台',
  heroTitle: '面向医疗机构的宫颈影像智能辅助筛查平台',
  heroSubtitle:
    '围绕影像分析、病例管理、结构化报告与随访协同，提供更高效、更规范的数字化筛查支持。',
  siteUrl: 'https://hpvsc.icu',
  loginUrl: 'https://hpvsc.icu/#/login',
  filingNumber: '鄂ICP备2026006203号-2',
  homeFeaturedNewsCount: 4,
  navigation: [
    { label: '首页', path: '/' },
    { label: '产品能力', path: '/product' },
    { label: '应用场景', path: '/solutions' },
    { label: '项目介绍', path: '/about' },
    { label: '新闻中心', path: '/news' },
    { label: '联系我们', path: '/contact' },
  ],
  contact: {
    phone: '暂未公开电话，请优先邮件咨询',
    email: 'support@hpvsc.icu',
    address: '湖北省荆州市',
    consultationLinks: [
      { label: '邮件咨询', href: 'mailto:support@hpvsc.icu' },
      { label: '进入系统', href: 'https://hpvsc.icu/#/login' },
      { label: 'GitHub 项目', href: 'https://github.com/xingranya/CervixDetectAI' },
    ],
  },
};

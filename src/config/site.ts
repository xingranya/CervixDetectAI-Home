import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  brandName: '云端智诊团队',
  logoUrl: 'https://img1.tucang.cc/api/image/show/45b4f4864a1e97681b52b7a1e1f5cc31',
  tagline: '宫颈智能影像与云端筛查协同创新团队',
  heroTitle: '云端智诊团队',
  heroSubtitle:
    '聚焦宫颈智能影像分析、云端筛查协同与临床应用转化，致力于为宫颈疾病筛查与诊疗提供可靠的技术支持与服务能力。',
  siteUrl: 'https://hpvsc.icu',
  loginUrl: 'https://hpvsc.icu/#/login',
  filingNumber: '鄂ICP备2026006203号-2',
  homeFeaturedNewsCount: 4,
  navigation: [
    { label: '首页', path: '/' },
    { label: '团队概况', path: '/about' },
    { label: '研究方向', path: '/product' },
    { label: '成果转化', path: '/solutions' },
    { label: '新闻中心', path: '/news' },
    { label: '联系我们', path: '/contact' },
  ],
  contact: {
    phone: '商务合作电话信息整理中',
    email: 'support@hpvsc.icu',
    address: '湖北省荆州市 · 云端智诊团队',
    consultationLinks: [
      { label: '邮件咨询', href: 'mailto:support@hpvsc.icu' },
      { label: '新闻中心', href: '/news' },
      { label: '平台入口', href: 'https://hpvsc.icu/#/login' },
    ],
  },
};

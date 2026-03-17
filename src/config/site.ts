import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  brandName: '云端智诊团队',
  projectName: '宫颈智能影像与云端筛查协同创新项目',
  cooperationDirections: ['科研合作', '平台共建', '临床应用', '成果转化'],
  logoUrl: 'https://img1.tucang.cc/api/image/show/45b4f4864a1e97681b52b7a1e1f5cc31',
  tagline: '宫颈智能影像与云端筛查协同创新项目官方网站',
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
  home: {
    heroSlides: [
      {
        title: '宫颈智能影像与云端筛查协同创新项目持续推进核心能力建设',
        description:
          '依托云端智诊团队，围绕宫颈智能影像分析、云端筛查协同、临床应用支持与成果转化持续推进重点任务，形成更完整的项目展示与服务体系。',
        positioning: '面向宫颈筛查场景的智能影像与云端协同创新门户',
        tags: ['智能影像', '云端协同', '临床应用', '成果转化'],
      },
      {
        title: '以正式门户发布项目进展、阶段成果与合作服务信息',
        description:
          '首页集中呈现项目定位、建设进展、研究动态、通知公告、专题能力与服务入口，强化公开发布口径、信息层级与机构化呈现方式。',
        positioning: '项目公开发布、资料服务与合作交流统一窗口',
        tags: ['项目发布', '资料服务', '合作交流', '公开信息'],
      },
      {
        title: '围绕科研合作、平台共建、临床应用、成果转化形成协同表达',
        description:
          '通过首页、新闻中心与关键内页的统一设计语言，系统呈现项目建设方向、业务支撑能力和对外服务价值，提升整体可信度与正式感。',
        positioning: '兼顾机构权威感与医疗科技感的项目官网首页',
        tags: ['科研合作', '平台共建', '新闻中心', '官方门户'],
      },
    ],
    overviewCard: {
      label: '项目概况卡',
      title: '项目基础信息',
      items: [
        { label: '项目全称', value: '宫颈智能影像与云端筛查协同创新项目' },
        { label: '团队名称', value: '云端智诊团队' },
        { label: '合作方向', value: '科研合作、平台共建、临床应用、成果转化' },
        { label: '服务对象', value: '医疗机构、合作单位、科研伙伴与相关用户' },
      ],
      footer: ['科研引领', '服务临床', '可信发布'],
    },
    researchUpdates: [
      { day: '18', month: '2026-03', title: '宫颈智能影像识别模型优化与多场景验证工作持续推进' },
      { day: '15', month: '2026-03', title: '云端筛查协同平台核心流程梳理与首页展示体系同步完善' },
      { day: '12', month: '2026-03', title: '结构化报告、成果材料与公开资料联动更新机制完成梳理' },
      { day: '08', month: '2026-03', title: '项目关键字段规范化与数据治理工作进入集中推进阶段' },
      { day: '03', month: '2026-03', title: '年度重点任务、服务方向与对外发布口径完成统一' },
      { day: '27', month: '2026-02', title: '智能识别能力与业务协同能力联调验证工作有序开展' },
    ],
    notices: [
      { day: '17', month: '2026-03', title: '项目官方网站首页完成新一轮门户化精修并开放对外访问' },
      { day: '14', month: '2026-03', title: '宫颈智能影像与云端筛查协同创新项目公开资料完成更新' },
      { day: '10', month: '2026-03', title: '合作交流统一围绕科研合作、平台共建、临床应用、成果转化等方向受理' },
      { day: '06', month: '2026-03', title: '项目动态、平台建设与成果信息栏目保持持续发布' },
      { day: '03', month: '2026-03', title: '阶段性成果材料与项目介绍文案完成统一整理' },
      { day: '26', month: '2026-02', title: '项目公开信息发布规范与栏目维护机制进一步完善' },
    ],
    topicColumns: [
      {
        title: '智能影像',
        kicker: 'Algorithm & Imaging',
        description: '围绕宫颈影像识别、病灶提示与辅助判读，集中展示项目算法能力与技术路线。',
        to: '/product',
      },
      {
        title: '云端协同',
        kicker: 'Cloud Workflow',
        description: '面向病例、分析、报告与随访协同流程，呈现筛查业务支撑与平台协作能力。',
        to: '/product',
      },
      {
        title: '成果信息',
        kicker: 'Outcomes & IP',
        description: '围绕知识产权、建设成果与阶段性材料，形成规范、持续更新的成果展示入口。',
        to: '/solutions',
      },
      {
        title: '资料服务',
        kicker: 'Public Resources',
        description: '提供项目介绍、合作说明、公开资料与联系服务信息，支撑正式对外交流场景。',
        to: '/contact',
      },
    ],
    quickLinks: [
      {
        label: '项目概览',
        shortLabel: '概览',
        description: '查看项目定位、建设方向与公开介绍。',
        to: '/about',
      },
      {
        label: '研究方向',
        shortLabel: '方向',
        description: '了解智能影像、云端协同与数据治理等重点方向。',
        to: '/product',
      },
      {
        label: '核心成果',
        shortLabel: '成果',
        description: '进入成果转化栏目查看知识产权与专题成果。',
        to: '/solutions',
      },
      {
        label: '项目动态',
        shortLabel: '动态',
        description: '浏览项目建设进展、更新公告与公开发布信息。',
        to: '/news',
      },
      {
        label: '合作交流',
        shortLabel: '合作',
        description: '围绕科研合作、平台共建等方向发起沟通。',
        to: '/contact',
      },
      {
        label: '平台入口',
        shortLabel: '入口',
        description: '访问业务系统入口，衔接官网展示与应用服务。',
        to: '/contact',
      },
      {
        label: '资料服务',
        shortLabel: '资料',
        description: '获取项目公开资料、介绍信息与服务说明。',
        to: '/contact',
      },
      {
        label: '公开信息',
        shortLabel: '公开',
        description: '查看正式发布内容与项目维护更新信息。',
        to: '/news',
      },
    ],
    servicePanel: {
      title: '项目服务窗口',
      description:
        '项目面向科研合作、平台共建、临床应用与成果转化等方向提供统一沟通窗口，支持资料服务、公开介绍与合作交流场景。',
      primaryAction: {
        label: '邮件咨询',
        href: 'mailto:support@hpvsc.icu',
      },
      secondaryAction: {
        label: '查看联系方式',
        to: '/contact',
        variant: 'secondary',
      },
    },
  },
};

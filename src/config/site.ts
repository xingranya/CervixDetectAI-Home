import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  brandName: '云端智诊团队',
  projectName: '宫颈智能影像与云端筛查协同创新项目',
  cooperationDirections: ['科研合作', '平台共建', '临床应用', '成果转化'],
  logoUrl: 'https://img1.tucang.cc/api/image/show/45b4f4864a1e97681b52b7a1e1f5cc31',
  tagline: '宫颈智能影像与云端筛查协同创新项目官方网站',
  heroTitle: '云端智诊团队',
  heroSubtitle:
    '面向宫颈筛查与诊疗相关工作，官网集中提供项目介绍、新闻动态、成果信息、公开资料和平台入口。',
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
        title: '聚焦宫颈智能影像与云端筛查应用',
        description:
          '官网集中介绍项目背景、研究方向、成果信息和平台服务，方便快速了解项目整体情况。',
        positioning: '项目介绍与平台服务入口',
        tags: ['智能影像', '云端协同', '临床应用', '成果转化'],
        image: 'https://img1.tucang.cc/api/image/show/7c82e065356b5f946edfc957986f29dc',
      },
      {
        title: '集中发布项目进展、成果信息与公开资料',
        description:
          '可在此查看项目新闻、通知信息、成果内容、公开资料和联系入口。',
        positioning: '项目动态与资料中心',
        tags: ['项目发布', '资料服务', '合作交流', '公开信息'],
        image: 'https://img1.tucang.cc/api/image/show/147a9669236d85027422d0ed5ae19ee2',
      },
      {
        title: '面向科研合作、平台共建与临床应用提供服务支持',
        description:
          '提供清晰的项目介绍、合作说明、联系渠道和平台入口，方便开展交流与使用。',
        positioning: '合作交流与平台访问',
        tags: ['科研合作', '平台共建', '新闻中心', '官方门户'],
        image: 'https://img1.tucang.cc/api/image/show/bbe5c07e013259373b4040f98d50ab6d',
      },
      {
        title: '结合真实图片展示项目动态与应用情况',
        description:
          '通过真实图片和新闻内容，让来访者更直观地了解项目进展和实际应用。',
        positioning: '项目动态与真实图片展示',
        tags: ['医院图片', '基层实践', '首页轮播', '新闻内容'],
        image: 'https://img1.tucang.cc/api/image/show/d41453c4bd95ac41a27bb52427be2deb',
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
      { day: '18', month: '2026-03', title: '宫颈智能影像识别模型持续优化' },
      { day: '15', month: '2026-03', title: '云端筛查平台页面与功能完成新一轮更新' },
      { day: '12', month: '2026-03', title: '公开资料与成果信息同步更新' },
      { day: '08', month: '2026-03', title: '数据管理与关键字段说明进一步完善' },
      { day: '03', month: '2026-03', title: '年度重点工作与合作方向已对外发布' },
      { day: '27', month: '2026-02', title: '系统联调与业务验证持续进行' },
    ],
    notices: [
      { day: '17', month: '2026-03', title: '项目官方网站首页完成新一轮门户化精修并开放对外访问' },
      { day: '14', month: '2026-03', title: '项目公开资料已完成更新' },
      { day: '10', month: '2026-03', title: '合作咨询现已开放科研合作、平台共建、临床应用和成果转化等方向' },
      { day: '06', month: '2026-03', title: '项目动态与成果信息持续发布' },
      { day: '03', month: '2026-03', title: '项目介绍与联系页面已完成更新' },
      { day: '26', month: '2026-02', title: '官网公开内容持续完善' },
    ],
    topicColumns: [
      {
        title: '智能影像',
        kicker: 'Algorithm & Imaging',
        description: '介绍宫颈影像识别、病灶提示和辅助判读相关内容。',
        to: '/product',
      },
      {
        title: '云端协同',
        kicker: 'Cloud Workflow',
        description: '展示平台在病例管理、分析、报告和随访等方面的应用。',
        to: '/product',
      },
      {
        title: '成果信息',
        kicker: 'Outcomes & IP',
        description: '查看软件著作权、阶段成果和相关专题内容。',
        to: '/solutions',
      },
      {
        title: '资料服务',
        kicker: 'Public Resources',
        description: '获取项目介绍、合作说明、公开资料和联系信息。',
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
        description: '查看软件著作权与项目成果内容。',
        to: '/solutions',
      },
      {
        label: '项目动态',
        shortLabel: '动态',
        description: '查看项目新闻、公告和更新内容。',
        to: '/news',
      },
      {
        label: '合作交流',
        shortLabel: '合作',
        description: '查看合作说明并发起联系。',
        to: '/contact',
      },
      {
        label: '平台入口',
        shortLabel: '入口',
        description: '直达 HPVSC 平台登录入口，快速进入系统服务。',
        href: 'https://hpvsc.icu/#/login',
      },
      {
        label: '资料服务',
        shortLabel: '资料',
        description: '获取项目介绍、公开资料和联系说明。',
        to: '/contact',
      },
      {
        label: '公开信息',
        shortLabel: '公开',
        description: '查看官网发布的新闻、公告和相关信息。',
        to: '/news',
      },
    ],
    servicePanel: {
      title: '平台与联系入口',
      description:
        '可直接进入平台，也可以查看项目介绍、获取公开资料或联系团队。',
      primaryAction: {
        label: '进入平台',
        href: 'https://hpvsc.icu/#/login',
      },
      secondaryAction: {
        label: '联系我们',
        to: '/contact',
        variant: 'secondary',
      },
    },
    metrics: {
      accuracy: {
        value: 99.55,
        suffix: '%',
        label: '辅助诊断准确率',
      },
      hospitals: {
        value: 50,
        suffix: '+',
        label: '合作医院',
      },
      cases: {
        value: 100000,
        suffix: '+',
        label: '累计筛查病例',
      },
      detection: {
        value: 96.8,
        suffix: '%',
        label: '病变检出率',
      },
    },
  },
  hospitals: [
    { id: 'JZ_CENTRAL', name: '荆州市中心医院', icon: 'local_hospital', iconUrl: '/icons/hospitals/jz_central.png' },
    { id: 'JZ_JINDUN', name: '荆州区金盾门诊', icon: 'health_and_safety', iconUrl: '/icons/hospitals/jz_jindun.svg' },
    { id: 'WH_PEOPLE', name: '武汉大学人民医院', icon: 'medical_services', iconUrl: '/icons/hospitals/wh_people.png' },
    { id: 'HUST_TONGJI', name: '华中科技大学同济医学院', icon: 'school', iconUrl: '/icons/hospitals/hust_tongji.png' },
    { id: 'JL_SANHU', name: '江陵县三湖管理区卫生院', icon: 'healing', iconUrl: '/icons/hospitals/jl_sanhu.svg' },
    { id: 'JZ_BAOHETANG', name: '荆州保和堂中医诊所', icon: 'spa', iconUrl: '/icons/hospitals/jz_baohetang.svg' },
    { id: 'JZ_FUYOU', name: '荆州市妇幼保健院', icon: 'child_care', iconUrl: '/icons/hospitals/jz_fuyou.png' },
  ],
};

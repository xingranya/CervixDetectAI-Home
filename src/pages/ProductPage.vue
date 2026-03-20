<script setup lang="ts">
import { siteConfig } from '@/config/site';
import AppButton from '@/components/common/AppButton.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const highlights = [
  { icon: 'accuracy', label: '94.2%', desc: '辅助诊断准确率' },
  { icon: 'hospitals', label: '7家', desc: '合作医疗机构' },
  { icon: 'cases', label: '12580例', desc: '累计筛查病例' },
];

const modules = [
  {
    icon: 'imaging',
    tag: '智能影像',
    title: '智能影像分析',
    description: '基于深度学习的宫颈影像自动识别与病灶检测，为临床筛查提供辅助支持。',
  },
  {
    icon: 'cloud',
    tag: '云端协同',
    title: '云端平台应用',
    description: '病例管理、分析报告、随访提醒全流程在线操作，提升筛查效率。',
  },
  {
    icon: 'clinical',
    tag: '临床应用',
    title: '临床应用服务',
    description: '与医疗机构合作，将AI筛查融入实际临床工作流程。',
  },
  {
    icon: 'data',
    tag: '数据治理',
    title: '数据治理与规范',
    description: '标准化数据采集、清洗与结构化表达，保障数据质量与安全。',
  },
  {
    icon: '成果',
    tag: '成果转化',
    title: '成果与资料',
    description: '软件著作权登记与科研成果转化，推动技术落地应用。',
  },
  {
    icon: '人才',
    tag: '人才培养',
    title: '合作交流服务',
    description: '科研合作、平台共建与人才培养，促进学术与业务交流。',
  },
];

const iconSvgs = {
  accuracy: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>`,
  hospitals: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6"/></svg>`,
  cases: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>`,
  imaging: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/><circle cx="12" cy="12" r="4"/></svg>`,
  cloud: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  clinical: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6"/></svg>`,
  data: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  '成果': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  '人才': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
};
</script>

<template>
  <div>
    <PageHero
      badge="研究方向"
      :title="`${siteConfig.brandName}聚焦智能影像与云端筛查`"
      description="了解智能影像分析、云端平台应用与临床服务等研究重点"
    />

    <!-- 数据亮点横条 -->
    <section class="section section--highlight">
      <div class="container">
        <div class="highlight-strip">
          <div v-for="item in highlights" :key="item.label" class="highlight-item">
            <span class="highlight-item__icon" v-html="iconSvgs[item.icon as keyof typeof iconSvgs]"></span>
            <strong class="highlight-item__value">{{ item.label }}</strong>
            <span class="highlight-item__desc">{{ item.desc }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 研究方向卡片 -->
    <section class="section">
      <div class="container">
        <div class="section-head" v-reveal>
          <SectionBadge label="六大研究方向" />
          <h2 class="section-title">覆盖从算法研发到临床应用的全链条</h2>
        </div>
        <div class="modules-grid">
          <article
            v-for="(item, index) in modules"
            :key="item.title"
            class="module-card"
            v-reveal="`${index * 60}ms`"
          >
            <div class="module-card__icon" v-html="iconSvgs[item.icon as keyof typeof iconSvgs]"></div>
            <span class="module-card__tag">{{ item.tag }}</span>
            <h3 class="module-card__title">{{ item.title }}</h3>
            <p class="module-card__desc">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 底部CTA -->
    <section class="section section--cta">
      <div class="container">
        <div class="cta-card" v-reveal>
          <div class="cta-card__content">
            <h2 class="cta-card__title">了解更多研究进展</h2>
            <p class="cta-card__desc">关注项目动态，了解最新研究成果与临床应用进展</p>
          </div>
          <div class="cta-card__actions">
            <AppButton to="/news">查看项目动态</AppButton>
            <AppButton to="/contact" variant="secondary">合作咨询</AppButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 数据亮点横条 */
.section--highlight {
  padding: 0;
  background: linear-gradient(180deg, #f7faff 0%, #eef5ff 100%);
}

.highlight-strip {
  display: flex;
  justify-content: center;
  gap: 56px;
  padding: 28px 0;
  border-top: 1px solid rgba(13, 94, 170, 0.08);
  border-bottom: 1px solid rgba(13, 94, 170, 0.08);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 14px;
}

.highlight-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background: var(--gradient-primary);
  color: white;
}

.highlight-item__icon :deep(svg) {
  width: 18px;
  height: 18px;
}

.highlight-item__value {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--accent);
}

.highlight-item__desc {
  color: var(--muted-foreground);
  font-size: 0.92rem;
}

/* 标题区 */
.section-head {
  display: grid;
  gap: 12px;
  margin-bottom: 32px;
}

/* 研究方向网格 */
.modules-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.module-card {
  display: grid;
  gap: 12px;
  padding: 24px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(13, 94, 170, 0.1);
  background: white;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.25s var(--ease-spring),
    box-shadow 0.25s var(--ease-smooth),
    border-color 0.25s var(--ease-smooth);
}

.module-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: rgba(13, 94, 170, 0.2);
}

.module-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--gradient-primary);
  color: white;
}

.module-card__icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.module-card__tag {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}

.module-card__title {
  margin: 0;
  font-size: 1.18rem;
  font-weight: 800;
  line-height: 1.35;
  color: var(--foreground);
}

.module-card__desc {
  margin: 0;
  font-size: 0.9rem;
  color: var(--muted-foreground);
  line-height: 1.75;
}

/* 底部CTA */
.section--cta {
  background: var(--surface-slate);
}

.cta-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 36px 40px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(13, 94, 170, 0.12);
  background: white;
  box-shadow: var(--shadow-md);
}

.cta-card__title {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.3;
}

.cta-card__desc {
  margin: 8px 0 0;
  color: var(--muted-foreground);
  font-size: 0.95rem;
  line-height: 1.6;
}

.cta-card__actions {
  display: flex;
  gap: 14px;
  flex-shrink: 0;
}

/* 响应式 */
@media (max-width: 1080px) {
  .modules-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cta-card {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .highlight-strip {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .modules-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    padding: 28px 24px;
  }

  .cta-card__actions {
    flex-direction: column;
    width: 100%;
  }
}
</style>

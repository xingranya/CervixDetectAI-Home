<script setup lang="ts">
import { siteConfig } from '@/config/site';
import AppButton from '@/components/common/AppButton.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const solutions = [
  {
    icon: '合作',
    title: '机构合作交流',
    description: '面向医院、妇幼保健机构及相关合作单位，提供项目介绍、技术合作与联合研究信息。',
    link: '/contact',
    linkLabel: '合作咨询',
  },
  {
    icon: '成果',
    title: '成果与专题内容',
    description: '查看软件著作权、科研项目成果与专题页面展示。',
    link: '/solutions',
    linkLabel: '查看成果',
  },
  {
    icon: '资料',
    title: '公开资料服务',
    description: '获取项目介绍、技术文档与公开资料。',
    link: '/contact',
    linkLabel: '获取资料',
  },
];

const solutionIcons: Record<string, string> = {
  '合作': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  '成果': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  '资料': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
};

const serviceItems = [
  { label: '软件著作权', desc: '已登记软件著作权信息' },
  { label: '科研项目成果', desc: '阶段性研究成果展示' },
  { label: '合作联系', desc: '邮件咨询与在线联系' },
];
</script>

<template>
  <div>
    <PageHero
      badge="成果转化"
      :title="`${siteConfig.brandName}成果展示与合作交流`"
      description="查看软件著作权、科研成果与合作联系信息"
    />

    <!-- 成果卡片区 -->
    <section class="section">
      <div class="container">
        <div class="section-head" v-reveal>
          <SectionBadge label="成果服务" />
          <h2 class="section-title">科研成果与合作交流</h2>
        </div>
        <div class="solutions-grid">
          <article
            v-for="(item, index) in solutions"
            :key="item.title"
            class="solution-card"
            v-reveal="`${index * 80}ms`"
          >
            <div class="solution-card__icon" v-html="solutionIcons[item.icon]"></div>
            <div class="solution-card__body">
              <h3 class="solution-card__title">{{ item.title }}</h3>
              <p class="solution-card__desc">{{ item.description }}</p>
            </div>
            <AppButton :to="item.link" variant="secondary" size="sm">
              {{ item.linkLabel }}
            </AppButton>
          </article>
        </div>
      </div>
    </section>

    <!-- 服务信息区 -->
    <section class="section section--info">
      <div class="container">
        <div class="info-layout">
          <div class="info-content" v-reveal>
            <SectionBadge label="服务内容" />
            <h2 class="info-content__title">清晰的信息入口，便于查看与联系</h2>
            <p class="info-content__desc">
              团队介绍、研究方向、成果信息和联系入口，方便合作单位了解项目情况并开展进一步交流。
            </p>
            <AppButton href="mailto:support@hpvsc.icu">邮件咨询</AppButton>
          </div>
          <div class="info-list" v-reveal="'120ms'">
            <div
              v-for="item in serviceItems"
              :key="item.label"
              class="info-list__item"
            >
              <strong>{{ item.label }}</strong>
              <span>{{ item.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部CTA -->
    <section class="section section--cta">
      <div class="container">
        <div class="cta-block" v-reveal>
          <h2 class="cta-block__title">开展合作与交流</h2>
          <p class="cta-block__desc">欢迎医院、妇幼保健机构和科研单位联系我们</p>
          <div class="cta-block__actions">
            <AppButton to="/contact" size="lg">立即联系</AppButton>
            <AppButton to="/about" variant="secondary" size="lg">了解团队</AppButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 标题区 */
.section-head {
  display: grid;
  gap: 12px;
  margin-bottom: 32px;
}

/* 解决方案网格 */
.solutions-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.solution-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(13, 94, 170, 0.1);
  background: white;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.25s var(--ease-spring),
    box-shadow 0.25s var(--ease-smooth),
    border-color 0.25s var(--ease-smooth);
}

.solution-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: rgba(13, 94, 170, 0.2);
}

.solution-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: var(--gradient-primary);
  color: white;
}

.solution-card__icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.solution-card__body {
  flex: 1;
}

.solution-card__title {
  margin: 0 0 10px;
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.35;
}

.solution-card__desc {
  margin: 0;
  font-size: 0.9rem;
  color: var(--muted-foreground);
  line-height: 1.75;
}

/* 服务信息区 */
.section--info {
  background: var(--surface-slate);
}

.info-layout {
  display: grid;
  gap: 40px;
  align-items: start;
  grid-template-columns: 1fr 1fr;
}

.info-content {
  display: grid;
  gap: 16px;
}

.info-content__title {
  margin: 8px 0 0;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.3;
}

.info-content__desc {
  margin: 0;
  color: var(--muted-foreground);
  line-height: 1.85;
}

.info-list {
  display: grid;
  gap: 0;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(13, 94, 170, 0.12);
  background: white;
  overflow: hidden;
}

.info-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  border-bottom: 1px solid rgba(13, 94, 170, 0.08);
  transition: background-color 0.2s var(--ease-smooth);
}

.info-list__item:last-child {
  border-bottom: 0;
}

.info-list__item:hover {
  background: rgba(13, 94, 170, 0.03);
}

.info-list__item strong {
  font-weight: 700;
  color: var(--foreground);
}

.info-list__item span {
  font-size: 0.88rem;
  color: var(--muted-foreground);
}

/* 底部CTA */
.section--cta {
  background: linear-gradient(180deg, #f7faff 0%, #eef5ff 100%);
}

.cta-block {
  text-align: center;
  padding: 48px 24px;
}

.cta-block__title {
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
}

.cta-block__desc {
  margin: 12px 0 28px;
  color: var(--muted-foreground);
  font-size: 1rem;
  line-height: 1.6;
}

.cta-block__actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

/* 响应式 */
@media (max-width: 1080px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }

  .info-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .cta-block__actions {
    flex-direction: column;
  }
}
</style>

<script setup lang="ts">
import { siteConfig } from '@/config/site';
import AppButton from '@/components/common/AppButton.vue';
import FeatureCard from '@/components/common/FeatureCard.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const modules = [
  {
    tag: '智能影像',
    title: '智能影像分析',
    description: '介绍宫颈影像识别、病灶提示和辅助判读相关研究内容。',
    tone: 'blue' as const,
  },
  {
    tag: '云端协同',
    title: '云端平台应用',
    description: '展示病例管理、分析、报告和随访等功能内容。',
    tone: 'slate' as const,
  },
  {
    tag: '临床应用',
    title: '临床应用服务',
    description: '介绍项目在医疗机构相关工作中的应用内容与服务方向。',
    tone: 'muted' as const,
  },
  {
    tag: '数据治理',
    title: '数据治理与规范',
    description: '展示数据管理、结构化表达和相关规范内容。',
    tone: 'slate' as const,
  },
  {
    tag: '成果转化',
    title: '成果与资料',
    description: '查看软件著作权、专题资料和公开内容。',
    tone: 'muted' as const,
  },
  {
    tag: '人才培养',
    title: '合作交流服务',
    description: '提供科研合作、平台共建和业务交流相关信息。',
    tone: 'dark' as const,
  },
];

const workflowSteps = [
  '明确研究方向和重点内容',
  '持续完善算法、平台和应用功能',
  '更新成果信息与公开资料',
  '发布项目动态与应用进展',
  '提供合作咨询与平台入口',
];
</script>

<template>
  <div>
    <PageHero
      badge="研究方向"
      :title="`${siteConfig.brandName}聚焦智能影像、平台应用和临床服务等重点内容。`"
      description="这里集中介绍项目的主要内容、平台应用、成果信息和合作方向。"
    />

    <section class="section">
      <div class="container">
        <div v-reveal class="page-section-head">
          <SectionBadge label="方向布局" />
          <h2 class="section-title">从研究内容到应用服务，集中介绍项目主要方向。</h2>
          <p class="section-description">
            这里汇总了项目的研究内容、平台功能、数据规范、成果信息和合作交流相关内容。
          </p>
        </div>
        <div class="product-grid">
          <FeatureCard
            v-for="(item, index) in modules"
            :key="item.title"
            v-reveal="`${index * 70}ms`"
            :title="item.title"
            :description="item.description"
            :tag="item.tag"
            :tone="item.tone"
            :highlighted="index === 1 || index === 3"
          >
            <template #icon>{{ index + 1 }}</template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <section class="section section--workflow">
      <div class="container product-layout">
        <div v-reveal>
          <SectionBadge label="内容概览" pulse />
          <h2 class="section-title">从研究内容到公开服务，页面信息清晰衔接。</h2>
          <p class="section-description">
            通过研究介绍、成果信息、新闻内容和合作入口的组合展示，方便快速了解项目全貌。
          </p>
        </div>
        <div v-reveal="'120ms'" class="workflow-card">
          <div v-for="step in workflowSteps" :key="step" class="workflow-step">{{ step }}</div>
        </div>
      </div>
    </section>

    <section class="section section--compact">
      <div class="container" v-reveal>
        <div class="callout-card">
          <h2 class="callout-card__title">持续完善项目内容与服务入口。</h2>
          <p class="callout-card__description">
            后续将继续更新研究进展、平台功能、公开资料和合作信息，方便及时获取最新内容。
          </p>
          <div class="callout-card__actions">
            <AppButton to="/news">查看团队动态</AppButton>
            <AppButton to="/contact" variant="secondary">联系交流</AppButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-section-head {
  display: grid;
  gap: 10px;
}

.product-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 34px;
}

.section--workflow {
  background: var(--surface-slate);
}

.product-layout {
  display: grid;
  gap: 28px;
  align-items: start;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.88fr);
}

.workflow-card {
  display: grid;
  gap: 14px;
  padding: 28px;
  border-radius: 20px;
  border: 1px solid rgba(13, 94, 170, 0.12);
  background: white;
}

.workflow-step {
  padding: 16px 18px;
  border-radius: var(--radius-md);
  background: var(--surface-blue);
  line-height: 1.75;
  font-weight: 700;
}

.callout-card {
  padding: 34px;
  border-radius: 20px;
  border: 1px solid rgba(13, 94, 170, 0.12);
  background: white;
}

.callout-card__title {
  margin: 0;
  font-size: 1.7rem;
  line-height: 1.3;
}

.callout-card__description {
  max-width: 780px;
  margin: 16px 0 0;
  color: var(--muted-foreground);
  line-height: 1.9;
}

.callout-card__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 22px;
}

@media (max-width: 1080px) {
  .product-layout,
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';
import FeatureCard from '@/components/common/FeatureCard.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const modules = [
  {
    tag: 'ANALYSIS',
    title: '影像上传与 AI 识别',
    description: '支持单图、批量与病例级任务创建，分析前优先使用远程 URL，异常时自动回退本地路径。',
    tone: 'blue' as const,
  },
  {
    tag: 'DATA',
    title: '患者与病例中心',
    description: '患者资料、病例中心、检查详情、趋势比较与洞察入口保持同一数据主线。',
    tone: 'slate' as const,
  },
  {
    tag: 'REPORT',
    title: '结构化报告输出',
    description: '结合 ECharts、PDF 与结果页展示，把分析结果转成更易归档、更易沟通的交付物。',
    tone: 'muted' as const,
  },
  {
    tag: 'FOLLOW-UP',
    title: '随访与提醒调度',
    description: '支持模板化随访计划、定时提醒、立即提醒与站内通知联动。',
    tone: 'slate' as const,
  },
  {
    tag: 'PREFERENCES',
    title: '套餐与 AI 偏好',
    description: '订阅权益与 AI 引擎偏好已拆分成独立入口，职责更清晰，也更适合商务介绍。',
    tone: 'muted' as const,
  },
  {
    tag: 'SECURITY',
    title: '认证与可信表达',
    description: '支持邮箱、短信与工号等多通道认证，配合备案、软著与品牌信息统一表达。',
    tone: 'dark' as const,
  },
];
</script>

<template>
  <div>
    <PageHero
      badge="Product"
      title="围绕筛查工作流构建，从影像分析延伸到报告与随访管理。"
      description="平台以医疗机构日常使用需求为核心，覆盖影像分析、病例管理、结果输出与后续协同。"
    />

    <section class="section">
      <div class="container">
        <div v-reveal class="page-section-head">
          <SectionBadge label="Capability Matrix" />
          <h2 class="section-title">产品能力围绕同一业务流程组织，便于部署、使用与持续管理。</h2>
          <p class="section-description">从采集、分析到结果表达与随访安排，所有能力围绕同一条业务主线展开。</p>
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
            <template #icon>{{ item.tag.slice(0, 2) }}</template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <section class="section section--workflow">
      <div class="container product-layout">
        <div v-reveal>
          <SectionBadge label="Workflow" pulse />
          <h2 class="section-title">从采集到复查，形成贯穿筛查业务的连续流程。</h2>
          <p class="section-description">
            采集、分析、报告、通知与随访并非孤立模块，而是围绕同一业务目标协同工作。
          </p>
        </div>
        <div v-reveal="'120ms'" class="workflow-card">
          <div class="workflow-step">1. 影像采集与病例创建</div>
          <div class="workflow-step">2. AI 任务创建与状态跟踪</div>
          <div class="workflow-step">3. 分析结果落库与报告生成</div>
          <div class="workflow-step">4. 高风险提醒与站内通知</div>
          <div class="workflow-step">5. 随访计划与后续复查</div>
        </div>
      </div>
    </section>

    <section class="section section--compact">
      <div class="container" v-reveal>
        <div class="callout-card">
          <h2 class="callout-card__title">适用于方案介绍、项目汇报与合作交流。</h2>
          <p class="callout-card__description">
            除产品能力介绍外，后续还可继续补充案例、演示资料与行业合作信息，增强外部沟通完整性。
          </p>
          <div class="callout-card__actions">
            <AppButton to="/news">查看项目动态</AppButton>
            <AppButton to="/contact" variant="secondary">联系咨询</AppButton>
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
  border: 1px solid rgba(59, 130, 246, 0.12);
  background: white;
}

.workflow-step {
  padding: 16px 18px;
  border-radius: var(--radius-md);
  background: var(--surface-blue);
  line-height: 1.65;
  font-weight: 700;
}

.callout-card {
  padding: 34px;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.12);
  background: white;
}

.callout-card__title {
  margin: 0;
  font-size: 1.7rem;
  line-height: 1.25;
}

.callout-card__description {
  max-width: 780px;
  margin: 16px 0 0;
  color: var(--muted-foreground);
  line-height: 1.85;
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

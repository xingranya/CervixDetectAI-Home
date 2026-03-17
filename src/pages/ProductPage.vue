<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';
import FeatureCard from '@/components/common/FeatureCard.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const modules = [
  {
    tag: '方向一',
    title: '智能影像分析',
    description: '围绕宫颈影像识别、病灶提示与辅助判读开展技术研究，持续提升模型能力与应用稳定性。',
    tone: 'blue' as const,
  },
  {
    tag: '方向二',
    title: '云端协同支撑',
    description: '建设面向筛查业务的云端协同平台，推动病例、分析、报告与随访等环节有序衔接。',
    tone: 'slate' as const,
  },
  {
    tag: '方向三',
    title: '临床应用服务',
    description: '面向医疗机构与相关场景完善应用支撑能力，促进技术成果服务实际业务需要。',
    tone: 'muted' as const,
  },
  {
    tag: '方向四',
    title: '数据治理规范',
    description: '加强数据管理、结构化表达和过程规范，夯实平台建设与成果应用的基础支撑。',
    tone: 'slate' as const,
  },
  {
    tag: '方向五',
    title: '成果展示推广',
    description: '围绕知识产权、专题资料和公开内容建设，持续提升团队成果展示与传播能力。',
    tone: 'muted' as const,
  },
  {
    tag: '方向六',
    title: '合作交流服务',
    description: '面向科研合作、平台共建和业务交流场景，提供规范、清晰、稳定的对外服务支持。',
    tone: 'dark' as const,
  },
];

const workflowSteps = [
  '围绕重点需求明确研究任务与建设目标',
  '推进关键技术研究与平台能力协同提升',
  '形成规范成果材料并开展专题展示',
  '依托新闻发布与公开资料做好成果传播',
  '围绕合作交流推动应用服务与成果落地',
];
</script>

<template>
  <div>
    <PageHero
      badge="研究方向"
      title="围绕智能影像、云端协同与临床应用持续推进重点研究方向。"
      description="团队聚焦宫颈智能影像分析、业务协同支撑、数据治理规范和成果推广服务等方向，形成协同联动、持续推进的研究布局。"
    />

    <section class="section">
      <div class="container">
        <div v-reveal class="page-section-head">
          <SectionBadge label="方向布局" />
          <h2 class="section-title">面向技术研究、平台建设与应用服务形成系统化布局。</h2>
          <p class="section-description">
            团队围绕核心技术、业务协同、规范管理和成果服务持续推进建设工作，不断提升研究深度和应用价值。
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
          <SectionBadge label="工作主线" pulse />
          <h2 class="section-title">从研究推进到成果服务，形成衔接紧密的工作主线。</h2>
          <p class="section-description">
            团队坚持需求牵引、协同推进、规范展示和服务应用相结合，努力推动重点方向持续取得阶段性成效。
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
          <h2 class="callout-card__title">以持续研究与务实应用推动团队发展。</h2>
          <p class="callout-card__description">
            团队将继续围绕关键技术攻关、平台能力完善、服务场景拓展和成果应用推广等方面开展工作，不断增强对临床与合作场景的支撑能力。
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

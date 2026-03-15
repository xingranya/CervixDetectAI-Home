<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue';
import FeatureCard from '@/components/common/FeatureCard.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const solutionCards = [
  {
    tag: 'PRIMARY CARE',
    title: '基层筛查点',
    description: '强调快速部署、云端能力接入与低门槛使用，适合筛查覆盖面扩张。',
    tone: 'blue' as const,
  },
  {
    tag: 'OUTPATIENT',
    title: '门诊与专科复查',
    description: '配合病例中心、历史比对和报告下载，把复查场景做得更连贯。',
    tone: 'slate' as const,
  },
  {
    tag: 'MULTI-SITE',
    title: '多点协同机构',
    description: '统一院点间工作流，减少影像、结果和通知在多角色之间的断裂。',
    tone: 'muted' as const,
  },
];
</script>

<template>
  <div>
    <PageHero
      badge="Solutions"
      title="面向不同医疗场景提供更适配的宫颈筛查数字化支持。"
      description="围绕基层筛查、门诊复查与多点协同等场景，提供更清晰的流程支撑与信息管理能力。"
    />

    <section class="section">
      <div class="container">
        <div v-reveal class="page-section-head">
          <SectionBadge label="Use Cases" />
          <h2 class="section-title">聚焦典型使用场景，帮助机构更高效地开展筛查与管理工作。</h2>
          <p class="section-description">不同机构关注点不同，官网表达也应先说明适配关系，再解释功能模块。</p>
        </div>
        <div class="solutions-grid">
          <FeatureCard
            v-for="(item, index) in solutionCards"
            :key="item.title"
            v-reveal="`${index * 90}ms`"
            :title="item.title"
            :description="item.description"
            :tag="item.tag"
            :tone="item.tone"
            :highlighted="index === 1"
          >
            <template #icon>{{ item.tag.slice(0, 2) }}</template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <section class="section section--fit">
      <div class="container fit-layout">
        <div v-reveal>
          <SectionBadge label="Delivery Fit" />
          <h2 class="section-title">围绕机构关注点说明平台价值，而不仅是罗列功能配置。</h2>
          <p class="section-description">
            从部署方式、业务协同、报告效率到随访闭环，平台能力能够与实际业务需求形成更直接的对应关系。
          </p>
        </div>
        <div v-reveal="'120ms'" class="fit-card">
          <div class="fit-card__row"><strong>部署：</strong>云端优先，支持持续扩展与内容更新。</div>
          <div class="fit-card__row"><strong>协同：</strong>分析、通知、随访在统一入口串联。</div>
          <div class="fit-card__row"><strong>价值：</strong>适用于项目汇报、院内沟通与合作交流。</div>
          <div class="fit-card__actions">
            <AppButton href="mailto:support@hpvsc.icu">邮件沟通</AppButton>
            <AppButton to="/about" variant="secondary">查看项目介绍</AppButton>
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

.solutions-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 34px;
}

.section--fit {
  background: var(--surface-slate);
}

.fit-layout {
  display: grid;
  gap: 28px;
  align-items: start;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
}

.fit-card {
  padding: 32px;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.12);
  background: white;
}

.fit-card__row {
  color: var(--muted-foreground);
  line-height: 1.9;
}

.fit-card__row + .fit-card__row {
  margin-top: 16px;
}

.fit-card__row strong {
  color: var(--foreground);
}

.fit-card__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 24px;
}

@media (max-width: 1080px) {
  .fit-layout,
  .solutions-grid {
    grid-template-columns: 1fr;
  }
}
</style>

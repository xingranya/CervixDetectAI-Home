<script setup lang="ts">
import { siteConfig } from '@/config/site';
import AppButton from '@/components/common/AppButton.vue';
import FeatureCard from '@/components/common/FeatureCard.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const solutionCards = [
  {
    tag: '合作服务',
    title: '机构合作交流',
    description: '面向医院、妇幼机构及相关合作单位，提供项目介绍和合作联系信息。',
    tone: 'blue' as const,
  },
  {
    tag: '成果展示',
    title: '成果与专题内容',
    description: '集中查看项目成果、新闻内容和专题页面。',
    tone: 'slate' as const,
  },
  {
    tag: '公开资料',
    title: '公开资料服务',
    description: '可查看团队概况、研究方向、成果信息和联系方式。',
    tone: 'muted' as const,
  },
];

const serviceRows = [
  { label: '成果信息', value: '查看软件著作权、项目成果和相关专题内容。' },
  { label: '新闻内容', value: '通过新闻中心了解项目动态和公开报道。' },
  { label: '合作联系', value: '通过官网入口发起合作咨询、项目交流和资料申请。' },
];
</script>

<template>
  <div>
    <PageHero
      badge="成果转化"
      :title="`${siteConfig.brandName}提供成果展示、公开资料与合作交流信息。`"
      description="这里可查看软件著作权、项目介绍、新闻内容和联系入口。"
    />

    <section class="section">
      <div class="container">
        <div v-reveal class="page-section-head">
          <SectionBadge label="转化方向" />
          <h2 class="section-title">集中展示成果内容、公开资料和合作交流信息。</h2>
          <p class="section-description">
            这里集中展示项目成果、公开资料和合作联系信息，方便了解项目内容并开展进一步沟通。
          </p>
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
            <template #icon>{{ index + 1 }}</template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <section class="section section--fit">
      <div class="container fit-layout">
        <div v-reveal>
          <SectionBadge label="服务内容" />
          <h2 class="section-title">提供清晰直接的信息入口，便于查看与联系。</h2>
          <p class="section-description">
            官网聚焦团队介绍、研究方向、成果信息和联系入口，方便合作单位及时了解项目情况。
          </p>
        </div>
        <div v-reveal="'120ms'" class="fit-card">
          <div v-for="item in serviceRows" :key="item.label" class="fit-card__row">
            <strong>{{ item.label }}：</strong>{{ item.value }}
          </div>
          <div class="fit-card__actions">
            <AppButton href="mailto:support@hpvsc.icu">邮件咨询</AppButton>
            <AppButton to="/about" variant="secondary">查看团队概况</AppButton>
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
  border: 1px solid rgba(13, 94, 170, 0.12);
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

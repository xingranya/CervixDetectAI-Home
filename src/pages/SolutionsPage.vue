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
    description: '面向医院、妇幼机构及相关合作单位，提供团队介绍、方向说明和合作沟通服务。',
    tone: 'blue' as const,
  },
  {
    tag: '成果传播',
    title: '专题宣传展示',
    description: '依托新闻中心、专题栏目和成果板块，持续做好团队动态、建设成效和重点成果展示。',
    tone: 'slate' as const,
  },
  {
    tag: '资料支撑',
    title: '公开资料服务',
    description: '围绕团队概况、研究方向、成果信息和联系方式等内容提供稳定、清晰的公开资料支撑。',
    tone: 'muted' as const,
  },
];

const serviceRows = [
  { label: '成果展示', value: '通过官网栏目系统呈现团队研究方向、建设进展和阶段成果。' },
  { label: '品牌传播', value: '依托新闻发布、专题内容与公开资料持续提升团队影响力。' },
  { label: '合作沟通', value: '统一咨询入口，便于开展科研合作、项目交流和资料对接。' },
];
</script>

<template>
  <div>
    <PageHero
      badge="成果转化"
      :title="`${siteConfig.brandName}围绕成果展示、品牌传播与合作交流持续拓展应用服务。`"
      :description="`${siteConfig.brandName}注重${siteConfig.projectName}研究成果的规范展示、公开传播与合作服务，努力推动技术研究、平台建设和应用支撑更好服务于相关场景。`"
    />

    <section class="section">
      <div class="container">
        <div v-reveal class="page-section-head">
          <SectionBadge label="转化方向" />
          <h2 class="section-title">以展示、传播、服务相结合的方式推进成果转化应用。</h2>
          <p class="section-description">
            团队围绕公开展示、专题传播和合作支撑等方向持续完善官网内容与服务体系，重点面向{{ siteConfig.cooperationDirections.join('、') }}等方向增强成果对外表达能力。
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
          <h2 class="section-title">围绕实际交流需求提供清晰、稳定、规范的服务支持。</h2>
          <p class="section-description">
            官网聚焦团队介绍、方向说明、成果展示和咨询服务等内容，方便合作单位及时了解{{ siteConfig.projectName }}建设情况并开展进一步沟通。
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

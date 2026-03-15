<script setup lang="ts">
import CopyrightGrid from '@/components/common/CopyrightGrid.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const milestones = [
  '已形成影像分析、病例管理、报告生成等核心业务链路。',
  '持续完善随访管理、消息提醒、偏好配置与系统管理能力。',
  '通过软件著作权与持续迭代建设，强化平台规范化与可信度。',
];
</script>

<template>
  <div>
    <PageHero
      badge="About"
      title="聚焦宫颈影像智能辅助筛查，持续推进平台化建设。"
      description="项目以医疗机构筛查业务为基础，围绕产品能力、规范管理与长期服务持续完善。"
    />

    <section class="section section-blue-tint">
      <div class="container about-layout">
        <div v-reveal>
          <SectionBadge label="Project DNA" />
          <h2 class="section-title">以平台化方式承接筛查业务需求，服务真实使用场景。</h2>
          <p class="section-description">
            CervixDetectAI 采用前后端一体化架构，围绕影像接入、智能分析、报告输出与后续协同，形成面向医疗机构的数字化支持能力。
          </p>
        </div>
        <div v-reveal="'120ms'" class="about-panel">
          <div class="about-panel__label">Milestones</div>
          <ul class="about-panel__list">
            <li v-for="item in milestones" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-reveal class="about-head">
          <SectionBadge label="IP & Trust" />
          <h2 class="section-title">以统一的知识产权信息与品牌表达，增强平台可信度。</h2>
          <p class="section-description">对外表达只保留真实、稳定、可持续维护的品牌与知识产权信息。</p>
        </div>
        <div class="about-copyrights" v-reveal="'120ms'">
          <CopyrightGrid />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-layout {
  display: grid;
  gap: 28px;
  align-items: start;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
}

.about-panel {
  padding: 32px;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.12);
  background: white;
}

.about-panel__label {
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-panel__list {
  margin: 18px 0 0;
  padding-left: 20px;
  color: var(--muted-foreground);
  line-height: 1.95;
}

.about-head {
  display: grid;
  gap: 10px;
}

.about-copyrights {
  margin-top: 34px;
}

@media (max-width: 1080px) {
  .about-layout {
    grid-template-columns: 1fr;
  }
}
</style>

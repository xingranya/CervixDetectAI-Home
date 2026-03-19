<script setup lang="ts">
import { siteConfig } from '@/config/site';
import { SORTED_SOFTWARE_COPYRIGHTS } from '@brand/softwareCopyrights';
import AppButton from '@/components/common/AppButton.vue';
import CopyrightGrid from '@/components/common/CopyrightGrid.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const overviewItems = [
  {
    title: '团队定位',
    description:
      '围绕宫颈疾病筛查与诊疗相关工作，持续开展智能影像、平台应用和临床服务内容建设。',
  },
  {
    title: '建设重点',
    description:
      '坚持科研与应用并重，持续完善关键技术、平台功能、成果内容和官网展示信息。',
  },
  {
    title: '服务对象',
    description:
      '面向医疗机构、合作单位、科研伙伴与相关用户，提供项目介绍、合作沟通、资料获取和平台入口。',
  },
];

const missionItems = [
  '围绕宫颈筛查与诊疗相关需求开展研究和应用。',
  '持续完善智能影像分析、平台功能与服务内容。',
  '保持公开资料、成果信息和对外沟通内容清晰准确。',
];

const overviewStats = [
  { label: '项目名称', value: siteConfig.projectName },
  { label: '合作方向', value: `${siteConfig.cooperationDirections.length} 个重点方向` },
  { label: '已登记软著', value: `${SORTED_SOFTWARE_COPYRIGHTS.length} 项` },
];
</script>

<template>
  <div>
    <PageHero
      badge="团队概况"
      :title="`${siteConfig.brandName}围绕宫颈智能影像、平台应用与临床服务持续开展项目建设。`"
      :description="`${siteConfig.brandName}围绕${siteConfig.projectName}持续更新研究内容、成果信息、公开资料和服务入口，方便了解项目整体情况。`"
    />

    <section class="section section-blue-tint">
      <div class="container about-layout">
        <div v-reveal class="about-intro">
          <SectionBadge label="团队简介" />
          <h2 class="section-title">围绕宫颈筛查相关工作，持续开展研究、应用与服务。</h2>
          <p class="section-description">
            {{ siteConfig.brandName }}围绕{{ siteConfig.projectName }}持续更新研究方向、平台内容、成果信息和公开资料，
            方便来访者了解项目进展，并围绕{{ siteConfig.cooperationDirections.join('、') }}等方向开展交流。
          </p>
        </div>

        <div v-reveal="'120ms'" class="about-panel">
          <div class="about-panel__label">团队概览</div>
          <div class="about-panel__stats">
            <div v-for="item in overviewStats" :key="item.label" class="about-panel__stat">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
            </div>
          </div>
          <div class="about-panel__subhead">建设理念</div>
          <ul class="about-panel__list">
            <li v-for="item in missionItems" :key="item">{{ item }}</li>
          </ul>
          <div class="about-panel__actions">
            <AppButton :href="siteConfig.loginUrl" target="_blank">进入平台</AppButton>
            <AppButton to="/contact" variant="secondary">联系团队</AppButton>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-grid">
          <article
            v-for="(item, index) in overviewItems"
            :key="item.title"
            v-reveal="`${index * 80}ms`"
            class="about-card"
          >
            <div class="about-card__index">{{ `0${index + 1}` }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-blue-tint">
      <div class="container">
        <div v-reveal class="about-head">
          <SectionBadge label="软件著作权" />
          <h2 class="section-title">已登记的软件著作权与相关成果信息。</h2>
          <p class="section-description">
            已登记的软件著作权覆盖智能阅片、云服务平台与辅助筛查等方向，方便查看项目成果与相关信息。
          </p>
        </div>
        <div class="about-copyrights" v-reveal="'120ms'">
          <CopyrightGrid mode="page" />
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
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.92fr);
}

.about-intro {
  display: grid;
  gap: 10px;
}

.about-panel {
  display: grid;
  gap: 20px;
  padding: 32px;
  border-radius: 20px;
  border: 1px solid rgba(13, 94, 170, 0.12);
  background: white;
  box-shadow: var(--shadow-sm);
}

.about-panel__label {
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.about-panel__stats {
  display: grid;
  gap: 12px;
}

.about-panel__stat {
  display: grid;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(244, 248, 252, 0.9);
}

.about-panel__stat span {
  color: var(--muted-foreground);
  font-size: 0.84rem;
  font-weight: 600;
}

.about-panel__stat strong {
  font-size: 1rem;
  line-height: 1.6;
}

.about-panel__subhead {
  color: var(--foreground);
  font-size: 1rem;
  font-weight: 700;
}

.about-panel__list {
  margin: 0;
  padding-left: 20px;
  color: var(--muted-foreground);
  line-height: 1.95;
}

.about-panel__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.about-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.about-card {
  position: relative;
  padding: 28px 24px;
  border-radius: 18px;
  border: 1px solid rgba(13, 94, 170, 0.1);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 248, 252, 0.96));
  box-shadow: var(--shadow-sm);
}

.about-card__index {
  color: rgba(13, 94, 170, 0.18);
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
}

.about-card h3 {
  margin: 18px 0 0;
  font-size: 1.22rem;
  color: var(--accent);
}

.about-card p {
  margin: 14px 0 0;
  color: var(--muted-foreground);
  line-height: 1.9;
}

.about-head {
  display: grid;
  gap: 10px;
}

.about-copyrights {
  margin-top: 34px;
}

@media (max-width: 1080px) {
  .about-layout,
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>

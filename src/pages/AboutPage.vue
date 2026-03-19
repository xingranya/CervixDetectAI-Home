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
      '围绕宫颈疾病筛查与诊疗场景，持续推进智能影像分析、云端协同应用与临床服务支撑相关建设工作。',
  },
  {
    title: '建设重点',
    description:
      '坚持科研与应用并重，持续推动关键技术研究、平台能力提升和成果规范展示，形成稳定、可信、可持续的对外服务能力。',
  },
  {
    title: '服务对象',
    description:
      '面向医疗机构、合作单位、科研伙伴与相关用户，提供合作沟通、资料服务、平台支撑与成果交流支持。',
  },
];

const missionItems = [
  '坚持以临床需求为导向，服务宫颈疾病筛查与诊疗相关工作。',
  '坚持以技术创新为支撑，持续推进智能影像分析与平台协同建设。',
  '坚持以规范管理为基础，做好成果展示、资料发布与对外交流工作。',
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
      :title="`${siteConfig.brandName}聚焦宫颈智能影像、云端协同与临床应用服务。`"
      :description="`${siteConfig.brandName}围绕${siteConfig.projectName}持续开展研究与服务工作，致力于为宫颈疾病筛查与诊疗相关场景提供可靠支持。`"
    />

    <section class="section section-blue-tint">
      <div class="container about-layout">
        <div v-reveal class="about-intro">
          <SectionBadge label="团队简介" />
          <h2 class="section-title">以科研、平台与临床协同为主线，持续打磨可落地的服务能力。</h2>
          <p class="section-description">
            {{ siteConfig.brandName }}以宫颈疾病筛查场景为基础，围绕{{ siteConfig.projectName }}开展建设工作，
            重点面向{{ siteConfig.cooperationDirections.join('、') }}等方向提供服务支持。
            团队重视科研积累与应用实践相结合，努力推动技术研究、平台建设和服务支撑协同发展。
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
          <SectionBadge label="成果基础" />
          <h2 class="section-title">以知识产权与规范材料支撑团队对外展示与交流合作。</h2>
          <p class="section-description">
            已登记的软件著作权覆盖智能阅片、云服务平台与辅助筛查等核心方向，为官网展示、合作交流与项目说明提供更直观的成果支撑。
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

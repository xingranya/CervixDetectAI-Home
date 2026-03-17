<script setup lang="ts">
import CopyrightGrid from '@/components/common/CopyrightGrid.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const overviewItems = [
  {
    title: '团队定位',
    description:
      '云端智诊团队面向宫颈疾病筛查与诊疗场景，围绕智能影像分析、云端协同应用和临床服务支撑开展研究与建设工作。',
  },
  {
    title: '建设目标',
    description:
      '坚持科研与应用并重，持续推动关键技术研究、平台能力提升和成果规范展示，形成稳定、可信、可持续的团队品牌形象。',
  },
  {
    title: '服务方向',
    description:
      '聚焦科研合作、成果交流、资料服务和平台支撑等方向，为医疗机构、合作伙伴和相关用户提供专业支持。',
  },
];

const missionItems = [
  '坚持以临床需求为导向，服务宫颈疾病筛查与诊疗相关工作。',
  '坚持以技术创新为支撑，持续推进智能影像分析与平台协同建设。',
  '坚持以规范管理为基础，做好成果展示、资料发布与对外交流工作。',
];
</script>

<template>
  <div>
    <PageHero
      badge="团队概况"
      title="云端智诊团队聚焦宫颈智能影像、云端协同与临床应用服务。"
      description="团队围绕宫颈智能影像分析、筛查协同平台建设和成果转化应用持续开展研究与服务工作，致力于为相关场景提供可靠支持。"
    />

    <section class="section section-blue-tint">
      <div class="container about-layout">
        <div v-reveal class="about-intro">
          <SectionBadge label="团队简介" />
          <h2 class="section-title">坚持科研引领、协同创新、服务应用的发展思路。</h2>
          <p class="section-description">
            云端智诊团队以宫颈疾病筛查场景为基础，围绕智能影像识别、云端业务协同、成果规范展示和合作交流服务开展相关工作。
            团队重视科研积累与应用实践相结合，努力推动技术研究、平台建设和服务支撑协同发展。
          </p>
        </div>

        <div v-reveal="'120ms'" class="about-panel">
          <div class="about-panel__label">建设理念</div>
          <ul class="about-panel__list">
            <li v-for="item in missionItems" :key="item">{{ item }}</li>
          </ul>
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
            团队坚持真实、规范、持续更新的原则，对外展示知识产权、建设成果和公开资料，不断提升团队品牌的专业度与辨识度。
          </p>
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
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.92fr);
}

.about-intro {
  display: grid;
  gap: 10px;
}

.about-panel {
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

.about-panel__list {
  margin: 18px 0 0;
  padding-left: 20px;
  color: var(--muted-foreground);
  line-height: 1.95;
}

.about-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.about-card {
  padding: 28px 24px;
  border-radius: 18px;
  border: 1px solid rgba(13, 94, 170, 0.1);
  background: white;
  box-shadow: var(--shadow-sm);
}

.about-card h3 {
  margin: 0;
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

<script setup lang="ts">
import { siteConfig } from '@/config/site';
import { getFeaturedNews } from '@/lib/news';
import AppButton from '@/components/common/AppButton.vue';
import CopyrightGrid from '@/components/common/CopyrightGrid.vue';
import FeatureCard from '@/components/common/FeatureCard.vue';
import HeroVisual from '@/components/common/HeroVisual.vue';
import MetricTile from '@/components/common/MetricTile.vue';
import NewsCard from '@/components/common/NewsCard.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';

const featuredNews = getFeaturedNews(siteConfig.homeFeaturedNewsCount).slice(0, 3);

const capabilityCards = [
  {
    title: '智能影像辅助分析',
    description: '围绕宫颈影像识别、风险分层提示与辅助判断输出，提升筛查效率与结果一致性。',
    tag: 'AI CORE',
    tone: 'blue' as const,
    icon: 'AI',
  },
  {
    title: '病例与患者一体化管理',
    description: '统一管理患者档案、病例记录、历史检查与结果回看，降低信息分散成本。',
    tag: 'CASE FLOW',
    tone: 'slate' as const,
    highlighted: true,
    icon: 'CM',
  },
  {
    title: '结构化报告输出',
    description: '围绕筛查结论、风险提示与关键字段生成结构化报告，便于规范留存与共享。',
    tag: 'REPORT',
    tone: 'muted' as const,
    icon: 'RP',
  },
  {
    title: '报告与随访闭环',
    description: '从分析结果到复查提醒、计划执行与状态回收，保持筛查流程衔接顺畅。',
    tag: 'FOLLOW-UP',
    tone: 'slate' as const,
    icon: 'FU',
  },
  {
    title: '通知联动',
    description: '支持分析完成、高风险提醒与随访通知协同分发，减少关键节点遗漏。',
    tag: 'ALERT',
    tone: 'dark' as const,
    icon: 'NT',
  },
  {
    title: 'AI 引擎与偏好配置',
    description: '支持机构按业务流程维护模型、分析偏好与报告规则，满足不同使用习惯。',
    tag: 'SETTINGS',
    tone: 'slate' as const,
    icon: 'CF',
  },
];

const scenarioCards = [
  {
    title: '基层筛查机构',
    description: '以云端部署和标准化流程降低信息化门槛，帮助基层团队更快建立筛查工作面。',
    tone: 'scenario-card--light',
  },
  {
    title: '妇幼与专科门诊',
    description: '围绕病例归档、报告输出和复查安排提升日常门诊效率，减少流程切换负担。',
    tone: 'scenario-card--light',
  },
  {
    title: '多点协同场景',
    description: '让影像、分析、复核与通知在统一平台内流转，支持多角色协同与结果追踪。',
    tone: 'scenario-card--light',
  },
];
</script>

<template>
  <div class="home-page">
    <section class="section home-hero">
      <div class="container home-hero__grid">
        <div v-reveal class="home-hero__content">
          <SectionBadge label="Clinical AI Platform" pulse />
          <h1 class="headline home-hero__title">
            面向医疗机构的
            <span class="gradient-text">宫颈影像智能辅助筛查平台</span>
          </h1>
          <p class="eyebrow home-hero__description">
            {{ siteConfig.heroSubtitle }}
          </p>
          <div class="home-hero__actions">
            <AppButton href="mailto:support@hpvsc.icu">邮件咨询</AppButton>
            <AppButton :href="siteConfig.loginUrl" variant="ghost">进入系统</AppButton>
          </div>
          <div class="home-hero__facts">
            <article class="home-fact">
              <div class="home-fact__label">交付形态</div>
              <div class="home-fact__value">云端 SaaS + 移动端部署</div>
            </article>
            <article class="home-fact">
              <div class="home-fact__label">目标场景</div>
              <div class="home-fact__value">基层筛查 / 门诊 / 妇幼</div>
            </article>
            <article class="home-fact">
              <div class="home-fact__label">品牌背书</div>
              <div class="home-fact__value">3 项软件著作权</div>
            </article>
          </div>
        </div>

        <div v-reveal="'100ms'">
          <HeroVisual />
        </div>
      </div>
    </section>

    <section class="section metrics-section">
      <div class="container">
        <div v-reveal>
          <SectionBadge label="Platform Data" pulse />
          <h2 class="section-title metrics__title">
            以清晰、稳定、可追踪的流程支持临床筛查工作。
          </h2>
        </div>
        <div v-reveal="'100ms'" class="metrics-grid">
          <MetricTile tone="light" value="99.55%" label="辅助准确率基线" description="面向宫颈筛查场景的核心算法参考表现。" />
          <MetricTile tone="blue" value="3 分钟" label="报告平均周转" description="分析到报告查看的关键链路保持简洁高效。" />
          <MetricTile tone="slate" value="3 项" label="软件著作权" description="持续完善知识产权与品牌可信表达。" />
          <MetricTile tone="dark" value="24h" label="随访提醒可配置" description="覆盖计划提醒与人工协同提醒场景。" />
        </div>
      </div>
    </section>

    <section class="section section--capabilities">
      <div class="container">
        <div v-reveal class="section-header">
          <SectionBadge label="Capabilities" />
          <h2 class="section-title">围绕影像分析、病例管理与结果协同构建完整业务支持链路。</h2>
          <p class="section-description">
            平台围绕医疗机构真实使用流程设计，兼顾筛查效率、结果表达规范性与长期协同管理能力。
          </p>
        </div>
        <div class="capability-grid">
          <FeatureCard
            v-for="(item, index) in capabilityCards"
            :key="item.title"
            v-reveal="`${index * 70}ms`"
            :title="item.title"
            :description="item.description"
            :tag="item.tag"
            :highlighted="item.highlighted"
            :tone="item.tone"
          >
            <template #icon>{{ item.icon }}</template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <section class="section section--scenarios">
      <div class="container scenario-layout">
        <div v-reveal>
          <SectionBadge label="Scenarios" />
          <h2 class="section-title">匹配基层筛查、门诊复查与多点协同等典型应用环境。</h2>
          <p class="section-description">
            从影像采集、结果输出到后续通知与随访安排，平台强调流程清晰、数据统一与机构协同效率。
          </p>
          <div class="scenario-list">
            <article
              v-for="(item, index) in scenarioCards"
              :key="item.title"
              v-reveal="`${index * 80}ms`"
              class="scenario-card"
              :class="item.tone"
            >
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          </div>
        </div>

        <div v-reveal="'120ms'" class="workflow-panel">
          <div class="workflow-panel__label">Workflow Map</div>
          <h3 class="workflow-panel__title">筛查协同主链路</h3>
          <div class="workflow-steps">
            <div>影像采集与病例创建</div>
            <div>AI 分析与风险提示输出</div>
            <div>结构化报告生成与结果管理</div>
            <div>通知联动与随访执行</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--trust" id="trust">
      <div class="container">
        <div v-reveal class="section-header section-header--split">
          <div>
            <SectionBadge label="Trust Layer" />
            <h2 class="section-title">以知识产权、品牌信息与持续迭代构建对外可信表达。</h2>
          </div>
          <div class="trust-note">
            <span>品牌信息统一</span>
            <span>软件著作权展示</span>
            <span>联系口径清晰</span>
          </div>
        </div>
        <div v-reveal="'100ms'" style="margin-top: 34px">
          <CopyrightGrid />
        </div>
      </div>
    </section>

    <section class="section section--news">
      <div class="container">
        <div class="section-header section-header--news" v-reveal>
          <div>
            <SectionBadge label="Newsroom" />
            <h2 class="section-title">持续发布项目进展、产品动态与合作信息。</h2>
          </div>
          <AppButton to="/news" variant="secondary">查看全部新闻</AppButton>
        </div>
        <div class="news-grid">
          <NewsCard
            v-for="(article, index) in featuredNews"
            :key="article.slug"
            v-reveal="`${index * 80}ms`"
            :article="article"
          />
        </div>
      </div>
    </section>

    <section class="section section--contact">
      <div class="container">
        <div v-reveal class="contact-banner">
          <SectionBadge label="Contact" pulse />
          <h2 class="section-title contact-banner__title">
            欢迎就产品能力、部署方式与合作模式进行进一步沟通。
          </h2>
          <p class="section-description contact-banner__description">
            当前官网统一以固定联系方式承接咨询，不接入复杂表单，保证对外信息口径稳定且维护成本可控。
          </p>
          <div class="contact-banner__actions">
            <AppButton href="mailto:support@hpvsc.icu">邮件咨询</AppButton>
            <AppButton to="/contact" variant="ghost">查看联系方式</AppButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-hero {
  padding: 0;
  background: var(--accent);
}

.home-hero__grid {
  display: grid;
  align-items: center;
  gap: clamp(36px, 5vw, 64px);
  grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
  min-height: min(740px, calc(100vh - 88px));
}

.home-hero__content {
  position: relative;
  padding: clamp(72px, 10vw, 112px) 0;
}

.home-hero__content::after {
  content: '';
  position: absolute;
  left: -54px;
  bottom: 28px;
  width: 180px;
  height: 180px;
  background: rgba(255, 255, 255, 0.06);
  transform: rotate(16deg);
}

.home-hero__title,
.home-hero__description,
.home-hero__actions,
.home-hero__facts {
  position: relative;
  z-index: 1;
}

.home-hero__title {
  max-width: 700px;
  margin-top: 24px;
  color: white;
  font-size: clamp(3.1rem, 6vw, 5.35rem);
  line-height: 1;
}

.home-hero__title .gradient-text {
  color: white;
}

.home-hero__description {
  max-width: 560px;
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.05rem;
  line-height: 1.8;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 36px;
}

.home-hero__facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 38px;
}

.home-fact {
  min-height: 124px;
  padding: 18px 18px 20px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.14);
}

.home-fact__label {
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.home-fact__value {
  margin-top: 10px;
  font-size: 0.96rem;
  font-weight: 800;
  line-height: 1.55;
  color: white;
}

.home-hero :deep(.section-badge) {
  background: rgba(255, 255, 255, 0.16);
}

.home-hero :deep(.section-badge__label) {
  color: white;
}

.home-hero :deep(.section-badge__dot) {
  background: white;
}

.home-hero :deep(.app-button--primary) {
  color: var(--accent);
  background: white;
}

.home-hero :deep(.app-button--primary:hover),
.home-hero :deep(.app-button--primary:focus-visible) {
  background: rgba(255, 255, 255, 0.92);
}

.home-hero :deep(.app-button--ghost) {
  color: white;
  border-color: white;
}

.home-hero :deep(.app-button--ghost:hover),
.home-hero :deep(.app-button--ghost:focus-visible) {
  color: var(--accent);
  background: white;
}

.metrics-section {
  background:
    radial-gradient(circle at 14% 18%, rgba(59, 130, 246, 0.08), transparent 16%),
    linear-gradient(180deg, #f7faff 0%, #eef5ff 100%);
}

.metrics__title {
  max-width: 760px;
  color: var(--foreground);
}

.metrics-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 34px;
}

.section--capabilities {
  background:
    radial-gradient(circle at 86% 24%, rgba(59, 130, 246, 0.05), transparent 16%),
    linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
}

.section-header {
  display: grid;
  gap: 10px;
}

.capability-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 34px;
}

.section--scenarios {
  background:
    radial-gradient(circle at 12% 76%, rgba(59, 130, 246, 0.06), transparent 16%),
    linear-gradient(180deg, #f7faff 0%, #eff6ff 100%);
}

.scenario-layout {
  display: grid;
  gap: 24px;
  align-items: start;
  grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.92fr);
}

.scenario-list {
  display: grid;
  gap: 16px;
  margin-top: 28px;
}

.scenario-card {
  padding: 22px 24px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(59, 130, 246, 0.08);
  background: white;
}

.scenario-card h3 {
  margin: 0 0 10px;
  font-size: 1.18rem;
  font-weight: 800;
}

.scenario-card p {
  margin: 0;
  line-height: 1.78;
}

.scenario-card--light {
  background: white;
}

.workflow-panel {
  padding: 28px;
  border: 1px solid rgba(59, 130, 246, 0.14);
  border-radius: calc(var(--radius-lg) + 2px);
  background: var(--dark-soft);
}

.workflow-panel__label {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
}

.workflow-panel__title {
  margin: 16px 0 18px;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: white;
}

.workflow-steps {
  display: grid;
  gap: 12px;
}

.workflow-steps div {
  min-height: 64px;
  padding: 16px 18px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-weight: 700;
  line-height: 1.55;
}

.section--trust {
  background:
    radial-gradient(circle at 84% 18%, rgba(59, 130, 246, 0.05), transparent 16%),
    linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
}

.section-header--split {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
}

.trust-note {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.trust-note span {
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  background: var(--foreground);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
}

.section--news {
  background:
    radial-gradient(circle at 10% 18%, rgba(59, 130, 246, 0.06), transparent 15%),
    linear-gradient(180deg, #f7faff 0%, #eef5ff 100%);
}

.section-header--news {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
}

.news-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 34px;
}

.section--contact {
  background:
    radial-gradient(circle at 88% 20%, rgba(59, 130, 246, 0.05), transparent 16%),
    linear-gradient(180deg, #ffffff 0%, #f6faff 100%);
}

.contact-banner {
  padding: clamp(30px, 5vw, 46px);
  border-radius: 20px;
  background: var(--accent);
}

.contact-banner__title {
  max-width: 760px;
  color: white;
}

.contact-banner__description {
  max-width: 690px;
  color: rgba(255, 255, 255, 0.82);
}

.contact-banner__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.contact-banner :deep(.section-badge) {
  background: rgba(255, 255, 255, 0.18);
}

.contact-banner :deep(.section-badge__label) {
  color: white;
}

.contact-banner :deep(.section-badge__dot) {
  background: white;
}

.contact-banner :deep(.app-button--primary) {
  color: var(--accent);
  background: white;
}

.contact-banner :deep(.app-button--primary:hover),
.contact-banner :deep(.app-button--primary:focus-visible) {
  background: rgba(255, 255, 255, 0.9);
}

.contact-banner :deep(.app-button--ghost) {
  color: white;
  border-color: white;
}

.contact-banner :deep(.app-button--ghost:hover),
.contact-banner :deep(.app-button--ghost:focus-visible) {
  color: var(--accent);
  background: white;
}

@media (max-width: 1120px) {
  .home-hero__grid,
  .scenario-layout,
  .section-header--split,
  .section-header--news {
    grid-template-columns: 1fr;
  }

  .capability-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .news-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 960px) {
  .home-hero__grid {
    min-height: auto;
  }

  .home-hero__facts,
  .metrics-grid,
  .capability-grid {
    grid-template-columns: 1fr;
  }

  .home-hero__title {
    font-size: clamp(2.8rem, 11vw, 4.2rem);
  }

  .home-hero__description {
    font-size: 1rem;
  }
}
</style>

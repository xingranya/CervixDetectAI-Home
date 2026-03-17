<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { siteConfig } from '@/config/site';
import { getFeaturedNews, newsArticles } from '@/lib/news';
import AppButton from '@/components/common/AppButton.vue';
import DateBadgeCard from '@/components/common/DateBadgeCard.vue';
import PortalSectionHeading from '@/components/common/PortalSectionHeading.vue';
import QuickEntryCard from '@/components/common/QuickEntryCard.vue';
import AnimatedCounter from '@/components/common/AnimatedCounter.vue';

const { heroSlides, overviewCard, researchUpdates, notices, topicColumns, quickLinks, servicePanel, metrics } =
  siteConfig.home;

const featuredNews = getFeaturedNews(siteConfig.homeFeaturedNewsCount);
const headlineNews = featuredNews.length > 0 ? featuredNews : newsArticles.slice(0, 2);
const newsList = newsArticles.slice(0, 6);
const heroShortcuts = quickLinks.slice(0, 4);

const newsIndex = ref(0);
const heroIndex = ref(0);
const infoTab = ref<'research' | 'notice'>('research');

const metricsList = [
  { key: 'accuracy', value: metrics.accuracy.value, suffix: metrics.accuracy.suffix, label: metrics.accuracy.label },
  { key: 'hospitals', value: metrics.hospitals.value, suffix: metrics.hospitals.suffix, label: metrics.hospitals.label },
  { key: 'cases', value: metrics.cases.value, suffix: metrics.cases.suffix, label: metrics.cases.label },
  { key: 'detection', value: metrics.detection.value, suffix: metrics.detection.suffix, label: metrics.detection.label, decimals: 1 },
];

let heroTimer: ReturnType<typeof setInterval> | undefined;
let newsTimer: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  heroTimer = setInterval(() => {
    heroIndex.value = (heroIndex.value + 1) % heroSlides.length;
  }, 5200);

  if (headlineNews.length > 1) {
    newsTimer = setInterval(() => {
      newsIndex.value = (newsIndex.value + 1) % headlineNews.length;
    }, 4800);
  }
});

onUnmounted(() => {
  if (heroTimer) {
    clearInterval(heroTimer);
  }

  if (newsTimer) {
    clearInterval(newsTimer);
  }
});
</script>

<template>
  <div class="home-page">
    <section class="portal-hero">
      <div
        v-for="(slide, index) in heroSlides"
        :key="slide.title"
        class="portal-hero__slide"
        :class="{ 'is-active': index === heroIndex }"
      >
        <div class="portal-hero__overlay"></div>
      </div>

      <div class="container portal-hero__inner">
        <div class="portal-hero__content" v-reveal>
          <div class="portal-hero__eyebrow">
            <span class="portal-hero__eyebrow-tag">Official Portal</span>
            <span>{{ siteConfig.projectName }}</span>
          </div>
          <div class="portal-hero__heading">
            <p class="portal-hero__positioning">{{ heroSlides[heroIndex]?.positioning }}</p>
            <h1 class="portal-hero__title">{{ heroSlides[heroIndex]?.title }}</h1>
            <p class="portal-hero__description">{{ heroSlides[heroIndex]?.description }}</p>
          </div>
          <div class="portal-hero__actions">
            <AppButton to="/about">查看团队概况</AppButton>
            <AppButton to="/news" variant="secondary">进入新闻中心</AppButton>
          </div>
          <div class="portal-hero__shortcut-rail">
            <RouterLink
              v-for="item in heroShortcuts"
              :key="item.label"
              :to="item.to"
              class="portal-hero__shortcut"
            >
              <span class="portal-hero__shortcut-label">{{ item.label }}</span>
              <span class="portal-hero__shortcut-text">{{ item.description }}</span>
            </RouterLink>
          </div>
          <div class="portal-hero__meta">
            <span v-for="tag in heroSlides[heroIndex]?.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>

        <aside class="portal-hero__overview" v-reveal="'120ms'">
          <div class="portal-hero__overview-label">{{ overviewCard.label }}</div>
          <h2 class="portal-hero__overview-title">{{ overviewCard.title }}</h2>
          <div class="portal-hero__overview-grid">
            <div v-for="item in overviewCard.items" :key="item.label" class="portal-hero__overview-item">
              <div class="portal-hero__overview-key">{{ item.label }}</div>
              <div class="portal-hero__overview-value">{{ item.value }}</div>
            </div>
          </div>
          <div class="portal-hero__overview-footer">
            <span v-for="item in overviewCard.footer" :key="item">{{ item }}</span>
          </div>
        </aside>
      </div>

      <div class="container portal-hero__controller">
        <div class="portal-hero__controller-title" aria-hidden="true">首页焦点轮播</div>
        <div class="portal-hero__dots" aria-label="首页轮播切换">
          <button
            v-for="(slide, index) in heroSlides"
            :key="slide.title"
            type="button"
            class="portal-hero__dot"
            :class="{ 'is-active': index === heroIndex }"
            @click="heroIndex = index"
          >
            <span class="portal-hero__dot-index">0{{ index + 1 }}</span>
            <span class="portal-hero__dot-title">{{ slide.title }}</span>
          </button>
        </div>
      </div>
    </section>

    <section class="section section--news">
      <div class="container">
        <PortalSectionHeading
          title="项目动态"
          english-label="Project Updates"
          description="集中发布项目建设进展、阶段成果与公开信息，强化首页主次分明的门户动态结构。"
          v-reveal
        >
          <template #action>
            <AppButton to="/news" variant="secondary">查看更多</AppButton>
          </template>
        </PortalSectionHeading>

        <div class="news-layout">
          <article class="news-feature" v-reveal>
            <div
              v-for="(article, index) in headlineNews"
              :key="article.slug"
              class="news-feature__slide"
              :class="{ 'is-active': index === newsIndex }"
            >
              <div class="news-feature__cover" :style="{ backgroundImage: `url(${article.cover})` }"></div>
              <div class="news-feature__mask"></div>
              <div class="news-feature__content">
                <div class="news-feature__kicker">焦点发布</div>
                <div class="news-feature__meta-row">
                  <span class="news-feature__date">{{ article.publishedAt }}</span>
                  <span>{{ article.category }}</span>
                </div>
                <RouterLink :to="`/news/${article.slug}`" class="news-feature__title">
                  {{ article.title }}
                </RouterLink>
                <p class="news-feature__summary">{{ article.excerpt }}</p>
                <div class="news-feature__actions">
                  <AppButton :to="`/news/${article.slug}`">阅读全文</AppButton>
                </div>
              </div>
            </div>

            <div class="news-feature__indicators">
              <button
                v-for="(article, index) in headlineNews"
                :key="article.slug"
                type="button"
                class="news-feature__indicator"
                :class="{ 'is-active': index === newsIndex }"
                @click="newsIndex = index"
              >
                <span class="news-feature__indicator-date">{{ article.publishedAt }}</span>
                <span class="news-feature__indicator-title">{{ article.title }}</span>
              </button>
            </div>
          </article>

          <aside class="news-list-panel" v-reveal="'120ms'">
            <div class="news-list-panel__head">
              <div>
                <div class="news-list-panel__label">更新列表</div>
                <h3 class="news-list-panel__title">最新发布</h3>
              </div>
              <RouterLink to="/news" class="news-list-panel__more">全部动态</RouterLink>
            </div>
            <div class="news-list">
              <RouterLink
                v-for="article in newsList"
                :key="article.slug"
                :to="`/news/${article.slug}`"
                class="news-list__item"
              >
                <div class="news-list__date">
                  <strong>{{ article.publishedAt.slice(-2) }}</strong>
                  <span>{{ article.publishedAt.slice(0, 7) }}</span>
                </div>
                <div class="news-list__body">
                  <div class="news-list__category">{{ article.category }}</div>
                  <div class="news-list__text">{{ article.title }}</div>
                </div>
                <span class="news-list__arrow" aria-hidden="true">↗</span>
              </RouterLink>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section section--tab-board">
      <div class="container">
        <PortalSectionHeading
          title="研究动态与通知公告"
          english-label="Research & Bulletin"
          description="以更紧凑的门户信息模块呈现阶段性进展与通知公告，统一日期徽标、悬停态与阅读反馈。"
          v-reveal
        >
          <template #action>
            <div class="tab-switch" role="tablist" aria-label="研究动态与通知公告切换">
              <button
                type="button"
                role="tab"
                :aria-selected="infoTab === 'research'"
                aria-controls="panel-research"
                id="tab-research"
                class="tab-switch__button"
                :class="{ 'is-active': infoTab === 'research' }"
                @click="infoTab = 'research'"
              >
                研究动态
              </button>
              <button
                type="button"
                role="tab"
                :aria-selected="infoTab === 'notice'"
                aria-controls="panel-notice"
                id="tab-notice"
                class="tab-switch__button"
                :class="{ 'is-active': infoTab === 'notice' }"
                @click="infoTab = 'notice'"
              >
                通知公告
              </button>
            </div>
          </template>
        </PortalSectionHeading>

        <div
          role="tabpanel"
          id="panel-research"
          aria-labelledby="tab-research"
          :hidden="infoTab !== 'research'"
        >
          <div class="tab-board__grid">
            <DateBadgeCard
              v-for="item in researchUpdates"
              :key="item.title"
              v-reveal
              :day="item.day"
              :month="item.month"
              :title="item.title"
              :to="'/news'"
            />
          </div>
        </div>
        <div
          role="tabpanel"
          id="panel-notice"
          aria-labelledby="tab-notice"
          :hidden="infoTab !== 'notice'"
        >
          <div class="tab-board__grid">
            <DateBadgeCard
              v-for="item in notices"
              :key="item.title"
              v-reveal
              :day="item.day"
              :month="item.month"
              :title="item.title"
              :to="'/news'"
              variant="notice"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section section--metrics">
      <div class="container">
        <PortalSectionHeading
          title="核心数据指标"
          english-label="Key Metrics"
          description="项目持续积累筛查数据，不断优化算法模型，为临床诊断提供可靠的技术支持。"
          v-reveal
        />

        <div class="metrics-grid" v-reveal>
          <div
            v-for="item in metricsList"
            :key="item.key"
            class="metric-card"
          >
            <div class="metric-card__value">
              <AnimatedCounter
                :value="item.value"
                :suffix="item.suffix"
                :decimals="item.decimals || 0"
              />
            </div>
            <div class="metric-card__label">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--capabilities">
      <div class="container">
        <PortalSectionHeading
          title="能力矩阵"
          english-label="Capability Matrix"
          description="围绕智能影像、云端协同、成果信息与资料服务构建专题入口，让首页栏目更接近正式机构门户。"
          v-reveal
        />

        <div class="columns-layout">
          <div class="columns-grid" v-reveal>
            <RouterLink v-for="item in topicColumns" :key="item.title" :to="item.to" class="column-card">
              <div class="column-card__kicker">{{ item.kicker }}</div>
              <h3 class="column-card__title">{{ item.title }}</h3>
              <p class="column-card__description">{{ item.description }}</p>
              <span class="column-card__more">进入栏目</span>
            </RouterLink>
          </div>

          <aside class="service-board" v-reveal="'120ms'">
            <div class="service-board__label">{{ servicePanel.title }}</div>
            <h3 class="service-board__title">{{ siteConfig.projectName }}</h3>
            <p class="service-board__description">{{ servicePanel.description }}</p>
            <div class="service-board__directions">
              <span v-for="item in siteConfig.cooperationDirections" :key="item">{{ item }}</span>
            </div>
            <div class="service-board__actions">
              <AppButton
                v-if="servicePanel.primaryAction.href"
                :href="servicePanel.primaryAction.href"
                :variant="servicePanel.primaryAction.variant"
              >
                {{ servicePanel.primaryAction.label }}
              </AppButton>
              <AppButton
                v-else-if="servicePanel.primaryAction.to"
                :to="servicePanel.primaryAction.to"
                :variant="servicePanel.primaryAction.variant"
              >
                {{ servicePanel.primaryAction.label }}
              </AppButton>

              <AppButton
                v-if="servicePanel.secondaryAction.href"
                :href="servicePanel.secondaryAction.href"
                :variant="servicePanel.secondaryAction.variant"
              >
                {{ servicePanel.secondaryAction.label }}
              </AppButton>
              <AppButton
                v-else-if="servicePanel.secondaryAction.to"
                :to="servicePanel.secondaryAction.to"
                :variant="servicePanel.secondaryAction.variant"
              >
                {{ servicePanel.secondaryAction.label }}
              </AppButton>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section section--quick-links">
      <div class="container">
        <PortalSectionHeading
          title="服务入口"
          english-label="Service Access"
          description="统一入口矩阵承接概览、研究、成果、动态与联系服务，增强首页导向性与识别度。"
          v-reveal
        />

        <div class="quick-links-grid">
          <QuickEntryCard
            v-for="item in quickLinks"
            :key="item.label"
            v-reveal
            :label="item.label"
            :short-label="item.shortLabel"
            :description="item.description"
            :to="item.to"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(244, 248, 252, 0.72) 100%);
}

.portal-hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 82% 18%, rgba(255, 214, 128, 0.16), transparent 16%),
    radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.12), transparent 26%),
    linear-gradient(135deg, #8e0d18 0%, #b2181f 34%, #9a1420 100%);
}

.portal-hero::before,
.portal-hero::after {
  content: '';
  position: absolute;
  inset: auto;
  pointer-events: none;
}

.portal-hero::before {
  right: -80px;
  bottom: 60px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.5;
}

.portal-hero::after {
  left: 10%;
  top: 120px;
  width: 280px;
  height: 280px;
  background:
    radial-gradient(circle, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px);
  background-size: 16px 16px;
  opacity: 0.3;
}

.portal-hero__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.8s var(--ease-smooth);
  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.06) 0 22%, transparent 22% 100%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 38%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent 70%);
}

.portal-hero__slide.is-active {
  opacity: 1;
}

.portal-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.04) 0 1px, transparent 1px);
  background-size: 84px 84px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.52), transparent 88%);
}

.portal-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 42px;
  align-items: center;
  grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
  min-height: 760px;
  padding: 92px 0 96px;
}

.portal-hero__content {
  display: grid;
  gap: 30px;
}

.portal-hero__eyebrow {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.94);
  font-size: 0.96rem;
  font-weight: 700;
}

.portal-hero__eyebrow-tag {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.portal-hero__heading {
  display: grid;
  gap: 18px;
}

.portal-hero__positioning {
  margin: 0;
  color: rgba(255, 228, 197, 0.88);
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.portal-hero__title {
  max-width: 920px;
  margin: 0;
  color: white;
  font-family: var(--font-display);
  font-size: clamp(3.1rem, 4.8vw, 5.2rem);
  font-weight: 700;
  line-height: 1.18;
}

.portal-hero__description {
  max-width: 760px;
  margin: 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: 1.04rem;
  line-height: 1.92;
}

.portal-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.portal-hero__shortcut-rail {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.portal-hero__shortcut {
  display: grid;
  gap: 8px;
  padding: 18px 20px;
  border-radius: var(--card-radius-md);
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 18px 34px rgba(41, 7, 15, 0.12);
  transition:
    transform 0.2s var(--ease-smooth),
    background-color 0.2s var(--ease-smooth),
    border-color 0.2s var(--ease-smooth);
}

.portal-hero__shortcut:hover,
.portal-hero__shortcut:focus-visible {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.3);
  outline: none;
}

.portal-hero__shortcut-label {
  color: white;
  font-size: 0.98rem;
  font-weight: 700;
}

.portal-hero__shortcut-text {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.9rem;
  line-height: 1.72;
}

.portal-hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.portal-hero__meta span,
.portal-hero__overview-footer span,
.service-board__directions span {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-size: 0.9rem;
}

.portal-hero__overview {
  position: relative;
  padding: 34px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background:
    linear-gradient(180deg, rgba(122, 14, 18, 0.42), rgba(72, 9, 18, 0.28)),
    rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px) saturate(140%);
  -webkit-backdrop-filter: blur(30px) saturate(140%);
  box-shadow:
    0 28px 60px rgba(73, 11, 18, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
}

.portal-hero__overview::after {
  content: '';
  position: absolute;
  right: 24px;
  top: 24px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.portal-hero__overview::before {
  content: '';
  position: absolute;
  left: 18px;
  right: 18px;
  top: 18px;
  bottom: 18px;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  opacity: 0.9;
  pointer-events: none;
}

.portal-hero__overview-label {
  position: relative;
  z-index: 1;
  color: rgba(255, 228, 197, 0.88);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.portal-hero__overview-title {
  position: relative;
  z-index: 1;
  margin: 18px 0 0;
  color: white;
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1.34;
}

.portal-hero__overview-grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 14px;
  margin-top: 24px;
}

.portal-hero__overview-item {
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.portal-hero__overview-key {
  color: rgba(255, 225, 199, 0.82);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.portal-hero__overview-value {
  margin-top: 8px;
  color: white;
  line-height: 1.8;
}

.portal-hero__overview-footer {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.portal-hero__controller {
  position: relative;
  z-index: 1;
  padding-bottom: 38px;
}

.portal-hero__controller-title {
  color: rgba(255, 228, 197, 0.88);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.portal-hero__dots {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 16px;
}

.portal-hero__dot {
  display: grid;
  gap: 8px;
  min-height: 88px;
  padding: 18px 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  color: rgba(255, 255, 255, 0.72);
  text-align: left;
  transition:
    background-color 0.2s var(--ease-smooth),
    border-color 0.2s var(--ease-smooth),
    color 0.2s var(--ease-smooth);
}

.portal-hero__dot:hover,
.portal-hero__dot.is-active {
  border-color: rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.18);
  color: white;
}

.portal-hero__dot-index {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.portal-hero__dot-title {
  font-size: 0.96rem;
  line-height: 1.6;
}

.section--news {
  background:
    linear-gradient(180deg, #fbfdff 0%, #f4f8fc 100%);
}

.news-layout {
  display: grid;
  gap: 30px;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
  margin-top: 30px;
}

.news-feature {
  position: relative;
  min-height: 540px;
  overflow: hidden;
  border-radius: var(--card-radius-xl);
  box-shadow: var(--shadow-lg);
}

.news-feature__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.45s var(--ease-smooth);
}

.news-feature__slide.is-active {
  opacity: 1;
}

.news-feature__cover,
.news-feature__mask {
  position: absolute;
  inset: 0;
}

.news-feature__cover {
  background-position: center;
  background-size: cover;
  transform: scale(1.02);
}

.news-feature__mask {
  background:
    linear-gradient(180deg, rgba(7, 17, 31, 0.08), rgba(7, 17, 31, 0.82)),
    linear-gradient(90deg, rgba(142, 13, 24, 0.26), transparent 44%);
}

.news-feature__content {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: grid;
  align-content: end;
  gap: 14px;
  min-height: 100%;
  padding: 34px 340px 38px 34px;
  color: white;
}

.news-feature__kicker {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  width: fit-content;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.news-feature__meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.88rem;
}

.news-feature__date {
  color: rgba(255, 226, 196, 0.92);
}

.news-feature__title {
  max-width: 100%;
  color: white;
  font-size: clamp(1.72rem, 2.2vw, 2.26rem);
  font-weight: 800;
  line-height: 1.36;
}

.news-feature__summary {
  max-width: 100%;
  margin: 0;
  color: rgba(255, 255, 255, 0.84);
  line-height: 1.82;
}

.news-feature__actions {
  margin-top: 4px;
}

.news-feature__indicators {
  position: absolute;
  top: 28px;
  right: 24px;
  bottom: 28px;
  z-index: 2;
  display: grid;
  gap: 10px;
  width: 280px;
  align-content: end;
}

.news-feature__indicator {
  display: grid;
  gap: 6px;
  padding: 14px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  color: rgba(255, 255, 255, 0.72);
  text-align: left;
  transition:
    background-color 0.2s var(--ease-smooth),
    border-color 0.2s var(--ease-smooth),
    color 0.2s var(--ease-smooth);
}

.news-feature__indicator.is-active {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.16);
  color: white;
}

.news-feature__indicator-date {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}

.news-feature__indicator-title {
  display: -webkit-box;
  overflow: hidden;
  font-size: 0.9rem;
  line-height: 1.62;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

@media (min-width: 1181px) {
  .news-feature {
    min-height: 610px;
  }
}

.news-list-panel {
  padding: 30px;
  border-radius: var(--card-radius-xl);
  border: 1px solid var(--card-border-strong);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(248, 251, 255, 0.84));
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: var(--shadow-md);
}

.news-list-panel__head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 14px;
}

.news-list-panel__label {
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.news-list-panel__title {
  margin: 12px 0 0;
  font-size: 1.72rem;
  font-weight: 800;
  line-height: 1.2;
}

.news-list-panel__more {
  color: var(--muted-foreground);
  font-size: 0.94rem;
  font-weight: 700;
}

.news-list {
  display: grid;
  gap: 14px;
  margin-top: 22px;
}

.news-list__item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px dashed rgba(13, 94, 170, 0.12);
  transition: transform 0.2s var(--ease-smooth);
}

.news-list__item:hover,
.news-list__item:focus-visible {
  transform: translateX(3px);
  outline: none;
}

.news-list__date {
  width: 64px;
  padding: 10px 8px;
  border-radius: 16px;
  background: var(--surface-blue);
  text-align: center;
}

.news-list__date strong {
  display: block;
  color: var(--accent);
  font-size: 1.34rem;
  line-height: 1;
}

.news-list__date span {
  display: block;
  margin-top: 8px;
  color: var(--muted-foreground);
  font-size: 0.74rem;
  font-weight: 700;
}

.news-list__category {
  color: var(--secondary);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.news-list__text {
  margin-top: 8px;
  color: var(--foreground);
  line-height: 1.72;
}

.news-list__arrow {
  color: var(--accent);
  font-size: 1rem;
}

.section--tab-board {
  background:
    linear-gradient(180deg, #f2f6fa 0%, #edf3f8 100%);
}

.tab-switch {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px;
  border-radius: 999px;
  background: rgba(13, 94, 170, 0.06);
}

.tab-switch__button {
  min-height: 44px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: #66788d;
  font-weight: 700;
  transition:
    background-color 0.2s var(--ease-smooth),
    color 0.2s var(--ease-smooth),
    box-shadow 0.2s var(--ease-smooth);
}

.tab-switch__button.is-active {
  background: white;
  color: var(--accent);
  box-shadow: var(--shadow-sm);
}

.tab-board__grid {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 34px;
}

.section--metrics {
  background:
    linear-gradient(180deg, #fbfdff 0%, #f4f8fc 100%);
  padding: 64px 0;
}

.metrics-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 42px;
}

.metric-card {
  display: grid;
  gap: 14px;
  padding: 32px 24px;
  border-radius: var(--card-radius-xl);
  border: 1px solid rgba(59, 130, 246, 0.14);
  background: white;
  box-shadow: var(--shadow-md);
  text-align: center;
  transition:
    transform 0.22s var(--ease-smooth),
    box-shadow 0.22s var(--ease-smooth);
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.metric-card__value {
  font-family: var(--font-display);
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1;
  color: var(--accent);
  letter-spacing: -0.03em;
}

.metric-card__label {
  color: var(--muted-foreground);
  font-size: 0.96rem;
  font-weight: 600;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .section--metrics {
    padding: 48px 0;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
    margin-top: 28px;
  }

  .metric-card {
    padding: 24px 20px;
  }

  .metric-card__value {
    font-size: 2.2rem;
  }
}

.section--capabilities {
  background: white;
}

.columns-layout {
  display: grid;
  gap: 30px;
  grid-template-columns: minmax(0, 1.08fr) minmax(330px, 0.92fr);
  margin-top: 34px;
}

.columns-grid {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.column-card {
  display: grid;
  gap: 16px;
  min-height: 236px;
  padding: 26px;
  border-radius: var(--card-radius-xl);
  border: 1px solid rgba(13, 94, 170, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(243, 248, 253, 0.96));
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.22s var(--ease-smooth),
    border-color 0.22s var(--ease-smooth),
    box-shadow 0.22s var(--ease-smooth);
}

.column-card:hover,
.column-card:focus-visible {
  transform: translateY(-4px);
  border-color: rgba(13, 94, 170, 0.24);
  box-shadow: var(--shadow-md);
  outline: none;
}

.column-card__kicker {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.column-card__title {
  margin: 0;
  font-size: 1.32rem;
  font-weight: 800;
  line-height: 1.3;
}

.column-card__description {
  margin: 0;
  color: var(--muted-foreground);
  line-height: 1.84;
}

.column-card__more {
  align-self: end;
  color: var(--secondary);
  font-weight: 700;
}

.service-board {
  display: grid;
  gap: 20px;
  padding: 32px;
  border-radius: var(--card-radius-xl);
  border: 1px solid rgba(181, 40, 47, 0.14);
  background:
    linear-gradient(180deg, rgba(255, 247, 247, 0.86), rgba(255, 255, 255, 0.82));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--shadow-md);
}

.service-board__label {
  color: var(--secondary);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.service-board__title {
  margin: 0;
  color: var(--foreground);
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1.38;
}

.service-board__description {
  margin: 0;
  color: var(--muted-foreground);
  line-height: 1.92;
}

.service-board__directions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.service-board__directions span {
  border-color: rgba(181, 40, 47, 0.12);
  background: rgba(181, 40, 47, 0.06);
  color: var(--secondary);
}

.service-board__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.section--quick-links {
  background:
    linear-gradient(180deg, #fbfdff 0%, #f3f7fb 100%);
}

.quick-links-grid {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 34px;
}

@media (max-width: 1180px) {
  .portal-hero__inner,
  .news-layout,
  .columns-layout {
    grid-template-columns: 1fr;
  }

  .portal-hero__dots {
    grid-template-columns: 1fr;
  }

  .portal-hero__controller {
    padding-bottom: 28px;
  }

  .news-feature__indicators {
    position: static;
    width: auto;
    padding: 20px 22px 22px;
    background: rgba(7, 17, 31, 0.88);
  }
}

@media (max-width: 1024px) {
  .portal-hero__inner {
    min-height: auto;
    padding: 74px 0 78px;
  }

  .tab-board__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .columns-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .portal-hero__title {
    font-size: clamp(2.4rem, 10vw, 3.6rem);
  }

  .portal-hero__shortcut-rail {
    grid-template-columns: 1fr;
  }

  .portal-hero__overview,
  .news-list-panel,
  .service-board {
    padding: 24px;
  }

  .news-feature {
    min-height: 460px;
  }

  .news-feature__content {
    padding: 24px;
  }

  .tab-board__grid,
  .quick-links-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .portal-hero__inner {
    padding: 62px 0 64px;
  }

  .portal-hero__content {
    gap: 20px;
  }

  .portal-hero__title {
    font-size: clamp(2rem, 11vw, 3rem);
  }

  .portal-hero__description,
  .service-board__description {
    font-size: 0.96rem;
  }

  .news-feature {
    min-height: 420px;
  }

  .news-feature__title {
    font-size: 1.5rem;
  }

  .news-list__item {
    grid-template-columns: auto 1fr;
    align-items: start;
  }

  .news-list__arrow {
    display: none;
  }
}
</style>

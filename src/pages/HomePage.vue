<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { siteConfig } from '@/config/site';
import { getFeaturedNews, newsArticles } from '@/lib/news';
import AppButton from '@/components/common/AppButton.vue';
import DateBadgeCard from '@/components/common/DateBadgeCard.vue';
import PortalSectionHeading from '@/components/common/PortalSectionHeading.vue';
import QuickEntryCard from '@/components/common/QuickEntryCard.vue';
import AnimatedCounter from '@/components/common/AnimatedCounter.vue';
import CopyrightGrid from '@/components/common/CopyrightGrid.vue';

const { heroSlides, researchUpdates, notices, topicColumns, quickLinks, servicePanel, metrics } =
  siteConfig.home;

const featuredNews = getFeaturedNews(siteConfig.homeFeaturedNewsCount);
const headlineNews = featuredNews.length > 0 ? featuredNews : newsArticles.slice(0, 2);
const newsList = newsArticles.slice(0, 6);
const heroShortcuts = quickLinks
  .filter((item): item is (typeof quickLinks)[number] & { to: string } => Boolean(item.to))
  .slice(0, 4);

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

        <aside class="portal-hero__aside" v-reveal="'120ms'">
          <div class="portal-hero__visual">
            <div
              v-for="(slide, index) in heroSlides"
              :key="slide.image"
              class="portal-hero__visual-slide"
              :class="{ 'is-active': index === heroIndex }"
            >
              <img :src="slide.image" :alt="slide.title" class="portal-hero__visual-image" />
              <div class="portal-hero__visual-mask"></div>
              <div class="portal-hero__visual-copy">
                <span class="portal-hero__visual-kicker">场景轮播</span>
                <strong>{{ slide.title }}</strong>
              </div>
            </div>
            <div class="portal-hero__visual-dots" aria-label="首页轮播切换">
              <button
                v-for="(slide, index) in heroSlides"
                :key="`visual-${slide.title}`"
                type="button"
                class="portal-hero__visual-dot"
                :class="{ 'is-active': index === heroIndex }"
                :aria-label="`切换到第 ${index + 1} 张轮播图`"
                @click="heroIndex = index"
              ></button>
            </div>
          </div>
        </aside>
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

    <section class="section section--copyrights">
      <div class="container">
        <PortalSectionHeading
          title="软件著作权"
          english-label="Software Copyright"
          description="已完成登记的软件著作权成果集中展示，作为项目能力建设与成果沉淀的重要支撑。"
          v-reveal
        >
          <template #action>
            <AppButton to="/about" variant="secondary">查看团队概况</AppButton>
          </template>
        </PortalSectionHeading>

        <div class="copyright-showcase" v-reveal="'120ms'">
          <CopyrightGrid mode="home" />
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
            :href="item.href"
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
    radial-gradient(circle at 84% 14%, rgba(13, 94, 170, 0.12), transparent 20%),
    radial-gradient(circle at 10% 10%, rgba(181, 40, 47, 0.08), transparent 14%),
    linear-gradient(180deg, #f7fbff 0%, #eef5fb 100%);
}

.portal-hero::before,
.portal-hero::after {
  content: '';
  position: absolute;
  inset: auto;
  pointer-events: none;
}

.portal-hero::before {
  right: -120px;
  top: 70px;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(13, 94, 170, 0.08), transparent 68%);
  opacity: 0.8;
}

.portal-hero::after {
  left: -40px;
  bottom: 40px;
  width: 220px;
  height: 220px;
  border-radius: 28px;
  background:
    linear-gradient(90deg, rgba(13, 94, 170, 0.06) 0 1px, transparent 1px),
    linear-gradient(rgba(13, 94, 170, 0.06) 0 1px, transparent 1px);
  background-size: 18px 18px;
  opacity: 0.45;
}

.portal-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 42px;
  align-items: center;
  grid-template-columns: minmax(0, 1fr) minmax(520px, 0.98fr);
  padding: 76px 0 72px;
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
  color: var(--accent);
  font-size: 0.96rem;
  font-weight: 700;
}

.portal-hero__eyebrow-tag {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  background: rgba(181, 40, 47, 0.08);
  color: var(--secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.portal-hero__heading {
  display: grid;
  gap: 18px;
}

.portal-hero__positioning {
  margin: 0;
  color: var(--accent);
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.portal-hero__title {
  max-width: 920px;
  margin: 0;
  color: var(--foreground);
  font-family: var(--font-display);
  font-size: clamp(3.1rem, 4.8vw, 5.2rem);
  font-weight: 700;
  line-height: 1.18;
}

.portal-hero__description {
  max-width: 760px;
  margin: 0;
  color: var(--muted-foreground);
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
  border: 1px solid rgba(13, 94, 170, 0.12);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.2s var(--ease-smooth),
    background-color 0.2s var(--ease-smooth),
    border-color 0.2s var(--ease-smooth);
}

.portal-hero__shortcut:hover,
.portal-hero__shortcut:focus-visible {
  transform: translateY(-2px);
  background: white;
  border-color: rgba(13, 94, 170, 0.2);
  outline: none;
}

.portal-hero__shortcut-label {
  color: var(--foreground);
  font-size: 0.98rem;
  font-weight: 700;
}

.portal-hero__shortcut-text {
  color: var(--muted-foreground);
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
  border: 1px solid rgba(13, 94, 170, 0.12);
  background: rgba(255, 255, 255, 0.82);
  color: var(--foreground);
  font-size: 0.9rem;
}

.portal-hero__aside {
  display: flex;
  justify-content: flex-end;
}

.portal-hero__visual {
  position: relative;
  width: min(100%, 620px);
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 32px;
  border: 1px solid rgba(13, 94, 170, 0.12);
  background:
    linear-gradient(135deg, rgba(13, 94, 170, 0.08), rgba(181, 40, 47, 0.06)),
    white;
  box-shadow: var(--shadow-lg);
}

.portal-hero__visual-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(1.03);
  transition:
    opacity 0.55s var(--ease-smooth),
    transform 4.8s var(--ease-smooth);
}

.portal-hero__visual-slide.is-active {
  opacity: 1;
  transform: scale(1);
}

.portal-hero__visual-image,
.portal-hero__visual-mask {
  position: absolute;
  inset: 0;
}

.portal-hero__visual-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.portal-hero__visual-mask {
  background:
    linear-gradient(180deg, rgba(10, 24, 40, 0.06), rgba(10, 24, 40, 0.22)),
    linear-gradient(135deg, rgba(7, 17, 31, 0) 42%, rgba(7, 17, 31, 0.42) 100%);
}

.portal-hero__visual-copy {
  position: absolute;
  right: 18px;
  bottom: 18px;
  left: 18px;
  z-index: 1;
  display: grid;
  gap: 10px;
  padding: 16px 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.84);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: var(--shadow-md);
}

.portal-hero__visual-kicker {
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.portal-hero__visual-copy strong {
  color: var(--foreground);
  font-size: 1.06rem;
  line-height: 1.55;
}

.portal-hero__visual-dots {
  position: absolute;
  right: 18px;
  bottom: 122px;
  z-index: 1;
  display: flex;
  gap: 8px;
}

.portal-hero__visual-dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.52);
  box-shadow: 0 0 0 1px rgba(7, 17, 31, 0.08);
  transition:
    transform 0.2s var(--ease-smooth),
    background-color 0.2s var(--ease-smooth),
    width 0.2s var(--ease-smooth);
}

.portal-hero__visual-dot.is-active {
  width: 24px;
  background: white;
}

.portal-hero__visual-dot:hover {
  transform: scale(1.08);
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

.section--copyrights {
  background:
    linear-gradient(180deg, #ffffff 0%, #f6fafe 100%);
}

.copyright-showcase {
  margin-top: 34px;
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

  .portal-hero__aside {
    justify-content: center;
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
    padding: 68px 0 64px;
  }

  .portal-hero__visual {
    width: min(100%, 640px);
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

  .portal-hero__visual,
  .news-list-panel,
  .service-board {
    padding: 24px;
  }

  .portal-hero__visual {
    width: min(100%, 560px);
    padding: 0;
    aspect-ratio: 4 / 3;
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
    gap: 28px;
    padding: 56px 0 54px;
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

  .portal-hero__visual {
    width: 100%;
    border-radius: 24px;
    aspect-ratio: 1 / 1;
  }

  .portal-hero__visual-copy {
    right: 12px;
    bottom: 12px;
    left: 12px;
    padding: 14px;
  }

  .portal-hero__visual-dots {
    right: 12px;
    bottom: 94px;
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

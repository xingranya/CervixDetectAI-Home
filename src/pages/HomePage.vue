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
import HospitalPartners from '@/components/common/HospitalPartners.vue';

const { heroSlides, researchUpdates, notices, topicColumns, quickLinks, servicePanel, metrics } =
  siteConfig.home;

const featuredNews = getFeaturedNews(siteConfig.homeFeaturedNewsCount);
const headlineNews = featuredNews.length > 0 ? featuredNews : newsArticles.slice(0, 2);
const newsList = newsArticles.slice(0, 6);
const heroShortcuts = quickLinks
  .filter((item): item is (typeof quickLinks)[number] & { to: string } => Boolean(item.to))
  .slice(0, 4);
const surveyUrl =
  siteConfig.contact.consultationLinks?.find((item) => item.label === '项目问卷')?.href ??
  'https://wj.qq.com/s2/25214446/3453/';

const newsIndex = ref(0);
const heroIndex = ref(0);
const infoTab = ref<'research' | 'notice'>('research');

// 键盘导航支持
const handleHeroDotKeydown = (event: KeyboardEvent, index: number): void => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    heroIndex.value = index;
  }
};

const handleNewsIndicatorKeydown = (event: KeyboardEvent, index: number): void => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    newsIndex.value = index;
  }
};

// 日期格式化
const formatDate = (dateStr: string): { day: string; month: string } => {
  const parts = dateStr.split('-');
  if (parts.length >= 3) {
    return { day: parts[2], month: `${parts[0]}-${parts[1]}` };
  }
  return { day: dateStr.slice(-2), month: dateStr.slice(0, 7) };
};

const metricsList = [
  { key: 'accuracy', value: metrics.accuracy.value, suffix: metrics.accuracy.suffix, label: metrics.accuracy.label, desc: '基于临床验证数据', decimals: 1 },
  { key: 'hospitals', value: metrics.hospitals.value, suffix: metrics.hospitals.suffix, label: metrics.hospitals.label, desc: '覆盖湖北多个地区' },
  { key: 'cases', value: metrics.cases.value, suffix: metrics.cases.suffix, label: metrics.cases.label, desc: '来源于合作机构匿名数据' },
  { key: 'detection', value: metrics.detection.value, suffix: metrics.detection.suffix, label: metrics.detection.label, desc: '癌前病变精准检出', decimals: 1 },
];

let heroTimer: ReturnType<typeof setInterval> | undefined;
let newsTimer: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    heroTimer = setInterval(() => {
      heroIndex.value = (heroIndex.value + 1) % heroSlides.length;
    }, 5200);

    if (headlineNews.length > 1) {
      newsTimer = setInterval(() => {
        newsIndex.value = (newsIndex.value + 1) % headlineNews.length;
      }, 4800);
    }
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
      <div class="container portal-hero__top">
        <a
          v-reveal
          class="portal-hero__survey-banner"
          :href="surveyUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="参与项目调查问卷"
        >
          <span class="portal-hero__survey-badge">问卷调研</span>
          <span class="portal-hero__survey-text">我们团队正在征集项目反馈与合作需求，欢迎填写调查问卷，帮助我们持续优化平台与公开服务。</span>
          <span class="portal-hero__survey-action">立即参与 ↗</span>
        </a>
      </div>

      <div class="container portal-hero__inner">
        <div class="portal-hero__content" v-reveal>
          <div class="portal-hero__eyebrow">
            <span class="portal-hero__eyebrow-tag">Official Portal</span>
            <span>{{ siteConfig.projectName }}</span>
          </div>
          <Transition name="hero-text" mode="out-in">
            <div class="portal-hero__heading" :key="heroIndex">
              <p class="portal-hero__positioning">{{ heroSlides[heroIndex]?.positioning }}</p>
              <h1 class="portal-hero__title">{{ heroSlides[heroIndex]?.title }}</h1>
              <p class="portal-hero__description">{{ heroSlides[heroIndex]?.description }}</p>
            </div>
          </Transition>
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
              <img :src="slide.image" :alt="`${slide.title} - 项目展示图片`" class="portal-hero__visual-image" width="980" height="612" />
              <div class="portal-hero__visual-mask"></div>
              <div class="portal-hero__visual-copy">
                <span class="portal-hero__visual-kicker">项目展示</span>
                <strong>{{ slide.title }}</strong>
              </div>
            </div>
            <div class="portal-hero__visual-dots" role="tablist" :aria-label="`首页轮播，共 ${heroSlides.length} 张，当前第 ${heroIndex + 1} 张`">
              <button
                v-for="(slide, index) in heroSlides"
                :key="`visual-${slide.title}`"
                type="button"
                role="tab"
                class="portal-hero__visual-dot"
                :class="{ 'is-active': index === heroIndex }"
                :aria-selected="index === heroIndex"
                :aria-label="`第 ${index + 1} 张轮播图`"
                @click="heroIndex = index"
                @keydown="handleHeroDotKeydown($event, index)"
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
          description="了解项目最新进展、阶段性成果与公开信息。"
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

            <div class="news-feature__indicators" role="tablist" :aria-label="`新闻轮播，共 ${headlineNews.length} 篇，当前第 ${newsIndex + 1} 篇`">
              <button
                v-for="(article, index) in headlineNews"
                :key="article.slug"
                type="button"
                role="tab"
                class="news-feature__indicator"
                :class="{ 'is-active': index === newsIndex }"
                :aria-selected="index === newsIndex"
                :aria-label="`第 ${index + 1} 篇：${article.title}`"
                @click="newsIndex = index"
                @keydown="handleNewsIndicatorKeydown($event, index)"
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
                  <strong>{{ formatDate(article.publishedAt).day }}</strong>
                  <span>{{ formatDate(article.publishedAt).month }}</span>
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
          description="集中查看近期研究动态和通知公告。"
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
          :aria-hidden="infoTab !== 'research'"
          :class="{ 'is-hidden': infoTab !== 'research' }"
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
          :aria-hidden="infoTab !== 'notice'"
          :class="{ 'is-hidden': infoTab !== 'notice' }"
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
          title="平台数据"
          english-label="Platform Data"
          description="持续积累筛查数据，优化算法模型，支持临床诊断。"
          v-reveal
        />

        <div class="metrics-showcase" v-reveal>
          <div class="metrics-grid">
            <div
              v-for="(item, index) in metricsList"
              :key="item.key"
              class="metric-card"
              :class="`metric-card--${item.key}`"
            >
              <div class="metric-card__header">
                <span class="metric-card__icon">
                  <svg v-if="item.key === 'accuracy'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                  <svg v-else-if="item.key === 'hospitals'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6"/>
                  </svg>
                  <svg v-else-if="item.key === 'cases'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </span>
                <span class="metric-card__label-top">{{ item.label }}</span>
              </div>
              <div class="metric-card__body">
                <AnimatedCounter
                  class="metric-card__value"
                  :value="item.value"
                  :suffix="item.suffix"
                  :decimals="item.decimals || 0"
                />
              </div>
              <div class="metric-card__footer">
                <span class="metric-card__desc">{{ item.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--partners">
      <div class="container">
        <PortalSectionHeading
          title="合作医院"
          english-label="Partner Hospitals"
          description="已合作医疗机构持续增加中，覆盖筛查、诊疗与科研等多种应用场景。"
          v-reveal
        />

        <div v-reveal="'120ms'">
          <HospitalPartners :hospitals="siteConfig.hospitals" />
        </div>
      </div>
    </section>

    <section class="section section--copyrights">
      <div class="container">
        <PortalSectionHeading
          title="软件著作权"
          english-label="Software Copyright"
          description="已登记的软件著作权信息。"
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
          title="重点内容"
          english-label="Capability Matrix"
          description="从研究方向、平台应用、成果信息和公开资料四个方面快速了解项目。"
          v-reveal
        />

        <div class="columns-layout">
          <div class="columns-grid" v-reveal>
            <RouterLink v-for="item in topicColumns" :key="item.title" :to="item.to" class="column-card">
              <div class="column-card__kicker">{{ item.kicker }}</div>
              <h3 class="column-card__title">{{ item.title }}</h3>
              <p class="column-card__description">{{ item.description }}</p>
              <span class="column-card__more">查看内容</span>
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
            <a
              class="service-board__survey"
              href="https://wj.qq.com/s2/25214446/3453/"
              target="_blank"
              rel="noopener noreferrer"
            >
              参与项目调查问卷 ↗
            </a>
          </aside>
        </div>
      </div>
    </section>

    <section class="section section--quick-links">
      <div class="container">
        <PortalSectionHeading
          title="服务入口"
          english-label="Service Access"
          description="快速访问项目介绍、新闻动态、成果信息和平台入口。"
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
.is-hidden {
  display: none;
}

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

.portal-hero .container {
  width: var(--container-width);
}

.portal-hero__top {
  position: relative;
  z-index: 1;
  padding-top: 22px;
}

.portal-hero__survey-banner {
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 18px;
  align-items: center;
  padding: 18px 24px;
  border: 1px solid rgba(25, 118, 210, 0.18);
  border-radius: 22px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(241, 248, 255, 0.9)),
    linear-gradient(90deg, rgba(25, 118, 210, 0.08), rgba(255, 255, 255, 0));
  box-shadow: 0 18px 42px rgba(16, 38, 63, 0.08);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  animation: survey-banner-glow 4.8s ease-in-out infinite;
}

.portal-hero__survey-banner::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -18%;
  width: 18%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0));
  transform: skewX(-18deg);
  animation: survey-banner-sheen 5.2s ease-in-out infinite;
  pointer-events: none;
}

.portal-hero__survey-badge {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 16px;
  border-radius: 999px;
  background: rgba(181, 40, 47, 0.08);
  color: var(--secondary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.portal-hero__survey-text {
  color: var(--foreground);
  font-weight: 700;
  line-height: 1.7;
}

.portal-hero__survey-action {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  background: var(--accent);
  color: white;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: var(--shadow-accent);
  animation: survey-action-breathe 2.8s ease-in-out infinite;
}

@keyframes survey-banner-glow {
  0%,
  100% {
    box-shadow: 0 18px 42px rgba(16, 38, 63, 0.08);
    border-color: rgba(25, 118, 210, 0.18);
  }

  50% {
    box-shadow: 0 20px 48px rgba(25, 118, 210, 0.14);
    border-color: rgba(25, 118, 210, 0.28);
  }
}

@keyframes survey-banner-sheen {
  0%,
  60%,
  100% {
    transform: translateX(0) skewX(-18deg);
    opacity: 0;
  }

  12%,
  22% {
    opacity: 1;
  }

  28% {
    transform: translateX(640%) skewX(-18deg);
    opacity: 0;
  }
}

@keyframes survey-action-breathe {
  0%,
  100% {
    transform: translateY(0);
    box-shadow: var(--shadow-accent);
  }

  50% {
    transform: translateY(-1px);
    box-shadow: var(--shadow-accent-lg);
  }
}

.portal-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: clamp(24px, 2.8vw, 44px);
  align-items: center;
  grid-template-columns: minmax(500px, 0.9fr) minmax(680px, 1.2fr);
  padding: 34px 0 72px;
}

.portal-hero__content {
  display: grid;
  gap: 30px;
  max-width: 700px;
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

.hero-text-enter-active {
  transition: opacity 0.45s var(--ease-smooth), transform 0.45s var(--ease-smooth);
}

.hero-text-leave-active {
  transition: opacity 0.3s var(--ease-smooth), transform 0.3s var(--ease-smooth);
}

.hero-text-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.hero-text-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.portal-hero__positioning {
  margin: 0;
  color: var(--accent);
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.portal-hero__title {
  max-width: 680px;
  margin: 0;
  color: var(--foreground);
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 3.5vw, 4rem);
  font-weight: 700;
  line-height: 1.18;
  text-wrap: balance;
  overflow-wrap: break-word;
}

.portal-hero__description {
  max-width: 620px;
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
  align-items: stretch;
}

.portal-hero__visual {
  position: relative;
  width: 100%;
  max-width: min(100%, 980px);
  aspect-ratio: 16 / 10;
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
  transition: opacity 0.55s var(--ease-smooth);
}

.portal-hero__visual-slide.is-active {
  opacity: 1;
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
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.5);
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
  width: 12px;
  height: 12px;
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

.portal-hero__visual-dot:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px white, 0 0 0 4px var(--accent);
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
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.4);
  text-underline-offset: 4px;
}

.news-feature__title:hover,
.news-feature__title:focus-visible {
  text-decoration-color: white;
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
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  color: rgba(255, 255, 255, 0.72);
  text-align: left;
  transition:
    background-color 0.2s var(--ease-smooth),
    border-color 0.2s var(--ease-smooth),
    color 0.2s var(--ease-smooth);
}

.news-feature__indicator.is-active {
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  color: white;
}

.news-feature__indicator:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px white, 0 0 0 4px var(--accent);
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
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 251, 255, 0.88));
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
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
}

.news-list__item:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
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
    linear-gradient(180deg, #f8faff 0%, #f0f5fa 100%);
  padding: 72px 0;
}

.metrics-showcase {
  margin-top: 40px;
}

.metrics-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}

.metric-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 28px 24px 24px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 1px 3px rgba(13, 94, 170, 0.06), 0 4px 12px rgba(13, 94, 170, 0.04);
  overflow: hidden;
  transition:
    transform 0.28s var(--ease-smooth),
    box-shadow 0.28s var(--ease-smooth);
}

.metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 20px 20px 0 0;
}

.metric-card--accuracy::before { background: linear-gradient(90deg, var(--metric-accuracy), #3b82f6); }
.metric-card--hospitals::before { background: linear-gradient(90deg, var(--metric-hospitals), #10b981); }
.metric-card--cases::before { background: linear-gradient(90deg, var(--metric-cases), #f59e0b); }
.metric-card--detection::before { background: linear-gradient(90deg, var(--metric-detection), #ef4444); }

.metric-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(13, 94, 170, 0.12);
}

.metric-card__header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.metric-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
}

.metric-card--accuracy .metric-card__icon { background: var(--metric-accuracy-light); color: var(--metric-accuracy); }
.metric-card--hospitals .metric-card__icon { background: var(--metric-hospitals-light); color: var(--metric-hospitals); }
.metric-card--cases .metric-card__icon { background: var(--metric-cases-light); color: var(--metric-cases); }
.metric-card--detection .metric-card__icon { background: var(--metric-detection-light); color: var(--metric-detection); }

.metric-card__label-top {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

.metric-card__body {
  flex: 1;
}

.metric-card__value {
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
}

.metric-card--accuracy .metric-card__value { color: var(--metric-accuracy); }
.metric-card--hospitals .metric-card__value { color: var(--metric-hospitals); }
.metric-card--cases .metric-card__value { color: var(--metric-cases); }
.metric-card--detection .metric-card__value { color: var(--metric-detection); }

.metric-card__footer {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(13, 94, 170, 0.06);
}

.metric-card__desc {
  font-size: 0.78rem;
  color: var(--text-secondary);
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
    gap: 14px;
  }

  .metric-card {
    padding: 20px 18px 18px;
  }

  .metric-card__value {
    font-size: 2rem;
  }

  .metric-card__desc {
    font-size: 0.72rem;
  }
}

.section--capabilities {
  background: white;
}

.section--copyrights {
  background:
    linear-gradient(180deg, #ffffff 0%, #f6fafe 100%);
}

.section--partners {
  background: white;
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
}

.column-card:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
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
    linear-gradient(180deg, rgba(255, 247, 247, 0.92), rgba(255, 255, 255, 0.88));
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
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

.service-board__survey {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: var(--accent);
  font-weight: 700;
  line-height: 1.7;
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
  .portal-hero .container {
    width: var(--container-width);
  }

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
  .portal-hero__survey-banner {
    grid-template-columns: 1fr;
    gap: 14px;
    justify-items: start;
  }

  .portal-hero__inner {
    padding: 68px 0 64px;
  }

  .portal-hero__visual {
    max-width: min(100%, 760px);
    aspect-ratio: 16 / 10;
  }

  .tab-board__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .columns-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .portal-hero__top {
    padding-top: 14px;
  }

  .portal-hero__survey-banner {
    gap: 12px;
    padding: 16px 18px;
    border-radius: 18px;
  }

  .portal-hero__survey-text {
    font-size: 0.94rem;
    line-height: 1.66;
  }

  .portal-hero__survey-action {
    min-height: 40px;
    padding: 0 16px;
  }

  .portal-hero__title {
    font-size: clamp(2.4rem, 10vw, 3.6rem);
  }

  .portal-hero__actions {
    width: 100%;
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
    width: min(100%, 680px);
    max-width: 100%;
    padding: 0;
    aspect-ratio: 16 / 10;
  }

  .news-feature {
    min-height: 500px;
    border-radius: 24px;
  }

  .news-feature__content {
    gap: 10px;
    padding: 24px 20px 20px;
  }

  .news-feature__meta-row {
    gap: 8px 12px;
    font-size: 0.82rem;
  }

  .news-feature__title {
    display: -webkit-box;
    overflow: hidden;
    font-size: clamp(1.5rem, 5vw, 1.86rem);
    line-height: 1.32;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .news-feature__summary {
    display: -webkit-box;
    overflow: hidden;
    font-size: 0.93rem;
    line-height: 1.72;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .news-feature__actions :deep(.app-button) {
    min-height: 50px;
    padding-inline: 18px;
  }

  .news-feature__indicators {
    display: none;
  }

  .news-list-panel {
    padding: 24px 20px;
    border-radius: 24px;
  }

  .news-list-panel__head {
    align-items: center;
  }

  .news-list-panel__title {
    font-size: 1.46rem;
  }

  .tab-board__grid,
  .quick-links-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .portal-hero__survey-banner {
    padding: 14px 14px 16px;
  }

  .portal-hero__survey-badge {
    min-height: 34px;
    padding: 0 14px;
    font-size: 0.74rem;
  }

  .portal-hero__survey-text {
    font-size: 0.9rem;
  }

  .portal-hero__survey-action {
    width: 100%;
    justify-content: center;
  }

  .portal-hero__inner {
    gap: 28px;
    padding: 56px 0 54px;
  }

  .portal-hero__content {
    gap: 20px;
  }

  .portal-hero__actions {
    display: grid;
    gap: 12px;
  }

  .portal-hero__actions :deep(.app-button) {
    width: 100%;
    min-height: 52px;
  }

  .portal-hero__title {
    font-size: clamp(2rem, 11vw, 3rem);
  }

  .portal-hero__description,
  .service-board__description {
    font-size: 0.96rem;
  }

  .column-card {
    min-height: auto;
    gap: 14px;
    padding: 22px 20px;
  }

  .column-card__title {
    font-size: 1.18rem;
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
    min-height: 520px;
  }

  .news-feature__content {
    padding: 16px;
  }

  .news-feature__kicker {
    min-height: 30px;
    padding-inline: 12px;
    font-size: 0.76rem;
  }

  .news-feature__title {
    font-size: 1.36rem;
    -webkit-line-clamp: 3;
  }

  .news-feature__summary {
    font-size: 0.9rem;
    -webkit-line-clamp: 2;
  }

  .news-list-panel {
    padding: 20px 16px;
  }

  .service-board {
    gap: 16px;
    padding: 22px 18px;
  }

  .service-board__title {
    font-size: 1.5rem;
    line-height: 1.42;
  }

  .service-board__actions {
    display: grid;
    gap: 12px;
  }

  .service-board__actions :deep(.app-button) {
    width: 100%;
    min-height: 50px;
  }

  .service-board__survey {
    font-size: 0.94rem;
  }

  .news-list-panel__head {
    gap: 10px;
  }

  .news-list-panel__more {
    font-size: 0.88rem;
  }

  .news-list__date {
    width: 56px;
    padding: 8px 6px;
  }

  .news-list__date strong {
    font-size: 1.18rem;
  }

  .news-list__text {
    margin-top: 6px;
    line-height: 1.64;
  }

  .news-list__item {
    grid-template-columns: auto 1fr;
    align-items: start;
  }

  .news-list__arrow {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .portal-hero__survey-banner,
  .portal-hero__survey-banner::after,
  .portal-hero__survey-action {
    animation: none;
  }
}
</style>

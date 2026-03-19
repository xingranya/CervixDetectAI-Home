<script setup lang="ts">
import { computed, ref } from 'vue';
import { siteConfig } from '@/config/site';
import { newsArticles } from '@/lib/news';
import NewsCard from '@/components/common/NewsCard.vue';
import PortalSectionHeading from '@/components/common/PortalSectionHeading.vue';
import PageHero from '@/components/layout/PageHero.vue';

const categories = computed(() => Array.from(new Set(newsArticles.map((article) => article.category))));
const latestPublishedAt = computed(() => newsArticles[0]?.publishedAt ?? '持续更新');
const featuredCount = computed(() => newsArticles.filter((article) => article.featured).length);

const selectedCategory = ref<string | null>(null);

const filteredArticles = computed(() => {
  if (!selectedCategory.value) return newsArticles;
  return newsArticles.filter((article) => article.category === selectedCategory.value);
});

const spotlightArticle = computed(() => filteredArticles.value[0]);
const spotlightList = computed(() => filteredArticles.value.slice(1, 5));
const archiveArticles = computed(() => filteredArticles.value.slice(1));

function selectCategory(category: string) {
  selectedCategory.value = selectedCategory.value === category ? null : category;
}
</script>

<template>
  <div>
    <PageHero
      badge="新闻中心"
      title="集中发布项目新闻、合作动态与一线实践内容。"
      :description="`${siteConfig.projectName} 的最新动态、现场记录和公开报道会持续更新在这里。`"
    />

    <section class="section section-blue-tint">
      <div class="container">
        <div class="news-overview portal-surface" v-reveal>
          <div class="news-overview__grid">
            <div class="news-overview__cell">
              <span class="news-overview__label">稿件总数</span>
              <strong>{{ newsArticles.length }} 篇</strong>
            </div>
            <div class="news-overview__cell">
              <span class="news-overview__label">焦点稿件</span>
              <strong>{{ featuredCount }} 篇重点内容</strong>
            </div>
            <div class="news-overview__cell">
              <span class="news-overview__label">最近更新</span>
              <strong>{{ latestPublishedAt }}</strong>
            </div>
          </div>
          <p class="news-overview__text">
            新闻内容会持续更新，首页、新闻中心和详情页展示的是同一批稿件，方便统一查看。
          </p>
        </div>

        <PortalSectionHeading
          title="新闻稿库"
          english-label="Newsroom"
          description="按主题快速筛选，优先阅读重点稿件，再查看全部历史报道。"
          v-reveal="'80ms'"
        />

        <div v-reveal="'120ms'" class="news-filter">
          <button
            class="news-filter__btn"
            :class="{ 'is-active': !selectedCategory }"
            type="button"
            @click="selectedCategory = null"
          >
            全部稿件
          </button>
          <button
            v-for="category in categories"
            :key="category"
            class="news-filter__btn"
            :class="{ 'is-active': selectedCategory === category }"
            type="button"
            @click="selectCategory(category)"
          >
            {{ category }}
          </button>
        </div>

        <div v-if="spotlightArticle" class="news-spotlight">
          <article class="news-spotlight__main portal-surface" v-reveal>
            <div class="news-spotlight__cover">
              <img :src="spotlightArticle.cover" :alt="spotlightArticle.title" />
            </div>
            <div class="news-spotlight__body">
              <div class="news-spotlight__meta">
                <span>{{ spotlightArticle.category }}</span>
                <span>{{ spotlightArticle.publishedAt }}</span>
                <span>{{ spotlightArticle.readingMinutes }} 分钟阅读</span>
              </div>
              <RouterLink :to="`/news/${spotlightArticle.slug}`" class="news-spotlight__title">
                {{ spotlightArticle.title }}
              </RouterLink>
              <p class="news-spotlight__excerpt">{{ spotlightArticle.excerpt }}</p>
              <div class="news-spotlight__actions">
                <RouterLink :to="`/news/${spotlightArticle.slug}`" class="news-spotlight__link">
                  查看完整报道
                </RouterLink>
              </div>
            </div>
          </article>

          <aside class="news-spotlight__aside" v-reveal="'120ms'">
            <div class="news-spotlight__aside-card">
              <div class="news-spotlight__aside-label">继续阅读</div>
              <RouterLink
                v-for="article in spotlightList"
                :key="article.slug"
                :to="`/news/${article.slug}`"
                class="news-spotlight__aside-item"
              >
                <span class="news-spotlight__aside-date">{{ article.publishedAt }}</span>
                <strong>{{ article.title }}</strong>
              </RouterLink>
            </div>
          </aside>
        </div>

        <div class="news-list">
          <NewsCard
            v-for="(article, index) in archiveArticles"
            :key="article.slug"
            v-reveal="`${index * 60}ms`"
            :article="article"
          />
        </div>

        <p v-if="filteredArticles.length === 0" class="news-empty">暂无对应分类的新闻稿。</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news-overview {
  padding: 28px;
}

.news-overview__grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.news-overview__cell {
  padding: 18px 20px;
  border-radius: var(--card-radius-lg);
  background:
    linear-gradient(180deg, rgba(13, 94, 170, 0.06), rgba(13, 94, 170, 0.02));
}

.news-overview__label {
  display: block;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.news-overview__cell strong {
  display: block;
  margin-top: 10px;
  color: var(--foreground);
  font-size: 1.08rem;
  line-height: 1.6;
}

.news-overview__text {
  margin: 20px 0 0;
  color: var(--muted-foreground);
  line-height: 1.88;
}

.news-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.news-filter__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid rgba(13, 94, 170, 0.1);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--foreground);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    background-color 0.2s var(--ease-smooth),
    color 0.2s var(--ease-smooth),
    border-color 0.2s var(--ease-smooth),
    box-shadow 0.2s var(--ease-smooth);
}

.news-filter__btn:hover,
.news-filter__btn:focus-visible {
  border-color: rgba(13, 94, 170, 0.24);
  box-shadow: var(--shadow-sm);
  outline: none;
}

.news-filter__btn.is-active {
  border-color: var(--accent);
  background: var(--accent);
  color: white;
  box-shadow: var(--shadow-accent);
}

.news-spotlight {
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(0, 1.15fr) 320px;
  margin-top: 30px;
}

.news-spotlight__main {
  display: grid;
  gap: 0;
  overflow: hidden;
  padding: 0;
}

.news-spotlight__cover {
  position: relative;
  aspect-ratio: 16 / 8.2;
  background: linear-gradient(135deg, rgba(13, 94, 170, 0.16), rgba(181, 40, 47, 0.08));
}

.news-spotlight__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.news-spotlight__body {
  display: grid;
  gap: 18px;
  padding: 28px;
}

.news-spotlight__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: var(--muted-foreground);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.news-spotlight__meta span:first-child {
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(181, 40, 47, 0.08);
  color: var(--secondary);
  letter-spacing: 0.02em;
}

.news-spotlight__title {
  color: var(--foreground);
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 2.6vw, 2.5rem);
  line-height: 1.34;
}

.news-spotlight__excerpt {
  margin: 0;
  color: var(--muted-foreground);
  line-height: 1.92;
}

.news-spotlight__actions {
  margin-top: 4px;
}

.news-spotlight__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-weight: 700;
}

.news-spotlight__link::after {
  content: '→';
  transition: transform 0.2s var(--ease-spring);
}

.news-spotlight__link:hover::after {
  transform: translateX(3px);
}

.news-spotlight__aside-card {
  display: grid;
  gap: 12px;
  padding: 24px;
  border-radius: var(--card-radius-xl);
  border: 1px solid rgba(13, 94, 170, 0.1);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-sm);
}

.news-spotlight__aside-label {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.news-spotlight__aside-item {
  display: grid;
  gap: 6px;
  padding: 14px 0;
  border-bottom: 1px dashed rgba(13, 94, 170, 0.12);
  color: var(--foreground);
  transition: transform 0.2s var(--ease-smooth), color 0.2s var(--ease-smooth);
}

.news-spotlight__aside-item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.news-spotlight__aside-item:hover,
.news-spotlight__aside-item:focus-visible {
  color: var(--accent);
  transform: translateX(3px);
  outline: none;
}

.news-spotlight__aside-date {
  color: var(--muted-foreground);
  font-size: 0.78rem;
  font-weight: 700;
}

.news-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 30px;
}

.news-empty {
  margin-top: 40px;
  color: var(--muted-foreground);
  text-align: center;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .news-spotlight,
  .news-overview__grid,
  .news-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .news-overview {
    padding: 24px;
  }

  .news-spotlight__body,
  .news-spotlight__aside-card {
    padding: 20px;
  }
}
</style>

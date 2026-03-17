<script setup lang="ts">
import { computed, ref } from 'vue';
import { siteConfig } from '@/config/site';
import { newsArticles } from '@/lib/news';
import NewsCard from '@/components/common/NewsCard.vue';
import PortalSectionHeading from '@/components/common/PortalSectionHeading.vue';
import PageHero from '@/components/layout/PageHero.vue';

const categories = computed(() => Array.from(new Set(newsArticles.map((article) => article.category))));
const latestPublishedAt = computed(() => newsArticles[0]?.publishedAt ?? '持续更新');

const selectedCategory = ref<string | null>(null);

const filteredArticles = computed(() => {
  if (!selectedCategory.value) return newsArticles;
  return newsArticles.filter((article) => article.category === selectedCategory.value);
});

function selectCategory(category: string) {
  selectedCategory.value = selectedCategory.value === category ? null : category;
}
</script>

<template>
  <div>
    <PageHero
      badge="新闻中心"
      title="集中发布项目建设进展、阶段成果与合作交流信息。"
      :description="`新闻中心用于发布${siteConfig.brandName}围绕${siteConfig.projectName}形成的动态信息，涵盖平台建设、成果信息、应用服务与合作交流等内容。`"
    />

    <section class="section section-blue-tint">
      <div class="container">
        <div class="news-overview portal-surface" v-reveal>
          <div class="news-overview__grid">
            <div class="news-overview__cell">
              <span class="news-overview__label">发布定位</span>
              <strong>项目建设与公开发布统一窗口</strong>
            </div>
            <div class="news-overview__cell">
              <span class="news-overview__label">最近更新</span>
              <strong>{{ latestPublishedAt }}</strong>
            </div>
            <div class="news-overview__cell">
              <span class="news-overview__label">栏目数量</span>
              <strong>{{ categories.length }} 个专题分类</strong>
            </div>
          </div>
          <p class="news-overview__text">
            当前栏目持续围绕建设进展、平台建设、成果信息与应用服务进行更新，
            便于合作单位和相关用户及时了解{{ siteConfig.projectName }}建设情况。
          </p>
        </div>

        <PortalSectionHeading
          title="栏目更新"
          english-label="News Desk"
          description="强化分类筛选、列表层级与阅读入口，让新闻中心作为首页之后的正式信息承接页。"
          v-reveal="'80ms'"
        />

        <div v-reveal="'120ms'" class="news-filter">
          <button
            class="news-filter__btn"
            :class="{ 'is-active': !selectedCategory }"
            type="button"
            @click="selectedCategory = null"
          >
            全部
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

        <div class="news-list">
          <NewsCard
            v-for="(article, index) in filteredArticles"
            :key="article.slug"
            v-reveal="`${index * 60}ms`"
            :article="article"
          />
        </div>

        <p v-if="filteredArticles.length === 0" class="news-empty">暂无相关新闻</p>
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
  background: rgba(13, 94, 170, 0.04);
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
  padding: 10px 16px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: var(--foreground);
  color: white;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background-color 0.2s var(--ease-smooth),
    color 0.2s var(--ease-smooth),
    border-color 0.2s var(--ease-smooth);
}

.news-filter__btn:hover {
  opacity: 0.88;
}

.news-filter__btn.is-active {
  border-color: var(--accent);
  background: var(--accent);
  box-shadow: var(--shadow-accent);
}

.news-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 30px;
}

.news-empty {
  margin-top: 40px;
  color: var(--muted-foreground);
  text-align: center;
  line-height: 1.8;
}

@media (max-width: 960px) {
  .news-overview__grid,
  .news-list {
    grid-template-columns: 1fr;
  }

  .news-overview {
    padding: 24px;
  }
}
</style>

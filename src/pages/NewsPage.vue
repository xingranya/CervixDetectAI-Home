<script setup lang="ts">
import { computed, ref } from 'vue';
import { newsArticles } from '@/lib/news';
import NewsCard from '@/components/common/NewsCard.vue';
import PageHero from '@/components/layout/PageHero.vue';

const categories = computed(() => Array.from(new Set(newsArticles.map((article) => article.category))));

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
      title="了解项目最新动态与媒体报道"
      description="项目新闻、合作动态与临床实践内容持续更新"
    />

    <section class="section section-blue-tint">
      <div class="container">
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

        <div class="news-list">
          <NewsCard
            v-for="(article, index) in filteredArticles"
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
  .news-list {
    grid-template-columns: 1fr;
  }
}
</style>

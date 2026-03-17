<script setup lang="ts">
import { computed } from 'vue';
import { newsArticles } from '@/lib/news';
import NewsCard from '@/components/common/NewsCard.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const categories = computed(() => {
  return Array.from(new Set(newsArticles.map((article) => article.category)));
});
</script>

<template>
  <div>
    <PageHero
      badge="新闻中心"
      title="集中发布团队动态、建设进展与成果信息。"
      description="新闻中心承担官网门户中的官方发布功能，用于对外展示团队进展、专题活动与阶段成果。"
    />

    <section class="section section-blue-tint">
      <div class="container">
        <div v-reveal class="news-filter">
          <SectionBadge v-for="category in categories" :key="category" :label="category" />
        </div>
        <div class="news-list">
          <NewsCard
            v-for="(article, index) in newsArticles"
            :key="article.slug"
            v-reveal="`${index * 60}ms`"
            :article="article"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.news-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 28px;
}

@media (max-width: 960px) {
  .news-list {
    grid-template-columns: 1fr;
  }
}
</style>

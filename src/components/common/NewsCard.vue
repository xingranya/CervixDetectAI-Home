<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { NewsArticle } from '@/types/site';

defineProps<{
  article: NewsArticle;
  compact?: boolean;
}>();
</script>

<template>
  <RouterLink class="news-card" :class="{ 'news-card--compact': compact }" :to="`/news/${article.slug}`">
    <div class="news-card__meta">
      <span>{{ article.category }}</span>
      <span>{{ article.publishedAt }}</span>
      <span>{{ article.readingMinutes }} 分钟阅读</span>
    </div>
    <h3 class="news-card__title">{{ article.title }}</h3>
    <p class="news-card__excerpt">{{ article.excerpt }}</p>
    <span class="news-card__more">阅读全文 ↗</span>
  </RouterLink>
</template>

<style scoped>
.news-card {
  display: grid;
  gap: 18px;
  height: 100%;
  padding: 28px;
  color: inherit;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(59, 130, 246, 0.08);
  background: white;
  transition:
    transform 0.2s ease-out,
    background-color 0.2s ease-out;
}

.news-card:hover,
.news-card:focus-visible {
  transform: scale(1.02);
  background: var(--surface-slate);
}

.news-card:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent), 0 0 0 6px var(--ring);
}

.news-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.news-card__meta span:first-child {
  padding: 7px 10px;
  border-radius: var(--radius-sm);
  background: var(--surface-blue);
  color: var(--accent);
}

.news-card__title {
  margin: 0;
  font-size: 1.36rem;
  font-weight: 800;
  line-height: 1.38;
}

.news-card__excerpt {
  margin: 0;
  color: var(--muted-foreground);
  line-height: 1.82;
}

.news-card__more {
  font-weight: 700;
  color: var(--accent);
}

.news-card--compact {
  gap: 14px;
  padding: 24px;
}
</style>

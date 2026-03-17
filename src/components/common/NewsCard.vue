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
    <span class="news-card__more">
      <span class="news-card__more-text">查看详情</span>
      <span class="news-card__more-arrow">↗</span>
    </span>
  </RouterLink>
</template>

<style scoped>
.news-card {
  display: grid;
  gap: 18px;
  height: 100%;
  padding: 28px;
  color: inherit;
  border-radius: var(--card-radius-lg);
  border: 1px solid var(--card-border-strong);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 251, 255, 0.98));
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.24s var(--ease-smooth),
    box-shadow 0.3s var(--ease-smooth),
    background-color 0.3s var(--ease-smooth),
    border-color 0.3s var(--ease-smooth);
  overflow: hidden;
  position: relative;
}

.news-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 5px;
  background: linear-gradient(90deg, var(--secondary), rgba(13, 94, 170, 0.22));
  pointer-events: none;
}

.news-card:hover,
.news-card:focus-visible {
  transform: translateY(-4px);
  border-color: rgba(13, 94, 170, 0.22);
  box-shadow: var(--shadow-md);
  background: white;
}

.news-card:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent), 0 0 0 6px var(--ring), var(--shadow-md);
}

.news-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.news-card__meta span:first-child {
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(181, 40, 47, 0.08);
  color: var(--secondary);
}

.news-card__title {
  margin: 0;
  font-size: 1.36rem;
  font-weight: 800;
  line-height: 1.38;
  transition: color 0.2s var(--ease-smooth);
}

.news-card:hover .news-card__title {
  color: var(--accent);
}

.news-card__excerpt {
  margin: 0;
  color: var(--muted-foreground);
  line-height: 1.82;
}

.news-card__more {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  color: var(--accent);
  transition:
    gap 0.2s var(--ease-spring),
    color 0.2s var(--ease-smooth);
}

.news-card:hover .news-card__more {
  gap: 10px;
}

.news-card__more-arrow {
  display: inline-block;
  transition: transform 0.2s var(--ease-spring);
}

.news-card:hover .news-card__more-arrow {
  transform: translate(2px, -2px);
}

.news-card--compact {
  gap: 14px;
  padding: 24px;
}
</style>

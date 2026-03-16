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
      <span class="news-card__more-text">阅读全文</span>
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
  border-radius: var(--radius-lg);
  border: 1px solid rgba(59, 130, 246, 0.08);
  background: white;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.3s var(--ease-spring),
    box-shadow 0.3s var(--ease-smooth),
    background-color 0.3s var(--ease-smooth);
  overflow: hidden;
  position: relative;
}

.news-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(37, 99, 235, 0.01) 100%);
  opacity: 0;
  transition: opacity 0.3s var(--ease-smooth);
  pointer-events: none;
}

.news-card:hover,
.news-card:focus-visible {
  transform: translateY(-4px) scale(1.01);
  box-shadow: var(--shadow-lg);
  background: white;
}

.news-card:hover::before,
.news-card:focus-visible::before {
  opacity: 1;
}

.news-card:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent), 0 0 0 6px var(--ring), var(--shadow-lg);
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
  transition: transform 0.2s var(--ease-spring);
}

.news-card:hover .news-card__meta span:first-child {
  transform: scale(1.05);
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

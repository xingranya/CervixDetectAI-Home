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
    <div class="news-card__cover">
      <img class="news-card__image" :src="article.cover" :alt="article.title" loading="lazy" />
      <div class="news-card__overlay"></div>
      <div class="news-card__badge">{{ article.category }}</div>
    </div>

    <div class="news-card__content">
      <div class="news-card__meta">
        <span>{{ article.publishedAt }}</span>
        <span>{{ article.readingMinutes }}分钟阅读</span>
      </div>
      <h3 class="news-card__title">{{ article.title }}</h3>
      <p class="news-card__excerpt">{{ article.excerpt }}</p>
      <span class="news-card__more">
        <span class="news-card__more-text">阅读全文</span>
        <span class="news-card__more-arrow">→</span>
      </span>
    </div>
  </RouterLink>
</template>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  height: 100%;
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
    border-color 0.3s var(--ease-smooth),
    filter 0.3s var(--ease-smooth);
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
  z-index: 2;
}

.news-card:hover,
.news-card:focus-visible {
  transform: translateY(-4px);
  border-color: rgba(13, 94, 170, 0.22);
  box-shadow: var(--shadow-md);
  background: white;
  filter: saturate(1.02);
}

.news-card:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent), 0 0 0 6px var(--ring), var(--shadow-md);
}

.news-card__cover {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(13, 94, 170, 0.16), rgba(181, 40, 47, 0.1));
}

.news-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.36s var(--ease-smooth);
}

.news-card:hover .news-card__image {
  transform: scale(1.04);
}

.news-card__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(7, 17, 31, 0.04), rgba(7, 17, 31, 0.36)),
    linear-gradient(135deg, rgba(13, 94, 170, 0.06), transparent 52%);
}

.news-card__badge {
  position: absolute;
  left: 18px;
  bottom: 18px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--accent-strong);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  box-shadow: var(--shadow-sm);
}

.news-card__content {
  display: grid;
  gap: 16px;
  padding: 24px 24px 26px;
  flex: 1;
}

.news-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted-foreground);
}

.news-card__meta span + span::before {
  content: '•';
  margin-right: 10px;
  color: rgba(13, 94, 170, 0.38);
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

.news-card--compact .news-card__content {
  gap: 14px;
  padding: 20px 20px 22px;
}

.news-card--compact .news-card__badge {
  left: 14px;
  bottom: 14px;
}

@media (max-width: 640px) {
  .news-card__content {
    padding: 20px 20px 22px;
  }

  .news-card__title {
    font-size: 1.22rem;
  }
}
</style>

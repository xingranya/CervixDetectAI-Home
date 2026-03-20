<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { siteConfig } from '@/config/site';
import { getNewsArticleBySlug, newsArticles } from '@/lib/news';
import AppButton from '@/components/common/AppButton.vue';

const props = defineProps<{
  slug?: string;
}>();

const route = useRoute();

const article = computed(() => {
  const slug = props.slug ?? String(route.params.slug ?? '');
  return getNewsArticleBySlug(slug);
});

const relatedArticles = computed(() => {
  if (!article.value) return [];

  return newsArticles
    .filter((item) => item.slug !== article.value?.slug)
    .sort((left, right) => {
      const leftScore = left.category === article.value?.category ? 1 : 0;
      const rightScore = right.category === article.value?.category ? 1 : 0;
      return rightScore - leftScore;
    })
    .slice(0, 3);
});
</script>

<template>
  <div v-if="article">
    <section class="section section--compact">
      <div class="container article-shell">
        <div class="article-hero portal-surface" v-reveal>
          <div class="article-hero__content">
            <div class="article-hero__meta">
              <span>{{ article.category }}</span>
              <span>{{ article.publishedAt }}</span>
              <span>{{ article.readingMinutes }} 分钟阅读</span>
            </div>
            <h1 class="article-hero__title">{{ article.title }}</h1>
            <p class="article-hero__excerpt">{{ article.excerpt }}</p>
            <div class="article-hero__actions">
              <AppButton to="/news" variant="secondary">返回新闻中心</AppButton>
            </div>
          </div>

          <div class="article-hero__cover">
            <img :src="article.cover" :alt="article.title" />
          </div>
        </div>
      </div>
    </section>

    <section class="section section-blue-tint section--compact">
      <div class="container article-layout">
        <article class="article-content portal-surface" v-reveal>
          <div class="article-markdown" v-html="article.html"></div>
        </article>

        <aside class="article-aside" v-reveal="'120ms'">
          <div class="aside-card">
            <div class="aside-card__label">本文信息</div>
            <div class="aside-card__chips">
              <span>{{ article.category }}</span>
              <span>{{ article.publishedAt }}</span>
              <span>{{ article.readingMinutes }} 分钟阅读</span>
            </div>
          </div>

          <div class="aside-card aside-card--related" v-if="relatedArticles.length > 0">
            <div class="aside-card__label">延伸阅读</div>
            <RouterLink
              v-for="item in relatedArticles"
              :key="item.slug"
              :to="`/news/${item.slug}`"
              class="aside-card__related-item"
            >
              <span>{{ item.publishedAt }}</span>
              <strong>{{ item.title }}</strong>
            </RouterLink>
          </div>

          <div class="aside-card aside-card--service">
            <div class="aside-card__label">合作交流</div>
            <p class="aside-card__description">
              如对 {{ siteConfig.projectName }} 感兴趣，欢迎联系我们了解合作方式。
            </p>
            <div class="aside-card__chips">
              <span v-for="item in siteConfig.cooperationDirections" :key="item">{{ item }}</span>
            </div>
            <div class="aside-card__actions">
              <AppButton href="mailto:support@hpvsc.icu">邮件咨询</AppButton>
              <AppButton to="/contact" variant="secondary">联系方式</AppButton>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>

  <div v-else>
    <section class="section">
      <div class="container">
        <div class="article-empty portal-surface">
          <h1 class="article-empty__title">未找到对应内容</h1>
          <p class="article-empty__description">该新闻稿可能已调整、下线，或链接地址已经发生变化。</p>
          <div class="article-empty__action">
            <AppButton to="/news">返回新闻中心</AppButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.article-shell {
  max-width: 1180px;
}

.article-hero {
  display: grid;
  gap: 28px;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.88fr);
  align-items: center;
  padding: clamp(28px, 4vw, 42px);
}

.article-hero__content {
  display: grid;
  gap: 18px;
}

.article-hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  color: var(--muted-foreground);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.article-hero__meta span:first-child {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(181, 40, 47, 0.08);
  color: var(--secondary);
  letter-spacing: 0.02em;
}

.article-hero__title {
  margin: 0;
  color: var(--foreground);
  font-family: var(--font-display);
  font-size: clamp(2.3rem, 4vw, 3.8rem);
  line-height: 1.2;
}

.article-hero__excerpt {
  max-width: 720px;
  margin: 0;
  color: var(--muted-foreground);
  font-size: 1.04rem;
  line-height: 1.88;
}

.article-hero__cover {
  overflow: hidden;
  border-radius: var(--card-radius-xl);
  background: linear-gradient(135deg, rgba(13, 94, 170, 0.14), rgba(181, 40, 47, 0.08));
  box-shadow: var(--shadow-md);
}

.article-hero__cover img {
  width: 100%;
  display: block;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.article-layout {
  display: grid;
  gap: 28px;
  grid-template-columns: minmax(0, 1fr) 340px;
  align-items: start;
}

.article-content {
  padding: clamp(28px, 4vw, 40px);
}

.article-markdown :deep(h2) {
  margin: 38px 0 16px;
  padding-left: 16px;
  border-left: 4px solid var(--accent);
  color: var(--foreground);
  font-family: var(--font-display);
  font-size: 1.7rem;
  line-height: 1.3;
}

.article-markdown :deep(h2:first-child) {
  margin-top: 0;
}

.article-markdown :deep(h3) {
  margin: 28px 0 14px;
  color: var(--foreground);
  font-size: 1.28rem;
  line-height: 1.42;
}

.article-markdown :deep(p) {
  margin: 0 0 18px;
  color: var(--muted-foreground);
  line-height: 1.96;
}

.article-markdown :deep(p:first-of-type) {
  color: var(--foreground);
  font-size: 1.08rem;
}

.article-markdown :deep(ul),
.article-markdown :deep(ol) {
  margin: 0 0 18px;
  padding-left: 22px;
  color: var(--muted-foreground);
  line-height: 1.88;
}

.article-markdown :deep(li + li) {
  margin-top: 8px;
}

.article-markdown :deep(blockquote) {
  margin: 24px 0;
  padding: 18px 20px;
  border-left: 4px solid var(--secondary);
  border-radius: 0 var(--card-radius-md) var(--card-radius-md) 0;
  background: rgba(181, 40, 47, 0.05);
  color: var(--foreground);
}

.article-markdown :deep(blockquote p) {
  margin: 0;
  color: var(--foreground);
}

.article-markdown :deep(img) {
  width: 100%;
  display: block;
  margin: 26px 0;
  border-radius: var(--card-radius-lg);
  box-shadow: var(--shadow-md);
}

.article-markdown :deep(strong) {
  color: var(--foreground);
}

.article-aside {
  display: grid;
  gap: 18px;
}

.aside-card {
  padding: 24px;
  border-radius: var(--card-radius-xl);
  border: 1px solid rgba(13, 94, 170, 0.1);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 250, 255, 0.92));
  box-shadow: var(--shadow-sm);
}

.aside-card--service {
  border-color: rgba(181, 40, 47, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 247, 247, 0.96), rgba(255, 255, 255, 0.94));
}

.aside-card__label {
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.aside-card__title {
  margin: 16px 0 12px;
  color: var(--foreground);
  font-size: 1.24rem;
  line-height: 1.46;
}

.aside-card__description {
  margin: 0;
  color: var(--muted-foreground);
  line-height: 1.82;
}

.aside-card__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.aside-card__chips span {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(13, 94, 170, 0.06);
  color: var(--accent);
  font-size: 0.86rem;
}

.aside-card--service .aside-card__chips span {
  background: rgba(181, 40, 47, 0.06);
  color: var(--secondary);
}

.aside-card__related-item {
  display: grid;
  gap: 6px;
  padding: 14px 0;
  border-bottom: 1px dashed rgba(13, 94, 170, 0.12);
  color: var(--foreground);
  transition: transform 0.2s var(--ease-smooth), color 0.2s var(--ease-smooth);
}

.aside-card__related-item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.aside-card__related-item:hover,
.aside-card__related-item:focus-visible {
  transform: translateX(4px);
  color: var(--accent);
  outline: none;
}

.aside-card__related-item span {
  color: var(--muted-foreground);
  font-size: 0.78rem;
  font-weight: 700;
}

.aside-card__actions {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}

.article-empty {
  padding: 34px;
}

.article-empty__title {
  margin: 0 0 12px;
}

.article-empty__description {
  margin: 0;
  color: var(--muted-foreground);
}

.article-empty__action {
  margin-top: 20px;
}

@media (max-width: 960px) {
  .article-hero,
  .article-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .article-content,
  .aside-card {
    padding: 20px;
  }
}
</style>

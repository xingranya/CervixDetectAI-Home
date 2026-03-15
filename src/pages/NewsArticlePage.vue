<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { getNewsArticleBySlug } from '@/lib/news';
import AppButton from '@/components/common/AppButton.vue';

const props = defineProps<{
  slug?: string;
}>();

const route = useRoute();

const article = computed(() => {
  const slug = props.slug ?? String(route.params.slug ?? '');
  return getNewsArticleBySlug(slug);
});
</script>

<template>
  <div v-if="article">
    <section class="section section--compact">
      <div class="container article-shell">
        <div v-reveal>
          <div class="article-meta">
            <span>{{ article.category }}</span>
            <span>{{ article.publishedAt }}</span>
            <span>{{ article.readingMinutes }} 分钟阅读</span>
          </div>
          <h1 class="article-title">{{ article.title }}</h1>
          <p class="article-excerpt">{{ article.excerpt }}</p>
        </div>
        <div class="article-cover" v-reveal="'120ms'">
          <img :src="article.cover" :alt="article.title" />
        </div>
      </div>
    </section>

    <section class="section section-blue-tint section--compact">
      <div class="container article-layout">
        <article class="article-content" v-reveal>
          <div class="article-markdown" v-html="article.html"></div>
        </article>
        <aside class="article-aside" v-reveal="'120ms'">
          <div class="aside-card">
            <div class="aside-card__label">Next Step</div>
            <h2 class="aside-card__title">欢迎进一步了解平台与合作信息</h2>
            <p class="aside-card__description">
              如需沟通产品能力、应用场景或合作方式，可通过固定联系方式与我们取得联系。
            </p>
            <div class="aside-card__actions">
              <AppButton href="mailto:support@hpvsc.icu">邮件咨询</AppButton>
              <AppButton to="/news" variant="secondary">返回新闻中心</AppButton>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>

  <div v-else>
    <section class="section">
      <div class="container">
        <div class="article-empty">
          <h1 class="article-empty__title">未找到对应新闻</h1>
          <p class="article-empty__description">该文章可能已下线，或 slug 已发生变化。</p>
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
  max-width: 980px;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  color: var(--muted-foreground);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.article-meta span:first-child {
  padding: 7px 10px;
  border-radius: var(--radius-sm);
  background: var(--surface-blue);
  color: var(--accent);
}

.article-title {
  margin: 18px 0 14px;
  font-family: var(--font-display);
  font-size: clamp(2.3rem, 4.6vw, 3.8rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.article-excerpt {
  margin: 0;
  max-width: 760px;
  color: var(--muted-foreground);
  font-size: 1.02rem;
  line-height: 1.86;
}

.article-cover {
  margin-top: 28px;
  overflow: hidden;
  border-radius: 22px;
}

.article-layout {
  display: grid;
  gap: 28px;
  grid-template-columns: minmax(0, 1fr) 320px;
  align-items: start;
}

.article-content {
  padding: clamp(28px, 4vw, 40px);
  border-radius: 22px;
  border: 1px solid rgba(59, 130, 246, 0.12);
  background: white;
}

.article-markdown :deep(h2) {
  margin: 0 0 16px;
  font-family: var(--font-display);
  font-size: 1.9rem;
  line-height: 1.3;
}

.article-markdown :deep(p) {
  margin: 0 0 18px;
  color: var(--muted-foreground);
  line-height: 1.92;
}

.article-markdown :deep(ul),
.article-markdown :deep(ol) {
  margin: 0 0 18px;
  padding-left: 22px;
  color: var(--muted-foreground);
  line-height: 1.88;
}

.aside-card {
  padding: 26px;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.12);
  background: white;
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
  font-size: 1.25rem;
  line-height: 1.4;
}

.aside-card__description {
  margin: 0;
  color: var(--muted-foreground);
  line-height: 1.82;
}

.aside-card__actions {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}

.article-empty {
  padding: 34px;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.12);
  background: white;
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
  .article-layout {
    grid-template-columns: 1fr;
  }
}
</style>

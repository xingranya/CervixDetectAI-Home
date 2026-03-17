<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { siteConfig } from '@/config/site';
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
        <div class="article-hero portal-surface" v-reveal>
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
            <div class="aside-card__label">项目服务</div>
            <h2 class="aside-card__title">欢迎进一步了解项目情况与合作信息</h2>
            <p class="aside-card__description">
              如需了解{{ siteConfig.projectName }}建设进展、研究方向、公开资料或{{ siteConfig.cooperationDirections.join('、') }}等合作方式，欢迎通过官方联系方式与我们取得联系。
            </p>
            <div class="aside-card__chips">
              <span v-for="item in siteConfig.cooperationDirections" :key="item">{{ item }}</span>
            </div>
            <div class="aside-card__actions">
              <AppButton href="mailto:support@hpvsc.icu">邮件咨询</AppButton>
              <AppButton to="/contact" variant="secondary">查看联系方式</AppButton>
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
          <p class="article-empty__description">该信息可能已调整、下线或链接地址已发生变化。</p>
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
  max-width: 1120px;
}

.article-hero {
  padding: clamp(28px, 4vw, 42px);
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
}

.article-hero__title {
  max-width: 900px;
  margin: 18px 0 14px;
  color: var(--foreground);
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 4.4vw, 4rem);
  line-height: 1.18;
}

.article-hero__excerpt {
  max-width: 780px;
  margin: 0;
  color: var(--muted-foreground);
  font-size: 1.04rem;
  line-height: 1.88;
}

.article-hero__actions {
  margin-top: 22px;
}

.article-hero__cover {
  margin-top: 28px;
  overflow: hidden;
  border-radius: var(--card-radius-xl);
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
  margin: 0 0 16px;
  color: var(--foreground);
  font-family: var(--font-display);
  font-size: 1.9rem;
  line-height: 1.3;
}

.article-markdown :deep(h3) {
  margin: 28px 0 14px;
  color: var(--foreground);
  font-size: 1.32rem;
  line-height: 1.42;
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

.article-markdown :deep(li + li) {
  margin-top: 8px;
}

.aside-card {
  padding: 26px;
  border-radius: var(--card-radius-xl);
  border: 1px solid rgba(181, 40, 47, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 247, 247, 0.98), rgba(255, 255, 255, 0.98));
  box-shadow: var(--shadow-md);
}

.aside-card__label {
  color: var(--secondary);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.aside-card__title {
  margin: 16px 0 12px;
  color: var(--foreground);
  font-size: 1.3rem;
  line-height: 1.48;
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
  background: rgba(181, 40, 47, 0.06);
  color: var(--secondary);
  font-size: 0.88rem;
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
  .article-layout {
    grid-template-columns: 1fr;
  }
}
</style>

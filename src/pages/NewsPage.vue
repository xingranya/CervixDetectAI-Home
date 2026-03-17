<script setup lang="ts">
import { computed } from 'vue';
import { siteConfig } from '@/config/site';
import { newsArticles } from '@/lib/news';
import NewsCard from '@/components/common/NewsCard.vue';
import PortalSectionHeading from '@/components/common/PortalSectionHeading.vue';
import SectionBadge from '@/components/common/SectionBadge.vue';
import PageHero from '@/components/layout/PageHero.vue';

const categories = computed(() => Array.from(new Set(newsArticles.map((article) => article.category))));
const latestPublishedAt = computed(() => newsArticles[0]?.publishedAt ?? '持续更新');
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

.news-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 30px;
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

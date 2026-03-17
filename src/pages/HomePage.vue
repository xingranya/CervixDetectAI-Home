<script setup lang="ts">
import { siteConfig } from '@/config/site';
import { getFeaturedNews, newsArticles } from '@/lib/news';
import AppButton from '@/components/common/AppButton.vue';

const featuredNews = getFeaturedNews(siteConfig.homeFeaturedNewsCount);
const leadNews = featuredNews[0] ?? newsArticles[0];
const secondaryNews = newsArticles.filter((article) => article.slug !== leadNews.slug).slice(0, 4);

const focusItems = [
  '坚持以临床需求为导向，持续推进智能影像分析能力建设。',
  '围绕筛查业务协同、成果应用与服务支持完善平台体系。',
  '强化新闻发布、成果展示与合作交流，提升团队对外服务能力。',
];

const notices = [
  { title: '云端智诊团队官方网站正式上线', date: '2026-03-17' },
  { title: '团队研究方向与成果展示栏目同步更新', date: '2026-03-15' },
  { title: '合作交流与资料咨询统一由官方邮箱受理', date: '2026-03-12' },
  { title: '新闻中心持续发布团队动态与建设进展', date: '2026-03-08' },
];

const researchDirections = [
  {
    title: '智能影像分析',
    description: '围绕宫颈影像识别、病灶提示与风险分层开展算法研究，形成稳定的核心引擎能力。',
    tag: '01',
  },
  {
    title: '云端协同平台',
    description: '构建病例、分析、报告与随访协同的一体化支撑平台，服务多角色业务联动。',
    tag: '02',
  },
  {
    title: '临床应用转化',
    description: '面向筛查机构、妇幼体系与专科场景推进算法与流程的真实业务落地。',
    tag: '03',
  },
  {
    title: '数据治理与规范',
    description: '聚焦数据安全、结构化表达和过程可追踪，支撑长期规范运营与品牌可信表达。',
    tag: '04',
  },
];

const achievements = [
  { value: '3', label: '软件著作权', description: '持续完善知识产权与品牌表达材料。' },
  { value: '4', label: '重点栏目', description: '团队概况、研究方向、成果转化与新闻中心统一呈现。' },
  { value: '24h', label: '邮箱响应机制', description: '合作咨询与资料申请由官方邮箱统一受理。' },
  { value: '1', label: '官方网站', description: '团队新闻发布、成果展示与合作交流集中对外展示。' },
];

const teamMembers = [
  {
    name: '团队负责人',
    title: '总体统筹与科研组织',
    description: '负责团队发展规划、外部合作统筹与重点项目推进，保持科研布局与品牌表达一致。',
  },
  {
    name: '算法研究组',
    title: '智能识别与模型优化',
    description: '持续推进图像识别、辅助判读与风险提示能力建设，服务临床场景迭代。',
  },
  {
    name: '平台工程组',
    title: '云端架构与业务协同',
    description: '负责平台工程落地、流程串联与稳定交付，支撑门户与业务系统统一演进。',
  },
  {
    name: '转化合作组',
    title: '产业对接与应用拓展',
    description: '面向医院、筛查机构与合作伙伴开展交流，推进成果展示、资料输出与合作洽谈。',
  },
];

const topicEntries = [
  { title: '专题专栏', description: '围绕团队建设、重点工作和学术活动发布专题内容。' },
  { title: '成果展示', description: '集中呈现知识产权、平台能力与阶段性建设成效。' },
  { title: '合作交流', description: '面向合作伙伴、医疗机构与行业用户提供沟通与服务支持。' },
  { title: '资料下载', description: '提供团队介绍、成果材料与相关公开资料下载入口。' },
];

const quickLinks = [
  '团队概况',
  '研究方向',
  '成果转化',
  '新闻中心',
  '合作交流',
  '平台入口',
  '资料申请',
  '联系我们',
];
</script>

<template>
  <div class="home-page">
    <section class="portal-hero">
      <div class="container portal-hero__inner">
        <div class="portal-hero__content" v-reveal>
          <div class="portal-hero__eyebrow">云端智诊团队官方网站</div>
          <h1 class="portal-hero__title">以智能影像与云端协同能力，服务宫颈筛查科研与应用转化。</h1>
          <p class="portal-hero__description">{{ siteConfig.heroSubtitle }}</p>
          <div class="portal-hero__actions">
            <AppButton to="/about">查看团队概况</AppButton>
            <AppButton to="/news" variant="secondary">进入新闻中心</AppButton>
          </div>
          <div class="portal-hero__meta">
            <span>科研导向</span>
            <span>平台建设</span>
            <span>成果转化</span>
            <span>合作交流</span>
          </div>
        </div>

        <aside class="portal-hero__focus" v-reveal="'100ms'">
          <div class="portal-hero__focus-label">团队简介</div>
          <div class="portal-hero__focus-title">聚焦智能影像与云端协同服务</div>
          <ul class="portal-hero__focus-list">
            <li v-for="item in focusItems" :key="item">{{ item }}</li>
          </ul>
          <div class="portal-hero__focus-footer">
            <span>科研引领</span>
            <span>服务临床</span>
          </div>
        </aside>
      </div>
      <div class="container portal-hero__dots" aria-hidden="true">
        <span class="is-active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <section class="section portal-section">
      <div class="container portal-grid">
        <article class="portal-panel portal-panel--news" v-reveal>
          <div class="portal-panel__head">
            <div>
              <div class="portal-panel__title">团队要闻</div>
              <div class="portal-panel__subtitle">News</div>
            </div>
            <RouterLink to="/news" class="portal-panel__more">更多</RouterLink>
          </div>

          <div class="lead-story">
            <div class="lead-story__cover" :style="{ backgroundImage: `url(${leadNews.cover})` }"></div>
            <div class="lead-story__content">
              <div class="lead-story__meta">{{ leadNews.category }} · {{ leadNews.publishedAt }}</div>
              <RouterLink :to="`/news/${leadNews.slug}`" class="lead-story__title">
                {{ leadNews.title }}
              </RouterLink>
              <p class="lead-story__excerpt">{{ leadNews.excerpt }}</p>
            </div>
          </div>

          <div class="story-list">
            <RouterLink
              v-for="article in secondaryNews"
              :key="article.slug"
              :to="`/news/${article.slug}`"
              class="story-item"
            >
              <span class="story-item__title">{{ article.title }}</span>
              <span class="story-item__date">{{ article.publishedAt }}</span>
            </RouterLink>
          </div>
        </article>

        <article class="portal-panel portal-panel--notice" v-reveal="'120ms'">
          <div class="portal-panel__head">
            <div>
              <div class="portal-panel__title">通知公告</div>
              <div class="portal-panel__subtitle">Notice</div>
            </div>
          </div>

          <div class="notice-list">
            <div v-for="notice in notices" :key="notice.title" class="notice-item">
              <span class="notice-item__title">{{ notice.title }}</span>
              <span class="notice-item__date">{{ notice.date }}</span>
            </div>
          </div>

          <div class="notice-stats">
            <div v-for="item in achievements.slice(0, 2)" :key="item.label" class="notice-stat">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container">
        <div class="section-head" v-reveal>
          <h2 class="section-title">研究方向</h2>
          <p class="section-description">围绕智能影像、云端协同、临床应用与数据治理组织团队科研工作与工程建设。</p>
        </div>
        <div class="direction-grid">
          <article
            v-for="(direction, index) in researchDirections"
            :key="direction.title"
            v-reveal="`${index * 70}ms`"
            class="direction-card"
          >
            <div class="direction-card__tag">{{ direction.tag }}</div>
            <h3>{{ direction.title }}</h3>
            <p>{{ direction.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--blue">
      <div class="container results-layout">
        <div v-reveal>
          <h2 class="section-title section-title--light">核心成果</h2>
          <p class="section-description section-description--light">
            围绕团队建设、知识产权、平台能力和服务体系，持续提升宫颈智能影像领域的研究与应用水平。
          </p>
        </div>
        <div class="achievement-grid">
          <div
            v-for="(item, index) in achievements"
            :key="item.label"
            v-reveal="`${index * 70}ms`"
            class="achievement-card"
          >
            <div class="achievement-card__value">{{ item.value }}</div>
            <div class="achievement-card__label">{{ item.label }}</div>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container team-layout">
        <div class="section-head" v-reveal>
          <h2 class="section-title">团队组织</h2>
          <p class="section-description">团队下设科研统筹、算法研究、平台工程与合作交流等方向，形成分工明确、协同推进的工作机制。</p>
        </div>
        <div class="team-grid">
          <article v-for="(member, index) in teamMembers" :key="member.name" v-reveal="`${index * 70}ms`" class="team-card">
            <div class="team-card__avatar">{{ member.name.slice(0, 2) }}</div>
            <div class="team-card__name">{{ member.name }}</div>
            <div class="team-card__title">{{ member.title }}</div>
            <p>{{ member.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section portal-bottom">
      <div class="container portal-bottom__grid">
        <div class="topic-board" v-reveal>
          <div class="portal-panel__head">
            <div>
              <div class="portal-panel__title">专题栏目</div>
              <div class="portal-panel__subtitle">Columns</div>
            </div>
          </div>
          <div class="topic-grid">
            <article v-for="topic in topicEntries" :key="topic.title" class="topic-card">
              <h3>{{ topic.title }}</h3>
              <p>{{ topic.description }}</p>
            </article>
          </div>
        </div>

        <div class="quick-board" v-reveal="'100ms'">
          <div class="portal-panel__head">
            <div>
              <div class="portal-panel__title">快捷通道</div>
              <div class="portal-panel__subtitle">Quick Links</div>
            </div>
          </div>
          <div class="quick-grid">
            <RouterLink v-for="item in quickLinks" :key="item" class="quick-link" to="/contact">
              {{ item }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--compact">
      <div class="container" v-reveal>
        <div class="contact-banner">
          <div class="contact-banner__label">合作交流</div>
          <h2 class="contact-banner__title">欢迎围绕科研合作、平台共建与场景落地开展交流。</h2>
          <p class="contact-banner__description">
            欢迎围绕科研合作、技术交流、平台共建、成果应用等方向与我们联系，我们将及时提供相关资料与沟通支持。
          </p>
          <div class="contact-banner__actions">
            <AppButton href="mailto:support@hpvsc.icu">邮件咨询</AppButton>
            <AppButton to="/contact" variant="secondary">查看联系方式</AppButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portal-hero {
  position: relative;
  padding: 0 0 22px;
  color: white;
  background:
    radial-gradient(circle at 22% 18%, rgba(255, 215, 120, 0.16), transparent 22%),
    radial-gradient(circle at 80% 72%, rgba(255, 255, 255, 0.08), transparent 24%),
    linear-gradient(180deg, rgba(140, 10, 16, 0.18), transparent 24%),
    var(--gradient-hero);
  overflow: hidden;
}

.portal-hero::before,
.portal-hero::after {
  content: '';
  position: absolute;
  pointer-events: none;
}

.portal-hero::before {
  inset: 0;
  background:
    linear-gradient(115deg, rgba(255, 208, 120, 0.08) 0 18%, transparent 18% 100%),
    radial-gradient(circle at 50% 100%, rgba(255, 201, 91, 0.28), transparent 34%);
}

.portal-hero::after {
  left: 0;
  right: 0;
  bottom: 30px;
  height: 110px;
  background:
    linear-gradient(90deg, transparent 0 5%, rgba(255, 214, 128, 0.92) 5% 11%, transparent 11% 18%, rgba(255, 214, 128, 0.86) 18% 24%, transparent 24% 30%, rgba(255, 214, 128, 0.92) 30% 36%, transparent 36% 68%, rgba(255, 214, 128, 0.86) 68% 75%, transparent 75% 100%),
    linear-gradient(180deg, transparent 0 72%, rgba(255, 214, 128, 0.9) 72% 76%, transparent 76% 100%);
  opacity: 0.45;
}

.portal-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 32px;
  align-items: end;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  min-height: 560px;
  padding: 74px 0 120px;
}

.portal-hero__eyebrow {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.portal-hero__title {
  max-width: 760px;
  margin: 24px 0 0;
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 4.6vw, 4.8rem);
  font-weight: 700;
  line-height: 1.22;
}

.portal-hero__description {
  max-width: 720px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: 1.06rem;
  line-height: 1.95;
}

.portal-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.portal-hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.portal-hero__meta span {
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  font-size: 0.92rem;
}

.portal-hero__focus {
  position: relative;
  z-index: 1;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 18px;
  background: rgba(103, 10, 14, 0.32);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.portal-hero__focus-label {
  color: rgba(255, 243, 213, 0.86);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.portal-hero__focus-title {
  margin-top: 14px;
  font-family: var(--font-display);
  font-size: 1.62rem;
  line-height: 1.4;
}

.portal-hero__focus-list {
  margin: 18px 0 0;
  padding-left: 18px;
  line-height: 1.95;
  color: rgba(255, 255, 255, 0.86);
}

.portal-hero__focus-footer {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.portal-hero__focus-footer span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.82rem;
}

.portal-hero__dots {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.portal-hero__dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.36);
}

.portal-hero__dots .is-active {
  width: 28px;
  border-radius: 999px;
  background: white;
}

.portal-section {
  padding-top: 34px;
}

.portal-grid,
.portal-bottom__grid {
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(0, 1.16fr) minmax(320px, 0.84fr);
}

.portal-panel,
.topic-board,
.quick-board {
  padding: 28px;
  border: 1px solid rgba(13, 94, 170, 0.1);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-sm);
}

.portal-panel__head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
}

.portal-panel__title {
  color: var(--accent);
  font-size: 1.52rem;
  font-weight: 800;
}

.portal-panel__subtitle {
  margin-top: 2px;
  color: var(--muted-foreground);
  font-size: 0.82rem;
}

.portal-panel__more {
  color: var(--accent);
  font-weight: 700;
}

.lead-story {
  display: grid;
  gap: 22px;
  grid-template-columns: minmax(280px, 0.92fr) minmax(0, 1.08fr);
  margin-top: 24px;
}

.lead-story__cover {
  min-height: 250px;
  border-radius: 14px;
  background-position: center;
  background-size: cover;
}

.lead-story__meta {
  color: var(--muted-foreground);
  font-size: 0.9rem;
}

.lead-story__title {
  display: block;
  margin-top: 14px;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.45;
}

.lead-story__excerpt {
  margin: 16px 0 0;
  color: var(--muted-foreground);
  line-height: 1.9;
}

.story-list,
.notice-list {
  display: grid;
  gap: 14px;
  margin-top: 24px;
}

.story-item,
.notice-item {
  display: grid;
  gap: 8px;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px dashed rgba(13, 94, 170, 0.14);
}

.story-item__title,
.notice-item__title {
  line-height: 1.75;
}

.story-item__date,
.notice-item__date {
  color: var(--muted-foreground);
  font-size: 0.88rem;
}

.notice-stats {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 26px;
}

.notice-stat {
  display: grid;
  gap: 6px;
  padding: 18px;
  border-radius: 14px;
  background: var(--surface-blue);
}

.notice-stat strong {
  font-size: 1.8rem;
  color: var(--accent);
}

.section--paper {
  background:
    radial-gradient(circle at 86% 16%, rgba(13, 94, 170, 0.04), transparent 18%),
    linear-gradient(180deg, #fbfcfd 0%, #f5f8fb 100%);
}

.section-head {
  display: grid;
  gap: 10px;
}

.direction-grid,
.team-grid,
.topic-grid,
.quick-grid,
.achievement-grid {
  display: grid;
  gap: 20px;
  margin-top: 32px;
}

.direction-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.direction-card {
  padding: 26px 24px;
  border-radius: 18px;
  background: white;
  border: 1px solid rgba(13, 94, 170, 0.08);
  box-shadow: var(--shadow-sm);
}

.direction-card__tag {
  color: var(--secondary);
  font-size: 1.2rem;
  font-weight: 800;
}

.direction-card h3 {
  margin: 14px 0 10px;
  font-size: 1.22rem;
}

.direction-card p {
  margin: 0;
  color: var(--muted-foreground);
  line-height: 1.82;
}

.section--blue {
  color: white;
  background:
    linear-gradient(135deg, rgba(15, 45, 77, 0.92), rgba(15, 45, 77, 0.92)),
    radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.08), transparent 24%);
}

.results-layout {
  display: grid;
  gap: 24px;
  align-items: start;
}

.section-title--light,
.section-description--light {
  color: white;
}

.section-description--light {
  color: rgba(255, 255, 255, 0.78);
}

.achievement-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.achievement-card {
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
}

.achievement-card__value {
  font-size: 2.4rem;
  font-weight: 800;
  color: #f3d58a;
}

.achievement-card__label {
  margin-top: 8px;
  font-size: 1rem;
  font-weight: 700;
}

.achievement-card p {
  margin: 12px 0 0;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.76);
}

.team-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.team-card {
  padding: 24px;
  border-radius: 18px;
  border: 1px solid rgba(13, 94, 170, 0.1);
  background: white;
  box-shadow: var(--shadow-sm);
}

.team-card__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  font-weight: 800;
}

.team-card__name {
  margin-top: 18px;
  font-size: 1.16rem;
  font-weight: 800;
}

.team-card__title {
  margin-top: 8px;
  color: var(--accent);
  font-size: 0.96rem;
  font-weight: 700;
}

.team-card p {
  margin: 14px 0 0;
  color: var(--muted-foreground);
  line-height: 1.82;
}

.topic-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.topic-card {
  min-height: 180px;
  padding: 22px;
  border-radius: 16px;
  color: white;
  background:
    linear-gradient(135deg, rgba(13, 94, 170, 0.88), rgba(15, 45, 77, 0.92)),
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent);
}

.topic-card h3 {
  margin: 0;
  font-size: 1.18rem;
}

.topic-card p {
  margin: 14px 0 0;
  line-height: 1.82;
  color: rgba(255, 255, 255, 0.82);
}

.quick-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.quick-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid rgba(13, 94, 170, 0.12);
  background: var(--surface-blue);
  font-weight: 700;
  text-align: center;
}

.contact-banner {
  padding: 34px;
  border-radius: 18px;
  border: 1px solid rgba(13, 94, 170, 0.12);
  background: white;
  box-shadow: var(--shadow-sm);
}

.contact-banner__label {
  color: var(--accent);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.contact-banner__title {
  margin: 18px 0 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.35;
}

.contact-banner__description {
  max-width: 820px;
  margin: 18px 0 0;
  color: var(--muted-foreground);
  line-height: 1.9;
}

.contact-banner__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}

@media (max-width: 1120px) {
  .portal-hero__inner,
  .portal-grid,
  .portal-bottom__grid,
  .lead-story,
  .direction-grid,
  .team-grid,
  .achievement-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 820px) {
  .topic-grid,
  .quick-grid,
  .notice-stats {
    grid-template-columns: 1fr;
  }

  .story-item,
  .notice-item {
    grid-template-columns: 1fr;
  }

  .portal-hero__title {
    font-size: clamp(2.2rem, 10vw, 3.4rem);
  }
}
</style>

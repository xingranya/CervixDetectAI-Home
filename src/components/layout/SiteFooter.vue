<script setup lang="ts">
import { siteConfig } from '@/config/site';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__brand-block">
        <div class="site-footer__brand-wrap">
          <img :src="siteConfig.logoUrl" :alt="siteConfig.brandName" class="site-footer__logo" />
          <div>
            <div class="site-footer__brand">{{ siteConfig.brandName }}</div>
            <div class="site-footer__subtitle">{{ siteConfig.tagline }}</div>
          </div>
        </div>
        <p class="site-footer__description">
          提供项目介绍、新闻动态、成果信息、公开资料和联系入口，方便了解项目并开展交流。
        </p>
      </div>
      <div class="site-footer__links">
        <div>
          <div class="site-footer__label">联系方式</div>
          <a :href="`mailto:${siteConfig.contact.email}`">{{ siteConfig.contact.email }}</a>
        </div>
        <div>
          <div class="site-footer__label">联系地址</div>
          <span>{{ siteConfig.contact.address }}</span>
        </div>
        <div>
          <div class="site-footer__label">快捷访问</div>
          <RouterLink to="/about">团队概况</RouterLink>
        </div>
      </div>
      <div class="site-footer__filing">
        <span>&copy; {{ currentYear }} {{ siteConfig.brandName }}</span>
        <span>{{ siteConfig.filingNumber }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  padding: 52px 0 56px;
  color: white;
  background:
    linear-gradient(180deg, rgba(15, 45, 77, 0.96), rgba(15, 45, 77, 0.96)),
    linear-gradient(135deg, rgba(13, 94, 170, 0.18), transparent 60%);
  overflow: hidden;
}

.site-footer__inner {
  position: relative;
  display: grid;
  gap: 28px;
}

.site-footer__brand-block {
  max-width: 720px;
}

.site-footer__brand-wrap {
  display: flex;
  align-items: center;
  gap: 16px;
}

.site-footer__logo {
  width: 62px;
  height: 62px;
  border-radius: 50%;
}

.site-footer__brand {
  font-family: var(--font-display);
  font-size: 1.72rem;
  font-weight: 700;
}

.site-footer__subtitle {
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
}

.site-footer__description {
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.86;
}

.site-footer__links {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.site-footer__label {
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.site-footer__links a,
.site-footer__links span {
  display: inline-flex;
  font-weight: 700;
  line-height: 1.8;
}

.site-footer__links a:hover {
  color: #d7e8fb;
}

.site-footer__filing {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 760px) {
  .site-footer__brand-wrap {
    align-items: flex-start;
  }

  .site-footer__links {
    grid-template-columns: 1fr;
  }
}
</style>

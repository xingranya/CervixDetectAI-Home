<script setup lang="ts">
import { siteConfig } from '@/config/site';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__top">
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
          <div class="site-footer__chips">
            <span v-for="item in siteConfig.cooperationDirections" :key="item">{{ item }}</span>
          </div>
        </div>
        <div class="site-footer__links">
          <div class="site-footer__group">
            <div class="site-footer__label">联系方式</div>
            <a :href="`mailto:${siteConfig.contact.email}`" :aria-label="`发送邮件至 ${siteConfig.contact.email}`">
              {{ siteConfig.contact.email }}
            </a>
          </div>
          <div class="site-footer__group">
            <div class="site-footer__label">联系地址</div>
            <span>{{ siteConfig.contact.address }}</span>
          </div>
          <div class="site-footer__group">
            <div class="site-footer__label">快捷访问</div>
            <div class="site-footer__quick-links">
              <RouterLink to="/about">团队概况</RouterLink>
              <a :href="siteConfig.loginUrl" target="_blank" rel="noopener noreferrer">平台入口</a>
            </div>
          </div>
        </div>
      </div>
      <div class="site-footer__bottom">
        <span>&copy; {{ currentYear }} {{ siteConfig.brandName }}</span>
        <span>{{ siteConfig.filingNumber }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  padding: 48px 0 28px;
  color: white;
  background: #1565c0;
  overflow: hidden;
}

.site-footer::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0));
}

.site-footer__inner {
  position: relative;
  display: grid;
  gap: 28px;
}

.site-footer__top {
  display: grid;
  gap: 32px;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  align-items: start;
}

.site-footer__brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.site-footer__logo {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.14);
}

.site-footer__brand {
  font-family: var(--font-display);
  font-size: 1.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.site-footer__subtitle {
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.92rem;
}

.site-footer__description {
  max-width: 560px;
  margin: 16px 0 0;
  color: rgba(255, 255, 255, 0.84);
  line-height: 1.9;
}

.site-footer__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.site-footer__chips span {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.94);
  font-size: 0.86rem;
  font-weight: 600;
}

.site-footer__links {
  display: grid;
  gap: 18px;
}

.site-footer__group {
  display: grid;
  gap: 8px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}

.site-footer__label {
  color: rgba(255, 255, 255, 0.64);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.site-footer__links a,
.site-footer__links span {
  display: inline-flex;
  width: fit-content;
  color: white;
  font-weight: 600;
  line-height: 1.8;
}

.site-footer__quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 20px;
}

.site-footer__links a:hover {
  color: rgba(255, 255, 255, 0.82);
}

.site-footer__bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.94rem;
}

@media (max-width: 760px) {
  .site-footer {
    padding: 40px 0 24px;
  }

  .site-footer__top {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .site-footer__brand-wrap {
    align-items: flex-start;
  }

  .site-footer__brand {
    font-size: 1.52rem;
  }

  .site-footer__bottom {
    justify-content: flex-start;
  }
}
</style>

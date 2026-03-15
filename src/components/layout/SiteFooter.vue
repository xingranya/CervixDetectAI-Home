<script setup lang="ts">
import { siteConfig } from '@/config/site';
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__brand-block">
        <div class="site-footer__brand">CervixDetectAI</div>
        <p class="site-footer__description">
          面向医疗机构的宫颈影像智能辅助筛查平台，围绕影像分析、结构化报告与随访协同建立统一工作流。
        </p>
      </div>
      <div class="site-footer__links">
        <div>
          <div class="site-footer__label">联系</div>
          <a href="mailto:support@hpvsc.icu">support@hpvsc.icu</a>
        </div>
        <div>
          <div class="site-footer__label">访问</div>
          <a :href="siteConfig.loginUrl" target="_blank" rel="noopener noreferrer">进入系统</a>
        </div>
        <div>
          <div class="site-footer__label">项目</div>
          <a href="https://github.com/xingranya/CervixDetectAI" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div class="site-footer__filing">
        <span>© 2026 CervixDetectAI</span>
        <span>{{ siteConfig.filingNumber }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 52px 0 56px;
  color: white;
  background: var(--dark);
}

.site-footer__inner {
  display: grid;
  gap: 28px;
}

.site-footer__brand-block {
  max-width: 720px;
}

.site-footer__brand {
  font-family: var(--font-display);
  font-size: 1.68rem;
  font-weight: 800;
  letter-spacing: -0.04em;
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
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.site-footer__links a {
  display: inline-flex;
  font-weight: 700;
}

.site-footer__filing {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

@media (max-width: 760px) {
  .site-footer__links {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup lang="ts">
import { siteConfig } from '@/config/site';

const accuracyValue = siteConfig.home.metrics.accuracy.value;
const accuracySuffix = siteConfig.home.metrics.accuracy.suffix;
</script>

<template>
  <div class="hero-visual">
    <div class="hero-visual__bg-shapes">
      <div class="hero-visual__shape hero-visual__shape--blue"></div>
      <div class="hero-visual__shape hero-visual__shape--soft"></div>
      <div class="hero-visual__dots"></div>
    </div>

    <div class="hero-visual__panel hero-visual__panel--primary">
      <div class="hero-visual__eyebrow">SCREENING SYSTEM</div>
      <div class="hero-visual__headline">结构化报告与筛查流程协同</div>
      <div class="hero-visual__rows">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="hero-visual__panel hero-visual__panel--report">
      <div class="hero-visual__label">病例报告</div>
      <div class="hero-visual__report-title">高风险预警 / 建议复核</div>
      <div class="hero-visual__report-tags">
        <span>AI 识别</span>
        <span>结构化输出</span>
      </div>
    </div>

    <div class="hero-visual__panel hero-visual__panel--score">
      <div class="hero-visual__score">{{ accuracyValue }}{{ accuracySuffix }}</div>
      <div class="hero-visual__caption">{{ siteConfig.home.metrics.accuracy.label }}</div>
    </div>

    <div class="hero-visual__panel hero-visual__panel--flow">
      <div class="hero-visual__label">流程节点</div>
      <div class="hero-visual__flow">
        <span>影像采集</span>
        <span>AI 分析</span>
        <span>报告输出</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-visual {
  position: relative;
  min-height: 560px;
  padding: 10px;
  border-radius: 24px;
  background: transparent;
  overflow: hidden;
}

.hero-visual__bg-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-visual__shape {
  position: absolute;
}

.hero-visual__shape--blue {
  right: 8px;
  top: 18px;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  animation: float-parallax 8s ease-in-out infinite;
}

.hero-visual__shape--soft {
  left: 20px;
  bottom: 30px;
  width: 180px;
  height: 180px;
  background: rgba(255, 255, 255, 0.06);
  transform: rotate(18deg);
  animation: float-parallax 10s ease-in-out infinite reverse;
}

.hero-visual__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.5;
}

.hero-visual__panel {
  position: absolute;
  border-radius: var(--radius-lg);
  padding: 22px;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: var(--shadow-md);
  transition:
    transform 0.3s var(--ease-spring),
    box-shadow 0.3s var(--ease-smooth);
}

.hero-visual__panel:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.hero-visual__panel--primary {
  top: 86px;
  left: 56px;
  width: min(78%, 360px);
  color: var(--foreground);
  animation: float-card 6s ease-in-out infinite;
}

.hero-visual__panel--report {
  top: 132px;
  right: 56px;
  width: min(46%, 258px);
  animation: float-card 5s ease-in-out infinite;
  animation-delay: -1s;
}

.hero-visual__panel--score {
  left: 34px;
  bottom: 38px;
  width: 210px;
  color: white;
  background: var(--dark-soft);
  border: none;
  box-shadow: var(--shadow-lg);
  animation: float-card 4s ease-in-out infinite;
  animation-delay: -2s;
}

.hero-visual__panel--score::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(59, 130, 246, 0.1));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.hero-visual__panel--flow {
  right: 22px;
  bottom: 80px;
  width: min(46%, 260px);
  animation: float-card 7s ease-in-out infinite;
  animation-delay: -3s;
}

.hero-visual__eyebrow,
.hero-visual__label {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

.hero-visual__headline {
  margin-top: 14px;
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.03em;
}

.hero-visual__rows {
  display: grid;
  gap: 10px;
  margin-top: 24px;
}

.hero-visual__rows span {
  display: block;
  height: 12px;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.08));
  border-radius: 6px;
}

.hero-visual__rows span:nth-child(2) {
  width: 82%;
}

.hero-visual__rows span:nth-child(3) {
  width: 58%;
}

.hero-visual__report-title {
  margin-top: 12px;
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.45;
}

.hero-visual__report-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.hero-visual__report-tags span {
  padding: 7px 10px;
  border-radius: var(--radius-sm);
  background: var(--surface-blue);
  font-size: 0.82rem;
  font-weight: 700;
  transition: transform 0.2s var(--ease-spring);
}

.hero-visual__panel:hover .hero-visual__report-tags span {
  transform: translateX(2px);
}

.hero-visual__score {
  font-family: var(--font-display);
  font-size: 2.9rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  text-shadow: 0 0 40px rgba(59, 130, 246, 0.4);
}

.hero-visual__caption {
  margin-top: 10px;
  font-weight: 600;
  opacity: 0.9;
}

.hero-visual__flow {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

.hero-visual__flow span {
  display: flex;
  align-items: center;
  min-height: 42px;
  padding: 0 12px;
  border-radius: var(--radius-sm);
  background: var(--surface-slate);
  color: var(--foreground);
  font-weight: 700;
  transition:
    transform 0.2s var(--ease-spring),
    background-color 0.2s var(--ease-smooth);
}

.hero-visual__panel:hover .hero-visual__flow span {
  transform: translateX(4px);
}

.hero-visual__flow span:hover {
  background: var(--surface-blue);
}

@media (max-width: 960px) {
  .hero-visual {
    min-height: 460px;
  }

  .hero-visual__panel--primary {
    width: calc(100% - 68px);
  }

  .hero-visual__panel--report {
    width: min(48%, 220px);
  }

  .hero-visual__panel--score {
    left: 16px;
    bottom: 38px;
  }

  .hero-visual__panel--flow {
    right: 12px;
    bottom: 28px;
    width: min(48%, 236px);
  }
}

@media (max-width: 640px) {
  .hero-visual {
    min-height: 320px;
    padding: 18px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .hero-visual__bg-shapes {
    display: none;
  }

  .hero-visual__panel {
    padding: 16px;
  }

  .hero-visual__panel--primary {
    display: none;
  }

  .hero-visual__panel--report {
    display: none;
  }

  .hero-visual__panel--score {
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
    width: 100%;
    max-width: 280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 18px 20px;
  }

  .hero-visual__panel--flow {
    display: none;
  }

  .hero-visual__score {
    font-size: 2.2rem;
  }

  .hero-visual__caption {
    margin-top: 0;
    font-size: 0.88rem;
  }
}
</style>

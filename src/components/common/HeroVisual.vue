<template>
  <div class="hero-visual">
    <div class="hero-visual__shape hero-visual__shape--blue"></div>
    <div class="hero-visual__shape hero-visual__shape--soft"></div>

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
      <div class="hero-visual__score">99.55%</div>
      <div class="hero-visual__caption">辅助准确率基线</div>
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
}

.hero-visual__shape--soft {
  left: 20px;
  bottom: 30px;
  width: 180px;
  height: 180px;
  background: rgba(255, 255, 255, 0.06);
  transform: rotate(18deg);
}

.hero-visual__panel {
  position: absolute;
  border-radius: var(--radius-lg);
  padding: 22px;
  transition: transform 0.3s ease-out;
}

.hero-visual__panel:hover {
  transform: translateY(-4px);
}

.hero-visual__panel--primary {
  top: 86px;
  left: 56px;
  width: min(78%, 360px);
  color: var(--foreground);
  background: rgba(255, 255, 255, 0.96);
}

.hero-visual__panel--report {
  top: 132px;
  right: 56px;
  width: min(46%, 258px);
  background: rgba(255, 255, 255, 0.96);
  animation: float-card 5s ease-in-out infinite;
}

.hero-visual__panel--score {
  left: 34px;
  bottom: 38px;
  width: 210px;
  color: white;
  background: var(--dark);
  animation: float-card 4s ease-in-out infinite;
}

.hero-visual__panel--flow {
  right: 22px;
  bottom: 80px;
  width: min(46%, 260px);
  background: rgba(255, 255, 255, 0.92);
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
  background: rgba(59, 130, 246, 0.18);
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
}

.hero-visual__score {
  font-family: var(--font-display);
  font-size: 2.9rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
}

.hero-visual__caption {
  margin-top: 10px;
  font-weight: 600;
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
    min-height: 420px;
    padding: 18px;
  }

  .hero-visual__panel {
    padding: 18px;
  }

  .hero-visual__panel--primary {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
  }

  .hero-visual__panel--report,
  .hero-visual__panel--score,
  .hero-visual__panel--flow {
    display: none;
  }
}
</style>

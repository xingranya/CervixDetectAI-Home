<template>
  <section class="section section-blue-tint">
    <div class="container">
      <div class="not-found-card">
        <div class="not-found-code">404</div>
        <h1 class="not-found-title">抱歉，您访问的页面不存在。</h1>
        <p class="not-found-description">
          您可以返回首页继续了解平台信息，或前往新闻中心与联系我们页面。
        </p>
        <div class="not-found-actions">
          <RouterLink class="not-found-button" to="/">返回首页</RouterLink>
          <RouterLink class="not-found-button not-found-button--secondary" to="/news">新闻中心</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found-card {
  max-width: 760px;
  margin: 0 auto;
  padding: 42px;
  text-align: center;
  border-radius: 22px;
  border: 1px solid var(--card-border-strong);
  background: white;
}

.not-found-code {
  color: var(--accent);
  letter-spacing: 0.16em;
  font-size: 0.82rem;
  font-weight: 700;
}

.not-found-title {
  margin: 16px 0;
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  line-height: 1.1;
}

.not-found-description {
  max-width: 620px;
  margin: 0 auto;
  color: var(--muted-foreground);
  line-height: 1.88;
}

.not-found-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
}

.not-found-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: var(--radius-md);
  background: var(--accent);
  color: white;
  font-weight: 700;
}

.not-found-button--secondary {
  color: var(--foreground);
  border: 1px solid rgba(13, 94, 170, 0.14);
  background: var(--surface-slate);
}
</style>

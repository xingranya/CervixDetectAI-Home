<script setup lang="ts">
import { SORTED_SOFTWARE_COPYRIGHTS } from '@brand/softwareCopyrights';
</script>

<template>
  <div class="copyright-grid">
    <article
      v-for="(item, index) in SORTED_SOFTWARE_COPYRIGHTS"
      :key="item.id"
      class="copyright-card"
      :class="`copyright-card--${index % 3}`"
    >
      <div class="copyright-card__version">{{ item.version }}</div>
      <h3 class="copyright-card__title">{{ item.name }}</h3>
      <dl class="copyright-card__meta">
        <div>
          <dt>登记号</dt>
          <dd>{{ item.registrationNo }}</dd>
        </div>
        <div>
          <dt>证书号</dt>
          <dd>{{ item.certificateNo }}</dd>
        </div>
      </dl>
      <a v-if="item.imageUrl" class="copyright-card__link" :href="item.imageUrl" target="_blank" rel="noopener noreferrer">
        查看证书 ↗
      </a>
    </article>
  </div>
</template>

<style scoped>
.copyright-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.copyright-card {
  height: 100%;
  padding: 28px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(59, 130, 246, 0.08);
}

.copyright-card--0 {
  background: white;
}

.copyright-card--1 {
  background: var(--surface-slate);
}

.copyright-card--2 {
  background: white;
}

.copyright-card__version {
  display: inline-flex;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  background: var(--surface-blue);
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.copyright-card__title {
  margin: 16px 0;
  font-size: 1.18rem;
  font-weight: 800;
  line-height: 1.5;
}

.copyright-card__meta {
  display: grid;
  gap: 14px;
  margin: 0;
}

.copyright-card__meta dt {
  color: var(--muted-foreground);
  font-size: 0.88rem;
}

.copyright-card__meta dd {
  margin: 6px 0 0;
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.7;
}

.copyright-card__link {
  display: inline-flex;
  margin-top: 18px;
  font-weight: 700;
  color: var(--accent);
}

@media (max-width: 960px) {
  .copyright-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup lang="ts">
import SectionBadge from '@/components/common/SectionBadge.vue';

defineProps<{
  badge: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <section class="page-hero section section--compact">
    <div class="container">
      <div class="page-hero__surface" v-reveal>
        <SectionBadge :label="badge" pulse />
        <h1 class="page-hero__title">{{ title }}</h1>
        <p class="page-hero__description">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding-top: 28px;
}

.page-hero__surface {
  position: relative;
  padding: clamp(36px, 5vw, 62px);
  border: 1px solid var(--card-border-strong);
  border-radius: var(--card-radius-xl);
  background:
    linear-gradient(90deg, rgba(181, 40, 47, 0.08) 0 8px, transparent 8px 100%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 248, 252, 0.98));
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.page-hero__surface::after {
  content: '';
  position: absolute;
  right: 36px;
  top: 24px;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  border: 1px solid rgba(13, 94, 170, 0.08);
  opacity: 0.5;
}

.page-hero__surface::before {
  content: '';
  position: absolute;
  left: -20px;
  bottom: -24px;
  width: 240px;
  height: 140px;
  background:
    linear-gradient(90deg, rgba(13, 94, 170, 0.08) 0 1px, transparent 1px),
    linear-gradient(rgba(13, 94, 170, 0.08) 0 1px, transparent 1px);
  background-size: 18px 18px;
  opacity: 0.3;
}

.page-hero__title {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 18px 0 14px;
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 4vw, 3.6rem);
  font-weight: 700;
  line-height: 1.24;
}

.page-hero__description {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0;
  color: var(--muted-foreground);
  font-size: 1rem;
  line-height: 1.9;
}

@media (max-width: 768px) {
  .page-hero__surface::before,
  .page-hero__surface::after {
    display: none;
  }
}
</style>

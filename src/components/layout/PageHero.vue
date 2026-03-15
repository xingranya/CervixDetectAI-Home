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
  border: 1px solid rgba(59, 130, 246, 0.12);
  border-radius: 20px;
  background:
    linear-gradient(135deg, rgba(59, 130, 246, 0.07) 0 22%, transparent 22% 100%),
    white;
  overflow: hidden;
}

.page-hero__surface::after {
  content: '';
  position: absolute;
  right: -28px;
  bottom: -34px;
  width: 150px;
  height: 150px;
  border-radius: 22px;
  background: rgba(59, 130, 246, 0.08);
  transform: rotate(16deg);
}

.page-hero__title {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 18px 0 14px;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.5vw, 3.95rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.page-hero__description {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0;
  color: var(--muted-foreground);
  font-size: 1rem;
  line-height: 1.82;
}
</style>

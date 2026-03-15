<script setup lang="ts">
withDefaults(
  defineProps<{
    value: string;
    label: string;
    description?: string;
    tone?: 'light' | 'blue' | 'dark' | 'slate';
  }>(),
  {
    description: undefined,
    tone: 'light',
  },
);
</script>

<template>
  <article class="metric-tile" :class="`metric-tile--${tone}`">
    <div class="metric-tile__value">{{ value }}</div>
    <div class="metric-tile__label">{{ label }}</div>
    <p v-if="description" class="metric-tile__description">{{ description }}</p>
  </article>
</template>

<style scoped>
.metric-tile {
  min-height: 100%;
  padding: 26px;
  border-radius: var(--radius-lg);
  border-top: 4px solid transparent;
}

.metric-tile--light {
  color: var(--foreground);
  background: white;
  border-top-color: var(--accent);
}

.metric-tile--blue {
  color: white;
  background: var(--accent);
  border-top-color: rgba(255, 255, 255, 0.38);
}

.metric-tile--dark {
  color: white;
  background: var(--dark-soft);
  border-top-color: rgba(255, 255, 255, 0.28);
}

.metric-tile--slate {
  color: var(--foreground);
  background: var(--surface-slate);
  border-top-color: var(--accent);
}

.metric-tile__value {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.04em;
}

.metric-tile__label {
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 700;
}

.metric-tile__description {
  margin: 10px 0 0;
  line-height: 1.7;
  opacity: 0.82;
}
</style>

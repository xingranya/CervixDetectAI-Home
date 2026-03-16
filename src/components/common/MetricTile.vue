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
    <div class="metric-tile__glow"></div>
    <div class="metric-tile__value">{{ value }}</div>
    <div class="metric-tile__label">{{ label }}</div>
    <p v-if="description" class="metric-tile__description">{{ description }}</p>
  </article>
</template>

<style scoped>
.metric-tile {
  position: relative;
  min-height: 100%;
  padding: 26px;
  border-radius: var(--radius-lg);
  border-top: 4px solid transparent;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.3s var(--ease-spring),
    box-shadow 0.3s var(--ease-smooth);
  overflow: hidden;
}

.metric-tile:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.metric-tile__glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  transition: opacity 0.4s var(--ease-smooth);
  pointer-events: none;
}

.metric-tile:hover .metric-tile__glow {
  opacity: 1;
}

.metric-tile--light {
  color: var(--foreground);
  background: white;
  border-top-color: var(--accent);
}

.metric-tile--blue {
  color: white;
  background: var(--gradient-primary);
  border-top-color: rgba(255, 255, 255, 0.38);
  box-shadow: var(--shadow-accent);
}

.metric-tile--blue:hover {
  box-shadow: var(--shadow-accent-lg);
}

.metric-tile--blue .metric-tile__glow {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
}

.metric-tile--dark {
  color: white;
  background: var(--dark-soft);
  border-top-color: rgba(255, 255, 255, 0.28);
}

.metric-tile--dark .metric-tile__glow {
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
}

.metric-tile--slate {
  color: var(--foreground);
  background: var(--surface-slate);
  border-top-color: var(--accent);
}

.metric-tile__value {
  position: relative;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, currentColor 0%, currentColor 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.metric-tile--blue .metric-tile__value,
.metric-tile--dark .metric-tile__value {
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
}

.metric-tile__label {
  position: relative;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 700;
}

.metric-tile__description {
  position: relative;
  margin: 10px 0 0;
  line-height: 1.7;
  opacity: 0.82;
}
</style>

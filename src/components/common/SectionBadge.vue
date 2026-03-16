<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    pulse?: boolean;
    variant?: 'default' | 'gradient' | 'glass';
  }>(),
  {
    pulse: false,
    variant: 'default',
  },
);
</script>

<template>
  <div class="section-badge" :class="[`section-badge--${variant}`, { 'section-badge--pulse': pulse }]">
    <span class="section-badge__dot"></span>
    <span class="section-badge__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.section-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  background: var(--foreground);
  overflow: hidden;
}

.section-badge--gradient {
  background: var(--gradient-primary);
  box-shadow: var(--shadow-accent);
}

.section-badge--glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
}

.section-badge__dot {
  position: relative;
  width: 10px;
  height: 10px;
  background: var(--accent-warm);
  border-radius: 2px;
  transition: transform 0.3s var(--ease-spring);
}

.section-badge:hover .section-badge__dot {
  transform: scale(1.2);
}

.section-badge--pulse .section-badge__dot {
  animation: pulse-dot 2s infinite ease-in-out;
  box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4);
}

.section-badge--gradient .section-badge__dot {
  background: white;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.section-badge--glass .section-badge__dot {
  background: var(--accent);
}

.section-badge__label {
  position: relative;
  color: white;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-badge--glass .section-badge__label {
  color: var(--foreground);
}

/* Glow animation for pulse variant */
.section-badge--pulse::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--accent-warm);
  opacity: 0;
  animation: glow-pulse 2s infinite ease-in-out;
  pointer-events: none;
}

.section-badge--pulse.section-badge--gradient::before {
  background: white;
}
</style>

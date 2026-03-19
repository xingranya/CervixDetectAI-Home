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
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(13, 94, 170, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 248, 252, 0.94));
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.section-badge--gradient {
  border-color: rgba(13, 94, 170, 0.18);
  background:
    linear-gradient(135deg, rgba(13, 94, 170, 0.1), rgba(40, 120, 199, 0.08)),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 248, 252, 0.94));
  box-shadow: var(--shadow-md);
}

.section-badge--glass {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: var(--shadow-sm);
}

.section-badge__dot {
  position: relative;
  width: 9px;
  height: 9px;
  background: var(--accent-warm);
  border-radius: 50%;
  box-shadow: 0 0 0 5px rgba(209, 162, 65, 0.14);
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
  background: var(--accent);
  box-shadow: 0 0 0 5px rgba(13, 94, 170, 0.12);
}

.section-badge--glass .section-badge__dot {
  background: var(--accent);
}

.section-badge__label {
  position: relative;
  color: var(--foreground);
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.section-badge--gradient .section-badge__label {
  color: var(--accent);
}

.section-badge--pulse::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(209, 162, 65, 0.08), transparent 45%);
  opacity: 0;
  animation: glow-pulse 2s infinite ease-in-out;
  pointer-events: none;
}

.section-badge--pulse.section-badge--gradient::before {
  background: linear-gradient(90deg, rgba(13, 94, 170, 0.08), transparent 45%);
}
</style>

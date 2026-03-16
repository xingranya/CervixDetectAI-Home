<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description: string;
    tag?: string;
    highlighted?: boolean;
    tone?: 'muted' | 'blue' | 'slate' | 'dark';
  }>(),
  {
    tag: undefined,
    highlighted: false,
    tone: 'muted',
  },
);
</script>

<template>
  <article class="feature-card" :class="[`feature-card--${tone}`, { 'feature-card--highlighted': highlighted }]">
    <div class="feature-card__icon">
      <slot name="icon">AI</slot>
    </div>
    <div v-if="tag" class="feature-card__tag">{{ tag }}</div>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__description">{{ description }}</p>
  </article>
</template>

<style scoped>
.feature-card {
  position: relative;
  height: 100%;
  padding: 28px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(59, 130, 246, 0.08);
  background: white;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.3s var(--ease-spring),
    box-shadow 0.3s var(--ease-smooth),
    background-color 0.3s var(--ease-smooth),
    border-color 0.3s var(--ease-smooth);
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s var(--ease-smooth);
  pointer-events: none;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(37, 99, 235, 0.02) 100%);
}

.feature-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: var(--shadow-lg);
  border-color: rgba(59, 130, 246, 0.18);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card--muted {
  background: white;
}

.feature-card--blue {
  color: white;
  background: var(--gradient-primary);
  border-color: transparent;
  box-shadow: var(--shadow-accent);
}

.feature-card--blue:hover {
  box-shadow: var(--shadow-accent-lg), var(--shadow-glow);
}

.feature-card--slate {
  background: var(--surface-slate);
}

.feature-card--dark {
  color: white;
  background: var(--dark-soft);
  border-color: transparent;
}

.feature-card--dark:hover {
  box-shadow: var(--shadow-lg);
}

.feature-card--highlighted {
  background: var(--gradient-card);
  border-color: rgba(59, 130, 246, 0.18);
}

.feature-card--highlighted::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.feature-card__icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: var(--radius-md);
  background: white;
  color: var(--foreground);
  font-weight: 800;
  font-size: 1rem;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.3s var(--ease-spring),
    box-shadow 0.3s var(--ease-smooth);
}

.feature-card:hover .feature-card__icon {
  transform: scale(1.08);
  box-shadow: var(--shadow-md);
}

.feature-card--muted .feature-card__icon,
.feature-card--slate .feature-card__icon,
.feature-card--highlighted .feature-card__icon {
  background: var(--gradient-primary);
  color: white;
  box-shadow: var(--shadow-accent);
}

.feature-card--blue .feature-card__icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  box-shadow: none;
}

.feature-card--dark .feature-card__icon {
  background: rgba(59, 130, 246, 0.3);
  color: white;
  box-shadow: none;
}

.feature-card__tag {
  position: relative;
  margin-top: 18px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.78;
}

.feature-card__title {
  position: relative;
  margin: 14px 0 10px;
  font-size: 1.22rem;
  font-weight: 800;
  line-height: 1.35;
}

.feature-card__description {
  position: relative;
  margin: 0;
  line-height: 1.78;
  opacity: 0.86;
}
</style>

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
  height: 100%;
  padding: 28px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(59, 130, 246, 0.08);
  transition:
    transform 0.2s ease-out,
    background-color 0.2s ease-out,
    border-color 0.2s ease-out;
}

.feature-card:hover {
  transform: scale(1.02);
  border-color: rgba(59, 130, 246, 0.22);
}

.feature-card--muted {
  background: white;
}

.feature-card--blue {
  color: white;
  background: var(--accent);
  border-color: transparent;
}

.feature-card--slate {
  background: var(--surface-slate);
}

.feature-card--dark {
  color: white;
  background: var(--dark-soft);
  border-color: transparent;
}

.feature-card--highlighted {
  background: var(--surface-blue);
  border-color: rgba(59, 130, 246, 0.16);
}

.feature-card__icon {
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
  transition: transform 0.2s ease-out;
}

.feature-card:hover .feature-card__icon {
  transform: scale(1.1);
}

.feature-card--muted .feature-card__icon,
.feature-card--slate .feature-card__icon,
.feature-card--highlighted .feature-card__icon {
  background: var(--accent);
  color: white;
}

.feature-card__tag {
  margin-top: 18px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.78;
}

.feature-card__title {
  margin: 14px 0 10px;
  font-size: 1.22rem;
  font-weight: 800;
  line-height: 1.35;
}

.feature-card__description {
  margin: 0;
  line-height: 1.78;
  opacity: 0.86;
}
</style>

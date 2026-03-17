<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = withDefaults(
  defineProps<{
    day: string;
    month: string;
    title: string;
    description?: string;
    to?: string;
    variant?: 'default' | 'notice';
  }>(),
  {
    description: undefined,
    to: undefined,
    variant: 'default',
  },
);

const componentType = computed(() => {
  if (props.to) {
    return RouterLink;
  }

  return 'article';
});

const componentProps = computed(() => {
  if (props.to) {
    return { to: props.to };
  }

  return {};
});
</script>

<template>
  <component
    :is="componentType"
    class="date-badge-card"
    :class="[`date-badge-card--${variant}`, { 'date-badge-card--link': to }]"
    v-bind="componentProps"
  >
    <div class="date-badge-card__date">
      <div class="date-badge-card__day">{{ day }}</div>
      <div class="date-badge-card__month">{{ month }}</div>
    </div>
    <div class="date-badge-card__body">
      <h3 class="date-badge-card__title">{{ title }}</h3>
      <p v-if="description" class="date-badge-card__description">
        {{ description }}
      </p>
    </div>
    <span v-if="to" class="date-badge-card__arrow" aria-hidden="true">↗</span>
  </component>
</template>

<style scoped>
.date-badge-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 20px;
  align-items: center;
  min-height: 124px;
  padding: 20px;
  border-radius: var(--card-radius-lg);
  border: 1px solid var(--card-border-strong);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(248, 251, 255, 0.92));
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.22s var(--ease-smooth),
    box-shadow 0.22s var(--ease-smooth),
    border-color 0.22s var(--ease-smooth);
}

.date-badge-card--link:hover,
.date-badge-card--link:focus-visible {
  transform: translateY(-3px);
  border-color: rgba(13, 94, 170, 0.24);
  box-shadow: var(--shadow-md);
}

.date-badge-card--link:focus-visible {
  outline: none;
}

.date-badge-card__date {
  width: 76px;
  overflow: hidden;
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(13, 94, 170, 0.14), rgba(13, 94, 170, 0.06)),
    white;
  border: 1px solid rgba(13, 94, 170, 0.08);
  text-align: center;
}

.date-badge-card--notice .date-badge-card__date {
  background:
    linear-gradient(180deg, rgba(181, 40, 47, 0.16), rgba(181, 40, 47, 0.06)),
    white;
  border-color: rgba(181, 40, 47, 0.12);
}

.date-badge-card__day {
  padding-top: 12px;
  color: var(--foreground);
  font-size: 1.7rem;
  font-weight: 800;
  line-height: 1;
}

.date-badge-card__month {
  margin-top: 10px;
  padding: 8px 6px 10px;
  color: var(--muted-foreground);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  background: rgba(255, 255, 255, 0.72);
}

.date-badge-card__body {
  min-width: 0;
}

.date-badge-card__title {
  margin: 0;
  color: var(--foreground);
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.78;
}

.date-badge-card__description {
  margin: 8px 0 0;
  color: var(--muted-foreground);
  font-size: 0.92rem;
  line-height: 1.74;
}

.date-badge-card__arrow {
  color: var(--accent);
  font-size: 1rem;
  transition: transform 0.2s var(--ease-smooth);
}

.date-badge-card--link:hover .date-badge-card__arrow,
.date-badge-card--link:focus-visible .date-badge-card__arrow {
  transform: translate(2px, -2px);
}

@media (max-width: 640px) {
  .date-badge-card {
    grid-template-columns: auto 1fr;
    align-items: start;
  }

  .date-badge-card__arrow {
    display: none;
  }
}
</style>

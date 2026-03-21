<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  label: string;
  shortLabel: string;
  description: string;
  to?: string;
  href?: string;
}>();

const componentType = computed(() => (props.href ? 'a' : RouterLink));

const componentProps = computed(() => {
  if (props.href) {
    return {
      href: props.href,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  return {
    to: props.to ?? '/',
  };
});
</script>

<template>
  <component :is="componentType" class="quick-entry-card" v-bind="componentProps">
    <div class="quick-entry-card__icon" :data-icon="shortLabel" aria-hidden="true">
      <svg v-if="shortLabel === '概览'" viewBox="0 0 24 24" class="quick-entry-card__svg" aria-hidden="true">
        <rect x="3.5" y="4" width="7" height="7" rx="2" />
        <rect x="13.5" y="4" width="7" height="4.5" rx="2" />
        <rect x="13.5" y="11.5" width="7" height="8.5" rx="2" />
        <rect x="3.5" y="14" width="7" height="6" rx="2" />
      </svg>

      <svg v-else-if="shortLabel === '方向'" viewBox="0 0 24 24" class="quick-entry-card__svg" aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="2.2" />
        <path d="M12 4v2.5M20 12h-2.5M12 20v-2.5M4 12h2.5" />
        <path d="M15.8 8.2l-2.3 5.1-5.3 2.5 2.6-5.4z" />
      </svg>

      <svg v-else-if="shortLabel === '成果'" viewBox="0 0 24 24" class="quick-entry-card__svg" aria-hidden="true">
        <circle cx="12" cy="9" r="4.5" />
        <path d="M9.2 13.2 7.5 20l4.5-2.4 4.5 2.4-1.7-6.8" />
        <path d="M8.6 4.8H5.5v4.2l2.4 1.4M15.4 4.8h3.1v4.2l-2.4 1.4" />
      </svg>

      <svg v-else-if="shortLabel === '动态'" viewBox="0 0 24 24" class="quick-entry-card__svg" aria-hidden="true">
        <path d="M4 12h3.5l2-4 3.2 8 2.1-5H20" />
        <path d="M5 18h14" />
        <path d="M5 6h5" />
      </svg>

      <svg v-else-if="shortLabel === '合作'" viewBox="0 0 24 24" class="quick-entry-card__svg" aria-hidden="true">
        <path d="M7.5 8.5 4 12l3.5 3.5L11 12z" />
        <path d="M16.5 8.5 20 12l-3.5 3.5L13 12z" />
        <path d="M9.8 10.2 12 8l2.2 2.2" />
        <path d="M9.8 13.8 12 16l2.2-2.2" />
      </svg>

      <svg v-else-if="shortLabel === '入口'" viewBox="0 0 24 24" class="quick-entry-card__svg" aria-hidden="true">
        <path d="M4.5 4.5h9v15h-9z" />
        <path d="M13.5 12h6" />
        <path d="m16.5 9 3 3-3 3" />
        <circle cx="9.2" cy="12" r="0.6" fill="currentColor" stroke="none" />
      </svg>

      <svg v-else-if="shortLabel === '资料'" viewBox="0 0 24 24" class="quick-entry-card__svg" aria-hidden="true">
        <path d="M7 4.5h7l3 3V19.5H7z" />
        <path d="M14 4.5v3h3" />
        <path d="M9.5 11h5M9.5 14h5M9.5 17h3.5" />
      </svg>

      <svg v-else viewBox="0 0 24 24" class="quick-entry-card__svg" aria-hidden="true">
        <path d="M4.5 14.5c4.5-1.2 7.4-1.2 11.8 0" />
        <path d="M6.2 11.3c3.1-.8 5.1-.8 8.2 0" />
        <path d="M17 7.5 20 6v8.5l-3-1.5z" />
        <path d="M4 15v2.5c0 1.1.9 2 2 2h9.5" />
      </svg>
    </div>

    <div class="quick-entry-card__body">
      <h3 class="quick-entry-card__title">{{ label }}</h3>
      <p class="quick-entry-card__description">{{ description }}</p>
    </div>

    <span class="quick-entry-card__arrow" aria-hidden="true">↗</span>
  </component>
</template>

<style scoped>
.quick-entry-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 16px;
  align-items: start;
  min-height: 148px;
  padding: 24px 22px;
  border-radius: var(--card-radius-lg);
  border: 1px solid var(--card-border-strong);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 251, 255, 0.96));
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.24s var(--ease-smooth),
    box-shadow 0.24s var(--ease-smooth),
    border-color 0.24s var(--ease-smooth);
}

.quick-entry-card:hover,
.quick-entry-card:focus-visible {
  transform: translateY(-3px);
  border-color: rgba(13, 94, 170, 0.24);
  box-shadow: var(--shadow-md);
  outline: none;
}

.quick-entry-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background:
    linear-gradient(135deg, rgba(181, 40, 47, 0.12), rgba(13, 94, 170, 0.08)),
    white;
  color: var(--accent);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition:
    transform 0.24s var(--ease-smooth),
    color 0.24s var(--ease-smooth),
    background 0.24s var(--ease-smooth);
}

.quick-entry-card:hover .quick-entry-card__icon,
.quick-entry-card:focus-visible .quick-entry-card__icon {
  transform: translateY(-2px);
  background:
    linear-gradient(135deg, rgba(13, 94, 170, 0.14), rgba(40, 120, 199, 0.08)),
    white;
}

.quick-entry-card__icon[data-icon='概览'] {
  color: #275f9e;
}

.quick-entry-card__icon[data-icon='方向'] {
  color: #0d5eaa;
}

.quick-entry-card__icon[data-icon='成果'] {
  color: #ba4a34;
}

.quick-entry-card__icon[data-icon='动态'] {
  color: #1d6d9d;
}

.quick-entry-card__icon[data-icon='合作'] {
  color: #b5282f;
}

.quick-entry-card__icon[data-icon='入口'] {
  color: #0e6b80;
}

.quick-entry-card__icon[data-icon='资料'] {
  color: #8b4f98;
}

.quick-entry-card__icon[data-icon='公开'] {
  color: #bc5a2c;
}

.quick-entry-card__svg {
  width: 28px;
  height: 28px;
  stroke: currentColor;
  stroke-width: 1.8;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.quick-entry-card__body {
  min-width: 0;
  align-self: center;
}

.quick-entry-card__title {
  margin: 0;
  color: var(--foreground);
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.45;
}

.quick-entry-card__description {
  margin: 10px 0 0;
  color: var(--muted-foreground);
  font-size: 0.92rem;
  line-height: 1.78;
}

.quick-entry-card__arrow {
  align-self: center;
  color: var(--accent);
  font-size: 1rem;
  transition: transform 0.2s var(--ease-smooth);
}

.quick-entry-card:hover .quick-entry-card__arrow,
.quick-entry-card:focus-visible .quick-entry-card__arrow {
  transform: translate(2px, -2px);
}

@media (max-width: 640px) {
  .quick-entry-card {
    grid-template-columns: auto 1fr;
    min-height: 136px;
  }

  .quick-entry-card__arrow {
    display: none;
  }
}
</style>

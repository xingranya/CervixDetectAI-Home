<script setup lang="ts">
defineProps<{
  label: string;
  shortLabel: string;
  description: string;
  to: string;
}>();
</script>

<template>
  <RouterLink class="quick-entry-card" :to="to">
    <div class="quick-entry-card__icon">{{ shortLabel }}</div>
    <div class="quick-entry-card__body">
      <h3 class="quick-entry-card__title">{{ label }}</h3>
      <p class="quick-entry-card__description">{{ description }}</p>
    </div>
    <span class="quick-entry-card__arrow" aria-hidden="true">↗</span>
  </RouterLink>
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
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(181, 40, 47, 0.14), rgba(13, 94, 170, 0.08)),
    white;
  color: var(--secondary);
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.06em;
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

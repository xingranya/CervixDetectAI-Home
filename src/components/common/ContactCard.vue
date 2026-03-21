<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    value: string;
    description: string;
    link?: string;
    linkLabel?: string;
  }>(),
  {
    linkLabel: '立即咨询',
  },
);
</script>

<template>
  <article class="contact-card">
    <div class="contact-card__title">{{ title }}</div>
    <div class="contact-card__value">{{ value }}</div>
    <p class="contact-card__description">{{ description }}</p>
    <a v-if="link" class="contact-card__link" :href="link" target="_blank" rel="noopener noreferrer">
      {{ linkLabel }} ↗
    </a>
  </article>
</template>

<style scoped>
.contact-card {
  height: 100%;
  padding: 28px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(59, 130, 246, 0.08);
  background: white;
}

.contact-card__title {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-foreground);
}

.contact-card__value {
  margin-top: 14px;
  font-size: 1.28rem;
  font-weight: 800;
  line-height: 1.5;
}

.contact-card__description {
  margin: 14px 0 0;
  color: var(--muted-foreground);
  line-height: 1.85;
}

.contact-card__link {
  display: inline-flex;
  margin-top: 18px;
  font-weight: 700;
  color: var(--accent);
}

@media (max-width: 640px) {
  .contact-card {
    padding: 22px 18px;
    border-radius: 18px;
  }

  .contact-card__value {
    margin-top: 12px;
    font-size: 1.14rem;
  }

  .contact-card__description {
    margin-top: 12px;
    line-height: 1.72;
  }

  .contact-card__link {
    margin-top: 14px;
  }
}
</style>

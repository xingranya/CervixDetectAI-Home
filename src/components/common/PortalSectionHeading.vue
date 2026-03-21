<script setup lang="ts">
defineProps<{
  title: string;
  englishLabel: string;
  description?: string;
}>();
</script>

<template>
  <div class="portal-section-heading">
    <div class="portal-section-heading__copy">
      <div class="portal-section-heading__label">
        <span class="portal-section-heading__line"></span>
        <span>{{ englishLabel }}</span>
      </div>
      <h2 class="portal-section-heading__title">{{ title }}</h2>
      <p v-if="description" class="portal-section-heading__description">
        {{ description }}
      </p>
    </div>
    <div v-if="$slots.action" class="portal-section-heading__action">
      <slot name="action" />
    </div>
  </div>
</template>

<style scoped>
.portal-section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
}

.portal-section-heading__copy {
  display: grid;
  gap: 10px;
}

.portal-section-heading__label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.portal-section-heading__line {
  width: 56px;
  height: 10px;
  border-radius: 999px;
  background:
    linear-gradient(90deg, rgba(181, 40, 47, 0.9), rgba(181, 40, 47, 0.16)),
    linear-gradient(90deg, rgba(13, 94, 170, 0.26), rgba(13, 94, 170, 0));
}

.portal-section-heading__title {
  margin: 0;
  color: var(--foreground);
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.2vw, 3rem);
  font-weight: 700;
  line-height: 1.24;
}

.portal-section-heading__description {
  max-width: 780px;
  margin: 0;
  color: var(--muted-foreground);
  line-height: 1.9;
}

.portal-section-heading__action {
  flex: 0 0 auto;
}

@media (max-width: 820px) {
  .portal-section-heading {
    align-items: start;
    flex-direction: column;
  }
}

@media (max-width: 520px) {
  .portal-section-heading {
    gap: 18px;
  }

  .portal-section-heading__copy {
    gap: 8px;
  }

  .portal-section-heading__label {
    gap: 10px;
    font-size: 0.74rem;
    letter-spacing: 0.16em;
  }

  .portal-section-heading__line {
    width: 40px;
    height: 8px;
  }

  .portal-section-heading__title {
    font-size: clamp(1.8rem, 9vw, 2.36rem);
  }

  .portal-section-heading__description {
    font-size: 0.94rem;
    line-height: 1.78;
  }
}
</style>

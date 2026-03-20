<script setup lang="ts">
export interface Hospital {
  id: string;
  name: string;
  icon: string;
  iconUrl?: string;
}

defineProps<{
  hospitals: Hospital[];
  title?: string;
  englishLabel?: string;
  description?: string;
}>();
</script>

<template>
  <div class="hospital-partners">
    <div class="hospital-partners__grid">
      <div
        v-for="hospital in hospitals"
        :key="hospital.id"
        class="hospital-card"
      >
        <div class="hospital-card__logo">
          <img
            v-if="hospital.iconUrl"
            :src="hospital.iconUrl"
            :alt="hospital.name"
            class="hospital-card__img"
          />
          <img
            v-else
            :src="`/icons/hospitals/${hospital.icon}.svg`"
            :alt="hospital.name"
            class="hospital-card__img"
          />
        </div>
        <span class="hospital-card__name">{{ hospital.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hospital-partners {
  margin-top: 34px;
}

.hospital-partners__grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.hospital-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px 16px;
  border-radius: var(--card-radius-lg);
  border: 1px solid rgba(13, 94, 170, 0.1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 248, 252, 0.95));
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.22s var(--ease-smooth),
    box-shadow 0.22s var(--ease-smooth),
    border-color 0.22s var(--ease-smooth);
  text-align: center;
}

.hospital-card:hover,
.hospital-card:focus-visible {
  transform: translateY(-3px);
  border-color: rgba(13, 94, 170, 0.2);
  box-shadow: var(--shadow-md);
  outline: none;
}

.hospital-card__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 2px 8px rgba(13, 94, 170, 0.08);
}

.hospital-card__img {
  max-width: 56px;
  max-height: 56px;
  object-fit: contain;
}

.hospital-card__name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--foreground);
  line-height: 1.45;
  word-break: break-word;
}

@media (max-width: 768px) {
  .hospital-partners__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  .hospital-card {
    padding: 16px 12px;
  }

  .hospital-card__logo {
    width: 60px;
    height: 60px;
    border-radius: 12px;
  }

  .hospital-card__img {
    max-width: 44px;
    max-height: 44px;
  }

  .hospital-card__name {
    font-size: 0.78rem;
  }
}

@media (max-width: 480px) {
  .hospital-partners__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>

<script setup lang="ts">
defineProps<{
  label: string;
  pulse?: boolean;
}>();
</script>

<template>
  <div class="section-badge">
    <span class="section-badge__dot" :class="{ 'section-badge__dot--pulse': pulse }"></span>
    <span class="section-badge__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  background: var(--foreground);
}

.section-badge__dot {
  width: 10px;
  height: 10px;
  background: var(--accent-warm);
}

.section-badge__dot--pulse {
  animation: pulse-dot 2s infinite ease-in-out;
}

.section-badge__label {
  color: white;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
</style>

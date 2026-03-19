<script setup lang="ts">
import { siteConfig } from '@/config/site';
</script>

<template>
  <a
    class="floating-contact"
    :href="siteConfig.loginUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="进入 HPVSC 平台"
  >
    <span class="floating-contact__dot"></span>
    <span>平台入口</span>
  </a>
</template>

<style scoped>
.floating-contact {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 18px;
  border: 2px solid var(--foreground);
  border-radius: var(--radius-md);
  color: var(--foreground);
  background: white;
  font-weight: 700;
  transition:
    transform 0.2s ease-out,
    background-color 0.2s ease-out,
    color 0.2s ease-out;
}

.floating-contact:hover,
.floating-contact:focus-visible {
  transform: scale(1.04);
  color: white;
  background: var(--foreground);
}

.floating-contact:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent), 0 0 0 6px var(--ring);
}

.floating-contact__dot {
  width: 10px;
  height: 10px;
  background: var(--accent-warm);
  animation: pulse-dot 2s infinite ease-in-out;
}

@media (max-width: 760px) {
  .floating-contact {
    right: 14px;
    left: 14px;
    bottom: 24px;
    z-index: 50;
    justify-content: center;
  }
}
</style>

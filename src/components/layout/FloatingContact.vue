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
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  font-weight: 700;
  box-shadow: var(--shadow-md);
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
    right: 16px;
    left: auto;
    bottom: max(12px, env(safe-area-inset-bottom));
    z-index: 50;
    gap: 8px;
    min-height: 44px;
    padding: 0 14px;
    border-width: 1px;
    border-radius: 999px;
    font-size: 0.88rem;
  }

  .floating-contact__dot {
    width: 8px;
    height: 8px;
  }
}
</style>

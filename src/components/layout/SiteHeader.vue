<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { siteConfig } from '@/config/site';
import AppButton from '@/components/common/AppButton.vue';

const route = useRoute();
const mobileOpen = ref(false);

const links = computed(() => siteConfig.navigation);

const closeMobile = (): void => {
  mobileOpen.value = false;
};

const isActiveLink = (path: string): boolean => {
  if (path === '/news') {
    return route.path === '/news' || route.path.startsWith('/news/');
  }

  return route.path === path;
};
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <RouterLink class="site-header__brand" to="/" @click="closeMobile">
        <img :src="siteConfig.logoUrl" alt="CervixDetectAI" />
        <div>
          <div class="site-header__name">CervixDetectAI</div>
          <div class="site-header__tagline">{{ siteConfig.tagline }}</div>
        </div>
      </RouterLink>

      <button
        class="site-header__toggle"
        type="button"
        :aria-expanded="mobileOpen"
        aria-label="切换导航"
        @click="mobileOpen = !mobileOpen"
      >
        <span></span>
        <span></span>
      </button>

      <nav class="site-header__nav" :class="{ 'site-header__nav--open': mobileOpen }">
        <RouterLink
          v-for="item in links"
          :key="item.path"
          class="site-header__link"
          :class="{ 'is-active': isActiveLink(item.path) }"
          :to="item.path"
          @click="closeMobile"
        >
          {{ item.label }}
        </RouterLink>
        <AppButton href="mailto:support@hpvsc.icu" variant="primary" aria-label="邮件咨询">
          预约演示
        </AppButton>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid rgba(59, 130, 246, 0.12);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 88px;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.site-header__brand img {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  object-fit: cover;
}

.site-header__name {
  font-family: var(--font-display);
  font-size: 1.18rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.site-header__tagline {
  margin-top: 4px;
  color: var(--muted-foreground);
  font-size: 0.85rem;
}

.site-header__nav {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.site-header__link {
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  color: var(--muted-foreground);
  font-weight: 600;
  transition:
    transform 0.2s ease-out,
    background-color 0.2s ease-out,
    color 0.2s ease-out;
}

.site-header__link:hover,
.site-header__link.is-active {
  color: var(--accent);
  background: var(--surface-blue);
  transform: translateY(-1px);
}

.site-header__toggle {
  display: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 2px solid var(--foreground);
  border-radius: var(--radius-sm);
  background: white;
}

.site-header__toggle span {
  display: block;
  width: 20px;
  height: 2px;
  margin: 0 auto 6px;
  background: var(--foreground);
}

.site-header__toggle span:last-child {
  margin-bottom: 0;
}

@media (max-width: 1040px) {
  .site-header__toggle {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .site-header__nav {
    position: absolute;
    left: 20px;
    right: 20px;
    top: calc(100% + 12px);
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 18px;
    border: 1px solid rgba(59, 130, 246, 0.14);
    border-radius: var(--radius-lg);
    background: white;
  }

  .site-header__nav--open {
    display: flex;
  }

  .site-header__link {
    padding: 14px 10px;
  }
}
</style>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { siteConfig } from '@/config/site';
import AppButton from '@/components/common/AppButton.vue';

const route = useRoute();
const mobileOpen = ref(false);
const isScrolled = ref(false);

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

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
    <div class="container site-header__inner">
      <RouterLink class="site-header__brand" to="/" @click="closeMobile">
        <img :src="siteConfig.logoUrl" :alt="siteConfig.brandName" />
        <div>
          <div class="site-header__name">{{ siteConfig.brandName }}</div>
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
        <AppButton :href="siteConfig.loginUrl" target="_blank" variant="primary" aria-label="平台入口">
          平台入口
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
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid rgba(13, 94, 170, 0.1);
  transition:
    background-color 0.3s var(--ease-smooth),
    box-shadow 0.3s var(--ease-smooth),
    border-color 0.3s var(--ease-smooth);
}

.site-header--scrolled {
  background: white;
  box-shadow: var(--shadow-md);
  border-bottom-color: rgba(13, 94, 170, 0.18);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 94px;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.site-header__brand img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: contain;
}

.site-header__name {
  font-family: var(--font-brand);
  font-size: 1.42rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.site-header__tagline {
  margin-top: 4px;
  color: var(--muted-foreground);
  font-size: 0.9rem;
}

.site-header__nav {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.site-header__link {
  position: relative;
  padding: 14px 18px;
  border-radius: var(--radius-sm);
  color: var(--foreground);
  font-weight: 700;
  transition:
    background-color 0.2s var(--ease-smooth),
    color 0.2s var(--ease-smooth);
}

.site-header__link::after {
  content: '';
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 8px;
  height: 3px;
  background: var(--secondary);
  border-radius: 1px;
  transform: scaleX(0);
  transition: transform 0.2s var(--ease-smooth);
}

.site-header__link:hover,
.site-header__link.is-active {
  color: var(--accent);
  background: rgba(13, 94, 170, 0.06);
}

.site-header__link.is-active::after {
  transform: scaleX(1);
}

.site-header__toggle {
  display: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid rgba(13, 94, 170, 0.22);
  border-radius: var(--radius-sm);
  background: white;
}

.site-header__toggle span {
  display: block;
  width: 20px;
  height: 2px;
  margin: 0 auto 6px;
  background: var(--accent);
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
    z-index: 100;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 18px;
    border: 1px solid rgba(13, 94, 170, 0.14);
    border-radius: var(--radius-lg);
    background: rgba(255, 255, 255, 0.99);
    box-shadow: var(--shadow-lg);
  }

  .site-header__nav--open {
    display: flex;
  }

  .site-header__link {
    padding: 14px 10px;
  }
}

@media (max-width: 760px) {
  .site-header__name {
    font-size: 1.18rem;
  }

  .site-header__tagline {
    font-size: 0.8rem;
  }
}
</style>

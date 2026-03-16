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
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);
  transition:
    background-color 0.3s var(--ease-smooth),
    box-shadow 0.3s var(--ease-smooth),
    border-color 0.3s var(--ease-smooth);
}

.site-header--scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
  border-bottom-color: rgba(59, 130, 246, 0.15);
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
  transition: transform 0.2s var(--ease-spring);
}

.site-header__brand:hover {
  transform: scale(1.02);
}

.site-header__brand img {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  object-fit: cover;
  box-shadow: var(--shadow-sm);
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
  position: relative;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  color: var(--muted-foreground);
  font-weight: 600;
  transition:
    transform 0.2s var(--ease-spring),
    background-color 0.2s var(--ease-smooth),
    color 0.2s var(--ease-smooth);
}

.site-header__link::after {
  content: '';
  position: absolute;
  bottom: 6px;
  left: 14px;
  right: 14px;
  height: 2px;
  background: var(--accent);
  border-radius: 1px;
  transform: scaleX(0);
  transition: transform 0.2s var(--ease-spring);
}

.site-header__link:hover,
.site-header__link.is-active {
  color: var(--accent);
  background: var(--surface-blue);
  transform: translateY(-1px);
}

.site-header__link.is-active::after {
  transform: scaleX(1);
}

.site-header__toggle {
  display: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 2px solid var(--foreground);
  border-radius: var(--radius-sm);
  background: white;
  transition:
    background-color 0.2s var(--ease-smooth),
    transform 0.2s var(--ease-spring);
}

.site-header__toggle:hover {
  background: var(--surface-blue);
  transform: scale(1.05);
}

.site-header__toggle span {
  display: block;
  width: 20px;
  height: 2px;
  margin: 0 auto 6px;
  background: var(--foreground);
  transition: transform 0.2s var(--ease-spring);
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
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: var(--shadow-lg);
  }

  .site-header__nav--open {
    display: flex;
  }

  .site-header__link {
    padding: 14px 10px;
  }
}
</style>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { siteConfig } from '@/config/site';
import AppButton from '@/components/common/AppButton.vue';

const route = useRoute();
const mobileOpen = ref(false);
const isScrolled = ref(false);
const toggleRef = ref<HTMLButtonElement | null>(null);
const navRef = ref<HTMLElement | null>(null);
const mobileNavRef = ref<HTMLElement | null>(null);

const links = computed(() => siteConfig.navigation);

const closeMobile = (): void => {
  mobileOpen.value = false;
  nextTick(() => {
    toggleRef.value?.focus();
  });
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

// 移动端菜单焦点管理
watch(mobileOpen, async (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';

  if (isOpen) {
    await nextTick();
    // 打开时聚焦到第一个导航链接
    const firstLink = mobileNavRef.value?.querySelector('.site-header__mobile-link') as HTMLAnchorElement;
    firstLink?.focus();
  }
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  document.body.style.overflow = '';
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
        ref="toggleRef"
        class="site-header__toggle"
        type="button"
        :aria-expanded="mobileOpen"
        aria-label="切换导航"
        @click="mobileOpen = !mobileOpen"
      >
        <span></span>
        <span></span>
      </button>

      <nav ref="navRef" class="site-header__nav" :class="{ 'site-header__nav--open': mobileOpen }">
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

  <Teleport to="body">
    <template v-if="mobileOpen">
      <button
        class="site-header__mobile-backdrop"
        type="button"
        aria-label="关闭导航菜单"
        @click="closeMobile"
      ></button>

      <nav ref="mobileNavRef" class="site-header__mobile-nav">
        <RouterLink
          v-for="item in links"
          :key="`mobile-${item.path}`"
          class="site-header__mobile-link"
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
    </template>
  </Teleport>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: visible;
  z-index: 50;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 18px 42px rgba(10, 33, 58, 0.08);
  transition:
    background-color 0.3s var(--ease-smooth),
    box-shadow 0.3s var(--ease-smooth),
    border-color 0.3s var(--ease-smooth);
}

.site-header::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.08)),
    linear-gradient(90deg, rgba(25, 118, 210, 0.08), rgba(255, 255, 255, 0));
  pointer-events: none;
}

.site-header--scrolled {
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(28px) saturate(200%);
  -webkit-backdrop-filter: blur(28px) saturate(200%);
  box-shadow: var(--shadow-md);
  border-bottom-color: rgba(255, 255, 255, 0.26);
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
.site-header__link:focus-visible,
.site-header__link.is-active {
  color: var(--accent);
  background: rgba(13, 94, 170, 0.06);
}

.site-header__link:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--ring);
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

.site-header__toggle:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent), 0 0 0 6px var(--ring);
}

@media (max-width: 1040px) {
  .site-header__toggle {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .site-header__nav {
    display: none;
  }
}

@media (max-width: 760px) {
  .site-header__inner {
    gap: 14px;
    min-height: 78px;
  }

  .site-header__brand {
    gap: 12px;
    min-width: 0;
    flex: 1;
  }

  .site-header__brand > div {
    min-width: 0;
  }

  .site-header__brand img {
    width: 46px;
    height: 46px;
  }

  .site-header__name {
    font-size: 1.08rem;
    line-height: 1.28;
  }

  .site-header__tagline {
    margin-top: 2px;
    max-width: 200px;
    overflow: hidden;
    font-size: 0.76rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .site-header__toggle {
    width: 44px;
    height: 44px;
  }

}

@media (max-width: 520px) {
  .site-header__inner {
    min-height: 72px;
  }

  .site-header__brand img {
    width: 42px;
    height: 42px;
  }

  .site-header__name {
    font-size: 1rem;
  }

  .site-header__tagline {
    max-width: 156px;
    font-size: 0.72rem;
  }
}

.site-header__mobile-backdrop {
  position: fixed;
  inset: 0;
  z-index: 110;
  border: 0;
  padding: 0;
  background: rgba(236, 242, 249, 0.14);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
}

.site-header__mobile-nav {
  position: fixed;
  top: 92px;
  left: 12px;
  right: 12px;
  z-index: 111;
  display: grid;
  gap: 8px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(30px) saturate(180%);
  -webkit-backdrop-filter: blur(30px) saturate(180%);
  box-shadow: 0 20px 48px rgba(9, 35, 66, 0.16);
}

.site-header__mobile-nav::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08)),
    linear-gradient(135deg, rgba(25, 118, 210, 0.08), rgba(255, 255, 255, 0));
  pointer-events: none;
}

.site-header__mobile-link {
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 0 14px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.22);
  color: var(--foreground);
  font-weight: 700;
}

.site-header__mobile-link.is-active {
  color: var(--accent);
  background: rgba(232, 242, 255, 0.34);
}

.site-header__mobile-nav :deep(.app-button) {
  width: 100%;
  margin-top: 4px;
  min-height: 50px;
  justify-content: center;
}

@media (min-width: 1041px) {
  .site-header__mobile-backdrop,
  .site-header__mobile-nav {
    display: none;
  }
}

@media (max-width: 760px) {
  .site-header__mobile-nav {
    top: 84px;
    left: 10px;
    right: 10px;
    padding: 12px;
    border-radius: 20px;
  }
}

@media (max-width: 520px) {
  .site-header__mobile-nav {
    top: 80px;
  }
}
</style>

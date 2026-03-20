<script setup lang="ts">
import SiteHeader from '@/components/layout/SiteHeader.vue';
import SiteFooter from '@/components/layout/SiteFooter.vue';
import FloatingContact from '@/components/layout/FloatingContact.vue';
import BackToTop from '@/components/layout/BackToTop.vue';
</script>

<template>
  <div class="site-shell">
    <a href="#main-content" class="skip-link">跳转到主要内容</a>
    <SiteHeader />
    <main id="main-content">
      <RouterView />
    </main>
    <SiteFooter />
    <FloatingContact />
    <BackToTop />
  </div>
</template>

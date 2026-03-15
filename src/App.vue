<script setup lang="ts">
import SiteHeader from '@/components/layout/SiteHeader.vue';
import SiteFooter from '@/components/layout/SiteFooter.vue';
import FloatingContact from '@/components/layout/FloatingContact.vue';
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
    <FloatingContact />
  </div>
</template>

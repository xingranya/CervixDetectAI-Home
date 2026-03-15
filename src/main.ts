import { ViteSSG } from 'vite-ssg';
import App from '@/App.vue';
import { routes } from '@/router';
import revealDirective from '@/directives/reveal';
import '@/styles/tokens.css';
import '@/styles/base.css';

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      if (to.hash) {
        return {
          el: to.hash,
          top: 96,
          behavior: 'smooth',
        };
      }

      return { top: 0 };
    },
  },
  ({ app, router }) => {
    app.directive('reveal', revealDirective);

    router.afterEach((to) => {
      if (typeof document === 'undefined') {
        return;
      }

      const title = typeof to.meta.title === 'string' ? to.meta.title : '官网';
      document.title = `${title} | CervixDetectAI`;
    });
  },
);

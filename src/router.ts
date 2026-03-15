import type { RouteRecordRaw } from 'vue-router';
import { newsArticles } from '@/lib/news';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/pages/ProductPage.vue'),
    meta: { title: '产品能力' },
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import('@/pages/SolutionsPage.vue'),
    meta: { title: '应用场景' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage.vue'),
    meta: { title: '项目介绍' },
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/pages/NewsPage.vue'),
    meta: { title: '新闻中心' },
  },
  ...newsArticles.map<RouteRecordRaw>((article) => ({
    path: `/news/${article.slug}`,
    name: `news-${article.slug}`,
    component: () => import('@/pages/NewsArticlePage.vue'),
    props: { slug: article.slug },
    meta: { title: article.title },
  })),
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/ContactPage.vue'),
    meta: { title: '联系我们' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: { title: '页面不存在' },
  },
];

export { routes };

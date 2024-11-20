import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AppLayout from '@/components/AppLayout.vue';
import PurchaseView from '@/views/PurchaseView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView,
      },
      {
        path: 'pokemon',
        name: 'Pokemon',
        component: PurchaseView,
        props: { category: 'pokemon' },
      },
      {
        path: 'mtg',
        name: 'MTG',
        component: PurchaseView,
        props: { category: 'mtg' },
      },
      {
        path: 'ygo',
        name: 'YGO',
        component: PurchaseView,
        props: { category: 'ygo' },
      },
      {
        path: '3d',
        name: '3D',
        component: AboutView,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: AboutView,
      },
      {
        path: 'login',
        name: 'Login',
        component: LoginView,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

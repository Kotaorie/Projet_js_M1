import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AppLayout from '@/components/AppLayout.vue';
import PurchaseView from '@/views/PurchaseView.vue';

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
        path: 'cards',
        name: 'Cards',
        component: PurchaseView,
        props : {_title:"test"}
      },
      {
        path: 'decks',
        name: 'Decks',
        component: AboutView,
      },
      {
        path: 'display',
        name: 'Display',
        component: AboutView,
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
        component: AboutView,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

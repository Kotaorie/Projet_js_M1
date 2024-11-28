import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AppLayout from '@/components/AppLayout.vue';
import PurchaseView from '@/views/PurchaseView.vue';
import LoginView from '@/views/LoginView.vue';
import PanierView from '@/views/PanierView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ProfilView from '../views/ProfilView.vue';
import CheckoutView from '@/views/CheckoutView.vue';

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: 'home',
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
        path: 'panier',
        name: 'Panier',
        component: PanierView,
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: CheckoutView,
      },
      {
        path: 'profil',
        name: 'Profil',
        component: ProfilView,
      },
      {
        path: 'login',
        name: 'Login',
        component: LoginView,
      },
      {
        path: 'register',
        name: 'Register',
        component: RegisterView,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

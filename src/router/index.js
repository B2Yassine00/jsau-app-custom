import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DocumentsView from '../views/DocumentsView.vue';
import FavoritesView from '../views/FavoritesView.vue';
import DocumentDetail from '../views/DocumentDetail.vue';
import Cookies from 'js-cookie';

const routes = [
  { path: '/login', component: LoginView },
  { path: '/', component: DocumentsView },
  { path: '/favorites', component: FavoritesView },
  { path: '/document/:name', component: DocumentDetail, props: true }, // Route dynamique avec "name"
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware pour vérifier la connexion
router.beforeEach((to, from, next) => {
  const username = Cookies.get('username');
  if (!username && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
});

export default router;

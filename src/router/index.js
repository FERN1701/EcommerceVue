import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AboutView from '../views/AboutView.vue'
import Index from '../views/administrator/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView,
    },
    {
      path: '/about',
      name: 'aboutus',
      component: AboutView,
    },
    {
      path: '/administrator',
      name: 'admin',
      component: Index,
    }
  ],
})

export default router

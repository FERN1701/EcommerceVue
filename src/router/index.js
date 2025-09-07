import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AboutView from '../views/AboutView.vue'
import Index from '../views/administrator/AdminLayout.vue'
import AdminProducts from '../views/administrator/Products.vue'
import Dashboard from '../views/administrator/Dashboard.vue'
import TeamsSection from '../views/administrator/TeamsSection.vue'
import CompanySection from '../views/administrator/CompanySection.vue'

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
      name: 'ProductView',
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
      children: [
        {
        path: '', // this means /admin/products
        name: 'Dashboard',
        component: Dashboard,
        },
        {
        path: 'products', // this means /admin/products
        name: 'Product',
        component: AdminProducts,
        },
        {
        path: 'teams', // this means /admin/teams
        name: 'Teams',
        component: TeamsSection,
        },
        {
        path: 'company', // this means /admin/company
        name: 'Company',
        component: CompanySection,
        },
      ]
    }
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/authenticate/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/authenticate/RegisterView.vue')
    }
  ]
})

export default router

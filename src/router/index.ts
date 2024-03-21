import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  ShallowReactive  from '../views/ShallowReactive.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shallow-reactive',
      name: 'shallow-reactive',
      component: ShallowReactive
    },
  ]
})

export default router

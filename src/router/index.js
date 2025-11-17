import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JuegoView from '../views/JuegoView.vue'
import TablaView from '@/views/TablaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/juego',
      name: 'juego',
      component: JuegoView,
    },
    {
      path: '/tabla',
      name: 'tabla',
      component: TablaView,
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Village from '../views/Village.vue'
import Guild from '../views/Guild.vue'
import Event from '../views/Event.vue'
import Permit from '../views/Permit.vue'

const routes = [
  {
    path: '/',
    name: 'Village',
    component: Village
  },
  {
    path: '/guild',
    name: 'Guild',
    component: Guild
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/permit',
    name: 'Permit',
    component: Permit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

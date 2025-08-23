import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bloque1 from '../views/Bloque1View.vue'
import Bloque2 from '../views/Bloque2View.vue'
import Bloque3 from '../views/Bloque3View.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/block-1',
        name: 'block-1',
        component: Bloque1,
      },
      {
        path: '/block-2',
        name: 'block-2',
        component: Bloque2,
      },
      {
        path: '/block-3',
        name: 'block-3',
        component: Bloque3,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

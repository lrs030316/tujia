import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    redirect: '/index'
  },
  {
    path: '/news',
    component: () => import('../views/News.vue')
  },
  {
    path: '/houseDetail',
    name: 'houseDetail',
    component: () => import('../views/HouseDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
import { createRouter, createWebHashHistory } from 'vue-router'

<<<<<<< HEAD
const routes =[
  { 
    path: '/',
    component:() => import('../views/Home.vue'),
    children: [
      {
        path: "/",
        redirect: "/index"
      },
      {
        path: "/index",
        component: () => import("../Home/Index.vue"),
        meta: { requieAlive: true }
      }
    ]
  },
  { path: '/acessalbum',
    component:() => import('../views/AcessAlbum.vue')
  },
  { path: '/findditail',
    component:() => import('../views/FindDitail.vue')
  },
  { path: '/houseditail',
    component:() => import('../views/HouseDitail.vue')
  },
  { path: '/mouse',
    component:() => import('../views/Mouse.vue')
  },
  { path: '/photograph',
    component:() => import('../views/Photograph.vue')
  },
  { path: '/:catchAll(.*)',
    component:() => import('../views/Photograph.vue')
=======
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
>>>>>>> zz
  }
]

const router = createRouter({
<<<<<<< HEAD

=======
>>>>>>> zz
  history: createWebHashHistory(),
  routes,
})

<<<<<<< HEAD
// router.beforeEach(async (to,form) =>{
//   return await fn()
// })

// function fn() {
//   setTimeout(() => {
//     return false
//   },1000)
// }

export default router
=======
export default router;
>>>>>>> zz

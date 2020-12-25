import { createRouter, createWebHashHistory } from 'vue-router'

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
      },
      {
        path: "/collect",
        component: () => import("../views/Collect.vue"),
        meta: { requieAlive: true }
      },
      { 
        path: "/cart",
        component: () => import("../views/Cart.vue"),
        meta: { requieAlive: true }
      },
      {
        path: "/news",
        component: () => import("../views/News.vue"),
        meta: { requieAlive: true }
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue"),
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
  { path: '/housedetail',
    component:() => import('../views/HouseDetail.vue')
  },
  { path: '/mouse',
    component:() => import('../views/Mouse.vue')
  },
  { path: '/photograph',
    component:() => import('../views/Photograph.vue')
  },
  {
    path: '/indexdetail',
    component: () => import('../views/IndexDetail.vue')
  },
  { path: '/:catchAll(.*)',
    component:() => import('../views/Photograph.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// router.beforeEach(async (to,form) =>{
//   return await fn()
// })

// function fn() {
//   setTimeout(() => {
//     return false
//   },1000)
// }

export default router

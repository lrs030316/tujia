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
        path: "/Country",
        component: () => import("../views/Collect/collectList/Country.vue")
      },
      {
        path: "/Calendar",
        component: () => import("../views/Collect/collectList/Calendar.vue")
      },
      {
        path: "/collect",
        component: () => import('../views/Collect/index.vue'),
        redirect: "/enshrine",
        children: [
          {
            path: "/enshrine",
            component: () => import('../views/Collect/headcollect.vue'),
            redirect: "/house",
            children: [
              {
                path: "/house",
                component: () => import('../views/Collect/collectList/house.vue')
              },
              {
                path: "/landlord",
                component: () => import('../views/Collect/collectList/landlord.vue')
              },
              {
                path: "/ranking",
                component: () => import('../views/Collect/collectList/ranking.vue')
              },
              {
                path: "/find",
                component: () => import('../views/Collect/collectList/find.vue')
              },
            ]
          },
          {
            path: "/browse",
            component: () => import('../views/Collect/headbrowse.vue'),
          }
        ]
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
  },
  {
    path: '/login',
    component:() => import('../views/Login.vue')
  },
  {
    path: '/register',
    component:() => import('../views/Register.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
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



// {
      //    path: '/mycollect',
      //    component: () => import('../Collect/MyCollect/MyCollect.vue'),
      //   children:[
      //     {
            
      //       children: [
      //         {
      //           path: '/housing',
      //           component: () => import('../Collect/MyCollect/Housing.vue')
      //         },
      //         {
      //           path: '/landlord',
      //           component: () => import('../Collect/MyCollect/Landlord.vue')
      //         },
      //         {
      //           path: '/list',
      //           component: () => import('../Collect/MyCollect/List.vue')
      //         },
      //         {
      //           path: '/found',
      //           component: () => import('../Collect/MyCollect/Found.vue')
      //         }
      //       ]
      //     },
      //     {
      //       path: '/history',
      //       component: () => import('../Collect/History/History.vue')
      //     }
      //   ]
      // },

import { createRouter, createWebHashHistory } from 'vue-router'



const router =[
  { 
    path: '/',
    component:() => import('../views/Home.vue')
     
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
]

const router = createRouter({

  history:createWebHashHistory(),
  routes,
})

router.beforeEach(async (to,form) =>{
  return await fn()
})

function fn() {
  setTimeout(() => {
    return false
  },1000)
}

export default router

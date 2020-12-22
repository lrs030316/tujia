import { createRouter, createWebHashHistory } from 'vue-router'



const router =[
  { 
    path: '/',
    component:() => import('../components/Index.vue') 
  },
  { path: '/about',
  component:() => import('../components/About.vue') 
  },
  {
    path:'/detail/:id',
    component:() => import('../components/About.vue'),
    props:true
  }
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

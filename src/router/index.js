import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/Login'
import Home from '@/components/home/home'
import Model from '@/components/model/Model'
import ModelAdd from '@/components/model-add/ModelAdd'
import Roles from '@/components/roles'
import Categories from '@/components/categories'
// import Goods from '@/components/goods'
// import GoodsAdd from '@/components/goods-add'

// 演示第三方包与Vue的配合使用
// import Echarts from '@/components/vendors/echarts'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    // {
    //   path: '/login',
    //   component: Login
    // },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/model',
          component: Model
        },
        {
          path: '/model-add',
          component: ModelAdd
        },
        {
          path: '/roles',
          component: Roles
        },
        {
          path: '/categories',
          component: Categories
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     return next()
//   }

//   // 校验登录
//   const token = localStorage.getItem('token')
//   if (!token) {
//     return next('/login')
//   }

//   next()
// })

export default router

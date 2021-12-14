import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex-test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/vuex',
        name: 'Vuextest',
        meta: {
          title: '角色权限管理'
        },
        component: Vuex
      },
      {
        path: '/axios',
        name: 'AxiosTest',
        meta: {
          title: '用户信息管理'
        },
        component: () => import('@/views/axios-test.vue') // 懒加载组件
      },
      {
        path: '/notfound',
        name: 'NotFound',
        meta: {
          title: '404'
        },
        component: () => import('@/views/not-found.vue') // 懒加载组件
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title}`
//   const role = localStorage.getItem('ms_username')
//   if (!role && to.path !== '/login') {
//     next('/login')
//   } else if (to.meta.permission) {
//     console.log('路由首位')
//     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//     // eslint-disable-next-line no-unused-expressions
//     role === 'admin' ? next() : next('/vuex')
//   } else {
//     next()
//   }
// })
export default router

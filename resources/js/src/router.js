
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '',
        component: () => import('./layouts/main/Main.vue'),
        children: [
          {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
          },
          {
            path: '/client',
            name: 'Client',
            component: () => import('./views/Client.vue'),
          },
          {
            path: '/account',
            name: 'account',
            component: () => import('./views/Account.vue'),
          },
        ],
      },
      {
        path: '',
        component: () => import('@/layouts/full-page/FullPage.vue'),
        children: [
          {
            path: '/login',
            name: 'pageLogin',
            component: () => import('@/views/pages/Login.vue')
          },
          {
            path: '/pages/error-404',
            name: 'pageError404',
            component: () => import('@/views/pages/Error404.vue')
          },
        ]
      },
      // Redirect to 404 page, if no match found
      {
        path: '*',
        redirect: '/pages/error-404'
      }
    ],
})

export default router

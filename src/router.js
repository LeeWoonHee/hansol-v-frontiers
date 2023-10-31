/*=========================================================================================
 File Name: router.js
 Description: Routes for vue-router. Lazy loading is enabled.
 Object Strucutre:
 path => router path
 name => router name
 component(lazy loading) => component to load
 meta : {
 rule => which user can have access (ACL)
 breadcrumb => Add breadcrumb to specific page
 pageTitle => Display title besides breadcrumb
 }
 ----------------------------------------------------------------------------------------
 Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
 Author: Pixinvent
 Author URL: http://www.themeforest.net/user/pixinvent
 ==========================================================================================*/

import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/pages/index.vue'),
      meta: {
        rule: 'editor'
      }
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('@/views/pages/programs/index.vue'),
      // component: () => import('@/views/pages/metoring/List.vue'),
      // component: () => import('@/views/pages/metoring/Mentor.vue'),
      meta: {
        rule: 'editor'
      }
    },
    {
      path: '/mentoring',
      name: 'mentoring',
      component: () => import('@/views/pages/metoring/List.vue'),
      // component: () => import('@/views/pages/metoring/Mentor.vue'),
      meta: {
        rule: 'editor',
        authRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/pages/login.vue'),
      meta: {
        rule: 'editor'
      }
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('@/views/pages/signup.vue'),
      meta: {
        rule: 'editor'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/pages/news/index.vue'),
      meta: {
        rule: 'editor'
      }
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('@/views/pages/programs/index.vue'),
      meta: {
        rule: 'editor'
      },
      props: true
    },
    {
      path: '/callback/kakao',
      name: 'callback-kakao',
      component: () => import('@/views/pages/callback/Kakao.vue'),
      meta: {
        rule: 'editor'
      },
      props: true
    },
    {
      path: '/my-page',
      name: 'my-page',
      component: () => import('@/views/pages/myPage.vue'),
      meta: {
        rule: 'editor',
        authRequired: true
      },
      props: true
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/pages/passwordFinder.vue'),
      // component: () => import('@/views/pages/myPage.vue'),
      meta: {
        rule: 'editor'
      },
      props: true
    },
    {
      path: '/link/:key/:token',
      name: 'token-link',
      component: () => import('@/views/pages/tokenLink.vue'),
      meta: {
        rule: 'editor'
      },
      props: true
    },
    // {
    //   path     : 'error-500',
    //   name     : 'error500',
    //   component: () => import('@/views/vuexy/pages/error500.vue '),
    // },
    // {
    //   path     : 'error-404',
    //   name     : 'error404',
    //   component: () => import('@/views/vuexy/pages/error404.vue '),
    // },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '@/views/vuexy/pages/error404.vue',
    }
  ]
})

router.afterEach((to, from) => {
})

router.beforeEach((to, from, next) => {
  Vue.analytics.fbq.event('track', 'PageView')
  document.getElementById('preloader').style.display = 'block'
  if (
    to.path === '/' ||
    to.path === '/pages/error-404' ||
    to.path === '/pages/error-500' ||
    to.path === '/callback' ||
    to.path === '/pages/comingsoon'
  ) {
    next()
  } else if ((to.meta.authRequired || to.meta.auth) && !Store.getters['auth/isAuth']) {
    next({path: '/login', query: {to: to.path}})
  } else if (Store.getters['auth/isAuth'] && Store.state.auth.user && !Store.state.auth.user.contact && to.name !== 'my-page') {
    next({path: '/my-page', query: {noti: '전화번호 정보는 필수 입력 값 입니다.'}})
  } else {
    next()
  }
})

export default router

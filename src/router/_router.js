import Vue from 'vue'
import Router from 'vue-router'

import home from './home'
import styleExamples from './styleExamples'
import vueExp from './vueExp'
import exps from './exps'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/books/:bookname?/:articlename?',
    component: () => import('../views/books/books.vue')
  },
  {
    path: '/secret',
    name: 'secret',
    component: () => import(/* webpackChunkName: "about" */ '../views/secret.vue')
  },
  {
    path: '/my-music',
    name: 'myMusic',
    component: () => import('../views/my-music/my-music.vue')
  },
  {
    path: '/test-1',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/test-1.vue')
  },
  {
    path: '/test-2',
    component: () => import(/* webpackChunkName: "about" */ '../views/test-2.vue')
  },
  {
    path: '/code-mirror',
    component: () => import(/* webpackChunkName: "about" */ '../views/tools/code-mirror.vue')
  },
  {
    path: '/highlight-js',
    component: () => import(/* webpackChunkName: "about" */ '../views/tools/highlight-js.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/wechat',
    name: 'wechat',
    component: () => import('../views/wechat/wechat.vue')
  },
  {
    path: '/restful',
    name: 'restful',
    component: () => import('../views/restful/restful.vue')
  },
  {
    path: '/meeting-room',
    name: 'meetingRoom',
    component: () => import('../views/meeting-room/meeting-room.vue')
  }
].concat(home).concat(styleExamples).concat(vueExp).concat(exps)

export default new Router({
  routes
})

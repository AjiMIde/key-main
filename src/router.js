import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test-1',
      name: 'test',
      component: () => import(/* webpackChunkName: "about" */ './views/test-1.vue')
    },
    {
      path: '/code-mirror',
      component: () => import(/* webpackChunkName: "about" */ './views/tools/code-mirror.vue')
    },
    {
      path: '/highlight-js',
      component: () => import(/* webpackChunkName: "about" */ './views/tools/highlight-js.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

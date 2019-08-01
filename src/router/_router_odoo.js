import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('../views/meeting-room/meeting-room.vue')
  },
  {
    path: '*',
    component: () => import('../views/meeting-room/meeting-room.vue')
  }
]

export default new Router({
  routes
})

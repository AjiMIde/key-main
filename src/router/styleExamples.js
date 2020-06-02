const p = '/styleExamples/'
export default [
  {
    path: p + 'flex-layout',
    component: () => import('../views/styleExamples/flex-layout.vue')
  },
  {
    path: p + 'exp',
    component: () => import('../views/styleExamples/exp.vue')
  },
  {
    path: p + 'exp2',
    component: () => import('../views/styleExamples/exp2.vue')
  },
  {
    path: p + 'exp3',
    component: () => import('../views/styleExamples/exp3.vue')
  },
  {
    path: p + 'waterfall',
    component: () => import('../views/styleExamples/waterfall.vue')
  }, {
    path: p + '2020-02-25-Neumorphism-Ui-Design',
    component: () => import('../views/styleExamples/2020-02-25-Neumorphism-Ui-Design.vue')
  }, {
    path: p + '20200402-BounceJs',
    component: () => import('../views/styleExamples/20200402-BounceJs.vue')
  }]

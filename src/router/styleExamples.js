const p = '/styleExamples/'
export default [{
  path: p + 'flex-layout',
  component: () => import('../views/styleExamples/flex-layout.vue')
}, {
  path: p + 'exp',
  component: () => import('../views/styleExamples/exp.vue')
},  {
  path: p + 'exp2',
  component: () => import('../views/styleExamples/exp2.vue')

}, {
  path: p + 'waterfall',
  component: () => import('../views/styleExamples/waterfall.vue')
}]

import Vue from 'vue'
import App from './App.vue'
import router from './router/_router'
import dialogPlugin from 'bee-mui/src/libs/beePlugin/dialogPlugin'
import setHeaderScriptStylePlugin from './libs/pluginSetHeaderScriptAndStyle'


// import router from './router/_router_odoo'
import store from './store'
import axios from 'axios'
import plugin from './plugin'

import 'element-ui/lib/theme-chalk/index.css'

window.Vue = Vue

Vue.config.productionTip = false

Vue.prototype.axios = axios

Vue.use(dialogPlugin)

Vue.use(setHeaderScriptStylePlugin)

Vue.use(plugin)

window.vue = Vue

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

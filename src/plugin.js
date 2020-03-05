import httpR from './libs/httpR'

export default {
  install (Vue, option) {
    Vue.prototype.httpR = httpR

    Vue.mixin({
      data () {
        return {}
      },
      methods: {},
      mounted () {
      },
      components: {}
    })
  }
}

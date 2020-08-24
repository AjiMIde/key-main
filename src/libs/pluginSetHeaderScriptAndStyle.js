/**
 * 1. 提供 http 请求 plugin
 * 2. 提供 token 的选取与 token选择后的回调
 * 3. 提供跳转登录的方法
 */

export default {
  install (Vue, option) {
    Vue.prototype.loadScript = (src = '', cb = () => {}) => {
      const head = document.getElementsByTagName('head')[0]
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        console.log('.....onlo')
        cb && typeof cb === 'function' && cb()
      }
      head.appendChild(script)
    }
    Vue.prototype.loadCss = (src = '', cb = () => {}) => {
      const head = document.getElementsByTagName('head')[0]
      const link = document.createElement('link')
      link.setAttribute('rel', 'stylesheet')
      link.setAttribute('type', 'text/css')
      link.href = src
      link.onload = () => {
        cb && typeof cb === 'function' && cb()
      }
      head.appendChild(script)
    }
    Vue.prototype.loadStyle = Vue.prototype.loadCss

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

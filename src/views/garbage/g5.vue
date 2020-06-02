<template>
  <div class="g5">
    <h5>这是一个h5页面</h5>
    <h6>所在停车场--红富新停车场</h6>
    <h6>停车时间----1小时</h6>
    <h6>停车费用----18元</h6>
    <h6><button @click="pay">支付</button></h6>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data () {
    return {}
  },
  methods: {
    dynamicLoadJs (src = '', callback) {
      const script = document.createElement('script')
      const head = document.getElementsByTagName('head')[0]
      script.src = src
      script.charset = 'utf-8'
      head.appendChild(script)
      script.onload = () => {
        callback && typeof callback === 'function' && callback()
      }
    },
    pay () {
      if (window.wx && window.wx.miniProgram) {
        const miniP = window.wx.miniProgram
        miniP.getEnv(res => {
          miniP.postMessage({
            data: JSON.stringify({
              area: '红富兴',
              time: 60,
              cost: 18,
              orderId: '21321561654'
            })
          })
          miniP.redirectTo({
            url: '/pages/debug/debug3'
          })
        })
      }
    }
  },
  created () {
  },
  mounted () {
    this.dynamicLoadJs('https://res.wx.qq.com/open/js/jweixin-1.3.2.js', () => {

    })
  }
}
</script>

<style lang="scss">
</style>

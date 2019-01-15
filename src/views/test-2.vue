<template>
  <div class="test-2">
  </div>
</template>

<script>
// import qs from 'qs'
// import moment from 'moment'

export default {
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted () {
    console.log(window.m = this)
    this.axios.get('https://github.com/AjiMIde/company-summary/blob/master/580-wechat-pay/0.wechat-login-logic.md').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss">
</style>

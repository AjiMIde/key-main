<template>
  <div class="g1">
    <div class="div-1" id="div1"></div>
  </div>
</template>

<script>
import wechat from './wechat'

export default {
  name: '',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    add () {
      wechat.num += 1
    },
    jump () {
      this.$router.push({
        path: '/garbage/g2'
      })
    }
  },
  mounted () {
    window.g1 = this
    const div1 = document.getElementById('div1')
    console.log(div1)
  }
}
</script>

<style lang="scss">
  .g1 {
    padding: 50px;
    .div-1 {
      width: 100%;
      height: 1px;
      background-color: red;
      transform: scale(0.5);
    }
  }
</style>

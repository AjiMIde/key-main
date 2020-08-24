<template>
  <div></div>
</template>

<script>
import wechat from './wechat'

export default {
  name: 'g2',
  data () {
    return {}
  },
  methods: {
  },
  mounted () {
    wechat.listen('info', (person, msg, time) => {
      console.log(person, msg, time)
    })

    wechat.one('info', (person, msg, time) => {
      console.log(msg, time)
    })

    wechat.trigger('info', 'curry', 'hello', '2011-11-11 11:11:11')
    window.wt = wechat
  }
}
</script>

<style>

</style>

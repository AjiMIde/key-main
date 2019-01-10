<template>
  <div class="test-2">
  </div>
</template>

<script>
// import qs from 'qs'
import moment from 'moment'

export default {
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted () {
    console.log(window.m = this)
    console.log(window.mt = moment)
    const m = moment
    const l = console.log
    m.locale('zh-cn')
    l(m().format('YYYY年MM月DD日 hh时mm分ss秒'))
    l(m().format('dddd MMM Do YY'))
    l(m().format())
    l('------')
    l(moment('20100101', 'YYYYMMDD').fromNow())
    l(m().startOf('day').fromNow())
  }
}
</script>

<style lang="scss">
</style>

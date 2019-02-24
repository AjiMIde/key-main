<template>
  <div class="test-2">
    <time-clock></time-clock>
  </div>
</template>

<script>
// import qs from 'qs'
import TimeClock from './components/TimeClock'

export default {
  components: {
    TimeClock
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {
    console.log(window.t2 = this)
    window.AMap.plugin('AMap.Weather', () => {
      const weather = new window.AMap.Weather()

      weather.getLive('广州市', function (err, data) {
        console.log(err, data)
      })
    })
  }
}
</script>

<style lang="scss">
</style>

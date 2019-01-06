<template>
  <div class="time-to-rest">
    <div class="time-clock">{{time}}</div>
  </div>
</template>

<script>
export default {
  name: 'TimeToRest',
  data () {
    return {
      time: ''
    }
  },
  methods: {
    addZero (str) {
      str = '' + str
      if (str.length >= 2) {
        return str
      } else {
        return '0' + str
      }
    }
  },
  mounted () {
    window.setInterval(() => {
      const date = new Date()
      this.time = this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes()) +
        ':' + this.addZero(date.getSeconds())

    }, 1000)
  }
}
</script>

<style>
  .time-to-rest {

  }
</style>

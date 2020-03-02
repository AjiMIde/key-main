<template>
  <div></div>
</template>

<script>
export default {
  name: 'g2',
  data () {
    this.url = 'http://127.0.0.1:7890'
    return {}
  },
  methods: {
    send (content = 'working') {
      this.axios.post(this.url, content).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        // handle error
        console.log(error)
      }).then(function () {
        // always executed
      })
    },
    get (param = '') {
      this.axios.get(this.url + param).then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    window.t = this
  }
}
</script>

<style>

</style>

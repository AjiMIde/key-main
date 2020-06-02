<template>
  <div class="g4">
    ??
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: '',
  components: {},
  data () {
    return {}
  },
  methods: {
    getUserA () {
      return axios({
        method: 'get',
        url: '/api'
      }).then(res => console.log(res))
    }
  },
  created () {
  },
  mounted () {
    this.getUserA()
  }
}
</script>

<style lang="scss">
</style>

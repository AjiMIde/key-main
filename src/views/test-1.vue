<template>
  <div class="test-1">
    <div v-html="xx"></div>
  </div>
</template>

<script>
import xx from './xx.md'

export default {
  name: 'test',
  components: {
  },
  data () {
    return {
      xx
    }
  },
  methods: {
  },
  mounted () {
    console.log(window.m = this)

    this.axios.get('https://www.teamviewer.com/cn').then(res => {
      console.log(res)
    }).catch(error => {
      console.error(error)
    }).then(() => {
      // always executed
    })
  }
}
</script>

<style lang="scss">
  .test {
  }
</style>

<template>
  <div class="test-1">
  </div>
</template>

<script>

export default {
  name: 'test',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
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

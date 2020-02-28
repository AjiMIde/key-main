<template>
  <div class="comp-inject">
    {{fatherId}}
  </div>
</template>

<script>
export default {
  name: '',
  components: { },
  inject: {
    fatherId: {
      from: 'id',
      default: '111'
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>

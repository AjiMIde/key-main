<template>
  <div class="comp-provide">
    <comp-inject></comp-inject>
  </div>
</template>

<script>
import CompInject from './comp-inject'

export default {
  name: '',
  components: { CompInject },
  provide: { id: '123' },
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

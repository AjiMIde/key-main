<template>
  <div class="test-2">

  </div>
</template>

<script>
import Obj from './PlusNum'
const object = new Obj()
export default {
  name: '',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    console.log(object.name)
    object.name = 'zzz'
    console.log(window.aji)
  }
}
</script>

<style lang="scss">
</style>

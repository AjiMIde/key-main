<template>
  <div class="comp-exp">
    <comp-shi>
      <template #title>独坐敬亭山</template>
      <template #author>李太白</template>
      <template #default="theDefault">
        众鸟高飞尽，孤云独去闲。相看两不厌，只有敬亭山。
        {{theDefault.info.type}}
      </template>
    </comp-shi>
  </div>
</template>

<script>
import CompShi from './comp-shi'

export default {
  name: '',
  components: {
    CompShi
  },
  provide: {
    id: '123456'
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

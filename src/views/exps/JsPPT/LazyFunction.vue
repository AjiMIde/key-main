<template>
  <div class="lazy-function">

    <label for="">省份</label>
    <text>{{province}}</text>



  </div>
</template>


<script>

const http = {
  get (param) {
    if (param) {
      return [{name: '车'}, {name: '马'}, {name: '河'}]
    } else {
      return []
    }
  }
}
export default {
  name: '',
  components: {},
  data () {
    return {
      province: '',

      searchContent: '',
      list: [],
      isDirty: false
    }
  },
  methods: {
    search () {
      this.isDirty = true
      this.list = http.get(this.searchContent)
    }
  },
  mounted () {
  }
}


</script>

<style lang="scss">
  .lazy-function {
    text-align: center;
    input, div {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
</style>
